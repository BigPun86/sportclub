(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function s(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=s(d);fetch(d.href,m)}})();function eb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ms={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function tb(){if(wm)return hi;wm=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(c,d,m){var b=null;if(m!==void 0&&(b=""+m),d.key!==void 0&&(b=""+d.key),"key"in d){m={};for(var z in d)z!=="key"&&(m[z]=d[z])}else m=d;return d=m.ref,{$$typeof:i,type:c,key:b,ref:d!==void 0?d:null,props:m}}return hi.Fragment=u,hi.jsx=s,hi.jsxs=s,hi}var Rm;function nb(){return Rm||(Rm=1,Ms.exports=tb()),Ms.exports}var o=nb(),Ds={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function ab(){if(Mm)return ie;Mm=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),C=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,q={};function Z(x,N,G){this.props=x,this.context=N,this.refs=q,this.updater=G||k}Z.prototype.isReactComponent={},Z.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},Z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=Z.prototype;function $(x,N,G){this.props=x,this.context=N,this.refs=q,this.updater=G||k}var X=$.prototype=new H;X.constructor=$,L(X,Z.prototype),X.isPureReactComponent=!0;var ae=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(x,N,G,V,F,oe){return G=oe.ref,{$$typeof:i,type:x,key:N,ref:G!==void 0?G:null,props:oe}}function Te(x,N){return W(x.type,N,void 0,void 0,void 0,x.props)}function ze(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function nt(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(G){return N[G]})}var lt=/\/+/g;function qe(x,N){return typeof x=="object"&&x!==null&&x.key!=null?nt(""+x.key):N.toString(36)}function Xt(){}function Qt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Xt,Xt):(x.status="pending",x.then(function(N){x.status==="pending"&&(x.status="fulfilled",x.value=N)},function(N){x.status==="pending"&&(x.status="rejected",x.reason=N)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ye(x,N,G,V,F){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(oe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case i:case u:ee=!0;break;case _:return ee=x._init,Ye(ee(x._payload),N,G,V,F)}}if(ee)return F=F(x),ee=V===""?"."+qe(x,0):V,ae(F)?(G="",ee!=null&&(G=ee.replace(lt,"$&/")+"/"),Ye(F,N,G,"",function(Pe){return Pe})):F!=null&&(ze(F)&&(F=Te(F,G+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(lt,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(x))for(var pe=0;pe<x.length;pe++)V=x[pe],oe=Ve+qe(V,pe),ee+=Ye(V,N,G,oe,F);else if(pe=U(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(V=x.next()).done;)V=V.value,oe=Ve+qe(V,pe++),ee+=Ye(V,N,G,oe,F);else if(oe==="object"){if(typeof x.then=="function")return Ye(Qt(x),N,G,V,F);throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function M(x,N,G){if(x==null)return x;var V=[],F=0;return Ye(x,V,"","",function(oe){return N.call(G,oe,F++)}),V}function Y(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(G){(x._status===0||x._status===-1)&&(x._status=1,x._result=G)},function(G){(x._status===0||x._status===-1)&&(x._status=2,x._result=G)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return ie.Children={map:M,forEach:function(x,N,G){M(x,function(){N.apply(this,arguments)},G)},count:function(x){var N=0;return M(x,function(){N++}),N},toArray:function(x){return M(x,function(N){return N})||[]},only:function(x){if(!ze(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=Z,ie.Fragment=s,ie.Profiler=d,ie.PureComponent=$,ie.StrictMode=c,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Q.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cloneElement=function(x,N,G){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=L({},x.props),F=x.key,oe=void 0;if(N!=null)for(ee in N.ref!==void 0&&(oe=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=G;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(x.type,F,void 0,void 0,oe,V)},ie.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ie.createElement=function(x,N,G){var V,F={},oe=null;if(N!=null)for(V in N.key!==void 0&&(oe=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=G;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(x&&x.defaultProps)for(V in ee=x.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(x,oe,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:z,render:x}},ie.isValidElement=ze,ie.lazy=function(x){return{$$typeof:_,_payload:{_status:-1,_result:x},_init:Y}},ie.memo=function(x,N){return{$$typeof:g,type:x,compare:N===void 0?null:N}},ie.startTransition=function(x){var N=Q.T,G={};Q.T=G;try{var V=x(),F=Q.S;F!==null&&F(G,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(se,P)}catch(oe){P(oe)}finally{Q.T=N}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(x){return Q.H.use(x)},ie.useActionState=function(x,N,G){return Q.H.useActionState(x,N,G)},ie.useCallback=function(x,N){return Q.H.useCallback(x,N)},ie.useContext=function(x){return Q.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,N){return Q.H.useDeferredValue(x,N)},ie.useEffect=function(x,N,G){var V=Q.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,N)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(x,N,G){return Q.H.useImperativeHandle(x,N,G)},ie.useInsertionEffect=function(x,N){return Q.H.useInsertionEffect(x,N)},ie.useLayoutEffect=function(x,N){return Q.H.useLayoutEffect(x,N)},ie.useMemo=function(x,N){return Q.H.useMemo(x,N)},ie.useOptimistic=function(x,N){return Q.H.useOptimistic(x,N)},ie.useReducer=function(x,N,G){return Q.H.useReducer(x,N,G)},ie.useRef=function(x){return Q.H.useRef(x)},ie.useState=function(x){return Q.H.useState(x)},ie.useSyncExternalStore=function(x,N,G){return Q.H.useSyncExternalStore(x,N,G)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.1.0",ie}var Dm;function xo(){return Dm||(Dm=1,Ds.exports=ab()),Ds.exports}var R=xo();const xi=eb(R);var Os={exports:{}},mi={},Cs={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function lb(){return Om||(Om=1,function(i){function u(M,Y){var P=M.length;M.push(Y);e:for(;0<P;){var se=P-1>>>1,x=M[se];if(0<d(x,Y))M[se]=Y,M[P]=x,P=se;else break e}}function s(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var Y=M[0],P=M.pop();if(P!==Y){M[0]=P;e:for(var se=0,x=M.length,N=x>>>1;se<N;){var G=2*(se+1)-1,V=M[G],F=G+1,oe=M[F];if(0>d(V,P))F<x&&0>d(oe,V)?(M[se]=oe,M[F]=P,se=F):(M[se]=V,M[G]=P,se=G);else if(F<x&&0>d(oe,P))M[se]=oe,M[F]=P,se=F;else break e}}return Y}function d(M,Y){var P=M.sortIndex-Y.sortIndex;return P!==0?P:M.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var b=Date,z=b.now();i.unstable_now=function(){return b.now()-z}}var v=[],g=[],_=1,C=null,U=3,k=!1,L=!1,q=!1,Z=!1,H=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ae(M){for(var Y=s(g);Y!==null;){if(Y.callback===null)c(g);else if(Y.startTime<=M)c(g),Y.sortIndex=Y.expirationTime,u(v,Y);else break;Y=s(g)}}function Q(M){if(q=!1,ae(M),!L)if(s(v)!==null)L=!0,le||(le=!0,qe());else{var Y=s(g);Y!==null&&Ye(Q,Y.startTime-M)}}var le=!1,W=-1,Te=5,ze=-1;function nt(){return Z?!0:!(i.unstable_now()-ze<Te)}function lt(){if(Z=!1,le){var M=i.unstable_now();ze=M;var Y=!0;try{e:{L=!1,q&&(q=!1,$(W),W=-1),k=!0;var P=U;try{t:{for(ae(M),C=s(v);C!==null&&!(C.expirationTime>M&&nt());){var se=C.callback;if(typeof se=="function"){C.callback=null,U=C.priorityLevel;var x=se(C.expirationTime<=M);if(M=i.unstable_now(),typeof x=="function"){C.callback=x,ae(M),Y=!0;break t}C===s(v)&&c(v),ae(M)}else c(v);C=s(v)}if(C!==null)Y=!0;else{var N=s(g);N!==null&&Ye(Q,N.startTime-M),Y=!1}}break e}finally{C=null,U=P,k=!1}Y=void 0}}finally{Y?qe():le=!1}}}var qe;if(typeof X=="function")qe=function(){X(lt)};else if(typeof MessageChannel<"u"){var Xt=new MessageChannel,Qt=Xt.port2;Xt.port1.onmessage=lt,qe=function(){Qt.postMessage(null)}}else qe=function(){H(lt,0)};function Ye(M,Y){W=H(function(){M(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(M){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var P=U;U=Y;try{return M()}finally{U=P}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var P=U;U=M;try{return Y()}finally{U=P}},i.unstable_scheduleCallback=function(M,Y,P){var se=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?se+P:se):P=se,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,M={id:_++,callback:Y,priorityLevel:M,startTime:P,expirationTime:x,sortIndex:-1},P>se?(M.sortIndex=P,u(g,M),s(v)===null&&M===s(g)&&(q?($(W),W=-1):q=!0,Ye(Q,P-se))):(M.sortIndex=x,u(v,M),L||k||(L=!0,le||(le=!0,qe()))),M},i.unstable_shouldYield=nt,i.unstable_wrapCallback=function(M){var Y=U;return function(){var P=U;U=Y;try{return M.apply(this,arguments)}finally{U=P}}}}(Bs)),Bs}var Cm;function ib(){return Cm||(Cm=1,Cs.exports=lb()),Cs.exports}var Ns={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function rb(){if(Bm)return tt;Bm=1;var i=xo();function u(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(v,g,_){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:C==null?null:""+C,children:v,containerInfo:g,implementation:_}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(v,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return m(v,g,null,_)},tt.flushSync=function(v){var g=b.T,_=c.p;try{if(b.T=null,c.p=2,v)return v()}finally{b.T=g,c.p=_,c.d.f()}},tt.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(v,g))},tt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},tt.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var _=g.as,C=z(_,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?c.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:U,fetchPriority:k}):_==="script"&&c.d.X(v,{crossOrigin:C,integrity:U,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},tt.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=z(g.as,g.crossOrigin);c.d.M(v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(v)},tt.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,C=z(_,g.crossOrigin);c.d.L(v,_,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},tt.preloadModule=function(v,g){if(typeof v=="string")if(g){var _=z(g.as,g.crossOrigin);c.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(v)},tt.requestFormReset=function(v){c.d.r(v)},tt.unstable_batchedUpdates=function(v,g){return v(g)},tt.useFormState=function(v,g,_){return b.H.useFormState(v,g,_)},tt.useFormStatus=function(){return b.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Nm;function ub(){if(Nm)return Ns.exports;Nm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Ns.exports=rb(),Ns.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function cb(){if(Um)return mi;Um=1;var i=ib(),u=xo(),s=ub();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(m(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return z(l),e;if(r===a)return z(l),t;r=r.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,h=l.child;h;){if(h===n){f=!0,n=l,a=r;break}if(h===a){f=!0,a=l,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=l;break}if(h===a){f=!0,a=r,n=l;break}h=h.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,C=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Xt=Symbol.for("react.client.reference");function Qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Profiler";case q:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList";case ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case X:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Qt(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Qt(e(t))}catch{}}return null}var Ye=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},se=[],x=-1;function N(e){return{current:e}}function G(e){0>x||(e.current=se[x],se[x]=null,x--)}function V(e,t){x++,se[x]=e.current,e.current=t}var F=N(null),oe=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(oe,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nm(t),e=am(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(F),V(F,e)}function Pe(){G(F),G(oe),G(ee)}function Gn(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=am(t,e.type);t!==n&&(V(oe,e),V(F,n))}function Kt(e){oe.current===e&&(G(F),G(oe)),Ve.current===e&&(G(Ve),ci._currentValue=P)}var St=Object.prototype.hasOwnProperty,bu=i.unstable_scheduleCallback,yu=i.unstable_cancelCallback,O0=i.unstable_shouldYield,C0=i.unstable_requestPaint,Ut=i.unstable_now,B0=i.unstable_getCurrentPriorityLevel,No=i.unstable_ImmediatePriority,Uo=i.unstable_UserBlockingPriority,Ai=i.unstable_NormalPriority,N0=i.unstable_LowPriority,Ho=i.unstable_IdlePriority,U0=i.log,H0=i.unstable_setDisableYieldValue,pl=null,ft=null;function mn(e){if(typeof U0=="function"&&H0(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(pl,e)}catch{}}var dt=Math.clz32?Math.clz32:G0,k0=Math.log,L0=Math.LN2;function G0(e){return e>>>=0,e===0?32:31-(k0(e)/L0|0)|0}var wi=256,Ri=4194304;function qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=qn(a):(f&=h,f!==0?l=qn(f):n||(n=h&~e,n!==0&&(l=qn(n))))):(h=a&~r,h!==0?l=qn(h):f!==0?l=qn(f):n||(n=a&~e,n!==0&&(l=qn(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function q0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var e=wi;return wi<<=1,(wi&4194048)===0&&(wi=256),e}function Lo(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Y0(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,p=e.expirationTimes,T=e.hiddenUpdates;for(n=f&~n;0<n;){var D=31-dt(n),B=1<<D;h[D]=0,p[D]=-1;var A=T[D];if(A!==null)for(T[D]=null,D=0;D<A.length;D++){var w=A[D];w!==null&&(w.lane&=-536870913)}n&=~B}a!==0&&Go(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Go(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function xu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yo(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:jm(e.type))}function V0(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var gn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+gn,it="__reactProps$"+gn,ca="__reactContainer$"+gn,ju="__reactEvents$"+gn,Z0="__reactListeners$"+gn,X0="__reactHandles$"+gn,Vo="__reactResources$"+gn,vl="__reactMarker$"+gn;function zu(e){delete e[Ie],delete e[it],delete e[ju],delete e[Z0],delete e[X0]}function sa(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ca]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=um(e);e!==null;){if(n=e[Ie])return n;e=um(e)}return t}e=n,n=e.parentNode}return null}function oa(e){if(e=e[Ie]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function fa(e){var t=e[Vo];return t||(t=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[vl]=!0}var Zo=new Set,Xo={};function Yn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Xo[e]=t,e=0;e<t.length;e++)Zo.add(t[e])}var Q0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qo={},Ko={};function K0(e){return St.call(Ko,e)?!0:St.call(Qo,e)?!1:Q0.test(e)?Ko[e]=!0:(Qo[e]=!0,!1)}function Di(e,t,n){if(K0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Oi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Eu,Jo;function ha(e){if(Eu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eu=t&&t[1]||"",Jo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Eu+e+Jo}var _u=!1;function Tu(e,t){if(!e||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(w){var A=w}Reflect.construct(e,[],B)}else{try{B.call()}catch(w){A=w}e.call(B.prototype)}}else{try{throw Error()}catch(w){A=w}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(w){if(w&&A&&typeof w.stack=="string")return[w.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var p=f.split(`
`),T=h.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===T.length)for(a=p.length-1,l=T.length-1;1<=a&&0<=l&&p[a]!==T[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==T[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==T[l]){var D=`
`+p[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=l);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function J0(e){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return Tu(e.type,!1);case 11:return Tu(e.type.render,!1);case 1:return Tu(e.type,!0);case 31:return ha("Activity");default:return""}}function $o(e){try{var t="";do t+=J0(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $0(e){var t=Wo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=$0(e))}function Fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Wo(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W0=/[\n"\\]/g;function zt(e){return e.replace(W0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Au(e,t,n,a,l,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?wu(e,f,jt(t)):n!=null?wu(e,f,jt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function Po(e,t,n,a,l,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function wu(e,t,n){t==="number"&&Bi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ma(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Io(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function ef(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(Ye(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||F0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&tf(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&tf(e,r,t[r])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(e){return I0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,ba=null;function af(e){var t=oa(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Au(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[it]||null;if(!l)throw Error(c(90));Au(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Fo(a)}break e;case"textarea":Io(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}}}var Ou=!1;function lf(e,t,n){if(Ou)return e(t,n);Ou=!0;try{var a=e(t);return a}finally{if(Ou=!1,(pa!==null||ba!==null)&&(xr(),pa&&(t=pa,e=ba,ba=pa=null,af(t),e)))for(t=0;t<e.length;t++)af(e[t])}}function Sl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[it]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if($t)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{Cu=!1}var pn=null,Bu=null,Ui=null;function rf(){if(Ui)return Ui;var e,t=Bu,n=t.length,a,l="value"in pn?pn.value:pn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return Ui=l.slice(e,1<a?1-a:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function uf(){return!1}function rt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ki:uf,this.isPropagationStopped=uf,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=rt(Vn),zl=_({},Vn,{view:0,detail:0}),ep=rt(zl),Nu,Uu,El,Gi=_({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(Nu=e.screenX-El.screenX,Uu=e.screenY-El.screenY):Uu=Nu=0,El=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),cf=rt(Gi),tp=_({},Gi,{dataTransfer:0}),np=rt(tp),ap=_({},zl,{relatedTarget:0}),Hu=rt(ap),lp=_({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=rt(lp),rp=_({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),up=rt(rp),cp=_({},Vn,{data:0}),sf=rt(cp),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fp[e])?!!t[e]:!1}function ku(){return dp}var hp=_({},zl,{key:function(e){if(e.key){var t=sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mp=rt(hp),gp=_({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=rt(gp),pp=_({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),bp=rt(pp),yp=_({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=rt(yp),xp=_({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sp=rt(xp),jp=_({},Vn,{newState:0,oldState:0}),zp=rt(jp),Ep=[9,13,27,32],Lu=$t&&"CompositionEvent"in window,_l=null;$t&&"documentMode"in document&&(_l=document.documentMode);var _p=$t&&"TextEvent"in window&&!_l,ff=$t&&(!Lu||_l&&8<_l&&11>=_l),df=" ",hf=!1;function mf(e,t){switch(e){case"keyup":return Ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function Tp(e,t){switch(e){case"compositionend":return gf(t);case"keypress":return t.which!==32?null:(hf=!0,df);case"textInput":return e=t.data,e===df&&hf?null:e;default:return null}}function Ap(e,t){if(ya)return e==="compositionend"||!Lu&&mf(e,t)?(e=rf(),Ui=Bu=pn=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wp[e.type]:t==="textarea"}function bf(e,t,n,a){pa?ba?ba.push(a):ba=[a]:pa=a,t=Tr(t,"onChange"),0<t.length&&(n=new Li("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Tl=null,Al=null;function Rp(e){Fh(e,0)}function qi(e){var t=xl(e);if(Fo(t))return e}function yf(e,t){if(e==="change")return t}var vf=!1;if($t){var Gu;if($t){var qu="oninput"in document;if(!qu){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),qu=typeof xf.oninput=="function"}Gu=qu}else Gu=!1;vf=Gu&&(!document.documentMode||9<document.documentMode)}function Sf(){Tl&&(Tl.detachEvent("onpropertychange",jf),Al=Tl=null)}function jf(e){if(e.propertyName==="value"&&qi(Al)){var t=[];bf(t,Al,e,Du(e)),lf(Rp,t)}}function Mp(e,t,n){e==="focusin"?(Sf(),Tl=t,Al=n,Tl.attachEvent("onpropertychange",jf)):e==="focusout"&&Sf()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Al)}function Op(e,t){if(e==="click")return qi(t)}function Cp(e,t){if(e==="input"||e==="change")return qi(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Bp;function wl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!St.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function zf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var n=zf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zf(n)}}function _f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Np=$t&&"documentMode"in document&&11>=document.documentMode,va=null,Vu=null,Rl=null,Zu=!1;function Af(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||va==null||va!==Bi(a)||(a=va,"selectionStart"in a&&Yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rl&&wl(Rl,a)||(Rl=a,a=Tr(Vu,"onSelect"),0<a.length&&(t=new Li("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xa={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},Xu={},wf={};$t&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Xn(e){if(Xu[e])return Xu[e];if(!xa[e])return e;var t=xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wf)return Xu[e]=t[n];return e}var Rf=Xn("animationend"),Mf=Xn("animationiteration"),Df=Xn("animationstart"),Up=Xn("transitionrun"),Hp=Xn("transitionstart"),kp=Xn("transitioncancel"),Of=Xn("transitionend"),Cf=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Ot(e,t){Cf.set(e,t),Yn(t,[e])}var Bf=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var n=Bf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:$o(t)},Bf.set(e,t),t)}return{value:e,source:t,stack:$o(t)}}var _t=[],Sa=0,Ku=0;function Yi(){for(var e=Sa,t=Ku=Sa=0;t<e;){var n=_t[t];_t[t++]=null;var a=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var r=_t[t];if(_t[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Nf(n,l,r)}}function Vi(e,t,n,a){_t[Sa++]=e,_t[Sa++]=t,_t[Sa++]=n,_t[Sa++]=a,Ku|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ju(e,t,n,a){return Vi(e,t,n,a),Zi(e)}function ja(e,t){return Vi(e,null,null,t),Zi(e)}function Nf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-dt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function Zi(e){if(50<ei)throw ei=0,es=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var za={};function Lp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,a){return new Lp(e,t,n,a)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Uf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xi(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")$u(e)&&(f=1);else if(typeof e=="string")f=q1(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ze:return e=mt(31,n,t,l),e.elementType=ze,e.lanes=r,e;case L:return Qn(n.children,l,r,t);case q:f=8,l|=24;break;case Z:return e=mt(12,n,t,l|2),e.elementType=Z,e.lanes=r,e;case Q:return e=mt(13,n,t,l),e.elementType=Q,e.lanes=r,e;case le:return e=mt(19,n,t,l),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case X:f=10;break e;case $:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Te:f=16,a=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=mt(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function Qn(e,t,n,a){return e=mt(7,e,a,t),e.lanes=n,e}function Wu(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Fu(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ea=[],_a=0,Qi=null,Ki=0,Tt=[],At=0,Kn=null,Ft=1,Pt="";function Jn(e,t){Ea[_a++]=Ki,Ea[_a++]=Qi,Qi=e,Ki=t}function Hf(e,t,n){Tt[At++]=Ft,Tt[At++]=Pt,Tt[At++]=Kn,Kn=e;var a=Ft;e=Pt;var l=32-dt(a)-1;a&=~(1<<l),n+=1;var r=32-dt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,Ft=1<<32-dt(t)+l|n<<l|a,Pt=r+e}else Ft=1<<r|n<<l|a,Pt=e}function Pu(e){e.return!==null&&(Jn(e,1),Hf(e,1,0))}function Iu(e){for(;e===Qi;)Qi=Ea[--_a],Ea[_a]=null,Ki=Ea[--_a],Ea[_a]=null;for(;e===Kn;)Kn=Tt[--At],Tt[At]=null,Pt=Tt[--At],Tt[At]=null,Ft=Tt[--At],Tt[At]=null}var at=null,Oe=null,ge=!1,$n=null,Ht=!1,ec=Error(c(519));function Wn(e){var t=Error(c(418,""));throw Ol(Et(t,e)),ec}function kf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[it]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ni.length;n++)de(ni[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Po(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ci(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),ef(t,a.value,a.defaultValue,a.children),Ci(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||tm(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Ar),t=!0):t=!1,t||Wn(e)}function Lf(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:at=at.return}}function Ml(e){if(e!==at)return!1;if(!ge)return Lf(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ps(e.type,e.memoizedProps)),n=!n),n&&Oe&&Wn(e),Lf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,On(e.type)?(e=xs,xs=null,Oe=e):Oe=t):Oe=at?Bt(e.stateNode.nextSibling):null;return!0}function Dl(){Oe=at=null,ge=!1}function Gf(){var e=$n;return e!==null&&(st===null?st=e:st.push.apply(st,e),$n=null),e}function Ol(e){$n===null?$n=[e]:$n.push(e)}var tc=N(null),Fn=null,It=null;function bn(e,t,n){V(tc,t._currentValue),t._currentValue=n}function en(e){e._currentValue=tc.current,G(tc)}function nc(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ac(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var p=0;p<t.length;p++)if(h.context===t[p]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),nc(r.return,n,e),a||(f=null);break e}r=h.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),nc(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Cl(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var h=l.type;ht(l.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(l===Ve.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ci):e=[ci])}l=l.return}e!==null&&ac(t,e,n,a),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return qf(Fn,e)}function $i(e,t){return Fn===null&&Pn(e),qf(e,t)}function qf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(c(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var Gp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},qp=i.unstable_scheduleCallback,Yp=i.unstable_NormalPriority,Le={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new Gp,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&qp(Yp,function(){e.controller.abort()})}var Nl=null,ic=0,Ta=0,Aa=null;function Vp(e,t){if(Nl===null){var n=Nl=[];ic=0,Ta=us(),Aa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ic++,t.then(Yf,Yf),t}function Yf(){if(--ic===0&&Nl!==null){Aa!==null&&(Aa.status="fulfilled");var e=Nl;Nl=null,Ta=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Vf=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vp(e,t),Vf!==null&&Vf(e,t)};var In=N(null);function rc(){var e=In.current;return e!==null?e:_e.pooledCache}function Wi(e,t){t===null?V(In,In.current):V(In,t.pool)}function Zf(){var e=rc();return e===null?null:{parent:Le._currentValue,pool:e}}var Ul=Error(c(460)),Xf=Error(c(474)),Fi=Error(c(542)),uc={then:function(){}};function Qf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pi(){}function Kf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Pi,Pi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$f(e),e;default:if(typeof t.status=="string")t.then(Pi,Pi);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$f(e),e}throw Hl=t,Ul}}var Hl=null;function Jf(){if(Hl===null)throw Error(c(459));var e=Hl;return Hl=null,e}function $f(e){if(e===Ul||e===Fi)throw Error(c(483))}var yn=!1;function cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Zi(e),Nf(e,null,n),t}return Vi(e,a,t,n),Zi(e)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,qo(e,n)}}function oc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fc=!1;function Ll(){if(fc){var e=Aa;if(e!==null)throw e}}function Gl(e,t,n,a){fc=!1;var l=e.updateQueue;yn=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var p=h,T=p.next;p.next=null,f===null?r=T:f.next=T,f=p;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==f&&(h===null?D.firstBaseUpdate=T:h.next=T,D.lastBaseUpdate=p))}if(r!==null){var B=l.baseState;f=0,D=T=p=null,h=r;do{var A=h.lane&-536870913,w=A!==h.lane;if(w?(he&A)===A:(a&A)===A){A!==0&&A===Ta&&(fc=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;A=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){B=ne.call(je,B,A);break e}B=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,A=typeof ne=="function"?ne.call(je,B,A):ne,A==null)break e;B=_({},B,A);break e;case 2:yn=!0}}A=h.callback,A!==null&&(e.flags|=64,w&&(e.flags|=8192),w=l.callbacks,w===null?l.callbacks=[A]:w.push(A))}else w={lane:A,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(T=D=w,p=B):D=D.next=w,f|=A;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;w=h,h=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);D===null&&(p=B),l.baseState=p,l.firstBaseUpdate=T,l.lastBaseUpdate=D,r===null&&(l.shared.lanes=0),wn|=f,e.lanes=f,e.memoizedState=B}}function Wf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ff(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wf(n[e],t)}var wa=N(null),Ii=N(0);function Pf(e,t){e=cn,V(Ii,e),V(wa,t),cn=e|t.baseLanes}function dc(){V(Ii,cn),V(wa,wa.current)}function hc(){cn=Ii.current,G(wa),G(Ii)}var Sn=0,ue=null,xe=null,Ue=null,er=!1,Ra=!1,ea=!1,tr=0,ql=0,Ma=null,Xp=0;function Be(){throw Error(c(321))}function mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function gc(e,t,n,a,l,r){return Sn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Nd:Ud,ea=!1,r=n(a,l),ea=!1,Ra&&(r=ed(t,n,a,l)),If(e),r}function If(e){M.H=ur;var t=xe!==null&&xe.next!==null;if(Sn=0,Ue=xe=ue=null,er=!1,ql=0,Ma=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Ji(e)&&(Xe=!0))}function ed(e,t,n,a){ue=e;var l=0;do{if(Ra&&(Ma=null),ql=0,Ra=!1,25<=l)throw Error(c(301));if(l+=1,Ue=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}M.H=Pp,r=t(n,a)}while(Ra);return r}function Qp(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Yl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ue.flags|=1024),t}function pc(){var e=tr!==0;return tr=0,e}function bc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yc(e){if(er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}er=!1}Sn=0,Ue=xe=ue=null,Ra=!1,ql=tr=0,Ma=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function He(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yl(e){var t=ql;return ql+=1,Ma===null&&(Ma=[]),e=Kf(Ma,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Nd:Ud),e}function nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yl(e);if(e.$$typeof===X)return et(e)}throw Error(c(438,String(e)))}function xc(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vc(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=nt;return t.index++,n}function tn(e,t){return typeof t=="function"?t(e):t}function ar(e){var t=He();return Sc(t,xe,e)}function Sc(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=f=null,p=null,T=t,D=!1;do{var B=T.lane&-536870913;if(B!==T.lane?(he&B)===B:(Sn&B)===B){var A=T.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),B===Ta&&(D=!0);else if((Sn&A)===A){T=T.next,A===Ta&&(D=!0);continue}else B={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(h=p=B,f=r):p=p.next=B,ue.lanes|=A,wn|=A;B=T.action,ea&&n(r,B),r=T.hasEagerState?T.eagerState:n(r,B)}else A={lane:B,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(h=p=A,f=r):p=p.next=A,ue.lanes|=B,wn|=B;T=T.next}while(T!==null&&T!==t);if(p===null?f=r:p.next=h,!ht(r,e.memoizedState)&&(Xe=!0,D&&(n=Aa,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function jc(e){var t=He(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);ht(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function td(e,t,n){var a=ue,l=He(),r=ge;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!ht((xe||l).memoizedState,n);f&&(l.memoizedState=n,Xe=!0),l=l.queue;var h=ld.bind(null,a,l,e);if(Vl(2048,8,h,[e]),l.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,Da(9,lr(),ad.bind(null,a,l,n,t),null),_e===null)throw Error(c(349));r||(Sn&124)!==0||nd(a,t,n)}return n}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=vc(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,a){t.value=n,t.getSnapshot=a,id(t)&&rd(e)}function ld(e,t,n){return n(function(){id(t)&&rd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function rd(e){var t=ja(e,2);t!==null&&vt(t,e,2)}function zc(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),ea){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t}function ud(e,t,n,a){return e.baseState=n,Sc(e,xe,typeof a=="function"?a:tn)}function Kp(e,t,n,a,l){if(rr(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};M.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,cd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function cd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=M.T,f={};M.T=f;try{var h=n(l,a),p=M.S;p!==null&&p(f,h),sd(e,t,h)}catch(T){Ec(e,t,T)}finally{M.T=r}}else try{r=n(l,a),sd(e,t,r)}catch(T){Ec(e,t,T)}}function sd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){od(e,t,a)},function(a){return Ec(e,t,a)}):od(e,t,n)}function od(e,t,n){t.status="fulfilled",t.value=n,fd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,cd(e,n)))}function Ec(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,fd(t),t=t.next;while(t!==a)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function hd(e,t){if(ge){var n=_e.formState;if(n!==null){e:{var a=ue;if(ge){if(Oe){t:{for(var l=Oe,r=Ht;l.nodeType!==8;){if(!r){l=null;break t}if(l=Bt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Oe=Bt(l.nextSibling),a=l.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},n.queue=a,n=Od.bind(null,ue,a),a.dispatch=n,a=zc(!1),r=Rc.bind(null,ue,!1,a.queue),a=ut(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Kp.bind(null,ue,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function md(e){var t=He();return gd(t,xe,e)}function gd(e,t,n){if(t=Sc(e,t,dd)[0],e=ar(tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Yl(t)}catch(f){throw f===Ul?Fi:f}else a=t;t=He();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Da(9,lr(),Jp.bind(null,l,n),null)),[a,r,e]}function Jp(e,t){e.action=t}function pd(e){var t=He(),n=xe;if(n!==null)return gd(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Da(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=vc(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function lr(){return{destroy:void 0,resource:void 0}}function bd(){return He().memoizedState}function ir(e,t,n,a){var l=ut();a=a===void 0?null:a,ue.flags|=e,l.memoizedState=Da(1|t,lr(),n,a)}function Vl(e,t,n,a){var l=He();a=a===void 0?null:a;var r=l.memoizedState.inst;xe!==null&&a!==null&&mc(a,xe.memoizedState.deps)?l.memoizedState=Da(t,r,n,a):(ue.flags|=e,l.memoizedState=Da(1|t,r,n,a))}function yd(e,t){ir(8390656,8,e,t)}function vd(e,t){Vl(2048,8,e,t)}function xd(e,t){return Vl(4,2,e,t)}function Sd(e,t){return Vl(4,4,e,t)}function jd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zd(e,t,n){n=n!=null?n.concat([e]):null,Vl(4,4,jd.bind(null,t,e),n)}function _c(){}function Ed(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&mc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function _d(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&mc(t,a[1]))return a[0];if(a=e(),ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function Tc(e,t,n){return n===void 0||(Sn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=wh(),ue.lanes|=e,wn|=e,n)}function Td(e,t,n,a){return ht(n,t)?n:wa.current!==null?(e=Tc(e,n,a),ht(e,t)||(Xe=!0),e):(Sn&42)===0?(Xe=!0,e.memoizedState=n):(e=wh(),ue.lanes|=e,wn|=e,t)}function Ad(e,t,n,a,l){var r=Y.p;Y.p=r!==0&&8>r?r:8;var f=M.T,h={};M.T=h,Rc(e,!1,t,n);try{var p=l(),T=M.S;if(T!==null&&T(h,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=Zp(p,a);Zl(e,t,D,yt(e))}else Zl(e,t,a,yt(e))}catch(B){Zl(e,t,{then:function(){},status:"rejected",reason:B},yt())}finally{Y.p=r,M.T=f}}function $p(){}function Ac(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=wd(e).queue;Ad(e,l,t,P,n===null?$p:function(){return Rd(e),n(a)})}function wd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=wd(e).next.queue;Zl(e,t,{},yt())}function wc(){return et(ci)}function Md(){return He().memoizedState}function Dd(){return He().memoizedState}function Wp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=vn(n);var a=xn(t,e,n);a!==null&&(vt(a,t,n),kl(a,t,n)),t={cache:lc()},e.payload=t;return}t=t.return}}function Fp(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},rr(e)?Cd(t,n):(n=Ju(e,t,n,a),n!==null&&(vt(n,e,a),Bd(n,t,a)))}function Od(e,t,n){var a=yt();Zl(e,t,n,a)}function Zl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(rr(e))Cd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(l.hasEagerState=!0,l.eagerState=h,ht(h,f))return Vi(e,t,l,0),_e===null&&Yi(),!1}catch{}finally{}if(n=Ju(e,t,l,a),n!==null)return vt(n,e,a),Bd(n,t,a),!0}return!1}function Rc(e,t,n,a){if(a={lane:2,revertLane:us(),action:a,hasEagerState:!1,eagerState:null,next:null},rr(e)){if(t)throw Error(c(479))}else t=Ju(e,n,a,2),t!==null&&vt(t,e,2)}function rr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Cd(e,t){Ra=er=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,qo(e,n)}}var ur={readContext:et,use:nr,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Nd={readContext:et,use:nr,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:yd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ir(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){ir(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var l=n(t);if(ea){mn(!0);try{n(t)}finally{mn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Fp.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=zc(e);var t=e.queue,n=Od.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_c,useDeferredValue:function(e,t){var n=ut();return Tc(n,e,t)},useTransition:function(){var e=zc(!1);return e=Ad.bind(null,ue,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,l=ut();if(ge){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),_e===null)throw Error(c(349));(he&124)!==0||nd(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,yd(ld.bind(null,a,r,e),[e]),a.flags|=2048,Da(9,lr(),ad.bind(null,a,r,n,t),null),n},useId:function(){var e=ut(),t=_e.identifierPrefix;if(ge){var n=Pt,a=Ft;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Xp++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:wc,useFormState:hd,useActionState:hd,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rc.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:xc,useCacheRefresh:function(){return ut().memoizedState=Wp.bind(null,ue)}},Ud={readContext:et,use:nr,useCallback:Ed,useContext:et,useEffect:vd,useImperativeHandle:zd,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:_d,useReducer:ar,useRef:bd,useState:function(){return ar(tn)},useDebugValue:_c,useDeferredValue:function(e,t){var n=He();return Td(n,xe.memoizedState,e,t)},useTransition:function(){var e=ar(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:td,useId:Md,useHostTransitionStatus:wc,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=He();return ud(n,xe,e,t)},useMemoCache:xc,useCacheRefresh:Dd},Pp={readContext:et,use:nr,useCallback:Ed,useContext:et,useEffect:vd,useImperativeHandle:zd,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:_d,useReducer:jc,useRef:bd,useState:function(){return jc(tn)},useDebugValue:_c,useDeferredValue:function(e,t){var n=He();return xe===null?Tc(n,e,t):Td(n,xe.memoizedState,e,t)},useTransition:function(){var e=jc(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:td,useId:Md,useHostTransitionStatus:wc,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=He();return xe!==null?ud(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xc,useCacheRefresh:Dd},Oa=null,Xl=0;function cr(e){var t=Xl;return Xl+=1,Oa===null&&(Oa=[]),Kf(Oa,e,t)}function Ql(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function sr(e,t){throw t.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hd(e){var t=e._init;return t(e._payload)}function kd(e){function t(j,S){if(e){var E=j.deletions;E===null?(j.deletions=[S],j.flags|=16):E.push(S)}}function n(j,S){if(!e)return null;for(;S!==null;)t(j,S),S=S.sibling;return null}function a(j){for(var S=new Map;j!==null;)j.key!==null?S.set(j.key,j):S.set(j.index,j),j=j.sibling;return S}function l(j,S){return j=Wt(j,S),j.index=0,j.sibling=null,j}function r(j,S,E){return j.index=E,e?(E=j.alternate,E!==null?(E=E.index,E<S?(j.flags|=67108866,S):E):(j.flags|=67108866,S)):(j.flags|=1048576,S)}function f(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function h(j,S,E,O){return S===null||S.tag!==6?(S=Wu(E,j.mode,O),S.return=j,S):(S=l(S,E),S.return=j,S)}function p(j,S,E,O){var K=E.type;return K===L?D(j,S,E.props.children,O,E.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Hd(K)===S.type)?(S=l(S,E.props),Ql(S,E),S.return=j,S):(S=Xi(E.type,E.key,E.props,null,j.mode,O),Ql(S,E),S.return=j,S)}function T(j,S,E,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=Fu(E,j.mode,O),S.return=j,S):(S=l(S,E.children||[]),S.return=j,S)}function D(j,S,E,O,K){return S===null||S.tag!==7?(S=Qn(E,j.mode,O,K),S.return=j,S):(S=l(S,E),S.return=j,S)}function B(j,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Wu(""+S,j.mode,E),S.return=j,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return E=Xi(S.type,S.key,S.props,null,j.mode,E),Ql(E,S),E.return=j,E;case k:return S=Fu(S,j.mode,E),S.return=j,S;case Te:var O=S._init;return S=O(S._payload),B(j,S,E)}if(Ye(S)||qe(S))return S=Qn(S,j.mode,E,null),S.return=j,S;if(typeof S.then=="function")return B(j,cr(S),E);if(S.$$typeof===X)return B(j,$i(j,S),E);sr(j,S)}return null}function A(j,S,E,O){var K=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return K!==null?null:h(j,S,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case U:return E.key===K?p(j,S,E,O):null;case k:return E.key===K?T(j,S,E,O):null;case Te:return K=E._init,E=K(E._payload),A(j,S,E,O)}if(Ye(E)||qe(E))return K!==null?null:D(j,S,E,O,null);if(typeof E.then=="function")return A(j,S,cr(E),O);if(E.$$typeof===X)return A(j,S,$i(j,E),O);sr(j,E)}return null}function w(j,S,E,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(E)||null,h(S,j,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return j=j.get(O.key===null?E:O.key)||null,p(S,j,O,K);case k:return j=j.get(O.key===null?E:O.key)||null,T(S,j,O,K);case Te:var ce=O._init;return O=ce(O._payload),w(j,S,E,O,K)}if(Ye(O)||qe(O))return j=j.get(E)||null,D(S,j,O,K,null);if(typeof O.then=="function")return w(j,S,E,cr(O),K);if(O.$$typeof===X)return w(j,S,E,$i(S,O),K);sr(S,O)}return null}function ne(j,S,E,O){for(var K=null,ce=null,J=S,te=S=0,Ke=null;J!==null&&te<E.length;te++){J.index>te?(Ke=J,J=null):Ke=J.sibling;var me=A(j,J,E[te],O);if(me===null){J===null&&(J=Ke);break}e&&J&&me.alternate===null&&t(j,J),S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me,J=Ke}if(te===E.length)return n(j,J),ge&&Jn(j,te),K;if(J===null){for(;te<E.length;te++)J=B(j,E[te],O),J!==null&&(S=r(J,S,te),ce===null?K=J:ce.sibling=J,ce=J);return ge&&Jn(j,te),K}for(J=a(J);te<E.length;te++)Ke=w(J,j,te,E[te],O),Ke!==null&&(e&&Ke.alternate!==null&&J.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),ce===null?K=Ke:ce.sibling=Ke,ce=Ke);return e&&J.forEach(function(Hn){return t(j,Hn)}),ge&&Jn(j,te),K}function I(j,S,E,O){if(E==null)throw Error(c(151));for(var K=null,ce=null,J=S,te=S=0,Ke=null,me=E.next();J!==null&&!me.done;te++,me=E.next()){J.index>te?(Ke=J,J=null):Ke=J.sibling;var Hn=A(j,J,me.value,O);if(Hn===null){J===null&&(J=Ke);break}e&&J&&Hn.alternate===null&&t(j,J),S=r(Hn,S,te),ce===null?K=Hn:ce.sibling=Hn,ce=Hn,J=Ke}if(me.done)return n(j,J),ge&&Jn(j,te),K;if(J===null){for(;!me.done;te++,me=E.next())me=B(j,me.value,O),me!==null&&(S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me);return ge&&Jn(j,te),K}for(J=a(J);!me.done;te++,me=E.next())me=w(J,j,te,me.value,O),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?te:me.key),S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me);return e&&J.forEach(function(I1){return t(j,I1)}),ge&&Jn(j,te),K}function je(j,S,E,O){if(typeof E=="object"&&E!==null&&E.type===L&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case U:e:{for(var K=E.key;S!==null;){if(S.key===K){if(K=E.type,K===L){if(S.tag===7){n(j,S.sibling),O=l(S,E.props.children),O.return=j,j=O;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Hd(K)===S.type){n(j,S.sibling),O=l(S,E.props),Ql(O,E),O.return=j,j=O;break e}n(j,S);break}else t(j,S);S=S.sibling}E.type===L?(O=Qn(E.props.children,j.mode,O,E.key),O.return=j,j=O):(O=Xi(E.type,E.key,E.props,null,j.mode,O),Ql(O,E),O.return=j,j=O)}return f(j);case k:e:{for(K=E.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(j,S.sibling),O=l(S,E.children||[]),O.return=j,j=O;break e}else{n(j,S);break}else t(j,S);S=S.sibling}O=Fu(E,j.mode,O),O.return=j,j=O}return f(j);case Te:return K=E._init,E=K(E._payload),je(j,S,E,O)}if(Ye(E))return ne(j,S,E,O);if(qe(E)){if(K=qe(E),typeof K!="function")throw Error(c(150));return E=K.call(E),I(j,S,E,O)}if(typeof E.then=="function")return je(j,S,cr(E),O);if(E.$$typeof===X)return je(j,S,$i(j,E),O);sr(j,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(n(j,S.sibling),O=l(S,E),O.return=j,j=O):(n(j,S),O=Wu(E,j.mode,O),O.return=j,j=O),f(j)):n(j,S)}return function(j,S,E,O){try{Xl=0;var K=je(j,S,E,O);return Oa=null,K}catch(J){if(J===Ul||J===Fi)throw J;var ce=mt(29,J,null,j.mode);return ce.lanes=O,ce.return=j,ce}finally{}}}var Ca=kd(!0),Ld=kd(!1),wt=N(null),kt=null;function jn(e){var t=e.alternate;V(Ge,Ge.current&1),V(wt,e),kt===null&&(t===null||wa.current!==null||t.memoizedState!==null)&&(kt=e)}function Gd(e){if(e.tag===22){if(V(Ge,Ge.current),V(wt,e),kt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(kt=e)}}else zn()}function zn(){V(Ge,Ge.current),V(wt,wt.current)}function nn(e){G(wt),kt===e&&(kt=null),G(Ge)}var Ge=N(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||vs(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Mc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),kl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),kl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=vn(n);a.tag=2,t!=null&&(a.callback=t),t=xn(e,a,n),t!==null&&(vt(t,e,n),kl(t,e,n))}};function qd(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!wl(n,a)||!wl(l,r):!0}function Yd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=_({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vd(e){fr(e)}function Zd(e){console.error(e)}function Xd(e){fr(e)}function dr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Qd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Oc(e,t,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){dr(e,t)},n}function Kd(e){return e=vn(e),e.tag=3,e}function Jd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Qd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Qd(t,n,a),typeof l!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Ip(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Cl(t,n,l,!0),n=wt.current,n!==null){switch(n.tag){case 13:return kt===null?ns():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===uc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ls(e,a,l)),!1;case 22:return n.flags|=65536,a===uc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ls(e,a,l)),!1}throw Error(c(435,n.tag))}return ls(e,a,l),ns(),!1}if(ge)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==ec&&(e=Error(c(422),{cause:a}),Ol(Et(e,n)))):(a!==ec&&(t=Error(c(423),{cause:a}),Ol(Et(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Et(a,n),l=Oc(e.stateNode,a,l),oc(e,l),Ce!==4&&(Ce=2)),!1;var r=Error(c(520),{cause:a});if(r=Et(r,n),Il===null?Il=[r]:Il.push(r),Ce!==4&&(Ce=2),t===null)return!0;a=Et(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Oc(n.stateNode,a,e),oc(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Kd(l),Jd(l,e,n,a),oc(n,l),!1}n=n.return}while(n!==null);return!1}var $d=Error(c(461)),Xe=!1;function $e(e,t,n,a){t.child=e===null?Ld(t,null,n,a):Ca(t,e.child,n,a)}function Wd(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=gc(e,t,n,f,r,l),h=pc(),e!==null&&!Xe?(bc(e,t,l),an(e,t,l)):(ge&&h&&Pu(t),t.flags|=1,$e(e,t,a,l),t.child)}function Fd(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!$u(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Pd(e,t,r,a,l)):(e=Xi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Gc(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:wl,n(f,a)&&e.ref===t.ref)return an(e,t,l)}return t.flags|=1,e=Wt(r,a),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(wl(r,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=r,Gc(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,an(e,t,l)}return Cc(e,t,n,a,l)}function Id(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return eh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,r!==null?r.cachePool:null),r!==null?Pf(t,r):dc(),Gd(t);else return t.lanes=t.childLanes=536870912,eh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Wi(t,r.cachePool),Pf(t,r),zn(),t.memoizedState=null):(e!==null&&Wi(t,null),dc(),zn());return $e(e,t,l,n),t.child}function eh(e,t,n,a){var l=rc();return l=l===null?null:{parent:Le._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Wi(t,null),dc(),Gd(t),e!==null&&Cl(e,t,a,!0),null}function hr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cc(e,t,n,a,l){return Pn(t),n=gc(e,t,n,a,void 0,l),a=pc(),e!==null&&!Xe?(bc(e,t,l),an(e,t,l)):(ge&&a&&Pu(t),t.flags|=1,$e(e,t,n,l),t.child)}function th(e,t,n,a,l,r){return Pn(t),t.updateQueue=null,n=ed(t,a,n,l),If(e),a=pc(),e!==null&&!Xe?(bc(e,t,r),an(e,t,r)):(ge&&a&&Pu(t),t.flags|=1,$e(e,t,n,r),t.child)}function nh(e,t,n,a,l){if(Pn(t),t.stateNode===null){var r=za,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Dc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},cc(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):za,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Mc(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Dc.enqueueReplaceState(r,r.state,null),Gl(t,a,r,l),Ll(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,p=ta(n,h);r.props=p;var T=r.context,D=n.contextType;f=za,typeof D=="object"&&D!==null&&(f=et(D));var B=n.getDerivedStateFromProps;D=typeof B=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||T!==f)&&Yd(t,r,a,f),yn=!1;var A=t.memoizedState;r.state=A,Gl(t,a,r,l),Ll(),T=t.memoizedState,h||A!==T||yn?(typeof B=="function"&&(Mc(t,n,B,a),T=t.memoizedState),(p=yn||qd(t,n,p,a,A,T,f))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),r.props=a,r.state=T,r.context=f,a=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,sc(e,t),f=t.memoizedProps,D=ta(n,f),r.props=D,B=t.pendingProps,A=r.context,T=n.contextType,p=za,typeof T=="object"&&T!==null&&(p=et(T)),h=n.getDerivedStateFromProps,(T=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==B||A!==p)&&Yd(t,r,a,p),yn=!1,A=t.memoizedState,r.state=A,Gl(t,a,r,l),Ll();var w=t.memoizedState;f!==B||A!==w||yn||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof h=="function"&&(Mc(t,n,h,a),w=t.memoizedState),(D=yn||qd(t,n,D,a,A,w,p)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,w,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,w,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),r.props=a,r.state=w,r.context=p,a=D):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,hr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ca(t,e.child,null,l),t.child=Ca(t,null,n,l)):$e(e,t,n,l),t.memoizedState=r.state,e=t.child):e=an(e,t,l),e}function ah(e,t,n,a){return Dl(),t.flags|=256,$e(e,t,n,a),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:Zf()}}function Uc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function lh(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(l?jn(t):zn(),ge){var h=Oe,p;if(p=h){e:{for(p=h,h=Ht;p.nodeType!==8;){if(!h){h=null;break e}if(p=Bt(p.nextSibling),p===null){h=null;break e}}h=p}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Ft,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},p=mt(18,null,null,0),p.stateNode=h,p.return=t,t.child=p,at=t,Oe=null,p=!0):p=!1}p||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return vs(h)?t.lanes=32:t.lanes=536870912,null;nn(t)}return h=a.children,a=a.fallback,l?(zn(),l=t.mode,h=mr({mode:"hidden",children:h},l),a=Qn(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=Nc(n),l.childLanes=Uc(e,f,n),t.memoizedState=Bc,a):(jn(t),Hc(t,h))}if(p=e.memoizedState,p!==null&&(h=p.dehydrated,h!==null)){if(r)t.flags&256?(jn(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState!==null?(zn(),t.child=e.child,t.flags|=128,t=null):(zn(),l=a.fallback,h=t.mode,a=mr({mode:"visible",children:a.children},h),l=Qn(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Ca(t,e.child,null,n),a=t.child,a.memoizedState=Nc(n),a.childLanes=Uc(e,f,n),t.memoizedState=Bc,t=l);else if(jn(t),vs(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var T=f.dgst;f=T,a=Error(c(419)),a.stack="",a.digest=f,Ol({value:a,source:null,stack:null}),t=kc(e,t,n)}else if(Xe||Cl(e,t,n,!1),f=(n&e.childLanes)!==0,Xe||f){if(f=_e,f!==null&&(a=n&-n,a=(a&42)!==0?1:xu(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,ja(e,a),vt(f,e,a),$d;h.data==="$?"||ns(),t=kc(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Oe=Bt(h.nextSibling),at=t,ge=!0,$n=null,Ht=!1,e!==null&&(Tt[At++]=Ft,Tt[At++]=Pt,Tt[At++]=Kn,Ft=e.id,Pt=e.overflow,Kn=t),t=Hc(t,a.children),t.flags|=4096);return t}return l?(zn(),l=a.fallback,h=t.mode,p=e.child,T=p.sibling,a=Wt(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,T!==null?l=Wt(T,l):(l=Qn(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=Nc(n):(p=h.cachePool,p!==null?(T=Le._currentValue,p=p.parent!==T?{parent:T,pool:T}:p):p=Zf(),h={baseLanes:h.baseLanes|n,cachePool:p}),l.memoizedState=h,l.childLanes=Uc(e,f,n),t.memoizedState=Bc,a):(jn(t),n=e.child,e=n.sibling,n=Wt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Hc(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function kc(e,t,n){return Ca(t,e.child,null,n),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ih(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),nc(e.return,t,n)}function Lc(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function rh(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if($e(e,t,a.children,n),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ih(e,n,t);else if(e.tag===19)ih(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Ge,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Lc(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&or(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Lc(t,!0,n,null,r);break;case"together":Lc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Cl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function e1(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),bn(t,Le,e.memoizedState.cache),Dl();break;case 27:case 5:Gn(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lh(e,t,n):(jn(t),e=an(e,t,n),e!==null?e.sibling:null);jn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Cl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return rh(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n);case 24:bn(t,Le,e.memoizedState.cache)}return an(e,t,n)}function uh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Gc(e,n)&&(t.flags&128)===0)return Xe=!1,e1(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,ge&&(t.flags&1048576)!==0&&Hf(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")$u(a)?(e=ta(a,e),t.tag=1,t=nh(null,t,a,e,n)):(t.tag=0,t=Cc(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===ae){t.tag=11,t=Wd(null,t,a,e,n);break e}else if(l===W){t.tag=14,t=Fd(null,t,a,e,n);break e}}throw t=Qt(a)||a,Error(c(306,t,""))}}return t;case 0:return Cc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ta(a,t.pendingProps),nh(e,t,a,l,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,sc(e,t),Gl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,bn(t,Le,a),a!==r.cache&&ac(t,[Le],n,!0),Ll(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ah(e,t,a,n);break e}else if(a!==l){l=Et(Error(c(424)),t),Ol(l),t=ah(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Bt(e.firstChild),at=t,ge=!0,$n=null,Ht=!0,n=Ld(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Dl(),a===l){t=an(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return hr(e,t),e===null?(n=fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=wr(ee.current).createElement(n),a[Ie]=t,a[it]=e,Fe(a,n,e),Ze(a),t.stateNode=a):t.memoizedState=fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&ge&&(a=t.stateNode=cm(t.type,t.pendingProps,ee.current),at=t,Ht=!0,l=Oe,On(t.type)?(xs=l,Oe=Bt(a.firstChild)):Oe=l),$e(e,t,t.pendingProps.children,n),hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((l=a=Oe)&&(a=w1(a,t.type,t.pendingProps,Ht),a!==null?(t.stateNode=a,at=t,Oe=Bt(a.firstChild),Ht=!1,l=!0):l=!1),l||Wn(t)),Gn(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,ps(l,r)?a=null:f!==null&&ps(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=gc(e,t,Qp,null,null,n),ci._currentValue=l),hr(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=Oe)&&(n=R1(n,t.pendingProps,Ht),n!==null?(t.stateNode=n,at=t,Oe=null,e=!0):e=!1),e||Wn(t)),null;case 13:return lh(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ca(t,null,a,n):$e(e,t,a,n),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,bn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Pn(t),l=et(l),a=a(l),t.flags|=1,$e(e,t,a,n),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 19:return rh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=mr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Wt(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Id(e,t,n);case 24:return Pn(t),a=et(Le),e===null?(l=rc(),l===null&&(l=_e,r=lc(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},cc(t),bn(t,Le,l)):((e.lanes&n)!==0&&(sc(e,t),Gl(t,null,null,n),Ll()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),bn(t,Le,a)):(a=r.cache,bn(t,Le,a),a!==l.cache&&ac(t,[Le],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ln(e){e.flags|=4}function ch(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pm(t)){if(t=wt.current,t!==null&&((he&4194048)===he?kt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==kt))throw Hl=uc,Xf;e.flags|=8192}}function gr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Lo():536870912,e.lanes|=t,Ha|=t)}function Kl(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function t1(e,t,n){var a=t.pendingProps;switch(Iu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),en(Le),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gf())),Me(t),null;case 26:return n=t.memoizedState,e===null?(ln(t),n!==null?(Me(t),ch(t,n)):(Me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ln(t),Me(t),ch(t,n)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==a&&ln(t),Me(t),t.flags&=-16777217),null;case 27:Kt(t),n=ee.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Me(t),null}e=F.current,Ml(t)?kf(t):(e=cm(l,a,n),t.stateNode=e,ln(t))}return Me(t),null;case 5:if(Kt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Me(t),null}if(e=F.current,Ml(t))kf(t);else{switch(l=wr(ee.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Ie]=t,e[it]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ln(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ee.current,Ml(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=at,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||tm(e.nodeValue,n)),e||Wn(t)}else e=wr(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return Me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ml(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ie]=t}else Dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(nn(t),t):(nn(t),null)}if(nn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),gr(t,t.updateQueue),Me(t),null;case 4:return Pe(),e===null&&fs(t.stateNode.containerInfo),Me(t),null;case 10:return en(t.type),Me(t),null;case 19:if(G(Ge),l=t.memoizedState,l===null)return Me(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)Kl(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=or(e),r!==null){for(t.flags|=128,Kl(l,!1),e=r.updateQueue,t.updateQueue=e,gr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Uf(n,e),n=n.sibling;return V(Ge,Ge.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ut()>yr&&(t.flags|=128,a=!0,Kl(l,!1),t.lanes=4194304)}else{if(!a)if(e=or(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,gr(t,e),Kl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ge)return Me(t),null}else 2*Ut()-l.renderingStartTime>yr&&n!==536870912&&(t.flags|=128,a=!0,Kl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,e=Ge.current,V(Ge,a?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return nn(t),hc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&gr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&G(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),en(Le),Me(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function n1(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(Le),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 13:if(nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Ge),null;case 4:return Pe(),null;case 10:return en(t.type),null;case 22:case 23:return nn(t),hc(),e!==null&&G(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return en(Le),null;case 25:return null;default:return null}}function sh(e,t){switch(Iu(t),t.tag){case 3:en(Le),Pe();break;case 26:case 27:case 5:Kt(t);break;case 4:Pe();break;case 13:nn(t);break;case 19:G(Ge);break;case 10:en(t.type);break;case 22:case 23:nn(t),hc(),e!==null&&G(In);break;case 24:en(Le)}}function Jl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(h){Ee(t,t.return,h)}}function En(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,l=t;var p=n,T=h;try{T()}catch(D){Ee(l,p,D)}}}a=a.next}while(a!==r)}}catch(D){Ee(t,t.return,D)}}function oh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ff(t,n)}catch(a){Ee(e,e.return,a)}}}function fh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function $l(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Ee(e,t,l)}}function Lt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ee(e,t,l)}else n.current=null}function dh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ee(e,e.return,l)}}function qc(e,t,n){try{var a=e.stateNode;z1(a,e.type,n,t),a[it]=t}catch(l){Ee(e,e.return,l)}}function hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function pr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pr(e,t,n),e=e.sibling;e!==null;)pr(e,t,n),e=e.sibling}function mh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fe(t,a,n),t[Ie]=e,t[it]=n}catch(r){Ee(e,e.return,r)}}var rn=!1,Ne=!1,Zc=!1,gh=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function a1(e,t){if(e=e.containerInfo,ms=Br,e=Tf(e),Yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,p=-1,T=0,D=0,B=e,A=null;t:for(;;){for(var w;B!==n||l!==0&&B.nodeType!==3||(h=f+l),B!==r||a!==0&&B.nodeType!==3||(p=f+a),B.nodeType===3&&(f+=B.nodeValue.length),(w=B.firstChild)!==null;)A=B,B=w;for(;;){if(B===e)break t;if(A===n&&++T===l&&(h=f),A===r&&++D===a&&(p=f),(w=B.nextSibling)!==null)break;B=A,A=B.parentNode}B=w}n=h===-1||p===-1?null:{start:h,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},Br=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){Ee(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ys(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ys(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function ph(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:_n(e,n),a&4&&Jl(5,n);break;case 1:if(_n(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ee(n,n.return,f)}else{var l=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ee(n,n.return,f)}}a&64&&oh(n),a&512&&$l(n,n.return);break;case 3:if(_n(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ff(e,t)}catch(f){Ee(n,n.return,f)}}break;case 27:t===null&&a&4&&mh(n);case 26:case 5:_n(e,n),t===null&&a&4&&dh(n),a&512&&$l(n,n.return);break;case 12:_n(e,n);break;case 13:_n(e,n),a&4&&vh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=d1.bind(null,n),M1(e,n))));break;case 22:if(a=n.memoizedState!==null||rn,!a){t=t!==null&&t.memoizedState!==null||Ne,l=rn;var r=Ne;rn=a,(Ne=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):_n(e,n),rn=l,Ne=r}break;case 30:break;default:_n(e,n)}}function bh(e){var t=e.alternate;t!==null&&(e.alternate=null,bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,ct=!1;function un(e,t,n){for(n=n.child;n!==null;)yh(e,t,n),n=n.sibling}function yh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:Ne||Lt(n,t),un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Lt(n,t);var a=we,l=ct;On(n.type)&&(we=n.stateNode,ct=!1),un(e,t,n),li(n.stateNode),we=a,ct=l;break;case 5:Ne||Lt(n,t);case 6:if(a=we,l=ct,we=null,un(e,t,n),we=a,ct=l,we!==null)if(ct)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(r){Ee(n,t,r)}else try{we.removeChild(n.stateNode)}catch(r){Ee(n,t,r)}break;case 18:we!==null&&(ct?(e=we,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),di(e)):rm(we,n.stateNode));break;case 4:a=we,l=ct,we=n.stateNode.containerInfo,ct=!0,un(e,t,n),we=a,ct=l;break;case 0:case 11:case 14:case 15:Ne||En(2,n,t),Ne||En(4,n,t),un(e,t,n);break;case 1:Ne||(Lt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fh(n,t,a)),un(e,t,n);break;case 21:un(e,t,n);break;case 22:Ne=(a=Ne)||n.memoizedState!==null,un(e,t,n),Ne=a;break;default:un(e,t,n)}}function vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(n){Ee(t,t.return,n)}}function l1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gh),t;default:throw Error(c(435,e.tag))}}function Xc(e,t){var n=l1(e);t.forEach(function(a){var l=h1.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(On(h.type)){we=h.stateNode,ct=!1;break e}break;case 5:we=h.stateNode,ct=!1;break e;case 3:case 4:we=h.stateNode.containerInfo,ct=!0;break e}h=h.return}if(we===null)throw Error(c(160));yh(r,f,l),we=null,ct=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}var Ct=null;function xh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),pt(e),a&4&&(En(3,e,e.return),Jl(3,e),En(5,e,e.return));break;case 1:gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),a&64&&rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Ct;if(gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[vl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Ze(r),a=r;break e;case"link":var f=mm("link","href",l).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;case"meta":if(f=mm("meta","content",l).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;default:throw Error(c(468,a))}r[Ie]=e,Ze(r),a=r}e.stateNode=a}else gm(l,e.type,e.stateNode);else e.stateNode=hm(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?gm(l,e.type,e.stateNode):hm(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),n!==null&&a&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),e.flags&32){l=e.stateNode;try{ga(l,"")}catch(w){Ee(e,e.return,w)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,qc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Zc=!0);break;case 6:if(gt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(w){Ee(e,e.return,w)}}break;case 3:if(Dr=null,l=Ct,Ct=Rr(t.containerInfo),gt(t,e),Ct=l,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(w){Ee(e,e.return,w)}Zc&&(Zc=!1,Sh(e));break;case 4:a=Ct,Ct=Rr(e.stateNode.containerInfo),gt(t,e),pt(e),Ct=a;break;case 12:gt(t,e),pt(e);break;case 13:gt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fc=Ut()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xc(e,a)));break;case 22:l=e.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,T=rn,D=Ne;if(rn=T||l,Ne=D||p,gt(t,e),Ne=D,rn=T,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||p||rn||Ne||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){p=n=t;try{if(r=p.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=p.stateNode;var B=p.memoizedProps.style,A=B!=null&&B.hasOwnProperty("display")?B.display:null;h.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(w){Ee(p,p.return,w)}}}else if(t.tag===6){if(n===null){p=t;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(w){Ee(p,p.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Xc(e,n))));break;case 19:gt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xc(e,a)));break;case 30:break;case 21:break;default:gt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(hh(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,r=Yc(e);pr(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(ga(f,""),n.flags&=-33);var h=Yc(e);pr(e,h,f);break;case 3:case 4:var p=n.stateNode.containerInfo,T=Yc(e);Vc(e,T,p);break;default:throw Error(c(161))}}catch(D){Ee(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _n(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ph(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),na(t);break;case 1:Lt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fh(t,t.return,n),na(t);break;case 27:li(t.stateNode);case 26:case 5:Lt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(l,r,n),Jl(4,r);break;case 1:if(Tn(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){Ee(a,a.return,T)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)Wf(p[l],h)}catch(T){Ee(a,a.return,T)}}n&&f&64&&oh(r),$l(r,r.return);break;case 27:mh(r);case 26:case 5:Tn(l,r,n),n&&a===null&&f&4&&dh(r),$l(r,r.return);break;case 12:Tn(l,r,n);break;case 13:Tn(l,r,n),n&&f&4&&vh(l,r);break;case 22:r.memoizedState===null&&Tn(l,r,n),$l(r,r.return);break;case 30:break;default:Tn(l,r,n)}t=t.sibling}}function Qc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bl(n))}function Kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function Gt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jh(e,t,n,a),t=t.sibling}function jh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,n,a),l&2048&&Jl(9,t);break;case 1:Gt(e,t,n,a);break;case 3:Gt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e)));break;case 12:if(l&2048){Gt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ee(t,t.return,p)}}else Gt(e,t,n,a);break;case 13:Gt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Gt(e,t,n,a):Wl(e,t):r._visibility&2?Gt(e,t,n,a):(r._visibility|=2,Ba(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Qc(f,t);break;case 24:Gt(e,t,n,a),l&2048&&Kc(t.alternate,t);break;default:Gt(e,t,n,a)}}function Ba(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,p=a,T=f.flags;switch(f.tag){case 0:case 11:case 15:Ba(r,f,h,p,l),Jl(8,f);break;case 23:break;case 22:var D=f.stateNode;f.memoizedState!==null?D._visibility&2?Ba(r,f,h,p,l):Wl(r,f):(D._visibility|=2,Ba(r,f,h,p,l)),l&&T&2048&&Qc(f.alternate,f);break;case 24:Ba(r,f,h,p,l),l&&T&2048&&Kc(f.alternate,f);break;default:Ba(r,f,h,p,l)}t=t.sibling}}function Wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Wl(n,a),l&2048&&Qc(a.alternate,a);break;case 24:Wl(n,a),l&2048&&Kc(a.alternate,a);break;default:Wl(n,a)}t=t.sibling}}var Fl=8192;function Na(e){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)zh(e),e=e.sibling}function zh(e){switch(e.tag){case 26:Na(e),e.flags&Fl&&e.memoizedState!==null&&V1(Ct,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var t=Ct;Ct=Rr(e.stateNode.containerInfo),Na(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Fl,Fl=16777216,Na(e),Fl=t):Na(e));break;default:Na(e)}}function Eh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Th(a,e)}Eh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_h(e),e=e.sibling}function _h(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&En(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,br(e)):Pl(e);break;default:Pl(e)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Th(a,e)}Eh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),br(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,br(t));break;default:br(t)}e=e.sibling}}function Th(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Bl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var l=a.sibling,r=a.return;if(bh(a),a===n){Qe=null;break e}if(l!==null){l.return=r,Qe=l;break e}Qe=r}}}var i1={getCacheForType:function(e){var t=et(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},r1=typeof WeakMap=="function"?WeakMap:Map,ye=0,_e=null,fe=null,he=0,ve=0,bt=null,An=!1,Ua=!1,Jc=!1,cn=0,Ce=0,wn=0,aa=0,$c=0,Rt=0,Ha=0,Il=null,st=null,Wc=!1,Fc=0,yr=1/0,vr=null,Rn=null,We=0,Mn=null,ka=null,La=0,Pc=0,Ic=null,Ah=null,ei=0,es=null;function yt(){if((ye&2)!==0&&he!==0)return he&-he;if(M.T!==null){var e=Ta;return e!==0?e:us()}return Yo()}function wh(){Rt===0&&(Rt=(he&536870912)===0||ge?ko():536870912);var e=wt.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===_e&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Ga(e,0),Dn(e,he,Rt,!1)),yl(e,n),((ye&2)===0||e!==_e)&&(e===_e&&((ye&2)===0&&(aa|=n),Ce===4&&Dn(e,he,Rt,!1)),qt(e))}function Rh(e,t,n){if((ye&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||bl(e,t),l=a?s1(e,t):as(e,t,!0),r=a;do{if(l===0){Ua&&!a&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!u1(n)){l=as(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;l=Il;var p=h.current.memoizedState.isDehydrated;if(p&&(Ga(h,f).flags|=256),f=as(h,f,!1),f!==2){if(Jc&&!p){h.errorRecoveryDisabledLanes|=r,aa|=r,l=4;break e}r=st,st=l,r!==null&&(st===null?st=r:st.push.apply(st,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){Ga(e,0),Dn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Dn(a,t,Rt,!An);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Fc+300-Ut(),10<l)){if(Dn(a,t,Rt,!An),Mi(a,0,!0)!==0)break e;a.timeoutHandle=lm(Mh.bind(null,a,n,st,vr,Wc,t,Rt,aa,Ha,An,r,2,-0,0),l);break e}Mh(a,n,st,vr,Wc,t,Rt,aa,Ha,An,r,0,-0,0)}}break}while(!0);qt(e)}function Mh(e,t,n,a,l,r,f,h,p,T,D,B,A,w){if(e.timeoutHandle=-1,B=t.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(ui={stylesheets:null,count:0,unsuspend:Y1},zh(t),B=Z1(),B!==null)){e.cancelPendingCommit=B(Hh.bind(null,e,t,r,n,a,l,f,h,p,D,1,A,w)),Dn(e,r,f,!T);return}Hh(e,t,r,n,a,l,f,h,p)}function u1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!ht(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,a){t&=~$c,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-dt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&Go(e,n,t)}function xr(){return(ye&6)===0?(ti(0),!1):!0}function ts(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,It=Fn=null,yc(e),Oa=null,Xl=0,e=fe;for(;e!==null;)sh(e.alternate,e),e=e.return;fe=null}}function Ga(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,_1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ts(),_e=e,fe=n=Wt(e.current,null),he=t,ve=0,bt=null,An=!1,Ua=bl(e,t),Jc=!1,Ha=Rt=$c=aa=wn=Ce=0,st=Il=null,Wc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-dt(a),r=1<<l;t|=e[l],a&=~r}return cn=t,Yi(),n}function Dh(e,t){ue=null,M.H=ur,t===Ul||t===Fi?(t=Jf(),ve=3):t===Xf?(t=Jf(),ve=4):ve=t===$d?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Ce=1,dr(e,Et(t,e.current)))}function Oh(){var e=M.H;return M.H=ur,e===null?ur:e}function Ch(){var e=M.A;return M.A=i1,e}function ns(){Ce=4,An||(he&4194048)!==he&&wt.current!==null||(Ua=!0),(wn&134217727)===0&&(aa&134217727)===0||_e===null||Dn(_e,he,Rt,!1)}function as(e,t,n){var a=ye;ye|=2;var l=Oh(),r=Ch();(_e!==e||he!==t)&&(vr=null,Ga(e,t)),t=!1;var f=Ce;e:do try{if(ve!==0&&fe!==null){var h=fe,p=bt;switch(ve){case 8:ts(),f=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var T=ve;if(ve=0,bt=null,qa(e,h,p,T),n&&Ua){f=0;break e}break;default:T=ve,ve=0,bt=null,qa(e,h,p,T)}}c1(),f=Ce;break}catch(D){Dh(e,D)}while(!0);return t&&e.shellSuspendCounter++,It=Fn=null,ye=a,M.H=l,M.A=r,fe===null&&(_e=null,he=0,Yi()),f}function c1(){for(;fe!==null;)Bh(fe)}function s1(e,t){var n=ye;ye|=2;var a=Oh(),l=Ch();_e!==e||he!==t?(vr=null,yr=Ut()+500,Ga(e,t)):Ua=bl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,qa(e,t,r,1);break;case 2:case 9:if(Qf(r)){ve=0,bt=null,Nh(t);break}t=function(){ve!==2&&ve!==9||_e!==e||(ve=7),qt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Qf(r)?(ve=0,bt=null,Nh(t)):(ve=0,bt=null,qa(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||pm(f)){ve=0,bt=null;var p=h.sibling;if(p!==null)fe=p;else{var T=h.return;T!==null?(fe=T,Sr(T)):fe=null}break t}}ve=0,bt=null,qa(e,t,r,5);break;case 6:ve=0,bt=null,qa(e,t,r,6);break;case 8:ts(),Ce=6;break e;default:throw Error(c(462))}}o1();break}catch(D){Dh(e,D)}while(!0);return It=Fn=null,M.H=a,M.A=l,ye=n,fe!==null?0:(_e=null,he=0,Yi(),Ce)}function o1(){for(;fe!==null&&!O0();)Bh(fe)}function Bh(e){var t=uh(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function Nh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=th(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=th(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:yc(t);default:sh(n,t),t=fe=Uf(t,cn),t=uh(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function qa(e,t,n,a){It=Fn=null,yc(t),Oa=null,Xl=0;var l=t.return;try{if(Ip(e,l,t,n,he)){Ce=1,dr(e,Et(n,e.current)),fe=null;return}}catch(r){if(l!==null)throw fe=l,r;Ce=1,dr(e,Et(n,e.current)),fe=null;return}t.flags&32768?(ge||a===1?e=!0:Ua||(he&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Uh(t,e)):Sr(t)}function Sr(e){var t=e;do{if((t.flags&32768)!==0){Uh(t,An);return}e=t.return;var n=t1(t.alternate,t,cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ce===0&&(Ce=5)}function Uh(e,t){do{var n=n1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ce=6,fe=null}function Hh(e,t,n,a,l,r,f,h,p){e.cancelPendingCommit=null;do jr();while(We!==0);if((ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Ku,Y0(e,n,r,f,h,p),e===_e&&(fe=_e=null,he=0),ka=t,Mn=e,La=n,Pc=r,Ic=l,Ah=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,m1(Ai,function(){return Yh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,l=Y.p,Y.p=2,f=ye,ye|=4;try{a1(e,t,n)}finally{ye=f,Y.p=l,M.T=a}}We=1,kh(),Lh(),Gh()}}function kh(){if(We===1){We=0;var e=Mn,t=ka,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{xh(t,e);var r=gs,f=Tf(e.containerInfo),h=r.focusedElem,p=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&_f(h.ownerDocument.documentElement,h)){if(p!==null&&Yu(h)){var T=p.start,D=p.end;if(D===void 0&&(D=T),"selectionStart"in h)h.selectionStart=T,h.selectionEnd=Math.min(D,h.value.length);else{var B=h.ownerDocument||document,A=B&&B.defaultView||window;if(A.getSelection){var w=A.getSelection(),ne=h.textContent.length,I=Math.min(p.start,ne),je=p.end===void 0?I:Math.min(p.end,ne);!w.extend&&I>je&&(f=je,je=I,I=f);var j=Ef(h,I),S=Ef(h,je);if(j&&S&&(w.rangeCount!==1||w.anchorNode!==j.node||w.anchorOffset!==j.offset||w.focusNode!==S.node||w.focusOffset!==S.offset)){var E=B.createRange();E.setStart(j.node,j.offset),w.removeAllRanges(),I>je?(w.addRange(E),w.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),w.addRange(E))}}}}for(B=[],w=h;w=w.parentNode;)w.nodeType===1&&B.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<B.length;h++){var O=B[h];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Br=!!ms,gs=ms=null}finally{ye=l,Y.p=a,M.T=n}}e.current=t,We=2}}function Lh(){if(We===2){We=0;var e=Mn,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{ph(e,t.alternate,t)}finally{ye=l,Y.p=a,M.T=n}}We=3}}function Gh(){if(We===4||We===3){We=0,C0();var e=Mn,t=ka,n=La,a=Ah;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,ka=Mn=null,qh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Rn=null),Su(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,l=Y.p,Y.p=2,M.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{M.T=t,Y.p=l}}(La&3)!==0&&jr(),qt(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===es?ei++:(ei=0,es=e):ei=0,ti(0)}}function qh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function jr(e){return kh(),Lh(),Gh(),Yh()}function Yh(){if(We!==5)return!1;var e=Mn,t=Pc;Pc=0;var n=Su(La),a=M.T,l=Y.p;try{Y.p=32>n?32:n,M.T=null,n=Ic,Ic=null;var r=Mn,f=La;if(We=0,ka=Mn=null,La=0,(ye&6)!==0)throw Error(c(331));var h=ye;if(ye|=4,_h(r.current),jh(r,r.current,f,n),ye=h,ti(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(pl,r)}catch{}return!0}finally{Y.p=l,M.T=a,qh(e,t)}}function Vh(e,t,n){t=Et(n,t),t=Oc(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(yl(e,2),qt(e))}function Ee(e,t,n){if(e.tag===3)Vh(e,e,n);else for(;t!==null;){if(t.tag===3){Vh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rn===null||!Rn.has(a))){e=Et(n,e),n=Kd(2),a=xn(t,n,2),a!==null&&(Jd(n,a,t,e),yl(a,2),qt(a));break}}t=t.return}}function ls(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new r1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Jc=!0,l.add(n),e=f1.bind(null,e,t,n),t.then(e,e))}function f1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(he&n)===n&&(Ce===4||Ce===3&&(he&62914560)===he&&300>Ut()-Fc?(ye&2)===0&&Ga(e,0):$c|=n,Ha===he&&(Ha=0)),qt(e)}function Zh(e,t){t===0&&(t=Lo()),e=ja(e,t),e!==null&&(yl(e,t),qt(e))}function d1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zh(e,n)}function h1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Zh(e,n)}function m1(e,t){return bu(e,t)}var zr=null,Ya=null,is=!1,Er=!1,rs=!1,la=0;function qt(e){e!==Ya&&e.next===null&&(Ya===null?zr=Ya=e:Ya=Ya.next=e),Er=!0,is||(is=!0,p1())}function ti(e,t){if(!rs&&Er){rs=!0;do for(var n=!1,a=zr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=l&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Jh(a,r))}else r=he,r=Mi(a,a===_e?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||bl(a,r)||(n=!0,Jh(a,r));a=a.next}while(n);rs=!1}}function g1(){Xh()}function Xh(){Er=is=!1;var e=0;la!==0&&(E1()&&(e=la),la=0);for(var t=Ut(),n=null,a=zr;a!==null;){var l=a.next,r=Qh(a,t);r===0?(a.next=null,n===null?zr=l:n.next=l,l===null&&(Ya=n)):(n=a,(e!==0||(r&3)!==0)&&(Er=!0)),a=l}ti(e)}function Qh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,p=l[f];p===-1?((h&n)===0||(h&a)!==0)&&(l[f]=q0(h,t)):p<=t&&(e.expiredLanes|=h),r&=~h}if(t=_e,n=he,n=Mi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&yu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&yu(a),Su(n)){case 2:case 8:n=Uo;break;case 32:n=Ai;break;case 268435456:n=Ho;break;default:n=Ai}return a=Kh.bind(null,e),n=bu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&yu(a),e.callbackPriority=2,e.callbackNode=null,2}function Kh(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var a=he;return a=Mi(e,e===_e?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Rh(e,a,t),Qh(e,Ut()),e.callbackNode!=null&&e.callbackNode===n?Kh.bind(null,e):null)}function Jh(e,t){if(jr())return null;Rh(e,t,!0)}function p1(){T1(function(){(ye&6)!==0?bu(No,g1):Xh()})}function us(){return la===0&&(la=ko()),la}function $h(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ni(""+e)}function Wh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function b1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=$h((l[it]||null).action),f=a.submitter;f&&(t=(t=f[it]||null)?$h(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Li("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var p=f?Wh(l,f):new FormData(l);Ac(n,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(h.preventDefault(),p=f?Wh(l,f):new FormData(l),Ac(n,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var cs=0;cs<Qu.length;cs++){var ss=Qu[cs],y1=ss.toLowerCase(),v1=ss[0].toUpperCase()+ss.slice(1);Ot(y1,"on"+v1)}Ot(Rf,"onAnimationEnd"),Ot(Mf,"onAnimationIteration"),Ot(Df,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Up,"onTransitionRun"),Ot(Hp,"onTransitionStart"),Ot(kp,"onTransitionCancel"),Ot(Of,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function Fh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],p=h.instance,T=h.currentTarget;if(h=h.listener,p!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=T;try{r(l)}catch(D){fr(D)}l.currentTarget=null,r=p}else for(f=0;f<a.length;f++){if(h=a[f],p=h.instance,T=h.currentTarget,h=h.listener,p!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=T;try{r(l)}catch(D){fr(D)}l.currentTarget=null,r=p}}}}function de(e,t){var n=t[ju];n===void 0&&(n=t[ju]=new Set);var a=e+"__bubble";n.has(a)||(Ph(t,e,2,!1),n.add(a))}function os(e,t,n){var a=0;t&&(a|=4),Ph(n,e,a,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[_r]){e[_r]=!0,Zo.forEach(function(n){n!=="selectionchange"&&(x1.has(n)||os(n,!1,e),os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,os("selectionchange",!1,t))}}function Ph(e,t,n,a){switch(jm(t)){case 2:var l=K1;break;case 8:l=J1;break;default:l=_s}n=l.bind(null,t,n,e),l=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ds(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===l)break;if(f===4)for(f=a.return;f!==null;){var p=f.tag;if((p===3||p===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;h!==null;){if(f=sa(h),f===null)return;if(p=f.tag,p===5||p===6||p===26||p===27){a=r=f;continue e}h=h.parentNode}}a=a.return}lf(function(){var T=r,D=Du(n),B=[];e:{var A=Cf.get(e);if(A!==void 0){var w=Li,ne=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":w=mp;break;case"focusin":ne="focus",w=Hu;break;case"focusout":ne="blur",w=Hu;break;case"beforeblur":case"afterblur":w=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=bp;break;case Rf:case Mf:case Df:w=ip;break;case Of:w=vp;break;case"scroll":case"scrollend":w=ep;break;case"wheel":w=Sp;break;case"copy":case"cut":case"paste":w=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=of;break;case"toggle":case"beforetoggle":w=zp}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),j=I?A!==null?A+"Capture":null:A;I=[];for(var S=T,E;S!==null;){var O=S;if(E=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||E===null||j===null||(O=Sl(S,j),O!=null&&I.push(ai(S,O,E))),je)break;S=S.return}0<I.length&&(A=new w(A,ne,null,n,D),B.push({event:A,listeners:I}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",A&&n!==Mu&&(ne=n.relatedTarget||n.fromElement)&&(sa(ne)||ne[ca]))break e;if((w||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,w?(ne=n.relatedTarget||n.toElement,w=T,ne=ne?sa(ne):null,ne!==null&&(je=m(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(w=null,ne=T),w!==ne)){if(I=cf,O="onMouseLeave",j="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=of,O="onPointerLeave",j="onPointerEnter",S="pointer"),je=w==null?A:xl(w),E=ne==null?A:xl(ne),A=new I(O,S+"leave",w,n,D),A.target=je,A.relatedTarget=E,O=null,sa(D)===T&&(I=new I(j,S+"enter",ne,n,D),I.target=E,I.relatedTarget=je,O=I),je=O,w&&ne)t:{for(I=w,j=ne,S=0,E=I;E;E=Va(E))S++;for(E=0,O=j;O;O=Va(O))E++;for(;0<S-E;)I=Va(I),S--;for(;0<E-S;)j=Va(j),E--;for(;S--;){if(I===j||j!==null&&I===j.alternate)break t;I=Va(I),j=Va(j)}I=null}else I=null;w!==null&&Ih(B,A,w,I,!1),ne!==null&&je!==null&&Ih(B,je,ne,I,!0)}}e:{if(A=T?xl(T):window,w=A.nodeName&&A.nodeName.toLowerCase(),w==="select"||w==="input"&&A.type==="file")var K=yf;else if(pf(A))if(vf)K=Cp;else{K=Dp;var ce=Mp}else w=A.nodeName,!w||w.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Ru(T.elementType)&&(K=yf):K=Op;if(K&&(K=K(e,T))){bf(B,K,n,D);break e}ce&&ce(e,A,T),e==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&wu(A,"number",A.value)}switch(ce=T?xl(T):window,e){case"focusin":(pf(ce)||ce.contentEditable==="true")&&(va=ce,Vu=T,Rl=null);break;case"focusout":Rl=Vu=va=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Af(B,n,D);break;case"selectionchange":if(Np)break;case"keydown":case"keyup":Af(B,n,D)}var J;if(Lu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ya?mf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(ff&&n.locale!=="ko"&&(ya||te!=="onCompositionStart"?te==="onCompositionEnd"&&ya&&(J=rf()):(pn=D,Bu="value"in pn?pn.value:pn.textContent,ya=!0)),ce=Tr(T,te),0<ce.length&&(te=new sf(te,e,null,n,D),B.push({event:te,listeners:ce}),J?te.data=J:(J=gf(n),J!==null&&(te.data=J)))),(J=_p?Tp(e,n):Ap(e,n))&&(te=Tr(T,"onBeforeInput"),0<te.length&&(ce=new sf("onBeforeInput","beforeinput",null,n,D),B.push({event:ce,listeners:te}),ce.data=J)),b1(B,e,T,n,D)}Fh(B,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Sl(e,n),l!=null&&a.unshift(ai(e,l,r)),l=Sl(e,t),l!=null&&a.push(ai(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ih(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,p=h.alternate,T=h.stateNode;if(h=h.tag,p!==null&&p===a)break;h!==5&&h!==26&&h!==27||T===null||(p=T,l?(T=Sl(n,r),T!=null&&f.unshift(ai(n,T,p))):l||(T=Sl(n,r),T!=null&&f.push(ai(n,T,p)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var S1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function em(e){return(typeof e=="string"?e:""+e).replace(S1,`
`).replace(j1,"")}function tm(e,t){return t=em(t),em(e)===t}function Ar(){}function Se(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ga(e,""+a);break;case"className":Oi(e,"class",a);break;case"tabIndex":Oi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,n,a);break;case"style":nf(e,a,r);break;case"data":if(t!=="object"){Oi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ni(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Di(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Di(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=P0.get(n)||n,Di(e,n,a))}}function hs(e,t,n,a,l,r){switch(n){case"style":nf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[it]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Di(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,r,f,n,null)}}l&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=l=null,p=null,T=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":l=D;break;case"type":f=D;break;case"checked":p=D;break;case"defaultChecked":T=D;break;case"value":r=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Se(e,t,a,D,n,null)}}Po(e,r,h,p,T,f,l,!1),Ci(e);return;case"select":de("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,l,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ma(e,!!a,t,!1):n!=null&&ma(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Se(e,t,f,h,n,null)}ef(e,a,l,r),Ci(e);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,p,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ni.length;a++)de(ni[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(a=n[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,T,a,n,null)}return;default:if(Ru(t)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&hs(e,t,D,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function z1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,h=null,p=null,T=null,D=null;for(w in n){var B=n[w];if(n.hasOwnProperty(w)&&B!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":p=B;default:a.hasOwnProperty(w)||Se(e,t,w,null,a,B)}}for(var A in a){var w=a[A];if(B=n[A],a.hasOwnProperty(A)&&(w!=null||B!=null))switch(A){case"type":r=w;break;case"name":l=w;break;case"checked":T=w;break;case"defaultChecked":D=w;break;case"value":f=w;break;case"defaultValue":h=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:w!==B&&Se(e,t,A,w,a,B)}}Au(e,f,h,p,T,D,r,l);return;case"select":w=f=h=A=null;for(r in n)if(p=n[r],n.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":w=p;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,p)}for(l in a)if(r=a[l],p=n[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":A=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==p&&Se(e,t,l,r,a,p)}t=h,n=f,a=w,A!=null?ma(e,!!n,A,!1):!!a!=!!n&&(t!=null?ma(e,!!n,t,!0):ma(e,!!n,n?[]:"",!1));return;case"textarea":w=A=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":A=l;break;case"defaultValue":w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Se(e,t,f,l,a,r)}Io(e,A,w);return;case"option":for(var ne in n)if(A=n[ne],n.hasOwnProperty(ne)&&A!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,A)}for(p in a)if(A=a[p],w=n[p],a.hasOwnProperty(p)&&A!==w&&(A!=null||w!=null))switch(p){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Se(e,t,p,A,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)A=n[I],n.hasOwnProperty(I)&&A!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,A);for(T in a)if(A=a[T],w=n[T],a.hasOwnProperty(T)&&A!==w&&(A!=null||w!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Se(e,t,T,A,a,w)}return;default:if(Ru(t)){for(var je in n)A=n[je],n.hasOwnProperty(je)&&A!==void 0&&!a.hasOwnProperty(je)&&hs(e,t,je,void 0,a,A);for(D in a)A=a[D],w=n[D],!a.hasOwnProperty(D)||A===w||A===void 0&&w===void 0||hs(e,t,D,A,a,w);return}}for(var j in n)A=n[j],n.hasOwnProperty(j)&&A!=null&&!a.hasOwnProperty(j)&&Se(e,t,j,null,a,A);for(B in a)A=a[B],w=n[B],!a.hasOwnProperty(B)||A===w||A==null&&w==null||Se(e,t,B,A,a,w)}var ms=null,gs=null;function wr(e){return e.nodeType===9?e:e.ownerDocument}function nm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bs=null;function E1(){var e=window.event;return e&&e.type==="popstate"?e===bs?!1:(bs=e,!0):(bs=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,_1=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(e){return im.resolve(null).then(e).catch(A1)}:lm;function A1(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function rm(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&li(f.documentElement),n&2&&li(f.body),n&4)for(n=f.head,li(n),f=n.firstChild;f;){var h=f.nextSibling,p=f.nodeName;f[vl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(l===0){e.removeChild(r),di(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);di(t)}function ys(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ys(n),zu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function w1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function R1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function vs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function M1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var xs=null;function um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function cm(e,t,n){switch(t=wr(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zu(e)}var Mt=new Map,sm=new Set;function Rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sn=Y.d;Y.d={f:D1,r:O1,D:C1,C:B1,L:N1,m:U1,X:k1,S:H1,M:L1};function D1(){var e=sn.f(),t=xr();return e||t}function O1(e){var t=oa(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):sn.r(e)}var Za=typeof document>"u"?null:document;function om(e,t,n){var a=Za;if(a&&typeof t=="string"&&t){var l=zt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),sm.has(l)||(sm.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function C1(e){sn.D(e),om("dns-prefetch",e,null)}function B1(e,t){sn.C(e,t),om("preconnect",e,t)}function N1(e,t,n){sn.L(e,t,n);var a=Za;if(a&&e&&t){var l='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+zt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+zt(n.imageSizes)+'"]')):l+='[href="'+zt(e)+'"]';var r=l;switch(t){case"style":r=Xa(e);break;case"script":r=Qa(e)}Mt.has(r)||(e=_({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(ii(r))||t==="script"&&a.querySelector(ri(r))||(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function U1(e,t){sn.m(e,t);var n=Za;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+zt(a)+'"][href="'+zt(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Qa(e)}if(!Mt.has(r)&&(e=_({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ri(r)))return}a=n.createElement("link"),Fe(a,"link",e),Ze(a),n.head.appendChild(a)}}}function H1(e,t,n){sn.S(e,t,n);var a=Za;if(a&&e){var l=fa(a).hoistableStyles,r=Xa(e);t=t||"default";var f=l.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(ii(r)))h.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&Ss(e,n);var p=f=a.createElement("link");Ze(p),Fe(p,"link",e),p._p=new Promise(function(T,D){p.onload=T,p.onerror=D}),p.addEventListener("load",function(){h.loading|=1}),p.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Mr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},l.set(r,f)}}}function k1(e,t){sn.X(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ri(l)),r||(e=_({src:e,async:!0},t),(t=Mt.get(l))&&js(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function L1(e,t){sn.M(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ri(l)),r||(e=_({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&js(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function fm(e,t,n,a){var l=(l=ee.current)?Rr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xa(n.href),n=fa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xa(n.href);var r=fa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(ii(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||G1(l,e,n,f.state))),t&&a===null)throw Error(c(528,""));return f}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qa(n),n=fa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Xa(e){return'href="'+zt(e)+'"'}function ii(e){return'link[rel="stylesheet"]['+e+"]"}function dm(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function G1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Ze(t),e.head.appendChild(t))}function Qa(e){return'[src="'+zt(e)+'"]'}function ri(e){return"script[async]"+e}function hm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+zt(n.href)+'"]');if(a)return t.instance=a,Ze(a),a;var l=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),Fe(a,"style",l),Mr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Xa(n.href);var r=e.querySelector(ii(l));if(r)return t.state.loading|=4,t.instance=r,Ze(r),r;a=dm(n),(l=Mt.get(l))&&Ss(a,l),r=(e.ownerDocument||e).createElement("link"),Ze(r);var f=r;return f._p=new Promise(function(h,p){f.onload=h,f.onerror=p}),Fe(r,"link",a),t.state.loading|=4,Mr(r,n.precedence,e),t.instance=r;case"script":return r=Qa(n.src),(l=e.querySelector(ri(r)))?(t.instance=l,Ze(l),l):(a=n,(l=Mt.get(r))&&(a=_({},n),js(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Fe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mr(a,n.precedence,e));return t.instance}function Mr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ss(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dr=null;function mm(e,t,n){if(Dr===null){var a=new Map,l=Dr=new Map;l.set(n,a)}else l=Dr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[vl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function gm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function q1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ui=null;function Y1(){}function V1(e,t,n){if(ui===null)throw Error(c(475));var a=ui;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Xa(n.href),r=e.querySelector(ii(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Or.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ze(r);return}r=e.ownerDocument||e,n=dm(n),(l=Mt.get(l))&&Ss(n,l),r=r.createElement("link"),Ze(r);var f=r;f._p=new Promise(function(h,p){f.onload=h,f.onerror=p}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Or.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Z1(){if(ui===null)throw Error(c(475));var e=ui;return e.stylesheets&&e.count===0&&zs(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Or(){if(this.count--,this.count===0){if(this.stylesheets)zs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cr=null;function zs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cr=new Map,t.forEach(X1,e),Cr=null,Or.call(e))}function X1(e,t){if(!(t.state.loading&4)){var n=Cr.get(e);if(n)var a=n.get(null);else{n=new Map,Cr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Or.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ci={$$typeof:X,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Q1(e,t,n,a,l,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function bm(e,t,n,a,l,r,f,h,p,T,D,B){return e=new Q1(e,t,n,f,h,p,T,B),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=lc(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},cc(r),e}function ym(e){return e?(e=za,e):za}function vm(e,t,n,a,l,r){l=ym(l),a.context===null?a.context=l:a.pendingContext=l,a=vn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=xn(e,a,t),n!==null&&(vt(n,e,t),kl(n,e,t))}function xm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){xm(e,t),(e=e.alternate)&&xm(e,t)}function Sm(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&vt(t,e,67108864),Es(e,67108864)}}var Br=!0;function K1(e,t,n,a){var l=M.T;M.T=null;var r=Y.p;try{Y.p=2,_s(e,t,n,a)}finally{Y.p=r,M.T=l}}function J1(e,t,n,a){var l=M.T;M.T=null;var r=Y.p;try{Y.p=8,_s(e,t,n,a)}finally{Y.p=r,M.T=l}}function _s(e,t,n,a){if(Br){var l=Ts(a);if(l===null)ds(e,t,a,Nr,n),zm(e,a);else if(W1(l,e,t,n,a))a.stopPropagation();else if(zm(e,a),t&4&&-1<$1.indexOf(e)){for(;l!==null;){var r=oa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=qn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var p=1<<31-dt(f);h.entanglements[1]|=p,f&=~p}qt(r),(ye&6)===0&&(yr=Ut()+500,ti(0))}}break;case 13:h=ja(r,2),h!==null&&vt(h,r,2),xr(),Es(r,2)}if(r=Ts(a),r===null&&ds(e,t,a,Nr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else ds(e,t,a,null,n)}}function Ts(e){return e=Du(e),As(e)}var Nr=null;function As(e){if(Nr=null,e=sa(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function jm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B0()){case No:return 2;case Uo:return 8;case Ai:case N0:return 32;case Ho:return 268435456;default:return 32}default:return 32}}var ws=!1,Cn=null,Bn=null,Nn=null,si=new Map,oi=new Map,Un=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zm(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function fi(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=oa(t),t!==null&&Sm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function W1(e,t,n,a,l){switch(t){case"focusin":return Cn=fi(Cn,e,t,n,a,l),!0;case"dragenter":return Bn=fi(Bn,e,t,n,a,l),!0;case"mouseover":return Nn=fi(Nn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return si.set(r,fi(si.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,oi.set(r,fi(oi.get(r)||null,e,t,n,a,l)),!0}return!1}function Em(e){var t=sa(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,V0(e.priority,function(){if(n.tag===13){var a=yt();a=xu(a);var l=ja(n,a);l!==null&&vt(l,n,a),Es(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ts(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Mu=a,n.target.dispatchEvent(a),Mu=null}else return t=oa(n),t!==null&&Sm(t),e.blockedOn=n,!1;t.shift()}return!0}function _m(e,t,n){Ur(e)&&n.delete(t)}function F1(){ws=!1,Cn!==null&&Ur(Cn)&&(Cn=null),Bn!==null&&Ur(Bn)&&(Bn=null),Nn!==null&&Ur(Nn)&&(Nn=null),si.forEach(_m),oi.forEach(_m)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,F1)))}var kr=null;function Tm(e){kr!==e&&(kr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){kr===e&&(kr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(As(a||n)===null)continue;break}var r=oa(n);r!==null&&(e.splice(t,3),t-=3,Ac(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function di(e){function t(p){return Hr(p,e)}Cn!==null&&Hr(Cn,e),Bn!==null&&Hr(Bn,e),Nn!==null&&Hr(Nn,e),si.forEach(t),oi.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[it]||null;if(typeof r=="function")f||Tm(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[it]||null)h=f.formAction;else if(As(l)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Tm(n)}}}function Rs(e){this._internalRoot=e}Lr.prototype.render=Rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=yt();vm(n,a,e,t,null,null)},Lr.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vm(e.current,2,null,e,null,null),xr(),t[ca]=null}};function Lr(e){this._internalRoot=e}Lr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Em(e)}};var Am=u.version;if(Am!=="19.1.0")throw Error(c(527,Am,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var P1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{pl=Gr.inject(P1),ft=Gr}catch{}}return mi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",l=Vd,r=Zd,f=Xd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=bm(e,1,!1,null,null,n,a,l,r,f,h,null),e[ca]=t.current,fs(e),new Rs(t)},mi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,l="",r=Vd,f=Zd,h=Xd,p=null,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(T=n.formState)),t=bm(e,1,!0,t,n??null,a,l,r,f,h,p,T),t.context=ym(null),n=t.current,a=yt(),a=xu(a),l=vn(a),l.callback=null,xn(n,l,a),n=a,t.current.lanes=n,yl(t,n),qt(t),e[ca]=t.current,fs(e),new Lr(t)},mi.version="19.1.0",mi}var Hm;function sb(){if(Hm)return Os.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Os.exports=cb(),Os.exports}var ob=sb();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var km="popstate";function fb(i={}){function u(c,d){let{pathname:m,search:b,hash:z}=c.location;return oo("",{pathname:m,search:b,hash:z},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(c,d){return typeof d=="string"?d:Si(d)}return hb(u,s,null,i)}function De(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Vt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function db(){return Math.random().toString(36).substring(2,10)}function Lm(i,u){return{usr:i.state,key:i.key,idx:u}}function oo(i,u,s=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?hl(u):u,state:s,key:u&&u.key||c||db()}}function Si({pathname:i="/",search:u="",hash:s=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function hl(i){let u={};if(i){let s=i.indexOf("#");s>=0&&(u.hash=i.substring(s),i=i.substring(0,s));let c=i.indexOf("?");c>=0&&(u.search=i.substring(c),i=i.substring(0,c)),i&&(u.pathname=i)}return u}function hb(i,u,s,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,b=d.history,z="POP",v=null,g=_();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function _(){return(b.state||{idx:null}).idx}function C(){z="POP";let Z=_(),H=Z==null?null:Z-g;g=Z,v&&v({action:z,location:q.location,delta:H})}function U(Z,H){z="PUSH";let $=oo(q.location,Z,H);g=_()+1;let X=Lm($,g),ae=q.createHref($);try{b.pushState(X,"",ae)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;d.location.assign(ae)}m&&v&&v({action:z,location:q.location,delta:1})}function k(Z,H){z="REPLACE";let $=oo(q.location,Z,H);g=_();let X=Lm($,g),ae=q.createHref($);b.replaceState(X,"",ae),m&&v&&v({action:z,location:q.location,delta:0})}function L(Z){return mb(Z)}let q={get action(){return z},get location(){return i(d,b)},listen(Z){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(km,C),v=Z,()=>{d.removeEventListener(km,C),v=null}},createHref(Z){return u(d,Z)},createURL:L,encodeLocation(Z){let H=L(Z);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:k,go(Z){return b.go(Z)}};return q}function mb(i,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),De(s,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:Si(i);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function bg(i,u,s="/"){return gb(i,u,s,!1)}function gb(i,u,s,c){let d=typeof u=="string"?hl(u):u,m=dn(d.pathname||"/",s);if(m==null)return null;let b=yg(i);pb(b);let z=null;for(let v=0;z==null&&v<b.length;++v){let g=Ab(m);z=_b(b[v],g,c)}return z}function yg(i,u=[],s=[],c=""){let d=(m,b,z)=>{let v={relativePath:z===void 0?m.path||"":z,caseSensitive:m.caseSensitive===!0,childrenIndex:b,route:m};v.relativePath.startsWith("/")&&(De(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let g=fn([c,v.relativePath]),_=s.concat(v);m.children&&m.children.length>0&&(De(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),yg(m.children,u,_,g)),!(m.path==null&&!m.index)&&u.push({path:g,score:zb(g,m.index),routesMeta:_})};return i.forEach((m,b)=>{if(m.path===""||!m.path?.includes("?"))d(m,b);else for(let z of vg(m.path))d(m,b,z)}),u}function vg(i){let u=i.split("/");if(u.length===0)return[];let[s,...c]=u,d=s.endsWith("?"),m=s.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let b=vg(c.join("/")),z=[];return z.push(...b.map(v=>v===""?m:[m,v].join("/"))),d&&z.push(...b),z.map(v=>i.startsWith("/")&&v===""?"/":v)}function pb(i){i.sort((u,s)=>u.score!==s.score?s.score-u.score:Eb(u.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var bb=/^:[\w-]+$/,yb=3,vb=2,xb=1,Sb=10,jb=-2,Gm=i=>i==="*";function zb(i,u){let s=i.split("/"),c=s.length;return s.some(Gm)&&(c+=jb),u&&(c+=vb),s.filter(d=>!Gm(d)).reduce((d,m)=>d+(bb.test(m)?yb:m===""?xb:Sb),c)}function Eb(i,u){return i.length===u.length&&i.slice(0,-1).every((c,d)=>c===u[d])?i[i.length-1]-u[u.length-1]:0}function _b(i,u,s=!1){let{routesMeta:c}=i,d={},m="/",b=[];for(let z=0;z<c.length;++z){let v=c[z],g=z===c.length-1,_=m==="/"?u:u.slice(m.length)||"/",C=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},_),U=v.route;if(!C&&g&&s&&!c[c.length-1].route.index&&(C=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},_)),!C)return null;Object.assign(d,C.params),b.push({params:d,pathname:fn([m,C.pathname]),pathnameBase:Db(fn([m,C.pathnameBase])),route:U}),C.pathnameBase!=="/"&&(m=fn([m,C.pathnameBase]))}return b}function lu(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,c]=Tb(i.path,i.caseSensitive,i.end),d=u.match(s);if(!d)return null;let m=d[0],b=m.replace(/(.)\/+$/,"$1"),z=d.slice(1);return{params:c.reduce((g,{paramName:_,isOptional:C},U)=>{if(_==="*"){let L=z[U]||"";b=m.slice(0,m.length-L.length).replace(/(.)\/+$/,"$1")}const k=z[U];return C&&!k?g[_]=void 0:g[_]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:b,pattern:i}}function Tb(i,u=!1,s=!0){Vt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,z,v)=>(c.push({paramName:z,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),c]}function Ab(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Vt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function dn(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,c=i.charAt(s);return c&&c!=="/"?null:i.slice(s)||"/"}function wb(i,u="/"){let{pathname:s,search:c="",hash:d=""}=typeof i=="string"?hl(i):i;return{pathname:s?s.startsWith("/")?s:Rb(s,u):u,search:Ob(c),hash:Cb(d)}}function Rb(i,u){let s=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Us(i,u,s,c){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mb(i){return i.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function xg(i){let u=Mb(i);return u.map((s,c)=>c===u.length-1?s.pathname:s.pathnameBase)}function Sg(i,u,s,c=!1){let d;typeof i=="string"?d=hl(i):(d={...i},De(!d.pathname||!d.pathname.includes("?"),Us("?","pathname","search",d)),De(!d.pathname||!d.pathname.includes("#"),Us("#","pathname","hash",d)),De(!d.search||!d.search.includes("#"),Us("#","search","hash",d)));let m=i===""||d.pathname==="",b=m?"/":d.pathname,z;if(b==null)z=s;else{let C=u.length-1;if(!c&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),C-=1;d.pathname=U.join("/")}z=C>=0?u[C]:"/"}let v=wb(d,z),g=b&&b!=="/"&&b.endsWith("/"),_=(m||b===".")&&s.endsWith("/");return!v.pathname.endsWith("/")&&(g||_)&&(v.pathname+="/"),v}var fn=i=>i.join("/").replace(/\/\/+/g,"/"),Db=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Ob=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Cb=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Bb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var jg=["POST","PUT","PATCH","DELETE"];new Set(jg);var Nb=["GET",...jg];new Set(Nb);var ml=R.createContext(null);ml.displayName="DataRouter";var su=R.createContext(null);su.displayName="DataRouterState";R.createContext(!1);var zg=R.createContext({isTransitioning:!1});zg.displayName="ViewTransition";var Ub=R.createContext(new Map);Ub.displayName="Fetchers";var Hb=R.createContext(null);Hb.displayName="Await";var Zt=R.createContext(null);Zt.displayName="Navigation";var zi=R.createContext(null);zi.displayName="Location";var hn=R.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var So=R.createContext(null);So.displayName="RouteError";function kb(i,{relative:u}={}){De(Ei(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=R.useContext(Zt),{hash:d,pathname:m,search:b}=_i(i,{relative:u}),z=m;return s!=="/"&&(z=m==="/"?s:fn([s,m])),c.createHref({pathname:z,search:b,hash:d})}function Ei(){return R.useContext(zi)!=null}function Ln(){return De(Ei(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(zi).location}var Eg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _g(i){R.useContext(Zt).static||R.useLayoutEffect(i)}function Lb(){let{isDataRoute:i}=R.useContext(hn);return i?Pb():Gb()}function Gb(){De(Ei(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(ml),{basename:u,navigator:s}=R.useContext(Zt),{matches:c}=R.useContext(hn),{pathname:d}=Ln(),m=JSON.stringify(xg(c)),b=R.useRef(!1);return _g(()=>{b.current=!0}),R.useCallback((v,g={})=>{if(Vt(b.current,Eg),!b.current)return;if(typeof v=="number"){s.go(v);return}let _=Sg(v,JSON.parse(m),d,g.relative==="path");i==null&&u!=="/"&&(_.pathname=_.pathname==="/"?u:fn([u,_.pathname])),(g.replace?s.replace:s.push)(_,g.state,g)},[u,s,m,d,i])}R.createContext(null);function _i(i,{relative:u}={}){let{matches:s}=R.useContext(hn),{pathname:c}=Ln(),d=JSON.stringify(xg(s));return R.useMemo(()=>Sg(i,JSON.parse(d),c,u==="path"),[i,d,c,u])}function qb(i,u){return Tg(i,u)}function Tg(i,u,s,c){De(Ei(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=R.useContext(Zt),{matches:m}=R.useContext(hn),b=m[m.length-1],z=b?b.params:{},v=b?b.pathname:"/",g=b?b.pathnameBase:"/",_=b&&b.route;{let H=_&&_.path||"";Ag(v,!_||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let C=Ln(),U;if(u){let H=typeof u=="string"?hl(u):u;De(g==="/"||H.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=C;let k=U.pathname||"/",L=k;if(g!=="/"){let H=g.replace(/^\//,"").split("/");L="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=bg(i,{pathname:L});Vt(_||q!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Vt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=Qb(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},z,H.params),pathname:fn([g,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:fn([g,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),m,s,c);return u&&Z?R.createElement(zi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},Z):Z}function Yb(){let i=Fb(),u=Bb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:m},"ErrorBoundary")," or"," ",R.createElement("code",{style:m},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),s?R.createElement("pre",{style:d},s):null,b)}var Vb=R.createElement(Yb,null),Zb=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){console.error("React Router caught the following error during render",i,u)}render(){return this.state.error!==void 0?R.createElement(hn.Provider,{value:this.props.routeContext},R.createElement(So.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Xb({routeContext:i,match:u,children:s}){let c=R.useContext(ml);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(hn.Provider,{value:i},s)}function Qb(i,u=[],s=null,c=null){if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let d=i,m=s?.errors;if(m!=null){let v=d.findIndex(g=>g.route.id&&m?.[g.route.id]!==void 0);De(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let b=!1,z=-1;if(s)for(let v=0;v<d.length;v++){let g=d[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(z=v),g.route.id){let{loaderData:_,errors:C}=s,U=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||U){b=!0,z>=0?d=d.slice(0,z+1):d=[d[0]];break}}}return d.reduceRight((v,g,_)=>{let C,U=!1,k=null,L=null;s&&(C=m&&g.route.id?m[g.route.id]:void 0,k=g.route.errorElement||Vb,b&&(z<0&&_===0?(Ag("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,L=null):z===_&&(U=!0,L=g.route.hydrateFallbackElement||null)));let q=u.concat(d.slice(0,_+1)),Z=()=>{let H;return C?H=k:U?H=L:g.route.Component?H=R.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=v,R.createElement(Xb,{match:g,routeContext:{outlet:v,matches:q,isDataRoute:s!=null},children:H})};return s&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?R.createElement(Zb,{location:s.location,revalidation:s.revalidation,component:k,error:C,children:Z(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):Z()},null)}function jo(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kb(i){let u=R.useContext(ml);return De(u,jo(i)),u}function Jb(i){let u=R.useContext(su);return De(u,jo(i)),u}function $b(i){let u=R.useContext(hn);return De(u,jo(i)),u}function zo(i){let u=$b(i),s=u.matches[u.matches.length-1];return De(s.route.id,`${i} can only be used on routes that contain a unique "id"`),s.route.id}function Wb(){return zo("useRouteId")}function Fb(){let i=R.useContext(So),u=Jb("useRouteError"),s=zo("useRouteError");return i!==void 0?i:u.errors?.[s]}function Pb(){let{router:i}=Kb("useNavigate"),u=zo("useNavigate"),s=R.useRef(!1);return _g(()=>{s.current=!0}),R.useCallback(async(d,m={})=>{Vt(s.current,Eg),s.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:u,...m}))},[i,u])}var qm={};function Ag(i,u,s){!u&&!qm[i]&&(qm[i]=!0,Vt(!1,s))}R.memo(Ib);function Ib({routes:i,future:u,state:s}){return Tg(i,void 0,s,u)}function Wr(i){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ey({basename:i="/",children:u=null,location:s,navigationType:c="POP",navigator:d,static:m=!1}){De(!Ei(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),z=R.useMemo(()=>({basename:b,navigator:d,static:m,future:{}}),[b,d,m]);typeof s=="string"&&(s=hl(s));let{pathname:v="/",search:g="",hash:_="",state:C=null,key:U="default"}=s,k=R.useMemo(()=>{let L=dn(v,b);return L==null?null:{location:{pathname:L,search:g,hash:_,state:C,key:U},navigationType:c}},[b,v,g,_,C,U,c]);return Vt(k!=null,`<Router basename="${b}"> is not able to match the URL "${v}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:R.createElement(Zt.Provider,{value:z},R.createElement(zi.Provider,{children:u,value:k}))}function ty({children:i,location:u}){return qb(fo(i),u)}function fo(i,u=[]){let s=[];return R.Children.forEach(i,(c,d)=>{if(!R.isValidElement(c))return;let m=[...u,d];if(c.type===R.Fragment){s.push.apply(s,fo(c.props.children,m));return}De(c.type===Wr,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=fo(c.props.children,m)),s.push(b)}),s}var Fr="get",Pr="application/x-www-form-urlencoded";function ou(i){return i!=null&&typeof i.tagName=="string"}function ny(i){return ou(i)&&i.tagName.toLowerCase()==="button"}function ay(i){return ou(i)&&i.tagName.toLowerCase()==="form"}function ly(i){return ou(i)&&i.tagName.toLowerCase()==="input"}function iy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ry(i,u){return i.button===0&&(!u||u==="_self")&&!iy(i)}var qr=null;function uy(){if(qr===null)try{new FormData(document.createElement("form"),0),qr=!1}catch{qr=!0}return qr}var cy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hs(i){return i!=null&&!cy.has(i)?(Vt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pr}"`),null):i}function sy(i,u){let s,c,d,m,b;if(ay(i)){let z=i.getAttribute("action");c=z?dn(z,u):null,s=i.getAttribute("method")||Fr,d=Hs(i.getAttribute("enctype"))||Pr,m=new FormData(i)}else if(ny(i)||ly(i)&&(i.type==="submit"||i.type==="image")){let z=i.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||z.getAttribute("action");if(c=v?dn(v,u):null,s=i.getAttribute("formmethod")||z.getAttribute("method")||Fr,d=Hs(i.getAttribute("formenctype"))||Hs(z.getAttribute("enctype"))||Pr,m=new FormData(z,i),!uy()){let{name:g,type:_,value:C}=i;if(_==="image"){let U=g?`${g}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else g&&m.append(g,C)}}else{if(ou(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Fr,c=null,d=Pr,b=i}return m&&d==="text/plain"&&(b=m,m=void 0),{action:c,method:s.toLowerCase(),encType:d,formData:m,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Eo(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function oy(i,u,s){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${s}`:u&&dn(c.pathname,u)==="/"?c.pathname=`${u.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function fy(i,u){if(i.id in u)return u[i.id];try{let s=await import(i.module);return u[i.id]=s,s}catch(s){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function hy(i,u,s){let c=await Promise.all(i.map(async d=>{let m=u.routes[d.route.id];if(m){let b=await fy(m,s);return b.links?b.links():[]}return[]}));return by(c.flat(1).filter(dy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Ym(i,u,s,c,d,m){let b=(v,g)=>s[g]?v.route.id!==s[g].route.id:!0,z=(v,g)=>s[g].pathname!==v.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==v.params["*"];return m==="assets"?u.filter((v,g)=>b(v,g)||z(v,g)):m==="data"?u.filter((v,g)=>{let _=c.routes[v.route.id];if(!_||!_.hasLoader)return!1;if(b(v,g)||z(v,g))return!0;if(v.route.shouldRevalidate){let C=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function my(i,u,{includeHydrateFallback:s}={}){return gy(i.map(c=>{let d=u.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function gy(i){return[...new Set(i)]}function py(i){let u={},s=Object.keys(i).sort();for(let c of s)u[c]=i[c];return u}function by(i,u){let s=new Set;return new Set(u),i.reduce((c,d)=>{let m=JSON.stringify(py(d));return s.has(m)||(s.add(m),c.push({key:m,link:d})),c},[])}function wg(){let i=R.useContext(ml);return Eo(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function yy(){let i=R.useContext(su);return Eo(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var _o=R.createContext(void 0);_o.displayName="FrameworkContext";function Rg(){let i=R.useContext(_o);return Eo(i,"You must render this element inside a <HydratedRouter> element"),i}function vy(i,u){let s=R.useContext(_o),[c,d]=R.useState(!1),[m,b]=R.useState(!1),{onFocus:z,onBlur:v,onMouseEnter:g,onMouseLeave:_,onTouchStart:C}=u,U=R.useRef(null);R.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let q=H=>{H.forEach($=>{b($.isIntersecting)})},Z=new IntersectionObserver(q,{threshold:.5});return U.current&&Z.observe(U.current),()=>{Z.disconnect()}}},[i]),R.useEffect(()=>{if(c){let q=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(q)}}},[c]);let k=()=>{d(!0)},L=()=>{d(!1),b(!1)};return s?i!=="intent"?[m,U,{}]:[m,U,{onFocus:gi(z,k),onBlur:gi(v,L),onMouseEnter:gi(g,k),onMouseLeave:gi(_,L),onTouchStart:gi(C,k)}]:[!1,U,{}]}function gi(i,u){return s=>{i&&i(s),s.defaultPrevented||u(s)}}function xy({page:i,...u}){let{router:s}=wg(),c=R.useMemo(()=>bg(s.routes,i,s.basename),[s.routes,i,s.basename]);return c?R.createElement(jy,{page:i,matches:c,...u}):null}function Sy(i){let{manifest:u,routeModules:s}=Rg(),[c,d]=R.useState([]);return R.useEffect(()=>{let m=!1;return hy(i,u,s).then(b=>{m||d(b)}),()=>{m=!0}},[i,u,s]),c}function jy({page:i,matches:u,...s}){let c=Ln(),{manifest:d,routeModules:m}=Rg(),{basename:b}=wg(),{loaderData:z,matches:v}=yy(),g=R.useMemo(()=>Ym(i,u,v,d,c,"data"),[i,u,v,d,c]),_=R.useMemo(()=>Ym(i,u,v,d,c,"assets"),[i,u,v,d,c]),C=R.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let L=new Set,q=!1;if(u.forEach(H=>{let $=d.routes[H.route.id];!$||!$.hasLoader||(!g.some(X=>X.route.id===H.route.id)&&H.route.id in z&&m[H.route.id]?.shouldRevalidate||$.hasClientLoader?q=!0:L.add(H.route.id))}),L.size===0)return[];let Z=oy(i,b,"data");return q&&L.size>0&&Z.searchParams.set("_routes",u.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[Z.pathname+Z.search]},[b,z,c,d,g,u,i,m]),U=R.useMemo(()=>my(_,d),[_,d]),k=Sy(_);return R.createElement(R.Fragment,null,C.map(L=>R.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...s})),U.map(L=>R.createElement("link",{key:L,rel:"modulepreload",href:L,...s})),k.map(({key:L,link:q})=>R.createElement("link",{key:L,...q})))}function zy(...i){return u=>{i.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Mg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mg&&(window.__reactRouterVersion="7.7.1")}catch{}function Ey({basename:i,children:u,window:s}){let c=R.useRef();c.current==null&&(c.current=fb({window:s,v5Compat:!0}));let d=c.current,[m,b]=R.useState({action:d.action,location:d.location}),z=R.useCallback(v=>{R.startTransition(()=>b(v))},[b]);return R.useLayoutEffect(()=>d.listen(z),[d,z]),R.createElement(ey,{basename:i,children:u,location:m.location,navigationType:m.action,navigator:d})}var Dg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,To=R.forwardRef(function({onClick:u,discover:s="render",prefetch:c="none",relative:d,reloadDocument:m,replace:b,state:z,target:v,to:g,preventScrollReset:_,viewTransition:C,...U},k){let{basename:L}=R.useContext(Zt),q=typeof g=="string"&&Dg.test(g),Z,H=!1;if(typeof g=="string"&&q&&(Z=g,Mg))try{let ze=new URL(window.location.href),nt=g.startsWith("//")?new URL(ze.protocol+g):new URL(g),lt=dn(nt.pathname,L);nt.origin===ze.origin&&lt!=null?g=lt+nt.search+nt.hash:H=!0}catch{Vt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=kb(g,{relative:d}),[X,ae,Q]=vy(c,U),le=wy(g,{replace:b,state:z,target:v,preventScrollReset:_,relative:d,viewTransition:C});function W(ze){u&&u(ze),ze.defaultPrevented||le(ze)}let Te=R.createElement("a",{...U,...Q,href:Z||$,onClick:H||m?u:W,ref:zy(k,ae),target:v,"data-discover":!q&&s==="render"?"true":void 0});return X&&!q?R.createElement(R.Fragment,null,Te,R.createElement(xy,{page:$})):Te});To.displayName="Link";var _y=R.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:c="",end:d=!1,style:m,to:b,viewTransition:z,children:v,...g},_){let C=_i(b,{relative:g.relative}),U=Ln(),k=R.useContext(su),{navigator:L,basename:q}=R.useContext(Zt),Z=k!=null&&Cy(C)&&z===!0,H=L.encodeLocation?L.encodeLocation(C).pathname:C.pathname,$=U.pathname,X=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;s||($=$.toLowerCase(),X=X?X.toLowerCase():null,H=H.toLowerCase()),X&&q&&(X=dn(X,q)||X);const ae=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Q=$===H||!d&&$.startsWith(H)&&$.charAt(ae)==="/",le=X!=null&&(X===H||!d&&X.startsWith(H)&&X.charAt(H.length)==="/"),W={isActive:Q,isPending:le,isTransitioning:Z},Te=Q?u:void 0,ze;typeof c=="function"?ze=c(W):ze=[c,Q?"active":null,le?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let nt=typeof m=="function"?m(W):m;return R.createElement(To,{...g,"aria-current":Te,className:ze,ref:_,style:nt,to:b,viewTransition:z},typeof v=="function"?v(W):v)});_y.displayName="NavLink";var Ty=R.forwardRef(({discover:i="render",fetcherKey:u,navigate:s,reloadDocument:c,replace:d,state:m,method:b=Fr,action:z,onSubmit:v,relative:g,preventScrollReset:_,viewTransition:C,...U},k)=>{let L=Dy(),q=Oy(z,{relative:g}),Z=b.toLowerCase()==="get"?"get":"post",H=typeof z=="string"&&Dg.test(z),$=X=>{if(v&&v(X),X.defaultPrevented)return;X.preventDefault();let ae=X.nativeEvent.submitter,Q=ae?.getAttribute("formmethod")||b;L(ae||X.currentTarget,{fetcherKey:u,method:Q,navigate:s,replace:d,state:m,relative:g,preventScrollReset:_,viewTransition:C})};return R.createElement("form",{ref:k,method:Z,action:q,onSubmit:c?v:$,...U,"data-discover":!H&&i==="render"?"true":void 0})});Ty.displayName="Form";function Ay(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Og(i){let u=R.useContext(ml);return De(u,Ay(i)),u}function wy(i,{target:u,replace:s,state:c,preventScrollReset:d,relative:m,viewTransition:b}={}){let z=Lb(),v=Ln(),g=_i(i,{relative:m});return R.useCallback(_=>{if(ry(_,u)){_.preventDefault();let C=s!==void 0?s:Si(v)===Si(g);z(i,{replace:C,state:c,preventScrollReset:d,relative:m,viewTransition:b})}},[v,z,g,s,c,u,i,d,m,b])}var Ry=0,My=()=>`__${String(++Ry)}__`;function Dy(){let{router:i}=Og("useSubmit"),{basename:u}=R.useContext(Zt),s=Wb();return R.useCallback(async(c,d={})=>{let{action:m,method:b,encType:z,formData:v,body:g}=sy(c,u);if(d.navigate===!1){let _=d.fetcherKey||My();await i.fetch(_,s,d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||b,formEncType:d.encType||z,flushSync:d.flushSync})}else await i.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||b,formEncType:d.encType||z,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,u,s])}function Oy(i,{relative:u}={}){let{basename:s}=R.useContext(Zt),c=R.useContext(hn);De(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={..._i(i||".",{relative:u})},b=Ln();if(i==null){m.search=b.search;let z=new URLSearchParams(m.search),v=z.getAll("index");if(v.some(_=>_==="")){z.delete("index"),v.filter(C=>C).forEach(C=>z.append("index",C));let _=z.toString();m.search=_?`?${_}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:fn([s,m.pathname])),Si(m)}function Cy(i,{relative:u}={}){let s=R.useContext(zg);De(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Og("useViewTransitionState"),d=_i(i,{relative:u});if(!s.isTransitioning)return!1;let m=dn(s.currentLocation.pathname,c)||s.currentLocation.pathname,b=dn(s.nextLocation.pathname,c)||s.nextLocation.pathname;return lu(d.pathname,b)!=null||lu(d.pathname,m)!=null}var ot=function(){return ot=Object.assign||function(u){for(var s,c=1,d=arguments.length;c<d;c++){s=arguments[c];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(u[m]=s[m])}return u},ot.apply(this,arguments)};function iu(i,u,s){if(s||arguments.length===2)for(var c=0,d=u.length,m;c<d;c++)(m||!(c in u))&&(m||(m=Array.prototype.slice.call(u,0,c)),m[c]=u[c]);return i.concat(m||Array.prototype.slice.call(u))}var Ae="-ms-",vi="-moz-",be="-webkit-",Cg="comm",fu="rule",Ao="decl",By="@import",Bg="@keyframes",Ny="@layer",Ng=Math.abs,wo=String.fromCharCode,ho=Object.assign;function Uy(i,u){return Je(i,0)^45?(((u<<2^Je(i,0))<<2^Je(i,1))<<2^Je(i,2))<<2^Je(i,3):0}function Ug(i){return i.trim()}function on(i,u){return(i=u.exec(i))?i[0]:i}function re(i,u,s){return i.replace(u,s)}function Ir(i,u,s){return i.indexOf(u,s)}function Je(i,u){return i.charCodeAt(u)|0}function cl(i,u,s){return i.slice(u,s)}function Yt(i){return i.length}function Hg(i){return i.length}function yi(i,u){return u.push(i),i}function Hy(i,u){return i.map(u).join("")}function Vm(i,u){return i.filter(function(s){return!on(s,u)})}var du=1,sl=1,kg=0,Dt=0,ke=0,gl="";function hu(i,u,s,c,d,m,b,z){return{value:i,root:u,parent:s,type:c,props:d,children:m,line:du,column:sl,length:b,return:"",siblings:z}}function kn(i,u){return ho(hu("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},u)}function Ka(i){for(;i.root;)i=kn(i.root,{children:[i]});yi(i,i.siblings)}function ky(){return ke}function Ly(){return ke=Dt>0?Je(gl,--Dt):0,sl--,ke===10&&(sl=1,du--),ke}function Nt(){return ke=Dt<kg?Je(gl,Dt++):0,sl++,ke===10&&(sl=1,du++),ke}function ra(){return Je(gl,Dt)}function eu(){return Dt}function mu(i,u){return cl(gl,i,u)}function mo(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gy(i){return du=sl=1,kg=Yt(gl=i),Dt=0,[]}function qy(i){return gl="",i}function ks(i){return Ug(mu(Dt-1,go(i===91?i+2:i===40?i+1:i)))}function Yy(i){for(;(ke=ra())&&ke<33;)Nt();return mo(i)>2||mo(ke)>3?"":" "}function Vy(i,u){for(;--u&&Nt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return mu(i,eu()+(u<6&&ra()==32&&Nt()==32))}function go(i){for(;Nt();)switch(ke){case i:return Dt;case 34:case 39:i!==34&&i!==39&&go(ke);break;case 40:i===41&&go(i);break;case 92:Nt();break}return Dt}function Zy(i,u){for(;Nt()&&i+ke!==57;)if(i+ke===84&&ra()===47)break;return"/*"+mu(u,Dt-1)+"*"+wo(i===47?i:Nt())}function Xy(i){for(;!mo(ra());)Nt();return mu(i,Dt)}function Qy(i){return qy(tu("",null,null,null,[""],i=Gy(i),0,[0],i))}function tu(i,u,s,c,d,m,b,z,v){for(var g=0,_=0,C=b,U=0,k=0,L=0,q=1,Z=1,H=1,$=0,X="",ae=d,Q=m,le=c,W=X;Z;)switch(L=$,$=Nt()){case 40:if(L!=108&&Je(W,C-1)==58){Ir(W+=re(ks($),"&","&\f"),"&\f",Ng(g?z[g-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:W+=ks($);break;case 9:case 10:case 13:case 32:W+=Yy(L);break;case 92:W+=Vy(eu()-1,7);continue;case 47:switch(ra()){case 42:case 47:yi(Ky(Zy(Nt(),eu()),u,s,v),v);break;default:W+="/"}break;case 123*q:z[g++]=Yt(W)*H;case 125*q:case 59:case 0:switch($){case 0:case 125:Z=0;case 59+_:H==-1&&(W=re(W,/\f/g,"")),k>0&&Yt(W)-C&&yi(k>32?Xm(W+";",c,s,C-1,v):Xm(re(W," ","")+";",c,s,C-2,v),v);break;case 59:W+=";";default:if(yi(le=Zm(W,u,s,g,_,d,z,X,ae=[],Q=[],C,m),m),$===123)if(_===0)tu(W,u,le,le,ae,m,C,z,Q);else switch(U===99&&Je(W,3)===110?100:U){case 100:case 108:case 109:case 115:tu(i,le,le,c&&yi(Zm(i,le,le,0,0,d,z,X,d,ae=[],C,Q),Q),d,Q,C,z,c?ae:Q);break;default:tu(W,le,le,le,[""],Q,0,z,Q)}}g=_=k=0,q=H=1,X=W="",C=b;break;case 58:C=1+Yt(W),k=L;default:if(q<1){if($==123)--q;else if($==125&&q++==0&&Ly()==125)continue}switch(W+=wo($),$*q){case 38:H=_>0?1:(W+="\f",-1);break;case 44:z[g++]=(Yt(W)-1)*H,H=1;break;case 64:ra()===45&&(W+=ks(Nt())),U=ra(),_=C=Yt(X=W+=Xy(eu())),$++;break;case 45:L===45&&Yt(W)==2&&(q=0)}}return m}function Zm(i,u,s,c,d,m,b,z,v,g,_,C){for(var U=d-1,k=d===0?m:[""],L=Hg(k),q=0,Z=0,H=0;q<c;++q)for(var $=0,X=cl(i,U+1,U=Ng(Z=b[q])),ae=i;$<L;++$)(ae=Ug(Z>0?k[$]+" "+X:re(X,/&\f/g,k[$])))&&(v[H++]=ae);return hu(i,u,s,d===0?fu:z,v,g,_,C)}function Ky(i,u,s,c){return hu(i,u,s,Cg,wo(ky()),cl(i,2,-2),0,c)}function Xm(i,u,s,c,d){return hu(i,u,s,Ao,cl(i,0,c),cl(i,c+1,-1),c,d)}function Lg(i,u,s){switch(Uy(i,u)){case 5103:return be+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+i+i;case 4789:return vi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return be+i+vi+i+Ae+i+i;case 5936:switch(Je(i,u+11)){case 114:return be+i+Ae+re(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return be+i+Ae+re(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return be+i+Ae+re(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return be+i+Ae+i+i;case 6165:return be+i+Ae+"flex-"+i+i;case 5187:return be+i+re(i,/(\w+).+(:[^]+)/,be+"box-$1$2"+Ae+"flex-$1$2")+i;case 5443:return be+i+Ae+"flex-item-"+re(i,/flex-|-self/g,"")+(on(i,/flex-|baseline/)?"":Ae+"grid-row-"+re(i,/flex-|-self/g,""))+i;case 4675:return be+i+Ae+"flex-line-pack"+re(i,/align-content|flex-|-self/g,"")+i;case 5548:return be+i+Ae+re(i,"shrink","negative")+i;case 5292:return be+i+Ae+re(i,"basis","preferred-size")+i;case 6060:return be+"box-"+re(i,"-grow","")+be+i+Ae+re(i,"grow","positive")+i;case 4554:return be+re(i,/([^-])(transform)/g,"$1"+be+"$2")+i;case 6187:return re(re(re(i,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),i,"")+i;case 5495:case 3959:return re(i,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(i,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+i+i;case 4200:if(!on(i,/flex-|baseline/))return Ae+"grid-column-align"+cl(i,u)+i;break;case 2592:case 3360:return Ae+re(i,"template-","")+i;case 4384:case 3616:return s&&s.some(function(c,d){return u=d,on(c.props,/grid-\w+-end/)})?~Ir(i+(s=s[u].value),"span",0)?i:Ae+re(i,"-start","")+i+Ae+"grid-row-span:"+(~Ir(s,"span",0)?on(s,/\d+/):+on(s,/\d+/)-+on(i,/\d+/))+";":Ae+re(i,"-start","")+i;case 4896:case 4128:return s&&s.some(function(c){return on(c.props,/grid-\w+-start/)})?i:Ae+re(re(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return re(i,/(.+)-inline(.+)/,be+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(i)-1-u>6)switch(Je(i,u+1)){case 109:if(Je(i,u+4)!==45)break;case 102:return re(i,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+vi+(Je(i,u+3)==108?"$3":"$2-$3"))+i;case 115:return~Ir(i,"stretch",0)?Lg(re(i,"stretch","fill-available"),u,s)+i:i}break;case 5152:case 5920:return re(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,m,b,z,v,g){return Ae+d+":"+m+g+(b?Ae+d+"-span:"+(z?v:+v-+m)+g:"")+i});case 4949:if(Je(i,u+6)===121)return re(i,":",":"+be)+i;break;case 6444:switch(Je(i,Je(i,14)===45?18:11)){case 120:return re(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(i,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Ae+"$2box$3")+i;case 100:return re(i,":",":"+Ae)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(i,"scroll-","scroll-snap-")+i}return i}function ru(i,u){for(var s="",c=0;c<i.length;c++)s+=u(i[c],c,i,u)||"";return s}function Jy(i,u,s,c){switch(i.type){case Ny:if(i.children.length)break;case By:case Ao:return i.return=i.return||i.value;case Cg:return"";case Bg:return i.return=i.value+"{"+ru(i.children,c)+"}";case fu:if(!Yt(i.value=i.props.join(",")))return""}return Yt(s=ru(i.children,c))?i.return=i.value+"{"+s+"}":""}function $y(i){var u=Hg(i);return function(s,c,d,m){for(var b="",z=0;z<u;z++)b+=i[z](s,c,d,m)||"";return b}}function Wy(i){return function(u){u.root||(u=u.return)&&i(u)}}function Fy(i,u,s,c){if(i.length>-1&&!i.return)switch(i.type){case Ao:i.return=Lg(i.value,i.length,s);return;case Bg:return ru([kn(i,{value:re(i.value,"@","@"+be)})],c);case fu:if(i.length)return Hy(s=i.props,function(d){switch(on(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ka(kn(i,{props:[re(d,/:(read-\w+)/,":"+vi+"$1")]})),Ka(kn(i,{props:[d]})),ho(i,{props:Vm(s,c)});break;case"::placeholder":Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+vi+"$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,Ae+"input-$1")]})),Ka(kn(i,{props:[d]})),ho(i,{props:Vm(s,c)});break}return""})}}var Py={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},ol=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Gg="active",qg="data-styled-version",gu="6.1.19",Ro=`/*!sc*/
`,uu=typeof window<"u"&&typeof document<"u",Iy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),pu=Object.freeze([]),fl=Object.freeze({});function ev(i,u,s){return s===void 0&&(s=fl),i.theme!==s.theme&&i.theme||u||s.theme}var Yg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nv=/(^-|-$)/g;function Qm(i){return i.replace(tv,"-").replace(nv,"")}var av=/(a)(d)/gi,Yr=52,Km=function(i){return String.fromCharCode(i+(i>25?39:97))};function po(i){var u,s="";for(u=Math.abs(i);u>Yr;u=u/Yr|0)s=Km(u%Yr)+s;return(Km(u%Yr)+s).replace(av,"$1-$2")}var Ls,Vg=5381,ul=function(i,u){for(var s=u.length;s;)i=33*i^u.charCodeAt(--s);return i},Zg=function(i){return ul(Vg,i)};function lv(i){return po(Zg(i)>>>0)}function iv(i){return i.displayName||i.name||"Component"}function Gs(i){return typeof i=="string"&&!0}var Xg=typeof Symbol=="function"&&Symbol.for,Qg=Xg?Symbol.for("react.memo"):60115,rv=Xg?Symbol.for("react.forward_ref"):60112,uv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sv=((Ls={})[rv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ls[Qg]=Kg,Ls);function Jm(i){return("type"in(u=i)&&u.type.$$typeof)===Qg?Kg:"$$typeof"in i?sv[i.$$typeof]:uv;var u}var ov=Object.defineProperty,fv=Object.getOwnPropertyNames,$m=Object.getOwnPropertySymbols,dv=Object.getOwnPropertyDescriptor,hv=Object.getPrototypeOf,Wm=Object.prototype;function Jg(i,u,s){if(typeof u!="string"){if(Wm){var c=hv(u);c&&c!==Wm&&Jg(i,c,s)}var d=fv(u);$m&&(d=d.concat($m(u)));for(var m=Jm(i),b=Jm(u),z=0;z<d.length;++z){var v=d[z];if(!(v in cv||s&&s[v]||b&&v in b||m&&v in m)){var g=dv(u,v);try{ov(i,v,g)}catch{}}}}return i}function dl(i){return typeof i=="function"}function Mo(i){return typeof i=="object"&&"styledComponentId"in i}function ia(i,u){return i&&u?"".concat(i," ").concat(u):i||u||""}function Fm(i,u){if(i.length===0)return"";for(var s=i[0],c=1;c<i.length;c++)s+=i[c];return s}function ji(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function bo(i,u,s){if(s===void 0&&(s=!1),!s&&!ji(i)&&!Array.isArray(i))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)i[c]=bo(i[c],u[c]);else if(ji(u))for(var c in u)i[c]=bo(i[c],u[c]);return i}function Do(i,u){Object.defineProperty(i,"toString",{value:u})}function Ti(i){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var mv=function(){function i(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return i.prototype.indexOfGroup=function(u){for(var s=0,c=0;c<u;c++)s+=this.groupSizes[c];return s},i.prototype.insertRules=function(u,s){if(u>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,m=d;u>=m;)if((m<<=1)<0)throw Ti(16,"".concat(u));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var b=d;b<m;b++)this.groupSizes[b]=0}for(var z=this.indexOfGroup(u+1),v=(b=0,s.length);b<v;b++)this.tag.insertRule(z,s[b])&&(this.groupSizes[u]++,z++)},i.prototype.clearGroup=function(u){if(u<this.length){var s=this.groupSizes[u],c=this.indexOfGroup(u),d=c+s;this.groupSizes[u]=0;for(var m=c;m<d;m++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(u){var s="";if(u>=this.length||this.groupSizes[u]===0)return s;for(var c=this.groupSizes[u],d=this.indexOfGroup(u),m=d+c,b=d;b<m;b++)s+="".concat(this.tag.getRule(b)).concat(Ro);return s},i}(),nu=new Map,cu=new Map,au=1,Vr=function(i){if(nu.has(i))return nu.get(i);for(;cu.has(au);)au++;var u=au++;return nu.set(i,u),cu.set(u,i),u},gv=function(i,u){au=u+1,nu.set(i,u),cu.set(u,i)},pv="style[".concat(ol,"][").concat(qg,'="').concat(gu,'"]'),bv=new RegExp("^".concat(ol,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yv=function(i,u,s){for(var c,d=s.split(","),m=0,b=d.length;m<b;m++)(c=d[m])&&i.registerName(u,c)},vv=function(i,u){for(var s,c=((s=u.textContent)!==null&&s!==void 0?s:"").split(Ro),d=[],m=0,b=c.length;m<b;m++){var z=c[m].trim();if(z){var v=z.match(bv);if(v){var g=0|parseInt(v[1],10),_=v[2];g!==0&&(gv(_,g),yv(i,_,v[3]),i.getTag().insertRules(g,d)),d.length=0}else d.push(z)}}},Pm=function(i){for(var u=document.querySelectorAll(pv),s=0,c=u.length;s<c;s++){var d=u[s];d&&d.getAttribute(ol)!==Gg&&(vv(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function xv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $g=function(i){var u=document.head,s=i||u,c=document.createElement("style"),d=function(z){var v=Array.from(z.querySelectorAll("style[".concat(ol,"]")));return v[v.length-1]}(s),m=d!==void 0?d.nextSibling:null;c.setAttribute(ol,Gg),c.setAttribute(qg,gu);var b=xv();return b&&c.setAttribute("nonce",b),s.insertBefore(c,m),c},Sv=function(){function i(u){this.element=$g(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,d=0,m=c.length;d<m;d++){var b=c[d];if(b.ownerNode===s)return b}throw Ti(17)}(this.element),this.length=0}return i.prototype.insertRule=function(u,s){try{return this.sheet.insertRule(s,u),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},i.prototype.getRule=function(u){var s=this.sheet.cssRules[u];return s&&s.cssText?s.cssText:""},i}(),jv=function(){function i(u){this.element=$g(u),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(u,s){if(u<=this.length&&u>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},i.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},i}(),zv=function(){function i(u){this.rules=[],this.length=0}return i.prototype.insertRule=function(u,s){return u<=this.length&&(this.rules.splice(u,0,s),this.length++,!0)},i.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},i.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},i}(),Im=uu,Ev={isServer:!uu,useCSSOMInjection:!Iy},Wg=function(){function i(u,s,c){u===void 0&&(u=fl),s===void 0&&(s={});var d=this;this.options=ot(ot({},Ev),u),this.gs=s,this.names=new Map(c),this.server=!!u.isServer,!this.server&&uu&&Im&&(Im=!1,Pm(this)),Do(this,function(){return function(m){for(var b=m.getTag(),z=b.length,v="",g=function(C){var U=function(H){return cu.get(H)}(C);if(U===void 0)return"continue";var k=m.names.get(U),L=b.getGroup(C);if(k===void 0||!k.size||L.length===0)return"continue";var q="".concat(ol,".g").concat(C,'[id="').concat(U,'"]'),Z="";k!==void 0&&k.forEach(function(H){H.length>0&&(Z+="".concat(H,","))}),v+="".concat(L).concat(q,'{content:"').concat(Z,'"}').concat(Ro)},_=0;_<z;_++)g(_);return v}(d)})}return i.registerId=function(u){return Vr(u)},i.prototype.rehydrate=function(){!this.server&&uu&&Pm(this)},i.prototype.reconstructWithOptions=function(u,s){return s===void 0&&(s=!0),new i(ot(ot({},this.options),u),this.gs,s&&this.names||void 0)},i.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(u=function(s){var c=s.useCSSOMInjection,d=s.target;return s.isServer?new zv(d):c?new Sv(d):new jv(d)}(this.options),new mv(u)));var u},i.prototype.hasNameForId=function(u,s){return this.names.has(u)&&this.names.get(u).has(s)},i.prototype.registerName=function(u,s){if(Vr(u),this.names.has(u))this.names.get(u).add(s);else{var c=new Set;c.add(s),this.names.set(u,c)}},i.prototype.insertRules=function(u,s,c){this.registerName(u,s),this.getTag().insertRules(Vr(u),c)},i.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},i.prototype.clearRules=function(u){this.getTag().clearGroup(Vr(u)),this.clearNames(u)},i.prototype.clearTag=function(){this.tag=void 0},i}(),_v=/&/g,Tv=/^\s*\/\/.*$/gm;function Fg(i,u){return i.map(function(s){return s.type==="rule"&&(s.value="".concat(u," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(u," ")),s.props=s.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Fg(s.children,u)),s})}function Av(i){var u,s,c,d=fl,m=d.options,b=m===void 0?fl:m,z=d.plugins,v=z===void 0?pu:z,g=function(U,k,L){return L.startsWith(s)&&L.endsWith(s)&&L.replaceAll(s,"").length>0?".".concat(u):U},_=v.slice();_.push(function(U){U.type===fu&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(_v,s).replace(c,g))}),b.prefix&&_.push(Fy),_.push(Jy);var C=function(U,k,L,q){k===void 0&&(k=""),L===void 0&&(L=""),q===void 0&&(q="&"),u=q,s=k,c=new RegExp("\\".concat(s,"\\b"),"g");var Z=U.replace(Tv,""),H=Qy(L||k?"".concat(L," ").concat(k," { ").concat(Z," }"):Z);b.namespace&&(H=Fg(H,b.namespace));var $=[];return ru(H,$y(_.concat(Wy(function(X){return $.push(X)})))),$};return C.hash=v.length?v.reduce(function(U,k){return k.name||Ti(15),ul(U,k.name)},Vg).toString():"",C}var wv=new Wg,yo=Av(),Pg=xi.createContext({shouldForwardProp:void 0,styleSheet:wv,stylis:yo});Pg.Consumer;xi.createContext(void 0);function eg(){return R.useContext(Pg)}var Rv=function(){function i(u,s){var c=this;this.inject=function(d,m){m===void 0&&(m=yo);var b=c.name+m.hash;d.hasNameForId(c.id,b)||d.insertRules(c.id,b,m(c.rules,b,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=s,Do(this,function(){throw Ti(12,String(c.name))})}return i.prototype.getName=function(u){return u===void 0&&(u=yo),this.name+u.hash},i}(),Mv=function(i){return i>="A"&&i<="Z"};function tg(i){for(var u="",s=0;s<i.length;s++){var c=i[s];if(s===1&&c==="-"&&i[0]==="-")return i;Mv(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var Ig=function(i){return i==null||i===!1||i===""},e0=function(i){var u,s,c=[];for(var d in i){var m=i[d];i.hasOwnProperty(d)&&!Ig(m)&&(Array.isArray(m)&&m.isCss||dl(m)?c.push("".concat(tg(d),":"),m,";"):ji(m)?c.push.apply(c,iu(iu(["".concat(d," {")],e0(m),!1),["}"],!1)):c.push("".concat(tg(d),": ").concat((u=d,(s=m)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||u in Py||u.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function ua(i,u,s,c){if(Ig(i))return[];if(Mo(i))return[".".concat(i.styledComponentId)];if(dl(i)){if(!dl(m=i)||m.prototype&&m.prototype.isReactComponent||!u)return[i];var d=i(u);return ua(d,u,s,c)}var m;return i instanceof Rv?s?(i.inject(s,c),[i.getName(c)]):[i]:ji(i)?e0(i):Array.isArray(i)?Array.prototype.concat.apply(pu,i.map(function(b){return ua(b,u,s,c)})):[i.toString()]}function Dv(i){for(var u=0;u<i.length;u+=1){var s=i[u];if(dl(s)&&!Mo(s))return!1}return!0}var Ov=Zg(gu),Cv=function(){function i(u,s,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Dv(u),this.componentId=s,this.baseHash=ul(Ov,s),this.baseStyle=c,Wg.registerId(s)}return i.prototype.generateAndInjectStyles=function(u,s,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var m=Fm(ua(this.rules,u,s,c)),b=po(ul(this.baseHash,m)>>>0);if(!s.hasNameForId(this.componentId,b)){var z=c(m,".".concat(b),void 0,this.componentId);s.insertRules(this.componentId,b,z)}d=ia(d,b),this.staticRulesId=b}else{for(var v=ul(this.baseHash,c.hash),g="",_=0;_<this.rules.length;_++){var C=this.rules[_];if(typeof C=="string")g+=C;else if(C){var U=Fm(ua(C,u,s,c));v=ul(v,U+_),g+=U}}if(g){var k=po(v>>>0);s.hasNameForId(this.componentId,k)||s.insertRules(this.componentId,k,c(g,".".concat(k),void 0,this.componentId)),d=ia(d,k)}}return d},i}(),t0=xi.createContext(void 0);t0.Consumer;var qs={};function Bv(i,u,s){var c=Mo(i),d=i,m=!Gs(i),b=u.attrs,z=b===void 0?pu:b,v=u.componentId,g=v===void 0?function(ae,Q){var le=typeof ae!="string"?"sc":Qm(ae);qs[le]=(qs[le]||0)+1;var W="".concat(le,"-").concat(lv(gu+le+qs[le]));return Q?"".concat(Q,"-").concat(W):W}(u.displayName,u.parentComponentId):v,_=u.displayName,C=_===void 0?function(ae){return Gs(ae)?"styled.".concat(ae):"Styled(".concat(iv(ae),")")}(i):_,U=u.displayName&&u.componentId?"".concat(Qm(u.displayName),"-").concat(u.componentId):u.componentId||g,k=c&&d.attrs?d.attrs.concat(z).filter(Boolean):z,L=u.shouldForwardProp;if(c&&d.shouldForwardProp){var q=d.shouldForwardProp;if(u.shouldForwardProp){var Z=u.shouldForwardProp;L=function(ae,Q){return q(ae,Q)&&Z(ae,Q)}}else L=q}var H=new Cv(s,U,c?d.componentStyle:void 0);function $(ae,Q){return function(le,W,Te){var ze=le.attrs,nt=le.componentStyle,lt=le.defaultProps,qe=le.foldedComponentIds,Xt=le.styledComponentId,Qt=le.target,Ye=xi.useContext(t0),M=eg(),Y=le.shouldForwardProp||M.shouldForwardProp,P=ev(W,Ye,lt)||fl,se=function(oe,ee,Ve){for(var pe,Pe=ot(ot({},ee),{className:void 0,theme:Ve}),Gn=0;Gn<oe.length;Gn+=1){var Kt=dl(pe=oe[Gn])?pe(Pe):pe;for(var St in Kt)Pe[St]=St==="className"?ia(Pe[St],Kt[St]):St==="style"?ot(ot({},Pe[St]),Kt[St]):Kt[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(ze,W,P),x=se.as||Qt,N={};for(var G in se)se[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&se.theme===P||(G==="forwardedAs"?N.as=se.forwardedAs:Y&&!Y(G,x)||(N[G]=se[G]));var V=function(oe,ee){var Ve=eg(),pe=oe.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(nt,se),F=ia(qe,Xt);return V&&(F+=" "+V),se.className&&(F+=" "+se.className),N[Gs(x)&&!Yg.has(x)?"class":"className"]=F,Te&&(N.ref=Te),R.createElement(x,N)}(X,ae,Q)}$.displayName=C;var X=xi.forwardRef($);return X.attrs=k,X.componentStyle=H,X.displayName=C,X.shouldForwardProp=L,X.foldedComponentIds=c?ia(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=U,X.target=c?d.target:i,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=c?function(Q){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Te=0,ze=le;Te<ze.length;Te++)bo(Q,ze[Te],!0);return Q}({},d.defaultProps,ae):ae}}),Do(X,function(){return".".concat(X.styledComponentId)}),m&&Jg(X,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function ng(i,u){for(var s=[i[0]],c=0,d=u.length;c<d;c+=1)s.push(u[c],i[c+1]);return s}var ag=function(i){return Object.assign(i,{isCss:!0})};function Nv(i){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];if(dl(i)||ji(i))return ag(ua(ng(pu,iu([i],u,!0))));var c=i;return u.length===0&&c.length===1&&typeof c[0]=="string"?ua(c):ag(ua(ng(c,u)))}function vo(i,u,s){if(s===void 0&&(s=fl),!u)throw Ti(1,u);var c=function(d){for(var m=[],b=1;b<arguments.length;b++)m[b-1]=arguments[b];return i(u,s,Nv.apply(void 0,iu([d],m,!1)))};return c.attrs=function(d){return vo(i,u,ot(ot({},s),{attrs:Array.prototype.concat(s.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return vo(i,u,ot(ot({},s),d))},c}var n0=function(i){return vo(Bv,i)},y=n0;Yg.forEach(function(i){y[i]=n0(i)});const Uv=y.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,Hv=y.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,kv=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Lv=y.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #e10073;
  margin: 0;
`,Gv=y.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Ys=y(To)`
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
`;function qv(){const i=Ln();return o.jsx(Uv,{children:o.jsxs(Hv,{children:[o.jsx(kv,{children:o.jsx(Lv,{children:"SCKW"})}),o.jsxs(Gv,{children:[o.jsx(Ys,{to:"/",$active:i.pathname==="/",children:"🤝 Sponsoring"}),o.jsx(Ys,{to:"/jobs",$active:i.pathname==="/jobs",children:"💼 Jobbörse"}),o.jsx(Ys,{to:"/renovierung",$active:i.pathname==="/renovierung",children:"🏗️ Renovierung"})]})]})})}const Yv=y.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Vv=y.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function Oo(){return o.jsxs(Yv,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",o.jsx(Vv,{href:"mailto:grimm@sckw.de",children:"grimm@sckw.de"})]})}const a0=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"✅ Vergeben",maxSponsors:1,sponsors:[{name:"RicoBet",image:"ricobet.png",website:null,since:"2023",until:"2025"}],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","1/1 Seite im Stadionmagazin","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Stadionansage bei jedem Heimspiel","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🥈 Co-Sponsor",price:"10.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotärmel 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1/2 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/2 Seite im Stadionmagazin","2 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"⭐️ Premium-Partner",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Banner (5x2 m) am Gelände",highlight:!0,icon:"🖼️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Erweitert*",highlight:!0,icon:"📱"},{text:"Website: Startseite Erweitert*",highlight:!1,icon:"🌐"}],benefits:["1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin","Social Media ERWEITERT: Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche","Website STARTSEITE ERWEITERT: Logo auf der Startseite mit kleinerer Fläche"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟧 11 vergeben · ~19 verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"1 Bande (3x1 m)",highlight:!1,icon:"🏟️"},{text:"Alle Heimspiele",highlight:!0,icon:"⚽"},{text:"Website: Sponsoren-Seite*",highlight:!1,icon:"🌐"}],benefits:["1 Bande (3x1 m) am Spielfeldrand","Sichtbarkeit bei allen Heimspielen","Website SPONSOREN-SEITE: Auflistung auf separater Sponsoren-Seite","Einmalkosten: 70 €/lfd. Meter für Herstellung"]}],Zv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Xv=y.div`
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
`,Qv=y.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,Kv=y.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,Jv=y.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,$v=y.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,Wv=y.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,Fv=y.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,Pv=y.li`
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
`,Iv=y.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,ex=y.span`
  flex: 1;
`,tx=y.a`
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
`,nx=y.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,ax="grimm@sckw.de";function lx({packages:i}){const u=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",s=b=>{const z=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return z?z[0]:""},c=b=>{const z=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${z}"`),g=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${z}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${ax}?subject=${v}&body=${g}`},d=b=>{const z=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:z,isFullyBooked:z===0}},m=i.filter(b=>!b.title.includes("Platz-Renovierung"));return o.jsx(Zv,{children:m.map((b,z)=>{const{isFullyBooked:v}=d(b),g=u(b.status),_=g==="vergeben"||v,C=v?"vergeben":g,U=b.keyBenefits||[];return o.jsxs(Xv,{isVergeben:_,children:[o.jsxs(Qv,{children:[o.jsx(Kv,{children:s(b.title)}),o.jsx(Jv,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!_&&o.jsx($v,{children:b.price}),o.jsx(Wv,{status:C,children:C==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),_?o.jsx(nx,{children:"✅ Alle Plätze vergeben"}):o.jsx(Fv,{children:U.map((k,L)=>o.jsxs(Pv,{isHighlight:k.highlight,children:[o.jsx(Iv,{children:k.icon}),o.jsx(ex,{children:k.text})]},L))}),o.jsx(tx,{href:_?void 0:c(b.title),isVergeben:_,children:_?"Vergeben":"Jetzt anfragen"})]},z)})})}const ix=y.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  overflow: hidden;
`,rx=y.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,ux=y.button`
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
`,cx=y.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: #e10073;
`,sx=y.div`
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,ox=y.div`
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
`,fx=y.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,dx=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:o.jsx(o.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function hx(){const[i,u]=R.useState([]),s=d=>{u(m=>m.includes(d)?m.filter(b=>b!==d):[...m,d])},c=(d,m)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),s(m))};return o.jsx(ix,{children:dx.map(d=>{const m=i.includes(d.id);return o.jsxs(rx,{children:[o.jsxs(ux,{isOpen:m,onClick:()=>s(d.id),onKeyDown:b=>c(b,d.id),"aria-expanded":m,"aria-controls":`accordion-content-${d.id}`,children:[o.jsxs("span",{children:[o.jsx(fx,{children:d.icon}),d.title]}),o.jsx(cx,{isOpen:m,children:"▼"})]}),o.jsx(sx,{isOpen:m,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:o.jsx(ox,{children:d.content})})]},d.id)})})}const mx=y.section`
  background: #f8f9fb;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,gx=y.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
`,px=y.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`,lg=y.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`,bx=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ig=y.div`
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
`,yx=y.div`
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
`,rg=y.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`,vx=y.svg`
  height: 50px;
  width: auto;
`,ug=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,cg=y.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,sg=y.a`
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
`,xx=y.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`,Sx=y.h4`
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
`,og=y.p`
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`,jx=y.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,zx=y.h4`
  color: #856404;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,Ex=y.p`
  color: #856404;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`,_x=y.div`
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
`,Tx=y.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,Ax=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,wx=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,Rx=y.button`
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
`,Mx=y.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Vs=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Zs=y.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Xs=y.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,Dx=y.button`
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
`,Ox=y.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;function Cx(){const[i,u]=R.useState(!1),s=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")},c=d=>{d.preventDefault(),u(!0)};return o.jsxs(mx,{id:"spenden",children:[o.jsx(gx,{children:"💚 Spenden für den SC Konstanz-Wollmatingen"}),o.jsxs(px,{children:[o.jsx(lg,{children:"Ohne Zuwendungen von Spendern, Gönnern, Förderern und Sponsoren ist der Spiel-, Turnier- und Trainingsbetrieb der Jugendabteilung und der Aktivenbereiche unseres Vereins nicht zu finanzieren. Die Mitgliedsbeiträge reichen für die umfassenden Aufgaben, die unser Verein für die Jugend im Breiten- und im Leistungssport, die Aus- und Weiterbildung der Trainer und Betreuer und die sportlich aktiv tätigen Mitglieder, Spieler und Teams erbringt, nicht aus."}),o.jsx(lg,{children:o.jsx("strong",{children:"Wir freuen uns über jede Zuwendung und Unterstützung!"})})]}),o.jsxs(bx,{children:[o.jsxs(ig,{preferred:!0,children:[o.jsx(yx,{children:"⭐ Bevorzugt"}),o.jsx(rg,{children:o.jsxs(vx,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.33c-.498 0-.968.382-1.061.913l-.619 3.949-.013.083-.637 4.084c-.229.685-.727 1.061-1.319 1.061L7.076 21.337z",fill:"#263B80"}),o.jsx("path",{d:"M20.781 7.519c-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.95c-.498 0-.968.382-1.061.913l-.756 4.814-.035.199-.561 3.584c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c3.213 0 5.733-1.311 6.467-5.097.307-1.582.149-2.906-.697-3.732-.244-.238-.5-.44-.785-.602-.998-.011-1.998-.011-1.998-.011z",fill:"#139AD6"}),o.jsx("path",{d:"M19.175 7.129c-.166-.039-.34-.071-.519-.097a9.54 9.54 0 0 0-1.348-.082H11.77c-.498 0-.969.382-1.062.913L9.493 13.34c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c.564 0 1.096.045 1.583.135.166.039.34.087.498.143.498-3.146.166-5.286-1.508-6.849z",fill:"#232C65"})]})}),o.jsx(ug,{children:"PayPal Spende"}),o.jsx(cg,{children:"Schnell, sicher und unkompliziert - spenden Sie direkt über PayPal. Ihre Spende kommt sofort bei uns an."}),o.jsx(sg,{href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💚 Mit PayPal spenden"})]}),o.jsxs(ig,{children:[o.jsx(rg,{children:"🏦"}),o.jsx(ug,{children:"Banküberweisung"}),o.jsx(cg,{children:"Traditionelle Überweisung direkt auf unser Vereinskonto. Ideal für größere Spenden und Spendenquittungen."}),o.jsx(sg,{onClick:c,children:"🏦 Kontodaten anzeigen"})]})]}),o.jsxs(xx,{children:[o.jsx(Sx,{children:"📄 Steuerliche Absetzbarkeit"}),o.jsxs(og,{children:[o.jsx("strong",{children:"Bis 200 EUR:"})," Sie können einfach die Überweisungsquittung als Spendenbescheinigung bei der Steuererklärung angeben."]}),o.jsxs(og,{children:[o.jsx("strong",{children:"Über 200 EUR:"})," Wir stellen Ihnen gerne eine offizielle Spendenquittung aus. Überweisen Sie dafür bitte auf unser Vereinskonto."]})]}),o.jsxs(jx,{children:[o.jsx(zx,{children:"📧 Spendenquittung anfordern"}),o.jsxs(Ex,{children:["Für Spenden über 200 EUR richten Sie bitte die Anforderung einer Spendenquittung per E-Mail an ",o.jsx("strong",{children:"grimm@sckw.de"})," oder schriftlich an die Postanschrift des Vereins. Bitte geben Sie Ihre Anschrift, Telefonnummer und den Verwendungszweck an."]})]}),i&&o.jsx(_x,{onClick:()=>u(!1),children:o.jsxs(Tx,{onClick:d=>d.stopPropagation(),children:[o.jsxs(Ax,{children:[o.jsx(wx,{children:"Kontoverbindung für Spenden"}),o.jsx(Rx,{onClick:()=>u(!1),children:"×"})]}),o.jsxs(Mx,{children:[o.jsxs(Vs,{children:[o.jsx(Zs,{children:"Kontoinhaber:"}),o.jsx(Xs,{children:"SC Konstanz-Wollmatingen"})]}),o.jsxs(Vs,{children:[o.jsx(Zs,{children:"IBAN:"}),o.jsx(Xs,{children:"DE12 6905 0001 0000 0228 06"})]}),o.jsxs(Vs,{children:[o.jsx(Zs,{children:"BIC:"}),o.jsx(Xs,{children:"SOLADES1KNZ"})]})]}),o.jsx(Dx,{onClick:s,children:"📋 IBAN kopieren"}),o.jsx(Ox,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})})]})}const Bx=y.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  margin: 2rem 0;
`,Nx=y.div`
  max-width: 1200px;
  margin: 0 auto;
`,Ux=y.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
`,Hx=y.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,kx=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,Lx=y.div`
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
`,Gx=y.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e10073;
  justify-content: center;
  align-items: center;
  text-align: center;
`,qx=y.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`,Yx=y.h4`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin: 0;
`,Vx=y.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Zx=y.li`
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
`,Xx=y.span`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`,Qx=y.span`
  flex: 1;
`,Kx=y.div`
  background: linear-gradient(135deg, #e10073 0%, #c70066 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  text-align: center;
  font-weight: 500;
`,Jx=[{department:"Damen & Herren",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"⚽",text:"Equipment & Trainingsbälle"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Equipment"},{department:"Cheerleading",icon:"💃",items:[{icon:"🎽",text:"Cheerleading Uniformen"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"🏆",text:"Wettkämpfe & Turniere"},{icon:"🎵",text:"Musik & Choreografie"},{icon:"🚌",text:"Auswärtsfahrten"}],costInfo:"Fokus: Wettkämpfe & Ausrüstung"},{department:"Fördergruppe",icon:"🎯",items:[{icon:"👕",text:"Zuschuss zu Trikots (Training)"},{icon:"🥅",text:"Minitore & Equipment"},{icon:"🏟️",text:"Platzkosten"},{icon:"⚽",text:"Trainingsbälle & Zubehör"},{icon:"👨‍🏫",text:"Kosten Übungsleiter"}],costInfo:"Unterstützung für alle Abteilungen"},{department:"Allgemein",icon:"🏟️",items:[{icon:"🏟️",text:"Platzpflege & Infrastruktur"},{icon:"💡",text:"Flutlicht & Stromkosten"},{icon:"🚿",text:"Sanitäranlagen & Umkleiden"},{icon:"🛠️",text:"Wartung & Reparaturen"},{icon:"📢",text:"Kommunikation & Marketing"}],costInfo:"Grundlage für alle Abteilungen"}];function $x(){return o.jsx(Bx,{children:o.jsxs(Nx,{children:[o.jsx(Ux,{children:"Wofür wird Ihr Sponsoring verwendet?"}),o.jsx(Hx,{children:"Transparenz ist uns wichtig! Hier sehen Sie, wie Ihr Sponsoring-Geld direkt in die verschiedenen Abteilungen und deren Bedürfnisse fließt."}),o.jsx(kx,{children:Jx.map((i,u)=>o.jsxs(Lx,{children:[o.jsxs(Gx,{children:[o.jsx(qx,{children:i.icon}),o.jsx(Yx,{children:i.department})]}),o.jsx(Vx,{children:i.items.map((s,c)=>o.jsxs(Zx,{children:[o.jsx(Xx,{children:s.icon}),o.jsx(Qx,{children:s.text})]},c))}),o.jsx(Kx,{children:i.costInfo})]},u))})]})})}const l0="/sportclub/assets/cheerleading_0-BLANwEed.jpg",i0="/sportclub/assets/cheerleading_1-NkLBARmH.jpg",r0="/sportclub/assets/cheerleading_2-CrezcZYL.jpg",u0="/sportclub/assets/cheerleading_3-GN5rPHNN.jpg",c0="/sportclub/assets/herren_0-BVVgyt1l.jpg",s0="/sportclub/assets/herren_1-B8ywOnNy.jpg",o0="/sportclub/assets/herren_10-DPVQsg9B.jpg",f0="/sportclub/assets/herren_11-wfWG62H3.jpg",d0="/sportclub/assets/herren_12-DEJSN2zG.jpg",h0="/sportclub/assets/herren_13-F52vdukE.jpg",m0="/sportclub/assets/herren_14-Cq9hoKfG.jpg",g0="/sportclub/assets/herren_15-aYIFGauG.jpg",p0="/sportclub/assets/herren_16-NYI2EaEN.jpg",b0="/sportclub/assets/herren_17-B_52ysA2.jpg",y0="/sportclub/assets/herren_18-DbwjVNKJ.jpg",v0="/sportclub/assets/herren_19-BduD_J85.png",x0="/sportclub/assets/herren_2--jFuixBF.jpg",S0="/sportclub/assets/herren_3-BPz1zlkG.jpg",j0="/sportclub/assets/herren_4-BZRrQaFr.jpg",z0="/sportclub/assets/herren_5-D-QrfY2P.jpg",E0="/sportclub/assets/herren_6-DWQvi6Am.jpg",_0="/sportclub/assets/herren_7-BXO6B8Bt.jpg",T0="/sportclub/assets/herren_8-Cg4rdr7T.jpg",A0="/sportclub/assets/herren_9-DoLnTdRG.jpg",Wx="/sportclub/assets/grafhardenberg-Di5cVggE.png",Fx="/sportclub/assets/horta-DydWIGV7.png",Px="/sportclub/assets/logans-BgpKwKYA.png",Ix="/sportclub/assets/ricobet-DsVC-eZt.png",eS="/sportclub/assets/rothaus-DqkKD9yW.png",tS="/sportclub/assets/tasty-B2pSa1rE.png",nS="/sportclub/assets/cabin-window-B83r_CDB.jpg",aS="/sportclub/assets/outside-9-xz17qL.jpg",lS="/sportclub/assets/shower-B75caJ-F.jpg",iS="/sportclub/assets/sitting-area-D7khB3Gw.jpg",rS="/sportclub/assets/toilet-BpMHYbhh.jpg",uS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":l0,"../assets/gallery/cheerleading/cheerleading_1.jpg":i0,"../assets/gallery/cheerleading/cheerleading_2.jpg":r0,"../assets/gallery/cheerleading/cheerleading_3.jpg":u0,"../assets/gallery/herren/herren_0.jpg":c0,"../assets/gallery/herren/herren_1.jpg":s0,"../assets/gallery/herren/herren_10.jpg":o0,"../assets/gallery/herren/herren_11.jpg":f0,"../assets/gallery/herren/herren_12.jpg":d0,"../assets/gallery/herren/herren_13.jpg":h0,"../assets/gallery/herren/herren_14.jpg":m0,"../assets/gallery/herren/herren_15.jpg":g0,"../assets/gallery/herren/herren_16.jpg":p0,"../assets/gallery/herren/herren_17.jpg":b0,"../assets/gallery/herren/herren_18.jpg":y0,"../assets/gallery/herren/herren_19.png":v0,"../assets/gallery/herren/herren_2.jpg":x0,"../assets/gallery/herren/herren_3.jpg":S0,"../assets/gallery/herren/herren_4.jpg":j0,"../assets/gallery/herren/herren_5.jpg":z0,"../assets/gallery/herren/herren_6.jpg":E0,"../assets/gallery/herren/herren_7.jpg":_0,"../assets/gallery/herren/herren_8.jpg":T0,"../assets/gallery/herren/herren_9.jpg":A0}),cS=Object.assign({"../assets/sponsors/grafhardenberg.png":Wx,"../assets/sponsors/horta.png":Fx,"../assets/sponsors/logans.png":Px,"../assets/sponsors/ricobet.png":Ix,"../assets/sponsors/rothaus.png":eS,"../assets/sponsors/tasty.png":tS}),sS=Object.assign({"../assets/renovation/cabin-window.jpg":nS,"../assets/renovation/outside.jpg":aS,"../assets/renovation/shower.jpg":lS,"../assets/renovation/sitting-area.jpg":iS,"../assets/renovation/toilet.jpg":rS}),w0=i=>i.split("/").pop()?.toLowerCase()||"",oS=i=>{const u=i.match(/gallery\/(.*?)\//);return u?u[1]:"Sonstige"};function fS(i){const u=[...i];for(let s=u.length-1;s>0;s--){const c=Math.floor(Math.random()*(s+1));[u[s],u[c]]=[u[c],u[s]]}return u}const R0=()=>{const i={};return Object.entries(uS).forEach(([u,s])=>{const c=oS(u);i[c]||(i[c]=[]),i[c].push(s)}),Object.keys(i).forEach(u=>{i[u]=fS(i[u])}),i},M0=()=>{const i={};return Object.entries(cS).forEach(([u,s])=>{const c=w0(u);i[c]=s}),i},D0=()=>{const i={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(sS).forEach(([u,s])=>{const c=w0(u);c.includes("sitting")?i.kabinen.push({src:s,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?i.fassade.push({src:s,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&i.fassade.push({src:s,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?i.waschkueche.push({src:s,alt:"Toilette"}):c.includes("shower")?i.waschkueche.push({src:s,alt:"Dusche"}):i.waschkueche.push({src:s,alt:"Waschküche"}))}),i},dS=i=>{const s=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":l0,"../assets/gallery/cheerleading/cheerleading_1.jpg":i0,"../assets/gallery/cheerleading/cheerleading_2.jpg":r0,"../assets/gallery/cheerleading/cheerleading_3.jpg":u0,"../assets/gallery/herren/herren_0.jpg":c0,"../assets/gallery/herren/herren_1.jpg":s0,"../assets/gallery/herren/herren_10.jpg":o0,"../assets/gallery/herren/herren_11.jpg":f0,"../assets/gallery/herren/herren_12.jpg":d0,"../assets/gallery/herren/herren_13.jpg":h0,"../assets/gallery/herren/herren_14.jpg":m0,"../assets/gallery/herren/herren_15.jpg":g0,"../assets/gallery/herren/herren_16.jpg":p0,"../assets/gallery/herren/herren_17.jpg":b0,"../assets/gallery/herren/herren_18.jpg":y0,"../assets/gallery/herren/herren_19.png":v0,"../assets/gallery/herren/herren_2.jpg":x0,"../assets/gallery/herren/herren_3.jpg":S0,"../assets/gallery/herren/herren_4.jpg":j0,"../assets/gallery/herren/herren_5.jpg":z0,"../assets/gallery/herren/herren_6.jpg":E0,"../assets/gallery/herren/herren_7.jpg":_0,"../assets/gallery/herren/herren_8.jpg":T0,"../assets/gallery/herren/herren_9.jpg":A0})).find(([c])=>c.includes(i));return s?s[1]:""},Co=(i,u)=>dS(`${i}/${i}_${u}.jpg`);R0(),M0(),D0();function hS(){const i=R0(),[u,s]=R.useState(null);return R.useEffect(()=>{if(!u)return;const c=d=>{d.key==="Escape"&&s(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[u]),o.jsxs("section",{children:[o.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([c,d])=>o.jsxs("div",{style:{marginBottom:"2.5rem"},children:[o.jsx(mS,{children:c.toUpperCase()}),o.jsx(gS,{children:d.map((m,b)=>o.jsx(pS,{src:m,alt:`Bild ${b+1} aus ${c}`,onClick:()=>s({folder:c,idx:b}),style:{cursor:"pointer"}},b))}),u&&u.folder===c&&o.jsx(bS,{onClick:()=>s(null),children:o.jsxs(yS,{onClick:m=>m.stopPropagation(),children:[o.jsx(vS,{src:d[u.idx],alt:`Großansicht aus ${c}`}),o.jsx(xS,{onClick:()=>s(null),title:"Schließen",children:"×"})]})})]},c))]})}const mS=y.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,gS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,pS=y.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,bS=y.div`
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
`,yS=y.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,vS=y.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,xS=y.button`
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
`,SS=M0(),fg=i=>SS[i.toLowerCase()]||void 0;function jS(){const i=[];return a0.forEach(u=>{Array.isArray(u.sponsors)&&u.sponsors.forEach(s=>{i.push({name:s.name,image:s.image,website:s.website})})}),i.filter((u,s,c)=>c.findIndex(d=>d.name===u.name)===s)}const zS=jS();function ES(){return o.jsxs(_S,{children:[o.jsx(TS,{children:"Unsere Partner"}),o.jsx(AS,{children:zS.map((i,u)=>{const s=i.image&&fg(i.image)?o.jsx(RS,{src:fg(i.image),alt:i.name}):o.jsx(MS,{children:i.name});return i.website?o.jsx(Bo,{href:i.website,target:"_blank",rel:"noopener noreferrer",title:`Besuche ${i.name}`,children:s},u):o.jsx(wS,{children:s},u)})})]})}const _S=y.section`
  background: #fff6fa;
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`,TS=y.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2.2rem;
`,AS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2.2rem 2.5rem;
  align-items: center;
  justify-items: center;
`,Bo=y.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
`,wS=y.div`
  display: block;
`,RS=y.img`
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
`,MS=y.div`
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
`,DS=y.section`
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
`,OS=y.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
`,CS=y.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
  margin-top: 0.5rem;
`,dg=y.a`
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
`,BS=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,NS=y.main`
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
`,US=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,HS=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 1.5rem 0;
  flex-wrap: wrap;
`,kS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,LS=y.h3`
  font-size: 1.7rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`,hg=y.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`,GS=y.div`
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
`,qS=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,YS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,VS=y.p`
  font-size: clamp(1.13rem, 1.5vw, 1.25rem);
  color: #222;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 700px;
`,ZS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,XS=y.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,QS=y.div`
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
`,KS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,JS=y.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,$S=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,WS=y.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,FS=y.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,PS=y.ul`
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
`,Qs=y.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ks=y.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Js=y.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,$s=y.div`
  font-size: 0.98rem;
  color: #666;
`;function IS(){return o.jsxs(o.Fragment,{children:[o.jsx(DS,{children:o.jsxs(qS,{children:[o.jsx(OS,{children:"SC Konstanz-Wollmatingen"}),o.jsx(CS,{children:"Ihre Marke im Fokus – direkt am Spielfeldrand"}),o.jsxs(BS,{children:[o.jsx(dg,{href:"#sponsoring-pakete",children:"Jetzt Sponsor werden"}),o.jsx(dg,{href:"#spenden",secondary:!0,children:"Spenden"})]})]})}),o.jsxs(NS,{children:[o.jsx(US,{id:"sponsoring-pakete",children:"Sponsoring-Pakete 2025/2026"}),o.jsx(YS,{children:o.jsx(VS,{children:"Gemeinsam für den Sport in Konstanz: Unterstützen Sie unsere Teams, fördern Sie Talente und werden Sie Teil einer starken Gemeinschaft. Ihr Engagement als Sponsor macht den Unterschied – auf und neben dem Spielfeld!"})}),o.jsx(lx,{packages:a0}),o.jsx(hx,{}),o.jsx(Cx,{}),o.jsx($x,{}),o.jsx(ES,{}),o.jsxs(ZS,{children:[o.jsx(XS,{children:"Unsere Reichweite & Kanäle"}),o.jsxs(QS,{children:[o.jsxs(Zr,{children:[o.jsx(Xr,{children:"📱 Social Media"}),o.jsxs(Qr,{children:[o.jsx("li",{children:"Instagram: 2.500+ Follower"}),o.jsx("li",{children:"Reel-Reichweite bis 200k"}),o.jsx("li",{children:"Facebook: 1.800+ Follower"})]})]}),o.jsxs(Zr,{children:[o.jsx(Xr,{children:"🌐 Website & Online"}),o.jsxs(Qr,{children:[o.jsx("li",{children:"Monatliche Besucher: 5.000+"}),o.jsx("li",{children:"Newsletter-Abonnenten: 450+"}),o.jsx("li",{children:"Durchschnittliche Seitenaufrufe: 15.000+"}),o.jsx("li",{children:"Google-Sichtbarkeit: 95% lokale Suche"})]})]}),o.jsxs(Zr,{children:[o.jsx(Xr,{children:"🏟️ Offline & Events"}),o.jsxs(Qr,{children:[o.jsx("li",{children:"Heimspiele pro Saison: 15+"}),o.jsx("li",{children:"Durchschnittliche Zuschauer: 200+"}),o.jsx("li",{children:"Events & Turniere: 8+ pro Jahr"}),o.jsx("li",{children:"Stadionheft-Auflage: 300+ pro Spiel"})]})]}),o.jsxs(Zr,{children:[o.jsx(Xr,{children:"📢 Zusätzliche Kanäle"}),o.jsxs(Qr,{children:[o.jsx("li",{children:"Pressearbeit & Medienkontakte"}),o.jsx("li",{children:"Kooperationen mit lokalen Partnern"}),o.jsx("li",{children:"Vereinsfeste & Community-Events"}),o.jsx("li",{children:"Jugendförderung & Nachwuchsarbeit"})]})]})]})]}),o.jsxs(KS,{children:[o.jsx(JS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),o.jsxs($S,{children:[o.jsxs(WS,{children:[o.jsxs(Qs,{children:[o.jsx(Ks,{children:"1 Seite (Farbe)"}),o.jsx(Js,{children:"1.000 €"}),o.jsx($s,{children:"DIN A4 (297 × 210 mm)"})]}),o.jsxs(Qs,{children:[o.jsx(Ks,{children:"1/2 Seite (Farbe)"}),o.jsx(Js,{children:"500 €"}),o.jsx($s,{children:"DIN A5 (148 × 210 mm)"})]}),o.jsxs(Qs,{children:[o.jsx(Ks,{children:"1/4 Seite (Farbe)"}),o.jsx(Js,{children:"250 €"}),o.jsx($s,{children:"DIN A6 (105 × 148 mm)"})]})]}),o.jsx(FS,{children:o.jsxs(PS,{children:[o.jsxs(pi,{children:[o.jsx(bi,{}),"15 Ausgaben pro Saison"]}),o.jsxs(pi,{children:[o.jsx(bi,{}),"ca. 100 Exemplare pro Heimspiel"]}),o.jsxs(pi,{children:[o.jsx(bi,{}),"Digitale Version (Social Media & Website)"]}),o.jsxs(pi,{children:[o.jsx(bi,{}),"1.000 – 1.500 Online Zugriffe je Ausgabe"]}),o.jsxs(pi,{children:[o.jsx(bi,{}),"DIN A4 Stadionmagazin"]})]})})]})]}),o.jsx(HS,{}),o.jsxs(kS,{children:[o.jsx(LS,{children:"Unsere Ziele und Ihr Beitrag als Sponsor"}),o.jsx(hg,{children:"Der SC Konstanz-Wollmatingen blickt mit großer Motivation auf die Saison 2025/26. Unsere Abteilungen verfolgen ambitionierte, aber realistische Ziele, die wir mit Ihrer Unterstützung erreichen möchten:"}),o.jsxs(GS,{children:[o.jsxs(Ja,{children:[o.jsx($a,{children:"1. Mannschaft (Herren)"}),o.jsx(Wa,{children:"Unser klares Ziel ist der Aufstieg in die nächsthöhere Liga. Dafür investieren wir in eine gezielte sportliche Weiterentwicklung und benötigen insbesondere Unterstützung für die Finanzierung von Trainings- und Spielbetrieb."})]}),o.jsxs(Ja,{children:[o.jsx($a,{children:"2. Mannschaft (Herren)"}),o.jsx(Wa,{children:"Die zweite Mannschaft strebt einen Platz unter den Top 3 an. Auch hier sind gezielte Fördermaßnahmen und eine stabile finanzielle Basis entscheidend, um das sportliche Potenzial voll auszuschöpfen."})]}),o.jsxs(Ja,{children:[o.jsx($a,{children:"Damenmannschaft"}),o.jsx(Wa,{children:"Unsere Damen möchten sich in der Landesliga unter den besten drei Teams etablieren und ihren Bezirkspokal verteidigen. Die längeren Auswärtsfahrten in dieser Liga bringen erhöhte Reisekosten mit sich, für die wir gezielt Unterstützung suchen."})]}),o.jsxs(Ja,{children:[o.jsx($a,{children:"Cheerleading"}),o.jsx(Wa,{children:"Das Cheerleading-Team plant die Teilnahme an mehreren Turnieren und benötigt dringend einen neuen Trikotsatz (Cheerleading-Uniformen). Auch hier sind Reisekosten ein wichtiger Faktor, um die Teilnahme an Wettbewerben zu ermöglichen."})]}),o.jsxs(Ja,{children:[o.jsx($a,{children:"Fördergruppe / Jugend"}),o.jsx(Wa,{children:"Mit der Fördergruppe legen wir den Grundstein für den neuen Jugendfußball-Förderverein (JFV) Konstanz. Unser Ziel ist es, gezielt Talente zu fördern und ihnen durch qualifizierte Trainer optimale Entwicklungsmöglichkeiten zu bieten. Für die Finanzierung von Trainerfortbildungen und zusätzlichem Trainingsmaterial sind wir auf Unterstützung angewiesen."})]}),o.jsxs(Ja,{children:[o.jsx($a,{children:"Vereinsziel: Langfristige Partnerschaften"}),o.jsx(Wa,{children:"Unser übergeordnetes Ziel ist es, langfristige Partner zu gewinnen, die uns sportlich wie wirtschaftlich begleiten und gemeinsam mit uns die Weiterentwicklung des Vereins in den kommenden Jahren aktiv mitgestalten möchten."})]})]}),o.jsxs(hg,{children:[o.jsx("b",{children:"Warum Ihre Unterstützung wichtig ist:"}),o.jsx("br",{}),"Die genannten Ziele sind nur mit einer soliden finanziellen Basis erreichbar. Ihre Förderung trägt dazu bei, Reisekosten zu decken, moderne Ausrüstung bereitzustellen und die sportliche Entwicklung aller Teams nachhaltig zu sichern. Sie investieren damit direkt in die Zukunft des Sports in Konstanz und in die Entwicklung junger Talente.",o.jsx("br",{}),o.jsx("br",{}),"Wir freuen uns, gemeinsam mit Ihnen diese Ziele zu verwirklichen!"]})]}),o.jsx(hS,{})]}),o.jsx(Oo,{})]})}const e2=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],t2=y.section`
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
`,n2=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,a2=y.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,l2=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,i2=y.main`
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
`,r2=y.section`
  margin-bottom: 4rem;
`,u2=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,c2=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,s2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,o2=y.div`
  text-align: center;
  margin-bottom: 3rem;
`,f2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,d2=y.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,h2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,m2=y.div`
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
`,g2=y.div`
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
`,p2=y.div`
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
`,b2=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,y2=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,v2=y.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,x2=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,S2=y.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,j2=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,z2=y.button`
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
`,E2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,_2=y.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,T2=y.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,A2=y.div`
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
`,mg=y.div`
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
`,w2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,R2=y.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,M2=y.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,D2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Ws=y.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Fs=y.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ps=y.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Is=y.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,O2=y.a`
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
`,C2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,B2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,N2=y.ul`
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
`;function U2(){return o.jsxs(o.Fragment,{children:[o.jsx(t2,{children:o.jsxs(n2,{children:[o.jsx(a2,{children:"SCKW Jobbörse"}),o.jsx(l2,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),o.jsxs(i2,{children:[o.jsxs(r2,{children:[o.jsx(u2,{children:"Willkommen bei der SCKW Jobbörse"}),o.jsx(c2,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),o.jsxs(s2,{children:[o.jsxs(o2,{children:[o.jsx(f2,{children:"So könnte es aussehen"}),o.jsx(d2,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),o.jsx(h2,{children:e2.map(i=>o.jsxs(m2,{children:[i.isExample&&o.jsx(g2,{children:"MUSTER"}),o.jsx(p2,{children:o.jsx(b2,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:u=>{u.currentTarget.style.display="none",u.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",u.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),o.jsx(y2,{children:i.title}),o.jsx(v2,{children:i.company}),o.jsx(x2,{children:i.tags.map((u,s)=>o.jsx(S2,{children:u},s))}),o.jsx(j2,{children:i.description}),o.jsx(z2,{children:"Mehr erfahren"})]},i.id))})]}),o.jsxs(E2,{children:[o.jsx(_2,{children:"Preise für Stellenausschreibungen"}),o.jsx(T2,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),o.jsxs(A2,{children:[o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Basis"}),o.jsx(Ia,{children:"149 €"}),o.jsx(el,{children:"netto / Anzeige"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),o.jsx(Re,{children:"Firmenlogo und Link"}),o.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),o.jsx(Re,{children:"Bewerbermanagement"})]}),o.jsx(nl,{className:"secondary",children:"Basis wählen"})]}),o.jsxs(Fa,{className:"popular",children:[o.jsx(mg,{children:"BELIEBT"}),o.jsx(Pa,{children:"Standard"}),o.jsx(Ia,{children:"229 €"}),o.jsx(el,{children:"netto / Anzeige"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Alle Basis-Features"}),o.jsx(Re,{children:"1 Social Media Post"}),o.jsx(Re,{children:"Instagram + Facebook Reichweite"}),o.jsx(Re,{children:"Newsletter-Erwähnung"})]}),o.jsx(nl,{children:"Standard wählen"})]}),o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Boosted"}),o.jsx(Ia,{children:"349 €"}),o.jsx(el,{children:"netto / Anzeige"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Alle Standard-Features"}),o.jsx(Re,{children:"Instagram Story"}),o.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),o.jsx(Re,{children:"Prioritäre Platzierung"})]}),o.jsx(nl,{className:"secondary",children:"Boosted wählen"})]})]}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),o.jsxs(w2,{children:[o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Job Flat SMALL"}),o.jsx(Ia,{children:"799 €"}),o.jsx(el,{children:"netto / Jahr"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),o.jsx(Re,{children:"6 Social Media Posts"}),o.jsx(Re,{children:"Website-Präsenz"}),o.jsx(Re,{children:"Newsletter-Integration"})]}),o.jsx(nl,{className:"secondary",children:"Small Flat"})]}),o.jsxs(Fa,{className:"popular",children:[o.jsx(mg,{children:"EMPFOHLEN"}),o.jsx(Pa,{children:"Job Flat MEDIUM"}),o.jsx(Ia,{children:"1.199 €"}),o.jsx(el,{children:"netto / Jahr"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),o.jsx(Re,{children:"Stadionmagazin-Präsenz"}),o.jsx(Re,{children:"Social Media Posts"}),o.jsx(Re,{children:"Stories & Highlights"})]}),o.jsx(nl,{children:"Medium Flat"})]}),o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Job Flat PARTNER"}),o.jsx(Ia,{children:"1.499 €"}),o.jsx(el,{children:"netto / Jahr"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Unbegrenzte Anzeigen"}),o.jsx(Re,{children:"Erwähnung bei Heimspielen"}),o.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),o.jsx(Re,{children:"Prioritärer Support"})]}),o.jsx(nl,{className:"secondary",children:"Partner Flat"})]})]}),o.jsxs(R2,{children:[o.jsx(M2,{children:"➕ Zusatzoptionen"}),o.jsxs(D2,{children:[o.jsxs(Ws,{children:[o.jsx(Fs,{children:"Social Story"}),o.jsx(Ps,{children:"39 €"}),o.jsx(Is,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),o.jsxs(Ws,{children:[o.jsx(Fs,{children:"Designservice"}),o.jsx(Ps,{children:"59 €"}),o.jsx(Is,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),o.jsxs(Ws,{children:[o.jsx(Fs,{children:"Stadionmagazin"}),o.jsx(Ps,{children:"99 €"}),o.jsx(Is,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),o.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:o.jsx(O2,{href:"mailto:grimm@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),o.jsxs(C2,{children:[o.jsx(B2,{children:"🎯 Warum SCKW Jobbörse?"}),o.jsxs(N2,{children:[o.jsxs(al,{children:[o.jsx(ll,{children:"🏠"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"👥"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"💰"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"📈"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"⚡"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"🤲"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),o.jsx(Oo,{})]})}const H2=y.section`
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
`,k2=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,L2=y.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,G2=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,q2=y.main`
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
`,Y2=y.section`
  margin-bottom: 4rem;
`,V2=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,Z2=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,X2=y.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,Q2=y.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,K2=y.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,J2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,$2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,W2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,eo=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,to=y.div`
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
`,F2=y.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,P2=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${i=>i.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,I2=y.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,e3=y.div`
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
`,t3=y.div`
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
`,n3=y.div`
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
`,a3=y.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,l3=y.button`
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
`,gg=y.button`
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
`,no=y.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,ao=y.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,i3=y.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,r3=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,u3=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,lo=y.div`
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
`,io=y.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,ro=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,uo=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,co=y.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,c3=y.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,s3=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,o3=y.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,f3=y.div`
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
`,d3=y.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,h3=y.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,m3=y.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,g3=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,pg=y.a`
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
`,p3=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
`,b3=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 1rem;
  text-align: center;
`,y3=y.div`
  width: 100%;
  height: 20px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`,v3=y.div`
  width: ${i=>i.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #059669, #10b981);
  transition: width 0.3s ease;
`,x3=y.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #64748b;
`,rl=D0();function so({images:i,onImageClick:u}){const[s,c]=R.useState(0);return R.useEffect(()=>{if(i.length<=1)return;const d=setInterval(()=>{c(m=>(m+1)%i.length)},4e3);return()=>clearInterval(d)},[i.length]),i.length===0?o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):o.jsxs(F2,{children:[i.map((d,m)=>o.jsx(P2,{src:d.src,alt:d.alt,$isActive:m===s,onClick:()=>u(m)},m)),i.length>1&&o.jsx(I2,{children:i.map((d,m)=>o.jsx(e3,{$isActive:m===s,onClick:()=>c(m)},m))})]})}function S3({images:i,initialIndex:u,onClose:s}){const[c,d]=R.useState(u),m=()=>{d(z=>(z+1)%i.length)},b=()=>{d(z=>(z-1+i.length)%i.length)};return R.useEffect(()=>{const z=v=>{v.key==="Escape"&&s(),v.key==="ArrowRight"&&m(),v.key==="ArrowLeft"&&b()};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[]),o.jsx(t3,{onClick:s,children:o.jsxs(n3,{onClick:z=>z.stopPropagation(),children:[o.jsx(l3,{onClick:s,children:"×"}),o.jsx(a3,{src:i[c].src,alt:i[c].alt}),i.length>1&&o.jsxs(o.Fragment,{children:[o.jsx(gg,{$direction:"prev",onClick:b,children:"‹"}),o.jsx(gg,{$direction:"next",onClick:m,children:"›"})]})]})})}function j3(){const s=11.428571428571429,[c,d]=R.useState(!1),[m,b]=R.useState([]),[z,v]=R.useState(0),g=(_,C)=>{b(_),v(C),d(!0)};return o.jsxs(o.Fragment,{children:[o.jsx(H2,{children:o.jsxs(k2,{children:[o.jsx(L2,{children:"🏟️ Fürstenberg weiterentwickeln"}),o.jsx(G2,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),o.jsxs(q2,{children:[o.jsxs(Y2,{children:[o.jsx(V2,{children:"Der Fürstenberg - unser Kultplatz"}),o.jsx(Z2,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),o.jsxs(X2,{children:[o.jsx(Q2,{children:"✨ Charme erhalten, Komfort verbessern"}),o.jsx(K2,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),o.jsxs(J2,{children:[o.jsx($2,{children:"🔍 Wo wir ansetzen möchten"}),o.jsxs(W2,{children:[o.jsxs(eo,{children:[o.jsx(to,{children:o.jsx(so,{images:rl.kabinen,onImageClick:_=>g(rl.kabinen,_)})}),o.jsx(no,{children:"🔧 Kabinen komfortabler gestalten"}),o.jsx(ao,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),o.jsxs(eo,{children:[o.jsx(to,{children:o.jsx(so,{images:rl.fassade,onImageClick:_=>g(rl.fassade,_)})}),o.jsx(no,{children:"🎨 Fassade & Fenster erneuern"}),o.jsx(ao,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),o.jsxs(eo,{children:[o.jsx(to,{children:o.jsx(so,{images:rl.waschkueche,onImageClick:_=>g(rl.waschkueche,_)})}),o.jsx(no,{children:"🧺 Waschküche auf Vordermann bringen"}),o.jsx(ao,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),o.jsxs(i3,{children:[o.jsx(r3,{children:"✨ Unsere Pläne für den Fürstenberg"}),o.jsxs(u3,{children:[o.jsxs(lo,{children:[o.jsx(io,{children:"🪑"}),o.jsx(ro,{children:"Kabinen sanieren"}),o.jsx(uo,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),o.jsx(co,{children:"~8.000 €"})]}),o.jsxs(lo,{children:[o.jsx(io,{children:"🎨"}),o.jsx(ro,{children:"Fassade & Fenster erneuern"}),o.jsx(uo,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),o.jsx(co,{children:"~15.000 €"})]}),o.jsxs(lo,{children:[o.jsx(io,{children:"🧺"}),o.jsx(ro,{children:"Waschküche modernisieren"}),o.jsx(uo,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),o.jsx(co,{children:"~5.000 €"})]})]})]}),o.jsxs(c3,{children:[o.jsx(s3,{children:"🤝 Werden Sie Renovierungs-Partner!"}),o.jsx(o3,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),o.jsxs(f3,{children:[o.jsxs(Kr,{children:[o.jsx(Jr,{children:"🏆"}),o.jsxs($r,{children:[o.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),o.jsxs(Kr,{children:[o.jsx(Jr,{children:"📄"}),o.jsxs($r,{children:[o.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),o.jsxs(Kr,{children:[o.jsx(Jr,{children:"📱"}),o.jsxs($r,{children:[o.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),o.jsxs(Kr,{children:[o.jsx(Jr,{children:"🎯"}),o.jsxs($r,{children:[o.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),o.jsxs(d3,{children:[o.jsx(h3,{children:"🤝 Gemeinsam für den Fürstenberg"}),o.jsx(m3,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),o.jsxs(p3,{children:[o.jsx(b3,{children:"Unser Fortschritt"}),o.jsx(y3,{children:o.jsx(v3,{$progress:s})}),o.jsxs(x3,{children:[o.jsxs("span",{children:[3200 .toLocaleString("de-DE")," € gesammelt"]}),o.jsxs("span",{children:["Ziel: ",28e3.toLocaleString("de-DE")," €"]})]})]}),o.jsxs(g3,{children:[o.jsx(pg,{className:"primary",href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),o.jsx(pg,{href:"mailto:grimm@sckw.de?subject=Sportplatz Renovierung - Bankverbindung&body=Hallo liebes SCKW-Team,%0A%0Aich möchte für die Sportplatz-Renovierung spenden und benötige die Bankverbindung.%0A%0AMein Name: %0AFirma: %0ASpendenhöhe: %0A%0ABitte senden Sie mir die Kontodaten zu.%0A%0AHerzliche Grüße",children:"🏦 Per Überweisung spenden"})]})]})]}),o.jsx(Oo,{}),c&&o.jsx(S3,{images:m,initialIndex:z,onClose:()=>d(!1)})]})}function z3(){return o.jsxs(Ey,{basename:"/sportclub/",children:[o.jsx(qv,{}),o.jsxs(ty,{children:[o.jsx(Wr,{path:"/",element:o.jsx(IS,{})}),o.jsx(Wr,{path:"/jobs",element:o.jsx(U2,{})}),o.jsx(Wr,{path:"/renovierung",element:o.jsx(j3,{})})]})]})}console.log("sckw sponsoring Website loaded");ob.createRoot(document.getElementById("root")).render(o.jsx(R.StrictMode,{children:o.jsx(z3,{})}));
