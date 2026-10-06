(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function Ny(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var wu={exports:{}},Xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function $y(){if(Gg)return Xi;Gg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,f){var p=null;if(f!==void 0&&(p=""+f),d.key!==void 0&&(p=""+d.key),"key"in d){f={};for(var v in d)v!=="key"&&(f[v]=d[v])}else f=d;return d=f.ref,{$$typeof:a,type:c,key:p,ref:d!==void 0?d:null,props:f}}return Xi.Fragment=s,Xi.jsx=u,Xi.jsxs=u,Xi}var Yg;function Ly(){return Yg||(Yg=1,wu.exports=$y()),wu.exports}var i=Ly(),Eu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Uy(){if(Vg)return ce;Vg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function w(z){return z===null||typeof z!="object"?null:(z=S&&z[S]||z["@@iterator"],typeof z=="function"?z:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,O={};function L(z,Q,P){this.props=z,this.context=Q,this.refs=O,this.updater=P||C}L.prototype.isReactComponent={},L.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},L.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function G(){}G.prototype=L.prototype;function Z(z,Q,P){this.props=z,this.context=Q,this.refs=O,this.updater=P||C}var T=Z.prototype=new G;T.constructor=Z,j(T,L.prototype),T.isPureReactComponent=!0;var V=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function $(z,Q,P,W,te,me){return P=me.ref,{$$typeof:a,type:z,key:Q,ref:P!==void 0?P:null,props:me}}function X(z,Q){return $(z.type,Q,void 0,void 0,void 0,z.props)}function ae(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function Ce(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(P){return Q[P]})}var ve=/\/+/g;function Ue(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?Ce(""+z.key):Q.toString(36)}function Ut(){}function lt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Ut,Ut):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Ae(z,Q,P,W,te){var me=typeof z;(me==="undefined"||me==="boolean")&&(z=null);var re=!1;if(z===null)re=!0;else switch(me){case"bigint":case"string":case"number":re=!0;break;case"object":switch(z.$$typeof){case a:case s:re=!0;break;case x:return re=z._init,Ae(re(z._payload),Q,P,W,te)}}if(re)return te=te(z),re=W===""?"."+Ue(z,0):W,V(te)?(P="",re!=null&&(P=re.replace(ve,"$&/")+"/"),Ae(te,Q,P,"",function(ot){return ot})):te!=null&&(ae(te)&&(te=X(te,P+(te.key==null||z&&z.key===te.key?"":(""+te.key).replace(ve,"$&/")+"/")+re)),Q.push(te)),1;re=0;var Pe=W===""?".":W+":";if(V(z))for(var je=0;je<z.length;je++)W=z[je],me=Pe+Ue(W,je),re+=Ae(W,Q,P,me,te);else if(je=w(z),typeof je=="function")for(z=je.call(z),je=0;!(W=z.next()).done;)W=W.value,me=Pe+Ue(W,je++),re+=Ae(W,Q,P,me,te);else if(me==="object"){if(typeof z.then=="function")return Ae(lt(z),Q,P,W,te);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return re}function H(z,Q,P){if(z==null)return z;var W=[],te=0;return Ae(z,W,"","",function(me){return Q.call(P,me,te++)}),W}function F(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(P){(z._status===0||z._status===-1)&&(z._status=1,z._result=P)},function(P){(z._status===0||z._status===-1)&&(z._status=2,z._result=P)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var le=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ue(){}return ce.Children={map:H,forEach:function(z,Q,P){H(z,function(){Q.apply(this,arguments)},P)},count:function(z){var Q=0;return H(z,function(){Q++}),Q},toArray:function(z){return H(z,function(Q){return Q})||[]},only:function(z){if(!ae(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ce.Component=L,ce.Fragment=u,ce.Profiler=d,ce.PureComponent=Z,ce.StrictMode=c,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ce.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},ce.cache=function(z){return function(){return z.apply(null,arguments)}},ce.cloneElement=function(z,Q,P){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var W=j({},z.props),te=z.key,me=void 0;if(Q!=null)for(re in Q.ref!==void 0&&(me=void 0),Q.key!==void 0&&(te=""+Q.key),Q)!I.call(Q,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Q.ref===void 0||(W[re]=Q[re]);var re=arguments.length-2;if(re===1)W.children=P;else if(1<re){for(var Pe=Array(re),je=0;je<re;je++)Pe[je]=arguments[je+2];W.children=Pe}return $(z.type,te,void 0,void 0,me,W)},ce.createContext=function(z){return z={$$typeof:p,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},ce.createElement=function(z,Q,P){var W,te={},me=null;if(Q!=null)for(W in Q.key!==void 0&&(me=""+Q.key),Q)I.call(Q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(te[W]=Q[W]);var re=arguments.length-2;if(re===1)te.children=P;else if(1<re){for(var Pe=Array(re),je=0;je<re;je++)Pe[je]=arguments[je+2];te.children=Pe}if(z&&z.defaultProps)for(W in re=z.defaultProps,re)te[W]===void 0&&(te[W]=re[W]);return $(z,me,void 0,void 0,null,te)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(z){return{$$typeof:v,render:z}},ce.isValidElement=ae,ce.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:F}},ce.memo=function(z,Q){return{$$typeof:g,type:z,compare:Q===void 0?null:Q}},ce.startTransition=function(z){var Q=U.T,P={};U.T=P;try{var W=z(),te=U.S;te!==null&&te(P,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(ue,le)}catch(me){le(me)}finally{U.T=Q}},ce.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ce.use=function(z){return U.H.use(z)},ce.useActionState=function(z,Q,P){return U.H.useActionState(z,Q,P)},ce.useCallback=function(z,Q){return U.H.useCallback(z,Q)},ce.useContext=function(z){return U.H.useContext(z)},ce.useDebugValue=function(){},ce.useDeferredValue=function(z,Q){return U.H.useDeferredValue(z,Q)},ce.useEffect=function(z,Q,P){var W=U.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(z,Q)},ce.useId=function(){return U.H.useId()},ce.useImperativeHandle=function(z,Q,P){return U.H.useImperativeHandle(z,Q,P)},ce.useInsertionEffect=function(z,Q){return U.H.useInsertionEffect(z,Q)},ce.useLayoutEffect=function(z,Q){return U.H.useLayoutEffect(z,Q)},ce.useMemo=function(z,Q){return U.H.useMemo(z,Q)},ce.useOptimistic=function(z,Q){return U.H.useOptimistic(z,Q)},ce.useReducer=function(z,Q,P){return U.H.useReducer(z,Q,P)},ce.useRef=function(z){return U.H.useRef(z)},ce.useState=function(z){return U.H.useState(z)},ce.useSyncExternalStore=function(z,Q,P){return U.H.useSyncExternalStore(z,Q,P)},ce.useTransition=function(){return U.H.useTransition()},ce.version="19.1.0",ce}var qg;function Cd(){return qg||(qg=1,Eu.exports=Uy()),Eu.exports}var k=Cd();const Ee=Ny(k);var _u={exports:{}},Zi={},zu={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Hy(){return Kg||(Kg=1,function(a){function s(H,F){var le=H.length;H.push(F);e:for(;0<le;){var ue=le-1>>>1,z=H[ue];if(0<d(z,F))H[ue]=F,H[le]=z,le=ue;else break e}}function u(H){return H.length===0?null:H[0]}function c(H){if(H.length===0)return null;var F=H[0],le=H.pop();if(le!==F){H[0]=le;e:for(var ue=0,z=H.length,Q=z>>>1;ue<Q;){var P=2*(ue+1)-1,W=H[P],te=P+1,me=H[te];if(0>d(W,le))te<z&&0>d(me,W)?(H[ue]=me,H[te]=le,ue=te):(H[ue]=W,H[P]=le,ue=P);else if(te<z&&0>d(me,le))H[ue]=me,H[te]=le,ue=te;else break e}}return F}function d(H,F){var le=H.sortIndex-F.sortIndex;return le!==0?le:H.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,v=p.now();a.unstable_now=function(){return p.now()-v}}var h=[],g=[],x=1,S=null,w=3,C=!1,j=!1,O=!1,L=!1,G=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function V(H){for(var F=u(g);F!==null;){if(F.callback===null)c(g);else if(F.startTime<=H)c(g),F.sortIndex=F.expirationTime,s(h,F);else break;F=u(g)}}function U(H){if(O=!1,V(H),!j)if(u(h)!==null)j=!0,I||(I=!0,Ue());else{var F=u(g);F!==null&&Ae(U,F.startTime-H)}}var I=!1,$=-1,X=5,ae=-1;function Ce(){return L?!0:!(a.unstable_now()-ae<X)}function ve(){if(L=!1,I){var H=a.unstable_now();ae=H;var F=!0;try{e:{j=!1,O&&(O=!1,Z($),$=-1),C=!0;var le=w;try{t:{for(V(H),S=u(h);S!==null&&!(S.expirationTime>H&&Ce());){var ue=S.callback;if(typeof ue=="function"){S.callback=null,w=S.priorityLevel;var z=ue(S.expirationTime<=H);if(H=a.unstable_now(),typeof z=="function"){S.callback=z,V(H),F=!0;break t}S===u(h)&&c(h),V(H)}else c(h);S=u(h)}if(S!==null)F=!0;else{var Q=u(g);Q!==null&&Ae(U,Q.startTime-H),F=!1}}break e}finally{S=null,w=le,C=!1}F=void 0}}finally{F?Ue():I=!1}}}var Ue;if(typeof T=="function")Ue=function(){T(ve)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,lt=Ut.port2;Ut.port1.onmessage=ve,Ue=function(){lt.postMessage(null)}}else Ue=function(){G(ve,0)};function Ae(H,F){$=G(function(){H(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(H){switch(w){case 1:case 2:case 3:var F=3;break;default:F=w}var le=w;w=F;try{return H()}finally{w=le}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(H,F){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=w;w=H;try{return F()}finally{w=le}},a.unstable_scheduleCallback=function(H,F,le){var ue=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ue+le:ue):le=ue,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=le+z,H={id:x++,callback:F,priorityLevel:H,startTime:le,expirationTime:z,sortIndex:-1},le>ue?(H.sortIndex=le,s(g,H),u(h)===null&&H===u(g)&&(O?(Z($),$=-1):O=!0,Ae(U,le-ue))):(H.sortIndex=z,s(h,H),j||C||(j=!0,I||(I=!0,Ue()))),H},a.unstable_shouldYield=Ce,a.unstable_wrapCallback=function(H){var F=w;return function(){var le=w;w=F;try{return H.apply(this,arguments)}finally{w=le}}}}(Cu)),Cu}var Qg;function Gy(){return Qg||(Qg=1,zu.exports=Hy()),zu.exports}var Au={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Yy(){if(Xg)return dt;Xg=1;var a=Cd();function s(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(h,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:h,containerInfo:g,implementation:x}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,dt.createPortal=function(h,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return f(h,g,null,x)},dt.flushSync=function(h){var g=p.T,x=c.p;try{if(p.T=null,c.p=2,h)return h()}finally{p.T=g,c.p=x,c.d.f()}},dt.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(h,g))},dt.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},dt.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var x=g.as,S=v(x,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?c.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:C}):x==="script"&&c.d.X(h,{crossOrigin:S,integrity:w,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},dt.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=v(g.as,g.crossOrigin);c.d.M(h,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(h)},dt.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=v(x,g.crossOrigin);c.d.L(h,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},dt.preloadModule=function(h,g){if(typeof h=="string")if(g){var x=v(g.as,g.crossOrigin);c.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(h)},dt.requestFormReset=function(h){c.d.r(h)},dt.unstable_batchedUpdates=function(h,g){return h(g)},dt.useFormState=function(h,g,x){return p.H.useFormState(h,g,x)},dt.useFormStatus=function(){return p.H.useHostTransitionStatus()},dt.version="19.1.0",dt}var Zg;function Vy(){if(Zg)return Au.exports;Zg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Au.exports=Yy(),Au.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function qy(){if(Fg)return Zi;Fg=1;var a=Gy(),s=Cd(),u=Vy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return v(r),e;if(o===l)return v(r),t;o=o.sibling}throw Error(c(188))}if(n.return!==l.return)n=r,l=o;else{for(var m=!1,b=r.child;b;){if(b===n){m=!0,n=r,l=o;break}if(b===l){m=!0,l=r,n=o;break}b=b.sibling}if(!m){for(b=o.child;b;){if(b===n){m=!0,n=o,l=r;break}if(b===l){m=!0,l=o,n=r;break}b=b.sibling}if(!m)throw Error(c(189))}}if(n.alternate!==l)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),T=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case L:return"Profiler";case O:return"StrictMode";case U:return"Suspense";case I:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case T:return(e.displayName||"Context")+".Provider";case Z:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:lt(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return lt(e(t))}catch{}}return null}var Ae=Array.isArray,H=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],z=-1;function Q(e){return{current:e}}function P(e){0>z||(e.current=ue[z],ue[z]=null,z--)}function W(e,t){z++,ue[z]=e.current,e.current=t}var te=Q(null),me=Q(null),re=Q(null),Pe=Q(null);function je(e,t){switch(W(re,t),W(me,e),W(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gg(t),e=pg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(te),W(te,e)}function ot(){P(te),P(me),P(re)}function Sa(e){e.memoizedState!==null&&W(Pe,e);var t=te.current,n=pg(t,e.type);t!==n&&(W(me,e),W(te,n))}function jn(e){me.current===e&&(P(te),P(me)),Pe.current===e&&(P(Pe),Yi._currentValue=le)}var Ht=Object.prototype.hasOwnProperty,co=a.unstable_scheduleCallback,uo=a.unstable_cancelCallback,m1=a.unstable_shouldYield,g1=a.unstable_requestPaint,mn=a.unstable_now,p1=a.unstable_getCurrentPriorityLevel,Zd=a.unstable_ImmediatePriority,Fd=a.unstable_UserBlockingPriority,ur=a.unstable_NormalPriority,b1=a.unstable_LowPriority,Pd=a.unstable_IdlePriority,x1=a.log,y1=a.unstable_setDisableYieldValue,Pl=null,Ct=null;function Vn(e){if(typeof x1=="function"&&y1(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Pl,e)}catch{}}var At=Math.clz32?Math.clz32:j1,v1=Math.log,S1=Math.LN2;function j1(e){return e>>>=0,e===0?32:31-(v1(e)/S1|0)|0}var dr=256,fr=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hr(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~o,l!==0?r=ja(l):(m&=b,m!==0?r=ja(m):n||(n=b&~e,n!==0&&(r=ja(n))))):(b=l&~o,b!==0?r=ja(b):m!==0?r=ja(m):n||(n=l&~e,n!==0&&(r=ja(n)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:r}function Wl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function w1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wd(){var e=dr;return dr<<=1,(dr&4194048)===0&&(dr=256),e}function Id(){var e=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),e}function fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function E1(e,t,n,l,r,o){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,E=e.expirationTimes,D=e.hiddenUpdates;for(n=m&~n;0<n;){var Y=31-At(n),K=1<<Y;b[Y]=0,E[Y]=-1;var B=D[Y];if(B!==null)for(D[Y]=null,Y=0;Y<B.length;Y++){var N=B[Y];N!==null&&(N.lane&=-536870913)}n&=~K}l!==0&&Jd(e,l,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function Jd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-At(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function ef(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-At(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tf(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Og(e.type))}function _1(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var qn=Math.random().toString(36).slice(2),ct="__reactFiber$"+qn,bt="__reactProps$"+qn,Za="__reactContainer$"+qn,go="__reactEvents$"+qn,z1="__reactListeners$"+qn,C1="__reactHandles$"+qn,nf="__reactResources$"+qn,Jl="__reactMarker$"+qn;function po(e){delete e[ct],delete e[bt],delete e[go],delete e[z1],delete e[C1]}function Fa(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Za]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vg(e);e!==null;){if(n=e[ct])return n;e=vg(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){if(e=e[ct]||e[Za]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ei(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Wa(e){var t=e[nf];return t||(t=e[nf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Jl]=!0}var af=new Set,lf={};function wa(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(lf[e]=t,e=0;e<t.length;e++)af.add(t[e])}var A1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rf={},sf={};function T1(e){return Ht.call(sf,e)?!0:Ht.call(rf,e)?!1:A1.test(e)?sf[e]=!0:(rf[e]=!0,!1)}function mr(e,t,n){if(T1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var bo,of;function Ja(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||"",of=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bo+e+of}var xo=!1;function yo(e,t){if(!e||xo)return"";xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(N){var B=N}Reflect.construct(e,[],K)}else{try{K.call()}catch(N){B=N}e.call(K.prototype)}}else{try{throw Error()}catch(N){B=N}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(N){if(N&&B&&typeof N.stack=="string")return[N.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),m=o[0],b=o[1];if(m&&b){var E=m.split(`
`),D=b.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<D.length&&!D[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===D.length)for(l=E.length-1,r=D.length-1;1<=l&&0<=r&&E[l]!==D[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==D[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==D[r]){var Y=`
`+E[l].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=l&&0<=r);break}}}finally{xo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ja(n):""}function k1(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return yo(e.type,!1);case 11:return yo(e.type.render,!1);case 1:return yo(e.type,!0);case 31:return Ja("Activity");default:return""}}function cf(e){try{var t="";do t+=k1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R1(e){var t=uf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){l=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=R1(e))}function df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=uf(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var M1=/[\n"\\]/g;function Yt(e){return e.replace(M1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vo(e,t,n,l,r,o,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?So(e,m,Gt(t)):n!=null?So(e,m,Gt(n)):l!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gt(b):e.removeAttribute("name")}function ff(e,t,n,l,r,o,m,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function So(e,t,n){t==="number"&&br(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function el(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function hf(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function mf(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(c(92));if(Ae(l)){if(1<l.length)throw Error(c(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function tl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var D1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gf(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||D1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function pf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&gf(e,r,l)}else for(var o in t)t.hasOwnProperty(o)&&gf(e,o,t[o])}function jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xr(e){return O1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wo=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,al=null;function bf(e){var t=Pa(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[bt]||null;if(!r)throw Error(c(90));vo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&df(l)}break e;case"textarea":hf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&el(e,!!n.multiple,t,!1)}}}var _o=!1;function xf(e,t,n){if(_o)return e(t,n);_o=!0;try{var l=e(t);return l}finally{if(_o=!1,(nl!==null||al!==null)&&(as(),nl&&(t=nl,e=al,al=nl=null,bf(t),e)))for(t=0;t<e.length;t++)bf(e[t])}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var l=n[bt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=!1;if(En)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){zo=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{zo=!1}var Kn=null,Co=null,yr=null;function yf(){if(yr)return yr;var e,t=Co,n=t.length,l,r="value"in Kn?Kn.value:Kn.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var m=n-e;for(l=1;l<=m&&t[n-l]===r[o-l];l++);return yr=r.slice(e,1<l?1-l:void 0)}function vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function vf(){return!1}function xt(e){function t(n,l,r,o,m){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sr:vf,this.isPropagationStopped=vf,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jr=xt(Ea),ai=x({},Ea,{view:0,detail:0}),N1=xt(ai),Ao,To,li,wr=x({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Ao=e.screenX-li.screenX,To=e.screenY-li.screenY):To=Ao=0,li=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:To}}),Sf=xt(wr),$1=x({},wr,{dataTransfer:0}),L1=xt($1),U1=x({},ai,{relatedTarget:0}),ko=xt(U1),H1=x({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),G1=xt(H1),Y1=x({},Ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V1=xt(Y1),q1=x({},Ea,{data:0}),jf=xt(q1),K1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X1[e])?!!t[e]:!1}function Ro(){return Z1}var F1=x({},ai,{key:function(e){if(e.key){var t=K1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P1=xt(F1),W1=x({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=xt(W1),I1=x({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),J1=xt(I1),ex=x({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=xt(ex),nx=x({},wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=xt(nx),lx=x({},Ea,{newState:0,oldState:0}),ix=xt(lx),rx=[9,13,27,32],Mo=En&&"CompositionEvent"in window,ii=null;En&&"documentMode"in document&&(ii=document.documentMode);var sx=En&&"TextEvent"in window&&!ii,Ef=En&&(!Mo||ii&&8<ii&&11>=ii),_f=" ",zf=!1;function Cf(e,t){switch(e){case"keyup":return rx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function ox(e,t){switch(e){case"compositionend":return Af(t);case"keypress":return t.which!==32?null:(zf=!0,_f);case"textInput":return e=t.data,e===_f&&zf?null:e;default:return null}}function cx(e,t){if(ll)return e==="compositionend"||!Mo&&Cf(e,t)?(e=yf(),yr=Co=Kn=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ef&&t.locale!=="ko"?null:t.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ux[e.type]:t==="textarea"}function kf(e,t,n,l){nl?al?al.push(l):al=[l]:nl=l,t=cs(t,"onChange"),0<t.length&&(n=new jr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ri=null,si=null;function dx(e){ug(e,0)}function Er(e){var t=ei(e);if(df(t))return e}function Rf(e,t){if(e==="change")return t}var Mf=!1;if(En){var Do;if(En){var Bo="oninput"in document;if(!Bo){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Bo=typeof Df.oninput=="function"}Do=Bo}else Do=!1;Mf=Do&&(!document.documentMode||9<document.documentMode)}function Bf(){ri&&(ri.detachEvent("onpropertychange",Of),si=ri=null)}function Of(e){if(e.propertyName==="value"&&Er(si)){var t=[];kf(t,si,e,Eo(e)),xf(dx,t)}}function fx(e,t,n){e==="focusin"?(Bf(),ri=t,si=n,ri.attachEvent("onpropertychange",Of)):e==="focusout"&&Bf()}function hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(si)}function mx(e,t){if(e==="click")return Er(t)}function gx(e,t){if(e==="input"||e==="change")return Er(t)}function px(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:px;function oi(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!Ht.call(t,r)||!Tt(e[r],t[r]))return!1}return!0}function Nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $f(e,t){var n=Nf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bx=En&&"documentMode"in document&&11>=document.documentMode,il=null,No=null,ci=null,$o=!1;function Hf(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$o||il==null||il!==br(l)||(l=il,"selectionStart"in l&&Oo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ci&&oi(ci,l)||(ci=l,l=cs(No,"onSelect"),0<l.length&&(t=new jr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=il)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rl={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Lo={},Gf={};En&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete rl.animationend.animation,delete rl.animationiteration.animation,delete rl.animationstart.animation),"TransitionEvent"in window||delete rl.transitionend.transition);function za(e){if(Lo[e])return Lo[e];if(!rl[e])return e;var t=rl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gf)return Lo[e]=t[n];return e}var Yf=za("animationend"),Vf=za("animationiteration"),qf=za("animationstart"),xx=za("transitionrun"),yx=za("transitionstart"),vx=za("transitioncancel"),Kf=za("transitionend"),Qf=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function an(e,t){Qf.set(e,t),wa(t,[e])}var Xf=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var n=Xf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:cf(t)},Xf.set(e,t),t)}return{value:e,source:t,stack:cf(t)}}var qt=[],sl=0,Ho=0;function _r(){for(var e=sl,t=Ho=sl=0;t<e;){var n=qt[t];qt[t++]=null;var l=qt[t];qt[t++]=null;var r=qt[t];qt[t++]=null;var o=qt[t];if(qt[t++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}o!==0&&Zf(n,r,o)}}function zr(e,t,n,l){qt[sl++]=e,qt[sl++]=t,qt[sl++]=n,qt[sl++]=l,Ho|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Go(e,t,n,l){return zr(e,t,n,l),Cr(e)}function ol(e,t){return zr(e,null,null,t),Cr(e)}function Zf(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,o=e.return;o!==null;)o.childLanes|=n,l=o.alternate,l!==null&&(l.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-At(n),e=o.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),o):null}function Cr(e){if(50<Bi)throw Bi=0,Xc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cl={};function Sx(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,l){return new Sx(e,t,n,l)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ff(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ar(e,t,n,l,r,o){var m=0;if(l=e,typeof e=="function")Yo(e)&&(m=1);else if(typeof e=="string")m=wy(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=kt(31,n,t,r),e.elementType=ae,e.lanes=o,e;case j:return Ca(n.children,r,o,t);case O:m=8,r|=24;break;case L:return e=kt(12,n,t,r|2),e.elementType=L,e.lanes=o,e;case U:return e=kt(13,n,t,r),e.elementType=U,e.lanes=o,e;case I:return e=kt(19,n,t,r),e.elementType=I,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case T:m=10;break e;case Z:m=9;break e;case V:m=11;break e;case $:m=14;break e;case X:m=16,l=null;break e}m=29,n=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=kt(m,n,t,r),t.elementType=e,t.type=l,t.lanes=o,t}function Ca(e,t,n,l){return e=kt(7,e,l,t),e.lanes=n,e}function Vo(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ul=[],dl=0,Tr=null,kr=0,Kt=[],Qt=0,Aa=null,zn=1,Cn="";function Ta(e,t){ul[dl++]=kr,ul[dl++]=Tr,Tr=e,kr=t}function Pf(e,t,n){Kt[Qt++]=zn,Kt[Qt++]=Cn,Kt[Qt++]=Aa,Aa=e;var l=zn;e=Cn;var r=32-At(l)-1;l&=~(1<<r),n+=1;var o=32-At(t)+r;if(30<o){var m=r-r%5;o=(l&(1<<m)-1).toString(32),l>>=m,r-=m,zn=1<<32-At(t)+r|n<<r|l,Cn=o+e}else zn=1<<o|n<<r|l,Cn=e}function Ko(e){e.return!==null&&(Ta(e,1),Pf(e,1,0))}function Qo(e){for(;e===Tr;)Tr=ul[--dl],ul[dl]=null,kr=ul[--dl],ul[dl]=null;for(;e===Aa;)Aa=Kt[--Qt],Kt[Qt]=null,Cn=Kt[--Qt],Kt[Qt]=null,zn=Kt[--Qt],Kt[Qt]=null}var mt=null,He=null,Se=!1,ka=null,gn=!1,Xo=Error(c(519));function Ra(e){var t=Error(c(418,""));throw fi(Vt(t,e)),Xo}function Wf(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ct]=e,t[bt]=l,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Ni.length;n++)pe(Ni[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),ff(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pr(t);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),mf(t,l.value,l.defaultValue,l.children),pr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||mg(t.textContent,n)?(l.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),l.onScroll!=null&&pe("scroll",t),l.onScrollEnd!=null&&pe("scrollend",t),l.onClick!=null&&(t.onclick=us),t=!0):t=!1,t||Ra(e)}function If(e){for(mt=e.return;mt;)switch(mt.tag){case 5:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:mt=mt.return}}function ui(e){if(e!==mt)return!1;if(!Se)return If(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cu(e.type,e.memoizedProps)),n=!n),n&&He&&Ra(e),If(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,sa(e.type)?(e=hu,hu=null,He=e):He=t):He=mt?rn(e.stateNode.nextSibling):null;return!0}function di(){He=mt=null,Se=!1}function Jf(){var e=ka;return e!==null&&(St===null?St=e:St.push.apply(St,e),ka=null),e}function fi(e){ka===null?ka=[e]:ka.push(e)}var Zo=Q(null),Ma=null,An=null;function Qn(e,t,n){W(Zo,t._currentValue),t._currentValue=n}function Tn(e){e._currentValue=Zo.current,P(Zo)}function Fo(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Po(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var m=r.child;o=o.firstContext;e:for(;o!==null;){var b=o;o=r;for(var E=0;E<t.length;E++)if(b.context===t[E]){o.lanes|=n,b=o.alternate,b!==null&&(b.lanes|=n),Fo(o.return,n,e),l||(m=null);break e}o=b.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(c(341));m.lanes|=n,o=m.alternate,o!==null&&(o.lanes|=n),Fo(m,n,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function hi(e,t,n,l){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var b=r.type;Tt(r.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(r===Pe.current){if(m=r.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Yi):e=[Yi])}r=r.return}e!==null&&Po(t,e,n,l),t.flags|=262144}function Rr(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){Ma=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return eh(Ma,e)}function Mr(e,t){return Ma===null&&Da(e),eh(e,t)}function eh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},An===null){if(e===null)throw Error(c(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return n}var jx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},wx=a.unstable_scheduleCallback,Ex=a.unstable_NormalPriority,Ze={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new jx,data:new Map,refCount:0}}function mi(e){e.refCount--,e.refCount===0&&wx(Ex,function(){e.controller.abort()})}var gi=null,Io=0,fl=0,hl=null;function _x(e,t){if(gi===null){var n=gi=[];Io=0,fl=eu(),hl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Io++,t.then(th,th),t}function th(){if(--Io===0&&gi!==null){hl!==null&&(hl.status="fulfilled");var e=gi;gi=null,fl=0,hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zx(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var nh=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&_x(e,t),nh!==null&&nh(e,t)};var Ba=Q(null);function Jo(){var e=Ba.current;return e!==null?e:De.pooledCache}function Dr(e,t){t===null?W(Ba,Ba.current):W(Ba,t.pool)}function ah(){var e=Jo();return e===null?null:{parent:Ze._currentValue,pool:e}}var pi=Error(c(460)),lh=Error(c(474)),Br=Error(c(542)),ec={then:function(){}};function ih(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Or(){}function rh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Or,Or),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oh(e),e;default:if(typeof t.status=="string")t.then(Or,Or);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oh(e),e}throw bi=t,pi}}var bi=null;function sh(){if(bi===null)throw Error(c(459));var e=bi;return bi=null,e}function oh(e){if(e===pi||e===Br)throw Error(c(483))}var Xn=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(_e&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=Cr(e),Zf(e,null,n),t}return zr(e,l,t,n),Cr(e)}function xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ef(e,n)}}function ac(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=m:o=o.next=m,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lc=!1;function yi(){if(lc){var e=hl;if(e!==null)throw e}}function vi(e,t,n,l){lc=!1;var r=e.updateQueue;Xn=!1;var o=r.firstBaseUpdate,m=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var E=b,D=E.next;E.next=null,m===null?o=D:m.next=D,m=E;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,b=Y.lastBaseUpdate,b!==m&&(b===null?Y.firstBaseUpdate=D:b.next=D,Y.lastBaseUpdate=E))}if(o!==null){var K=r.baseState;m=0,Y=D=E=null,b=o;do{var B=b.lane&-536870913,N=B!==b.lane;if(N?(xe&B)===B:(l&B)===B){B!==0&&B===fl&&(lc=!0),Y!==null&&(Y=Y.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var oe=e,ie=b;B=t;var Re=n;switch(ie.tag){case 1:if(oe=ie.payload,typeof oe=="function"){K=oe.call(Re,K,B);break e}K=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ie.payload,B=typeof oe=="function"?oe.call(Re,K,B):oe,B==null)break e;K=x({},K,B);break e;case 2:Xn=!0}}B=b.callback,B!==null&&(e.flags|=64,N&&(e.flags|=8192),N=r.callbacks,N===null?r.callbacks=[B]:N.push(B))}else N={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Y===null?(D=Y=N,E=K):Y=Y.next=N,m|=B;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;N=b,b=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);Y===null&&(E=K),r.baseState=E,r.firstBaseUpdate=D,r.lastBaseUpdate=Y,o===null&&(r.shared.lanes=0),aa|=m,e.lanes=m,e.memoizedState=K}}function ch(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function uh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ch(n[e],t)}var ml=Q(null),Nr=Q(0);function dh(e,t){e=Nn,W(Nr,e),W(ml,t),Nn=e|t.baseLanes}function ic(){W(Nr,Nn),W(ml,ml.current)}function rc(){Nn=Nr.current,P(ml),P(Nr)}var Pn=0,fe=null,Te=null,Ke=null,$r=!1,gl=!1,Oa=!1,Lr=0,Si=0,pl=null,Cx=0;function Ve(){throw Error(c(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function oc(e,t,n,l,r,o){return Pn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Zh:Fh,Oa=!1,o=n(l,r),Oa=!1,gl&&(o=hh(t,n,l,r)),fh(e),o}function fh(e){H.H=qr;var t=Te!==null&&Te.next!==null;if(Pn=0,Ke=Te=fe=null,$r=!1,Si=0,pl=null,t)throw Error(c(300));e===null||Ie||(e=e.dependencies,e!==null&&Rr(e)&&(Ie=!0))}function hh(e,t,n,l){fe=e;var r=0;do{if(gl&&(pl=null),Si=0,gl=!1,25<=r)throw Error(c(301));if(r+=1,Ke=Te=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=Bx,o=t(n,l)}while(gl);return o}function Ax(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?ji(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(fe.flags|=1024),t}function cc(){var e=Lr!==0;return Lr=0,e}function uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dc(e){if($r){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$r=!1}Pn=0,Ke=Te=fe=null,gl=!1,Si=Lr=0,pl=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?fe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ke===null?fe.memoizedState:Ke.next;if(t!==null)Ke=t,Te=e;else{if(e===null)throw fe.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ke===null?fe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ji(e){var t=Si;return Si+=1,pl===null&&(pl=[]),e=rh(pl,e,t),t=fe,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Zh:Fh),e}function Ur(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ji(e);if(e.$$typeof===T)return ut(e)}throw Error(c(438,String(e)))}function hc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fc(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Ce;return t.index++,n}function kn(e,t){return typeof t=="function"?t(e):t}function Hr(e){var t=Qe();return mc(t,Te,e)}function mc(e,t,n){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=n;var r=e.baseQueue,o=l.pending;if(o!==null){if(r!==null){var m=r.next;r.next=o.next,o.next=m}t.baseQueue=r=o,l.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var b=m=null,E=null,D=t,Y=!1;do{var K=D.lane&-536870913;if(K!==D.lane?(xe&K)===K:(Pn&K)===K){var B=D.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),K===fl&&(Y=!0);else if((Pn&B)===B){D=D.next,B===fl&&(Y=!0);continue}else K={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},E===null?(b=E=K,m=o):E=E.next=K,fe.lanes|=B,aa|=B;K=D.action,Oa&&n(o,K),o=D.hasEagerState?D.eagerState:n(o,K)}else B={lane:K,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},E===null?(b=E=B,m=o):E=E.next=B,fe.lanes|=K,aa|=K;D=D.next}while(D!==null&&D!==t);if(E===null?m=o:E.next=b,!Tt(o,e.memoizedState)&&(Ie=!0,Y&&(n=hl,n!==null)))throw n;e.memoizedState=o,e.baseState=m,e.baseQueue=E,l.lastRenderedState=o}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gc(e){var t=Qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do o=e(o,m.action),m=m.next;while(m!==r);Tt(o,t.memoizedState)||(Ie=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,l]}function mh(e,t,n){var l=fe,r=Qe(),o=Se;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var m=!Tt((Te||r).memoizedState,n);m&&(r.memoizedState=n,Ie=!0),r=r.queue;var b=bh.bind(null,l,r,e);if(wi(2048,8,b,[e]),r.getSnapshot!==t||m||Ke!==null&&Ke.memoizedState.tag&1){if(l.flags|=2048,bl(9,Gr(),ph.bind(null,l,r,n,t),null),De===null)throw Error(c(349));o||(Pn&124)!==0||gh(l,t,n)}return n}function gh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=fc(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ph(e,t,n,l){t.value=n,t.getSnapshot=l,xh(t)&&yh(e)}function bh(e,t,n){return n(function(){xh(t)&&yh(e)})}function xh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function yh(e){var t=ol(e,2);t!==null&&Ot(t,e,2)}function pc(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),Oa){Vn(!0);try{n()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:e},t}function vh(e,t,n,l){return e.baseState=n,mc(e,Te,typeof l=="function"?l:kn)}function Tx(e,t,n,l,r){if(Vr(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};H.T!==null?n(!0):o.isTransition=!1,l(o),n=t.pending,n===null?(o.next=t.pending=o,Sh(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Sh(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var o=H.T,m={};H.T=m;try{var b=n(r,l),E=H.S;E!==null&&E(m,b),jh(e,t,b)}catch(D){bc(e,t,D)}finally{H.T=o}}else try{o=n(r,l),jh(e,t,o)}catch(D){bc(e,t,D)}}function jh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){wh(e,t,l)},function(l){return bc(e,t,l)}):wh(e,t,n)}function wh(e,t,n){t.status="fulfilled",t.value=n,Eh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sh(e,n)))}function bc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Eh(t),t=t.next;while(t!==l)}e.action=null}function Eh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _h(e,t){return t}function zh(e,t){if(Se){var n=De.formState;if(n!==null){e:{var l=fe;if(Se){if(He){t:{for(var r=He,o=gn;r.nodeType!==8;){if(!o){r=null;break t}if(r=rn(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){He=rn(r.nextSibling),l=r.data==="F!";break e}}Ra(l)}l=!1}l&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_h,lastRenderedState:t},n.queue=l,n=Kh.bind(null,fe,l),l.dispatch=n,l=pc(!1),o=jc.bind(null,fe,!1,l.queue),l=yt(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=Tx.bind(null,fe,r,o,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function Ch(e){var t=Qe();return Ah(t,Te,e)}function Ah(e,t,n){if(t=mc(e,t,_h)[0],e=Hr(kn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ji(t)}catch(m){throw m===pi?Br:m}else l=t;t=Qe();var r=t.queue,o=r.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,bl(9,Gr(),kx.bind(null,r,n),null)),[l,o,e]}function kx(e,t){e.action=t}function Th(e){var t=Qe(),n=Te;if(n!==null)return Ah(t,n,e);Qe(),t=t.memoizedState,n=Qe();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function bl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=fe.updateQueue,t===null&&(t=fc(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Gr(){return{destroy:void 0,resource:void 0}}function kh(){return Qe().memoizedState}function Yr(e,t,n,l){var r=yt();l=l===void 0?null:l,fe.flags|=e,r.memoizedState=bl(1|t,Gr(),n,l)}function wi(e,t,n,l){var r=Qe();l=l===void 0?null:l;var o=r.memoizedState.inst;Te!==null&&l!==null&&sc(l,Te.memoizedState.deps)?r.memoizedState=bl(t,o,n,l):(fe.flags|=e,r.memoizedState=bl(1|t,o,n,l))}function Rh(e,t){Yr(8390656,8,e,t)}function Mh(e,t){wi(2048,8,e,t)}function Dh(e,t){return wi(4,2,e,t)}function Bh(e,t){return wi(4,4,e,t)}function Oh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){n=n!=null?n.concat([e]):null,wi(4,4,Oh.bind(null,t,e),n)}function xc(){}function $h(e,t){var n=Qe();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&sc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Lh(e,t){var n=Qe();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&sc(t,l[1]))return l[0];if(l=e(),Oa){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[l,t],l}function yc(e,t,n){return n===void 0||(Pn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Gm(),fe.lanes|=e,aa|=e,n)}function Uh(e,t,n,l){return Tt(n,t)?n:ml.current!==null?(e=yc(e,n,l),Tt(e,t)||(Ie=!0),e):(Pn&42)===0?(Ie=!0,e.memoizedState=n):(e=Gm(),fe.lanes|=e,aa|=e,t)}function Hh(e,t,n,l,r){var o=F.p;F.p=o!==0&&8>o?o:8;var m=H.T,b={};H.T=b,jc(e,!1,t,n);try{var E=r(),D=H.S;if(D!==null&&D(b,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var Y=zx(E,l);Ei(e,t,Y,Bt(e))}else Ei(e,t,l,Bt(e))}catch(K){Ei(e,t,{then:function(){},status:"rejected",reason:K},Bt())}finally{F.p=o,H.T=m}}function Rx(){}function vc(e,t,n,l){if(e.tag!==5)throw Error(c(476));var r=Gh(e).queue;Hh(e,r,t,le,n===null?Rx:function(){return Yh(e),n(l)})}function Gh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yh(e){var t=Gh(e).next.queue;Ei(e,t,{},Bt())}function Sc(){return ut(Yi)}function Vh(){return Qe().memoizedState}function qh(){return Qe().memoizedState}function Mx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Bt();e=Zn(n);var l=Fn(t,e,n);l!==null&&(Ot(l,t,n),xi(l,t,n)),t={cache:Wo()},e.payload=t;return}t=t.return}}function Dx(e,t,n){var l=Bt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vr(e)?Qh(t,n):(n=Go(e,t,n,l),n!==null&&(Ot(n,e,l),Xh(n,t,l)))}function Kh(e,t,n){var l=Bt();Ei(e,t,n,l)}function Ei(e,t,n,l){var r={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vr(e))Qh(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,b=o(m,n);if(r.hasEagerState=!0,r.eagerState=b,Tt(b,m))return zr(e,t,r,0),De===null&&_r(),!1}catch{}finally{}if(n=Go(e,t,r,l),n!==null)return Ot(n,e,l),Xh(n,t,l),!0}return!1}function jc(e,t,n,l){if(l={lane:2,revertLane:eu(),action:l,hasEagerState:!1,eagerState:null,next:null},Vr(e)){if(t)throw Error(c(479))}else t=Go(e,n,l,2),t!==null&&Ot(t,e,2)}function Vr(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Qh(e,t){gl=$r=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ef(e,n)}}var qr={readContext:ut,use:Ur,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve},Zh={readContext:ut,use:Ur,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Rh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yr(4194308,4,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yr(4194308,4,e,t)},useInsertionEffect:function(e,t){Yr(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var l=e();if(Oa){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=yt();if(n!==void 0){var r=n(t);if(Oa){Vn(!0);try{n(t)}finally{Vn(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Dx.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=pc(e);var t=e.queue,n=Kh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xc,useDeferredValue:function(e,t){var n=yt();return yc(n,e,t)},useTransition:function(){var e=pc(!1);return e=Hh.bind(null,fe,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=fe,r=yt();if(Se){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),De===null)throw Error(c(349));(xe&124)!==0||gh(l,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Rh(bh.bind(null,l,o,e),[e]),l.flags|=2048,bl(9,Gr(),ph.bind(null,l,o,n,t),null),n},useId:function(){var e=yt(),t=De.identifierPrefix;if(Se){var n=Cn,l=zn;n=(l&~(1<<32-At(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Cx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Sc,useFormState:zh,useActionState:zh,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=jc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:hc,useCacheRefresh:function(){return yt().memoizedState=Mx.bind(null,fe)}},Fh={readContext:ut,use:Ur,useCallback:$h,useContext:ut,useEffect:Mh,useImperativeHandle:Nh,useInsertionEffect:Dh,useLayoutEffect:Bh,useMemo:Lh,useReducer:Hr,useRef:kh,useState:function(){return Hr(kn)},useDebugValue:xc,useDeferredValue:function(e,t){var n=Qe();return Uh(n,Te.memoizedState,e,t)},useTransition:function(){var e=Hr(kn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ji(e),t]},useSyncExternalStore:mh,useId:Vh,useHostTransitionStatus:Sc,useFormState:Ch,useActionState:Ch,useOptimistic:function(e,t){var n=Qe();return vh(n,Te,e,t)},useMemoCache:hc,useCacheRefresh:qh},Bx={readContext:ut,use:Ur,useCallback:$h,useContext:ut,useEffect:Mh,useImperativeHandle:Nh,useInsertionEffect:Dh,useLayoutEffect:Bh,useMemo:Lh,useReducer:gc,useRef:kh,useState:function(){return gc(kn)},useDebugValue:xc,useDeferredValue:function(e,t){var n=Qe();return Te===null?yc(n,e,t):Uh(n,Te.memoizedState,e,t)},useTransition:function(){var e=gc(kn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ji(e),t]},useSyncExternalStore:mh,useId:Vh,useHostTransitionStatus:Sc,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var n=Qe();return Te!==null?vh(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hc,useCacheRefresh:qh},xl=null,_i=0;function Kr(e){var t=_i;return _i+=1,xl===null&&(xl=[]),rh(xl,e,t)}function zi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qr(e,t){throw t.$$typeof===S?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ph(e){var t=e._init;return t(e._payload)}function Wh(e){function t(R,A){if(e){var M=R.deletions;M===null?(R.deletions=[A],R.flags|=16):M.push(A)}}function n(R,A){if(!e)return null;for(;A!==null;)t(R,A),A=A.sibling;return null}function l(R){for(var A=new Map;R!==null;)R.key!==null?A.set(R.key,R):A.set(R.index,R),R=R.sibling;return A}function r(R,A){return R=_n(R,A),R.index=0,R.sibling=null,R}function o(R,A,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<A?(R.flags|=67108866,A):M):(R.flags|=67108866,A)):(R.flags|=1048576,A)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function b(R,A,M,q){return A===null||A.tag!==6?(A=Vo(M,R.mode,q),A.return=R,A):(A=r(A,M),A.return=R,A)}function E(R,A,M,q){var J=M.type;return J===j?Y(R,A,M.props.children,q,M.key):A!==null&&(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===X&&Ph(J)===A.type)?(A=r(A,M.props),zi(A,M),A.return=R,A):(A=Ar(M.type,M.key,M.props,null,R.mode,q),zi(A,M),A.return=R,A)}function D(R,A,M,q){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=qo(M,R.mode,q),A.return=R,A):(A=r(A,M.children||[]),A.return=R,A)}function Y(R,A,M,q,J){return A===null||A.tag!==7?(A=Ca(M,R.mode,q,J),A.return=R,A):(A=r(A,M),A.return=R,A)}function K(R,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Vo(""+A,R.mode,M),A.return=R,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return M=Ar(A.type,A.key,A.props,null,R.mode,M),zi(M,A),M.return=R,M;case C:return A=qo(A,R.mode,M),A.return=R,A;case X:var q=A._init;return A=q(A._payload),K(R,A,M)}if(Ae(A)||Ue(A))return A=Ca(A,R.mode,M,null),A.return=R,A;if(typeof A.then=="function")return K(R,Kr(A),M);if(A.$$typeof===T)return K(R,Mr(R,A),M);Qr(R,A)}return null}function B(R,A,M,q){var J=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return J!==null?null:b(R,A,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return M.key===J?E(R,A,M,q):null;case C:return M.key===J?D(R,A,M,q):null;case X:return J=M._init,M=J(M._payload),B(R,A,M,q)}if(Ae(M)||Ue(M))return J!==null?null:Y(R,A,M,q,null);if(typeof M.then=="function")return B(R,A,Kr(M),q);if(M.$$typeof===T)return B(R,A,Mr(R,M),q);Qr(R,M)}return null}function N(R,A,M,q,J){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return R=R.get(M)||null,b(A,R,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return R=R.get(q.key===null?M:q.key)||null,E(A,R,q,J);case C:return R=R.get(q.key===null?M:q.key)||null,D(A,R,q,J);case X:var he=q._init;return q=he(q._payload),N(R,A,M,q,J)}if(Ae(q)||Ue(q))return R=R.get(M)||null,Y(A,R,q,J,null);if(typeof q.then=="function")return N(R,A,M,Kr(q),J);if(q.$$typeof===T)return N(R,A,M,Mr(A,q),J);Qr(A,q)}return null}function oe(R,A,M,q){for(var J=null,he=null,ne=A,se=A=0,et=null;ne!==null&&se<M.length;se++){ne.index>se?(et=ne,ne=null):et=ne.sibling;var ye=B(R,ne,M[se],q);if(ye===null){ne===null&&(ne=et);break}e&&ne&&ye.alternate===null&&t(R,ne),A=o(ye,A,se),he===null?J=ye:he.sibling=ye,he=ye,ne=et}if(se===M.length)return n(R,ne),Se&&Ta(R,se),J;if(ne===null){for(;se<M.length;se++)ne=K(R,M[se],q),ne!==null&&(A=o(ne,A,se),he===null?J=ne:he.sibling=ne,he=ne);return Se&&Ta(R,se),J}for(ne=l(ne);se<M.length;se++)et=N(ne,R,se,M[se],q),et!==null&&(e&&et.alternate!==null&&ne.delete(et.key===null?se:et.key),A=o(et,A,se),he===null?J=et:he.sibling=et,he=et);return e&&ne.forEach(function(fa){return t(R,fa)}),Se&&Ta(R,se),J}function ie(R,A,M,q){if(M==null)throw Error(c(151));for(var J=null,he=null,ne=A,se=A=0,et=null,ye=M.next();ne!==null&&!ye.done;se++,ye=M.next()){ne.index>se?(et=ne,ne=null):et=ne.sibling;var fa=B(R,ne,ye.value,q);if(fa===null){ne===null&&(ne=et);break}e&&ne&&fa.alternate===null&&t(R,ne),A=o(fa,A,se),he===null?J=fa:he.sibling=fa,he=fa,ne=et}if(ye.done)return n(R,ne),Se&&Ta(R,se),J;if(ne===null){for(;!ye.done;se++,ye=M.next())ye=K(R,ye.value,q),ye!==null&&(A=o(ye,A,se),he===null?J=ye:he.sibling=ye,he=ye);return Se&&Ta(R,se),J}for(ne=l(ne);!ye.done;se++,ye=M.next())ye=N(ne,R,se,ye.value,q),ye!==null&&(e&&ye.alternate!==null&&ne.delete(ye.key===null?se:ye.key),A=o(ye,A,se),he===null?J=ye:he.sibling=ye,he=ye);return e&&ne.forEach(function(Oy){return t(R,Oy)}),Se&&Ta(R,se),J}function Re(R,A,M,q){if(typeof M=="object"&&M!==null&&M.type===j&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case w:e:{for(var J=M.key;A!==null;){if(A.key===J){if(J=M.type,J===j){if(A.tag===7){n(R,A.sibling),q=r(A,M.props.children),q.return=R,R=q;break e}}else if(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===X&&Ph(J)===A.type){n(R,A.sibling),q=r(A,M.props),zi(q,M),q.return=R,R=q;break e}n(R,A);break}else t(R,A);A=A.sibling}M.type===j?(q=Ca(M.props.children,R.mode,q,M.key),q.return=R,R=q):(q=Ar(M.type,M.key,M.props,null,R.mode,q),zi(q,M),q.return=R,R=q)}return m(R);case C:e:{for(J=M.key;A!==null;){if(A.key===J)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){n(R,A.sibling),q=r(A,M.children||[]),q.return=R,R=q;break e}else{n(R,A);break}else t(R,A);A=A.sibling}q=qo(M,R.mode,q),q.return=R,R=q}return m(R);case X:return J=M._init,M=J(M._payload),Re(R,A,M,q)}if(Ae(M))return oe(R,A,M,q);if(Ue(M)){if(J=Ue(M),typeof J!="function")throw Error(c(150));return M=J.call(M),ie(R,A,M,q)}if(typeof M.then=="function")return Re(R,A,Kr(M),q);if(M.$$typeof===T)return Re(R,A,Mr(R,M),q);Qr(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(n(R,A.sibling),q=r(A,M),q.return=R,R=q):(n(R,A),q=Vo(M,R.mode,q),q.return=R,R=q),m(R)):n(R,A)}return function(R,A,M,q){try{_i=0;var J=Re(R,A,M,q);return xl=null,J}catch(ne){if(ne===pi||ne===Br)throw ne;var he=kt(29,ne,null,R.mode);return he.lanes=q,he.return=R,he}finally{}}}var yl=Wh(!0),Ih=Wh(!1),Xt=Q(null),pn=null;function Wn(e){var t=e.alternate;W(Fe,Fe.current&1),W(Xt,e),pn===null&&(t===null||ml.current!==null||t.memoizedState!==null)&&(pn=e)}function Jh(e){if(e.tag===22){if(W(Fe,Fe.current),W(Xt,e),pn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(pn=e)}}else In()}function In(){W(Fe,Fe.current),W(Xt,Xt.current)}function Rn(e){P(Xt),pn===e&&(pn=null),P(Fe)}var Fe=Q(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||fu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Bt(),r=Zn(l);r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,l),t!==null&&(Ot(t,e,l),xi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Bt(),r=Zn(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,l),t!==null&&(Ot(t,e,l),xi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bt(),l=Zn(n);l.tag=2,t!=null&&(l.callback=t),t=Fn(e,l,n),t!==null&&(Ot(t,e,n),xi(t,e,n))}};function em(e,t,n,l,r,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,m):t.prototype&&t.prototype.isPureReactComponent?!oi(n,l)||!oi(r,o):!0}function tm(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var Zr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function nm(e){Zr(e)}function am(e){console.error(e)}function lm(e){Zr(e)}function Fr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function im(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function _c(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Fr(e,t)},n}function rm(e){return e=Zn(e),e.tag=3,e}function sm(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=l.value;e.payload=function(){return r(o)},e.callback=function(){im(t,n,l)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){im(t,n,l),typeof r!="function"&&(la===null?la=new Set([this]):la.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Ox(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&hi(t,n,r,!0),n=Xt.current,n!==null){switch(n.tag){case 13:return pn===null?Fc():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===ec?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Wc(e,l,r)),!1;case 22:return n.flags|=65536,l===ec?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Wc(e,l,r)),!1}throw Error(c(435,n.tag))}return Wc(e,l,r),Fc(),!1}if(Se)return t=Xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==Xo&&(e=Error(c(422),{cause:l}),fi(Vt(e,n)))):(l!==Xo&&(t=Error(c(423),{cause:l}),fi(Vt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Vt(l,n),r=_c(e.stateNode,l,r),ac(e,r),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:l});if(o=Vt(o,n),Di===null?Di=[o]:Di.push(o),Ge!==4&&(Ge=2),t===null)return!0;l=Vt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=_c(n.stateNode,l,e),ac(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(la===null||!la.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=rm(r),sm(r,e,n,l),ac(n,r),!1}n=n.return}while(n!==null);return!1}var om=Error(c(461)),Ie=!1;function it(e,t,n,l){t.child=e===null?Ih(t,null,n,l):yl(t,e.child,n,l)}function cm(e,t,n,l,r){n=n.render;var o=t.ref;if("ref"in l){var m={};for(var b in l)b!=="ref"&&(m[b]=l[b])}else m=l;return Da(t),l=oc(e,t,n,m,o,r),b=cc(),e!==null&&!Ie?(uc(e,t,r),Mn(e,t,r)):(Se&&b&&Ko(t),t.flags|=1,it(e,t,l,r),t.child)}function um(e,t,n,l,r){if(e===null){var o=n.type;return typeof o=="function"&&!Yo(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,dm(e,t,o,l,r)):(e=Ar(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Dc(e,r)){var m=o.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(m,l)&&e.ref===t.ref)return Mn(e,t,r)}return t.flags|=1,e=_n(o,l),e.ref=t.ref,e.return=t,t.child=e}function dm(e,t,n,l,r){if(e!==null){var o=e.memoizedProps;if(oi(o,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=o,Dc(e,r))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,Mn(e,t,r)}return zc(e,t,n,l,r)}function fm(e,t,n){var l=t.pendingProps,r=l.children,o=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=o!==null?o.baseLanes|n:n,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;t.childLanes=o&~l}else t.childLanes=0,t.child=null;return hm(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dr(t,o!==null?o.cachePool:null),o!==null?dh(t,o):ic(),Jh(t);else return t.lanes=t.childLanes=536870912,hm(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Dr(t,o.cachePool),dh(t,o),In(),t.memoizedState=null):(e!==null&&Dr(t,null),ic(),In());return it(e,t,r,n),t.child}function hm(e,t,n,l){var r=Jo();return r=r===null?null:{parent:Ze._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Dr(t,null),ic(),Jh(t),e!==null&&hi(e,t,l,!0),null}function Pr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zc(e,t,n,l,r){return Da(t),n=oc(e,t,n,l,void 0,r),l=cc(),e!==null&&!Ie?(uc(e,t,r),Mn(e,t,r)):(Se&&l&&Ko(t),t.flags|=1,it(e,t,n,r),t.child)}function mm(e,t,n,l,r,o){return Da(t),t.updateQueue=null,n=hh(t,l,n,r),fh(e),l=cc(),e!==null&&!Ie?(uc(e,t,o),Mn(e,t,o)):(Se&&l&&Ko(t),t.flags|=1,it(e,t,n,o),t.child)}function gm(e,t,n,l,r){if(Da(t),t.stateNode===null){var o=cl,m=n.contextType;typeof m=="object"&&m!==null&&(o=ut(m)),o=new n(l,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ec,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=l,o.state=t.memoizedState,o.refs={},tc(t),m=n.contextType,o.context=typeof m=="object"&&m!==null?ut(m):cl,o.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(wc(t,n,m,l),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&Ec.enqueueReplaceState(o,o.state,null),vi(t,l,o,r),yi(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){o=t.stateNode;var b=t.memoizedProps,E=Na(n,b);o.props=E;var D=o.context,Y=n.contextType;m=cl,typeof Y=="object"&&Y!==null&&(m=ut(Y));var K=n.getDerivedStateFromProps;Y=typeof K=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,Y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||D!==m)&&tm(t,o,l,m),Xn=!1;var B=t.memoizedState;o.state=B,vi(t,l,o,r),yi(),D=t.memoizedState,b||B!==D||Xn?(typeof K=="function"&&(wc(t,n,K,l),D=t.memoizedState),(E=Xn||em(t,n,E,l,B,D,m))?(Y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=D),o.props=l,o.state=D,o.context=m,l=E):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{o=t.stateNode,nc(e,t),m=t.memoizedProps,Y=Na(n,m),o.props=Y,K=t.pendingProps,B=o.context,D=n.contextType,E=cl,typeof D=="object"&&D!==null&&(E=ut(D)),b=n.getDerivedStateFromProps,(D=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==K||B!==E)&&tm(t,o,l,E),Xn=!1,B=t.memoizedState,o.state=B,vi(t,l,o,r),yi();var N=t.memoizedState;m!==K||B!==N||Xn||e!==null&&e.dependencies!==null&&Rr(e.dependencies)?(typeof b=="function"&&(wc(t,n,b,l),N=t.memoizedState),(Y=Xn||em(t,n,Y,l,B,N,E)||e!==null&&e.dependencies!==null&&Rr(e.dependencies))?(D||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,N,E),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,N,E)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),o.props=l,o.state=N,o.context=E,l=Y):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),l=!1)}return o=l,Pr(e,t),l=(t.flags&128)!==0,o||l?(o=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&l?(t.child=yl(t,e.child,null,r),t.child=yl(t,null,n,r)):it(e,t,n,r),t.memoizedState=o.state,e=t.child):e=Mn(e,t,r),e}function pm(e,t,n,l){return di(),t.flags|=256,it(e,t,n,l),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ac(e){return{baseLanes:e,cachePool:ah()}}function Tc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zt),e}function bm(e,t,n){var l=t.pendingProps,r=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(r?Wn(t):In(),Se){var b=He,E;if(E=b){e:{for(E=b,b=gn;E.nodeType!==8;){if(!b){b=null;break e}if(E=rn(E.nextSibling),E===null){b=null;break e}}b=E}b!==null?(t.memoizedState={dehydrated:b,treeContext:Aa!==null?{id:zn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},E=kt(18,null,null,0),E.stateNode=b,E.return=t,t.child=E,mt=t,He=null,E=!0):E=!1}E||Ra(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return fu(b)?t.lanes=32:t.lanes=536870912,null;Rn(t)}return b=l.children,l=l.fallback,r?(In(),r=t.mode,b=Wr({mode:"hidden",children:b},r),l=Ca(l,r,n,null),b.return=t,l.return=t,b.sibling=l,t.child=b,r=t.child,r.memoizedState=Ac(n),r.childLanes=Tc(e,m,n),t.memoizedState=Cc,l):(Wn(t),kc(t,b))}if(E=e.memoizedState,E!==null&&(b=E.dehydrated,b!==null)){if(o)t.flags&256?(Wn(t),t.flags&=-257,t=Rc(e,t,n)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),r=l.fallback,b=t.mode,l=Wr({mode:"visible",children:l.children},b),r=Ca(r,b,n,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,yl(t,e.child,null,n),l=t.child,l.memoizedState=Ac(n),l.childLanes=Tc(e,m,n),t.memoizedState=Cc,t=r);else if(Wn(t),fu(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var D=m.dgst;m=D,l=Error(c(419)),l.stack="",l.digest=m,fi({value:l,source:null,stack:null}),t=Rc(e,t,n)}else if(Ie||hi(e,t,n,!1),m=(n&e.childLanes)!==0,Ie||m){if(m=De,m!==null&&(l=n&-n,l=(l&42)!==0?1:ho(l),l=(l&(m.suspendedLanes|n))!==0?0:l,l!==0&&l!==E.retryLane))throw E.retryLane=l,ol(e,l),Ot(m,e,l),om;b.data==="$?"||Fc(),t=Rc(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,He=rn(b.nextSibling),mt=t,Se=!0,ka=null,gn=!1,e!==null&&(Kt[Qt++]=zn,Kt[Qt++]=Cn,Kt[Qt++]=Aa,zn=e.id,Cn=e.overflow,Aa=t),t=kc(t,l.children),t.flags|=4096);return t}return r?(In(),r=l.fallback,b=t.mode,E=e.child,D=E.sibling,l=_n(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,D!==null?r=_n(D,r):(r=Ca(r,b,n,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,l=r,r=t.child,b=e.child.memoizedState,b===null?b=Ac(n):(E=b.cachePool,E!==null?(D=Ze._currentValue,E=E.parent!==D?{parent:D,pool:D}:E):E=ah(),b={baseLanes:b.baseLanes|n,cachePool:E}),r.memoizedState=b,r.childLanes=Tc(e,m,n),t.memoizedState=Cc,l):(Wn(t),n=e.child,e=n.sibling,n=_n(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function kc(e,t){return t=Wr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wr(e,t){return e=kt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rc(e,t,n){return yl(t,e.child,null,n),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Fo(e.return,t,n)}function Mc(e,t,n,l,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=r)}function ym(e,t,n){var l=t.pendingProps,r=l.revealOrder,o=l.tail;if(it(e,t,l.children,n),l=Fe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xm(e,n,t);else if(e.tag===19)xm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(W(Fe,l),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Mc(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Xr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Mc(t,!0,n,null,o);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(hi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Rr(e)))}function Nx(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),Qn(t,Ze,e.memoizedState.cache),di();break;case 27:case 5:Sa(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bm(e,t,n):(Wn(t),e=Mn(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(hi(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return ym(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),W(Fe,Fe.current),l)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n);case 24:Qn(t,Ze,e.memoizedState.cache)}return Mn(e,t,n)}function vm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Dc(e,n)&&(t.flags&128)===0)return Ie=!1,Nx(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,Se&&(t.flags&1048576)!==0&&Pf(t,kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,r=l._init;if(l=r(l._payload),t.type=l,typeof l=="function")Yo(l)?(e=Na(l,e),t.tag=1,t=gm(null,t,l,e,n)):(t.tag=0,t=zc(null,t,l,e,n));else{if(l!=null){if(r=l.$$typeof,r===V){t.tag=11,t=cm(null,t,l,e,n);break e}else if(r===$){t.tag=14,t=um(null,t,l,e,n);break e}}throw t=lt(l)||l,Error(c(306,t,""))}}return t;case 0:return zc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=Na(l,t.pendingProps),gm(e,t,l,r,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var o=t.memoizedState;r=o.element,nc(e,t),vi(t,l,null,n);var m=t.memoizedState;if(l=m.cache,Qn(t,Ze,l),l!==o.cache&&Po(t,[Ze],n,!0),yi(),l=m.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=pm(e,t,l,n);break e}else if(l!==r){r=Vt(Error(c(424)),t),fi(r),t=pm(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=rn(e.firstChild),mt=t,Se=!0,ka=null,gn=!0,n=Ih(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(di(),l===r){t=Mn(e,t,n);break e}it(e,t,l,n)}t=t.child}return t;case 26:return Pr(e,t),e===null?(n=Eg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,l=ds(re.current).createElement(n),l[ct]=t,l[bt]=e,st(l,n,e),We(l),t.stateNode=l):t.memoizedState=Eg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Sa(t),e===null&&Se&&(l=t.stateNode=Sg(t.type,t.pendingProps,re.current),mt=t,gn=!0,r=He,sa(t.type)?(hu=r,He=rn(l.firstChild)):He=r),it(e,t,t.pendingProps.children,n),Pr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((r=l=He)&&(l=uy(l,t.type,t.pendingProps,gn),l!==null?(t.stateNode=l,mt=t,He=rn(l.firstChild),gn=!1,r=!0):r=!1),r||Ra(t)),Sa(t),r=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,l=o.children,cu(r,o)?l=null:m!==null&&cu(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=oc(e,t,Ax,null,null,n),Yi._currentValue=r),Pr(e,t),it(e,t,l,n),t.child;case 6:return e===null&&Se&&((e=n=He)&&(n=dy(n,t.pendingProps,gn),n!==null?(t.stateNode=n,mt=t,He=null,e=!0):e=!1),e||Ra(t)),null;case 13:return bm(e,t,n);case 4:return je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=yl(t,null,l,n):it(e,t,l,n),t.child;case 11:return cm(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Qn(t,t.type,l.value),it(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,Da(t),r=ut(r),l=l(r),t.flags|=1,it(e,t,l,n),t.child;case 14:return um(e,t,t.type,t.pendingProps,n);case 15:return dm(e,t,t.type,t.pendingProps,n);case 19:return ym(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Wr(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=_n(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return fm(e,t,n);case 24:return Da(t),l=ut(Ze),e===null?(r=Jo(),r===null&&(r=De,o=Wo(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:l,cache:r},tc(t),Qn(t,Ze,r)):((e.lanes&n)!==0&&(nc(e,t),vi(t,null,null,n),yi()),r=e.memoizedState,o=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Ze,l)):(l=o.cache,Qn(t,Ze,l),l!==r.cache&&Po(t,[Ze],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Dn(e){e.flags|=4}function Sm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tg(t)){if(t=Xt.current,t!==null&&((xe&4194048)===xe?pn!==null:(xe&62914560)!==xe&&(xe&536870912)===0||t!==pn))throw bi=ec,lh;e.flags|=8192}}function Ir(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Id():536870912,e.lanes|=t,wl|=t)}function Ci(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function $x(e,t,n){var l=t.pendingProps;switch(Qo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Tn(Ze),ot(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ui(t)?Dn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jf())),Le(t),null;case 26:return n=t.memoizedState,e===null?(Dn(t),n!==null?(Le(t),Sm(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Dn(t),Le(t),Sm(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==l&&Dn(t),Le(t),t.flags&=-16777217),null;case 27:jn(t),n=re.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Dn(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=te.current,ui(t)?Wf(t):(e=Sg(r,l,n),t.stateNode=e,Dn(t))}return Le(t),null;case 5:if(jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Dn(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(e=te.current,ui(t))Wf(t);else{switch(r=ds(re.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}e[ct]=t,e[bt]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(st(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Dn(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Dn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,ui(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=mt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||mg(e.nodeValue,n)),e||Ra(t)}else e=ds(e).createTextNode(l),e[ct]=t,t.stateNode=e}return Le(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ui(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[ct]=t}else di(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),r=!1}else r=Jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Rn(t),t):(Rn(t),null)}if(Rn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool);var o=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==r&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ir(t,t.updateQueue),Le(t),null;case 4:return ot(),e===null&&lu(t.stateNode.containerInfo),Le(t),null;case 10:return Tn(t.type),Le(t),null;case 19:if(P(Fe),r=t.memoizedState,r===null)return Le(t),null;if(l=(t.flags&128)!==0,o=r.rendering,o===null)if(l)Ci(r,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,Ci(r,!1),e=o.updateQueue,t.updateQueue=e,Ir(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ff(n,e),n=n.sibling;return W(Fe,Fe.current&1|2),t.child}e=e.sibling}r.tail!==null&&mn()>ts&&(t.flags|=128,l=!0,Ci(r,!1),t.lanes=4194304)}else{if(!l)if(e=Xr(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ir(t,e),Ci(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Se)return Le(t),null}else 2*mn()-r.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,l=!0,Ci(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e!==null?e.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=mn(),t.sibling=null,e=Fe.current,W(Fe,l?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return Rn(t),rc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Ir(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&P(Ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Tn(Ze),Le(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Lx(e,t){switch(Qo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(Ze),ot(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jn(t),null;case 13:if(Rn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Fe),null;case 4:return ot(),null;case 10:return Tn(t.type),null;case 22:case 23:return Rn(t),rc(),e!==null&&P(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(Ze),null;case 25:return null;default:return null}}function jm(e,t){switch(Qo(t),t.tag){case 3:Tn(Ze),ot();break;case 26:case 27:case 5:jn(t);break;case 4:ot();break;case 13:Rn(t);break;case 19:P(Fe);break;case 10:Tn(t.type);break;case 22:case 23:Rn(t),rc(),e!==null&&P(Ba);break;case 24:Tn(Ze)}}function Ai(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var o=n.create,m=n.inst;l=o(),m.destroy=l}n=n.next}while(n!==r)}}catch(b){Me(t,t.return,b)}}function Jn(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var o=r.next;l=o;do{if((l.tag&e)===e){var m=l.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,r=t;var E=n,D=b;try{D()}catch(Y){Me(r,E,Y)}}}l=l.next}while(l!==o)}}catch(Y){Me(t,t.return,Y)}}function wm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{uh(t,n)}catch(l){Me(e,e.return,l)}}}function Em(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Me(e,t,l)}}function Ti(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Me(e,t,r)}}function bn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Me(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function _m(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Me(e,e.return,r)}}function Bc(e,t,n){try{var l=e.stateNode;iy(l,e.type,n,t),l[bt]=t}catch(r){Me(e,e.return,r)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us));else if(l!==4&&(l===27&&sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}function Jr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jr(e,t,n),e=e.sibling;e!==null;)Jr(e,t,n),e=e.sibling}function Cm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);st(t,l,n),t[ct]=e,t[bt]=n}catch(o){Me(e,e.return,o)}}var Bn=!1,qe=!1,$c=!1,Am=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Ux(e,t){if(e=e.containerInfo,su=bs,e=Uf(e),Oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var m=0,b=-1,E=-1,D=0,Y=0,K=e,B=null;t:for(;;){for(var N;K!==n||r!==0&&K.nodeType!==3||(b=m+r),K!==o||l!==0&&K.nodeType!==3||(E=m+l),K.nodeType===3&&(m+=K.nodeValue.length),(N=K.firstChild)!==null;)B=K,K=N;for(;;){if(K===e)break t;if(B===n&&++D===r&&(b=m),B===o&&++Y===l&&(E=m),(N=K.nextSibling)!==null)break;K=B,B=K.parentNode}K=N}n=b===-1||E===-1?null:{start:b,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},bs=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,l=n.stateNode;try{var oe=Na(n.type,r,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(oe,o),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Me(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Tm(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ea(e,n),l&4&&Ai(5,n);break;case 1:if(ea(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Me(n,n.return,m)}else{var r=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Me(n,n.return,m)}}l&64&&wm(n),l&512&&Ti(n,n.return);break;case 3:if(ea(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{uh(e,t)}catch(m){Me(n,n.return,m)}}break;case 27:t===null&&l&4&&Cm(n);case 26:case 5:ea(e,n),t===null&&l&4&&_m(n),l&512&&Ti(n,n.return);break;case 12:ea(e,n);break;case 13:ea(e,n),l&4&&Mm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zx.bind(null,n),fy(e,n))));break;case 22:if(l=n.memoizedState!==null||Bn,!l){t=t!==null&&t.memoizedState!==null||qe,r=Bn;var o=qe;Bn=l,(qe=t)&&!o?ta(e,n,(n.subtreeFlags&8772)!==0):ea(e,n),Bn=r,qe=o}break;case 30:break;default:ea(e,n)}}function km(e){var t=e.alternate;t!==null&&(e.alternate=null,km(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,vt=!1;function On(e,t,n){for(n=n.child;n!==null;)Rm(e,t,n),n=n.sibling}function Rm(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 26:qe||bn(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||bn(n,t);var l=Ne,r=vt;sa(n.type)&&(Ne=n.stateNode,vt=!1),On(e,t,n),Li(n.stateNode),Ne=l,vt=r;break;case 5:qe||bn(n,t);case 6:if(l=Ne,r=vt,Ne=null,On(e,t,n),Ne=l,vt=r,Ne!==null)if(vt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(o){Me(n,t,o)}else try{Ne.removeChild(n.stateNode)}catch(o){Me(n,t,o)}break;case 18:Ne!==null&&(vt?(e=Ne,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qi(e)):yg(Ne,n.stateNode));break;case 4:l=Ne,r=vt,Ne=n.stateNode.containerInfo,vt=!0,On(e,t,n),Ne=l,vt=r;break;case 0:case 11:case 14:case 15:qe||Jn(2,n,t),qe||Jn(4,n,t),On(e,t,n);break;case 1:qe||(bn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Em(n,t,l)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:qe=(l=qe)||n.memoizedState!==null,On(e,t,n),qe=l;break;default:On(e,t,n)}}function Mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qi(e)}catch(n){Me(t,t.return,n)}}function Hx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Am),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Am),t;default:throw Error(c(435,e.tag))}}function Lc(e,t){var n=Hx(e);t.forEach(function(l){var r=Fx.bind(null,e,l);n.has(l)||(n.add(l),l.then(r,r))})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],o=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(sa(b.type)){Ne=b.stateNode,vt=!1;break e}break;case 5:Ne=b.stateNode,vt=!1;break e;case 3:case 4:Ne=b.stateNode.containerInfo,vt=!0;break e}b=b.return}if(Ne===null)throw Error(c(160));Rm(o,m,r),Ne=null,vt=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Dm(t,e),t=t.sibling}var ln=null;function Dm(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Mt(e),l&4&&(Jn(3,e,e.return),Ai(3,e),Jn(5,e,e.return));break;case 1:Rt(t,e),Mt(e),l&512&&(qe||n===null||bn(n,n.return)),l&64&&Bn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=ln;if(Rt(t,e),Mt(e),l&512&&(qe||n===null||bn(n,n.return)),l&4){var o=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Jl]||o[ct]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(l),r.head.insertBefore(o,r.querySelector("head > title"))),st(o,l,n),o[ct]=e,We(o),l=o;break e;case"link":var m=Cg("link","href",r).get(l+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(o=m[b],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}o=r.createElement(l),st(o,l,n),r.head.appendChild(o);break;case"meta":if(m=Cg("meta","content",r).get(l+(n.content||""))){for(b=0;b<m.length;b++)if(o=m[b],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}o=r.createElement(l),st(o,l,n),r.head.appendChild(o);break;default:throw Error(c(468,l))}o[ct]=e,We(o),l=o}e.stateNode=l}else Ag(r,e.type,e.stateNode);else e.stateNode=zg(r,l,e.memoizedProps);else o!==l?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,l===null?Ag(r,e.type,e.stateNode):zg(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Bc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Mt(e),l&512&&(qe||n===null||bn(n,n.return)),n!==null&&l&4&&Bc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Mt(e),l&512&&(qe||n===null||bn(n,n.return)),e.flags&32){r=e.stateNode;try{tl(r,"")}catch(N){Me(e,e.return,N)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Bc(e,r,n!==null?n.memoizedProps:r)),l&1024&&($c=!0);break;case 6:if(Rt(t,e),Mt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(N){Me(e,e.return,N)}}break;case 3:if(ms=null,r=ln,ln=fs(t.containerInfo),Rt(t,e),ln=r,Mt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(N){Me(e,e.return,N)}$c&&($c=!1,Bm(e));break;case 4:l=ln,ln=fs(e.stateNode.containerInfo),Rt(t,e),Mt(e),ln=l;break;case 12:Rt(t,e),Mt(e);break;case 13:Rt(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qc=mn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Lc(e,l)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,D=Bn,Y=qe;if(Bn=D||r,qe=Y||E,Rt(t,e),qe=Y,Bn=D,Mt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||Bn||qe||$a(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(o=E.stateNode,r)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=E.stateNode;var K=E.memoizedProps.style,B=K!=null&&K.hasOwnProperty("display")?K.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(N){Me(E,E.return,N)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(N){Me(E,E.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Lc(e,n))));break;case 19:Rt(t,e),Mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Lc(e,l)));break;case 30:break;case 21:break;default:Rt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(zm(l)){n=l;break}l=l.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,o=Oc(e);Jr(e,o,r);break;case 5:var m=n.stateNode;n.flags&32&&(tl(m,""),n.flags&=-33);var b=Oc(e);Jr(e,b,m);break;case 3:case 4:var E=n.stateNode.containerInfo,D=Oc(e);Nc(e,D,E);break;default:throw Error(c(161))}}catch(Y){Me(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tm(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),$a(t);break;case 1:bn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Em(t,t.return,n),$a(t);break;case 27:Li(t.stateNode);case 26:case 5:bn(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function ta(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:ta(r,o,n),Ai(4,o);break;case 1:if(ta(r,o,n),l=o,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(D){Me(l,l.return,D)}if(l=o,r=l.updateQueue,r!==null){var b=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)ch(E[r],b)}catch(D){Me(l,l.return,D)}}n&&m&64&&wm(o),Ti(o,o.return);break;case 27:Cm(o);case 26:case 5:ta(r,o,n),n&&l===null&&m&4&&_m(o),Ti(o,o.return);break;case 12:ta(r,o,n);break;case 13:ta(r,o,n),n&&m&4&&Mm(r,o);break;case 22:o.memoizedState===null&&ta(r,o,n),Ti(o,o.return);break;case 30:break;default:ta(r,o,n)}t=t.sibling}}function Uc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&mi(n))}function Hc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mi(e))}function xn(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Om(e,t,n,l),t=t.sibling}function Om(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,n,l),r&2048&&Ai(9,t);break;case 1:xn(e,t,n,l);break;case 3:xn(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mi(e)));break;case 12:if(r&2048){xn(e,t,n,l),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,b=o.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Me(t,t.return,E)}}else xn(e,t,n,l);break;case 13:xn(e,t,n,l);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?xn(e,t,n,l):ki(e,t):o._visibility&2?xn(e,t,n,l):(o._visibility|=2,vl(e,t,n,l,(t.subtreeFlags&10256)!==0)),r&2048&&Uc(m,t);break;case 24:xn(e,t,n,l),r&2048&&Hc(t.alternate,t);break;default:xn(e,t,n,l)}}function vl(e,t,n,l,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,b=n,E=l,D=m.flags;switch(m.tag){case 0:case 11:case 15:vl(o,m,b,E,r),Ai(8,m);break;case 23:break;case 22:var Y=m.stateNode;m.memoizedState!==null?Y._visibility&2?vl(o,m,b,E,r):ki(o,m):(Y._visibility|=2,vl(o,m,b,E,r)),r&&D&2048&&Uc(m.alternate,m);break;case 24:vl(o,m,b,E,r),r&&D&2048&&Hc(m.alternate,m);break;default:vl(o,m,b,E,r)}t=t.sibling}}function ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:ki(n,l),r&2048&&Uc(l.alternate,l);break;case 24:ki(n,l),r&2048&&Hc(l.alternate,l);break;default:ki(n,l)}t=t.sibling}}var Ri=8192;function Sl(e){if(e.subtreeFlags&Ri)for(e=e.child;e!==null;)Nm(e),e=e.sibling}function Nm(e){switch(e.tag){case 26:Sl(e),e.flags&Ri&&e.memoizedState!==null&&_y(ln,e.memoizedState,e.memoizedProps);break;case 5:Sl(e);break;case 3:case 4:var t=ln;ln=fs(e.stateNode.containerInfo),Sl(e),ln=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ri,Ri=16777216,Sl(e),Ri=t):Sl(e));break;default:Sl(e)}}function $m(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Je=l,Um(l,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 0:case 11:case 15:Mi(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:Mi(e);break;case 12:Mi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,es(e)):Mi(e);break;default:Mi(e)}}function es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Je=l,Um(l,e)}$m(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,es(t));break;default:es(t)}e=e.sibling}}function Um(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:Jn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:mi(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Je=l;else e:for(n=e;Je!==null;){l=Je;var r=l.sibling,o=l.return;if(km(l),l===n){Je=null;break e}if(r!==null){r.return=o,Je=r;break e}Je=o}}}var Gx={getCacheForType:function(e){var t=ut(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Yx=typeof WeakMap=="function"?WeakMap:Map,_e=0,De=null,ge=null,xe=0,ze=0,Dt=null,na=!1,jl=!1,Gc=!1,Nn=0,Ge=0,aa=0,La=0,Yc=0,Zt=0,wl=0,Di=null,St=null,Vc=!1,qc=0,ts=1/0,ns=null,la=null,rt=0,ia=null,El=null,_l=0,Kc=0,Qc=null,Hm=null,Bi=0,Xc=null;function Bt(){if((_e&2)!==0&&xe!==0)return xe&-xe;if(H.T!==null){var e=fl;return e!==0?e:eu()}return tf()}function Gm(){Zt===0&&(Zt=(xe&536870912)===0||Se?Wd():536870912);var e=Xt.current;return e!==null&&(e.flags|=32),Zt}function Ot(e,t,n){(e===De&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(zl(e,0),ra(e,xe,Zt,!1)),Il(e,n),((_e&2)===0||e!==De)&&(e===De&&((_e&2)===0&&(La|=n),Ge===4&&ra(e,xe,Zt,!1)),yn(e))}function Ym(e,t,n){if((_e&6)!==0)throw Error(c(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Wl(e,t),r=l?Kx(e,t):Pc(e,t,!0),o=l;do{if(r===0){jl&&!l&&ra(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Vx(n)){r=Pc(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;r=Di;var E=b.current.memoizedState.isDehydrated;if(E&&(zl(b,m).flags|=256),m=Pc(b,m,!1),m!==2){if(Gc&&!E){b.errorRecoveryDisabledLanes|=o,La|=o,r=4;break e}o=St,St=r,o!==null&&(St===null?St=o:St.push.apply(St,o))}r=m}if(o=!1,r!==2)continue}}if(r===1){zl(e,0),ra(e,t,0,!0);break}e:{switch(l=e,o=r,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ra(l,t,Zt,!na);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=qc+300-mn(),10<r)){if(ra(l,t,Zt,!na),hr(l,0,!0)!==0)break e;l.timeoutHandle=bg(Vm.bind(null,l,n,St,ns,Vc,t,Zt,La,wl,na,o,2,-0,0),r);break e}Vm(l,n,St,ns,Vc,t,Zt,La,wl,na,o,0,-0,0)}}break}while(!0);yn(e)}function Vm(e,t,n,l,r,o,m,b,E,D,Y,K,B,N){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Gi={stylesheets:null,count:0,unsuspend:Ey},Nm(t),K=zy(),K!==null)){e.cancelPendingCommit=K(Pm.bind(null,e,t,o,n,l,r,m,b,E,Y,1,B,N)),ra(e,o,m,!D);return}Pm(e,t,o,n,l,r,m,b,E)}function Vx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],o=r.getSnapshot;r=r.value;try{if(!Tt(o(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t,n,l){t&=~Yc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var o=31-At(r),m=1<<o;l[o]=-1,r&=~m}n!==0&&Jd(e,n,t)}function as(){return(_e&6)===0?(Oi(0),!1):!0}function Zc(){if(ge!==null){if(ze===0)var e=ge.return;else e=ge,An=Ma=null,dc(e),xl=null,_i=0,e=ge;for(;e!==null;)jm(e.alternate,e),e=e.return;ge=null}}function zl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,sy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Zc(),De=e,ge=n=_n(e.current,null),xe=t,ze=0,Dt=null,na=!1,jl=Wl(e,t),Gc=!1,wl=Zt=Yc=La=aa=Ge=0,St=Di=null,Vc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-At(l),o=1<<r;t|=e[r],l&=~o}return Nn=t,_r(),n}function qm(e,t){fe=null,H.H=qr,t===pi||t===Br?(t=sh(),ze=3):t===lh?(t=sh(),ze=4):ze=t===om?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ge===null&&(Ge=1,Fr(e,Vt(t,e.current)))}function Km(){var e=H.H;return H.H=qr,e===null?qr:e}function Qm(){var e=H.A;return H.A=Gx,e}function Fc(){Ge=4,na||(xe&4194048)!==xe&&Xt.current!==null||(jl=!0),(aa&134217727)===0&&(La&134217727)===0||De===null||ra(De,xe,Zt,!1)}function Pc(e,t,n){var l=_e;_e|=2;var r=Km(),o=Qm();(De!==e||xe!==t)&&(ns=null,zl(e,t)),t=!1;var m=Ge;e:do try{if(ze!==0&&ge!==null){var b=ge,E=Dt;switch(ze){case 8:Zc(),m=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(t=!0);var D=ze;if(ze=0,Dt=null,Cl(e,b,E,D),n&&jl){m=0;break e}break;default:D=ze,ze=0,Dt=null,Cl(e,b,E,D)}}qx(),m=Ge;break}catch(Y){qm(e,Y)}while(!0);return t&&e.shellSuspendCounter++,An=Ma=null,_e=l,H.H=r,H.A=o,ge===null&&(De=null,xe=0,_r()),m}function qx(){for(;ge!==null;)Xm(ge)}function Kx(e,t){var n=_e;_e|=2;var l=Km(),r=Qm();De!==e||xe!==t?(ns=null,ts=mn()+500,zl(e,t)):jl=Wl(e,t);e:do try{if(ze!==0&&ge!==null){t=ge;var o=Dt;t:switch(ze){case 1:ze=0,Dt=null,Cl(e,t,o,1);break;case 2:case 9:if(ih(o)){ze=0,Dt=null,Zm(t);break}t=function(){ze!==2&&ze!==9||De!==e||(ze=7),yn(e)},o.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:ih(o)?(ze=0,Dt=null,Zm(t)):(ze=0,Dt=null,Cl(e,t,o,7));break;case 5:var m=null;switch(ge.tag){case 26:m=ge.memoizedState;case 5:case 27:var b=ge;if(!m||Tg(m)){ze=0,Dt=null;var E=b.sibling;if(E!==null)ge=E;else{var D=b.return;D!==null?(ge=D,ls(D)):ge=null}break t}}ze=0,Dt=null,Cl(e,t,o,5);break;case 6:ze=0,Dt=null,Cl(e,t,o,6);break;case 8:Zc(),Ge=6;break e;default:throw Error(c(462))}}Qx();break}catch(Y){qm(e,Y)}while(!0);return An=Ma=null,H.H=l,H.A=r,_e=n,ge!==null?0:(De=null,xe=0,_r(),Ge)}function Qx(){for(;ge!==null&&!m1();)Xm(ge)}function Xm(e){var t=vm(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,t===null?ls(e):ge=t}function Zm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mm(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=mm(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:dc(t);default:jm(n,t),t=ge=Ff(t,Nn),t=vm(n,t,Nn)}e.memoizedProps=e.pendingProps,t===null?ls(e):ge=t}function Cl(e,t,n,l){An=Ma=null,dc(t),xl=null,_i=0;var r=t.return;try{if(Ox(e,r,t,n,xe)){Ge=1,Fr(e,Vt(n,e.current)),ge=null;return}}catch(o){if(r!==null)throw ge=r,o;Ge=1,Fr(e,Vt(n,e.current)),ge=null;return}t.flags&32768?(Se||l===1?e=!0:jl||(xe&536870912)!==0?e=!1:(na=e=!0,(l===2||l===9||l===3||l===6)&&(l=Xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fm(t,e)):ls(t)}function ls(e){var t=e;do{if((t.flags&32768)!==0){Fm(t,na);return}e=t.return;var n=$x(t.alternate,t,Nn);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ge===0&&(Ge=5)}function Fm(e,t){do{var n=Lx(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);Ge=6,ge=null}function Pm(e,t,n,l,r,o,m,b,E){e.cancelPendingCommit=null;do is();while(rt!==0);if((_e&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Ho,E1(e,n,o,m,b,E),e===De&&(ge=De=null,xe=0),El=t,ia=e,_l=n,Kc=o,Qc=r,Hm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Px(ur,function(){return tg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,r=F.p,F.p=2,m=_e,_e|=4;try{Ux(e,t,n)}finally{_e=m,F.p=r,H.T=l}}rt=1,Wm(),Im(),Jm()}}function Wm(){if(rt===1){rt=0;var e=ia,t=El,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var l=F.p;F.p=2;var r=_e;_e|=4;try{Dm(t,e);var o=ou,m=Uf(e.containerInfo),b=o.focusedElem,E=o.selectionRange;if(m!==b&&b&&b.ownerDocument&&Lf(b.ownerDocument.documentElement,b)){if(E!==null&&Oo(b)){var D=E.start,Y=E.end;if(Y===void 0&&(Y=D),"selectionStart"in b)b.selectionStart=D,b.selectionEnd=Math.min(Y,b.value.length);else{var K=b.ownerDocument||document,B=K&&K.defaultView||window;if(B.getSelection){var N=B.getSelection(),oe=b.textContent.length,ie=Math.min(E.start,oe),Re=E.end===void 0?ie:Math.min(E.end,oe);!N.extend&&ie>Re&&(m=Re,Re=ie,ie=m);var R=$f(b,ie),A=$f(b,Re);if(R&&A&&(N.rangeCount!==1||N.anchorNode!==R.node||N.anchorOffset!==R.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var M=K.createRange();M.setStart(R.node,R.offset),N.removeAllRanges(),ie>Re?(N.addRange(M),N.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),N.addRange(M))}}}}for(K=[],N=b;N=N.parentNode;)N.nodeType===1&&K.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<K.length;b++){var q=K[b];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}bs=!!su,ou=su=null}finally{_e=r,F.p=l,H.T=n}}e.current=t,rt=2}}function Im(){if(rt===2){rt=0;var e=ia,t=El,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var l=F.p;F.p=2;var r=_e;_e|=4;try{Tm(e,t.alternate,t)}finally{_e=r,F.p=l,H.T=n}}rt=3}}function Jm(){if(rt===4||rt===3){rt=0,g1();var e=ia,t=El,n=_l,l=Hm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,El=ia=null,eg(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(la=null),mo(n),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=H.T,r=F.p,F.p=2,H.T=null;try{for(var o=e.onRecoverableError,m=0;m<l.length;m++){var b=l[m];o(b.value,{componentStack:b.stack})}}finally{H.T=t,F.p=r}}(_l&3)!==0&&is(),yn(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===Xc?Bi++:(Bi=0,Xc=e):Bi=0,Oi(0)}}function eg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mi(t)))}function is(e){return Wm(),Im(),Jm(),tg()}function tg(){if(rt!==5)return!1;var e=ia,t=Kc;Kc=0;var n=mo(_l),l=H.T,r=F.p;try{F.p=32>n?32:n,H.T=null,n=Qc,Qc=null;var o=ia,m=_l;if(rt=0,El=ia=null,_l=0,(_e&6)!==0)throw Error(c(331));var b=_e;if(_e|=4,Lm(o.current),Om(o,o.current,m,n),_e=b,Oi(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Pl,o)}catch{}return!0}finally{F.p=r,H.T=l,eg(e,t)}}function ng(e,t,n){t=Vt(n,t),t=_c(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(Il(e,2),yn(e))}function Me(e,t,n){if(e.tag===3)ng(e,e,n);else for(;t!==null;){if(t.tag===3){ng(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(la===null||!la.has(l))){e=Vt(n,e),n=rm(2),l=Fn(t,n,2),l!==null&&(sm(n,l,t,e),Il(l,2),yn(l));break}}t=t.return}}function Wc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Yx;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Gc=!0,r.add(n),e=Xx.bind(null,e,t,n),t.then(e,e))}function Xx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(xe&n)===n&&(Ge===4||Ge===3&&(xe&62914560)===xe&&300>mn()-qc?(_e&2)===0&&zl(e,0):Yc|=n,wl===xe&&(wl=0)),yn(e)}function ag(e,t){t===0&&(t=Id()),e=ol(e,t),e!==null&&(Il(e,t),yn(e))}function Zx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ag(e,n)}function Fx(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),ag(e,n)}function Px(e,t){return co(e,t)}var rs=null,Al=null,Ic=!1,ss=!1,Jc=!1,Ua=0;function yn(e){e!==Al&&e.next===null&&(Al===null?rs=Al=e:Al=Al.next=e),ss=!0,Ic||(Ic=!0,Ix())}function Oi(e,t){if(!Jc&&ss){Jc=!0;do for(var n=!1,l=rs;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var o=0;else{var m=l.suspendedLanes,b=l.pingedLanes;o=(1<<31-At(42|e)+1)-1,o&=r&~(m&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,sg(l,o))}else o=xe,o=hr(l,l===De?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||Wl(l,o)||(n=!0,sg(l,o));l=l.next}while(n);Jc=!1}}function Wx(){lg()}function lg(){ss=Ic=!1;var e=0;Ua!==0&&(ry()&&(e=Ua),Ua=0);for(var t=mn(),n=null,l=rs;l!==null;){var r=l.next,o=ig(l,t);o===0?(l.next=null,n===null?rs=r:n.next=r,r===null&&(Al=n)):(n=l,(e!==0||(o&3)!==0)&&(ss=!0)),l=r}Oi(e)}function ig(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-At(o),b=1<<m,E=r[m];E===-1?((b&n)===0||(b&l)!==0)&&(r[m]=w1(b,t)):E<=t&&(e.expiredLanes|=b),o&=~b}if(t=De,n=xe,n=hr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&uo(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Wl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&uo(l),mo(n)){case 2:case 8:n=Fd;break;case 32:n=ur;break;case 268435456:n=Pd;break;default:n=ur}return l=rg.bind(null,e),n=co(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&uo(l),e.callbackPriority=2,e.callbackNode=null,2}function rg(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(is()&&e.callbackNode!==n)return null;var l=xe;return l=hr(e,e===De?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ym(e,l,t),ig(e,mn()),e.callbackNode!=null&&e.callbackNode===n?rg.bind(null,e):null)}function sg(e,t){if(is())return null;Ym(e,t,!0)}function Ix(){oy(function(){(_e&6)!==0?co(Zd,Wx):lg()})}function eu(){return Ua===0&&(Ua=Wd()),Ua}function og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xr(""+e)}function cg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Jx(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var o=og((r[bt]||null).action),m=l.submitter;m&&(t=(t=m[bt]||null)?og(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var b=new jr("action","action",null,l,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ua!==0){var E=m?cg(r,m):new FormData(r);vc(n,{pending:!0,data:E,method:r.method,action:o},null,E)}}else typeof o=="function"&&(b.preventDefault(),E=m?cg(r,m):new FormData(r),vc(n,{pending:!0,data:E,method:r.method,action:o},o,E))},currentTarget:r}]})}}for(var tu=0;tu<Uo.length;tu++){var nu=Uo[tu],ey=nu.toLowerCase(),ty=nu[0].toUpperCase()+nu.slice(1);an(ey,"on"+ty)}an(Yf,"onAnimationEnd"),an(Vf,"onAnimationIteration"),an(qf,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(xx,"onTransitionRun"),an(yx,"onTransitionStart"),an(vx,"onTransitionCancel"),an(Kf,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ni));function ug(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var o=void 0;if(t)for(var m=l.length-1;0<=m;m--){var b=l[m],E=b.instance,D=b.currentTarget;if(b=b.listener,E!==o&&r.isPropagationStopped())break e;o=b,r.currentTarget=D;try{o(r)}catch(Y){Zr(Y)}r.currentTarget=null,o=E}else for(m=0;m<l.length;m++){if(b=l[m],E=b.instance,D=b.currentTarget,b=b.listener,E!==o&&r.isPropagationStopped())break e;o=b,r.currentTarget=D;try{o(r)}catch(Y){Zr(Y)}r.currentTarget=null,o=E}}}}function pe(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var l=e+"__bubble";n.has(l)||(dg(t,e,2,!1),n.add(l))}function au(e,t,n){var l=0;t&&(l|=4),dg(n,e,l,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function lu(e){if(!e[os]){e[os]=!0,af.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||au(n,!1,e),au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,au("selectionchange",!1,t))}}function dg(e,t,n,l){switch(Og(t)){case 2:var r=Ty;break;case 8:r=ky;break;default:r=xu}n=r.bind(null,t,n,e),r=void 0,!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function iu(e,t,n,l,r){var o=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var b=l.stateNode.containerInfo;if(b===r)break;if(m===4)for(m=l.return;m!==null;){var E=m.tag;if((E===3||E===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;b!==null;){if(m=Fa(b),m===null)return;if(E=m.tag,E===5||E===6||E===26||E===27){l=o=m;continue e}b=b.parentNode}}l=l.return}xf(function(){var D=o,Y=Eo(n),K=[];e:{var B=Qf.get(e);if(B!==void 0){var N=jr,oe=e;switch(e){case"keypress":if(vr(n)===0)break e;case"keydown":case"keyup":N=P1;break;case"focusin":oe="focus",N=ko;break;case"focusout":oe="blur",N=ko;break;case"beforeblur":case"afterblur":N=ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=J1;break;case Yf:case Vf:case qf:N=G1;break;case Kf:N=tx;break;case"scroll":case"scrollend":N=N1;break;case"wheel":N=ax;break;case"copy":case"cut":case"paste":N=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=wf;break;case"toggle":case"beforetoggle":N=ix}var ie=(t&4)!==0,Re=!ie&&(e==="scroll"||e==="scrollend"),R=ie?B!==null?B+"Capture":null:B;ie=[];for(var A=D,M;A!==null;){var q=A;if(M=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||M===null||R===null||(q=ti(A,R),q!=null&&ie.push($i(A,q,M))),Re)break;A=A.return}0<ie.length&&(B=new N(B,oe,null,n,Y),K.push({event:B,listeners:ie}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",B&&n!==wo&&(oe=n.relatedTarget||n.fromElement)&&(Fa(oe)||oe[Za]))break e;if((N||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,N?(oe=n.relatedTarget||n.toElement,N=D,oe=oe?Fa(oe):null,oe!==null&&(Re=f(oe),ie=oe.tag,oe!==Re||ie!==5&&ie!==27&&ie!==6)&&(oe=null)):(N=null,oe=D),N!==oe)){if(ie=Sf,q="onMouseLeave",R="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ie=wf,q="onPointerLeave",R="onPointerEnter",A="pointer"),Re=N==null?B:ei(N),M=oe==null?B:ei(oe),B=new ie(q,A+"leave",N,n,Y),B.target=Re,B.relatedTarget=M,q=null,Fa(Y)===D&&(ie=new ie(R,A+"enter",oe,n,Y),ie.target=M,ie.relatedTarget=Re,q=ie),Re=q,N&&oe)t:{for(ie=N,R=oe,A=0,M=ie;M;M=Tl(M))A++;for(M=0,q=R;q;q=Tl(q))M++;for(;0<A-M;)ie=Tl(ie),A--;for(;0<M-A;)R=Tl(R),M--;for(;A--;){if(ie===R||R!==null&&ie===R.alternate)break t;ie=Tl(ie),R=Tl(R)}ie=null}else ie=null;N!==null&&fg(K,B,N,ie,!1),oe!==null&&Re!==null&&fg(K,Re,oe,ie,!0)}}e:{if(B=D?ei(D):window,N=B.nodeName&&B.nodeName.toLowerCase(),N==="select"||N==="input"&&B.type==="file")var J=Rf;else if(Tf(B))if(Mf)J=gx;else{J=hx;var he=fx}else N=B.nodeName,!N||N.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?D&&jo(D.elementType)&&(J=Rf):J=mx;if(J&&(J=J(e,D))){kf(K,J,n,Y);break e}he&&he(e,B,D),e==="focusout"&&D&&B.type==="number"&&D.memoizedProps.value!=null&&So(B,"number",B.value)}switch(he=D?ei(D):window,e){case"focusin":(Tf(he)||he.contentEditable==="true")&&(il=he,No=D,ci=null);break;case"focusout":ci=No=il=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,Hf(K,n,Y);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Hf(K,n,Y)}var ne;if(Mo)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else ll?Cf(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(Ef&&n.locale!=="ko"&&(ll||se!=="onCompositionStart"?se==="onCompositionEnd"&&ll&&(ne=yf()):(Kn=Y,Co="value"in Kn?Kn.value:Kn.textContent,ll=!0)),he=cs(D,se),0<he.length&&(se=new jf(se,e,null,n,Y),K.push({event:se,listeners:he}),ne?se.data=ne:(ne=Af(n),ne!==null&&(se.data=ne)))),(ne=sx?ox(e,n):cx(e,n))&&(se=cs(D,"onBeforeInput"),0<se.length&&(he=new jf("onBeforeInput","beforeinput",null,n,Y),K.push({event:he,listeners:se}),he.data=ne)),Jx(K,e,D,n,Y)}ug(K,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=ti(e,n),r!=null&&l.unshift($i(e,r,o)),r=ti(e,t),r!=null&&l.push($i(e,r,o))),e.tag===3)return l;e=e.return}return[]}function Tl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fg(e,t,n,l,r){for(var o=t._reactName,m=[];n!==null&&n!==l;){var b=n,E=b.alternate,D=b.stateNode;if(b=b.tag,E!==null&&E===l)break;b!==5&&b!==26&&b!==27||D===null||(E=D,r?(D=ti(n,o),D!=null&&m.unshift($i(n,D,E))):r||(D=ti(n,o),D!=null&&m.push($i(n,D,E)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var ay=/\r\n?/g,ly=/\u0000|\uFFFD/g;function hg(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(ly,"")}function mg(e,t){return t=hg(t),hg(e)===t}function us(){}function ke(e,t,n,l,r,o){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||tl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&tl(e,""+l);break;case"className":gr(e,"class",l);break;case"tabIndex":gr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(e,n,l);break;case"style":pf(e,l,o);break;case"data":if(t!=="object"){gr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=xr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",r.name,r,null),ke(e,t,"formEncType",r.formEncType,r,null),ke(e,t,"formMethod",r.formMethod,r,null),ke(e,t,"formTarget",r.formTarget,r,null)):(ke(e,t,"encType",r.encType,r,null),ke(e,t,"method",r.method,r,null),ke(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=xr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=us);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=xr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":pe("beforetoggle",e),pe("toggle",e),mr(e,"popover",l);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=B1.get(n)||n,mr(e,n,l))}}function ru(e,t,n,l,r,o){switch(n){case"style":pf(e,l,o);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof l=="string"?tl(e,l):(typeof l=="number"||typeof l=="bigint")&&tl(e,""+l);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=us);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),o=e[bt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof l=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):mr(e,n,l)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var l=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var m=n[o];if(m!=null)switch(o){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,o,m,n,null)}}r&&ke(e,t,"srcSet",n.srcSet,n,null),l&&ke(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var b=o=m=r=null,E=null,D=null;for(l in n)if(n.hasOwnProperty(l)){var Y=n[l];if(Y!=null)switch(l){case"name":r=Y;break;case"type":m=Y;break;case"checked":E=Y;break;case"defaultChecked":D=Y;break;case"value":o=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(c(137,t));break;default:ke(e,t,l,Y,n,null)}}ff(e,o,b,E,D,m,r,!1),pr(e);return;case"select":pe("invalid",e),l=m=o=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":o=b;break;case"defaultValue":m=b;break;case"multiple":l=b;default:ke(e,t,r,b,n,null)}t=o,n=m,e.multiple=!!l,t!=null?el(e,!!l,t,!1):n!=null&&el(e,!!l,n,!0);return;case"textarea":pe("invalid",e),o=r=l=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":l=b;break;case"defaultValue":r=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(c(91));break;default:ke(e,t,m,b,n,null)}mf(e,l,r,o),pr(e);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,t,E,l,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(l=0;l<Ni.length;l++)pe(Ni[l],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(l=n[D],l!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,D,l,n,null)}return;default:if(jo(t)){for(Y in n)n.hasOwnProperty(Y)&&(l=n[Y],l!==void 0&&ru(e,t,Y,l,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!=null&&ke(e,t,b,l,n,null))}function iy(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,m=null,b=null,E=null,D=null,Y=null;for(N in n){var K=n[N];if(n.hasOwnProperty(N)&&K!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":E=K;default:l.hasOwnProperty(N)||ke(e,t,N,null,l,K)}}for(var B in l){var N=l[B];if(K=n[B],l.hasOwnProperty(B)&&(N!=null||K!=null))switch(B){case"type":o=N;break;case"name":r=N;break;case"checked":D=N;break;case"defaultChecked":Y=N;break;case"value":m=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==K&&ke(e,t,B,N,l,K)}}vo(e,m,b,E,D,Y,o,r);return;case"select":N=m=b=B=null;for(o in n)if(E=n[o],n.hasOwnProperty(o)&&E!=null)switch(o){case"value":break;case"multiple":N=E;default:l.hasOwnProperty(o)||ke(e,t,o,null,l,E)}for(r in l)if(o=l[r],E=n[r],l.hasOwnProperty(r)&&(o!=null||E!=null))switch(r){case"value":B=o;break;case"defaultValue":b=o;break;case"multiple":m=o;default:o!==E&&ke(e,t,r,o,l,E)}t=b,n=m,l=N,B!=null?el(e,!!n,B,!1):!!l!=!!n&&(t!=null?el(e,!!n,t,!0):el(e,!!n,n?[]:"",!1));return;case"textarea":N=B=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ke(e,t,b,null,l,r)}for(m in l)if(r=l[m],o=n[m],l.hasOwnProperty(m)&&(r!=null||o!=null))switch(m){case"value":B=r;break;case"defaultValue":N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==o&&ke(e,t,m,r,l,o)}hf(e,B,N);return;case"option":for(var oe in n)if(B=n[oe],n.hasOwnProperty(oe)&&B!=null&&!l.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:ke(e,t,oe,null,l,B)}for(E in l)if(B=l[E],N=n[E],l.hasOwnProperty(E)&&B!==N&&(B!=null||N!=null))switch(E){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:ke(e,t,E,B,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)B=n[ie],n.hasOwnProperty(ie)&&B!=null&&!l.hasOwnProperty(ie)&&ke(e,t,ie,null,l,B);for(D in l)if(B=l[D],N=n[D],l.hasOwnProperty(D)&&B!==N&&(B!=null||N!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:ke(e,t,D,B,l,N)}return;default:if(jo(t)){for(var Re in n)B=n[Re],n.hasOwnProperty(Re)&&B!==void 0&&!l.hasOwnProperty(Re)&&ru(e,t,Re,void 0,l,B);for(Y in l)B=l[Y],N=n[Y],!l.hasOwnProperty(Y)||B===N||B===void 0&&N===void 0||ru(e,t,Y,B,l,N);return}}for(var R in n)B=n[R],n.hasOwnProperty(R)&&B!=null&&!l.hasOwnProperty(R)&&ke(e,t,R,null,l,B);for(K in l)B=l[K],N=n[K],!l.hasOwnProperty(K)||B===N||B==null&&N==null||ke(e,t,K,B,l,N)}var su=null,ou=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=null;function ry(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var bg=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(cy)}:bg;function cy(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function yg(e,t){var n=t,l=0,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<l&&8>l){n=l;var m=e.ownerDocument;if(n&1&&Li(m.documentElement),n&2&&Li(m.body),n&4)for(n=m.head,Li(n),m=n.firstChild;m;){var b=m.nextSibling,E=m.nodeName;m[Jl]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(r===0){e.removeChild(o),Qi(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:l=n.charCodeAt(0)-48;else l=0;n=o}while(n);Qi(t)}function du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":du(n),po(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function uy(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function dy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function fy(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var hu=null;function vg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Sg(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);po(e)}var Ft=new Map,jg=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=F.d;F.d={f:hy,r:my,D:gy,C:py,L:by,m:xy,X:vy,S:yy,M:Sy};function hy(){var e=$n.f(),t=as();return e||t}function my(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Yh(t):$n.r(e)}var kl=typeof document>"u"?null:document;function wg(e,t,n){var l=kl;if(l&&typeof t=="string"&&t){var r=Yt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),jg.has(r)||(jg.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),st(t,"link",e),We(t),l.head.appendChild(t)))}}function gy(e){$n.D(e),wg("dns-prefetch",e,null)}function py(e,t){$n.C(e,t),wg("preconnect",e,t)}function by(e,t,n){$n.L(e,t,n);var l=kl;if(l&&e&&t){var r='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Yt(n.imageSizes)+'"]')):r+='[href="'+Yt(e)+'"]';var o=r;switch(t){case"style":o=Rl(e);break;case"script":o=Ml(e)}Ft.has(o)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ft.set(o,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(Ui(o))||t==="script"&&l.querySelector(Hi(o))||(t=l.createElement("link"),st(t,"link",e),We(t),l.head.appendChild(t)))}}function xy(e,t){$n.m(e,t);var n=kl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Yt(l)+'"][href="'+Yt(e)+'"]',o=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ml(e)}if(!Ft.has(o)&&(e=x({rel:"modulepreload",href:e},t),Ft.set(o,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Hi(o)))return}l=n.createElement("link"),st(l,"link",e),We(l),n.head.appendChild(l)}}}function yy(e,t,n){$n.S(e,t,n);var l=kl;if(l&&e){var r=Wa(l).hoistableStyles,o=Rl(e);t=t||"default";var m=r.get(o);if(!m){var b={loading:0,preload:null};if(m=l.querySelector(Ui(o)))b.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ft.get(o))&&mu(e,n);var E=m=l.createElement("link");We(E),st(E,"link",e),E._p=new Promise(function(D,Y){E.onload=D,E.onerror=Y}),E.addEventListener("load",function(){b.loading|=1}),E.addEventListener("error",function(){b.loading|=2}),b.loading|=4,hs(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:b},r.set(o,m)}}}function vy(e,t){$n.X(e,t);var n=kl;if(n&&e){var l=Wa(n).hoistableScripts,r=Ml(e),o=l.get(r);o||(o=n.querySelector(Hi(r)),o||(e=x({src:e,async:!0},t),(t=Ft.get(r))&&gu(e,t),o=n.createElement("script"),We(o),st(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Sy(e,t){$n.M(e,t);var n=kl;if(n&&e){var l=Wa(n).hoistableScripts,r=Ml(e),o=l.get(r);o||(o=n.querySelector(Hi(r)),o||(e=x({src:e,async:!0,type:"module"},t),(t=Ft.get(r))&&gu(e,t),o=n.createElement("script"),We(o),st(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Eg(e,t,n,l){var r=(r=re.current)?fs(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Rl(n.href),n=Wa(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Rl(n.href);var o=Wa(r).hoistableStyles,m=o.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=r.querySelector(Ui(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Ft.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ft.set(e,n),o||jy(r,e,n,m.state))),t&&l===null)throw Error(c(528,""));return m}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ml(n),n=Wa(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Rl(e){return'href="'+Yt(e)+'"'}function Ui(e){return'link[rel="stylesheet"]['+e+"]"}function _g(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function jy(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),st(t,"link",n),We(t),e.head.appendChild(t))}function Ml(e){return'[src="'+Yt(e)+'"]'}function Hi(e){return"script[async]"+e}function zg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(l)return t.instance=l,We(l),l;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),st(l,"style",r),hs(l,n.precedence,e),t.instance=l;case"stylesheet":r=Rl(n.href);var o=e.querySelector(Ui(r));if(o)return t.state.loading|=4,t.instance=o,We(o),o;l=_g(n),(r=Ft.get(r))&&mu(l,r),o=(e.ownerDocument||e).createElement("link"),We(o);var m=o;return m._p=new Promise(function(b,E){m.onload=b,m.onerror=E}),st(o,"link",l),t.state.loading|=4,hs(o,n.precedence,e),t.instance=o;case"script":return o=Ml(n.src),(r=e.querySelector(Hi(o)))?(t.instance=r,We(r),r):(l=n,(r=Ft.get(o))&&(l=x({},n),gu(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),We(r),st(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,hs(l,n.precedence,e));return t.instance}function hs(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,o=r,m=0;m<l.length;m++){var b=l[m];if(b.dataset.precedence===t)o=b;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ms=null;function Cg(e,t,n){if(ms===null){var l=new Map,r=ms=new Map;r.set(n,l)}else r=ms,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[Jl]||o[ct]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var b=l.get(m);b?b.push(o):l.set(m,[o])}}return l}function Ag(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function wy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Gi=null;function Ey(){}function _y(e,t,n){if(Gi===null)throw Error(c(475));var l=Gi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Rl(n.href),o=e.querySelector(Ui(r));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=gs.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=o,We(o);return}o=e.ownerDocument||e,n=_g(n),(r=Ft.get(r))&&mu(n,r),o=o.createElement("link"),We(o);var m=o;m._p=new Promise(function(b,E){m.onload=b,m.onerror=E}),st(o,"link",n),t.instance=o}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=gs.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function zy(){if(Gi===null)throw Error(c(475));var e=Gi;return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function pu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,t.forEach(Cy,e),ps=null,gs.call(e))}function Cy(e,t){if(!(t.state.loading&4)){var n=ps.get(e);if(n)var l=n.get(null);else{n=new Map,ps.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var m=r[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),l=m)}l&&n.set(null,l)}r=t.instance,m=r.getAttribute("data-precedence"),o=n.get(m)||l,o===l&&n.set(null,r),n.set(m,r),this.count++,l=gs.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Yi={$$typeof:T,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Ay(e,t,n,l,r,o,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function kg(e,t,n,l,r,o,m,b,E,D,Y,K){return e=new Ay(e,t,n,m,b,E,D,K),t=1,o===!0&&(t|=24),o=kt(3,null,null,t),e.current=o,o.stateNode=e,t=Wo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:l,isDehydrated:n,cache:t},tc(o),e}function Rg(e){return e?(e=cl,e):cl}function Mg(e,t,n,l,r,o){r=Rg(r),l.context===null?l.context=r:l.pendingContext=r,l=Zn(t),l.payload={element:n},o=o===void 0?null:o,o!==null&&(l.callback=o),n=Fn(e,l,t),n!==null&&(Ot(n,e,t),xi(n,e,t))}function Dg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){Dg(e,t),(e=e.alternate)&&Dg(e,t)}function Bg(e){if(e.tag===13){var t=ol(e,67108864);t!==null&&Ot(t,e,67108864),bu(e,67108864)}}var bs=!0;function Ty(e,t,n,l){var r=H.T;H.T=null;var o=F.p;try{F.p=2,xu(e,t,n,l)}finally{F.p=o,H.T=r}}function ky(e,t,n,l){var r=H.T;H.T=null;var o=F.p;try{F.p=8,xu(e,t,n,l)}finally{F.p=o,H.T=r}}function xu(e,t,n,l){if(bs){var r=yu(l);if(r===null)iu(e,t,l,xs,n),Ng(e,l);else if(My(r,e,t,n,l))l.stopPropagation();else if(Ng(e,l),t&4&&-1<Ry.indexOf(e)){for(;r!==null;){var o=Pa(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=ja(o.pendingLanes);if(m!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var E=1<<31-At(m);b.entanglements[1]|=E,m&=~E}yn(o),(_e&6)===0&&(ts=mn()+500,Oi(0))}}break;case 13:b=ol(o,2),b!==null&&Ot(b,o,2),as(),bu(o,2)}if(o=yu(l),o===null&&iu(e,t,l,xs,n),o===r)break;r=o}r!==null&&l.stopPropagation()}else iu(e,t,l,null,n)}}function yu(e){return e=Eo(e),vu(e)}var xs=null;function vu(e){if(xs=null,e=Fa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xs=e,null}function Og(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p1()){case Zd:return 2;case Fd:return 8;case ur:case b1:return 32;case Pd:return 268435456;default:return 32}default:return 32}}var Su=!1,oa=null,ca=null,ua=null,Vi=new Map,qi=new Map,da=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ng(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function Ki(e,t,n,l,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Pa(t),t!==null&&Bg(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function My(e,t,n,l,r){switch(t){case"focusin":return oa=Ki(oa,e,t,n,l,r),!0;case"dragenter":return ca=Ki(ca,e,t,n,l,r),!0;case"mouseover":return ua=Ki(ua,e,t,n,l,r),!0;case"pointerover":var o=r.pointerId;return Vi.set(o,Ki(Vi.get(o)||null,e,t,n,l,r)),!0;case"gotpointercapture":return o=r.pointerId,qi.set(o,Ki(qi.get(o)||null,e,t,n,l,r)),!0}return!1}function $g(e){var t=Fa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,_1(e.priority,function(){if(n.tag===13){var l=Bt();l=ho(l);var r=ol(n,l);r!==null&&Ot(r,n,l),bu(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);wo=l,n.target.dispatchEvent(l),wo=null}else return t=Pa(n),t!==null&&Bg(t),e.blockedOn=n,!1;t.shift()}return!0}function Lg(e,t,n){ys(e)&&n.delete(t)}function Dy(){Su=!1,oa!==null&&ys(oa)&&(oa=null),ca!==null&&ys(ca)&&(ca=null),ua!==null&&ys(ua)&&(ua=null),Vi.forEach(Lg),qi.forEach(Lg)}function vs(e,t){e.blockedOn===t&&(e.blockedOn=null,Su||(Su=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Dy)))}var Ss=null;function Ug(e){Ss!==e&&(Ss=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ss===e&&(Ss=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(vu(l||n)===null)continue;break}var o=Pa(n);o!==null&&(e.splice(t,3),t-=3,vc(o,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function Qi(e){function t(E){return vs(E,e)}oa!==null&&vs(oa,e),ca!==null&&vs(ca,e),ua!==null&&vs(ua,e),Vi.forEach(t),qi.forEach(t);for(var n=0;n<da.length;n++){var l=da[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<da.length&&(n=da[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&da.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],o=n[l+1],m=r[bt]||null;if(typeof o=="function")m||Ug(n);else if(m){var b=null;if(o&&o.hasAttribute("formAction")){if(r=o,m=o[bt]||null)b=m.formAction;else if(vu(r)!==null)continue}else b=m.action;typeof b=="function"?n[l+1]=b:(n.splice(l,3),l-=3),Ug(n)}}}function ju(e){this._internalRoot=e}js.prototype.render=ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,l=Bt();Mg(n,l,e,t,null,null)},js.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mg(e.current,2,null,e,null,null),as(),t[Za]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<da.length&&t!==0&&t<da[n].priority;n++);da.splice(n,0,e),n===0&&$g(e)}};var Hg=s.version;if(Hg!=="19.1.0")throw Error(c(527,Hg,"19.1.0"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var By={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Pl=ws.inject(By),Ct=ws}catch{}}return Zi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,l="",r=nm,o=am,m=lm,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=kg(e,1,!1,null,null,n,l,r,o,m,b,null),e[Za]=t.current,lu(e),new ju(t)},Zi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var l=!1,r="",o=nm,m=am,b=lm,E=null,D=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks),n.formState!==void 0&&(D=n.formState)),t=kg(e,1,!0,t,n??null,l,r,o,m,b,E,D),t.context=Rg(null),n=t.current,l=Bt(),l=ho(l),r=Zn(l),r.callback=null,Fn(n,r,l),n=l,t.current.lanes=n,Il(t,n),yn(t),e[Za]=t.current,lu(e),new js(t)},Zi.version="19.1.0",Zi}var Pg;function Ky(){if(Pg)return _u.exports;Pg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),_u.exports=qy(),_u.exports}var Qy=Ky(),at=function(){return at=Object.assign||function(s){for(var u,c=1,d=arguments.length;c<d;c++){u=arguments[c];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(s[f]=u[f])}return s},at.apply(this,arguments)};function Hl(a,s,u){if(u||arguments.length===2)for(var c=0,d=s.length,f;c<d;c++)(f||!(c in s))&&(f||(f=Array.prototype.slice.call(s,0,c)),f[c]=s[c]);return a.concat(f||Array.prototype.slice.call(s))}var Be="-ms-",tr="-moz-",we="-webkit-",Zp="comm",Js="rule",Ad="decl",Xy="@import",Fp="@keyframes",Zy="@layer",Pp=Math.abs,Td=String.fromCharCode,cd=Object.assign;function Fy(a,s){return nt(a,0)^45?(((s<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function Wp(a){return a.trim()}function Un(a,s){return(a=s.exec(a))?a[0]:a}function de(a,s,u){return a.replace(s,u)}function Os(a,s,u){return a.indexOf(s,u)}function nt(a,s){return a.charCodeAt(s)|0}function Gl(a,s,u){return a.slice(s,u)}function vn(a){return a.length}function Ip(a){return a.length}function Ji(a,s){return s.push(a),a}function Py(a,s){return a.map(s).join("")}function Wg(a,s){return a.filter(function(u){return!Un(u,s)})}var eo=1,Yl=1,Jp=0,Pt=0,Xe=0,Kl="";function to(a,s,u,c,d,f,p,v){return{value:a,root:s,parent:u,type:c,props:d,children:f,line:eo,column:Yl,length:p,return:"",siblings:v}}function pa(a,s){return cd(to("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function Dl(a){for(;a.root;)a=pa(a.root,{children:[a]});Ji(a,a.siblings)}function Wy(){return Xe}function Iy(){return Xe=Pt>0?nt(Kl,--Pt):0,Yl--,Xe===10&&(Yl=1,eo--),Xe}function un(){return Xe=Pt<Jp?nt(Kl,Pt++):0,Yl++,Xe===10&&(Yl=1,eo++),Xe}function Va(){return nt(Kl,Pt)}function Ns(){return Pt}function no(a,s){return Gl(Kl,a,s)}function ud(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jy(a){return eo=Yl=1,Jp=vn(Kl=a),Pt=0,[]}function ev(a){return Kl="",a}function Tu(a){return Wp(no(Pt-1,dd(a===91?a+2:a===40?a+1:a)))}function tv(a){for(;(Xe=Va())&&Xe<33;)un();return ud(a)>2||ud(Xe)>3?"":" "}function nv(a,s){for(;--s&&un()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return no(a,Ns()+(s<6&&Va()==32&&un()==32))}function dd(a){for(;un();)switch(Xe){case a:return Pt;case 34:case 39:a!==34&&a!==39&&dd(Xe);break;case 40:a===41&&dd(a);break;case 92:un();break}return Pt}function av(a,s){for(;un()&&a+Xe!==57;)if(a+Xe===84&&Va()===47)break;return"/*"+no(s,Pt-1)+"*"+Td(a===47?a:un())}function lv(a){for(;!ud(Va());)un();return no(a,Pt)}function iv(a){return ev($s("",null,null,null,[""],a=Jy(a),0,[0],a))}function $s(a,s,u,c,d,f,p,v,h){for(var g=0,x=0,S=p,w=0,C=0,j=0,O=1,L=1,G=1,Z=0,T="",V=d,U=f,I=c,$=T;L;)switch(j=Z,Z=un()){case 40:if(j!=108&&nt($,S-1)==58){Os($+=de(Tu(Z),"&","&\f"),"&\f",Pp(g?v[g-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:$+=Tu(Z);break;case 9:case 10:case 13:case 32:$+=tv(j);break;case 92:$+=nv(Ns()-1,7);continue;case 47:switch(Va()){case 42:case 47:Ji(rv(av(un(),Ns()),s,u,h),h);break;default:$+="/"}break;case 123*O:v[g++]=vn($)*G;case 125*O:case 59:case 0:switch(Z){case 0:case 125:L=0;case 59+x:G==-1&&($=de($,/\f/g,"")),C>0&&vn($)-S&&Ji(C>32?Jg($+";",c,u,S-1,h):Jg(de($," ","")+";",c,u,S-2,h),h);break;case 59:$+=";";default:if(Ji(I=Ig($,s,u,g,x,d,v,T,V=[],U=[],S,f),f),Z===123)if(x===0)$s($,s,I,I,V,f,S,v,U);else switch(w===99&&nt($,3)===110?100:w){case 100:case 108:case 109:case 115:$s(a,I,I,c&&Ji(Ig(a,I,I,0,0,d,v,T,d,V=[],S,U),U),d,U,S,v,c?V:U);break;default:$s($,I,I,I,[""],U,0,v,U)}}g=x=C=0,O=G=1,T=$="",S=p;break;case 58:S=1+vn($),C=j;default:if(O<1){if(Z==123)--O;else if(Z==125&&O++==0&&Iy()==125)continue}switch($+=Td(Z),Z*O){case 38:G=x>0?1:($+="\f",-1);break;case 44:v[g++]=(vn($)-1)*G,G=1;break;case 64:Va()===45&&($+=Tu(un())),w=Va(),x=S=vn(T=$+=lv(Ns())),Z++;break;case 45:j===45&&vn($)==2&&(O=0)}}return f}function Ig(a,s,u,c,d,f,p,v,h,g,x,S){for(var w=d-1,C=d===0?f:[""],j=Ip(C),O=0,L=0,G=0;O<c;++O)for(var Z=0,T=Gl(a,w+1,w=Pp(L=p[O])),V=a;Z<j;++Z)(V=Wp(L>0?C[Z]+" "+T:de(T,/&\f/g,C[Z])))&&(h[G++]=V);return to(a,s,u,d===0?Js:v,h,g,x,S)}function rv(a,s,u,c){return to(a,s,u,Zp,Td(Wy()),Gl(a,2,-2),0,c)}function Jg(a,s,u,c,d){return to(a,s,u,Ad,Gl(a,0,c),Gl(a,c+1,-1),c,d)}function e0(a,s,u){switch(Fy(a,s)){case 5103:return we+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+a+a;case 4789:return tr+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return we+a+tr+a+Be+a+a;case 5936:switch(nt(a,s+11)){case 114:return we+a+Be+de(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return we+a+Be+de(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return we+a+Be+de(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return we+a+Be+a+a;case 6165:return we+a+Be+"flex-"+a+a;case 5187:return we+a+de(a,/(\w+).+(:[^]+)/,we+"box-$1$2"+Be+"flex-$1$2")+a;case 5443:return we+a+Be+"flex-item-"+de(a,/flex-|-self/g,"")+(Un(a,/flex-|baseline/)?"":Be+"grid-row-"+de(a,/flex-|-self/g,""))+a;case 4675:return we+a+Be+"flex-line-pack"+de(a,/align-content|flex-|-self/g,"")+a;case 5548:return we+a+Be+de(a,"shrink","negative")+a;case 5292:return we+a+Be+de(a,"basis","preferred-size")+a;case 6060:return we+"box-"+de(a,"-grow","")+we+a+Be+de(a,"grow","positive")+a;case 4554:return we+de(a,/([^-])(transform)/g,"$1"+we+"$2")+a;case 6187:return de(de(de(a,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),a,"")+a;case 5495:case 3959:return de(a,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return de(de(a,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+a+a;case 4200:if(!Un(a,/flex-|baseline/))return Be+"grid-column-align"+Gl(a,s)+a;break;case 2592:case 3360:return Be+de(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,d){return s=d,Un(c.props,/grid-\w+-end/)})?~Os(a+(u=u[s].value),"span",0)?a:Be+de(a,"-start","")+a+Be+"grid-row-span:"+(~Os(u,"span",0)?Un(u,/\d+/):+Un(u,/\d+/)-+Un(a,/\d+/))+";":Be+de(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return Un(c.props,/grid-\w+-start/)})?a:Be+de(de(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return de(a,/(.+)-inline(.+)/,we+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(a)-1-s>6)switch(nt(a,s+1)){case 109:if(nt(a,s+4)!==45)break;case 102:return de(a,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+tr+(nt(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~Os(a,"stretch",0)?e0(de(a,"stretch","fill-available"),s,u)+a:a}break;case 5152:case 5920:return de(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,f,p,v,h,g){return Be+d+":"+f+g+(p?Be+d+"-span:"+(v?h:+h-+f)+g:"")+a});case 4949:if(nt(a,s+6)===121)return de(a,":",":"+we)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return de(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(nt(a,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+Be+"$2box$3")+a;case 100:return de(a,":",":"+Be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(a,"scroll-","scroll-snap-")+a}return a}function Vs(a,s){for(var u="",c=0;c<a.length;c++)u+=s(a[c],c,a,s)||"";return u}function sv(a,s,u,c){switch(a.type){case Zy:if(a.children.length)break;case Xy:case Ad:return a.return=a.return||a.value;case Zp:return"";case Fp:return a.return=a.value+"{"+Vs(a.children,c)+"}";case Js:if(!vn(a.value=a.props.join(",")))return""}return vn(u=Vs(a.children,c))?a.return=a.value+"{"+u+"}":""}function ov(a){var s=Ip(a);return function(u,c,d,f){for(var p="",v=0;v<s;v++)p+=a[v](u,c,d,f)||"";return p}}function cv(a){return function(s){s.root||(s=s.return)&&a(s)}}function uv(a,s,u,c){if(a.length>-1&&!a.return)switch(a.type){case Ad:a.return=e0(a.value,a.length,u);return;case Fp:return Vs([pa(a,{value:de(a.value,"@","@"+we)})],c);case Js:if(a.length)return Py(u=a.props,function(d){switch(Un(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dl(pa(a,{props:[de(d,/:(read-\w+)/,":"+tr+"$1")]})),Dl(pa(a,{props:[d]})),cd(a,{props:Wg(u,c)});break;case"::placeholder":Dl(pa(a,{props:[de(d,/:(plac\w+)/,":"+we+"input-$1")]})),Dl(pa(a,{props:[de(d,/:(plac\w+)/,":"+tr+"$1")]})),Dl(pa(a,{props:[de(d,/:(plac\w+)/,Be+"input-$1")]})),Dl(pa(a,{props:[d]})),cd(a,{props:Wg(u,c)});break}return""})}}var dv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$t={},Vl=typeof process<"u"&&$t!==void 0&&($t.REACT_APP_SC_ATTR||$t.SC_ATTR)||"data-styled",t0="active",n0="data-styled-version",ao="6.1.19",kd=`/*!sc*/
`,qs=typeof window<"u"&&typeof document<"u",fv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==""?$t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.SC_DISABLE_SPEEDY!==void 0&&$t.SC_DISABLE_SPEEDY!==""&&$t.SC_DISABLE_SPEEDY!=="false"&&$t.SC_DISABLE_SPEEDY),hv={},lo=Object.freeze([]),ql=Object.freeze({});function a0(a,s,u){return u===void 0&&(u=ql),a.theme!==u.theme&&a.theme||s||u.theme}var l0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gv=/(^-|-$)/g;function ep(a){return a.replace(mv,"-").replace(gv,"")}var pv=/(a)(d)/gi,Es=52,tp=function(a){return String.fromCharCode(a+(a>25?39:97))};function fd(a){var s,u="";for(s=Math.abs(a);s>Es;s=s/Es|0)u=tp(s%Es)+u;return(tp(s%Es)+u).replace(pv,"$1-$2")}var ku,i0=5381,Ll=function(a,s){for(var u=s.length;u;)a=33*a^s.charCodeAt(--u);return a},r0=function(a){return Ll(i0,a)};function Rd(a){return fd(r0(a)>>>0)}function bv(a){return a.displayName||a.name||"Component"}function Ru(a){return typeof a=="string"&&!0}var s0=typeof Symbol=="function"&&Symbol.for,o0=s0?Symbol.for("react.memo"):60115,xv=s0?Symbol.for("react.forward_ref"):60112,yv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sv=((ku={})[xv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ku[o0]=c0,ku);function np(a){return("type"in(s=a)&&s.type.$$typeof)===o0?c0:"$$typeof"in a?Sv[a.$$typeof]:yv;var s}var jv=Object.defineProperty,wv=Object.getOwnPropertyNames,ap=Object.getOwnPropertySymbols,Ev=Object.getOwnPropertyDescriptor,_v=Object.getPrototypeOf,lp=Object.prototype;function u0(a,s,u){if(typeof s!="string"){if(lp){var c=_v(s);c&&c!==lp&&u0(a,c,u)}var d=wv(s);ap&&(d=d.concat(ap(s)));for(var f=np(a),p=np(s),v=0;v<d.length;++v){var h=d[v];if(!(h in vv||u&&u[h]||p&&h in p||f&&h in f)){var g=Ev(s,h);try{jv(a,h,g)}catch{}}}}return a}function qa(a){return typeof a=="function"}function Md(a){return typeof a=="object"&&"styledComponentId"in a}function Ya(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function Ks(a,s){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function nr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function hd(a,s,u){if(u===void 0&&(u=!1),!u&&!nr(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)a[c]=hd(a[c],s[c]);else if(nr(s))for(var c in s)a[c]=hd(a[c],s[c]);return a}function Dd(a,s){Object.defineProperty(a,"toString",{value:s})}function Ka(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var zv=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return a.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,f=d;s>=f;)if((f<<=1)<0)throw Ka(16,"".concat(s));this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(var p=d;p<f;p++)this.groupSizes[p]=0}for(var v=this.indexOfGroup(s+1),h=(p=0,u.length);p<h;p++)this.tag.insertRule(v,u[p])&&(this.groupSizes[s]++,v++)},a.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),d=c+u;this.groupSizes[s]=0;for(var f=c;f<d;f++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],d=this.indexOfGroup(s),f=d+c,p=d;p<f;p++)u+="".concat(this.tag.getRule(p)).concat(kd);return u},a}(),Ls=new Map,Qs=new Map,Us=1,_s=function(a){if(Ls.has(a))return Ls.get(a);for(;Qs.has(Us);)Us++;var s=Us++;return Ls.set(a,s),Qs.set(s,a),s},Cv=function(a,s){Us=s+1,Ls.set(a,s),Qs.set(s,a)},Av="style[".concat(Vl,"][").concat(n0,'="').concat(ao,'"]'),Tv=new RegExp("^".concat(Vl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kv=function(a,s,u){for(var c,d=u.split(","),f=0,p=d.length;f<p;f++)(c=d[f])&&a.registerName(s,c)},Rv=function(a,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(kd),d=[],f=0,p=c.length;f<p;f++){var v=c[f].trim();if(v){var h=v.match(Tv);if(h){var g=0|parseInt(h[1],10),x=h[2];g!==0&&(Cv(x,g),kv(a,x,h[3]),a.getTag().insertRules(g,d)),d.length=0}else d.push(v)}}},ip=function(a){for(var s=document.querySelectorAll(Av),u=0,c=s.length;u<c;u++){var d=s[u];d&&d.getAttribute(Vl)!==t0&&(Rv(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function Mv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var d0=function(a){var s=document.head,u=a||s,c=document.createElement("style"),d=function(v){var h=Array.from(v.querySelectorAll("style[".concat(Vl,"]")));return h[h.length-1]}(u),f=d!==void 0?d.nextSibling:null;c.setAttribute(Vl,t0),c.setAttribute(n0,ao);var p=Mv();return p&&c.setAttribute("nonce",p),u.insertBefore(c,f),c},Dv=function(){function a(s){this.element=d0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,d=0,f=c.length;d<f;d++){var p=c[d];if(p.ownerNode===u)return p}throw Ka(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},a}(),Bv=function(){function a(s){this.element=d0(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),Ov=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),rp=qs,Nv={isServer:!qs,useCSSOMInjection:!fv},Xs=function(){function a(s,u,c){s===void 0&&(s=ql),u===void 0&&(u={});var d=this;this.options=at(at({},Nv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&qs&&rp&&(rp=!1,ip(this)),Dd(this,function(){return function(f){for(var p=f.getTag(),v=p.length,h="",g=function(S){var w=function(G){return Qs.get(G)}(S);if(w===void 0)return"continue";var C=f.names.get(w),j=p.getGroup(S);if(C===void 0||!C.size||j.length===0)return"continue";var O="".concat(Vl,".g").concat(S,'[id="').concat(w,'"]'),L="";C!==void 0&&C.forEach(function(G){G.length>0&&(L+="".concat(G,","))}),h+="".concat(j).concat(O,'{content:"').concat(L,'"}').concat(kd)},x=0;x<v;x++)g(x);return h}(d)})}return a.registerId=function(s){return _s(s)},a.prototype.rehydrate=function(){!this.server&&qs&&ip(this)},a.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new a(at(at({},this.options),s),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,d=u.target;return u.isServer?new Ov(d):c?new Dv(d):new Bv(d)}(this.options),new zv(s)));var s},a.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},a.prototype.registerName=function(s,u){if(_s(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},a.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(_s(s),c)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(_s(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),$v=/&/g,Lv=/^\s*\/\/.*$/gm;function f0(a,s){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=f0(u.children,s)),u})}function Uv(a){var s,u,c,d=ql,f=d.options,p=f===void 0?ql:f,v=d.plugins,h=v===void 0?lo:v,g=function(w,C,j){return j.startsWith(u)&&j.endsWith(u)&&j.replaceAll(u,"").length>0?".".concat(s):w},x=h.slice();x.push(function(w){w.type===Js&&w.value.includes("&")&&(w.props[0]=w.props[0].replace($v,u).replace(c,g))}),p.prefix&&x.push(uv),x.push(sv);var S=function(w,C,j,O){C===void 0&&(C=""),j===void 0&&(j=""),O===void 0&&(O="&"),s=O,u=C,c=new RegExp("\\".concat(u,"\\b"),"g");var L=w.replace(Lv,""),G=iv(j||C?"".concat(j," ").concat(C," { ").concat(L," }"):L);p.namespace&&(G=f0(G,p.namespace));var Z=[];return Vs(G,ov(x.concat(cv(function(T){return Z.push(T)})))),Z};return S.hash=h.length?h.reduce(function(w,C){return C.name||Ka(15),Ll(w,C.name)},i0).toString():"",S}var Hv=new Xs,md=Uv(),h0=Ee.createContext({shouldForwardProp:void 0,styleSheet:Hv,stylis:md});h0.Consumer;Ee.createContext(void 0);function gd(){return k.useContext(h0)}var m0=function(){function a(s,u){var c=this;this.inject=function(d,f){f===void 0&&(f=md);var p=c.name+f.hash;d.hasNameForId(c.id,p)||d.insertRules(c.id,p,f(c.rules,p,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,Dd(this,function(){throw Ka(12,String(c.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=md),this.name+s.hash},a}(),Gv=function(a){return a>="A"&&a<="Z"};function sp(a){for(var s="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;Gv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var g0=function(a){return a==null||a===!1||a===""},p0=function(a){var s,u,c=[];for(var d in a){var f=a[d];a.hasOwnProperty(d)&&!g0(f)&&(Array.isArray(f)&&f.isCss||qa(f)?c.push("".concat(sp(d),":"),f,";"):nr(f)?c.push.apply(c,Hl(Hl(["".concat(d," {")],p0(f),!1),["}"],!1)):c.push("".concat(sp(d),": ").concat((s=d,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in dv||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function ba(a,s,u,c){if(g0(a))return[];if(Md(a))return[".".concat(a.styledComponentId)];if(qa(a)){if(!qa(f=a)||f.prototype&&f.prototype.isReactComponent||!s)return[a];var d=a(s);return ba(d,s,u,c)}var f;return a instanceof m0?u?(a.inject(u,c),[a.getName(c)]):[a]:nr(a)?p0(a):Array.isArray(a)?Array.prototype.concat.apply(lo,a.map(function(p){return ba(p,s,u,c)})):[a.toString()]}function b0(a){for(var s=0;s<a.length;s+=1){var u=a[s];if(qa(u)&&!Md(u))return!1}return!0}var Yv=r0(ao),Vv=function(){function a(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&b0(s),this.componentId=u,this.baseHash=Ll(Yv,u),this.baseStyle=c,Xs.registerId(u)}return a.prototype.generateAndInjectStyles=function(s,u,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=Ya(d,this.staticRulesId);else{var f=Ks(ba(this.rules,s,u,c)),p=fd(Ll(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,p)){var v=c(f,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,v)}d=Ya(d,p),this.staticRulesId=p}else{for(var h=Ll(this.baseHash,c.hash),g="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")g+=S;else if(S){var w=Ks(ba(S,s,u,c));h=Ll(h,w+x),g+=w}}if(g){var C=fd(h>>>0);u.hasNameForId(this.componentId,C)||u.insertRules(this.componentId,C,c(g,".".concat(C),void 0,this.componentId)),d=Ya(d,C)}}return d},a}(),ar=Ee.createContext(void 0);ar.Consumer;function qv(a){var s=Ee.useContext(ar),u=k.useMemo(function(){return function(c,d){if(!c)throw Ka(14);if(qa(c)){var f=c(d);return f}if(Array.isArray(c)||typeof c!="object")throw Ka(8);return d?at(at({},d),c):c}(a.theme,s)},[a.theme,s]);return a.children?Ee.createElement(ar.Provider,{value:u},a.children):null}var Mu={};function Kv(a,s,u){var c=Md(a),d=a,f=!Ru(a),p=s.attrs,v=p===void 0?lo:p,h=s.componentId,g=h===void 0?function(V,U){var I=typeof V!="string"?"sc":ep(V);Mu[I]=(Mu[I]||0)+1;var $="".concat(I,"-").concat(Rd(ao+I+Mu[I]));return U?"".concat(U,"-").concat($):$}(s.displayName,s.parentComponentId):h,x=s.displayName,S=x===void 0?function(V){return Ru(V)?"styled.".concat(V):"Styled(".concat(bv(V),")")}(a):x,w=s.displayName&&s.componentId?"".concat(ep(s.displayName),"-").concat(s.componentId):s.componentId||g,C=c&&d.attrs?d.attrs.concat(v).filter(Boolean):v,j=s.shouldForwardProp;if(c&&d.shouldForwardProp){var O=d.shouldForwardProp;if(s.shouldForwardProp){var L=s.shouldForwardProp;j=function(V,U){return O(V,U)&&L(V,U)}}else j=O}var G=new Vv(u,w,c?d.componentStyle:void 0);function Z(V,U){return function(I,$,X){var ae=I.attrs,Ce=I.componentStyle,ve=I.defaultProps,Ue=I.foldedComponentIds,Ut=I.styledComponentId,lt=I.target,Ae=Ee.useContext(ar),H=gd(),F=I.shouldForwardProp||H.shouldForwardProp,le=a0($,Ae,ve)||ql,ue=function(me,re,Pe){for(var je,ot=at(at({},re),{className:void 0,theme:Pe}),Sa=0;Sa<me.length;Sa+=1){var jn=qa(je=me[Sa])?je(ot):je;for(var Ht in jn)ot[Ht]=Ht==="className"?Ya(ot[Ht],jn[Ht]):Ht==="style"?at(at({},ot[Ht]),jn[Ht]):jn[Ht]}return re.className&&(ot.className=Ya(ot.className,re.className)),ot}(ae,$,le),z=ue.as||lt,Q={};for(var P in ue)ue[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&ue.theme===le||(P==="forwardedAs"?Q.as=ue.forwardedAs:F&&!F(P,z)||(Q[P]=ue[P]));var W=function(me,re){var Pe=gd(),je=me.generateAndInjectStyles(re,Pe.styleSheet,Pe.stylis);return je}(Ce,ue),te=Ya(Ue,Ut);return W&&(te+=" "+W),ue.className&&(te+=" "+ue.className),Q[Ru(z)&&!l0.has(z)?"class":"className"]=te,X&&(Q.ref=X),k.createElement(z,Q)}(T,V,U)}Z.displayName=S;var T=Ee.forwardRef(Z);return T.attrs=C,T.componentStyle=G,T.displayName=S,T.shouldForwardProp=j,T.foldedComponentIds=c?Ya(d.foldedComponentIds,d.styledComponentId):"",T.styledComponentId=w,T.target=c?d.target:a,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=c?function(U){for(var I=[],$=1;$<arguments.length;$++)I[$-1]=arguments[$];for(var X=0,ae=I;X<ae.length;X++)hd(U,ae[X],!0);return U}({},d.defaultProps,V):V}}),Dd(T,function(){return".".concat(T.styledComponentId)}),f&&u0(T,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function op(a,s){for(var u=[a[0]],c=0,d=s.length;c<d;c+=1)u.push(s[c],a[c+1]);return u}var cp=function(a){return Object.assign(a,{isCss:!0})};function cn(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(qa(a)||nr(a))return cp(ba(op(lo,Hl([a],s,!0))));var c=a;return s.length===0&&c.length===1&&typeof c[0]=="string"?ba(c):cp(ba(op(c,s)))}function pd(a,s,u){if(u===void 0&&(u=ql),!s)throw Ka(1,s);var c=function(d){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(s,u,cn.apply(void 0,Hl([d],f,!1)))};return c.attrs=function(d){return pd(a,s,at(at({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return pd(a,s,at(at({},u),d))},c}var x0=function(a){return pd(Kv,a)},y=x0;l0.forEach(function(a){y[a]=x0(a)});var Qv=function(){function a(s,u){this.rules=s,this.componentId=u,this.isStatic=b0(s),Xs.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,u,c,d){var f=d(Ks(ba(this.rules,u,c,d)),""),p=this.componentId+s;c.insertRules(p,p,f)},a.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,u,c,d){s>2&&Xs.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,d)},a}();function y0(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=cn.apply(void 0,Hl([a],s,!1)),d="sc-global-".concat(Rd(JSON.stringify(c))),f=new Qv(c,d),p=function(h){var g=gd(),x=Ee.useContext(ar),S=Ee.useRef(g.styleSheet.allocateGSInstance(d)).current;return g.styleSheet.server&&v(S,h,g.styleSheet,x,g.stylis),Ee.useLayoutEffect(function(){if(!g.styleSheet.server)return v(S,h,g.styleSheet,x,g.stylis),function(){return f.removeStyles(S,g.styleSheet)}},[S,h,g.styleSheet,x,g.stylis]),null};function v(h,g,x,S,w){if(f.isStatic)f.renderStyles(h,hv,x,w);else{var C=at(at({},g),{theme:a0(g,S,p.defaultProps)});f.renderStyles(h,C,x,w)}}return Ee.memo(p)}function Bd(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Ks(cn.apply(void 0,Hl([a],s,!1))),d=Rd(c);return new m0(d,c)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var up="popstate";function Xv(a={}){function s(c,d){let{pathname:f,search:p,hash:v}=c.location;return bd("",{pathname:f,search:p,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:lr(d)}return Fv(s,u,null,a)}function $e(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Wt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Zv(){return Math.random().toString(36).substring(2,10)}function dp(a,s){return{usr:a.state,key:a.key,idx:s}}function bd(a,s,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Ql(s):s,state:u,key:s&&s.key||c||Zv()}}function lr({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Ql(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function Fv(a,s,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,p=d.history,v="POP",h=null,g=x();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function x(){return(p.state||{idx:null}).idx}function S(){v="POP";let L=x(),G=L==null?null:L-g;g=L,h&&h({action:v,location:O.location,delta:G})}function w(L,G){v="PUSH";let Z=bd(O.location,L,G);g=x()+1;let T=dp(Z,g),V=O.createHref(Z);try{p.pushState(T,"",V)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;d.location.assign(V)}f&&h&&h({action:v,location:O.location,delta:1})}function C(L,G){v="REPLACE";let Z=bd(O.location,L,G);g=x();let T=dp(Z,g),V=O.createHref(Z);p.replaceState(T,"",V),f&&h&&h({action:v,location:O.location,delta:0})}function j(L){return Pv(L)}let O={get action(){return v},get location(){return a(d,p)},listen(L){if(h)throw new Error("A history only accepts one active listener");return d.addEventListener(up,S),h=L,()=>{d.removeEventListener(up,S),h=null}},createHref(L){return s(d,L)},createURL:j,encodeLocation(L){let G=j(L);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:w,replace:C,go(L){return p.go(L)}};return O}function Pv(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),$e(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:lr(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function v0(a,s,u="/"){return Wv(a,s,u,!1)}function Wv(a,s,u,c){let d=typeof s=="string"?Ql(s):s,f=Yn(d.pathname||"/",u);if(f==null)return null;let p=S0(a);Iv(p);let v=null;for(let h=0;v==null&&h<p.length;++h){let g=c2(f);v=s2(p[h],g,c)}return v}function S0(a,s=[],u=[],c=""){let d=(f,p,v)=>{let h={relativePath:v===void 0?f.path||"":v,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};h.relativePath.startsWith("/")&&($e(h.relativePath.startsWith(c),`Absolute route path "${h.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(c.length));let g=Hn([c,h.relativePath]),x=u.concat(h);f.children&&f.children.length>0&&($e(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),S0(f.children,s,x,g)),!(f.path==null&&!f.index)&&s.push({path:g,score:i2(g,f.index),routesMeta:x})};return a.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))d(f,p);else for(let v of j0(f.path))d(f,p,v)}),s}function j0(a){let s=a.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let p=j0(c.join("/")),v=[];return v.push(...p.map(h=>h===""?f:[f,h].join("/"))),d&&v.push(...p),v.map(h=>a.startsWith("/")&&h===""?"/":h)}function Iv(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:r2(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Jv=/^:[\w-]+$/,e2=3,t2=2,n2=1,a2=10,l2=-2,fp=a=>a==="*";function i2(a,s){let u=a.split("/"),c=u.length;return u.some(fp)&&(c+=l2),s&&(c+=t2),u.filter(d=>!fp(d)).reduce((d,f)=>d+(Jv.test(f)?e2:f===""?n2:a2),c)}function r2(a,s){return a.length===s.length&&a.slice(0,-1).every((c,d)=>c===s[d])?a[a.length-1]-s[s.length-1]:0}function s2(a,s,u=!1){let{routesMeta:c}=a,d={},f="/",p=[];for(let v=0;v<c.length;++v){let h=c[v],g=v===c.length-1,x=f==="/"?s:s.slice(f.length)||"/",S=Zs({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},x),w=h.route;if(!S&&g&&u&&!c[c.length-1].route.index&&(S=Zs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!S)return null;Object.assign(d,S.params),p.push({params:d,pathname:Hn([f,S.pathname]),pathnameBase:h2(Hn([f,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(f=Hn([f,S.pathnameBase]))}return p}function Zs(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=o2(a.path,a.caseSensitive,a.end),d=s.match(u);if(!d)return null;let f=d[0],p=f.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:c.reduce((g,{paramName:x,isOptional:S},w)=>{if(x==="*"){let j=v[w]||"";p=f.slice(0,f.length-j.length).replace(/(.)\/+$/,"$1")}const C=v[w];return S&&!C?g[x]=void 0:g[x]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:p,pattern:a}}function o2(a,s=!1,u=!0){Wt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,h)=>(c.push({paramName:v,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function c2(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Wt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Yn(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function u2(a,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof a=="string"?Ql(a):a;return{pathname:u?u.startsWith("/")?u:d2(u,s):s,search:m2(c),hash:g2(d)}}function d2(a,s){let u=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Du(a,s,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f2(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Od(a){let s=f2(a);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Nd(a,s,u,c=!1){let d;typeof a=="string"?d=Ql(a):(d={...a},$e(!d.pathname||!d.pathname.includes("?"),Du("?","pathname","search",d)),$e(!d.pathname||!d.pathname.includes("#"),Du("#","pathname","hash",d)),$e(!d.search||!d.search.includes("#"),Du("#","search","hash",d)));let f=a===""||d.pathname==="",p=f?"/":d.pathname,v;if(p==null)v=u;else{let S=s.length-1;if(!c&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),S-=1;d.pathname=w.join("/")}v=S>=0?s[S]:"/"}let h=u2(d,v),g=p&&p!=="/"&&p.endsWith("/"),x=(f||p===".")&&u.endsWith("/");return!h.pathname.endsWith("/")&&(g||x)&&(h.pathname+="/"),h}var Hn=a=>a.join("/").replace(/\/\/+/g,"/"),h2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),m2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,g2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function p2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var w0=["POST","PUT","PATCH","DELETE"];new Set(w0);var b2=["GET",...w0];new Set(b2);var Xl=k.createContext(null);Xl.displayName="DataRouter";var io=k.createContext(null);io.displayName="DataRouterState";k.createContext(!1);var E0=k.createContext({isTransitioning:!1});E0.displayName="ViewTransition";var x2=k.createContext(new Map);x2.displayName="Fetchers";var y2=k.createContext(null);y2.displayName="Await";var dn=k.createContext(null);dn.displayName="Navigation";var sr=k.createContext(null);sr.displayName="Location";var Sn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var $d=k.createContext(null);$d.displayName="RouteError";function v2(a,{relative:s}={}){$e(Zl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=k.useContext(dn),{hash:d,pathname:f,search:p}=or(a,{relative:s}),v=f;return u!=="/"&&(v=f==="/"?u:Hn([u,f])),c.createHref({pathname:v,search:p,hash:d})}function Zl(){return k.useContext(sr)!=null}function fn(){return $e(Zl(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(sr).location}var _0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z0(a){k.useContext(dn).static||k.useLayoutEffect(a)}function Ld(){let{isDataRoute:a}=k.useContext(Sn);return a?D2():S2()}function S2(){$e(Zl(),"useNavigate() may be used only in the context of a <Router> component.");let a=k.useContext(Xl),{basename:s,navigator:u}=k.useContext(dn),{matches:c}=k.useContext(Sn),{pathname:d}=fn(),f=JSON.stringify(Od(c)),p=k.useRef(!1);return z0(()=>{p.current=!0}),k.useCallback((h,g={})=>{if(Wt(p.current,_0),!p.current)return;if(typeof h=="number"){u.go(h);return}let x=Nd(h,JSON.parse(f),d,g.relative==="path");a==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:Hn([s,x.pathname])),(g.replace?u.replace:u.push)(x,g.state,g)},[s,u,f,d,a])}k.createContext(null);function or(a,{relative:s}={}){let{matches:u}=k.useContext(Sn),{pathname:c}=fn(),d=JSON.stringify(Od(u));return k.useMemo(()=>Nd(a,JSON.parse(d),c,s==="path"),[a,d,c,s])}function j2(a,s){return C0(a,s)}function C0(a,s,u,c){$e(Zl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=k.useContext(dn),{matches:f}=k.useContext(Sn),p=f[f.length-1],v=p?p.params:{},h=p?p.pathname:"/",g=p?p.pathnameBase:"/",x=p&&p.route;{let G=x&&x.path||"";A0(h,!x||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let S=fn(),w;if(s){let G=typeof s=="string"?Ql(s):s;$e(g==="/"||G.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${G.pathname}" was given in the \`location\` prop.`),w=G}else w=S;let C=w.pathname||"/",j=C;if(g!=="/"){let G=g.replace(/^\//,"").split("/");j="/"+C.replace(/^\//,"").split("/").slice(G.length).join("/")}let O=v0(a,{pathname:j});Wt(x||O!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Wt(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=C2(O&&O.map(G=>Object.assign({},G,{params:Object.assign({},v,G.params),pathname:Hn([g,d.encodeLocation?d.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?g:Hn([g,d.encodeLocation?d.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),f,u,c);return s&&L?k.createElement(sr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},L):L}function w2(){let a=M2(),s=p2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:f},"ErrorBoundary")," or"," ",k.createElement("code",{style:f},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},s),u?k.createElement("pre",{style:d},u):null,p)}var E2=k.createElement(w2,null),_2=class extends k.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?k.createElement(Sn.Provider,{value:this.props.routeContext},k.createElement($d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function z2({routeContext:a,match:s,children:u}){let c=k.useContext(Xl);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),k.createElement(Sn.Provider,{value:a},u)}function C2(a,s=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let d=a,f=u?.errors;if(f!=null){let h=d.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);$e(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,h+1))}let p=!1,v=-1;if(u)for(let h=0;h<d.length;h++){let g=d[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=h),g.route.id){let{loaderData:x,errors:S}=u,w=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){p=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}return d.reduceRight((h,g,x)=>{let S,w=!1,C=null,j=null;u&&(S=f&&g.route.id?f[g.route.id]:void 0,C=g.route.errorElement||E2,p&&(v<0&&x===0?(A0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,j=null):v===x&&(w=!0,j=g.route.hydrateFallbackElement||null)));let O=s.concat(d.slice(0,x+1)),L=()=>{let G;return S?G=C:w?G=j:g.route.Component?G=k.createElement(g.route.Component,null):g.route.element?G=g.route.element:G=h,k.createElement(z2,{match:g,routeContext:{outlet:h,matches:O,isDataRoute:u!=null},children:G})};return u&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?k.createElement(_2,{location:u.location,revalidation:u.revalidation,component:C,error:S,children:L(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):L()},null)}function Ud(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A2(a){let s=k.useContext(Xl);return $e(s,Ud(a)),s}function T2(a){let s=k.useContext(io);return $e(s,Ud(a)),s}function k2(a){let s=k.useContext(Sn);return $e(s,Ud(a)),s}function Hd(a){let s=k2(a),u=s.matches[s.matches.length-1];return $e(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function R2(){return Hd("useRouteId")}function M2(){let a=k.useContext($d),s=T2("useRouteError"),u=Hd("useRouteError");return a!==void 0?a:s.errors?.[u]}function D2(){let{router:a}=A2("useNavigate"),s=Hd("useNavigate"),u=k.useRef(!1);return z0(()=>{u.current=!0}),k.useCallback(async(d,f={})=>{Wt(u.current,_0),u.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:s,...f}))},[a,s])}var hp={};function A0(a,s,u){!s&&!hp[a]&&(hp[a]=!0,Wt(!1,u))}k.memo(B2);function B2({routes:a,future:s,state:u}){return C0(a,void 0,u,s)}function Hs({to:a,replace:s,state:u,relative:c}){$e(Zl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=k.useContext(dn);Wt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=k.useContext(Sn),{pathname:p}=fn(),v=Ld(),h=Nd(a,Od(f),p,c==="path"),g=JSON.stringify(h);return k.useEffect(()=>{v(JSON.parse(g),{replace:s,state:u,relative:c})},[v,g,c,s,u]),null}function sn(a){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function O2({basename:a="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){$e(!Zl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),v=k.useMemo(()=>({basename:p,navigator:d,static:f,future:{}}),[p,d,f]);typeof u=="string"&&(u=Ql(u));let{pathname:h="/",search:g="",hash:x="",state:S=null,key:w="default"}=u,C=k.useMemo(()=>{let j=Yn(h,p);return j==null?null:{location:{pathname:j,search:g,hash:x,state:S,key:w},navigationType:c}},[p,h,g,x,S,w,c]);return Wt(C!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:k.createElement(dn.Provider,{value:v},k.createElement(sr.Provider,{children:s,value:C}))}function N2({children:a,location:s}){return j2(xd(a),s)}function xd(a,s=[]){let u=[];return k.Children.forEach(a,(c,d)=>{if(!k.isValidElement(c))return;let f=[...s,d];if(c.type===k.Fragment){u.push.apply(u,xd(c.props.children,f));return}$e(c.type===sn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=xd(c.props.children,f)),u.push(p)}),u}var Gs="get",Ys="application/x-www-form-urlencoded";function ro(a){return a!=null&&typeof a.tagName=="string"}function $2(a){return ro(a)&&a.tagName.toLowerCase()==="button"}function L2(a){return ro(a)&&a.tagName.toLowerCase()==="form"}function U2(a){return ro(a)&&a.tagName.toLowerCase()==="input"}function H2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function G2(a,s){return a.button===0&&(!s||s==="_self")&&!H2(a)}function yd(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let c=a[u];return s.concat(Array.isArray(c)?c.map(d=>[u,d]):[[u,c]])},[]))}function Y2(a,s){let u=yd(a);return s&&s.forEach((c,d)=>{u.has(d)||s.getAll(d).forEach(f=>{u.append(d,f)})}),u}var zs=null;function V2(){if(zs===null)try{new FormData(document.createElement("form"),0),zs=!1}catch{zs=!0}return zs}var q2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bu(a){return a!=null&&!q2.has(a)?(Wt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ys}"`),null):a}function K2(a,s){let u,c,d,f,p;if(L2(a)){let v=a.getAttribute("action");c=v?Yn(v,s):null,u=a.getAttribute("method")||Gs,d=Bu(a.getAttribute("enctype"))||Ys,f=new FormData(a)}else if($2(a)||U2(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=a.getAttribute("formaction")||v.getAttribute("action");if(c=h?Yn(h,s):null,u=a.getAttribute("formmethod")||v.getAttribute("method")||Gs,d=Bu(a.getAttribute("formenctype"))||Bu(v.getAttribute("enctype"))||Ys,f=new FormData(v,a),!V2()){let{name:g,type:x,value:S}=a;if(x==="image"){let w=g?`${g}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else g&&f.append(g,S)}}else{if(ro(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Gs,c=null,d=Ys,p=a}return f&&d==="text/plain"&&(p=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gd(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Q2(a,s,u){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Yn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function X2(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Z2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function F2(a,s,u){let c=await Promise.all(a.map(async d=>{let f=s.routes[d.route.id];if(f){let p=await X2(f,u);return p.links?p.links():[]}return[]}));return J2(c.flat(1).filter(Z2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function mp(a,s,u,c,d,f){let p=(h,g)=>u[g]?h.route.id!==u[g].route.id:!0,v=(h,g)=>u[g].pathname!==h.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==h.params["*"];return f==="assets"?s.filter((h,g)=>p(h,g)||v(h,g)):f==="data"?s.filter((h,g)=>{let x=c.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(p(h,g)||v(h,g))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function P2(a,s,{includeHydrateFallback:u}={}){return W2(a.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function W2(a){return[...new Set(a)]}function I2(a){let s={},u=Object.keys(a).sort();for(let c of u)s[c]=a[c];return s}function J2(a,s){let u=new Set;return new Set(s),a.reduce((c,d)=>{let f=JSON.stringify(I2(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}function T0(){let a=k.useContext(Xl);return Gd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function eS(){let a=k.useContext(io);return Gd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Yd=k.createContext(void 0);Yd.displayName="FrameworkContext";function k0(){let a=k.useContext(Yd);return Gd(a,"You must render this element inside a <HydratedRouter> element"),a}function tS(a,s){let u=k.useContext(Yd),[c,d]=k.useState(!1),[f,p]=k.useState(!1),{onFocus:v,onBlur:h,onMouseEnter:g,onMouseLeave:x,onTouchStart:S}=s,w=k.useRef(null);k.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let O=G=>{G.forEach(Z=>{p(Z.isIntersecting)})},L=new IntersectionObserver(O,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[a]),k.useEffect(()=>{if(c){let O=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(O)}}},[c]);let C=()=>{d(!0)},j=()=>{d(!1),p(!1)};return u?a!=="intent"?[f,w,{}]:[f,w,{onFocus:Fi(v,C),onBlur:Fi(h,j),onMouseEnter:Fi(g,C),onMouseLeave:Fi(x,j),onTouchStart:Fi(S,C)}]:[!1,w,{}]}function Fi(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function nS({page:a,...s}){let{router:u}=T0(),c=k.useMemo(()=>v0(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?k.createElement(lS,{page:a,matches:c,...s}):null}function aS(a){let{manifest:s,routeModules:u}=k0(),[c,d]=k.useState([]);return k.useEffect(()=>{let f=!1;return F2(a,s,u).then(p=>{f||d(p)}),()=>{f=!0}},[a,s,u]),c}function lS({page:a,matches:s,...u}){let c=fn(),{manifest:d,routeModules:f}=k0(),{basename:p}=T0(),{loaderData:v,matches:h}=eS(),g=k.useMemo(()=>mp(a,s,h,d,c,"data"),[a,s,h,d,c]),x=k.useMemo(()=>mp(a,s,h,d,c,"assets"),[a,s,h,d,c]),S=k.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let j=new Set,O=!1;if(s.forEach(G=>{let Z=d.routes[G.route.id];!Z||!Z.hasLoader||(!g.some(T=>T.route.id===G.route.id)&&G.route.id in v&&f[G.route.id]?.shouldRevalidate||Z.hasClientLoader?O=!0:j.add(G.route.id))}),j.size===0)return[];let L=Q2(a,p,"data");return O&&j.size>0&&L.searchParams.set("_routes",s.filter(G=>j.has(G.route.id)).map(G=>G.route.id).join(",")),[L.pathname+L.search]},[p,v,c,d,g,s,a,f]),w=k.useMemo(()=>P2(x,d),[x,d]),C=aS(x);return k.createElement(k.Fragment,null,S.map(j=>k.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...u})),w.map(j=>k.createElement("link",{key:j,rel:"modulepreload",href:j,...u})),C.map(({key:j,link:O})=>k.createElement("link",{key:j,...O})))}function iS(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var R0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R0&&(window.__reactRouterVersion="7.7.1")}catch{}function rS({basename:a,children:s,window:u}){let c=k.useRef();c.current==null&&(c.current=Xv({window:u,v5Compat:!0}));let d=c.current,[f,p]=k.useState({action:d.action,location:d.location}),v=k.useCallback(h=>{k.startTransition(()=>p(h))},[p]);return k.useLayoutEffect(()=>d.listen(v),[d,v]),k.createElement(O2,{basename:a,children:s,location:f.location,navigationType:f.action,navigator:d})}var M0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ya=k.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:p,state:v,target:h,to:g,preventScrollReset:x,viewTransition:S,...w},C){let{basename:j}=k.useContext(dn),O=typeof g=="string"&&M0.test(g),L,G=!1;if(typeof g=="string"&&O&&(L=g,R0))try{let ae=new URL(window.location.href),Ce=g.startsWith("//")?new URL(ae.protocol+g):new URL(g),ve=Yn(Ce.pathname,j);Ce.origin===ae.origin&&ve!=null?g=ve+Ce.search+Ce.hash:G=!0}catch{Wt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=v2(g,{relative:d}),[T,V,U]=tS(c,w),I=uS(g,{replace:p,state:v,target:h,preventScrollReset:x,relative:d,viewTransition:S});function $(ae){s&&s(ae),ae.defaultPrevented||I(ae)}let X=k.createElement("a",{...w,...U,href:L||Z,onClick:G||f?s:$,ref:iS(C,V),target:h,"data-discover":!O&&u==="render"?"true":void 0});return T&&!O?k.createElement(k.Fragment,null,X,k.createElement(nS,{page:Z})):X});ya.displayName="Link";var sS=k.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:p,viewTransition:v,children:h,...g},x){let S=or(p,{relative:g.relative}),w=fn(),C=k.useContext(io),{navigator:j,basename:O}=k.useContext(dn),L=C!=null&&gS(S)&&v===!0,G=j.encodeLocation?j.encodeLocation(S).pathname:S.pathname,Z=w.pathname,T=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;u||(Z=Z.toLowerCase(),T=T?T.toLowerCase():null,G=G.toLowerCase()),T&&O&&(T=Yn(T,O)||T);const V=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let U=Z===G||!d&&Z.startsWith(G)&&Z.charAt(V)==="/",I=T!=null&&(T===G||!d&&T.startsWith(G)&&T.charAt(G.length)==="/"),$={isActive:U,isPending:I,isTransitioning:L},X=U?s:void 0,ae;typeof c=="function"?ae=c($):ae=[c,U?"active":null,I?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof f=="function"?f($):f;return k.createElement(ya,{...g,"aria-current":X,className:ae,ref:x,style:Ce,to:p,viewTransition:v},typeof h=="function"?h($):h)});sS.displayName="NavLink";var oS=k.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:f,method:p=Gs,action:v,onSubmit:h,relative:g,preventScrollReset:x,viewTransition:S,...w},C)=>{let j=hS(),O=mS(v,{relative:g}),L=p.toLowerCase()==="get"?"get":"post",G=typeof v=="string"&&M0.test(v),Z=T=>{if(h&&h(T),T.defaultPrevented)return;T.preventDefault();let V=T.nativeEvent.submitter,U=V?.getAttribute("formmethod")||p;j(V||T.currentTarget,{fetcherKey:s,method:U,navigate:u,replace:d,state:f,relative:g,preventScrollReset:x,viewTransition:S})};return k.createElement("form",{ref:C,method:L,action:O,onSubmit:c?h:Z,...w,"data-discover":!G&&a==="render"?"true":void 0})});oS.displayName="Form";function cS(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D0(a){let s=k.useContext(Xl);return $e(s,cS(a)),s}function uS(a,{target:s,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:p}={}){let v=Ld(),h=fn(),g=or(a,{relative:f});return k.useCallback(x=>{if(G2(x,s)){x.preventDefault();let S=u!==void 0?u:lr(h)===lr(g);v(a,{replace:S,state:c,preventScrollReset:d,relative:f,viewTransition:p})}},[h,v,g,u,c,s,a,d,f,p])}function B0(a){Wt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=k.useRef(yd(a)),u=k.useRef(!1),c=fn(),d=k.useMemo(()=>Y2(c.search,u.current?null:s.current),[c.search]),f=Ld(),p=k.useCallback((v,h)=>{const g=yd(typeof v=="function"?v(new URLSearchParams(d)):v);u.current=!0,f("?"+g,h)},[f,d]);return[d,p]}var dS=0,fS=()=>`__${String(++dS)}__`;function hS(){let{router:a}=D0("useSubmit"),{basename:s}=k.useContext(dn),u=R2();return k.useCallback(async(c,d={})=>{let{action:f,method:p,encType:v,formData:h,body:g}=K2(c,s);if(d.navigate===!1){let x=d.fetcherKey||fS();await a.fetch(x,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:h,body:g,formMethod:d.method||p,formEncType:d.encType||v,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:h,body:g,formMethod:d.method||p,formEncType:d.encType||v,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,s,u])}function mS(a,{relative:s}={}){let{basename:u}=k.useContext(dn),c=k.useContext(Sn);$e(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...or(a||".",{relative:s})},p=fn();if(a==null){f.search=p.search;let v=new URLSearchParams(f.search),h=v.getAll("index");if(h.some(x=>x==="")){v.delete("index"),h.filter(S=>S).forEach(S=>v.append("index",S));let x=v.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Hn([u,f.pathname])),lr(f)}function gS(a,{relative:s}={}){let u=k.useContext(E0);$e(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=D0("useViewTransitionState"),d=or(a,{relative:s});if(!u.isTransitioning)return!1;let f=Yn(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=Yn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Zs(d.pathname,p)!=null||Zs(d.pathname,f)!=null}const O0="/assets/logo-BY-LKRi7.png",cr={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}},_={navy:"#10223f",navyDeep:"#0a1830",navySoft:"#1b3358",red:"#cd004e",redDark:"#a8003f",blue:"#0864c8",paper:"#f4f7fc",line:"#dce4ef",ink:"#10223f",muted:"#586c86",fontDisplay:'"Barlow Condensed", "Arial Narrow", Arial, sans-serif',fontBody:"Barlow, Arial, Helvetica, sans-serif"},pS=y.a`
  position: absolute;
  left: 1rem;
  top: -100px;
  z-index: 200;
  background: ${_.navy};
  color: #fff;
  font-family: ${_.fontBody};
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 8px;

  &:focus {
    top: 0.75rem;
  }
`,bS=y.nav`
  background: #fff;
  border-bottom: 1px solid ${_.line};
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: ${_.fontBody};
  text-align: left;
`,xS=y.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
  }
`,yS=y(ya)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  border-radius: 8px;
`,vS=y.img`
  height: 44px;
  width: 44px;
  object-fit: contain;
`,SS=y.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`,jS=y.span`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: ${_.navy};
  white-space: nowrap;
`,wS=y.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${_.muted};

  @media (max-width: 380px) {
    display: none;
  }
`,ES=y.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid ${_.line};
    box-shadow: 0 12px 24px rgba(16, 34, 63, 0.08);
    padding: 0.75rem 1rem 1rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    display: ${a=>a.$open?"flex":"none"};
  }
`,gp=y(ya)`
  text-decoration: none;
  color: ${a=>a.$active?_.navy:_.muted};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0.9rem;
    right: 0.9rem;
    bottom: 0.25rem;
    height: 2px;
    background: ${_.red};
    opacity: ${a=>a.$active?1:0};
  }

  &:hover {
    color: ${_.navy};
    background: ${_.paper};
  }

  @media (max-width: 767px) {
    padding: 0.85rem 0.9rem;

    &::after {
      left: 0;
      right: auto;
      top: 0.6rem;
      bottom: 0.6rem;
      width: 3px;
      height: auto;
    }
  }
`,_S=y(ya)`
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.1rem;
  border-radius: 8px;
  background: ${_.red};
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    background: ${_.redDark};
  }

  @media (max-width: 767px) {
    margin: 0.5rem 0 0;
  }
`,zS=y.button`
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: ${_.navy};
  color: #fff;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${_.navySoft};
    border-color: transparent;
  }

  @media (max-width: 767px) {
    display: inline-flex;
  }
`,CS=y.span`
  position: relative;
  width: 20px;
  height: 2px;
  background: ${a=>a.$open?"transparent":"#fff"};

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 2px;
    background: #fff;
    transition: transform 0.2s ease;
  }
  &::before {
    transform: ${a=>a.$open?"rotate(45deg)":"translateY(-6px)"};
  }
  &::after {
    transform: ${a=>a.$open?"rotate(-45deg)":"translateY(6px)"};
  }
`;function N0(){const a=fn(),[s,u]=k.useState(!1),c=!1,d=()=>u(!1);return k.useEffect(()=>{if(!s)return;const f=p=>{p.key==="Escape"&&u(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[s]),i.jsxs(i.Fragment,{children:[i.jsx(pS,{href:"#inhalt",children:"Zum Inhalt springen"}),i.jsx(bS,{"aria-label":"Hauptnavigation",children:i.jsxs(xS,{children:[i.jsxs(yS,{to:"/sponsoring",onClick:d,children:[i.jsx(vS,{src:O0,alt:""}),i.jsxs(SS,{children:[i.jsx(jS,{children:"SC Konstanz-Wollmatingen"}),i.jsx(wS,{children:"Partner & Sponsoring"})]})]}),i.jsx(zS,{"aria-label":s?"Menü schließen":"Menü öffnen","aria-expanded":s,"aria-controls":"hauptmenue",onClick:()=>u(f=>!f),children:i.jsx(CS,{$open:s})}),i.jsxs(ES,{id:"hauptmenue",$open:s,children:[i.jsx(gp,{to:"/sponsoring",$active:a.pathname==="/sponsoring","aria-current":a.pathname==="/sponsoring"?"page":void 0,onClick:d,children:"Sponsoring"}),i.jsx(gp,{to:"/sponsoring/club-500",$active:a.pathname==="/sponsoring/club-500","aria-current":a.pathname==="/sponsoring/club-500"?"page":void 0,onClick:d,children:"500er Club"}),c,i.jsx(_S,{to:"/sponsoring#kontakt",onClick:d,children:"Anfrage stellen"})]})]})})]})}const AS=y.footer`
  width: 100%;
  background: ${_.navyDeep};
  border-top: 4px solid ${_.red};
  color: rgba(255, 255, 255, 0.72);
  font-family: ${_.fontBody};
  font-size: 0.95rem;
  text-align: left;
  padding: 2.5rem 1rem 2rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem 2.5rem;
  }
`,TS=y.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }
`,kS=y.div`
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    background: #fff;
    border-radius: 50%;
    padding: 3px;
  }
`,RS=y.div`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0.35rem;
`,pp=y.h2`
  font-family: ${_.fontDisplay};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  margin: 0 0 0.75rem;
`,bp=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.4rem;
`,$0=`
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`,Cs=y.a`
  ${$0}
`,xp=y(ya)`
  ${$0}
`,MS=y.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;function so(){return i.jsxs(AS,{children:[i.jsxs(TS,{children:[i.jsxs(kS,{children:[i.jsx("img",{src:O0,alt:""}),i.jsxs("div",{children:[i.jsx(RS,{children:"SC Konstanz-Wollmatingen e.V."}),"Schleyerweg 5, 78467 Konstanz"]})]}),i.jsxs("nav",{"aria-label":"Kontakt",children:[i.jsx(pp,{children:"Sponsoring"}),i.jsxs(bp,{children:[i.jsx("li",{children:i.jsx(Cs,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})}),i.jsx("li",{children:i.jsx(xp,{to:"/sponsoring/club-500",children:"500er Club"})}),i.jsx("li",{children:i.jsx(Cs,{href:"https://www.sckw.de",target:"_blank",rel:"noopener",children:"sckw.de"})})]})]}),i.jsxs("nav",{"aria-label":"Rechtliches",children:[i.jsx(pp,{children:"Rechtliches"}),i.jsxs(bp,{children:[i.jsx("li",{children:i.jsx(Cs,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})}),i.jsx("li",{children:i.jsx(Cs,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"})})]})]})]}),i.jsxs(MS,{children:[i.jsxs("span",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen e.V."]}),i.jsx(xp,{to:"/sponsoring/spielerpatenschaft",children:"Personal Partner"})]})]})}const L0="/assets/cheerleading_0-DQQGXi0R.jpg",U0="/assets/cheerleading_1-NkLBARmH.jpg",H0="/assets/cheerleading_2-CrezcZYL.jpg",G0="/assets/cheerleading_3-GN5rPHNN.jpg",Y0="/assets/1-ClVWb4ei.png",V0="/assets/10-Bwp2eIye.png",q0="/assets/11-W061sOUI.png",K0="/assets/12-TjJyzl8L.png",Q0="/assets/13-ChUUCdQQ.png",X0="/assets/14-BVhdRr98.png",Z0="/assets/2-CcfgIQYe.png",F0="/assets/3-DYiPkVd7.png",P0="/assets/4-1upoqVoS.png",W0="/assets/5-D0tadXAC.png",I0="/assets/6-NJ4ELm_j.png",J0="/assets/7-BXo4_Bcj.png",eb="/assets/8-BbOqEnj_.png",tb="/assets/9-CIK0gi9o.png",nb="/assets/herren_0-BVVgyt1l.jpg",ab="/assets/herren_1-B8ywOnNy.jpg",lb="/assets/herren_10-DPVQsg9B.jpg",ib="/assets/herren_11-wfWG62H3.jpg",rb="/assets/herren_12-DEJSN2zG.jpg",sb="/assets/herren_13-F52vdukE.jpg",ob="/assets/herren_14-Cq9hoKfG.jpg",cb="/assets/herren_15-aYIFGauG.jpg",ub="/assets/herren_16-NYI2EaEN.jpg",db="/assets/herren_17-B_52ysA2.jpg",fb="/assets/herren_18-DbwjVNKJ.jpg",hb="/assets/herren_19-BduD_J85.png",mb="/assets/herren_2--jFuixBF.jpg",gb="/assets/herren_3-BPz1zlkG.jpg",pb="/assets/herren_4-BZRrQaFr.jpg",bb="/assets/herren_5-D-QrfY2P.jpg",xb="/assets/herren_6-DWQvi6Am.jpg",yb="/assets/herren_7-BXO6B8Bt.jpg",vb="/assets/herren_8-Cg4rdr7T.jpg",Sb="/assets/herren_9-DoLnTdRG.jpg",jb="/assets/herren_club500_1-DNikBmOh.png",wb="/assets/herren_club500_2-CABnv8vs.png",Eb="/assets/herren_club500_3-Cjxe_RiU.png",_b="/assets/herren_club500_4-Dgm0Z9_i.png",zb="/assets/herren_club500_5-3OeJLCAP.png",Cb="/assets/herren_jubel_500club-mxBrnD8H.png",Ab="/assets/IMG-team-BGcF1agj.png",Tb="/assets/IMG_5349-CpvIVKhM.jpg",kb="/assets/IMG_5369-DQ4CSwdg.jpg",Rb="/assets/IMG_5421-BBzniIEN.jpg",Mb="/assets/IMG_5442-D2PgutWB.jpg",Db="/assets/IMG_5952-B9VW6Qie.jpg",Bb="/assets/Unbenann324t-IPGo6eoQ.png",Ob="/assets/image0-DDrU5aZn.jpeg",Nb="/assets/image11-BNM8hTkT.jpeg",$b="/assets/image8-BUnedp9U.jpeg",DS="/assets/grafhardenberg-Di5cVggE.png",BS="/assets/horta-DydWIGV7.png",OS="/assets/logans-BgpKwKYA.png",NS="/assets/ricobet-DsVC-eZt.png",$S="/assets/rothaus-DqkKD9yW.png",LS="/assets/tasty-B2pSa1rE.png",US="/assets/cabin-window-B83r_CDB.jpg",HS="/assets/outside-9-xz17qL.jpg",GS="/assets/shower-B75caJ-F.jpg",YS="/assets/sitting-area-D7khB3Gw.jpg",VS="/assets/toilet-BpMHYbhh.jpg",qS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":L0,"../assets/gallery/cheerleading/cheerleading_1.jpg":U0,"../assets/gallery/cheerleading/cheerleading_2.jpg":H0,"../assets/gallery/cheerleading/cheerleading_3.jpg":G0,"../assets/gallery/damen/1.png":Y0,"../assets/gallery/damen/10.png":V0,"../assets/gallery/damen/11.png":q0,"../assets/gallery/damen/12.png":K0,"../assets/gallery/damen/13.png":Q0,"../assets/gallery/damen/14.png":X0,"../assets/gallery/damen/2.png":Z0,"../assets/gallery/damen/3.png":F0,"../assets/gallery/damen/4.png":P0,"../assets/gallery/damen/5.png":W0,"../assets/gallery/damen/6.png":I0,"../assets/gallery/damen/7.png":J0,"../assets/gallery/damen/8.png":eb,"../assets/gallery/damen/9.png":tb,"../assets/gallery/herren/herren_0.jpg":nb,"../assets/gallery/herren/herren_1.jpg":ab,"../assets/gallery/herren/herren_10.jpg":lb,"../assets/gallery/herren/herren_11.jpg":ib,"../assets/gallery/herren/herren_12.jpg":rb,"../assets/gallery/herren/herren_13.jpg":sb,"../assets/gallery/herren/herren_14.jpg":ob,"../assets/gallery/herren/herren_15.jpg":cb,"../assets/gallery/herren/herren_16.jpg":ub,"../assets/gallery/herren/herren_17.jpg":db,"../assets/gallery/herren/herren_18.jpg":fb,"../assets/gallery/herren/herren_19.png":hb,"../assets/gallery/herren/herren_2.jpg":mb,"../assets/gallery/herren/herren_3.jpg":gb,"../assets/gallery/herren/herren_4.jpg":pb,"../assets/gallery/herren/herren_5.jpg":bb,"../assets/gallery/herren/herren_6.jpg":xb,"../assets/gallery/herren/herren_7.jpg":yb,"../assets/gallery/herren/herren_8.jpg":vb,"../assets/gallery/herren/herren_9.jpg":Sb,"../assets/gallery/herren/herren_club500_1.png":jb,"../assets/gallery/herren/herren_club500_2.png":wb,"../assets/gallery/herren/herren_club500_3.png":Eb,"../assets/gallery/herren/herren_club500_4.png":_b,"../assets/gallery/herren/herren_club500_5.png":zb,"../assets/gallery/herren/herren_jubel_500club.png":Cb,"../assets/gallery/jfv/IMG-team.png":Ab,"../assets/gallery/jfv/IMG_5349.jpg":Tb,"../assets/gallery/jfv/IMG_5369.jpg":kb,"../assets/gallery/jfv/IMG_5421.jpg":Rb,"../assets/gallery/jfv/IMG_5442.jpg":Mb,"../assets/gallery/jfv/IMG_5952.jpg":Db,"../assets/gallery/jfv/Unbenann324t.png":Bb,"../assets/gallery/jfv/image0.jpeg":Ob,"../assets/gallery/jfv/image11.jpeg":Nb,"../assets/gallery/jfv/image8.jpeg":$b}),KS=Object.assign({"../assets/sponsors/grafhardenberg.png":DS,"../assets/sponsors/horta.png":BS,"../assets/sponsors/logans.png":OS,"../assets/sponsors/ricobet.png":NS,"../assets/sponsors/rothaus.png":$S,"../assets/sponsors/tasty.png":LS}),QS=Object.assign({"../assets/renovation/cabin-window.jpg":US,"../assets/renovation/outside.jpg":HS,"../assets/renovation/shower.jpg":GS,"../assets/renovation/sitting-area.jpg":YS,"../assets/renovation/toilet.jpg":VS}),Lb=a=>a.split("/").pop()?.toLowerCase()||"",XS=a=>{const s=a.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function ZS(a){const s=[...a];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const FS=()=>{const a={};Object.entries(qS).forEach(([c,d])=>{const f=XS(c);a[f]||(a[f]=[]),a[f].push(d)}),Object.keys(a).forEach(c=>{a[c]=ZS(a[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{a[c]&&(s[c]=a[c])}),Object.keys(a).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=a[c])}),s},PS=()=>{const a={};return Object.entries(KS).forEach(([s,u])=>{const c=Lb(s);a[c]=u}),a},Ub=()=>{const a={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(QS).forEach(([s,u])=>{const c=Lb(s);c.includes("sitting")?a.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?a.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&a.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?a.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?a.waschkueche.push({src:u,alt:"Dusche"}):a.waschkueche.push({src:u,alt:"Waschküche"}))}),a},ht=a=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":L0,"../assets/gallery/cheerleading/cheerleading_1.jpg":U0,"../assets/gallery/cheerleading/cheerleading_2.jpg":H0,"../assets/gallery/cheerleading/cheerleading_3.jpg":G0,"../assets/gallery/damen/1.png":Y0,"../assets/gallery/damen/10.png":V0,"../assets/gallery/damen/11.png":q0,"../assets/gallery/damen/12.png":K0,"../assets/gallery/damen/13.png":Q0,"../assets/gallery/damen/14.png":X0,"../assets/gallery/damen/2.png":Z0,"../assets/gallery/damen/3.png":F0,"../assets/gallery/damen/4.png":P0,"../assets/gallery/damen/5.png":W0,"../assets/gallery/damen/6.png":I0,"../assets/gallery/damen/7.png":J0,"../assets/gallery/damen/8.png":eb,"../assets/gallery/damen/9.png":tb,"../assets/gallery/herren/herren_0.jpg":nb,"../assets/gallery/herren/herren_1.jpg":ab,"../assets/gallery/herren/herren_10.jpg":lb,"../assets/gallery/herren/herren_11.jpg":ib,"../assets/gallery/herren/herren_12.jpg":rb,"../assets/gallery/herren/herren_13.jpg":sb,"../assets/gallery/herren/herren_14.jpg":ob,"../assets/gallery/herren/herren_15.jpg":cb,"../assets/gallery/herren/herren_16.jpg":ub,"../assets/gallery/herren/herren_17.jpg":db,"../assets/gallery/herren/herren_18.jpg":fb,"../assets/gallery/herren/herren_19.png":hb,"../assets/gallery/herren/herren_2.jpg":mb,"../assets/gallery/herren/herren_3.jpg":gb,"../assets/gallery/herren/herren_4.jpg":pb,"../assets/gallery/herren/herren_5.jpg":bb,"../assets/gallery/herren/herren_6.jpg":xb,"../assets/gallery/herren/herren_7.jpg":yb,"../assets/gallery/herren/herren_8.jpg":vb,"../assets/gallery/herren/herren_9.jpg":Sb,"../assets/gallery/herren/herren_club500_1.png":jb,"../assets/gallery/herren/herren_club500_2.png":wb,"../assets/gallery/herren/herren_club500_3.png":Eb,"../assets/gallery/herren/herren_club500_4.png":_b,"../assets/gallery/herren/herren_club500_5.png":zb,"../assets/gallery/herren/herren_jubel_500club.png":Cb,"../assets/gallery/jfv/IMG-team.png":Ab,"../assets/gallery/jfv/IMG_5349.jpg":Tb,"../assets/gallery/jfv/IMG_5369.jpg":kb,"../assets/gallery/jfv/IMG_5421.jpg":Rb,"../assets/gallery/jfv/IMG_5442.jpg":Mb,"../assets/gallery/jfv/IMG_5952.jpg":Db,"../assets/gallery/jfv/Unbenann324t.png":Bb,"../assets/gallery/jfv/image0.jpeg":Ob,"../assets/gallery/jfv/image11.jpeg":Nb,"../assets/gallery/jfv/image8.jpeg":$b})).find(([c])=>c.includes(a));return u?u[1]:""},WS=(a,s)=>ht(`${a}/${a}_${s}.jpg`);FS(),PS(),Ub();const IS={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28"},{name:"Stefan K.",amount:800,date:"2024-07-26"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27"}]}},JS={packages:IS},e5=y.div`
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
`,t5=y.div`
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
`,n5=y.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,a5=y.div`
  margin-bottom: 1.5rem;
`,l5=y.div`
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
`,i5=y.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,r5=y.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${a=>Math.min(a.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,s5=y.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,o5=y.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,c5=y.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,u5=y.div`
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
`,d5=y.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,f5=y.div`
  flex: 1;
`,h5=y.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,m5=y.span`
  font-weight: 600;
  color: #374151;
`,g5=y.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,p5=y.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,b5=y.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,x5=y.button`
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
`,y5=y.div`
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
`,v5=()=>{const a=JS;return{kabinen:{current:a.packages.kabinen.current,goal:a.packages.kabinen.goal,donors:a.packages.kabinen.donors},fassade:{current:a.packages.fassade.current,goal:a.packages.fassade.goal,donors:a.packages.fassade.donors},waschkueche:{current:a.packages.waschkueche.current,goal:a.packages.waschkueche.goal,donors:a.packages.waschkueche.donors}}};function S5({data:a=v5(),realTime:s=!1}){const[u,c]=k.useState(a),[d,f]=k.useState(new Date),[p,v]=k.useState(!1),h=async()=>{v(!0);try{const S=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(S.ok){const w=await S.json(),C={kabinen:{current:w.packages.kabinen.current,goal:w.packages.kabinen.goal,donors:w.packages.kabinen.donors},fassade:{current:w.packages.fassade.current,goal:w.packages.fassade.goal,donors:w.packages.fassade.donors},waschkueche:{current:w.packages.waschkueche.current,goal:w.packages.waschkueche.goal,donors:w.packages.waschkueche.donors}};c(C),f(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(S){console.error("❌ Fehler beim Laden der Spendendaten:",S)}finally{v(!1)}};k.useEffect(()=>{if(!s)return;const S=setInterval(()=>{h()},3e4);return()=>clearInterval(S)},[s]);const g=S=>{switch(S){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},x=S=>{switch(S){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return S}};return i.jsxs(i.Fragment,{children:[i.jsx(e5,{children:Object.entries(u).map(([S,w])=>{const C=w.current/w.goal*100;return i.jsxs(t5,{children:[i.jsxs(n5,{children:[g(S)," ",x(S)]}),i.jsxs(a5,{children:[i.jsxs(l5,{children:[i.jsxs("span",{children:[w.current.toLocaleString("de-DE")," €"]}),i.jsxs("span",{children:[w.goal.toLocaleString("de-DE")," €"]})]}),i.jsx(i5,{children:i.jsx(r5,{$progress:C})}),i.jsxs(s5,{children:[Math.round(C),"% erreicht"]})]}),i.jsxs(o5,{children:[i.jsxs(c5,{children:["💝 Spender (",w.donors.length,")"]}),i.jsx(u5,{children:w.donors.length>0?w.donors.slice().reverse().map((j,O)=>i.jsxs(d5,{children:[i.jsxs(f5,{children:[i.jsx(h5,{children:j.anonymous?"Anonymer Spender":j.name}),j.comment&&i.jsxs(g5,{children:['"',j.comment,'"']}),j.date&&i.jsx(p5,{children:j.date})]}),i.jsxs(m5,{children:[j.amount.toLocaleString("de-DE")," €"]})]},O)):i.jsx(b5,{children:"Noch keine Spenden 🤗"})})]})]},S)})}),i.jsxs(x5,{onClick:h,disabled:p,title:"Spendendaten aktualisieren",children:["🔄",p?"Lade...":"Aktualisieren"]}),i.jsxs(y5,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const j5=y.section`
  background: url("${WS("herren",18)}") center/cover;
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
`,w5=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,E5=y.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,_5=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,z5=y.main`
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
`,C5=y.section`
  margin-bottom: 4rem;
`,A5=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,T5=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,k5=y.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,R5=y.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,M5=y.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,D5=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,B5=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,O5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Ou=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Nu=y.div`
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
`,N5=y.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,$5=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,L5=y.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,U5=y.div`
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
`,H5=y.div`
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
`,G5=y.div`
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
`,Y5=y.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,V5=y.button`
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
`,yp=y.button`
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
`,$u=y.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Lu=y.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,q5=y.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,K5=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,Q5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Uu=y.div`
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
`,Hu=y.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Gu=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Yu=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Vu=y.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,X5=y.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Z5=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,F5=y.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,P5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,As=y.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Ts=y.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,ks=y.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,W5=y.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,I5=y.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,J5=y.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,ej=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,tj=y.a`
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
`,nj=y.div`
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
`,aj=y.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,lj=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,ij=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,rj=y.button`
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
`,sj=y.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,qu=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Ku=y.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Qu=y.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,oj=y.button`
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
`,cj=y.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,Bl=Ub();function Xu({images:a,onImageClick:s}){const[u,c]=k.useState(0);return k.useEffect(()=>{if(a.length<=1)return;const d=setInterval(()=>{c(f=>(f+1)%a.length)},4e3);return()=>clearInterval(d)},[a.length]),a.length===0?i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):i.jsxs(N5,{children:[a.map((d,f)=>i.jsx($5,{src:d.src,alt:d.alt,$isActive:f===u,onClick:()=>s(f)},f)),a.length>1&&i.jsx(L5,{children:a.map((d,f)=>i.jsx(U5,{$isActive:f===u,onClick:()=>c(f)},f))})]})}function uj({images:a,initialIndex:s,onClose:u}){const[c,d]=k.useState(s),f=k.useCallback(()=>{d(v=>(v+1)%a.length)},[a.length]),p=k.useCallback(()=>{d(v=>(v-1+a.length)%a.length)},[a.length]);return k.useEffect(()=>{const v=h=>{h.key==="Escape"&&u(),h.key==="ArrowRight"&&f(),h.key==="ArrowLeft"&&p()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[u,f,p]),i.jsx(H5,{onClick:u,children:i.jsxs(G5,{onClick:v=>v.stopPropagation(),children:[i.jsx(V5,{onClick:u,children:"×"}),i.jsx(Y5,{src:a[c].src,alt:a[c].alt}),a.length>1&&i.jsxs(i.Fragment,{children:[i.jsx(yp,{$direction:"prev",onClick:p,children:"‹"}),i.jsx(yp,{$direction:"next",onClick:f,children:"›"})]})]})})}function dj(){const[a,s]=k.useState(!1),[u,c]=k.useState([]),[d,f]=k.useState(0),[p,v]=k.useState(!1),h=(S,w)=>{c(S),f(w),s(!0)},g=S=>{S.preventDefault(),v(!0)},x=()=>{navigator.clipboard.writeText("DE84 6905 0001 0000 0929 99")};return i.jsxs(i.Fragment,{children:[i.jsx(j5,{children:i.jsxs(w5,{children:[i.jsx(E5,{children:"🏟️ Fürstenberg weiterentwickeln"}),i.jsx(_5,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),i.jsxs(z5,{children:[i.jsxs(C5,{children:[i.jsx(A5,{children:"Der Fürstenberg - unser Kultplatz"}),i.jsx(T5,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),i.jsxs(k5,{children:[i.jsx(R5,{children:"✨ Charme erhalten, Komfort verbessern"}),i.jsx(M5,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),i.jsxs(D5,{children:[i.jsx(B5,{children:"🔍 Wo wir ansetzen möchten"}),i.jsxs(O5,{children:[i.jsxs(Ou,{children:[i.jsx(Nu,{children:i.jsx(Xu,{images:Bl.kabinen,onImageClick:S=>h(Bl.kabinen,S)})}),i.jsx($u,{children:"🔧 Kabinen komfortabler gestalten"}),i.jsx(Lu,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),i.jsxs(Ou,{children:[i.jsx(Nu,{children:i.jsx(Xu,{images:Bl.fassade,onImageClick:S=>h(Bl.fassade,S)})}),i.jsx($u,{children:"🎨 Fassade & Fenster erneuern"}),i.jsx(Lu,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),i.jsxs(Ou,{children:[i.jsx(Nu,{children:i.jsx(Xu,{images:Bl.waschkueche,onImageClick:S=>h(Bl.waschkueche,S)})}),i.jsx($u,{children:"🧺 Waschküche auf Vordermann bringen"}),i.jsx(Lu,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),i.jsxs(q5,{children:[i.jsx(K5,{children:"✨ Unsere Pläne für den Fürstenberg"}),i.jsxs(Q5,{children:[i.jsxs(Uu,{children:[i.jsx(Hu,{children:"🪑"}),i.jsx(Gu,{children:"Kabinen sanieren"}),i.jsx(Yu,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),i.jsx(Vu,{children:"~8.000 €"})]}),i.jsxs(Uu,{children:[i.jsx(Hu,{children:"🎨"}),i.jsx(Gu,{children:"Fassade & Fenster erneuern"}),i.jsx(Yu,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),i.jsx(Vu,{children:"~15.000 €"})]}),i.jsxs(Uu,{children:[i.jsx(Hu,{children:"🧺"}),i.jsx(Gu,{children:"Waschküche modernisieren"}),i.jsx(Yu,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),i.jsx(Vu,{children:"~5.000 €"})]})]})]}),i.jsxs(X5,{children:[i.jsx(Z5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),i.jsx(F5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),i.jsxs(P5,{children:[i.jsxs(As,{children:[i.jsx(Ts,{children:"🏆"}),i.jsxs(ks,{children:[i.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),i.jsxs(As,{children:[i.jsx(Ts,{children:"📄"}),i.jsxs(ks,{children:[i.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),i.jsxs(As,{children:[i.jsx(Ts,{children:"📱"}),i.jsxs(ks,{children:[i.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),i.jsxs(As,{children:[i.jsx(Ts,{children:"🎯"}),i.jsxs(ks,{children:[i.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),i.jsxs(W5,{children:[i.jsx(I5,{children:"🤝 Gemeinsam für den Fürstenberg"}),i.jsx(J5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),i.jsx(S5,{realTime:!0}),i.jsx(ej,{children:i.jsx(tj,{className:"primary",href:"#",onClick:g,children:"🏦 Per Überweisung spenden"})})]})]}),i.jsx(so,{}),p&&i.jsx(nj,{onClick:()=>v(!1),children:i.jsxs(aj,{onClick:S=>S.stopPropagation(),children:[i.jsxs(lj,{children:[i.jsx(ij,{children:"Kontoverbindung für Spenden"}),i.jsx(rj,{onClick:()=>v(!1),children:"×"})]}),i.jsxs(sj,{children:[i.jsxs(qu,{children:[i.jsx(Ku,{children:"Kontoinhaber:"}),i.jsx(Qu,{children:"Sport Club Konstanz-Wollmatingen e.V."})]}),i.jsxs(qu,{children:[i.jsx(Ku,{children:"IBAN:"}),i.jsx(Qu,{children:"DE84 6905 0001 0000 0929 99"})]}),i.jsxs(qu,{children:[i.jsx(Ku,{children:"BIC:"}),i.jsx(Qu,{children:"SOLADES1KNZ"})]})]}),i.jsx(oj,{onClick:x,children:"📋 IBAN kopieren"}),i.jsx(cj,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),a&&i.jsx(uj,{images:u,initialIndex:d,onClose:()=>s(!1)})]})}const Zu={text:"Meister 2025/26 und Aufsteiger.",highlight:"Verbandsliga Südbaden",suffix:"Seit Saison 26/27 spielen wir in der"},fj=["Auggen","Bühlertal","Denzlingen","Gundelfingen","Hausen","Hofstetten","Kuppenheim","Lahr","Laufenburg","Linx","Pfullendorf","Rielasingen","Salem","Wolfenweiler","Wyhl"],Vd=[{value:"1,7 Mio.",label:"Social-Media-Views in 12 Monaten",description:"IG 1,32 Mio. + FB 414K, 01.10.2025 - 05.10.2026, 100 % organisch"},{value:"63.300",label:"Personen erreicht auf Instagram",description:"Instagram Reach, 01.10.2025 - 05.10.2026"},{value:"52 %",label:"der Aufrufe von Nicht-Followern",description:"Instagram, letzte 90 Tage (431.973 Aufrufe), Stand 05.10.2026"},{value:"60.000+",label:"Website-Aufrufe / Jahr",description:"23.800 Sessions, Ø 2:19 Min. Verweildauer"}],hj="Logo in allen Spielvor- und Nachberichten · Stadionansage bei jedem Heimspiel · Logo auf der Startseite",vd=[{id:"hauptsponsor",name:"Hauptsponsor",preis:"15.000 €",topFeature:"Trikotbrust",trikot:"Brust (bis 400 cm²)",bande:"9 m",banner:"1× XL (3 × 2 m)",magazin:"1 Seite",saisonkarten:10,vergeben:!0,sponsorName:"Fuchsbau Immobilien",sponsorLogo:"/sponsors/fuchsbau-logo.png",sponsorWebsite:"https://immofuchsbau.com/"},{id:"stadionname",name:"Stadionname-Partner",preis:"12.000 €",topFeature:"Namensrecht Stadion",trikot:"–",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:10,vergeben:!1},{id:"co-sponsor-1",name:"Co-Sponsor I",preis:"9.500 €",topFeature:"Trikot-Rücken",trikot:"Rücken (bis 200 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1},{id:"co-sponsor-2",name:"Co-Sponsor II",preis:"8.000 €",topFeature:"Trikot-Ärmel",trikot:"Ärmel (2 × 100 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1}],Sd=[{name:"Einzelbande",groesse:"3 × 1 m",preis:"600 €",slots:25,kategorie:"bande"},{name:"Doppelbande",groesse:"6 × 1 m",preis:"1.000 €",slots:12,kategorie:"bande"},{name:"Banner Standard",groesse:"ca. 2 × 1,5 m",preis:"1.200 €",slots:10,kategorie:"banner"},{name:"Banner XL",groesse:"ca. 3 × 2 m",preis:"2.000 €",slots:4,kategorie:"banner"}],vp=[{name:"Ballspende",beschreibung:"Ihr Name als Ballspender: Durchsage vor dem Spiel, bei jedem Tor und zur Halbzeit, dazu eine Instagram-Story.",preis:"150 € / Spiel",hinweis:"5er-Pack: 500 €"},{name:"Spielpräsentator",beschreibung:"Alle Aufstellungen und Auswechslungen, präsentiert von Ihrer Firma.",preis:"ab 250 € / Spiel"},{name:"Magazin-Inserat",beschreibung:"Unser Heimspielmagazin: 15 Ausgaben pro Saison, je rund 100 gedruckte Exemplare und 1.000 bis 1.500 Online-Zugriffe.",preis:"250 - 1.000 €",hinweis:"1/4 Seite 250 € · 1/2 Seite 500 € · 1 Seite 1.000 €"}],mj=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Fu={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},Hb=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],Gb=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Yb=["Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],gj="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",jt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},pj=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],bj=y.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 1.25rem;
  }
`,xj=y.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  background: #fff;
  border: 1px solid ${_.line};
  border-top: 4px solid ${_.red};
  border-radius: 14px;
  padding: 1.5rem;
  text-decoration: none;
  min-height: 220px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${_.blue};
    border-top-color: ${_.red};
  }
`,yj=y.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${_.red};
`,vj=y.img`
  align-self: center;
  width: 100%;
  max-width: 220px;
  max-height: 120px;
  object-fit: contain;
`,Sj=y.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${_.ink};
`,jj=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`,wj=y.a`
  height: 100%;
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  text-decoration: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${_.blue};
  }
`,Ej=y.img`
  max-width: 100%;
  max-height: 48px;
  object-fit: contain;
`,_j={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Sparkasse Bodensee",logo:"/sponsors/sparkasse-bodensee.png",website:"https://www.sparkasse-bodensee.de/"},{name:"MUMM Magazin",logo:"/sponsors/mumm-magazin.png",website:"https://www.nil-media.de/mumm-magazin/"},{name:"FUCHS",logo:"/sponsors/fuchs.png",website:"https://www.fuchs-haustechnik.de/"},{name:"Logan's Linde",logo:"/sponsors/logans-linde.png",website:"https://logans-wollmatingen.de/"},{name:"KARAKI Services",logo:"/sponsors/karaki-services.png",website:"https://karaki-services.de/"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"https://www.danlin-media.de/"},{name:"grenz|gänger tools",logo:"/sponsors/grenzgaenger-tools.png",website:"https://grenzgaenger-tools.de"}]};function zj(){const{hauptsponsor:a,partners:s}=_j;return i.jsxs(bj,{children:[i.jsxs(xj,{href:a.website,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(yj,{children:"Hauptsponsor"}),i.jsx(vj,{src:a.logo,alt:a.name}),i.jsx(Sj,{children:a.name})]}),i.jsx(jj,{"aria-label":"Partner",children:s.map(u=>i.jsx("li",{children:i.jsx(wj,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:i.jsx(Ej,{src:u.logo,alt:u.name})})},u.name))})]})}const Fl=cn`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0 1.4rem;
  border-radius: 8px;
  font-family: ${_.fontBody};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  ${({$variant:a="primary"})=>a==="primary"?cn`
          background: ${_.red};
          color: #fff;
          border: 2px solid ${_.red};
          &:hover {
            background: ${_.redDark};
            border-color: ${_.redDark};
            color: #fff;
          }
        `:a==="outlineLight"?cn`
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.55);
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              border-color: #fff;
              color: #fff;
            }
          `:cn`
            background: transparent;
            color: ${_.navy};
            border: 2px solid ${_.navy};
            &:hover {
              background: ${_.navy};
              color: #fff;
            }
          `}
`,ft=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,ir=y.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.75rem;
  font-family: ${_.fontBody};
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${a=>a.$onDark?"rgba(255, 255, 255, 0.8)":_.muted};

  &::before {
    content: "";
    width: 40px;
    height: 3px;
    background: ${_.red};
    flex-shrink: 0;
  }
`,Cj=y.h2`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: 0;
  color: ${a=>a.$onDark?"#fff":_.navy};
  margin: 0;
`,Vb=y.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${a=>a.$onDark?"rgba(255, 255, 255, 0.8)":_.muted};
  max-width: 62ch;
  margin: 1rem 0 0;
`,Aj=y.header`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 2.75rem;
  }
`;function on({eyebrow:a,title:s,lead:u,onDark:c,id:d}){return i.jsxs(Aj,{children:[i.jsx(ir,{$onDark:c,children:a}),i.jsx(Cj,{id:d,$onDark:c,children:s}),u&&i.jsx(Vb,{$onDark:c,children:u})]})}const rr=y.a`
  ${Fl}
`,Tj=y.button`
  ${Fl}
`;function kj({email:a,address:s,interestOptions:u,interest:c}){const[d,f]=k.useState(c??""),[p,v]=k.useState({}),[h,g]=k.useState(!1);k.useEffect(()=>{c&&f(c)},[c]);const x=C=>{C.preventDefault();const j=C.currentTarget,O=new FormData(j);if(String(O.get("website")||"").trim()!=="")return;const L=Ue=>String(O.get(Ue)||"").trim(),G=L("firstName"),Z=L("lastName"),T=L("company"),V=L("phone"),U=L("email"),I=L("message"),$={};G||($.firstName="Bitte geben Sie Ihren Vornamen an."),Z||($.lastName="Bitte geben Sie Ihren Nachnamen an."),/^[+\d][\d\s\-/()]{5,}$/.test(V)||($.phone="Bitte geben Sie eine Telefonnummer an, z. B. 07531 123456."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(U)||($.email="Bitte geben Sie eine gültige E-Mail-Adresse an."),O.get("consent")||($.consent="Bitte stimmen Sie der Datenverarbeitung zu."),v($);const X=Object.keys($)[0];if(X){j.querySelector(`[name="${X}"]`)?.focus(),g(!1);return}const ae=d||"Sponsoring allgemein",Ce=`Sponsoring-Anfrage: ${ae}${T?` (${T})`:""}`,ve=["Hallo SCKW-Team,","",`ich interessiere mich für: ${ae}.`,...I?["",I]:[],"",`Name: ${G} ${Z}`,...T?[`Firma: ${T}`]:[],`Telefon: ${V}`,`E-Mail: ${U}`,"","Viele Grüße",`${G} ${Z}`].join(`
`);window.location.href=`mailto:${a}?subject=${encodeURIComponent(Ce)}&body=${encodeURIComponent(ve)}`,g(!0)},S=C=>p[C]?{"aria-invalid":!0,"aria-describedby":`${C}-error`}:{},w=C=>p[C]?i.jsx(Lj,{id:`${C}-error`,children:p[C]}):null;return i.jsx(Rj,{id:"kontakt","aria-labelledby":"kontakt-title",children:i.jsx(ft,{children:i.jsxs(Mj,{children:[i.jsxs("div",{children:[i.jsx(on,{id:"kontakt-title",eyebrow:"Kontakt",title:"Partner werden.",lead:"Schreiben Sie uns kurz, was Sie sich vorstellen. Wir melden uns innerhalb von 24 Stunden und finden mit Ihnen das passende Paket."}),i.jsxs(Dj,{children:[i.jsx(Sp,{children:"E-Mail"}),i.jsx(Bj,{href:`mailto:${a}`,children:a}),i.jsx(Sp,{children:"Anschrift"}),i.jsx("address",{children:s.map(C=>i.jsxs("span",{children:[C,i.jsx("br",{})]},C))})]})]}),i.jsxs(Oj,{children:[i.jsx(Nj,{children:"Anfrage stellen"}),i.jsxs($j,{noValidate:!0,onSubmit:x,children:[i.jsxs(Pi,{children:[i.jsx("label",{htmlFor:"interest",children:"Interesse an"}),i.jsxs("select",{id:"interest",name:"interest",value:d,onChange:C=>f(C.target.value),children:[i.jsx("option",{value:"",children:"Noch offen, bitte beraten"}),u.map(C=>i.jsx("option",{value:C,children:C},C))]})]}),i.jsxs(er,{children:[i.jsx("label",{htmlFor:"firstName",children:"Vorname"}),i.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0,...S("firstName")}),w("firstName")]}),i.jsxs(er,{children:[i.jsx("label",{htmlFor:"lastName",children:"Nachname"}),i.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0,...S("lastName")}),w("lastName")]}),i.jsxs(er,{children:[i.jsxs("label",{htmlFor:"company",children:["Firma ",i.jsx(jp,{children:"(optional)"})]}),i.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),i.jsxs(er,{children:[i.jsx("label",{htmlFor:"phone",children:"Telefon"}),i.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0,...S("phone")}),w("phone")]}),i.jsxs(Pi,{children:[i.jsx("label",{htmlFor:"email",children:"E-Mail"}),i.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,...S("email")}),w("email")]}),i.jsxs(Pi,{children:[i.jsxs("label",{htmlFor:"message",children:["Nachricht ",i.jsx(jp,{children:"(optional)"})]}),i.jsx("textarea",{id:"message",name:"message",rows:4})]}),i.jsxs(Uj,{"aria-hidden":"true",children:[i.jsx("label",{htmlFor:"website",children:"Dieses Feld bitte leer lassen"}),i.jsx("input",{id:"website",name:"website",type:"text",tabIndex:-1,autoComplete:"off"})]}),i.jsxs(Pi,{children:[i.jsxs(Hj,{children:[i.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0,...S("consent")}),i.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß den"," ",i.jsx("a",{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),w("consent")]}),i.jsxs(Pi,{children:[i.jsx(Tj,{type:"submit",children:"Anfrage per E-Mail senden"}),i.jsx(Gj,{children:"Ihr E-Mail-Programm öffnet sich mit der fertigen Anfrage."})]}),i.jsx(Yj,{role:"status","aria-live":"polite",children:h&&i.jsxs(i.Fragment,{children:["Ihre Anfrage liegt jetzt im E-Mail-Programm bereit. Bitte dort auf Senden klicken. Hat sich nichts geöffnet? Dann schreiben Sie uns direkt an"," ",i.jsx("a",{href:`mailto:${a}`,children:a}),"."]})})]})]})]})})})}const Rj=y.section`
  background: ${_.paper};
  color-scheme: light;
  padding: 4rem 0;
  text-align: left;
  scroll-margin-top: 72px;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,Mj=y.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: 4rem;
    align-items: start;
  }
`,Dj=y.div`
  display: grid;
  gap: 0.25rem;
  color: ${_.ink};
  font-size: 1.05rem;
  line-height: 1.5;

  address {
    font-style: normal;
  }
`,Sp=y.span`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${_.muted};
`,Bj=y.a`
  font-family: ${_.fontDisplay};
  font-size: 1.75rem;
  font-weight: 700;
  color: ${_.blue};
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    text-decoration: underline;
    color: ${_.blue};
  }
`,Oj=y.div`
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Nj=y.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.75rem;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 0 1.25rem;
`,$j=y.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  label {
    font-weight: 600;
    font-size: 0.95rem;
    color: ${_.ink};
    margin-bottom: 0.35rem;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  select,
  textarea {
    width: 100%;
    border: 1px solid #b9c6d8;
    border-radius: 8px;
    padding: 0.7rem 0.85rem;
    font: inherit;
    font-size: 1rem;
    background: #fff;
    color: ${_.ink};
    color-scheme: light;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  select {
    height: 48px;
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }

  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 3px solid ${_.blue};
    outline-offset: 1px;
    border-color: ${_.blue};
  }

  [aria-invalid="true"] {
    border-color: ${_.red};
  }
`,er=y.div`
  display: flex;
  flex-direction: column;
`,Pi=y(er)`
  grid-column: 1 / -1;

  & > button {
    align-self: flex-start;
  }
`,jp=y.span`
  font-weight: 400;
  color: ${_.muted};
`,Lj=y.span`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${_.redDark};
`,Uj=y.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,Hj=y.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0.1rem 0 0;
    flex-shrink: 0;
    accent-color: ${_.blue};
  }

  label {
    font-weight: 400;
    color: ${_.muted};
    margin: 0;
  }

  a {
    color: ${_.blue};
    font-weight: 600;
    text-decoration: underline;
  }
`,Gj=y.span`
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: ${_.muted};
`,Yj=y.p`
  grid-column: 1 / -1;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${_.ink};

  &:empty {
    display: none;
  }

  a {
    color: ${_.blue};
    font-weight: 600;
  }
`,jd=929,wd=1239,Vj=28,Rs=vd.find(a=>a.id==="stadionname"),Ms=Sd.find(a=>a.name==="Doppelbande")??Sd[0],qj=[{id:"tribuene",tab:"Haupttribüne",image:"/stadion/fuerstenberg-tribuene.jpg",place:"auf dem Dach der Haupttribüne",wide:{x:0,y:.3,w:1,h:.33},zoom:{x:.22,y:.4,w:.56,h:.12},zoomSmall:{x:.34,y:.41,w:.32,h:.08},marker:{x:326,y:547,w:286,h:25},overlay:a=>i.jsxs(i.Fragment,{children:[i.jsx("polygon",{points:"332,553 606,553 606,567 332,567",fill:"#dddbd2",stroke:"#2a2f38",strokeWidth:"0.8"}),i.jsx(wp,{x:469,y:560.5,maxWidth:258,size:10.5,text:`${a} STADION`})]}),product:Rs&&!Rs.vergeben?{title:"Stadionname-Partner",detail:`Ihr Name für das Stadion, ${Rs.preis} pro Saison`,interest:Rs.name,action:"Stadionname anfragen"}:null},{id:"gegengerade",tab:"Gegengerade",image:"/stadion/fuerstenberg-gegengerade.jpg",place:"an einer freien Stelle der Bandenreihe",wide:{x:0,y:.4,w:1,h:.26},zoom:{x:.29,y:.49,w:.58,h:.1},zoomSmall:{x:.44,y:.505,w:.3,h:.07},marker:{x:494,y:656,w:116,h:29},overlay:a=>i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"500.5",y:"663.5",width:"104",height:"17",fill:"rgba(0,0,0,0.25)"}),i.jsx("rect",{x:"500",y:"662",width:"104",height:"17",fill:"#efefea",stroke:"rgba(0,0,0,0.2)",strokeWidth:"0.4"}),i.jsx("rect",{x:"500",y:"677",width:"104",height:"2",fill:_.red}),i.jsx(wp,{x:552,y:669.5,maxWidth:94,size:11,fill:_.navy,text:a})]}),product:{title:`${Ms.name}, ${Ms.groesse}`,detail:`${Ms.preis} pro Saison, noch ${Ms.slots} Plätze frei`,interest:"Bande oder Banner",action:"Bande anfragen"}}];function Kj({onRequest:a}){const s=qj.filter(T=>T.product),[u,c]=k.useState(s[0]?.id),[d,f]=k.useState(""),[p,v]=k.useState(!1),[h,g]=k.useState({w:0,h:0}),x=k.useRef(null),S=k.useRef(!1),w=k.useRef(void 0),C=s.find(T=>T.id===u)??s[0],j=(d.trim()||"Ihr Name").toUpperCase();if(k.useLayoutEffect(()=>{const T=x.current;if(!T)return;const V=()=>g({w:T.clientWidth,h:T.clientHeight});V();const U=new ResizeObserver(V);return U.observe(T),()=>U.disconnect()},[]),k.useEffect(()=>{const T=x.current;if(!T)return;if(!("IntersectionObserver"in window)){v(!0);return}const V=new IntersectionObserver(([U])=>{U.isIntersecting&&!S.current&&(S.current=!0,w.current=window.setTimeout(()=>v(!0),900),V.disconnect())},{threshold:.5});return V.observe(T),()=>{V.disconnect(),window.clearTimeout(w.current)}},[]),!C||!C.product)return null;const O=C.product,L=T=>{T!==C.id&&(window.clearTimeout(w.current),c(T),v(!1),w.current=window.setTimeout(()=>v(!0),700))},G=h.w<640?C.zoomSmall:C.zoom,Z=Qj(p?G:C.wide,h);return i.jsx(Xj,{"aria-labelledby":"stadion-title",id:"stadion",children:i.jsxs(ft,{children:[i.jsx(on,{id:"stadion-title",eyebrow:"Fürstenberg-Sportplatz",title:"Ihr Name am Fürstenberg.",lead:"Tippen Sie Ihren Firmennamen ein und sehen Sie, wo er bei uns im Stadion stehen würde."}),i.jsxs(Zj,{children:[i.jsxs(Fj,{children:[i.jsx("label",{htmlFor:"stadion-name",children:"Ihr Firmenname"}),i.jsx("input",{id:"stadion-name",type:"text",value:d,maxLength:Vj,placeholder:"z. B. Bäckerei Muster",autoComplete:"organization",onChange:T=>{f(T.target.value),p||v(!0)}})]}),s.length>1&&i.jsx(Pj,{role:"group","aria-label":"Ansicht wählen",children:s.map(T=>i.jsx(Wj,{type:"button","aria-pressed":T.id===C.id,onClick:()=>L(T.id),children:T.tab},T.id))})]}),i.jsxs(Ij,{children:[i.jsxs(Jj,{ref:x,children:[i.jsxs(ew,{style:{transform:`translate(${Z.tx}px, ${Z.ty}px) scale(${Z.s})`},children:[i.jsx("img",{src:C.image,alt:`${C.tab} am Fürstenberg-Sportplatz, ${C.place} steht ${j}`,width:jd,height:wd}),i.jsxs("svg",{viewBox:`0 0 ${jd} ${wd}`,preserveAspectRatio:"none","aria-hidden":"true",children:[C.overlay(j),i.jsx(nw,{x:C.marker.x,y:C.marker.y,width:C.marker.w,height:C.marker.h,rx:"3",$hidden:p},`${C.id}-${p}`)]})]}),i.jsx(aw,{type:"button",onClick:()=>v(T=>!T),"aria-pressed":p,children:p?"Ganzes Stadion zeigen":"Heranzoomen"})]}),i.jsxs(lw,{children:[i.jsxs("div",{children:[i.jsx("strong",{children:O.title}),i.jsx("span",{children:O.detail})]}),i.jsx(iw,{type:"button",onClick:()=>a(O.interest),children:O.action})]})]}),i.jsx(rw,{children:"Beispielhafte Darstellung auf echten Fotos vom Fürstenberg-Sportplatz. Gestaltung und Platzierung stimmen wir mit Ihnen ab."})]})})}function Qj(a,s){const{w:u,h:c}=s;if(!u||!c)return{tx:0,ty:0,s:1};const d=u*wd/jd,f=Math.max(1,Math.min(1/a.w,c/(a.h*d))),p=(a.x+a.w/2)*u,v=(a.y+a.h/2)*d,h=Math.min(0,Math.max(u-f*u,u/2-f*p)),g=Math.min(0,Math.max(c-f*d,c/2-f*v));return{tx:h,ty:g,s:f}}function wp({x:a,y:s,maxWidth:u,size:c,text:d,fill:f="#1d2330"}){const p=d.length*c*.5,v=p>u?c*u/p:c;return i.jsx("text",{x:a,y:s,textAnchor:"middle",dominantBaseline:"central",fill:f,style:{fontFamily:_.fontDisplay,fontWeight:800,fontSize:v,letterSpacing:"0.02em"},children:d})}const Xj=y.section`
  padding: 4rem 0;
  background: #fff;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,Zj=y.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,Fj=y.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 280px;
  max-width: 440px;

  label {
    font-weight: 700;
    font-size: 0.95rem;
    color: ${_.ink};
    margin-bottom: 0.4rem;
  }

  input {
    height: 52px;
    padding: 0 1rem;
    border: 2px solid ${_.navy};
    border-radius: 8px;
    font: inherit;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${_.ink};
    background: #fff;
    color-scheme: light;
  }

  input::placeholder {
    color: #8a99ad;
    font-weight: 500;
  }

  input:focus-visible {
    outline: 3px solid ${_.blue};
    outline-offset: 2px;
  }
`,Pj=y.div`
  display: inline-flex;
  padding: 4px;
  gap: 4px;
  background: ${_.paper};
  border: 1px solid ${_.line};
  border-radius: 10px;
`,Wj=y.button`
  min-height: 44px;
  padding: 0 1rem;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: ${_.muted};
  font-family: ${_.fontBody};
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${_.navy};
    border-color: transparent;
  }

  &[aria-pressed="true"] {
    background: ${_.navy};
    color: #fff;
  }
`,Ij=y.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${_.navyDeep};
  border: 1px solid ${_.line};
`,Jj=y.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #3d4a3a;

  @media (min-width: 640px) {
    aspect-ratio: 16 / 9;
  }

  @media (min-width: 1024px) {
    aspect-ratio: 21 / 9;
  }
`,ew=y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform-origin: 0 0;
  transition: transform 1.6s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`,tw=Bd`
  0%, 100% { stroke-opacity: 1; }
  50% { stroke-opacity: 0.25; }
`,nw=y.rect`
  fill: none;
  stroke: #fff;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
  transition: opacity 0.4s ease;
  opacity: ${a=>a.$hidden?0:1};

  ${a=>!a.$hidden&&cn`
      animation: ${tw} 1.1s ease-in-out 3;
    `}
`,aw=y.button`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  min-height: 44px;
  padding: 0 1rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  background: rgba(10, 24, 48, 0.78);
  color: #fff;
  font-family: ${_.fontBody};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  backdrop-filter: blur(6px);

  &:hover {
    background: ${_.navy};
    border-color: #fff;
  }

  &:focus-visible {
    outline-color: #9cc8ff;
  }
`,lw=y.figcaption`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border-top: 1px solid ${_.line};

  strong {
    display: block;
    font-family: ${_.fontDisplay};
    font-weight: 800;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: ${_.navy};
  }

  span {
    color: ${_.muted};
  }
`,iw=y.button`
  ${Fl}
  min-height: 44px;
`,rw=y.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${_.muted};
`,qb=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Pu=a=>a.replace(/ €/g," €"),Wu=a=>{document.getElementById(a)?.scrollIntoView({behavior:qb()?"auto":"smooth",block:"start"})},sw=y.div`
  color-scheme: light;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  background: #fff;

  section[id] {
    scroll-margin-top: 72px;
  }
`,Ol=y.section`
  padding: 4rem 0;
  background: ${({$tone:a})=>a==="paper"?_.paper:a==="navy"?_.navy:"#fff"};
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,ow=y.section`
  position: relative;
  overflow: hidden;
  background: ${_.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 860px);
`,cw=y.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center 30% / cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 1.2s ease;
`,uw=y.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(10, 24, 48, 0.94) 0%,
      rgba(10, 24, 48, 0.78) 45%,
      rgba(10, 24, 48, 0.35) 100%
    ),
    linear-gradient(0deg, rgba(10, 24, 48, 0.95) 0%, rgba(10, 24, 48, 0) 45%);
`,dw=y(ft)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
`,fw=y.h1`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6.5rem);
  line-height: 0.9;
  letter-spacing: 0;
  margin: 0;
  color: #fff;

  span {
    display: block;
  }
  span:first-child {
    font-style: italic;
  }
`,hw=y.p`
  max-width: 34rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);

  strong {
    color: #fff;
    font-weight: 700;
  }
`,mw=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,gw=y.ul`
  list-style: none;
  margin: 3.5rem 0 0;
  padding: 1.5rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;

    li + li {
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      padding-left: 1.5rem;
    }
  }
`,pw=y.strong`
  display: block;
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 2.75rem);
  line-height: 1;
  color: #fff;
  font-variant-numeric: tabular-nums;
`,bw=y.span`
  display: block;
  margin-top: 0.35rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
`,xw=y.div`
  background: ${_.red};
  color: #fff;
  padding: 0.9rem 0;
  font-size: 1.05rem;
  line-height: 1.4;

  strong {
    font-family: ${_.fontDisplay};
    font-weight: 800;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
`,yw=y.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 12px;
  font-size: 0.95rem;
  color: ${_.ink};

  strong {
    font-weight: 700;
  }
`,ha=y.li`
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  line-height: 1.45;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${_.blue};
  }
`,vw=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
`,Sw=y.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,jw=y.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`,ww=y.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 1;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0;
`,Ew=y.p`
  margin: 0.4rem 0 0;
  font-weight: 600;
  color: ${_.red};
`,_w=y.p`
  margin: 1.25rem 0;
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 1;
  color: ${_.navy};
  font-variant-numeric: tabular-nums;

  span {
    font-family: ${_.fontBody};
    font-size: 1rem;
    font-weight: 500;
    color: ${_.muted};
    margin-left: 0.15rem;
  }
`,zw=y.ul`
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 1.25rem 0 0;
  border-top: 1px solid ${_.line};
  display: grid;
  gap: 0.55rem;
  flex: 1;
`,Cw=y.button`
  ${Fl}
  width: 100%;
  margin-top: auto;
`,Aw=y.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  border: 1px dashed #b9c6d8;
  border-radius: 12px;
  color: ${_.muted};

  span {
    font-size: 0.95rem;
  }
`,Tw=y.strong`
  display: block;
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${_.navy};
`,kw=y.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${_.ink};

  img {
    width: 88px;
    height: 52px;
    object-fit: contain;
    background: #fff;
    border: 1px solid ${_.line};
    border-radius: 8px;
    padding: 0.3rem;
  }

  strong {
    font-weight: 700;
  }
`,Iu=y.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${_.muted};
`,Ep=y.div`
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  overflow: hidden;
`,_p=y.div`
  padding: 1.5rem 1.5rem 1rem;

  h3 {
    font-family: ${_.fontDisplay};
    font-weight: 800;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: ${_.navy};
    margin: 0;
  }

  p {
    margin: 0.35rem 0 0;
    color: ${_.muted};
  }
`,zp=y.div`
  overflow-x: auto;

  &:focus-visible {
    outline-offset: -3px;
  }
`,Cp=y.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  font-variant-numeric: tabular-nums;

  th,
  td {
    padding: 0.8rem 1.5rem;
    text-align: left;
    white-space: nowrap;
  }

  th {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${_.muted};
    background: ${_.paper};
    border-top: 1px solid ${_.line};
    border-bottom: 1px solid ${_.line};
  }

  td {
    border-bottom: 1px solid ${_.line};
    color: ${_.ink};
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  td:first-child {
    font-weight: 600;
    white-space: normal;
  }

  .num {
    text-align: right;
  }

  td.num:last-child {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;

    th,
    td {
      padding: 0.7rem 0.5rem;
      white-space: normal;
    }
    th:first-child,
    td:first-child {
      padding-left: 1rem;
    }
    th:last-child,
    td:last-child {
      padding-right: 1rem;
      white-space: nowrap;
    }
  }
`,Rw=y.div`
  display: grid;
  gap: 1.25rem;
`,Mw=y.div`
  display: grid;
  grid-template-areas: "img" "table" "opt";

  & > img {
    grid-area: img;
  }
  & > div[role="region"] {
    grid-area: table;
  }

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    grid-template-areas: "img table" "opt table";
    align-items: start;
  }
`,Dw=y.img`
  display: block;
  width: 100%;
  height: auto;
  background: #0b0b0d;
`,Bw=y.div`
  grid-area: opt;
  padding: 1.25rem 1.5rem 1.5rem;

  h4 {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    color: ${_.ink};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;
    color: ${_.ink};
  }
`,Ow=y.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,Nw=y.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  padding: 1.5rem;

  h3 {
    font-family: ${_.fontDisplay};
    font-weight: 800;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${_.navy};
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 1.5;
    color: ${_.ink};
  }
`,$w=y.p`
  && {
    margin: 0.5rem 0 1rem;
    font-family: ${_.fontDisplay};
    font-weight: 800;
    font-size: 1.9rem;
    color: ${_.red};
    font-variant-numeric: tabular-nums;
  }
`,Lw=y.p`
  && {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${_.line};
    font-weight: 600;
    color: ${_.muted};
  }
`,Uw=y.div`
  position: absolute;
  inset: auto -2rem -1.5rem auto;
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-style: italic;
  font-size: clamp(6rem, 18vw, 15rem);
  line-height: 0.8;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.04);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`,Hw=y.div`
  position: relative;
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 4rem;
    align-items: center;
  }
`,Gw=y.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Yw=y.h3`
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
`,Vw=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem 1.25rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  li {
    font-family: ${_.fontDisplay};
    font-weight: 700;
    font-size: clamp(1.1rem, 4.4vw, 1.35rem);
    line-height: 1.2;
    text-transform: uppercase;
    color: #fff;
    padding-left: 0.75rem;
    border-left: 3px solid ${_.red};
  }
`,qw=y.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`,Kw=y.p`
  margin: 0 0 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 60ch;
`,Qw=y.div`
  border-left: 3px solid ${_.red};
  padding: 0.25rem 0 0.25rem 1.25rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 60ch;

  strong {
    display: block;
    color: #fff;
    font-weight: 700;
  }
`,Xw=y.div`
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 1.5rem;
  border: 1px solid ${_.line};
  border-top: 4px solid ${_.blue};
  border-radius: 14px;
  background: #fff;

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 3rem;
    padding: 2.5rem;
  }

  h2 {
    font-family: ${_.fontDisplay};
    font-weight: 800;
    font-size: clamp(2rem, 5vw, 2.75rem);
    line-height: 1;
    text-transform: uppercase;
    color: ${_.navy};
    margin: 0 0 0.75rem;
  }

  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${_.muted};
    max-width: 60ch;
  }
`,Zw=y.span`
  text-transform: none;
`,Fw=y(ya)`
  ${Fl}
`;function ma(){return i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3 8.5l3 3 7-7",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Pw(){const[a,s]=k.useState(Vd),[u,c]=k.useState();k.useEffect(()=>{fetch("/social-stats.json").then(j=>j.ok?j.json():Promise.reject()).then(j=>{j?.kpis?.length&&s(j.kpis)}).catch(()=>{})},[]);const d=[ht("herren/herren_6"),ht("herren/herren_16"),ht("herren/herren_5"),ht("herren/herren_14")].filter(Boolean),[f,p]=k.useState(0);k.useEffect(()=>{if(d.length<=1||qb())return;const j=setInterval(()=>{p(O=>(O+1)%d.length)},7e3);return()=>clearInterval(j)},[d.length]);const v=j=>{c(j),Wu("kontakt")},h=vd.filter(j=>!j.vergeben),g=vd.filter(j=>j.vergeben),x=j=>Number(j.replace(/\D/g,"")),S=[...h].sort((j,O)=>x(j.preis)-x(O.preis))[0]?.preis,w=[...h.map(j=>j.name),"Bande oder Banner","Buswerbung",...vp.map(j=>j.name)],C=hj.split(" · ");return i.jsxs(sw,{children:[i.jsxs(ow,{"aria-labelledby":"hero-title","data-dark":!0,children:[d.map((j,O)=>i.jsx(cw,{$bg:j,$active:O===f,"aria-hidden":"true"},O)),i.jsx(uw,{}),i.jsxs(dw,{children:[i.jsx(ir,{$onDark:!0,children:"Partner werden beim SC Konstanz-Wollmatingen"}),i.jsxs(fw,{id:"hero-title",children:[i.jsx("span",{children:"Sponsoring,"})," ",i.jsx("span",{children:"das messbar wirkt."})]}),i.jsxs(hw,{children:["Wir sind ein Sportverein aus Wollmatingen, seit 1930. Und wir haben Reichweite: ",i.jsx("strong",{children:"1,7 Millionen Views"})," auf Instagram und Facebook in den letzten zwölf Monaten, ohne einen Euro Werbebudget."]}),i.jsxs(mw,{children:[i.jsx(rr,{href:"#kontakt",onClick:j=>{j.preventDefault(),Wu("kontakt")},children:"Anfrage stellen"}),i.jsx(rr,{href:"#angebot",$variant:"outlineLight",onClick:j=>{j.preventDefault(),Wu("angebot")},children:"Angebote ansehen"})]}),i.jsx(gw,{"aria-label":"Reichweite in Zahlen",children:a.map(j=>i.jsxs("li",{children:[i.jsx(pw,{children:j.value}),i.jsx(bw,{children:j.label})]},j.label))})]})]}),i.jsx(xw,{"data-dark":!0,children:i.jsxs(ft,{children:[i.jsx("strong",{children:Zu.text}),Zu.suffix," ",Zu.highlight,"."]})}),i.jsx(Ol,{"aria-labelledby":"partner-title",children:i.jsxs(ft,{children:[i.jsx(on,{id:"partner-title",eyebrow:"Saison 26/27",title:"Unsere Partner.",lead:"Ohne sie ginge es nicht. Danke an alle Unternehmen, die den SCKW schon unterstützen."}),i.jsx(zj,{})]})}),i.jsx(Ol,{$tone:"paper",id:"angebot","aria-labelledby":"angebot-title",children:i.jsxs(ft,{children:[i.jsx(on,{id:"angebot-title",eyebrow:`Ab ${S} pro Saison`,title:"Exklusiv-Partnerschaften.",lead:"Trikot oder Stadionname, dazu Bande, Banner, Magazin und Saisonkarten. Jedes Paket gibt es nur einmal."}),i.jsxs(yw,{children:[i.jsx("strong",{children:"In jedem Paket enthalten:"}),i.jsx(vw,{children:C.map(j=>i.jsxs(ha,{children:[i.jsx(ma,{}),j]},j))})]}),g.map(j=>i.jsxs(Aw,{children:[i.jsxs("div",{children:[i.jsx(Tw,{children:j.name}),i.jsxs("span",{children:[j.topFeature,", vergeben an"]})]}),i.jsxs(kw,{as:j.sponsorWebsite?"a":"div",href:j.sponsorWebsite,target:j.sponsorWebsite?"_blank":void 0,rel:j.sponsorWebsite?"noopener noreferrer":void 0,children:[j.sponsorLogo&&i.jsx("img",{src:j.sponsorLogo,alt:""}),i.jsx("strong",{children:j.sponsorName})]})]},j.id)),i.jsx(Sw,{children:h.map(j=>i.jsxs(jw,{"aria-labelledby":`paket-${j.id}`,children:[i.jsx(ww,{id:`paket-${j.id}`,children:j.name}),i.jsx(Ew,{children:j.topFeature}),i.jsxs(_w,{children:[j.preis," ",i.jsx("span",{children:"pro Saison"})]}),i.jsxs(zw,{children:[j.id==="stadionname"&&i.jsxs(ha,{children:[i.jsx(ma,{}),"Das Stadion trägt Ihren Namen"]}),j.trikot!=="–"&&i.jsxs(ha,{children:[i.jsx(ma,{}),"Trikot: ",j.trikot]}),i.jsxs(ha,{children:[i.jsx(ma,{}),"Bande: ",j.bande]}),i.jsxs(ha,{children:[i.jsx(ma,{}),"Banner: ",j.banner]}),i.jsxs(ha,{children:[i.jsx(ma,{}),"Stadionmagazin: ",j.magazin]}),i.jsxs(ha,{children:[i.jsx(ma,{}),j.saisonkarten," Saisonkarten"]})]}),i.jsxs(Cw,{type:"button",onClick:()=>v(j.name),children:[j.name," anfragen"]})]},j.id))}),i.jsx(Iu,{children:"Alle Preise zzgl. MwSt."})]})}),i.jsx(Kj,{onRequest:v}),i.jsx(Ol,{$tone:"paper",id:"werbeflaechen","aria-labelledby":"werbeflaechen-title",children:i.jsxs(ft,{children:[i.jsx(on,{id:"werbeflaechen-title",eyebrow:"Einzeln buchbar",title:"Werbeflächen.",lead:"Banden, Banner und Buswerbung zu festen Preisen. Für Betriebe, die in der Region gesehen werden wollen."}),i.jsxs(Rw,{children:[i.jsxs(Ep,{children:[i.jsxs(_p,{children:[i.jsx("h3",{children:"Banden & Banner"}),i.jsx("p",{children:"Am Spielfeldrand, bei jedem Heimspiel sichtbar."})]}),i.jsx(zp,{tabIndex:0,role:"region","aria-label":"Preise Banden und Banner",children:i.jsxs(Cp,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Fläche"}),i.jsx("th",{scope:"col",children:"Größe"}),i.jsx("th",{scope:"col",className:"num",children:"Plätze"}),i.jsx("th",{scope:"col",className:"num",children:"Preis pro Saison"})]})}),i.jsx("tbody",{children:Sd.map(j=>i.jsxs("tr",{children:[i.jsx("td",{children:j.name}),i.jsx("td",{children:j.groesse}),i.jsx("td",{className:"num",children:j.slots}),i.jsx("td",{className:"num",children:j.preis})]},j.name))})]})})]}),i.jsxs(Ep,{children:[i.jsxs(_p,{children:[i.jsx("h3",{children:"Buswerbung"}),i.jsx("p",{children:"Jede Woche unterwegs in Konstanz, im Landkreis und bei Auswärtsspielen."})]}),i.jsxs(Mw,{children:[i.jsx(Dw,{src:"/vereinsbus.png",alt:"Vereinsbus des SCKW mit eingezeichneten Werbeflächen"}),i.jsxs(Bw,{children:[i.jsx("h4",{children:"Optionen"}),i.jsx("ul",{children:Yb.map(j=>i.jsxs(ha,{children:[i.jsx(ma,{}),j]},j))}),i.jsx(Iu,{children:gj})]}),i.jsx(zp,{tabIndex:0,role:"region","aria-label":"Preise Buswerbung",children:i.jsxs(Cp,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Fläche"}),i.jsx("th",{scope:"col",children:"Größe"}),i.jsx("th",{scope:"col",className:"num",children:"Preis pro Jahr"})]})}),i.jsx("tbody",{children:[...Hb,...Gb].map(j=>i.jsxs("tr",{children:[i.jsx("td",{children:j.position}),i.jsx("td",{children:j.groesse}),i.jsx("td",{className:"num",children:j.preis})]},j.position))})]})})]})]})]}),i.jsx(Iu,{children:"Alle Preise zzgl. MwSt."})]})}),i.jsx(Ol,{id:"spieltag","aria-labelledby":"spieltag-title",children:i.jsxs(ft,{children:[i.jsx(on,{id:"spieltag-title",eyebrow:"Ab 150 € netto",title:"Spieltag & Medien.",lead:"Der einfachste Einstieg ins Sponsoring, gut zum Ausprobieren."}),i.jsx(Ow,{children:vp.map(j=>i.jsxs(Nw,{children:[i.jsx("h3",{children:j.name}),i.jsx($w,{children:Pu(j.preis)}),i.jsx("p",{children:Pu(j.beschreibung)}),j.hinweis&&i.jsx(Lw,{children:Pu(j.hinweis)})]},j.name))})]})}),i.jsxs(Ol,{$tone:"navy","aria-labelledby":"reichweite-title","data-dark":!0,children:[i.jsx(Uw,{"aria-hidden":"true",children:"Verbandsliga"}),i.jsx(ft,{children:i.jsxs(Hw,{children:[i.jsxs("div",{children:[i.jsx(on,{id:"reichweite-title",eyebrow:"Verbandsliga Südbaden",title:"Ihre Reichweite wächst mit.",onDark:!0}),i.jsx(Kw,{children:"Als Meister und Aufsteiger spielen wir seit dieser Saison Verbandsliga, gegen 15 Vereine von Kuppenheim bei Baden-Baden bis an den Bodensee. Trikot und Vereinsbus sind bei den Auswärtsspielen dabei."}),i.jsxs(Qw,{children:[i.jsx("strong",{children:"Was das für Sie bedeutet"}),"Mehr Kilometer für den Vereinsbus, eine höhere Liga für Ihre Bande. Ihr Paket kostet dadurch nicht mehr."]})]}),i.jsxs(Gw,{children:[i.jsx(Yw,{children:"Auswärts unterwegs in"}),i.jsx(Vw,{children:fj.map(j=>i.jsx("li",{children:j},j))}),i.jsx(qw,{children:"Heimspiele in Konstanz. Quelle: SBFV, Staffel 2026/27."})]})]})})]}),i.jsx(Ol,{"aria-labelledby":"club500-title",children:i.jsx(ft,{children:i.jsxs(Xw,{children:[i.jsxs("div",{children:[i.jsx(ir,{children:"100 Felder, 500 € pro Feld und Saison"}),i.jsxs("h2",{id:"club500-title",children:["Der ",i.jsx(Zw,{children:"500er"})," Club."]}),i.jsx("p",{children:"Für Privatpersonen und Firmen: Mit einem Feld im 500er Club unterstützen Sie direkt unsere erste Mannschaft in der Verbandsliga. Sie erhalten eine Spendenbescheinigung und auf Wunsch einen Platz auf der Spendentafel."})]}),i.jsx(Fw,{to:"/sponsoring/club-500",$variant:"outlineDark",children:"Zum 500er Club"})]})})}),i.jsx(kj,{email:jt.email,address:jt.vollAdresse.split(`
`),interestOptions:w,interest:u}),i.jsx(so,{})]})}function Ww(){return B0(),!0}const Iw=y0`
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
`,Ap=y.div`
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
  @media print {
    display: none !important;
  }
`,Tp=y.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,kp=y.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ds=y.button`
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
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`,Jw=y.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print {
    display: none !important;
  }
`,e3=y.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print {
    padding: 0;
    background: none;
  }
`,zt=y.section`
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
    @media print {
      page-break-after: auto;
      break-after: auto;
    }
  }
`,It=y.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    bottom: -320px;
    left: -160px;
    background: radial-gradient(
      circle,
      rgba(74, 144, 226, 0.1) 0%,
      transparent 70%
    );
  }

  &::after {
    content: "";
    position: absolute;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    bottom: -200px;
    right: -120px;
    background: radial-gradient(
      circle,
      rgba(196, 30, 58, 0.08) 0%,
      transparent 70%
    );
  }
`,Jt=y.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,en=y.div`
  text-align: center;
  margin-bottom: 6mm;
`,tn=y.img`
  height: 20mm;
`,nn=y.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,_t=y.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,pt=y.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Oe=y.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,ee=y.li`
  font-size: 10.5pt;
  color: #222;
  line-height: 1.7;
  margin-bottom: 2mm;
  padding-left: 6mm;
  position: relative;
  list-style: none;
  &::before {
    content: "\\2713";
    position: absolute;
    left: 0;
    color: #1a365d;
    font-weight: 700;
  }
`,wt=y.ul`
  padding: 0;
  margin: 3mm 0;
`,Qa=y.div`
  display: ${a=>a.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong {
    font-size: 14pt;
    color: #1a365d;
    margin-left: 2mm;
  }
`,gt=y.div`
  margin-bottom: 4mm;
`,tt=y.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Lt=y.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${a=>(a.$lines||1)*8}mm;
  background: #fafafa;
`,t3=y.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,qd=y.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Gn=y.div`
  text-align: ${a=>a.$right?"right":a.$center?"center":"left"};
`;function va(){return i.jsxs(t3,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",i.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function hn(){return i.jsxs(qd,{children:[i.jsxs(Gn,{children:[i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),i.jsx("br",{}),"Schleyerweg 5",i.jsx("br",{}),"78467 Konstanz"]}),i.jsxs(Gn,{$center:!0,children:[jt.email,i.jsx("br",{}),"partner.sckw.de"]}),i.jsxs(Gn,{$right:!0,children:["Sparkasse Bodensee",i.jsx("br",{}),"IBAN: DE84 6905 0001 0000 0929 99",i.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const Rp=ht("herren/herren_0"),Ju=ht("herren/herren_6"),Mp=ht("herren/herren_1"),n3=ht("herren/herren_14"),Fs=y.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function a3(){return i.jsx(zt,{children:i.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),i.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),i.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),i.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",i.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Vd.slice(0,2).map(a=>i.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[i.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:a.value}),i.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:a.label})]},a.label))}),i.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function l3(){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"WARUM SCKW?"}),i.jsx(_t,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Vd.map(a=>i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[i.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:a.value}),i.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:a.label})]},a.label))}),i.jsx(pt,{children:"Was Sie bei uns erreichen"}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),i.jsx(ee,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),i.jsx(ee,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),i.jsx(ee,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),i.jsx(pt,{children:"Der Verein auf einen Blick"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsxs(Oe,{children:[i.jsx("strong",{children:"Gegründet:"})," 1912"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Mitglieder:"})," 500+"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),i.jsxs("div",{children:[i.jsxs(Oe,{children:[i.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),Rp&&i.jsx(Fs,{src:Rp,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),i.jsx(hn,{})]})]})}function i3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"HAUPTSPONSOR"}),i.jsx(_t,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Trikotwerbung auf der Brust"}),i.jsx(ee,{children:"Business Club Mitgliedschaft"}),i.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),i.jsx(ee,{children:"1/1 seitiges Inserat im SC Magazin"}),i.jsx(ee,{children:"10 Saisonkarten"}),i.jsx(ee,{children:"Werbeauftritte nach Absprache"}),i.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function r3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"CO-SPONSOR"}),i.jsx(_t,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Werbung auf den Trainingsanzügen"}),i.jsx(ee,{children:"Business Club Mitgliedschaft"}),i.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),i.jsx(ee,{children:"1/2 seitiges Inserat im SC Magazin"}),i.jsx(ee,{children:"5 Saisonkarten"}),i.jsx(ee,{children:"Werbeauftritte nach Absprache"}),i.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function s3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"SILBER-PARTNER"}),i.jsx(_t,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"1 Bande (5×2 m) am Gelände"}),i.jsx(ee,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),i.jsx(ee,{children:"Werbeplane am Gelände"}),i.jsx(ee,{children:"Vereinsplakate + Eventsichtbarkeit"}),i.jsx(ee,{children:"Website: Logo auf Startseite"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),i.jsx(pt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),i.jsx(_t,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),i.jsx(ee,{children:"Website: Logo auf der Startseite"}),i.jsx(ee,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),i.jsx(ee,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function o3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"BANDENWERBUNG"}),i.jsx(_t,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),i.jsx(wt,{children:i.jsx(ee,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Platzierung:"}),i.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",i.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",i.jsx("br",{}),i.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 800€ pro Saison"})]}),Mp&&i.jsx(Fs,{src:Mp,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function c3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:'WERBUNG IM „HEIMSPIEL"'}),i.jsx(_t,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),i.jsxs(wt,{children:[i.jsx(ee,{children:"15 Ausgaben pro Saison"}),i.jsx(ee,{children:"ca. 100 Exemplare pro Heimspiel"}),i.jsx(ee,{children:"Digitale Version (Social Media & Webseite)"}),i.jsx(ee,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),i.jsx(ee,{children:"DIN A4 Stadionmagazin"}),i.jsx(ee,{children:"wird ausgelegt in diversen Arztpraxen"})]}),a&&i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>i.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),i.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),i.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),a&&i.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[i.jsx("strong",{children:"Maße"}),i.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",i.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",i.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function u3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"SPIELTAG-SPONSORING"}),i.jsx(_t,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),i.jsx(pt,{children:"Ballspende"}),i.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),i.jsx(ee,{children:"Namensnennung in der Halbzeitpause"}),i.jsx(ee,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),i.jsx(ee,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack:"," ",i.jsx("strong",{children:"500€"})," (statt 750€)"]}),i.jsx(pt,{children:"Spielpräsentator"}),i.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),i.jsx(ee,{children:"Namentliche Erwähnung im SC Magazin"}),i.jsx(ee,{children:"Social Media Erwähnung am Spieltag"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 250€ pro Spiel"})]}),Ju&&i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[i.jsx(Fs,{src:Ju,alt:"Action",style:{height:"48mm"}}),i.jsx(Fs,{src:n3||Ju,alt:"Jubel",style:{height:"48mm"}})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function d3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"BUSWERBUNG"}),i.jsx(_t,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),i.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),a&&i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),i.jsx("tbody",{children:[...Hb,...Gb].map((s,u)=>i.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),a&&i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),i.jsx(pt,{children:"Zusatzoptionen"}),i.jsx(wt,{children:Yb.map((s,u)=>i.jsx(ee,{children:s},u))}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function f3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{children:"PRÄMIEN-MODELL"}),i.jsx(_t,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a&&i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),i.jsxs("tbody",{children:[mj.map((s,u)=>i.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),i.jsxs("tr",{style:{background:"#f0f9ff"},children:[i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fu.starter}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fu.premium}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fu.kombi})]})]})]}),i.jsx(pt,{children:"So funktioniert's"}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),i.jsx(ee,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),i.jsx(ee,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),i.jsx(ee,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),i.jsx(pt,{children:"Inkludierte Leistungen"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx(Oe,{children:i.jsx("strong",{children:"Starter:"})}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Stadionansage bei Erfolg"}),i.jsx(ee,{children:"Logo auf Website"})]})]}),i.jsxs("div",{children:[i.jsx(Oe,{children:i.jsx("strong",{children:"Premium:"})}),i.jsxs(wt,{children:[i.jsx(ee,{children:"+ Social Media Post bei Erfolg"}),i.jsx(ee,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}const Dp=ht("herren/herren_jubel_500club");function h3(){return i.jsxs(zt,{children:[Dp&&i.jsx("img",{src:Dp,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),i.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[i.jsx(_t,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),i.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[i.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den CLUB 500."})," ","Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),i.jsx(pt,{children:"Ihre Vorteile"}),i.jsxs(wt,{children:[i.jsxs(ee,{children:["Offizielle ",i.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),i.jsxs(ee,{children:["Veröffentlichung Ihres ",i.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),i.jsx(ee,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),i.jsx(pt,{children:"Zahlungsoptionen"}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),i.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(a=>i.jsxs("tr",{children:[i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:a.label}),i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:a.betrag})]},a.label))})]}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),i.jsx(pt,{children:"Spendenkonto"}),i.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[i.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),i.jsx("br",{}),"IBAN: ",i.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",i.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[i.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",i.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),i.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",i.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),i.jsx(hn,{})]})]})}function m3(){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG CLUB 500"}),i.jsxs(_t,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an"," ",jt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(tt,{children:"Vorname:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"Nachname:"}),i.jsx(Lt,{$lines:1})]})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"Firma (optional):"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"Straße, Hausnummer:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(tt,{children:"PLZ:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"Ort:"}),i.jsx(Lt,{$lines:1})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(tt,{children:"Geb.-Datum:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"Telefon:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"E-Mail:"}),i.jsx(Lt,{$lines:1})]})]}),i.jsx(pt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:i.jsxs(tt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),i.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),i.jsx(pt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im CLUB 500 bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:i.jsxs(tt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),i.jsxs(gt,{style:{marginTop:"2mm"},children:[i.jsx(tt,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),i.jsx(Lt,{$lines:1})]}),i.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. CLUB 500. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[i.jsxs(gt,{children:[i.jsx(tt,{children:"Konstanz, den _______________"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),i.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"Unterschrift:"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),i.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[i.jsx("strong",{children:"Spendenkonto:"})," Sport Club Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",i.jsx("br",{}),i.jsx("strong",{children:"Kontakt:"})," ",jt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs(qd,{style:{marginTop:"auto"},children:[i.jsx(Gn,{children:i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),i.jsx(Gn,{$center:!0,children:"CLUB 500"}),i.jsx(Gn,{$right:!0,children:"partner.sckw.de"})]})]})]})}function g3(){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),i.jsx(_t,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(a=>i.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[i.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:a.n}),i.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:a.t}),i.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:a.d})]},a.n))}),i.jsx(pt,{children:"Kontakt"}),i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:jt.email})]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),i.jsxs("div",{style:{gridColumn:"1 / -1"},children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),i.jsxs("div",{style:{fontSize:"11pt"},children:[jt.adresse.name," · ",jt.adresse.strasse," ·"," ",jt.adresse.plz," ",jt.adresse.ort]})]})]}),i.jsx(pt,{children:"Gesprächsleitfaden"}),i.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "1,4 Mio. Social-Media-Views in dieser Saison – 100 % organisch, aktuell 394.000 Views/Monat."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),i.jsx(hn,{})]})]})}function p3(){return i.jsxs(zt,{children:[i.jsx(It,{}),i.jsxs(Jt,{children:[i.jsx(en,{children:i.jsx(tn,{src:"/logo.svg"})}),i.jsx(nn,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),i.jsxs(_t,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an"," ",jt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(tt,{children:"Datum:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(tt,{children:"Gesprächsführer (Helfer):"}),i.jsx(Lt,{$lines:1})]})]}),pj.map((a,s)=>i.jsxs(gt,{children:[i.jsxs(tt,{children:[a.label,":"]}),i.jsx(Lt,{$lines:a.lines})]},s)),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:i.jsxs(tt,{style:{marginBottom:0},children:["☐ ",a]})},a))}),i.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:i.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[i.jsx("strong",{children:"Schnellreferenz:"})," ",jt.email," · partner.sckw.de · ",jt.vollAdresse.replace(/\n/g," · ")]})}),i.jsxs(qd,{style:{marginTop:"auto"},children:[i.jsx(Gn,{children:i.jsx("strong",{children:"Internes Dokument"})}),i.jsx(Gn,{$center:!0}),i.jsx(Gn,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Ln=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>i.jsx(a3,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>i.jsx(l3,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:a=>i.jsx(i3,{showPrices:a})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:a=>i.jsx(r3,{showPrices:a})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:a=>i.jsx(s3,{showPrices:a})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:a=>i.jsx(o3,{showPrices:a})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:a=>i.jsx(c3,{showPrices:a})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:a=>i.jsx(u3,{showPrices:a})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:a=>i.jsx(d3,{showPrices:a})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:a=>i.jsx(f3,{showPrices:a})},{id:"club500",label:"CLUB 500",group:"community",render:()=>i.jsx(h3,{})},{id:"club500form",label:"CLUB 500 Anmeldung",group:"community",render:()=>i.jsx(m3,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>i.jsx(g3,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>i.jsx(p3,{})}],b3=y.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print {
    display: none !important;
  }
`,x3=y.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,y3=y.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,v3=y.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,S3=y.button`
  background: ${a=>a.$on?"#1a365d":"#f1f5f9"};
  color: ${a=>a.$on?"#fff":"#475569"};
  border: 2px solid ${a=>a.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    opacity: 0.85;
  }
`,ed=y.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,td=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,nd=y.label`
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
  &:hover {
    border-color: #94a3b8;
  }

  input {
    accent-color: #1a365d;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`,j3=y.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Ha=y.button`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: #e2e8f0;
  }
`,w3=y.button`
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
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26, 54, 93, 0.3);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,E3=y.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function _3(){const a=Ww(),[s]=B0(),u=s.get("preset"),c=s.get("view"),d=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Ln.filter($=>$.group==="broschüre").map($=>$.id)),[f,p]=k.useState(!0),[v,h]=k.useState(d),[g,x]=k.useState(c==="preview"?"preview":"dashboard");if(!a)return i.jsx(Hs,{to:"/",replace:!0});const S=$=>{h(X=>{const ae=new Set(X);return ae.has($)?ae.delete($):ae.add($),ae})},w=()=>h(new Set(Ln.map($=>$.id))),C=()=>h(new Set),j=()=>h(new Set(Ln.filter($=>$.group==="broschüre").map($=>$.id))),O=()=>h(new Set(Ln.map($=>$.id))),L=()=>h(new Set(["cover","why","spieltag","banden"])),G=()=>h(new Set(["cover","why","haupt","co","silber"])),Z=()=>h(new Set(["club500","club500form"])),T=Ln.filter($=>v.has($.id)),V=Ln.filter($=>$.group==="broschüre"),U=Ln.filter($=>$.group==="community"),I=Ln.filter($=>$.group==="helfer");return g==="preview"?i.jsxs(i.Fragment,{children:[i.jsx(Iw,{}),i.jsxs(Ap,{children:[i.jsxs(Tp,{children:["Vorschau · ",T.length," Seiten"]}),i.jsxs(kp,{children:[i.jsx(Ds,{$active:f,onClick:()=>p($=>!$),children:f?"Preise ✓":"Preise ✗"}),i.jsx(Ds,{onClick:()=>x("dashboard"),children:"Zurück"}),i.jsx(Ds,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),i.jsxs(Jw,{children:[i.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',i.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),i.jsx(e3,{children:T.map($=>i.jsx("div",{children:$.render(f)},$.id))})]}):i.jsxs(i.Fragment,{children:[i.jsxs(Ap,{children:[i.jsx(Tp,{children:"Sponsoring-Kit · SCKW"}),i.jsx(kp,{children:i.jsx(Ds,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),i.jsxs(b3,{children:[i.jsx(x3,{children:"Sponsoring-Kit zusammenstellen"}),i.jsx(y3,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),i.jsxs(v3,{children:[i.jsx(S3,{$on:f,onClick:()=>p($=>!$),children:f?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),i.jsxs(E3,{children:[v.size," von ",Ln.length," Seiten ausgewählt"]})]}),i.jsxs(j3,{children:[i.jsx(Ha,{onClick:w,children:"Alles"}),i.jsx(Ha,{onClick:j,children:"Broschüre komplett"}),i.jsx(Ha,{onClick:O,children:"Komplett-Kit (+ Helfer)"}),i.jsx(Ha,{onClick:G,children:"Nur Premium-Pakete"}),i.jsx(Ha,{onClick:L,children:"Starter-Paket"}),i.jsx(Ha,{onClick:Z,children:"CLUB 500"}),i.jsx(Ha,{onClick:C,children:"Keine"})]}),i.jsx(ed,{children:"Broschüre"}),i.jsx(td,{children:V.map($=>i.jsxs(nd,{$checked:v.has($.id),children:[i.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>S($.id)}),$.label]},$.id))}),i.jsx(ed,{children:"Community / CLUB 500"}),i.jsx(td,{children:U.map($=>i.jsxs(nd,{$checked:v.has($.id),children:[i.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>S($.id)}),$.label]},$.id))}),i.jsx(ed,{children:"Helfer-Anhang"}),i.jsx(td,{children:I.map($=>i.jsxs(nd,{$checked:v.has($.id),children:[i.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>S($.id)}),$.label]},$.id))}),i.jsxs(w3,{disabled:v.size===0,onClick:()=>x("preview"),children:["Vorschau & Drucken (",v.size," Seiten)"]})]})]})}function z3(a,s){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),d=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(d),s&&(c.href=s),d.href=a,d.href}const C3=(()=>{let a=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${s()}${a}`)})();function xa(a){const s=[];for(let u=0,c=a.length;u<c;u++)s.push(a[u]);return s}let Nl=null;function Kb(a={}){return Nl||(a.includeStyleProperties?(Nl=a.includeStyleProperties,Nl):(Nl=xa(window.getComputedStyle(document.documentElement)),Nl))}function Ps(a,s){const c=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function A3(a){const s=Ps(a,"border-left-width"),u=Ps(a,"border-right-width");return a.clientWidth+s+u}function T3(a){const s=Ps(a,"border-top-width"),u=Ps(a,"border-bottom-width");return a.clientHeight+s+u}function Qb(a,s={}){const u=s.width||A3(a),c=s.height||T3(a);return{width:u,height:c}}function k3(){let a,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(a=parseInt(u,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const Nt=16384;function R3(a){(a.width>Nt||a.height>Nt)&&(a.width>Nt&&a.height>Nt?a.width>a.height?(a.height*=Nt/a.width,a.width=Nt):(a.width*=Nt/a.height,a.height=Nt):a.width>Nt?(a.height*=Nt/a.width,a.width=Nt):(a.width*=Nt/a.height,a.height=Nt))}function Ws(a){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=a})}async function M3(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function D3(a,s,u){const c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"svg"),f=document.createElementNS(c,"foreignObject");return d.setAttribute("width",`${s}`),d.setAttribute("height",`${u}`),d.setAttribute("viewBox",`0 0 ${s} ${u}`),f.setAttribute("width","100%"),f.setAttribute("height","100%"),f.setAttribute("x","0"),f.setAttribute("y","0"),f.setAttribute("externalResourcesRequired","true"),d.appendChild(f),f.appendChild(a),M3(d)}const Et=(a,s)=>{if(a instanceof s)return!0;const u=Object.getPrototypeOf(a);return u===null?!1:u.constructor.name===s.name||Et(u,s)};function B3(a){const s=a.getPropertyValue("content");return`${a.cssText} content: '${s.replace(/'|"/g,"")}';`}function O3(a,s){return Kb(s).map(u=>{const c=a.getPropertyValue(u),d=a.getPropertyPriority(u);return`${u}: ${c}${d?" !important":""};`}).join(" ")}function N3(a,s,u,c){const d=`.${a}:${s}`,f=u.cssText?B3(u):O3(u,c);return document.createTextNode(`${d}{${f}}`)}function Bp(a,s,u,c){const d=window.getComputedStyle(a,u),f=d.getPropertyValue("content");if(f===""||f==="none")return;const p=C3();try{s.className=`${s.className} ${p}`}catch{return}const v=document.createElement("style");v.appendChild(N3(p,u,d,c)),s.appendChild(v)}function $3(a,s,u){Bp(a,s,":before",u),Bp(a,s,":after",u)}const Op="application/font-woff",Np="image/jpeg",L3={woff:Op,woff2:Op,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Np,jpeg:Np,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function U3(a){const s=/\.([^./]*?)$/g.exec(a);return s?s[1]:""}function Kd(a){const s=U3(a).toLowerCase();return L3[s]||""}function H3(a){return a.split(/,/)[1]}function Ed(a){return a.search(/^(data:)/)!==-1}function G3(a,s){return`data:${s};base64,${a}`}async function Xb(a,s,u){const c=await fetch(a,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const d=await c.blob();return new Promise((f,p)=>{const v=new FileReader;v.onerror=p,v.onloadend=()=>{try{f(u({res:c,result:v.result}))}catch(h){p(h)}},v.readAsDataURL(d)})}const ad={};function Y3(a,s,u){let c=a.replace(/\?.*/,"");return u&&(c=a),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Qd(a,s,u){const c=Y3(a,s,u.includeQueryParams);if(ad[c]!=null)return ad[c];u.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let d;try{const f=await Xb(a,u.fetchRequestInit,({res:p,result:v})=>(s||(s=p.headers.get("Content-Type")||""),H3(v)));d=G3(f,s)}catch(f){d=u.imagePlaceholder||"";let p=`Failed to fetch resource: ${a}`;f&&(p=typeof f=="string"?f:f.message),p&&console.warn(p)}return ad[c]=d,d}async function V3(a){const s=a.toDataURL();return s==="data:,"?a.cloneNode(!1):Ws(s)}async function q3(a,s){if(a.currentSrc){const f=document.createElement("canvas"),p=f.getContext("2d");f.width=a.clientWidth,f.height=a.clientHeight,p?.drawImage(a,0,0,f.width,f.height);const v=f.toDataURL();return Ws(v)}const u=a.poster,c=Kd(u),d=await Qd(u,c,s);return Ws(d)}async function K3(a,s){var u;try{if(!((u=a?.contentDocument)===null||u===void 0)&&u.body)return await oo(a.contentDocument.body,s,!0)}catch{}return a.cloneNode(!1)}async function Q3(a,s){return Et(a,HTMLCanvasElement)?V3(a):Et(a,HTMLVideoElement)?q3(a,s):Et(a,HTMLIFrameElement)?K3(a,s):a.cloneNode(Zb(a))}const X3=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",Zb=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function Z3(a,s,u){var c,d;if(Zb(s))return s;let f=[];return X3(a)&&a.assignedNodes?f=xa(a.assignedNodes()):Et(a,HTMLIFrameElement)&&(!((c=a.contentDocument)===null||c===void 0)&&c.body)?f=xa(a.contentDocument.body.childNodes):f=xa(((d=a.shadowRoot)!==null&&d!==void 0?d:a).childNodes),f.length===0||Et(a,HTMLVideoElement)||await f.reduce((p,v)=>p.then(()=>oo(v,u)).then(h=>{h&&s.appendChild(h)}),Promise.resolve()),s}function F3(a,s,u){const c=s.style;if(!c)return;const d=window.getComputedStyle(a);d.cssText?(c.cssText=d.cssText,c.transformOrigin=d.transformOrigin):Kb(u).forEach(f=>{let p=d.getPropertyValue(f);f==="font-size"&&p.endsWith("px")&&(p=`${Math.floor(parseFloat(p.substring(0,p.length-2)))-.1}px`),Et(a,HTMLIFrameElement)&&f==="display"&&p==="inline"&&(p="block"),f==="d"&&s.getAttribute("d")&&(p=`path(${s.getAttribute("d")})`),c.setProperty(f,p,d.getPropertyPriority(f))})}function P3(a,s){Et(a,HTMLTextAreaElement)&&(s.innerHTML=a.value),Et(a,HTMLInputElement)&&s.setAttribute("value",a.value)}function W3(a,s){if(Et(a,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(d=>a.value===d.getAttribute("value"));c&&c.setAttribute("selected","")}}function I3(a,s,u){return Et(s,Element)&&(F3(a,s,u),$3(a,s,u),P3(a,s),W3(a,s)),s}async function J3(a,s){const u=a.querySelectorAll?a.querySelectorAll("use"):[];if(u.length===0)return a;const c={};for(let f=0;f<u.length;f++){const v=u[f].getAttribute("xlink:href");if(v){const h=a.querySelector(v),g=document.querySelector(v);!h&&g&&!c[v]&&(c[v]=await oo(g,s,!0))}}const d=Object.values(c);if(d.length){const f="http://www.w3.org/1999/xhtml",p=document.createElementNS(f,"svg");p.setAttribute("xmlns",f),p.style.position="absolute",p.style.width="0",p.style.height="0",p.style.overflow="hidden",p.style.display="none";const v=document.createElementNS(f,"defs");p.appendChild(v);for(let h=0;h<d.length;h++)v.appendChild(d[h]);a.appendChild(p)}return a}async function oo(a,s,u){return!u&&s.filter&&!s.filter(a)?null:Promise.resolve(a).then(c=>Q3(c,s)).then(c=>Z3(a,c,s)).then(c=>I3(a,c,s)).then(c=>J3(c,s))}const Fb=/url\((['"]?)([^'"]+?)\1\)/g,e4=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,t4=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function n4(a){const s=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function a4(a){const s=[];return a.replace(Fb,(u,c,d)=>(s.push(d),u)),s.filter(u=>!Ed(u))}async function l4(a,s,u,c,d){try{const f=u?z3(s,u):s,p=Kd(s);let v;return d||(v=await Qd(f,p,c)),a.replace(n4(s),`$1${v}$3`)}catch{}return a}function i4(a,{preferredFontFormat:s}){return s?a.replace(t4,u=>{for(;;){const[c,,d]=e4.exec(u)||[];if(!d)return"";if(d===s)return`src: ${c};`}}):a}function Pb(a){return a.search(Fb)!==-1}async function Wb(a,s,u){if(!Pb(a))return a;const c=i4(a,u);return a4(c).reduce((f,p)=>f.then(v=>l4(v,p,s,u)),Promise.resolve(c))}async function $l(a,s,u){var c;const d=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(a);if(d){const f=await Wb(d,null,u);return s.style.setProperty(a,f,s.style.getPropertyPriority(a)),!0}return!1}async function r4(a,s){await $l("background",a,s)||await $l("background-image",a,s),await $l("mask",a,s)||await $l("-webkit-mask",a,s)||await $l("mask-image",a,s)||await $l("-webkit-mask-image",a,s)}async function s4(a,s){const u=Et(a,HTMLImageElement);if(!(u&&!Ed(a.src))&&!(Et(a,SVGImageElement)&&!Ed(a.href.baseVal)))return;const c=u?a.src:a.href.baseVal,d=await Qd(c,Kd(c),s);await new Promise((f,p)=>{a.onload=f,a.onerror=s.onImageErrorHandler?(...h)=>{try{f(s.onImageErrorHandler(...h))}catch(g){p(g)}}:p;const v=a;v.decode&&(v.decode=f),v.loading==="lazy"&&(v.loading="eager"),u?(a.srcset="",a.src=d):a.href.baseVal=d})}async function o4(a,s){const c=xa(a.childNodes).map(d=>Ib(d,s));await Promise.all(c).then(()=>a)}async function Ib(a,s){Et(a,Element)&&(await r4(a,s),await s4(a,s),await o4(a,s))}function c4(a,s){const{style:u}=a;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(d=>{u[d]=c[d]}),a}const $p={};async function Lp(a){let s=$p[a];if(s!=null)return s;const c=await(await fetch(a)).text();return s={url:a,cssText:c},$p[a]=s,s}async function Up(a,s){let u=a.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,f=(u.match(/url\([^)]+\)/g)||[]).map(async p=>{let v=p.replace(c,"$1");return v.startsWith("https://")||(v=new URL(v,a.url).href),Xb(v,s.fetchRequestInit,({result:h})=>(u=u.replace(p,`url(${h})`),[p,h]))});return Promise.all(f).then(()=>u)}function Hp(a){if(a==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=a.replace(u,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=d.exec(c);if(h===null)break;s.push(h[0])}c=c.replace(d,"");const f=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,p="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",v=new RegExp(p,"gi");for(;;){let h=f.exec(c);if(h===null){if(h=v.exec(c),h===null)break;f.lastIndex=v.lastIndex}else v.lastIndex=f.lastIndex;s.push(h[0])}return s}async function u4(a,s){const u=[],c=[];return a.forEach(d=>{if("cssRules"in d)try{xa(d.cssRules||[]).forEach((f,p)=>{if(f.type===CSSRule.IMPORT_RULE){let v=p+1;const h=f.href,g=Lp(h).then(x=>Up(x,s)).then(x=>Hp(x).forEach(S=>{try{d.insertRule(S,S.startsWith("@import")?v+=1:d.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:S,error:w})}})).catch(x=>{console.error("Error loading remote css",x.toString())});c.push(g)}})}catch(f){const p=a.find(v=>v.href==null)||document.styleSheets[0];d.href!=null&&c.push(Lp(d.href).then(v=>Up(v,s)).then(v=>Hp(v).forEach(h=>{p.insertRule(h,p.cssRules.length)})).catch(v=>{console.error("Error loading remote stylesheet",v)})),console.error("Error inlining remote css file",f)}}),Promise.all(c).then(()=>(a.forEach(d=>{if("cssRules"in d)try{xa(d.cssRules||[]).forEach(f=>{u.push(f)})}catch(f){console.error(`Error while reading CSS rules from ${d.href}`,f)}}),u))}function d4(a){return a.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>Pb(s.style.getPropertyValue("src")))}async function f4(a,s){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=xa(a.ownerDocument.styleSheets),c=await u4(u,s);return d4(c)}function Jb(a){return a.trim().replace(/["']/g,"")}function h4(a){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(f=>{s.add(Jb(f))}),Array.from(c.children).forEach(f=>{f instanceof HTMLElement&&u(f)})}return u(a),s}async function m4(a,s){const u=await f4(a,s),c=h4(a);return(await Promise.all(u.filter(f=>c.has(Jb(f.style.fontFamily))).map(f=>{const p=f.parentStyleSheet?f.parentStyleSheet.href:null;return Wb(f.cssText,p,s)}))).join(`
`)}async function g4(a,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await m4(a,s);if(u){const c=document.createElement("style"),d=document.createTextNode(u);c.appendChild(d),a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)}}async function p4(a,s={}){const{width:u,height:c}=Qb(a,s),d=await oo(a,s,!0);return await g4(d,s),await Ib(d,s),c4(d,s),await D3(d,u,c)}async function b4(a,s={}){const{width:u,height:c}=Qb(a,s),d=await p4(a,s),f=await Ws(d),p=document.createElement("canvas"),v=p.getContext("2d"),h=s.pixelRatio||k3(),g=s.canvasWidth||u,x=s.canvasHeight||c;return p.width=g*h,p.height=x*h,s.skipAutoScale||R3(p),p.style.width=`${g}`,p.style.height=`${x}`,s.backgroundColor&&(v.fillStyle=s.backgroundColor,v.fillRect(0,0,p.width,p.height)),v.drawImage(f,0,0,p.width,p.height),p}async function x4(a,s={}){return(await b4(a,s)).toDataURL()}const Wi=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]},{id:"fuerstenberg-bande",label:"Fürstenberg: Bande",image:"/stadion/bande.jpg",zones:[{id:"freie-bande",label:"Einzelbande 3 × 1 m",x:4.2,y:44.5,width:37.5,height:17.5}]},{id:"fuerstenberg-tribuene",label:"Fürstenberg: Tribünendach",image:"/stadion/tribuene.jpg",zones:[{id:"dach-schriftzug",label:"Schriftzug Tribünendach",x:.5,y:15.5,width:77,height:9.5}]}],y4=y.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,v4=y.div`
  max-width: 1200px;
  margin: 0 auto;
`,S4=y.div`
  text-align: center;
  margin-bottom: 2rem;
`,j4=y.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,w4=y.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,E4=y.select`
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
`,_4=y.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,z4=y.div`
  flex: 1;
  min-width: 0;
`,C4=y.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,A4=y.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,T4=y.div`
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
`,k4=y.img`
  width: ${a=>a.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${a=>a.$offsetX}%, ${a=>a.$offsetY}%);
`,R4=y.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,M4=y.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,D4=y.div`
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
`,B4=y.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,O4=y.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,N4=y.label`
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
`,$4=y.button`
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
`,L4=y.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,U4=y.input`
  display: none;
`,H4=y.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,ld=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,id=y.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,rd=y.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,G4=y.button`
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
`,Y4=y.button`
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
`;function V4(){const[a,s]=k.useState(Wi[0].id),[u,c]=k.useState(null),[d,f]=k.useState([]),[p,v]=k.useState(!1),h=k.useRef({}),g=k.useRef(null),x=Wi.find(T=>T.id===a)??Wi[0],S=T=>d.find(V=>V.zoneId===T),w=k.useCallback((T,V)=>{if(!V)return;const U=new FileReader;U.onload=I=>{const $=I.target?.result;f(X=>[...X.filter(ae=>ae.zoneId!==T),{zoneId:T,dataUrl:$,scale:1,offsetX:0,offsetY:0}])},U.readAsDataURL(V)},[]),C=k.useCallback((T,V)=>{f(U=>U.map(I=>I.zoneId===T?{...I,scale:V}:I))},[]),j=k.useCallback((T,V,U)=>{f(I=>I.map($=>$.zoneId===T?{...$,offsetX:V,offsetY:U}:$))},[]),O=k.useCallback(T=>{f(V=>V.filter(U=>U.zoneId!==T))},[]),L=k.useCallback(()=>{f([]),c(null)},[]),G=k.useCallback(async()=>{if(g.current){v(!0);try{const T=await x4(g.current,{pixelRatio:2,cacheBust:!0}),V=document.createElement("a");V.download=`${x.label}-mockup.png`,V.href=T,V.click()}finally{v(!1)}}},[x.label]),Z=T=>{c(T.id),S(T.id)||h.current[T.id]?.click()};return i.jsx(y4,{children:i.jsxs(v4,{children:[i.jsxs(S4,{children:[i.jsx(j4,{children:"Mockup Generator"}),i.jsx(w4,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),Wi.length>1&&i.jsx(E4,{value:a,onChange:T=>{s(T.target.value),f([]),c(null)},children:Wi.map(T=>i.jsx("option",{value:T.id,children:T.label},T.id))}),i.jsxs(_4,{children:[i.jsx(z4,{children:i.jsxs(C4,{ref:g,children:[i.jsx(A4,{src:x.image,alt:x.label,draggable:!1}),x.zones.map(T=>{const V=S(T.id);return i.jsx(T4,{$active:u===T.id,$hasLogo:!!V,style:{left:`${T.x}%`,top:`${T.y}%`,width:`${T.width}%`,height:`${T.height}%`},onClick:()=>Z(T),onDragOver:U=>{U.preventDefault(),c(T.id)},onDrop:U=>{U.preventDefault();const I=U.dataTransfer.files?.[0];w(T.id,I)},children:V&&i.jsx(k4,{src:V.dataUrl,alt:"Logo",draggable:!1,$scale:V.scale,$offsetX:V.offsetX,$offsetY:V.offsetY})},T.id)})]})}),i.jsxs(R4,{children:[i.jsx(M4,{children:"Werbeflächen"}),x.zones.map(T=>{const V=S(T.id);return i.jsxs(D4,{$active:u===T.id,onClick:()=>c(T.id),children:[i.jsx(B4,{children:T.label}),i.jsxs(O4,{children:[i.jsx(N4,{htmlFor:`file-${T.id}`,children:V?"Ändern":"Logo hochladen"}),i.jsx(U4,{id:`file-${T.id}`,ref:U=>{h.current[T.id]=U},type:"file",accept:"image/*",onChange:U=>w(T.id,U.target.files?.[0])}),V&&i.jsx($4,{onClick:U=>{U.stopPropagation(),O(T.id)},children:"Entfernen"}),V&&i.jsx(L4,{src:V.dataUrl,alt:"Vorschau"})]}),V&&i.jsxs(i.Fragment,{children:[i.jsxs(ld,{children:[i.jsxs(id,{children:[Math.round(V.scale*100),"%"]}),i.jsx(rd,{type:"range",min:"0.3",max:"3",step:"0.05",value:V.scale,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),C(T.id,parseFloat(U.target.value))}})]}),i.jsxs(ld,{children:[i.jsx(id,{children:"X"}),i.jsx(rd,{type:"range",min:"-100",max:"100",step:"1",value:V.offsetX,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),j(T.id,parseFloat(U.target.value),V.offsetY)}})]}),i.jsxs(ld,{children:[i.jsx(id,{children:"Y"}),i.jsx(rd,{type:"range",min:"-100",max:"100",step:"1",value:V.offsetY,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),j(T.id,V.offsetX,parseFloat(U.target.value))}})]})]}),!V&&i.jsx(H4,{children:"Klicken oder Bild hierher ziehen"})]},T.id)}),d.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Y4,{onClick:G,disabled:p,children:p?"Wird erstellt...":"Bild herunterladen"}),i.jsx(G4,{onClick:L,children:"Alle Logos entfernen"})]})]})]})]})})}var q4=Object.defineProperty,Is=Object.getOwnPropertySymbols,e1=Object.prototype.hasOwnProperty,t1=Object.prototype.propertyIsEnumerable,Gp=(a,s,u)=>s in a?q4(a,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[s]=u,_d=(a,s)=>{for(var u in s||(s={}))e1.call(s,u)&&Gp(a,u,s[u]);if(Is)for(var u of Is(s))t1.call(s,u)&&Gp(a,u,s[u]);return a},zd=(a,s)=>{var u={};for(var c in a)e1.call(a,c)&&s.indexOf(c)<0&&(u[c]=a[c]);if(a!=null&&Is)for(var c of Is(a))s.indexOf(c)<0&&t1.call(a,c)&&(u[c]=a[c]);return u};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Xa;(a=>{const s=class be{constructor(h,g,x,S){if(this.version=h,this.errorCorrectionLevel=g,this.modules=[],this.isFunction=[],h<be.MIN_VERSION||h>be.MAX_VERSION)throw new RangeError("Version value out of range");if(S<-1||S>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let w=[];for(let j=0;j<this.size;j++)w.push(!1);for(let j=0;j<this.size;j++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(x);if(this.drawCodewords(C),S==-1){let j=1e9;for(let O=0;O<8;O++){this.applyMask(O),this.drawFormatBits(O);const L=this.getPenaltyScore();L<j&&(S=O,j=L),this.applyMask(O)}}d(0<=S&&S<=7),this.mask=S,this.applyMask(S),this.drawFormatBits(S),this.isFunction=[]}static encodeText(h,g){const x=a.QrSegment.makeSegments(h);return be.encodeSegments(x,g)}static encodeBinary(h,g){const x=a.QrSegment.makeBytes(h);return be.encodeSegments([x],g)}static encodeSegments(h,g,x=1,S=40,w=-1,C=!0){if(!(be.MIN_VERSION<=x&&x<=S&&S<=be.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let j,O;for(j=x;;j++){const T=be.getNumDataCodewords(j,g)*8,V=p.getTotalBits(h,j);if(V<=T){O=V;break}if(j>=S)throw new RangeError("Data too long")}for(const T of[be.Ecc.MEDIUM,be.Ecc.QUARTILE,be.Ecc.HIGH])C&&O<=be.getNumDataCodewords(j,T)*8&&(g=T);let L=[];for(const T of h){u(T.mode.modeBits,4,L),u(T.numChars,T.mode.numCharCountBits(j),L);for(const V of T.getData())L.push(V)}d(L.length==O);const G=be.getNumDataCodewords(j,g)*8;d(L.length<=G),u(0,Math.min(4,G-L.length),L),u(0,(8-L.length%8)%8,L),d(L.length%8==0);for(let T=236;L.length<G;T^=253)u(T,8,L);let Z=[];for(;Z.length*8<L.length;)Z.push(0);return L.forEach((T,V)=>Z[V>>>3]|=T<<7-(V&7)),new be(j,g,Z,w)}getModule(h,g){return 0<=h&&h<this.size&&0<=g&&g<this.size&&this.modules[g][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let x=0;x<this.size;x++)this.setFunctionModule(6,x,x%2==0),this.setFunctionModule(x,6,x%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),g=h.length;for(let x=0;x<g;x++)for(let S=0;S<g;S++)x==0&&S==0||x==0&&S==g-1||x==g-1&&S==0||this.drawAlignmentPattern(h[x],h[S]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const g=this.errorCorrectionLevel.formatBits<<3|h;let x=g;for(let w=0;w<10;w++)x=x<<1^(x>>>9)*1335;const S=(g<<10|x)^21522;d(S>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,c(S,w));this.setFunctionModule(8,7,c(S,6)),this.setFunctionModule(8,8,c(S,7)),this.setFunctionModule(7,8,c(S,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,c(S,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,c(S,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,c(S,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let x=0;x<12;x++)h=h<<1^(h>>>11)*7973;const g=this.version<<12|h;d(g>>>18==0);for(let x=0;x<18;x++){const S=c(g,x),w=this.size-11+x%3,C=Math.floor(x/3);this.setFunctionModule(w,C,S),this.setFunctionModule(C,w,S)}}drawFinderPattern(h,g){for(let x=-4;x<=4;x++)for(let S=-4;S<=4;S++){const w=Math.max(Math.abs(S),Math.abs(x)),C=h+S,j=g+x;0<=C&&C<this.size&&0<=j&&j<this.size&&this.setFunctionModule(C,j,w!=2&&w!=4)}}drawAlignmentPattern(h,g){for(let x=-2;x<=2;x++)for(let S=-2;S<=2;S++)this.setFunctionModule(h+S,g+x,Math.max(Math.abs(S),Math.abs(x))!=1)}setFunctionModule(h,g,x){this.modules[g][h]=x,this.isFunction[g][h]=!0}addEccAndInterleave(h){const g=this.version,x=this.errorCorrectionLevel;if(h.length!=be.getNumDataCodewords(g,x))throw new RangeError("Invalid argument");const S=be.NUM_ERROR_CORRECTION_BLOCKS[x.ordinal][g],w=be.ECC_CODEWORDS_PER_BLOCK[x.ordinal][g],C=Math.floor(be.getNumRawDataModules(g)/8),j=S-C%S,O=Math.floor(C/S);let L=[];const G=be.reedSolomonComputeDivisor(w);for(let T=0,V=0;T<S;T++){let U=h.slice(V,V+O-w+(T<j?0:1));V+=U.length;const I=be.reedSolomonComputeRemainder(U,G);T<j&&U.push(0),L.push(U.concat(I))}let Z=[];for(let T=0;T<L[0].length;T++)L.forEach((V,U)=>{(T!=O-w||U>=j)&&Z.push(V[T])});return d(Z.length==C),Z}drawCodewords(h){if(h.length!=Math.floor(be.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let g=0;for(let x=this.size-1;x>=1;x-=2){x==6&&(x=5);for(let S=0;S<this.size;S++)for(let w=0;w<2;w++){const C=x-w,O=(x+1&2)==0?this.size-1-S:S;!this.isFunction[O][C]&&g<h.length*8&&(this.modules[O][C]=c(h[g>>>3],7-(g&7)),g++)}}d(g==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let g=0;g<this.size;g++)for(let x=0;x<this.size;x++){let S;switch(h){case 0:S=(x+g)%2==0;break;case 1:S=g%2==0;break;case 2:S=x%3==0;break;case 3:S=(x+g)%3==0;break;case 4:S=(Math.floor(x/3)+Math.floor(g/2))%2==0;break;case 5:S=x*g%2+x*g%3==0;break;case 6:S=(x*g%2+x*g%3)%2==0;break;case 7:S=((x+g)%2+x*g%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[g][x]&&S&&(this.modules[g][x]=!this.modules[g][x])}}getPenaltyScore(){let h=0;for(let w=0;w<this.size;w++){let C=!1,j=0,O=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[w][L]==C?(j++,j==5?h+=be.PENALTY_N1:j>5&&h++):(this.finderPenaltyAddHistory(j,O),C||(h+=this.finderPenaltyCountPatterns(O)*be.PENALTY_N3),C=this.modules[w][L],j=1);h+=this.finderPenaltyTerminateAndCount(C,j,O)*be.PENALTY_N3}for(let w=0;w<this.size;w++){let C=!1,j=0,O=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[L][w]==C?(j++,j==5?h+=be.PENALTY_N1:j>5&&h++):(this.finderPenaltyAddHistory(j,O),C||(h+=this.finderPenaltyCountPatterns(O)*be.PENALTY_N3),C=this.modules[L][w],j=1);h+=this.finderPenaltyTerminateAndCount(C,j,O)*be.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let C=0;C<this.size-1;C++){const j=this.modules[w][C];j==this.modules[w][C+1]&&j==this.modules[w+1][C]&&j==this.modules[w+1][C+1]&&(h+=be.PENALTY_N2)}let g=0;for(const w of this.modules)g=w.reduce((C,j)=>C+(j?1:0),g);const x=this.size*this.size,S=Math.ceil(Math.abs(g*20-x*10)/x)-1;return d(0<=S&&S<=9),h+=S*be.PENALTY_N4,d(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,g=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let x=[6];for(let S=this.size-7;x.length<h;S-=g)x.splice(1,0,S);return x}}static getNumRawDataModules(h){if(h<be.MIN_VERSION||h>be.MAX_VERSION)throw new RangeError("Version number out of range");let g=(16*h+128)*h+64;if(h>=2){const x=Math.floor(h/7)+2;g-=(25*x-10)*x-55,h>=7&&(g-=36)}return d(208<=g&&g<=29648),g}static getNumDataCodewords(h,g){return Math.floor(be.getNumRawDataModules(h)/8)-be.ECC_CODEWORDS_PER_BLOCK[g.ordinal][h]*be.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let g=[];for(let S=0;S<h-1;S++)g.push(0);g.push(1);let x=1;for(let S=0;S<h;S++){for(let w=0;w<g.length;w++)g[w]=be.reedSolomonMultiply(g[w],x),w+1<g.length&&(g[w]^=g[w+1]);x=be.reedSolomonMultiply(x,2)}return g}static reedSolomonComputeRemainder(h,g){let x=g.map(S=>0);for(const S of h){const w=S^x.shift();x.push(0),g.forEach((C,j)=>x[j]^=be.reedSolomonMultiply(C,w))}return x}static reedSolomonMultiply(h,g){if(h>>>8||g>>>8)throw new RangeError("Byte out of range");let x=0;for(let S=7;S>=0;S--)x=x<<1^(x>>>7)*285,x^=(g>>>S&1)*h;return d(x>>>8==0),x}finderPenaltyCountPatterns(h){const g=h[1];d(g<=this.size*3);const x=g>0&&h[2]==g&&h[3]==g*3&&h[4]==g&&h[5]==g;return(x&&h[0]>=g*4&&h[6]>=g?1:0)+(x&&h[6]>=g*4&&h[0]>=g?1:0)}finderPenaltyTerminateAndCount(h,g,x){return h&&(this.finderPenaltyAddHistory(g,x),g=0),g+=this.size,this.finderPenaltyAddHistory(g,x),this.finderPenaltyCountPatterns(x)}finderPenaltyAddHistory(h,g){g[0]==0&&(h+=this.size),g.pop(),g.unshift(h)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=s;function u(v,h,g){if(h<0||h>31||v>>>h)throw new RangeError("Value out of range");for(let x=h-1;x>=0;x--)g.push(v>>>x&1)}function c(v,h){return(v>>>h&1)!=0}function d(v){if(!v)throw new Error("Assertion error")}const f=class Ye{constructor(h,g,x){if(this.mode=h,this.numChars=g,this.bitData=x,g<0)throw new RangeError("Invalid argument");this.bitData=x.slice()}static makeBytes(h){let g=[];for(const x of h)u(x,8,g);return new Ye(Ye.Mode.BYTE,h.length,g)}static makeNumeric(h){if(!Ye.isNumeric(h))throw new RangeError("String contains non-numeric characters");let g=[];for(let x=0;x<h.length;){const S=Math.min(h.length-x,3);u(parseInt(h.substring(x,x+S),10),S*3+1,g),x+=S}return new Ye(Ye.Mode.NUMERIC,h.length,g)}static makeAlphanumeric(h){if(!Ye.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let g=[],x;for(x=0;x+2<=h.length;x+=2){let S=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x))*45;S+=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x+1)),u(S,11,g)}return x<h.length&&u(Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x)),6,g),new Ye(Ye.Mode.ALPHANUMERIC,h.length,g)}static makeSegments(h){return h==""?[]:Ye.isNumeric(h)?[Ye.makeNumeric(h)]:Ye.isAlphanumeric(h)?[Ye.makeAlphanumeric(h)]:[Ye.makeBytes(Ye.toUtf8ByteArray(h))]}static makeEci(h){let g=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)u(h,8,g);else if(h<16384)u(2,2,g),u(h,14,g);else if(h<1e6)u(6,3,g),u(h,21,g);else throw new RangeError("ECI assignment value out of range");return new Ye(Ye.Mode.ECI,0,g)}static isNumeric(h){return Ye.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return Ye.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,g){let x=0;for(const S of h){const w=S.mode.numCharCountBits(g);if(S.numChars>=1<<w)return 1/0;x+=4+w+S.bitData.length}return x}static toUtf8ByteArray(h){h=encodeURI(h);let g=[];for(let x=0;x<h.length;x++)h.charAt(x)!="%"?g.push(h.charCodeAt(x)):(g.push(parseInt(h.substring(x+1,x+3),16)),x+=2);return g}};f.NUMERIC_REGEX=/^[0-9]*$/,f.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,f.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let p=f;a.QrSegment=f})(Xa||(Xa={}));(a=>{(s=>{const u=class{constructor(d,f){this.ordinal=d,this.formatBits=f}};u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),s.Ecc=u})(a.QrCode||(a.QrCode={}))})(Xa||(Xa={}));(a=>{(s=>{const u=class{constructor(d,f){this.modeBits=d,this.numBitsCharCount=f}numCharCountBits(d){return this.numBitsCharCount[Math.floor((d+7)/17)]}};u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),s.Mode=u})(a.QrSegment||(a.QrSegment={}))})(Xa||(Xa={}));var Ul=Xa;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var K4={L:Ul.QrCode.Ecc.LOW,M:Ul.QrCode.Ecc.MEDIUM,Q:Ul.QrCode.Ecc.QUARTILE,H:Ul.QrCode.Ecc.HIGH},n1=128,a1="L",l1="#FFFFFF",i1="#000000",r1=!1,s1=1,Q4=4,X4=0,Z4=.1;function o1(a,s=0){const u=[];return a.forEach(function(c,d){let f=null;c.forEach(function(p,v){if(!p&&f!==null){u.push(`M${f+s} ${d+s}h${v-f}v1H${f+s}z`),f=null;return}if(v===c.length-1){if(!p)return;f===null?u.push(`M${v+s},${d+s} h1v1H${v+s}z`):u.push(`M${f+s},${d+s} h${v+1-f}v1H${f+s}z`);return}p&&f===null&&(f=v)})}),u.join("")}function c1(a,s){return a.slice().map((u,c)=>c<s.y||c>=s.y+s.h?u:u.map((d,f)=>f<s.x||f>=s.x+s.w?d:!1))}function F4(a,s,u,c){if(c==null)return null;const d=a.length+u*2,f=Math.floor(s*Z4),p=d/s,v=(c.width||f)*p,h=(c.height||f)*p,g=c.x==null?a.length/2-v/2:c.x*p,x=c.y==null?a.length/2-h/2:c.y*p,S=c.opacity==null?1:c.opacity;let w=null;if(c.excavate){let j=Math.floor(g),O=Math.floor(x),L=Math.ceil(v+g-j),G=Math.ceil(h+x-O);w={x:j,y:O,w:L,h:G}}const C=c.crossOrigin;return{x:g,y:x,h,w:v,excavation:w,opacity:S,crossOrigin:C}}function P4(a,s){return s!=null?Math.max(Math.floor(s),0):a?Q4:X4}function u1({value:a,level:s,minVersion:u,includeMargin:c,marginSize:d,imageSettings:f,size:p,boostLevel:v}){let h=Ee.useMemo(()=>{const j=(Array.isArray(a)?a:[a]).reduce((O,L)=>(O.push(...Ul.QrSegment.makeSegments(L)),O),[]);return Ul.QrCode.encodeSegments(j,K4[s],u,void 0,void 0,v)},[a,s,u,v]);const{cells:g,margin:x,numCells:S,calculatedImageSettings:w}=Ee.useMemo(()=>{let C=h.getModules();const j=P4(c,d),O=C.length+j*2,L=F4(C,p,j,f);return{cells:C,margin:j,numCells:O,calculatedImageSettings:L}},[h,p,f,c,d]);return{qrcode:h,margin:x,cells:g,numCells:S,calculatedImageSettings:w}}var W4=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),I4=Ee.forwardRef(function(s,u){const c=s,{value:d,size:f=n1,level:p=a1,bgColor:v=l1,fgColor:h=i1,includeMargin:g=r1,minVersion:x=s1,boostLevel:S,marginSize:w,imageSettings:C}=c,O=zd(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:L}=O,G=zd(O,["style"]),Z=C?.src,T=Ee.useRef(null),V=Ee.useRef(null),U=Ee.useCallback(lt=>{T.current=lt,typeof u=="function"?u(lt):u&&(u.current=lt)},[u]),[I,$]=Ee.useState(!1),{margin:X,cells:ae,numCells:Ce,calculatedImageSettings:ve}=u1({value:d,level:p,minVersion:x,boostLevel:S,includeMargin:g,marginSize:w,imageSettings:C,size:f});Ee.useEffect(()=>{if(T.current!=null){const lt=T.current,Ae=lt.getContext("2d");if(!Ae)return;let H=ae;const F=V.current,le=ve!=null&&F!==null&&F.complete&&F.naturalHeight!==0&&F.naturalWidth!==0;le&&ve.excavation!=null&&(H=c1(ae,ve.excavation));const ue=window.devicePixelRatio||1;lt.height=lt.width=f*ue;const z=f/Ce*ue;Ae.scale(z,z),Ae.fillStyle=v,Ae.fillRect(0,0,Ce,Ce),Ae.fillStyle=h,W4?Ae.fill(new Path2D(o1(H,X))):ae.forEach(function(Q,P){Q.forEach(function(W,te){W&&Ae.fillRect(te+X,P+X,1,1)})}),ve&&(Ae.globalAlpha=ve.opacity),le&&Ae.drawImage(F,ve.x+X,ve.y+X,ve.w,ve.h)}}),Ee.useEffect(()=>{$(!1)},[Z]);const Ue=_d({height:f,width:f},L);let Ut=null;return Z!=null&&(Ut=Ee.createElement("img",{src:Z,key:Z,style:{display:"none"},onLoad:()=>{$(!0)},ref:V,crossOrigin:ve?.crossOrigin})),Ee.createElement(Ee.Fragment,null,Ee.createElement("canvas",_d({style:Ue,height:f,width:f,ref:U,role:"img"},G)),Ut)});I4.displayName="QRCodeCanvas";var d1=Ee.forwardRef(function(s,u){const c=s,{value:d,size:f=n1,level:p=a1,bgColor:v=l1,fgColor:h=i1,includeMargin:g=r1,minVersion:x=s1,boostLevel:S,title:w,marginSize:C,imageSettings:j}=c,O=zd(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:L,cells:G,numCells:Z,calculatedImageSettings:T}=u1({value:d,level:p,minVersion:x,boostLevel:S,includeMargin:g,marginSize:C,imageSettings:j,size:f});let V=G,U=null;j!=null&&T!=null&&(T.excavation!=null&&(V=c1(G,T.excavation)),U=Ee.createElement("image",{href:j.src,height:T.h,width:T.w,x:T.x+L,y:T.y+L,preserveAspectRatio:"none",opacity:T.opacity,crossOrigin:T.crossOrigin}));const I=o1(V,L);return Ee.createElement("svg",_d({height:f,width:f,viewBox:`0 0 ${Z} ${Z}`,ref:u,role:"img"},O),!!w&&Ee.createElement("title",null,w),Ee.createElement("path",{fill:v,d:`M0,0 h${Z}v${Z}H0z`,shapeRendering:"crispEdges"}),Ee.createElement("path",{fill:h,d:I,shapeRendering:"crispEdges"}),U)});d1.displayName="QRCodeSVG";const J4={subtitle:"Nach der Meisterschaft in der Landesliga spielt unsere erste Mannschaft seit dieser Saison in der Verbandsliga. Mit einem Feld im 500er Club stehen Sie direkt hinter ihr, ob privat oder mit Ihrer Firma. Jedes Feld steht für einen Förderer.",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Saison 2026/27"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},benefits:[{icon:"📄",title:"Spendenbescheinigung",text:"Der SC Konstanz-Wollmatingen ist als gemeinnützig anerkannt. Auf Wunsch erhalten Sie eine Zuwendungsbestätigung."},{icon:"🏅",title:"Ihr Name auf der Spendentafel",text:"Auf der Website und am Vereinsgelände, wenn Sie möchten. Wer lieber im Hintergrund bleibt, erscheint als „SCKW Gönner“."},{icon:"⚽",title:"Direkt für die Erste",text:"Ihr Beitrag fließt in Auswärtsfahrten, Training, Material und den Spielbetrieb in der Verbandsliga."}],spendentafel:{label:"Spendentafel (optional)",sublabel:"Tragen Sie hier Ihren Namen oder Firmennamen ein, wenn Sie auf unserer Spendentafel (Website & Vereinsgelände) veröffentlicht werden möchten. Lassen Sie das Feld leer, wenn Sie anonym spenden möchten.",nameFieldPlaceholder:"Name/Firma für die Spendentafel (leer = anonym)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},bankCtaLabel:"Per Überweisung spenden",ueberweisungHinweis:"Ihr Name und Ihre Adresse werden automatisch in den Verwendungszweck übernommen, damit wir Ihnen die Spendenbescheinigung zuschicken können.",verwendungszweck:"CLUB 500",bankDetails:{kontoinhaber:"Sport Club Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},e6=100,t6=[{feld:1,name:"Ulrike Dunand",anonym:!1,saisonBis:2027},{feld:2,name:"Dieter Graf",anonym:!1,saisonBis:2027},{feld:3,name:"Bernd Reister",anonym:!1,saisonBis:2027},{feld:4,name:"Stefan Weber",anonym:!1,saisonBis:2027},{feld:5,name:"Lutz Grüneberg",anonym:!1,saisonBis:2027},{feld:6,name:"Steffen Allert",anonym:!1,saisonBis:2028},{feld:7,name:"Fa. Müller Putz & Stuck GmbH",anonym:!1,saisonBis:2027},{feld:8,name:"René Frey",anonym:!1,saisonBis:2027},{feld:9,name:"Luciano Rossetti",anonym:!1,saisonBis:2027},{feld:10,name:"Paolo Rossetti",anonym:!1,saisonBis:2027},{feld:11,name:"Rolf Degen",anonym:!1,saisonBis:2027},{feld:12,name:"Senioren des SCKW",anonym:!1,saisonBis:2027},{feld:13,name:"Brigitte und Thomas Fuchs",anonym:!1,saisonBis:2027},{feld:17,name:"Manni",anonym:!1,saisonBis:2027}],n6={felderGesamt:e6,foerderer:t6},Yp="SCKW Gönner",Ga={blau:"#0061D6",magenta:"#CC0546",navy:"#021A3E",grund:"#010814",rahmen:"#264270",weiss:"#FFFFFF",gedaempft:"#96BAF0"};function a6(){const{felderGesamt:a,foerderer:s}=n6,u=new Map(s.map(f=>[f.feld,f])),c=s.length,d=Array.from({length:a},(f,p)=>p+1);return i.jsx("section",{"aria-labelledby":"tafel-titel",style:{background:Ga.grund,padding:"3rem 1rem",color:Ga.weiss},children:i.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[i.jsx("h2",{id:"tafel-titel",style:{textAlign:"center",fontSize:"clamp(1.5rem,4vw,2.25rem)",margin:0},children:"Unsere Förderer"}),i.jsxs("p",{style:{textAlign:"center",fontWeight:700,letterSpacing:".05em",marginTop:".75rem"},children:[c," von ",a," Feldern vergeben"]}),i.jsx("div",{role:"progressbar","aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":a,"aria-label":`${c} von ${a} Feldern vergeben`,style:{height:10,borderRadius:999,background:"#0E1E3A",overflow:"hidden",margin:"0 auto 2rem",maxWidth:640},children:i.jsx("div",{style:{width:`${c/a*100}%`,height:"100%",background:Ga.magenta}})}),i.jsx("ol",{style:{listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:".5rem",padding:0,margin:0},children:d.map(f=>{const p=u.get(f),v=p?p.anonym?Yp:p.name:null;return i.jsxs("li",{style:{background:p?Ga.blau:Ga.navy,border:p?"none":`2px solid ${Ga.rahmen}`,borderRadius:8,padding:".5rem .4rem",minHeight:62,display:"flex",flexDirection:"column",justifyContent:p?"space-between":"center",alignItems:p?"stretch":"center"},children:[i.jsx("span",{style:{fontSize:p?".7rem":"1.1rem",fontWeight:700,color:p?"#C6DEFC":"#5C7CA0",lineHeight:1},children:String(f).padStart(2,"0")}),v&&i.jsx("span",{style:{fontSize:".8rem",fontWeight:600,textAlign:"center",lineHeight:1.15,hyphens:"auto"},children:v})]},f)})}),i.jsxs("p",{style:{textAlign:"center",marginTop:"2rem",color:Ga.gedaempft,fontSize:".95rem"},children:["Jedes Feld steht für einen Förderer unserer ersten Mannschaft. Ob Ihr Name erscheint, entscheiden Sie selbst - sonst steht dort „",Yp,'".']})]})})}const l6=y.div`
  color-scheme: light;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  background: #fff;
`,i6=y.section`
  position: relative;
  overflow: hidden;
  background: ${_.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 760px);
`,r6=y.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center 30% / cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 1.2s ease;
`,s6=y.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(10, 24, 48, 0.94) 0%,
      rgba(10, 24, 48, 0.78) 45%,
      rgba(10, 24, 48, 0.35) 100%
    ),
    linear-gradient(0deg, rgba(10, 24, 48, 0.95) 0%, rgba(10, 24, 48, 0) 45%);
`,o6=y(ft)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 3.5rem;
`,c6=y.h1`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6.5rem);
  line-height: 0.9;
  margin: 0;
  color: #fff;

  span {
    text-transform: none;
  }
`,u6=y.p`
  max-width: 36rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
`,d6=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,Vp=y.section`
  padding: 4rem 0;
  scroll-margin-top: 72px;
  background: ${({$paper:a})=>a?_.paper:"#fff"};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,f6=y.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,h6=y.article`
  background: #fff;
  border: 1px solid ${_.line};
  border-top: 4px solid ${_.red};
  border-radius: 14px;
  padding: 1.5rem;
`,m6=y.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.05;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 0 0.6rem;
`,g6=y.p`
  margin: 0;
  line-height: 1.55;
  color: ${_.ink};
`,p6=y.div`
  h2 {
    font-family: ${_.fontDisplay};
    font-weight: 800;
    text-transform: uppercase;
    scroll-margin-top: 90px;
  }
`,b6=y.div`
  max-width: 760px;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,x6=y.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${_.ink};
  margin-bottom: 0.6rem;
`,y6=y.h3`
  font-family: ${_.fontBody};
  font-size: 1rem;
  font-weight: 700;
  color: ${_.ink};
  margin: 0 0 0.6rem;
`,v6=y.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Xd=cn`
  border: 2px solid ${({$active:a})=>a?_.blue:_.line};
  background: ${({$active:a})=>a?"#eef5ff":"#fff"};
  border-radius: 12px;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: ${_.blue};
  }
`,S6=y.button`
  ${Xd}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.1rem 1.1rem 1rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: ${_.ink};
`,j6=y.span`
  font-family: ${_.fontDisplay};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  color: ${_.navy};
`,w6=y.span`
  margin-top: 0.35rem;
  font-size: 1rem;
  font-weight: 700;
`,E6=y.span`
  font-size: 0.9rem;
  color: ${_.muted};
`,_6=y.div`
  ${Xd}
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
  margin-bottom: 2rem;
`,z6=y.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  color: ${_.ink};
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: transparent;
  }
`,C6=y.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({$active:a})=>a?_.blue:"#9aa9bd"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({$active:a})=>a?_.blue:"transparent"};
  }
`,A6=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr auto;
    align-items: start;
  }
`,T6=y.div`
  display: flex;
  gap: 0.4rem;
`,k6=y.button`
  ${Xd}
  min-height: 48px;
  padding: 0 0.85rem;
  border-radius: 8px;
  color: ${({$active:a})=>a?"#0650a3":_.ink};
  font: inherit;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
`,ga=y.input`
  width: 100%;
  height: 48px;
  padding: 0 0.85rem;
  border: 1px solid #b9c6d8;
  border-radius: 8px;
  font: inherit;
  font-size: 1rem;
  background: #fff;
  color: ${_.ink};
  color-scheme: light;

  &:focus-visible {
    outline: 3px solid ${_.blue};
    outline-offset: 1px;
    border-color: ${_.blue};
  }

  &::placeholder {
    color: #7b8ba1;
  }
`,R6=y.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${_.muted};
`,M6=y.div`
  margin-bottom: 1.75rem;
`,D6=y.p`
  margin: 0 0 0.6rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${_.muted};
`,B6=y.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.4;
  color: ${_.ink};

  input {
    margin: 0.1rem 0 0;
    width: 20px;
    height: 20px;
    accent-color: ${_.blue};
    flex-shrink: 0;
  }
`,O6=y.p`
  margin: 0.35rem 0 0 1.85rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${_.muted};
`,N6=Bd`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,$6=Bd`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,L6=y.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:a})=>a?cn`animation: ${N6} 0.3s ease forwards;`:cn`animation: ${$6} 0.2s ease forwards; pointer-events: none;`}
`,qp=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,U6=y.div`
  margin-bottom: 2rem;
`,H6=y.button`
  ${Fl}
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
  max-width: 420px;
  min-height: 60px;
  padding: 0.6rem 1.4rem;
`,G6=y.span`
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.9;
`,Y6=y.p`
  margin: 1rem 0 0;
  padding: 0.85rem 1rem;
  background: ${_.paper};
  border-left: 3px solid ${_.blue};
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${_.ink};
  max-width: 60ch;
`,V6=y.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 24, 48, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,q6=y.div`
  background: #fff;
  border-radius: 14px;
  border-top: 4px solid ${_.red};
  padding: 2rem 1.5rem 1.5rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 24px 48px rgba(10, 24, 48, 0.35);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  color-scheme: light;
`,K6=y.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  font-size: 1.6rem;
  line-height: 1;
  color: ${_.muted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${_.paper};
    border-color: transparent;
  }
`,Q6=y.h2`
  font-family: ${_.fontDisplay};
  font-size: 1.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 2.5rem 0.5rem 0;
  line-height: 1;
`,X6=y.p`
  font-size: 0.95rem;
  color: ${_.muted};
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,Z6=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid ${_.line};
`,Bs=y.div`
  font-size: 0.95rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
  strong { color: ${_.navy}; }
`,F6=y.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${_.muted};
`,P6=y.p`
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  background: ${_.paper};
  border-left: 3px solid ${_.blue};
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
`;function Kp(a){return a.toLocaleString("de-DE",{minimumFractionDigits:a%1===0?0:1,maximumFractionDigits:2})}function W6(a,s,u,c,d){return["BCD","002","1","SCT",u,a,s,`EUR${c.toFixed(2)}`,"","",d].join(`
`)}const sd=[ht("herren/herren_club500_1"),ht("herren/herren_club500_4"),ht("herren/herren_club500_2"),ht("herren/herren_club500_3"),ht("herren/herren_club500_5")].filter(Boolean),I6=["1 Jahr","2 Jahre","3 Jahre"],f1=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Qp=a=>{document.getElementById(a)?.scrollIntoView({behavior:f1()?"auto":"smooth",block:"start"})};function J6(){const a=J4,[s,u]=k.useState(0);k.useEffect(()=>{if(sd.length<=1||f1())return;const X=setInterval(()=>u(ae=>(ae+1)%sd.length),6e3);return()=>clearInterval(X)},[]);const[c,d]=k.useState(0),[f,p]=k.useState(!1),[v,h]=k.useState(""),[g,x]=k.useState("1 Jahr"),[S,w]=k.useState(""),[C,j]=k.useState(!1),[O,L]=k.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[G,Z]=k.useState(!1);k.useEffect(()=>{if(!G)return;const X=ae=>{ae.key==="Escape"&&Z(!1)};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[G]);const T=k.useMemo(()=>{if(f){const X=parseFloat(v.replace(",","."));return isNaN(X)||X<a.customAmount.minAmount?0:X}return a.memberships[c]?.value??0},[f,v,c,a.memberships,a.customAmount.minAmount]),V=k.useMemo(()=>f?g:a.memberships[c]?.duration??"",[f,g,c,a.memberships]),U=k.useMemo(()=>{const X=[a.verwendungszweck];if(V&&X.push(V),S.trim()&&X.push(`Tafel: ${S.trim()}`),C){const ae=[O.vorname,O.nachname].filter(Boolean).join(" "),Ce=[O.strasse,O.plz,O.ort].filter(Boolean).join(", "),ve=[ae,Ce].filter(Boolean).join(", ");ve&&X.push(`Besch: ${ve}`)}return X.join(" | ")},[a.verwendungszweck,V,S,C,O]),I=k.useMemo(()=>W6(a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,T,U),[a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,T,U]),$=(X,ae)=>L(Ce=>({...Ce,[X]:ae}));return i.jsxs(l6,{children:[i.jsxs(i6,{"aria-labelledby":"club500-title","data-dark":!0,children:[sd.map((X,ae)=>i.jsx(r6,{$bg:X,$active:ae===s,"aria-hidden":"true"},ae)),i.jsx(s6,{}),i.jsxs(o6,{children:[i.jsx(ir,{$onDark:!0,children:"100 Felder, 500 € pro Feld und Saison"}),i.jsxs(c6,{id:"club500-title",children:["Der ",i.jsx("span",{children:"500er"})," Club."]}),i.jsx(u6,{children:a.subtitle}),i.jsxs(d6,{children:[i.jsx(rr,{href:"#feld-sichern",onClick:X=>{X.preventDefault(),Qp("feld-sichern")},children:"Feld sichern"}),i.jsx(rr,{href:"#tafel-titel",$variant:"outlineLight",onClick:X=>{X.preventDefault(),Qp("tafel-titel")},children:"Unsere Förderer ansehen"})]})]})]}),i.jsx(Vp,{"aria-labelledby":"benefits-title",children:i.jsxs(ft,{children:[i.jsx(on,{id:"benefits-title",eyebrow:"Ihre Unterstützung",title:"Was Ihr Feld bewirkt."}),i.jsx(f6,{children:a.benefits.map(X=>i.jsxs(h6,{children:[i.jsx(m6,{children:X.title}),i.jsx(g6,{children:X.text})]},X.title))})]})}),i.jsx(p6,{"data-dark":!0,children:i.jsx(a6,{})}),i.jsx(Vp,{$paper:!0,id:"feld-sichern","aria-labelledby":"feld-title",children:i.jsxs(ft,{children:[i.jsx(on,{id:"feld-title",eyebrow:"Per Überweisung oder QR-Code",title:"Feld sichern.",lead:"Wählen Sie, für wie viele Saisons Sie ein Feld übernehmen möchten."}),i.jsxs(b6,{children:[i.jsxs("div",{role:"group","aria-labelledby":"optionen-label",children:[i.jsx(y6,{id:"optionen-label",children:a.sectionTitle}),i.jsx(v6,{children:a.memberships.map((X,ae)=>{const Ce=!f&&c===ae;return i.jsxs(S6,{$active:Ce,"aria-pressed":Ce,onClick:()=>{p(!1),d(ae)},type:"button",children:[i.jsx(j6,{children:X.label}),i.jsx(w6,{children:X.duration}),i.jsx(E6,{children:X.description})]},X.value)})}),i.jsxs(_6,{$active:f,onClick:()=>{f||p(!0)},children:[i.jsxs(z6,{type:"button","aria-pressed":f,children:[i.jsx(C6,{$active:f}),a.customAmount.label]}),f&&i.jsxs(A6,{onClick:X=>X.stopPropagation(),children:[i.jsx(ga,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR","aria-label":"Eigener Betrag in Euro",value:v,onChange:X=>h(X.target.value),autoFocus:!0}),i.jsx(T6,{role:"group","aria-label":"Laufzeit",children:I6.map(X=>i.jsx(k6,{$active:g===X,"aria-pressed":g===X,onClick:()=>x(X),type:"button",children:X},X))})]}),f&&i.jsx(R6,{children:a.customAmount.minHint})]})]}),i.jsxs(M6,{children:[i.jsx(x6,{htmlFor:"tafel-name",children:a.spendentafel.label}),i.jsx(D6,{id:"tafel-hinweis",children:a.spendentafel.sublabel}),i.jsx(ga,{id:"tafel-name",type:"text","aria-describedby":"tafel-hinweis",placeholder:a.spendentafel.nameFieldPlaceholder,value:S,onChange:X=>w(X.target.value)})]}),i.jsxs(U6,{children:[i.jsxs(B6,{children:[i.jsx("input",{type:"checkbox",checked:C,onChange:X=>j(X.target.checked)}),i.jsx("span",{children:a.bescheinigung.label})]}),i.jsx(O6,{children:a.bescheinigung.hinweis}),i.jsxs(L6,{$visible:C,children:[i.jsxs(qp,{children:[i.jsx(ga,{type:"text",name:"bescheinigung-vorname",autoComplete:"given-name","aria-label":a.bescheinigung.fields.vorname,placeholder:a.bescheinigung.fields.vorname,value:O.vorname,onChange:X=>$("vorname",X.target.value)}),i.jsx(ga,{type:"text",name:"bescheinigung-nachname",autoComplete:"family-name","aria-label":a.bescheinigung.fields.nachname,placeholder:a.bescheinigung.fields.nachname,value:O.nachname,onChange:X=>$("nachname",X.target.value)})]}),i.jsx(ga,{type:"email",name:"bescheinigung-email",autoComplete:"email","aria-label":a.bescheinigung.fields.email,placeholder:a.bescheinigung.fields.email,value:O.email,onChange:X=>$("email",X.target.value)}),i.jsx(ga,{type:"text",name:"bescheinigung-strasse",autoComplete:"street-address","aria-label":a.bescheinigung.fields.strasse,placeholder:a.bescheinigung.fields.strasse,value:O.strasse,onChange:X=>$("strasse",X.target.value)}),i.jsxs(qp,{children:[i.jsx(ga,{type:"text",name:"bescheinigung-plz",autoComplete:"postal-code","aria-label":a.bescheinigung.fields.plz,placeholder:a.bescheinigung.fields.plz,value:O.plz,onChange:X=>$("plz",X.target.value)}),i.jsx(ga,{type:"text",name:"bescheinigung-ort",autoComplete:"address-level2","aria-label":a.bescheinigung.fields.ort,placeholder:a.bescheinigung.fields.ort,value:O.ort,onChange:X=>$("ort",X.target.value)})]})]})]}),i.jsxs(H6,{type:"button",onClick:()=>Z(!0),children:[a.bankCtaLabel,i.jsxs(G6,{children:[Kp(T)," €"]})]}),C&&i.jsx(Y6,{children:a.ueberweisungHinweis})]})]})}),i.jsx(so,{}),G&&i.jsx(V6,{onClick:()=>Z(!1),children:i.jsxs(q6,{role:"dialog","aria-modal":"true","aria-labelledby":"qr-title",onClick:X=>X.stopPropagation(),children:[i.jsx(K6,{type:"button","aria-label":"Schließen",onClick:()=>Z(!1),autoFocus:!0,children:"×"}),i.jsx(Q6,{id:"qr-title",children:"Überweisung per QR-Code"}),i.jsx(X6,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING usw.). Alle Daten werden automatisch ausgefüllt."}),T>0&&i.jsx(Z6,{children:i.jsx(d1,{value:I,size:220,level:"M"})}),i.jsx(Bs,{children:i.jsx("strong",{children:a.bankDetails.kontoinhaber})}),i.jsxs(Bs,{children:["IBAN: ",i.jsx("strong",{children:a.bankDetails.iban})]}),i.jsxs(Bs,{children:["Betrag: ",i.jsxs("strong",{children:[Kp(T)," €"]}),V&&i.jsxs(i.Fragment,{children:[", ",i.jsx("strong",{children:V})]})]}),i.jsxs(Bs,{children:["Verwendungszweck: ",i.jsx("strong",{children:U})]}),i.jsxs(F6,{children:[a.bankDetails.bank,", ",a.bankDetails.adresse]}),C&&O.email&&i.jsxs(P6,{children:["Wir senden Ihre Spendenbescheinigung an ",i.jsx("strong",{children:O.email}),"."]})]})})]})}const eE=["Ein Spieler-Post in der Hinrunde und einer in der Rückrunde","Eine Vorstellung als Partner mit ein bis zwei gemeinsamen Bildern mit dem Spieler","Sie kommen mit aufs Bild, wenn er trifft oder Spieler des Spiels wird","Ein vom Spieler signiertes Trikot für Ihr Büro","Exklusiv: nur ein Partner pro Spieler","So sichtbar oder so dezent, wie Sie möchten"];function tE(){return i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3 8.5l3 3 7-7",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}function nE(){const a=`mailto:${jt.email}?subject=${encodeURIComponent("Personal Partner - Interesse")}`;return i.jsxs(aE,{children:[i.jsx(lE,{"aria-labelledby":"pp-title","data-dark":!0,children:i.jsxs(ft,{children:[i.jsx(iE,{to:"/sponsoring",children:"Zurück zur Übersicht"}),i.jsx(ir,{$onDark:!0,children:"Persönliche Partnerschaft"}),i.jsx(rE,{id:"pp-title",children:"Personal Partner."}),i.jsx(Vb,{$onDark:!0,children:"Unterstützen Sie gezielt einen SCKW-Spieler und begleiten Sie ihn durch seine Saison. Persönlich, exklusiv und ganz nah an der Mannschaft."})]})}),i.jsx(sE,{"aria-labelledby":"pp-leistungen",children:i.jsx(ft,{children:i.jsxs(oE,{children:[i.jsxs("div",{children:[i.jsx(on,{id:"pp-leistungen",eyebrow:"Ein Spieler, ein Partner",title:"Ganz nah dran."}),i.jsx(cE,{children:"Als Personal Partner stehen Sie hinter einem einzelnen Spieler und begleiten seine Saison beim SCKW. Das ist persönlicher als jede Bande: Sie lernen den Spieler kennen, erscheinen gemeinsam mit ihm auf unseren Kanälen und sind bei seinen großen Momenten dabei."})]}),i.jsxs(uE,{children:[i.jsx(dE,{children:"Das ist enthalten"}),i.jsx(fE,{children:eE.map(s=>i.jsxs("li",{children:[i.jsx(tE,{}),s]},s))}),i.jsxs(hE,{children:[i.jsx("span",{children:"Eine Saison"}),i.jsx(mE,{children:"2.500 €"})]}),i.jsx(gE,{children:"Verhandlungsbasis, im Gespräch individuell anpassbar."})]})]})})}),i.jsx(pE,{"aria-labelledby":"pp-kontakt",children:i.jsxs(ft,{children:[i.jsx(on,{id:"pp-kontakt",eyebrow:"Kontakt",title:"Sprechen wir darüber.",lead:"Erzählen Sie uns, welchen Spieler Sie begleiten möchten. Wir melden uns innerhalb von 24 Stunden."}),i.jsx(rr,{href:a,children:"Per E-Mail anfragen"})]})}),i.jsx(so,{})]})}const aE=y.div`
  color-scheme: light;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  background: #fff;
`,lE=y.section`
  background: ${_.navy};
  color: #fff;
  padding: 3rem 0 3.5rem;

  @media (min-width: 768px) {
    padding: 4rem 0 5rem;
  }
`,iE=y(ya)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: #fff;
  }
`,rE=y.h1`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 9vw, 5.5rem);
  line-height: 0.9;
  margin: 0;
  color: #fff;
`,sE=y.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,oE=y.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: 4rem;
    align-items: start;
  }
`,cE=y.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.65;
  color: ${_.ink};
  max-width: 60ch;
`,uE=y.div`
  background: #fff;
  border: 1px solid ${_.line};
  border-top: 4px solid ${_.red};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,dE=y.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 0 1rem;
`,fE=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    padding: 0.7rem 0;
    line-height: 1.5;
    border-bottom: 1px solid ${_.line};
  }

  li:last-child {
    border-bottom: none;
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.25rem;
    color: ${_.blue};
  }
`,hE=y.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${_.line};
  font-weight: 600;
  color: ${_.muted};
`,mE=y.span`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 2.8rem);
  line-height: 1;
  color: ${_.navy};
`,gE=y.p`
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: ${_.muted};
`,pE=y.section`
  background: ${_.paper};
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,bE="https://partner.sckw.de",xE=6e3,yE=[{id:"reichweite",active:!0,eyebrow:"SC Konstanz-Wollmatingen · Sponsoring",title:"1,7 Mio. Views in 12 Monaten",subline:"100 % organisch, ohne Werbebudget. Ihre Marke ist bei jedem Spiel dabei.",href:"/sponsoring",image:"herren/herren_6",cta:"Partner werden"},{id:"exklusiv",active:!0,eyebrow:"Exklusiv-Partnerschaften",title:"Das Gesicht des Vereins werden",subline:"Stadionname, Trikot-Rücken oder Trikot-Ärmel sind noch frei.",href:"/sponsoring#angebot",image:"herren/herren_16",badge:"Noch frei",cta:"Details ansehen"},{id:"werbeflaechen",active:!0,eyebrow:"Werbeflächen",title:"Ihr Logo bei jedem Heimspiel",subline:"Banden und Banner direkt am Spielfeldrand.",href:"/sponsoring#werbeflaechen",image:"herren/herren_5",cta:"Flächen ansehen"},{id:"spieltag",active:!0,eyebrow:"Spieltag & Medien",title:"Schon mit kleinem Budget dabei",subline:"Ballspende, Spielpräsentator oder Magazin-Inserat.",href:"/sponsoring#spieltag",image:"herren/herren_14",badge:"Einstieg",cta:"Möglichkeiten ansehen"},{id:"club-500",active:!0,eyebrow:"500er Club",title:"Mit 500 € pro Saison dabei",subline:"Ein Feld im 500er Club unterstützt direkt unsere erste Mannschaft.",href:"/sponsoring/club-500",image:"herren/herren_6",cta:"Zum 500er Club"},{id:"kontakt",active:!0,eyebrow:"Partner werden",title:"Lassen Sie uns reden",subline:"Wir stellen gern ein Paket nach Ihren Wünschen zusammen: sponsoring@sckw.de",href:"/sponsoring",image:"herren/herren_16",cta:"Zur Sponsoring-Seite"}],od=yE.filter(a=>a.active),vE=45;function SE(){const[a,s]=k.useState(0),[u,c]=k.useState(!1),[d,f]=k.useState(!1),p=k.useRef(null),v=od.length,h=k.useCallback(C=>s((C%v+v)%v),[v]);k.useEffect(()=>{const C=window.matchMedia("(prefers-reduced-motion: reduce)");f(C.matches);const j=()=>f(C.matches);return C.addEventListener?.("change",j),()=>C.removeEventListener?.("change",j)},[]),k.useEffect(()=>{if(u||d||v<=1)return;const C=setInterval(()=>s(j=>(j+1)%v),xE);return()=>clearInterval(C)},[u,d,v]);const g=C=>{p.current=C.touches[0].clientX},x=C=>{if(p.current===null)return;const j=C.changedTouches[0].clientX-p.current;Math.abs(j)>vE&&h(a+(j<0?1:-1)),p.current=null};if(v===0)return null;const S=od[a],w=ht(S.image);return i.jsxs(jE,{role:"group","aria-roledescription":"Karussell","aria-label":"Sponsoring-Angebote des SC Konstanz-Wollmatingen",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1),onTouchStart:g,onTouchEnd:x,children:[i.jsxs(h1,{href:`${bE}${S.href}`,target:"_blank",rel:"noopener noreferrer","aria-label":`${S.title} - ${S.cta} (öffnet in neuem Tab)`,$bg:w,children:[i.jsxs(wE,{children:[i.jsx(EE,{src:"/logo-transparent.avif",alt:"SC Konstanz-Wollmatingen"}),S.badge&&i.jsx(_E,{children:S.badge})]}),i.jsxs(zE,{children:[i.jsx(CE,{children:S.eyebrow}),i.jsx(AE,{children:S.title}),i.jsx(TE,{children:S.subline}),i.jsxs(kE,{children:[S.cta,i.jsx("span",{"aria-hidden":!0,children:"→"})]})]})]},S.id),v>1&&i.jsxs(RE,{children:[i.jsx(Xp,{onClick:()=>h(a-1),"aria-label":"Vorheriges Angebot",children:"‹"}),i.jsx(ME,{children:od.map((C,j)=>i.jsx(DE,{$active:j===a,onClick:()=>h(j),"aria-label":`Angebot ${j+1} von ${v}`,"aria-current":j===a?"true":void 0},C.id))}),i.jsx(Xp,{onClick:()=>h(a+1),"aria-label":"Nächstes Angebot",children:"›"})]})]})}const jE=y.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
`,h1=y.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 340px;
  padding: 26px 32px 58px;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  isolation: isolate;
  background: ${({$bg:a})=>a?`url(${a}) center/cover no-repeat`:"#0b0b0d"};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.94) 0%,
      rgba(0, 0, 0, 0.62) 50%,
      rgba(0, 0, 0, 0.45) 100%
    );
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 52px rgba(0, 0, 0, 0.36);
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  /* Mobil: kein Foto, solider Vereins-Farbverlauf - maximal lesbar,
     kompakt, damit es auch in einem niedrigen iframe komplett passt */
  @media (max-width: 480px) {
    min-height: 240px;
    padding: 18px 18px 44px;
    border-radius: 16px;
    gap: 10px;
    background: linear-gradient(
      135deg,
      #16213e 0%,
      #0b0b0d 55%,
      ${cr.colors.primaryDark} 155%
    );

    &::before {
      display: none;
    }
  }
`,wE=y.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,EE=y.img`
  height: 44px;
  width: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));

  @media (max-width: 480px) {
    height: 36px;
  }
`,_E=y.span`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
  color: #fff;
  background: ${cr.colors.primary};
  box-shadow: 0 4px 14px rgba(217, 36, 95, 0.45);
`,zE=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,CE=y.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);

  &::before {
    content: "";
    width: 26px;
    height: 3px;
    border-radius: 3px;
    background: ${cr.colors.primary};
  }
`,AE=y.h2`
  margin: 0;
  font-size: clamp(1.7rem, 4.5vw, 2.5rem);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.6);
  max-width: 16ch;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 8vw, 2rem);
  }
`,TE=y.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
  max-width: 42ch;

  @media (max-width: 480px) {
    font-size: 14.5px;
  }
`,kE=y.span`
  margin-top: 10px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 800;
  padding: 12px 22px;
  border-radius: 999px;
  background: #fff;
  color: ${cr.colors.primaryDark};
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);

  span {
    transition: transform 0.2s ease;
  }

  ${h1}:hover & span {
    transform: translateX(4px);
  }
`,RE=y.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,Xp=y.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.32);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  /* Auf Touch-Geräten wird gewischt - Chevrons ausblenden, spart Platz */
  @media (max-width: 480px) {
    display: none;
  }
`,ME=y.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,DE=y.button`
  position: relative;
  width: ${a=>a.$active?"32px":"24px"};
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${a=>a.$active?"0":"8px"};
    right: ${a=>a.$active?"0":"8px"};
    transform: translateY(-50%);
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, ${a=>a.$active?"0.95":"0.6"});
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transition: background 0.25s ease;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
    border-radius: 6px;
  }
`,BE=y0`
  :root,
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    min-height: 0;
    background: transparent !important;
    /* Dark-Mode-Canvas verhindern - sonst malt der Browser eine schwarze
       Fläche hinter den transparenten Body statt durchscheinen zu lassen */
    color-scheme: light;
    text-align: left;
  }
`,OE=y.div`
  padding: 0;
  display: flex;
  justify-content: center;
`;function NE(){return i.jsxs(i.Fragment,{children:[i.jsx(BE,{}),i.jsx(OE,{children:i.jsx(SE,{})})]})}function $E(){const{pathname:a,hash:s}=fn();return k.useEffect(()=>{if(!s){window.scrollTo(0,0);return}const u=decodeURIComponent(s.slice(1));let c=0,d=0,f=0;const p=()=>{const v=document.getElementById(u);v?(v.scrollIntoView({block:"start"}),f=window.setTimeout(()=>v.scrollIntoView({block:"start"}),400)):c++<20&&(d=window.setTimeout(p,100))};return p(),()=>{window.clearTimeout(d),window.clearTimeout(f)}},[a,s]),null}function Ii({children:a}){return i.jsxs(i.Fragment,{children:[i.jsx(N0,{}),i.jsx("main",{id:"inhalt",children:a})]})}function LE(){return i.jsxs(rS,{children:[i.jsx($E,{}),i.jsxs(N2,{children:[i.jsx(sn,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(N0,{}),i.jsx(Hs,{to:"/sponsoring",replace:!0})]})}),i.jsx(sn,{path:"/sponsoring",element:i.jsx(Ii,{children:i.jsx(Pw,{})})}),i.jsx(sn,{path:"/sponsoring-handoff",element:i.jsx(_3,{})}),i.jsx(sn,{path:"/widget",element:i.jsx(NE,{})}),i.jsx(sn,{path:"/sponsoring/club-500",element:i.jsx(Ii,{children:i.jsx(J6,{})})}),i.jsx(sn,{path:"/sponsoring/pakete",element:i.jsx(Hs,{to:"/sponsoring#angebot",replace:!0})}),i.jsx(sn,{path:"/sponsoring/spielerpatenschaft",element:i.jsx(Ii,{children:i.jsx(nE,{})})}),i.jsx(sn,{path:"/mockup-generator",element:i.jsx(Ii,{children:i.jsx(V4,{})})}),i.jsx(sn,{path:"/renovierung",element:i.jsx(Ii,{children:i.jsx(dj,{})})}),i.jsx(sn,{path:"*",element:i.jsx(Hs,{to:"/sponsoring",replace:!0})})]})]})}console.log("sckw sponsoring Website loaded");Qy.createRoot(document.getElementById("root")).render(i.jsx(k.StrictMode,{children:i.jsx(qv,{theme:cr,children:i.jsx(LE,{})})}));
