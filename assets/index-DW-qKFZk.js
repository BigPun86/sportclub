(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const b of g.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function o(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function s(d){if(d.ep)return;d.ep=!0;const g=o(d);fetch(d.href,g)}})();function zb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Mc={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function Eb(){if(Ag)return hi;Ag=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(s,d,g){var b=null;if(g!==void 0&&(b=""+g),d.key!==void 0&&(b=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:i,type:s,key:b,ref:d!==void 0?d:null,props:g}}return hi.Fragment=u,hi.jsx=o,hi.jsxs=o,hi}var Rg;function Tb(){return Rg||(Rg=1,Mc.exports=Eb()),Mc.exports}var c=Tb(),Dc={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function wb(){if(Mg)return ie;Mg=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),B=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=B&&x[B]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,q={};function X(x,N,L){this.props=x,this.context=N,this.refs=q,this.updater=L||k}X.prototype.isReactComponent={},X.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},X.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=X.prototype;function $(x,N,L){this.props=x,this.context=N,this.refs=q,this.updater=L||k}var Z=$.prototype=new H;Z.constructor=$,G(Z,X.prototype),Z.isPureReactComponent=!0;var ae=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(x,N,L,V,F,oe){return L=oe.ref,{$$typeof:i,type:x,key:N,ref:L!==void 0?L:null,props:oe}}function Te(x,N){return W(x.type,N,void 0,void 0,void 0,x.props)}function _e(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function nt(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return N[L]})}var lt=/\/+/g;function qe(x,N){return typeof x=="object"&&x!==null&&x.key!=null?nt(""+x.key):N.toString(36)}function Zt(){}function Qt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Zt,Zt):(x.status="pending",x.then(function(N){x.status==="pending"&&(x.status="fulfilled",x.value=N)},function(N){x.status==="pending"&&(x.status="rejected",x.reason=N)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ye(x,N,L,V,F){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(oe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case i:case u:ee=!0;break;case T:return ee=x._init,Ye(ee(x._payload),N,L,V,F)}}if(ee)return F=F(x),ee=V===""?"."+qe(x,0):V,ae(F)?(L="",ee!=null&&(L=ee.replace(lt,"$&/")+"/"),Ye(F,N,L,"",function(Pe){return Pe})):F!=null&&(_e(F)&&(F=Te(F,L+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(lt,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(x))for(var pe=0;pe<x.length;pe++)V=x[pe],oe=Ve+qe(V,pe),ee+=Ye(V,N,L,oe,F);else if(pe=U(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(V=x.next()).done;)V=V.value,oe=Ve+qe(V,pe++),ee+=Ye(V,N,L,oe,F);else if(oe==="object"){if(typeof x.then=="function")return Ye(Qt(x),N,L,V,F);throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function M(x,N,L){if(x==null)return x;var V=[],F=0;return Ye(x,V,"","",function(oe){return N.call(L,oe,F++)}),V}function Y(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ce(){}return ie.Children={map:M,forEach:function(x,N,L){M(x,function(){N.apply(this,arguments)},L)},count:function(x){var N=0;return M(x,function(){N++}),N},toArray:function(x){return M(x,function(N){return N})||[]},only:function(x){if(!_e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=X,ie.Fragment=o,ie.Profiler=d,ie.PureComponent=$,ie.StrictMode=s,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Q.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cloneElement=function(x,N,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=G({},x.props),F=x.key,oe=void 0;if(N!=null)for(ee in N.ref!==void 0&&(oe=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=L;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(x.type,F,void 0,void 0,oe,V)},ie.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},ie.createElement=function(x,N,L){var V,F={},oe=null;if(N!=null)for(V in N.key!==void 0&&(oe=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=L;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(x&&x.defaultProps)for(V in ee=x.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(x,oe,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:j,render:x}},ie.isValidElement=_e,ie.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:Y}},ie.memo=function(x,N){return{$$typeof:m,type:x,compare:N===void 0?null:N}},ie.startTransition=function(x){var N=Q.T,L={};Q.T=L;try{var V=x(),F=Q.S;F!==null&&F(L,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ce,P)}catch(oe){P(oe)}finally{Q.T=N}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(x){return Q.H.use(x)},ie.useActionState=function(x,N,L){return Q.H.useActionState(x,N,L)},ie.useCallback=function(x,N){return Q.H.useCallback(x,N)},ie.useContext=function(x){return Q.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,N){return Q.H.useDeferredValue(x,N)},ie.useEffect=function(x,N,L){var V=Q.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,N)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(x,N,L){return Q.H.useImperativeHandle(x,N,L)},ie.useInsertionEffect=function(x,N){return Q.H.useInsertionEffect(x,N)},ie.useLayoutEffect=function(x,N){return Q.H.useLayoutEffect(x,N)},ie.useMemo=function(x,N){return Q.H.useMemo(x,N)},ie.useOptimistic=function(x,N){return Q.H.useOptimistic(x,N)},ie.useReducer=function(x,N,L){return Q.H.useReducer(x,N,L)},ie.useRef=function(x){return Q.H.useRef(x)},ie.useState=function(x){return Q.H.useState(x)},ie.useSyncExternalStore=function(x,N,L){return Q.H.useSyncExternalStore(x,N,L)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.1.0",ie}var Dg;function xo(){return Dg||(Dg=1,Dc.exports=wb()),Dc.exports}var R=xo();const xi=zb(R);var Oc={exports:{}},gi={},Cc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Ab(){return Og||(Og=1,function(i){function u(M,Y){var P=M.length;M.push(Y);e:for(;0<P;){var ce=P-1>>>1,x=M[ce];if(0<d(x,Y))M[ce]=Y,M[P]=x,P=ce;else break e}}function o(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var Y=M[0],P=M.pop();if(P!==Y){M[0]=P;e:for(var ce=0,x=M.length,N=x>>>1;ce<N;){var L=2*(ce+1)-1,V=M[L],F=L+1,oe=M[F];if(0>d(V,P))F<x&&0>d(oe,V)?(M[ce]=oe,M[F]=P,ce=F):(M[ce]=V,M[L]=P,ce=L);else if(F<x&&0>d(oe,P))M[ce]=oe,M[F]=P,ce=F;else break e}}return Y}function d(M,Y){var P=M.sortIndex-Y.sortIndex;return P!==0?P:M.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;i.unstable_now=function(){return g.now()}}else{var b=Date,j=b.now();i.unstable_now=function(){return b.now()-j}}var v=[],m=[],T=1,B=null,U=3,k=!1,G=!1,q=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ae(M){for(var Y=o(m);Y!==null;){if(Y.callback===null)s(m);else if(Y.startTime<=M)s(m),Y.sortIndex=Y.expirationTime,u(v,Y);else break;Y=o(m)}}function Q(M){if(q=!1,ae(M),!G)if(o(v)!==null)G=!0,le||(le=!0,qe());else{var Y=o(m);Y!==null&&Ye(Q,Y.startTime-M)}}var le=!1,W=-1,Te=5,_e=-1;function nt(){return X?!0:!(i.unstable_now()-_e<Te)}function lt(){if(X=!1,le){var M=i.unstable_now();_e=M;var Y=!0;try{e:{G=!1,q&&(q=!1,$(W),W=-1),k=!0;var P=U;try{t:{for(ae(M),B=o(v);B!==null&&!(B.expirationTime>M&&nt());){var ce=B.callback;if(typeof ce=="function"){B.callback=null,U=B.priorityLevel;var x=ce(B.expirationTime<=M);if(M=i.unstable_now(),typeof x=="function"){B.callback=x,ae(M),Y=!0;break t}B===o(v)&&s(v),ae(M)}else s(v);B=o(v)}if(B!==null)Y=!0;else{var N=o(m);N!==null&&Ye(Q,N.startTime-M),Y=!1}}break e}finally{B=null,U=P,k=!1}Y=void 0}}finally{Y?qe():le=!1}}}var qe;if(typeof Z=="function")qe=function(){Z(lt)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Qt=Zt.port2;Zt.port1.onmessage=lt,qe=function(){Qt.postMessage(null)}}else qe=function(){H(lt,0)};function Ye(M,Y){W=H(function(){M(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(M){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var P=U;U=Y;try{return M()}finally{U=P}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var P=U;U=M;try{return Y()}finally{U=P}},i.unstable_scheduleCallback=function(M,Y,P){var ce=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ce+P:ce):P=ce,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,M={id:T++,callback:Y,priorityLevel:M,startTime:P,expirationTime:x,sortIndex:-1},P>ce?(M.sortIndex=P,u(m,M),o(v)===null&&M===o(m)&&(q?($(W),W=-1):q=!0,Ye(Q,P-ce))):(M.sortIndex=x,u(v,M),G||k||(G=!0,le||(le=!0,qe()))),M},i.unstable_shouldYield=nt,i.unstable_wrapCallback=function(M){var Y=U;return function(){var P=U;U=Y;try{return M.apply(this,arguments)}finally{U=P}}}}(Bc)),Bc}var Cg;function Rb(){return Cg||(Cg=1,Cc.exports=Ab()),Cc.exports}var Nc={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Mb(){if(Bg)return tt;Bg=1;var i=xo();function u(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)m+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(v,m,T){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:B==null?null:""+B,children:v,containerInfo:m,implementation:T}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,tt.createPortal=function(v,m){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return g(v,m,null,T)},tt.flushSync=function(v){var m=b.T,T=s.p;try{if(b.T=null,s.p=2,v)return v()}finally{b.T=m,s.p=T,s.d.f()}},tt.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},tt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},tt.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var T=m.as,B=j(T,m.crossOrigin),U=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;T==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:B,integrity:U,fetchPriority:k}):T==="script"&&s.d.X(v,{crossOrigin:B,integrity:U,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},tt.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var T=j(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(v)},tt.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var T=m.as,B=j(T,m.crossOrigin);s.d.L(v,T,{crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},tt.preloadModule=function(v,m){if(typeof v=="string")if(m){var T=j(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(v)},tt.requestFormReset=function(v){s.d.r(v)},tt.unstable_batchedUpdates=function(v,m){return v(m)},tt.useFormState=function(v,m,T){return b.H.useFormState(v,m,T)},tt.useFormStatus=function(){return b.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Ng;function Db(){if(Ng)return Nc.exports;Ng=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Nc.exports=Mb(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Ob(){if(Ug)return gi;Ug=1;var i=Rb(),u=xo(),o=Db();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(g(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return j(l),e;if(r===a)return j(l),t;r=r.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,h=l.child;h;){if(h===n){f=!0,n=l,a=r;break}if(h===a){f=!0,a=l,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=l;break}if(h===a){f=!0,a=r,n=l;break}h=h.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,B=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Zt=Symbol.for("react.client.reference");function Qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case X:return"Profiler";case q:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Qt(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Qt(e(t))}catch{}}return null}var Ye=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ce=[],x=-1;function N(e){return{current:e}}function L(e){0>x||(e.current=ce[x],ce[x]=null,x--)}function V(e,t){x++,ce[x]=e.current,e.current=t}var F=N(null),oe=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(oe,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ng(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ng(t),e=ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(F),V(F,e)}function Pe(){L(F),L(oe),L(ee)}function Ln(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=ag(t,e.type);t!==n&&(V(oe,e),V(F,n))}function Kt(e){oe.current===e&&(L(F),L(oe)),Ve.current===e&&(L(Ve),si._currentValue=P)}var St=Object.prototype.hasOwnProperty,bu=i.unstable_scheduleCallback,yu=i.unstable_cancelCallback,np=i.unstable_shouldYield,ap=i.unstable_requestPaint,Ut=i.unstable_now,lp=i.unstable_getCurrentPriorityLevel,No=i.unstable_ImmediatePriority,Uo=i.unstable_UserBlockingPriority,wi=i.unstable_NormalPriority,ip=i.unstable_LowPriority,Ho=i.unstable_IdlePriority,rp=i.log,up=i.unstable_setDisableYieldValue,pl=null,ft=null;function gn(e){if(typeof rp=="function"&&up(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(pl,e)}catch{}}var dt=Math.clz32?Math.clz32:op,sp=Math.log,cp=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(sp(e)/cp|0)|0}var Ai=256,Ri=4194304;function qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=qn(a):(f&=h,f!==0?l=qn(f):n||(n=h&~e,n!==0&&(l=qn(n))))):(h=a&~r,h!==0?l=qn(h):f!==0?l=qn(f):n||(n=a&~e,n!==0&&(l=qn(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var e=Ai;return Ai<<=1,(Ai&4194048)===0&&(Ai=256),e}function Go(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dp(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,E=e.hiddenUpdates;for(n=f&~n;0<n;){var D=31-dt(n),C=1<<D;h[D]=0,y[D]=-1;var w=E[D];if(w!==null)for(E[D]=null,D=0;D<w.length;D++){var A=w[D];A!==null&&(A.lane&=-536870913)}n&=~C}a!==0&&Lo(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Lo(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function xu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yo(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function hp(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var mn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+mn,it="__reactProps$"+mn,sa="__reactContainer$"+mn,ju="__reactEvents$"+mn,gp="__reactListeners$"+mn,mp="__reactHandles$"+mn,Vo="__reactResources$"+mn,vl="__reactMarker$"+mn;function _u(e){delete e[Ie],delete e[it],delete e[ju],delete e[gp],delete e[mp]}function ca(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sa]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ug(e);e!==null;){if(n=e[Ie])return n;e=ug(e)}return t}e=n,n=e.parentNode}return null}function oa(e){if(e=e[Ie]||e[sa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function fa(e){var t=e[Vo];return t||(t=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[vl]=!0}var Xo=new Set,Zo={};function Yn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Zo[e]=t,e=0;e<t.length;e++)Xo.add(t[e])}var pp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qo={},Ko={};function bp(e){return St.call(Ko,e)?!0:St.call(Qo,e)?!1:pp.test(e)?Ko[e]=!0:(Qo[e]=!0,!1)}function Di(e,t,n){if(bp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Oi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var zu,Jo;function ha(e){if(zu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||"",Jo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zu+e+Jo}var Eu=!1;function Tu(e,t){if(!e||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(A){var w=A}Reflect.construct(e,[],C)}else{try{C.call()}catch(A){w=A}e.call(C.prototype)}}else{try{throw Error()}catch(A){w=A}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(A){if(A&&w&&typeof A.stack=="string")return[A.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var y=f.split(`
`),E=h.split(`
`);for(l=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(a===y.length||l===E.length)for(a=y.length-1,l=E.length-1;1<=a&&0<=l&&y[a]!==E[l];)l--;for(;1<=a&&0<=l;a--,l--)if(y[a]!==E[l]){if(a!==1||l!==1)do if(a--,l--,0>l||y[a]!==E[l]){var D=`
`+y[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=l);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function yp(e){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return Tu(e.type,!1);case 11:return Tu(e.type.render,!1);case 1:return Tu(e.type,!0);case 31:return ha("Activity");default:return""}}function $o(e){try{var t="";do t+=yp(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=Wo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=vp(e))}function Fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Wo(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xp=/[\n"\\]/g;function _t(e){return e.replace(xp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wu(e,t,n,a,l,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Au(e,f,jt(t)):n!=null?Au(e,f,jt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function Po(e,t,n,a,l,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Au(e,t,n){t==="number"&&Bi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ga(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Io(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function ef(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Ye(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Sp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&tf(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&tf(e,r,t[r])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(e){return _p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,ba=null;function af(e){var t=oa(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(wu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[it]||null;if(!l)throw Error(s(90));wu(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Fo(a)}break e;case"textarea":Io(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ga(e,!!n.multiple,t,!1)}}}var Ou=!1;function lf(e,t,n){if(Ou)return e(t,n);Ou=!0;try{var a=e(t);return a}finally{if(Ou=!1,(pa!==null||ba!==null)&&(xr(),pa&&(t=pa,e=ba,ba=pa=null,af(t),e)))for(t=0;t<e.length;t++)af(e[t])}}function Sl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[it]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if($t)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{Cu=!1}var pn=null,Bu=null,Ui=null;function rf(){if(Ui)return Ui;var e,t=Bu,n=t.length,a,l="value"in pn?pn.value:pn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return Ui=l.slice(e,1<a?1-a:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function uf(){return!1}function rt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ki:uf,this.isPropagationStopped=uf,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=rt(Vn),_l=T({},Vn,{view:0,detail:0}),zp=rt(_l),Nu,Uu,zl,Li=T({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Nu=e.screenX-zl.screenX,Uu=e.screenY-zl.screenY):Uu=Nu=0,zl=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),sf=rt(Li),Ep=T({},Li,{dataTransfer:0}),Tp=rt(Ep),wp=T({},_l,{relatedTarget:0}),Hu=rt(wp),Ap=T({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=rt(Ap),Mp=T({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=rt(Mp),Op=T({},Vn,{data:0}),cf=rt(Op),Cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Np[e])?!!t[e]:!1}function ku(){return Up}var Hp=T({},_l,{key:function(e){if(e.key){var t=Cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=rt(Hp),Gp=T({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=rt(Gp),Lp=T({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),qp=rt(Lp),Yp=T({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=rt(Yp),Xp=T({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=rt(Xp),Qp=T({},Vn,{newState:0,oldState:0}),Kp=rt(Qp),Jp=[9,13,27,32],Gu=$t&&"CompositionEvent"in window,El=null;$t&&"documentMode"in document&&(El=document.documentMode);var $p=$t&&"TextEvent"in window&&!El,ff=$t&&(!Gu||El&&8<El&&11>=El),df=" ",hf=!1;function gf(e,t){switch(e){case"keyup":return Jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function Wp(e,t){switch(e){case"compositionend":return mf(t);case"keypress":return t.which!==32?null:(hf=!0,df);case"textInput":return e=t.data,e===df&&hf?null:e;default:return null}}function Fp(e,t){if(ya)return e==="compositionend"||!Gu&&gf(e,t)?(e=rf(),Ui=Bu=pn=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pp[e.type]:t==="textarea"}function bf(e,t,n,a){pa?ba?ba.push(a):ba=[a]:pa=a,t=Tr(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Tl=null,wl=null;function Ip(e){Fh(e,0)}function qi(e){var t=xl(e);if(Fo(t))return e}function yf(e,t){if(e==="change")return t}var vf=!1;if($t){var Lu;if($t){var qu="oninput"in document;if(!qu){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),qu=typeof xf.oninput=="function"}Lu=qu}else Lu=!1;vf=Lu&&(!document.documentMode||9<document.documentMode)}function Sf(){Tl&&(Tl.detachEvent("onpropertychange",jf),wl=Tl=null)}function jf(e){if(e.propertyName==="value"&&qi(wl)){var t=[];bf(t,wl,e,Du(e)),lf(Ip,t)}}function e1(e,t,n){e==="focusin"?(Sf(),Tl=t,wl=n,Tl.attachEvent("onpropertychange",jf)):e==="focusout"&&Sf()}function t1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(wl)}function n1(e,t){if(e==="click")return qi(t)}function a1(e,t){if(e==="input"||e==="change")return qi(t)}function l1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:l1;function Al(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!St.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function _f(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var n=_f(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_f(n)}}function Ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var i1=$t&&"documentMode"in document&&11>=document.documentMode,va=null,Vu=null,Rl=null,Xu=!1;function wf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||va==null||va!==Bi(a)||(a=va,"selectionStart"in a&&Yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rl&&Al(Rl,a)||(Rl=a,a=Tr(Vu,"onSelect"),0<a.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xa={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Zu={},Af={};$t&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Zn(e){if(Zu[e])return Zu[e];if(!xa[e])return e;var t=xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Af)return Zu[e]=t[n];return e}var Rf=Zn("animationend"),Mf=Zn("animationiteration"),Df=Zn("animationstart"),r1=Zn("transitionrun"),u1=Zn("transitionstart"),s1=Zn("transitioncancel"),Of=Zn("transitionend"),Cf=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Ot(e,t){Cf.set(e,t),Yn(t,[e])}var Bf=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var n=Bf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:$o(t)},Bf.set(e,t),t)}return{value:e,source:t,stack:$o(t)}}var Et=[],Sa=0,Ku=0;function Yi(){for(var e=Sa,t=Ku=Sa=0;t<e;){var n=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var r=Et[t];if(Et[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Nf(n,l,r)}}function Vi(e,t,n,a){Et[Sa++]=e,Et[Sa++]=t,Et[Sa++]=n,Et[Sa++]=a,Ku|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ju(e,t,n,a){return Vi(e,t,n,a),Xi(e)}function ja(e,t){return Vi(e,null,null,t),Xi(e)}function Nf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-dt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function Xi(e){if(50<ei)throw ei=0,ec=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _a={};function c1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,a){return new c1(e,t,n,a)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Uf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zi(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")$u(e)&&(f=1);else if(typeof e=="string")f=fb(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=gt(31,n,t,l),e.elementType=_e,e.lanes=r,e;case G:return Qn(n.children,l,r,t);case q:f=8,l|=24;break;case X:return e=gt(12,n,t,l|2),e.elementType=X,e.lanes=r,e;case Q:return e=gt(13,n,t,l),e.elementType=Q,e.lanes=r,e;case le:return e=gt(19,n,t,l),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case Z:f=10;break e;case $:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Te:f=16,a=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=gt(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function Qn(e,t,n,a){return e=gt(7,e,a,t),e.lanes=n,e}function Wu(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Fu(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var za=[],Ea=0,Qi=null,Ki=0,Tt=[],wt=0,Kn=null,Ft=1,Pt="";function Jn(e,t){za[Ea++]=Ki,za[Ea++]=Qi,Qi=e,Ki=t}function Hf(e,t,n){Tt[wt++]=Ft,Tt[wt++]=Pt,Tt[wt++]=Kn,Kn=e;var a=Ft;e=Pt;var l=32-dt(a)-1;a&=~(1<<l),n+=1;var r=32-dt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,Ft=1<<32-dt(t)+l|n<<l|a,Pt=r+e}else Ft=1<<r|n<<l|a,Pt=e}function Pu(e){e.return!==null&&(Jn(e,1),Hf(e,1,0))}function Iu(e){for(;e===Qi;)Qi=za[--Ea],za[Ea]=null,Ki=za[--Ea],za[Ea]=null;for(;e===Kn;)Kn=Tt[--wt],Tt[wt]=null,Pt=Tt[--wt],Tt[wt]=null,Ft=Tt[--wt],Tt[wt]=null}var at=null,Oe=null,me=!1,$n=null,Ht=!1,es=Error(s(519));function Wn(e){var t=Error(s(418,""));throw Ol(zt(t,e)),es}function kf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[it]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ni.length;n++)de(ni[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Po(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ci(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),ef(t,a.value,a.defaultValue,a.children),Ci(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||tg(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=wr),t=!0):t=!1,t||Wn(e)}function Gf(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:at=at.return}}function Ml(e){if(e!==at)return!1;if(!me)return Gf(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pc(e.type,e.memoizedProps)),n=!n),n&&Oe&&Wn(e),Gf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,On(e.type)?(e=xc,xc=null,Oe=e):Oe=t):Oe=at?Bt(e.stateNode.nextSibling):null;return!0}function Dl(){Oe=at=null,me=!1}function Lf(){var e=$n;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),$n=null),e}function Ol(e){$n===null?$n=[e]:$n.push(e)}var ts=N(null),Fn=null,It=null;function bn(e,t,n){V(ts,t._currentValue),t._currentValue=n}function en(e){e._currentValue=ts.current,L(ts)}function ns(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function as(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var y=0;y<t.length;y++)if(h.context===t[y]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ns(r.return,n,e),a||(f=null);break e}r=h.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(s(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),ns(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Cl(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=l.type;ht(l.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(l===Ve.current){if(f=l.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(si):e=[si])}l=l.return}e!==null&&as(t,e,n,a),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return qf(Fn,e)}function $i(e,t){return Fn===null&&Pn(e),qf(e,t)}function qf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(s(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var o1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},f1=i.unstable_scheduleCallback,d1=i.unstable_NormalPriority,Ge={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ls(){return{controller:new o1,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&f1(d1,function(){e.controller.abort()})}var Nl=null,is=0,Ta=0,wa=null;function h1(e,t){if(Nl===null){var n=Nl=[];is=0,Ta=uc(),wa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return is++,t.then(Yf,Yf),t}function Yf(){if(--is===0&&Nl!==null){wa!==null&&(wa.status="fulfilled");var e=Nl;Nl=null,Ta=0,wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function g1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Vf=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&h1(e,t),Vf!==null&&Vf(e,t)};var In=N(null);function rs(){var e=In.current;return e!==null?e:Ee.pooledCache}function Wi(e,t){t===null?V(In,In.current):V(In,t.pool)}function Xf(){var e=rs();return e===null?null:{parent:Ge._currentValue,pool:e}}var Ul=Error(s(460)),Zf=Error(s(474)),Fi=Error(s(542)),us={then:function(){}};function Qf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pi(){}function Kf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Pi,Pi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$f(e),e;default:if(typeof t.status=="string")t.then(Pi,Pi);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$f(e),e}throw Hl=t,Ul}}var Hl=null;function Jf(){if(Hl===null)throw Error(s(459));var e=Hl;return Hl=null,e}function $f(e){if(e===Ul||e===Fi)throw Error(s(483))}var yn=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Xi(e),Nf(e,null,n),t}return Vi(e,a,t,n),Xi(e)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,qo(e,n)}}function os(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fs=!1;function Gl(){if(fs){var e=wa;if(e!==null)throw e}}function Ll(e,t,n,a){fs=!1;var l=e.updateQueue;yn=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var y=h,E=y.next;y.next=null,f===null?r=E:f.next=E,f=y;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==f&&(h===null?D.firstBaseUpdate=E:h.next=E,D.lastBaseUpdate=y))}if(r!==null){var C=l.baseState;f=0,D=E=y=null,h=r;do{var w=h.lane&-536870913,A=w!==h.lane;if(A?(he&w)===w:(a&w)===w){w!==0&&w===Ta&&(fs=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;w=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){C=ne.call(je,C,w);break e}C=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,w=typeof ne=="function"?ne.call(je,C,w):ne,w==null)break e;C=T({},C,w);break e;case 2:yn=!0}}w=h.callback,w!==null&&(e.flags|=64,A&&(e.flags|=8192),A=l.callbacks,A===null?l.callbacks=[w]:A.push(w))}else A={lane:w,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(E=D=A,y=C):D=D.next=A,f|=w;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;A=h,h=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);D===null&&(y=C),l.baseState=y,l.firstBaseUpdate=E,l.lastBaseUpdate=D,r===null&&(l.shared.lanes=0),An|=f,e.lanes=f,e.memoizedState=C}}function Wf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ff(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wf(n[e],t)}var Aa=N(null),Ii=N(0);function Pf(e,t){e=sn,V(Ii,e),V(Aa,t),sn=e|t.baseLanes}function ds(){V(Ii,sn),V(Aa,Aa.current)}function hs(){sn=Ii.current,L(Aa),L(Ii)}var Sn=0,ue=null,xe=null,Ue=null,er=!1,Ra=!1,ea=!1,tr=0,ql=0,Ma=null,m1=0;function Be(){throw Error(s(321))}function gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function ms(e,t,n,a,l,r){return Sn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Nd:Ud,ea=!1,r=n(a,l),ea=!1,Ra&&(r=ed(t,n,a,l)),If(e),r}function If(e){M.H=ur;var t=xe!==null&&xe.next!==null;if(Sn=0,Ue=xe=ue=null,er=!1,ql=0,Ma=null,t)throw Error(s(300));e===null||Ze||(e=e.dependencies,e!==null&&Ji(e)&&(Ze=!0))}function ed(e,t,n,a){ue=e;var l=0;do{if(Ra&&(Ma=null),ql=0,Ra=!1,25<=l)throw Error(s(301));if(l+=1,Ue=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}M.H=j1,r=t(n,a)}while(Ra);return r}function p1(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Yl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ue.flags|=1024),t}function ps(){var e=tr!==0;return tr=0,e}function bs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ys(e){if(er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}er=!1}Sn=0,Ue=xe=ue=null,Ra=!1,ql=tr=0,Ma=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function He(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function vs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yl(e){var t=ql;return ql+=1,Ma===null&&(Ma=[]),e=Kf(Ma,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Nd:Ud),e}function nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yl(e);if(e.$$typeof===Z)return et(e)}throw Error(s(438,String(e)))}function xs(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vs(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=nt;return t.index++,n}function tn(e,t){return typeof t=="function"?t(e):t}function ar(e){var t=He();return Ss(t,xe,e)}function Ss(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=f=null,y=null,E=t,D=!1;do{var C=E.lane&-536870913;if(C!==E.lane?(he&C)===C:(Sn&C)===C){var w=E.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),C===Ta&&(D=!0);else if((Sn&w)===w){E=E.next,w===Ta&&(D=!0);continue}else C={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=C,f=r):y=y.next=C,ue.lanes|=w,An|=w;C=E.action,ea&&n(r,C),r=E.hasEagerState?E.eagerState:n(r,C)}else w={lane:C,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=w,f=r):y=y.next=w,ue.lanes|=C,An|=C;E=E.next}while(E!==null&&E!==t);if(y===null?f=r:y.next=h,!ht(r,e.memoizedState)&&(Ze=!0,D&&(n=wa,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=y,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function js(e){var t=He(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);ht(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function td(e,t,n){var a=ue,l=He(),r=me;if(r){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!ht((xe||l).memoizedState,n);f&&(l.memoizedState=n,Ze=!0),l=l.queue;var h=ld.bind(null,a,l,e);if(Vl(2048,8,h,[e]),l.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,Da(9,lr(),ad.bind(null,a,l,n,t),null),Ee===null)throw Error(s(349));r||(Sn&124)!==0||nd(a,t,n)}return n}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=vs(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,a){t.value=n,t.getSnapshot=a,id(t)&&rd(e)}function ld(e,t,n){return n(function(){id(t)&&rd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function rd(e){var t=ja(e,2);t!==null&&vt(t,e,2)}function _s(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),ea){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t}function ud(e,t,n,a){return e.baseState=n,Ss(e,xe,typeof a=="function"?a:tn)}function b1(e,t,n,a,l){if(rr(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};M.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,sd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function sd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=M.T,f={};M.T=f;try{var h=n(l,a),y=M.S;y!==null&&y(f,h),cd(e,t,h)}catch(E){zs(e,t,E)}finally{M.T=r}}else try{r=n(l,a),cd(e,t,r)}catch(E){zs(e,t,E)}}function cd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){od(e,t,a)},function(a){return zs(e,t,a)}):od(e,t,n)}function od(e,t,n){t.status="fulfilled",t.value=n,fd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sd(e,n)))}function zs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,fd(t),t=t.next;while(t!==a)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function hd(e,t){if(me){var n=Ee.formState;if(n!==null){e:{var a=ue;if(me){if(Oe){t:{for(var l=Oe,r=Ht;l.nodeType!==8;){if(!r){l=null;break t}if(l=Bt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Oe=Bt(l.nextSibling),a=l.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},n.queue=a,n=Od.bind(null,ue,a),a.dispatch=n,a=_s(!1),r=Rs.bind(null,ue,!1,a.queue),a=ut(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=b1.bind(null,ue,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function gd(e){var t=He();return md(t,xe,e)}function md(e,t,n){if(t=Ss(e,t,dd)[0],e=ar(tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Yl(t)}catch(f){throw f===Ul?Fi:f}else a=t;t=He();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Da(9,lr(),y1.bind(null,l,n),null)),[a,r,e]}function y1(e,t){e.action=t}function pd(e){var t=He(),n=xe;if(n!==null)return md(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Da(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=vs(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function lr(){return{destroy:void 0,resource:void 0}}function bd(){return He().memoizedState}function ir(e,t,n,a){var l=ut();a=a===void 0?null:a,ue.flags|=e,l.memoizedState=Da(1|t,lr(),n,a)}function Vl(e,t,n,a){var l=He();a=a===void 0?null:a;var r=l.memoizedState.inst;xe!==null&&a!==null&&gs(a,xe.memoizedState.deps)?l.memoizedState=Da(t,r,n,a):(ue.flags|=e,l.memoizedState=Da(1|t,r,n,a))}function yd(e,t){ir(8390656,8,e,t)}function vd(e,t){Vl(2048,8,e,t)}function xd(e,t){return Vl(4,2,e,t)}function Sd(e,t){return Vl(4,4,e,t)}function jd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _d(e,t,n){n=n!=null?n.concat([e]):null,Vl(4,4,jd.bind(null,t,e),n)}function Es(){}function zd(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&gs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&gs(t,a[1]))return a[0];if(a=e(),ea){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[a,t],a}function Ts(e,t,n){return n===void 0||(Sn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ah(),ue.lanes|=e,An|=e,n)}function Td(e,t,n,a){return ht(n,t)?n:Aa.current!==null?(e=Ts(e,n,a),ht(e,t)||(Ze=!0),e):(Sn&42)===0?(Ze=!0,e.memoizedState=n):(e=Ah(),ue.lanes|=e,An|=e,t)}function wd(e,t,n,a,l){var r=Y.p;Y.p=r!==0&&8>r?r:8;var f=M.T,h={};M.T=h,Rs(e,!1,t,n);try{var y=l(),E=M.S;if(E!==null&&E(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var D=g1(y,a);Xl(e,t,D,yt(e))}else Xl(e,t,a,yt(e))}catch(C){Xl(e,t,{then:function(){},status:"rejected",reason:C},yt())}finally{Y.p=r,M.T=f}}function v1(){}function ws(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=Ad(e).queue;wd(e,l,t,P,n===null?v1:function(){return Rd(e),n(a)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=Ad(e).next.queue;Xl(e,t,{},yt())}function As(){return et(si)}function Md(){return He().memoizedState}function Dd(){return He().memoizedState}function x1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=vn(n);var a=xn(t,e,n);a!==null&&(vt(a,t,n),kl(a,t,n)),t={cache:ls()},e.payload=t;return}t=t.return}}function S1(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},rr(e)?Cd(t,n):(n=Ju(e,t,n,a),n!==null&&(vt(n,e,a),Bd(n,t,a)))}function Od(e,t,n){var a=yt();Xl(e,t,n,a)}function Xl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(rr(e))Cd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(l.hasEagerState=!0,l.eagerState=h,ht(h,f))return Vi(e,t,l,0),Ee===null&&Yi(),!1}catch{}finally{}if(n=Ju(e,t,l,a),n!==null)return vt(n,e,a),Bd(n,t,a),!0}return!1}function Rs(e,t,n,a){if(a={lane:2,revertLane:uc(),action:a,hasEagerState:!1,eagerState:null,next:null},rr(e)){if(t)throw Error(s(479))}else t=Ju(e,n,a,2),t!==null&&vt(t,e,2)}function rr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Cd(e,t){Ra=er=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,qo(e,n)}}var ur={readContext:et,use:nr,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Nd={readContext:et,use:nr,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:yd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ir(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){ir(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(ea){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var l=n(t);if(ea){gn(!0);try{n(t)}finally{gn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=S1.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=_s(e);var t=e.queue,n=Od.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Es,useDeferredValue:function(e,t){var n=ut();return Ts(n,e,t)},useTransition:function(){var e=_s(!1);return e=wd.bind(null,ue,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,l=ut();if(me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ee===null)throw Error(s(349));(he&124)!==0||nd(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,yd(ld.bind(null,a,r,e),[e]),a.flags|=2048,Da(9,lr(),ad.bind(null,a,r,n,t),null),n},useId:function(){var e=ut(),t=Ee.identifierPrefix;if(me){var n=Pt,a=Ft;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=m1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:As,useFormState:hd,useActionState:hd,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:xs,useCacheRefresh:function(){return ut().memoizedState=x1.bind(null,ue)}},Ud={readContext:et,use:nr,useCallback:zd,useContext:et,useEffect:vd,useImperativeHandle:_d,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:Ed,useReducer:ar,useRef:bd,useState:function(){return ar(tn)},useDebugValue:Es,useDeferredValue:function(e,t){var n=He();return Td(n,xe.memoizedState,e,t)},useTransition:function(){var e=ar(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:td,useId:Md,useHostTransitionStatus:As,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var n=He();return ud(n,xe,e,t)},useMemoCache:xs,useCacheRefresh:Dd},j1={readContext:et,use:nr,useCallback:zd,useContext:et,useEffect:vd,useImperativeHandle:_d,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:Ed,useReducer:js,useRef:bd,useState:function(){return js(tn)},useDebugValue:Es,useDeferredValue:function(e,t){var n=He();return xe===null?Ts(n,e,t):Td(n,xe.memoizedState,e,t)},useTransition:function(){var e=js(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:td,useId:Md,useHostTransitionStatus:As,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=He();return xe!==null?ud(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xs,useCacheRefresh:Dd},Oa=null,Zl=0;function sr(e){var t=Zl;return Zl+=1,Oa===null&&(Oa=[]),Kf(Oa,e,t)}function Ql(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===B?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hd(e){var t=e._init;return t(e._payload)}function kd(e){function t(_,S){if(e){var z=_.deletions;z===null?(_.deletions=[S],_.flags|=16):z.push(S)}}function n(_,S){if(!e)return null;for(;S!==null;)t(_,S),S=S.sibling;return null}function a(_){for(var S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function l(_,S){return _=Wt(_,S),_.index=0,_.sibling=null,_}function r(_,S,z){return _.index=z,e?(z=_.alternate,z!==null?(z=z.index,z<S?(_.flags|=67108866,S):z):(_.flags|=67108866,S)):(_.flags|=1048576,S)}function f(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function h(_,S,z,O){return S===null||S.tag!==6?(S=Wu(z,_.mode,O),S.return=_,S):(S=l(S,z),S.return=_,S)}function y(_,S,z,O){var K=z.type;return K===G?D(_,S,z.props.children,O,z.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Hd(K)===S.type)?(S=l(S,z.props),Ql(S,z),S.return=_,S):(S=Zi(z.type,z.key,z.props,null,_.mode,O),Ql(S,z),S.return=_,S)}function E(_,S,z,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=Fu(z,_.mode,O),S.return=_,S):(S=l(S,z.children||[]),S.return=_,S)}function D(_,S,z,O,K){return S===null||S.tag!==7?(S=Qn(z,_.mode,O,K),S.return=_,S):(S=l(S,z),S.return=_,S)}function C(_,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Wu(""+S,_.mode,z),S.return=_,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return z=Zi(S.type,S.key,S.props,null,_.mode,z),Ql(z,S),z.return=_,z;case k:return S=Fu(S,_.mode,z),S.return=_,S;case Te:var O=S._init;return S=O(S._payload),C(_,S,z)}if(Ye(S)||qe(S))return S=Qn(S,_.mode,z,null),S.return=_,S;if(typeof S.then=="function")return C(_,sr(S),z);if(S.$$typeof===Z)return C(_,$i(_,S),z);cr(_,S)}return null}function w(_,S,z,O){var K=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:h(_,S,""+z,O);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case U:return z.key===K?y(_,S,z,O):null;case k:return z.key===K?E(_,S,z,O):null;case Te:return K=z._init,z=K(z._payload),w(_,S,z,O)}if(Ye(z)||qe(z))return K!==null?null:D(_,S,z,O,null);if(typeof z.then=="function")return w(_,S,sr(z),O);if(z.$$typeof===Z)return w(_,S,$i(_,z),O);cr(_,z)}return null}function A(_,S,z,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return _=_.get(z)||null,h(S,_,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return _=_.get(O.key===null?z:O.key)||null,y(S,_,O,K);case k:return _=_.get(O.key===null?z:O.key)||null,E(S,_,O,K);case Te:var se=O._init;return O=se(O._payload),A(_,S,z,O,K)}if(Ye(O)||qe(O))return _=_.get(z)||null,D(S,_,O,K,null);if(typeof O.then=="function")return A(_,S,z,sr(O),K);if(O.$$typeof===Z)return A(_,S,z,$i(S,O),K);cr(S,O)}return null}function ne(_,S,z,O){for(var K=null,se=null,J=S,te=S=0,Ke=null;J!==null&&te<z.length;te++){J.index>te?(Ke=J,J=null):Ke=J.sibling;var ge=w(_,J,z[te],O);if(ge===null){J===null&&(J=Ke);break}e&&J&&ge.alternate===null&&t(_,J),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge,J=Ke}if(te===z.length)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;te<z.length;te++)J=C(_,z[te],O),J!==null&&(S=r(J,S,te),se===null?K=J:se.sibling=J,se=J);return me&&Jn(_,te),K}for(J=a(J);te<z.length;te++)Ke=A(J,_,te,z[te],O),Ke!==null&&(e&&Ke.alternate!==null&&J.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),se===null?K=Ke:se.sibling=Ke,se=Ke);return e&&J.forEach(function(Hn){return t(_,Hn)}),me&&Jn(_,te),K}function I(_,S,z,O){if(z==null)throw Error(s(151));for(var K=null,se=null,J=S,te=S=0,Ke=null,ge=z.next();J!==null&&!ge.done;te++,ge=z.next()){J.index>te?(Ke=J,J=null):Ke=J.sibling;var Hn=w(_,J,ge.value,O);if(Hn===null){J===null&&(J=Ke);break}e&&J&&Hn.alternate===null&&t(_,J),S=r(Hn,S,te),se===null?K=Hn:se.sibling=Hn,se=Hn,J=Ke}if(ge.done)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;!ge.done;te++,ge=z.next())ge=C(_,ge.value,O),ge!==null&&(S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return me&&Jn(_,te),K}for(J=a(J);!ge.done;te++,ge=z.next())ge=A(J,_,te,ge.value,O),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?te:ge.key),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return e&&J.forEach(function(_b){return t(_,_b)}),me&&Jn(_,te),K}function je(_,S,z,O){if(typeof z=="object"&&z!==null&&z.type===G&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case U:e:{for(var K=z.key;S!==null;){if(S.key===K){if(K=z.type,K===G){if(S.tag===7){n(_,S.sibling),O=l(S,z.props.children),O.return=_,_=O;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Hd(K)===S.type){n(_,S.sibling),O=l(S,z.props),Ql(O,z),O.return=_,_=O;break e}n(_,S);break}else t(_,S);S=S.sibling}z.type===G?(O=Qn(z.props.children,_.mode,O,z.key),O.return=_,_=O):(O=Zi(z.type,z.key,z.props,null,_.mode,O),Ql(O,z),O.return=_,_=O)}return f(_);case k:e:{for(K=z.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(_,S.sibling),O=l(S,z.children||[]),O.return=_,_=O;break e}else{n(_,S);break}else t(_,S);S=S.sibling}O=Fu(z,_.mode,O),O.return=_,_=O}return f(_);case Te:return K=z._init,z=K(z._payload),je(_,S,z,O)}if(Ye(z))return ne(_,S,z,O);if(qe(z)){if(K=qe(z),typeof K!="function")throw Error(s(150));return z=K.call(z),I(_,S,z,O)}if(typeof z.then=="function")return je(_,S,sr(z),O);if(z.$$typeof===Z)return je(_,S,$i(_,z),O);cr(_,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(_,S.sibling),O=l(S,z),O.return=_,_=O):(n(_,S),O=Wu(z,_.mode,O),O.return=_,_=O),f(_)):n(_,S)}return function(_,S,z,O){try{Zl=0;var K=je(_,S,z,O);return Oa=null,K}catch(J){if(J===Ul||J===Fi)throw J;var se=gt(29,J,null,_.mode);return se.lanes=O,se.return=_,se}finally{}}}var Ca=kd(!0),Gd=kd(!1),At=N(null),kt=null;function jn(e){var t=e.alternate;V(Le,Le.current&1),V(At,e),kt===null&&(t===null||Aa.current!==null||t.memoizedState!==null)&&(kt=e)}function Ld(e){if(e.tag===22){if(V(Le,Le.current),V(At,e),kt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(kt=e)}}else _n()}function _n(){V(Le,Le.current),V(At,At.current)}function nn(e){L(At),kt===e&&(kt=null),L(Le)}var Le=N(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||vc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ms(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ds={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),kl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),kl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=vn(n);a.tag=2,t!=null&&(a.callback=t),t=xn(e,a,n),t!==null&&(vt(t,e,n),kl(t,e,n))}};function qd(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Al(n,a)||!Al(l,r):!0}function Yd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vd(e){fr(e)}function Xd(e){console.error(e)}function Zd(e){fr(e)}function dr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Qd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Os(e,t,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){dr(e,t)},n}function Kd(e){return e=vn(e),e.tag=3,e}function Jd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Qd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Qd(t,n,a),typeof l!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function _1(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Cl(t,n,l,!0),n=At.current,n!==null){switch(n.tag){case 13:return kt===null?nc():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===us?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),lc(e,a,l)),!1;case 22:return n.flags|=65536,a===us?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),lc(e,a,l)),!1}throw Error(s(435,n.tag))}return lc(e,a,l),nc(),!1}if(me)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==es&&(e=Error(s(422),{cause:a}),Ol(zt(e,n)))):(a!==es&&(t=Error(s(423),{cause:a}),Ol(zt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=zt(a,n),l=Os(e.stateNode,a,l),os(e,l),Ce!==4&&(Ce=2)),!1;var r=Error(s(520),{cause:a});if(r=zt(r,n),Il===null?Il=[r]:Il.push(r),Ce!==4&&(Ce=2),t===null)return!0;a=zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Os(n.stateNode,a,e),os(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Kd(l),Jd(l,e,n,a),os(n,l),!1}n=n.return}while(n!==null);return!1}var $d=Error(s(461)),Ze=!1;function $e(e,t,n,a){t.child=e===null?Gd(t,null,n,a):Ca(t,e.child,n,a)}function Wd(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=ms(e,t,n,f,r,l),h=ps(),e!==null&&!Ze?(bs(e,t,l),an(e,t,l)):(me&&h&&Pu(t),t.flags|=1,$e(e,t,a,l),t.child)}function Fd(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!$u(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Pd(e,t,r,a,l)):(e=Zi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ls(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Al,n(f,a)&&e.ref===t.ref)return an(e,t,l)}return t.flags|=1,e=Wt(r,a),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(Al(r,a)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=a=r,Ls(e,l))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,an(e,t,l)}return Cs(e,t,n,a,l)}function Id(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return eh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,r!==null?r.cachePool:null),r!==null?Pf(t,r):ds(),Ld(t);else return t.lanes=t.childLanes=536870912,eh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Wi(t,r.cachePool),Pf(t,r),_n(),t.memoizedState=null):(e!==null&&Wi(t,null),ds(),_n());return $e(e,t,l,n),t.child}function eh(e,t,n,a){var l=rs();return l=l===null?null:{parent:Ge._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Wi(t,null),ds(),Ld(t),e!==null&&Cl(e,t,a,!0),null}function hr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cs(e,t,n,a,l){return Pn(t),n=ms(e,t,n,a,void 0,l),a=ps(),e!==null&&!Ze?(bs(e,t,l),an(e,t,l)):(me&&a&&Pu(t),t.flags|=1,$e(e,t,n,l),t.child)}function th(e,t,n,a,l,r){return Pn(t),t.updateQueue=null,n=ed(t,a,n,l),If(e),a=ps(),e!==null&&!Ze?(bs(e,t,r),an(e,t,r)):(me&&a&&Pu(t),t.flags|=1,$e(e,t,n,r),t.child)}function nh(e,t,n,a,l){if(Pn(t),t.stateNode===null){var r=_a,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ds,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},ss(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):_a,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Ms(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Ds.enqueueReplaceState(r,r.state,null),Ll(t,a,r,l),Gl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,y=ta(n,h);r.props=y;var E=r.context,D=n.contextType;f=_a,typeof D=="object"&&D!==null&&(f=et(D));var C=n.getDerivedStateFromProps;D=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||E!==f)&&Yd(t,r,a,f),yn=!1;var w=t.memoizedState;r.state=w,Ll(t,a,r,l),Gl(),E=t.memoizedState,h||w!==E||yn?(typeof C=="function"&&(Ms(t,n,C,a),E=t.memoizedState),(y=yn||qd(t,n,y,a,w,E,f))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),r.props=a,r.state=E,r.context=f,a=y):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,cs(e,t),f=t.memoizedProps,D=ta(n,f),r.props=D,C=t.pendingProps,w=r.context,E=n.contextType,y=_a,typeof E=="object"&&E!==null&&(y=et(E)),h=n.getDerivedStateFromProps,(E=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==C||w!==y)&&Yd(t,r,a,y),yn=!1,w=t.memoizedState,r.state=w,Ll(t,a,r,l),Gl();var A=t.memoizedState;f!==C||w!==A||yn||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof h=="function"&&(Ms(t,n,h,a),A=t.memoizedState),(D=yn||qd(t,n,D,a,w,A,y)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,y),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,y)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=y,a=D):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,hr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ca(t,e.child,null,l),t.child=Ca(t,null,n,l)):$e(e,t,n,l),t.memoizedState=r.state,e=t.child):e=an(e,t,l),e}function ah(e,t,n,a){return Dl(),t.flags|=256,$e(e,t,n,a),t.child}var Bs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ns(e){return{baseLanes:e,cachePool:Xf()}}function Us(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function lh(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(l?jn(t):_n(),me){var h=Oe,y;if(y=h){e:{for(y=h,h=Ht;y.nodeType!==8;){if(!h){h=null;break e}if(y=Bt(y.nextSibling),y===null){h=null;break e}}h=y}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Ft,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},y=gt(18,null,null,0),y.stateNode=h,y.return=t,t.child=y,at=t,Oe=null,y=!0):y=!1}y||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return vc(h)?t.lanes=32:t.lanes=536870912,null;nn(t)}return h=a.children,a=a.fallback,l?(_n(),l=t.mode,h=gr({mode:"hidden",children:h},l),a=Qn(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=Ns(n),l.childLanes=Us(e,f,n),t.memoizedState=Bs,a):(jn(t),Hs(t,h))}if(y=e.memoizedState,y!==null&&(h=y.dehydrated,h!==null)){if(r)t.flags&256?(jn(t),t.flags&=-257,t=ks(e,t,n)):t.memoizedState!==null?(_n(),t.child=e.child,t.flags|=128,t=null):(_n(),l=a.fallback,h=t.mode,a=gr({mode:"visible",children:a.children},h),l=Qn(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Ca(t,e.child,null,n),a=t.child,a.memoizedState=Ns(n),a.childLanes=Us(e,f,n),t.memoizedState=Bs,t=l);else if(jn(t),vc(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var E=f.dgst;f=E,a=Error(s(419)),a.stack="",a.digest=f,Ol({value:a,source:null,stack:null}),t=ks(e,t,n)}else if(Ze||Cl(e,t,n,!1),f=(n&e.childLanes)!==0,Ze||f){if(f=Ee,f!==null&&(a=n&-n,a=(a&42)!==0?1:xu(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==y.retryLane))throw y.retryLane=a,ja(e,a),vt(f,e,a),$d;h.data==="$?"||nc(),t=ks(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Oe=Bt(h.nextSibling),at=t,me=!0,$n=null,Ht=!1,e!==null&&(Tt[wt++]=Ft,Tt[wt++]=Pt,Tt[wt++]=Kn,Ft=e.id,Pt=e.overflow,Kn=t),t=Hs(t,a.children),t.flags|=4096);return t}return l?(_n(),l=a.fallback,h=t.mode,y=e.child,E=y.sibling,a=Wt(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,E!==null?l=Wt(E,l):(l=Qn(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=Ns(n):(y=h.cachePool,y!==null?(E=Ge._currentValue,y=y.parent!==E?{parent:E,pool:E}:y):y=Xf(),h={baseLanes:h.baseLanes|n,cachePool:y}),l.memoizedState=h,l.childLanes=Us(e,f,n),t.memoizedState=Bs,a):(jn(t),n=e.child,e=n.sibling,n=Wt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Hs(e,t){return t=gr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gr(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ks(e,t,n){return Ca(t,e.child,null,n),e=Hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ih(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ns(e.return,t,n)}function Gs(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function rh(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if($e(e,t,a.children,n),a=Le.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ih(e,n,t);else if(e.tag===19)ih(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Le,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Gs(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&or(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Gs(t,!0,n,null,r);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Cl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ls(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function z1(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),bn(t,Ge,e.memoizedState.cache),Dl();break;case 27:case 5:Ln(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lh(e,t,n):(jn(t),e=an(e,t,n),e!==null?e.sibling:null);jn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Cl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return rh(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Le,Le.current),a)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n);case 24:bn(t,Ge,e.memoizedState.cache)}return an(e,t,n)}function uh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Ls(e,n)&&(t.flags&128)===0)return Ze=!1,z1(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,me&&(t.flags&1048576)!==0&&Hf(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")$u(a)?(e=ta(a,e),t.tag=1,t=nh(null,t,a,e,n)):(t.tag=0,t=Cs(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===ae){t.tag=11,t=Wd(null,t,a,e,n);break e}else if(l===W){t.tag=14,t=Fd(null,t,a,e,n);break e}}throw t=Qt(a)||a,Error(s(306,t,""))}}return t;case 0:return Cs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ta(a,t.pendingProps),nh(e,t,a,l,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,cs(e,t),Ll(t,a,null,n);var f=t.memoizedState;if(a=f.cache,bn(t,Ge,a),a!==r.cache&&as(t,[Ge],n,!0),Gl(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ah(e,t,a,n);break e}else if(a!==l){l=zt(Error(s(424)),t),Ol(l),t=ah(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Bt(e.firstChild),at=t,me=!0,$n=null,Ht=!0,n=Gd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Dl(),a===l){t=an(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return hr(e,t),e===null?(n=fg(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,a=Ar(ee.current).createElement(n),a[Ie]=t,a[it]=e,Fe(a,n,e),Xe(a),t.stateNode=a):t.memoizedState=fg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ln(t),e===null&&me&&(a=t.stateNode=sg(t.type,t.pendingProps,ee.current),at=t,Ht=!0,l=Oe,On(t.type)?(xc=l,Oe=Bt(a.firstChild)):Oe=l),$e(e,t,t.pendingProps.children,n),hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((l=a=Oe)&&(a=P1(a,t.type,t.pendingProps,Ht),a!==null?(t.stateNode=a,at=t,Oe=Bt(a.firstChild),Ht=!1,l=!0):l=!1),l||Wn(t)),Ln(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,pc(l,r)?a=null:f!==null&&pc(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=ms(e,t,p1,null,null,n),si._currentValue=l),hr(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&me&&((e=n=Oe)&&(n=I1(n,t.pendingProps,Ht),n!==null?(t.stateNode=n,at=t,Oe=null,e=!0):e=!1),e||Wn(t)),null;case 13:return lh(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ca(t,null,a,n):$e(e,t,a,n),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,bn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Pn(t),l=et(l),a=a(l),t.flags|=1,$e(e,t,a,n),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 19:return rh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=gr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Wt(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Id(e,t,n);case 24:return Pn(t),a=et(Ge),e===null?(l=rs(),l===null&&(l=Ee,r=ls(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},ss(t),bn(t,Ge,l)):((e.lanes&n)!==0&&(cs(e,t),Ll(t,null,null,n),Gl()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),bn(t,Ge,a)):(a=r.cache,bn(t,Ge,a),a!==l.cache&&as(t,[Ge],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ln(e){e.flags|=4}function sh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pg(t)){if(t=At.current,t!==null&&((he&4194048)===he?kt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==kt))throw Hl=us,Zf;e.flags|=8192}}function mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Go():536870912,e.lanes|=t,Ha|=t)}function Kl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function E1(e,t,n){var a=t.pendingProps;switch(Iu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),en(Ge),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lf())),Me(t),null;case 26:return n=t.memoizedState,e===null?(ln(t),n!==null?(Me(t),sh(t,n)):(Me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ln(t),Me(t),sh(t,n)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==a&&ln(t),Me(t),t.flags&=-16777217),null;case 27:Kt(t),n=ee.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Me(t),null}e=F.current,Ml(t)?kf(t):(e=sg(l,a,n),t.stateNode=e,ln(t))}return Me(t),null;case 5:if(Kt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Me(t),null}if(e=F.current,Ml(t))kf(t);else{switch(l=Ar(ee.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Ie]=t,e[it]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ln(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,Ml(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=at,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||tg(e.nodeValue,n)),e||Wn(t)}else e=Ar(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return Me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ml(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ie]=t}else Dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=Lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(nn(t),t):(nn(t),null)}if(nn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),mr(t,t.updateQueue),Me(t),null;case 4:return Pe(),e===null&&fc(t.stateNode.containerInfo),Me(t),null;case 10:return en(t.type),Me(t),null;case 19:if(L(Le),l=t.memoizedState,l===null)return Me(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)Kl(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=or(e),r!==null){for(t.flags|=128,Kl(l,!1),e=r.updateQueue,t.updateQueue=e,mr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Uf(n,e),n=n.sibling;return V(Le,Le.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ut()>yr&&(t.flags|=128,a=!0,Kl(l,!1),t.lanes=4194304)}else{if(!a)if(e=or(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,mr(t,e),Kl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!me)return Me(t),null}else 2*Ut()-l.renderingStartTime>yr&&n!==536870912&&(t.flags|=128,a=!0,Kl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,e=Le.current,V(Le,a?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return nn(t),hs(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&mr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),en(Ge),Me(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function T1(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(Ge),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 13:if(nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Le),null;case 4:return Pe(),null;case 10:return en(t.type),null;case 22:case 23:return nn(t),hs(),e!==null&&L(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return en(Ge),null;case 25:return null;default:return null}}function ch(e,t){switch(Iu(t),t.tag){case 3:en(Ge),Pe();break;case 26:case 27:case 5:Kt(t);break;case 4:Pe();break;case 13:nn(t);break;case 19:L(Le);break;case 10:en(t.type);break;case 22:case 23:nn(t),hs(),e!==null&&L(In);break;case 24:en(Ge)}}function Jl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(h){ze(t,t.return,h)}}function zn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,l=t;var y=n,E=h;try{E()}catch(D){ze(l,y,D)}}}a=a.next}while(a!==r)}}catch(D){ze(t,t.return,D)}}function oh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ff(t,n)}catch(a){ze(e,e.return,a)}}}function fh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ze(e,t,a)}}function $l(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){ze(e,t,l)}}function Gt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ze(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ze(e,t,l)}else n.current=null}function dh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ze(e,e.return,l)}}function qs(e,t,n){try{var a=e.stateNode;K1(a,e.type,n,t),a[it]=t}catch(l){ze(e,e.return,l)}}function hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function Ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wr));else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function pr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pr(e,t,n),e=e.sibling;e!==null;)pr(e,t,n),e=e.sibling}function gh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fe(t,a,n),t[Ie]=e,t[it]=n}catch(r){ze(e,e.return,r)}}var rn=!1,Ne=!1,Xs=!1,mh=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function w1(e,t){if(e=e.containerInfo,gc=Br,e=Tf(e),Yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,y=-1,E=0,D=0,C=e,w=null;t:for(;;){for(var A;C!==n||l!==0&&C.nodeType!==3||(h=f+l),C!==r||a!==0&&C.nodeType!==3||(y=f+a),C.nodeType===3&&(f+=C.nodeValue.length),(A=C.firstChild)!==null;)w=C,C=A;for(;;){if(C===e)break t;if(w===n&&++E===l&&(h=f),w===r&&++D===a&&(y=f),(A=C.nextSibling)!==null)break;C=w,w=C.parentNode}C=A}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},Br=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){ze(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function ph(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),a&4&&Jl(5,n);break;case 1:if(En(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){ze(n,n.return,f)}else{var l=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){ze(n,n.return,f)}}a&64&&oh(n),a&512&&$l(n,n.return);break;case 3:if(En(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ff(e,t)}catch(f){ze(n,n.return,f)}}break;case 27:t===null&&a&4&&gh(n);case 26:case 5:En(e,n),t===null&&a&4&&dh(n),a&512&&$l(n,n.return);break;case 12:En(e,n);break;case 13:En(e,n),a&4&&vh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=U1.bind(null,n),eb(e,n))));break;case 22:if(a=n.memoizedState!==null||rn,!a){t=t!==null&&t.memoizedState!==null||Ne,l=rn;var r=Ne;rn=a,(Ne=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),rn=l,Ne=r}break;case 30:break;default:En(e,n)}}function bh(e){var t=e.alternate;t!==null&&(e.alternate=null,bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_u(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,st=!1;function un(e,t,n){for(n=n.child;n!==null;)yh(e,t,n),n=n.sibling}function yh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:Ne||Gt(n,t),un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Gt(n,t);var a=Ae,l=st;On(n.type)&&(Ae=n.stateNode,st=!1),un(e,t,n),li(n.stateNode),Ae=a,st=l;break;case 5:Ne||Gt(n,t);case 6:if(a=Ae,l=st,Ae=null,un(e,t,n),Ae=a,st=l,Ae!==null)if(st)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){ze(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){ze(n,t,r)}break;case 18:Ae!==null&&(st?(e=Ae,rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),di(e)):rg(Ae,n.stateNode));break;case 4:a=Ae,l=st,Ae=n.stateNode.containerInfo,st=!0,un(e,t,n),Ae=a,st=l;break;case 0:case 11:case 14:case 15:Ne||zn(2,n,t),Ne||zn(4,n,t),un(e,t,n);break;case 1:Ne||(Gt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fh(n,t,a)),un(e,t,n);break;case 21:un(e,t,n);break;case 22:Ne=(a=Ne)||n.memoizedState!==null,un(e,t,n),Ne=a;break;default:un(e,t,n)}}function vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(n){ze(t,t.return,n)}}function A1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mh),t;default:throw Error(s(435,e.tag))}}function Zs(e,t){var n=A1(e);t.forEach(function(a){var l=H1.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function mt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(On(h.type)){Ae=h.stateNode,st=!1;break e}break;case 5:Ae=h.stateNode,st=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,st=!0;break e}h=h.return}if(Ae===null)throw Error(s(160));yh(r,f,l),Ae=null,st=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}var Ct=null;function xh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),a&4&&(zn(3,e,e.return),Jl(3,e),zn(5,e,e.return));break;case 1:mt(t,e),pt(e),a&512&&(Ne||n===null||Gt(n,n.return)),a&64&&rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Ct;if(mt(t,e),pt(e),a&512&&(Ne||n===null||Gt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[vl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Xe(r),a=r;break e;case"link":var f=gg("link","href",l).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;case"meta":if(f=gg("meta","content",l).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;default:throw Error(s(468,a))}r[Ie]=e,Xe(r),a=r}e.stateNode=a}else mg(l,e.type,e.stateNode);else e.stateNode=hg(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?mg(l,e.type,e.stateNode):hg(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&qs(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),pt(e),a&512&&(Ne||n===null||Gt(n,n.return)),n!==null&&a&4&&qs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),pt(e),a&512&&(Ne||n===null||Gt(n,n.return)),e.flags&32){l=e.stateNode;try{ma(l,"")}catch(A){ze(e,e.return,A)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,qs(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Xs=!0);break;case 6:if(mt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(A){ze(e,e.return,A)}}break;case 3:if(Dr=null,l=Ct,Ct=Rr(t.containerInfo),mt(t,e),Ct=l,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(A){ze(e,e.return,A)}Xs&&(Xs=!1,Sh(e));break;case 4:a=Ct,Ct=Rr(e.stateNode.containerInfo),mt(t,e),pt(e),Ct=a;break;case 12:mt(t,e),pt(e);break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fs=Ut()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zs(e,a)));break;case 22:l=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,E=rn,D=Ne;if(rn=E||l,Ne=D||y,mt(t,e),Ne=D,rn=E,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||y||rn||Ne||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(r=y.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=y.stateNode;var C=y.memoizedProps.style,w=C!=null&&C.hasOwnProperty("display")?C.display:null;h.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(A){ze(y,y.return,A)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=l?"":y.memoizedProps}catch(A){ze(y,y.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Zs(e,n))));break;case 19:mt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zs(e,a)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(hh(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,r=Ys(e);pr(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(ma(f,""),n.flags&=-33);var h=Ys(e);pr(e,h,f);break;case 3:case 4:var y=n.stateNode.containerInfo,E=Ys(e);Vs(e,E,y);break;default:throw Error(s(161))}}catch(D){ze(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ph(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zn(4,t,t.return),na(t);break;case 1:Gt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fh(t,t.return,n),na(t);break;case 27:li(t.stateNode);case 26:case 5:Gt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(l,r,n),Jl(4,r);break;case 1:if(Tn(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){ze(a,a.return,E)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)Wf(y[l],h)}catch(E){ze(a,a.return,E)}}n&&f&64&&oh(r),$l(r,r.return);break;case 27:gh(r);case 26:case 5:Tn(l,r,n),n&&a===null&&f&4&&dh(r),$l(r,r.return);break;case 12:Tn(l,r,n);break;case 13:Tn(l,r,n),n&&f&4&&vh(l,r);break;case 22:r.memoizedState===null&&Tn(l,r,n),$l(r,r.return);break;case 30:break;default:Tn(l,r,n)}t=t.sibling}}function Qs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bl(n))}function Ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function Lt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jh(e,t,n,a),t=t.sibling}function jh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,n,a),l&2048&&Jl(9,t);break;case 1:Lt(e,t,n,a);break;case 3:Lt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e)));break;case 12:if(l&2048){Lt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){ze(t,t.return,y)}}else Lt(e,t,n,a);break;case 13:Lt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Lt(e,t,n,a):Wl(e,t):r._visibility&2?Lt(e,t,n,a):(r._visibility|=2,Ba(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Qs(f,t);break;case 24:Lt(e,t,n,a),l&2048&&Ks(t.alternate,t);break;default:Lt(e,t,n,a)}}function Ba(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,y=a,E=f.flags;switch(f.tag){case 0:case 11:case 15:Ba(r,f,h,y,l),Jl(8,f);break;case 23:break;case 22:var D=f.stateNode;f.memoizedState!==null?D._visibility&2?Ba(r,f,h,y,l):Wl(r,f):(D._visibility|=2,Ba(r,f,h,y,l)),l&&E&2048&&Qs(f.alternate,f);break;case 24:Ba(r,f,h,y,l),l&&E&2048&&Ks(f.alternate,f);break;default:Ba(r,f,h,y,l)}t=t.sibling}}function Wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Wl(n,a),l&2048&&Qs(a.alternate,a);break;case 24:Wl(n,a),l&2048&&Ks(a.alternate,a);break;default:Wl(n,a)}t=t.sibling}}var Fl=8192;function Na(e){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)_h(e),e=e.sibling}function _h(e){switch(e.tag){case 26:Na(e),e.flags&Fl&&e.memoizedState!==null&&hb(Ct,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var t=Ct;Ct=Rr(e.stateNode.containerInfo),Na(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Fl,Fl=16777216,Na(e),Fl=t):Na(e));break;default:Na(e)}}function zh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Th(a,e)}zh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eh(e),e=e.sibling}function Eh(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&zn(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,br(e)):Pl(e);break;default:Pl(e)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Th(a,e)}zh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zn(8,t,t.return),br(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,br(t));break;default:br(t)}e=e.sibling}}function Th(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Bl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var l=a.sibling,r=a.return;if(bh(a),a===n){Qe=null;break e}if(l!==null){l.return=r,Qe=l;break e}Qe=r}}}var R1={getCacheForType:function(e){var t=et(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},M1=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ee=null,fe=null,he=0,ve=0,bt=null,wn=!1,Ua=!1,Js=!1,sn=0,Ce=0,An=0,aa=0,$s=0,Rt=0,Ha=0,Il=null,ct=null,Ws=!1,Fs=0,yr=1/0,vr=null,Rn=null,We=0,Mn=null,ka=null,Ga=0,Ps=0,Is=null,wh=null,ei=0,ec=null;function yt(){if((ye&2)!==0&&he!==0)return he&-he;if(M.T!==null){var e=Ta;return e!==0?e:uc()}return Yo()}function Ah(){Rt===0&&(Rt=(he&536870912)===0||me?ko():536870912);var e=At.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(La(e,0),Dn(e,he,Rt,!1)),yl(e,n),((ye&2)===0||e!==Ee)&&(e===Ee&&((ye&2)===0&&(aa|=n),Ce===4&&Dn(e,he,Rt,!1)),qt(e))}function Rh(e,t,n){if((ye&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||bl(e,t),l=a?C1(e,t):ac(e,t,!0),r=a;do{if(l===0){Ua&&!a&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!D1(n)){l=ac(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;l=Il;var y=h.current.memoizedState.isDehydrated;if(y&&(La(h,f).flags|=256),f=ac(h,f,!1),f!==2){if(Js&&!y){h.errorRecoveryDisabledLanes|=r,aa|=r,l=4;break e}r=ct,ct=l,r!==null&&(ct===null?ct=r:ct.push.apply(ct,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){La(e,0),Dn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Dn(a,t,Rt,!wn);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Fs+300-Ut(),10<l)){if(Dn(a,t,Rt,!wn),Mi(a,0,!0)!==0)break e;a.timeoutHandle=lg(Mh.bind(null,a,n,ct,vr,Ws,t,Rt,aa,Ha,wn,r,2,-0,0),l);break e}Mh(a,n,ct,vr,Ws,t,Rt,aa,Ha,wn,r,0,-0,0)}}break}while(!0);qt(e)}function Mh(e,t,n,a,l,r,f,h,y,E,D,C,w,A){if(e.timeoutHandle=-1,C=t.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(ui={stylesheets:null,count:0,unsuspend:db},_h(t),C=gb(),C!==null)){e.cancelPendingCommit=C(Hh.bind(null,e,t,r,n,a,l,f,h,y,D,1,w,A)),Dn(e,r,f,!E);return}Hh(e,t,r,n,a,l,f,h,y)}function D1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!ht(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,a){t&=~$s,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-dt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&Lo(e,n,t)}function xr(){return(ye&6)===0?(ti(0),!1):!0}function tc(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,It=Fn=null,ys(e),Oa=null,Zl=0,e=fe;for(;e!==null;)ch(e.alternate,e),e=e.return;fe=null}}function La(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,$1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tc(),Ee=e,fe=n=Wt(e.current,null),he=t,ve=0,bt=null,wn=!1,Ua=bl(e,t),Js=!1,Ha=Rt=$s=aa=An=Ce=0,ct=Il=null,Ws=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-dt(a),r=1<<l;t|=e[l],a&=~r}return sn=t,Yi(),n}function Dh(e,t){ue=null,M.H=ur,t===Ul||t===Fi?(t=Jf(),ve=3):t===Zf?(t=Jf(),ve=4):ve=t===$d?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Ce=1,dr(e,zt(t,e.current)))}function Oh(){var e=M.H;return M.H=ur,e===null?ur:e}function Ch(){var e=M.A;return M.A=R1,e}function nc(){Ce=4,wn||(he&4194048)!==he&&At.current!==null||(Ua=!0),(An&134217727)===0&&(aa&134217727)===0||Ee===null||Dn(Ee,he,Rt,!1)}function ac(e,t,n){var a=ye;ye|=2;var l=Oh(),r=Ch();(Ee!==e||he!==t)&&(vr=null,La(e,t)),t=!1;var f=Ce;e:do try{if(ve!==0&&fe!==null){var h=fe,y=bt;switch(ve){case 8:tc(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var E=ve;if(ve=0,bt=null,qa(e,h,y,E),n&&Ua){f=0;break e}break;default:E=ve,ve=0,bt=null,qa(e,h,y,E)}}O1(),f=Ce;break}catch(D){Dh(e,D)}while(!0);return t&&e.shellSuspendCounter++,It=Fn=null,ye=a,M.H=l,M.A=r,fe===null&&(Ee=null,he=0,Yi()),f}function O1(){for(;fe!==null;)Bh(fe)}function C1(e,t){var n=ye;ye|=2;var a=Oh(),l=Ch();Ee!==e||he!==t?(vr=null,yr=Ut()+500,La(e,t)):Ua=bl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,qa(e,t,r,1);break;case 2:case 9:if(Qf(r)){ve=0,bt=null,Nh(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),qt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Qf(r)?(ve=0,bt=null,Nh(t)):(ve=0,bt=null,qa(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||pg(f)){ve=0,bt=null;var y=h.sibling;if(y!==null)fe=y;else{var E=h.return;E!==null?(fe=E,Sr(E)):fe=null}break t}}ve=0,bt=null,qa(e,t,r,5);break;case 6:ve=0,bt=null,qa(e,t,r,6);break;case 8:tc(),Ce=6;break e;default:throw Error(s(462))}}B1();break}catch(D){Dh(e,D)}while(!0);return It=Fn=null,M.H=a,M.A=l,ye=n,fe!==null?0:(Ee=null,he=0,Yi(),Ce)}function B1(){for(;fe!==null&&!np();)Bh(fe)}function Bh(e){var t=uh(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function Nh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=th(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=th(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:ys(t);default:ch(n,t),t=fe=Uf(t,sn),t=uh(n,t,sn)}e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function qa(e,t,n,a){It=Fn=null,ys(t),Oa=null,Zl=0;var l=t.return;try{if(_1(e,l,t,n,he)){Ce=1,dr(e,zt(n,e.current)),fe=null;return}}catch(r){if(l!==null)throw fe=l,r;Ce=1,dr(e,zt(n,e.current)),fe=null;return}t.flags&32768?(me||a===1?e=!0:Ua||(he&536870912)!==0?e=!1:(wn=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),Uh(t,e)):Sr(t)}function Sr(e){var t=e;do{if((t.flags&32768)!==0){Uh(t,wn);return}e=t.return;var n=E1(t.alternate,t,sn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ce===0&&(Ce=5)}function Uh(e,t){do{var n=T1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ce=6,fe=null}function Hh(e,t,n,a,l,r,f,h,y){e.cancelPendingCommit=null;do jr();while(We!==0);if((ye&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=Ku,dp(e,n,r,f,h,y),e===Ee&&(fe=Ee=null,he=0),ka=t,Mn=e,Ga=n,Ps=r,Is=l,wh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,k1(wi,function(){return Yh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,l=Y.p,Y.p=2,f=ye,ye|=4;try{w1(e,t,n)}finally{ye=f,Y.p=l,M.T=a}}We=1,kh(),Gh(),Lh()}}function kh(){if(We===1){We=0;var e=Mn,t=ka,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{xh(t,e);var r=mc,f=Tf(e.containerInfo),h=r.focusedElem,y=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&Ef(h.ownerDocument.documentElement,h)){if(y!==null&&Yu(h)){var E=y.start,D=y.end;if(D===void 0&&(D=E),"selectionStart"in h)h.selectionStart=E,h.selectionEnd=Math.min(D,h.value.length);else{var C=h.ownerDocument||document,w=C&&C.defaultView||window;if(w.getSelection){var A=w.getSelection(),ne=h.textContent.length,I=Math.min(y.start,ne),je=y.end===void 0?I:Math.min(y.end,ne);!A.extend&&I>je&&(f=je,je=I,I=f);var _=zf(h,I),S=zf(h,je);if(_&&S&&(A.rangeCount!==1||A.anchorNode!==_.node||A.anchorOffset!==_.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var z=C.createRange();z.setStart(_.node,_.offset),A.removeAllRanges(),I>je?(A.addRange(z),A.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),A.addRange(z))}}}}for(C=[],A=h;A=A.parentNode;)A.nodeType===1&&C.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<C.length;h++){var O=C[h];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Br=!!gc,mc=gc=null}finally{ye=l,Y.p=a,M.T=n}}e.current=t,We=2}}function Gh(){if(We===2){We=0;var e=Mn,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{ph(e,t.alternate,t)}finally{ye=l,Y.p=a,M.T=n}}We=3}}function Lh(){if(We===4||We===3){We=0,ap();var e=Mn,t=ka,n=Ga,a=wh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,ka=Mn=null,qh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Rn=null),Su(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,l=Y.p,Y.p=2,M.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{M.T=t,Y.p=l}}(Ga&3)!==0&&jr(),qt(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===ec?ei++:(ei=0,ec=e):ei=0,ti(0)}}function qh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function jr(e){return kh(),Gh(),Lh(),Yh()}function Yh(){if(We!==5)return!1;var e=Mn,t=Ps;Ps=0;var n=Su(Ga),a=M.T,l=Y.p;try{Y.p=32>n?32:n,M.T=null,n=Is,Is=null;var r=Mn,f=Ga;if(We=0,ka=Mn=null,Ga=0,(ye&6)!==0)throw Error(s(331));var h=ye;if(ye|=4,Eh(r.current),jh(r,r.current,f,n),ye=h,ti(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(pl,r)}catch{}return!0}finally{Y.p=l,M.T=a,qh(e,t)}}function Vh(e,t,n){t=zt(n,t),t=Os(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(yl(e,2),qt(e))}function ze(e,t,n){if(e.tag===3)Vh(e,e,n);else for(;t!==null;){if(t.tag===3){Vh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rn===null||!Rn.has(a))){e=zt(n,e),n=Kd(2),a=xn(t,n,2),a!==null&&(Jd(n,a,t,e),yl(a,2),qt(a));break}}t=t.return}}function lc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new M1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Js=!0,l.add(n),e=N1.bind(null,e,t,n),t.then(e,e))}function N1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(he&n)===n&&(Ce===4||Ce===3&&(he&62914560)===he&&300>Ut()-Fs?(ye&2)===0&&La(e,0):$s|=n,Ha===he&&(Ha=0)),qt(e)}function Xh(e,t){t===0&&(t=Go()),e=ja(e,t),e!==null&&(yl(e,t),qt(e))}function U1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xh(e,n)}function H1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Xh(e,n)}function k1(e,t){return bu(e,t)}var _r=null,Ya=null,ic=!1,zr=!1,rc=!1,la=0;function qt(e){e!==Ya&&e.next===null&&(Ya===null?_r=Ya=e:Ya=Ya.next=e),zr=!0,ic||(ic=!0,L1())}function ti(e,t){if(!rc&&zr){rc=!0;do for(var n=!1,a=_r;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=l&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Jh(a,r))}else r=he,r=Mi(a,a===Ee?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||bl(a,r)||(n=!0,Jh(a,r));a=a.next}while(n);rc=!1}}function G1(){Zh()}function Zh(){zr=ic=!1;var e=0;la!==0&&(J1()&&(e=la),la=0);for(var t=Ut(),n=null,a=_r;a!==null;){var l=a.next,r=Qh(a,t);r===0?(a.next=null,n===null?_r=l:n.next=l,l===null&&(Ya=n)):(n=a,(e!==0||(r&3)!==0)&&(zr=!0)),a=l}ti(e)}function Qh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,y=l[f];y===-1?((h&n)===0||(h&a)!==0)&&(l[f]=fp(h,t)):y<=t&&(e.expiredLanes|=h),r&=~h}if(t=Ee,n=he,n=Mi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&yu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&yu(a),Su(n)){case 2:case 8:n=Uo;break;case 32:n=wi;break;case 268435456:n=Ho;break;default:n=wi}return a=Kh.bind(null,e),n=bu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&yu(a),e.callbackPriority=2,e.callbackNode=null,2}function Kh(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var a=he;return a=Mi(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Rh(e,a,t),Qh(e,Ut()),e.callbackNode!=null&&e.callbackNode===n?Kh.bind(null,e):null)}function Jh(e,t){if(jr())return null;Rh(e,t,!0)}function L1(){W1(function(){(ye&6)!==0?bu(No,G1):Zh()})}function uc(){return la===0&&(la=ko()),la}function $h(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ni(""+e)}function Wh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function q1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=$h((l[it]||null).action),f=a.submitter;f&&(t=(t=f[it]||null)?$h(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Gi("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var y=f?Wh(l,f):new FormData(l);ws(n,{pending:!0,data:y,method:l.method,action:r},null,y)}}else typeof r=="function"&&(h.preventDefault(),y=f?Wh(l,f):new FormData(l),ws(n,{pending:!0,data:y,method:l.method,action:r},r,y))},currentTarget:l}]})}}for(var sc=0;sc<Qu.length;sc++){var cc=Qu[sc],Y1=cc.toLowerCase(),V1=cc[0].toUpperCase()+cc.slice(1);Ot(Y1,"on"+V1)}Ot(Rf,"onAnimationEnd"),Ot(Mf,"onAnimationIteration"),Ot(Df,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(r1,"onTransitionRun"),Ot(u1,"onTransitionStart"),Ot(s1,"onTransitionCancel"),Ot(Of,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function Fh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],y=h.instance,E=h.currentTarget;if(h=h.listener,y!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=E;try{r(l)}catch(D){fr(D)}l.currentTarget=null,r=y}else for(f=0;f<a.length;f++){if(h=a[f],y=h.instance,E=h.currentTarget,h=h.listener,y!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=E;try{r(l)}catch(D){fr(D)}l.currentTarget=null,r=y}}}}function de(e,t){var n=t[ju];n===void 0&&(n=t[ju]=new Set);var a=e+"__bubble";n.has(a)||(Ph(t,e,2,!1),n.add(a))}function oc(e,t,n){var a=0;t&&(a|=4),Ph(n,e,a,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function fc(e){if(!e[Er]){e[Er]=!0,Xo.forEach(function(n){n!=="selectionchange"&&(X1.has(n)||oc(n,!1,e),oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,oc("selectionchange",!1,t))}}function Ph(e,t,n,a){switch(jg(t)){case 2:var l=bb;break;case 8:l=yb;break;default:l=Ec}n=l.bind(null,t,n,e),l=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function dc(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===l)break;if(f===4)for(f=a.return;f!==null;){var y=f.tag;if((y===3||y===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;h!==null;){if(f=ca(h),f===null)return;if(y=f.tag,y===5||y===6||y===26||y===27){a=r=f;continue e}h=h.parentNode}}a=a.return}lf(function(){var E=r,D=Du(n),C=[];e:{var w=Cf.get(e);if(w!==void 0){var A=Gi,ne=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":A=kp;break;case"focusin":ne="focus",A=Hu;break;case"focusout":ne="blur",A=Hu;break;case"beforeblur":case"afterblur":A=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=qp;break;case Rf:case Mf:case Df:A=Rp;break;case Of:A=Vp;break;case"scroll":case"scrollend":A=zp;break;case"wheel":A=Zp;break;case"copy":case"cut":case"paste":A=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=of;break;case"toggle":case"beforetoggle":A=Kp}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),_=I?w!==null?w+"Capture":null:w;I=[];for(var S=E,z;S!==null;){var O=S;if(z=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||z===null||_===null||(O=Sl(S,_),O!=null&&I.push(ai(S,O,z))),je)break;S=S.return}0<I.length&&(w=new A(w,ne,null,n,D),C.push({event:w,listeners:I}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",w&&n!==Mu&&(ne=n.relatedTarget||n.fromElement)&&(ca(ne)||ne[sa]))break e;if((A||w)&&(w=D.window===D?D:(w=D.ownerDocument)?w.defaultView||w.parentWindow:window,A?(ne=n.relatedTarget||n.toElement,A=E,ne=ne?ca(ne):null,ne!==null&&(je=g(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(A=null,ne=E),A!==ne)){if(I=sf,O="onMouseLeave",_="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=of,O="onPointerLeave",_="onPointerEnter",S="pointer"),je=A==null?w:xl(A),z=ne==null?w:xl(ne),w=new I(O,S+"leave",A,n,D),w.target=je,w.relatedTarget=z,O=null,ca(D)===E&&(I=new I(_,S+"enter",ne,n,D),I.target=z,I.relatedTarget=je,O=I),je=O,A&&ne)t:{for(I=A,_=ne,S=0,z=I;z;z=Va(z))S++;for(z=0,O=_;O;O=Va(O))z++;for(;0<S-z;)I=Va(I),S--;for(;0<z-S;)_=Va(_),z--;for(;S--;){if(I===_||_!==null&&I===_.alternate)break t;I=Va(I),_=Va(_)}I=null}else I=null;A!==null&&Ih(C,w,A,I,!1),ne!==null&&je!==null&&Ih(C,je,ne,I,!0)}}e:{if(w=E?xl(E):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var K=yf;else if(pf(w))if(vf)K=a1;else{K=t1;var se=e1}else A=w.nodeName,!A||A.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?E&&Ru(E.elementType)&&(K=yf):K=n1;if(K&&(K=K(e,E))){bf(C,K,n,D);break e}se&&se(e,w,E),e==="focusout"&&E&&w.type==="number"&&E.memoizedProps.value!=null&&Au(w,"number",w.value)}switch(se=E?xl(E):window,e){case"focusin":(pf(se)||se.contentEditable==="true")&&(va=se,Vu=E,Rl=null);break;case"focusout":Rl=Vu=va=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,wf(C,n,D);break;case"selectionchange":if(i1)break;case"keydown":case"keyup":wf(C,n,D)}var J;if(Gu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ya?gf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(ff&&n.locale!=="ko"&&(ya||te!=="onCompositionStart"?te==="onCompositionEnd"&&ya&&(J=rf()):(pn=D,Bu="value"in pn?pn.value:pn.textContent,ya=!0)),se=Tr(E,te),0<se.length&&(te=new cf(te,e,null,n,D),C.push({event:te,listeners:se}),J?te.data=J:(J=mf(n),J!==null&&(te.data=J)))),(J=$p?Wp(e,n):Fp(e,n))&&(te=Tr(E,"onBeforeInput"),0<te.length&&(se=new cf("onBeforeInput","beforeinput",null,n,D),C.push({event:se,listeners:te}),se.data=J)),q1(C,e,E,n,D)}Fh(C,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Sl(e,n),l!=null&&a.unshift(ai(e,l,r)),l=Sl(e,t),l!=null&&a.push(ai(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ih(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,y=h.alternate,E=h.stateNode;if(h=h.tag,y!==null&&y===a)break;h!==5&&h!==26&&h!==27||E===null||(y=E,l?(E=Sl(n,r),E!=null&&f.unshift(ai(n,E,y))):l||(E=Sl(n,r),E!=null&&f.push(ai(n,E,y)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Z1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(Z1,`
`).replace(Q1,"")}function tg(e,t){return t=eg(t),eg(e)===t}function wr(){}function Se(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ma(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ma(e,""+a);break;case"className":Oi(e,"class",a);break;case"tabIndex":Oi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,n,a);break;case"style":nf(e,a,r);break;case"data":if(t!=="object"){Oi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=wr);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ni(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Di(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Di(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=jp.get(n)||n,Di(e,n,a))}}function hc(e,t,n,a,l,r){switch(n){case"style":nf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ma(e,a):(typeof a=="number"||typeof a=="bigint")&&ma(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=wr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[it]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Di(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,r,f,n,null)}}l&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=l=null,y=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":l=D;break;case"type":f=D;break;case"checked":y=D;break;case"defaultChecked":E=D;break;case"value":r=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:Se(e,t,a,D,n,null)}}Po(e,r,h,y,E,f,l,!1),Ci(e);return;case"select":de("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,l,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ga(e,!!a,t,!1):n!=null&&ga(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Se(e,t,f,h,n,null)}ef(e,a,l,r),Ci(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,y,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ni.length;a++)de(ni[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,E,a,n,null)}return;default:if(Ru(t)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&hc(e,t,D,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function K1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,h=null,y=null,E=null,D=null;for(A in n){var C=n[A];if(n.hasOwnProperty(A)&&C!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":y=C;default:a.hasOwnProperty(A)||Se(e,t,A,null,a,C)}}for(var w in a){var A=a[w];if(C=n[w],a.hasOwnProperty(w)&&(A!=null||C!=null))switch(w){case"type":r=A;break;case"name":l=A;break;case"checked":E=A;break;case"defaultChecked":D=A;break;case"value":f=A;break;case"defaultValue":h=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:A!==C&&Se(e,t,w,A,a,C)}}wu(e,f,h,y,E,D,r,l);return;case"select":A=f=h=w=null;for(r in n)if(y=n[r],n.hasOwnProperty(r)&&y!=null)switch(r){case"value":break;case"multiple":A=y;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,y)}for(l in a)if(r=a[l],y=n[l],a.hasOwnProperty(l)&&(r!=null||y!=null))switch(l){case"value":w=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==y&&Se(e,t,l,r,a,y)}t=h,n=f,a=A,w!=null?ga(e,!!n,w,!1):!!a!=!!n&&(t!=null?ga(e,!!n,t,!0):ga(e,!!n,n?[]:"",!1));return;case"textarea":A=w=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":w=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==r&&Se(e,t,f,l,a,r)}Io(e,w,A);return;case"option":for(var ne in n)if(w=n[ne],n.hasOwnProperty(ne)&&w!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,w)}for(y in a)if(w=a[y],A=n[y],a.hasOwnProperty(y)&&w!==A&&(w!=null||A!=null))switch(y){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Se(e,t,y,w,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)w=n[I],n.hasOwnProperty(I)&&w!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,w);for(E in a)if(w=a[E],A=n[E],a.hasOwnProperty(E)&&w!==A&&(w!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:Se(e,t,E,w,a,A)}return;default:if(Ru(t)){for(var je in n)w=n[je],n.hasOwnProperty(je)&&w!==void 0&&!a.hasOwnProperty(je)&&hc(e,t,je,void 0,a,w);for(D in a)w=a[D],A=n[D],!a.hasOwnProperty(D)||w===A||w===void 0&&A===void 0||hc(e,t,D,w,a,A);return}}for(var _ in n)w=n[_],n.hasOwnProperty(_)&&w!=null&&!a.hasOwnProperty(_)&&Se(e,t,_,null,a,w);for(C in a)w=a[C],A=n[C],!a.hasOwnProperty(C)||w===A||w==null&&A==null||Se(e,t,C,w,a,A)}var gc=null,mc=null;function Ar(e){return e.nodeType===9?e:e.ownerDocument}function ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=null;function J1(){var e=window.event;return e&&e.type==="popstate"?e===bc?!1:(bc=e,!0):(bc=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,$1=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(F1)}:lg;function F1(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function rg(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&li(f.documentElement),n&2&&li(f.body),n&4)for(n=f.head,li(n),f=n.firstChild;f;){var h=f.nextSibling,y=f.nodeName;f[vl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(l===0){e.removeChild(r),di(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);di(t)}function yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yc(n),_u(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function P1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function I1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function eb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var xc=null;function ug(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function sg(e,t,n){switch(t=Ar(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_u(e)}var Mt=new Map,cg=new Set;function Rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=Y.d;Y.d={f:tb,r:nb,D:ab,C:lb,L:ib,m:rb,X:sb,S:ub,M:cb};function tb(){var e=cn.f(),t=xr();return e||t}function nb(e){var t=oa(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):cn.r(e)}var Xa=typeof document>"u"?null:document;function og(e,t,n){var a=Xa;if(a&&typeof t=="string"&&t){var l=_t(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),cg.has(l)||(cg.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function ab(e){cn.D(e),og("dns-prefetch",e,null)}function lb(e,t){cn.C(e,t),og("preconnect",e,t)}function ib(e,t,n){cn.L(e,t,n);var a=Xa;if(a&&e&&t){var l='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+_t(n.imageSizes)+'"]')):l+='[href="'+_t(e)+'"]';var r=l;switch(t){case"style":r=Za(e);break;case"script":r=Qa(e)}Mt.has(r)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(ii(r))||t==="script"&&a.querySelector(ri(r))||(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function rb(e,t){cn.m(e,t);var n=Xa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+_t(a)+'"][href="'+_t(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Qa(e)}if(!Mt.has(r)&&(e=T({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ri(r)))return}a=n.createElement("link"),Fe(a,"link",e),Xe(a),n.head.appendChild(a)}}}function ub(e,t,n){cn.S(e,t,n);var a=Xa;if(a&&e){var l=fa(a).hoistableStyles,r=Za(e);t=t||"default";var f=l.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(ii(r)))h.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&Sc(e,n);var y=f=a.createElement("link");Xe(y),Fe(y,"link",e),y._p=new Promise(function(E,D){y.onload=E,y.onerror=D}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Mr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},l.set(r,f)}}}function sb(e,t){cn.X(e,t);var n=Xa;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ri(l)),r||(e=T({src:e,async:!0},t),(t=Mt.get(l))&&jc(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function cb(e,t){cn.M(e,t);var n=Xa;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ri(l)),r||(e=T({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&jc(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function fg(e,t,n,a){var l=(l=ee.current)?Rr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Za(n.href),n=fa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Za(n.href);var r=fa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(ii(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||ob(l,e,n,f.state))),t&&a===null)throw Error(s(528,""));return f}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qa(n),n=fa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Za(e){return'href="'+_t(e)+'"'}function ii(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function ob(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Xe(t),e.head.appendChild(t))}function Qa(e){return'[src="'+_t(e)+'"]'}function ri(e){return"script[async]"+e}function hg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(a)return t.instance=a,Xe(a),a;var l=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),Fe(a,"style",l),Mr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Za(n.href);var r=e.querySelector(ii(l));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;a=dg(n),(l=Mt.get(l))&&Sc(a,l),r=(e.ownerDocument||e).createElement("link"),Xe(r);var f=r;return f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),Fe(r,"link",a),t.state.loading|=4,Mr(r,n.precedence,e),t.instance=r;case"script":return r=Qa(n.src),(l=e.querySelector(ri(r)))?(t.instance=l,Xe(l),l):(a=n,(l=Mt.get(r))&&(a=T({},n),jc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Xe(l),Fe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mr(a,n.precedence,e));return t.instance}function Mr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dr=null;function gg(e,t,n){if(Dr===null){var a=new Map,l=Dr=new Map;l.set(n,a)}else l=Dr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[vl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function mg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function fb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ui=null;function db(){}function hb(e,t,n){if(ui===null)throw Error(s(475));var a=ui;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Za(n.href),r=e.querySelector(ii(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Or.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=dg(n),(l=Mt.get(l))&&Sc(n,l),r=r.createElement("link"),Xe(r);var f=r;f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Or.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function gb(){if(ui===null)throw Error(s(475));var e=ui;return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Or(){if(this.count--,this.count===0){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cr=null;function _c(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cr=new Map,t.forEach(mb,e),Cr=null,Or.call(e))}function mb(e,t){if(!(t.state.loading&4)){var n=Cr.get(e);if(n)var a=n.get(null);else{n=new Map,Cr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Or.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var si={$$typeof:Z,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function pb(e,t,n,a,l,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function bg(e,t,n,a,l,r,f,h,y,E,D,C){return e=new pb(e,t,n,f,h,y,E,C),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=ls(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},ss(r),e}function yg(e){return e?(e=_a,e):_a}function vg(e,t,n,a,l,r){l=yg(l),a.context===null?a.context=l:a.pendingContext=l,a=vn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=xn(e,a,t),n!==null&&(vt(n,e,t),kl(n,e,t))}function xg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zc(e,t){xg(e,t),(e=e.alternate)&&xg(e,t)}function Sg(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&vt(t,e,67108864),zc(e,67108864)}}var Br=!0;function bb(e,t,n,a){var l=M.T;M.T=null;var r=Y.p;try{Y.p=2,Ec(e,t,n,a)}finally{Y.p=r,M.T=l}}function yb(e,t,n,a){var l=M.T;M.T=null;var r=Y.p;try{Y.p=8,Ec(e,t,n,a)}finally{Y.p=r,M.T=l}}function Ec(e,t,n,a){if(Br){var l=Tc(a);if(l===null)dc(e,t,a,Nr,n),_g(e,a);else if(xb(l,e,t,n,a))a.stopPropagation();else if(_g(e,a),t&4&&-1<vb.indexOf(e)){for(;l!==null;){var r=oa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=qn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var y=1<<31-dt(f);h.entanglements[1]|=y,f&=~y}qt(r),(ye&6)===0&&(yr=Ut()+500,ti(0))}}break;case 13:h=ja(r,2),h!==null&&vt(h,r,2),xr(),zc(r,2)}if(r=Tc(a),r===null&&dc(e,t,a,Nr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else dc(e,t,a,null,n)}}function Tc(e){return e=Du(e),wc(e)}var Nr=null;function wc(e){if(Nr=null,e=ca(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lp()){case No:return 2;case Uo:return 8;case wi:case ip:return 32;case Ho:return 268435456;default:return 32}default:return 32}}var Ac=!1,Cn=null,Bn=null,Nn=null,ci=new Map,oi=new Map,Un=[],vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function fi(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=oa(t),t!==null&&Sg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function xb(e,t,n,a,l){switch(t){case"focusin":return Cn=fi(Cn,e,t,n,a,l),!0;case"dragenter":return Bn=fi(Bn,e,t,n,a,l),!0;case"mouseover":return Nn=fi(Nn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return ci.set(r,fi(ci.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,oi.set(r,fi(oi.get(r)||null,e,t,n,a,l)),!0}return!1}function zg(e){var t=ca(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,hp(e.priority,function(){if(n.tag===13){var a=yt();a=xu(a);var l=ja(n,a);l!==null&&vt(l,n,a),zc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Mu=a,n.target.dispatchEvent(a),Mu=null}else return t=oa(n),t!==null&&Sg(t),e.blockedOn=n,!1;t.shift()}return!0}function Eg(e,t,n){Ur(e)&&n.delete(t)}function Sb(){Ac=!1,Cn!==null&&Ur(Cn)&&(Cn=null),Bn!==null&&Ur(Bn)&&(Bn=null),Nn!==null&&Ur(Nn)&&(Nn=null),ci.forEach(Eg),oi.forEach(Eg)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ac||(Ac=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Sb)))}var kr=null;function Tg(e){kr!==e&&(kr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){kr===e&&(kr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(wc(a||n)===null)continue;break}var r=oa(n);r!==null&&(e.splice(t,3),t-=3,ws(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function di(e){function t(y){return Hr(y,e)}Cn!==null&&Hr(Cn,e),Bn!==null&&Hr(Bn,e),Nn!==null&&Hr(Nn,e),ci.forEach(t),oi.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[it]||null;if(typeof r=="function")f||Tg(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[it]||null)h=f.formAction;else if(wc(l)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Tg(n)}}}function Rc(e){this._internalRoot=e}Gr.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=yt();vg(n,a,e,t,null,null)},Gr.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vg(e.current,2,null,e,null,null),xr(),t[sa]=null}};function Gr(e){this._internalRoot=e}Gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&zg(e)}};var wg=u.version;if(wg!=="19.1.0")throw Error(s(527,wg,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var jb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{pl=Lr.inject(jb),ft=Lr}catch{}}return gi.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",l=Vd,r=Xd,f=Zd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=bg(e,1,!1,null,null,n,a,l,r,f,h,null),e[sa]=t.current,fc(e),new Rc(t)},gi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,l="",r=Vd,f=Xd,h=Zd,y=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),t=bg(e,1,!0,t,n??null,a,l,r,f,h,y,E),t.context=yg(null),n=t.current,a=yt(),a=xu(a),l=vn(a),l.callback=null,xn(n,l,a),n=a,t.current.lanes=n,yl(t,n),qt(t),e[sa]=t.current,fc(e),new Gr(t)},gi.version="19.1.0",gi}var Hg;function Cb(){if(Hg)return Oc.exports;Hg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Oc.exports=Ob(),Oc.exports}var Bb=Cb();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var kg="popstate";function Nb(i={}){function u(s,d){let{pathname:g,search:b,hash:j}=s.location;return oo("",{pathname:g,search:b,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(s,d){return typeof d=="string"?d:Si(d)}return Hb(u,o,null,i)}function De(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Vt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Ub(){return Math.random().toString(36).substring(2,10)}function Gg(i,u){return{usr:i.state,key:i.key,idx:u}}function oo(i,u,o=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?hl(u):u,state:o,key:u&&u.key||s||Ub()}}function Si({pathname:i="/",search:u="",hash:o=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function hl(i){let u={};if(i){let o=i.indexOf("#");o>=0&&(u.hash=i.substring(o),i=i.substring(0,o));let s=i.indexOf("?");s>=0&&(u.search=i.substring(s),i=i.substring(0,s)),i&&(u.pathname=i)}return u}function Hb(i,u,o,s={}){let{window:d=document.defaultView,v5Compat:g=!1}=s,b=d.history,j="POP",v=null,m=T();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function T(){return(b.state||{idx:null}).idx}function B(){j="POP";let X=T(),H=X==null?null:X-m;m=X,v&&v({action:j,location:q.location,delta:H})}function U(X,H){j="PUSH";let $=oo(q.location,X,H);m=T()+1;let Z=Gg($,m),ae=q.createHref($);try{b.pushState(Z,"",ae)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;d.location.assign(ae)}g&&v&&v({action:j,location:q.location,delta:1})}function k(X,H){j="REPLACE";let $=oo(q.location,X,H);m=T();let Z=Gg($,m),ae=q.createHref($);b.replaceState(Z,"",ae),g&&v&&v({action:j,location:q.location,delta:0})}function G(X){return kb(X)}let q={get action(){return j},get location(){return i(d,b)},listen(X){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(kg,B),v=X,()=>{d.removeEventListener(kg,B),v=null}},createHref(X){return u(d,X)},createURL:G,encodeLocation(X){let H=G(X);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:k,go(X){return b.go(X)}};return q}function kb(i,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),De(o,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:Si(i);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function bm(i,u,o="/"){return Gb(i,u,o,!1)}function Gb(i,u,o,s){let d=typeof u=="string"?hl(u):u,g=dn(d.pathname||"/",o);if(g==null)return null;let b=ym(i);Lb(b);let j=null;for(let v=0;j==null&&v<b.length;++v){let m=Fb(g);j=$b(b[v],m,s)}return j}function ym(i,u=[],o=[],s=""){let d=(g,b,j)=>{let v={relativePath:j===void 0?g.path||"":j,caseSensitive:g.caseSensitive===!0,childrenIndex:b,route:g};v.relativePath.startsWith("/")&&(De(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length));let m=fn([s,v.relativePath]),T=o.concat(v);g.children&&g.children.length>0&&(De(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),ym(g.children,u,T,m)),!(g.path==null&&!g.index)&&u.push({path:m,score:Kb(m,g.index),routesMeta:T})};return i.forEach((g,b)=>{if(g.path===""||!g.path?.includes("?"))d(g,b);else for(let j of vm(g.path))d(g,b,j)}),u}function vm(i){let u=i.split("/");if(u.length===0)return[];let[o,...s]=u,d=o.endsWith("?"),g=o.replace(/\?$/,"");if(s.length===0)return d?[g,""]:[g];let b=vm(s.join("/")),j=[];return j.push(...b.map(v=>v===""?g:[g,v].join("/"))),d&&j.push(...b),j.map(v=>i.startsWith("/")&&v===""?"/":v)}function Lb(i){i.sort((u,o)=>u.score!==o.score?o.score-u.score:Jb(u.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var qb=/^:[\w-]+$/,Yb=3,Vb=2,Xb=1,Zb=10,Qb=-2,Lg=i=>i==="*";function Kb(i,u){let o=i.split("/"),s=o.length;return o.some(Lg)&&(s+=Qb),u&&(s+=Vb),o.filter(d=>!Lg(d)).reduce((d,g)=>d+(qb.test(g)?Yb:g===""?Xb:Zb),s)}function Jb(i,u){return i.length===u.length&&i.slice(0,-1).every((s,d)=>s===u[d])?i[i.length-1]-u[u.length-1]:0}function $b(i,u,o=!1){let{routesMeta:s}=i,d={},g="/",b=[];for(let j=0;j<s.length;++j){let v=s[j],m=j===s.length-1,T=g==="/"?u:u.slice(g.length)||"/",B=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},T),U=v.route;if(!B&&m&&o&&!s[s.length-1].route.index&&(B=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},T)),!B)return null;Object.assign(d,B.params),b.push({params:d,pathname:fn([g,B.pathname]),pathnameBase:ty(fn([g,B.pathnameBase])),route:U}),B.pathnameBase!=="/"&&(g=fn([g,B.pathnameBase]))}return b}function lu(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,s]=Wb(i.path,i.caseSensitive,i.end),d=u.match(o);if(!d)return null;let g=d[0],b=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:s.reduce((m,{paramName:T,isOptional:B},U)=>{if(T==="*"){let G=j[U]||"";b=g.slice(0,g.length-G.length).replace(/(.)\/+$/,"$1")}const k=j[U];return B&&!k?m[T]=void 0:m[T]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:g,pathnameBase:b,pattern:i}}function Wb(i,u=!1,o=!0){Vt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,j,v)=>(s.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),s]}function Fb(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Vt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function dn(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,s=i.charAt(o);return s&&s!=="/"?null:i.slice(o)||"/"}function Pb(i,u="/"){let{pathname:o,search:s="",hash:d=""}=typeof i=="string"?hl(i):i;return{pathname:o?o.startsWith("/")?o:Ib(o,u):u,search:ny(s),hash:ay(d)}}function Ib(i,u){let o=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function Uc(i,u,o,s){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ey(i){return i.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function xm(i){let u=ey(i);return u.map((o,s)=>s===u.length-1?o.pathname:o.pathnameBase)}function Sm(i,u,o,s=!1){let d;typeof i=="string"?d=hl(i):(d={...i},De(!d.pathname||!d.pathname.includes("?"),Uc("?","pathname","search",d)),De(!d.pathname||!d.pathname.includes("#"),Uc("#","pathname","hash",d)),De(!d.search||!d.search.includes("#"),Uc("#","search","hash",d)));let g=i===""||d.pathname==="",b=g?"/":d.pathname,j;if(b==null)j=o;else{let B=u.length-1;if(!s&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),B-=1;d.pathname=U.join("/")}j=B>=0?u[B]:"/"}let v=Pb(d,j),m=b&&b!=="/"&&b.endsWith("/"),T=(g||b===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(m||T)&&(v.pathname+="/"),v}var fn=i=>i.join("/").replace(/\/\/+/g,"/"),ty=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ny=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ay=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ly(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var jm=["POST","PUT","PATCH","DELETE"];new Set(jm);var iy=["GET",...jm];new Set(iy);var gl=R.createContext(null);gl.displayName="DataRouter";var cu=R.createContext(null);cu.displayName="DataRouterState";R.createContext(!1);var _m=R.createContext({isTransitioning:!1});_m.displayName="ViewTransition";var ry=R.createContext(new Map);ry.displayName="Fetchers";var uy=R.createContext(null);uy.displayName="Await";var Xt=R.createContext(null);Xt.displayName="Navigation";var _i=R.createContext(null);_i.displayName="Location";var hn=R.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var So=R.createContext(null);So.displayName="RouteError";function sy(i,{relative:u}={}){De(zi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=R.useContext(Xt),{hash:d,pathname:g,search:b}=Ei(i,{relative:u}),j=g;return o!=="/"&&(j=g==="/"?o:fn([o,g])),s.createHref({pathname:j,search:b,hash:d})}function zi(){return R.useContext(_i)!=null}function Gn(){return De(zi(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(_i).location}var zm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Em(i){R.useContext(Xt).static||R.useLayoutEffect(i)}function cy(){let{isDataRoute:i}=R.useContext(hn);return i?jy():oy()}function oy(){De(zi(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(gl),{basename:u,navigator:o}=R.useContext(Xt),{matches:s}=R.useContext(hn),{pathname:d}=Gn(),g=JSON.stringify(xm(s)),b=R.useRef(!1);return Em(()=>{b.current=!0}),R.useCallback((v,m={})=>{if(Vt(b.current,zm),!b.current)return;if(typeof v=="number"){o.go(v);return}let T=Sm(v,JSON.parse(g),d,m.relative==="path");i==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:fn([u,T.pathname])),(m.replace?o.replace:o.push)(T,m.state,m)},[u,o,g,d,i])}R.createContext(null);function Ei(i,{relative:u}={}){let{matches:o}=R.useContext(hn),{pathname:s}=Gn(),d=JSON.stringify(xm(o));return R.useMemo(()=>Sm(i,JSON.parse(d),s,u==="path"),[i,d,s,u])}function fy(i,u){return Tm(i,u)}function Tm(i,u,o,s){De(zi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=R.useContext(Xt),{matches:g}=R.useContext(hn),b=g[g.length-1],j=b?b.params:{},v=b?b.pathname:"/",m=b?b.pathnameBase:"/",T=b&&b.route;{let H=T&&T.path||"";wm(v,!T||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let B=Gn(),U;if(u){let H=typeof u=="string"?hl(u):u;De(m==="/"||H.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=B;let k=U.pathname||"/",G=k;if(m!=="/"){let H=m.replace(/^\//,"").split("/");G="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=bm(i,{pathname:G});Vt(T||q!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Vt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=py(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},j,H.params),pathname:fn([m,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?m:fn([m,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),g,o,s);return u&&X?R.createElement(_i.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},X):X}function dy(){let i=Sy(),u=ly(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},g={padding:"2px 4px",backgroundColor:s},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:g},"ErrorBoundary")," or"," ",R.createElement("code",{style:g},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),o?R.createElement("pre",{style:d},o):null,b)}var hy=R.createElement(dy,null),gy=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){console.error("React Router caught the following error during render",i,u)}render(){return this.state.error!==void 0?R.createElement(hn.Provider,{value:this.props.routeContext},R.createElement(So.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function my({routeContext:i,match:u,children:o}){let s=R.useContext(gl);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(hn.Provider,{value:i},o)}function py(i,u=[],o=null,s=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let d=i,g=o?.errors;if(g!=null){let v=d.findIndex(m=>m.route.id&&g?.[m.route.id]!==void 0);De(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let b=!1,j=-1;if(o)for(let v=0;v<d.length;v++){let m=d[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(j=v),m.route.id){let{loaderData:T,errors:B}=o,U=m.route.loader&&!T.hasOwnProperty(m.route.id)&&(!B||B[m.route.id]===void 0);if(m.route.lazy||U){b=!0,j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}return d.reduceRight((v,m,T)=>{let B,U=!1,k=null,G=null;o&&(B=g&&m.route.id?g[m.route.id]:void 0,k=m.route.errorElement||hy,b&&(j<0&&T===0?(wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,G=null):j===T&&(U=!0,G=m.route.hydrateFallbackElement||null)));let q=u.concat(d.slice(0,T+1)),X=()=>{let H;return B?H=k:U?H=G:m.route.Component?H=R.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=v,R.createElement(my,{match:m,routeContext:{outlet:v,matches:q,isDataRoute:o!=null},children:H})};return o&&(m.route.ErrorBoundary||m.route.errorElement||T===0)?R.createElement(gy,{location:o.location,revalidation:o.revalidation,component:k,error:B,children:X(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):X()},null)}function jo(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function by(i){let u=R.useContext(gl);return De(u,jo(i)),u}function yy(i){let u=R.useContext(cu);return De(u,jo(i)),u}function vy(i){let u=R.useContext(hn);return De(u,jo(i)),u}function _o(i){let u=vy(i),o=u.matches[u.matches.length-1];return De(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function xy(){return _o("useRouteId")}function Sy(){let i=R.useContext(So),u=yy("useRouteError"),o=_o("useRouteError");return i!==void 0?i:u.errors?.[o]}function jy(){let{router:i}=by("useNavigate"),u=_o("useNavigate"),o=R.useRef(!1);return Em(()=>{o.current=!0}),R.useCallback(async(d,g={})=>{Vt(o.current,zm),o.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:u,...g}))},[i,u])}var qg={};function wm(i,u,o){!u&&!qg[i]&&(qg[i]=!0,Vt(!1,o))}R.memo(_y);function _y({routes:i,future:u,state:o}){return Tm(i,void 0,o,u)}function Wr(i){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zy({basename:i="/",children:u=null,location:o,navigationType:s="POP",navigator:d,static:g=!1}){De(!zi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),j=R.useMemo(()=>({basename:b,navigator:d,static:g,future:{}}),[b,d,g]);typeof o=="string"&&(o=hl(o));let{pathname:v="/",search:m="",hash:T="",state:B=null,key:U="default"}=o,k=R.useMemo(()=>{let G=dn(v,b);return G==null?null:{location:{pathname:G,search:m,hash:T,state:B,key:U},navigationType:s}},[b,v,m,T,B,U,s]);return Vt(k!=null,`<Router basename="${b}"> is not able to match the URL "${v}${m}${T}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:R.createElement(Xt.Provider,{value:j},R.createElement(_i.Provider,{children:u,value:k}))}function Ey({children:i,location:u}){return fy(fo(i),u)}function fo(i,u=[]){let o=[];return R.Children.forEach(i,(s,d)=>{if(!R.isValidElement(s))return;let g=[...u,d];if(s.type===R.Fragment){o.push.apply(o,fo(s.props.children,g));return}De(s.type===Wr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!s.props.index||!s.props.children,"An index route cannot have child routes.");let b={id:s.props.id||g.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(b.children=fo(s.props.children,g)),o.push(b)}),o}var Fr="get",Pr="application/x-www-form-urlencoded";function ou(i){return i!=null&&typeof i.tagName=="string"}function Ty(i){return ou(i)&&i.tagName.toLowerCase()==="button"}function wy(i){return ou(i)&&i.tagName.toLowerCase()==="form"}function Ay(i){return ou(i)&&i.tagName.toLowerCase()==="input"}function Ry(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function My(i,u){return i.button===0&&(!u||u==="_self")&&!Ry(i)}var qr=null;function Dy(){if(qr===null)try{new FormData(document.createElement("form"),0),qr=!1}catch{qr=!0}return qr}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hc(i){return i!=null&&!Oy.has(i)?(Vt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pr}"`),null):i}function Cy(i,u){let o,s,d,g,b;if(wy(i)){let j=i.getAttribute("action");s=j?dn(j,u):null,o=i.getAttribute("method")||Fr,d=Hc(i.getAttribute("enctype"))||Pr,g=new FormData(i)}else if(Ty(i)||Ay(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||j.getAttribute("action");if(s=v?dn(v,u):null,o=i.getAttribute("formmethod")||j.getAttribute("method")||Fr,d=Hc(i.getAttribute("formenctype"))||Hc(j.getAttribute("enctype"))||Pr,g=new FormData(j,i),!Dy()){let{name:m,type:T,value:B}=i;if(T==="image"){let U=m?`${m}.`:"";g.append(`${U}x`,"0"),g.append(`${U}y`,"0")}else m&&g.append(m,B)}}else{if(ou(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Fr,s=null,d=Pr,b=i}return g&&d==="text/plain"&&(b=g,g=void 0),{action:s,method:o.toLowerCase(),encType:d,formData:g,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zo(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function By(i,u,o){let s=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s.pathname==="/"?s.pathname=`_root.${o}`:u&&dn(s.pathname,u)==="/"?s.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function Ny(i,u){if(i.id in u)return u[i.id];try{let o=await import(i.module);return u[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Uy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Hy(i,u,o){let s=await Promise.all(i.map(async d=>{let g=u.routes[d.route.id];if(g){let b=await Ny(g,o);return b.links?b.links():[]}return[]}));return qy(s.flat(1).filter(Uy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Yg(i,u,o,s,d,g){let b=(v,m)=>o[m]?v.route.id!==o[m].route.id:!0,j=(v,m)=>o[m].pathname!==v.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==v.params["*"];return g==="assets"?u.filter((v,m)=>b(v,m)||j(v,m)):g==="data"?u.filter((v,m)=>{let T=s.routes[v.route.id];if(!T||!T.hasLoader)return!1;if(b(v,m)||j(v,m))return!0;if(v.route.shouldRevalidate){let B=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function ky(i,u,{includeHydrateFallback:o}={}){return Gy(i.map(s=>{let d=u.routes[s.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Gy(i){return[...new Set(i)]}function Ly(i){let u={},o=Object.keys(i).sort();for(let s of o)u[s]=i[s];return u}function qy(i,u){let o=new Set;return new Set(u),i.reduce((s,d)=>{let g=JSON.stringify(Ly(d));return o.has(g)||(o.add(g),s.push({key:g,link:d})),s},[])}function Am(){let i=R.useContext(gl);return zo(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Yy(){let i=R.useContext(cu);return zo(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Eo=R.createContext(void 0);Eo.displayName="FrameworkContext";function Rm(){let i=R.useContext(Eo);return zo(i,"You must render this element inside a <HydratedRouter> element"),i}function Vy(i,u){let o=R.useContext(Eo),[s,d]=R.useState(!1),[g,b]=R.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:m,onMouseLeave:T,onTouchStart:B}=u,U=R.useRef(null);R.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let q=H=>{H.forEach($=>{b($.isIntersecting)})},X=new IntersectionObserver(q,{threshold:.5});return U.current&&X.observe(U.current),()=>{X.disconnect()}}},[i]),R.useEffect(()=>{if(s){let q=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(q)}}},[s]);let k=()=>{d(!0)},G=()=>{d(!1),b(!1)};return o?i!=="intent"?[g,U,{}]:[g,U,{onFocus:mi(j,k),onBlur:mi(v,G),onMouseEnter:mi(m,k),onMouseLeave:mi(T,G),onTouchStart:mi(B,k)}]:[!1,U,{}]}function mi(i,u){return o=>{i&&i(o),o.defaultPrevented||u(o)}}function Xy({page:i,...u}){let{router:o}=Am(),s=R.useMemo(()=>bm(o.routes,i,o.basename),[o.routes,i,o.basename]);return s?R.createElement(Qy,{page:i,matches:s,...u}):null}function Zy(i){let{manifest:u,routeModules:o}=Rm(),[s,d]=R.useState([]);return R.useEffect(()=>{let g=!1;return Hy(i,u,o).then(b=>{g||d(b)}),()=>{g=!0}},[i,u,o]),s}function Qy({page:i,matches:u,...o}){let s=Gn(),{manifest:d,routeModules:g}=Rm(),{basename:b}=Am(),{loaderData:j,matches:v}=Yy(),m=R.useMemo(()=>Yg(i,u,v,d,s,"data"),[i,u,v,d,s]),T=R.useMemo(()=>Yg(i,u,v,d,s,"assets"),[i,u,v,d,s]),B=R.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let G=new Set,q=!1;if(u.forEach(H=>{let $=d.routes[H.route.id];!$||!$.hasLoader||(!m.some(Z=>Z.route.id===H.route.id)&&H.route.id in j&&g[H.route.id]?.shouldRevalidate||$.hasClientLoader?q=!0:G.add(H.route.id))}),G.size===0)return[];let X=By(i,b,"data");return q&&G.size>0&&X.searchParams.set("_routes",u.filter(H=>G.has(H.route.id)).map(H=>H.route.id).join(",")),[X.pathname+X.search]},[b,j,s,d,m,u,i,g]),U=R.useMemo(()=>ky(T,d),[T,d]),k=Zy(T);return R.createElement(R.Fragment,null,B.map(G=>R.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...o})),U.map(G=>R.createElement("link",{key:G,rel:"modulepreload",href:G,...o})),k.map(({key:G,link:q})=>R.createElement("link",{key:G,...q})))}function Ky(...i){return u=>{i.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var Mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mm&&(window.__reactRouterVersion="7.7.1")}catch{}function Jy({basename:i,children:u,window:o}){let s=R.useRef();s.current==null&&(s.current=Nb({window:o,v5Compat:!0}));let d=s.current,[g,b]=R.useState({action:d.action,location:d.location}),j=R.useCallback(v=>{R.startTransition(()=>b(v))},[b]);return R.useLayoutEffect(()=>d.listen(j),[d,j]),R.createElement(zy,{basename:i,children:u,location:g.location,navigationType:g.action,navigator:d})}var Dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,To=R.forwardRef(function({onClick:u,discover:o="render",prefetch:s="none",relative:d,reloadDocument:g,replace:b,state:j,target:v,to:m,preventScrollReset:T,viewTransition:B,...U},k){let{basename:G}=R.useContext(Xt),q=typeof m=="string"&&Dm.test(m),X,H=!1;if(typeof m=="string"&&q&&(X=m,Mm))try{let _e=new URL(window.location.href),nt=m.startsWith("//")?new URL(_e.protocol+m):new URL(m),lt=dn(nt.pathname,G);nt.origin===_e.origin&&lt!=null?m=lt+nt.search+nt.hash:H=!0}catch{Vt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=sy(m,{relative:d}),[Z,ae,Q]=Vy(s,U),le=Py(m,{replace:b,state:j,target:v,preventScrollReset:T,relative:d,viewTransition:B});function W(_e){u&&u(_e),_e.defaultPrevented||le(_e)}let Te=R.createElement("a",{...U,...Q,href:X||$,onClick:H||g?u:W,ref:Ky(k,ae),target:v,"data-discover":!q&&o==="render"?"true":void 0});return Z&&!q?R.createElement(R.Fragment,null,Te,R.createElement(Xy,{page:$})):Te});To.displayName="Link";var $y=R.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:s="",end:d=!1,style:g,to:b,viewTransition:j,children:v,...m},T){let B=Ei(b,{relative:m.relative}),U=Gn(),k=R.useContext(cu),{navigator:G,basename:q}=R.useContext(Xt),X=k!=null&&av(B)&&j===!0,H=G.encodeLocation?G.encodeLocation(B).pathname:B.pathname,$=U.pathname,Z=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||($=$.toLowerCase(),Z=Z?Z.toLowerCase():null,H=H.toLowerCase()),Z&&q&&(Z=dn(Z,q)||Z);const ae=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Q=$===H||!d&&$.startsWith(H)&&$.charAt(ae)==="/",le=Z!=null&&(Z===H||!d&&Z.startsWith(H)&&Z.charAt(H.length)==="/"),W={isActive:Q,isPending:le,isTransitioning:X},Te=Q?u:void 0,_e;typeof s=="function"?_e=s(W):_e=[s,Q?"active":null,le?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let nt=typeof g=="function"?g(W):g;return R.createElement(To,{...m,"aria-current":Te,className:_e,ref:T,style:nt,to:b,viewTransition:j},typeof v=="function"?v(W):v)});$y.displayName="NavLink";var Wy=R.forwardRef(({discover:i="render",fetcherKey:u,navigate:o,reloadDocument:s,replace:d,state:g,method:b=Fr,action:j,onSubmit:v,relative:m,preventScrollReset:T,viewTransition:B,...U},k)=>{let G=tv(),q=nv(j,{relative:m}),X=b.toLowerCase()==="get"?"get":"post",H=typeof j=="string"&&Dm.test(j),$=Z=>{if(v&&v(Z),Z.defaultPrevented)return;Z.preventDefault();let ae=Z.nativeEvent.submitter,Q=ae?.getAttribute("formmethod")||b;G(ae||Z.currentTarget,{fetcherKey:u,method:Q,navigate:o,replace:d,state:g,relative:m,preventScrollReset:T,viewTransition:B})};return R.createElement("form",{ref:k,method:X,action:q,onSubmit:s?v:$,...U,"data-discover":!H&&i==="render"?"true":void 0})});Wy.displayName="Form";function Fy(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Om(i){let u=R.useContext(gl);return De(u,Fy(i)),u}function Py(i,{target:u,replace:o,state:s,preventScrollReset:d,relative:g,viewTransition:b}={}){let j=cy(),v=Gn(),m=Ei(i,{relative:g});return R.useCallback(T=>{if(My(T,u)){T.preventDefault();let B=o!==void 0?o:Si(v)===Si(m);j(i,{replace:B,state:s,preventScrollReset:d,relative:g,viewTransition:b})}},[v,j,m,o,s,u,i,d,g,b])}var Iy=0,ev=()=>`__${String(++Iy)}__`;function tv(){let{router:i}=Om("useSubmit"),{basename:u}=R.useContext(Xt),o=xy();return R.useCallback(async(s,d={})=>{let{action:g,method:b,encType:j,formData:v,body:m}=Cy(s,u);if(d.navigate===!1){let T=d.fetcherKey||ev();await i.fetch(T,o,d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||b,formEncType:d.encType||j,flushSync:d.flushSync})}else await i.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||b,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,u,o])}function nv(i,{relative:u}={}){let{basename:o}=R.useContext(Xt),s=R.useContext(hn);De(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),g={...Ei(i||".",{relative:u})},b=Gn();if(i==null){g.search=b.search;let j=new URLSearchParams(g.search),v=j.getAll("index");if(v.some(T=>T==="")){j.delete("index"),v.filter(B=>B).forEach(B=>j.append("index",B));let T=j.toString();g.search=T?`?${T}`:""}}return(!i||i===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(g.pathname=g.pathname==="/"?o:fn([o,g.pathname])),Si(g)}function av(i,{relative:u}={}){let o=R.useContext(_m);De(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Om("useViewTransitionState"),d=Ei(i,{relative:u});if(!o.isTransitioning)return!1;let g=dn(o.currentLocation.pathname,s)||o.currentLocation.pathname,b=dn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return lu(d.pathname,b)!=null||lu(d.pathname,g)!=null}var ot=function(){return ot=Object.assign||function(u){for(var o,s=1,d=arguments.length;s<d;s++){o=arguments[s];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(u[g]=o[g])}return u},ot.apply(this,arguments)};function iu(i,u,o){if(o||arguments.length===2)for(var s=0,d=u.length,g;s<d;s++)(g||!(s in u))&&(g||(g=Array.prototype.slice.call(u,0,s)),g[s]=u[s]);return i.concat(g||Array.prototype.slice.call(u))}var we="-ms-",vi="-moz-",be="-webkit-",Cm="comm",fu="rule",wo="decl",lv="@import",Bm="@keyframes",iv="@layer",Nm=Math.abs,Ao=String.fromCharCode,ho=Object.assign;function rv(i,u){return Je(i,0)^45?(((u<<2^Je(i,0))<<2^Je(i,1))<<2^Je(i,2))<<2^Je(i,3):0}function Um(i){return i.trim()}function on(i,u){return(i=u.exec(i))?i[0]:i}function re(i,u,o){return i.replace(u,o)}function Ir(i,u,o){return i.indexOf(u,o)}function Je(i,u){return i.charCodeAt(u)|0}function sl(i,u,o){return i.slice(u,o)}function Yt(i){return i.length}function Hm(i){return i.length}function yi(i,u){return u.push(i),i}function uv(i,u){return i.map(u).join("")}function Vg(i,u){return i.filter(function(o){return!on(o,u)})}var du=1,cl=1,km=0,Dt=0,ke=0,ml="";function hu(i,u,o,s,d,g,b,j){return{value:i,root:u,parent:o,type:s,props:d,children:g,line:du,column:cl,length:b,return:"",siblings:j}}function kn(i,u){return ho(hu("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},u)}function Ka(i){for(;i.root;)i=kn(i.root,{children:[i]});yi(i,i.siblings)}function sv(){return ke}function cv(){return ke=Dt>0?Je(ml,--Dt):0,cl--,ke===10&&(cl=1,du--),ke}function Nt(){return ke=Dt<km?Je(ml,Dt++):0,cl++,ke===10&&(cl=1,du++),ke}function ra(){return Je(ml,Dt)}function eu(){return Dt}function gu(i,u){return sl(ml,i,u)}function go(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ov(i){return du=cl=1,km=Yt(ml=i),Dt=0,[]}function fv(i){return ml="",i}function kc(i){return Um(gu(Dt-1,mo(i===91?i+2:i===40?i+1:i)))}function dv(i){for(;(ke=ra())&&ke<33;)Nt();return go(i)>2||go(ke)>3?"":" "}function hv(i,u){for(;--u&&Nt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return gu(i,eu()+(u<6&&ra()==32&&Nt()==32))}function mo(i){for(;Nt();)switch(ke){case i:return Dt;case 34:case 39:i!==34&&i!==39&&mo(ke);break;case 40:i===41&&mo(i);break;case 92:Nt();break}return Dt}function gv(i,u){for(;Nt()&&i+ke!==57;)if(i+ke===84&&ra()===47)break;return"/*"+gu(u,Dt-1)+"*"+Ao(i===47?i:Nt())}function mv(i){for(;!go(ra());)Nt();return gu(i,Dt)}function pv(i){return fv(tu("",null,null,null,[""],i=ov(i),0,[0],i))}function tu(i,u,o,s,d,g,b,j,v){for(var m=0,T=0,B=b,U=0,k=0,G=0,q=1,X=1,H=1,$=0,Z="",ae=d,Q=g,le=s,W=Z;X;)switch(G=$,$=Nt()){case 40:if(G!=108&&Je(W,B-1)==58){Ir(W+=re(kc($),"&","&\f"),"&\f",Nm(m?j[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:W+=kc($);break;case 9:case 10:case 13:case 32:W+=dv(G);break;case 92:W+=hv(eu()-1,7);continue;case 47:switch(ra()){case 42:case 47:yi(bv(gv(Nt(),eu()),u,o,v),v);break;default:W+="/"}break;case 123*q:j[m++]=Yt(W)*H;case 125*q:case 59:case 0:switch($){case 0:case 125:X=0;case 59+T:H==-1&&(W=re(W,/\f/g,"")),k>0&&Yt(W)-B&&yi(k>32?Zg(W+";",s,o,B-1,v):Zg(re(W," ","")+";",s,o,B-2,v),v);break;case 59:W+=";";default:if(yi(le=Xg(W,u,o,m,T,d,j,Z,ae=[],Q=[],B,g),g),$===123)if(T===0)tu(W,u,le,le,ae,g,B,j,Q);else switch(U===99&&Je(W,3)===110?100:U){case 100:case 108:case 109:case 115:tu(i,le,le,s&&yi(Xg(i,le,le,0,0,d,j,Z,d,ae=[],B,Q),Q),d,Q,B,j,s?ae:Q);break;default:tu(W,le,le,le,[""],Q,0,j,Q)}}m=T=k=0,q=H=1,Z=W="",B=b;break;case 58:B=1+Yt(W),k=G;default:if(q<1){if($==123)--q;else if($==125&&q++==0&&cv()==125)continue}switch(W+=Ao($),$*q){case 38:H=T>0?1:(W+="\f",-1);break;case 44:j[m++]=(Yt(W)-1)*H,H=1;break;case 64:ra()===45&&(W+=kc(Nt())),U=ra(),T=B=Yt(Z=W+=mv(eu())),$++;break;case 45:G===45&&Yt(W)==2&&(q=0)}}return g}function Xg(i,u,o,s,d,g,b,j,v,m,T,B){for(var U=d-1,k=d===0?g:[""],G=Hm(k),q=0,X=0,H=0;q<s;++q)for(var $=0,Z=sl(i,U+1,U=Nm(X=b[q])),ae=i;$<G;++$)(ae=Um(X>0?k[$]+" "+Z:re(Z,/&\f/g,k[$])))&&(v[H++]=ae);return hu(i,u,o,d===0?fu:j,v,m,T,B)}function bv(i,u,o,s){return hu(i,u,o,Cm,Ao(sv()),sl(i,2,-2),0,s)}function Zg(i,u,o,s,d){return hu(i,u,o,wo,sl(i,0,s),sl(i,s+1,-1),s,d)}function Gm(i,u,o){switch(rv(i,u)){case 5103:return be+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+i+i;case 4789:return vi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return be+i+vi+i+we+i+i;case 5936:switch(Je(i,u+11)){case 114:return be+i+we+re(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return be+i+we+re(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return be+i+we+re(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return be+i+we+i+i;case 6165:return be+i+we+"flex-"+i+i;case 5187:return be+i+re(i,/(\w+).+(:[^]+)/,be+"box-$1$2"+we+"flex-$1$2")+i;case 5443:return be+i+we+"flex-item-"+re(i,/flex-|-self/g,"")+(on(i,/flex-|baseline/)?"":we+"grid-row-"+re(i,/flex-|-self/g,""))+i;case 4675:return be+i+we+"flex-line-pack"+re(i,/align-content|flex-|-self/g,"")+i;case 5548:return be+i+we+re(i,"shrink","negative")+i;case 5292:return be+i+we+re(i,"basis","preferred-size")+i;case 6060:return be+"box-"+re(i,"-grow","")+be+i+we+re(i,"grow","positive")+i;case 4554:return be+re(i,/([^-])(transform)/g,"$1"+be+"$2")+i;case 6187:return re(re(re(i,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),i,"")+i;case 5495:case 3959:return re(i,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(i,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+i+i;case 4200:if(!on(i,/flex-|baseline/))return we+"grid-column-align"+sl(i,u)+i;break;case 2592:case 3360:return we+re(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(s,d){return u=d,on(s.props,/grid-\w+-end/)})?~Ir(i+(o=o[u].value),"span",0)?i:we+re(i,"-start","")+i+we+"grid-row-span:"+(~Ir(o,"span",0)?on(o,/\d+/):+on(o,/\d+/)-+on(i,/\d+/))+";":we+re(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(s){return on(s.props,/grid-\w+-start/)})?i:we+re(re(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return re(i,/(.+)-inline(.+)/,be+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(i)-1-u>6)switch(Je(i,u+1)){case 109:if(Je(i,u+4)!==45)break;case 102:return re(i,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+vi+(Je(i,u+3)==108?"$3":"$2-$3"))+i;case 115:return~Ir(i,"stretch",0)?Gm(re(i,"stretch","fill-available"),u,o)+i:i}break;case 5152:case 5920:return re(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,g,b,j,v,m){return we+d+":"+g+m+(b?we+d+"-span:"+(j?v:+v-+g)+m:"")+i});case 4949:if(Je(i,u+6)===121)return re(i,":",":"+be)+i;break;case 6444:switch(Je(i,Je(i,14)===45?18:11)){case 120:return re(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(i,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+we+"$2box$3")+i;case 100:return re(i,":",":"+we)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(i,"scroll-","scroll-snap-")+i}return i}function ru(i,u){for(var o="",s=0;s<i.length;s++)o+=u(i[s],s,i,u)||"";return o}function yv(i,u,o,s){switch(i.type){case iv:if(i.children.length)break;case lv:case wo:return i.return=i.return||i.value;case Cm:return"";case Bm:return i.return=i.value+"{"+ru(i.children,s)+"}";case fu:if(!Yt(i.value=i.props.join(",")))return""}return Yt(o=ru(i.children,s))?i.return=i.value+"{"+o+"}":""}function vv(i){var u=Hm(i);return function(o,s,d,g){for(var b="",j=0;j<u;j++)b+=i[j](o,s,d,g)||"";return b}}function xv(i){return function(u){u.root||(u=u.return)&&i(u)}}function Sv(i,u,o,s){if(i.length>-1&&!i.return)switch(i.type){case wo:i.return=Gm(i.value,i.length,o);return;case Bm:return ru([kn(i,{value:re(i.value,"@","@"+be)})],s);case fu:if(i.length)return uv(o=i.props,function(d){switch(on(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ka(kn(i,{props:[re(d,/:(read-\w+)/,":"+vi+"$1")]})),Ka(kn(i,{props:[d]})),ho(i,{props:Vg(o,s)});break;case"::placeholder":Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+vi+"$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,we+"input-$1")]})),Ka(kn(i,{props:[d]})),ho(i,{props:Vg(o,s)});break}return""})}}var jv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},ol=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Lm="active",qm="data-styled-version",mu="6.1.19",Ro=`/*!sc*/
`,uu=typeof window<"u"&&typeof document<"u",_v=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),pu=Object.freeze([]),fl=Object.freeze({});function zv(i,u,o){return o===void 0&&(o=fl),i.theme!==o.theme&&i.theme||u||o.theme}var Ym=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ev=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tv=/(^-|-$)/g;function Qg(i){return i.replace(Ev,"-").replace(Tv,"")}var wv=/(a)(d)/gi,Yr=52,Kg=function(i){return String.fromCharCode(i+(i>25?39:97))};function po(i){var u,o="";for(u=Math.abs(i);u>Yr;u=u/Yr|0)o=Kg(u%Yr)+o;return(Kg(u%Yr)+o).replace(wv,"$1-$2")}var Gc,Vm=5381,ul=function(i,u){for(var o=u.length;o;)i=33*i^u.charCodeAt(--o);return i},Xm=function(i){return ul(Vm,i)};function Av(i){return po(Xm(i)>>>0)}function Rv(i){return i.displayName||i.name||"Component"}function Lc(i){return typeof i=="string"&&!0}var Zm=typeof Symbol=="function"&&Symbol.for,Qm=Zm?Symbol.for("react.memo"):60115,Mv=Zm?Symbol.for("react.forward_ref"):60112,Dv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ov={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Km={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cv=((Gc={})[Mv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[Qm]=Km,Gc);function Jg(i){return("type"in(u=i)&&u.type.$$typeof)===Qm?Km:"$$typeof"in i?Cv[i.$$typeof]:Dv;var u}var Bv=Object.defineProperty,Nv=Object.getOwnPropertyNames,$g=Object.getOwnPropertySymbols,Uv=Object.getOwnPropertyDescriptor,Hv=Object.getPrototypeOf,Wg=Object.prototype;function Jm(i,u,o){if(typeof u!="string"){if(Wg){var s=Hv(u);s&&s!==Wg&&Jm(i,s,o)}var d=Nv(u);$g&&(d=d.concat($g(u)));for(var g=Jg(i),b=Jg(u),j=0;j<d.length;++j){var v=d[j];if(!(v in Ov||o&&o[v]||b&&v in b||g&&v in g)){var m=Uv(u,v);try{Bv(i,v,m)}catch{}}}}return i}function dl(i){return typeof i=="function"}function Mo(i){return typeof i=="object"&&"styledComponentId"in i}function ia(i,u){return i&&u?"".concat(i," ").concat(u):i||u||""}function Fg(i,u){if(i.length===0)return"";for(var o=i[0],s=1;s<i.length;s++)o+=i[s];return o}function ji(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function bo(i,u,o){if(o===void 0&&(o=!1),!o&&!ji(i)&&!Array.isArray(i))return u;if(Array.isArray(u))for(var s=0;s<u.length;s++)i[s]=bo(i[s],u[s]);else if(ji(u))for(var s in u)i[s]=bo(i[s],u[s]);return i}function Do(i,u){Object.defineProperty(i,"toString",{value:u})}function Ti(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var kv=function(){function i(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return i.prototype.indexOfGroup=function(u){for(var o=0,s=0;s<u;s++)o+=this.groupSizes[s];return o},i.prototype.insertRules=function(u,o){if(u>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,g=d;u>=g;)if((g<<=1)<0)throw Ti(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(s),this.length=g;for(var b=d;b<g;b++)this.groupSizes[b]=0}for(var j=this.indexOfGroup(u+1),v=(b=0,o.length);b<v;b++)this.tag.insertRule(j,o[b])&&(this.groupSizes[u]++,j++)},i.prototype.clearGroup=function(u){if(u<this.length){var o=this.groupSizes[u],s=this.indexOfGroup(u),d=s+o;this.groupSizes[u]=0;for(var g=s;g<d;g++)this.tag.deleteRule(s)}},i.prototype.getGroup=function(u){var o="";if(u>=this.length||this.groupSizes[u]===0)return o;for(var s=this.groupSizes[u],d=this.indexOfGroup(u),g=d+s,b=d;b<g;b++)o+="".concat(this.tag.getRule(b)).concat(Ro);return o},i}(),nu=new Map,su=new Map,au=1,Vr=function(i){if(nu.has(i))return nu.get(i);for(;su.has(au);)au++;var u=au++;return nu.set(i,u),su.set(u,i),u},Gv=function(i,u){au=u+1,nu.set(i,u),su.set(u,i)},Lv="style[".concat(ol,"][").concat(qm,'="').concat(mu,'"]'),qv=new RegExp("^".concat(ol,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yv=function(i,u,o){for(var s,d=o.split(","),g=0,b=d.length;g<b;g++)(s=d[g])&&i.registerName(u,s)},Vv=function(i,u){for(var o,s=((o=u.textContent)!==null&&o!==void 0?o:"").split(Ro),d=[],g=0,b=s.length;g<b;g++){var j=s[g].trim();if(j){var v=j.match(qv);if(v){var m=0|parseInt(v[1],10),T=v[2];m!==0&&(Gv(T,m),Yv(i,T,v[3]),i.getTag().insertRules(m,d)),d.length=0}else d.push(j)}}},Pg=function(i){for(var u=document.querySelectorAll(Lv),o=0,s=u.length;o<s;o++){var d=u[o];d&&d.getAttribute(ol)!==Lm&&(Vv(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function Xv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $m=function(i){var u=document.head,o=i||u,s=document.createElement("style"),d=function(j){var v=Array.from(j.querySelectorAll("style[".concat(ol,"]")));return v[v.length-1]}(o),g=d!==void 0?d.nextSibling:null;s.setAttribute(ol,Lm),s.setAttribute(qm,mu);var b=Xv();return b&&s.setAttribute("nonce",b),o.insertBefore(s,g),s},Zv=function(){function i(u){this.element=$m(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,d=0,g=s.length;d<g;d++){var b=s[d];if(b.ownerNode===o)return b}throw Ti(17)}(this.element),this.length=0}return i.prototype.insertRule=function(u,o){try{return this.sheet.insertRule(o,u),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},i.prototype.getRule=function(u){var o=this.sheet.cssRules[u];return o&&o.cssText?o.cssText:""},i}(),Qv=function(){function i(u){this.element=$m(u),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(u,o){if(u<=this.length&&u>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[u]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},i.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},i}(),Kv=function(){function i(u){this.rules=[],this.length=0}return i.prototype.insertRule=function(u,o){return u<=this.length&&(this.rules.splice(u,0,o),this.length++,!0)},i.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},i.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},i}(),Ig=uu,Jv={isServer:!uu,useCSSOMInjection:!_v},Wm=function(){function i(u,o,s){u===void 0&&(u=fl),o===void 0&&(o={});var d=this;this.options=ot(ot({},Jv),u),this.gs=o,this.names=new Map(s),this.server=!!u.isServer,!this.server&&uu&&Ig&&(Ig=!1,Pg(this)),Do(this,function(){return function(g){for(var b=g.getTag(),j=b.length,v="",m=function(B){var U=function(H){return su.get(H)}(B);if(U===void 0)return"continue";var k=g.names.get(U),G=b.getGroup(B);if(k===void 0||!k.size||G.length===0)return"continue";var q="".concat(ol,".g").concat(B,'[id="').concat(U,'"]'),X="";k!==void 0&&k.forEach(function(H){H.length>0&&(X+="".concat(H,","))}),v+="".concat(G).concat(q,'{content:"').concat(X,'"}').concat(Ro)},T=0;T<j;T++)m(T);return v}(d)})}return i.registerId=function(u){return Vr(u)},i.prototype.rehydrate=function(){!this.server&&uu&&Pg(this)},i.prototype.reconstructWithOptions=function(u,o){return o===void 0&&(o=!0),new i(ot(ot({},this.options),u),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(u=function(o){var s=o.useCSSOMInjection,d=o.target;return o.isServer?new Kv(d):s?new Zv(d):new Qv(d)}(this.options),new kv(u)));var u},i.prototype.hasNameForId=function(u,o){return this.names.has(u)&&this.names.get(u).has(o)},i.prototype.registerName=function(u,o){if(Vr(u),this.names.has(u))this.names.get(u).add(o);else{var s=new Set;s.add(o),this.names.set(u,s)}},i.prototype.insertRules=function(u,o,s){this.registerName(u,o),this.getTag().insertRules(Vr(u),s)},i.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},i.prototype.clearRules=function(u){this.getTag().clearGroup(Vr(u)),this.clearNames(u)},i.prototype.clearTag=function(){this.tag=void 0},i}(),$v=/&/g,Wv=/^\s*\/\/.*$/gm;function Fm(i,u){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(u," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(u," ")),o.props=o.props.map(function(s){return"".concat(u," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Fm(o.children,u)),o})}function Fv(i){var u,o,s,d=fl,g=d.options,b=g===void 0?fl:g,j=d.plugins,v=j===void 0?pu:j,m=function(U,k,G){return G.startsWith(o)&&G.endsWith(o)&&G.replaceAll(o,"").length>0?".".concat(u):U},T=v.slice();T.push(function(U){U.type===fu&&U.value.includes("&")&&(U.props[0]=U.props[0].replace($v,o).replace(s,m))}),b.prefix&&T.push(Sv),T.push(yv);var B=function(U,k,G,q){k===void 0&&(k=""),G===void 0&&(G=""),q===void 0&&(q="&"),u=q,o=k,s=new RegExp("\\".concat(o,"\\b"),"g");var X=U.replace(Wv,""),H=pv(G||k?"".concat(G," ").concat(k," { ").concat(X," }"):X);b.namespace&&(H=Fm(H,b.namespace));var $=[];return ru(H,vv(T.concat(xv(function(Z){return $.push(Z)})))),$};return B.hash=v.length?v.reduce(function(U,k){return k.name||Ti(15),ul(U,k.name)},Vm).toString():"",B}var Pv=new Wm,yo=Fv(),Pm=xi.createContext({shouldForwardProp:void 0,styleSheet:Pv,stylis:yo});Pm.Consumer;xi.createContext(void 0);function em(){return R.useContext(Pm)}var Iv=function(){function i(u,o){var s=this;this.inject=function(d,g){g===void 0&&(g=yo);var b=s.name+g.hash;d.hasNameForId(s.id,b)||d.insertRules(s.id,b,g(s.rules,b,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=o,Do(this,function(){throw Ti(12,String(s.name))})}return i.prototype.getName=function(u){return u===void 0&&(u=yo),this.name+u.hash},i}(),ex=function(i){return i>="A"&&i<="Z"};function tm(i){for(var u="",o=0;o<i.length;o++){var s=i[o];if(o===1&&s==="-"&&i[0]==="-")return i;ex(s)?u+="-"+s.toLowerCase():u+=s}return u.startsWith("ms-")?"-"+u:u}var Im=function(i){return i==null||i===!1||i===""},e0=function(i){var u,o,s=[];for(var d in i){var g=i[d];i.hasOwnProperty(d)&&!Im(g)&&(Array.isArray(g)&&g.isCss||dl(g)?s.push("".concat(tm(d),":"),g,";"):ji(g)?s.push.apply(s,iu(iu(["".concat(d," {")],e0(g),!1),["}"],!1)):s.push("".concat(tm(d),": ").concat((u=d,(o=g)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||u in jv||u.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function ua(i,u,o,s){if(Im(i))return[];if(Mo(i))return[".".concat(i.styledComponentId)];if(dl(i)){if(!dl(g=i)||g.prototype&&g.prototype.isReactComponent||!u)return[i];var d=i(u);return ua(d,u,o,s)}var g;return i instanceof Iv?o?(i.inject(o,s),[i.getName(s)]):[i]:ji(i)?e0(i):Array.isArray(i)?Array.prototype.concat.apply(pu,i.map(function(b){return ua(b,u,o,s)})):[i.toString()]}function tx(i){for(var u=0;u<i.length;u+=1){var o=i[u];if(dl(o)&&!Mo(o))return!1}return!0}var nx=Xm(mu),ax=function(){function i(u,o,s){this.rules=u,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&tx(u),this.componentId=o,this.baseHash=ul(nx,o),this.baseStyle=s,Wm.registerId(o)}return i.prototype.generateAndInjectStyles=function(u,o,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var g=Fg(ua(this.rules,u,o,s)),b=po(ul(this.baseHash,g)>>>0);if(!o.hasNameForId(this.componentId,b)){var j=s(g,".".concat(b),void 0,this.componentId);o.insertRules(this.componentId,b,j)}d=ia(d,b),this.staticRulesId=b}else{for(var v=ul(this.baseHash,s.hash),m="",T=0;T<this.rules.length;T++){var B=this.rules[T];if(typeof B=="string")m+=B;else if(B){var U=Fg(ua(B,u,o,s));v=ul(v,U+T),m+=U}}if(m){var k=po(v>>>0);o.hasNameForId(this.componentId,k)||o.insertRules(this.componentId,k,s(m,".".concat(k),void 0,this.componentId)),d=ia(d,k)}}return d},i}(),t0=xi.createContext(void 0);t0.Consumer;var qc={};function lx(i,u,o){var s=Mo(i),d=i,g=!Lc(i),b=u.attrs,j=b===void 0?pu:b,v=u.componentId,m=v===void 0?function(ae,Q){var le=typeof ae!="string"?"sc":Qg(ae);qc[le]=(qc[le]||0)+1;var W="".concat(le,"-").concat(Av(mu+le+qc[le]));return Q?"".concat(Q,"-").concat(W):W}(u.displayName,u.parentComponentId):v,T=u.displayName,B=T===void 0?function(ae){return Lc(ae)?"styled.".concat(ae):"Styled(".concat(Rv(ae),")")}(i):T,U=u.displayName&&u.componentId?"".concat(Qg(u.displayName),"-").concat(u.componentId):u.componentId||m,k=s&&d.attrs?d.attrs.concat(j).filter(Boolean):j,G=u.shouldForwardProp;if(s&&d.shouldForwardProp){var q=d.shouldForwardProp;if(u.shouldForwardProp){var X=u.shouldForwardProp;G=function(ae,Q){return q(ae,Q)&&X(ae,Q)}}else G=q}var H=new ax(o,U,s?d.componentStyle:void 0);function $(ae,Q){return function(le,W,Te){var _e=le.attrs,nt=le.componentStyle,lt=le.defaultProps,qe=le.foldedComponentIds,Zt=le.styledComponentId,Qt=le.target,Ye=xi.useContext(t0),M=em(),Y=le.shouldForwardProp||M.shouldForwardProp,P=zv(W,Ye,lt)||fl,ce=function(oe,ee,Ve){for(var pe,Pe=ot(ot({},ee),{className:void 0,theme:Ve}),Ln=0;Ln<oe.length;Ln+=1){var Kt=dl(pe=oe[Ln])?pe(Pe):pe;for(var St in Kt)Pe[St]=St==="className"?ia(Pe[St],Kt[St]):St==="style"?ot(ot({},Pe[St]),Kt[St]):Kt[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(_e,W,P),x=ce.as||Qt,N={};for(var L in ce)ce[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&ce.theme===P||(L==="forwardedAs"?N.as=ce.forwardedAs:Y&&!Y(L,x)||(N[L]=ce[L]));var V=function(oe,ee){var Ve=em(),pe=oe.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(nt,ce),F=ia(qe,Zt);return V&&(F+=" "+V),ce.className&&(F+=" "+ce.className),N[Lc(x)&&!Ym.has(x)?"class":"className"]=F,Te&&(N.ref=Te),R.createElement(x,N)}(Z,ae,Q)}$.displayName=B;var Z=xi.forwardRef($);return Z.attrs=k,Z.componentStyle=H,Z.displayName=B,Z.shouldForwardProp=G,Z.foldedComponentIds=s?ia(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=U,Z.target=s?d.target:i,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=s?function(Q){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Te=0,_e=le;Te<_e.length;Te++)bo(Q,_e[Te],!0);return Q}({},d.defaultProps,ae):ae}}),Do(Z,function(){return".".concat(Z.styledComponentId)}),g&&Jm(Z,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function nm(i,u){for(var o=[i[0]],s=0,d=u.length;s<d;s+=1)o.push(u[s],i[s+1]);return o}var am=function(i){return Object.assign(i,{isCss:!0})};function ix(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];if(dl(i)||ji(i))return am(ua(nm(pu,iu([i],u,!0))));var s=i;return u.length===0&&s.length===1&&typeof s[0]=="string"?ua(s):am(ua(nm(s,u)))}function vo(i,u,o){if(o===void 0&&(o=fl),!u)throw Ti(1,u);var s=function(d){for(var g=[],b=1;b<arguments.length;b++)g[b-1]=arguments[b];return i(u,o,ix.apply(void 0,iu([d],g,!1)))};return s.attrs=function(d){return vo(i,u,ot(ot({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return vo(i,u,ot(ot({},o),d))},s}var n0=function(i){return vo(lx,i)},p=n0;Ym.forEach(function(i){p[i]=n0(i)});const rx=p.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,ux=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,sx=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,cx=p.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #e10073;
  margin: 0;
`,ox=p.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Yc=p(To)`
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
`;function fx(){const i=Gn();return c.jsx(rx,{children:c.jsxs(ux,{children:[c.jsx(sx,{children:c.jsx(cx,{children:"SCKW"})}),c.jsxs(ox,{children:[c.jsx(Yc,{to:"/",$active:i.pathname==="/",children:"🤝 Sponsoring"}),c.jsx(Yc,{to:"/jobs",$active:i.pathname==="/jobs",children:"💼 Jobbörse"}),c.jsx(Yc,{to:"/renovierung",$active:i.pathname==="/renovierung",children:"🏗️ Renovierung"})]})]})})}const dx=p.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,hx=p.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function Oo(){return c.jsxs(dx,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",c.jsx(hx,{href:"mailto:grimm@sckw.de",children:"grimm@sckw.de"})]})}const a0=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"✅ Vergeben",maxSponsors:1,sponsors:[{name:"RicoBet",image:"ricobet.png",website:null,since:"2023",until:"2025"}],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","1/1 Seite im Stadionmagazin","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Stadionansage bei jedem Heimspiel","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🥈 Co-Sponsor",price:"10.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotärmel 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1/2 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/2 Seite im Stadionmagazin","2 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"⭐️ Premium-Partner",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Banner (5x2 m) am Gelände",highlight:!0,icon:"🖼️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Erweitert*",highlight:!0,icon:"📱"},{text:"Website: Startseite Erweitert*",highlight:!1,icon:"🌐"}],benefits:["1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin","Social Media ERWEITERT: Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche","Website STARTSEITE ERWEITERT: Logo auf der Startseite mit kleinerer Fläche"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟧 11 vergeben · ~19 verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"1 Bande (3x1 m)",highlight:!1,icon:"🏟️"},{text:"Alle Heimspiele",highlight:!0,icon:"⚽"},{text:"Website: Sponsoren-Seite*",highlight:!1,icon:"🌐"}],benefits:["1 Bande (3x1 m) am Spielfeldrand","Sichtbarkeit bei allen Heimspielen","Website SPONSOREN-SEITE: Auflistung auf separater Sponsoren-Seite","Einmalkosten: 70 €/lfd. Meter für Herstellung"]}],gx=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,mx=p.div`
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
`,px=p.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,bx=p.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,yx=p.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,vx=p.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,xx=p.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,Sx=p.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,jx=p.li`
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
`,_x=p.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,zx=p.span`
  flex: 1;
`,Ex=p.a`
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
`,Tx=p.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,wx="grimm@sckw.de";function Ax({packages:i}){const u=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",o=b=>{const j=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},s=b=>{const j=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),m=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${wx}?subject=${v}&body=${m}`},d=b=>{const j=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},g=i.filter(b=>!b.title.includes("Platz-Renovierung"));return c.jsx(gx,{children:g.map((b,j)=>{const{isFullyBooked:v}=d(b),m=u(b.status),T=m==="vergeben"||v,B=v?"vergeben":m,U=b.keyBenefits||[];return c.jsxs(mx,{isVergeben:T,children:[c.jsxs(px,{children:[c.jsx(bx,{children:o(b.title)}),c.jsx(yx,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!T&&c.jsx(vx,{children:b.price}),c.jsx(xx,{status:B,children:B==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),T?c.jsx(Tx,{children:"✅ Alle Plätze vergeben"}):c.jsx(Sx,{children:U.map((k,G)=>c.jsxs(jx,{isHighlight:k.highlight,children:[c.jsx(_x,{children:k.icon}),c.jsx(zx,{children:k.text})]},G))}),c.jsx(Ex,{href:T?void 0:s(b.title),isVergeben:T,children:T?"Vergeben":"Jetzt anfragen"})]},j)})})}const Rx=p.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  overflow: hidden;
`,Mx=p.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Dx=p.button`
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
`,Ox=p.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: #e10073;
`,Cx=p.div`
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,Bx=p.div`
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
`,Nx=p.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Ux=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:c.jsxs(c.Fragment,{children:[c.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:c.jsxs(c.Fragment,{children:[c.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:c.jsx(c.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function Hx(){const[i,u]=R.useState([]),o=d=>{u(g=>g.includes(d)?g.filter(b=>b!==d):[...g,d])},s=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o(g))};return c.jsx(Rx,{children:Ux.map(d=>{const g=i.includes(d.id);return c.jsxs(Mx,{children:[c.jsxs(Dx,{isOpen:g,onClick:()=>o(d.id),onKeyDown:b=>s(b,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[c.jsxs("span",{children:[c.jsx(Nx,{children:d.icon}),d.title]}),c.jsx(Ox,{isOpen:g,children:"▼"})]}),c.jsx(Cx,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:c.jsx(Bx,{children:d.content})})]},d.id)})})}const kx=p.section`
  background: #f8f9fb;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,Gx=p.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
`,Lx=p.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`,lm=p.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`,qx=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,im=p.div`
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
`,Yx=p.div`
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
`,rm=p.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`,Vx=p.svg`
  height: 50px;
  width: auto;
`,um=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,sm=p.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,cm=p.a`
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
`,Xx=p.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`,Zx=p.h4`
  color: #0c5460;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`,om=p.p`
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Qx=p.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,Kx=p.h4`
  color: #856404;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,Jx=p.p`
  color: #856404;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`,$x=p.div`
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
`,Wx=p.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,Fx=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Px=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,Ix=p.button`
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
`,e2=p.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Vc=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Xc=p.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Zc=p.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,t2=p.button`
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
`,n2=p.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;function a2(){const[i,u]=R.useState(!1),o=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")},s=d=>{d.preventDefault(),u(!0)};return c.jsxs(kx,{id:"spenden",children:[c.jsx(Gx,{children:"💚 Spenden für den SC Konstanz-Wollmatingen"}),c.jsxs(Lx,{children:[c.jsx(lm,{children:"Ohne Zuwendungen von Spendern, Gönnern, Förderern und Sponsoren ist der Spiel-, Turnier- und Trainingsbetrieb der Jugendabteilung und der Aktivenbereiche unseres Vereins nicht zu finanzieren. Die Mitgliedsbeiträge reichen für die umfassenden Aufgaben, die unser Verein für die Jugend im Breiten- und im Leistungssport, die Aus- und Weiterbildung der Trainer und Betreuer und die sportlich aktiv tätigen Mitglieder, Spieler und Teams erbringt, nicht aus."}),c.jsx(lm,{children:c.jsx("strong",{children:"Wir freuen uns über jede Zuwendung und Unterstützung!"})})]}),c.jsxs(qx,{children:[c.jsxs(im,{preferred:!0,children:[c.jsx(Yx,{children:"⭐ Bevorzugt"}),c.jsx(rm,{children:c.jsxs(Vx,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.33c-.498 0-.968.382-1.061.913l-.619 3.949-.013.083-.637 4.084c-.229.685-.727 1.061-1.319 1.061L7.076 21.337z",fill:"#263B80"}),c.jsx("path",{d:"M20.781 7.519c-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.95c-.498 0-.968.382-1.061.913l-.756 4.814-.035.199-.561 3.584c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c3.213 0 5.733-1.311 6.467-5.097.307-1.582.149-2.906-.697-3.732-.244-.238-.5-.44-.785-.602-.998-.011-1.998-.011-1.998-.011z",fill:"#139AD6"}),c.jsx("path",{d:"M19.175 7.129c-.166-.039-.34-.071-.519-.097a9.54 9.54 0 0 0-1.348-.082H11.77c-.498 0-.969.382-1.062.913L9.493 13.34c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c.564 0 1.096.045 1.583.135.166.039.34.087.498.143.498-3.146.166-5.286-1.508-6.849z",fill:"#232C65"})]})}),c.jsx(um,{children:"PayPal Spende"}),c.jsx(sm,{children:"Schnell, sicher und unkompliziert - spenden Sie direkt über PayPal. Ihre Spende kommt sofort bei uns an."}),c.jsx(cm,{href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💚 Mit PayPal spenden"})]}),c.jsxs(im,{children:[c.jsx(rm,{children:"🏦"}),c.jsx(um,{children:"Banküberweisung"}),c.jsx(sm,{children:"Traditionelle Überweisung direkt auf unser Vereinskonto. Ideal für größere Spenden und Spendenquittungen."}),c.jsx(cm,{onClick:s,children:"🏦 Kontodaten anzeigen"})]})]}),c.jsxs(Xx,{children:[c.jsx(Zx,{children:"📄 Steuerliche Absetzbarkeit"}),c.jsxs(om,{children:[c.jsx("strong",{children:"Bis 200 EUR:"})," Sie können einfach die Überweisungsquittung als Spendenbescheinigung bei der Steuererklärung angeben."]}),c.jsxs(om,{children:[c.jsx("strong",{children:"Über 200 EUR:"})," Wir stellen Ihnen gerne eine offizielle Spendenquittung aus. Überweisen Sie dafür bitte auf unser Vereinskonto."]})]}),c.jsxs(Qx,{children:[c.jsx(Kx,{children:"📧 Spendenquittung anfordern"}),c.jsxs(Jx,{children:["Für Spenden über 200 EUR richten Sie bitte die Anforderung einer Spendenquittung per E-Mail an ",c.jsx("strong",{children:"grimm@sckw.de"})," oder schriftlich an die Postanschrift des Vereins. Bitte geben Sie Ihre Anschrift, Telefonnummer und den Verwendungszweck an."]})]}),i&&c.jsx($x,{onClick:()=>u(!1),children:c.jsxs(Wx,{onClick:d=>d.stopPropagation(),children:[c.jsxs(Fx,{children:[c.jsx(Px,{children:"Kontoverbindung für Spenden"}),c.jsx(Ix,{onClick:()=>u(!1),children:"×"})]}),c.jsxs(e2,{children:[c.jsxs(Vc,{children:[c.jsx(Xc,{children:"Kontoinhaber:"}),c.jsx(Zc,{children:"SC Konstanz-Wollmatingen"})]}),c.jsxs(Vc,{children:[c.jsx(Xc,{children:"IBAN:"}),c.jsx(Zc,{children:"DE12 6905 0001 0000 0228 06"})]}),c.jsxs(Vc,{children:[c.jsx(Xc,{children:"BIC:"}),c.jsx(Zc,{children:"SOLADES1KNZ"})]})]}),c.jsx(t2,{onClick:o,children:"📋 IBAN kopieren"}),c.jsx(n2,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})})]})}const l2=p.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  margin: 2rem 0;
`,i2=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,r2=p.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
`,u2=p.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,s2=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,c2=p.div`
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
`,o2=p.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e10073;
  justify-content: center;
  align-items: center;
  text-align: center;
`,f2=p.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`,d2=p.h4`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin: 0;
`,h2=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,g2=p.li`
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
`,m2=p.span`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`,p2=p.span`
  flex: 1;
`,b2=p.div`
  background: linear-gradient(135deg, #e10073 0%, #c70066 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  text-align: center;
  font-weight: 500;
`,y2=[{department:"Damen & Herren",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"⚽",text:"Equipment & Trainingsbälle"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Equipment"},{department:"Cheerleading",icon:"💃",items:[{icon:"🎽",text:"Cheerleading Uniformen"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"🏆",text:"Wettkämpfe & Turniere"},{icon:"🎵",text:"Musik & Choreografie"},{icon:"🚌",text:"Auswärtsfahrten"}],costInfo:"Fokus: Wettkämpfe & Ausrüstung"},{department:"Fördergruppe",icon:"🎯",items:[{icon:"👕",text:"Zuschuss zu Trikots (Training)"},{icon:"🥅",text:"Minitore & Equipment"},{icon:"🏟️",text:"Platzkosten"},{icon:"⚽",text:"Trainingsbälle & Zubehör"},{icon:"👨‍🏫",text:"Kosten Übungsleiter"}],costInfo:"Unterstützung für alle Abteilungen"},{department:"Allgemein",icon:"🏟️",items:[{icon:"🏟️",text:"Platzpflege & Infrastruktur"},{icon:"💡",text:"Flutlicht & Stromkosten"},{icon:"🚿",text:"Sanitäranlagen & Umkleiden"},{icon:"🛠️",text:"Wartung & Reparaturen"},{icon:"📢",text:"Kommunikation & Marketing"}],costInfo:"Grundlage für alle Abteilungen"}];function v2(){return c.jsx(l2,{children:c.jsxs(i2,{children:[c.jsx(r2,{children:"Wofür wird Ihr Sponsoring verwendet?"}),c.jsx(u2,{children:"Transparenz ist uns wichtig! Hier sehen Sie, wie Ihr Sponsoring-Geld direkt in die verschiedenen Abteilungen und deren Bedürfnisse fließt."}),c.jsx(s2,{children:y2.map((i,u)=>c.jsxs(c2,{children:[c.jsxs(o2,{children:[c.jsx(f2,{children:i.icon}),c.jsx(d2,{children:i.department})]}),c.jsx(h2,{children:i.items.map((o,s)=>c.jsxs(g2,{children:[c.jsx(m2,{children:o.icon}),c.jsx(p2,{children:o.text})]},s))}),c.jsx(b2,{children:i.costInfo})]},u))})]})})}const l0="/assets/cheerleading_0-DQQGXi0R.jpg",i0="/assets/cheerleading_1-NkLBARmH.jpg",r0="/assets/cheerleading_2-CrezcZYL.jpg",u0="/assets/cheerleading_3-GN5rPHNN.jpg",s0="/assets/1-ClVWb4ei.png",c0="/assets/10-Bwp2eIye.png",o0="/assets/11-W061sOUI.png",f0="/assets/12-TjJyzl8L.png",d0="/assets/13-ChUUCdQQ.png",h0="/assets/14-BVhdRr98.png",g0="/assets/2-CcfgIQYe.png",m0="/assets/3-DYiPkVd7.png",p0="/assets/4-1upoqVoS.png",b0="/assets/5-D0tadXAC.png",y0="/assets/6-NJ4ELm_j.png",v0="/assets/7-BXo4_Bcj.png",x0="/assets/8-BbOqEnj_.png",S0="/assets/9-CIK0gi9o.png",j0="/assets/herren_0-BVVgyt1l.jpg",_0="/assets/herren_1-B8ywOnNy.jpg",z0="/assets/herren_10-DPVQsg9B.jpg",E0="/assets/herren_11-wfWG62H3.jpg",T0="/assets/herren_12-DEJSN2zG.jpg",w0="/assets/herren_13-F52vdukE.jpg",A0="/assets/herren_14-Cq9hoKfG.jpg",R0="/assets/herren_15-aYIFGauG.jpg",M0="/assets/herren_16-NYI2EaEN.jpg",D0="/assets/herren_17-B_52ysA2.jpg",O0="/assets/herren_18-DbwjVNKJ.jpg",C0="/assets/herren_19-BduD_J85.png",B0="/assets/herren_2--jFuixBF.jpg",N0="/assets/herren_3-BPz1zlkG.jpg",U0="/assets/herren_4-BZRrQaFr.jpg",H0="/assets/herren_5-D-QrfY2P.jpg",k0="/assets/herren_6-DWQvi6Am.jpg",G0="/assets/herren_7-BXO6B8Bt.jpg",L0="/assets/herren_8-Cg4rdr7T.jpg",q0="/assets/herren_9-DoLnTdRG.jpg",Y0="/assets/IMG-team-BGcF1agj.png",V0="/assets/IMG_5349-CpvIVKhM.jpg",X0="/assets/IMG_5369-DQ4CSwdg.jpg",Z0="/assets/IMG_5421-BBzniIEN.jpg",Q0="/assets/IMG_5442-D2PgutWB.jpg",K0="/assets/IMG_5952-B9VW6Qie.jpg",J0="/assets/Unbenann324t-IPGo6eoQ.png",$0="/assets/image0-DDrU5aZn.jpeg",W0="/assets/image11-BNM8hTkT.jpeg",F0="/assets/image8-BUnedp9U.jpeg",x2="/assets/grafhardenberg-Di5cVggE.png",S2="/assets/horta-DydWIGV7.png",j2="/assets/logans-BgpKwKYA.png",_2="/assets/ricobet-DsVC-eZt.png",z2="/assets/rothaus-DqkKD9yW.png",E2="/assets/tasty-B2pSa1rE.png",T2="/assets/cabin-window-B83r_CDB.jpg",w2="/assets/outside-9-xz17qL.jpg",A2="/assets/shower-B75caJ-F.jpg",R2="/assets/sitting-area-D7khB3Gw.jpg",M2="/assets/toilet-BpMHYbhh.jpg",D2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":l0,"../assets/gallery/cheerleading/cheerleading_1.jpg":i0,"../assets/gallery/cheerleading/cheerleading_2.jpg":r0,"../assets/gallery/cheerleading/cheerleading_3.jpg":u0,"../assets/gallery/damen/1.png":s0,"../assets/gallery/damen/10.png":c0,"../assets/gallery/damen/11.png":o0,"../assets/gallery/damen/12.png":f0,"../assets/gallery/damen/13.png":d0,"../assets/gallery/damen/14.png":h0,"../assets/gallery/damen/2.png":g0,"../assets/gallery/damen/3.png":m0,"../assets/gallery/damen/4.png":p0,"../assets/gallery/damen/5.png":b0,"../assets/gallery/damen/6.png":y0,"../assets/gallery/damen/7.png":v0,"../assets/gallery/damen/8.png":x0,"../assets/gallery/damen/9.png":S0,"../assets/gallery/herren/herren_0.jpg":j0,"../assets/gallery/herren/herren_1.jpg":_0,"../assets/gallery/herren/herren_10.jpg":z0,"../assets/gallery/herren/herren_11.jpg":E0,"../assets/gallery/herren/herren_12.jpg":T0,"../assets/gallery/herren/herren_13.jpg":w0,"../assets/gallery/herren/herren_14.jpg":A0,"../assets/gallery/herren/herren_15.jpg":R0,"../assets/gallery/herren/herren_16.jpg":M0,"../assets/gallery/herren/herren_17.jpg":D0,"../assets/gallery/herren/herren_18.jpg":O0,"../assets/gallery/herren/herren_19.png":C0,"../assets/gallery/herren/herren_2.jpg":B0,"../assets/gallery/herren/herren_3.jpg":N0,"../assets/gallery/herren/herren_4.jpg":U0,"../assets/gallery/herren/herren_5.jpg":H0,"../assets/gallery/herren/herren_6.jpg":k0,"../assets/gallery/herren/herren_7.jpg":G0,"../assets/gallery/herren/herren_8.jpg":L0,"../assets/gallery/herren/herren_9.jpg":q0,"../assets/gallery/jfv/IMG-team.png":Y0,"../assets/gallery/jfv/IMG_5349.jpg":V0,"../assets/gallery/jfv/IMG_5369.jpg":X0,"../assets/gallery/jfv/IMG_5421.jpg":Z0,"../assets/gallery/jfv/IMG_5442.jpg":Q0,"../assets/gallery/jfv/IMG_5952.jpg":K0,"../assets/gallery/jfv/Unbenann324t.png":J0,"../assets/gallery/jfv/image0.jpeg":$0,"../assets/gallery/jfv/image11.jpeg":W0,"../assets/gallery/jfv/image8.jpeg":F0}),O2=Object.assign({"../assets/sponsors/grafhardenberg.png":x2,"../assets/sponsors/horta.png":S2,"../assets/sponsors/logans.png":j2,"../assets/sponsors/ricobet.png":_2,"../assets/sponsors/rothaus.png":z2,"../assets/sponsors/tasty.png":E2}),C2=Object.assign({"../assets/renovation/cabin-window.jpg":T2,"../assets/renovation/outside.jpg":w2,"../assets/renovation/shower.jpg":A2,"../assets/renovation/sitting-area.jpg":R2,"../assets/renovation/toilet.jpg":M2}),P0=i=>i.split("/").pop()?.toLowerCase()||"",B2=i=>{const u=i.match(/gallery\/(.*?)\//);return u?u[1]:"Sonstige"};function N2(i){const u=[...i];for(let o=u.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[u[o],u[s]]=[u[s],u[o]]}return u}const I0=()=>{const i={};Object.entries(D2).forEach(([s,d])=>{const g=B2(s);i[g]||(i[g]=[]),i[g].push(d)}),Object.keys(i).forEach(s=>{i[s]=N2(i[s])});const u={},o=["jfv","cheerleading","damen","herren"];return o.forEach(s=>{i[s]&&(u[s]=i[s])}),Object.keys(i).forEach(s=>{o.includes(s.toLowerCase())||(u[s]=i[s])}),u},ep=()=>{const i={};return Object.entries(O2).forEach(([u,o])=>{const s=P0(u);i[s]=o}),i},tp=()=>{const i={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(C2).forEach(([u,o])=>{const s=P0(u);s.includes("sitting")?i.kabinen.push({src:o,alt:"Sitzbereich in den Kabinen"}):s.includes("outside")||s.includes("cabin-window")?s.includes("outside")?i.fassade.push({src:o,alt:"Außenfassade des Fürstenberg"}):s.includes("cabin-window")&&i.fassade.push({src:o,alt:"Fenster in den Kabinen"}):(s.includes("toilet")||s.includes("shower")||s.includes("wash"))&&(s.includes("toilet")?i.waschkueche.push({src:o,alt:"Toilette"}):s.includes("shower")?i.waschkueche.push({src:o,alt:"Dusche"}):i.waschkueche.push({src:o,alt:"Waschküche"}))}),i},U2=i=>{const o=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":l0,"../assets/gallery/cheerleading/cheerleading_1.jpg":i0,"../assets/gallery/cheerleading/cheerleading_2.jpg":r0,"../assets/gallery/cheerleading/cheerleading_3.jpg":u0,"../assets/gallery/damen/1.png":s0,"../assets/gallery/damen/10.png":c0,"../assets/gallery/damen/11.png":o0,"../assets/gallery/damen/12.png":f0,"../assets/gallery/damen/13.png":d0,"../assets/gallery/damen/14.png":h0,"../assets/gallery/damen/2.png":g0,"../assets/gallery/damen/3.png":m0,"../assets/gallery/damen/4.png":p0,"../assets/gallery/damen/5.png":b0,"../assets/gallery/damen/6.png":y0,"../assets/gallery/damen/7.png":v0,"../assets/gallery/damen/8.png":x0,"../assets/gallery/damen/9.png":S0,"../assets/gallery/herren/herren_0.jpg":j0,"../assets/gallery/herren/herren_1.jpg":_0,"../assets/gallery/herren/herren_10.jpg":z0,"../assets/gallery/herren/herren_11.jpg":E0,"../assets/gallery/herren/herren_12.jpg":T0,"../assets/gallery/herren/herren_13.jpg":w0,"../assets/gallery/herren/herren_14.jpg":A0,"../assets/gallery/herren/herren_15.jpg":R0,"../assets/gallery/herren/herren_16.jpg":M0,"../assets/gallery/herren/herren_17.jpg":D0,"../assets/gallery/herren/herren_18.jpg":O0,"../assets/gallery/herren/herren_19.png":C0,"../assets/gallery/herren/herren_2.jpg":B0,"../assets/gallery/herren/herren_3.jpg":N0,"../assets/gallery/herren/herren_4.jpg":U0,"../assets/gallery/herren/herren_5.jpg":H0,"../assets/gallery/herren/herren_6.jpg":k0,"../assets/gallery/herren/herren_7.jpg":G0,"../assets/gallery/herren/herren_8.jpg":L0,"../assets/gallery/herren/herren_9.jpg":q0,"../assets/gallery/jfv/IMG-team.png":Y0,"../assets/gallery/jfv/IMG_5349.jpg":V0,"../assets/gallery/jfv/IMG_5369.jpg":X0,"../assets/gallery/jfv/IMG_5421.jpg":Z0,"../assets/gallery/jfv/IMG_5442.jpg":Q0,"../assets/gallery/jfv/IMG_5952.jpg":K0,"../assets/gallery/jfv/Unbenann324t.png":J0,"../assets/gallery/jfv/image0.jpeg":$0,"../assets/gallery/jfv/image11.jpeg":W0,"../assets/gallery/jfv/image8.jpeg":F0})).find(([s])=>s.includes(i));return o?o[1]:""},Co=(i,u)=>U2(`${i}/${i}_${u}.jpg`);I0(),ep(),tp();function H2(){const i=I0(),[u,o]=R.useState(null);return R.useEffect(()=>{if(!u)return;const s=d=>{d.key==="Escape"&&o(null)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[u]),c.jsxs("section",{children:[c.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([s,d])=>c.jsxs("div",{style:{marginBottom:"2.5rem"},children:[c.jsx(k2,{children:s.toUpperCase()}),c.jsx(G2,{children:d.map((g,b)=>c.jsx(L2,{src:g,alt:`Bild ${b+1} aus ${s}`,onClick:()=>o({folder:s,idx:b}),style:{cursor:"pointer"}},b))}),u&&u.folder===s&&c.jsx(q2,{onClick:()=>o(null),children:c.jsxs(Y2,{onClick:g=>g.stopPropagation(),children:[c.jsx(V2,{src:d[u.idx],alt:`Großansicht aus ${s}`}),c.jsx(X2,{onClick:()=>o(null),title:"Schließen",children:"×"})]})})]},s))]})}const k2=p.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,G2=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,L2=p.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,q2=p.div`
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
`,Y2=p.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,V2=p.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,X2=p.button`
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
`,Z2=ep(),fm=i=>Z2[i.toLowerCase()]||void 0;function Q2(){const i=[];return a0.forEach(u=>{Array.isArray(u.sponsors)&&u.sponsors.forEach(o=>{i.push({name:o.name,image:o.image,website:o.website})})}),i.filter((u,o,s)=>s.findIndex(d=>d.name===u.name)===o)}const K2=Q2();function J2(){return c.jsxs($2,{children:[c.jsx(W2,{children:"Unsere Partner"}),c.jsx(F2,{children:K2.map((i,u)=>{const o=i.image&&fm(i.image)?c.jsx(I2,{src:fm(i.image),alt:i.name}):c.jsx(eS,{children:i.name});return i.website?c.jsx(Bo,{href:i.website,target:"_blank",rel:"noopener noreferrer",title:`Besuche ${i.name}`,children:o},u):c.jsx(P2,{children:o},u)})})]})}const $2=p.section`
  background: #fff6fa;
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`,W2=p.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2.2rem;
`,F2=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2.2rem 2.5rem;
  align-items: center;
  justify-items: center;
`,Bo=p.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
`,P2=p.div`
  display: block;
`,I2=p.img`
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
  ${Bo}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`,eS=p.div`
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
  ${Bo}:hover & {
    background: #e10073;
    color: #fff;
  }
`,tS=p.section`
  background: url("${Co("herren",4)}") center/cover;
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
`,nS=p.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
`,aS=p.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
  margin-top: 0.5rem;
`,dm=p.a`
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
`,lS=p.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,iS=p.main`
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
`,rS=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,uS=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 1.5rem 0;
  flex-wrap: wrap;
`,sS=p.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,cS=p.h3`
  font-size: 1.7rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`,hm=p.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`,oS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0 2rem 0;
`,Ja=p.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,$a=p.div`
  font-size: 1.13rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`,Wa=p.div`
  font-size: 1.04rem;
  color: #222;
  line-height: 1.6;
`,fS=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,dS=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,hS=p.p`
  font-size: clamp(1.13rem, 1.5vw, 1.25rem);
  color: #222;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 700px;
`,gS=p.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,mS=p.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,pS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Xr=p.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Zr=p.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,Qr=p.ul`
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
`,bS=p.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,yS=p.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,vS=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,xS=p.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,SS=p.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,jS=p.ul`
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
`,pi=p.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,bi=p.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Qc=p.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Kc=p.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Jc=p.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,$c=p.div`
  font-size: 0.98rem;
  color: #666;
`;function _S(){return c.jsxs(c.Fragment,{children:[c.jsx(tS,{children:c.jsxs(fS,{children:[c.jsx(nS,{children:"SC Konstanz-Wollmatingen"}),c.jsx(aS,{children:"Ihre Marke im Fokus – direkt am Spielfeldrand"}),c.jsxs(lS,{children:[c.jsx(dm,{href:"#sponsoring-pakete",children:"Jetzt Sponsor werden"}),c.jsx(dm,{href:"#spenden",secondary:!0,children:"Spenden"})]})]})}),c.jsxs(iS,{children:[c.jsx(rS,{id:"sponsoring-pakete",children:"Sponsoring-Pakete 2025/2026"}),c.jsx(dS,{children:c.jsx(hS,{children:"Gemeinsam für den Sport in Konstanz: Unterstützen Sie unsere Teams, fördern Sie Talente und werden Sie Teil einer starken Gemeinschaft. Ihr Engagement als Sponsor macht den Unterschied – auf und neben dem Spielfeld!"})}),c.jsx(Ax,{packages:a0}),c.jsx(Hx,{}),c.jsx(a2,{}),c.jsx(v2,{}),c.jsx(J2,{}),c.jsxs(gS,{children:[c.jsx(mS,{children:"Unsere Reichweite & Kanäle"}),c.jsxs(pS,{children:[c.jsxs(Xr,{children:[c.jsx(Zr,{children:"📱 Social Media"}),c.jsxs(Qr,{children:[c.jsx("li",{children:"Instagram: 2.500+ Follower"}),c.jsx("li",{children:"Reel-Reichweite bis 200k"}),c.jsx("li",{children:"Facebook: 1.800+ Follower"})]})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"🌐 Website & Online"}),c.jsxs(Qr,{children:[c.jsx("li",{children:"Monatliche Besucher: 5.000+"}),c.jsx("li",{children:"Newsletter-Abonnenten: 450+"}),c.jsx("li",{children:"Durchschnittliche Seitenaufrufe: 15.000+"}),c.jsx("li",{children:"Google-Sichtbarkeit: 95% lokale Suche"})]})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"🏟️ Offline & Events"}),c.jsxs(Qr,{children:[c.jsx("li",{children:"Heimspiele pro Saison: 15+"}),c.jsx("li",{children:"Durchschnittliche Zuschauer: 200+"}),c.jsx("li",{children:"Events & Turniere: 8+ pro Jahr"}),c.jsx("li",{children:"Stadionheft-Auflage: 300+ pro Spiel"})]})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"📢 Zusätzliche Kanäle"}),c.jsxs(Qr,{children:[c.jsx("li",{children:"Pressearbeit & Medienkontakte"}),c.jsx("li",{children:"Kooperationen mit lokalen Partnern"}),c.jsx("li",{children:"Vereinsfeste & Community-Events"}),c.jsx("li",{children:"Jugendförderung & Nachwuchsarbeit"})]})]})]})]}),c.jsxs(bS,{children:[c.jsx(yS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),c.jsxs(vS,{children:[c.jsxs(xS,{children:[c.jsxs(Qc,{children:[c.jsx(Kc,{children:"1 Seite (Farbe)"}),c.jsx(Jc,{children:"1.000 €"}),c.jsx($c,{children:"DIN A4 (297 × 210 mm)"})]}),c.jsxs(Qc,{children:[c.jsx(Kc,{children:"1/2 Seite (Farbe)"}),c.jsx(Jc,{children:"500 €"}),c.jsx($c,{children:"DIN A5 (148 × 210 mm)"})]}),c.jsxs(Qc,{children:[c.jsx(Kc,{children:"1/4 Seite (Farbe)"}),c.jsx(Jc,{children:"250 €"}),c.jsx($c,{children:"DIN A6 (105 × 148 mm)"})]})]}),c.jsx(SS,{children:c.jsxs(jS,{children:[c.jsxs(pi,{children:[c.jsx(bi,{}),"15 Ausgaben pro Saison"]}),c.jsxs(pi,{children:[c.jsx(bi,{}),"ca. 100 Exemplare pro Heimspiel"]}),c.jsxs(pi,{children:[c.jsx(bi,{}),"Digitale Version (Social Media & Website)"]}),c.jsxs(pi,{children:[c.jsx(bi,{}),"1.000 – 1.500 Online Zugriffe je Ausgabe"]}),c.jsxs(pi,{children:[c.jsx(bi,{}),"DIN A4 Stadionmagazin"]})]})})]})]}),c.jsx(uS,{}),c.jsxs(sS,{children:[c.jsx(cS,{children:"Unsere Ziele und Ihr Beitrag als Sponsor"}),c.jsx(hm,{children:"Der SC Konstanz-Wollmatingen blickt mit großer Motivation auf die Saison 2025/26. Unsere Abteilungen verfolgen ambitionierte, aber realistische Ziele, die wir mit Ihrer Unterstützung erreichen möchten:"}),c.jsxs(oS,{children:[c.jsxs(Ja,{children:[c.jsx($a,{children:"1. Mannschaft (Herren)"}),c.jsx(Wa,{children:"Unser klares Ziel ist der Aufstieg in die nächsthöhere Liga. Dafür investieren wir in eine gezielte sportliche Weiterentwicklung und benötigen insbesondere Unterstützung für die Finanzierung von Trainings- und Spielbetrieb."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"2. Mannschaft (Herren)"}),c.jsx(Wa,{children:"Die zweite Mannschaft strebt einen Platz unter den Top 3 an. Auch hier sind gezielte Fördermaßnahmen und eine stabile finanzielle Basis entscheidend, um das sportliche Potenzial voll auszuschöpfen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Damenmannschaft"}),c.jsx(Wa,{children:"Unsere Damen möchten sich in der Landesliga unter den besten drei Teams etablieren und ihren Bezirkspokal verteidigen. Die längeren Auswärtsfahrten in dieser Liga bringen erhöhte Reisekosten mit sich, für die wir gezielt Unterstützung suchen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Cheerleading"}),c.jsx(Wa,{children:"Das Cheerleading-Team plant die Teilnahme an mehreren Turnieren und benötigt dringend einen neuen Trikotsatz (Cheerleading-Uniformen). Auch hier sind Reisekosten ein wichtiger Faktor, um die Teilnahme an Wettbewerben zu ermöglichen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Fördergruppe / Jugend"}),c.jsx(Wa,{children:"Mit der Fördergruppe legen wir den Grundstein für den neuen Jugendfußball-Förderverein (JFV) Konstanz. Unser Ziel ist es, gezielt Talente zu fördern und ihnen durch qualifizierte Trainer optimale Entwicklungsmöglichkeiten zu bieten. Für die Finanzierung von Trainerfortbildungen und zusätzlichem Trainingsmaterial sind wir auf Unterstützung angewiesen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Vereinsziel: Langfristige Partnerschaften"}),c.jsx(Wa,{children:"Unser übergeordnetes Ziel ist es, langfristige Partner zu gewinnen, die uns sportlich wie wirtschaftlich begleiten und gemeinsam mit uns die Weiterentwicklung des Vereins in den kommenden Jahren aktiv mitgestalten möchten."})]})]}),c.jsxs(hm,{children:[c.jsx("b",{children:"Warum Ihre Unterstützung wichtig ist:"}),c.jsx("br",{}),"Die genannten Ziele sind nur mit einer soliden finanziellen Basis erreichbar. Ihre Förderung trägt dazu bei, Reisekosten zu decken, moderne Ausrüstung bereitzustellen und die sportliche Entwicklung aller Teams nachhaltig zu sichern. Sie investieren damit direkt in die Zukunft des Sports in Konstanz und in die Entwicklung junger Talente.",c.jsx("br",{}),c.jsx("br",{}),"Wir freuen uns, gemeinsam mit Ihnen diese Ziele zu verwirklichen!"]})]}),c.jsx(H2,{})]}),c.jsx(Oo,{})]})}const zS=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],ES=p.section`
  background: url("${Co("herren",1)}") center/cover;
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
`,TS=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,wS=p.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,AS=p.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,RS=p.main`
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
`,MS=p.section`
  margin-bottom: 4rem;
`,DS=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,OS=p.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,CS=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,BS=p.div`
  text-align: center;
  margin-bottom: 3rem;
`,NS=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,US=p.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,HS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,kS=p.div`
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
`,GS=p.div`
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
`,LS=p.div`
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
`,qS=p.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,YS=p.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,VS=p.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,XS=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,ZS=p.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,QS=p.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,KS=p.button`
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
`,JS=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,$S=p.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,WS=p.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,FS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Fa=p.div`
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
`,gm=p.div`
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
`,Pa=p.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ia=p.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,el=p.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,tl=p.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Re=p.li`
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
`,nl=p.button`
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
`,PS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,IS=p.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,e3=p.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,t3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Wc=p.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Fc=p.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Pc=p.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ic=p.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,n3=p.a`
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
`,a3=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,l3=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,i3=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,al=p.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ll=p.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,il=p.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function r3(){return c.jsxs(c.Fragment,{children:[c.jsx(ES,{children:c.jsxs(TS,{children:[c.jsx(wS,{children:"SCKW Jobbörse"}),c.jsx(AS,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),c.jsxs(RS,{children:[c.jsxs(MS,{children:[c.jsx(DS,{children:"Willkommen bei der SCKW Jobbörse"}),c.jsx(OS,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),c.jsxs(CS,{children:[c.jsxs(BS,{children:[c.jsx(NS,{children:"So könnte es aussehen"}),c.jsx(US,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),c.jsx(HS,{children:zS.map(i=>c.jsxs(kS,{children:[i.isExample&&c.jsx(GS,{children:"MUSTER"}),c.jsx(LS,{children:c.jsx(qS,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:u=>{u.currentTarget.style.display="none",u.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",u.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),c.jsx(YS,{children:i.title}),c.jsx(VS,{children:i.company}),c.jsx(XS,{children:i.tags.map((u,o)=>c.jsx(ZS,{children:u},o))}),c.jsx(QS,{children:i.description}),c.jsx(KS,{children:"Mehr erfahren"})]},i.id))})]}),c.jsxs(JS,{children:[c.jsx($S,{children:"Preise für Stellenausschreibungen"}),c.jsx(WS,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),c.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),c.jsxs(FS,{children:[c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Basis"}),c.jsx(Ia,{children:"149 €"}),c.jsx(el,{children:"netto / Anzeige"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),c.jsx(Re,{children:"Firmenlogo und Link"}),c.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),c.jsx(Re,{children:"Bewerbermanagement"})]}),c.jsx(nl,{className:"secondary",children:"Basis wählen"})]}),c.jsxs(Fa,{className:"popular",children:[c.jsx(gm,{children:"BELIEBT"}),c.jsx(Pa,{children:"Standard"}),c.jsx(Ia,{children:"229 €"}),c.jsx(el,{children:"netto / Anzeige"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Alle Basis-Features"}),c.jsx(Re,{children:"1 Social Media Post"}),c.jsx(Re,{children:"Instagram + Facebook Reichweite"}),c.jsx(Re,{children:"Newsletter-Erwähnung"})]}),c.jsx(nl,{children:"Standard wählen"})]}),c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Boosted"}),c.jsx(Ia,{children:"349 €"}),c.jsx(el,{children:"netto / Anzeige"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Alle Standard-Features"}),c.jsx(Re,{children:"Instagram Story"}),c.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),c.jsx(Re,{children:"Prioritäre Platzierung"})]}),c.jsx(nl,{className:"secondary",children:"Boosted wählen"})]})]}),c.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),c.jsxs(PS,{children:[c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Job Flat SMALL"}),c.jsx(Ia,{children:"799 €"}),c.jsx(el,{children:"netto / Jahr"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),c.jsx(Re,{children:"6 Social Media Posts"}),c.jsx(Re,{children:"Website-Präsenz"}),c.jsx(Re,{children:"Newsletter-Integration"})]}),c.jsx(nl,{className:"secondary",children:"Small Flat"})]}),c.jsxs(Fa,{className:"popular",children:[c.jsx(gm,{children:"EMPFOHLEN"}),c.jsx(Pa,{children:"Job Flat MEDIUM"}),c.jsx(Ia,{children:"1.199 €"}),c.jsx(el,{children:"netto / Jahr"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),c.jsx(Re,{children:"Stadionmagazin-Präsenz"}),c.jsx(Re,{children:"Social Media Posts"}),c.jsx(Re,{children:"Stories & Highlights"})]}),c.jsx(nl,{children:"Medium Flat"})]}),c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Job Flat PARTNER"}),c.jsx(Ia,{children:"1.499 €"}),c.jsx(el,{children:"netto / Jahr"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Unbegrenzte Anzeigen"}),c.jsx(Re,{children:"Erwähnung bei Heimspielen"}),c.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),c.jsx(Re,{children:"Prioritärer Support"})]}),c.jsx(nl,{className:"secondary",children:"Partner Flat"})]})]}),c.jsxs(IS,{children:[c.jsx(e3,{children:"➕ Zusatzoptionen"}),c.jsxs(t3,{children:[c.jsxs(Wc,{children:[c.jsx(Fc,{children:"Social Story"}),c.jsx(Pc,{children:"39 €"}),c.jsx(Ic,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),c.jsxs(Wc,{children:[c.jsx(Fc,{children:"Designservice"}),c.jsx(Pc,{children:"59 €"}),c.jsx(Ic,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),c.jsxs(Wc,{children:[c.jsx(Fc,{children:"Stadionmagazin"}),c.jsx(Pc,{children:"99 €"}),c.jsx(Ic,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),c.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:c.jsx(n3,{href:"mailto:grimm@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),c.jsxs(a3,{children:[c.jsx(l3,{children:"🎯 Warum SCKW Jobbörse?"}),c.jsxs(i3,{children:[c.jsxs(al,{children:[c.jsx(ll,{children:"🏠"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"👥"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"💰"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"📈"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"⚡"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"🤲"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),c.jsx(Oo,{})]})}const u3={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},s3={packages:u3},c3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`,o3=p.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid #e2e8f0;
`,f3=p.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,d3=p.div`
  margin-bottom: 1.5rem;
`,h3=p.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`,g3=p.div`
  width: 100%;
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
`,m3=p.div`
  width: ${i=>i.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #059669, #10b981);
  transition: width 0.3s ease;
`,p3=p.div`
  text-align: center;
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 0.5rem;
`,b3=p.div`
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
`,y3=p.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
`,v3=p.div`
  max-height: 200px;
  overflow-y: auto;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`,x3=p.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
`,S3=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`,j3=p.span`
  font-weight: 600;
  color: #059669;
`,_3=p.span`
  font-weight: 600;
  color: #374151;
`,z3=p.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,E3=p.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,T3=p.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,w3=()=>{const i=s3;return{kabinen:{current:i.packages.kabinen.current,goal:i.packages.kabinen.goal,donors:i.packages.kabinen.donors},fassade:{current:i.packages.fassade.current,goal:i.packages.fassade.goal,donors:i.packages.fassade.donors},waschkueche:{current:i.packages.waschkueche.current,goal:i.packages.waschkueche.goal,donors:i.packages.waschkueche.donors}}};function A3({data:i=w3(),realTime:u=!1}){const[o]=R.useState(i);R.useEffect(()=>{if(!u)return;const g=setInterval(()=>{console.log("Fetching donation updates...")},3e4);return()=>clearInterval(g)},[u]);const s=g=>{switch(g){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},d=g=>{switch(g){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return g}};return c.jsx(c3,{children:Object.entries(o).map(([g,b])=>{const j=b.current/b.goal*100;return c.jsxs(o3,{children:[c.jsxs(f3,{children:[s(g)," ",d(g)]}),c.jsxs(d3,{children:[c.jsxs(h3,{children:[c.jsxs("span",{children:[b.current.toLocaleString("de-DE")," €"]}),c.jsxs("span",{children:[b.goal.toLocaleString("de-DE")," €"]})]}),c.jsx(g3,{children:c.jsx(m3,{$progress:j})}),c.jsxs(p3,{children:[Math.round(j),"% erreicht"]})]}),c.jsxs(b3,{children:[c.jsxs(y3,{children:["💚 Unterstützer (",b.donors.length,")"]}),c.jsx(v3,{children:b.donors.length>0?b.donors.map((v,m)=>c.jsxs(x3,{children:[c.jsxs(S3,{children:[c.jsx(j3,{children:v.anonymous?"🕶️ Anonymous":v.name}),c.jsxs(_3,{children:[v.amount," €"]})]}),v.comment&&c.jsxs(z3,{children:['"',v.comment,'"']}),c.jsx(E3,{children:new Date(v.date).toLocaleDateString("de-DE")})]},m)):c.jsx(T3,{children:"Seien Sie der erste Spender! 🌟"})})]})]},g)})})}const R3=p.section`
  background: url("${Co("herren",18)}") center/cover;
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
`,M3=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,D3=p.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,O3=p.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,C3=p.main`
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
`,B3=p.section`
  margin-bottom: 4rem;
`,N3=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,U3=p.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,H3=p.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,k3=p.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,G3=p.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,L3=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,q3=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,Y3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,eo=p.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,to=p.div`
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
`,V3=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,X3=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${i=>i.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,Z3=p.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,Q3=p.div`
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
`,K3=p.div`
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
`,J3=p.div`
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
`,$3=p.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,W3=p.button`
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
`,mm=p.button`
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
`,no=p.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,ao=p.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,F3=p.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,P3=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,I3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,lo=p.div`
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
`,io=p.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,ro=p.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,uo=p.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,so=p.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,e5=p.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,t5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,n5=p.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,a5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Kr=p.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Jr=p.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,$r=p.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,l5=p.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,i5=p.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,r5=p.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,u5=p.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,pm=p.a`
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
`,rl=tp();function co({images:i,onImageClick:u}){const[o,s]=R.useState(0);return R.useEffect(()=>{if(i.length<=1)return;const d=setInterval(()=>{s(g=>(g+1)%i.length)},4e3);return()=>clearInterval(d)},[i.length]),i.length===0?c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):c.jsxs(V3,{children:[i.map((d,g)=>c.jsx(X3,{src:d.src,alt:d.alt,$isActive:g===o,onClick:()=>u(g)},g)),i.length>1&&c.jsx(Z3,{children:i.map((d,g)=>c.jsx(Q3,{$isActive:g===o,onClick:()=>s(g)},g))})]})}function s5({images:i,initialIndex:u,onClose:o}){const[s,d]=R.useState(u),g=()=>{d(j=>(j+1)%i.length)},b=()=>{d(j=>(j-1+i.length)%i.length)};return R.useEffect(()=>{const j=v=>{v.key==="Escape"&&o(),v.key==="ArrowRight"&&g(),v.key==="ArrowLeft"&&b()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[]),c.jsx(K3,{onClick:o,children:c.jsxs(J3,{onClick:j=>j.stopPropagation(),children:[c.jsx(W3,{onClick:o,children:"×"}),c.jsx($3,{src:i[s].src,alt:i[s].alt}),i.length>1&&c.jsxs(c.Fragment,{children:[c.jsx(mm,{$direction:"prev",onClick:b,children:"‹"}),c.jsx(mm,{$direction:"next",onClick:g,children:"›"})]})]})})}function c5(){const[i,u]=R.useState(!1),[o,s]=R.useState([]),[d,g]=R.useState(0),b=(j,v)=>{s(j),g(v),u(!0)};return c.jsxs(c.Fragment,{children:[c.jsx(R3,{children:c.jsxs(M3,{children:[c.jsx(D3,{children:"🏟️ Fürstenberg weiterentwickeln"}),c.jsx(O3,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),c.jsxs(C3,{children:[c.jsxs(B3,{children:[c.jsx(N3,{children:"Der Fürstenberg - unser Kultplatz"}),c.jsx(U3,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),c.jsxs(H3,{children:[c.jsx(k3,{children:"✨ Charme erhalten, Komfort verbessern"}),c.jsx(G3,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),c.jsxs(L3,{children:[c.jsx(q3,{children:"🔍 Wo wir ansetzen möchten"}),c.jsxs(Y3,{children:[c.jsxs(eo,{children:[c.jsx(to,{children:c.jsx(co,{images:rl.kabinen,onImageClick:j=>b(rl.kabinen,j)})}),c.jsx(no,{children:"🔧 Kabinen komfortabler gestalten"}),c.jsx(ao,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),c.jsxs(eo,{children:[c.jsx(to,{children:c.jsx(co,{images:rl.fassade,onImageClick:j=>b(rl.fassade,j)})}),c.jsx(no,{children:"🎨 Fassade & Fenster erneuern"}),c.jsx(ao,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),c.jsxs(eo,{children:[c.jsx(to,{children:c.jsx(co,{images:rl.waschkueche,onImageClick:j=>b(rl.waschkueche,j)})}),c.jsx(no,{children:"🧺 Waschküche auf Vordermann bringen"}),c.jsx(ao,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),c.jsxs(F3,{children:[c.jsx(P3,{children:"✨ Unsere Pläne für den Fürstenberg"}),c.jsxs(I3,{children:[c.jsxs(lo,{children:[c.jsx(io,{children:"🪑"}),c.jsx(ro,{children:"Kabinen sanieren"}),c.jsx(uo,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),c.jsx(so,{children:"~8.000 €"})]}),c.jsxs(lo,{children:[c.jsx(io,{children:"🎨"}),c.jsx(ro,{children:"Fassade & Fenster erneuern"}),c.jsx(uo,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),c.jsx(so,{children:"~15.000 €"})]}),c.jsxs(lo,{children:[c.jsx(io,{children:"🧺"}),c.jsx(ro,{children:"Waschküche modernisieren"}),c.jsx(uo,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),c.jsx(so,{children:"~5.000 €"})]})]})]}),c.jsxs(e5,{children:[c.jsx(t5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),c.jsx(n5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),c.jsxs(a5,{children:[c.jsxs(Kr,{children:[c.jsx(Jr,{children:"🏆"}),c.jsxs($r,{children:[c.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),c.jsxs(Kr,{children:[c.jsx(Jr,{children:"📄"}),c.jsxs($r,{children:[c.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),c.jsxs(Kr,{children:[c.jsx(Jr,{children:"📱"}),c.jsxs($r,{children:[c.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),c.jsxs(Kr,{children:[c.jsx(Jr,{children:"🎯"}),c.jsxs($r,{children:[c.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),c.jsxs(l5,{children:[c.jsx(i5,{children:"🤝 Gemeinsam für den Fürstenberg"}),c.jsx(r5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),c.jsx(A3,{realTime:!1}),c.jsxs(u5,{children:[c.jsx(pm,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),c.jsx(pm,{href:"mailto:grimm@sckw.de?subject=Sportplatz Renovierung - Bankverbindung&body=Hallo liebes SCKW-Team,%0A%0Aich möchte für die Sportplatz-Renovierung spenden und benötige die Bankverbindung.%0A%0AMein Name: %0AFirma: %0ASpendenhöhe: %0A%0ABitte senden Sie mir die Kontodaten zu.%0A%0AHerzliche Grüße",children:"🏦 Per Überweisung spenden"})]})]})]}),c.jsx(Oo,{}),i&&c.jsx(s5,{images:o,initialIndex:d,onClose:()=>u(!1)})]})}function o5(){return c.jsxs(Jy,{children:[c.jsx(fx,{}),c.jsxs(Ey,{children:[c.jsx(Wr,{path:"/",element:c.jsx(_S,{})}),c.jsx(Wr,{path:"/jobs",element:c.jsx(r3,{})}),c.jsx(Wr,{path:"/renovierung",element:c.jsx(c5,{})})]})]})}console.log("sckw sponsoring Website loaded");Bb.createRoot(document.getElementById("root")).render(c.jsx(R.StrictMode,{children:c.jsx(o5,{})}));
