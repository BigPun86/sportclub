(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function s(d){if(d.ep)return;d.ep=!0;const g=o(d);fetch(d.href,g)}})();function Eb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Mc={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function Tb(){if(Mg)return gi;Mg=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(s,d,g){var p=null;if(g!==void 0&&(p=""+g),d.key!==void 0&&(p=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:i,type:s,key:p,ref:d!==void 0?d:null,props:g}}return gi.Fragment=u,gi.jsx=o,gi.jsxs=o,gi}var Dg;function wb(){return Dg||(Dg=1,Mc.exports=Tb()),Mc.exports}var c=wb(),Dc={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Ab(){if(Og)return ie;Og=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),B=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=B&&x[B]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,q={};function X(x,N,L){this.props=x,this.context=N,this.refs=q,this.updater=L||k}X.prototype.isReactComponent={},X.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},X.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=X.prototype;function $(x,N,L){this.props=x,this.context=N,this.refs=q,this.updater=L||k}var Z=$.prototype=new H;Z.constructor=$,G(Z,X.prototype),Z.isPureReactComponent=!0;var ae=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(x,N,L,V,F,oe){return L=oe.ref,{$$typeof:i,type:x,key:N,ref:L!==void 0?L:null,props:oe}}function Te(x,N){return W(x.type,N,void 0,void 0,void 0,x.props)}function _e(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function nt(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return N[L]})}var lt=/\/+/g;function qe(x,N){return typeof x=="object"&&x!==null&&x.key!=null?nt(""+x.key):N.toString(36)}function Qt(){}function Kt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Qt,Qt):(x.status="pending",x.then(function(N){x.status==="pending"&&(x.status="fulfilled",x.value=N)},function(N){x.status==="pending"&&(x.status="rejected",x.reason=N)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ye(x,N,L,V,F){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(oe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case i:case u:ee=!0;break;case T:return ee=x._init,Ye(ee(x._payload),N,L,V,F)}}if(ee)return F=F(x),ee=V===""?"."+qe(x,0):V,ae(F)?(L="",ee!=null&&(L=ee.replace(lt,"$&/")+"/"),Ye(F,N,L,"",function(Pe){return Pe})):F!=null&&(_e(F)&&(F=Te(F,L+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(lt,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(x))for(var pe=0;pe<x.length;pe++)V=x[pe],oe=Ve+qe(V,pe),ee+=Ye(V,N,L,oe,F);else if(pe=U(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(V=x.next()).done;)V=V.value,oe=Ve+qe(V,pe++),ee+=Ye(V,N,L,oe,F);else if(oe==="object"){if(typeof x.then=="function")return Ye(Kt(x),N,L,V,F);throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function M(x,N,L){if(x==null)return x;var V=[],F=0;return Ye(x,V,"","",function(oe){return N.call(L,oe,F++)}),V}function Y(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ce(){}return ie.Children={map:M,forEach:function(x,N,L){M(x,function(){N.apply(this,arguments)},L)},count:function(x){var N=0;return M(x,function(){N++}),N},toArray:function(x){return M(x,function(N){return N})||[]},only:function(x){if(!_e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=X,ie.Fragment=o,ie.Profiler=d,ie.PureComponent=$,ie.StrictMode=s,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Q.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cloneElement=function(x,N,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=G({},x.props),F=x.key,oe=void 0;if(N!=null)for(ee in N.ref!==void 0&&(oe=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=L;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(x.type,F,void 0,void 0,oe,V)},ie.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},ie.createElement=function(x,N,L){var V,F={},oe=null;if(N!=null)for(V in N.key!==void 0&&(oe=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=L;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(x&&x.defaultProps)for(V in ee=x.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(x,oe,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:j,render:x}},ie.isValidElement=_e,ie.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:Y}},ie.memo=function(x,N){return{$$typeof:m,type:x,compare:N===void 0?null:N}},ie.startTransition=function(x){var N=Q.T,L={};Q.T=L;try{var V=x(),F=Q.S;F!==null&&F(L,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ce,P)}catch(oe){P(oe)}finally{Q.T=N}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(x){return Q.H.use(x)},ie.useActionState=function(x,N,L){return Q.H.useActionState(x,N,L)},ie.useCallback=function(x,N){return Q.H.useCallback(x,N)},ie.useContext=function(x){return Q.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,N){return Q.H.useDeferredValue(x,N)},ie.useEffect=function(x,N,L){var V=Q.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,N)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(x,N,L){return Q.H.useImperativeHandle(x,N,L)},ie.useInsertionEffect=function(x,N){return Q.H.useInsertionEffect(x,N)},ie.useLayoutEffect=function(x,N){return Q.H.useLayoutEffect(x,N)},ie.useMemo=function(x,N){return Q.H.useMemo(x,N)},ie.useOptimistic=function(x,N){return Q.H.useOptimistic(x,N)},ie.useReducer=function(x,N,L){return Q.H.useReducer(x,N,L)},ie.useRef=function(x){return Q.H.useRef(x)},ie.useState=function(x){return Q.H.useState(x)},ie.useSyncExternalStore=function(x,N,L){return Q.H.useSyncExternalStore(x,N,L)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.1.0",ie}var Cg;function xo(){return Cg||(Cg=1,Dc.exports=Ab()),Dc.exports}var R=xo();const ji=Eb(R);var Oc={exports:{}},mi={},Cc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Rb(){return Bg||(Bg=1,function(i){function u(M,Y){var P=M.length;M.push(Y);e:for(;0<P;){var ce=P-1>>>1,x=M[ce];if(0<d(x,Y))M[ce]=Y,M[P]=x,P=ce;else break e}}function o(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var Y=M[0],P=M.pop();if(P!==Y){M[0]=P;e:for(var ce=0,x=M.length,N=x>>>1;ce<N;){var L=2*(ce+1)-1,V=M[L],F=L+1,oe=M[F];if(0>d(V,P))F<x&&0>d(oe,V)?(M[ce]=oe,M[F]=P,ce=F):(M[ce]=V,M[L]=P,ce=L);else if(F<x&&0>d(oe,P))M[ce]=oe,M[F]=P,ce=F;else break e}}return Y}function d(M,Y){var P=M.sortIndex-Y.sortIndex;return P!==0?P:M.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;i.unstable_now=function(){return g.now()}}else{var p=Date,j=p.now();i.unstable_now=function(){return p.now()-j}}var v=[],m=[],T=1,B=null,U=3,k=!1,G=!1,q=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ae(M){for(var Y=o(m);Y!==null;){if(Y.callback===null)s(m);else if(Y.startTime<=M)s(m),Y.sortIndex=Y.expirationTime,u(v,Y);else break;Y=o(m)}}function Q(M){if(q=!1,ae(M),!G)if(o(v)!==null)G=!0,le||(le=!0,qe());else{var Y=o(m);Y!==null&&Ye(Q,Y.startTime-M)}}var le=!1,W=-1,Te=5,_e=-1;function nt(){return X?!0:!(i.unstable_now()-_e<Te)}function lt(){if(X=!1,le){var M=i.unstable_now();_e=M;var Y=!0;try{e:{G=!1,q&&(q=!1,$(W),W=-1),k=!0;var P=U;try{t:{for(ae(M),B=o(v);B!==null&&!(B.expirationTime>M&&nt());){var ce=B.callback;if(typeof ce=="function"){B.callback=null,U=B.priorityLevel;var x=ce(B.expirationTime<=M);if(M=i.unstable_now(),typeof x=="function"){B.callback=x,ae(M),Y=!0;break t}B===o(v)&&s(v),ae(M)}else s(v);B=o(v)}if(B!==null)Y=!0;else{var N=o(m);N!==null&&Ye(Q,N.startTime-M),Y=!1}}break e}finally{B=null,U=P,k=!1}Y=void 0}}finally{Y?qe():le=!1}}}var qe;if(typeof Z=="function")qe=function(){Z(lt)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Kt=Qt.port2;Qt.port1.onmessage=lt,qe=function(){Kt.postMessage(null)}}else qe=function(){H(lt,0)};function Ye(M,Y){W=H(function(){M(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(M){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var P=U;U=Y;try{return M()}finally{U=P}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var P=U;U=M;try{return Y()}finally{U=P}},i.unstable_scheduleCallback=function(M,Y,P){var ce=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ce+P:ce):P=ce,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,M={id:T++,callback:Y,priorityLevel:M,startTime:P,expirationTime:x,sortIndex:-1},P>ce?(M.sortIndex=P,u(m,M),o(v)===null&&M===o(m)&&(q?($(W),W=-1):q=!0,Ye(Q,P-ce))):(M.sortIndex=x,u(v,M),G||k||(G=!0,le||(le=!0,qe()))),M},i.unstable_shouldYield=nt,i.unstable_wrapCallback=function(M){var Y=U;return function(){var P=U;U=Y;try{return M.apply(this,arguments)}finally{U=P}}}}(Bc)),Bc}var Ng;function Mb(){return Ng||(Ng=1,Cc.exports=Rb()),Cc.exports}var Nc={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Db(){if(Ug)return tt;Ug=1;var i=xo();function u(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)m+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(v,m,T){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:B==null?null:""+B,children:v,containerInfo:m,implementation:T}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,tt.createPortal=function(v,m){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return g(v,m,null,T)},tt.flushSync=function(v){var m=p.T,T=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=T,s.d.f()}},tt.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},tt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},tt.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var T=m.as,B=j(T,m.crossOrigin),U=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;T==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:B,integrity:U,fetchPriority:k}):T==="script"&&s.d.X(v,{crossOrigin:B,integrity:U,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},tt.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var T=j(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(v)},tt.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var T=m.as,B=j(T,m.crossOrigin);s.d.L(v,T,{crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},tt.preloadModule=function(v,m){if(typeof v=="string")if(m){var T=j(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(v)},tt.requestFormReset=function(v){s.d.r(v)},tt.unstable_batchedUpdates=function(v,m){return v(m)},tt.useFormState=function(v,m,T){return p.H.useFormState(v,m,T)},tt.useFormStatus=function(){return p.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Hg;function Ob(){if(Hg)return Nc.exports;Hg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Nc.exports=Db(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Cb(){if(kg)return mi;kg=1;var i=Mb(),u=xo(),o=Ob();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(g(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return j(l),e;if(r===a)return j(l),t;r=r.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,h=l.child;h;){if(h===n){f=!0,n=l,a=r;break}if(h===a){f=!0,a=l,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=l;break}if(h===a){f=!0,a=r,n=l;break}h=h.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,B=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Qt=Symbol.for("react.client.reference");function Kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case X:return"Profiler";case q:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Kt(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Kt(e(t))}catch{}}return null}var Ye=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ce=[],x=-1;function N(e){return{current:e}}function L(e){0>x||(e.current=ce[x],ce[x]=null,x--)}function V(e,t){x++,ce[x]=e.current,e.current=t}var F=N(null),oe=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(oe,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lg(t),e=ig(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(F),V(F,e)}function Pe(){L(F),L(oe),L(ee)}function Ln(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=ig(t,e.type);t!==n&&(V(oe,e),V(F,n))}function Jt(e){oe.current===e&&(L(F),L(oe)),Ve.current===e&&(L(Ve),ci._currentValue=P)}var St=Object.prototype.hasOwnProperty,bu=i.unstable_scheduleCallback,yu=i.unstable_cancelCallback,ap=i.unstable_shouldYield,lp=i.unstable_requestPaint,kt=i.unstable_now,ip=i.unstable_getCurrentPriorityLevel,Ho=i.unstable_ImmediatePriority,ko=i.unstable_UserBlockingPriority,Ai=i.unstable_NormalPriority,rp=i.unstable_LowPriority,Go=i.unstable_IdlePriority,up=i.log,sp=i.unstable_setDisableYieldValue,bl=null,ft=null;function mn(e){if(typeof up=="function"&&sp(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(bl,e)}catch{}}var dt=Math.clz32?Math.clz32:fp,cp=Math.log,op=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(cp(e)/op|0)|0}var Ri=256,Mi=4194304;function qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=qn(a):(f&=h,f!==0?l=qn(f):n||(n=h&~e,n!==0&&(l=qn(n))))):(h=a&~r,h!==0?l=qn(h):f!==0?l=qn(f):n||(n=a&~e,n!==0&&(l=qn(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function dp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lo(){var e=Ri;return Ri<<=1,(Ri&4194048)===0&&(Ri=256),e}function qo(){var e=Mi;return Mi<<=1,(Mi&62914560)===0&&(Mi=4194304),e}function vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hp(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,E=e.hiddenUpdates;for(n=f&~n;0<n;){var D=31-dt(n),C=1<<D;h[D]=0,y[D]=-1;var w=E[D];if(w!==null)for(E[D]=null,D=0;D<w.length;D++){var A=w[D];A!==null&&(A.lane&=-536870913)}n&=~C}a!==0&&Yo(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Yo(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function xu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xo(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:zg(e.type))}function gp(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var pn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+pn,it="__reactProps$"+pn,sa="__reactContainer$"+pn,ju="__reactEvents$"+pn,mp="__reactListeners$"+pn,pp="__reactHandles$"+pn,Zo="__reactResources$"+pn,xl="__reactMarker$"+pn;function _u(e){delete e[Ie],delete e[it],delete e[ju],delete e[mp],delete e[pp]}function ca(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sa]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cg(e);e!==null;){if(n=e[Ie])return n;e=cg(e)}return t}e=n,n=e.parentNode}return null}function oa(e){if(e=e[Ie]||e[sa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function fa(e){var t=e[Zo];return t||(t=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[xl]=!0}var Qo=new Set,Ko={};function Yn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Ko[e]=t,e=0;e<t.length;e++)Qo.add(t[e])}var bp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jo={},$o={};function yp(e){return St.call($o,e)?!0:St.call(Jo,e)?!1:bp.test(e)?$o[e]=!0:(Jo[e]=!0,!1)}function Oi(e,t,n){if(yp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function $t(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var zu,Wo;function ha(e){if(zu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||"",Wo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zu+e+Wo}var Eu=!1;function Tu(e,t){if(!e||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(A){var w=A}Reflect.construct(e,[],C)}else{try{C.call()}catch(A){w=A}e.call(C.prototype)}}else{try{throw Error()}catch(A){w=A}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(A){if(A&&w&&typeof A.stack=="string")return[A.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var y=f.split(`
`),E=h.split(`
`);for(l=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(a===y.length||l===E.length)for(a=y.length-1,l=E.length-1;1<=a&&0<=l&&y[a]!==E[l];)l--;for(;1<=a&&0<=l;a--,l--)if(y[a]!==E[l]){if(a!==1||l!==1)do if(a--,l--,0>l||y[a]!==E[l]){var D=`
`+y[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=l);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function vp(e){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return Tu(e.type,!1);case 11:return Tu(e.type.render,!1);case 1:return Tu(e.type,!0);case 31:return ha("Activity");default:return""}}function Fo(e){try{var t="";do t+=vp(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Po(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xp(e){var t=Po(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=xp(e))}function Io(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Po(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sp=/[\n"\\]/g;function _t(e){return e.replace(Sp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wu(e,t,n,a,l,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Au(e,f,jt(t)):n!=null?Au(e,f,jt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function ef(e,t,n,a,l,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Au(e,t,n){t==="number"&&Ni(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ga(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function tf(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function nf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Ye(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function af(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||jp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function lf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&af(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&af(e,r,t[r])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _p=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(e){return zp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,ba=null;function rf(e){var t=oa(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(wu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[it]||null;if(!l)throw Error(s(90));wu(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Io(a)}break e;case"textarea":tf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ga(e,!!n.multiple,t,!1)}}}var Ou=!1;function uf(e,t,n){if(Ou)return e(t,n);Ou=!0;try{var a=e(t);return a}finally{if(Ou=!1,(pa!==null||ba!==null)&&(Sr(),pa&&(t=pa,e=ba,ba=pa=null,rf(t),e)))for(t=0;t<e.length;t++)rf(e[t])}}function jl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[it]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(Wt)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Cu=!1}var bn=null,Bu=null,Hi=null;function sf(){if(Hi)return Hi;var e,t=Bu,n=t.length,a,l="value"in bn?bn.value:bn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return Hi=l.slice(e,1<a?1-a:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function cf(){return!1}function rt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Gi:cf,this.isPropagationStopped=cf,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=rt(Vn),zl=T({},Vn,{view:0,detail:0}),Ep=rt(zl),Nu,Uu,El,qi=T({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(Nu=e.screenX-El.screenX,Uu=e.screenY-El.screenY):Uu=Nu=0,El=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),of=rt(qi),Tp=T({},qi,{dataTransfer:0}),wp=rt(Tp),Ap=T({},zl,{relatedTarget:0}),Hu=rt(Ap),Rp=T({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mp=rt(Rp),Dp=T({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=rt(Dp),Cp=T({},Vn,{data:0}),ff=rt(Cp),Bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Up[e])?!!t[e]:!1}function ku(){return Hp}var kp=T({},zl,{key:function(e){if(e.key){var t=Bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=rt(kp),Lp=T({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=rt(Lp),qp=T({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),Yp=rt(qp),Vp=T({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=rt(Vp),Zp=T({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=rt(Zp),Kp=T({},Vn,{newState:0,oldState:0}),Jp=rt(Kp),$p=[9,13,27,32],Gu=Wt&&"CompositionEvent"in window,Tl=null;Wt&&"documentMode"in document&&(Tl=document.documentMode);var Wp=Wt&&"TextEvent"in window&&!Tl,hf=Wt&&(!Gu||Tl&&8<Tl&&11>=Tl),gf=" ",mf=!1;function pf(e,t){switch(e){case"keyup":return $p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function Fp(e,t){switch(e){case"compositionend":return bf(t);case"keypress":return t.which!==32?null:(mf=!0,gf);case"textInput":return e=t.data,e===gf&&mf?null:e;default:return null}}function Pp(e,t){if(ya)return e==="compositionend"||!Gu&&pf(e,t)?(e=sf(),Hi=Bu=bn=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hf&&t.locale!=="ko"?null:t.data;default:return null}}var Ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ip[e.type]:t==="textarea"}function vf(e,t,n,a){pa?ba?ba.push(a):ba=[a]:pa=a,t=wr(t,"onChange"),0<t.length&&(n=new Li("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var wl=null,Al=null;function e1(e){Ih(e,0)}function Yi(e){var t=Sl(e);if(Io(t))return e}function xf(e,t){if(e==="change")return t}var Sf=!1;if(Wt){var Lu;if(Wt){var qu="oninput"in document;if(!qu){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),qu=typeof jf.oninput=="function"}Lu=qu}else Lu=!1;Sf=Lu&&(!document.documentMode||9<document.documentMode)}function _f(){wl&&(wl.detachEvent("onpropertychange",zf),Al=wl=null)}function zf(e){if(e.propertyName==="value"&&Yi(Al)){var t=[];vf(t,Al,e,Du(e)),uf(e1,t)}}function t1(e,t,n){e==="focusin"?(_f(),wl=t,Al=n,wl.attachEvent("onpropertychange",zf)):e==="focusout"&&_f()}function n1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Al)}function a1(e,t){if(e==="click")return Yi(t)}function l1(e,t){if(e==="input"||e==="change")return Yi(t)}function i1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:i1;function Rl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!St.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function Ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tf(e,t){var n=Ef(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ni(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ni(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var r1=Wt&&"documentMode"in document&&11>=document.documentMode,va=null,Vu=null,Ml=null,Xu=!1;function Rf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||va==null||va!==Ni(a)||(a=va,"selectionStart"in a&&Yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ml&&Rl(Ml,a)||(Ml=a,a=wr(Vu,"onSelect"),0<a.length&&(t=new Li("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xa={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Zu={},Mf={};Wt&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Zn(e){if(Zu[e])return Zu[e];if(!xa[e])return e;var t=xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mf)return Zu[e]=t[n];return e}var Df=Zn("animationend"),Of=Zn("animationiteration"),Cf=Zn("animationstart"),u1=Zn("transitionrun"),s1=Zn("transitionstart"),c1=Zn("transitioncancel"),Bf=Zn("transitionend"),Nf=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Ot(e,t){Nf.set(e,t),Yn(t,[e])}var Uf=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var n=Uf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Fo(t)},Uf.set(e,t),t)}return{value:e,source:t,stack:Fo(t)}}var Et=[],Sa=0,Ku=0;function Vi(){for(var e=Sa,t=Ku=Sa=0;t<e;){var n=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var r=Et[t];if(Et[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Hf(n,l,r)}}function Xi(e,t,n,a){Et[Sa++]=e,Et[Sa++]=t,Et[Sa++]=n,Et[Sa++]=a,Ku|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ju(e,t,n,a){return Xi(e,t,n,a),Zi(e)}function ja(e,t){return Xi(e,null,null,t),Zi(e)}function Hf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-dt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function Zi(e){if(50<ti)throw ti=0,ec=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _a={};function o1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,a){return new o1(e,t,n,a)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function kf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")$u(e)&&(f=1);else if(typeof e=="string")f=db(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=gt(31,n,t,l),e.elementType=_e,e.lanes=r,e;case G:return Qn(n.children,l,r,t);case q:f=8,l|=24;break;case X:return e=gt(12,n,t,l|2),e.elementType=X,e.lanes=r,e;case Q:return e=gt(13,n,t,l),e.elementType=Q,e.lanes=r,e;case le:return e=gt(19,n,t,l),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case Z:f=10;break e;case $:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Te:f=16,a=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=gt(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function Qn(e,t,n,a){return e=gt(7,e,a,t),e.lanes=n,e}function Wu(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Fu(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var za=[],Ea=0,Ki=null,Ji=0,Tt=[],wt=0,Kn=null,Pt=1,It="";function Jn(e,t){za[Ea++]=Ji,za[Ea++]=Ki,Ki=e,Ji=t}function Gf(e,t,n){Tt[wt++]=Pt,Tt[wt++]=It,Tt[wt++]=Kn,Kn=e;var a=Pt;e=It;var l=32-dt(a)-1;a&=~(1<<l),n+=1;var r=32-dt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,Pt=1<<32-dt(t)+l|n<<l|a,It=r+e}else Pt=1<<r|n<<l|a,It=e}function Pu(e){e.return!==null&&(Jn(e,1),Gf(e,1,0))}function Iu(e){for(;e===Ki;)Ki=za[--Ea],za[Ea]=null,Ji=za[--Ea],za[Ea]=null;for(;e===Kn;)Kn=Tt[--wt],Tt[wt]=null,It=Tt[--wt],Tt[wt]=null,Pt=Tt[--wt],Tt[wt]=null}var at=null,Oe=null,me=!1,$n=null,Gt=!1,es=Error(s(519));function Wn(e){var t=Error(s(418,""));throw Cl(zt(t,e)),es}function Lf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[it]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ai.length;n++)de(ai[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),ef(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Bi(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),nf(t,a.value,a.defaultValue,a.children),Bi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||ag(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Ar),t=!0):t=!1,t||Wn(e)}function qf(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:at=at.return}}function Dl(e){if(e!==at)return!1;if(!me)return qf(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pc(e.type,e.memoizedProps)),n=!n),n&&Oe&&Wn(e),qf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,Cn(e.type)?(e=xc,xc=null,Oe=e):Oe=t):Oe=at?Bt(e.stateNode.nextSibling):null;return!0}function Ol(){Oe=at=null,me=!1}function Yf(){var e=$n;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),$n=null),e}function Cl(e){$n===null?$n=[e]:$n.push(e)}var ts=N(null),Fn=null,en=null;function yn(e,t,n){V(ts,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=ts.current,L(ts)}function ns(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function as(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var y=0;y<t.length;y++)if(h.context===t[y]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ns(r.return,n,e),a||(f=null);break e}r=h.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(s(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),ns(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Bl(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=l.type;ht(l.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(l===Ve.current){if(f=l.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ci):e=[ci])}l=l.return}e!==null&&as(t,e,n,a),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Vf(Fn,e)}function Wi(e,t){return Fn===null&&Pn(e),Vf(e,t)}function Vf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(s(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var f1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},d1=i.unstable_scheduleCallback,h1=i.unstable_NormalPriority,Ge={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ls(){return{controller:new f1,data:new Map,refCount:0}}function Nl(e){e.refCount--,e.refCount===0&&d1(h1,function(){e.controller.abort()})}var Ul=null,is=0,Ta=0,wa=null;function g1(e,t){if(Ul===null){var n=Ul=[];is=0,Ta=uc(),wa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return is++,t.then(Xf,Xf),t}function Xf(){if(--is===0&&Ul!==null){wa!==null&&(wa.status="fulfilled");var e=Ul;Ul=null,Ta=0,wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function m1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Zf=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&g1(e,t),Zf!==null&&Zf(e,t)};var In=N(null);function rs(){var e=In.current;return e!==null?e:Ee.pooledCache}function Fi(e,t){t===null?V(In,In.current):V(In,t.pool)}function Qf(){var e=rs();return e===null?null:{parent:Ge._currentValue,pool:e}}var Hl=Error(s(460)),Kf=Error(s(474)),Pi=Error(s(542)),us={then:function(){}};function Jf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ii(){}function $f(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ff(e),e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ff(e),e}throw kl=t,Hl}}var kl=null;function Wf(){if(kl===null)throw Error(s(459));var e=kl;return kl=null,e}function Ff(e){if(e===Hl||e===Pi)throw Error(s(483))}var vn=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Zi(e),Hf(e,null,n),t}return Xi(e,a,t,n),Zi(e)}function Gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vo(e,n)}}function os(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fs=!1;function Ll(){if(fs){var e=wa;if(e!==null)throw e}}function ql(e,t,n,a){fs=!1;var l=e.updateQueue;vn=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var y=h,E=y.next;y.next=null,f===null?r=E:f.next=E,f=y;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==f&&(h===null?D.firstBaseUpdate=E:h.next=E,D.lastBaseUpdate=y))}if(r!==null){var C=l.baseState;f=0,D=E=y=null,h=r;do{var w=h.lane&-536870913,A=w!==h.lane;if(A?(he&w)===w:(a&w)===w){w!==0&&w===Ta&&(fs=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;w=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){C=ne.call(je,C,w);break e}C=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,w=typeof ne=="function"?ne.call(je,C,w):ne,w==null)break e;C=T({},C,w);break e;case 2:vn=!0}}w=h.callback,w!==null&&(e.flags|=64,A&&(e.flags|=8192),A=l.callbacks,A===null?l.callbacks=[w]:A.push(w))}else A={lane:w,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(E=D=A,y=C):D=D.next=A,f|=w;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;A=h,h=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);D===null&&(y=C),l.baseState=y,l.firstBaseUpdate=E,l.lastBaseUpdate=D,r===null&&(l.shared.lanes=0),Rn|=f,e.lanes=f,e.memoizedState=C}}function Pf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function If(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Pf(n[e],t)}var Aa=N(null),er=N(0);function ed(e,t){e=cn,V(er,e),V(Aa,t),cn=e|t.baseLanes}function ds(){V(er,cn),V(Aa,Aa.current)}function hs(){cn=er.current,L(Aa),L(er)}var jn=0,ue=null,xe=null,Ue=null,tr=!1,Ra=!1,ea=!1,nr=0,Yl=0,Ma=null,p1=0;function Be(){throw Error(s(321))}function gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function ms(e,t,n,a,l,r){return jn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Hd:kd,ea=!1,r=n(a,l),ea=!1,Ra&&(r=nd(t,n,a,l)),td(e),r}function td(e){M.H=sr;var t=xe!==null&&xe.next!==null;if(jn=0,Ue=xe=ue=null,tr=!1,Yl=0,Ma=null,t)throw Error(s(300));e===null||Ze||(e=e.dependencies,e!==null&&$i(e)&&(Ze=!0))}function nd(e,t,n,a){ue=e;var l=0;do{if(Ra&&(Ma=null),Yl=0,Ra=!1,25<=l)throw Error(s(301));if(l+=1,Ue=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}M.H=_1,r=t(n,a)}while(Ra);return r}function b1(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Vl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ue.flags|=1024),t}function ps(){var e=nr!==0;return nr=0,e}function bs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ys(e){if(tr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tr=!1}jn=0,Ue=xe=ue=null,Ra=!1,Yl=nr=0,Ma=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function He(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function vs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(e){var t=Yl;return Yl+=1,Ma===null&&(Ma=[]),e=$f(Ma,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Hd:kd),e}function ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vl(e);if(e.$$typeof===Z)return et(e)}throw Error(s(438,String(e)))}function xs(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vs(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=nt;return t.index++,n}function nn(e,t){return typeof t=="function"?t(e):t}function lr(e){var t=He();return Ss(t,xe,e)}function Ss(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=f=null,y=null,E=t,D=!1;do{var C=E.lane&-536870913;if(C!==E.lane?(he&C)===C:(jn&C)===C){var w=E.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),C===Ta&&(D=!0);else if((jn&w)===w){E=E.next,w===Ta&&(D=!0);continue}else C={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=C,f=r):y=y.next=C,ue.lanes|=w,Rn|=w;C=E.action,ea&&n(r,C),r=E.hasEagerState?E.eagerState:n(r,C)}else w={lane:C,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=w,f=r):y=y.next=w,ue.lanes|=C,Rn|=C;E=E.next}while(E!==null&&E!==t);if(y===null?f=r:y.next=h,!ht(r,e.memoizedState)&&(Ze=!0,D&&(n=wa,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=y,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function js(e){var t=He(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);ht(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function ad(e,t,n){var a=ue,l=He(),r=me;if(r){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!ht((xe||l).memoizedState,n);f&&(l.memoizedState=n,Ze=!0),l=l.queue;var h=rd.bind(null,a,l,e);if(Xl(2048,8,h,[e]),l.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,Da(9,ir(),id.bind(null,a,l,n,t),null),Ee===null)throw Error(s(349));r||(jn&124)!==0||ld(a,t,n)}return n}function ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=vs(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function id(e,t,n,a){t.value=n,t.getSnapshot=a,ud(t)&&sd(e)}function rd(e,t,n){return n(function(){ud(t)&&sd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function sd(e){var t=ja(e,2);t!==null&&vt(t,e,2)}function _s(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),ea){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function cd(e,t,n,a){return e.baseState=n,Ss(e,xe,typeof a=="function"?a:nn)}function y1(e,t,n,a,l){if(ur(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};M.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,od(t,r)):(r.next=n.next,t.pending=n.next=r)}}function od(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=M.T,f={};M.T=f;try{var h=n(l,a),y=M.S;y!==null&&y(f,h),fd(e,t,h)}catch(E){zs(e,t,E)}finally{M.T=r}}else try{r=n(l,a),fd(e,t,r)}catch(E){zs(e,t,E)}}function fd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){dd(e,t,a)},function(a){return zs(e,t,a)}):dd(e,t,n)}function dd(e,t,n){t.status="fulfilled",t.value=n,hd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,od(e,n)))}function zs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,hd(t),t=t.next;while(t!==a)}e.action=null}function hd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gd(e,t){return t}function md(e,t){if(me){var n=Ee.formState;if(n!==null){e:{var a=ue;if(me){if(Oe){t:{for(var l=Oe,r=Gt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Bt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Oe=Bt(l.nextSibling),a=l.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gd,lastRenderedState:t},n.queue=a,n=Bd.bind(null,ue,a),a.dispatch=n,a=_s(!1),r=Rs.bind(null,ue,!1,a.queue),a=ut(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=y1.bind(null,ue,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function pd(e){var t=He();return bd(t,xe,e)}function bd(e,t,n){if(t=Ss(e,t,gd)[0],e=lr(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Vl(t)}catch(f){throw f===Hl?Pi:f}else a=t;t=He();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Da(9,ir(),v1.bind(null,l,n),null)),[a,r,e]}function v1(e,t){e.action=t}function yd(e){var t=He(),n=xe;if(n!==null)return bd(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Da(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=vs(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ir(){return{destroy:void 0,resource:void 0}}function vd(){return He().memoizedState}function rr(e,t,n,a){var l=ut();a=a===void 0?null:a,ue.flags|=e,l.memoizedState=Da(1|t,ir(),n,a)}function Xl(e,t,n,a){var l=He();a=a===void 0?null:a;var r=l.memoizedState.inst;xe!==null&&a!==null&&gs(a,xe.memoizedState.deps)?l.memoizedState=Da(t,r,n,a):(ue.flags|=e,l.memoizedState=Da(1|t,r,n,a))}function xd(e,t){rr(8390656,8,e,t)}function Sd(e,t){Xl(2048,8,e,t)}function jd(e,t){return Xl(4,2,e,t)}function _d(e,t){return Xl(4,4,e,t)}function zd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ed(e,t,n){n=n!=null?n.concat([e]):null,Xl(4,4,zd.bind(null,t,e),n)}function Es(){}function Td(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&gs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function wd(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&gs(t,a[1]))return a[0];if(a=e(),ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function Ts(e,t,n){return n===void 0||(jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Mh(),ue.lanes|=e,Rn|=e,n)}function Ad(e,t,n,a){return ht(n,t)?n:Aa.current!==null?(e=Ts(e,n,a),ht(e,t)||(Ze=!0),e):(jn&42)===0?(Ze=!0,e.memoizedState=n):(e=Mh(),ue.lanes|=e,Rn|=e,t)}function Rd(e,t,n,a,l){var r=Y.p;Y.p=r!==0&&8>r?r:8;var f=M.T,h={};M.T=h,Rs(e,!1,t,n);try{var y=l(),E=M.S;if(E!==null&&E(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var D=m1(y,a);Zl(e,t,D,yt(e))}else Zl(e,t,a,yt(e))}catch(C){Zl(e,t,{then:function(){},status:"rejected",reason:C},yt())}finally{Y.p=r,M.T=f}}function x1(){}function ws(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=Md(e).queue;Rd(e,l,t,P,n===null?x1:function(){return Dd(e),n(a)})}function Md(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dd(e){var t=Md(e).next.queue;Zl(e,t,{},yt())}function As(){return et(ci)}function Od(){return He().memoizedState}function Cd(){return He().memoizedState}function S1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=xn(n);var a=Sn(t,e,n);a!==null&&(vt(a,t,n),Gl(a,t,n)),t={cache:ls()},e.payload=t;return}t=t.return}}function j1(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ur(e)?Nd(t,n):(n=Ju(e,t,n,a),n!==null&&(vt(n,e,a),Ud(n,t,a)))}function Bd(e,t,n){var a=yt();Zl(e,t,n,a)}function Zl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ur(e))Nd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(l.hasEagerState=!0,l.eagerState=h,ht(h,f))return Xi(e,t,l,0),Ee===null&&Vi(),!1}catch{}finally{}if(n=Ju(e,t,l,a),n!==null)return vt(n,e,a),Ud(n,t,a),!0}return!1}function Rs(e,t,n,a){if(a={lane:2,revertLane:uc(),action:a,hasEagerState:!1,eagerState:null,next:null},ur(e)){if(t)throw Error(s(479))}else t=Ju(e,n,a,2),t!==null&&vt(t,e,2)}function ur(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Nd(e,t){Ra=tr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ud(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vo(e,n)}}var sr={readContext:et,use:ar,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Hd={readContext:et,use:ar,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:xd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rr(4194308,4,zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rr(4194308,4,e,t)},useInsertionEffect:function(e,t){rr(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var l=n(t);if(ea){mn(!0);try{n(t)}finally{mn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=j1.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=_s(e);var t=e.queue,n=Bd.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Es,useDeferredValue:function(e,t){var n=ut();return Ts(n,e,t)},useTransition:function(){var e=_s(!1);return e=Rd.bind(null,ue,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,l=ut();if(me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ee===null)throw Error(s(349));(he&124)!==0||ld(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,xd(rd.bind(null,a,r,e),[e]),a.flags|=2048,Da(9,ir(),id.bind(null,a,r,n,t),null),n},useId:function(){var e=ut(),t=Ee.identifierPrefix;if(me){var n=It,a=Pt;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=p1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:As,useFormState:md,useActionState:md,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:xs,useCacheRefresh:function(){return ut().memoizedState=S1.bind(null,ue)}},kd={readContext:et,use:ar,useCallback:Td,useContext:et,useEffect:Sd,useImperativeHandle:Ed,useInsertionEffect:jd,useLayoutEffect:_d,useMemo:wd,useReducer:lr,useRef:vd,useState:function(){return lr(nn)},useDebugValue:Es,useDeferredValue:function(e,t){var n=He();return Ad(n,xe.memoizedState,e,t)},useTransition:function(){var e=lr(nn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:ad,useId:Od,useHostTransitionStatus:As,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=He();return cd(n,xe,e,t)},useMemoCache:xs,useCacheRefresh:Cd},_1={readContext:et,use:ar,useCallback:Td,useContext:et,useEffect:Sd,useImperativeHandle:Ed,useInsertionEffect:jd,useLayoutEffect:_d,useMemo:wd,useReducer:js,useRef:vd,useState:function(){return js(nn)},useDebugValue:Es,useDeferredValue:function(e,t){var n=He();return xe===null?Ts(n,e,t):Ad(n,xe.memoizedState,e,t)},useTransition:function(){var e=js(nn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:ad,useId:Od,useHostTransitionStatus:As,useFormState:yd,useActionState:yd,useOptimistic:function(e,t){var n=He();return xe!==null?cd(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xs,useCacheRefresh:Cd},Oa=null,Ql=0;function cr(e){var t=Ql;return Ql+=1,Oa===null&&(Oa=[]),$f(Oa,e,t)}function Kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function or(e,t){throw t.$$typeof===B?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gd(e){var t=e._init;return t(e._payload)}function Ld(e){function t(_,S){if(e){var z=_.deletions;z===null?(_.deletions=[S],_.flags|=16):z.push(S)}}function n(_,S){if(!e)return null;for(;S!==null;)t(_,S),S=S.sibling;return null}function a(_){for(var S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function l(_,S){return _=Ft(_,S),_.index=0,_.sibling=null,_}function r(_,S,z){return _.index=z,e?(z=_.alternate,z!==null?(z=z.index,z<S?(_.flags|=67108866,S):z):(_.flags|=67108866,S)):(_.flags|=1048576,S)}function f(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function h(_,S,z,O){return S===null||S.tag!==6?(S=Wu(z,_.mode,O),S.return=_,S):(S=l(S,z),S.return=_,S)}function y(_,S,z,O){var K=z.type;return K===G?D(_,S,z.props.children,O,z.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Gd(K)===S.type)?(S=l(S,z.props),Kl(S,z),S.return=_,S):(S=Qi(z.type,z.key,z.props,null,_.mode,O),Kl(S,z),S.return=_,S)}function E(_,S,z,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=Fu(z,_.mode,O),S.return=_,S):(S=l(S,z.children||[]),S.return=_,S)}function D(_,S,z,O,K){return S===null||S.tag!==7?(S=Qn(z,_.mode,O,K),S.return=_,S):(S=l(S,z),S.return=_,S)}function C(_,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Wu(""+S,_.mode,z),S.return=_,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return z=Qi(S.type,S.key,S.props,null,_.mode,z),Kl(z,S),z.return=_,z;case k:return S=Fu(S,_.mode,z),S.return=_,S;case Te:var O=S._init;return S=O(S._payload),C(_,S,z)}if(Ye(S)||qe(S))return S=Qn(S,_.mode,z,null),S.return=_,S;if(typeof S.then=="function")return C(_,cr(S),z);if(S.$$typeof===Z)return C(_,Wi(_,S),z);or(_,S)}return null}function w(_,S,z,O){var K=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:h(_,S,""+z,O);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case U:return z.key===K?y(_,S,z,O):null;case k:return z.key===K?E(_,S,z,O):null;case Te:return K=z._init,z=K(z._payload),w(_,S,z,O)}if(Ye(z)||qe(z))return K!==null?null:D(_,S,z,O,null);if(typeof z.then=="function")return w(_,S,cr(z),O);if(z.$$typeof===Z)return w(_,S,Wi(_,z),O);or(_,z)}return null}function A(_,S,z,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return _=_.get(z)||null,h(S,_,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return _=_.get(O.key===null?z:O.key)||null,y(S,_,O,K);case k:return _=_.get(O.key===null?z:O.key)||null,E(S,_,O,K);case Te:var se=O._init;return O=se(O._payload),A(_,S,z,O,K)}if(Ye(O)||qe(O))return _=_.get(z)||null,D(S,_,O,K,null);if(typeof O.then=="function")return A(_,S,z,cr(O),K);if(O.$$typeof===Z)return A(_,S,z,Wi(S,O),K);or(S,O)}return null}function ne(_,S,z,O){for(var K=null,se=null,J=S,te=S=0,Ke=null;J!==null&&te<z.length;te++){J.index>te?(Ke=J,J=null):Ke=J.sibling;var ge=w(_,J,z[te],O);if(ge===null){J===null&&(J=Ke);break}e&&J&&ge.alternate===null&&t(_,J),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge,J=Ke}if(te===z.length)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;te<z.length;te++)J=C(_,z[te],O),J!==null&&(S=r(J,S,te),se===null?K=J:se.sibling=J,se=J);return me&&Jn(_,te),K}for(J=a(J);te<z.length;te++)Ke=A(J,_,te,z[te],O),Ke!==null&&(e&&Ke.alternate!==null&&J.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),se===null?K=Ke:se.sibling=Ke,se=Ke);return e&&J.forEach(function(kn){return t(_,kn)}),me&&Jn(_,te),K}function I(_,S,z,O){if(z==null)throw Error(s(151));for(var K=null,se=null,J=S,te=S=0,Ke=null,ge=z.next();J!==null&&!ge.done;te++,ge=z.next()){J.index>te?(Ke=J,J=null):Ke=J.sibling;var kn=w(_,J,ge.value,O);if(kn===null){J===null&&(J=Ke);break}e&&J&&kn.alternate===null&&t(_,J),S=r(kn,S,te),se===null?K=kn:se.sibling=kn,se=kn,J=Ke}if(ge.done)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;!ge.done;te++,ge=z.next())ge=C(_,ge.value,O),ge!==null&&(S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return me&&Jn(_,te),K}for(J=a(J);!ge.done;te++,ge=z.next())ge=A(J,_,te,ge.value,O),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?te:ge.key),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return e&&J.forEach(function(zb){return t(_,zb)}),me&&Jn(_,te),K}function je(_,S,z,O){if(typeof z=="object"&&z!==null&&z.type===G&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case U:e:{for(var K=z.key;S!==null;){if(S.key===K){if(K=z.type,K===G){if(S.tag===7){n(_,S.sibling),O=l(S,z.props.children),O.return=_,_=O;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Gd(K)===S.type){n(_,S.sibling),O=l(S,z.props),Kl(O,z),O.return=_,_=O;break e}n(_,S);break}else t(_,S);S=S.sibling}z.type===G?(O=Qn(z.props.children,_.mode,O,z.key),O.return=_,_=O):(O=Qi(z.type,z.key,z.props,null,_.mode,O),Kl(O,z),O.return=_,_=O)}return f(_);case k:e:{for(K=z.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(_,S.sibling),O=l(S,z.children||[]),O.return=_,_=O;break e}else{n(_,S);break}else t(_,S);S=S.sibling}O=Fu(z,_.mode,O),O.return=_,_=O}return f(_);case Te:return K=z._init,z=K(z._payload),je(_,S,z,O)}if(Ye(z))return ne(_,S,z,O);if(qe(z)){if(K=qe(z),typeof K!="function")throw Error(s(150));return z=K.call(z),I(_,S,z,O)}if(typeof z.then=="function")return je(_,S,cr(z),O);if(z.$$typeof===Z)return je(_,S,Wi(_,z),O);or(_,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(_,S.sibling),O=l(S,z),O.return=_,_=O):(n(_,S),O=Wu(z,_.mode,O),O.return=_,_=O),f(_)):n(_,S)}return function(_,S,z,O){try{Ql=0;var K=je(_,S,z,O);return Oa=null,K}catch(J){if(J===Hl||J===Pi)throw J;var se=gt(29,J,null,_.mode);return se.lanes=O,se.return=_,se}finally{}}}var Ca=Ld(!0),qd=Ld(!1),At=N(null),Lt=null;function _n(e){var t=e.alternate;V(Le,Le.current&1),V(At,e),Lt===null&&(t===null||Aa.current!==null||t.memoizedState!==null)&&(Lt=e)}function Yd(e){if(e.tag===22){if(V(Le,Le.current),V(At,e),Lt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Lt=e)}}else zn()}function zn(){V(Le,Le.current),V(At,At.current)}function an(e){L(At),Lt===e&&(Lt=null),L(Le)}var Le=N(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||vc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ms(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ds={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),l=xn(a);l.payload=t,n!=null&&(l.callback=n),t=Sn(e,l,a),t!==null&&(vt(t,e,a),Gl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),l=xn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Sn(e,l,a),t!==null&&(vt(t,e,a),Gl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=xn(n);a.tag=2,t!=null&&(a.callback=t),t=Sn(e,a,n),t!==null&&(vt(t,e,n),Gl(t,e,n))}};function Vd(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Rl(n,a)||!Rl(l,r):!0}function Xd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zd(e){dr(e)}function Qd(e){console.error(e)}function Kd(e){dr(e)}function hr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Jd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Os(e,t,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){hr(e,t)},n}function $d(e){return e=xn(e),e.tag=3,e}function Wd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Jd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Jd(t,n,a),typeof l!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function z1(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Bl(t,n,l,!0),n=At.current,n!==null){switch(n.tag){case 13:return Lt===null?nc():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===us?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),lc(e,a,l)),!1;case 22:return n.flags|=65536,a===us?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),lc(e,a,l)),!1}throw Error(s(435,n.tag))}return lc(e,a,l),nc(),!1}if(me)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==es&&(e=Error(s(422),{cause:a}),Cl(zt(e,n)))):(a!==es&&(t=Error(s(423),{cause:a}),Cl(zt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=zt(a,n),l=Os(e.stateNode,a,l),os(e,l),Ce!==4&&(Ce=2)),!1;var r=Error(s(520),{cause:a});if(r=zt(r,n),ei===null?ei=[r]:ei.push(r),Ce!==4&&(Ce=2),t===null)return!0;a=zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Os(n.stateNode,a,e),os(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=$d(l),Wd(l,e,n,a),os(n,l),!1}n=n.return}while(n!==null);return!1}var Fd=Error(s(461)),Ze=!1;function $e(e,t,n,a){t.child=e===null?qd(t,null,n,a):Ca(t,e.child,n,a)}function Pd(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=ms(e,t,n,f,r,l),h=ps(),e!==null&&!Ze?(bs(e,t,l),ln(e,t,l)):(me&&h&&Pu(t),t.flags|=1,$e(e,t,a,l),t.child)}function Id(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!$u(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,eh(e,t,r,a,l)):(e=Qi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ls(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Rl,n(f,a)&&e.ref===t.ref)return ln(e,t,l)}return t.flags|=1,e=Ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function eh(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(Rl(r,a)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=a=r,Ls(e,l))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ln(e,t,l)}return Cs(e,t,n,a,l)}function th(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return nh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,r!==null?r.cachePool:null),r!==null?ed(t,r):ds(),Yd(t);else return t.lanes=t.childLanes=536870912,nh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Fi(t,r.cachePool),ed(t,r),zn(),t.memoizedState=null):(e!==null&&Fi(t,null),ds(),zn());return $e(e,t,l,n),t.child}function nh(e,t,n,a){var l=rs();return l=l===null?null:{parent:Ge._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Fi(t,null),ds(),Yd(t),e!==null&&Bl(e,t,a,!0),null}function gr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cs(e,t,n,a,l){return Pn(t),n=ms(e,t,n,a,void 0,l),a=ps(),e!==null&&!Ze?(bs(e,t,l),ln(e,t,l)):(me&&a&&Pu(t),t.flags|=1,$e(e,t,n,l),t.child)}function ah(e,t,n,a,l,r){return Pn(t),t.updateQueue=null,n=nd(t,a,n,l),td(e),a=ps(),e!==null&&!Ze?(bs(e,t,r),ln(e,t,r)):(me&&a&&Pu(t),t.flags|=1,$e(e,t,n,r),t.child)}function lh(e,t,n,a,l){if(Pn(t),t.stateNode===null){var r=_a,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ds,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},ss(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):_a,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Ms(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Ds.enqueueReplaceState(r,r.state,null),ql(t,a,r,l),Ll(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,y=ta(n,h);r.props=y;var E=r.context,D=n.contextType;f=_a,typeof D=="object"&&D!==null&&(f=et(D));var C=n.getDerivedStateFromProps;D=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||E!==f)&&Xd(t,r,a,f),vn=!1;var w=t.memoizedState;r.state=w,ql(t,a,r,l),Ll(),E=t.memoizedState,h||w!==E||vn?(typeof C=="function"&&(Ms(t,n,C,a),E=t.memoizedState),(y=vn||Vd(t,n,y,a,w,E,f))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),r.props=a,r.state=E,r.context=f,a=y):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,cs(e,t),f=t.memoizedProps,D=ta(n,f),r.props=D,C=t.pendingProps,w=r.context,E=n.contextType,y=_a,typeof E=="object"&&E!==null&&(y=et(E)),h=n.getDerivedStateFromProps,(E=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==C||w!==y)&&Xd(t,r,a,y),vn=!1,w=t.memoizedState,r.state=w,ql(t,a,r,l),Ll();var A=t.memoizedState;f!==C||w!==A||vn||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof h=="function"&&(Ms(t,n,h,a),A=t.memoizedState),(D=vn||Vd(t,n,D,a,w,A,y)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,y),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,y)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=y,a=D):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,gr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ca(t,e.child,null,l),t.child=Ca(t,null,n,l)):$e(e,t,n,l),t.memoizedState=r.state,e=t.child):e=ln(e,t,l),e}function ih(e,t,n,a){return Ol(),t.flags|=256,$e(e,t,n,a),t.child}var Bs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ns(e){return{baseLanes:e,cachePool:Qf()}}function Us(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function rh(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(l?_n(t):zn(),me){var h=Oe,y;if(y=h){e:{for(y=h,h=Gt;y.nodeType!==8;){if(!h){h=null;break e}if(y=Bt(y.nextSibling),y===null){h=null;break e}}h=y}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Pt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},y=gt(18,null,null,0),y.stateNode=h,y.return=t,t.child=y,at=t,Oe=null,y=!0):y=!1}y||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return vc(h)?t.lanes=32:t.lanes=536870912,null;an(t)}return h=a.children,a=a.fallback,l?(zn(),l=t.mode,h=mr({mode:"hidden",children:h},l),a=Qn(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=Ns(n),l.childLanes=Us(e,f,n),t.memoizedState=Bs,a):(_n(t),Hs(t,h))}if(y=e.memoizedState,y!==null&&(h=y.dehydrated,h!==null)){if(r)t.flags&256?(_n(t),t.flags&=-257,t=ks(e,t,n)):t.memoizedState!==null?(zn(),t.child=e.child,t.flags|=128,t=null):(zn(),l=a.fallback,h=t.mode,a=mr({mode:"visible",children:a.children},h),l=Qn(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Ca(t,e.child,null,n),a=t.child,a.memoizedState=Ns(n),a.childLanes=Us(e,f,n),t.memoizedState=Bs,t=l);else if(_n(t),vc(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var E=f.dgst;f=E,a=Error(s(419)),a.stack="",a.digest=f,Cl({value:a,source:null,stack:null}),t=ks(e,t,n)}else if(Ze||Bl(e,t,n,!1),f=(n&e.childLanes)!==0,Ze||f){if(f=Ee,f!==null&&(a=n&-n,a=(a&42)!==0?1:xu(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==y.retryLane))throw y.retryLane=a,ja(e,a),vt(f,e,a),Fd;h.data==="$?"||nc(),t=ks(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Oe=Bt(h.nextSibling),at=t,me=!0,$n=null,Gt=!1,e!==null&&(Tt[wt++]=Pt,Tt[wt++]=It,Tt[wt++]=Kn,Pt=e.id,It=e.overflow,Kn=t),t=Hs(t,a.children),t.flags|=4096);return t}return l?(zn(),l=a.fallback,h=t.mode,y=e.child,E=y.sibling,a=Ft(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,E!==null?l=Ft(E,l):(l=Qn(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=Ns(n):(y=h.cachePool,y!==null?(E=Ge._currentValue,y=y.parent!==E?{parent:E,pool:E}:y):y=Qf(),h={baseLanes:h.baseLanes|n,cachePool:y}),l.memoizedState=h,l.childLanes=Us(e,f,n),t.memoizedState=Bs,a):(_n(t),n=e.child,e=n.sibling,n=Ft(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Hs(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ks(e,t,n){return Ca(t,e.child,null,n),e=Hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ns(e.return,t,n)}function Gs(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function sh(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if($e(e,t,a.children,n),a=Le.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uh(e,n,t);else if(e.tag===19)uh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Le,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&fr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Gs(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Gs(t,!0,n,null,r);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Bl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ls(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$i(e)))}function E1(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),yn(t,Ge,e.memoizedState.cache),Ol();break;case 27:case 5:Ln(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:yn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(_n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?rh(e,t,n):(_n(t),e=ln(e,t,n),e!==null?e.sibling:null);_n(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Bl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return sh(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Le,Le.current),a)break;return null;case 22:case 23:return t.lanes=0,th(e,t,n);case 24:yn(t,Ge,e.memoizedState.cache)}return ln(e,t,n)}function ch(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Ls(e,n)&&(t.flags&128)===0)return Ze=!1,E1(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,me&&(t.flags&1048576)!==0&&Gf(t,Ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")$u(a)?(e=ta(a,e),t.tag=1,t=lh(null,t,a,e,n)):(t.tag=0,t=Cs(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===ae){t.tag=11,t=Pd(null,t,a,e,n);break e}else if(l===W){t.tag=14,t=Id(null,t,a,e,n);break e}}throw t=Kt(a)||a,Error(s(306,t,""))}}return t;case 0:return Cs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ta(a,t.pendingProps),lh(e,t,a,l,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,cs(e,t),ql(t,a,null,n);var f=t.memoizedState;if(a=f.cache,yn(t,Ge,a),a!==r.cache&&as(t,[Ge],n,!0),Ll(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ih(e,t,a,n);break e}else if(a!==l){l=zt(Error(s(424)),t),Cl(l),t=ih(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Bt(e.firstChild),at=t,me=!0,$n=null,Gt=!0,n=qd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ol(),a===l){t=ln(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return gr(e,t),e===null?(n=hg(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,a=Rr(ee.current).createElement(n),a[Ie]=t,a[it]=e,Fe(a,n,e),Xe(a),t.stateNode=a):t.memoizedState=hg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ln(t),e===null&&me&&(a=t.stateNode=og(t.type,t.pendingProps,ee.current),at=t,Gt=!0,l=Oe,Cn(t.type)?(xc=l,Oe=Bt(a.firstChild)):Oe=l),$e(e,t,t.pendingProps.children,n),gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((l=a=Oe)&&(a=I1(a,t.type,t.pendingProps,Gt),a!==null?(t.stateNode=a,at=t,Oe=Bt(a.firstChild),Gt=!1,l=!0):l=!1),l||Wn(t)),Ln(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,pc(l,r)?a=null:f!==null&&pc(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=ms(e,t,b1,null,null,n),ci._currentValue=l),gr(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&me&&((e=n=Oe)&&(n=eb(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,at=t,Oe=null,e=!0):e=!1),e||Wn(t)),null;case 13:return rh(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ca(t,null,a,n):$e(e,t,a,n),t.child;case 11:return Pd(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,yn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Pn(t),l=et(l),a=a(l),t.flags|=1,$e(e,t,a,n),t.child;case 14:return Id(e,t,t.type,t.pendingProps,n);case 15:return eh(e,t,t.type,t.pendingProps,n);case 19:return sh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=mr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ft(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return th(e,t,n);case 24:return Pn(t),a=et(Ge),e===null?(l=rs(),l===null&&(l=Ee,r=ls(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},ss(t),yn(t,Ge,l)):((e.lanes&n)!==0&&(cs(e,t),ql(t,null,null,n),Ll()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),yn(t,Ge,a)):(a=r.cache,yn(t,Ge,a),a!==l.cache&&as(t,[Ge],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function rn(e){e.flags|=4}function oh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yg(t)){if(t=At.current,t!==null&&((he&4194048)===he?Lt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Lt))throw kl=us,Kf;e.flags|=8192}}function pr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qo():536870912,e.lanes|=t,Ha|=t)}function Jl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function T1(e,t,n){var a=t.pendingProps;switch(Iu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tn(Ge),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Dl(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yf())),De(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(De(t),oh(t,n)):(De(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),De(t),oh(t,n)):(De(t),t.flags&=-16777217):(e.memoizedProps!==a&&rn(t),De(t),t.flags&=-16777217),null;case 27:Jt(t),n=ee.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return De(t),null}e=F.current,Dl(t)?Lf(t):(e=og(l,a,n),t.stateNode=e,rn(t))}return De(t),null;case 5:if(Jt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return De(t),null}if(e=F.current,Dl(t))Lf(t);else{switch(l=Rr(ee.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Ie]=t,e[it]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,Dl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=at,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||ag(e.nodeValue,n)),e||Wn(t)}else e=Rr(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Dl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ie]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),l=!1}else l=Yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(an(t),t):(an(t),null)}if(an(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),pr(t,t.updateQueue),De(t),null;case 4:return Pe(),e===null&&fc(t.stateNode.containerInfo),De(t),null;case 10:return tn(t.type),De(t),null;case 19:if(L(Le),l=t.memoizedState,l===null)return De(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)Jl(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=fr(e),r!==null){for(t.flags|=128,Jl(l,!1),e=r.updateQueue,t.updateQueue=e,pr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)kf(n,e),n=n.sibling;return V(Le,Le.current&1|2),t.child}e=e.sibling}l.tail!==null&&kt()>vr&&(t.flags|=128,a=!0,Jl(l,!1),t.lanes=4194304)}else{if(!a)if(e=fr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,pr(t,e),Jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!me)return De(t),null}else 2*kt()-l.renderingStartTime>vr&&n!==536870912&&(t.flags|=128,a=!0,Jl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=kt(),t.sibling=null,e=Le.current,V(Le,a?e&1|2:e&1),t):(De(t),null);case 22:case 23:return an(t),hs(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&pr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(Ge),De(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function w1(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(Ge),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Le),null;case 4:return Pe(),null;case 10:return tn(t.type),null;case 22:case 23:return an(t),hs(),e!==null&&L(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(Ge),null;case 25:return null;default:return null}}function fh(e,t){switch(Iu(t),t.tag){case 3:tn(Ge),Pe();break;case 26:case 27:case 5:Jt(t);break;case 4:Pe();break;case 13:an(t);break;case 19:L(Le);break;case 10:tn(t.type);break;case 22:case 23:an(t),hs(),e!==null&&L(In);break;case 24:tn(Ge)}}function $l(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(h){ze(t,t.return,h)}}function En(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,l=t;var y=n,E=h;try{E()}catch(D){ze(l,y,D)}}}a=a.next}while(a!==r)}}catch(D){ze(t,t.return,D)}}function dh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{If(t,n)}catch(a){ze(e,e.return,a)}}}function hh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ze(e,t,a)}}function Wl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){ze(e,t,l)}}function qt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ze(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ze(e,t,l)}else n.current=null}function gh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ze(e,e.return,l)}}function qs(e,t,n){try{var a=e.stateNode;J1(a,e.type,n,t),a[it]=t}catch(l){ze(e,e.return,l)}}function mh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function Ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function br(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(br(e,t,n),e=e.sibling;e!==null;)br(e,t,n),e=e.sibling}function ph(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fe(t,a,n),t[Ie]=e,t[it]=n}catch(r){ze(e,e.return,r)}}var un=!1,Ne=!1,Xs=!1,bh=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function A1(e,t){if(e=e.containerInfo,gc=Nr,e=Af(e),Yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,y=-1,E=0,D=0,C=e,w=null;t:for(;;){for(var A;C!==n||l!==0&&C.nodeType!==3||(h=f+l),C!==r||a!==0&&C.nodeType!==3||(y=f+a),C.nodeType===3&&(f+=C.nodeValue.length),(A=C.firstChild)!==null;)w=C,C=A;for(;;){if(C===e)break t;if(w===n&&++E===l&&(h=f),w===r&&++D===a&&(y=f),(A=C.nextSibling)!==null)break;C=w,w=C.parentNode}C=A}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},Nr=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){ze(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function yh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),a&4&&$l(5,n);break;case 1:if(Tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){ze(n,n.return,f)}else{var l=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){ze(n,n.return,f)}}a&64&&dh(n),a&512&&Wl(n,n.return);break;case 3:if(Tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{If(e,t)}catch(f){ze(n,n.return,f)}}break;case 27:t===null&&a&4&&ph(n);case 26:case 5:Tn(e,n),t===null&&a&4&&gh(n),a&512&&Wl(n,n.return);break;case 12:Tn(e,n);break;case 13:Tn(e,n),a&4&&Sh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=H1.bind(null,n),tb(e,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){t=t!==null&&t.memoizedState!==null||Ne,l=un;var r=Ne;un=a,(Ne=t)&&!r?wn(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),un=l,Ne=r}break;case 30:break;default:Tn(e,n)}}function vh(e){var t=e.alternate;t!==null&&(e.alternate=null,vh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_u(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,st=!1;function sn(e,t,n){for(n=n.child;n!==null;)xh(e,t,n),n=n.sibling}function xh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 26:Ne||qt(n,t),sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||qt(n,t);var a=Ae,l=st;Cn(n.type)&&(Ae=n.stateNode,st=!1),sn(e,t,n),ii(n.stateNode),Ae=a,st=l;break;case 5:Ne||qt(n,t);case 6:if(a=Ae,l=st,Ae=null,sn(e,t,n),Ae=a,st=l,Ae!==null)if(st)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){ze(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){ze(n,t,r)}break;case 18:Ae!==null&&(st?(e=Ae,sg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),hi(e)):sg(Ae,n.stateNode));break;case 4:a=Ae,l=st,Ae=n.stateNode.containerInfo,st=!0,sn(e,t,n),Ae=a,st=l;break;case 0:case 11:case 14:case 15:Ne||En(2,n,t),Ne||En(4,n,t),sn(e,t,n);break;case 1:Ne||(qt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&hh(n,t,a)),sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:Ne=(a=Ne)||n.memoizedState!==null,sn(e,t,n),Ne=a;break;default:sn(e,t,n)}}function Sh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hi(e)}catch(n){ze(t,t.return,n)}}function R1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bh),t;default:throw Error(s(435,e.tag))}}function Zs(e,t){var n=R1(e);t.forEach(function(a){var l=k1.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function mt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Cn(h.type)){Ae=h.stateNode,st=!1;break e}break;case 5:Ae=h.stateNode,st=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,st=!0;break e}h=h.return}if(Ae===null)throw Error(s(160));xh(r,f,l),Ae=null,st=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jh(t,e),t=t.sibling}var Ct=null;function jh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),a&4&&(En(3,e,e.return),$l(3,e),En(5,e,e.return));break;case 1:mt(t,e),pt(e),a&512&&(Ne||n===null||qt(n,n.return)),a&64&&un&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Ct;if(mt(t,e),pt(e),a&512&&(Ne||n===null||qt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[xl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Xe(r),a=r;break e;case"link":var f=pg("link","href",l).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;case"meta":if(f=pg("meta","content",l).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;default:throw Error(s(468,a))}r[Ie]=e,Xe(r),a=r}e.stateNode=a}else bg(l,e.type,e.stateNode);else e.stateNode=mg(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?bg(l,e.type,e.stateNode):mg(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&qs(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),pt(e),a&512&&(Ne||n===null||qt(n,n.return)),n!==null&&a&4&&qs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),pt(e),a&512&&(Ne||n===null||qt(n,n.return)),e.flags&32){l=e.stateNode;try{ma(l,"")}catch(A){ze(e,e.return,A)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,qs(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Xs=!0);break;case 6:if(mt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(A){ze(e,e.return,A)}}break;case 3:if(Or=null,l=Ct,Ct=Mr(t.containerInfo),mt(t,e),Ct=l,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(A){ze(e,e.return,A)}Xs&&(Xs=!1,_h(e));break;case 4:a=Ct,Ct=Mr(e.stateNode.containerInfo),mt(t,e),pt(e),Ct=a;break;case 12:mt(t,e),pt(e);break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fs=kt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zs(e,a)));break;case 22:l=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,E=un,D=Ne;if(un=E||l,Ne=D||y,mt(t,e),Ne=D,un=E,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||y||un||Ne||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(r=y.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=y.stateNode;var C=y.memoizedProps.style,w=C!=null&&C.hasOwnProperty("display")?C.display:null;h.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(A){ze(y,y.return,A)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=l?"":y.memoizedProps}catch(A){ze(y,y.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Zs(e,n))));break;case 19:mt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zs(e,a)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(mh(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,r=Ys(e);br(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(ma(f,""),n.flags&=-33);var h=Ys(e);br(e,h,f);break;case 3:case 4:var y=n.stateNode.containerInfo,E=Ys(e);Vs(e,E,y);break;default:throw Error(s(161))}}catch(D){ze(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _h(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_h(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yh(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),na(t);break;case 1:qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&hh(t,t.return,n),na(t);break;case 27:ii(t.stateNode);case 26:case 5:qt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function wn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:wn(l,r,n),$l(4,r);break;case 1:if(wn(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){ze(a,a.return,E)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)Pf(y[l],h)}catch(E){ze(a,a.return,E)}}n&&f&64&&dh(r),Wl(r,r.return);break;case 27:ph(r);case 26:case 5:wn(l,r,n),n&&a===null&&f&4&&gh(r),Wl(r,r.return);break;case 12:wn(l,r,n);break;case 13:wn(l,r,n),n&&f&4&&Sh(l,r);break;case 22:r.memoizedState===null&&wn(l,r,n),Wl(r,r.return);break;case 30:break;default:wn(l,r,n)}t=t.sibling}}function Qs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Nl(n))}function Ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nl(e))}function Yt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zh(e,t,n,a),t=t.sibling}function zh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,n,a),l&2048&&$l(9,t);break;case 1:Yt(e,t,n,a);break;case 3:Yt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nl(e)));break;case 12:if(l&2048){Yt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){ze(t,t.return,y)}}else Yt(e,t,n,a);break;case 13:Yt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Yt(e,t,n,a):Fl(e,t):r._visibility&2?Yt(e,t,n,a):(r._visibility|=2,Ba(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Qs(f,t);break;case 24:Yt(e,t,n,a),l&2048&&Ks(t.alternate,t);break;default:Yt(e,t,n,a)}}function Ba(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,y=a,E=f.flags;switch(f.tag){case 0:case 11:case 15:Ba(r,f,h,y,l),$l(8,f);break;case 23:break;case 22:var D=f.stateNode;f.memoizedState!==null?D._visibility&2?Ba(r,f,h,y,l):Fl(r,f):(D._visibility|=2,Ba(r,f,h,y,l)),l&&E&2048&&Qs(f.alternate,f);break;case 24:Ba(r,f,h,y,l),l&&E&2048&&Ks(f.alternate,f);break;default:Ba(r,f,h,y,l)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Fl(n,a),l&2048&&Qs(a.alternate,a);break;case 24:Fl(n,a),l&2048&&Ks(a.alternate,a);break;default:Fl(n,a)}t=t.sibling}}var Pl=8192;function Na(e){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)Eh(e),e=e.sibling}function Eh(e){switch(e.tag){case 26:Na(e),e.flags&Pl&&e.memoizedState!==null&&gb(Ct,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var t=Ct;Ct=Mr(e.stateNode.containerInfo),Na(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Pl,Pl=16777216,Na(e),Pl=t):Na(e));break;default:Na(e)}}function Th(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Ah(a,e)}Th(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wh(e),e=e.sibling}function wh(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&En(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yr(e)):Il(e);break;default:Il(e)}}function yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Ah(a,e)}Th(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),yr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yr(t));break;default:yr(t)}e=e.sibling}}function Ah(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Nl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var l=a.sibling,r=a.return;if(vh(a),a===n){Qe=null;break e}if(l!==null){l.return=r,Qe=l;break e}Qe=r}}}var M1={getCacheForType:function(e){var t=et(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},D1=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ee=null,fe=null,he=0,ve=0,bt=null,An=!1,Ua=!1,Js=!1,cn=0,Ce=0,Rn=0,aa=0,$s=0,Rt=0,Ha=0,ei=null,ct=null,Ws=!1,Fs=0,vr=1/0,xr=null,Mn=null,We=0,Dn=null,ka=null,Ga=0,Ps=0,Is=null,Rh=null,ti=0,ec=null;function yt(){if((ye&2)!==0&&he!==0)return he&-he;if(M.T!==null){var e=Ta;return e!==0?e:uc()}return Xo()}function Mh(){Rt===0&&(Rt=(he&536870912)===0||me?Lo():536870912);var e=At.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(La(e,0),On(e,he,Rt,!1)),vl(e,n),((ye&2)===0||e!==Ee)&&(e===Ee&&((ye&2)===0&&(aa|=n),Ce===4&&On(e,he,Rt,!1)),Vt(e))}function Dh(e,t,n){if((ye&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||yl(e,t),l=a?B1(e,t):ac(e,t,!0),r=a;do{if(l===0){Ua&&!a&&On(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!O1(n)){l=ac(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;l=ei;var y=h.current.memoizedState.isDehydrated;if(y&&(La(h,f).flags|=256),f=ac(h,f,!1),f!==2){if(Js&&!y){h.errorRecoveryDisabledLanes|=r,aa|=r,l=4;break e}r=ct,ct=l,r!==null&&(ct===null?ct=r:ct.push.apply(ct,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){La(e,0),On(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:On(a,t,Rt,!An);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Fs+300-kt(),10<l)){if(On(a,t,Rt,!An),Di(a,0,!0)!==0)break e;a.timeoutHandle=rg(Oh.bind(null,a,n,ct,xr,Ws,t,Rt,aa,Ha,An,r,2,-0,0),l);break e}Oh(a,n,ct,xr,Ws,t,Rt,aa,Ha,An,r,0,-0,0)}}break}while(!0);Vt(e)}function Oh(e,t,n,a,l,r,f,h,y,E,D,C,w,A){if(e.timeoutHandle=-1,C=t.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(si={stylesheets:null,count:0,unsuspend:hb},Eh(t),C=mb(),C!==null)){e.cancelPendingCommit=C(Gh.bind(null,e,t,r,n,a,l,f,h,y,D,1,w,A)),On(e,r,f,!E);return}Gh(e,t,r,n,a,l,f,h,y)}function O1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!ht(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t,n,a){t&=~$s,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-dt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&Yo(e,n,t)}function Sr(){return(ye&6)===0?(ni(0),!1):!0}function tc(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,en=Fn=null,ys(e),Oa=null,Ql=0,e=fe;for(;e!==null;)fh(e.alternate,e),e=e.return;fe=null}}function La(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,W1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tc(),Ee=e,fe=n=Ft(e.current,null),he=t,ve=0,bt=null,An=!1,Ua=yl(e,t),Js=!1,Ha=Rt=$s=aa=Rn=Ce=0,ct=ei=null,Ws=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-dt(a),r=1<<l;t|=e[l],a&=~r}return cn=t,Vi(),n}function Ch(e,t){ue=null,M.H=sr,t===Hl||t===Pi?(t=Wf(),ve=3):t===Kf?(t=Wf(),ve=4):ve=t===Fd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Ce=1,hr(e,zt(t,e.current)))}function Bh(){var e=M.H;return M.H=sr,e===null?sr:e}function Nh(){var e=M.A;return M.A=M1,e}function nc(){Ce=4,An||(he&4194048)!==he&&At.current!==null||(Ua=!0),(Rn&134217727)===0&&(aa&134217727)===0||Ee===null||On(Ee,he,Rt,!1)}function ac(e,t,n){var a=ye;ye|=2;var l=Bh(),r=Nh();(Ee!==e||he!==t)&&(xr=null,La(e,t)),t=!1;var f=Ce;e:do try{if(ve!==0&&fe!==null){var h=fe,y=bt;switch(ve){case 8:tc(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var E=ve;if(ve=0,bt=null,qa(e,h,y,E),n&&Ua){f=0;break e}break;default:E=ve,ve=0,bt=null,qa(e,h,y,E)}}C1(),f=Ce;break}catch(D){Ch(e,D)}while(!0);return t&&e.shellSuspendCounter++,en=Fn=null,ye=a,M.H=l,M.A=r,fe===null&&(Ee=null,he=0,Vi()),f}function C1(){for(;fe!==null;)Uh(fe)}function B1(e,t){var n=ye;ye|=2;var a=Bh(),l=Nh();Ee!==e||he!==t?(xr=null,vr=kt()+500,La(e,t)):Ua=yl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,qa(e,t,r,1);break;case 2:case 9:if(Jf(r)){ve=0,bt=null,Hh(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),Vt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Jf(r)?(ve=0,bt=null,Hh(t)):(ve=0,bt=null,qa(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||yg(f)){ve=0,bt=null;var y=h.sibling;if(y!==null)fe=y;else{var E=h.return;E!==null?(fe=E,jr(E)):fe=null}break t}}ve=0,bt=null,qa(e,t,r,5);break;case 6:ve=0,bt=null,qa(e,t,r,6);break;case 8:tc(),Ce=6;break e;default:throw Error(s(462))}}N1();break}catch(D){Ch(e,D)}while(!0);return en=Fn=null,M.H=a,M.A=l,ye=n,fe!==null?0:(Ee=null,he=0,Vi(),Ce)}function N1(){for(;fe!==null&&!ap();)Uh(fe)}function Uh(e){var t=ch(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?jr(e):fe=t}function Hh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ah(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=ah(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:ys(t);default:fh(n,t),t=fe=kf(t,cn),t=ch(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?jr(e):fe=t}function qa(e,t,n,a){en=Fn=null,ys(t),Oa=null,Ql=0;var l=t.return;try{if(z1(e,l,t,n,he)){Ce=1,hr(e,zt(n,e.current)),fe=null;return}}catch(r){if(l!==null)throw fe=l,r;Ce=1,hr(e,zt(n,e.current)),fe=null;return}t.flags&32768?(me||a===1?e=!0:Ua||(he&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),kh(t,e)):jr(t)}function jr(e){var t=e;do{if((t.flags&32768)!==0){kh(t,An);return}e=t.return;var n=T1(t.alternate,t,cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ce===0&&(Ce=5)}function kh(e,t){do{var n=w1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ce=6,fe=null}function Gh(e,t,n,a,l,r,f,h,y){e.cancelPendingCommit=null;do _r();while(We!==0);if((ye&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=Ku,hp(e,n,r,f,h,y),e===Ee&&(fe=Ee=null,he=0),ka=t,Dn=e,Ga=n,Ps=r,Is=l,Rh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,G1(Ai,function(){return Xh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,l=Y.p,Y.p=2,f=ye,ye|=4;try{A1(e,t,n)}finally{ye=f,Y.p=l,M.T=a}}We=1,Lh(),qh(),Yh()}}function Lh(){if(We===1){We=0;var e=Dn,t=ka,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{jh(t,e);var r=mc,f=Af(e.containerInfo),h=r.focusedElem,y=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&wf(h.ownerDocument.documentElement,h)){if(y!==null&&Yu(h)){var E=y.start,D=y.end;if(D===void 0&&(D=E),"selectionStart"in h)h.selectionStart=E,h.selectionEnd=Math.min(D,h.value.length);else{var C=h.ownerDocument||document,w=C&&C.defaultView||window;if(w.getSelection){var A=w.getSelection(),ne=h.textContent.length,I=Math.min(y.start,ne),je=y.end===void 0?I:Math.min(y.end,ne);!A.extend&&I>je&&(f=je,je=I,I=f);var _=Tf(h,I),S=Tf(h,je);if(_&&S&&(A.rangeCount!==1||A.anchorNode!==_.node||A.anchorOffset!==_.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var z=C.createRange();z.setStart(_.node,_.offset),A.removeAllRanges(),I>je?(A.addRange(z),A.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),A.addRange(z))}}}}for(C=[],A=h;A=A.parentNode;)A.nodeType===1&&C.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<C.length;h++){var O=C[h];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Nr=!!gc,mc=gc=null}finally{ye=l,Y.p=a,M.T=n}}e.current=t,We=2}}function qh(){if(We===2){We=0;var e=Dn,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{yh(e,t.alternate,t)}finally{ye=l,Y.p=a,M.T=n}}We=3}}function Yh(){if(We===4||We===3){We=0,lp();var e=Dn,t=ka,n=Ga,a=Rh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,ka=Dn=null,Vh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Mn=null),Su(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,l=Y.p,Y.p=2,M.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{M.T=t,Y.p=l}}(Ga&3)!==0&&_r(),Vt(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===ec?ti++:(ti=0,ec=e):ti=0,ni(0)}}function Vh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Nl(t)))}function _r(e){return Lh(),qh(),Yh(),Xh()}function Xh(){if(We!==5)return!1;var e=Dn,t=Ps;Ps=0;var n=Su(Ga),a=M.T,l=Y.p;try{Y.p=32>n?32:n,M.T=null,n=Is,Is=null;var r=Dn,f=Ga;if(We=0,ka=Dn=null,Ga=0,(ye&6)!==0)throw Error(s(331));var h=ye;if(ye|=4,wh(r.current),zh(r,r.current,f,n),ye=h,ni(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(bl,r)}catch{}return!0}finally{Y.p=l,M.T=a,Vh(e,t)}}function Zh(e,t,n){t=zt(n,t),t=Os(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(vl(e,2),Vt(e))}function ze(e,t,n){if(e.tag===3)Zh(e,e,n);else for(;t!==null;){if(t.tag===3){Zh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){e=zt(n,e),n=$d(2),a=Sn(t,n,2),a!==null&&(Wd(n,a,t,e),vl(a,2),Vt(a));break}}t=t.return}}function lc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new D1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Js=!0,l.add(n),e=U1.bind(null,e,t,n),t.then(e,e))}function U1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(he&n)===n&&(Ce===4||Ce===3&&(he&62914560)===he&&300>kt()-Fs?(ye&2)===0&&La(e,0):$s|=n,Ha===he&&(Ha=0)),Vt(e)}function Qh(e,t){t===0&&(t=qo()),e=ja(e,t),e!==null&&(vl(e,t),Vt(e))}function H1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qh(e,n)}function k1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Qh(e,n)}function G1(e,t){return bu(e,t)}var zr=null,Ya=null,ic=!1,Er=!1,rc=!1,la=0;function Vt(e){e!==Ya&&e.next===null&&(Ya===null?zr=Ya=e:Ya=Ya.next=e),Er=!0,ic||(ic=!0,q1())}function ni(e,t){if(!rc&&Er){rc=!0;do for(var n=!1,a=zr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=l&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Wh(a,r))}else r=he,r=Di(a,a===Ee?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||yl(a,r)||(n=!0,Wh(a,r));a=a.next}while(n);rc=!1}}function L1(){Kh()}function Kh(){Er=ic=!1;var e=0;la!==0&&($1()&&(e=la),la=0);for(var t=kt(),n=null,a=zr;a!==null;){var l=a.next,r=Jh(a,t);r===0?(a.next=null,n===null?zr=l:n.next=l,l===null&&(Ya=n)):(n=a,(e!==0||(r&3)!==0)&&(Er=!0)),a=l}ni(e)}function Jh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,y=l[f];y===-1?((h&n)===0||(h&a)!==0)&&(l[f]=dp(h,t)):y<=t&&(e.expiredLanes|=h),r&=~h}if(t=Ee,n=he,n=Di(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&yu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&yu(a),Su(n)){case 2:case 8:n=ko;break;case 32:n=Ai;break;case 268435456:n=Go;break;default:n=Ai}return a=$h.bind(null,e),n=bu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&yu(a),e.callbackPriority=2,e.callbackNode=null,2}function $h(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var a=he;return a=Di(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Dh(e,a,t),Jh(e,kt()),e.callbackNode!=null&&e.callbackNode===n?$h.bind(null,e):null)}function Wh(e,t){if(_r())return null;Dh(e,t,!0)}function q1(){F1(function(){(ye&6)!==0?bu(Ho,L1):Kh()})}function uc(){return la===0&&(la=Lo()),la}function Fh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ui(""+e)}function Ph(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Y1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=Fh((l[it]||null).action),f=a.submitter;f&&(t=(t=f[it]||null)?Fh(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Li("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var y=f?Ph(l,f):new FormData(l);ws(n,{pending:!0,data:y,method:l.method,action:r},null,y)}}else typeof r=="function"&&(h.preventDefault(),y=f?Ph(l,f):new FormData(l),ws(n,{pending:!0,data:y,method:l.method,action:r},r,y))},currentTarget:l}]})}}for(var sc=0;sc<Qu.length;sc++){var cc=Qu[sc],V1=cc.toLowerCase(),X1=cc[0].toUpperCase()+cc.slice(1);Ot(V1,"on"+X1)}Ot(Df,"onAnimationEnd"),Ot(Of,"onAnimationIteration"),Ot(Cf,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(u1,"onTransitionRun"),Ot(s1,"onTransitionStart"),Ot(c1,"onTransitionCancel"),Ot(Bf,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai));function Ih(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],y=h.instance,E=h.currentTarget;if(h=h.listener,y!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=E;try{r(l)}catch(D){dr(D)}l.currentTarget=null,r=y}else for(f=0;f<a.length;f++){if(h=a[f],y=h.instance,E=h.currentTarget,h=h.listener,y!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=E;try{r(l)}catch(D){dr(D)}l.currentTarget=null,r=y}}}}function de(e,t){var n=t[ju];n===void 0&&(n=t[ju]=new Set);var a=e+"__bubble";n.has(a)||(eg(t,e,2,!1),n.add(a))}function oc(e,t,n){var a=0;t&&(a|=4),eg(n,e,a,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function fc(e){if(!e[Tr]){e[Tr]=!0,Qo.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||oc(n,!1,e),oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,oc("selectionchange",!1,t))}}function eg(e,t,n,a){switch(zg(t)){case 2:var l=yb;break;case 8:l=vb;break;default:l=Ec}n=l.bind(null,t,n,e),l=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function dc(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===l)break;if(f===4)for(f=a.return;f!==null;){var y=f.tag;if((y===3||y===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;h!==null;){if(f=ca(h),f===null)return;if(y=f.tag,y===5||y===6||y===26||y===27){a=r=f;continue e}h=h.parentNode}}a=a.return}uf(function(){var E=r,D=Du(n),C=[];e:{var w=Nf.get(e);if(w!==void 0){var A=Li,ne=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":A=Gp;break;case"focusin":ne="focus",A=Hu;break;case"focusout":ne="blur",A=Hu;break;case"beforeblur":case"afterblur":A=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Yp;break;case Df:case Of:case Cf:A=Mp;break;case Bf:A=Xp;break;case"scroll":case"scrollend":A=Ep;break;case"wheel":A=Qp;break;case"copy":case"cut":case"paste":A=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=df;break;case"toggle":case"beforetoggle":A=Jp}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),_=I?w!==null?w+"Capture":null:w;I=[];for(var S=E,z;S!==null;){var O=S;if(z=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||z===null||_===null||(O=jl(S,_),O!=null&&I.push(li(S,O,z))),je)break;S=S.return}0<I.length&&(w=new A(w,ne,null,n,D),C.push({event:w,listeners:I}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",w&&n!==Mu&&(ne=n.relatedTarget||n.fromElement)&&(ca(ne)||ne[sa]))break e;if((A||w)&&(w=D.window===D?D:(w=D.ownerDocument)?w.defaultView||w.parentWindow:window,A?(ne=n.relatedTarget||n.toElement,A=E,ne=ne?ca(ne):null,ne!==null&&(je=g(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(A=null,ne=E),A!==ne)){if(I=of,O="onMouseLeave",_="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=df,O="onPointerLeave",_="onPointerEnter",S="pointer"),je=A==null?w:Sl(A),z=ne==null?w:Sl(ne),w=new I(O,S+"leave",A,n,D),w.target=je,w.relatedTarget=z,O=null,ca(D)===E&&(I=new I(_,S+"enter",ne,n,D),I.target=z,I.relatedTarget=je,O=I),je=O,A&&ne)t:{for(I=A,_=ne,S=0,z=I;z;z=Va(z))S++;for(z=0,O=_;O;O=Va(O))z++;for(;0<S-z;)I=Va(I),S--;for(;0<z-S;)_=Va(_),z--;for(;S--;){if(I===_||_!==null&&I===_.alternate)break t;I=Va(I),_=Va(_)}I=null}else I=null;A!==null&&tg(C,w,A,I,!1),ne!==null&&je!==null&&tg(C,je,ne,I,!0)}}e:{if(w=E?Sl(E):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var K=xf;else if(yf(w))if(Sf)K=l1;else{K=n1;var se=t1}else A=w.nodeName,!A||A.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?E&&Ru(E.elementType)&&(K=xf):K=a1;if(K&&(K=K(e,E))){vf(C,K,n,D);break e}se&&se(e,w,E),e==="focusout"&&E&&w.type==="number"&&E.memoizedProps.value!=null&&Au(w,"number",w.value)}switch(se=E?Sl(E):window,e){case"focusin":(yf(se)||se.contentEditable==="true")&&(va=se,Vu=E,Ml=null);break;case"focusout":Ml=Vu=va=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Rf(C,n,D);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":Rf(C,n,D)}var J;if(Gu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ya?pf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(hf&&n.locale!=="ko"&&(ya||te!=="onCompositionStart"?te==="onCompositionEnd"&&ya&&(J=sf()):(bn=D,Bu="value"in bn?bn.value:bn.textContent,ya=!0)),se=wr(E,te),0<se.length&&(te=new ff(te,e,null,n,D),C.push({event:te,listeners:se}),J?te.data=J:(J=bf(n),J!==null&&(te.data=J)))),(J=Wp?Fp(e,n):Pp(e,n))&&(te=wr(E,"onBeforeInput"),0<te.length&&(se=new ff("onBeforeInput","beforeinput",null,n,D),C.push({event:se,listeners:te}),se.data=J)),Y1(C,e,E,n,D)}Ih(C,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=jl(e,n),l!=null&&a.unshift(li(e,l,r)),l=jl(e,t),l!=null&&a.push(li(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tg(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,y=h.alternate,E=h.stateNode;if(h=h.tag,y!==null&&y===a)break;h!==5&&h!==26&&h!==27||E===null||(y=E,l?(E=jl(n,r),E!=null&&f.unshift(li(n,E,y))):l||(E=jl(n,r),E!=null&&f.push(li(n,E,y)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Q1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function ng(e){return(typeof e=="string"?e:""+e).replace(Q1,`
`).replace(K1,"")}function ag(e,t){return t=ng(t),ng(e)===t}function Ar(){}function Se(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ma(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ma(e,""+a);break;case"className":Ci(e,"class",a);break;case"tabIndex":Ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,n,a);break;case"style":lf(e,a,r);break;case"data":if(t!=="object"){Ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ui(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ui(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ui(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Oi(e,"popover",a);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Oi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_p.get(n)||n,Oi(e,n,a))}}function hc(e,t,n,a,l,r){switch(n){case"style":lf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ma(e,a):(typeof a=="number"||typeof a=="bigint")&&ma(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[it]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Oi(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,r,f,n,null)}}l&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=l=null,y=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":l=D;break;case"type":f=D;break;case"checked":y=D;break;case"defaultChecked":E=D;break;case"value":r=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:Se(e,t,a,D,n,null)}}ef(e,r,h,y,E,f,l,!1),Bi(e);return;case"select":de("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,l,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ga(e,!!a,t,!1):n!=null&&ga(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Se(e,t,f,h,n,null)}nf(e,a,l,r),Bi(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,y,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ai.length;a++)de(ai[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,E,a,n,null)}return;default:if(Ru(t)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&hc(e,t,D,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function J1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,h=null,y=null,E=null,D=null;for(A in n){var C=n[A];if(n.hasOwnProperty(A)&&C!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":y=C;default:a.hasOwnProperty(A)||Se(e,t,A,null,a,C)}}for(var w in a){var A=a[w];if(C=n[w],a.hasOwnProperty(w)&&(A!=null||C!=null))switch(w){case"type":r=A;break;case"name":l=A;break;case"checked":E=A;break;case"defaultChecked":D=A;break;case"value":f=A;break;case"defaultValue":h=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:A!==C&&Se(e,t,w,A,a,C)}}wu(e,f,h,y,E,D,r,l);return;case"select":A=f=h=w=null;for(r in n)if(y=n[r],n.hasOwnProperty(r)&&y!=null)switch(r){case"value":break;case"multiple":A=y;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,y)}for(l in a)if(r=a[l],y=n[l],a.hasOwnProperty(l)&&(r!=null||y!=null))switch(l){case"value":w=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==y&&Se(e,t,l,r,a,y)}t=h,n=f,a=A,w!=null?ga(e,!!n,w,!1):!!a!=!!n&&(t!=null?ga(e,!!n,t,!0):ga(e,!!n,n?[]:"",!1));return;case"textarea":A=w=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":w=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==r&&Se(e,t,f,l,a,r)}tf(e,w,A);return;case"option":for(var ne in n)if(w=n[ne],n.hasOwnProperty(ne)&&w!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,w)}for(y in a)if(w=a[y],A=n[y],a.hasOwnProperty(y)&&w!==A&&(w!=null||A!=null))switch(y){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Se(e,t,y,w,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)w=n[I],n.hasOwnProperty(I)&&w!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,w);for(E in a)if(w=a[E],A=n[E],a.hasOwnProperty(E)&&w!==A&&(w!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:Se(e,t,E,w,a,A)}return;default:if(Ru(t)){for(var je in n)w=n[je],n.hasOwnProperty(je)&&w!==void 0&&!a.hasOwnProperty(je)&&hc(e,t,je,void 0,a,w);for(D in a)w=a[D],A=n[D],!a.hasOwnProperty(D)||w===A||w===void 0&&A===void 0||hc(e,t,D,w,a,A);return}}for(var _ in n)w=n[_],n.hasOwnProperty(_)&&w!=null&&!a.hasOwnProperty(_)&&Se(e,t,_,null,a,w);for(C in a)w=a[C],A=n[C],!a.hasOwnProperty(C)||w===A||w==null&&A==null||Se(e,t,C,w,a,A)}var gc=null,mc=null;function Rr(e){return e.nodeType===9?e:e.ownerDocument}function lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ig(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=null;function $1(){var e=window.event;return e&&e.type==="popstate"?e===bc?!1:(bc=e,!0):(bc=null,!1)}var rg=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(e){return ug.resolve(null).then(e).catch(P1)}:rg;function P1(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function sg(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&ii(f.documentElement),n&2&&ii(f.body),n&4)for(n=f.head,ii(n),f=n.firstChild;f;){var h=f.nextSibling,y=f.nodeName;f[xl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(l===0){e.removeChild(r),hi(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);hi(t)}function yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yc(n),_u(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function I1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[xl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function eb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function tb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var xc=null;function cg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function og(e,t,n){switch(t=Rr(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ii(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_u(e)}var Mt=new Map,fg=new Set;function Mr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=Y.d;Y.d={f:nb,r:ab,D:lb,C:ib,L:rb,m:ub,X:cb,S:sb,M:ob};function nb(){var e=on.f(),t=Sr();return e||t}function ab(e){var t=oa(e);t!==null&&t.tag===5&&t.type==="form"?Dd(t):on.r(e)}var Xa=typeof document>"u"?null:document;function dg(e,t,n){var a=Xa;if(a&&typeof t=="string"&&t){var l=_t(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),fg.has(l)||(fg.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function lb(e){on.D(e),dg("dns-prefetch",e,null)}function ib(e,t){on.C(e,t),dg("preconnect",e,t)}function rb(e,t,n){on.L(e,t,n);var a=Xa;if(a&&e&&t){var l='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+_t(n.imageSizes)+'"]')):l+='[href="'+_t(e)+'"]';var r=l;switch(t){case"style":r=Za(e);break;case"script":r=Qa(e)}Mt.has(r)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(ri(r))||t==="script"&&a.querySelector(ui(r))||(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function ub(e,t){on.m(e,t);var n=Xa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+_t(a)+'"][href="'+_t(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Qa(e)}if(!Mt.has(r)&&(e=T({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ui(r)))return}a=n.createElement("link"),Fe(a,"link",e),Xe(a),n.head.appendChild(a)}}}function sb(e,t,n){on.S(e,t,n);var a=Xa;if(a&&e){var l=fa(a).hoistableStyles,r=Za(e);t=t||"default";var f=l.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(ri(r)))h.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&Sc(e,n);var y=f=a.createElement("link");Xe(y),Fe(y,"link",e),y._p=new Promise(function(E,D){y.onload=E,y.onerror=D}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Dr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},l.set(r,f)}}}function cb(e,t){on.X(e,t);var n=Xa;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ui(l)),r||(e=T({src:e,async:!0},t),(t=Mt.get(l))&&jc(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function ob(e,t){on.M(e,t);var n=Xa;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ui(l)),r||(e=T({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&jc(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function hg(e,t,n,a){var l=(l=ee.current)?Mr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Za(n.href),n=fa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Za(n.href);var r=fa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(ri(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||fb(l,e,n,f.state))),t&&a===null)throw Error(s(528,""));return f}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qa(n),n=fa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Za(e){return'href="'+_t(e)+'"'}function ri(e){return'link[rel="stylesheet"]['+e+"]"}function gg(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function fb(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Xe(t),e.head.appendChild(t))}function Qa(e){return'[src="'+_t(e)+'"]'}function ui(e){return"script[async]"+e}function mg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(a)return t.instance=a,Xe(a),a;var l=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),Fe(a,"style",l),Dr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Za(n.href);var r=e.querySelector(ri(l));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;a=gg(n),(l=Mt.get(l))&&Sc(a,l),r=(e.ownerDocument||e).createElement("link"),Xe(r);var f=r;return f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),Fe(r,"link",a),t.state.loading|=4,Dr(r,n.precedence,e),t.instance=r;case"script":return r=Qa(n.src),(l=e.querySelector(ui(r)))?(t.instance=l,Xe(l),l):(a=n,(l=Mt.get(r))&&(a=T({},n),jc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Xe(l),Fe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Dr(a,n.precedence,e));return t.instance}function Dr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function pg(e,t,n){if(Or===null){var a=new Map,l=Or=new Map;l.set(n,a)}else l=Or,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[xl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function bg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function db(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var si=null;function hb(){}function gb(e,t,n){if(si===null)throw Error(s(475));var a=si;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Za(n.href),r=e.querySelector(ri(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Cr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=gg(n),(l=Mt.get(l))&&Sc(n,l),r=r.createElement("link"),Xe(r);var f=r;f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Cr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function mb(){if(si===null)throw Error(s(475));var e=si;return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cr(){if(this.count--,this.count===0){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Br=null;function _c(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Br=new Map,t.forEach(pb,e),Br=null,Cr.call(e))}function pb(e,t){if(!(t.state.loading&4)){var n=Br.get(e);if(n)var a=n.get(null);else{n=new Map,Br.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Cr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ci={$$typeof:Z,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function bb(e,t,n,a,l,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function vg(e,t,n,a,l,r,f,h,y,E,D,C){return e=new bb(e,t,n,f,h,y,E,C),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=ls(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},ss(r),e}function xg(e){return e?(e=_a,e):_a}function Sg(e,t,n,a,l,r){l=xg(l),a.context===null?a.context=l:a.pendingContext=l,a=xn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Sn(e,a,t),n!==null&&(vt(n,e,t),Gl(n,e,t))}function jg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zc(e,t){jg(e,t),(e=e.alternate)&&jg(e,t)}function _g(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&vt(t,e,67108864),zc(e,67108864)}}var Nr=!0;function yb(e,t,n,a){var l=M.T;M.T=null;var r=Y.p;try{Y.p=2,Ec(e,t,n,a)}finally{Y.p=r,M.T=l}}function vb(e,t,n,a){var l=M.T;M.T=null;var r=Y.p;try{Y.p=8,Ec(e,t,n,a)}finally{Y.p=r,M.T=l}}function Ec(e,t,n,a){if(Nr){var l=Tc(a);if(l===null)dc(e,t,a,Ur,n),Eg(e,a);else if(Sb(l,e,t,n,a))a.stopPropagation();else if(Eg(e,a),t&4&&-1<xb.indexOf(e)){for(;l!==null;){var r=oa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=qn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var y=1<<31-dt(f);h.entanglements[1]|=y,f&=~y}Vt(r),(ye&6)===0&&(vr=kt()+500,ni(0))}}break;case 13:h=ja(r,2),h!==null&&vt(h,r,2),Sr(),zc(r,2)}if(r=Tc(a),r===null&&dc(e,t,a,Ur,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else dc(e,t,a,null,n)}}function Tc(e){return e=Du(e),wc(e)}var Ur=null;function wc(e){if(Ur=null,e=ca(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ur=e,null}function zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ip()){case Ho:return 2;case ko:return 8;case Ai:case rp:return 32;case Go:return 268435456;default:return 32}default:return 32}}var Ac=!1,Bn=null,Nn=null,Un=null,oi=new Map,fi=new Map,Hn=[],xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function di(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=oa(t),t!==null&&_g(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Sb(e,t,n,a,l){switch(t){case"focusin":return Bn=di(Bn,e,t,n,a,l),!0;case"dragenter":return Nn=di(Nn,e,t,n,a,l),!0;case"mouseover":return Un=di(Un,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return oi.set(r,di(oi.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,fi.set(r,di(fi.get(r)||null,e,t,n,a,l)),!0}return!1}function Tg(e){var t=ca(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,gp(e.priority,function(){if(n.tag===13){var a=yt();a=xu(a);var l=ja(n,a);l!==null&&vt(l,n,a),zc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Mu=a,n.target.dispatchEvent(a),Mu=null}else return t=oa(n),t!==null&&_g(t),e.blockedOn=n,!1;t.shift()}return!0}function wg(e,t,n){Hr(e)&&n.delete(t)}function jb(){Ac=!1,Bn!==null&&Hr(Bn)&&(Bn=null),Nn!==null&&Hr(Nn)&&(Nn=null),Un!==null&&Hr(Un)&&(Un=null),oi.forEach(wg),fi.forEach(wg)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ac||(Ac=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,jb)))}var Gr=null;function Ag(e){Gr!==e&&(Gr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Gr===e&&(Gr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(wc(a||n)===null)continue;break}var r=oa(n);r!==null&&(e.splice(t,3),t-=3,ws(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function hi(e){function t(y){return kr(y,e)}Bn!==null&&kr(Bn,e),Nn!==null&&kr(Nn,e),Un!==null&&kr(Un,e),oi.forEach(t),fi.forEach(t);for(var n=0;n<Hn.length;n++){var a=Hn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&Hn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[it]||null;if(typeof r=="function")f||Ag(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[it]||null)h=f.formAction;else if(wc(l)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Ag(n)}}}function Rc(e){this._internalRoot=e}Lr.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=yt();Sg(n,a,e,t,null,null)},Lr.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sg(e.current,2,null,e,null,null),Sr(),t[sa]=null}};function Lr(e){this._internalRoot=e}Lr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&Tg(e)}};var Rg=u.version;if(Rg!=="19.1.0")throw Error(s(527,Rg,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var _b={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qr.isDisabled&&qr.supportsFiber)try{bl=qr.inject(_b),ft=qr}catch{}}return mi.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",l=Zd,r=Qd,f=Kd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=vg(e,1,!1,null,null,n,a,l,r,f,h,null),e[sa]=t.current,fc(e),new Rc(t)},mi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,l="",r=Zd,f=Qd,h=Kd,y=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),t=vg(e,1,!0,t,n??null,a,l,r,f,h,y,E),t.context=xg(null),n=t.current,a=yt(),a=xu(a),l=xn(a),l.callback=null,Sn(n,l,a),n=a,t.current.lanes=n,vl(t,n),Vt(t),e[sa]=t.current,fc(e),new Lr(t)},mi.version="19.1.0",mi}var Gg;function Bb(){if(Gg)return Oc.exports;Gg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Oc.exports=Cb(),Oc.exports}var Nb=Bb();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lg="popstate";function Ub(i={}){function u(s,d){let{pathname:g,search:p,hash:j}=s.location;return oo("",{pathname:g,search:p,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(s,d){return typeof d=="string"?d:_i(d)}return kb(u,o,null,i)}function Me(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Ut(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Hb(){return Math.random().toString(36).substring(2,10)}function qg(i,u){return{usr:i.state,key:i.key,idx:u}}function oo(i,u,o=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?hl(u):u,state:o,key:u&&u.key||s||Hb()}}function _i({pathname:i="/",search:u="",hash:o=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function hl(i){let u={};if(i){let o=i.indexOf("#");o>=0&&(u.hash=i.substring(o),i=i.substring(0,o));let s=i.indexOf("?");s>=0&&(u.search=i.substring(s),i=i.substring(0,s)),i&&(u.pathname=i)}return u}function kb(i,u,o,s={}){let{window:d=document.defaultView,v5Compat:g=!1}=s,p=d.history,j="POP",v=null,m=T();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function T(){return(p.state||{idx:null}).idx}function B(){j="POP";let X=T(),H=X==null?null:X-m;m=X,v&&v({action:j,location:q.location,delta:H})}function U(X,H){j="PUSH";let $=oo(q.location,X,H);m=T()+1;let Z=qg($,m),ae=q.createHref($);try{p.pushState(Z,"",ae)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;d.location.assign(ae)}g&&v&&v({action:j,location:q.location,delta:1})}function k(X,H){j="REPLACE";let $=oo(q.location,X,H);m=T();let Z=qg($,m),ae=q.createHref($);p.replaceState(Z,"",ae),g&&v&&v({action:j,location:q.location,delta:0})}function G(X){return Gb(X)}let q={get action(){return j},get location(){return i(d,p)},listen(X){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Lg,B),v=X,()=>{d.removeEventListener(Lg,B),v=null}},createHref(X){return u(d,X)},createURL:G,encodeLocation(X){let H=G(X);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:k,go(X){return p.go(X)}};return q}function Gb(i,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Me(o,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:_i(i);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function vm(i,u,o="/"){return Lb(i,u,o,!1)}function Lb(i,u,o,s){let d=typeof u=="string"?hl(u):u,g=hn(d.pathname||"/",o);if(g==null)return null;let p=xm(i);qb(p);let j=null;for(let v=0;j==null&&v<p.length;++v){let m=Pb(g);j=Wb(p[v],m,s)}return j}function xm(i,u=[],o=[],s=""){let d=(g,p,j)=>{let v={relativePath:j===void 0?g.path||"":j,caseSensitive:g.caseSensitive===!0,childrenIndex:p,route:g};v.relativePath.startsWith("/")&&(Me(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length));let m=dn([s,v.relativePath]),T=o.concat(v);g.children&&g.children.length>0&&(Me(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),xm(g.children,u,T,m)),!(g.path==null&&!g.index)&&u.push({path:m,score:Jb(m,g.index),routesMeta:T})};return i.forEach((g,p)=>{if(g.path===""||!g.path?.includes("?"))d(g,p);else for(let j of Sm(g.path))d(g,p,j)}),u}function Sm(i){let u=i.split("/");if(u.length===0)return[];let[o,...s]=u,d=o.endsWith("?"),g=o.replace(/\?$/,"");if(s.length===0)return d?[g,""]:[g];let p=Sm(s.join("/")),j=[];return j.push(...p.map(v=>v===""?g:[g,v].join("/"))),d&&j.push(...p),j.map(v=>i.startsWith("/")&&v===""?"/":v)}function qb(i){i.sort((u,o)=>u.score!==o.score?o.score-u.score:$b(u.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var Yb=/^:[\w-]+$/,Vb=3,Xb=2,Zb=1,Qb=10,Kb=-2,Yg=i=>i==="*";function Jb(i,u){let o=i.split("/"),s=o.length;return o.some(Yg)&&(s+=Kb),u&&(s+=Xb),o.filter(d=>!Yg(d)).reduce((d,g)=>d+(Yb.test(g)?Vb:g===""?Zb:Qb),s)}function $b(i,u){return i.length===u.length&&i.slice(0,-1).every((s,d)=>s===u[d])?i[i.length-1]-u[u.length-1]:0}function Wb(i,u,o=!1){let{routesMeta:s}=i,d={},g="/",p=[];for(let j=0;j<s.length;++j){let v=s[j],m=j===s.length-1,T=g==="/"?u:u.slice(g.length)||"/",B=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},T),U=v.route;if(!B&&m&&o&&!s[s.length-1].route.index&&(B=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},T)),!B)return null;Object.assign(d,B.params),p.push({params:d,pathname:dn([g,B.pathname]),pathnameBase:ny(dn([g,B.pathnameBase])),route:U}),B.pathnameBase!=="/"&&(g=dn([g,B.pathnameBase]))}return p}function lu(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,s]=Fb(i.path,i.caseSensitive,i.end),d=u.match(o);if(!d)return null;let g=d[0],p=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:s.reduce((m,{paramName:T,isOptional:B},U)=>{if(T==="*"){let G=j[U]||"";p=g.slice(0,g.length-G.length).replace(/(.)\/+$/,"$1")}const k=j[U];return B&&!k?m[T]=void 0:m[T]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:g,pathnameBase:p,pattern:i}}function Fb(i,u=!1,o=!0){Ut(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,j,v)=>(s.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),s]}function Pb(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Ut(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function hn(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,s=i.charAt(o);return s&&s!=="/"?null:i.slice(o)||"/"}function Ib(i,u="/"){let{pathname:o,search:s="",hash:d=""}=typeof i=="string"?hl(i):i;return{pathname:o?o.startsWith("/")?o:ey(o,u):u,search:ay(s),hash:ly(d)}}function ey(i,u){let o=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function Uc(i,u,o,s){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ty(i){return i.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function So(i){let u=ty(i);return u.map((o,s)=>s===u.length-1?o.pathname:o.pathnameBase)}function jo(i,u,o,s=!1){let d;typeof i=="string"?d=hl(i):(d={...i},Me(!d.pathname||!d.pathname.includes("?"),Uc("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Uc("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Uc("#","search","hash",d)));let g=i===""||d.pathname==="",p=g?"/":d.pathname,j;if(p==null)j=o;else{let B=u.length-1;if(!s&&p.startsWith("..")){let U=p.split("/");for(;U[0]==="..";)U.shift(),B-=1;d.pathname=U.join("/")}j=B>=0?u[B]:"/"}let v=Ib(d,j),m=p&&p!=="/"&&p.endsWith("/"),T=(g||p===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(m||T)&&(v.pathname+="/"),v}var dn=i=>i.join("/").replace(/\/\/+/g,"/"),ny=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ly=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function iy(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var jm=["POST","PUT","PATCH","DELETE"];new Set(jm);var ry=["GET",...jm];new Set(ry);var gl=R.createContext(null);gl.displayName="DataRouter";var cu=R.createContext(null);cu.displayName="DataRouterState";R.createContext(!1);var _m=R.createContext({isTransitioning:!1});_m.displayName="ViewTransition";var uy=R.createContext(new Map);uy.displayName="Fetchers";var sy=R.createContext(null);sy.displayName="Await";var Ht=R.createContext(null);Ht.displayName="Navigation";var Ei=R.createContext(null);Ei.displayName="Location";var Zt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Zt.displayName="Route";var _o=R.createContext(null);_o.displayName="RouteError";function cy(i,{relative:u}={}){Me(ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=R.useContext(Ht),{hash:d,pathname:g,search:p}=Ti(i,{relative:u}),j=g;return o!=="/"&&(j=g==="/"?o:dn([o,g])),s.createHref({pathname:j,search:p,hash:d})}function ml(){return R.useContext(Ei)!=null}function gn(){return Me(ml(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ei).location}var zm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Em(i){R.useContext(Ht).static||R.useLayoutEffect(i)}function Tm(){let{isDataRoute:i}=R.useContext(Zt);return i?jy():oy()}function oy(){Me(ml(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(gl),{basename:u,navigator:o}=R.useContext(Ht),{matches:s}=R.useContext(Zt),{pathname:d}=gn(),g=JSON.stringify(So(s)),p=R.useRef(!1);return Em(()=>{p.current=!0}),R.useCallback((v,m={})=>{if(Ut(p.current,zm),!p.current)return;if(typeof v=="number"){o.go(v);return}let T=jo(v,JSON.parse(g),d,m.relative==="path");i==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:dn([u,T.pathname])),(m.replace?o.replace:o.push)(T,m.state,m)},[u,o,g,d,i])}R.createContext(null);function Ti(i,{relative:u}={}){let{matches:o}=R.useContext(Zt),{pathname:s}=gn(),d=JSON.stringify(So(o));return R.useMemo(()=>jo(i,JSON.parse(d),s,u==="path"),[i,d,s,u])}function fy(i,u){return wm(i,u)}function wm(i,u,o,s){Me(ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=R.useContext(Ht),{matches:g}=R.useContext(Zt),p=g[g.length-1],j=p?p.params:{},v=p?p.pathname:"/",m=p?p.pathnameBase:"/",T=p&&p.route;{let H=T&&T.path||"";Am(v,!T||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let B=gn(),U;if(u){let H=typeof u=="string"?hl(u):u;Me(m==="/"||H.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=B;let k=U.pathname||"/",G=k;if(m!=="/"){let H=m.replace(/^\//,"").split("/");G="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=vm(i,{pathname:G});Ut(T||q!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Ut(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=py(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},j,H.params),pathname:dn([m,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?m:dn([m,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),g,o,s);return u&&X?R.createElement(Ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},X):X}function dy(){let i=Sy(),u=iy(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},g={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",i),p=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:g},"ErrorBoundary")," or"," ",R.createElement("code",{style:g},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),o?R.createElement("pre",{style:d},o):null,p)}var hy=R.createElement(dy,null),gy=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){console.error("React Router caught the following error during render",i,u)}render(){return this.state.error!==void 0?R.createElement(Zt.Provider,{value:this.props.routeContext},R.createElement(_o.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function my({routeContext:i,match:u,children:o}){let s=R.useContext(gl);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(Zt.Provider,{value:i},o)}function py(i,u=[],o=null,s=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let d=i,g=o?.errors;if(g!=null){let v=d.findIndex(m=>m.route.id&&g?.[m.route.id]!==void 0);Me(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let p=!1,j=-1;if(o)for(let v=0;v<d.length;v++){let m=d[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(j=v),m.route.id){let{loaderData:T,errors:B}=o,U=m.route.loader&&!T.hasOwnProperty(m.route.id)&&(!B||B[m.route.id]===void 0);if(m.route.lazy||U){p=!0,j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}return d.reduceRight((v,m,T)=>{let B,U=!1,k=null,G=null;o&&(B=g&&m.route.id?g[m.route.id]:void 0,k=m.route.errorElement||hy,p&&(j<0&&T===0?(Am("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,G=null):j===T&&(U=!0,G=m.route.hydrateFallbackElement||null)));let q=u.concat(d.slice(0,T+1)),X=()=>{let H;return B?H=k:U?H=G:m.route.Component?H=R.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=v,R.createElement(my,{match:m,routeContext:{outlet:v,matches:q,isDataRoute:o!=null},children:H})};return o&&(m.route.ErrorBoundary||m.route.errorElement||T===0)?R.createElement(gy,{location:o.location,revalidation:o.revalidation,component:k,error:B,children:X(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):X()},null)}function zo(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function by(i){let u=R.useContext(gl);return Me(u,zo(i)),u}function yy(i){let u=R.useContext(cu);return Me(u,zo(i)),u}function vy(i){let u=R.useContext(Zt);return Me(u,zo(i)),u}function Eo(i){let u=vy(i),o=u.matches[u.matches.length-1];return Me(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function xy(){return Eo("useRouteId")}function Sy(){let i=R.useContext(_o),u=yy("useRouteError"),o=Eo("useRouteError");return i!==void 0?i:u.errors?.[o]}function jy(){let{router:i}=by("useNavigate"),u=Eo("useNavigate"),o=R.useRef(!1);return Em(()=>{o.current=!0}),R.useCallback(async(d,g={})=>{Ut(o.current,zm),o.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:u,...g}))},[i,u])}var Vg={};function Am(i,u,o){!u&&!Vg[i]&&(Vg[i]=!0,Ut(!1,o))}R.memo(_y);function _y({routes:i,future:u,state:o}){return wm(i,void 0,o,u)}function zy({to:i,replace:u,state:o,relative:s}){Me(ml(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=R.useContext(Ht);Ut(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=R.useContext(Zt),{pathname:p}=gn(),j=Tm(),v=jo(i,So(g),p,s==="path"),m=JSON.stringify(v);return R.useEffect(()=>{j(JSON.parse(m),{replace:u,state:o,relative:s})},[j,m,s,u,o]),null}function vi(i){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ey({basename:i="/",children:u=null,location:o,navigationType:s="POP",navigator:d,static:g=!1}){Me(!ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=i.replace(/^\/*/,"/"),j=R.useMemo(()=>({basename:p,navigator:d,static:g,future:{}}),[p,d,g]);typeof o=="string"&&(o=hl(o));let{pathname:v="/",search:m="",hash:T="",state:B=null,key:U="default"}=o,k=R.useMemo(()=>{let G=hn(v,p);return G==null?null:{location:{pathname:G,search:m,hash:T,state:B,key:U},navigationType:s}},[p,v,m,T,B,U,s]);return Ut(k!=null,`<Router basename="${p}"> is not able to match the URL "${v}${m}${T}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:R.createElement(Ht.Provider,{value:j},R.createElement(Ei.Provider,{children:u,value:k}))}function Ty({children:i,location:u}){return fy(fo(i),u)}function fo(i,u=[]){let o=[];return R.Children.forEach(i,(s,d)=>{if(!R.isValidElement(s))return;let g=[...u,d];if(s.type===R.Fragment){o.push.apply(o,fo(s.props.children,g));return}Me(s.type===vi,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||g.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=fo(s.props.children,g)),o.push(p)}),o}var Fr="get",Pr="application/x-www-form-urlencoded";function ou(i){return i!=null&&typeof i.tagName=="string"}function wy(i){return ou(i)&&i.tagName.toLowerCase()==="button"}function Ay(i){return ou(i)&&i.tagName.toLowerCase()==="form"}function Ry(i){return ou(i)&&i.tagName.toLowerCase()==="input"}function My(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Dy(i,u){return i.button===0&&(!u||u==="_self")&&!My(i)}var Yr=null;function Oy(){if(Yr===null)try{new FormData(document.createElement("form"),0),Yr=!1}catch{Yr=!0}return Yr}var Cy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hc(i){return i!=null&&!Cy.has(i)?(Ut(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pr}"`),null):i}function By(i,u){let o,s,d,g,p;if(Ay(i)){let j=i.getAttribute("action");s=j?hn(j,u):null,o=i.getAttribute("method")||Fr,d=Hc(i.getAttribute("enctype"))||Pr,g=new FormData(i)}else if(wy(i)||Ry(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||j.getAttribute("action");if(s=v?hn(v,u):null,o=i.getAttribute("formmethod")||j.getAttribute("method")||Fr,d=Hc(i.getAttribute("formenctype"))||Hc(j.getAttribute("enctype"))||Pr,g=new FormData(j,i),!Oy()){let{name:m,type:T,value:B}=i;if(T==="image"){let U=m?`${m}.`:"";g.append(`${U}x`,"0"),g.append(`${U}y`,"0")}else m&&g.append(m,B)}}else{if(ou(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Fr,s=null,d=Pr,p=i}return g&&d==="text/plain"&&(p=g,g=void 0),{action:s,method:o.toLowerCase(),encType:d,formData:g,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function To(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Ny(i,u,o){let s=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s.pathname==="/"?s.pathname=`_root.${o}`:u&&hn(s.pathname,u)==="/"?s.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function Uy(i,u){if(i.id in u)return u[i.id];try{let o=await import(i.module);return u[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function ky(i,u,o){let s=await Promise.all(i.map(async d=>{let g=u.routes[d.route.id];if(g){let p=await Uy(g,o);return p.links?p.links():[]}return[]}));return Yy(s.flat(1).filter(Hy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Xg(i,u,o,s,d,g){let p=(v,m)=>o[m]?v.route.id!==o[m].route.id:!0,j=(v,m)=>o[m].pathname!==v.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==v.params["*"];return g==="assets"?u.filter((v,m)=>p(v,m)||j(v,m)):g==="data"?u.filter((v,m)=>{let T=s.routes[v.route.id];if(!T||!T.hasLoader)return!1;if(p(v,m)||j(v,m))return!0;if(v.route.shouldRevalidate){let B=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function Gy(i,u,{includeHydrateFallback:o}={}){return Ly(i.map(s=>{let d=u.routes[s.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Ly(i){return[...new Set(i)]}function qy(i){let u={},o=Object.keys(i).sort();for(let s of o)u[s]=i[s];return u}function Yy(i,u){let o=new Set;return new Set(u),i.reduce((s,d)=>{let g=JSON.stringify(qy(d));return o.has(g)||(o.add(g),s.push({key:g,link:d})),s},[])}function Rm(){let i=R.useContext(gl);return To(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Vy(){let i=R.useContext(cu);return To(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var wo=R.createContext(void 0);wo.displayName="FrameworkContext";function Mm(){let i=R.useContext(wo);return To(i,"You must render this element inside a <HydratedRouter> element"),i}function Xy(i,u){let o=R.useContext(wo),[s,d]=R.useState(!1),[g,p]=R.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:m,onMouseLeave:T,onTouchStart:B}=u,U=R.useRef(null);R.useEffect(()=>{if(i==="render"&&p(!0),i==="viewport"){let q=H=>{H.forEach($=>{p($.isIntersecting)})},X=new IntersectionObserver(q,{threshold:.5});return U.current&&X.observe(U.current),()=>{X.disconnect()}}},[i]),R.useEffect(()=>{if(s){let q=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(q)}}},[s]);let k=()=>{d(!0)},G=()=>{d(!1),p(!1)};return o?i!=="intent"?[g,U,{}]:[g,U,{onFocus:pi(j,k),onBlur:pi(v,G),onMouseEnter:pi(m,k),onMouseLeave:pi(T,G),onTouchStart:pi(B,k)}]:[!1,U,{}]}function pi(i,u){return o=>{i&&i(o),o.defaultPrevented||u(o)}}function Zy({page:i,...u}){let{router:o}=Rm(),s=R.useMemo(()=>vm(o.routes,i,o.basename),[o.routes,i,o.basename]);return s?R.createElement(Ky,{page:i,matches:s,...u}):null}function Qy(i){let{manifest:u,routeModules:o}=Mm(),[s,d]=R.useState([]);return R.useEffect(()=>{let g=!1;return ky(i,u,o).then(p=>{g||d(p)}),()=>{g=!0}},[i,u,o]),s}function Ky({page:i,matches:u,...o}){let s=gn(),{manifest:d,routeModules:g}=Mm(),{basename:p}=Rm(),{loaderData:j,matches:v}=Vy(),m=R.useMemo(()=>Xg(i,u,v,d,s,"data"),[i,u,v,d,s]),T=R.useMemo(()=>Xg(i,u,v,d,s,"assets"),[i,u,v,d,s]),B=R.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let G=new Set,q=!1;if(u.forEach(H=>{let $=d.routes[H.route.id];!$||!$.hasLoader||(!m.some(Z=>Z.route.id===H.route.id)&&H.route.id in j&&g[H.route.id]?.shouldRevalidate||$.hasClientLoader?q=!0:G.add(H.route.id))}),G.size===0)return[];let X=Ny(i,p,"data");return q&&G.size>0&&X.searchParams.set("_routes",u.filter(H=>G.has(H.route.id)).map(H=>H.route.id).join(",")),[X.pathname+X.search]},[p,j,s,d,m,u,i,g]),U=R.useMemo(()=>Gy(T,d),[T,d]),k=Qy(T);return R.createElement(R.Fragment,null,B.map(G=>R.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...o})),U.map(G=>R.createElement("link",{key:G,rel:"modulepreload",href:G,...o})),k.map(({key:G,link:q})=>R.createElement("link",{key:G,...q})))}function Jy(...i){return u=>{i.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var Dm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dm&&(window.__reactRouterVersion="7.7.1")}catch{}function $y({basename:i,children:u,window:o}){let s=R.useRef();s.current==null&&(s.current=Ub({window:o,v5Compat:!0}));let d=s.current,[g,p]=R.useState({action:d.action,location:d.location}),j=R.useCallback(v=>{R.startTransition(()=>p(v))},[p]);return R.useLayoutEffect(()=>d.listen(j),[d,j]),R.createElement(Ey,{basename:i,children:u,location:g.location,navigationType:g.action,navigator:d})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ao=R.forwardRef(function({onClick:u,discover:o="render",prefetch:s="none",relative:d,reloadDocument:g,replace:p,state:j,target:v,to:m,preventScrollReset:T,viewTransition:B,...U},k){let{basename:G}=R.useContext(Ht),q=typeof m=="string"&&Om.test(m),X,H=!1;if(typeof m=="string"&&q&&(X=m,Dm))try{let _e=new URL(window.location.href),nt=m.startsWith("//")?new URL(_e.protocol+m):new URL(m),lt=hn(nt.pathname,G);nt.origin===_e.origin&&lt!=null?m=lt+nt.search+nt.hash:H=!0}catch{Ut(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=cy(m,{relative:d}),[Z,ae,Q]=Xy(s,U),le=Iy(m,{replace:p,state:j,target:v,preventScrollReset:T,relative:d,viewTransition:B});function W(_e){u&&u(_e),_e.defaultPrevented||le(_e)}let Te=R.createElement("a",{...U,...Q,href:X||$,onClick:H||g?u:W,ref:Jy(k,ae),target:v,"data-discover":!q&&o==="render"?"true":void 0});return Z&&!q?R.createElement(R.Fragment,null,Te,R.createElement(Zy,{page:$})):Te});Ao.displayName="Link";var Wy=R.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:s="",end:d=!1,style:g,to:p,viewTransition:j,children:v,...m},T){let B=Ti(p,{relative:m.relative}),U=gn(),k=R.useContext(cu),{navigator:G,basename:q}=R.useContext(Ht),X=k!=null&&lv(B)&&j===!0,H=G.encodeLocation?G.encodeLocation(B).pathname:B.pathname,$=U.pathname,Z=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||($=$.toLowerCase(),Z=Z?Z.toLowerCase():null,H=H.toLowerCase()),Z&&q&&(Z=hn(Z,q)||Z);const ae=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Q=$===H||!d&&$.startsWith(H)&&$.charAt(ae)==="/",le=Z!=null&&(Z===H||!d&&Z.startsWith(H)&&Z.charAt(H.length)==="/"),W={isActive:Q,isPending:le,isTransitioning:X},Te=Q?u:void 0,_e;typeof s=="function"?_e=s(W):_e=[s,Q?"active":null,le?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let nt=typeof g=="function"?g(W):g;return R.createElement(Ao,{...m,"aria-current":Te,className:_e,ref:T,style:nt,to:p,viewTransition:j},typeof v=="function"?v(W):v)});Wy.displayName="NavLink";var Fy=R.forwardRef(({discover:i="render",fetcherKey:u,navigate:o,reloadDocument:s,replace:d,state:g,method:p=Fr,action:j,onSubmit:v,relative:m,preventScrollReset:T,viewTransition:B,...U},k)=>{let G=nv(),q=av(j,{relative:m}),X=p.toLowerCase()==="get"?"get":"post",H=typeof j=="string"&&Om.test(j),$=Z=>{if(v&&v(Z),Z.defaultPrevented)return;Z.preventDefault();let ae=Z.nativeEvent.submitter,Q=ae?.getAttribute("formmethod")||p;G(ae||Z.currentTarget,{fetcherKey:u,method:Q,navigate:o,replace:d,state:g,relative:m,preventScrollReset:T,viewTransition:B})};return R.createElement("form",{ref:k,method:X,action:q,onSubmit:s?v:$,...U,"data-discover":!H&&i==="render"?"true":void 0})});Fy.displayName="Form";function Py(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cm(i){let u=R.useContext(gl);return Me(u,Py(i)),u}function Iy(i,{target:u,replace:o,state:s,preventScrollReset:d,relative:g,viewTransition:p}={}){let j=Tm(),v=gn(),m=Ti(i,{relative:g});return R.useCallback(T=>{if(Dy(T,u)){T.preventDefault();let B=o!==void 0?o:_i(v)===_i(m);j(i,{replace:B,state:s,preventScrollReset:d,relative:g,viewTransition:p})}},[v,j,m,o,s,u,i,d,g,p])}var ev=0,tv=()=>`__${String(++ev)}__`;function nv(){let{router:i}=Cm("useSubmit"),{basename:u}=R.useContext(Ht),o=xy();return R.useCallback(async(s,d={})=>{let{action:g,method:p,encType:j,formData:v,body:m}=By(s,u);if(d.navigate===!1){let T=d.fetcherKey||tv();await i.fetch(T,o,d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||p,formEncType:d.encType||j,flushSync:d.flushSync})}else await i.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||p,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,u,o])}function av(i,{relative:u}={}){let{basename:o}=R.useContext(Ht),s=R.useContext(Zt);Me(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),g={...Ti(i||".",{relative:u})},p=gn();if(i==null){g.search=p.search;let j=new URLSearchParams(g.search),v=j.getAll("index");if(v.some(T=>T==="")){j.delete("index"),v.filter(B=>B).forEach(B=>j.append("index",B));let T=j.toString();g.search=T?`?${T}`:""}}return(!i||i===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(g.pathname=g.pathname==="/"?o:dn([o,g.pathname])),_i(g)}function lv(i,{relative:u}={}){let o=R.useContext(_m);Me(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Cm("useViewTransitionState"),d=Ti(i,{relative:u});if(!o.isTransitioning)return!1;let g=hn(o.currentLocation.pathname,s)||o.currentLocation.pathname,p=hn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return lu(d.pathname,p)!=null||lu(d.pathname,g)!=null}var ot=function(){return ot=Object.assign||function(u){for(var o,s=1,d=arguments.length;s<d;s++){o=arguments[s];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(u[g]=o[g])}return u},ot.apply(this,arguments)};function iu(i,u,o){if(o||arguments.length===2)for(var s=0,d=u.length,g;s<d;s++)(g||!(s in u))&&(g||(g=Array.prototype.slice.call(u,0,s)),g[s]=u[s]);return i.concat(g||Array.prototype.slice.call(u))}var we="-ms-",Si="-moz-",be="-webkit-",Bm="comm",fu="rule",Ro="decl",iv="@import",Nm="@keyframes",rv="@layer",Um=Math.abs,Mo=String.fromCharCode,ho=Object.assign;function uv(i,u){return Je(i,0)^45?(((u<<2^Je(i,0))<<2^Je(i,1))<<2^Je(i,2))<<2^Je(i,3):0}function Hm(i){return i.trim()}function fn(i,u){return(i=u.exec(i))?i[0]:i}function re(i,u,o){return i.replace(u,o)}function Ir(i,u,o){return i.indexOf(u,o)}function Je(i,u){return i.charCodeAt(u)|0}function sl(i,u,o){return i.slice(u,o)}function Xt(i){return i.length}function km(i){return i.length}function xi(i,u){return u.push(i),i}function sv(i,u){return i.map(u).join("")}function Zg(i,u){return i.filter(function(o){return!fn(o,u)})}var du=1,cl=1,Gm=0,Dt=0,ke=0,pl="";function hu(i,u,o,s,d,g,p,j){return{value:i,root:u,parent:o,type:s,props:d,children:g,line:du,column:cl,length:p,return:"",siblings:j}}function Gn(i,u){return ho(hu("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},u)}function Ka(i){for(;i.root;)i=Gn(i.root,{children:[i]});xi(i,i.siblings)}function cv(){return ke}function ov(){return ke=Dt>0?Je(pl,--Dt):0,cl--,ke===10&&(cl=1,du--),ke}function Nt(){return ke=Dt<Gm?Je(pl,Dt++):0,cl++,ke===10&&(cl=1,du++),ke}function ra(){return Je(pl,Dt)}function eu(){return Dt}function gu(i,u){return sl(pl,i,u)}function go(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fv(i){return du=cl=1,Gm=Xt(pl=i),Dt=0,[]}function dv(i){return pl="",i}function kc(i){return Hm(gu(Dt-1,mo(i===91?i+2:i===40?i+1:i)))}function hv(i){for(;(ke=ra())&&ke<33;)Nt();return go(i)>2||go(ke)>3?"":" "}function gv(i,u){for(;--u&&Nt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return gu(i,eu()+(u<6&&ra()==32&&Nt()==32))}function mo(i){for(;Nt();)switch(ke){case i:return Dt;case 34:case 39:i!==34&&i!==39&&mo(ke);break;case 40:i===41&&mo(i);break;case 92:Nt();break}return Dt}function mv(i,u){for(;Nt()&&i+ke!==57;)if(i+ke===84&&ra()===47)break;return"/*"+gu(u,Dt-1)+"*"+Mo(i===47?i:Nt())}function pv(i){for(;!go(ra());)Nt();return gu(i,Dt)}function bv(i){return dv(tu("",null,null,null,[""],i=fv(i),0,[0],i))}function tu(i,u,o,s,d,g,p,j,v){for(var m=0,T=0,B=p,U=0,k=0,G=0,q=1,X=1,H=1,$=0,Z="",ae=d,Q=g,le=s,W=Z;X;)switch(G=$,$=Nt()){case 40:if(G!=108&&Je(W,B-1)==58){Ir(W+=re(kc($),"&","&\f"),"&\f",Um(m?j[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:W+=kc($);break;case 9:case 10:case 13:case 32:W+=hv(G);break;case 92:W+=gv(eu()-1,7);continue;case 47:switch(ra()){case 42:case 47:xi(yv(mv(Nt(),eu()),u,o,v),v);break;default:W+="/"}break;case 123*q:j[m++]=Xt(W)*H;case 125*q:case 59:case 0:switch($){case 0:case 125:X=0;case 59+T:H==-1&&(W=re(W,/\f/g,"")),k>0&&Xt(W)-B&&xi(k>32?Kg(W+";",s,o,B-1,v):Kg(re(W," ","")+";",s,o,B-2,v),v);break;case 59:W+=";";default:if(xi(le=Qg(W,u,o,m,T,d,j,Z,ae=[],Q=[],B,g),g),$===123)if(T===0)tu(W,u,le,le,ae,g,B,j,Q);else switch(U===99&&Je(W,3)===110?100:U){case 100:case 108:case 109:case 115:tu(i,le,le,s&&xi(Qg(i,le,le,0,0,d,j,Z,d,ae=[],B,Q),Q),d,Q,B,j,s?ae:Q);break;default:tu(W,le,le,le,[""],Q,0,j,Q)}}m=T=k=0,q=H=1,Z=W="",B=p;break;case 58:B=1+Xt(W),k=G;default:if(q<1){if($==123)--q;else if($==125&&q++==0&&ov()==125)continue}switch(W+=Mo($),$*q){case 38:H=T>0?1:(W+="\f",-1);break;case 44:j[m++]=(Xt(W)-1)*H,H=1;break;case 64:ra()===45&&(W+=kc(Nt())),U=ra(),T=B=Xt(Z=W+=pv(eu())),$++;break;case 45:G===45&&Xt(W)==2&&(q=0)}}return g}function Qg(i,u,o,s,d,g,p,j,v,m,T,B){for(var U=d-1,k=d===0?g:[""],G=km(k),q=0,X=0,H=0;q<s;++q)for(var $=0,Z=sl(i,U+1,U=Um(X=p[q])),ae=i;$<G;++$)(ae=Hm(X>0?k[$]+" "+Z:re(Z,/&\f/g,k[$])))&&(v[H++]=ae);return hu(i,u,o,d===0?fu:j,v,m,T,B)}function yv(i,u,o,s){return hu(i,u,o,Bm,Mo(cv()),sl(i,2,-2),0,s)}function Kg(i,u,o,s,d){return hu(i,u,o,Ro,sl(i,0,s),sl(i,s+1,-1),s,d)}function Lm(i,u,o){switch(uv(i,u)){case 5103:return be+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+i+i;case 4789:return Si+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return be+i+Si+i+we+i+i;case 5936:switch(Je(i,u+11)){case 114:return be+i+we+re(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return be+i+we+re(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return be+i+we+re(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return be+i+we+i+i;case 6165:return be+i+we+"flex-"+i+i;case 5187:return be+i+re(i,/(\w+).+(:[^]+)/,be+"box-$1$2"+we+"flex-$1$2")+i;case 5443:return be+i+we+"flex-item-"+re(i,/flex-|-self/g,"")+(fn(i,/flex-|baseline/)?"":we+"grid-row-"+re(i,/flex-|-self/g,""))+i;case 4675:return be+i+we+"flex-line-pack"+re(i,/align-content|flex-|-self/g,"")+i;case 5548:return be+i+we+re(i,"shrink","negative")+i;case 5292:return be+i+we+re(i,"basis","preferred-size")+i;case 6060:return be+"box-"+re(i,"-grow","")+be+i+we+re(i,"grow","positive")+i;case 4554:return be+re(i,/([^-])(transform)/g,"$1"+be+"$2")+i;case 6187:return re(re(re(i,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),i,"")+i;case 5495:case 3959:return re(i,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(i,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+i+i;case 4200:if(!fn(i,/flex-|baseline/))return we+"grid-column-align"+sl(i,u)+i;break;case 2592:case 3360:return we+re(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(s,d){return u=d,fn(s.props,/grid-\w+-end/)})?~Ir(i+(o=o[u].value),"span",0)?i:we+re(i,"-start","")+i+we+"grid-row-span:"+(~Ir(o,"span",0)?fn(o,/\d+/):+fn(o,/\d+/)-+fn(i,/\d+/))+";":we+re(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(s){return fn(s.props,/grid-\w+-start/)})?i:we+re(re(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return re(i,/(.+)-inline(.+)/,be+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(i)-1-u>6)switch(Je(i,u+1)){case 109:if(Je(i,u+4)!==45)break;case 102:return re(i,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+Si+(Je(i,u+3)==108?"$3":"$2-$3"))+i;case 115:return~Ir(i,"stretch",0)?Lm(re(i,"stretch","fill-available"),u,o)+i:i}break;case 5152:case 5920:return re(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,g,p,j,v,m){return we+d+":"+g+m+(p?we+d+"-span:"+(j?v:+v-+g)+m:"")+i});case 4949:if(Je(i,u+6)===121)return re(i,":",":"+be)+i;break;case 6444:switch(Je(i,Je(i,14)===45?18:11)){case 120:return re(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(i,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+we+"$2box$3")+i;case 100:return re(i,":",":"+we)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(i,"scroll-","scroll-snap-")+i}return i}function ru(i,u){for(var o="",s=0;s<i.length;s++)o+=u(i[s],s,i,u)||"";return o}function vv(i,u,o,s){switch(i.type){case rv:if(i.children.length)break;case iv:case Ro:return i.return=i.return||i.value;case Bm:return"";case Nm:return i.return=i.value+"{"+ru(i.children,s)+"}";case fu:if(!Xt(i.value=i.props.join(",")))return""}return Xt(o=ru(i.children,s))?i.return=i.value+"{"+o+"}":""}function xv(i){var u=km(i);return function(o,s,d,g){for(var p="",j=0;j<u;j++)p+=i[j](o,s,d,g)||"";return p}}function Sv(i){return function(u){u.root||(u=u.return)&&i(u)}}function jv(i,u,o,s){if(i.length>-1&&!i.return)switch(i.type){case Ro:i.return=Lm(i.value,i.length,o);return;case Nm:return ru([Gn(i,{value:re(i.value,"@","@"+be)})],s);case fu:if(i.length)return sv(o=i.props,function(d){switch(fn(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ka(Gn(i,{props:[re(d,/:(read-\w+)/,":"+Si+"$1")]})),Ka(Gn(i,{props:[d]})),ho(i,{props:Zg(o,s)});break;case"::placeholder":Ka(Gn(i,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Ka(Gn(i,{props:[re(d,/:(plac\w+)/,":"+Si+"$1")]})),Ka(Gn(i,{props:[re(d,/:(plac\w+)/,we+"input-$1")]})),Ka(Gn(i,{props:[d]})),ho(i,{props:Zg(o,s)});break}return""})}}var _v={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},ol=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",qm="active",Ym="data-styled-version",mu="6.1.19",Do=`/*!sc*/
`,uu=typeof window<"u"&&typeof document<"u",zv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),pu=Object.freeze([]),fl=Object.freeze({});function Ev(i,u,o){return o===void 0&&(o=fl),i.theme!==o.theme&&i.theme||u||o.theme}var Vm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wv=/(^-|-$)/g;function Jg(i){return i.replace(Tv,"-").replace(wv,"")}var Av=/(a)(d)/gi,Vr=52,$g=function(i){return String.fromCharCode(i+(i>25?39:97))};function po(i){var u,o="";for(u=Math.abs(i);u>Vr;u=u/Vr|0)o=$g(u%Vr)+o;return($g(u%Vr)+o).replace(Av,"$1-$2")}var Gc,Xm=5381,ul=function(i,u){for(var o=u.length;o;)i=33*i^u.charCodeAt(--o);return i},Zm=function(i){return ul(Xm,i)};function Rv(i){return po(Zm(i)>>>0)}function Mv(i){return i.displayName||i.name||"Component"}function Lc(i){return typeof i=="string"&&!0}var Qm=typeof Symbol=="function"&&Symbol.for,Km=Qm?Symbol.for("react.memo"):60115,Dv=Qm?Symbol.for("react.forward_ref"):60112,Ov={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bv=((Gc={})[Dv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[Km]=Jm,Gc);function Wg(i){return("type"in(u=i)&&u.type.$$typeof)===Km?Jm:"$$typeof"in i?Bv[i.$$typeof]:Ov;var u}var Nv=Object.defineProperty,Uv=Object.getOwnPropertyNames,Fg=Object.getOwnPropertySymbols,Hv=Object.getOwnPropertyDescriptor,kv=Object.getPrototypeOf,Pg=Object.prototype;function $m(i,u,o){if(typeof u!="string"){if(Pg){var s=kv(u);s&&s!==Pg&&$m(i,s,o)}var d=Uv(u);Fg&&(d=d.concat(Fg(u)));for(var g=Wg(i),p=Wg(u),j=0;j<d.length;++j){var v=d[j];if(!(v in Cv||o&&o[v]||p&&v in p||g&&v in g)){var m=Hv(u,v);try{Nv(i,v,m)}catch{}}}}return i}function dl(i){return typeof i=="function"}function Oo(i){return typeof i=="object"&&"styledComponentId"in i}function ia(i,u){return i&&u?"".concat(i," ").concat(u):i||u||""}function Ig(i,u){if(i.length===0)return"";for(var o=i[0],s=1;s<i.length;s++)o+=i[s];return o}function zi(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function bo(i,u,o){if(o===void 0&&(o=!1),!o&&!zi(i)&&!Array.isArray(i))return u;if(Array.isArray(u))for(var s=0;s<u.length;s++)i[s]=bo(i[s],u[s]);else if(zi(u))for(var s in u)i[s]=bo(i[s],u[s]);return i}function Co(i,u){Object.defineProperty(i,"toString",{value:u})}function wi(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Gv=function(){function i(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return i.prototype.indexOfGroup=function(u){for(var o=0,s=0;s<u;s++)o+=this.groupSizes[s];return o},i.prototype.insertRules=function(u,o){if(u>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,g=d;u>=g;)if((g<<=1)<0)throw wi(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(s),this.length=g;for(var p=d;p<g;p++)this.groupSizes[p]=0}for(var j=this.indexOfGroup(u+1),v=(p=0,o.length);p<v;p++)this.tag.insertRule(j,o[p])&&(this.groupSizes[u]++,j++)},i.prototype.clearGroup=function(u){if(u<this.length){var o=this.groupSizes[u],s=this.indexOfGroup(u),d=s+o;this.groupSizes[u]=0;for(var g=s;g<d;g++)this.tag.deleteRule(s)}},i.prototype.getGroup=function(u){var o="";if(u>=this.length||this.groupSizes[u]===0)return o;for(var s=this.groupSizes[u],d=this.indexOfGroup(u),g=d+s,p=d;p<g;p++)o+="".concat(this.tag.getRule(p)).concat(Do);return o},i}(),nu=new Map,su=new Map,au=1,Xr=function(i){if(nu.has(i))return nu.get(i);for(;su.has(au);)au++;var u=au++;return nu.set(i,u),su.set(u,i),u},Lv=function(i,u){au=u+1,nu.set(i,u),su.set(u,i)},qv="style[".concat(ol,"][").concat(Ym,'="').concat(mu,'"]'),Yv=new RegExp("^".concat(ol,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vv=function(i,u,o){for(var s,d=o.split(","),g=0,p=d.length;g<p;g++)(s=d[g])&&i.registerName(u,s)},Xv=function(i,u){for(var o,s=((o=u.textContent)!==null&&o!==void 0?o:"").split(Do),d=[],g=0,p=s.length;g<p;g++){var j=s[g].trim();if(j){var v=j.match(Yv);if(v){var m=0|parseInt(v[1],10),T=v[2];m!==0&&(Lv(T,m),Vv(i,T,v[3]),i.getTag().insertRules(m,d)),d.length=0}else d.push(j)}}},em=function(i){for(var u=document.querySelectorAll(qv),o=0,s=u.length;o<s;o++){var d=u[o];d&&d.getAttribute(ol)!==qm&&(Xv(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function Zv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wm=function(i){var u=document.head,o=i||u,s=document.createElement("style"),d=function(j){var v=Array.from(j.querySelectorAll("style[".concat(ol,"]")));return v[v.length-1]}(o),g=d!==void 0?d.nextSibling:null;s.setAttribute(ol,qm),s.setAttribute(Ym,mu);var p=Zv();return p&&s.setAttribute("nonce",p),o.insertBefore(s,g),s},Qv=function(){function i(u){this.element=Wm(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,d=0,g=s.length;d<g;d++){var p=s[d];if(p.ownerNode===o)return p}throw wi(17)}(this.element),this.length=0}return i.prototype.insertRule=function(u,o){try{return this.sheet.insertRule(o,u),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},i.prototype.getRule=function(u){var o=this.sheet.cssRules[u];return o&&o.cssText?o.cssText:""},i}(),Kv=function(){function i(u){this.element=Wm(u),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(u,o){if(u<=this.length&&u>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[u]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},i.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},i}(),Jv=function(){function i(u){this.rules=[],this.length=0}return i.prototype.insertRule=function(u,o){return u<=this.length&&(this.rules.splice(u,0,o),this.length++,!0)},i.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},i.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},i}(),tm=uu,$v={isServer:!uu,useCSSOMInjection:!zv},Fm=function(){function i(u,o,s){u===void 0&&(u=fl),o===void 0&&(o={});var d=this;this.options=ot(ot({},$v),u),this.gs=o,this.names=new Map(s),this.server=!!u.isServer,!this.server&&uu&&tm&&(tm=!1,em(this)),Co(this,function(){return function(g){for(var p=g.getTag(),j=p.length,v="",m=function(B){var U=function(H){return su.get(H)}(B);if(U===void 0)return"continue";var k=g.names.get(U),G=p.getGroup(B);if(k===void 0||!k.size||G.length===0)return"continue";var q="".concat(ol,".g").concat(B,'[id="').concat(U,'"]'),X="";k!==void 0&&k.forEach(function(H){H.length>0&&(X+="".concat(H,","))}),v+="".concat(G).concat(q,'{content:"').concat(X,'"}').concat(Do)},T=0;T<j;T++)m(T);return v}(d)})}return i.registerId=function(u){return Xr(u)},i.prototype.rehydrate=function(){!this.server&&uu&&em(this)},i.prototype.reconstructWithOptions=function(u,o){return o===void 0&&(o=!0),new i(ot(ot({},this.options),u),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(u=function(o){var s=o.useCSSOMInjection,d=o.target;return o.isServer?new Jv(d):s?new Qv(d):new Kv(d)}(this.options),new Gv(u)));var u},i.prototype.hasNameForId=function(u,o){return this.names.has(u)&&this.names.get(u).has(o)},i.prototype.registerName=function(u,o){if(Xr(u),this.names.has(u))this.names.get(u).add(o);else{var s=new Set;s.add(o),this.names.set(u,s)}},i.prototype.insertRules=function(u,o,s){this.registerName(u,o),this.getTag().insertRules(Xr(u),s)},i.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},i.prototype.clearRules=function(u){this.getTag().clearGroup(Xr(u)),this.clearNames(u)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Wv=/&/g,Fv=/^\s*\/\/.*$/gm;function Pm(i,u){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(u," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(u," ")),o.props=o.props.map(function(s){return"".concat(u," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Pm(o.children,u)),o})}function Pv(i){var u,o,s,d=fl,g=d.options,p=g===void 0?fl:g,j=d.plugins,v=j===void 0?pu:j,m=function(U,k,G){return G.startsWith(o)&&G.endsWith(o)&&G.replaceAll(o,"").length>0?".".concat(u):U},T=v.slice();T.push(function(U){U.type===fu&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Wv,o).replace(s,m))}),p.prefix&&T.push(jv),T.push(vv);var B=function(U,k,G,q){k===void 0&&(k=""),G===void 0&&(G=""),q===void 0&&(q="&"),u=q,o=k,s=new RegExp("\\".concat(o,"\\b"),"g");var X=U.replace(Fv,""),H=bv(G||k?"".concat(G," ").concat(k," { ").concat(X," }"):X);p.namespace&&(H=Pm(H,p.namespace));var $=[];return ru(H,xv(T.concat(Sv(function(Z){return $.push(Z)})))),$};return B.hash=v.length?v.reduce(function(U,k){return k.name||wi(15),ul(U,k.name)},Xm).toString():"",B}var Iv=new Fm,yo=Pv(),Im=ji.createContext({shouldForwardProp:void 0,styleSheet:Iv,stylis:yo});Im.Consumer;ji.createContext(void 0);function nm(){return R.useContext(Im)}var ex=function(){function i(u,o){var s=this;this.inject=function(d,g){g===void 0&&(g=yo);var p=s.name+g.hash;d.hasNameForId(s.id,p)||d.insertRules(s.id,p,g(s.rules,p,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=o,Co(this,function(){throw wi(12,String(s.name))})}return i.prototype.getName=function(u){return u===void 0&&(u=yo),this.name+u.hash},i}(),tx=function(i){return i>="A"&&i<="Z"};function am(i){for(var u="",o=0;o<i.length;o++){var s=i[o];if(o===1&&s==="-"&&i[0]==="-")return i;tx(s)?u+="-"+s.toLowerCase():u+=s}return u.startsWith("ms-")?"-"+u:u}var e0=function(i){return i==null||i===!1||i===""},t0=function(i){var u,o,s=[];for(var d in i){var g=i[d];i.hasOwnProperty(d)&&!e0(g)&&(Array.isArray(g)&&g.isCss||dl(g)?s.push("".concat(am(d),":"),g,";"):zi(g)?s.push.apply(s,iu(iu(["".concat(d," {")],t0(g),!1),["}"],!1)):s.push("".concat(am(d),": ").concat((u=d,(o=g)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||u in _v||u.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function ua(i,u,o,s){if(e0(i))return[];if(Oo(i))return[".".concat(i.styledComponentId)];if(dl(i)){if(!dl(g=i)||g.prototype&&g.prototype.isReactComponent||!u)return[i];var d=i(u);return ua(d,u,o,s)}var g;return i instanceof ex?o?(i.inject(o,s),[i.getName(s)]):[i]:zi(i)?t0(i):Array.isArray(i)?Array.prototype.concat.apply(pu,i.map(function(p){return ua(p,u,o,s)})):[i.toString()]}function nx(i){for(var u=0;u<i.length;u+=1){var o=i[u];if(dl(o)&&!Oo(o))return!1}return!0}var ax=Zm(mu),lx=function(){function i(u,o,s){this.rules=u,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&nx(u),this.componentId=o,this.baseHash=ul(ax,o),this.baseStyle=s,Fm.registerId(o)}return i.prototype.generateAndInjectStyles=function(u,o,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var g=Ig(ua(this.rules,u,o,s)),p=po(ul(this.baseHash,g)>>>0);if(!o.hasNameForId(this.componentId,p)){var j=s(g,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,j)}d=ia(d,p),this.staticRulesId=p}else{for(var v=ul(this.baseHash,s.hash),m="",T=0;T<this.rules.length;T++){var B=this.rules[T];if(typeof B=="string")m+=B;else if(B){var U=Ig(ua(B,u,o,s));v=ul(v,U+T),m+=U}}if(m){var k=po(v>>>0);o.hasNameForId(this.componentId,k)||o.insertRules(this.componentId,k,s(m,".".concat(k),void 0,this.componentId)),d=ia(d,k)}}return d},i}(),n0=ji.createContext(void 0);n0.Consumer;var qc={};function ix(i,u,o){var s=Oo(i),d=i,g=!Lc(i),p=u.attrs,j=p===void 0?pu:p,v=u.componentId,m=v===void 0?function(ae,Q){var le=typeof ae!="string"?"sc":Jg(ae);qc[le]=(qc[le]||0)+1;var W="".concat(le,"-").concat(Rv(mu+le+qc[le]));return Q?"".concat(Q,"-").concat(W):W}(u.displayName,u.parentComponentId):v,T=u.displayName,B=T===void 0?function(ae){return Lc(ae)?"styled.".concat(ae):"Styled(".concat(Mv(ae),")")}(i):T,U=u.displayName&&u.componentId?"".concat(Jg(u.displayName),"-").concat(u.componentId):u.componentId||m,k=s&&d.attrs?d.attrs.concat(j).filter(Boolean):j,G=u.shouldForwardProp;if(s&&d.shouldForwardProp){var q=d.shouldForwardProp;if(u.shouldForwardProp){var X=u.shouldForwardProp;G=function(ae,Q){return q(ae,Q)&&X(ae,Q)}}else G=q}var H=new lx(o,U,s?d.componentStyle:void 0);function $(ae,Q){return function(le,W,Te){var _e=le.attrs,nt=le.componentStyle,lt=le.defaultProps,qe=le.foldedComponentIds,Qt=le.styledComponentId,Kt=le.target,Ye=ji.useContext(n0),M=nm(),Y=le.shouldForwardProp||M.shouldForwardProp,P=Ev(W,Ye,lt)||fl,ce=function(oe,ee,Ve){for(var pe,Pe=ot(ot({},ee),{className:void 0,theme:Ve}),Ln=0;Ln<oe.length;Ln+=1){var Jt=dl(pe=oe[Ln])?pe(Pe):pe;for(var St in Jt)Pe[St]=St==="className"?ia(Pe[St],Jt[St]):St==="style"?ot(ot({},Pe[St]),Jt[St]):Jt[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(_e,W,P),x=ce.as||Kt,N={};for(var L in ce)ce[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&ce.theme===P||(L==="forwardedAs"?N.as=ce.forwardedAs:Y&&!Y(L,x)||(N[L]=ce[L]));var V=function(oe,ee){var Ve=nm(),pe=oe.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(nt,ce),F=ia(qe,Qt);return V&&(F+=" "+V),ce.className&&(F+=" "+ce.className),N[Lc(x)&&!Vm.has(x)?"class":"className"]=F,Te&&(N.ref=Te),R.createElement(x,N)}(Z,ae,Q)}$.displayName=B;var Z=ji.forwardRef($);return Z.attrs=k,Z.componentStyle=H,Z.displayName=B,Z.shouldForwardProp=G,Z.foldedComponentIds=s?ia(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=U,Z.target=s?d.target:i,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=s?function(Q){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Te=0,_e=le;Te<_e.length;Te++)bo(Q,_e[Te],!0);return Q}({},d.defaultProps,ae):ae}}),Co(Z,function(){return".".concat(Z.styledComponentId)}),g&&$m(Z,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function lm(i,u){for(var o=[i[0]],s=0,d=u.length;s<d;s+=1)o.push(u[s],i[s+1]);return o}var im=function(i){return Object.assign(i,{isCss:!0})};function rx(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];if(dl(i)||zi(i))return im(ua(lm(pu,iu([i],u,!0))));var s=i;return u.length===0&&s.length===1&&typeof s[0]=="string"?ua(s):im(ua(lm(s,u)))}function vo(i,u,o){if(o===void 0&&(o=fl),!u)throw wi(1,u);var s=function(d){for(var g=[],p=1;p<arguments.length;p++)g[p-1]=arguments[p];return i(u,o,rx.apply(void 0,iu([d],g,!1)))};return s.attrs=function(d){return vo(i,u,ot(ot({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return vo(i,u,ot(ot({},o),d))},s}var a0=function(i){return vo(ix,i)},b=a0;Vm.forEach(function(i){b[i]=a0(i)});const ux=b.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,sx=b.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,cx=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ox=b.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #e10073;
  margin: 0;
`,fx=b.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Yc=b(Ao)`
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
`;function dx(){const i=gn();return c.jsx(ux,{children:c.jsxs(sx,{children:[c.jsx(cx,{children:c.jsx(ox,{children:"SCKW"})}),c.jsxs(fx,{children:[c.jsx(Yc,{to:"/sponsoring",$active:i.pathname==="/sponsoring",children:"🤝 Sponsoring"}),c.jsx(Yc,{to:"/jobs",$active:i.pathname==="/jobs",children:"💼 Jobbörse"}),c.jsx(Yc,{to:"/renovierung",$active:i.pathname==="/renovierung",children:"🏗️ Renovierung"})]})]})})}const hx=b.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,gx=b.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function Bo(){return c.jsxs(hx,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",c.jsx(gx,{href:"mailto:grimm@sckw.de",children:"grimm@sckw.de"})]})}const l0=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"✅ Vergeben",maxSponsors:1,sponsors:[{name:"RicoBet",image:"ricobet.png",website:null,since:"2023",until:"2025"}],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","1/1 Seite im Stadionmagazin","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Stadionansage bei jedem Heimspiel","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🥈 Co-Sponsor",price:"10.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotärmel 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1/2 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/2 Seite im Stadionmagazin","2 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"⭐️ Premium-Partner",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Banner (5x2 m) am Gelände",highlight:!0,icon:"🖼️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Erweitert*",highlight:!0,icon:"📱"},{text:"Website: Startseite Erweitert*",highlight:!1,icon:"🌐"}],benefits:["1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin","Social Media ERWEITERT: Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche","Website STARTSEITE ERWEITERT: Logo auf der Startseite mit kleinerer Fläche"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟧 11 vergeben · ~19 verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"1 Bande (3x1 m)",highlight:!1,icon:"🏟️"},{text:"Alle Heimspiele",highlight:!0,icon:"⚽"},{text:"Website: Sponsoren-Seite*",highlight:!1,icon:"🌐"}],benefits:["1 Bande (3x1 m) am Spielfeldrand","Sichtbarkeit bei allen Heimspielen","Website SPONSOREN-SEITE: Auflistung auf separater Sponsoren-Seite","Einmalkosten: 70 €/lfd. Meter für Herstellung"]}],mx=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,px=b.div`
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
`,bx=b.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,yx=b.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,vx=b.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,xx=b.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,Sx=b.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,jx=b.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,_x=b.li`
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
`,zx=b.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,Ex=b.span`
  flex: 1;
`,Tx=b.a`
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
`,wx=b.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ax="grimm@sckw.de";function Rx({packages:i}){const u=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",o=p=>{const j=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},s=p=>{const j=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),m=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Ax}?subject=${v}&body=${m}`},d=p=>{const j=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},g=i.filter(p=>!p.title.includes("Platz-Renovierung"));return c.jsx(mx,{children:g.map((p,j)=>{const{isFullyBooked:v}=d(p),m=u(p.status),T=m==="vergeben"||v,B=v?"vergeben":m,U=p.keyBenefits||[];return c.jsxs(px,{isVergeben:T,children:[c.jsxs(bx,{children:[c.jsx(yx,{children:o(p.title)}),c.jsx(vx,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!T&&c.jsx(xx,{children:p.price}),c.jsx(Sx,{status:B,children:B==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),T?c.jsx(wx,{children:"✅ Alle Plätze vergeben"}):c.jsx(jx,{children:U.map((k,G)=>c.jsxs(_x,{isHighlight:k.highlight,children:[c.jsx(zx,{children:k.icon}),c.jsx(Ex,{children:k.text})]},G))}),c.jsx(Tx,{href:T?void 0:s(p.title),isVergeben:T,children:T?"Vergeben":"Jetzt anfragen"})]},j)})})}const Mx=b.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  overflow: hidden;
`,Dx=b.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Ox=b.button`
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
`,Cx=b.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: #e10073;
`,Bx=b.div`
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,Nx=b.div`
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
`,Ux=b.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Hx=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:c.jsxs(c.Fragment,{children:[c.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:c.jsxs(c.Fragment,{children:[c.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:c.jsx(c.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function kx(){const[i,u]=R.useState([]),o=d=>{u(g=>g.includes(d)?g.filter(p=>p!==d):[...g,d])},s=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o(g))};return c.jsx(Mx,{children:Hx.map(d=>{const g=i.includes(d.id);return c.jsxs(Dx,{children:[c.jsxs(Ox,{isOpen:g,onClick:()=>o(d.id),onKeyDown:p=>s(p,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[c.jsxs("span",{children:[c.jsx(Ux,{children:d.icon}),d.title]}),c.jsx(Cx,{isOpen:g,children:"▼"})]}),c.jsx(Bx,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:c.jsx(Nx,{children:d.content})})]},d.id)})})}const Gx=b.section`
  background: #f8f9fb;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,Lx=b.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
`,qx=b.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`,rm=b.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`,Yx=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,um=b.div`
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
`,Vx=b.div`
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
`,sm=b.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`,Xx=b.svg`
  height: 50px;
  width: auto;
`,cm=b.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,om=b.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,fm=b.a`
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
`,Zx=b.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`,Qx=b.h4`
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
`,dm=b.p`
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Kx=b.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,Jx=b.h4`
  color: #856404;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,$x=b.p`
  color: #856404;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`,Wx=b.div`
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
`,Fx=b.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,Px=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Ix=b.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,e2=b.button`
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
`,t2=b.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Vc=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Xc=b.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Zc=b.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,n2=b.button`
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
`,a2=b.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;function l2(){const[i,u]=R.useState(!1),o=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")},s=d=>{d.preventDefault(),u(!0)};return c.jsxs(Gx,{id:"spenden",children:[c.jsx(Lx,{children:"💚 Spenden für den SC Konstanz-Wollmatingen"}),c.jsxs(qx,{children:[c.jsx(rm,{children:"Ohne Zuwendungen von Spendern, Gönnern, Förderern und Sponsoren ist der Spiel-, Turnier- und Trainingsbetrieb der Jugendabteilung und der Aktivenbereiche unseres Vereins nicht zu finanzieren. Die Mitgliedsbeiträge reichen für die umfassenden Aufgaben, die unser Verein für die Jugend im Breiten- und im Leistungssport, die Aus- und Weiterbildung der Trainer und Betreuer und die sportlich aktiv tätigen Mitglieder, Spieler und Teams erbringt, nicht aus."}),c.jsx(rm,{children:c.jsx("strong",{children:"Wir freuen uns über jede Zuwendung und Unterstützung!"})})]}),c.jsxs(Yx,{children:[c.jsxs(um,{preferred:!0,children:[c.jsx(Vx,{children:"⭐ Bevorzugt"}),c.jsx(sm,{children:c.jsxs(Xx,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.33c-.498 0-.968.382-1.061.913l-.619 3.949-.013.083-.637 4.084c-.229.685-.727 1.061-1.319 1.061L7.076 21.337z",fill:"#263B80"}),c.jsx("path",{d:"M20.781 7.519c-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.95c-.498 0-.968.382-1.061.913l-.756 4.814-.035.199-.561 3.584c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c3.213 0 5.733-1.311 6.467-5.097.307-1.582.149-2.906-.697-3.732-.244-.238-.5-.44-.785-.602-.998-.011-1.998-.011-1.998-.011z",fill:"#139AD6"}),c.jsx("path",{d:"M19.175 7.129c-.166-.039-.34-.071-.519-.097a9.54 9.54 0 0 0-1.348-.082H11.77c-.498 0-.969.382-1.062.913L9.493 13.34c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c.564 0 1.096.045 1.583.135.166.039.34.087.498.143.498-3.146.166-5.286-1.508-6.849z",fill:"#232C65"})]})}),c.jsx(cm,{children:"PayPal Spende"}),c.jsx(om,{children:"Schnell, sicher und unkompliziert - spenden Sie direkt über PayPal. Ihre Spende kommt sofort bei uns an."}),c.jsx(fm,{href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💚 Mit PayPal spenden"})]}),c.jsxs(um,{children:[c.jsx(sm,{children:"🏦"}),c.jsx(cm,{children:"Banküberweisung"}),c.jsx(om,{children:"Traditionelle Überweisung direkt auf unser Vereinskonto. Ideal für größere Spenden und Spendenquittungen."}),c.jsx(fm,{onClick:s,children:"🏦 Kontodaten anzeigen"})]})]}),c.jsxs(Zx,{children:[c.jsx(Qx,{children:"📄 Steuerliche Absetzbarkeit"}),c.jsxs(dm,{children:[c.jsx("strong",{children:"Bis 200 EUR:"})," Sie können einfach die Überweisungsquittung als Spendenbescheinigung bei der Steuererklärung angeben."]}),c.jsxs(dm,{children:[c.jsx("strong",{children:"Über 200 EUR:"})," Wir stellen Ihnen gerne eine offizielle Spendenquittung aus. Überweisen Sie dafür bitte auf unser Vereinskonto."]})]}),c.jsxs(Kx,{children:[c.jsx(Jx,{children:"📧 Spendenquittung anfordern"}),c.jsxs($x,{children:["Für Spenden über 200 EUR richten Sie bitte die Anforderung einer Spendenquittung per E-Mail an ",c.jsx("strong",{children:"grimm@sckw.de"})," oder schriftlich an die Postanschrift des Vereins. Bitte geben Sie Ihre Anschrift, Telefonnummer und den Verwendungszweck an."]})]}),i&&c.jsx(Wx,{onClick:()=>u(!1),children:c.jsxs(Fx,{onClick:d=>d.stopPropagation(),children:[c.jsxs(Px,{children:[c.jsx(Ix,{children:"Kontoverbindung für Spenden"}),c.jsx(e2,{onClick:()=>u(!1),children:"×"})]}),c.jsxs(t2,{children:[c.jsxs(Vc,{children:[c.jsx(Xc,{children:"Kontoinhaber:"}),c.jsx(Zc,{children:"SC Konstanz-Wollmatingen"})]}),c.jsxs(Vc,{children:[c.jsx(Xc,{children:"IBAN:"}),c.jsx(Zc,{children:"DE12 6905 0001 0000 0228 06"})]}),c.jsxs(Vc,{children:[c.jsx(Xc,{children:"BIC:"}),c.jsx(Zc,{children:"SOLADES1KNZ"})]})]}),c.jsx(n2,{onClick:o,children:"📋 IBAN kopieren"}),c.jsx(a2,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})})]})}const i2=b.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  margin: 2rem 0;
`,r2=b.div`
  max-width: 1200px;
  margin: 0 auto;
`,u2=b.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
`,s2=b.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,c2=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,o2=b.div`
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
`,f2=b.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e10073;
  justify-content: center;
  align-items: center;
  text-align: center;
`,d2=b.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`,h2=b.h4`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin: 0;
`,g2=b.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,m2=b.li`
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
`,p2=b.span`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`,b2=b.span`
  flex: 1;
`,y2=b.div`
  background: linear-gradient(135deg, #e10073 0%, #c70066 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  text-align: center;
  font-weight: 500;
`,v2=[{department:"Damen & Herren",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"⚽",text:"Equipment & Trainingsbälle"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Equipment"},{department:"Cheerleading",icon:"💃",items:[{icon:"🎽",text:"Cheerleading Uniformen"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"🏆",text:"Wettkämpfe & Turniere"},{icon:"🎵",text:"Musik & Choreografie"},{icon:"🚌",text:"Auswärtsfahrten"}],costInfo:"Fokus: Wettkämpfe & Ausrüstung"},{department:"Fördergruppe",icon:"🎯",items:[{icon:"👕",text:"Zuschuss zu Trikots (Training)"},{icon:"🥅",text:"Minitore & Equipment"},{icon:"🏟️",text:"Platzkosten"},{icon:"⚽",text:"Trainingsbälle & Zubehör"},{icon:"👨‍🏫",text:"Kosten Übungsleiter"}],costInfo:"Unterstützung für alle Abteilungen"},{department:"Allgemein",icon:"🏟️",items:[{icon:"🏟️",text:"Platzpflege & Infrastruktur"},{icon:"💡",text:"Flutlicht & Stromkosten"},{icon:"🚿",text:"Sanitäranlagen & Umkleiden"},{icon:"🛠️",text:"Wartung & Reparaturen"},{icon:"📢",text:"Kommunikation & Marketing"}],costInfo:"Grundlage für alle Abteilungen"}];function x2(){return c.jsx(i2,{children:c.jsxs(r2,{children:[c.jsx(u2,{children:"Wofür wird Ihr Sponsoring verwendet?"}),c.jsx(s2,{children:"Transparenz ist uns wichtig! Hier sehen Sie, wie Ihr Sponsoring-Geld direkt in die verschiedenen Abteilungen und deren Bedürfnisse fließt."}),c.jsx(c2,{children:v2.map((i,u)=>c.jsxs(o2,{children:[c.jsxs(f2,{children:[c.jsx(d2,{children:i.icon}),c.jsx(h2,{children:i.department})]}),c.jsx(g2,{children:i.items.map((o,s)=>c.jsxs(m2,{children:[c.jsx(p2,{children:o.icon}),c.jsx(b2,{children:o.text})]},s))}),c.jsx(y2,{children:i.costInfo})]},u))})]})})}const i0="/assets/cheerleading_0-DQQGXi0R.jpg",r0="/assets/cheerleading_1-NkLBARmH.jpg",u0="/assets/cheerleading_2-CrezcZYL.jpg",s0="/assets/cheerleading_3-GN5rPHNN.jpg",c0="/assets/1-ClVWb4ei.png",o0="/assets/10-Bwp2eIye.png",f0="/assets/11-W061sOUI.png",d0="/assets/12-TjJyzl8L.png",h0="/assets/13-ChUUCdQQ.png",g0="/assets/14-BVhdRr98.png",m0="/assets/2-CcfgIQYe.png",p0="/assets/3-DYiPkVd7.png",b0="/assets/4-1upoqVoS.png",y0="/assets/5-D0tadXAC.png",v0="/assets/6-NJ4ELm_j.png",x0="/assets/7-BXo4_Bcj.png",S0="/assets/8-BbOqEnj_.png",j0="/assets/9-CIK0gi9o.png",_0="/assets/herren_0-BVVgyt1l.jpg",z0="/assets/herren_1-B8ywOnNy.jpg",E0="/assets/herren_10-DPVQsg9B.jpg",T0="/assets/herren_11-wfWG62H3.jpg",w0="/assets/herren_12-DEJSN2zG.jpg",A0="/assets/herren_13-F52vdukE.jpg",R0="/assets/herren_14-Cq9hoKfG.jpg",M0="/assets/herren_15-aYIFGauG.jpg",D0="/assets/herren_16-NYI2EaEN.jpg",O0="/assets/herren_17-B_52ysA2.jpg",C0="/assets/herren_18-DbwjVNKJ.jpg",B0="/assets/herren_19-BduD_J85.png",N0="/assets/herren_2--jFuixBF.jpg",U0="/assets/herren_3-BPz1zlkG.jpg",H0="/assets/herren_4-BZRrQaFr.jpg",k0="/assets/herren_5-D-QrfY2P.jpg",G0="/assets/herren_6-DWQvi6Am.jpg",L0="/assets/herren_7-BXO6B8Bt.jpg",q0="/assets/herren_8-Cg4rdr7T.jpg",Y0="/assets/herren_9-DoLnTdRG.jpg",V0="/assets/IMG-team-BGcF1agj.png",X0="/assets/IMG_5349-CpvIVKhM.jpg",Z0="/assets/IMG_5369-DQ4CSwdg.jpg",Q0="/assets/IMG_5421-BBzniIEN.jpg",K0="/assets/IMG_5442-D2PgutWB.jpg",J0="/assets/IMG_5952-B9VW6Qie.jpg",$0="/assets/Unbenann324t-IPGo6eoQ.png",W0="/assets/image0-DDrU5aZn.jpeg",F0="/assets/image11-BNM8hTkT.jpeg",P0="/assets/image8-BUnedp9U.jpeg",S2="/assets/grafhardenberg-Di5cVggE.png",j2="/assets/horta-DydWIGV7.png",_2="/assets/logans-BgpKwKYA.png",z2="/assets/ricobet-DsVC-eZt.png",E2="/assets/rothaus-DqkKD9yW.png",T2="/assets/tasty-B2pSa1rE.png",w2="/assets/cabin-window-B83r_CDB.jpg",A2="/assets/outside-9-xz17qL.jpg",R2="/assets/shower-B75caJ-F.jpg",M2="/assets/sitting-area-D7khB3Gw.jpg",D2="/assets/toilet-BpMHYbhh.jpg",O2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":i0,"../assets/gallery/cheerleading/cheerleading_1.jpg":r0,"../assets/gallery/cheerleading/cheerleading_2.jpg":u0,"../assets/gallery/cheerleading/cheerleading_3.jpg":s0,"../assets/gallery/damen/1.png":c0,"../assets/gallery/damen/10.png":o0,"../assets/gallery/damen/11.png":f0,"../assets/gallery/damen/12.png":d0,"../assets/gallery/damen/13.png":h0,"../assets/gallery/damen/14.png":g0,"../assets/gallery/damen/2.png":m0,"../assets/gallery/damen/3.png":p0,"../assets/gallery/damen/4.png":b0,"../assets/gallery/damen/5.png":y0,"../assets/gallery/damen/6.png":v0,"../assets/gallery/damen/7.png":x0,"../assets/gallery/damen/8.png":S0,"../assets/gallery/damen/9.png":j0,"../assets/gallery/herren/herren_0.jpg":_0,"../assets/gallery/herren/herren_1.jpg":z0,"../assets/gallery/herren/herren_10.jpg":E0,"../assets/gallery/herren/herren_11.jpg":T0,"../assets/gallery/herren/herren_12.jpg":w0,"../assets/gallery/herren/herren_13.jpg":A0,"../assets/gallery/herren/herren_14.jpg":R0,"../assets/gallery/herren/herren_15.jpg":M0,"../assets/gallery/herren/herren_16.jpg":D0,"../assets/gallery/herren/herren_17.jpg":O0,"../assets/gallery/herren/herren_18.jpg":C0,"../assets/gallery/herren/herren_19.png":B0,"../assets/gallery/herren/herren_2.jpg":N0,"../assets/gallery/herren/herren_3.jpg":U0,"../assets/gallery/herren/herren_4.jpg":H0,"../assets/gallery/herren/herren_5.jpg":k0,"../assets/gallery/herren/herren_6.jpg":G0,"../assets/gallery/herren/herren_7.jpg":L0,"../assets/gallery/herren/herren_8.jpg":q0,"../assets/gallery/herren/herren_9.jpg":Y0,"../assets/gallery/jfv/IMG-team.png":V0,"../assets/gallery/jfv/IMG_5349.jpg":X0,"../assets/gallery/jfv/IMG_5369.jpg":Z0,"../assets/gallery/jfv/IMG_5421.jpg":Q0,"../assets/gallery/jfv/IMG_5442.jpg":K0,"../assets/gallery/jfv/IMG_5952.jpg":J0,"../assets/gallery/jfv/Unbenann324t.png":$0,"../assets/gallery/jfv/image0.jpeg":W0,"../assets/gallery/jfv/image11.jpeg":F0,"../assets/gallery/jfv/image8.jpeg":P0}),C2=Object.assign({"../assets/sponsors/grafhardenberg.png":S2,"../assets/sponsors/horta.png":j2,"../assets/sponsors/logans.png":_2,"../assets/sponsors/ricobet.png":z2,"../assets/sponsors/rothaus.png":E2,"../assets/sponsors/tasty.png":T2}),B2=Object.assign({"../assets/renovation/cabin-window.jpg":w2,"../assets/renovation/outside.jpg":A2,"../assets/renovation/shower.jpg":R2,"../assets/renovation/sitting-area.jpg":M2,"../assets/renovation/toilet.jpg":D2}),I0=i=>i.split("/").pop()?.toLowerCase()||"",N2=i=>{const u=i.match(/gallery\/(.*?)\//);return u?u[1]:"Sonstige"};function U2(i){const u=[...i];for(let o=u.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[u[o],u[s]]=[u[s],u[o]]}return u}const ep=()=>{const i={};Object.entries(O2).forEach(([s,d])=>{const g=N2(s);i[g]||(i[g]=[]),i[g].push(d)}),Object.keys(i).forEach(s=>{i[s]=U2(i[s])});const u={},o=["jfv","cheerleading","damen","herren"];return o.forEach(s=>{i[s]&&(u[s]=i[s])}),Object.keys(i).forEach(s=>{o.includes(s.toLowerCase())||(u[s]=i[s])}),u},tp=()=>{const i={};return Object.entries(C2).forEach(([u,o])=>{const s=I0(u);i[s]=o}),i},np=()=>{const i={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(B2).forEach(([u,o])=>{const s=I0(u);s.includes("sitting")?i.kabinen.push({src:o,alt:"Sitzbereich in den Kabinen"}):s.includes("outside")||s.includes("cabin-window")?s.includes("outside")?i.fassade.push({src:o,alt:"Außenfassade des Fürstenberg"}):s.includes("cabin-window")&&i.fassade.push({src:o,alt:"Fenster in den Kabinen"}):(s.includes("toilet")||s.includes("shower")||s.includes("wash"))&&(s.includes("toilet")?i.waschkueche.push({src:o,alt:"Toilette"}):s.includes("shower")?i.waschkueche.push({src:o,alt:"Dusche"}):i.waschkueche.push({src:o,alt:"Waschküche"}))}),i},H2=i=>{const o=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":i0,"../assets/gallery/cheerleading/cheerleading_1.jpg":r0,"../assets/gallery/cheerleading/cheerleading_2.jpg":u0,"../assets/gallery/cheerleading/cheerleading_3.jpg":s0,"../assets/gallery/damen/1.png":c0,"../assets/gallery/damen/10.png":o0,"../assets/gallery/damen/11.png":f0,"../assets/gallery/damen/12.png":d0,"../assets/gallery/damen/13.png":h0,"../assets/gallery/damen/14.png":g0,"../assets/gallery/damen/2.png":m0,"../assets/gallery/damen/3.png":p0,"../assets/gallery/damen/4.png":b0,"../assets/gallery/damen/5.png":y0,"../assets/gallery/damen/6.png":v0,"../assets/gallery/damen/7.png":x0,"../assets/gallery/damen/8.png":S0,"../assets/gallery/damen/9.png":j0,"../assets/gallery/herren/herren_0.jpg":_0,"../assets/gallery/herren/herren_1.jpg":z0,"../assets/gallery/herren/herren_10.jpg":E0,"../assets/gallery/herren/herren_11.jpg":T0,"../assets/gallery/herren/herren_12.jpg":w0,"../assets/gallery/herren/herren_13.jpg":A0,"../assets/gallery/herren/herren_14.jpg":R0,"../assets/gallery/herren/herren_15.jpg":M0,"../assets/gallery/herren/herren_16.jpg":D0,"../assets/gallery/herren/herren_17.jpg":O0,"../assets/gallery/herren/herren_18.jpg":C0,"../assets/gallery/herren/herren_19.png":B0,"../assets/gallery/herren/herren_2.jpg":N0,"../assets/gallery/herren/herren_3.jpg":U0,"../assets/gallery/herren/herren_4.jpg":H0,"../assets/gallery/herren/herren_5.jpg":k0,"../assets/gallery/herren/herren_6.jpg":G0,"../assets/gallery/herren/herren_7.jpg":L0,"../assets/gallery/herren/herren_8.jpg":q0,"../assets/gallery/herren/herren_9.jpg":Y0,"../assets/gallery/jfv/IMG-team.png":V0,"../assets/gallery/jfv/IMG_5349.jpg":X0,"../assets/gallery/jfv/IMG_5369.jpg":Z0,"../assets/gallery/jfv/IMG_5421.jpg":Q0,"../assets/gallery/jfv/IMG_5442.jpg":K0,"../assets/gallery/jfv/IMG_5952.jpg":J0,"../assets/gallery/jfv/Unbenann324t.png":$0,"../assets/gallery/jfv/image0.jpeg":W0,"../assets/gallery/jfv/image11.jpeg":F0,"../assets/gallery/jfv/image8.jpeg":P0})).find(([s])=>s.includes(i));return o?o[1]:""},No=(i,u)=>H2(`${i}/${i}_${u}.jpg`);ep(),tp(),np();function k2(){const i=ep(),[u,o]=R.useState(null);return R.useEffect(()=>{if(!u)return;const s=d=>{d.key==="Escape"&&o(null)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[u]),c.jsxs("section",{children:[c.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([s,d])=>c.jsxs("div",{style:{marginBottom:"2.5rem"},children:[c.jsx(G2,{children:s.toUpperCase()}),c.jsx(L2,{children:d.map((g,p)=>c.jsx(q2,{src:g,alt:`Bild ${p+1} aus ${s}`,onClick:()=>o({folder:s,idx:p}),style:{cursor:"pointer"}},p))}),u&&u.folder===s&&c.jsx(Y2,{onClick:()=>o(null),children:c.jsxs(V2,{onClick:g=>g.stopPropagation(),children:[c.jsx(X2,{src:d[u.idx],alt:`Großansicht aus ${s}`}),c.jsx(Z2,{onClick:()=>o(null),title:"Schließen",children:"×"})]})})]},s))]})}const G2=b.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,L2=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,q2=b.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,Y2=b.div`
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
`,V2=b.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,X2=b.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,Z2=b.button`
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
`,Q2=tp(),hm=i=>Q2[i.toLowerCase()]||void 0;function K2(){const i=[];return l0.forEach(u=>{Array.isArray(u.sponsors)&&u.sponsors.forEach(o=>{i.push({name:o.name,image:o.image,website:o.website})})}),i.filter((u,o,s)=>s.findIndex(d=>d.name===u.name)===o)}const J2=K2();function $2(){return c.jsxs(W2,{children:[c.jsx(F2,{children:"Unsere Partner"}),c.jsx(P2,{children:J2.map((i,u)=>{const o=i.image&&hm(i.image)?c.jsx(eS,{src:hm(i.image),alt:i.name}):c.jsx(tS,{children:i.name});return i.website?c.jsx(Uo,{href:i.website,target:"_blank",rel:"noopener noreferrer",title:`Besuche ${i.name}`,children:o},u):c.jsx(I2,{children:o},u)})})]})}const W2=b.section`
  background: #fff6fa;
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`,F2=b.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2.2rem;
`,P2=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2.2rem 2.5rem;
  align-items: center;
  justify-items: center;
`,Uo=b.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
`,I2=b.div`
  display: block;
`,eS=b.img`
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
  ${Uo}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`,tS=b.div`
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
  ${Uo}:hover & {
    background: #e10073;
    color: #fff;
  }
`,nS=b.section`
  background: url("${No("herren",4)}") center/cover;
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
`,aS=b.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
`,lS=b.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
  margin-top: 0.5rem;
`,gm=b.a`
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
`,iS=b.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,rS=b.main`
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
`,uS=b.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,sS=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 1.5rem 0;
  flex-wrap: wrap;
`,cS=b.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,oS=b.h3`
  font-size: 1.7rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`,mm=b.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`,fS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0 2rem 0;
`,Ja=b.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,$a=b.div`
  font-size: 1.13rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`,Wa=b.div`
  font-size: 1.04rem;
  color: #222;
  line-height: 1.6;
`,dS=b.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,hS=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,gS=b.p`
  font-size: clamp(1.13rem, 1.5vw, 1.25rem);
  color: #222;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 700px;
`,mS=b.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,pS=b.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,bS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Zr=b.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Qr=b.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,Kr=b.ul`
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
`,yS=b.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,vS=b.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,xS=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,SS=b.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,jS=b.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,_S=b.ul`
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
`,bi=b.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,yi=b.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Qc=b.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Kc=b.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Jc=b.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,$c=b.div`
  font-size: 0.98rem;
  color: #666;
`;function zS(){return c.jsxs(c.Fragment,{children:[c.jsx(nS,{children:c.jsxs(dS,{children:[c.jsx(aS,{children:"SC Konstanz-Wollmatingen"}),c.jsx(lS,{children:"Ihre Marke im Fokus – direkt am Spielfeldrand"}),c.jsxs(iS,{children:[c.jsx(gm,{href:"#sponsoring-pakete",children:"Jetzt Sponsor werden"}),c.jsx(gm,{href:"#spenden",secondary:!0,children:"Spenden"})]})]})}),c.jsxs(rS,{children:[c.jsx(uS,{id:"sponsoring-pakete",children:"Sponsoring-Pakete 2025/2026"}),c.jsx(hS,{children:c.jsx(gS,{children:"Gemeinsam für den Sport in Konstanz: Unterstützen Sie unsere Teams, fördern Sie Talente und werden Sie Teil einer starken Gemeinschaft. Ihr Engagement als Sponsor macht den Unterschied – auf und neben dem Spielfeld!"})}),c.jsx(Rx,{packages:l0}),c.jsx(kx,{}),c.jsx(l2,{}),c.jsx(x2,{}),c.jsx($2,{}),c.jsxs(mS,{children:[c.jsx(pS,{children:"Unsere Reichweite & Kanäle"}),c.jsxs(bS,{children:[c.jsxs(Zr,{children:[c.jsx(Qr,{children:"📱 Social Media"}),c.jsxs(Kr,{children:[c.jsx("li",{children:"Instagram: 2.500+ Follower"}),c.jsx("li",{children:"Reel-Reichweite bis 200k"}),c.jsx("li",{children:"Facebook: 1.800+ Follower"})]})]}),c.jsxs(Zr,{children:[c.jsx(Qr,{children:"🌐 Website & Online"}),c.jsxs(Kr,{children:[c.jsx("li",{children:"Monatliche Besucher: 5.000+"}),c.jsx("li",{children:"Newsletter-Abonnenten: 450+"}),c.jsx("li",{children:"Durchschnittliche Seitenaufrufe: 15.000+"}),c.jsx("li",{children:"Google-Sichtbarkeit: 95% lokale Suche"})]})]}),c.jsxs(Zr,{children:[c.jsx(Qr,{children:"🏟️ Offline & Events"}),c.jsxs(Kr,{children:[c.jsx("li",{children:"Heimspiele pro Saison: 15+"}),c.jsx("li",{children:"Durchschnittliche Zuschauer: 200+"}),c.jsx("li",{children:"Events & Turniere: 8+ pro Jahr"}),c.jsx("li",{children:"Stadionheft-Auflage: 300+ pro Spiel"})]})]}),c.jsxs(Zr,{children:[c.jsx(Qr,{children:"📢 Zusätzliche Kanäle"}),c.jsxs(Kr,{children:[c.jsx("li",{children:"Pressearbeit & Medienkontakte"}),c.jsx("li",{children:"Kooperationen mit lokalen Partnern"}),c.jsx("li",{children:"Vereinsfeste & Community-Events"}),c.jsx("li",{children:"Jugendförderung & Nachwuchsarbeit"})]})]})]})]}),c.jsxs(yS,{children:[c.jsx(vS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),c.jsxs(xS,{children:[c.jsxs(SS,{children:[c.jsxs(Qc,{children:[c.jsx(Kc,{children:"1 Seite (Farbe)"}),c.jsx(Jc,{children:"1.000 €"}),c.jsx($c,{children:"DIN A4 (297 × 210 mm)"})]}),c.jsxs(Qc,{children:[c.jsx(Kc,{children:"1/2 Seite (Farbe)"}),c.jsx(Jc,{children:"500 €"}),c.jsx($c,{children:"DIN A5 (148 × 210 mm)"})]}),c.jsxs(Qc,{children:[c.jsx(Kc,{children:"1/4 Seite (Farbe)"}),c.jsx(Jc,{children:"250 €"}),c.jsx($c,{children:"DIN A6 (105 × 148 mm)"})]})]}),c.jsx(jS,{children:c.jsxs(_S,{children:[c.jsxs(bi,{children:[c.jsx(yi,{}),"15 Ausgaben pro Saison"]}),c.jsxs(bi,{children:[c.jsx(yi,{}),"ca. 100 Exemplare pro Heimspiel"]}),c.jsxs(bi,{children:[c.jsx(yi,{}),"Digitale Version (Social Media & Website)"]}),c.jsxs(bi,{children:[c.jsx(yi,{}),"1.000 – 1.500 Online Zugriffe je Ausgabe"]}),c.jsxs(bi,{children:[c.jsx(yi,{}),"DIN A4 Stadionmagazin"]})]})})]})]}),c.jsx(sS,{}),c.jsxs(cS,{children:[c.jsx(oS,{children:"Unsere Ziele und Ihr Beitrag als Sponsor"}),c.jsx(mm,{children:"Der SC Konstanz-Wollmatingen blickt mit großer Motivation auf die Saison 2025/26. Unsere Abteilungen verfolgen ambitionierte, aber realistische Ziele, die wir mit Ihrer Unterstützung erreichen möchten:"}),c.jsxs(fS,{children:[c.jsxs(Ja,{children:[c.jsx($a,{children:"1. Mannschaft (Herren)"}),c.jsx(Wa,{children:"Unser klares Ziel ist der Aufstieg in die nächsthöhere Liga. Dafür investieren wir in eine gezielte sportliche Weiterentwicklung und benötigen insbesondere Unterstützung für die Finanzierung von Trainings- und Spielbetrieb."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"2. Mannschaft (Herren)"}),c.jsx(Wa,{children:"Die zweite Mannschaft strebt einen Platz unter den Top 3 an. Auch hier sind gezielte Fördermaßnahmen und eine stabile finanzielle Basis entscheidend, um das sportliche Potenzial voll auszuschöpfen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Damenmannschaft"}),c.jsx(Wa,{children:"Unsere Damen möchten sich in der Landesliga unter den besten drei Teams etablieren und ihren Bezirkspokal verteidigen. Die längeren Auswärtsfahrten in dieser Liga bringen erhöhte Reisekosten mit sich, für die wir gezielt Unterstützung suchen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Cheerleading"}),c.jsx(Wa,{children:"Das Cheerleading-Team plant die Teilnahme an mehreren Turnieren und benötigt dringend einen neuen Trikotsatz (Cheerleading-Uniformen). Auch hier sind Reisekosten ein wichtiger Faktor, um die Teilnahme an Wettbewerben zu ermöglichen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Fördergruppe / Jugend"}),c.jsx(Wa,{children:"Mit der Fördergruppe legen wir den Grundstein für den neuen Jugendfußball-Förderverein (JFV) Konstanz. Unser Ziel ist es, gezielt Talente zu fördern und ihnen durch qualifizierte Trainer optimale Entwicklungsmöglichkeiten zu bieten. Für die Finanzierung von Trainerfortbildungen und zusätzlichem Trainingsmaterial sind wir auf Unterstützung angewiesen."})]}),c.jsxs(Ja,{children:[c.jsx($a,{children:"Vereinsziel: Langfristige Partnerschaften"}),c.jsx(Wa,{children:"Unser übergeordnetes Ziel ist es, langfristige Partner zu gewinnen, die uns sportlich wie wirtschaftlich begleiten und gemeinsam mit uns die Weiterentwicklung des Vereins in den kommenden Jahren aktiv mitgestalten möchten."})]})]}),c.jsxs(mm,{children:[c.jsx("b",{children:"Warum Ihre Unterstützung wichtig ist:"}),c.jsx("br",{}),"Die genannten Ziele sind nur mit einer soliden finanziellen Basis erreichbar. Ihre Förderung trägt dazu bei, Reisekosten zu decken, moderne Ausrüstung bereitzustellen und die sportliche Entwicklung aller Teams nachhaltig zu sichern. Sie investieren damit direkt in die Zukunft des Sports in Konstanz und in die Entwicklung junger Talente.",c.jsx("br",{}),c.jsx("br",{}),"Wir freuen uns, gemeinsam mit Ihnen diese Ziele zu verwirklichen!"]})]}),c.jsx(k2,{})]}),c.jsx(Bo,{})]})}const ES=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],TS=b.section`
  background: url("${No("herren",1)}") center/cover;
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
`,wS=b.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,AS=b.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,RS=b.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,MS=b.main`
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
`,DS=b.section`
  margin-bottom: 4rem;
`,OS=b.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,CS=b.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,BS=b.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,NS=b.div`
  text-align: center;
  margin-bottom: 3rem;
`,US=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,HS=b.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,kS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,GS=b.div`
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
`,LS=b.div`
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
`,qS=b.div`
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
`,YS=b.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,VS=b.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,XS=b.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,ZS=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,QS=b.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,KS=b.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,JS=b.button`
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
`,$S=b.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,WS=b.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,FS=b.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,PS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Fa=b.div`
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
`,pm=b.div`
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
`,Pa=b.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ia=b.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,el=b.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,tl=b.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Re=b.li`
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
`,nl=b.button`
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
`,IS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,e3=b.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,t3=b.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,n3=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Wc=b.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Fc=b.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Pc=b.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ic=b.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,a3=b.a`
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
`,l3=b.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,i3=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,r3=b.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,al=b.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ll=b.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,il=b.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function u3(){return c.jsxs(c.Fragment,{children:[c.jsx(TS,{children:c.jsxs(wS,{children:[c.jsx(AS,{children:"SCKW Jobbörse"}),c.jsx(RS,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),c.jsxs(MS,{children:[c.jsxs(DS,{children:[c.jsx(OS,{children:"Willkommen bei der SCKW Jobbörse"}),c.jsx(CS,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),c.jsxs(BS,{children:[c.jsxs(NS,{children:[c.jsx(US,{children:"So könnte es aussehen"}),c.jsx(HS,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),c.jsx(kS,{children:ES.map(i=>c.jsxs(GS,{children:[i.isExample&&c.jsx(LS,{children:"MUSTER"}),c.jsx(qS,{children:c.jsx(YS,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:u=>{u.currentTarget.style.display="none",u.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",u.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),c.jsx(VS,{children:i.title}),c.jsx(XS,{children:i.company}),c.jsx(ZS,{children:i.tags.map((u,o)=>c.jsx(QS,{children:u},o))}),c.jsx(KS,{children:i.description}),c.jsx(JS,{children:"Mehr erfahren"})]},i.id))})]}),c.jsxs($S,{children:[c.jsx(WS,{children:"Preise für Stellenausschreibungen"}),c.jsx(FS,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),c.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),c.jsxs(PS,{children:[c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Basis"}),c.jsx(Ia,{children:"149 €"}),c.jsx(el,{children:"netto / Anzeige"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),c.jsx(Re,{children:"Firmenlogo und Link"}),c.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),c.jsx(Re,{children:"Bewerbermanagement"})]}),c.jsx(nl,{className:"secondary",children:"Basis wählen"})]}),c.jsxs(Fa,{className:"popular",children:[c.jsx(pm,{children:"BELIEBT"}),c.jsx(Pa,{children:"Standard"}),c.jsx(Ia,{children:"229 €"}),c.jsx(el,{children:"netto / Anzeige"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Alle Basis-Features"}),c.jsx(Re,{children:"1 Social Media Post"}),c.jsx(Re,{children:"Instagram + Facebook Reichweite"}),c.jsx(Re,{children:"Newsletter-Erwähnung"})]}),c.jsx(nl,{children:"Standard wählen"})]}),c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Boosted"}),c.jsx(Ia,{children:"349 €"}),c.jsx(el,{children:"netto / Anzeige"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Alle Standard-Features"}),c.jsx(Re,{children:"Instagram Story"}),c.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),c.jsx(Re,{children:"Prioritäre Platzierung"})]}),c.jsx(nl,{className:"secondary",children:"Boosted wählen"})]})]}),c.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),c.jsxs(IS,{children:[c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Job Flat SMALL"}),c.jsx(Ia,{children:"799 €"}),c.jsx(el,{children:"netto / Jahr"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),c.jsx(Re,{children:"6 Social Media Posts"}),c.jsx(Re,{children:"Website-Präsenz"}),c.jsx(Re,{children:"Newsletter-Integration"})]}),c.jsx(nl,{className:"secondary",children:"Small Flat"})]}),c.jsxs(Fa,{className:"popular",children:[c.jsx(pm,{children:"EMPFOHLEN"}),c.jsx(Pa,{children:"Job Flat MEDIUM"}),c.jsx(Ia,{children:"1.199 €"}),c.jsx(el,{children:"netto / Jahr"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),c.jsx(Re,{children:"Stadionmagazin-Präsenz"}),c.jsx(Re,{children:"Social Media Posts"}),c.jsx(Re,{children:"Stories & Highlights"})]}),c.jsx(nl,{children:"Medium Flat"})]}),c.jsxs(Fa,{children:[c.jsx(Pa,{children:"Job Flat PARTNER"}),c.jsx(Ia,{children:"1.499 €"}),c.jsx(el,{children:"netto / Jahr"}),c.jsxs(tl,{children:[c.jsx(Re,{children:"Unbegrenzte Anzeigen"}),c.jsx(Re,{children:"Erwähnung bei Heimspielen"}),c.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),c.jsx(Re,{children:"Prioritärer Support"})]}),c.jsx(nl,{className:"secondary",children:"Partner Flat"})]})]}),c.jsxs(e3,{children:[c.jsx(t3,{children:"➕ Zusatzoptionen"}),c.jsxs(n3,{children:[c.jsxs(Wc,{children:[c.jsx(Fc,{children:"Social Story"}),c.jsx(Pc,{children:"39 €"}),c.jsx(Ic,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),c.jsxs(Wc,{children:[c.jsx(Fc,{children:"Designservice"}),c.jsx(Pc,{children:"59 €"}),c.jsx(Ic,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),c.jsxs(Wc,{children:[c.jsx(Fc,{children:"Stadionmagazin"}),c.jsx(Pc,{children:"99 €"}),c.jsx(Ic,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),c.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:c.jsx(a3,{href:"mailto:grimm@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),c.jsxs(l3,{children:[c.jsx(i3,{children:"🎯 Warum SCKW Jobbörse?"}),c.jsxs(r3,{children:[c.jsxs(al,{children:[c.jsx(ll,{children:"🏠"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"👥"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"💰"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"📈"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"⚡"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),c.jsxs(al,{children:[c.jsx(ll,{children:"🤲"}),c.jsxs(il,{children:[c.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),c.jsx(Bo,{})]})}const s3={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},c3={packages:s3},o3=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`,f3=b.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid #e2e8f0;
`,d3=b.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,h3=b.div`
  margin-bottom: 1.5rem;
`,g3=b.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`,m3=b.div`
  width: 100%;
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
`,p3=b.div`
  width: ${i=>i.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #059669, #10b981);
  transition: width 0.3s ease;
`,b3=b.div`
  text-align: center;
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 0.5rem;
`,y3=b.div`
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
`,v3=b.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
`,x3=b.div`
  max-height: 200px;
  overflow-y: auto;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`,S3=b.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
`,j3=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`,_3=b.span`
  font-weight: 600;
  color: #059669;
`,z3=b.span`
  font-weight: 600;
  color: #374151;
`,E3=b.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,T3=b.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,w3=b.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,A3=()=>{const i=c3;return{kabinen:{current:i.packages.kabinen.current,goal:i.packages.kabinen.goal,donors:i.packages.kabinen.donors},fassade:{current:i.packages.fassade.current,goal:i.packages.fassade.goal,donors:i.packages.fassade.donors},waschkueche:{current:i.packages.waschkueche.current,goal:i.packages.waschkueche.goal,donors:i.packages.waschkueche.donors}}};function R3({data:i=A3(),realTime:u=!1}){const[o]=R.useState(i);R.useEffect(()=>{if(!u)return;const g=setInterval(()=>{console.log("Fetching donation updates...")},3e4);return()=>clearInterval(g)},[u]);const s=g=>{switch(g){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},d=g=>{switch(g){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return g}};return c.jsx(o3,{children:Object.entries(o).map(([g,p])=>{const j=p.current/p.goal*100;return c.jsxs(f3,{children:[c.jsxs(d3,{children:[s(g)," ",d(g)]}),c.jsxs(h3,{children:[c.jsxs(g3,{children:[c.jsxs("span",{children:[p.current.toLocaleString("de-DE")," €"]}),c.jsxs("span",{children:[p.goal.toLocaleString("de-DE")," €"]})]}),c.jsx(m3,{children:c.jsx(p3,{$progress:j})}),c.jsxs(b3,{children:[Math.round(j),"% erreicht"]})]}),c.jsxs(y3,{children:[c.jsxs(v3,{children:["💚 Unterstützer (",p.donors.length,")"]}),c.jsx(x3,{children:p.donors.length>0?p.donors.map((v,m)=>c.jsxs(S3,{children:[c.jsxs(j3,{children:[c.jsx(_3,{children:v.anonymous?"🕶️ Anonymous":v.name}),c.jsxs(z3,{children:[v.amount," €"]})]}),v.comment&&c.jsxs(E3,{children:['"',v.comment,'"']}),c.jsx(T3,{children:new Date(v.date).toLocaleDateString("de-DE")})]},m)):c.jsx(w3,{children:"Seien Sie der erste Spender! 🌟"})})]})]},g)})})}const M3=b.section`
  background: url("${No("herren",18)}") center/cover;
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
`,D3=b.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,O3=b.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,C3=b.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,B3=b.main`
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
`,N3=b.section`
  margin-bottom: 4rem;
`,U3=b.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,H3=b.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,k3=b.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,G3=b.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,L3=b.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,q3=b.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Y3=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,V3=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,eo=b.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,to=b.div`
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
`,X3=b.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,Z3=b.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${i=>i.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,Q3=b.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,K3=b.div`
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
`,J3=b.div`
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
`,$3=b.div`
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
`,W3=b.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,F3=b.button`
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
`,bm=b.button`
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
`,no=b.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,ao=b.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,P3=b.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,I3=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,e5=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,lo=b.div`
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
`,io=b.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,ro=b.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,uo=b.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,so=b.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,t5=b.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,n5=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,a5=b.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,l5=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Jr=b.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,$r=b.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Wr=b.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,i5=b.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,r5=b.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,u5=b.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,s5=b.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,ym=b.a`
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
`,rl=np();function co({images:i,onImageClick:u}){const[o,s]=R.useState(0);return R.useEffect(()=>{if(i.length<=1)return;const d=setInterval(()=>{s(g=>(g+1)%i.length)},4e3);return()=>clearInterval(d)},[i.length]),i.length===0?c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):c.jsxs(X3,{children:[i.map((d,g)=>c.jsx(Z3,{src:d.src,alt:d.alt,$isActive:g===o,onClick:()=>u(g)},g)),i.length>1&&c.jsx(Q3,{children:i.map((d,g)=>c.jsx(K3,{$isActive:g===o,onClick:()=>s(g)},g))})]})}function c5({images:i,initialIndex:u,onClose:o}){const[s,d]=R.useState(u),g=()=>{d(j=>(j+1)%i.length)},p=()=>{d(j=>(j-1+i.length)%i.length)};return R.useEffect(()=>{const j=v=>{v.key==="Escape"&&o(),v.key==="ArrowRight"&&g(),v.key==="ArrowLeft"&&p()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[]),c.jsx(J3,{onClick:o,children:c.jsxs($3,{onClick:j=>j.stopPropagation(),children:[c.jsx(F3,{onClick:o,children:"×"}),c.jsx(W3,{src:i[s].src,alt:i[s].alt}),i.length>1&&c.jsxs(c.Fragment,{children:[c.jsx(bm,{$direction:"prev",onClick:p,children:"‹"}),c.jsx(bm,{$direction:"next",onClick:g,children:"›"})]})]})})}function o5(){const[i,u]=R.useState(!1),[o,s]=R.useState([]),[d,g]=R.useState(0),p=(j,v)=>{s(j),g(v),u(!0)};return c.jsxs(c.Fragment,{children:[c.jsx(M3,{children:c.jsxs(D3,{children:[c.jsx(O3,{children:"🏟️ Fürstenberg weiterentwickeln"}),c.jsx(C3,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),c.jsxs(B3,{children:[c.jsxs(N3,{children:[c.jsx(U3,{children:"Der Fürstenberg - unser Kultplatz"}),c.jsx(H3,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),c.jsxs(k3,{children:[c.jsx(G3,{children:"✨ Charme erhalten, Komfort verbessern"}),c.jsx(L3,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),c.jsxs(q3,{children:[c.jsx(Y3,{children:"🔍 Wo wir ansetzen möchten"}),c.jsxs(V3,{children:[c.jsxs(eo,{children:[c.jsx(to,{children:c.jsx(co,{images:rl.kabinen,onImageClick:j=>p(rl.kabinen,j)})}),c.jsx(no,{children:"🔧 Kabinen komfortabler gestalten"}),c.jsx(ao,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),c.jsxs(eo,{children:[c.jsx(to,{children:c.jsx(co,{images:rl.fassade,onImageClick:j=>p(rl.fassade,j)})}),c.jsx(no,{children:"🎨 Fassade & Fenster erneuern"}),c.jsx(ao,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),c.jsxs(eo,{children:[c.jsx(to,{children:c.jsx(co,{images:rl.waschkueche,onImageClick:j=>p(rl.waschkueche,j)})}),c.jsx(no,{children:"🧺 Waschküche auf Vordermann bringen"}),c.jsx(ao,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),c.jsxs(P3,{children:[c.jsx(I3,{children:"✨ Unsere Pläne für den Fürstenberg"}),c.jsxs(e5,{children:[c.jsxs(lo,{children:[c.jsx(io,{children:"🪑"}),c.jsx(ro,{children:"Kabinen sanieren"}),c.jsx(uo,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),c.jsx(so,{children:"~8.000 €"})]}),c.jsxs(lo,{children:[c.jsx(io,{children:"🎨"}),c.jsx(ro,{children:"Fassade & Fenster erneuern"}),c.jsx(uo,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),c.jsx(so,{children:"~15.000 €"})]}),c.jsxs(lo,{children:[c.jsx(io,{children:"🧺"}),c.jsx(ro,{children:"Waschküche modernisieren"}),c.jsx(uo,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),c.jsx(so,{children:"~5.000 €"})]})]})]}),c.jsxs(t5,{children:[c.jsx(n5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),c.jsx(a5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),c.jsxs(l5,{children:[c.jsxs(Jr,{children:[c.jsx($r,{children:"🏆"}),c.jsxs(Wr,{children:[c.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),c.jsxs(Jr,{children:[c.jsx($r,{children:"📄"}),c.jsxs(Wr,{children:[c.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),c.jsxs(Jr,{children:[c.jsx($r,{children:"📱"}),c.jsxs(Wr,{children:[c.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),c.jsxs(Jr,{children:[c.jsx($r,{children:"🎯"}),c.jsxs(Wr,{children:[c.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),c.jsxs(i5,{children:[c.jsx(r5,{children:"🤝 Gemeinsam für den Fürstenberg"}),c.jsx(u5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),c.jsx(R3,{realTime:!1}),c.jsxs(s5,{children:[c.jsx(ym,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),c.jsx(ym,{href:"mailto:grimm@sckw.de?subject=Sportplatz Renovierung - Bankverbindung&body=Hallo liebes SCKW-Team,%0A%0Aich möchte für die Sportplatz-Renovierung spenden und benötige die Bankverbindung.%0A%0AMein Name: %0AFirma: %0ASpendenhöhe: %0A%0ABitte senden Sie mir die Kontodaten zu.%0A%0AHerzliche Grüße",children:"🏦 Per Überweisung spenden"})]})]})]}),c.jsx(Bo,{}),i&&c.jsx(c5,{images:o,initialIndex:d,onClose:()=>u(!1)})]})}function f5(){return c.jsxs($y,{children:[c.jsx(dx,{}),c.jsxs(Ty,{children:[c.jsx(vi,{path:"/",element:c.jsx(zy,{to:"/sponsoring",replace:!0})}),c.jsx(vi,{path:"/sponsoring",element:c.jsx(zS,{})}),c.jsx(vi,{path:"/jobs",element:c.jsx(u3,{})}),c.jsx(vi,{path:"/renovierung",element:c.jsx(o5,{})})]})]})}console.log("sckw sponsoring Website loaded");Nb.createRoot(document.getElementById("root")).render(c.jsx(R.StrictMode,{children:c.jsx(f5,{})}));
