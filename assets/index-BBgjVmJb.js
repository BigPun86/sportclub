(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const b of g.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function c(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function o(d){if(d.ep)return;d.ep=!0;const g=c(d);fetch(d.href,g)}})();function Xb(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Uo={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function Zb(){if($g)return gi;$g=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(o,d,g){var b=null;if(g!==void 0&&(b=""+g),d.key!==void 0&&(b=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:l,type:o,key:b,ref:d!==void 0?d:null,props:g}}return gi.Fragment=s,gi.jsx=c,gi.jsxs=c,gi}var Wg;function Kb(){return Wg||(Wg=1,Uo.exports=Zb()),Uo.exports}var u=Kb(),Ho={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Jb(){if(Fg)return ie;Fg=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function D(v){return v===null||typeof v!="object"?null:(v=R&&v[R]||v["@@iterator"],typeof v=="function"?v:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,G={};function Q(v,N,Y){this.props=v,this.context=N,this.refs=G,this.updater=Y||H}Q.prototype.isReactComponent={},Q.prototype.setState=function(v,N){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,N,"setState")},Q.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function U(){}U.prototype=Q.prototype;function $(v,N,Y){this.props=v,this.context=N,this.refs=G,this.updater=Y||H}var X=$.prototype=new U;X.constructor=$,L(X,Q.prototype),X.isPureReactComponent=!0;var ae=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(v,N,Y,V,F,ce){return Y=ce.ref,{$$typeof:l,type:v,key:N,ref:Y!==void 0?Y:null,props:ce}}function Ee(v,N){return W(v.type,N,void 0,void 0,void 0,v.props)}function _e(v){return typeof v=="object"&&v!==null&&v.$$typeof===l}function at(v){var N={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Y){return N[Y]})}var it=/\/+/g;function Ye(v,N){return typeof v=="object"&&v!==null&&v.key!=null?at(""+v.key):N.toString(36)}function Zt(){}function Kt(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Zt,Zt):(v.status="pending",v.then(function(N){v.status==="pending"&&(v.status="fulfilled",v.value=N)},function(N){v.status==="pending"&&(v.status="rejected",v.reason=N)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function qe(v,N,Y,V,F){var ce=typeof v;(ce==="undefined"||ce==="boolean")&&(v=null);var ee=!1;if(v===null)ee=!0;else switch(ce){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(v.$$typeof){case l:case s:ee=!0;break;case E:return ee=v._init,qe(ee(v._payload),N,Y,V,F)}}if(ee)return F=F(v),ee=V===""?"."+Ye(v,0):V,ae(F)?(Y="",ee!=null&&(Y=ee.replace(it,"$&/")+"/"),qe(F,N,Y,"",function(Pe){return Pe})):F!=null&&(_e(F)&&(F=Ee(F,Y+(F.key==null||v&&v.key===F.key?"":(""+F.key).replace(it,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(v))for(var pe=0;pe<v.length;pe++)V=v[pe],ce=Ve+Ye(V,pe),ee+=qe(V,N,Y,ce,F);else if(pe=D(v),typeof pe=="function")for(v=pe.call(v),pe=0;!(V=v.next()).done;)V=V.value,ce=Ve+Ye(V,pe++),ee+=qe(V,N,Y,ce,F);else if(ce==="object"){if(typeof v.then=="function")return qe(Kt(v),N,Y,V,F);throw N=String(v),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function C(v,N,Y){if(v==null)return v;var V=[],F=0;return qe(v,V,"","",function(ce){return N.call(Y,ce,F++)}),V}function q(v){if(v._status===-1){var N=v._result;N=N(),N.then(function(Y){(v._status===0||v._status===-1)&&(v._status=1,v._result=Y)},function(Y){(v._status===0||v._status===-1)&&(v._status=2,v._result=Y)}),v._status===-1&&(v._status=0,v._result=N)}if(v._status===1)return v._result.default;throw v._result}var P=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function oe(){}return ie.Children={map:C,forEach:function(v,N,Y){C(v,function(){N.apply(this,arguments)},Y)},count:function(v){var N=0;return C(v,function(){N++}),N},toArray:function(v){return C(v,function(N){return N})||[]},only:function(v){if(!_e(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ie.Component=Q,ie.Fragment=c,ie.Profiler=d,ie.PureComponent=$,ie.StrictMode=o,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(v){return Z.H.useMemoCache(v)}},ie.cache=function(v){return function(){return v.apply(null,arguments)}},ie.cloneElement=function(v,N,Y){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var V=L({},v.props),F=v.key,ce=void 0;if(N!=null)for(ee in N.ref!==void 0&&(ce=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(v.type,F,void 0,void 0,ce,V)},ie.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:g,_context:v},v},ie.createElement=function(v,N,Y){var V,F={},ce=null;if(N!=null)for(V in N.key!==void 0&&(ce=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(v&&v.defaultProps)for(V in ee=v.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(v,ce,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(v){return{$$typeof:j,render:v}},ie.isValidElement=_e,ie.lazy=function(v){return{$$typeof:E,_payload:{_status:-1,_result:v},_init:q}},ie.memo=function(v,N){return{$$typeof:p,type:v,compare:N===void 0?null:N}},ie.startTransition=function(v){var N=Z.T,Y={};Z.T=Y;try{var V=v(),F=Z.S;F!==null&&F(Y,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(oe,P)}catch(ce){P(ce)}finally{Z.T=N}},ie.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ie.use=function(v){return Z.H.use(v)},ie.useActionState=function(v,N,Y){return Z.H.useActionState(v,N,Y)},ie.useCallback=function(v,N){return Z.H.useCallback(v,N)},ie.useContext=function(v){return Z.H.useContext(v)},ie.useDebugValue=function(){},ie.useDeferredValue=function(v,N){return Z.H.useDeferredValue(v,N)},ie.useEffect=function(v,N,Y){var V=Z.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(v,N)},ie.useId=function(){return Z.H.useId()},ie.useImperativeHandle=function(v,N,Y){return Z.H.useImperativeHandle(v,N,Y)},ie.useInsertionEffect=function(v,N){return Z.H.useInsertionEffect(v,N)},ie.useLayoutEffect=function(v,N){return Z.H.useLayoutEffect(v,N)},ie.useMemo=function(v,N){return Z.H.useMemo(v,N)},ie.useOptimistic=function(v,N){return Z.H.useOptimistic(v,N)},ie.useReducer=function(v,N,Y){return Z.H.useReducer(v,N,Y)},ie.useRef=function(v){return Z.H.useRef(v)},ie.useState=function(v){return Z.H.useState(v)},ie.useSyncExternalStore=function(v,N,Y){return Z.H.useSyncExternalStore(v,N,Y)},ie.useTransition=function(){return Z.H.useTransition()},ie.version="19.1.0",ie}var Pg;function Yc(){return Pg||(Pg=1,Ho.exports=Jb()),Ho.exports}var M=Yc();const sa=Xb(M);var Lo={exports:{}},mi={},Go={exports:{}},Yo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function $b(){return Ig||(Ig=1,function(l){function s(C,q){var P=C.length;C.push(q);e:for(;0<P;){var oe=P-1>>>1,v=C[oe];if(0<d(v,q))C[oe]=q,C[P]=v,P=oe;else break e}}function c(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var q=C[0],P=C.pop();if(P!==q){C[0]=P;e:for(var oe=0,v=C.length,N=v>>>1;oe<N;){var Y=2*(oe+1)-1,V=C[Y],F=Y+1,ce=C[F];if(0>d(V,P))F<v&&0>d(ce,V)?(C[oe]=ce,C[F]=P,oe=F):(C[oe]=V,C[Y]=P,oe=Y);else if(F<v&&0>d(ce,P))C[oe]=ce,C[F]=P,oe=F;else break e}}return q}function d(C,q){var P=C.sortIndex-q.sortIndex;return P!==0?P:C.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var b=Date,j=b.now();l.unstable_now=function(){return b.now()-j}}var y=[],p=[],E=1,R=null,D=3,H=!1,L=!1,G=!1,Q=!1,U=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ae(C){for(var q=c(p);q!==null;){if(q.callback===null)o(p);else if(q.startTime<=C)o(p),q.sortIndex=q.expirationTime,s(y,q);else break;q=c(p)}}function Z(C){if(G=!1,ae(C),!L)if(c(y)!==null)L=!0,le||(le=!0,Ye());else{var q=c(p);q!==null&&qe(Z,q.startTime-C)}}var le=!1,W=-1,Ee=5,_e=-1;function at(){return Q?!0:!(l.unstable_now()-_e<Ee)}function it(){if(Q=!1,le){var C=l.unstable_now();_e=C;var q=!0;try{e:{L=!1,G&&(G=!1,$(W),W=-1),H=!0;var P=D;try{t:{for(ae(C),R=c(y);R!==null&&!(R.expirationTime>C&&at());){var oe=R.callback;if(typeof oe=="function"){R.callback=null,D=R.priorityLevel;var v=oe(R.expirationTime<=C);if(C=l.unstable_now(),typeof v=="function"){R.callback=v,ae(C),q=!0;break t}R===c(y)&&o(y),ae(C)}else o(y);R=c(y)}if(R!==null)q=!0;else{var N=c(p);N!==null&&qe(Z,N.startTime-C),q=!1}}break e}finally{R=null,D=P,H=!1}q=void 0}}finally{q?Ye():le=!1}}}var Ye;if(typeof X=="function")Ye=function(){X(it)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Kt=Zt.port2;Zt.port1.onmessage=it,Ye=function(){Kt.postMessage(null)}}else Ye=function(){U(it,0)};function qe(C,q){W=U(function(){C(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(C){C.callback=null},l.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<C?Math.floor(1e3/C):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(C){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var P=D;D=q;try{return C()}finally{D=P}},l.unstable_requestPaint=function(){Q=!0},l.unstable_runWithPriority=function(C,q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=D;D=C;try{return q()}finally{D=P}},l.unstable_scheduleCallback=function(C,q,P){var oe=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?oe+P:oe):P=oe,C){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=P+v,C={id:E++,callback:q,priorityLevel:C,startTime:P,expirationTime:v,sortIndex:-1},P>oe?(C.sortIndex=P,s(p,C),c(y)===null&&C===c(p)&&(G?($(W),W=-1):G=!0,qe(Z,P-oe))):(C.sortIndex=v,s(y,C),L||H||(L=!0,le||(le=!0,Ye()))),C},l.unstable_shouldYield=at,l.unstable_wrapCallback=function(C){var q=D;return function(){var P=D;D=q;try{return C.apply(this,arguments)}finally{D=P}}}}(Yo)),Yo}var em;function Wb(){return em||(em=1,Go.exports=$b()),Go.exports}var qo={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Fb(){if(tm)return tt;tm=1;var l=Yc();function s(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(y,p,E){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:y,containerInfo:p,implementation:E}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,tt.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return g(y,p,null,E)},tt.flushSync=function(y){var p=b.T,E=o.p;try{if(b.T=null,o.p=2,y)return y()}finally{b.T=p,o.p=E,o.d.f()}},tt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},tt.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},tt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,R=j(E,p.crossOrigin),D=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:R,integrity:D,fetchPriority:H}):E==="script"&&o.d.X(y,{crossOrigin:R,integrity:D,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},tt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=j(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(y)},tt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,R=j(E,p.crossOrigin);o.d.L(y,E,{crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},tt.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=j(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(y)},tt.requestFormReset=function(y){o.d.r(y)},tt.unstable_batchedUpdates=function(y,p){return y(p)},tt.useFormState=function(y,p,E){return b.H.useFormState(y,p,E)},tt.useFormStatus=function(){return b.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var nm;function Pb(){if(nm)return qo.exports;nm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),qo.exports=Fb(),qo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function Ib(){if(am)return mi;am=1;var l=Wb(),s=Yc(),c=Pb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(g(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return j(i),e;if(r===a)return j(i),t;r=r.sibling}throw Error(o(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,h=i.child;h;){if(h===n){f=!0,n=i,a=r;break}if(h===a){f=!0,a=i,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=i;break}if(h===a){f=!0,a=r,n=i;break}h=h.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Zt=Symbol.for("react.client.reference");function Kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Q:return"Profiler";case G:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case X:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Kt(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return Kt(e(t))}catch{}}return null}var qe=Array.isArray,C=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},oe=[],v=-1;function N(e){return{current:e}}function Y(e){0>v||(e.current=oe[v],oe[v]=null,v--)}function V(e,t){v++,oe[v]=e.current,e.current=t}var F=N(null),ce=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(ce,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_g(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_g(t),e=zg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(F),V(F,e)}function Pe(){Y(F),Y(ce),Y(ee)}function Gn(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=zg(t,e.type);t!==n&&(V(ce,e),V(F,n))}function Jt(e){ce.current===e&&(Y(F),Y(ce)),Ve.current===e&&(Y(Ve),oi._currentValue=P)}var St=Object.prototype.hasOwnProperty,_u=l.unstable_scheduleCallback,zu=l.unstable_cancelCallback,_p=l.unstable_shouldYield,zp=l.unstable_requestPaint,Ht=l.unstable_now,wp=l.unstable_getCurrentPriorityLevel,nf=l.unstable_ImmediatePriority,af=l.unstable_UserBlockingPriority,wi=l.unstable_NormalPriority,Ep=l.unstable_LowPriority,lf=l.unstable_IdlePriority,Tp=l.log,Ap=l.unstable_setDisableYieldValue,bl=null,ft=null;function mn(e){if(typeof Tp=="function"&&Ap(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(bl,e)}catch{}}var dt=Math.clz32?Math.clz32:Dp,Rp=Math.log,Mp=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-(Rp(e)/Mp|0)|0}var Ei=256,Ti=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ai(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?i=Yn(a):(f&=h,f!==0?i=Yn(f):n||(n=h&~e,n!==0&&(i=Yn(n))))):(h=a&~r,h!==0?i=Yn(h):f!==0?i=Yn(f):n||(n=a&~e,n!==0&&(i=Yn(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(){var e=Ei;return Ei<<=1,(Ei&4194048)===0&&(Ei=256),e}function uf(){var e=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),e}function wu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Op(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,x=e.expirationTimes,w=e.hiddenUpdates;for(n=f&~n;0<n;){var O=31-dt(n),k=1<<O;h[O]=0,x[O]=-1;var T=w[O];if(T!==null)for(w[O]=null,O=0;O<T.length;O++){var A=T[O];A!==null&&(A.lane&=-536870913)}n&=~k}a!==0&&sf(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function sf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function of(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Eu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cf(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Vg(e.type))}function Bp(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var pn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+pn,rt="__reactProps$"+pn,fa="__reactContainer$"+pn,Au="__reactEvents$"+pn,kp="__reactListeners$"+pn,Np="__reactHandles$"+pn,ff="__reactResources$"+pn,vl="__reactMarker$"+pn;function Ru(e){delete e[Ie],delete e[rt],delete e[Au],delete e[kp],delete e[Np]}function da(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fa]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ag(e);e!==null;){if(n=e[Ie])return n;e=Ag(e)}return t}e=n,n=e.parentNode}return null}function ha(e){if(e=e[Ie]||e[fa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ga(e){var t=e[ff];return t||(t=e[ff]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[vl]=!0}var df=new Set,hf={};function qn(e,t){ma(e,t),ma(e+"Capture",t)}function ma(e,t){for(hf[e]=t,e=0;e<t.length;e++)df.add(t[e])}var Up=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gf={},mf={};function Hp(e){return St.call(mf,e)?!0:St.call(gf,e)?!1:Up.test(e)?mf[e]=!0:(gf[e]=!0,!1)}function Ri(e,t,n){if(Hp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Mi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function $t(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Mu,pf;function pa(e){if(Mu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mu=t&&t[1]||"",pf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mu+e+pf}var Du=!1;function Cu(e,t){if(!e||Du)return"";Du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(A){var T=A}Reflect.construct(e,[],k)}else{try{k.call()}catch(A){T=A}e.call(k.prototype)}}else{try{throw Error()}catch(A){T=A}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var x=f.split(`
`),w=h.split(`
`);for(i=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(a===x.length||i===w.length)for(a=x.length-1,i=w.length-1;1<=a&&0<=i&&x[a]!==w[i];)i--;for(;1<=a&&0<=i;a--,i--)if(x[a]!==w[i]){if(a!==1||i!==1)do if(a--,i--,0>i||x[a]!==w[i]){var O=`
`+x[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=i);break}}}finally{Du=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pa(n):""}function Lp(e){switch(e.tag){case 26:case 27:case 5:return pa(e.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 15:return Cu(e.type,!1);case 11:return Cu(e.type.render,!1);case 1:return Cu(e.type,!0);case 31:return pa("Activity");default:return""}}function bf(e){try{var t="";do t+=Lp(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gp(e){var t=xf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=Gp(e))}function yf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=xf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yp=/[\n"\\]/g;function _t(e){return e.replace(Yp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ou(e,t,n,a,i,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Bu(e,f,jt(t)):n!=null?Bu(e,f,jt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function vf(e,t,n,a,i,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Bu(e,t,n){t==="number"&&Ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ba(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sf(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function jf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(o(92));if(qe(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _f(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||qp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&_f(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&_f(e,r,t[r])}function ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return Qp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nu=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,va=null;function wf(e){var t=ha(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ou(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[rt]||null;if(!i)throw Error(o(90));Ou(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&yf(a)}break e;case"textarea":Sf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ba(e,!!n.multiple,t,!1)}}}var Hu=!1;function Ef(e,t,n){if(Hu)return e(t,n);Hu=!0;try{var a=e(t);return a}finally{if(Hu=!1,(ya!==null||va!==null)&&(xr(),ya&&(t=ya,e=va,va=ya=null,wf(t),e)))for(t=0;t<e.length;t++)wf(e[t])}}function jl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(Wt)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Lu=!1}var bn=null,Gu=null,Bi=null;function Tf(){if(Bi)return Bi;var e,t=Gu,n=t.length,a,i="value"in bn?bn.value:bn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return Bi=i.slice(e,1<a?1-a:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Af(){return!1}function ut(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ni:Af,this.isPropagationStopped=Af,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=ut(Vn),zl=E({},Vn,{view:0,detail:0}),Xp=ut(zl),Yu,qu,wl,Hi=E({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wl&&(wl&&e.type==="mousemove"?(Yu=e.screenX-wl.screenX,qu=e.screenY-wl.screenY):qu=Yu=0,wl=e),Yu)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),Rf=ut(Hi),Zp=E({},Hi,{dataTransfer:0}),Kp=ut(Zp),Jp=E({},zl,{relatedTarget:0}),Vu=ut(Jp),$p=E({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=ut($p),Fp=E({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=ut(Fp),Ip=E({},Vn,{data:0}),Mf=ut(Ip),e1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n1[e])?!!t[e]:!1}function Qu(){return a1}var l1=E({},zl,{key:function(e){if(e.key){var t=e1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),i1=ut(l1),r1=E({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=ut(r1),u1=E({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),s1=ut(u1),o1=E({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),c1=ut(o1),f1=E({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d1=ut(f1),h1=E({},Vn,{newState:0,oldState:0}),g1=ut(h1),m1=[9,13,27,32],Xu=Wt&&"CompositionEvent"in window,El=null;Wt&&"documentMode"in document&&(El=document.documentMode);var p1=Wt&&"TextEvent"in window&&!El,Cf=Wt&&(!Xu||El&&8<El&&11>=El),Of=" ",Bf=!1;function kf(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sa=!1;function b1(e,t){switch(e){case"compositionend":return Nf(t);case"keypress":return t.which!==32?null:(Bf=!0,Of);case"textInput":return e=t.data,e===Of&&Bf?null:e;default:return null}}function x1(e,t){if(Sa)return e==="compositionend"||!Xu&&kf(e,t)?(e=Tf(),Bi=Gu=bn=null,Sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cf&&t.locale!=="ko"?null:t.data;default:return null}}var y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y1[e.type]:t==="textarea"}function Hf(e,t,n,a){ya?va?va.push(a):va=[a]:ya=a,t=zr(t,"onChange"),0<t.length&&(n=new Ui("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Tl=null,Al=null;function v1(e){xg(e,0)}function Li(e){var t=Sl(e);if(yf(t))return e}function Lf(e,t){if(e==="change")return t}var Gf=!1;if(Wt){var Zu;if(Wt){var Ku="oninput"in document;if(!Ku){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),Ku=typeof Yf.oninput=="function"}Zu=Ku}else Zu=!1;Gf=Zu&&(!document.documentMode||9<document.documentMode)}function qf(){Tl&&(Tl.detachEvent("onpropertychange",Vf),Al=Tl=null)}function Vf(e){if(e.propertyName==="value"&&Li(Al)){var t=[];Hf(t,Al,e,Uu(e)),Ef(v1,t)}}function S1(e,t,n){e==="focusin"?(qf(),Tl=t,Al=n,Tl.attachEvent("onpropertychange",Vf)):e==="focusout"&&qf()}function j1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Al)}function _1(e,t){if(e==="click")return Li(t)}function z1(e,t){if(e==="input"||e==="change")return Li(t)}function w1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:w1;function Rl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!St.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Qf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xf(e,t){var n=Qf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qf(n)}}function Zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ci(e.document)}return t}function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var E1=Wt&&"documentMode"in document&&11>=document.documentMode,ja=null,$u=null,Ml=null,Wu=!1;function Jf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||ja==null||ja!==Ci(a)||(a=ja,"selectionStart"in a&&Ju(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ml&&Rl(Ml,a)||(Ml=a,a=zr($u,"onSelect"),0<a.length&&(t=new Ui("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ja)))}function Qn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _a={animationend:Qn("Animation","AnimationEnd"),animationiteration:Qn("Animation","AnimationIteration"),animationstart:Qn("Animation","AnimationStart"),transitionrun:Qn("Transition","TransitionRun"),transitionstart:Qn("Transition","TransitionStart"),transitioncancel:Qn("Transition","TransitionCancel"),transitionend:Qn("Transition","TransitionEnd")},Fu={},$f={};Wt&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function Xn(e){if(Fu[e])return Fu[e];if(!_a[e])return e;var t=_a[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $f)return Fu[e]=t[n];return e}var Wf=Xn("animationend"),Ff=Xn("animationiteration"),Pf=Xn("animationstart"),T1=Xn("transitionrun"),A1=Xn("transitionstart"),R1=Xn("transitioncancel"),If=Xn("transitionend"),ed=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ct(e,t){ed.set(e,t),qn(t,[e])}var td=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var n=td.get(e);return n!==void 0?n:(t={value:e,source:t,stack:bf(t)},td.set(e,t),t)}return{value:e,source:t,stack:bf(t)}}var wt=[],za=0,Iu=0;function Gi(){for(var e=za,t=Iu=za=0;t<e;){var n=wt[t];wt[t++]=null;var a=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var r=wt[t];if(wt[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&nd(n,i,r)}}function Yi(e,t,n,a){wt[za++]=e,wt[za++]=t,wt[za++]=n,wt[za++]=a,Iu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function es(e,t,n,a){return Yi(e,t,n,a),qi(e)}function wa(e,t){return Yi(e,null,null,t),qi(e)}function nd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-dt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function qi(e){if(50<ti)throw ti=0,ro=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ea={};function M1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,a){return new M1(e,t,n,a)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ad(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vi(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")ts(e)&&(f=1);else if(typeof e=="string")f=Cb(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=gt(31,n,t,i),e.elementType=_e,e.lanes=r,e;case L:return Zn(n.children,i,r,t);case G:f=8,i|=24;break;case Q:return e=gt(12,n,t,i|2),e.elementType=Q,e.lanes=r,e;case Z:return e=gt(13,n,t,i),e.elementType=Z,e.lanes=r,e;case le:return e=gt(19,n,t,i),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case X:f=10;break e;case $:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Ee:f=16,a=null;break e}f=29,n=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=gt(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Zn(e,t,n,a){return e=gt(7,e,a,t),e.lanes=n,e}function ns(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function as(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ta=[],Aa=0,Qi=null,Xi=0,Et=[],Tt=0,Kn=null,Pt=1,It="";function Jn(e,t){Ta[Aa++]=Xi,Ta[Aa++]=Qi,Qi=e,Xi=t}function ld(e,t,n){Et[Tt++]=Pt,Et[Tt++]=It,Et[Tt++]=Kn,Kn=e;var a=Pt;e=It;var i=32-dt(a)-1;a&=~(1<<i),n+=1;var r=32-dt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,Pt=1<<32-dt(t)+i|n<<i|a,It=r+e}else Pt=1<<r|n<<i|a,It=e}function ls(e){e.return!==null&&(Jn(e,1),ld(e,1,0))}function is(e){for(;e===Qi;)Qi=Ta[--Aa],Ta[Aa]=null,Xi=Ta[--Aa],Ta[Aa]=null;for(;e===Kn;)Kn=Et[--Tt],Et[Tt]=null,It=Et[--Tt],Et[Tt]=null,Pt=Et[--Tt],Et[Tt]=null}var lt=null,Ce=null,me=!1,$n=null,Lt=!1,rs=Error(o(519));function Wn(e){var t=Error(o(418,""));throw Ol(zt(t,e)),rs}function id(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[rt]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ai.length;n++)de(ai[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),vf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Di(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),jf(t,a.value,a.defaultValue,a.children),Di(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||jg(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=wr),t=!0):t=!1,t||Wn(e)}function rd(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:lt=lt.return}}function Dl(e){if(e!==lt)return!1;if(!me)return rd(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||_o(e.type,e.memoizedProps)),n=!n),n&&Ce&&Wn(e),rd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ce=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ce=null}}else t===27?(t=Ce,On(e.type)?(e=To,To=null,Ce=e):Ce=t):Ce=lt?Bt(e.stateNode.nextSibling):null;return!0}function Cl(){Ce=lt=null,me=!1}function ud(){var e=$n;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),$n=null),e}function Ol(e){$n===null?$n=[e]:$n.push(e)}var us=N(null),Fn=null,en=null;function xn(e,t,n){V(us,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=us.current,Y(us)}function ss(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function os(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var x=0;x<t.length;x++)if(h.context===t[x]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ss(r.return,n,e),a||(f=null);break e}r=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(o(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),ss(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Bl(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var h=i.type;ht(i.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(i===Ve.current){if(f=i.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(oi):e=[oi])}i=i.return}e!==null&&os(t,e,n,a),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return sd(Fn,e)}function Ki(e,t){return Fn===null&&Pn(e),sd(e,t)}function sd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(o(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var D1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},C1=l.unstable_scheduleCallback,O1=l.unstable_NormalPriority,Le={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cs(){return{controller:new D1,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&C1(O1,function(){e.controller.abort()})}var Nl=null,fs=0,Ra=0,Ma=null;function B1(e,t){if(Nl===null){var n=Nl=[];fs=0,Ra=go(),Ma={status:"pending",value:void 0,then:function(a){n.push(a)}}}return fs++,t.then(od,od),t}function od(){if(--fs===0&&Nl!==null){Ma!==null&&(Ma.status="fulfilled");var e=Nl;Nl=null,Ra=0,Ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function k1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var cd=C.S;C.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&B1(e,t),cd!==null&&cd(e,t)};var In=N(null);function ds(){var e=In.current;return e!==null?e:we.pooledCache}function Ji(e,t){t===null?V(In,In.current):V(In,t.pool)}function fd(){var e=ds();return e===null?null:{parent:Le._currentValue,pool:e}}var Ul=Error(o(460)),dd=Error(o(474)),$i=Error(o(542)),hs={then:function(){}};function hd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wi(){}function gd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wi,Wi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pd(e),e;default:if(typeof t.status=="string")t.then(Wi,Wi);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pd(e),e}throw Hl=t,Ul}}var Hl=null;function md(){if(Hl===null)throw Error(o(459));var e=Hl;return Hl=null,e}function pd(e){if(e===Ul||e===$i)throw Error(o(483))}var yn=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(xe&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=qi(e),nd(e,null,n),t}return Yi(e,a,t,n),qi(e)}function Ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,of(e,n)}}function ps(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bs=!1;function Gl(){if(bs){var e=Ma;if(e!==null)throw e}}function Yl(e,t,n,a){bs=!1;var i=e.updateQueue;yn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var x=h,w=x.next;x.next=null,f===null?r=w:f.next=w,f=x;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==f&&(h===null?O.firstBaseUpdate=w:h.next=w,O.lastBaseUpdate=x))}if(r!==null){var k=i.baseState;f=0,O=w=x=null,h=r;do{var T=h.lane&-536870913,A=T!==h.lane;if(A?(he&T)===T:(a&T)===T){T!==0&&T===Ra&&(bs=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;T=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){k=ne.call(je,k,T);break e}k=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,T=typeof ne=="function"?ne.call(je,k,T):ne,T==null)break e;k=E({},k,T);break e;case 2:yn=!0}}T=h.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[T]:A.push(T))}else A={lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(w=O=A,x=k):O=O.next=A,f|=T;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;A=h,h=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);O===null&&(x=k),i.baseState=x,i.firstBaseUpdate=w,i.lastBaseUpdate=O,r===null&&(i.shared.lanes=0),Rn|=f,e.lanes=f,e.memoizedState=k}}function bd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function xd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bd(n[e],t)}var Da=N(null),Fi=N(0);function yd(e,t){e=on,V(Fi,e),V(Da,t),on=e|t.baseLanes}function xs(){V(Fi,on),V(Da,Da.current)}function ys(){on=Fi.current,Y(Da),Y(Fi)}var jn=0,ue=null,ve=null,Ne=null,Pi=!1,Ca=!1,ea=!1,Ii=0,ql=0,Oa=null,N1=0;function Be(){throw Error(o(321))}function vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Ss(e,t,n,a,i,r){return jn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?nh:ah,ea=!1,r=n(a,i),ea=!1,Ca&&(r=Sd(t,n,a,i)),vd(e),r}function vd(e){C.H=ir;var t=ve!==null&&ve.next!==null;if(jn=0,Ne=ve=ue=null,Pi=!1,ql=0,Oa=null,t)throw Error(o(300));e===null||Xe||(e=e.dependencies,e!==null&&Zi(e)&&(Xe=!0))}function Sd(e,t,n,a){ue=e;var i=0;do{if(Ca&&(Oa=null),ql=0,Ca=!1,25<=i)throw Error(o(301));if(i+=1,Ne=ve=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=V1,r=t(n,a)}while(Ca);return r}function U1(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?Vl(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ue.flags|=1024),t}function js(){var e=Ii!==0;return Ii=0,e}function _s(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zs(e){if(Pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pi=!1}jn=0,Ne=ve=ue=null,Ca=!1,ql=Ii=0,Oa=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Ue(){if(ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Ne===null?ue.memoizedState:Ne.next;if(t!==null)Ne=t,ve=e;else{if(e===null)throw ue.alternate===null?Error(o(467)):Error(o(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function ws(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(e){var t=ql;return ql+=1,Oa===null&&(Oa=[]),e=gd(Oa,e,t),t=ue,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?nh:ah),e}function er(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vl(e);if(e.$$typeof===X)return et(e)}throw Error(o(438,String(e)))}function Es(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ws(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=at;return t.index++,n}function nn(e,t){return typeof t=="function"?t(e):t}function tr(e){var t=Ue();return Ts(t,ve,e)}function Ts(e,t,n){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=f=null,x=null,w=t,O=!1;do{var k=w.lane&-536870913;if(k!==w.lane?(he&k)===k:(jn&k)===k){var T=w.revertLane;if(T===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),k===Ra&&(O=!0);else if((jn&T)===T){w=w.next,T===Ra&&(O=!0);continue}else k={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},x===null?(h=x=k,f=r):x=x.next=k,ue.lanes|=T,Rn|=T;k=w.action,ea&&n(r,k),r=w.hasEagerState?w.eagerState:n(r,k)}else T={lane:k,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},x===null?(h=x=T,f=r):x=x.next=T,ue.lanes|=k,Rn|=k;w=w.next}while(w!==null&&w!==t);if(x===null?f=r:x.next=h,!ht(r,e.memoizedState)&&(Xe=!0,O&&(n=Ma,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=x,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function As(e){var t=Ue(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);ht(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function jd(e,t,n){var a=ue,i=Ue(),r=me;if(r){if(n===void 0)throw Error(o(407));n=n()}else n=t();var f=!ht((ve||i).memoizedState,n);f&&(i.memoizedState=n,Xe=!0),i=i.queue;var h=wd.bind(null,a,i,e);if(Ql(2048,8,h,[e]),i.getSnapshot!==t||f||Ne!==null&&Ne.memoizedState.tag&1){if(a.flags|=2048,Ba(9,nr(),zd.bind(null,a,i,n,t),null),we===null)throw Error(o(349));r||(jn&124)!==0||_d(a,t,n)}return n}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=ws(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,a){t.value=n,t.getSnapshot=a,Ed(t)&&Td(e)}function wd(e,t,n){return n(function(){Ed(t)&&Td(e)})}function Ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Td(e){var t=wa(e,2);t!==null&&yt(t,e,2)}function Rs(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ea){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function Ad(e,t,n,a){return e.baseState=n,Ts(e,ve,typeof a=="function"?a:nn)}function H1(e,t,n,a,i){if(lr(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};C.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Rd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Rd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=C.T,f={};C.T=f;try{var h=n(i,a),x=C.S;x!==null&&x(f,h),Md(e,t,h)}catch(w){Ms(e,t,w)}finally{C.T=r}}else try{r=n(i,a),Md(e,t,r)}catch(w){Ms(e,t,w)}}function Md(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Dd(e,t,a)},function(a){return Ms(e,t,a)}):Dd(e,t,n)}function Dd(e,t,n){t.status="fulfilled",t.value=n,Cd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Rd(e,n)))}function Ms(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Cd(t),t=t.next;while(t!==a)}e.action=null}function Cd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Od(e,t){return t}function Bd(e,t){if(me){var n=we.formState;if(n!==null){e:{var a=ue;if(me){if(Ce){t:{for(var i=Ce,r=Lt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Bt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ce=Bt(i.nextSibling),a=i.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Od,lastRenderedState:t},n.queue=a,n=Id.bind(null,ue,a),a.dispatch=n,a=Rs(!1),r=ks.bind(null,ue,!1,a.queue),a=st(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=H1.bind(null,ue,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function kd(e){var t=Ue();return Nd(t,ve,e)}function Nd(e,t,n){if(t=Ts(e,t,Od)[0],e=tr(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Vl(t)}catch(f){throw f===Ul?$i:f}else a=t;t=Ue();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Ba(9,nr(),L1.bind(null,i,n),null)),[a,r,e]}function L1(e,t){e.action=t}function Ud(e){var t=Ue(),n=ve;if(n!==null)return Nd(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ba(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=ws(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function nr(){return{destroy:void 0,resource:void 0}}function Hd(){return Ue().memoizedState}function ar(e,t,n,a){var i=st();a=a===void 0?null:a,ue.flags|=e,i.memoizedState=Ba(1|t,nr(),n,a)}function Ql(e,t,n,a){var i=Ue();a=a===void 0?null:a;var r=i.memoizedState.inst;ve!==null&&a!==null&&vs(a,ve.memoizedState.deps)?i.memoizedState=Ba(t,r,n,a):(ue.flags|=e,i.memoizedState=Ba(1|t,r,n,a))}function Ld(e,t){ar(8390656,8,e,t)}function Gd(e,t){Ql(2048,8,e,t)}function Yd(e,t){return Ql(4,2,e,t)}function qd(e,t){return Ql(4,4,e,t)}function Vd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qd(e,t,n){n=n!=null?n.concat([e]):null,Ql(4,4,Vd.bind(null,t,e),n)}function Ds(){}function Xd(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&vs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&vs(t,a[1]))return a[0];if(a=e(),ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function Cs(e,t,n){return n===void 0||(jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=$h(),ue.lanes|=e,Rn|=e,n)}function Kd(e,t,n,a){return ht(n,t)?n:Da.current!==null?(e=Cs(e,n,a),ht(e,t)||(Xe=!0),e):(jn&42)===0?(Xe=!0,e.memoizedState=n):(e=$h(),ue.lanes|=e,Rn|=e,t)}function Jd(e,t,n,a,i){var r=q.p;q.p=r!==0&&8>r?r:8;var f=C.T,h={};C.T=h,ks(e,!1,t,n);try{var x=i(),w=C.S;if(w!==null&&w(h,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var O=k1(x,a);Xl(e,t,O,xt(e))}else Xl(e,t,a,xt(e))}catch(k){Xl(e,t,{then:function(){},status:"rejected",reason:k},xt())}finally{q.p=r,C.T=f}}function G1(){}function Os(e,t,n,a){if(e.tag!==5)throw Error(o(476));var i=$d(e).queue;Jd(e,i,t,P,n===null?G1:function(){return Wd(e),n(a)})}function $d(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wd(e){var t=$d(e).next.queue;Xl(e,t,{},xt())}function Bs(){return et(oi)}function Fd(){return Ue().memoizedState}function Pd(){return Ue().memoizedState}function Y1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xt();e=vn(n);var a=Sn(t,e,n);a!==null&&(yt(a,t,n),Ll(a,t,n)),t={cache:cs()},e.payload=t;return}t=t.return}}function q1(e,t,n){var a=xt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},lr(e)?eh(t,n):(n=es(e,t,n,a),n!==null&&(yt(n,e,a),th(n,t,a)))}function Id(e,t,n){var a=xt();Xl(e,t,n,a)}function Xl(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(lr(e))eh(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(i.hasEagerState=!0,i.eagerState=h,ht(h,f))return Yi(e,t,i,0),we===null&&Gi(),!1}catch{}finally{}if(n=es(e,t,i,a),n!==null)return yt(n,e,a),th(n,t,a),!0}return!1}function ks(e,t,n,a){if(a={lane:2,revertLane:go(),action:a,hasEagerState:!1,eagerState:null,next:null},lr(e)){if(t)throw Error(o(479))}else t=es(e,n,a,2),t!==null&&yt(t,e,2)}function lr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function eh(e,t){Ca=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function th(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,of(e,n)}}var ir={readContext:et,use:er,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},nh={readContext:et,use:er,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Ld,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ar(4194308,4,Vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ar(4194308,4,e,t)},useInsertionEffect:function(e,t){ar(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var i=n(t);if(ea){mn(!0);try{n(t)}finally{mn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=q1.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Rs(e);var t=e.queue,n=Id.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ds,useDeferredValue:function(e,t){var n=st();return Cs(n,e,t)},useTransition:function(){var e=Rs(!1);return e=Jd.bind(null,ue,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,i=st();if(me){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),we===null)throw Error(o(349));(he&124)!==0||_d(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,Ld(wd.bind(null,a,r,e),[e]),a.flags|=2048,Ba(9,nr(),zd.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=we.identifierPrefix;if(me){var n=It,a=Pt;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ii++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=N1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Bs,useFormState:Bd,useActionState:Bd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ks.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:Es,useCacheRefresh:function(){return st().memoizedState=Y1.bind(null,ue)}},ah={readContext:et,use:er,useCallback:Xd,useContext:et,useEffect:Gd,useImperativeHandle:Qd,useInsertionEffect:Yd,useLayoutEffect:qd,useMemo:Zd,useReducer:tr,useRef:Hd,useState:function(){return tr(nn)},useDebugValue:Ds,useDeferredValue:function(e,t){var n=Ue();return Kd(n,ve.memoizedState,e,t)},useTransition:function(){var e=tr(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:jd,useId:Fd,useHostTransitionStatus:Bs,useFormState:kd,useActionState:kd,useOptimistic:function(e,t){var n=Ue();return Ad(n,ve,e,t)},useMemoCache:Es,useCacheRefresh:Pd},V1={readContext:et,use:er,useCallback:Xd,useContext:et,useEffect:Gd,useImperativeHandle:Qd,useInsertionEffect:Yd,useLayoutEffect:qd,useMemo:Zd,useReducer:As,useRef:Hd,useState:function(){return As(nn)},useDebugValue:Ds,useDeferredValue:function(e,t){var n=Ue();return ve===null?Cs(n,e,t):Kd(n,ve.memoizedState,e,t)},useTransition:function(){var e=As(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:jd,useId:Fd,useHostTransitionStatus:Bs,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,t){var n=Ue();return ve!==null?Ad(n,ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Es,useCacheRefresh:Pd},ka=null,Zl=0;function rr(e){var t=Zl;return Zl+=1,ka===null&&(ka=[]),gd(ka,e,t)}function Kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ur(e,t){throw t.$$typeof===R?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lh(e){var t=e._init;return t(e._payload)}function ih(e){function t(_,S){if(e){var z=_.deletions;z===null?(_.deletions=[S],_.flags|=16):z.push(S)}}function n(_,S){if(!e)return null;for(;S!==null;)t(_,S),S=S.sibling;return null}function a(_){for(var S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(_,S){return _=Ft(_,S),_.index=0,_.sibling=null,_}function r(_,S,z){return _.index=z,e?(z=_.alternate,z!==null?(z=z.index,z<S?(_.flags|=67108866,S):z):(_.flags|=67108866,S)):(_.flags|=1048576,S)}function f(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function h(_,S,z,B){return S===null||S.tag!==6?(S=ns(z,_.mode,B),S.return=_,S):(S=i(S,z),S.return=_,S)}function x(_,S,z,B){var K=z.type;return K===L?O(_,S,z.props.children,B,z.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&lh(K)===S.type)?(S=i(S,z.props),Kl(S,z),S.return=_,S):(S=Vi(z.type,z.key,z.props,null,_.mode,B),Kl(S,z),S.return=_,S)}function w(_,S,z,B){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=as(z,_.mode,B),S.return=_,S):(S=i(S,z.children||[]),S.return=_,S)}function O(_,S,z,B,K){return S===null||S.tag!==7?(S=Zn(z,_.mode,B,K),S.return=_,S):(S=i(S,z),S.return=_,S)}function k(_,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ns(""+S,_.mode,z),S.return=_,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case D:return z=Vi(S.type,S.key,S.props,null,_.mode,z),Kl(z,S),z.return=_,z;case H:return S=as(S,_.mode,z),S.return=_,S;case Ee:var B=S._init;return S=B(S._payload),k(_,S,z)}if(qe(S)||Ye(S))return S=Zn(S,_.mode,z,null),S.return=_,S;if(typeof S.then=="function")return k(_,rr(S),z);if(S.$$typeof===X)return k(_,Ki(_,S),z);ur(_,S)}return null}function T(_,S,z,B){var K=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:h(_,S,""+z,B);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return z.key===K?x(_,S,z,B):null;case H:return z.key===K?w(_,S,z,B):null;case Ee:return K=z._init,z=K(z._payload),T(_,S,z,B)}if(qe(z)||Ye(z))return K!==null?null:O(_,S,z,B,null);if(typeof z.then=="function")return T(_,S,rr(z),B);if(z.$$typeof===X)return T(_,S,Ki(_,z),B);ur(_,z)}return null}function A(_,S,z,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return _=_.get(z)||null,h(S,_,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return _=_.get(B.key===null?z:B.key)||null,x(S,_,B,K);case H:return _=_.get(B.key===null?z:B.key)||null,w(S,_,B,K);case Ee:var se=B._init;return B=se(B._payload),A(_,S,z,B,K)}if(qe(B)||Ye(B))return _=_.get(z)||null,O(S,_,B,K,null);if(typeof B.then=="function")return A(_,S,z,rr(B),K);if(B.$$typeof===X)return A(_,S,z,Ki(S,B),K);ur(S,B)}return null}function ne(_,S,z,B){for(var K=null,se=null,J=S,te=S=0,Ke=null;J!==null&&te<z.length;te++){J.index>te?(Ke=J,J=null):Ke=J.sibling;var ge=T(_,J,z[te],B);if(ge===null){J===null&&(J=Ke);break}e&&J&&ge.alternate===null&&t(_,J),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge,J=Ke}if(te===z.length)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;te<z.length;te++)J=k(_,z[te],B),J!==null&&(S=r(J,S,te),se===null?K=J:se.sibling=J,se=J);return me&&Jn(_,te),K}for(J=a(J);te<z.length;te++)Ke=A(J,_,te,z[te],B),Ke!==null&&(e&&Ke.alternate!==null&&J.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),se===null?K=Ke:se.sibling=Ke,se=Ke);return e&&J.forEach(function(Hn){return t(_,Hn)}),me&&Jn(_,te),K}function I(_,S,z,B){if(z==null)throw Error(o(151));for(var K=null,se=null,J=S,te=S=0,Ke=null,ge=z.next();J!==null&&!ge.done;te++,ge=z.next()){J.index>te?(Ke=J,J=null):Ke=J.sibling;var Hn=T(_,J,ge.value,B);if(Hn===null){J===null&&(J=Ke);break}e&&J&&Hn.alternate===null&&t(_,J),S=r(Hn,S,te),se===null?K=Hn:se.sibling=Hn,se=Hn,J=Ke}if(ge.done)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;!ge.done;te++,ge=z.next())ge=k(_,ge.value,B),ge!==null&&(S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return me&&Jn(_,te),K}for(J=a(J);!ge.done;te++,ge=z.next())ge=A(J,_,te,ge.value,B),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?te:ge.key),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return e&&J.forEach(function(Qb){return t(_,Qb)}),me&&Jn(_,te),K}function je(_,S,z,B){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case D:e:{for(var K=z.key;S!==null;){if(S.key===K){if(K=z.type,K===L){if(S.tag===7){n(_,S.sibling),B=i(S,z.props.children),B.return=_,_=B;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&lh(K)===S.type){n(_,S.sibling),B=i(S,z.props),Kl(B,z),B.return=_,_=B;break e}n(_,S);break}else t(_,S);S=S.sibling}z.type===L?(B=Zn(z.props.children,_.mode,B,z.key),B.return=_,_=B):(B=Vi(z.type,z.key,z.props,null,_.mode,B),Kl(B,z),B.return=_,_=B)}return f(_);case H:e:{for(K=z.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(_,S.sibling),B=i(S,z.children||[]),B.return=_,_=B;break e}else{n(_,S);break}else t(_,S);S=S.sibling}B=as(z,_.mode,B),B.return=_,_=B}return f(_);case Ee:return K=z._init,z=K(z._payload),je(_,S,z,B)}if(qe(z))return ne(_,S,z,B);if(Ye(z)){if(K=Ye(z),typeof K!="function")throw Error(o(150));return z=K.call(z),I(_,S,z,B)}if(typeof z.then=="function")return je(_,S,rr(z),B);if(z.$$typeof===X)return je(_,S,Ki(_,z),B);ur(_,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(_,S.sibling),B=i(S,z),B.return=_,_=B):(n(_,S),B=ns(z,_.mode,B),B.return=_,_=B),f(_)):n(_,S)}return function(_,S,z,B){try{Zl=0;var K=je(_,S,z,B);return ka=null,K}catch(J){if(J===Ul||J===$i)throw J;var se=gt(29,J,null,_.mode);return se.lanes=B,se.return=_,se}finally{}}}var Na=ih(!0),rh=ih(!1),At=N(null),Gt=null;function _n(e){var t=e.alternate;V(Ge,Ge.current&1),V(At,e),Gt===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(Gt=e)}function uh(e){if(e.tag===22){if(V(Ge,Ge.current),V(At,e),Gt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Gt=e)}}else zn()}function zn(){V(Ge,Ge.current),V(At,At.current)}function an(e){Y(At),Gt===e&&(Gt=null),Y(Ge)}var Ge=N(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Eo(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ns(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=xt(),i=vn(a);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(yt(t,e,a),Ll(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=xt(),i=vn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(yt(t,e,a),Ll(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xt(),a=vn(n);a.tag=2,t!=null&&(a.callback=t),t=Sn(e,a,n),t!==null&&(yt(t,e,n),Ll(t,e,n))}};function sh(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Rl(n,a)||!Rl(i,r):!0}function oh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var or=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ch(e){or(e)}function fh(e){console.error(e)}function dh(e){or(e)}function cr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function hh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Hs(e,t,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){cr(e,t)},n}function gh(e){return e=vn(e),e.tag=3,e}function mh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){hh(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){hh(t,n,a),typeof i!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Q1(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Bl(t,n,i,!0),n=At.current,n!==null){switch(n.tag){case 13:return Gt===null?so():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===hs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),co(e,a,i)),!1;case 22:return n.flags|=65536,a===hs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),co(e,a,i)),!1}throw Error(o(435,n.tag))}return co(e,a,i),so(),!1}if(me)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==rs&&(e=Error(o(422),{cause:a}),Ol(zt(e,n)))):(a!==rs&&(t=Error(o(423),{cause:a}),Ol(zt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=zt(a,n),i=Hs(e.stateNode,a,i),ps(e,i),Oe!==4&&(Oe=2)),!1;var r=Error(o(520),{cause:a});if(r=zt(r,n),ei===null?ei=[r]:ei.push(r),Oe!==4&&(Oe=2),t===null)return!0;a=zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Hs(n.stateNode,a,e),ps(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=gh(i),mh(i,e,n,a),ps(n,i),!1}n=n.return}while(n!==null);return!1}var ph=Error(o(461)),Xe=!1;function $e(e,t,n,a){t.child=e===null?rh(t,null,n,a):Na(t,e.child,n,a)}function bh(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=Ss(e,t,n,f,r,i),h=js(),e!==null&&!Xe?(_s(e,t,i),ln(e,t,i)):(me&&h&&ls(t),t.flags|=1,$e(e,t,a,i),t.child)}function xh(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!ts(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,yh(e,t,r,a,i)):(e=Vi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Zs(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Rl,n(f,a)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function yh(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Rl(r,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=r,Zs(e,i))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,ln(e,t,i)}return Ls(e,t,n,a,i)}function vh(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return Sh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ji(t,r!==null?r.cachePool:null),r!==null?yd(t,r):xs(),uh(t);else return t.lanes=t.childLanes=536870912,Sh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Ji(t,r.cachePool),yd(t,r),zn(),t.memoizedState=null):(e!==null&&Ji(t,null),xs(),zn());return $e(e,t,i,n),t.child}function Sh(e,t,n,a){var i=ds();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ji(t,null),xs(),uh(t),e!==null&&Bl(e,t,a,!0),null}function fr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ls(e,t,n,a,i){return Pn(t),n=Ss(e,t,n,a,void 0,i),a=js(),e!==null&&!Xe?(_s(e,t,i),ln(e,t,i)):(me&&a&&ls(t),t.flags|=1,$e(e,t,n,i),t.child)}function jh(e,t,n,a,i,r){return Pn(t),t.updateQueue=null,n=Sd(t,a,n,i),vd(e),a=js(),e!==null&&!Xe?(_s(e,t,r),ln(e,t,r)):(me&&a&&ls(t),t.flags|=1,$e(e,t,n,r),t.child)}function _h(e,t,n,a,i){if(Pn(t),t.stateNode===null){var r=Ea,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Us,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},gs(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):Ea,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Ns(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Us.enqueueReplaceState(r,r.state,null),Yl(t,a,r,i),Gl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,x=ta(n,h);r.props=x;var w=r.context,O=n.contextType;f=Ea,typeof O=="object"&&O!==null&&(f=et(O));var k=n.getDerivedStateFromProps;O=typeof k=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||w!==f)&&oh(t,r,a,f),yn=!1;var T=t.memoizedState;r.state=T,Yl(t,a,r,i),Gl(),w=t.memoizedState,h||T!==w||yn?(typeof k=="function"&&(Ns(t,n,k,a),w=t.memoizedState),(x=yn||sh(t,n,x,a,T,w,f))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=w),r.props=a,r.state=w,r.context=f,a=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,ms(e,t),f=t.memoizedProps,O=ta(n,f),r.props=O,k=t.pendingProps,T=r.context,w=n.contextType,x=Ea,typeof w=="object"&&w!==null&&(x=et(w)),h=n.getDerivedStateFromProps,(w=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==k||T!==x)&&oh(t,r,a,x),yn=!1,T=t.memoizedState,r.state=T,Yl(t,a,r,i),Gl();var A=t.memoizedState;f!==k||T!==A||yn||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof h=="function"&&(Ns(t,n,h,a),A=t.memoizedState),(O=yn||sh(t,n,O,a,T,A,x)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=x,a=O):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,fr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,n,i)):$e(e,t,n,i),t.memoizedState=r.state,e=t.child):e=ln(e,t,i),e}function zh(e,t,n,a){return Cl(),t.flags|=256,$e(e,t,n,a),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ys(e){return{baseLanes:e,cachePool:fd()}}function qs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function wh(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(i?_n(t):zn(),me){var h=Ce,x;if(x=h){e:{for(x=h,h=Lt;x.nodeType!==8;){if(!h){h=null;break e}if(x=Bt(x.nextSibling),x===null){h=null;break e}}h=x}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Pt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},x=gt(18,null,null,0),x.stateNode=h,x.return=t,t.child=x,lt=t,Ce=null,x=!0):x=!1}x||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Eo(h)?t.lanes=32:t.lanes=536870912,null;an(t)}return h=a.children,a=a.fallback,i?(zn(),i=t.mode,h=dr({mode:"hidden",children:h},i),a=Zn(a,i,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,i=t.child,i.memoizedState=Ys(n),i.childLanes=qs(e,f,n),t.memoizedState=Gs,a):(_n(t),Vs(t,h))}if(x=e.memoizedState,x!==null&&(h=x.dehydrated,h!==null)){if(r)t.flags&256?(_n(t),t.flags&=-257,t=Qs(e,t,n)):t.memoizedState!==null?(zn(),t.child=e.child,t.flags|=128,t=null):(zn(),i=a.fallback,h=t.mode,a=dr({mode:"visible",children:a.children},h),i=Zn(i,h,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Na(t,e.child,null,n),a=t.child,a.memoizedState=Ys(n),a.childLanes=qs(e,f,n),t.memoizedState=Gs,t=i);else if(_n(t),Eo(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var w=f.dgst;f=w,a=Error(o(419)),a.stack="",a.digest=f,Ol({value:a,source:null,stack:null}),t=Qs(e,t,n)}else if(Xe||Bl(e,t,n,!1),f=(n&e.childLanes)!==0,Xe||f){if(f=we,f!==null&&(a=n&-n,a=(a&42)!==0?1:Eu(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==x.retryLane))throw x.retryLane=a,wa(e,a),yt(f,e,a),ph;h.data==="$?"||so(),t=Qs(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ce=Bt(h.nextSibling),lt=t,me=!0,$n=null,Lt=!1,e!==null&&(Et[Tt++]=Pt,Et[Tt++]=It,Et[Tt++]=Kn,Pt=e.id,It=e.overflow,Kn=t),t=Vs(t,a.children),t.flags|=4096);return t}return i?(zn(),i=a.fallback,h=t.mode,x=e.child,w=x.sibling,a=Ft(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,w!==null?i=Ft(w,i):(i=Zn(i,h,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,h=e.child.memoizedState,h===null?h=Ys(n):(x=h.cachePool,x!==null?(w=Le._currentValue,x=x.parent!==w?{parent:w,pool:w}:x):x=fd(),h={baseLanes:h.baseLanes|n,cachePool:x}),i.memoizedState=h,i.childLanes=qs(e,f,n),t.memoizedState=Gs,a):(_n(t),n=e.child,e=n.sibling,n=Ft(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Vs(e,t){return t=dr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dr(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qs(e,t,n){return Na(t,e.child,null,n),e=Vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ss(e.return,t,n)}function Xs(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function Th(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if($e(e,t,a.children,n),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eh(e,n,t);else if(e.tag===19)Eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Ge,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&sr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xs(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xs(t,!0,n,null,r);break;case"together":Xs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Bl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zi(e)))}function X1(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),xn(t,Le,e.memoizedState.cache),Cl();break;case 27:case 5:Gn(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:xn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(_n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?wh(e,t,n):(_n(t),e=ln(e,t,n),e!==null?e.sibling:null);_n(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Bl(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Th(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,vh(e,t,n);case 24:xn(t,Le,e.memoizedState.cache)}return ln(e,t,n)}function Ah(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Zs(e,n)&&(t.flags&128)===0)return Xe=!1,X1(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,me&&(t.flags&1048576)!==0&&ld(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")ts(a)?(e=ta(a,e),t.tag=1,t=_h(null,t,a,e,n)):(t.tag=0,t=Ls(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===ae){t.tag=11,t=bh(null,t,a,e,n);break e}else if(i===W){t.tag=14,t=xh(null,t,a,e,n);break e}}throw t=Kt(a)||a,Error(o(306,t,""))}}return t;case 0:return Ls(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ta(a,t.pendingProps),_h(e,t,a,i,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,ms(e,t),Yl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,xn(t,Le,a),a!==r.cache&&os(t,[Le],n,!0),Gl(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=zh(e,t,a,n);break e}else if(a!==i){i=zt(Error(o(424)),t),Ol(i),t=zh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Bt(e.firstChild),lt=t,me=!0,$n=null,Lt=!0,n=rh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Cl(),a===i){t=ln(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return fr(e,t),e===null?(n=Cg(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,a=Er(ee.current).createElement(n),a[Ie]=t,a[rt]=e,Fe(a,n,e),Qe(a),t.stateNode=a):t.memoizedState=Cg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&me&&(a=t.stateNode=Rg(t.type,t.pendingProps,ee.current),lt=t,Lt=!0,i=Ce,On(t.type)?(To=i,Ce=Bt(a.firstChild)):Ce=i),$e(e,t,t.pendingProps.children,n),fr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((i=a=Ce)&&(a=yb(a,t.type,t.pendingProps,Lt),a!==null?(t.stateNode=a,lt=t,Ce=Bt(a.firstChild),Lt=!1,i=!0):i=!1),i||Wn(t)),Gn(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,_o(i,r)?a=null:f!==null&&_o(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Ss(e,t,U1,null,null,n),oi._currentValue=i),fr(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&me&&((e=n=Ce)&&(n=vb(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,lt=t,Ce=null,e=!0):e=!1),e||Wn(t)),null;case 13:return wh(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Na(t,null,a,n):$e(e,t,a,n),t.child;case 11:return bh(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,xn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Pn(t),i=et(i),a=a(i),t.flags|=1,$e(e,t,a,n),t.child;case 14:return xh(e,t,t.type,t.pendingProps,n);case 15:return yh(e,t,t.type,t.pendingProps,n);case 19:return Th(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=dr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ft(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return vh(e,t,n);case 24:return Pn(t),a=et(Le),e===null?(i=ds(),i===null&&(i=we,r=cs(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},gs(t),xn(t,Le,i)):((e.lanes&n)!==0&&(ms(e,t),Yl(t,null,null,n),Gl()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xn(t,Le,a)):(a=r.cache,xn(t,Le,a),a!==i.cache&&os(t,[Le],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function rn(e){e.flags|=4}function Rh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ug(t)){if(t=At.current,t!==null&&((he&4194048)===he?Gt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Gt))throw Hl=hs,dd;e.flags|=8192}}function hr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?uf():536870912,e.lanes|=t,Ga|=t)}function Jl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Z1(e,t,n){var a=t.pendingProps;switch(is(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tn(Le),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Dl(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ud())),De(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(De(t),Rh(t,n)):(De(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),De(t),Rh(t,n)):(De(t),t.flags&=-16777217):(e.memoizedProps!==a&&rn(t),De(t),t.flags&=-16777217),null;case 27:Jt(t),n=ee.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return De(t),null}e=F.current,Dl(t)?id(t):(e=Rg(i,a,n),t.stateNode=e,rn(t))}return De(t),null;case 5:if(Jt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return De(t),null}if(e=F.current,Dl(t))id(t);else{switch(i=Er(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Ie]=t,e[rt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=ee.current,Dl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=lt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||jg(e.nodeValue,n)),e||Wn(t)}else e=Er(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Dl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Ie]=t}else Cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=ud(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(an(t),t):(an(t),null)}if(an(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),hr(t,t.updateQueue),De(t),null;case 4:return Pe(),e===null&&xo(t.stateNode.containerInfo),De(t),null;case 10:return tn(t.type),De(t),null;case 19:if(Y(Ge),i=t.memoizedState,i===null)return De(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Jl(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=sr(e),r!==null){for(t.flags|=128,Jl(i,!1),e=r.updateQueue,t.updateQueue=e,hr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ad(n,e),n=n.sibling;return V(Ge,Ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ht()>pr&&(t.flags|=128,a=!0,Jl(i,!1),t.lanes=4194304)}else{if(!a)if(e=sr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,hr(t,e),Jl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!me)return De(t),null}else 2*Ht()-i.renderingStartTime>pr&&n!==536870912&&(t.flags|=128,a=!0,Jl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ht(),t.sibling=null,e=Ge.current,V(Ge,a?e&1|2:e&1),t):(De(t),null);case 22:case 23:return an(t),ys(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&hr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Y(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(Le),De(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function K1(e,t){switch(is(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(Le),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Ge),null;case 4:return Pe(),null;case 10:return tn(t.type),null;case 22:case 23:return an(t),ys(),e!==null&&Y(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(Le),null;case 25:return null;default:return null}}function Mh(e,t){switch(is(t),t.tag){case 3:tn(Le),Pe();break;case 26:case 27:case 5:Jt(t);break;case 4:Pe();break;case 13:an(t);break;case 19:Y(Ge);break;case 10:tn(t.type);break;case 22:case 23:an(t),ys(),e!==null&&Y(In);break;case 24:tn(Le)}}function $l(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(h){ze(t,t.return,h)}}function wn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=t;var x=n,w=h;try{w()}catch(O){ze(i,x,O)}}}a=a.next}while(a!==r)}}catch(O){ze(t,t.return,O)}}function Dh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xd(t,n)}catch(a){ze(e,e.return,a)}}}function Ch(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ze(e,t,a)}}function Wl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){ze(e,t,i)}}function Yt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){ze(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ze(e,t,i)}else n.current=null}function Oh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){ze(e,e.return,i)}}function Ks(e,t,n){try{var a=e.stateNode;gb(a,e.type,n,t),a[rt]=t}catch(i){ze(e,e.return,i)}}function Bh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function Js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wr));else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}function gr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gr(e,t,n),e=e.sibling;e!==null;)gr(e,t,n),e=e.sibling}function kh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fe(t,a,n),t[Ie]=e,t[rt]=n}catch(r){ze(e,e.return,r)}}var un=!1,ke=!1,Ws=!1,Nh=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function J1(e,t){if(e=e.containerInfo,So=Cr,e=Kf(e),Ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,x=-1,w=0,O=0,k=e,T=null;t:for(;;){for(var A;k!==n||i!==0&&k.nodeType!==3||(h=f+i),k!==r||a!==0&&k.nodeType!==3||(x=f+a),k.nodeType===3&&(f+=k.nodeValue.length),(A=k.firstChild)!==null;)T=k,k=A;for(;;){if(k===e)break t;if(T===n&&++w===i&&(h=f),T===r&&++O===a&&(x=f),(A=k.nextSibling)!==null)break;k=T,T=k.parentNode}k=A}n=h===-1||x===-1?null:{start:h,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(jo={focusedElem:e,selectionRange:n},Cr=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){ze(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Uh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),a&4&&$l(5,n);break;case 1:if(En(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){ze(n,n.return,f)}else{var i=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){ze(n,n.return,f)}}a&64&&Dh(n),a&512&&Wl(n,n.return);break;case 3:if(En(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xd(e,t)}catch(f){ze(n,n.return,f)}}break;case 27:t===null&&a&4&&kh(n);case 26:case 5:En(e,n),t===null&&a&4&&Oh(n),a&512&&Wl(n,n.return);break;case 12:En(e,n);break;case 13:En(e,n),a&4&&Gh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ab.bind(null,n),Sb(e,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){t=t!==null&&t.memoizedState!==null||ke,i=un;var r=ke;un=a,(ke=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),un=i,ke=r}break;case 30:break;default:En(e,n)}}function Hh(e){var t=e.alternate;t!==null&&(e.alternate=null,Hh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ru(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ot=!1;function sn(e,t,n){for(n=n.child;n!==null;)Lh(e,t,n),n=n.sibling}function Lh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 26:ke||Yt(n,t),sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ke||Yt(n,t);var a=Ae,i=ot;On(n.type)&&(Ae=n.stateNode,ot=!1),sn(e,t,n),ii(n.stateNode),Ae=a,ot=i;break;case 5:ke||Yt(n,t);case 6:if(a=Ae,i=ot,Ae=null,sn(e,t,n),Ae=a,ot=i,Ae!==null)if(ot)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){ze(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){ze(n,t,r)}break;case 18:Ae!==null&&(ot?(e=Ae,Tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),hi(e)):Tg(Ae,n.stateNode));break;case 4:a=Ae,i=ot,Ae=n.stateNode.containerInfo,ot=!0,sn(e,t,n),Ae=a,ot=i;break;case 0:case 11:case 14:case 15:ke||wn(2,n,t),ke||wn(4,n,t),sn(e,t,n);break;case 1:ke||(Yt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ch(n,t,a)),sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:ke=(a=ke)||n.memoizedState!==null,sn(e,t,n),ke=a;break;default:sn(e,t,n)}}function Gh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hi(e)}catch(n){ze(t,t.return,n)}}function $1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nh),t;default:throw Error(o(435,e.tag))}}function Fs(e,t){var n=$1(e);t.forEach(function(a){var i=lb.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function mt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(On(h.type)){Ae=h.stateNode,ot=!1;break e}break;case 5:Ae=h.stateNode,ot=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,ot=!0;break e}h=h.return}if(Ae===null)throw Error(o(160));Lh(r,f,i),Ae=null,ot=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Yh(t,e),t=t.sibling}var Ot=null;function Yh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),a&4&&(wn(3,e,e.return),$l(3,e),wn(5,e,e.return));break;case 1:mt(t,e),pt(e),a&512&&(ke||n===null||Yt(n,n.return)),a&64&&un&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ot;if(mt(t,e),pt(e),a&512&&(ke||n===null||Yt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[vl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Qe(r),a=r;break e;case"link":var f=kg("link","href",i).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;case"meta":if(f=kg("meta","content",i).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;default:throw Error(o(468,a))}r[Ie]=e,Qe(r),a=r}e.stateNode=a}else Ng(i,e.type,e.stateNode);else e.stateNode=Bg(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Ng(i,e.type,e.stateNode):Bg(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ks(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),pt(e),a&512&&(ke||n===null||Yt(n,n.return)),n!==null&&a&4&&Ks(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),pt(e),a&512&&(ke||n===null||Yt(n,n.return)),e.flags&32){i=e.stateNode;try{xa(i,"")}catch(A){ze(e,e.return,A)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ks(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Ws=!0);break;case 6:if(mt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(A){ze(e,e.return,A)}}break;case 3:if(Rr=null,i=Ot,Ot=Tr(t.containerInfo),mt(t,e),Ot=i,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(A){ze(e,e.return,A)}Ws&&(Ws=!1,qh(e));break;case 4:a=Ot,Ot=Tr(e.stateNode.containerInfo),mt(t,e),pt(e),Ot=a;break;case 12:mt(t,e),pt(e);break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ao=Ht()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Fs(e,a)));break;case 22:i=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,w=un,O=ke;if(un=w||i,ke=O||x,mt(t,e),ke=O,un=w,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||x||un||ke||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(r=x.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=x.stateNode;var k=x.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null;h.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(A){ze(x,x.return,A)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(A){ze(x,x.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Fs(e,n))));break;case 19:mt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Fs(e,a)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Bh(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,r=Js(e);gr(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(xa(f,""),n.flags&=-33);var h=Js(e);gr(e,h,f);break;case 3:case 4:var x=n.stateNode.containerInfo,w=Js(e);$s(e,w,x);break;default:throw Error(o(161))}}catch(O){ze(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Uh(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wn(4,t,t.return),na(t);break;case 1:Yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ch(t,t.return,n),na(t);break;case 27:ii(t.stateNode);case 26:case 5:Yt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(i,r,n),$l(4,r);break;case 1:if(Tn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){ze(a,a.return,w)}if(a=r,i=a.updateQueue,i!==null){var h=a.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)bd(x[i],h)}catch(w){ze(a,a.return,w)}}n&&f&64&&Dh(r),Wl(r,r.return);break;case 27:kh(r);case 26:case 5:Tn(i,r,n),n&&a===null&&f&4&&Oh(r),Wl(r,r.return);break;case 12:Tn(i,r,n);break;case 13:Tn(i,r,n),n&&f&4&&Gh(i,r);break;case 22:r.memoizedState===null&&Tn(i,r,n),Wl(r,r.return);break;case 30:break;default:Tn(i,r,n)}t=t.sibling}}function Ps(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&kl(n))}function Is(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vh(e,t,n,a),t=t.sibling}function Vh(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),i&2048&&$l(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e)));break;case 12:if(i&2048){qt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){ze(t,t.return,x)}}else qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?qt(e,t,n,a):Fl(e,t):r._visibility&2?qt(e,t,n,a):(r._visibility|=2,Ua(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&Ps(f,t);break;case 24:qt(e,t,n,a),i&2048&&Is(t.alternate,t);break;default:qt(e,t,n,a)}}function Ua(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,x=a,w=f.flags;switch(f.tag){case 0:case 11:case 15:Ua(r,f,h,x,i),$l(8,f);break;case 23:break;case 22:var O=f.stateNode;f.memoizedState!==null?O._visibility&2?Ua(r,f,h,x,i):Fl(r,f):(O._visibility|=2,Ua(r,f,h,x,i)),i&&w&2048&&Ps(f.alternate,f);break;case 24:Ua(r,f,h,x,i),i&&w&2048&&Is(f.alternate,f);break;default:Ua(r,f,h,x,i)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Fl(n,a),i&2048&&Ps(a.alternate,a);break;case 24:Fl(n,a),i&2048&&Is(a.alternate,a);break;default:Fl(n,a)}t=t.sibling}}var Pl=8192;function Ha(e){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)Qh(e),e=e.sibling}function Qh(e){switch(e.tag){case 26:Ha(e),e.flags&Pl&&e.memoizedState!==null&&Bb(Ot,e.memoizedState,e.memoizedProps);break;case 5:Ha(e);break;case 3:case 4:var t=Ot;Ot=Tr(e.stateNode.containerInfo),Ha(e),Ot=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Pl,Pl=16777216,Ha(e),Pl=t):Ha(e));break;default:Ha(e)}}function Xh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,Kh(a,e)}Xh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zh(e),e=e.sibling}function Zh(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&wn(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mr(e)):Il(e);break;default:Il(e)}}function mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,Kh(a,e)}Xh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wn(8,t,t.return),mr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,mr(t));break;default:mr(t)}e=e.sibling}}function Kh(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:kl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ze=a;else e:for(n=e;Ze!==null;){a=Ze;var i=a.sibling,r=a.return;if(Hh(a),a===n){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var W1={getCacheForType:function(e){var t=et(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},F1=typeof WeakMap=="function"?WeakMap:Map,xe=0,we=null,fe=null,he=0,ye=0,bt=null,An=!1,La=!1,eo=!1,on=0,Oe=0,Rn=0,aa=0,to=0,Rt=0,Ga=0,ei=null,ct=null,no=!1,ao=0,pr=1/0,br=null,Mn=null,We=0,Dn=null,Ya=null,qa=0,lo=0,io=null,Jh=null,ti=0,ro=null;function xt(){if((xe&2)!==0&&he!==0)return he&-he;if(C.T!==null){var e=Ra;return e!==0?e:go()}return cf()}function $h(){Rt===0&&(Rt=(he&536870912)===0||me?rf():536870912);var e=At.current;return e!==null&&(e.flags|=32),Rt}function yt(e,t,n){(e===we&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Va(e,0),Cn(e,he,Rt,!1)),yl(e,n),((xe&2)===0||e!==we)&&(e===we&&((xe&2)===0&&(aa|=n),Oe===4&&Cn(e,he,Rt,!1)),Vt(e))}function Wh(e,t,n){if((xe&6)!==0)throw Error(o(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||xl(e,t),i=a?eb(e,t):oo(e,t,!0),r=a;do{if(i===0){La&&!a&&Cn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!P1(n)){i=oo(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;i=ei;var x=h.current.memoizedState.isDehydrated;if(x&&(Va(h,f).flags|=256),f=oo(h,f,!1),f!==2){if(eo&&!x){h.errorRecoveryDisabledLanes|=r,aa|=r,i=4;break e}r=ct,ct=i,r!==null&&(ct===null?ct=r:ct.push.apply(ct,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Va(e,0),Cn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Cn(a,t,Rt,!An);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=ao+300-Ht(),10<i)){if(Cn(a,t,Rt,!An),Ai(a,0,!0)!==0)break e;a.timeoutHandle=wg(Fh.bind(null,a,n,ct,br,no,t,Rt,aa,Ga,An,r,2,-0,0),i);break e}Fh(a,n,ct,br,no,t,Rt,aa,Ga,An,r,0,-0,0)}}break}while(!0);Vt(e)}function Fh(e,t,n,a,i,r,f,h,x,w,O,k,T,A){if(e.timeoutHandle=-1,k=t.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(si={stylesheets:null,count:0,unsuspend:Ob},Qh(t),k=kb(),k!==null)){e.cancelPendingCommit=k(lg.bind(null,e,t,r,n,a,i,f,h,x,O,1,T,A)),Cn(e,r,f,!w);return}lg(e,t,r,n,a,i,f,h,x)}function P1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t,n,a){t&=~to,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-dt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&sf(e,n,t)}function xr(){return(xe&6)===0?(ni(0),!1):!0}function uo(){if(fe!==null){if(ye===0)var e=fe.return;else e=fe,en=Fn=null,zs(e),ka=null,Zl=0,e=fe;for(;e!==null;)Mh(e.alternate,e),e=e.return;fe=null}}function Va(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,pb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uo(),we=e,fe=n=Ft(e.current,null),he=t,ye=0,bt=null,An=!1,La=xl(e,t),eo=!1,Ga=Rt=to=aa=Rn=Oe=0,ct=ei=null,no=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-dt(a),r=1<<i;t|=e[i],a&=~r}return on=t,Gi(),n}function Ph(e,t){ue=null,C.H=ir,t===Ul||t===$i?(t=md(),ye=3):t===dd?(t=md(),ye=4):ye=t===ph?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Oe=1,cr(e,zt(t,e.current)))}function Ih(){var e=C.H;return C.H=ir,e===null?ir:e}function eg(){var e=C.A;return C.A=W1,e}function so(){Oe=4,An||(he&4194048)!==he&&At.current!==null||(La=!0),(Rn&134217727)===0&&(aa&134217727)===0||we===null||Cn(we,he,Rt,!1)}function oo(e,t,n){var a=xe;xe|=2;var i=Ih(),r=eg();(we!==e||he!==t)&&(br=null,Va(e,t)),t=!1;var f=Oe;e:do try{if(ye!==0&&fe!==null){var h=fe,x=bt;switch(ye){case 8:uo(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var w=ye;if(ye=0,bt=null,Qa(e,h,x,w),n&&La){f=0;break e}break;default:w=ye,ye=0,bt=null,Qa(e,h,x,w)}}I1(),f=Oe;break}catch(O){Ph(e,O)}while(!0);return t&&e.shellSuspendCounter++,en=Fn=null,xe=a,C.H=i,C.A=r,fe===null&&(we=null,he=0,Gi()),f}function I1(){for(;fe!==null;)tg(fe)}function eb(e,t){var n=xe;xe|=2;var a=Ih(),i=eg();we!==e||he!==t?(br=null,pr=Ht()+500,Va(e,t)):La=xl(e,t);e:do try{if(ye!==0&&fe!==null){t=fe;var r=bt;t:switch(ye){case 1:ye=0,bt=null,Qa(e,t,r,1);break;case 2:case 9:if(hd(r)){ye=0,bt=null,ng(t);break}t=function(){ye!==2&&ye!==9||we!==e||(ye=7),Vt(e)},r.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:hd(r)?(ye=0,bt=null,ng(t)):(ye=0,bt=null,Qa(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||Ug(f)){ye=0,bt=null;var x=h.sibling;if(x!==null)fe=x;else{var w=h.return;w!==null?(fe=w,yr(w)):fe=null}break t}}ye=0,bt=null,Qa(e,t,r,5);break;case 6:ye=0,bt=null,Qa(e,t,r,6);break;case 8:uo(),Oe=6;break e;default:throw Error(o(462))}}tb();break}catch(O){Ph(e,O)}while(!0);return en=Fn=null,C.H=a,C.A=i,xe=n,fe!==null?0:(we=null,he=0,Gi(),Oe)}function tb(){for(;fe!==null&&!_p();)tg(fe)}function tg(e){var t=Ah(e.alternate,e,on);e.memoizedProps=e.pendingProps,t===null?yr(e):fe=t}function ng(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=jh(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=jh(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:zs(t);default:Mh(n,t),t=fe=ad(t,on),t=Ah(n,t,on)}e.memoizedProps=e.pendingProps,t===null?yr(e):fe=t}function Qa(e,t,n,a){en=Fn=null,zs(t),ka=null,Zl=0;var i=t.return;try{if(Q1(e,i,t,n,he)){Oe=1,cr(e,zt(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;Oe=1,cr(e,zt(n,e.current)),fe=null;return}t.flags&32768?(me||a===1?e=!0:La||(he&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),ag(t,e)):yr(t)}function yr(e){var t=e;do{if((t.flags&32768)!==0){ag(t,An);return}e=t.return;var n=Z1(t.alternate,t,on);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Oe===0&&(Oe=5)}function ag(e,t){do{var n=K1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Oe=6,fe=null}function lg(e,t,n,a,i,r,f,h,x){e.cancelPendingCommit=null;do vr();while(We!==0);if((xe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=Iu,Op(e,n,r,f,h,x),e===we&&(fe=we=null,he=0),Ya=t,Dn=e,qa=n,lo=r,io=i,Jh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ib(wi,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,i=q.p,q.p=2,f=xe,xe|=4;try{J1(e,t,n)}finally{xe=f,q.p=i,C.T=a}}We=1,ig(),rg(),ug()}}function ig(){if(We===1){We=0;var e=Dn,t=Ya,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=q.p;q.p=2;var i=xe;xe|=4;try{Yh(t,e);var r=jo,f=Kf(e.containerInfo),h=r.focusedElem,x=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&Zf(h.ownerDocument.documentElement,h)){if(x!==null&&Ju(h)){var w=x.start,O=x.end;if(O===void 0&&(O=w),"selectionStart"in h)h.selectionStart=w,h.selectionEnd=Math.min(O,h.value.length);else{var k=h.ownerDocument||document,T=k&&k.defaultView||window;if(T.getSelection){var A=T.getSelection(),ne=h.textContent.length,I=Math.min(x.start,ne),je=x.end===void 0?I:Math.min(x.end,ne);!A.extend&&I>je&&(f=je,je=I,I=f);var _=Xf(h,I),S=Xf(h,je);if(_&&S&&(A.rangeCount!==1||A.anchorNode!==_.node||A.anchorOffset!==_.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var z=k.createRange();z.setStart(_.node,_.offset),A.removeAllRanges(),I>je?(A.addRange(z),A.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),A.addRange(z))}}}}for(k=[],A=h;A=A.parentNode;)A.nodeType===1&&k.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<k.length;h++){var B=k[h];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Cr=!!So,jo=So=null}finally{xe=i,q.p=a,C.T=n}}e.current=t,We=2}}function rg(){if(We===2){We=0;var e=Dn,t=Ya,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=q.p;q.p=2;var i=xe;xe|=4;try{Uh(e,t.alternate,t)}finally{xe=i,q.p=a,C.T=n}}We=3}}function ug(){if(We===4||We===3){We=0,zp();var e=Dn,t=Ya,n=qa,a=Jh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Ya=Dn=null,sg(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Mn=null),Tu(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,i=q.p,q.p=2,C.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{C.T=t,q.p=i}}(qa&3)!==0&&vr(),Vt(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===ro?ti++:(ti=0,ro=e):ti=0,ni(0)}}function sg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kl(t)))}function vr(e){return ig(),rg(),ug(),og()}function og(){if(We!==5)return!1;var e=Dn,t=lo;lo=0;var n=Tu(qa),a=C.T,i=q.p;try{q.p=32>n?32:n,C.T=null,n=io,io=null;var r=Dn,f=qa;if(We=0,Ya=Dn=null,qa=0,(xe&6)!==0)throw Error(o(331));var h=xe;if(xe|=4,Zh(r.current),Vh(r,r.current,f,n),xe=h,ni(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(bl,r)}catch{}return!0}finally{q.p=i,C.T=a,sg(e,t)}}function cg(e,t,n){t=zt(n,t),t=Hs(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(yl(e,2),Vt(e))}function ze(e,t,n){if(e.tag===3)cg(e,e,n);else for(;t!==null;){if(t.tag===3){cg(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){e=zt(n,e),n=gh(2),a=Sn(t,n,2),a!==null&&(mh(n,a,t,e),yl(a,2),Vt(a));break}}t=t.return}}function co(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new F1;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(eo=!0,i.add(n),e=nb.bind(null,e,t,n),t.then(e,e))}function nb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,we===e&&(he&n)===n&&(Oe===4||Oe===3&&(he&62914560)===he&&300>Ht()-ao?(xe&2)===0&&Va(e,0):to|=n,Ga===he&&(Ga=0)),Vt(e)}function fg(e,t){t===0&&(t=uf()),e=wa(e,t),e!==null&&(yl(e,t),Vt(e))}function ab(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fg(e,n)}function lb(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),fg(e,n)}function ib(e,t){return _u(e,t)}var Sr=null,Xa=null,fo=!1,jr=!1,ho=!1,la=0;function Vt(e){e!==Xa&&e.next===null&&(Xa===null?Sr=Xa=e:Xa=Xa.next=e),jr=!0,fo||(fo=!0,ub())}function ni(e,t){if(!ho&&jr){ho=!0;do for(var n=!1,a=Sr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=i&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,mg(a,r))}else r=he,r=Ai(a,a===we?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||xl(a,r)||(n=!0,mg(a,r));a=a.next}while(n);ho=!1}}function rb(){dg()}function dg(){jr=fo=!1;var e=0;la!==0&&(mb()&&(e=la),la=0);for(var t=Ht(),n=null,a=Sr;a!==null;){var i=a.next,r=hg(a,t);r===0?(a.next=null,n===null?Sr=i:n.next=i,i===null&&(Xa=n)):(n=a,(e!==0||(r&3)!==0)&&(jr=!0)),a=i}ni(e)}function hg(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,x=i[f];x===-1?((h&n)===0||(h&a)!==0)&&(i[f]=Cp(h,t)):x<=t&&(e.expiredLanes|=h),r&=~h}if(t=we,n=he,n=Ai(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&zu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&zu(a),Tu(n)){case 2:case 8:n=af;break;case 32:n=wi;break;case 268435456:n=lf;break;default:n=wi}return a=gg.bind(null,e),n=_u(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&zu(a),e.callbackPriority=2,e.callbackNode=null,2}function gg(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var a=he;return a=Ai(e,e===we?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Wh(e,a,t),hg(e,Ht()),e.callbackNode!=null&&e.callbackNode===n?gg.bind(null,e):null)}function mg(e,t){if(vr())return null;Wh(e,t,!0)}function ub(){bb(function(){(xe&6)!==0?_u(nf,rb):dg()})}function go(){return la===0&&(la=rf()),la}function pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function bg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function sb(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=pg((i[rt]||null).action),f=a.submitter;f&&(t=(t=f[rt]||null)?pg(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Ui("action","action",null,a,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var x=f?bg(i,f):new FormData(i);Os(n,{pending:!0,data:x,method:i.method,action:r},null,x)}}else typeof r=="function"&&(h.preventDefault(),x=f?bg(i,f):new FormData(i),Os(n,{pending:!0,data:x,method:i.method,action:r},r,x))},currentTarget:i}]})}}for(var mo=0;mo<Pu.length;mo++){var po=Pu[mo],ob=po.toLowerCase(),cb=po[0].toUpperCase()+po.slice(1);Ct(ob,"on"+cb)}Ct(Wf,"onAnimationEnd"),Ct(Ff,"onAnimationIteration"),Ct(Pf,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(T1,"onTransitionRun"),Ct(A1,"onTransitionStart"),Ct(R1,"onTransitionCancel"),Ct(If,"onTransitionEnd"),ma("onMouseEnter",["mouseout","mouseover"]),ma("onMouseLeave",["mouseout","mouseover"]),ma("onPointerEnter",["pointerout","pointerover"]),ma("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai));function xg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],x=h.instance,w=h.currentTarget;if(h=h.listener,x!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=w;try{r(i)}catch(O){or(O)}i.currentTarget=null,r=x}else for(f=0;f<a.length;f++){if(h=a[f],x=h.instance,w=h.currentTarget,h=h.listener,x!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=w;try{r(i)}catch(O){or(O)}i.currentTarget=null,r=x}}}}function de(e,t){var n=t[Au];n===void 0&&(n=t[Au]=new Set);var a=e+"__bubble";n.has(a)||(yg(t,e,2,!1),n.add(a))}function bo(e,t,n){var a=0;t&&(a|=4),yg(n,e,a,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[_r]){e[_r]=!0,df.forEach(function(n){n!=="selectionchange"&&(fb.has(n)||bo(n,!1,e),bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,bo("selectionchange",!1,t))}}function yg(e,t,n,a){switch(Vg(t)){case 2:var i=Hb;break;case 8:i=Lb;break;default:i=Co}n=i.bind(null,t,n,e),i=void 0,!Lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yo(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=a.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=da(h),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){a=r=f;continue e}h=h.parentNode}}a=a.return}Ef(function(){var w=r,O=Uu(n),k=[];e:{var T=ed.get(e);if(T!==void 0){var A=Ui,ne=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":A=i1;break;case"focusin":ne="focus",A=Vu;break;case"focusout":ne="blur",A=Vu;break;case"beforeblur":case"afterblur":A=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=s1;break;case Wf:case Ff:case Pf:A=Wp;break;case If:A=c1;break;case"scroll":case"scrollend":A=Xp;break;case"wheel":A=d1;break;case"copy":case"cut":case"paste":A=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Df;break;case"toggle":case"beforetoggle":A=g1}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),_=I?T!==null?T+"Capture":null:T;I=[];for(var S=w,z;S!==null;){var B=S;if(z=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||z===null||_===null||(B=jl(S,_),B!=null&&I.push(li(S,B,z))),je)break;S=S.return}0<I.length&&(T=new A(T,ne,null,n,O),k.push({event:T,listeners:I}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&n!==Nu&&(ne=n.relatedTarget||n.fromElement)&&(da(ne)||ne[fa]))break e;if((A||T)&&(T=O.window===O?O:(T=O.ownerDocument)?T.defaultView||T.parentWindow:window,A?(ne=n.relatedTarget||n.toElement,A=w,ne=ne?da(ne):null,ne!==null&&(je=g(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(A=null,ne=w),A!==ne)){if(I=Rf,B="onMouseLeave",_="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=Df,B="onPointerLeave",_="onPointerEnter",S="pointer"),je=A==null?T:Sl(A),z=ne==null?T:Sl(ne),T=new I(B,S+"leave",A,n,O),T.target=je,T.relatedTarget=z,B=null,da(O)===w&&(I=new I(_,S+"enter",ne,n,O),I.target=z,I.relatedTarget=je,B=I),je=B,A&&ne)t:{for(I=A,_=ne,S=0,z=I;z;z=Za(z))S++;for(z=0,B=_;B;B=Za(B))z++;for(;0<S-z;)I=Za(I),S--;for(;0<z-S;)_=Za(_),z--;for(;S--;){if(I===_||_!==null&&I===_.alternate)break t;I=Za(I),_=Za(_)}I=null}else I=null;A!==null&&vg(k,T,A,I,!1),ne!==null&&je!==null&&vg(k,je,ne,I,!0)}}e:{if(T=w?Sl(w):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var K=Lf;else if(Uf(T))if(Gf)K=z1;else{K=j1;var se=S1}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&ku(w.elementType)&&(K=Lf):K=_1;if(K&&(K=K(e,w))){Hf(k,K,n,O);break e}se&&se(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&Bu(T,"number",T.value)}switch(se=w?Sl(w):window,e){case"focusin":(Uf(se)||se.contentEditable==="true")&&(ja=se,$u=w,Ml=null);break;case"focusout":Ml=$u=ja=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Jf(k,n,O);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":Jf(k,n,O)}var J;if(Xu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Sa?kf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Cf&&n.locale!=="ko"&&(Sa||te!=="onCompositionStart"?te==="onCompositionEnd"&&Sa&&(J=Tf()):(bn=O,Gu="value"in bn?bn.value:bn.textContent,Sa=!0)),se=zr(w,te),0<se.length&&(te=new Mf(te,e,null,n,O),k.push({event:te,listeners:se}),J?te.data=J:(J=Nf(n),J!==null&&(te.data=J)))),(J=p1?b1(e,n):x1(e,n))&&(te=zr(w,"onBeforeInput"),0<te.length&&(se=new Mf("onBeforeInput","beforeinput",null,n,O),k.push({event:se,listeners:te}),se.data=J)),sb(k,e,w,n,O)}xg(k,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=jl(e,n),i!=null&&a.unshift(li(e,i,r)),i=jl(e,t),i!=null&&a.push(li(e,i,r))),e.tag===3)return a;e=e.return}return[]}function Za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vg(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,x=h.alternate,w=h.stateNode;if(h=h.tag,x!==null&&x===a)break;h!==5&&h!==26&&h!==27||w===null||(x=w,i?(w=jl(n,r),w!=null&&f.unshift(li(n,w,x))):i||(w=jl(n,r),w!=null&&f.push(li(n,w,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var db=/\r\n?/g,hb=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(db,`
`).replace(hb,"")}function jg(e,t){return t=Sg(t),Sg(e)===t}function wr(){}function Se(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||xa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&xa(e,""+a);break;case"className":Mi(e,"class",a);break;case"tabIndex":Mi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,n,a);break;case"style":zf(e,a,r);break;case"data":if(t!=="object"){Mi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Oi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",i.name,i,null),Se(e,t,"formEncType",i.formEncType,i,null),Se(e,t,"formMethod",i.formMethod,i,null),Se(e,t,"formTarget",i.formTarget,i,null)):(Se(e,t,"encType",i.encType,i,null),Se(e,t,"method",i.method,i,null),Se(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Oi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=wr);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Oi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Ri(e,"popover",a);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ri(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Vp.get(n)||n,Ri(e,n,a))}}function vo(e,t,n,a,i,r){switch(n){case"style":zf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof a=="string"?xa(e,a):(typeof a=="number"||typeof a=="bigint")&&xa(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=wr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[rt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ri(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,r,f,n,null)}}i&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=i=null,x=null,w=null;for(a in n)if(n.hasOwnProperty(a)){var O=n[a];if(O!=null)switch(a){case"name":i=O;break;case"type":f=O;break;case"checked":x=O;break;case"defaultChecked":w=O;break;case"value":r=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Se(e,t,a,O,n,null)}}vf(e,r,h,x,w,f,i,!1),Di(e);return;case"select":de("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,i,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ba(e,!!a,t,!1):n!=null&&ba(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Se(e,t,f,h,n,null)}jf(e,a,i,r),Di(e);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,x,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ai.length;a++)de(ai[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,w,a,n,null)}return;default:if(ku(t)){for(O in n)n.hasOwnProperty(O)&&(a=n[O],a!==void 0&&vo(e,t,O,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function gb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,h=null,x=null,w=null,O=null;for(A in n){var k=n[A];if(n.hasOwnProperty(A)&&k!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":x=k;default:a.hasOwnProperty(A)||Se(e,t,A,null,a,k)}}for(var T in a){var A=a[T];if(k=n[T],a.hasOwnProperty(T)&&(A!=null||k!=null))switch(T){case"type":r=A;break;case"name":i=A;break;case"checked":w=A;break;case"defaultChecked":O=A;break;case"value":f=A;break;case"defaultValue":h=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:A!==k&&Se(e,t,T,A,a,k)}}Ou(e,f,h,x,w,O,r,i);return;case"select":A=f=h=T=null;for(r in n)if(x=n[r],n.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":A=x;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,x)}for(i in a)if(r=a[i],x=n[i],a.hasOwnProperty(i)&&(r!=null||x!=null))switch(i){case"value":T=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==x&&Se(e,t,i,r,a,x)}t=h,n=f,a=A,T!=null?ba(e,!!n,T,!1):!!a!=!!n&&(t!=null?ba(e,!!n,t,!0):ba(e,!!n,n?[]:"",!1));return;case"textarea":A=T=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":T=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==r&&Se(e,t,f,i,a,r)}Sf(e,T,A);return;case"option":for(var ne in n)if(T=n[ne],n.hasOwnProperty(ne)&&T!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,T)}for(x in a)if(T=a[x],A=n[x],a.hasOwnProperty(x)&&T!==A&&(T!=null||A!=null))switch(x){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Se(e,t,x,T,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)T=n[I],n.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,T);for(w in a)if(T=a[w],A=n[w],a.hasOwnProperty(w)&&T!==A&&(T!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:Se(e,t,w,T,a,A)}return;default:if(ku(t)){for(var je in n)T=n[je],n.hasOwnProperty(je)&&T!==void 0&&!a.hasOwnProperty(je)&&vo(e,t,je,void 0,a,T);for(O in a)T=a[O],A=n[O],!a.hasOwnProperty(O)||T===A||T===void 0&&A===void 0||vo(e,t,O,T,a,A);return}}for(var _ in n)T=n[_],n.hasOwnProperty(_)&&T!=null&&!a.hasOwnProperty(_)&&Se(e,t,_,null,a,T);for(k in a)T=a[k],A=n[k],!a.hasOwnProperty(k)||T===A||T==null&&A==null||Se(e,t,k,T,a,A)}var So=null,jo=null;function Er(e){return e.nodeType===9?e:e.ownerDocument}function _g(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zo=null;function mb(){var e=window.event;return e&&e.type==="popstate"?e===zo?!1:(zo=e,!0):(zo=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,pb=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,bb=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(e){return Eg.resolve(null).then(e).catch(xb)}:wg;function xb(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function Tg(e,t){var n=t,a=0,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&ii(f.documentElement),n&2&&ii(f.body),n&4)for(n=f.head,ii(n),f=n.firstChild;f;){var h=f.nextSibling,x=f.nodeName;f[vl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(i===0){e.removeChild(r),hi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);hi(t)}function wo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wo(n),Ru(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yb(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function vb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function Eo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Sb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var To=null;function Ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Rg(e,t,n){switch(t=Er(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ii(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ru(e)}var Mt=new Map,Mg=new Set;function Tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=q.d;q.d={f:jb,r:_b,D:zb,C:wb,L:Eb,m:Tb,X:Rb,S:Ab,M:Mb};function jb(){var e=cn.f(),t=xr();return e||t}function _b(e){var t=ha(e);t!==null&&t.tag===5&&t.type==="form"?Wd(t):cn.r(e)}var Ka=typeof document>"u"?null:document;function Dg(e,t,n){var a=Ka;if(a&&typeof t=="string"&&t){var i=_t(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Mg.has(i)||(Mg.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Fe(t,"link",e),Qe(t),a.head.appendChild(t)))}}function zb(e){cn.D(e),Dg("dns-prefetch",e,null)}function wb(e,t){cn.C(e,t),Dg("preconnect",e,t)}function Eb(e,t,n){cn.L(e,t,n);var a=Ka;if(a&&e&&t){var i='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+_t(n.imageSizes)+'"]')):i+='[href="'+_t(e)+'"]';var r=i;switch(t){case"style":r=Ja(e);break;case"script":r=$a(e)}Mt.has(r)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(ri(r))||t==="script"&&a.querySelector(ui(r))||(t=a.createElement("link"),Fe(t,"link",e),Qe(t),a.head.appendChild(t)))}}function Tb(e,t){cn.m(e,t);var n=Ka;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+_t(a)+'"][href="'+_t(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=$a(e)}if(!Mt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ui(r)))return}a=n.createElement("link"),Fe(a,"link",e),Qe(a),n.head.appendChild(a)}}}function Ab(e,t,n){cn.S(e,t,n);var a=Ka;if(a&&e){var i=ga(a).hoistableStyles,r=Ja(e);t=t||"default";var f=i.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(ri(r)))h.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&Ao(e,n);var x=f=a.createElement("link");Qe(x),Fe(x,"link",e),x._p=new Promise(function(w,O){x.onload=w,x.onerror=O}),x.addEventListener("load",function(){h.loading|=1}),x.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Ar(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(r,f)}}}function Rb(e,t){cn.X(e,t);var n=Ka;if(n&&e){var a=ga(n).hoistableScripts,i=$a(e),r=a.get(i);r||(r=n.querySelector(ui(i)),r||(e=E({src:e,async:!0},t),(t=Mt.get(i))&&Ro(e,t),r=n.createElement("script"),Qe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Mb(e,t){cn.M(e,t);var n=Ka;if(n&&e){var a=ga(n).hoistableScripts,i=$a(e),r=a.get(i);r||(r=n.querySelector(ui(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&Ro(e,t),r=n.createElement("script"),Qe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Cg(e,t,n,a){var i=(i=ee.current)?Tr(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ja(n.href),n=ga(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ja(n.href);var r=ga(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(ri(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||Db(i,e,n,f.state))),t&&a===null)throw Error(o(528,""));return f}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$a(n),n=ga(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ja(e){return'href="'+_t(e)+'"'}function ri(e){return'link[rel="stylesheet"]['+e+"]"}function Og(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Db(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Qe(t),e.head.appendChild(t))}function $a(e){return'[src="'+_t(e)+'"]'}function ui(e){return"script[async]"+e}function Bg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(a)return t.instance=a,Qe(a),a;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Qe(a),Fe(a,"style",i),Ar(a,n.precedence,e),t.instance=a;case"stylesheet":i=Ja(n.href);var r=e.querySelector(ri(i));if(r)return t.state.loading|=4,t.instance=r,Qe(r),r;a=Og(n),(i=Mt.get(i))&&Ao(a,i),r=(e.ownerDocument||e).createElement("link"),Qe(r);var f=r;return f._p=new Promise(function(h,x){f.onload=h,f.onerror=x}),Fe(r,"link",a),t.state.loading|=4,Ar(r,n.precedence,e),t.instance=r;case"script":return r=$a(n.src),(i=e.querySelector(ui(r)))?(t.instance=i,Qe(i),i):(a=n,(i=Mt.get(r))&&(a=E({},n),Ro(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Qe(i),Fe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ar(a,n.precedence,e));return t.instance}function Ar(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ao(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ro(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rr=null;function kg(e,t,n){if(Rr===null){var a=new Map,i=Rr=new Map;i.set(n,a)}else i=Rr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[vl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function Ng(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Cb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var si=null;function Ob(){}function Bb(e,t,n){if(si===null)throw Error(o(475));var a=si;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ja(n.href),r=e.querySelector(ri(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Mr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Qe(r);return}r=e.ownerDocument||e,n=Og(n),(i=Mt.get(i))&&Ao(n,i),r=r.createElement("link"),Qe(r);var f=r;f._p=new Promise(function(h,x){f.onload=h,f.onerror=x}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Mr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function kb(){if(si===null)throw Error(o(475));var e=si;return e.stylesheets&&e.count===0&&Mo(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Mo(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Mr(){if(this.count--,this.count===0){if(this.stylesheets)Mo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dr=null;function Mo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dr=new Map,t.forEach(Nb,e),Dr=null,Mr.call(e))}function Nb(e,t){if(!(t.state.loading&4)){var n=Dr.get(e);if(n)var a=n.get(null);else{n=new Map,Dr.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=Mr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var oi={$$typeof:X,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Ub(e,t,n,a,i,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.hiddenUpdates=wu(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Hg(e,t,n,a,i,r,f,h,x,w,O,k){return e=new Ub(e,t,n,f,h,x,w,k),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=cs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},gs(r),e}function Lg(e){return e?(e=Ea,e):Ea}function Gg(e,t,n,a,i,r){i=Lg(i),a.context===null?a.context=i:a.pendingContext=i,a=vn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Sn(e,a,t),n!==null&&(yt(n,e,t),Ll(n,e,t))}function Yg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Do(e,t){Yg(e,t),(e=e.alternate)&&Yg(e,t)}function qg(e){if(e.tag===13){var t=wa(e,67108864);t!==null&&yt(t,e,67108864),Do(e,67108864)}}var Cr=!0;function Hb(e,t,n,a){var i=C.T;C.T=null;var r=q.p;try{q.p=2,Co(e,t,n,a)}finally{q.p=r,C.T=i}}function Lb(e,t,n,a){var i=C.T;C.T=null;var r=q.p;try{q.p=8,Co(e,t,n,a)}finally{q.p=r,C.T=i}}function Co(e,t,n,a){if(Cr){var i=Oo(a);if(i===null)yo(e,t,a,Or,n),Qg(e,a);else if(Yb(i,e,t,n,a))a.stopPropagation();else if(Qg(e,a),t&4&&-1<Gb.indexOf(e)){for(;i!==null;){var r=ha(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Yn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var x=1<<31-dt(f);h.entanglements[1]|=x,f&=~x}Vt(r),(xe&6)===0&&(pr=Ht()+500,ni(0))}}break;case 13:h=wa(r,2),h!==null&&yt(h,r,2),xr(),Do(r,2)}if(r=Oo(a),r===null&&yo(e,t,a,Or,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else yo(e,t,a,null,n)}}function Oo(e){return e=Uu(e),Bo(e)}var Or=null;function Bo(e){if(Or=null,e=da(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Or=e,null}function Vg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wp()){case nf:return 2;case af:return 8;case wi:case Ep:return 32;case lf:return 268435456;default:return 32}default:return 32}}var ko=!1,Bn=null,kn=null,Nn=null,ci=new Map,fi=new Map,Un=[],Gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qg(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function di(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ha(t),t!==null&&qg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yb(e,t,n,a,i){switch(t){case"focusin":return Bn=di(Bn,e,t,n,a,i),!0;case"dragenter":return kn=di(kn,e,t,n,a,i),!0;case"mouseover":return Nn=di(Nn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return ci.set(r,di(ci.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,fi.set(r,di(fi.get(r)||null,e,t,n,a,i)),!0}return!1}function Xg(e){var t=da(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,Bp(e.priority,function(){if(n.tag===13){var a=xt();a=Eu(a);var i=wa(n,a);i!==null&&yt(i,n,a),Do(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oo(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Nu=a,n.target.dispatchEvent(a),Nu=null}else return t=ha(n),t!==null&&qg(t),e.blockedOn=n,!1;t.shift()}return!0}function Zg(e,t,n){Br(e)&&n.delete(t)}function qb(){ko=!1,Bn!==null&&Br(Bn)&&(Bn=null),kn!==null&&Br(kn)&&(kn=null),Nn!==null&&Br(Nn)&&(Nn=null),ci.forEach(Zg),fi.forEach(Zg)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,qb)))}var Nr=null;function Kg(e){Nr!==e&&(Nr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Nr===e&&(Nr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Bo(a||n)===null)continue;break}var r=ha(n);r!==null&&(e.splice(t,3),t-=3,Os(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function hi(e){function t(x){return kr(x,e)}Bn!==null&&kr(Bn,e),kn!==null&&kr(kn,e),Nn!==null&&kr(Nn,e),ci.forEach(t),fi.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Xg(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[rt]||null;if(typeof r=="function")f||Kg(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[rt]||null)h=f.formAction;else if(Bo(i)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Kg(n)}}}function No(e){this._internalRoot=e}Ur.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,a=xt();Gg(n,a,e,t,null,null)},Ur.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gg(e.current,2,null,e,null,null),xr(),t[fa]=null}};function Ur(e){this._internalRoot=e}Ur.prototype.unstable_scheduleHydration=function(e){if(e){var t=cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Xg(e)}};var Jg=s.version;if(Jg!=="19.1.0")throw Error(o(527,Jg,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Vb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{bl=Hr.inject(Vb),ft=Hr}catch{}}return mi.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,a="",i=ch,r=fh,f=dh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=Hg(e,1,!1,null,null,n,a,i,r,f,h,null),e[fa]=t.current,xo(e),new No(t)},mi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var a=!1,i="",r=ch,f=fh,h=dh,x=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),t=Hg(e,1,!0,t,n??null,a,i,r,f,h,x,w),t.context=Lg(null),n=t.current,a=xt(),a=Eu(a),i=vn(a),i.callback=null,Sn(n,i,a),n=a,t.current.lanes=n,yl(t,n),Vt(t),e[fa]=t.current,xo(e),new Ur(t)},mi.version="19.1.0",mi}var lm;function ex(){if(lm)return Lo.exports;lm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Lo.exports=Ib(),Lo.exports}var tx=ex(),nt=function(){return nt=Object.assign||function(s){for(var c,o=1,d=arguments.length;o<d;o++){c=arguments[o];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(s[g]=c[g])}return s},nt.apply(this,arguments)};function su(l,s,c){if(c||arguments.length===2)for(var o=0,d=s.length,g;o<d;o++)(g||!(o in s))&&(g||(g=Array.prototype.slice.call(s,0,o)),g[o]=s[o]);return l.concat(g||Array.prototype.slice.call(s))}var Te="-ms-",vi="-moz-",be="-webkit-",Ym="comm",gu="rule",qc="decl",nx="@import",qm="@keyframes",ax="@layer",Vm=Math.abs,Vc=String.fromCharCode,Cc=Object.assign;function lx(l,s){return Je(l,0)^45?(((s<<2^Je(l,0))<<2^Je(l,1))<<2^Je(l,2))<<2^Je(l,3):0}function Qm(l){return l.trim()}function fn(l,s){return(l=s.exec(l))?l[0]:l}function re(l,s,c){return l.replace(s,c)}function tu(l,s,c){return l.indexOf(s,c)}function Je(l,s){return l.charCodeAt(s)|0}function ol(l,s,c){return l.slice(s,c)}function Qt(l){return l.length}function Xm(l){return l.length}function yi(l,s){return s.push(l),l}function ix(l,s){return l.map(s).join("")}function im(l,s){return l.filter(function(c){return!fn(c,s)})}var mu=1,cl=1,Zm=0,Dt=0,He=0,hl="";function pu(l,s,c,o,d,g,b,j){return{value:l,root:s,parent:c,type:o,props:d,children:g,line:mu,column:cl,length:b,return:"",siblings:j}}function Ln(l,s){return Cc(pu("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},s)}function Wa(l){for(;l.root;)l=Ln(l.root,{children:[l]});yi(l,l.siblings)}function rx(){return He}function ux(){return He=Dt>0?Je(hl,--Dt):0,cl--,He===10&&(cl=1,mu--),He}function kt(){return He=Dt<Zm?Je(hl,Dt++):0,cl++,He===10&&(cl=1,mu++),He}function ra(){return Je(hl,Dt)}function nu(){return Dt}function bu(l,s){return ol(hl,l,s)}function Oc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sx(l){return mu=cl=1,Zm=Qt(hl=l),Dt=0,[]}function ox(l){return hl="",l}function Vo(l){return Qm(bu(Dt-1,Bc(l===91?l+2:l===40?l+1:l)))}function cx(l){for(;(He=ra())&&He<33;)kt();return Oc(l)>2||Oc(He)>3?"":" "}function fx(l,s){for(;--s&&kt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return bu(l,nu()+(s<6&&ra()==32&&kt()==32))}function Bc(l){for(;kt();)switch(He){case l:return Dt;case 34:case 39:l!==34&&l!==39&&Bc(He);break;case 40:l===41&&Bc(l);break;case 92:kt();break}return Dt}function dx(l,s){for(;kt()&&l+He!==57;)if(l+He===84&&ra()===47)break;return"/*"+bu(s,Dt-1)+"*"+Vc(l===47?l:kt())}function hx(l){for(;!Oc(ra());)kt();return bu(l,Dt)}function gx(l){return ox(au("",null,null,null,[""],l=sx(l),0,[0],l))}function au(l,s,c,o,d,g,b,j,y){for(var p=0,E=0,R=b,D=0,H=0,L=0,G=1,Q=1,U=1,$=0,X="",ae=d,Z=g,le=o,W=X;Q;)switch(L=$,$=kt()){case 40:if(L!=108&&Je(W,R-1)==58){tu(W+=re(Vo($),"&","&\f"),"&\f",Vm(p?j[p-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:W+=Vo($);break;case 9:case 10:case 13:case 32:W+=cx(L);break;case 92:W+=fx(nu()-1,7);continue;case 47:switch(ra()){case 42:case 47:yi(mx(dx(kt(),nu()),s,c,y),y);break;default:W+="/"}break;case 123*G:j[p++]=Qt(W)*U;case 125*G:case 59:case 0:switch($){case 0:case 125:Q=0;case 59+E:U==-1&&(W=re(W,/\f/g,"")),H>0&&Qt(W)-R&&yi(H>32?um(W+";",o,c,R-1,y):um(re(W," ","")+";",o,c,R-2,y),y);break;case 59:W+=";";default:if(yi(le=rm(W,s,c,p,E,d,j,X,ae=[],Z=[],R,g),g),$===123)if(E===0)au(W,s,le,le,ae,g,R,j,Z);else switch(D===99&&Je(W,3)===110?100:D){case 100:case 108:case 109:case 115:au(l,le,le,o&&yi(rm(l,le,le,0,0,d,j,X,d,ae=[],R,Z),Z),d,Z,R,j,o?ae:Z);break;default:au(W,le,le,le,[""],Z,0,j,Z)}}p=E=H=0,G=U=1,X=W="",R=b;break;case 58:R=1+Qt(W),H=L;default:if(G<1){if($==123)--G;else if($==125&&G++==0&&ux()==125)continue}switch(W+=Vc($),$*G){case 38:U=E>0?1:(W+="\f",-1);break;case 44:j[p++]=(Qt(W)-1)*U,U=1;break;case 64:ra()===45&&(W+=Vo(kt())),D=ra(),E=R=Qt(X=W+=hx(nu())),$++;break;case 45:L===45&&Qt(W)==2&&(G=0)}}return g}function rm(l,s,c,o,d,g,b,j,y,p,E,R){for(var D=d-1,H=d===0?g:[""],L=Xm(H),G=0,Q=0,U=0;G<o;++G)for(var $=0,X=ol(l,D+1,D=Vm(Q=b[G])),ae=l;$<L;++$)(ae=Qm(Q>0?H[$]+" "+X:re(X,/&\f/g,H[$])))&&(y[U++]=ae);return pu(l,s,c,d===0?gu:j,y,p,E,R)}function mx(l,s,c,o){return pu(l,s,c,Ym,Vc(rx()),ol(l,2,-2),0,o)}function um(l,s,c,o,d){return pu(l,s,c,qc,ol(l,0,o),ol(l,o+1,-1),o,d)}function Km(l,s,c){switch(lx(l,s)){case 5103:return be+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+l+l;case 4789:return vi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return be+l+vi+l+Te+l+l;case 5936:switch(Je(l,s+11)){case 114:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return be+l+Te+l+l;case 6165:return be+l+Te+"flex-"+l+l;case 5187:return be+l+re(l,/(\w+).+(:[^]+)/,be+"box-$1$2"+Te+"flex-$1$2")+l;case 5443:return be+l+Te+"flex-item-"+re(l,/flex-|-self/g,"")+(fn(l,/flex-|baseline/)?"":Te+"grid-row-"+re(l,/flex-|-self/g,""))+l;case 4675:return be+l+Te+"flex-line-pack"+re(l,/align-content|flex-|-self/g,"")+l;case 5548:return be+l+Te+re(l,"shrink","negative")+l;case 5292:return be+l+Te+re(l,"basis","preferred-size")+l;case 6060:return be+"box-"+re(l,"-grow","")+be+l+Te+re(l,"grow","positive")+l;case 4554:return be+re(l,/([^-])(transform)/g,"$1"+be+"$2")+l;case 6187:return re(re(re(l,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),l,"")+l;case 5495:case 3959:return re(l,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(l,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+l+l;case 4200:if(!fn(l,/flex-|baseline/))return Te+"grid-column-align"+ol(l,s)+l;break;case 2592:case 3360:return Te+re(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(o,d){return s=d,fn(o.props,/grid-\w+-end/)})?~tu(l+(c=c[s].value),"span",0)?l:Te+re(l,"-start","")+l+Te+"grid-row-span:"+(~tu(c,"span",0)?fn(c,/\d+/):+fn(c,/\d+/)-+fn(l,/\d+/))+";":Te+re(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(o){return fn(o.props,/grid-\w+-start/)})?l:Te+re(re(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return re(l,/(.+)-inline(.+)/,be+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(l)-1-s>6)switch(Je(l,s+1)){case 109:if(Je(l,s+4)!==45)break;case 102:return re(l,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+vi+(Je(l,s+3)==108?"$3":"$2-$3"))+l;case 115:return~tu(l,"stretch",0)?Km(re(l,"stretch","fill-available"),s,c)+l:l}break;case 5152:case 5920:return re(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,d,g,b,j,y,p){return Te+d+":"+g+p+(b?Te+d+"-span:"+(j?y:+y-+g)+p:"")+l});case 4949:if(Je(l,s+6)===121)return re(l,":",":"+be)+l;break;case 6444:switch(Je(l,Je(l,14)===45?18:11)){case 120:return re(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(l,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Te+"$2box$3")+l;case 100:return re(l,":",":"+Te)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(l,"scroll-","scroll-snap-")+l}return l}function ou(l,s){for(var c="",o=0;o<l.length;o++)c+=s(l[o],o,l,s)||"";return c}function px(l,s,c,o){switch(l.type){case ax:if(l.children.length)break;case nx:case qc:return l.return=l.return||l.value;case Ym:return"";case qm:return l.return=l.value+"{"+ou(l.children,o)+"}";case gu:if(!Qt(l.value=l.props.join(",")))return""}return Qt(c=ou(l.children,o))?l.return=l.value+"{"+c+"}":""}function bx(l){var s=Xm(l);return function(c,o,d,g){for(var b="",j=0;j<s;j++)b+=l[j](c,o,d,g)||"";return b}}function xx(l){return function(s){s.root||(s=s.return)&&l(s)}}function yx(l,s,c,o){if(l.length>-1&&!l.return)switch(l.type){case qc:l.return=Km(l.value,l.length,c);return;case qm:return ou([Ln(l,{value:re(l.value,"@","@"+be)})],o);case gu:if(l.length)return ix(c=l.props,function(d){switch(fn(d,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(Ln(l,{props:[re(d,/:(read-\w+)/,":"+vi+"$1")]})),Wa(Ln(l,{props:[d]})),Cc(l,{props:im(c,o)});break;case"::placeholder":Wa(Ln(l,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Wa(Ln(l,{props:[re(d,/:(plac\w+)/,":"+vi+"$1")]})),Wa(Ln(l,{props:[re(d,/:(plac\w+)/,Te+"input-$1")]})),Wa(Ln(l,{props:[d]})),Cc(l,{props:im(c,o)});break}return""})}}var vx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},fl=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",Jm="active",$m="data-styled-version",xu="6.1.19",Qc=`/*!sc*/
`,cu=typeof window<"u"&&typeof document<"u",Sx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),yu=Object.freeze([]),dl=Object.freeze({});function jx(l,s,c){return c===void 0&&(c=dl),l.theme!==c.theme&&l.theme||s||c.theme}var Wm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_x=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zx=/(^-|-$)/g;function sm(l){return l.replace(_x,"-").replace(zx,"")}var wx=/(a)(d)/gi,Lr=52,om=function(l){return String.fromCharCode(l+(l>25?39:97))};function kc(l){var s,c="";for(s=Math.abs(l);s>Lr;s=s/Lr|0)c=om(s%Lr)+c;return(om(s%Lr)+c).replace(wx,"$1-$2")}var Qo,Fm=5381,sl=function(l,s){for(var c=s.length;c;)l=33*l^s.charCodeAt(--c);return l},Pm=function(l){return sl(Fm,l)};function Ex(l){return kc(Pm(l)>>>0)}function Tx(l){return l.displayName||l.name||"Component"}function Xo(l){return typeof l=="string"&&!0}var Im=typeof Symbol=="function"&&Symbol.for,e0=Im?Symbol.for("react.memo"):60115,Ax=Im?Symbol.for("react.forward_ref"):60112,Rx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dx=((Qo={})[Ax]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qo[e0]=t0,Qo);function cm(l){return("type"in(s=l)&&s.type.$$typeof)===e0?t0:"$$typeof"in l?Dx[l.$$typeof]:Rx;var s}var Cx=Object.defineProperty,Ox=Object.getOwnPropertyNames,fm=Object.getOwnPropertySymbols,Bx=Object.getOwnPropertyDescriptor,kx=Object.getPrototypeOf,dm=Object.prototype;function n0(l,s,c){if(typeof s!="string"){if(dm){var o=kx(s);o&&o!==dm&&n0(l,o,c)}var d=Ox(s);fm&&(d=d.concat(fm(s)));for(var g=cm(l),b=cm(s),j=0;j<d.length;++j){var y=d[j];if(!(y in Mx||c&&c[y]||b&&y in b||g&&y in g)){var p=Bx(s,y);try{Cx(l,y,p)}catch{}}}}return l}function oa(l){return typeof l=="function"}function Xc(l){return typeof l=="object"&&"styledComponentId"in l}function ia(l,s){return l&&s?"".concat(l," ").concat(s):l||s||""}function hm(l,s){if(l.length===0)return"";for(var c=l[0],o=1;o<l.length;o++)c+=l[o];return c}function Si(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Nc(l,s,c){if(c===void 0&&(c=!1),!c&&!Si(l)&&!Array.isArray(l))return s;if(Array.isArray(s))for(var o=0;o<s.length;o++)l[o]=Nc(l[o],s[o]);else if(Si(s))for(var o in s)l[o]=Nc(l[o],s[o]);return l}function Zc(l,s){Object.defineProperty(l,"toString",{value:s})}function ca(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Nx=function(){function l(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return l.prototype.indexOfGroup=function(s){for(var c=0,o=0;o<s;o++)c+=this.groupSizes[o];return c},l.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var o=this.groupSizes,d=o.length,g=d;s>=g;)if((g<<=1)<0)throw ca(16,"".concat(s));this.groupSizes=new Uint32Array(g),this.groupSizes.set(o),this.length=g;for(var b=d;b<g;b++)this.groupSizes[b]=0}for(var j=this.indexOfGroup(s+1),y=(b=0,c.length);b<y;b++)this.tag.insertRule(j,c[b])&&(this.groupSizes[s]++,j++)},l.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],o=this.indexOfGroup(s),d=o+c;this.groupSizes[s]=0;for(var g=o;g<d;g++)this.tag.deleteRule(o)}},l.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var o=this.groupSizes[s],d=this.indexOfGroup(s),g=d+o,b=d;b<g;b++)c+="".concat(this.tag.getRule(b)).concat(Qc);return c},l}(),lu=new Map,fu=new Map,iu=1,Gr=function(l){if(lu.has(l))return lu.get(l);for(;fu.has(iu);)iu++;var s=iu++;return lu.set(l,s),fu.set(s,l),s},Ux=function(l,s){iu=s+1,lu.set(l,s),fu.set(s,l)},Hx="style[".concat(fl,"][").concat($m,'="').concat(xu,'"]'),Lx=new RegExp("^".concat(fl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gx=function(l,s,c){for(var o,d=c.split(","),g=0,b=d.length;g<b;g++)(o=d[g])&&l.registerName(s,o)},Yx=function(l,s){for(var c,o=((c=s.textContent)!==null&&c!==void 0?c:"").split(Qc),d=[],g=0,b=o.length;g<b;g++){var j=o[g].trim();if(j){var y=j.match(Lx);if(y){var p=0|parseInt(y[1],10),E=y[2];p!==0&&(Ux(E,p),Gx(l,E,y[3]),l.getTag().insertRules(p,d)),d.length=0}else d.push(j)}}},gm=function(l){for(var s=document.querySelectorAll(Hx),c=0,o=s.length;c<o;c++){var d=s[c];d&&d.getAttribute(fl)!==Jm&&(Yx(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function qx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var a0=function(l){var s=document.head,c=l||s,o=document.createElement("style"),d=function(j){var y=Array.from(j.querySelectorAll("style[".concat(fl,"]")));return y[y.length-1]}(c),g=d!==void 0?d.nextSibling:null;o.setAttribute(fl,Jm),o.setAttribute($m,xu);var b=qx();return b&&o.setAttribute("nonce",b),c.insertBefore(o,g),o},Vx=function(){function l(s){this.element=a0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,d=0,g=o.length;d<g;d++){var b=o[d];if(b.ownerNode===c)return b}throw ca(17)}(this.element),this.length=0}return l.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},l.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},l}(),Qx=function(){function l(s){this.element=a0(s),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[s]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},l.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},l}(),Xx=function(){function l(s){this.rules=[],this.length=0}return l.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},l.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},l.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},l}(),mm=cu,Zx={isServer:!cu,useCSSOMInjection:!Sx},l0=function(){function l(s,c,o){s===void 0&&(s=dl),c===void 0&&(c={});var d=this;this.options=nt(nt({},Zx),s),this.gs=c,this.names=new Map(o),this.server=!!s.isServer,!this.server&&cu&&mm&&(mm=!1,gm(this)),Zc(this,function(){return function(g){for(var b=g.getTag(),j=b.length,y="",p=function(R){var D=function(U){return fu.get(U)}(R);if(D===void 0)return"continue";var H=g.names.get(D),L=b.getGroup(R);if(H===void 0||!H.size||L.length===0)return"continue";var G="".concat(fl,".g").concat(R,'[id="').concat(D,'"]'),Q="";H!==void 0&&H.forEach(function(U){U.length>0&&(Q+="".concat(U,","))}),y+="".concat(L).concat(G,'{content:"').concat(Q,'"}').concat(Qc)},E=0;E<j;E++)p(E);return y}(d)})}return l.registerId=function(s){return Gr(s)},l.prototype.rehydrate=function(){!this.server&&cu&&gm(this)},l.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new l(nt(nt({},this.options),s),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var o=c.useCSSOMInjection,d=c.target;return c.isServer?new Xx(d):o?new Vx(d):new Qx(d)}(this.options),new Nx(s)));var s},l.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},l.prototype.registerName=function(s,c){if(Gr(s),this.names.has(s))this.names.get(s).add(c);else{var o=new Set;o.add(c),this.names.set(s,o)}},l.prototype.insertRules=function(s,c,o){this.registerName(s,c),this.getTag().insertRules(Gr(s),o)},l.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},l.prototype.clearRules=function(s){this.getTag().clearGroup(Gr(s)),this.clearNames(s)},l.prototype.clearTag=function(){this.tag=void 0},l}(),Kx=/&/g,Jx=/^\s*\/\/.*$/gm;function i0(l,s){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(o){return"".concat(s," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=i0(c.children,s)),c})}function $x(l){var s,c,o,d=dl,g=d.options,b=g===void 0?dl:g,j=d.plugins,y=j===void 0?yu:j,p=function(D,H,L){return L.startsWith(c)&&L.endsWith(c)&&L.replaceAll(c,"").length>0?".".concat(s):D},E=y.slice();E.push(function(D){D.type===gu&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(Kx,c).replace(o,p))}),b.prefix&&E.push(yx),E.push(px);var R=function(D,H,L,G){H===void 0&&(H=""),L===void 0&&(L=""),G===void 0&&(G="&"),s=G,c=H,o=new RegExp("\\".concat(c,"\\b"),"g");var Q=D.replace(Jx,""),U=gx(L||H?"".concat(L," ").concat(H," { ").concat(Q," }"):Q);b.namespace&&(U=i0(U,b.namespace));var $=[];return ou(U,bx(E.concat(xx(function(X){return $.push(X)})))),$};return R.hash=y.length?y.reduce(function(D,H){return H.name||ca(15),sl(D,H.name)},Fm).toString():"",R}var Wx=new l0,Uc=$x(),r0=sa.createContext({shouldForwardProp:void 0,styleSheet:Wx,stylis:Uc});r0.Consumer;sa.createContext(void 0);function pm(){return M.useContext(r0)}var Fx=function(){function l(s,c){var o=this;this.inject=function(d,g){g===void 0&&(g=Uc);var b=o.name+g.hash;d.hasNameForId(o.id,b)||d.insertRules(o.id,b,g(o.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,Zc(this,function(){throw ca(12,String(o.name))})}return l.prototype.getName=function(s){return s===void 0&&(s=Uc),this.name+s.hash},l}(),Px=function(l){return l>="A"&&l<="Z"};function bm(l){for(var s="",c=0;c<l.length;c++){var o=l[c];if(c===1&&o==="-"&&l[0]==="-")return l;Px(o)?s+="-"+o.toLowerCase():s+=o}return s.startsWith("ms-")?"-"+s:s}var u0=function(l){return l==null||l===!1||l===""},s0=function(l){var s,c,o=[];for(var d in l){var g=l[d];l.hasOwnProperty(d)&&!u0(g)&&(Array.isArray(g)&&g.isCss||oa(g)?o.push("".concat(bm(d),":"),g,";"):Si(g)?o.push.apply(o,su(su(["".concat(d," {")],s0(g),!1),["}"],!1)):o.push("".concat(bm(d),": ").concat((s=d,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in vx||s.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function ua(l,s,c,o){if(u0(l))return[];if(Xc(l))return[".".concat(l.styledComponentId)];if(oa(l)){if(!oa(g=l)||g.prototype&&g.prototype.isReactComponent||!s)return[l];var d=l(s);return ua(d,s,c,o)}var g;return l instanceof Fx?c?(l.inject(c,o),[l.getName(o)]):[l]:Si(l)?s0(l):Array.isArray(l)?Array.prototype.concat.apply(yu,l.map(function(b){return ua(b,s,c,o)})):[l.toString()]}function Ix(l){for(var s=0;s<l.length;s+=1){var c=l[s];if(oa(c)&&!Xc(c))return!1}return!0}var ey=Pm(xu),ty=function(){function l(s,c,o){this.rules=s,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Ix(s),this.componentId=c,this.baseHash=sl(ey,c),this.baseStyle=o,l0.registerId(c)}return l.prototype.generateAndInjectStyles=function(s,c,o){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var g=hm(ua(this.rules,s,c,o)),b=kc(sl(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,b)){var j=o(g,".".concat(b),void 0,this.componentId);c.insertRules(this.componentId,b,j)}d=ia(d,b),this.staticRulesId=b}else{for(var y=sl(this.baseHash,o.hash),p="",E=0;E<this.rules.length;E++){var R=this.rules[E];if(typeof R=="string")p+=R;else if(R){var D=hm(ua(R,s,c,o));y=sl(y,D+E),p+=D}}if(p){var H=kc(y>>>0);c.hasNameForId(this.componentId,H)||c.insertRules(this.componentId,H,o(p,".".concat(H),void 0,this.componentId)),d=ia(d,H)}}return d},l}(),du=sa.createContext(void 0);du.Consumer;function ny(l){var s=sa.useContext(du),c=M.useMemo(function(){return function(o,d){if(!o)throw ca(14);if(oa(o)){var g=o(d);return g}if(Array.isArray(o)||typeof o!="object")throw ca(8);return d?nt(nt({},d),o):o}(l.theme,s)},[l.theme,s]);return l.children?sa.createElement(du.Provider,{value:c},l.children):null}var Zo={};function ay(l,s,c){var o=Xc(l),d=l,g=!Xo(l),b=s.attrs,j=b===void 0?yu:b,y=s.componentId,p=y===void 0?function(ae,Z){var le=typeof ae!="string"?"sc":sm(ae);Zo[le]=(Zo[le]||0)+1;var W="".concat(le,"-").concat(Ex(xu+le+Zo[le]));return Z?"".concat(Z,"-").concat(W):W}(s.displayName,s.parentComponentId):y,E=s.displayName,R=E===void 0?function(ae){return Xo(ae)?"styled.".concat(ae):"Styled(".concat(Tx(ae),")")}(l):E,D=s.displayName&&s.componentId?"".concat(sm(s.displayName),"-").concat(s.componentId):s.componentId||p,H=o&&d.attrs?d.attrs.concat(j).filter(Boolean):j,L=s.shouldForwardProp;if(o&&d.shouldForwardProp){var G=d.shouldForwardProp;if(s.shouldForwardProp){var Q=s.shouldForwardProp;L=function(ae,Z){return G(ae,Z)&&Q(ae,Z)}}else L=G}var U=new ty(c,D,o?d.componentStyle:void 0);function $(ae,Z){return function(le,W,Ee){var _e=le.attrs,at=le.componentStyle,it=le.defaultProps,Ye=le.foldedComponentIds,Zt=le.styledComponentId,Kt=le.target,qe=sa.useContext(du),C=pm(),q=le.shouldForwardProp||C.shouldForwardProp,P=jx(W,qe,it)||dl,oe=function(ce,ee,Ve){for(var pe,Pe=nt(nt({},ee),{className:void 0,theme:Ve}),Gn=0;Gn<ce.length;Gn+=1){var Jt=oa(pe=ce[Gn])?pe(Pe):pe;for(var St in Jt)Pe[St]=St==="className"?ia(Pe[St],Jt[St]):St==="style"?nt(nt({},Pe[St]),Jt[St]):Jt[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(_e,W,P),v=oe.as||Kt,N={};for(var Y in oe)oe[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&oe.theme===P||(Y==="forwardedAs"?N.as=oe.forwardedAs:q&&!q(Y,v)||(N[Y]=oe[Y]));var V=function(ce,ee){var Ve=pm(),pe=ce.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(at,oe),F=ia(Ye,Zt);return V&&(F+=" "+V),oe.className&&(F+=" "+oe.className),N[Xo(v)&&!Wm.has(v)?"class":"className"]=F,Ee&&(N.ref=Ee),M.createElement(v,N)}(X,ae,Z)}$.displayName=R;var X=sa.forwardRef($);return X.attrs=H,X.componentStyle=U,X.displayName=R,X.shouldForwardProp=L,X.foldedComponentIds=o?ia(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=D,X.target=o?d.target:l,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=o?function(Z){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Ee=0,_e=le;Ee<_e.length;Ee++)Nc(Z,_e[Ee],!0);return Z}({},d.defaultProps,ae):ae}}),Zc(X,function(){return".".concat(X.styledComponentId)}),g&&n0(X,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function xm(l,s){for(var c=[l[0]],o=0,d=s.length;o<d;o+=1)c.push(s[o],l[o+1]);return c}var ym=function(l){return Object.assign(l,{isCss:!0})};function ly(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(oa(l)||Si(l))return ym(ua(xm(yu,su([l],s,!0))));var o=l;return s.length===0&&o.length===1&&typeof o[0]=="string"?ua(o):ym(ua(xm(o,s)))}function Hc(l,s,c){if(c===void 0&&(c=dl),!s)throw ca(1,s);var o=function(d){for(var g=[],b=1;b<arguments.length;b++)g[b-1]=arguments[b];return l(s,c,ly.apply(void 0,su([d],g,!1)))};return o.attrs=function(d){return Hc(l,s,nt(nt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},o.withConfig=function(d){return Hc(l,s,nt(nt({},c),d))},o}var o0=function(l){return Hc(ay,l)},m=o0;Wm.forEach(function(l){m[l]=o0(l)});/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vm="popstate";function iy(l={}){function s(o,d){let{pathname:g,search:b,hash:j}=o.location;return Lc("",{pathname:g,search:b,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(o,d){return typeof d=="string"?d:ji(d)}return uy(s,c,null,l)}function Me(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Nt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function ry(){return Math.random().toString(36).substring(2,10)}function Sm(l,s){return{usr:l.state,key:l.key,idx:s}}function Lc(l,s,c=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?gl(s):s,state:c,key:s&&s.key||o||ry()}}function ji({pathname:l="/",search:s="",hash:c=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function gl(l){let s={};if(l){let c=l.indexOf("#");c>=0&&(s.hash=l.substring(c),l=l.substring(0,c));let o=l.indexOf("?");o>=0&&(s.search=l.substring(o),l=l.substring(0,o)),l&&(s.pathname=l)}return s}function uy(l,s,c,o={}){let{window:d=document.defaultView,v5Compat:g=!1}=o,b=d.history,j="POP",y=null,p=E();p==null&&(p=0,b.replaceState({...b.state,idx:p},""));function E(){return(b.state||{idx:null}).idx}function R(){j="POP";let Q=E(),U=Q==null?null:Q-p;p=Q,y&&y({action:j,location:G.location,delta:U})}function D(Q,U){j="PUSH";let $=Lc(G.location,Q,U);p=E()+1;let X=Sm($,p),ae=G.createHref($);try{b.pushState(X,"",ae)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;d.location.assign(ae)}g&&y&&y({action:j,location:G.location,delta:1})}function H(Q,U){j="REPLACE";let $=Lc(G.location,Q,U);p=E();let X=Sm($,p),ae=G.createHref($);b.replaceState(X,"",ae),g&&y&&y({action:j,location:G.location,delta:0})}function L(Q){return sy(Q)}let G={get action(){return j},get location(){return l(d,b)},listen(Q){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(vm,R),y=Q,()=>{d.removeEventListener(vm,R),y=null}},createHref(Q){return s(d,Q)},createURL:L,encodeLocation(Q){let U=L(Q);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:D,replace:H,go(Q){return b.go(Q)}};return G}function sy(l,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Me(c,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:ji(l);return o=o.replace(/ $/,"%20"),!s&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function c0(l,s,c="/"){return oy(l,s,c,!1)}function oy(l,s,c,o){let d=typeof s=="string"?gl(s):s,g=hn(d.pathname||"/",c);if(g==null)return null;let b=f0(l);cy(b);let j=null;for(let y=0;j==null&&y<b.length;++y){let p=Sy(g);j=yy(b[y],p,o)}return j}function f0(l,s=[],c=[],o=""){let d=(g,b,j)=>{let y={relativePath:j===void 0?g.path||"":j,caseSensitive:g.caseSensitive===!0,childrenIndex:b,route:g};y.relativePath.startsWith("/")&&(Me(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length));let p=dn([o,y.relativePath]),E=c.concat(y);g.children&&g.children.length>0&&(Me(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),f0(g.children,s,E,p)),!(g.path==null&&!g.index)&&s.push({path:p,score:by(p,g.index),routesMeta:E})};return l.forEach((g,b)=>{if(g.path===""||!g.path?.includes("?"))d(g,b);else for(let j of d0(g.path))d(g,b,j)}),s}function d0(l){let s=l.split("/");if(s.length===0)return[];let[c,...o]=s,d=c.endsWith("?"),g=c.replace(/\?$/,"");if(o.length===0)return d?[g,""]:[g];let b=d0(o.join("/")),j=[];return j.push(...b.map(y=>y===""?g:[g,y].join("/"))),d&&j.push(...b),j.map(y=>l.startsWith("/")&&y===""?"/":y)}function cy(l){l.sort((s,c)=>s.score!==c.score?c.score-s.score:xy(s.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var fy=/^:[\w-]+$/,dy=3,hy=2,gy=1,my=10,py=-2,jm=l=>l==="*";function by(l,s){let c=l.split("/"),o=c.length;return c.some(jm)&&(o+=py),s&&(o+=hy),c.filter(d=>!jm(d)).reduce((d,g)=>d+(fy.test(g)?dy:g===""?gy:my),o)}function xy(l,s){return l.length===s.length&&l.slice(0,-1).every((o,d)=>o===s[d])?l[l.length-1]-s[s.length-1]:0}function yy(l,s,c=!1){let{routesMeta:o}=l,d={},g="/",b=[];for(let j=0;j<o.length;++j){let y=o[j],p=j===o.length-1,E=g==="/"?s:s.slice(g.length)||"/",R=hu({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},E),D=y.route;if(!R&&p&&c&&!o[o.length-1].route.index&&(R=hu({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!R)return null;Object.assign(d,R.params),b.push({params:d,pathname:dn([g,R.pathname]),pathnameBase:wy(dn([g,R.pathnameBase])),route:D}),R.pathnameBase!=="/"&&(g=dn([g,R.pathnameBase]))}return b}function hu(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,o]=vy(l.path,l.caseSensitive,l.end),d=s.match(c);if(!d)return null;let g=d[0],b=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:o.reduce((p,{paramName:E,isOptional:R},D)=>{if(E==="*"){let L=j[D]||"";b=g.slice(0,g.length-L.length).replace(/(.)\/+$/,"$1")}const H=j[D];return R&&!H?p[E]=void 0:p[E]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:g,pathnameBase:b,pattern:l}}function vy(l,s=!1,c=!0){Nt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,j,y)=>(o.push({paramName:j,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(o.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),o]}function Sy(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Nt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function hn(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,o=l.charAt(c);return o&&o!=="/"?null:l.slice(c)||"/"}function jy(l,s="/"){let{pathname:c,search:o="",hash:d=""}=typeof l=="string"?gl(l):l;return{pathname:c?c.startsWith("/")?c:_y(c,s):s,search:Ey(o),hash:Ty(d)}}function _y(l,s){let c=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Ko(l,s,c,o){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zy(l){return l.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function Kc(l){let s=zy(l);return s.map((c,o)=>o===s.length-1?c.pathname:c.pathnameBase)}function Jc(l,s,c,o=!1){let d;typeof l=="string"?d=gl(l):(d={...l},Me(!d.pathname||!d.pathname.includes("?"),Ko("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Ko("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Ko("#","search","hash",d)));let g=l===""||d.pathname==="",b=g?"/":d.pathname,j;if(b==null)j=c;else{let R=s.length-1;if(!o&&b.startsWith("..")){let D=b.split("/");for(;D[0]==="..";)D.shift(),R-=1;d.pathname=D.join("/")}j=R>=0?s[R]:"/"}let y=jy(d,j),p=b&&b!=="/"&&b.endsWith("/"),E=(g||b===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(p||E)&&(y.pathname+="/"),y}var dn=l=>l.join("/").replace(/\/\/+/g,"/"),wy=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ey=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Ty=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Ay(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var h0=["POST","PUT","PATCH","DELETE"];new Set(h0);var Ry=["GET",...h0];new Set(Ry);var ml=M.createContext(null);ml.displayName="DataRouter";var vu=M.createContext(null);vu.displayName="DataRouterState";M.createContext(!1);var g0=M.createContext({isTransitioning:!1});g0.displayName="ViewTransition";var My=M.createContext(new Map);My.displayName="Fetchers";var Dy=M.createContext(null);Dy.displayName="Await";var Ut=M.createContext(null);Ut.displayName="Navigation";var _i=M.createContext(null);_i.displayName="Location";var Xt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var $c=M.createContext(null);$c.displayName="RouteError";function Cy(l,{relative:s}={}){Me(pl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=M.useContext(Ut),{hash:d,pathname:g,search:b}=zi(l,{relative:s}),j=g;return c!=="/"&&(j=g==="/"?c:dn([c,g])),o.createHref({pathname:j,search:b,hash:d})}function pl(){return M.useContext(_i)!=null}function gn(){return Me(pl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(_i).location}var m0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function p0(l){M.useContext(Ut).static||M.useLayoutEffect(l)}function b0(){let{isDataRoute:l}=M.useContext(Xt);return l?Xy():Oy()}function Oy(){Me(pl(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(ml),{basename:s,navigator:c}=M.useContext(Ut),{matches:o}=M.useContext(Xt),{pathname:d}=gn(),g=JSON.stringify(Kc(o)),b=M.useRef(!1);return p0(()=>{b.current=!0}),M.useCallback((y,p={})=>{if(Nt(b.current,m0),!b.current)return;if(typeof y=="number"){c.go(y);return}let E=Jc(y,JSON.parse(g),d,p.relative==="path");l==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:dn([s,E.pathname])),(p.replace?c.replace:c.push)(E,p.state,p)},[s,c,g,d,l])}M.createContext(null);function zi(l,{relative:s}={}){let{matches:c}=M.useContext(Xt),{pathname:o}=gn(),d=JSON.stringify(Kc(c));return M.useMemo(()=>Jc(l,JSON.parse(d),o,s==="path"),[l,d,o,s])}function By(l,s){return x0(l,s)}function x0(l,s,c,o){Me(pl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=M.useContext(Ut),{matches:g}=M.useContext(Xt),b=g[g.length-1],j=b?b.params:{},y=b?b.pathname:"/",p=b?b.pathnameBase:"/",E=b&&b.route;{let U=E&&E.path||"";y0(y,!E||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let R=gn(),D;if(s){let U=typeof s=="string"?gl(s):s;Me(p==="/"||U.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${U.pathname}" was given in the \`location\` prop.`),D=U}else D=R;let H=D.pathname||"/",L=H;if(p!=="/"){let U=p.replace(/^\//,"").split("/");L="/"+H.replace(/^\//,"").split("/").slice(U.length).join("/")}let G=c0(l,{pathname:L});Nt(E||G!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Nt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=Ly(G&&G.map(U=>Object.assign({},U,{params:Object.assign({},j,U.params),pathname:dn([p,d.encodeLocation?d.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?p:dn([p,d.encodeLocation?d.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),g,c,o);return s&&Q?M.createElement(_i.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},Q):Q}function ky(){let l=Qy(),s=Ay(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},g={padding:"2px 4px",backgroundColor:o},b=null;return console.error("Error handled by React Router default ErrorBoundary:",l),b=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:g},"ErrorBoundary")," or"," ",M.createElement("code",{style:g},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},s),c?M.createElement("pre",{style:d},c):null,b)}var Ny=M.createElement(ky,null),Uy=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){console.error("React Router caught the following error during render",l,s)}render(){return this.state.error!==void 0?M.createElement(Xt.Provider,{value:this.props.routeContext},M.createElement($c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hy({routeContext:l,match:s,children:c}){let o=M.useContext(ml);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(Xt.Provider,{value:l},c)}function Ly(l,s=[],c=null,o=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let d=l,g=c?.errors;if(g!=null){let y=d.findIndex(p=>p.route.id&&g?.[p.route.id]!==void 0);Me(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let b=!1,j=-1;if(c)for(let y=0;y<d.length;y++){let p=d[y];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(j=y),p.route.id){let{loaderData:E,errors:R}=c,D=p.route.loader&&!E.hasOwnProperty(p.route.id)&&(!R||R[p.route.id]===void 0);if(p.route.lazy||D){b=!0,j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}return d.reduceRight((y,p,E)=>{let R,D=!1,H=null,L=null;c&&(R=g&&p.route.id?g[p.route.id]:void 0,H=p.route.errorElement||Ny,b&&(j<0&&E===0?(y0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,L=null):j===E&&(D=!0,L=p.route.hydrateFallbackElement||null)));let G=s.concat(d.slice(0,E+1)),Q=()=>{let U;return R?U=H:D?U=L:p.route.Component?U=M.createElement(p.route.Component,null):p.route.element?U=p.route.element:U=y,M.createElement(Hy,{match:p,routeContext:{outlet:y,matches:G,isDataRoute:c!=null},children:U})};return c&&(p.route.ErrorBoundary||p.route.errorElement||E===0)?M.createElement(Uy,{location:c.location,revalidation:c.revalidation,component:H,error:R,children:Q(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):Q()},null)}function Wc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gy(l){let s=M.useContext(ml);return Me(s,Wc(l)),s}function Yy(l){let s=M.useContext(vu);return Me(s,Wc(l)),s}function qy(l){let s=M.useContext(Xt);return Me(s,Wc(l)),s}function Fc(l){let s=qy(l),c=s.matches[s.matches.length-1];return Me(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function Vy(){return Fc("useRouteId")}function Qy(){let l=M.useContext($c),s=Yy("useRouteError"),c=Fc("useRouteError");return l!==void 0?l:s.errors?.[c]}function Xy(){let{router:l}=Gy("useNavigate"),s=Fc("useNavigate"),c=M.useRef(!1);return p0(()=>{c.current=!0}),M.useCallback(async(d,g={})=>{Nt(c.current,m0),c.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:s,...g}))},[l,s])}var _m={};function y0(l,s,c){!s&&!_m[l]&&(_m[l]=!0,Nt(!1,c))}M.memo(Zy);function Zy({routes:l,future:s,state:c}){return x0(l,void 0,c,s)}function Ky({to:l,replace:s,state:c,relative:o}){Me(pl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=M.useContext(Ut);Nt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=M.useContext(Xt),{pathname:b}=gn(),j=b0(),y=Jc(l,Kc(g),b,o==="path"),p=JSON.stringify(y);return M.useEffect(()=>{j(JSON.parse(p),{replace:s,state:c,relative:o})},[j,p,o,s,c]),null}function ul(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jy({basename:l="/",children:s=null,location:c,navigationType:o="POP",navigator:d,static:g=!1}){Me(!pl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),j=M.useMemo(()=>({basename:b,navigator:d,static:g,future:{}}),[b,d,g]);typeof c=="string"&&(c=gl(c));let{pathname:y="/",search:p="",hash:E="",state:R=null,key:D="default"}=c,H=M.useMemo(()=>{let L=hn(y,b);return L==null?null:{location:{pathname:L,search:p,hash:E,state:R,key:D},navigationType:o}},[b,y,p,E,R,D,o]);return Nt(H!=null,`<Router basename="${b}"> is not able to match the URL "${y}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:M.createElement(Ut.Provider,{value:j},M.createElement(_i.Provider,{children:s,value:H}))}function $y({children:l,location:s}){return By(Gc(l),s)}function Gc(l,s=[]){let c=[];return M.Children.forEach(l,(o,d)=>{if(!M.isValidElement(o))return;let g=[...s,d];if(o.type===M.Fragment){c.push.apply(c,Gc(o.props.children,g));return}Me(o.type===ul,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!o.props.index||!o.props.children,"An index route cannot have child routes.");let b={id:o.props.id||g.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(b.children=Gc(o.props.children,g)),c.push(b)}),c}var ru="get",uu="application/x-www-form-urlencoded";function Su(l){return l!=null&&typeof l.tagName=="string"}function Wy(l){return Su(l)&&l.tagName.toLowerCase()==="button"}function Fy(l){return Su(l)&&l.tagName.toLowerCase()==="form"}function Py(l){return Su(l)&&l.tagName.toLowerCase()==="input"}function Iy(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ev(l,s){return l.button===0&&(!s||s==="_self")&&!Iy(l)}var Yr=null;function tv(){if(Yr===null)try{new FormData(document.createElement("form"),0),Yr=!1}catch{Yr=!0}return Yr}var nv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jo(l){return l!=null&&!nv.has(l)?(Nt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uu}"`),null):l}function av(l,s){let c,o,d,g,b;if(Fy(l)){let j=l.getAttribute("action");o=j?hn(j,s):null,c=l.getAttribute("method")||ru,d=Jo(l.getAttribute("enctype"))||uu,g=new FormData(l)}else if(Wy(l)||Py(l)&&(l.type==="submit"||l.type==="image")){let j=l.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||j.getAttribute("action");if(o=y?hn(y,s):null,c=l.getAttribute("formmethod")||j.getAttribute("method")||ru,d=Jo(l.getAttribute("formenctype"))||Jo(j.getAttribute("enctype"))||uu,g=new FormData(j,l),!tv()){let{name:p,type:E,value:R}=l;if(E==="image"){let D=p?`${p}.`:"";g.append(`${D}x`,"0"),g.append(`${D}y`,"0")}else p&&g.append(p,R)}}else{if(Su(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ru,o=null,d=uu,b=l}return g&&d==="text/plain"&&(b=g,g=void 0),{action:o,method:c.toLowerCase(),encType:d,formData:g,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pc(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function lv(l,s,c){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname=`_root.${c}`:s&&hn(o.pathname,s)==="/"?o.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${c}`,o}async function iv(l,s){if(l.id in s)return s[l.id];try{let c=await import(l.module);return s[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function uv(l,s,c){let o=await Promise.all(l.map(async d=>{let g=s.routes[d.route.id];if(g){let b=await iv(g,c);return b.links?b.links():[]}return[]}));return fv(o.flat(1).filter(rv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function zm(l,s,c,o,d,g){let b=(y,p)=>c[p]?y.route.id!==c[p].route.id:!0,j=(y,p)=>c[p].pathname!==y.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==y.params["*"];return g==="assets"?s.filter((y,p)=>b(y,p)||j(y,p)):g==="data"?s.filter((y,p)=>{let E=o.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(b(y,p)||j(y,p))return!0;if(y.route.shouldRevalidate){let R=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function sv(l,s,{includeHydrateFallback:c}={}){return ov(l.map(o=>{let d=s.routes[o.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function ov(l){return[...new Set(l)]}function cv(l){let s={},c=Object.keys(l).sort();for(let o of c)s[o]=l[o];return s}function fv(l,s){let c=new Set;return new Set(s),l.reduce((o,d)=>{let g=JSON.stringify(cv(d));return c.has(g)||(c.add(g),o.push({key:g,link:d})),o},[])}function v0(){let l=M.useContext(ml);return Pc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function dv(){let l=M.useContext(vu);return Pc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Ic=M.createContext(void 0);Ic.displayName="FrameworkContext";function S0(){let l=M.useContext(Ic);return Pc(l,"You must render this element inside a <HydratedRouter> element"),l}function hv(l,s){let c=M.useContext(Ic),[o,d]=M.useState(!1),[g,b]=M.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:p,onMouseLeave:E,onTouchStart:R}=s,D=M.useRef(null);M.useEffect(()=>{if(l==="render"&&b(!0),l==="viewport"){let G=U=>{U.forEach($=>{b($.isIntersecting)})},Q=new IntersectionObserver(G,{threshold:.5});return D.current&&Q.observe(D.current),()=>{Q.disconnect()}}},[l]),M.useEffect(()=>{if(o){let G=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(G)}}},[o]);let H=()=>{d(!0)},L=()=>{d(!1),b(!1)};return c?l!=="intent"?[g,D,{}]:[g,D,{onFocus:pi(j,H),onBlur:pi(y,L),onMouseEnter:pi(p,H),onMouseLeave:pi(E,L),onTouchStart:pi(R,H)}]:[!1,D,{}]}function pi(l,s){return c=>{l&&l(c),c.defaultPrevented||s(c)}}function gv({page:l,...s}){let{router:c}=v0(),o=M.useMemo(()=>c0(c.routes,l,c.basename),[c.routes,l,c.basename]);return o?M.createElement(pv,{page:l,matches:o,...s}):null}function mv(l){let{manifest:s,routeModules:c}=S0(),[o,d]=M.useState([]);return M.useEffect(()=>{let g=!1;return uv(l,s,c).then(b=>{g||d(b)}),()=>{g=!0}},[l,s,c]),o}function pv({page:l,matches:s,...c}){let o=gn(),{manifest:d,routeModules:g}=S0(),{basename:b}=v0(),{loaderData:j,matches:y}=dv(),p=M.useMemo(()=>zm(l,s,y,d,o,"data"),[l,s,y,d,o]),E=M.useMemo(()=>zm(l,s,y,d,o,"assets"),[l,s,y,d,o]),R=M.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let L=new Set,G=!1;if(s.forEach(U=>{let $=d.routes[U.route.id];!$||!$.hasLoader||(!p.some(X=>X.route.id===U.route.id)&&U.route.id in j&&g[U.route.id]?.shouldRevalidate||$.hasClientLoader?G=!0:L.add(U.route.id))}),L.size===0)return[];let Q=lv(l,b,"data");return G&&L.size>0&&Q.searchParams.set("_routes",s.filter(U=>L.has(U.route.id)).map(U=>U.route.id).join(",")),[Q.pathname+Q.search]},[b,j,o,d,p,s,l,g]),D=M.useMemo(()=>sv(E,d),[E,d]),H=mv(E);return M.createElement(M.Fragment,null,R.map(L=>M.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...c})),D.map(L=>M.createElement("link",{key:L,rel:"modulepreload",href:L,...c})),H.map(({key:L,link:G})=>M.createElement("link",{key:L,...G})))}function bv(...l){return s=>{l.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var j0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{j0&&(window.__reactRouterVersion="7.7.1")}catch{}function xv({basename:l,children:s,window:c}){let o=M.useRef();o.current==null&&(o.current=iy({window:c,v5Compat:!0}));let d=o.current,[g,b]=M.useState({action:d.action,location:d.location}),j=M.useCallback(y=>{M.startTransition(()=>b(y))},[b]);return M.useLayoutEffect(()=>d.listen(j),[d,j]),M.createElement(Jy,{basename:l,children:s,location:g.location,navigationType:g.action,navigator:d})}var _0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ef=M.forwardRef(function({onClick:s,discover:c="render",prefetch:o="none",relative:d,reloadDocument:g,replace:b,state:j,target:y,to:p,preventScrollReset:E,viewTransition:R,...D},H){let{basename:L}=M.useContext(Ut),G=typeof p=="string"&&_0.test(p),Q,U=!1;if(typeof p=="string"&&G&&(Q=p,j0))try{let _e=new URL(window.location.href),at=p.startsWith("//")?new URL(_e.protocol+p):new URL(p),it=hn(at.pathname,L);at.origin===_e.origin&&it!=null?p=it+at.search+at.hash:U=!0}catch{Nt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=Cy(p,{relative:d}),[X,ae,Z]=hv(o,D),le=jv(p,{replace:b,state:j,target:y,preventScrollReset:E,relative:d,viewTransition:R});function W(_e){s&&s(_e),_e.defaultPrevented||le(_e)}let Ee=M.createElement("a",{...D,...Z,href:Q||$,onClick:U||g?s:W,ref:bv(H,ae),target:y,"data-discover":!G&&c==="render"?"true":void 0});return X&&!G?M.createElement(M.Fragment,null,Ee,M.createElement(gv,{page:$})):Ee});ef.displayName="Link";var yv=M.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:o="",end:d=!1,style:g,to:b,viewTransition:j,children:y,...p},E){let R=zi(b,{relative:p.relative}),D=gn(),H=M.useContext(vu),{navigator:L,basename:G}=M.useContext(Ut),Q=H!=null&&Tv(R)&&j===!0,U=L.encodeLocation?L.encodeLocation(R).pathname:R.pathname,$=D.pathname,X=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;c||($=$.toLowerCase(),X=X?X.toLowerCase():null,U=U.toLowerCase()),X&&G&&(X=hn(X,G)||X);const ae=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Z=$===U||!d&&$.startsWith(U)&&$.charAt(ae)==="/",le=X!=null&&(X===U||!d&&X.startsWith(U)&&X.charAt(U.length)==="/"),W={isActive:Z,isPending:le,isTransitioning:Q},Ee=Z?s:void 0,_e;typeof o=="function"?_e=o(W):_e=[o,Z?"active":null,le?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let at=typeof g=="function"?g(W):g;return M.createElement(ef,{...p,"aria-current":Ee,className:_e,ref:E,style:at,to:b,viewTransition:j},typeof y=="function"?y(W):y)});yv.displayName="NavLink";var vv=M.forwardRef(({discover:l="render",fetcherKey:s,navigate:c,reloadDocument:o,replace:d,state:g,method:b=ru,action:j,onSubmit:y,relative:p,preventScrollReset:E,viewTransition:R,...D},H)=>{let L=wv(),G=Ev(j,{relative:p}),Q=b.toLowerCase()==="get"?"get":"post",U=typeof j=="string"&&_0.test(j),$=X=>{if(y&&y(X),X.defaultPrevented)return;X.preventDefault();let ae=X.nativeEvent.submitter,Z=ae?.getAttribute("formmethod")||b;L(ae||X.currentTarget,{fetcherKey:s,method:Z,navigate:c,replace:d,state:g,relative:p,preventScrollReset:E,viewTransition:R})};return M.createElement("form",{ref:H,method:Q,action:G,onSubmit:o?y:$,...D,"data-discover":!U&&l==="render"?"true":void 0})});vv.displayName="Form";function Sv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z0(l){let s=M.useContext(ml);return Me(s,Sv(l)),s}function jv(l,{target:s,replace:c,state:o,preventScrollReset:d,relative:g,viewTransition:b}={}){let j=b0(),y=gn(),p=zi(l,{relative:g});return M.useCallback(E=>{if(ev(E,s)){E.preventDefault();let R=c!==void 0?c:ji(y)===ji(p);j(l,{replace:R,state:o,preventScrollReset:d,relative:g,viewTransition:b})}},[y,j,p,c,o,s,l,d,g,b])}var _v=0,zv=()=>`__${String(++_v)}__`;function wv(){let{router:l}=z0("useSubmit"),{basename:s}=M.useContext(Ut),c=Vy();return M.useCallback(async(o,d={})=>{let{action:g,method:b,encType:j,formData:y,body:p}=av(o,s);if(d.navigate===!1){let E=d.fetcherKey||zv();await l.fetch(E,c,d.action||g,{preventScrollReset:d.preventScrollReset,formData:y,body:p,formMethod:d.method||b,formEncType:d.encType||j,flushSync:d.flushSync})}else await l.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:y,body:p,formMethod:d.method||b,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,s,c])}function Ev(l,{relative:s}={}){let{basename:c}=M.useContext(Ut),o=M.useContext(Xt);Me(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),g={...zi(l||".",{relative:s})},b=gn();if(l==null){g.search=b.search;let j=new URLSearchParams(g.search),y=j.getAll("index");if(y.some(E=>E==="")){j.delete("index"),y.filter(R=>R).forEach(R=>j.append("index",R));let E=j.toString();g.search=E?`?${E}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(g.pathname=g.pathname==="/"?c:dn([c,g.pathname])),ji(g)}function Tv(l,{relative:s}={}){let c=M.useContext(g0);Me(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=z0("useViewTransitionState"),d=zi(l,{relative:s});if(!c.isTransitioning)return!1;let g=hn(c.currentLocation.pathname,o)||c.currentLocation.pathname,b=hn(c.nextLocation.pathname,o)||c.nextLocation.pathname;return hu(d.pathname,b)!=null||hu(d.pathname,g)!=null}const Av="/assets/logo-Hzr1jdtX.png",Rv=m.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,Mv=m.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,Dv=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cv=m.img`
  height: 40px;
  width: auto;
`,Ov=m.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;

  @media (max-width: 640px) {
    display: none;
  }
`,Bv=m.div`
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
`,bi=m(ef)`
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
`,kv=m.button`
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
`;function Nv(){const l=gn(),[s,c]=M.useState(!1);return u.jsx(Rv,{children:u.jsxs(Mv,{children:[u.jsx(bi,{to:"/",onClick:()=>c(!1),children:u.jsxs(Dv,{children:[u.jsx(Cv,{src:Av,alt:"SCKW Logo"}),u.jsx(Ov,{children:"SC Konstanz-Wollmatingen e. V."})]})}),u.jsxs(kv,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>c(o=>!o),children:["Menü",u.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),u.jsxs(Bv,{id:"mobile-nav",$open:s,children:[u.jsx(bi,{to:"/sponsoring",$active:l.pathname==="/sponsoring",onClick:()=>c(!1),children:"🤝 Sponsoring"}),u.jsx(bi,{to:"/sponsoring-v2",$active:l.pathname==="/sponsoring-v2",onClick:()=>c(!1),children:"🚀 Sponsoring V2"}),u.jsx(bi,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>c(!1),children:"💼 Jobbörse"}),u.jsx(bi,{to:"/renovierung",$active:l.pathname==="/renovierung",onClick:()=>c(!1),children:"🏗️ Renovierung"})]})]})})}const Uv=m.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Hv=m.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function tf(){return u.jsxs(Uv,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",u.jsx(Hv,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})}const $o=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"Social Media Post/Monat",highlight:!1,icon:"📱"},{text:"Stadionansage bei jedem Heimspiel",highlight:!1,icon:"📢"},{text:"1 Bande + 4x Plakat",highlight:!0,icon:"🖼️"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","Social Media Post/Monat","Stadionansage bei jedem Heimspiel","1 Bande (5x2 m) am Gelände","4x Plakat (A1) am Gelände"]},{title:"🥈 Co-Sponsor",price:"9.500 €/Jahr",status:"🟨 1 von 2 verfügbar",maxSponsors:2,sponsors:[],keyBenefits:[{text:"Trikotärmel",highlight:!0,icon:"👕"},{text:"1 Bande",highlight:!1,icon:"🖼️"},{text:"2x Social Media pro Spiel",highlight:!0,icon:"📱"},{text:"Social Media 1x pro Spiel",highlight:!1,icon:"📱"}],benefits:["Trikotärmel 1. Mannschaft","1 Bande (5x2 m) am Gelände","2x Social Media pro Spiel (Instagram)","Social Media 1x pro Spiel (Facebook)"]},{title:"🥈 SILBER",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Bande",highlight:!0,icon:"🖼️"},{text:"Instagram-Erwähnung",highlight:!1,icon:"📱"},{text:"Werbeplane am Gelände",highlight:!1,icon:"🏟️"},{text:"Vereinsplakate + Eventsichtbarkeit",highlight:!0,icon:"🎉"}],benefits:["1 Bande (5x2 m) am Gelände","Instagram-Erwähnung","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟩 Verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"3x1m Werbebande",highlight:!0,icon:"🏟️"},{text:"Sichtbarkeit bei jedem Heimspiel",highlight:!1,icon:"⚽"},{text:"Link auf Homepage optional",highlight:!1,icon:"🌐"}],benefits:["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Link auf Homepage optional"]},{title:"⚽ Ballspende",price:"150 €/pro Spiel",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[],keyBenefits:[{text:"Social Media Post am Spieltag",highlight:!0,icon:"📱"},{text:"Namensnennung vor dem Spiel",highlight:!1,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Namensnennung vor dem Spiel","Namensnennung in der Halbzeitpause"]},{title:"⚽ Ballspende 5er Pack",price:"500 €/5 Spiele",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[],keyBenefits:[{text:"Ballspende für 5 Spiele",highlight:!0,icon:"⚽"},{text:"Namensnennung vor jedem Spiel",highlight:!0,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Ballspende für 5 Spiele","Namensnennung vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","Günstigerer Preis pro Spiel gegenüber Einzelspende"]}],Lv=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Gv=m.div`
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
`,Yv=m.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,qv=m.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,Vv=m.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,Qv=m.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,Xv=m.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,Zv=m.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,Kv=m.li`
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
`,Jv=m.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,$v=m.span`
  flex: 1;
`,Wv=m.a`
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
`,Fv=m.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pv="sponsoring@sckw.de";function Wo({packages:l}){const s=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",c=b=>{const j=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},o=b=>{const j=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),y=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),p=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Pv}?subject=${y}&body=${p}`},d=b=>{const j=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},g=l.filter(b=>!b.title.includes("Platz-Renovierung"));return u.jsx(Lv,{children:g.map((b,j)=>{const{isFullyBooked:y}=d(b),p=s(b.status),E=p==="vergeben"||y,R=y?"vergeben":p,D=b.keyBenefits||[];return u.jsxs(Gv,{isVergeben:E,children:[u.jsxs(Yv,{children:[u.jsx(qv,{children:c(b.title)}),u.jsx(Vv,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!E&&u.jsx(Qv,{children:b.price}),u.jsx(Xv,{status:R,children:R==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),E?u.jsx(Fv,{children:"✅ Alle Plätze vergeben"}):u.jsx(Zv,{children:D.map((H,L)=>u.jsxs(Kv,{isHighlight:H.highlight,children:[u.jsx(Jv,{children:H.icon}),u.jsx($v,{children:H.text})]},L))}),u.jsx(Wv,{href:E?void 0:o(b.title),isVergeben:E,children:E?"Vergeben":"Jetzt anfragen"})]},j)})})}const Iv=m.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,e2=m.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,t2=m.button`
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
`,n2=m.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,a2=m.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,l2=m.div`
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
`,i2=m.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,r2=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:u.jsxs(u.Fragment,{children:[u.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",u.jsx("br",{}),u.jsx("br",{}),u.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",u.jsx("br",{}),u.jsx("br",{}),u.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:u.jsxs(u.Fragment,{children:[u.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",u.jsx("br",{}),u.jsx("br",{}),u.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",u.jsx("br",{}),u.jsx("br",{}),u.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",u.jsx("br",{}),u.jsx("br",{}),u.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",u.jsx("br",{}),u.jsx("br",{}),u.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:u.jsx(u.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function u2(){const[l,s]=M.useState([]),c=d=>{s(g=>g.includes(d)?g.filter(b=>b!==d):[...g,d])},o=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c(g))};return u.jsx(Iv,{children:r2.map(d=>{const g=l.includes(d.id);return u.jsxs(e2,{children:[u.jsxs(t2,{isOpen:g,onClick:()=>c(d.id),onKeyDown:b=>o(b,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[u.jsxs("span",{children:[u.jsx(i2,{children:d.icon}),d.title]}),u.jsx(n2,{isOpen:g,children:"▼"})]}),u.jsx(a2,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:u.jsx(l2,{children:d.content})})]},d.id)})})}const w0="/assets/cheerleading_0-DQQGXi0R.jpg",E0="/assets/cheerleading_1-NkLBARmH.jpg",T0="/assets/cheerleading_2-CrezcZYL.jpg",A0="/assets/cheerleading_3-GN5rPHNN.jpg",R0="/assets/1-ClVWb4ei.png",M0="/assets/10-Bwp2eIye.png",D0="/assets/11-W061sOUI.png",C0="/assets/12-TjJyzl8L.png",O0="/assets/13-ChUUCdQQ.png",B0="/assets/14-BVhdRr98.png",k0="/assets/2-CcfgIQYe.png",N0="/assets/3-DYiPkVd7.png",U0="/assets/4-1upoqVoS.png",H0="/assets/5-D0tadXAC.png",L0="/assets/6-NJ4ELm_j.png",G0="/assets/7-BXo4_Bcj.png",Y0="/assets/8-BbOqEnj_.png",q0="/assets/9-CIK0gi9o.png",V0="/assets/herren_0-BVVgyt1l.jpg",Q0="/assets/herren_1-B8ywOnNy.jpg",X0="/assets/herren_10-DPVQsg9B.jpg",Z0="/assets/herren_11-wfWG62H3.jpg",K0="/assets/herren_12-DEJSN2zG.jpg",J0="/assets/herren_13-F52vdukE.jpg",$0="/assets/herren_14-Cq9hoKfG.jpg",W0="/assets/herren_15-aYIFGauG.jpg",F0="/assets/herren_16-NYI2EaEN.jpg",P0="/assets/herren_17-B_52ysA2.jpg",I0="/assets/herren_18-DbwjVNKJ.jpg",ep="/assets/herren_19-BduD_J85.png",tp="/assets/herren_2--jFuixBF.jpg",np="/assets/herren_3-BPz1zlkG.jpg",ap="/assets/herren_4-BZRrQaFr.jpg",lp="/assets/herren_5-D-QrfY2P.jpg",ip="/assets/herren_6-DWQvi6Am.jpg",rp="/assets/herren_7-BXO6B8Bt.jpg",up="/assets/herren_8-Cg4rdr7T.jpg",sp="/assets/herren_9-DoLnTdRG.jpg",op="/assets/IMG-team-BGcF1agj.png",cp="/assets/IMG_5349-CpvIVKhM.jpg",fp="/assets/IMG_5369-DQ4CSwdg.jpg",dp="/assets/IMG_5421-BBzniIEN.jpg",hp="/assets/IMG_5442-D2PgutWB.jpg",gp="/assets/IMG_5952-B9VW6Qie.jpg",mp="/assets/Unbenann324t-IPGo6eoQ.png",pp="/assets/image0-DDrU5aZn.jpeg",bp="/assets/image11-BNM8hTkT.jpeg",xp="/assets/image8-BUnedp9U.jpeg",s2="/assets/grafhardenberg-Di5cVggE.png",o2="/assets/horta-DydWIGV7.png",c2="/assets/logans-BgpKwKYA.png",f2="/assets/ricobet-DsVC-eZt.png",d2="/assets/rothaus-DqkKD9yW.png",h2="/assets/tasty-B2pSa1rE.png",g2="/assets/cabin-window-B83r_CDB.jpg",m2="/assets/outside-9-xz17qL.jpg",p2="/assets/shower-B75caJ-F.jpg",b2="/assets/sitting-area-D7khB3Gw.jpg",x2="/assets/toilet-BpMHYbhh.jpg",y2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":w0,"../assets/gallery/cheerleading/cheerleading_1.jpg":E0,"../assets/gallery/cheerleading/cheerleading_2.jpg":T0,"../assets/gallery/cheerleading/cheerleading_3.jpg":A0,"../assets/gallery/damen/1.png":R0,"../assets/gallery/damen/10.png":M0,"../assets/gallery/damen/11.png":D0,"../assets/gallery/damen/12.png":C0,"../assets/gallery/damen/13.png":O0,"../assets/gallery/damen/14.png":B0,"../assets/gallery/damen/2.png":k0,"../assets/gallery/damen/3.png":N0,"../assets/gallery/damen/4.png":U0,"../assets/gallery/damen/5.png":H0,"../assets/gallery/damen/6.png":L0,"../assets/gallery/damen/7.png":G0,"../assets/gallery/damen/8.png":Y0,"../assets/gallery/damen/9.png":q0,"../assets/gallery/herren/herren_0.jpg":V0,"../assets/gallery/herren/herren_1.jpg":Q0,"../assets/gallery/herren/herren_10.jpg":X0,"../assets/gallery/herren/herren_11.jpg":Z0,"../assets/gallery/herren/herren_12.jpg":K0,"../assets/gallery/herren/herren_13.jpg":J0,"../assets/gallery/herren/herren_14.jpg":$0,"../assets/gallery/herren/herren_15.jpg":W0,"../assets/gallery/herren/herren_16.jpg":F0,"../assets/gallery/herren/herren_17.jpg":P0,"../assets/gallery/herren/herren_18.jpg":I0,"../assets/gallery/herren/herren_19.png":ep,"../assets/gallery/herren/herren_2.jpg":tp,"../assets/gallery/herren/herren_3.jpg":np,"../assets/gallery/herren/herren_4.jpg":ap,"../assets/gallery/herren/herren_5.jpg":lp,"../assets/gallery/herren/herren_6.jpg":ip,"../assets/gallery/herren/herren_7.jpg":rp,"../assets/gallery/herren/herren_8.jpg":up,"../assets/gallery/herren/herren_9.jpg":sp,"../assets/gallery/jfv/IMG-team.png":op,"../assets/gallery/jfv/IMG_5349.jpg":cp,"../assets/gallery/jfv/IMG_5369.jpg":fp,"../assets/gallery/jfv/IMG_5421.jpg":dp,"../assets/gallery/jfv/IMG_5442.jpg":hp,"../assets/gallery/jfv/IMG_5952.jpg":gp,"../assets/gallery/jfv/Unbenann324t.png":mp,"../assets/gallery/jfv/image0.jpeg":pp,"../assets/gallery/jfv/image11.jpeg":bp,"../assets/gallery/jfv/image8.jpeg":xp}),v2=Object.assign({"../assets/sponsors/grafhardenberg.png":s2,"../assets/sponsors/horta.png":o2,"../assets/sponsors/logans.png":c2,"../assets/sponsors/ricobet.png":f2,"../assets/sponsors/rothaus.png":d2,"../assets/sponsors/tasty.png":h2}),S2=Object.assign({"../assets/renovation/cabin-window.jpg":g2,"../assets/renovation/outside.jpg":m2,"../assets/renovation/shower.jpg":p2,"../assets/renovation/sitting-area.jpg":b2,"../assets/renovation/toilet.jpg":x2}),yp=l=>l.split("/").pop()?.toLowerCase()||"",j2=l=>{const s=l.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function _2(l){const s=[...l];for(let c=s.length-1;c>0;c--){const o=Math.floor(Math.random()*(c+1));[s[c],s[o]]=[s[o],s[c]]}return s}const vp=()=>{const l={};Object.entries(y2).forEach(([o,d])=>{const g=j2(o);l[g]||(l[g]=[]),l[g].push(d)}),Object.keys(l).forEach(o=>{l[o]=_2(l[o])});const s={},c=["jfv","cheerleading","damen","herren"];return c.forEach(o=>{l[o]&&(s[o]=l[o])}),Object.keys(l).forEach(o=>{c.includes(o.toLowerCase())||(s[o]=l[o])}),s},z2=()=>{const l={};return Object.entries(v2).forEach(([s,c])=>{const o=yp(s);l[o]=c}),l},Sp=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(S2).forEach(([s,c])=>{const o=yp(s);o.includes("sitting")?l.kabinen.push({src:c,alt:"Sitzbereich in den Kabinen"}):o.includes("outside")||o.includes("cabin-window")?o.includes("outside")?l.fassade.push({src:c,alt:"Außenfassade des Fürstenberg"}):o.includes("cabin-window")&&l.fassade.push({src:c,alt:"Fenster in den Kabinen"}):(o.includes("toilet")||o.includes("shower")||o.includes("wash"))&&(o.includes("toilet")?l.waschkueche.push({src:c,alt:"Toilette"}):o.includes("shower")?l.waschkueche.push({src:c,alt:"Dusche"}):l.waschkueche.push({src:c,alt:"Waschküche"}))}),l},jp=l=>{const c=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":w0,"../assets/gallery/cheerleading/cheerleading_1.jpg":E0,"../assets/gallery/cheerleading/cheerleading_2.jpg":T0,"../assets/gallery/cheerleading/cheerleading_3.jpg":A0,"../assets/gallery/damen/1.png":R0,"../assets/gallery/damen/10.png":M0,"../assets/gallery/damen/11.png":D0,"../assets/gallery/damen/12.png":C0,"../assets/gallery/damen/13.png":O0,"../assets/gallery/damen/14.png":B0,"../assets/gallery/damen/2.png":k0,"../assets/gallery/damen/3.png":N0,"../assets/gallery/damen/4.png":U0,"../assets/gallery/damen/5.png":H0,"../assets/gallery/damen/6.png":L0,"../assets/gallery/damen/7.png":G0,"../assets/gallery/damen/8.png":Y0,"../assets/gallery/damen/9.png":q0,"../assets/gallery/herren/herren_0.jpg":V0,"../assets/gallery/herren/herren_1.jpg":Q0,"../assets/gallery/herren/herren_10.jpg":X0,"../assets/gallery/herren/herren_11.jpg":Z0,"../assets/gallery/herren/herren_12.jpg":K0,"../assets/gallery/herren/herren_13.jpg":J0,"../assets/gallery/herren/herren_14.jpg":$0,"../assets/gallery/herren/herren_15.jpg":W0,"../assets/gallery/herren/herren_16.jpg":F0,"../assets/gallery/herren/herren_17.jpg":P0,"../assets/gallery/herren/herren_18.jpg":I0,"../assets/gallery/herren/herren_19.png":ep,"../assets/gallery/herren/herren_2.jpg":tp,"../assets/gallery/herren/herren_3.jpg":np,"../assets/gallery/herren/herren_4.jpg":ap,"../assets/gallery/herren/herren_5.jpg":lp,"../assets/gallery/herren/herren_6.jpg":ip,"../assets/gallery/herren/herren_7.jpg":rp,"../assets/gallery/herren/herren_8.jpg":up,"../assets/gallery/herren/herren_9.jpg":sp,"../assets/gallery/jfv/IMG-team.png":op,"../assets/gallery/jfv/IMG_5349.jpg":cp,"../assets/gallery/jfv/IMG_5369.jpg":fp,"../assets/gallery/jfv/IMG_5421.jpg":dp,"../assets/gallery/jfv/IMG_5442.jpg":hp,"../assets/gallery/jfv/IMG_5952.jpg":gp,"../assets/gallery/jfv/Unbenann324t.png":mp,"../assets/gallery/jfv/image0.jpeg":pp,"../assets/gallery/jfv/image11.jpeg":bp,"../assets/gallery/jfv/image8.jpeg":xp})).find(([o])=>o.includes(l));return c?c[1]:""},ju=(l,s)=>jp(`${l}/${l}_${s}.jpg`);vp(),z2(),Sp();function w2(){const l=vp(),[s,c]=M.useState(null);return M.useEffect(()=>{if(!s)return;const o=d=>{d.key==="Escape"&&c(null)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[s]),u.jsxs("section",{children:[u.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([o,d])=>u.jsxs("div",{style:{marginBottom:"2.5rem"},children:[u.jsx(E2,{children:o.toUpperCase()}),u.jsx(T2,{children:d.map((g,b)=>u.jsx(A2,{src:g,alt:`Bild ${b+1} aus ${o}`,onClick:()=>c({folder:o,idx:b}),style:{cursor:"pointer"}},b))}),s&&s.folder===o&&u.jsx(R2,{onClick:()=>c(null),children:u.jsxs(M2,{onClick:g=>g.stopPropagation(),children:[u.jsx(D2,{src:d[s.idx],alt:`Großansicht aus ${o}`}),u.jsx(C2,{onClick:()=>c(null),title:"Schließen",children:"×"})]})})]},o))]})}const E2=m.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,T2=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,A2=m.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,R2=m.div`
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
`,M2=m.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,D2=m.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,C2=m.button`
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
`,O2=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,B2=m.div`
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
`,k2=m.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,N2=m.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,U2=m.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,H2=m.div`
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
`,L2=m.a`
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
`;function Fo({icon:l,title:s,description:c,packages:o,buttonHref:d,buttonText:g}){return u.jsxs(B2,{children:[u.jsx(k2,{children:l}),u.jsx(N2,{children:s}),u.jsx(U2,{children:c}),u.jsx(H2,{children:o.map((b,j)=>u.jsxs("div",{children:[b,j<o.length-1&&u.jsx("br",{})]},j))}),u.jsx(L2,{href:d,children:g})]})}const G2=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;
`,Y2=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  text-align: center;
`,q2=m.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,V2=m.p`
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
`;function Q2({headline:l,description:s,contactInfos:c}){return u.jsxs(X2,{id:"kontakt",children:[u.jsx(Z2,{children:l}),u.jsx(K2,{children:s}),u.jsx(G2,{children:c.map((o,d)=>u.jsxs(Y2,{children:[u.jsxs(q2,{children:[o.icon," ",o.title]}),u.jsx(V2,{$isEmail:o.isEmail,children:o.isEmail?u.jsx("a",{href:`mailto:${o.content}`,children:o.content}):o.content})]},d))})]})}const X2=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,Z2=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,K2=m.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,J2=m.section`
  background: url("${ju("herren",4)}") center/cover;
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
`,$2=m.h1`
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
`,W2=m.h2`
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
`,wm=m.a`
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
`,F2=m.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,P2=m.main`
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
`,xi=m.h2`
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
`,I2=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,eS=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,tS=m.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,nS=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,aS=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,lS=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Em=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Tm=m.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,Am=m.ul`
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
`,iS=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,rS=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,uS=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,sS=m.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,oS=m.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,cS=m.ul`
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
`,Po=m.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,Io=m.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,ec=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,tc=m.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,nc=m.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,ac=m.div`
  font-size: 0.98rem;
  color: #666;
`,fS=m.div`
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
`,dS=m.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,hS=m.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,gS=m.a`
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
`,mS=m.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,pS=m.div`
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
`,bS=m.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,xS=m.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,yS=m.a`
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
`,vS=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,SS=m.h3`
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
`,jS=m.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,_S=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,Rm=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Mm=m.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,Dm=m.table`
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
`,zS=m.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,wS=m.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,ES=m.ul`
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
`,TS=m.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,AS=m.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,RS=m.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,MS=m.a`
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
`;function DS(){return u.jsxs(u.Fragment,{children:[u.jsx(J2,{children:u.jsxs(I2,{children:[u.jsx($2,{children:"SC Konstanz-Wollmatingen"}),u.jsx(W2,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),u.jsxs(F2,{children:[u.jsx(wm,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),u.jsx(wm,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),u.jsxs(P2,{children:[u.jsx(xi,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),u.jsx(eS,{children:u.jsx(tS,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten – bei uns ist für jeden das Richtige dabei."})}),u.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[u.jsx(mS,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),u.jsxs(O2,{role:"region","aria-label":"Sponsoring-Kategorien",children:[u.jsx(Fo,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),u.jsx(Fo,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),u.jsx(Fo,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),u.jsxs("section",{"aria-labelledby":"premium-pakete",children:[u.jsx(xi,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),u.jsx(Wo,{packages:$o.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),u.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[u.jsx(xi,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),u.jsx(Wo,{packages:$o.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),u.jsxs("section",{"aria-labelledby":"starter-pakete",children:[u.jsx(xi,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),u.jsx(Wo,{packages:$o.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))}),u.jsxs(pS,{children:[u.jsx(bS,{children:"⚽ Ballspende-Beispiel ansehen"}),u.jsx(xS,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),u.jsx(yS,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),u.jsxs(nS,{children:[u.jsx(aS,{children:"Warum SC Konstanz-Wollmatingen?"}),u.jsxs(lS,{children:[u.jsxs(Em,{children:[u.jsx(Tm,{children:"📊 Erreichte Reichweite"}),u.jsxs(Am,{children:[u.jsx("li",{children:"15+ Heimspiele pro Saison"}),u.jsx("li",{children:"200+ Zuschauer pro Spiel"}),u.jsx("li",{children:"2.500+ Instagram Follower"}),u.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),u.jsxs(Em,{children:[u.jsx(Tm,{children:"🏆 Sportlicher Erfolg"}),u.jsxs(Am,{children:[u.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),u.jsx("li",{children:"2. Mannschaften pro Abteilung"}),u.jsx("li",{children:"Cheerleading-Team aktiv"}),u.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),u.jsx(xi,{children:"Zusätzliche Werbemöglichkeiten"}),u.jsxs(iS,{children:[u.jsx(rS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),u.jsxs(uS,{children:[u.jsxs(sS,{children:[u.jsxs(ec,{children:[u.jsx(tc,{children:"1 Seite (Farbe)"}),u.jsx(nc,{children:"1.000 €"}),u.jsx(ac,{children:"DIN A4 (297 × 210 mm)"})]}),u.jsxs(ec,{children:[u.jsx(tc,{children:"1/2 Seite (Farbe)"}),u.jsx(nc,{children:"500 €"}),u.jsx(ac,{children:"DIN A5 (148 × 210 mm)"})]}),u.jsxs(ec,{children:[u.jsx(tc,{children:"1/4 Seite (Farbe)"}),u.jsx(nc,{children:"250 €"}),u.jsx(ac,{children:"DIN A6 (105 × 148 mm)"})]})]}),u.jsx(oS,{children:u.jsxs(cS,{children:[u.jsxs(Po,{children:[u.jsx(Io,{}),"15 Ausgaben pro Saison"]}),u.jsxs(Po,{children:[u.jsx(Io,{}),"ca. 100 Exemplare pro Heimspiel"]}),u.jsxs(Po,{children:[u.jsx(Io,{}),"Digitale Version (Social Media & Website)"]})]})})]}),u.jsxs(fS,{children:[u.jsx(dS,{children:"📖 Aktuelle Ausgabe als Beispiel"}),u.jsx(hS,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),u.jsx(gS,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),u.jsxs(vS,{children:[u.jsx(SS,{children:"Werbeflächen auf dem Vereinsbus"}),u.jsx(jS,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),u.jsxs(_S,{children:[u.jsxs(Rm,{children:[u.jsx(Mm,{children:"Premium-Flächen"}),u.jsxs(Dm,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Position"}),u.jsx("th",{children:"Sichtbarkeit"}),u.jsx("th",{children:"Preis / Jahr"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:"Heckfläche (100×80 cm)"}),u.jsx("td",{children:"Sehr hoch"}),u.jsx("td",{children:"1.200 €"})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"Seitentüren (links/rechts)"}),u.jsx("td",{children:"Hoch"}),u.jsx("td",{children:"je 900 €"})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"Hintere Seitenflächen"}),u.jsx("td",{children:"Mittel–hoch"}),u.jsx("td",{children:"je 600 €"})]})]})]})]}),u.jsxs(Rm,{children:[u.jsx(Mm,{children:"Standard-Flächen"}),u.jsxs(Dm,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Position"}),u.jsx("th",{children:"Sichtbarkeit"}),u.jsx("th",{children:"Preis / Jahr"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),u.jsx("td",{children:"Mittel"}),u.jsx("td",{children:"400 € je Seite"})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"Frontstoßstange"}),u.jsx("td",{children:"Gering–mittel"}),u.jsx("td",{children:"250 €"})]})]})]})]})]}),u.jsxs(zS,{children:[u.jsx(wS,{children:"Zusatzoptionen:"}),u.jsxs(ES,{children:[u.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),u.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),u.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50–100 €)"})]})]}),u.jsxs(TS,{children:[u.jsx(AS,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),u.jsx(RS,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),u.jsx(MS,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),u.jsx(u2,{}),u.jsx(Q2,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),u.jsx(w2,{})]}),u.jsx(tf,{})]})}const CS=m.section`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("${ju("herren",4)}") center/cover;
    opacity: 0.3;
    z-index: 1;
  }
`,OS=m.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
`,BS=m.h1`
  color: white;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,kS=m.p`
  color: white;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.4;
  opacity: 0.95;
`,NS=m.a`
  display: inline-block;
  background: white;
  color: #e10073;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }
`,US=m.section`
  background: #f8f9fa;
  padding: 5rem 2rem;
`,HS=m.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,lc=m.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 8px 32px rgba(225, 0, 115, 0.15);
  }
`,ic=m.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`,rc=m.h3`
  font-size: 1.5rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`,uc=m.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,sc=m.div`
  font-size: 0.9rem;
  color: #e10073;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,LS=m.section`
  padding: 5rem 2rem;
  background: white;
`,GS=m.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,oc=m.div`
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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
`,cc=m.h3`
  font-size: 1.8rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`,fc=m.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: #222;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`,dc=m.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
`,hc=m.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    text-align: center;
    padding: 0.5rem 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.5;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "✓";
      color: #e10073;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`,gc=m.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(225, 0, 115, 0.4);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }
`,YS=m.section`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  padding: 5rem 2rem;
  border-top: 1px solid #eee;
`,qS=m.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`,qr=m.div`
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`,Vr=m.div`
  font-size: 2rem;
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Qr=m.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
`,VS=m.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`,QS=m.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`,XS=m.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Xr=m.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,Cm=m.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,Om=m.div`
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
`,Bm=m.a`
  display: inline-block;
  background: #e10073;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.7rem 1.2rem;
  border-radius: 24px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 2px solid #e10073;

  &:hover {
    background: #b8005a;
    border-color: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.25);
  }
`,Zr=m.div`
  padding: 1.5rem;
`,Kr=m.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,Jr=m.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`,ZS=m.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`,KS=m.section`
  background: white;
  padding: 5rem 2rem;
`,JS=m.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`,km=m.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #e10073;
  text-align: center;
`,Nm=m.p`
  font-size: 1.1rem;
  color: #333;
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.6;
`,Um=m.div`
  font-size: 1rem;
  color: #e10073;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,$S=m.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`,WS=m.section`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  padding: 5rem 2rem;
  text-align: center;
  color: white;
`,FS=m.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`,PS=m.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,IS=m.a`
  display: inline-block;
  background: white;
  color: #e10073;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border: 2px solid white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }
`,e5=m.section`
  background: #f8f9fa;
  padding: 5rem 2rem;
`,t5=m.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`,$r=m.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #e5e7eb;
`,Wr=m.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,Fr=m.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`,n5=m.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`,a5=()=>{const[l,s]=M.useState({followers:2500,posts:450,engagement:8.2,reach:15e3});return M.useEffect(()=>{const c=setInterval(()=>{s({followers:2500+Math.floor(Math.random()*100),posts:450+Math.floor(Math.random()*50),engagement:8.2+Math.random()*2,reach:15e3+Math.floor(Math.random()*5e3)})},5e3);return()=>clearInterval(c)},[]),l};function l5(){const l=a5();return u.jsxs(u.Fragment,{children:[u.jsx(CS,{children:u.jsxs(OS,{children:[u.jsx(BS,{children:"Werden Sie Teil der SC-Familie"}),u.jsx(kS,{children:"Maximale Sichtbarkeit bei 15+ Heimspielen, 2.500+ Instagram-Followern und einer leidenschaftlichen Community"}),u.jsx(NS,{href:"#kontakt",children:"Jetzt Kontakt aufnehmen"})]})}),u.jsx(US,{children:u.jsxs(HS,{children:[u.jsxs(lc,{children:[u.jsx(ic,{children:"📊"}),u.jsx(rc,{children:"Maximale Reichweite"}),u.jsx(uc,{children:"15+ Heimspiele pro Saison mit 200+ Zuschauern, 2.500+ Instagram-Followern und 5.000+ Website-Besuchern monatlich"}),u.jsx(sc,{children:"Live Impact"})]}),u.jsxs(lc,{children:[u.jsx(ic,{children:"🏆"}),u.jsx(rc,{children:"Sportlicher Erfolg"}),u.jsx(uc,{children:"1. Damenmannschaft in Landesliga, Cheerleading-Team aktiv, Jugendförderung etabliert – Ihr Logo bei echten Siegen"}),u.jsx(sc,{children:"Emotionale Bindung"})]}),u.jsxs(lc,{children:[u.jsx(ic,{children:"🤝"}),u.jsx(rc,{children:"Community Impact"}),u.jsx(uc,{children:"Werden Sie Teil einer starken Gemeinschaft. Ihre Unterstützung fördert Talente und schafft unvergessliche Momente"}),u.jsx(sc,{children:"Gemeinsam stark"})]})]})}),u.jsx(LS,{children:u.jsxs(GS,{children:[u.jsxs(oc,{children:[u.jsx(cc,{children:"🏆 Premium"}),u.jsx(fc,{children:"15.000€"}),u.jsx(dc,{children:"Pro Jahr"}),u.jsxs(hc,{children:[u.jsx("li",{children:"Trikotbrust 1. Mannschaft"}),u.jsx("li",{children:"Stadion-Namensrecht"}),u.jsx("li",{children:"Premium Social Media"})]}),u.jsx(gc,{href:"mailto:sponsoring@sckw.de?subject=Premium-Sponsoring",children:"Jetzt anfragen"})]}),u.jsxs(oc,{children:[u.jsx(cc,{children:"🏢 Lokal"}),u.jsx(fc,{children:"5.000€"}),u.jsx(dc,{children:"Pro Jahr"}),u.jsxs(hc,{children:[u.jsx("li",{children:"Bandenwerbung (5x2m)"}),u.jsx("li",{children:"Instagram-Erwähnungen"}),u.jsx("li",{children:"Community-Events"})]}),u.jsx(gc,{href:"mailto:sponsoring@sckw.de?subject=Lokales-Sponsoring",children:"Jetzt anfragen"})]}),u.jsxs(oc,{children:[u.jsx(cc,{children:"🌟 Starter"}),u.jsx(fc,{children:"500€"}),u.jsx(dc,{children:"5 Spiele"}),u.jsxs(hc,{children:[u.jsx("li",{children:"Ballspende für 5 Spiele"}),u.jsx("li",{children:"Stadiondurchsagen"}),u.jsx("li",{children:"Social Media Posts"})]}),u.jsx(gc,{href:"mailto:sponsoring@sckw.de?subject=Starter-Sponsoring",children:"Jetzt anfragen"})]})]})}),u.jsxs(YS,{children:[u.jsx(VS,{children:"📱 Live Instagram Insights"}),u.jsxs(qS,{children:[u.jsxs(qr,{children:[u.jsx(Vr,{children:l.followers.toLocaleString()}),u.jsx(Qr,{children:"Follower"})]}),u.jsxs(qr,{children:[u.jsx(Vr,{children:l.posts.toLocaleString()}),u.jsx(Qr,{children:"Posts"})]}),u.jsxs(qr,{children:[u.jsxs(Vr,{children:[l.engagement.toFixed(1),"%"]}),u.jsx(Qr,{children:"Engagement"})]}),u.jsxs(qr,{children:[u.jsx(Vr,{children:l.reach.toLocaleString()}),u.jsx(Qr,{children:"Reichweite"})]})]})]}),u.jsxs(QS,{children:[u.jsx(ZS,{children:"📸 So sehen Ihre Anzeigen aus"}),u.jsxs(XS,{children:[u.jsxs(Xr,{children:[u.jsx(Cm,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),u.jsxs(Zr,{children:[u.jsx(Kr,{children:"⚽ Ballspende"}),u.jsx(Jr,{children:"Ihr Logo prominent auf Spielbällen – direkt im Einsatz bei Heimspielen"}),u.jsx(Bm,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispiel öffnen"})]})]}),u.jsxs(Xr,{children:[u.jsx(Om,{}),u.jsxs(Zr,{children:[u.jsx(Kr,{children:"📖 Stadionmagazin"}),u.jsx(Jr,{children:"Professionelle Anzeigen in unserem Stadionheft – 100+ Exemplare pro Spiel"}),u.jsx(Bm,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 PDF öffnen"})]})]}),u.jsxs(Xr,{children:[u.jsx(Cm,{src:jp("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),u.jsxs(Zr,{children:[u.jsx(Kr,{children:"🖼️ Bandenwerbung"}),u.jsx(Jr,{children:"Sichtbare Präsenz am Spielfeldrand – bei jedem Heimspiel im Fokus"})]})]}),u.jsxs(Xr,{children:[u.jsx(Om,{}),u.jsxs(Zr,{children:[u.jsx(Kr,{children:"🚌 Buswerbung (Flächenübersicht)"}),u.jsx(Jr,{children:"Heck, Seitentüren und hintere Seitenflächen – markante Werbepositionen mit hoher Sichtbarkeit"})]})]})]})]}),u.jsxs(KS,{children:[u.jsx($S,{children:"💬 Was unsere Partner sagen"}),u.jsxs(JS,{children:[u.jsxs(km,{children:[u.jsx(Nm,{children:'"Die Zusammenarbeit mit SC Konstanz-Wollmatingen hat uns neue Kunden gebracht. Die Community ist unglaublich engagiert!"'}),u.jsx(Um,{children:"Graf Hardenberg - Premium Partner"})]}),u.jsxs(km,{children:[u.jsx(Nm,{children:'"Lokale Präsenz bei Heimspielen zahlt sich aus. Die Fans sind loyal und das Team professionell."'}),u.jsx(Um,{children:"Logan's Linde - Community Partner"})]})]})]}),u.jsxs(WS,{id:"kontakt",children:[u.jsx(FS,{children:"Jetzt Sponsor werden"}),u.jsx(PS,{children:"Erhalten Sie in 24 Stunden ein individuelles Angebot. Gemeinsam schaffen wir unvergessliche Momente!"}),u.jsx(IS,{href:"mailto:sponsoring@sckw.de?subject=Sponsoring-Anfrage",children:"📧 Kontakt aufnehmen"})]}),u.jsxs(e5,{children:[u.jsx(n5,{children:"❓ Häufige Fragen"}),u.jsxs(t5,{children:[u.jsxs($r,{children:[u.jsx(Wr,{children:"Sind die Preise netto?"}),u.jsx(Fr,{children:"Ja, alle Preise verstehen sich netto zzgl. MwSt."})]}),u.jsxs($r,{children:[u.jsx(Wr,{children:"Wie lange läuft ein Sponsoring-Vertrag?"}),u.jsx(Fr,{children:"Standard: 1 Jahr mit automatischer Verlängerung. Individuelle Laufzeiten möglich."})]}),u.jsxs($r,{children:[u.jsx(Wr,{children:"Wie läuft die Gestaltung ab?"}),u.jsx(Fr,{children:"Wir übernehmen die Gestaltung. Sie liefern Logo + Claim, wir machen den Rest!"})]}),u.jsxs($r,{children:[u.jsx(Wr,{children:"Was sind die nächsten Schritte?"}),u.jsx(Fr,{children:"Kontakt → Gespräch → Angebot → Vertrag → Umsetzung. Alles in 1-2 Wochen möglich."})]})]})]})]})}const i5=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],r5=m.section`
  background: url("${ju("herren",1)}") center/cover;
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
`,u5=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,s5=m.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,o5=m.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,c5=m.main`
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
`,f5=m.section`
  margin-bottom: 4rem;
`,d5=m.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,h5=m.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,g5=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,m5=m.div`
  text-align: center;
  margin-bottom: 3rem;
`,p5=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,b5=m.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,x5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,y5=m.div`
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
`,v5=m.div`
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
`,S5=m.div`
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
`,j5=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,_5=m.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,z5=m.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,w5=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,E5=m.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,T5=m.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,A5=m.button`
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
`,R5=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,M5=m.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,D5=m.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,C5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Fa=m.div`
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
`,Hm=m.div`
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
`,Pa=m.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ia=m.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,el=m.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,tl=m.ul`
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
`,nl=m.button`
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
`,O5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,B5=m.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,k5=m.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,N5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,mc=m.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,pc=m.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,bc=m.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,xc=m.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,U5=m.a`
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
`,H5=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,L5=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,G5=m.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,al=m.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ll=m.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,il=m.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function Y5(){return u.jsxs(u.Fragment,{children:[u.jsx(r5,{children:u.jsxs(u5,{children:[u.jsx(s5,{children:"SCKW Jobbörse"}),u.jsx(o5,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),u.jsxs(c5,{children:[u.jsxs(f5,{children:[u.jsx(d5,{children:"Willkommen bei der SCKW Jobbörse"}),u.jsx(h5,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),u.jsxs(g5,{children:[u.jsxs(m5,{children:[u.jsx(p5,{children:"So könnte es aussehen"}),u.jsx(b5,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),u.jsx(x5,{children:i5.map(l=>u.jsxs(y5,{children:[l.isExample&&u.jsx(v5,{children:"MUSTER"}),u.jsx(S5,{children:u.jsx(j5,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),u.jsx(_5,{children:l.title}),u.jsx(z5,{children:l.company}),u.jsx(w5,{children:l.tags.map((s,c)=>u.jsx(E5,{children:s},c))}),u.jsx(T5,{children:l.description}),u.jsx(A5,{children:"Mehr erfahren"})]},l.id))})]}),u.jsxs(R5,{children:[u.jsx(M5,{children:"Preise für Stellenausschreibungen"}),u.jsx(D5,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),u.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),u.jsxs(C5,{children:[u.jsxs(Fa,{children:[u.jsx(Pa,{children:"Basis"}),u.jsx(Ia,{children:"149 €"}),u.jsx(el,{children:"netto / Anzeige"}),u.jsxs(tl,{children:[u.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),u.jsx(Re,{children:"Firmenlogo und Link"}),u.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),u.jsx(Re,{children:"Bewerbermanagement"})]}),u.jsx(nl,{className:"secondary",children:"Basis wählen"})]}),u.jsxs(Fa,{className:"popular",children:[u.jsx(Hm,{children:"BELIEBT"}),u.jsx(Pa,{children:"Standard"}),u.jsx(Ia,{children:"229 €"}),u.jsx(el,{children:"netto / Anzeige"}),u.jsxs(tl,{children:[u.jsx(Re,{children:"Alle Basis-Features"}),u.jsx(Re,{children:"1 Social Media Post"}),u.jsx(Re,{children:"Instagram + Facebook Reichweite"}),u.jsx(Re,{children:"Newsletter-Erwähnung"})]}),u.jsx(nl,{children:"Standard wählen"})]}),u.jsxs(Fa,{children:[u.jsx(Pa,{children:"Boosted"}),u.jsx(Ia,{children:"349 €"}),u.jsx(el,{children:"netto / Anzeige"}),u.jsxs(tl,{children:[u.jsx(Re,{children:"Alle Standard-Features"}),u.jsx(Re,{children:"Instagram Story"}),u.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),u.jsx(Re,{children:"Prioritäre Platzierung"})]}),u.jsx(nl,{className:"secondary",children:"Boosted wählen"})]})]}),u.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),u.jsxs(O5,{children:[u.jsxs(Fa,{children:[u.jsx(Pa,{children:"Job Flat SMALL"}),u.jsx(Ia,{children:"799 €"}),u.jsx(el,{children:"netto / Jahr"}),u.jsxs(tl,{children:[u.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),u.jsx(Re,{children:"6 Social Media Posts"}),u.jsx(Re,{children:"Website-Präsenz"}),u.jsx(Re,{children:"Newsletter-Integration"})]}),u.jsx(nl,{className:"secondary",children:"Small Flat"})]}),u.jsxs(Fa,{className:"popular",children:[u.jsx(Hm,{children:"EMPFOHLEN"}),u.jsx(Pa,{children:"Job Flat MEDIUM"}),u.jsx(Ia,{children:"1.199 €"}),u.jsx(el,{children:"netto / Jahr"}),u.jsxs(tl,{children:[u.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),u.jsx(Re,{children:"Stadionmagazin-Präsenz"}),u.jsx(Re,{children:"Social Media Posts"}),u.jsx(Re,{children:"Stories & Highlights"})]}),u.jsx(nl,{children:"Medium Flat"})]}),u.jsxs(Fa,{children:[u.jsx(Pa,{children:"Job Flat PARTNER"}),u.jsx(Ia,{children:"1.499 €"}),u.jsx(el,{children:"netto / Jahr"}),u.jsxs(tl,{children:[u.jsx(Re,{children:"Unbegrenzte Anzeigen"}),u.jsx(Re,{children:"Erwähnung bei Heimspielen"}),u.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),u.jsx(Re,{children:"Prioritärer Support"})]}),u.jsx(nl,{className:"secondary",children:"Partner Flat"})]})]}),u.jsxs(B5,{children:[u.jsx(k5,{children:"➕ Zusatzoptionen"}),u.jsxs(N5,{children:[u.jsxs(mc,{children:[u.jsx(pc,{children:"Social Story"}),u.jsx(bc,{children:"39 €"}),u.jsx(xc,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),u.jsxs(mc,{children:[u.jsx(pc,{children:"Designservice"}),u.jsx(bc,{children:"59 €"}),u.jsx(xc,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),u.jsxs(mc,{children:[u.jsx(pc,{children:"Stadionmagazin"}),u.jsx(bc,{children:"99 €"}),u.jsx(xc,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),u.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:u.jsx(U5,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),u.jsxs(H5,{children:[u.jsx(L5,{children:"🎯 Warum SCKW Jobbörse?"}),u.jsxs(G5,{children:[u.jsxs(al,{children:[u.jsx(ll,{children:"🏠"}),u.jsxs(il,{children:[u.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),u.jsxs(al,{children:[u.jsx(ll,{children:"👥"}),u.jsxs(il,{children:[u.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),u.jsxs(al,{children:[u.jsx(ll,{children:"💰"}),u.jsxs(il,{children:[u.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),u.jsxs(al,{children:[u.jsx(ll,{children:"📈"}),u.jsxs(il,{children:[u.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),u.jsxs(al,{children:[u.jsx(ll,{children:"⚡"}),u.jsxs(il,{children:[u.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),u.jsxs(al,{children:[u.jsx(ll,{children:"🤲"}),u.jsxs(il,{children:[u.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),u.jsx(tf,{})]})}const q5={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},V5={packages:q5},Q5=m.div`
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
`,X5=m.div`
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
`,Z5=m.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,K5=m.div`
  margin-bottom: 1.5rem;
`,J5=m.div`
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
`,$5=m.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,W5=m.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,F5=m.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,P5=m.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,I5=m.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ej=m.div`
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
`,tj=m.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,nj=m.div`
  flex: 1;
`,aj=m.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,lj=m.span`
  font-weight: 600;
  color: #374151;
`,ij=m.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,rj=m.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,uj=m.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,sj=m.button`
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
`,oj=m.div`
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
`,cj=()=>{const l=V5;return{kabinen:{current:l.packages.kabinen.current,goal:l.packages.kabinen.goal,donors:l.packages.kabinen.donors},fassade:{current:l.packages.fassade.current,goal:l.packages.fassade.goal,donors:l.packages.fassade.donors},waschkueche:{current:l.packages.waschkueche.current,goal:l.packages.waschkueche.goal,donors:l.packages.waschkueche.donors}}};function fj({data:l=cj(),realTime:s=!1}){const[c,o]=M.useState(l),[d,g]=M.useState(new Date),[b,j]=M.useState(!1),y=async()=>{j(!0);try{const R=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(R.ok){const D=await R.json(),H={kabinen:{current:D.packages.kabinen.current,goal:D.packages.kabinen.goal,donors:D.packages.kabinen.donors},fassade:{current:D.packages.fassade.current,goal:D.packages.fassade.goal,donors:D.packages.fassade.donors},waschkueche:{current:D.packages.waschkueche.current,goal:D.packages.waschkueche.goal,donors:D.packages.waschkueche.donors}};o(H),g(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(R){console.error("❌ Fehler beim Laden der Spendendaten:",R)}finally{j(!1)}};M.useEffect(()=>{if(!s)return;const R=setInterval(()=>{y()},3e4);return()=>clearInterval(R)},[s]);const p=R=>{switch(R){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},E=R=>{switch(R){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return R}};return u.jsxs(u.Fragment,{children:[u.jsx(Q5,{children:Object.entries(c).map(([R,D])=>{const H=D.current/D.goal*100;return u.jsxs(X5,{children:[u.jsxs(Z5,{children:[p(R)," ",E(R)]}),u.jsxs(K5,{children:[u.jsxs(J5,{children:[u.jsxs("span",{children:[D.current.toLocaleString("de-DE")," €"]}),u.jsxs("span",{children:[D.goal.toLocaleString("de-DE")," €"]})]}),u.jsx($5,{children:u.jsx(W5,{$progress:H})}),u.jsxs(F5,{children:[Math.round(H),"% erreicht"]})]}),u.jsxs(P5,{children:[u.jsxs(I5,{children:["💝 Spender (",D.donors.length,")"]}),u.jsx(ej,{children:D.donors.length>0?D.donors.slice().reverse().map((L,G)=>u.jsxs(tj,{children:[u.jsxs(nj,{children:[u.jsx(aj,{children:L.anonymous?"Anonymer Spender":L.name}),L.comment&&u.jsxs(ij,{children:['"',L.comment,'"']}),L.date&&u.jsx(rj,{children:L.date})]}),u.jsxs(lj,{children:[L.amount.toLocaleString("de-DE")," €"]})]},G)):u.jsx(uj,{children:"Noch keine Spenden 🤗"})})]})]},R)})}),u.jsxs(sj,{onClick:y,disabled:b,title:"Spendendaten aktualisieren",children:["🔄",b?"Lade...":"Aktualisieren"]}),u.jsxs(oj,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const dj=m.section`
  background: url("${ju("herren",18)}") center/cover;
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
`,hj=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,gj=m.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,mj=m.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,pj=m.main`
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
`,bj=m.section`
  margin-bottom: 4rem;
`,xj=m.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,yj=m.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,vj=m.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,Sj=m.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,jj=m.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,_j=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,zj=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,wj=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,yc=m.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,vc=m.div`
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
`,Ej=m.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,Tj=m.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,Aj=m.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,Rj=m.div`
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
`,Mj=m.div`
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
`,Dj=m.div`
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
`,Cj=m.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,Oj=m.button`
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
`,Lm=m.button`
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
`,Sc=m.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,jc=m.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,Bj=m.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,kj=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,Nj=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,_c=m.div`
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
`,zc=m.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,wc=m.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Ec=m.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Tc=m.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,Uj=m.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Hj=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,Lj=m.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,Gj=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Pr=m.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Ir=m.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,eu=m.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,Yj=m.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,qj=m.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Vj=m.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Qj=m.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,Gm=m.a`
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
`,Xj=m.div`
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
`,Zj=m.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,Kj=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Jj=m.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,$j=m.button`
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
`,Wj=m.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Ac=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Rc=m.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Mc=m.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,Fj=m.button`
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
`,Pj=m.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,rl=Sp();function Dc({images:l,onImageClick:s}){const[c,o]=M.useState(0);return M.useEffect(()=>{if(l.length<=1)return;const d=setInterval(()=>{o(g=>(g+1)%l.length)},4e3);return()=>clearInterval(d)},[l.length]),l.length===0?u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):u.jsxs(Ej,{children:[l.map((d,g)=>u.jsx(Tj,{src:d.src,alt:d.alt,$isActive:g===c,onClick:()=>s(g)},g)),l.length>1&&u.jsx(Aj,{children:l.map((d,g)=>u.jsx(Rj,{$isActive:g===c,onClick:()=>o(g)},g))})]})}function Ij({images:l,initialIndex:s,onClose:c}){const[o,d]=M.useState(s),g=M.useCallback(()=>{d(j=>(j+1)%l.length)},[l.length]),b=M.useCallback(()=>{d(j=>(j-1+l.length)%l.length)},[l.length]);return M.useEffect(()=>{const j=y=>{y.key==="Escape"&&c(),y.key==="ArrowRight"&&g(),y.key==="ArrowLeft"&&b()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[c,g,b]),u.jsx(Mj,{onClick:c,children:u.jsxs(Dj,{onClick:j=>j.stopPropagation(),children:[u.jsx(Oj,{onClick:c,children:"×"}),u.jsx(Cj,{src:l[o].src,alt:l[o].alt}),l.length>1&&u.jsxs(u.Fragment,{children:[u.jsx(Lm,{$direction:"prev",onClick:b,children:"‹"}),u.jsx(Lm,{$direction:"next",onClick:g,children:"›"})]})]})})}function e3(){const[l,s]=M.useState(!1),[c,o]=M.useState([]),[d,g]=M.useState(0),[b,j]=M.useState(!1),y=(R,D)=>{o(R),g(D),s(!0)},p=R=>{R.preventDefault(),j(!0)},E=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return u.jsxs(u.Fragment,{children:[u.jsx(dj,{children:u.jsxs(hj,{children:[u.jsx(gj,{children:"🏟️ Fürstenberg weiterentwickeln"}),u.jsx(mj,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),u.jsxs(pj,{children:[u.jsxs(bj,{children:[u.jsx(xj,{children:"Der Fürstenberg - unser Kultplatz"}),u.jsx(yj,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),u.jsxs(vj,{children:[u.jsx(Sj,{children:"✨ Charme erhalten, Komfort verbessern"}),u.jsx(jj,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),u.jsxs(_j,{children:[u.jsx(zj,{children:"🔍 Wo wir ansetzen möchten"}),u.jsxs(wj,{children:[u.jsxs(yc,{children:[u.jsx(vc,{children:u.jsx(Dc,{images:rl.kabinen,onImageClick:R=>y(rl.kabinen,R)})}),u.jsx(Sc,{children:"🔧 Kabinen komfortabler gestalten"}),u.jsx(jc,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),u.jsxs(yc,{children:[u.jsx(vc,{children:u.jsx(Dc,{images:rl.fassade,onImageClick:R=>y(rl.fassade,R)})}),u.jsx(Sc,{children:"🎨 Fassade & Fenster erneuern"}),u.jsx(jc,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),u.jsxs(yc,{children:[u.jsx(vc,{children:u.jsx(Dc,{images:rl.waschkueche,onImageClick:R=>y(rl.waschkueche,R)})}),u.jsx(Sc,{children:"🧺 Waschküche auf Vordermann bringen"}),u.jsx(jc,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),u.jsxs(Bj,{children:[u.jsx(kj,{children:"✨ Unsere Pläne für den Fürstenberg"}),u.jsxs(Nj,{children:[u.jsxs(_c,{children:[u.jsx(zc,{children:"🪑"}),u.jsx(wc,{children:"Kabinen sanieren"}),u.jsx(Ec,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),u.jsx(Tc,{children:"~8.000 €"})]}),u.jsxs(_c,{children:[u.jsx(zc,{children:"🎨"}),u.jsx(wc,{children:"Fassade & Fenster erneuern"}),u.jsx(Ec,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),u.jsx(Tc,{children:"~15.000 €"})]}),u.jsxs(_c,{children:[u.jsx(zc,{children:"🧺"}),u.jsx(wc,{children:"Waschküche modernisieren"}),u.jsx(Ec,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),u.jsx(Tc,{children:"~5.000 €"})]})]})]}),u.jsxs(Uj,{children:[u.jsx(Hj,{children:"🤝 Werden Sie Renovierungs-Partner!"}),u.jsx(Lj,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),u.jsxs(Gj,{children:[u.jsxs(Pr,{children:[u.jsx(Ir,{children:"🏆"}),u.jsxs(eu,{children:[u.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),u.jsxs(Pr,{children:[u.jsx(Ir,{children:"📄"}),u.jsxs(eu,{children:[u.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),u.jsxs(Pr,{children:[u.jsx(Ir,{children:"📱"}),u.jsxs(eu,{children:[u.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),u.jsxs(Pr,{children:[u.jsx(Ir,{children:"🎯"}),u.jsxs(eu,{children:[u.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),u.jsxs(Yj,{children:[u.jsx(qj,{children:"🤝 Gemeinsam für den Fürstenberg"}),u.jsx(Vj,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),u.jsx(fj,{realTime:!0}),u.jsxs(Qj,{children:[u.jsx(Gm,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),u.jsx(Gm,{href:"#",onClick:p,children:"🏦 Per Überweisung spenden"})]})]})]}),u.jsx(tf,{}),b&&u.jsx(Xj,{onClick:()=>j(!1),children:u.jsxs(Zj,{onClick:R=>R.stopPropagation(),children:[u.jsxs(Kj,{children:[u.jsx(Jj,{children:"Kontoverbindung für Spenden"}),u.jsx($j,{onClick:()=>j(!1),children:"×"})]}),u.jsxs(Wj,{children:[u.jsxs(Ac,{children:[u.jsx(Rc,{children:"Kontoinhaber:"}),u.jsx(Mc,{children:"SC Konstanz-Wollmatingen"})]}),u.jsxs(Ac,{children:[u.jsx(Rc,{children:"IBAN:"}),u.jsx(Mc,{children:"DE12 6905 0001 0000 0228 06"})]}),u.jsxs(Ac,{children:[u.jsx(Rc,{children:"BIC:"}),u.jsx(Mc,{children:"SOLADES1KNZ"})]})]}),u.jsx(Fj,{onClick:E,children:"📋 IBAN kopieren"}),u.jsx(Pj,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),l&&u.jsx(Ij,{images:c,initialIndex:d,onClose:()=>s(!1)})]})}function t3(){return u.jsxs(xv,{children:[u.jsx(Nv,{}),u.jsxs($y,{children:[u.jsx(ul,{path:"/",element:u.jsx(Ky,{to:"/sponsoring",replace:!0})}),u.jsx(ul,{path:"/sponsoring",element:u.jsx(DS,{})}),u.jsx(ul,{path:"/sponsoring-v2",element:u.jsx(l5,{})}),u.jsx(ul,{path:"/jobs",element:u.jsx(Y5,{})}),u.jsx(ul,{path:"/renovierung",element:u.jsx(e3,{})})]})]})}const n3={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");tx.createRoot(document.getElementById("root")).render(u.jsx(M.StrictMode,{children:u.jsx(ny,{theme:n3,children:u.jsx(t3,{})})}));
