(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const y of f.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function Hy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var wu={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Gy(){if(Yg)return Pi;Yg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,f){var y=null;if(f!==void 0&&(y=""+f),d.key!==void 0&&(y=""+d.key),"key"in d){f={};for(var v in d)v!=="key"&&(f[v]=d[v])}else f=d;return d=f.ref,{$$typeof:a,type:c,key:y,ref:d!==void 0?d:null,props:f}}return Pi.Fragment=s,Pi.jsx=u,Pi.jsxs=u,Pi}var qg;function Vy(){return qg||(qg=1,wu.exports=Gy()),wu.exports}var i=Vy(),Eu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Yy(){if(Kg)return ce;Kg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),y=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),S=Symbol.iterator;function w(z){return z===null||typeof z!="object"?null:(z=S&&z[S]||z["@@iterator"],typeof z=="function"?z:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,O={};function L(z,Q,P){this.props=z,this.context=Q,this.refs=O,this.updater=P||C}L.prototype.isReactComponent={},L.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},L.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function G(){}G.prototype=L.prototype;function X(z,Q,P){this.props=z,this.context=Q,this.refs=O,this.updater=P||C}var k=X.prototype=new G;k.constructor=X,j(k,L.prototype),k.isPureReactComponent=!0;var Y=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function N(z,Q,P,W,te,me){return P=me.ref,{$$typeof:a,type:z,key:Q,ref:P!==void 0?P:null,props:me}}function Z(z,Q){return N(z.type,Q,void 0,void 0,void 0,z.props)}function ae(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function Ce(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(P){return Q[P]})}var ve=/\/+/g;function Ue(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?Ce(""+z.key):Q.toString(36)}function Ht(){}function it(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Ht,Ht):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Ae(z,Q,P,W,te){var me=typeof z;(me==="undefined"||me==="boolean")&&(z=null);var le=!1;if(z===null)le=!0;else switch(me){case"bigint":case"string":case"number":le=!0;break;case"object":switch(z.$$typeof){case a:case s:le=!0;break;case p:return le=z._init,Ae(le(z._payload),Q,P,W,te)}}if(le)return te=te(z),le=W===""?"."+Ue(z,0):W,Y(te)?(P="",le!=null&&(P=le.replace(ve,"$&/")+"/"),Ae(te,Q,P,"",function(ut){return ut})):te!=null&&(ae(te)&&(te=Z(te,P+(te.key==null||z&&z.key===te.key?"":(""+te.key).replace(ve,"$&/")+"/")+le)),Q.push(te)),1;le=0;var We=W===""?".":W+":";if(Y(z))for(var je=0;je<z.length;je++)W=z[je],me=We+Ue(W,je),le+=Ae(W,Q,P,me,te);else if(je=w(z),typeof je=="function")for(z=je.call(z),je=0;!(W=z.next()).done;)W=W.value,me=We+Ue(W,je++),le+=Ae(W,Q,P,me,te);else if(me==="object"){if(typeof z.then=="function")return Ae(it(z),Q,P,W,te);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return le}function H(z,Q,P){if(z==null)return z;var W=[],te=0;return Ae(z,W,"","",function(me){return Q.call(P,me,te++)}),W}function F(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(P){(z._status===0||z._status===-1)&&(z._status=1,z._result=P)},function(P){(z._status===0||z._status===-1)&&(z._status=2,z._result=P)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var re=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ue(){}return ce.Children={map:H,forEach:function(z,Q,P){H(z,function(){Q.apply(this,arguments)},P)},count:function(z){var Q=0;return H(z,function(){Q++}),Q},toArray:function(z){return H(z,function(Q){return Q})||[]},only:function(z){if(!ae(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ce.Component=L,ce.Fragment=u,ce.Profiler=d,ce.PureComponent=X,ce.StrictMode=c,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ce.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},ce.cache=function(z){return function(){return z.apply(null,arguments)}},ce.cloneElement=function(z,Q,P){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var W=j({},z.props),te=z.key,me=void 0;if(Q!=null)for(le in Q.ref!==void 0&&(me=void 0),Q.key!==void 0&&(te=""+Q.key),Q)!I.call(Q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&Q.ref===void 0||(W[le]=Q[le]);var le=arguments.length-2;if(le===1)W.children=P;else if(1<le){for(var We=Array(le),je=0;je<le;je++)We[je]=arguments[je+2];W.children=We}return N(z.type,te,void 0,void 0,me,W)},ce.createContext=function(z){return z={$$typeof:y,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},ce.createElement=function(z,Q,P){var W,te={},me=null;if(Q!=null)for(W in Q.key!==void 0&&(me=""+Q.key),Q)I.call(Q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(te[W]=Q[W]);var le=arguments.length-2;if(le===1)te.children=P;else if(1<le){for(var We=Array(le),je=0;je<le;je++)We[je]=arguments[je+2];te.children=We}if(z&&z.defaultProps)for(W in le=z.defaultProps,le)te[W]===void 0&&(te[W]=le[W]);return N(z,me,void 0,void 0,null,te)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(z){return{$$typeof:v,render:z}},ce.isValidElement=ae,ce.lazy=function(z){return{$$typeof:p,_payload:{_status:-1,_result:z},_init:F}},ce.memo=function(z,Q){return{$$typeof:h,type:z,compare:Q===void 0?null:Q}},ce.startTransition=function(z){var Q=U.T,P={};U.T=P;try{var W=z(),te=U.S;te!==null&&te(P,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(ue,re)}catch(me){re(me)}finally{U.T=Q}},ce.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ce.use=function(z){return U.H.use(z)},ce.useActionState=function(z,Q,P){return U.H.useActionState(z,Q,P)},ce.useCallback=function(z,Q){return U.H.useCallback(z,Q)},ce.useContext=function(z){return U.H.useContext(z)},ce.useDebugValue=function(){},ce.useDeferredValue=function(z,Q){return U.H.useDeferredValue(z,Q)},ce.useEffect=function(z,Q,P){var W=U.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(z,Q)},ce.useId=function(){return U.H.useId()},ce.useImperativeHandle=function(z,Q,P){return U.H.useImperativeHandle(z,Q,P)},ce.useInsertionEffect=function(z,Q){return U.H.useInsertionEffect(z,Q)},ce.useLayoutEffect=function(z,Q){return U.H.useLayoutEffect(z,Q)},ce.useMemo=function(z,Q){return U.H.useMemo(z,Q)},ce.useOptimistic=function(z,Q){return U.H.useOptimistic(z,Q)},ce.useReducer=function(z,Q,P){return U.H.useReducer(z,Q,P)},ce.useRef=function(z){return U.H.useRef(z)},ce.useState=function(z){return U.H.useState(z)},ce.useSyncExternalStore=function(z,Q,P){return U.H.useSyncExternalStore(z,Q,P)},ce.useTransition=function(){return U.H.useTransition()},ce.version="19.1.0",ce}var Qg;function kd(){return Qg||(Qg=1,Eu.exports=Yy()),Eu.exports}var T=kd();const Ee=Hy(T);var _u={exports:{}},Wi={},zu={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function qy(){return Zg||(Zg=1,function(a){function s(H,F){var re=H.length;H.push(F);e:for(;0<re;){var ue=re-1>>>1,z=H[ue];if(0<d(z,F))H[ue]=F,H[re]=z,re=ue;else break e}}function u(H){return H.length===0?null:H[0]}function c(H){if(H.length===0)return null;var F=H[0],re=H.pop();if(re!==F){H[0]=re;e:for(var ue=0,z=H.length,Q=z>>>1;ue<Q;){var P=2*(ue+1)-1,W=H[P],te=P+1,me=H[te];if(0>d(W,re))te<z&&0>d(me,W)?(H[ue]=me,H[te]=re,ue=te):(H[ue]=W,H[P]=re,ue=P);else if(te<z&&0>d(me,re))H[ue]=me,H[te]=re,ue=te;else break e}}return F}function d(H,F){var re=H.sortIndex-F.sortIndex;return re!==0?re:H.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var y=Date,v=y.now();a.unstable_now=function(){return y.now()-v}}var m=[],h=[],p=1,S=null,w=3,C=!1,j=!1,O=!1,L=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function Y(H){for(var F=u(h);F!==null;){if(F.callback===null)c(h);else if(F.startTime<=H)c(h),F.sortIndex=F.expirationTime,s(m,F);else break;F=u(h)}}function U(H){if(O=!1,Y(H),!j)if(u(m)!==null)j=!0,I||(I=!0,Ue());else{var F=u(h);F!==null&&Ae(U,F.startTime-H)}}var I=!1,N=-1,Z=5,ae=-1;function Ce(){return L?!0:!(a.unstable_now()-ae<Z)}function ve(){if(L=!1,I){var H=a.unstable_now();ae=H;var F=!0;try{e:{j=!1,O&&(O=!1,X(N),N=-1),C=!0;var re=w;try{t:{for(Y(H),S=u(m);S!==null&&!(S.expirationTime>H&&Ce());){var ue=S.callback;if(typeof ue=="function"){S.callback=null,w=S.priorityLevel;var z=ue(S.expirationTime<=H);if(H=a.unstable_now(),typeof z=="function"){S.callback=z,Y(H),F=!0;break t}S===u(m)&&c(m),Y(H)}else c(m);S=u(m)}if(S!==null)F=!0;else{var Q=u(h);Q!==null&&Ae(U,Q.startTime-H),F=!1}}break e}finally{S=null,w=re,C=!1}F=void 0}}finally{F?Ue():I=!1}}}var Ue;if(typeof k=="function")Ue=function(){k(ve)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,it=Ht.port2;Ht.port1.onmessage=ve,Ue=function(){it.postMessage(null)}}else Ue=function(){G(ve,0)};function Ae(H,F){N=G(function(){H(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(H){switch(w){case 1:case 2:case 3:var F=3;break;default:F=w}var re=w;w=F;try{return H()}finally{w=re}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(H,F){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=w;w=H;try{return F()}finally{w=re}},a.unstable_scheduleCallback=function(H,F,re){var ue=a.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ue+re:ue):re=ue,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=re+z,H={id:p++,callback:F,priorityLevel:H,startTime:re,expirationTime:z,sortIndex:-1},re>ue?(H.sortIndex=re,s(h,H),u(m)===null&&H===u(h)&&(O?(X(N),N=-1):O=!0,Ae(U,re-ue))):(H.sortIndex=z,s(m,H),j||C||(j=!0,I||(I=!0,Ue()))),H},a.unstable_shouldYield=Ce,a.unstable_wrapCallback=function(H){var F=w;return function(){var re=w;w=F;try{return H.apply(this,arguments)}finally{w=re}}}}(Cu)),Cu}var Xg;function Ky(){return Xg||(Xg=1,zu.exports=qy()),zu.exports}var Au={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Qy(){if(Fg)return ht;Fg=1;var a=kd();function s(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)h+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(m,h,p){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:m,containerInfo:h,implementation:p}}var y=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ht.createPortal=function(m,h){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return f(m,h,null,p)},ht.flushSync=function(m){var h=y.T,p=c.p;try{if(y.T=null,c.p=2,m)return m()}finally{y.T=h,c.p=p,c.d.f()}},ht.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(m,h))},ht.prefetchDNS=function(m){typeof m=="string"&&c.d.D(m)},ht.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var p=h.as,S=v(p,h.crossOrigin),w=typeof h.integrity=="string"?h.integrity:void 0,C=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;p==="style"?c.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:C}):p==="script"&&c.d.X(m,{crossOrigin:S,integrity:w,fetchPriority:C,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ht.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var p=v(h.as,h.crossOrigin);c.d.M(m,{crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(m)},ht.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var p=h.as,S=v(p,h.crossOrigin);c.d.L(m,p,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ht.preloadModule=function(m,h){if(typeof m=="string")if(h){var p=v(h.as,h.crossOrigin);c.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(m)},ht.requestFormReset=function(m){c.d.r(m)},ht.unstable_batchedUpdates=function(m,h){return m(h)},ht.useFormState=function(m,h,p){return y.H.useFormState(m,h,p)},ht.useFormStatus=function(){return y.H.useHostTransitionStatus()},ht.version="19.1.0",ht}var Pg;function Zy(){if(Pg)return Au.exports;Pg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Au.exports=Qy(),Au.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function Xy(){if(Wg)return Wi;Wg=1;var a=Ky(),s=kd(),u=Zy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return v(l),e;if(o===r)return v(l),t;o=o.sibling}throw Error(c(188))}if(n.return!==r.return)n=l,r=o;else{for(var g=!1,x=l.child;x;){if(x===n){g=!0,n=l,r=o;break}if(x===r){g=!0,r=l,n=o;break}x=x.sibling}if(!g){for(x=o.child;x;){if(x===n){g=!0,n=o,r=l;break}if(x===r){g=!0,r=o,n=l;break}x=x.sibling}if(!g)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),k=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Ht=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case L:return"Profiler";case O:return"StrictMode";case U:return"Suspense";case I:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case k:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return t=e.displayName||null,t!==null?t:it(e.type)||"Memo";case Z:t=e._payload,e=e._init;try{return it(e(t))}catch{}}return null}var Ae=Array.isArray,H=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ue=[],z=-1;function Q(e){return{current:e}}function P(e){0>z||(e.current=ue[z],ue[z]=null,z--)}function W(e,t){z++,ue[z]=e.current,e.current=t}var te=Q(null),me=Q(null),le=Q(null),We=Q(null);function je(e,t){switch(W(le,t),W(me,e),W(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bg(t),e=xg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(te),W(te,e)}function ut(){P(te),P(me),P(le)}function ja(e){e.memoizedState!==null&&W(We,e);var t=te.current,n=xg(t,e.type);t!==n&&(W(me,e),W(te,n))}function jn(e){me.current===e&&(P(te),P(me)),We.current===e&&(P(We),Ki._currentValue=re)}var Gt=Object.prototype.hasOwnProperty,co=a.unstable_scheduleCallback,uo=a.unstable_cancelCallback,x1=a.unstable_shouldYield,y1=a.unstable_requestPaint,mn=a.unstable_now,v1=a.unstable_getCurrentPriorityLevel,Pd=a.unstable_ImmediatePriority,Wd=a.unstable_UserBlockingPriority,dl=a.unstable_NormalPriority,S1=a.unstable_LowPriority,Id=a.unstable_IdlePriority,j1=a.log,w1=a.unstable_setDisableYieldValue,Jr=null,Ct=null;function qn(e){if(typeof j1=="function"&&w1(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Jr,e)}catch{}}var At=Math.clz32?Math.clz32:z1,E1=Math.log,_1=Math.LN2;function z1(e){return e>>>=0,e===0?32:31-(E1(e)/_1|0)|0}var fl=256,hl=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ml(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var l=0,o=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var x=r&134217727;return x!==0?(r=x&~o,r!==0?l=wa(r):(g&=x,g!==0?l=wa(g):n||(n=x&~e,n!==0&&(l=wa(n))))):(x=r&~o,x!==0?l=wa(x):g!==0?l=wa(g):n||(n=r&~e,n!==0&&(l=wa(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function ei(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function C1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jd(){var e=fl;return fl<<=1,(fl&4194048)===0&&(fl=256),e}function ef(){var e=hl;return hl<<=1,(hl&62914560)===0&&(hl=4194304),e}function fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ti(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function A1(e,t,n,r,l,o){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,D=e.hiddenUpdates;for(n=g&~n;0<n;){var V=31-At(n),K=1<<V;x[V]=0,E[V]=-1;var B=D[V];if(B!==null)for(D[V]=null,V=0;V<B.length;V++){var $=B[V];$!==null&&($.lane&=-536870913)}n&=~K}r!==0&&tf(e,r,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(g&~t))}function tf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-At(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function nf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function af(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Ng(e.type))}function k1(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Kn=Math.random().toString(36).slice(2),dt="__reactFiber$"+Kn,bt="__reactProps$"+Kn,Fa="__reactContainer$"+Kn,go="__reactEvents$"+Kn,T1="__reactListeners$"+Kn,R1="__reactHandles$"+Kn,rf="__reactResources$"+Kn,ni="__reactMarker$"+Kn;function po(e){delete e[dt],delete e[bt],delete e[go],delete e[T1],delete e[R1]}function Pa(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fa]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jg(e);e!==null;){if(n=e[dt])return n;e=jg(e)}return t}e=n,n=e.parentNode}return null}function Wa(e){if(e=e[dt]||e[Fa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ai(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ia(e){var t=e[rf];return t||(t=e[rf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[ni]=!0}var lf=new Set,sf={};function Ea(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(sf[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var M1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),of={},cf={};function D1(e){return Gt.call(cf,e)?!0:Gt.call(of,e)?!1:M1.test(e)?cf[e]=!0:(of[e]=!0,!1)}function gl(e,t,n){if(D1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function pl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var bo,uf;function er(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||"",uf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bo+e+uf}var xo=!1;function yo(e,t){if(!e||xo)return"";xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch($){var B=$}Reflect.construct(e,[],K)}else{try{K.call()}catch($){B=$}e.call(K.prototype)}}else{try{throw Error()}catch($){B=$}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch($){if($&&B&&typeof $.stack=="string")return[$.stack,B.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),g=o[0],x=o[1];if(g&&x){var E=g.split(`
`),D=x.split(`
`);for(l=r=0;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(r===E.length||l===D.length)for(r=E.length-1,l=D.length-1;1<=r&&0<=l&&E[r]!==D[l];)l--;for(;1<=r&&0<=l;r--,l--)if(E[r]!==D[l]){if(r!==1||l!==1)do if(r--,l--,0>l||E[r]!==D[l]){var V=`
`+E[r].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=r&&0<=l);break}}}finally{xo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?er(n):""}function B1(e){switch(e.tag){case 26:case 27:case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 15:return yo(e.type,!1);case 11:return yo(e.type.render,!1);case 1:return yo(e.type,!0);case 31:return er("Activity");default:return""}}function df(e){try{var t="";do t+=B1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O1(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){r=""+g,o.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bl(e){e._valueTracker||(e._valueTracker=O1(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $1=/[\n"\\]/g;function Yt(e){return e.replace($1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vo(e,t,n,r,l,o,g,x){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?So(e,g,Vt(t)):n!=null?So(e,g,Vt(n)):r!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Vt(x):e.removeAttribute("name")}function mf(e,t,n,r,l,o,g,x){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=x?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g)}function So(e,t,n){t==="number"&&xl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function tr(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gf(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function pf(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(c(92));if(Ae(r)){if(1<r.length)throw Error(c(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var N1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bf(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||N1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in t)r=t[l],t.hasOwnProperty(l)&&n[l]!==r&&bf(e,l,r)}else for(var o in t)t.hasOwnProperty(o)&&bf(e,o,t[o])}function jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var L1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),U1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(e){return U1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wo=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ar=null,rr=null;function yf(e){var t=Wa(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=r[bt]||null;if(!l)throw Error(c(90));vo(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&hf(r)}break e;case"textarea":gf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}}}var _o=!1;function vf(e,t,n){if(_o)return e(t,n);_o=!0;try{var r=e(t);return r}finally{if(_o=!1,(ar!==null||rr!==null)&&(rs(),ar&&(t=ar,e=rr,rr=ar=null,yf(t),e)))for(t=0;t<e.length;t++)yf(e[t])}}function ri(e,t){var n=e.stateNode;if(n===null)return null;var r=n[bt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=!1;if(En)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){zo=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{zo=!1}var Qn=null,Co=null,vl=null;function Sf(){if(vl)return vl;var e,t=Co,n=t.length,r,l="value"in Qn?Qn.value:Qn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var g=n-e;for(r=1;r<=g&&t[n-r]===l[o-r];r++);return vl=l.slice(e,1<r?1-r:void 0)}function Sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function jf(){return!1}function xt(e){function t(n,r,l,o,g){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=g,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(o):o[x]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jl:jf,this.isPropagationStopped=jf,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),t}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=xt(_a),li=p({},_a,{view:0,detail:0}),H1=xt(li),Ao,ko,si,El=p({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(Ao=e.screenX-si.screenX,ko=e.screenY-si.screenY):ko=Ao=0,si=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),wf=xt(El),G1=p({},El,{dataTransfer:0}),V1=xt(G1),Y1=p({},li,{relatedTarget:0}),To=xt(Y1),q1=p({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),K1=xt(q1),Q1=p({},_a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z1=xt(Q1),X1=p({},_a,{data:0}),Ef=xt(X1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W1[e])?!!t[e]:!1}function Ro(){return I1}var J1=p({},li,{key:function(e){if(e.key){var t=F1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=xt(J1),tx=p({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=xt(tx),nx=p({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),ax=xt(nx),rx=p({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=xt(rx),lx=p({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=xt(lx),ox=p({},_a,{newState:0,oldState:0}),cx=xt(ox),ux=[9,13,27,32],Mo=En&&"CompositionEvent"in window,oi=null;En&&"documentMode"in document&&(oi=document.documentMode);var dx=En&&"TextEvent"in window&&!oi,zf=En&&(!Mo||oi&&8<oi&&11>=oi),Cf=" ",Af=!1;function kf(e,t){switch(e){case"keyup":return ux.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function fx(e,t){switch(e){case"compositionend":return Tf(t);case"keypress":return t.which!==32?null:(Af=!0,Cf);case"textInput":return e=t.data,e===Cf&&Af?null:e;default:return null}}function hx(e,t){if(ir)return e==="compositionend"||!Mo&&kf(e,t)?(e=Sf(),vl=Co=Qn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zf&&t.locale!=="ko"?null:t.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mx[e.type]:t==="textarea"}function Mf(e,t,n,r){ar?rr?rr.push(r):rr=[r]:ar=r,t=us(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,ui=null;function gx(e){fg(e,0)}function _l(e){var t=ai(e);if(hf(t))return e}function Df(e,t){if(e==="change")return t}var Bf=!1;if(En){var Do;if(En){var Bo="oninput"in document;if(!Bo){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Bo=typeof Of.oninput=="function"}Do=Bo}else Do=!1;Bf=Do&&(!document.documentMode||9<document.documentMode)}function $f(){ci&&(ci.detachEvent("onpropertychange",Nf),ui=ci=null)}function Nf(e){if(e.propertyName==="value"&&_l(ui)){var t=[];Mf(t,ui,e,Eo(e)),vf(gx,t)}}function px(e,t,n){e==="focusin"?($f(),ci=t,ui=n,ci.attachEvent("onpropertychange",Nf)):e==="focusout"&&$f()}function bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(ui)}function xx(e,t){if(e==="click")return _l(t)}function yx(e,t){if(e==="input"||e==="change")return _l(t)}function vx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:vx;function di(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gt.call(t,l)||!kt(e[l],t[l]))return!1}return!0}function Lf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uf(e,t){var n=Lf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lf(n)}}function Hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xl(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sx=En&&"documentMode"in document&&11>=document.documentMode,lr=null,$o=null,fi=null,No=!1;function Vf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;No||lr==null||lr!==xl(r)||(r=lr,"selectionStart"in r&&Oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&di(fi,r)||(fi=r,r=us($o,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Lo={},Yf={};En&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Ca(e){if(Lo[e])return Lo[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return Lo[e]=t[n];return e}var qf=Ca("animationend"),Kf=Ca("animationiteration"),Qf=Ca("animationstart"),jx=Ca("transitionrun"),wx=Ca("transitionstart"),Ex=Ca("transitioncancel"),Zf=Ca("transitionend"),Xf=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function sn(e,t){Xf.set(e,t),Ea(t,[e])}var Ff=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=Ff.get(e);return n!==void 0?n:(t={value:e,source:t,stack:df(t)},Ff.set(e,t),t)}return{value:e,source:t,stack:df(t)}}var Kt=[],or=0,Ho=0;function zl(){for(var e=or,t=Ho=or=0;t<e;){var n=Kt[t];Kt[t++]=null;var r=Kt[t];Kt[t++]=null;var l=Kt[t];Kt[t++]=null;var o=Kt[t];if(Kt[t++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}o!==0&&Pf(n,l,o)}}function Cl(e,t,n,r){Kt[or++]=e,Kt[or++]=t,Kt[or++]=n,Kt[or++]=r,Ho|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Go(e,t,n,r){return Cl(e,t,n,r),Al(e)}function cr(e,t){return Cl(e,null,null,t),Al(e)}function Pf(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,r=o.alternate,r!==null&&(r.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-At(n),e=o.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=n|536870912),o):null}function Al(e){if(50<Ni)throw Ni=0,Zc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ur={};function _x(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new _x(e,t,n,r)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kl(e,t,n,r,l,o){var g=0;if(r=e,typeof e=="function")Vo(e)&&(g=1);else if(typeof e=="string")g=Cy(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=Tt(31,n,t,l),e.elementType=ae,e.lanes=o,e;case j:return Aa(n.children,l,o,t);case O:g=8,l|=24;break;case L:return e=Tt(12,n,t,l|2),e.elementType=L,e.lanes=o,e;case U:return e=Tt(13,n,t,l),e.elementType=U,e.lanes=o,e;case I:return e=Tt(19,n,t,l),e.elementType=I,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case k:g=10;break e;case X:g=9;break e;case Y:g=11;break e;case N:g=14;break e;case Z:g=16,r=null;break e}g=29,n=Error(c(130,e===null?"null":typeof e,"")),r=null}return t=Tt(g,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Aa(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Yo(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dr=[],fr=0,Tl=null,Rl=0,Qt=[],Zt=0,ka=null,zn=1,Cn="";function Ta(e,t){dr[fr++]=Rl,dr[fr++]=Tl,Tl=e,Rl=t}function If(e,t,n){Qt[Zt++]=zn,Qt[Zt++]=Cn,Qt[Zt++]=ka,ka=e;var r=zn;e=Cn;var l=32-At(r)-1;r&=~(1<<l),n+=1;var o=32-At(t)+l;if(30<o){var g=l-l%5;o=(r&(1<<g)-1).toString(32),r>>=g,l-=g,zn=1<<32-At(t)+l|n<<l|r,Cn=o+e}else zn=1<<o|n<<l|r,Cn=e}function Ko(e){e.return!==null&&(Ta(e,1),If(e,1,0))}function Qo(e){for(;e===Tl;)Tl=dr[--fr],dr[fr]=null,Rl=dr[--fr],dr[fr]=null;for(;e===ka;)ka=Qt[--Zt],Qt[Zt]=null,Cn=Qt[--Zt],Qt[Zt]=null,zn=Qt[--Zt],Qt[Zt]=null}var mt=null,He=null,Se=!1,Ra=null,gn=!1,Zo=Error(c(519));function Ma(e){var t=Error(c(418,""));throw gi(qt(t,e)),Zo}function Jf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[bt]=r,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Ui.length;n++)pe(Ui[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),mf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),bl(t);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),pf(t,r.value,r.defaultValue,r.children),bl(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||pg(t.textContent,n)?(r.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),r.onScroll!=null&&pe("scroll",t),r.onScrollEnd!=null&&pe("scrollend",t),r.onClick!=null&&(t.onclick=ds),t=!0):t=!1,t||Ma(e)}function eh(e){for(mt=e.return;mt;)switch(mt.tag){case 5:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:mt=mt.return}}function hi(e){if(e!==mt)return!1;if(!Se)return eh(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cu(e.type,e.memoizedProps)),n=!n),n&&He&&Ma(e),eh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,oa(e.type)?(e=hu,hu=null,He=e):He=t):He=mt?cn(e.stateNode.nextSibling):null;return!0}function mi(){He=mt=null,Se=!1}function th(){var e=Ra;return e!==null&&(St===null?St=e:St.push.apply(St,e),Ra=null),e}function gi(e){Ra===null?Ra=[e]:Ra.push(e)}var Xo=Q(null),Da=null,An=null;function Zn(e,t,n){W(Xo,t._currentValue),t._currentValue=n}function kn(e){e._currentValue=Xo.current,P(Xo)}function Fo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Po(e,t,n,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var g=l.child;o=o.firstContext;e:for(;o!==null;){var x=o;o=l;for(var E=0;E<t.length;E++)if(x.context===t[E]){o.lanes|=n,x=o.alternate,x!==null&&(x.lanes|=n),Fo(o.return,n,e),r||(g=null);break e}o=x.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(c(341));g.lanes|=n,o=g.alternate,o!==null&&(o.lanes|=n),Fo(g,n,e),g=null}else g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function pi(e,t,n,r){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(c(387));if(g=g.memoizedProps,g!==null){var x=l.type;kt(l.pendingProps.value,g.value)||(e!==null?e.push(x):e=[x])}}else if(l===We.current){if(g=l.alternate,g===null)throw Error(c(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ki):e=[Ki])}l=l.return}e!==null&&Po(t,e,n,r),t.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Da=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return nh(Da,e)}function Dl(e,t){return Da===null&&Ba(e),nh(e,t)}function nh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},An===null){if(e===null)throw Error(c(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return n}var zx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Cx=a.unstable_scheduleCallback,Ax=a.unstable_NormalPriority,Xe={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new zx,data:new Map,refCount:0}}function bi(e){e.refCount--,e.refCount===0&&Cx(Ax,function(){e.controller.abort()})}var xi=null,Io=0,hr=0,mr=null;function kx(e,t){if(xi===null){var n=xi=[];Io=0,hr=eu(),mr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Io++,t.then(ah,ah),t}function ah(){if(--Io===0&&xi!==null){mr!==null&&(mr.status="fulfilled");var e=xi;xi=null,hr=0,mr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tx(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var rh=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&kx(e,t),rh!==null&&rh(e,t)};var Oa=Q(null);function Jo(){var e=Oa.current;return e!==null?e:De.pooledCache}function Bl(e,t){t===null?W(Oa,Oa.current):W(Oa,t.pool)}function ih(){var e=Jo();return e===null?null:{parent:Xe._currentValue,pool:e}}var yi=Error(c(460)),lh=Error(c(474)),Ol=Error(c(542)),ec={then:function(){}};function sh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $l(){}function oh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($l,$l),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then($l,$l);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw vi=t,yi}}var vi=null;function ch(){if(vi===null)throw Error(c(459));var e=vi;return vi=null,e}function uh(e){if(e===yi||e===Ol)throw Error(c(483))}var Xn=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(_e&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Al(e),Pf(e,null,n),t}return Cl(e,r,t,n),Al(e)}function Si(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nf(e,n)}}function ac(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=g:o=o.next=g,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rc=!1;function ji(){if(rc){var e=mr;if(e!==null)throw e}}function wi(e,t,n,r){rc=!1;var l=e.updateQueue;Xn=!1;var o=l.firstBaseUpdate,g=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var E=x,D=E.next;E.next=null,g===null?o=D:g.next=D,g=E;var V=e.alternate;V!==null&&(V=V.updateQueue,x=V.lastBaseUpdate,x!==g&&(x===null?V.firstBaseUpdate=D:x.next=D,V.lastBaseUpdate=E))}if(o!==null){var K=l.baseState;g=0,V=D=E=null,x=o;do{var B=x.lane&-536870913,$=B!==x.lane;if($?(xe&B)===B:(r&B)===B){B!==0&&B===hr&&(rc=!0),V!==null&&(V=V.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var oe=e,ie=x;B=t;var Re=n;switch(ie.tag){case 1:if(oe=ie.payload,typeof oe=="function"){K=oe.call(Re,K,B);break e}K=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ie.payload,B=typeof oe=="function"?oe.call(Re,K,B):oe,B==null)break e;K=p({},K,B);break e;case 2:Xn=!0}}B=x.callback,B!==null&&(e.flags|=64,$&&(e.flags|=8192),$=l.callbacks,$===null?l.callbacks=[B]:$.push(B))}else $={lane:B,tag:x.tag,payload:x.payload,callback:x.callback,next:null},V===null?(D=V=$,E=K):V=V.next=$,g|=B;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;$=x,x=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);V===null&&(E=K),l.baseState=E,l.firstBaseUpdate=D,l.lastBaseUpdate=V,o===null&&(l.shared.lanes=0),ra|=g,e.lanes=g,e.memoizedState=K}}function dh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function fh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)dh(n[e],t)}var gr=Q(null),Nl=Q(0);function hh(e,t){e=$n,W(Nl,e),W(gr,t),$n=e|t.baseLanes}function ic(){W(Nl,$n),W(gr,gr.current)}function lc(){$n=Nl.current,P(gr),P(Nl)}var Wn=0,fe=null,ke=null,Ke=null,Ll=!1,pr=!1,$a=!1,Ul=0,Ei=0,br=null,Rx=0;function Ye(){throw Error(c(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function oc(e,t,n,r,l,o){return Wn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Ph:Wh,$a=!1,o=n(r,l),$a=!1,pr&&(o=gh(t,n,r,l)),mh(e),o}function mh(e){H.H=Kl;var t=ke!==null&&ke.next!==null;if(Wn=0,Ke=ke=fe=null,Ll=!1,Ei=0,br=null,t)throw Error(c(300));e===null||Je||(e=e.dependencies,e!==null&&Ml(e)&&(Je=!0))}function gh(e,t,n,r){fe=e;var l=0;do{if(pr&&(br=null),Ei=0,pr=!1,25<=l)throw Error(c(301));if(l+=1,Ke=ke=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=Lx,o=t(n,r)}while(pr);return o}function Mx(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?_i(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(fe.flags|=1024),t}function cc(){var e=Ul!==0;return Ul=0,e}function uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dc(e){if(Ll){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ll=!1}Wn=0,Ke=ke=fe=null,pr=!1,Ei=Ul=0,br=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?fe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ke===null?fe.memoizedState:Ke.next;if(t!==null)Ke=t,ke=e;else{if(e===null)throw fe.alternate===null?Error(c(467)):Error(c(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ke===null?fe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _i(e){var t=Ei;return Ei+=1,br===null&&(br=[]),e=oh(br,e,t),t=fe,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Ph:Wh),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _i(e);if(e.$$typeof===k)return ft(e)}throw Error(c(438,String(e)))}function hc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fc(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Ce;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Qe();return mc(t,ke,e)}function mc(e,t,n){var r=e.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=n;var l=e.baseQueue,o=r.pending;if(o!==null){if(l!==null){var g=l.next;l.next=o.next,o.next=g}t.baseQueue=l=o,r.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var x=g=null,E=null,D=t,V=!1;do{var K=D.lane&-536870913;if(K!==D.lane?(xe&K)===K:(Wn&K)===K){var B=D.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),K===hr&&(V=!0);else if((Wn&B)===B){D=D.next,B===hr&&(V=!0);continue}else K={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},E===null?(x=E=K,g=o):E=E.next=K,fe.lanes|=B,ra|=B;K=D.action,$a&&n(o,K),o=D.hasEagerState?D.eagerState:n(o,K)}else B={lane:K,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},E===null?(x=E=B,g=o):E=E.next=B,fe.lanes|=K,ra|=K;D=D.next}while(D!==null&&D!==t);if(E===null?g=o:E.next=x,!kt(o,e.memoizedState)&&(Je=!0,V&&(n=mr,n!==null)))throw n;e.memoizedState=o,e.baseState=g,e.baseQueue=E,r.lastRenderedState=o}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gc(e){var t=Qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var g=l=l.next;do o=e(o,g.action),g=g.next;while(g!==l);kt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ph(e,t,n){var r=fe,l=Qe(),o=Se;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var g=!kt((ke||l).memoizedState,n);g&&(l.memoizedState=n,Je=!0),l=l.queue;var x=yh.bind(null,r,l,e);if(zi(2048,8,x,[e]),l.getSnapshot!==t||g||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,xr(9,Vl(),xh.bind(null,r,l,n,t),null),De===null)throw Error(c(349));o||(Wn&124)!==0||bh(r,t,n)}return n}function bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=fc(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xh(e,t,n,r){t.value=n,t.getSnapshot=r,vh(t)&&Sh(e)}function yh(e,t,n){return n(function(){vh(t)&&Sh(e)})}function vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Sh(e){var t=cr(e,2);t!==null&&Ot(t,e,2)}function pc(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),$a){qn(!0);try{n()}finally{qn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function jh(e,t,n,r){return e.baseState=n,mc(e,ke,typeof r=="function"?r:Tn)}function Dx(e,t,n,r,l){if(ql(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){o.listeners.push(g)}};H.T!==null?n(!0):o.isTransition=!1,r(o),n=t.pending,n===null?(o.next=t.pending=o,wh(t,o)):(o.next=n.next,t.pending=n.next=o)}}function wh(e,t){var n=t.action,r=t.payload,l=e.state;if(t.isTransition){var o=H.T,g={};H.T=g;try{var x=n(l,r),E=H.S;E!==null&&E(g,x),Eh(e,t,x)}catch(D){bc(e,t,D)}finally{H.T=o}}else try{o=n(l,r),Eh(e,t,o)}catch(D){bc(e,t,D)}}function Eh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){_h(e,t,r)},function(r){return bc(e,t,r)}):_h(e,t,n)}function _h(e,t,n){t.status="fulfilled",t.value=n,zh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wh(e,n)))}function bc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,zh(t),t=t.next;while(t!==r)}e.action=null}function zh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ch(e,t){return t}function Ah(e,t){if(Se){var n=De.formState;if(n!==null){e:{var r=fe;if(Se){if(He){t:{for(var l=He,o=gn;l.nodeType!==8;){if(!o){l=null;break t}if(l=cn(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){He=cn(l.nextSibling),r=l.data==="F!";break e}}Ma(r)}r=!1}r&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ch,lastRenderedState:t},n.queue=r,n=Zh.bind(null,fe,r),r.dispatch=n,r=pc(!1),o=jc.bind(null,fe,!1,r.queue),r=yt(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,n=Dx.bind(null,fe,l,o,n),l.dispatch=n,r.memoizedState=e,[t,n,!1]}function kh(e){var t=Qe();return Th(t,ke,e)}function Th(e,t,n){if(t=mc(e,t,Ch)[0],e=Gl(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=_i(t)}catch(g){throw g===yi?Ol:g}else r=t;t=Qe();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,xr(9,Vl(),Bx.bind(null,l,n),null)),[r,o,e]}function Bx(e,t){e.action=t}function Rh(e){var t=Qe(),n=ke;if(n!==null)return Th(t,n,e);Qe(),t=t.memoizedState,n=Qe();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function xr(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=fe.updateQueue,t===null&&(t=fc(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Vl(){return{destroy:void 0,resource:void 0}}function Mh(){return Qe().memoizedState}function Yl(e,t,n,r){var l=yt();r=r===void 0?null:r,fe.flags|=e,l.memoizedState=xr(1|t,Vl(),n,r)}function zi(e,t,n,r){var l=Qe();r=r===void 0?null:r;var o=l.memoizedState.inst;ke!==null&&r!==null&&sc(r,ke.memoizedState.deps)?l.memoizedState=xr(t,o,n,r):(fe.flags|=e,l.memoizedState=xr(1|t,o,n,r))}function Dh(e,t){Yl(8390656,8,e,t)}function Bh(e,t){zi(2048,8,e,t)}function Oh(e,t){return zi(4,2,e,t)}function $h(e,t){return zi(4,4,e,t)}function Nh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,n){n=n!=null?n.concat([e]):null,zi(4,4,Nh.bind(null,t,e),n)}function xc(){}function Uh(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hh(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&sc(t,r[1]))return r[0];if(r=e(),$a){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[r,t],r}function yc(e,t,n){return n===void 0||(Wn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ym(),fe.lanes|=e,ra|=e,n)}function Gh(e,t,n,r){return kt(n,t)?n:gr.current!==null?(e=yc(e,n,r),kt(e,t)||(Je=!0),e):(Wn&42)===0?(Je=!0,e.memoizedState=n):(e=Ym(),fe.lanes|=e,ra|=e,t)}function Vh(e,t,n,r,l){var o=F.p;F.p=o!==0&&8>o?o:8;var g=H.T,x={};H.T=x,jc(e,!1,t,n);try{var E=l(),D=H.S;if(D!==null&&D(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var V=Tx(E,r);Ci(e,t,V,Bt(e))}else Ci(e,t,r,Bt(e))}catch(K){Ci(e,t,{then:function(){},status:"rejected",reason:K},Bt())}finally{F.p=o,H.T=g}}function Ox(){}function vc(e,t,n,r){if(e.tag!==5)throw Error(c(476));var l=Yh(e).queue;Vh(e,l,t,re,n===null?Ox:function(){return qh(e),n(r)})}function Yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:re},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qh(e){var t=Yh(e).next.queue;Ci(e,t,{},Bt())}function Sc(){return ft(Ki)}function Kh(){return Qe().memoizedState}function Qh(){return Qe().memoizedState}function $x(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Bt();e=Fn(n);var r=Pn(t,e,n);r!==null&&(Ot(r,t,n),Si(r,t,n)),t={cache:Wo()},e.payload=t;return}t=t.return}}function Nx(e,t,n){var r=Bt();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ql(e)?Xh(t,n):(n=Go(e,t,n,r),n!==null&&(Ot(n,e,r),Fh(n,t,r)))}function Zh(e,t,n){var r=Bt();Ci(e,t,n,r)}function Ci(e,t,n,r){var l={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ql(e))Xh(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var g=t.lastRenderedState,x=o(g,n);if(l.hasEagerState=!0,l.eagerState=x,kt(x,g))return Cl(e,t,l,0),De===null&&zl(),!1}catch{}finally{}if(n=Go(e,t,l,r),n!==null)return Ot(n,e,r),Fh(n,t,r),!0}return!1}function jc(e,t,n,r){if(r={lane:2,revertLane:eu(),action:r,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(t)throw Error(c(479))}else t=Go(e,n,r,2),t!==null&&Ot(t,e,2)}function ql(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Xh(e,t){pr=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fh(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nf(e,n)}}var Kl={readContext:ft,use:Hl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},Ph={readContext:ft,use:Hl,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Dh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yl(4194308,4,Nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yl(4194308,4,e,t)},useInsertionEffect:function(e,t){Yl(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var r=e();if($a){qn(!0);try{e()}finally{qn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=yt();if(n!==void 0){var l=n(t);if($a){qn(!0);try{n(t)}finally{qn(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=Nx.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=pc(e);var t=e.queue,n=Zh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xc,useDeferredValue:function(e,t){var n=yt();return yc(n,e,t)},useTransition:function(){var e=pc(!1);return e=Vh.bind(null,fe,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=fe,l=yt();if(Se){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),De===null)throw Error(c(349));(xe&124)!==0||bh(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Dh(yh.bind(null,r,o,e),[e]),r.flags|=2048,xr(9,Vl(),xh.bind(null,r,o,n,t),null),n},useId:function(){var e=yt(),t=De.identifierPrefix;if(Se){var n=Cn,r=zn;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ul++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Rx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Sc,useFormState:Ah,useActionState:Ah,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=jc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:hc,useCacheRefresh:function(){return yt().memoizedState=$x.bind(null,fe)}},Wh={readContext:ft,use:Hl,useCallback:Uh,useContext:ft,useEffect:Bh,useImperativeHandle:Lh,useInsertionEffect:Oh,useLayoutEffect:$h,useMemo:Hh,useReducer:Gl,useRef:Mh,useState:function(){return Gl(Tn)},useDebugValue:xc,useDeferredValue:function(e,t){var n=Qe();return Gh(n,ke.memoizedState,e,t)},useTransition:function(){var e=Gl(Tn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:_i(e),t]},useSyncExternalStore:ph,useId:Kh,useHostTransitionStatus:Sc,useFormState:kh,useActionState:kh,useOptimistic:function(e,t){var n=Qe();return jh(n,ke,e,t)},useMemoCache:hc,useCacheRefresh:Qh},Lx={readContext:ft,use:Hl,useCallback:Uh,useContext:ft,useEffect:Bh,useImperativeHandle:Lh,useInsertionEffect:Oh,useLayoutEffect:$h,useMemo:Hh,useReducer:gc,useRef:Mh,useState:function(){return gc(Tn)},useDebugValue:xc,useDeferredValue:function(e,t){var n=Qe();return ke===null?yc(n,e,t):Gh(n,ke.memoizedState,e,t)},useTransition:function(){var e=gc(Tn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:_i(e),t]},useSyncExternalStore:ph,useId:Kh,useHostTransitionStatus:Sc,useFormState:Rh,useActionState:Rh,useOptimistic:function(e,t){var n=Qe();return ke!==null?jh(n,ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Qh},yr=null,Ai=0;function Ql(e){var t=Ai;return Ai+=1,yr===null&&(yr=[]),oh(yr,e,t)}function ki(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zl(e,t){throw t.$$typeof===S?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ih(e){var t=e._init;return t(e._payload)}function Jh(e){function t(R,A){if(e){var M=R.deletions;M===null?(R.deletions=[A],R.flags|=16):M.push(A)}}function n(R,A){if(!e)return null;for(;A!==null;)t(R,A),A=A.sibling;return null}function r(R){for(var A=new Map;R!==null;)R.key!==null?A.set(R.key,R):A.set(R.index,R),R=R.sibling;return A}function l(R,A){return R=_n(R,A),R.index=0,R.sibling=null,R}function o(R,A,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<A?(R.flags|=67108866,A):M):(R.flags|=67108866,A)):(R.flags|=1048576,A)}function g(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function x(R,A,M,q){return A===null||A.tag!==6?(A=Yo(M,R.mode,q),A.return=R,A):(A=l(A,M),A.return=R,A)}function E(R,A,M,q){var J=M.type;return J===j?V(R,A,M.props.children,q,M.key):A!==null&&(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Z&&Ih(J)===A.type)?(A=l(A,M.props),ki(A,M),A.return=R,A):(A=kl(M.type,M.key,M.props,null,R.mode,q),ki(A,M),A.return=R,A)}function D(R,A,M,q){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=qo(M,R.mode,q),A.return=R,A):(A=l(A,M.children||[]),A.return=R,A)}function V(R,A,M,q,J){return A===null||A.tag!==7?(A=Aa(M,R.mode,q,J),A.return=R,A):(A=l(A,M),A.return=R,A)}function K(R,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Yo(""+A,R.mode,M),A.return=R,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return M=kl(A.type,A.key,A.props,null,R.mode,M),ki(M,A),M.return=R,M;case C:return A=qo(A,R.mode,M),A.return=R,A;case Z:var q=A._init;return A=q(A._payload),K(R,A,M)}if(Ae(A)||Ue(A))return A=Aa(A,R.mode,M,null),A.return=R,A;if(typeof A.then=="function")return K(R,Ql(A),M);if(A.$$typeof===k)return K(R,Dl(R,A),M);Zl(R,A)}return null}function B(R,A,M,q){var J=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return J!==null?null:x(R,A,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return M.key===J?E(R,A,M,q):null;case C:return M.key===J?D(R,A,M,q):null;case Z:return J=M._init,M=J(M._payload),B(R,A,M,q)}if(Ae(M)||Ue(M))return J!==null?null:V(R,A,M,q,null);if(typeof M.then=="function")return B(R,A,Ql(M),q);if(M.$$typeof===k)return B(R,A,Dl(R,M),q);Zl(R,M)}return null}function $(R,A,M,q,J){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return R=R.get(M)||null,x(A,R,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return R=R.get(q.key===null?M:q.key)||null,E(A,R,q,J);case C:return R=R.get(q.key===null?M:q.key)||null,D(A,R,q,J);case Z:var he=q._init;return q=he(q._payload),$(R,A,M,q,J)}if(Ae(q)||Ue(q))return R=R.get(M)||null,V(A,R,q,J,null);if(typeof q.then=="function")return $(R,A,M,Ql(q),J);if(q.$$typeof===k)return $(R,A,M,Dl(A,q),J);Zl(A,q)}return null}function oe(R,A,M,q){for(var J=null,he=null,ne=A,se=A=0,tt=null;ne!==null&&se<M.length;se++){ne.index>se?(tt=ne,ne=null):tt=ne.sibling;var ye=B(R,ne,M[se],q);if(ye===null){ne===null&&(ne=tt);break}e&&ne&&ye.alternate===null&&t(R,ne),A=o(ye,A,se),he===null?J=ye:he.sibling=ye,he=ye,ne=tt}if(se===M.length)return n(R,ne),Se&&Ta(R,se),J;if(ne===null){for(;se<M.length;se++)ne=K(R,M[se],q),ne!==null&&(A=o(ne,A,se),he===null?J=ne:he.sibling=ne,he=ne);return Se&&Ta(R,se),J}for(ne=r(ne);se<M.length;se++)tt=$(ne,R,se,M[se],q),tt!==null&&(e&&tt.alternate!==null&&ne.delete(tt.key===null?se:tt.key),A=o(tt,A,se),he===null?J=tt:he.sibling=tt,he=tt);return e&&ne.forEach(function(ha){return t(R,ha)}),Se&&Ta(R,se),J}function ie(R,A,M,q){if(M==null)throw Error(c(151));for(var J=null,he=null,ne=A,se=A=0,tt=null,ye=M.next();ne!==null&&!ye.done;se++,ye=M.next()){ne.index>se?(tt=ne,ne=null):tt=ne.sibling;var ha=B(R,ne,ye.value,q);if(ha===null){ne===null&&(ne=tt);break}e&&ne&&ha.alternate===null&&t(R,ne),A=o(ha,A,se),he===null?J=ha:he.sibling=ha,he=ha,ne=tt}if(ye.done)return n(R,ne),Se&&Ta(R,se),J;if(ne===null){for(;!ye.done;se++,ye=M.next())ye=K(R,ye.value,q),ye!==null&&(A=o(ye,A,se),he===null?J=ye:he.sibling=ye,he=ye);return Se&&Ta(R,se),J}for(ne=r(ne);!ye.done;se++,ye=M.next())ye=$(ne,R,se,ye.value,q),ye!==null&&(e&&ye.alternate!==null&&ne.delete(ye.key===null?se:ye.key),A=o(ye,A,se),he===null?J=ye:he.sibling=ye,he=ye);return e&&ne.forEach(function(Uy){return t(R,Uy)}),Se&&Ta(R,se),J}function Re(R,A,M,q){if(typeof M=="object"&&M!==null&&M.type===j&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case w:e:{for(var J=M.key;A!==null;){if(A.key===J){if(J=M.type,J===j){if(A.tag===7){n(R,A.sibling),q=l(A,M.props.children),q.return=R,R=q;break e}}else if(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Z&&Ih(J)===A.type){n(R,A.sibling),q=l(A,M.props),ki(q,M),q.return=R,R=q;break e}n(R,A);break}else t(R,A);A=A.sibling}M.type===j?(q=Aa(M.props.children,R.mode,q,M.key),q.return=R,R=q):(q=kl(M.type,M.key,M.props,null,R.mode,q),ki(q,M),q.return=R,R=q)}return g(R);case C:e:{for(J=M.key;A!==null;){if(A.key===J)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){n(R,A.sibling),q=l(A,M.children||[]),q.return=R,R=q;break e}else{n(R,A);break}else t(R,A);A=A.sibling}q=qo(M,R.mode,q),q.return=R,R=q}return g(R);case Z:return J=M._init,M=J(M._payload),Re(R,A,M,q)}if(Ae(M))return oe(R,A,M,q);if(Ue(M)){if(J=Ue(M),typeof J!="function")throw Error(c(150));return M=J.call(M),ie(R,A,M,q)}if(typeof M.then=="function")return Re(R,A,Ql(M),q);if(M.$$typeof===k)return Re(R,A,Dl(R,M),q);Zl(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(n(R,A.sibling),q=l(A,M),q.return=R,R=q):(n(R,A),q=Yo(M,R.mode,q),q.return=R,R=q),g(R)):n(R,A)}return function(R,A,M,q){try{Ai=0;var J=Re(R,A,M,q);return yr=null,J}catch(ne){if(ne===yi||ne===Ol)throw ne;var he=Tt(29,ne,null,R.mode);return he.lanes=q,he.return=R,he}finally{}}}var vr=Jh(!0),em=Jh(!1),Xt=Q(null),pn=null;function In(e){var t=e.alternate;W(Fe,Fe.current&1),W(Xt,e),pn===null&&(t===null||gr.current!==null||t.memoizedState!==null)&&(pn=e)}function tm(e){if(e.tag===22){if(W(Fe,Fe.current),W(Xt,e),pn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(pn=e)}}else Jn()}function Jn(){W(Fe,Fe.current),W(Xt,Xt.current)}function Rn(e){P(Xt),pn===e&&(pn=null),P(Fe)}var Fe=Q(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||fu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Bt(),l=Fn(r);l.payload=t,n!=null&&(l.callback=n),t=Pn(e,l,r),t!==null&&(Ot(t,e,r),Si(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Bt(),l=Fn(r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Pn(e,l,r),t!==null&&(Ot(t,e,r),Si(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bt(),r=Fn(n);r.tag=2,t!=null&&(r.callback=t),t=Pn(e,r,n),t!==null&&(Ot(t,e,n),Si(t,e,n))}};function nm(e,t,n,r,l,o,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,g):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(l,o):!0}function am(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=p({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function rm(e){Fl(e)}function im(e){console.error(e)}function lm(e){Fl(e)}function Pl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function sm(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function _c(e,t,n){return n=Fn(n),n.tag=3,n.payload={element:null},n.callback=function(){Pl(e,t)},n}function om(e){return e=Fn(e),e.tag=3,e}function cm(e,t,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=r.value;e.payload=function(){return l(o)},e.callback=function(){sm(t,n,r)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){sm(t,n,r),typeof l!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var x=r.stack;this.componentDidCatch(r.value,{componentStack:x!==null?x:""})})}function Ux(e,t,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&pi(t,n,l,!0),n=Xt.current,n!==null){switch(n.tag){case 13:return pn===null?Fc():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===ec?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wc(e,r,l)),!1;case 22:return n.flags|=65536,r===ec?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wc(e,r,l)),!1}throw Error(c(435,n.tag))}return Wc(e,r,l),Fc(),!1}if(Se)return t=Xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==Zo&&(e=Error(c(422),{cause:r}),gi(qt(e,n)))):(r!==Zo&&(t=Error(c(423),{cause:r}),gi(qt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=qt(r,n),l=_c(e.stateNode,r,l),ac(e,l),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:r});if(o=qt(o,n),$i===null?$i=[o]:$i.push(o),Ge!==4&&(Ge=2),t===null)return!0;r=qt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=_c(n.stateNode,r,e),ac(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ia===null||!ia.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=om(l),cm(l,e,n,r),ac(n,l),!1}n=n.return}while(n!==null);return!1}var um=Error(c(461)),Je=!1;function lt(e,t,n,r){t.child=e===null?em(t,null,n,r):vr(t,e.child,n,r)}function dm(e,t,n,r,l){n=n.render;var o=t.ref;if("ref"in r){var g={};for(var x in r)x!=="ref"&&(g[x]=r[x])}else g=r;return Ba(t),r=oc(e,t,n,g,o,l),x=cc(),e!==null&&!Je?(uc(e,t,l),Mn(e,t,l)):(Se&&x&&Ko(t),t.flags|=1,lt(e,t,r,l),t.child)}function fm(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Vo(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,hm(e,t,o,r,l)):(e=kl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Dc(e,l)){var g=o.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(g,r)&&e.ref===t.ref)return Mn(e,t,l)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function hm(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(di(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,Dc(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Mn(e,t,l)}return zc(e,t,n,r,l)}function mm(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=o!==null?o.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return gm(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(t,o!==null?o.cachePool:null),o!==null?hh(t,o):ic(),tm(t);else return t.lanes=t.childLanes=536870912,gm(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Bl(t,o.cachePool),hh(t,o),Jn(),t.memoizedState=null):(e!==null&&Bl(t,null),ic(),Jn());return lt(e,t,l,n),t.child}function gm(e,t,n,r){var l=Jo();return l=l===null?null:{parent:Xe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Bl(t,null),ic(),tm(t),e!==null&&pi(e,t,r,!0),null}function Wl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zc(e,t,n,r,l){return Ba(t),n=oc(e,t,n,r,void 0,l),r=cc(),e!==null&&!Je?(uc(e,t,l),Mn(e,t,l)):(Se&&r&&Ko(t),t.flags|=1,lt(e,t,n,l),t.child)}function pm(e,t,n,r,l,o){return Ba(t),t.updateQueue=null,n=gh(t,r,n,l),mh(e),r=cc(),e!==null&&!Je?(uc(e,t,o),Mn(e,t,o)):(Se&&r&&Ko(t),t.flags|=1,lt(e,t,n,o),t.child)}function bm(e,t,n,r,l){if(Ba(t),t.stateNode===null){var o=ur,g=n.contextType;typeof g=="object"&&g!==null&&(o=ft(g)),o=new n(r,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ec,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=r,o.state=t.memoizedState,o.refs={},tc(t),g=n.contextType,o.context=typeof g=="object"&&g!==null?ft(g):ur,o.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(wc(t,n,g,r),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(g=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),g!==o.state&&Ec.enqueueReplaceState(o,o.state,null),wi(t,r,o,l),ji(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){o=t.stateNode;var x=t.memoizedProps,E=Na(n,x);o.props=E;var D=o.context,V=n.contextType;g=ur,typeof V=="object"&&V!==null&&(g=ft(V));var K=n.getDerivedStateFromProps;V=typeof K=="function"||typeof o.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,V||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(x||D!==g)&&am(t,o,r,g),Xn=!1;var B=t.memoizedState;o.state=B,wi(t,r,o,l),ji(),D=t.memoizedState,x||B!==D||Xn?(typeof K=="function"&&(wc(t,n,K,r),D=t.memoizedState),(E=Xn||nm(t,n,E,r,B,D,g))?(V||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=D),o.props=r,o.state=D,o.context=g,r=E):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,nc(e,t),g=t.memoizedProps,V=Na(n,g),o.props=V,K=t.pendingProps,B=o.context,D=n.contextType,E=ur,typeof D=="object"&&D!==null&&(E=ft(D)),x=n.getDerivedStateFromProps,(D=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g!==K||B!==E)&&am(t,o,r,E),Xn=!1,B=t.memoizedState,o.state=B,wi(t,r,o,l),ji();var $=t.memoizedState;g!==K||B!==$||Xn||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof x=="function"&&(wc(t,n,x,r),$=t.memoizedState),(V=Xn||nm(t,n,V,r,B,$,E)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(D||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,$,E),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,$,E)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),o.props=r,o.state=$,o.context=E,r=V):(typeof o.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Wl(e,t),r=(t.flags&128)!==0,o||r?(o=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&r?(t.child=vr(t,e.child,null,l),t.child=vr(t,null,n,l)):lt(e,t,n,l),t.memoizedState=o.state,e=t.child):e=Mn(e,t,l),e}function xm(e,t,n,r){return mi(),t.flags|=256,lt(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ac(e){return{baseLanes:e,cachePool:ih()}}function kc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ft),e}function ym(e,t,n){var r=t.pendingProps,l=!1,o=(t.flags&128)!==0,g;if((g=o)||(g=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),g&&(l=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?In(t):Jn(),Se){var x=He,E;if(E=x){e:{for(E=x,x=gn;E.nodeType!==8;){if(!x){x=null;break e}if(E=cn(E.nextSibling),E===null){x=null;break e}}x=E}x!==null?(t.memoizedState={dehydrated:x,treeContext:ka!==null?{id:zn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},E=Tt(18,null,null,0),E.stateNode=x,E.return=t,t.child=E,mt=t,He=null,E=!0):E=!1}E||Ma(t)}if(x=t.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return fu(x)?t.lanes=32:t.lanes=536870912,null;Rn(t)}return x=r.children,r=r.fallback,l?(Jn(),l=t.mode,x=Il({mode:"hidden",children:x},l),r=Aa(r,l,n,null),x.return=t,r.return=t,x.sibling=r,t.child=x,l=t.child,l.memoizedState=Ac(n),l.childLanes=kc(e,g,n),t.memoizedState=Cc,r):(In(t),Tc(t,x))}if(E=e.memoizedState,E!==null&&(x=E.dehydrated,x!==null)){if(o)t.flags&256?(In(t),t.flags&=-257,t=Rc(e,t,n)):t.memoizedState!==null?(Jn(),t.child=e.child,t.flags|=128,t=null):(Jn(),l=r.fallback,x=t.mode,r=Il({mode:"visible",children:r.children},x),l=Aa(l,x,n,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,vr(t,e.child,null,n),r=t.child,r.memoizedState=Ac(n),r.childLanes=kc(e,g,n),t.memoizedState=Cc,t=l);else if(In(t),fu(x)){if(g=x.nextSibling&&x.nextSibling.dataset,g)var D=g.dgst;g=D,r=Error(c(419)),r.stack="",r.digest=g,gi({value:r,source:null,stack:null}),t=Rc(e,t,n)}else if(Je||pi(e,t,n,!1),g=(n&e.childLanes)!==0,Je||g){if(g=De,g!==null&&(r=n&-n,r=(r&42)!==0?1:ho(r),r=(r&(g.suspendedLanes|n))!==0?0:r,r!==0&&r!==E.retryLane))throw E.retryLane=r,cr(e,r),Ot(g,e,r),um;x.data==="$?"||Fc(),t=Rc(e,t,n)}else x.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,He=cn(x.nextSibling),mt=t,Se=!0,Ra=null,gn=!1,e!==null&&(Qt[Zt++]=zn,Qt[Zt++]=Cn,Qt[Zt++]=ka,zn=e.id,Cn=e.overflow,ka=t),t=Tc(t,r.children),t.flags|=4096);return t}return l?(Jn(),l=r.fallback,x=t.mode,E=e.child,D=E.sibling,r=_n(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&65011712,D!==null?l=_n(D,l):(l=Aa(l,x,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,x=e.child.memoizedState,x===null?x=Ac(n):(E=x.cachePool,E!==null?(D=Xe._currentValue,E=E.parent!==D?{parent:D,pool:D}:E):E=ih(),x={baseLanes:x.baseLanes|n,cachePool:E}),l.memoizedState=x,l.childLanes=kc(e,g,n),t.memoizedState=Cc,r):(In(t),n=e.child,e=n.sibling,n=_n(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Il({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Il(e,t){return e=Tt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rc(e,t,n){return vr(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fo(e.return,t,n)}function Mc(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Sm(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(lt(e,t,r.children,n),r=Fe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,n,t);else if(e.tag===19)vm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(W(Fe,r),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Mc(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Mc(t,!0,n,null,o);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ra|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(pi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function Hx(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),Zn(t,Xe,e.memoizedState.cache),mi();break;case 27:case 5:ja(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:Zn(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(In(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ym(e,t,n):(In(t),e=Mn(e,t,n),e!==null?e.sibling:null);In(t);break;case 19:var l=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(pi(e,t,n,!1),r=(n&t.childLanes)!==0),l){if(r)return Sm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,mm(e,t,n);case 24:Zn(t,Xe,e.memoizedState.cache)}return Mn(e,t,n)}function jm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Dc(e,n)&&(t.flags&128)===0)return Je=!1,Hx(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,Se&&(t.flags&1048576)!==0&&If(t,Rl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,l=r._init;if(r=l(r._payload),t.type=r,typeof r=="function")Vo(r)?(e=Na(r,e),t.tag=1,t=bm(null,t,r,e,n)):(t.tag=0,t=zc(null,t,r,e,n));else{if(r!=null){if(l=r.$$typeof,l===Y){t.tag=11,t=dm(null,t,r,e,n);break e}else if(l===N){t.tag=14,t=fm(null,t,r,e,n);break e}}throw t=it(r)||r,Error(c(306,t,""))}}return t;case 0:return zc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,l=Na(r,t.pendingProps),bm(e,t,r,l,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(c(387));r=t.pendingProps;var o=t.memoizedState;l=o.element,nc(e,t),wi(t,r,null,n);var g=t.memoizedState;if(r=g.cache,Zn(t,Xe,r),r!==o.cache&&Po(t,[Xe],n,!0),ji(),r=g.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xm(e,t,r,n);break e}else if(r!==l){l=qt(Error(c(424)),t),gi(l),t=xm(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=cn(e.firstChild),mt=t,Se=!0,Ra=null,gn=!0,n=em(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(mi(),r===l){t=Mn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 26:return Wl(e,t),e===null?(n=zg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,r=fs(le.current).createElement(n),r[dt]=t,r[bt]=e,ot(r,n,e),Ie(r),t.stateNode=r):t.memoizedState=zg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ja(t),e===null&&Se&&(r=t.stateNode=wg(t.type,t.pendingProps,le.current),mt=t,gn=!0,l=He,oa(t.type)?(hu=l,He=cn(r.firstChild)):He=l),lt(e,t,t.pendingProps.children,n),Wl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=r=He)&&(r=my(r,t.type,t.pendingProps,gn),r!==null?(t.stateNode=r,mt=t,He=cn(r.firstChild),gn=!1,l=!0):l=!1),l||Ma(t)),ja(t),l=t.type,o=t.pendingProps,g=e!==null?e.memoizedProps:null,r=o.children,cu(l,o)?r=null:g!==null&&cu(l,g)&&(t.flags|=32),t.memoizedState!==null&&(l=oc(e,t,Mx,null,null,n),Ki._currentValue=l),Wl(e,t),lt(e,t,r,n),t.child;case 6:return e===null&&Se&&((e=n=He)&&(n=gy(n,t.pendingProps,gn),n!==null?(t.stateNode=n,mt=t,He=null,e=!0):e=!1),e||Ma(t)),null;case 13:return ym(e,t,n);case 4:return je(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):lt(e,t,r,n),t.child;case 11:return dm(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zn(t,t.type,r.value),lt(e,t,r.children,n),t.child;case 9:return l=t.type._context,r=t.pendingProps.children,Ba(t),l=ft(l),r=r(l),t.flags|=1,lt(e,t,r,n),t.child;case 14:return fm(e,t,t.type,t.pendingProps,n);case 15:return hm(e,t,t.type,t.pendingProps,n);case 19:return Sm(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=Il(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=_n(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return mm(e,t,n);case 24:return Ba(t),r=ft(Xe),e===null?(l=Jo(),l===null&&(l=De,o=Wo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:r,cache:l},tc(t),Zn(t,Xe,l)):((e.lanes&n)!==0&&(nc(e,t),wi(t,null,null,n),ji()),l=e.memoizedState,o=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Zn(t,Xe,r)):(r=o.cache,Zn(t,Xe,r),r!==l.cache&&Po(t,[Xe],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Dn(e){e.flags|=4}function wm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rg(t)){if(t=Xt.current,t!==null&&((xe&4194048)===xe?pn!==null:(xe&62914560)!==xe&&(xe&536870912)===0||t!==pn))throw vi=ec,lh;e.flags|=8192}}function Jl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ef():536870912,e.lanes|=t,Er|=t)}function Ti(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gx(e,t,n){var r=t.pendingProps;switch(Qo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),kn(Xe),ut(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hi(t)?Dn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,th())),Le(t),null;case 26:return n=t.memoizedState,e===null?(Dn(t),n!==null?(Le(t),wm(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Dn(t),Le(t),wm(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==r&&Dn(t),Le(t),t.flags&=-16777217),null;case 27:jn(t),n=le.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dn(t);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=te.current,hi(t)?Jf(t):(e=wg(l,r,n),t.stateNode=e,Dn(t))}return Le(t),null;case 5:if(jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dn(t);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(e=te.current,hi(t))Jf(t);else{switch(l=fs(le.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?l.createElement(n,{is:r.is}):l.createElement(n)}}e[dt]=t,e[bt]=r;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ot(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Dn(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,l=mt,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||pg(e.nodeValue,n)),e||Ma(t)}else e=fs(e).createTextNode(r),e[dt]=t,t.stateNode=e}return Le(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[dt]=t}else mi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),l=!1}else l=th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Rn(t),t):(Rn(t),null)}if(Rn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool);var o=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Jl(t,t.updateQueue),Le(t),null;case 4:return ut(),e===null&&ru(t.stateNode.containerInfo),Le(t),null;case 10:return kn(t.type),Le(t),null;case 19:if(P(Fe),l=t.memoizedState,l===null)return Le(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Ti(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Xl(e),o!==null){for(t.flags|=128,Ti(l,!1),e=o.updateQueue,t.updateQueue=e,Jl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wf(n,e),n=n.sibling;return W(Fe,Fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&mn()>ns&&(t.flags|=128,r=!0,Ti(l,!1),t.lanes=4194304)}else{if(!r)if(e=Xl(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Jl(t,e),Ti(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Se)return Le(t),null}else 2*mn()-l.renderingStartTime>ns&&n!==536870912&&(t.flags|=128,r=!0,Ti(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=mn(),t.sibling=null,e=Fe.current,W(Fe,r?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return Rn(t),lc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Jl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&P(Oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kn(Xe),Le(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Vx(e,t){switch(Qo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(Xe),ut(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jn(t),null;case 13:if(Rn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Fe),null;case 4:return ut(),null;case 10:return kn(t.type),null;case 22:case 23:return Rn(t),lc(),e!==null&&P(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(Xe),null;case 25:return null;default:return null}}function Em(e,t){switch(Qo(t),t.tag){case 3:kn(Xe),ut();break;case 26:case 27:case 5:jn(t);break;case 4:ut();break;case 13:Rn(t);break;case 19:P(Fe);break;case 10:kn(t.type);break;case 22:case 23:Rn(t),lc(),e!==null&&P(Oa);break;case 24:kn(Xe)}}function Ri(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&e)===e){r=void 0;var o=n.create,g=n.inst;r=o(),g.destroy=r}n=n.next}while(n!==l)}}catch(x){Me(t,t.return,x)}}function ea(e,t,n){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var o=l.next;r=o;do{if((r.tag&e)===e){var g=r.inst,x=g.destroy;if(x!==void 0){g.destroy=void 0,l=t;var E=n,D=x;try{D()}catch(V){Me(l,E,V)}}}r=r.next}while(r!==o)}}catch(V){Me(t,t.return,V)}}function _m(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fh(t,n)}catch(r){Me(e,e.return,r)}}}function zm(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Me(e,t,r)}}function Mi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(l){Me(e,t,l)}}function bn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){Me(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Me(e,t,l)}else n.current=null}function Cm(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){Me(e,e.return,l)}}function Bc(e,t,n){try{var r=e.stateNode;cy(r,e.type,n,t),r[bt]=t}catch(l){Me(e,e.return,l)}}function Am(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&oa(e.type)||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(r!==4&&(r===27&&oa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&oa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function km(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,r,n),t[dt]=e,t[bt]=n}catch(o){Me(e,e.return,o)}}var Bn=!1,qe=!1,Nc=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,et=null;function Yx(e,t){if(e=e.containerInfo,su=xs,e=Gf(e),Oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var g=0,x=-1,E=-1,D=0,V=0,K=e,B=null;t:for(;;){for(var $;K!==n||l!==0&&K.nodeType!==3||(x=g+l),K!==o||r!==0&&K.nodeType!==3||(E=g+r),K.nodeType===3&&(g+=K.nodeValue.length),($=K.firstChild)!==null;)B=K,K=$;for(;;){if(K===e)break t;if(B===n&&++D===l&&(x=g),B===o&&++V===r&&(E=g),($=K.nextSibling)!==null)break;K=B,B=K.parentNode}K=$}n=x===-1||E===-1?null:{start:x,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},xs=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var oe=Na(n.type,l,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(oe,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Me(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function Rm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ta(e,n),r&4&&Ri(5,n);break;case 1:if(ta(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Me(n,n.return,g)}else{var l=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Me(n,n.return,g)}}r&64&&_m(n),r&512&&Mi(n,n.return);break;case 3:if(ta(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fh(e,t)}catch(g){Me(n,n.return,g)}}break;case 27:t===null&&r&4&&km(n);case 26:case 5:ta(e,n),t===null&&r&4&&Cm(n),r&512&&Mi(n,n.return);break;case 12:ta(e,n);break;case 13:ta(e,n),r&4&&Bm(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ix.bind(null,n),py(e,n))));break;case 22:if(r=n.memoizedState!==null||Bn,!r){t=t!==null&&t.memoizedState!==null||qe,l=Bn;var o=qe;Bn=r,(qe=t)&&!o?na(e,n,(n.subtreeFlags&8772)!==0):ta(e,n),Bn=l,qe=o}break;case 30:break;default:ta(e,n)}}function Mm(e){var t=e.alternate;t!==null&&(e.alternate=null,Mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,vt=!1;function On(e,t,n){for(n=n.child;n!==null;)Dm(e,t,n),n=n.sibling}function Dm(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Jr,n)}catch{}switch(n.tag){case 26:qe||bn(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||bn(n,t);var r=$e,l=vt;oa(n.type)&&($e=n.stateNode,vt=!1),On(e,t,n),Gi(n.stateNode),$e=r,vt=l;break;case 5:qe||bn(n,t);case 6:if(r=$e,l=vt,$e=null,On(e,t,n),$e=r,vt=l,$e!==null)if(vt)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(n.stateNode)}catch(o){Me(n,t,o)}else try{$e.removeChild(n.stateNode)}catch(o){Me(n,t,o)}break;case 18:$e!==null&&(vt?(e=$e,Sg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fi(e)):Sg($e,n.stateNode));break;case 4:r=$e,l=vt,$e=n.stateNode.containerInfo,vt=!0,On(e,t,n),$e=r,vt=l;break;case 0:case 11:case 14:case 15:qe||ea(2,n,t),qe||ea(4,n,t),On(e,t,n);break;case 1:qe||(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&zm(n,t,r)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:qe=(r=qe)||n.memoizedState!==null,On(e,t,n),qe=r;break;default:On(e,t,n)}}function Bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fi(e)}catch(n){Me(t,t.return,n)}}function qx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tm),t;default:throw Error(c(435,e.tag))}}function Lc(e,t){var n=qx(e);t.forEach(function(r){var l=Jx.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r],o=e,g=t,x=g;e:for(;x!==null;){switch(x.tag){case 27:if(oa(x.type)){$e=x.stateNode,vt=!1;break e}break;case 5:$e=x.stateNode,vt=!1;break e;case 3:case 4:$e=x.stateNode.containerInfo,vt=!0;break e}x=x.return}if($e===null)throw Error(c(160));Dm(o,g,l),$e=null,vt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}var on=null;function Om(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Mt(e),r&4&&(ea(3,e,e.return),Ri(3,e),ea(5,e,e.return));break;case 1:Rt(t,e),Mt(e),r&512&&(qe||n===null||bn(n,n.return)),r&64&&Bn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var l=on;if(Rt(t,e),Mt(e),r&512&&(qe||n===null||bn(n,n.return)),r&4){var o=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(r){case"title":o=l.getElementsByTagName("title")[0],(!o||o[ni]||o[dt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(r),l.head.insertBefore(o,l.querySelector("head > title"))),ot(o,r,n),o[dt]=e,Ie(o),r=o;break e;case"link":var g=kg("link","href",l).get(r+(n.href||""));if(g){for(var x=0;x<g.length;x++)if(o=g[x],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(x,1);break t}}o=l.createElement(r),ot(o,r,n),l.head.appendChild(o);break;case"meta":if(g=kg("meta","content",l).get(r+(n.content||""))){for(x=0;x<g.length;x++)if(o=g[x],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(x,1);break t}}o=l.createElement(r),ot(o,r,n),l.head.appendChild(o);break;default:throw Error(c(468,r))}o[dt]=e,Ie(o),r=o}e.stateNode=r}else Tg(l,e.type,e.stateNode);else e.stateNode=Ag(l,r,e.memoizedProps);else o!==r?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Tg(l,e.type,e.stateNode):Ag(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Bc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Mt(e),r&512&&(qe||n===null||bn(n,n.return)),n!==null&&r&4&&Bc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Mt(e),r&512&&(qe||n===null||bn(n,n.return)),e.flags&32){l=e.stateNode;try{nr(l,"")}catch($){Me(e,e.return,$)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,Bc(e,l,n!==null?n.memoizedProps:l)),r&1024&&(Nc=!0);break;case 6:if(Rt(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(c(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch($){Me(e,e.return,$)}}break;case 3:if(gs=null,l=on,on=hs(t.containerInfo),Rt(t,e),on=l,Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch($){Me(e,e.return,$)}Nc&&(Nc=!1,$m(e));break;case 4:r=on,on=hs(e.stateNode.containerInfo),Rt(t,e),Mt(e),on=r;break;case 12:Rt(t,e),Mt(e);break;case 13:Rt(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qc=mn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lc(e,r)));break;case 22:l=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,D=Bn,V=qe;if(Bn=D||l,qe=V||E,Rt(t,e),qe=V,Bn=D,Mt(e),r&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||E||Bn||qe||La(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(o=E.stateNode,l)g=o.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{x=E.stateNode;var K=E.memoizedProps.style,B=K!=null&&K.hasOwnProperty("display")?K.display:null;x.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch($){Me(E,E.return,$)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=l?"":E.memoizedProps}catch($){Me(E,E.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Lc(e,n))));break;case 19:Rt(t,e),Mt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lc(e,r)));break;case 30:break;case 21:break;default:Rt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Am(r)){n=r;break}r=r.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,o=Oc(e);es(e,o,l);break;case 5:var g=n.stateNode;n.flags&32&&(nr(g,""),n.flags&=-33);var x=Oc(e);es(e,x,g);break;case 3:case 4:var E=n.stateNode.containerInfo,D=Oc(e);$c(e,D,E);break;default:throw Error(c(161))}}catch(V){Me(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $m(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$m(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rm(e,t.alternate,t),t=t.sibling}function La(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ea(4,t,t.return),La(t);break;case 1:bn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&zm(t,t.return,n),La(t);break;case 27:Gi(t.stateNode);case 26:case 5:bn(t,t.return),La(t);break;case 22:t.memoizedState===null&&La(t);break;case 30:La(t);break;default:La(t)}e=e.sibling}}function na(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,l=e,o=t,g=o.flags;switch(o.tag){case 0:case 11:case 15:na(l,o,n),Ri(4,o);break;case 1:if(na(l,o,n),r=o,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Me(r,r.return,D)}if(r=o,l=r.updateQueue,l!==null){var x=r.stateNode;try{var E=l.shared.hiddenCallbacks;if(E!==null)for(l.shared.hiddenCallbacks=null,l=0;l<E.length;l++)dh(E[l],x)}catch(D){Me(r,r.return,D)}}n&&g&64&&_m(o),Mi(o,o.return);break;case 27:km(o);case 26:case 5:na(l,o,n),n&&r===null&&g&4&&Cm(o),Mi(o,o.return);break;case 12:na(l,o,n);break;case 13:na(l,o,n),n&&g&4&&Bm(l,o);break;case 22:o.memoizedState===null&&na(l,o,n),Mi(o,o.return);break;case 30:break;default:na(l,o,n)}t=t.sibling}}function Uc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bi(n))}function Hc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bi(e))}function xn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nm(e,t,n,r),t=t.sibling}function Nm(e,t,n,r){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,n,r),l&2048&&Ri(9,t);break;case 1:xn(e,t,n,r);break;case 3:xn(e,t,n,r),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bi(e)));break;case 12:if(l&2048){xn(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,g=o.id,x=o.onPostCommit;typeof x=="function"&&x(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Me(t,t.return,E)}}else xn(e,t,n,r);break;case 13:xn(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,g=t.alternate,t.memoizedState!==null?o._visibility&2?xn(e,t,n,r):Di(e,t):o._visibility&2?xn(e,t,n,r):(o._visibility|=2,Sr(e,t,n,r,(t.subtreeFlags&10256)!==0)),l&2048&&Uc(g,t);break;case 24:xn(e,t,n,r),l&2048&&Hc(t.alternate,t);break;default:xn(e,t,n,r)}}function Sr(e,t,n,r,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,g=t,x=n,E=r,D=g.flags;switch(g.tag){case 0:case 11:case 15:Sr(o,g,x,E,l),Ri(8,g);break;case 23:break;case 22:var V=g.stateNode;g.memoizedState!==null?V._visibility&2?Sr(o,g,x,E,l):Di(o,g):(V._visibility|=2,Sr(o,g,x,E,l)),l&&D&2048&&Uc(g.alternate,g);break;case 24:Sr(o,g,x,E,l),l&&D&2048&&Hc(g.alternate,g);break;default:Sr(o,g,x,E,l)}t=t.sibling}}function Di(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,l=r.flags;switch(r.tag){case 22:Di(n,r),l&2048&&Uc(r.alternate,r);break;case 24:Di(n,r),l&2048&&Hc(r.alternate,r);break;default:Di(n,r)}t=t.sibling}}var Bi=8192;function jr(e){if(e.subtreeFlags&Bi)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 26:jr(e),e.flags&Bi&&e.memoizedState!==null&&ky(on,e.memoizedState,e.memoizedProps);break;case 5:jr(e);break;case 3:case 4:var t=on;on=hs(e.stateNode.containerInfo),jr(e),on=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Bi,Bi=16777216,jr(e),Bi=t):jr(e));break;default:jr(e)}}function Um(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];et=r,Gm(r,e)}Um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 0:case 11:case 15:Oi(e),e.flags&2048&&ea(9,e,e.return);break;case 3:Oi(e);break;case 12:Oi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ts(e)):Oi(e);break;default:Oi(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];et=r,Gm(r,e)}Um(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),ts(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ts(t));break;default:ts(t)}e=e.sibling}}function Gm(e,t){for(;et!==null;){var n=et;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:bi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,et=r;else e:for(n=e;et!==null;){r=et;var l=r.sibling,o=r.return;if(Mm(r),r===n){et=null;break e}if(l!==null){l.return=o,et=l;break e}et=o}}}var Kx={getCacheForType:function(e){var t=ft(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Qx=typeof WeakMap=="function"?WeakMap:Map,_e=0,De=null,ge=null,xe=0,ze=0,Dt=null,aa=!1,wr=!1,Gc=!1,$n=0,Ge=0,ra=0,Ua=0,Vc=0,Ft=0,Er=0,$i=null,St=null,Yc=!1,qc=0,ns=1/0,as=null,ia=null,st=0,la=null,_r=null,zr=0,Kc=0,Qc=null,Vm=null,Ni=0,Zc=null;function Bt(){if((_e&2)!==0&&xe!==0)return xe&-xe;if(H.T!==null){var e=hr;return e!==0?e:eu()}return af()}function Ym(){Ft===0&&(Ft=(xe&536870912)===0||Se?Jd():536870912);var e=Xt.current;return e!==null&&(e.flags|=32),Ft}function Ot(e,t,n){(e===De&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Cr(e,0),sa(e,xe,Ft,!1)),ti(e,n),((_e&2)===0||e!==De)&&(e===De&&((_e&2)===0&&(Ua|=n),Ge===4&&sa(e,xe,Ft,!1)),yn(e))}function qm(e,t,n){if((_e&6)!==0)throw Error(c(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ei(e,t),l=r?Fx(e,t):Pc(e,t,!0),o=r;do{if(l===0){wr&&!r&&sa(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Zx(n)){l=Pc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var x=e;l=$i;var E=x.current.memoizedState.isDehydrated;if(E&&(Cr(x,g).flags|=256),g=Pc(x,g,!1),g!==2){if(Gc&&!E){x.errorRecoveryDisabledLanes|=o,Ua|=o,l=4;break e}o=St,St=l,o!==null&&(St===null?St=o:St.push.apply(St,o))}l=g}if(o=!1,l!==2)continue}}if(l===1){Cr(e,0),sa(e,t,0,!0);break}e:{switch(r=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:sa(r,t,Ft,!aa);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=qc+300-mn(),10<l)){if(sa(r,t,Ft,!aa),ml(r,0,!0)!==0)break e;r.timeoutHandle=yg(Km.bind(null,r,n,St,as,Yc,t,Ft,Ua,Er,aa,o,2,-0,0),l);break e}Km(r,n,St,as,Yc,t,Ft,Ua,Er,aa,o,0,-0,0)}}break}while(!0);yn(e)}function Km(e,t,n,r,l,o,g,x,E,D,V,K,B,$){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(qi={stylesheets:null,count:0,unsuspend:Ay},Lm(t),K=Ty(),K!==null)){e.cancelPendingCommit=K(Im.bind(null,e,t,o,n,r,l,g,x,E,V,1,B,$)),sa(e,o,g,!D);return}Im(e,t,o,n,r,l,g,x,E)}function Zx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!kt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sa(e,t,n,r){t&=~Vc,t&=~Ua,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var o=31-At(l),g=1<<o;r[o]=-1,l&=~g}n!==0&&tf(e,n,t)}function rs(){return(_e&6)===0?(Li(0),!1):!0}function Xc(){if(ge!==null){if(ze===0)var e=ge.return;else e=ge,An=Da=null,dc(e),yr=null,Ai=0,e=ge;for(;e!==null;)Em(e.alternate,e),e=e.return;ge=null}}function Cr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,dy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xc(),De=e,ge=n=_n(e.current,null),xe=t,ze=0,Dt=null,aa=!1,wr=ei(e,t),Gc=!1,Er=Ft=Vc=Ua=ra=Ge=0,St=$i=null,Yc=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var l=31-At(r),o=1<<l;t|=e[l],r&=~o}return $n=t,zl(),n}function Qm(e,t){fe=null,H.H=Kl,t===yi||t===Ol?(t=ch(),ze=3):t===lh?(t=ch(),ze=4):ze=t===um?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ge===null&&(Ge=1,Pl(e,qt(t,e.current)))}function Zm(){var e=H.H;return H.H=Kl,e===null?Kl:e}function Xm(){var e=H.A;return H.A=Kx,e}function Fc(){Ge=4,aa||(xe&4194048)!==xe&&Xt.current!==null||(wr=!0),(ra&134217727)===0&&(Ua&134217727)===0||De===null||sa(De,xe,Ft,!1)}function Pc(e,t,n){var r=_e;_e|=2;var l=Zm(),o=Xm();(De!==e||xe!==t)&&(as=null,Cr(e,t)),t=!1;var g=Ge;e:do try{if(ze!==0&&ge!==null){var x=ge,E=Dt;switch(ze){case 8:Xc(),g=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(t=!0);var D=ze;if(ze=0,Dt=null,Ar(e,x,E,D),n&&wr){g=0;break e}break;default:D=ze,ze=0,Dt=null,Ar(e,x,E,D)}}Xx(),g=Ge;break}catch(V){Qm(e,V)}while(!0);return t&&e.shellSuspendCounter++,An=Da=null,_e=r,H.H=l,H.A=o,ge===null&&(De=null,xe=0,zl()),g}function Xx(){for(;ge!==null;)Fm(ge)}function Fx(e,t){var n=_e;_e|=2;var r=Zm(),l=Xm();De!==e||xe!==t?(as=null,ns=mn()+500,Cr(e,t)):wr=ei(e,t);e:do try{if(ze!==0&&ge!==null){t=ge;var o=Dt;t:switch(ze){case 1:ze=0,Dt=null,Ar(e,t,o,1);break;case 2:case 9:if(sh(o)){ze=0,Dt=null,Pm(t);break}t=function(){ze!==2&&ze!==9||De!==e||(ze=7),yn(e)},o.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:sh(o)?(ze=0,Dt=null,Pm(t)):(ze=0,Dt=null,Ar(e,t,o,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var x=ge;if(!g||Rg(g)){ze=0,Dt=null;var E=x.sibling;if(E!==null)ge=E;else{var D=x.return;D!==null?(ge=D,is(D)):ge=null}break t}}ze=0,Dt=null,Ar(e,t,o,5);break;case 6:ze=0,Dt=null,Ar(e,t,o,6);break;case 8:Xc(),Ge=6;break e;default:throw Error(c(462))}}Px();break}catch(V){Qm(e,V)}while(!0);return An=Da=null,H.H=r,H.A=l,_e=n,ge!==null?0:(De=null,xe=0,zl(),Ge)}function Px(){for(;ge!==null&&!x1();)Fm(ge)}function Fm(e){var t=jm(e.alternate,e,$n);e.memoizedProps=e.pendingProps,t===null?is(e):ge=t}function Pm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pm(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=pm(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:dc(t);default:Em(n,t),t=ge=Wf(t,$n),t=jm(n,t,$n)}e.memoizedProps=e.pendingProps,t===null?is(e):ge=t}function Ar(e,t,n,r){An=Da=null,dc(t),yr=null,Ai=0;var l=t.return;try{if(Ux(e,l,t,n,xe)){Ge=1,Pl(e,qt(n,e.current)),ge=null;return}}catch(o){if(l!==null)throw ge=l,o;Ge=1,Pl(e,qt(n,e.current)),ge=null;return}t.flags&32768?(Se||r===1?e=!0:wr||(xe&536870912)!==0?e=!1:(aa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Xt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wm(t,e)):is(t)}function is(e){var t=e;do{if((t.flags&32768)!==0){Wm(t,aa);return}e=t.return;var n=Gx(t.alternate,t,$n);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ge===0&&(Ge=5)}function Wm(e,t){do{var n=Vx(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);Ge=6,ge=null}function Im(e,t,n,r,l,o,g,x,E){e.cancelPendingCommit=null;do ls();while(st!==0);if((_e&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Ho,A1(e,n,o,g,x,E),e===De&&(ge=De=null,xe=0),_r=t,la=e,zr=n,Kc=o,Qc=l,Vm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ey(dl,function(){return ag(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=H.T,H.T=null,l=F.p,F.p=2,g=_e,_e|=4;try{Yx(e,t,n)}finally{_e=g,F.p=l,H.T=r}}st=1,Jm(),eg(),tg()}}function Jm(){if(st===1){st=0;var e=la,t=_r,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var r=F.p;F.p=2;var l=_e;_e|=4;try{Om(t,e);var o=ou,g=Gf(e.containerInfo),x=o.focusedElem,E=o.selectionRange;if(g!==x&&x&&x.ownerDocument&&Hf(x.ownerDocument.documentElement,x)){if(E!==null&&Oo(x)){var D=E.start,V=E.end;if(V===void 0&&(V=D),"selectionStart"in x)x.selectionStart=D,x.selectionEnd=Math.min(V,x.value.length);else{var K=x.ownerDocument||document,B=K&&K.defaultView||window;if(B.getSelection){var $=B.getSelection(),oe=x.textContent.length,ie=Math.min(E.start,oe),Re=E.end===void 0?ie:Math.min(E.end,oe);!$.extend&&ie>Re&&(g=Re,Re=ie,ie=g);var R=Uf(x,ie),A=Uf(x,Re);if(R&&A&&($.rangeCount!==1||$.anchorNode!==R.node||$.anchorOffset!==R.offset||$.focusNode!==A.node||$.focusOffset!==A.offset)){var M=K.createRange();M.setStart(R.node,R.offset),$.removeAllRanges(),ie>Re?($.addRange(M),$.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),$.addRange(M))}}}}for(K=[],$=x;$=$.parentNode;)$.nodeType===1&&K.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<K.length;x++){var q=K[x];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}xs=!!su,ou=su=null}finally{_e=l,F.p=r,H.T=n}}e.current=t,st=2}}function eg(){if(st===2){st=0;var e=la,t=_r,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var r=F.p;F.p=2;var l=_e;_e|=4;try{Rm(e,t.alternate,t)}finally{_e=l,F.p=r,H.T=n}}st=3}}function tg(){if(st===4||st===3){st=0,y1();var e=la,t=_r,n=zr,r=Vm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,_r=la=null,ng(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ia=null),mo(n),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Jr,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=H.T,l=F.p,F.p=2,H.T=null;try{for(var o=e.onRecoverableError,g=0;g<r.length;g++){var x=r[g];o(x.value,{componentStack:x.stack})}}finally{H.T=t,F.p=l}}(zr&3)!==0&&ls(),yn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Zc?Ni++:(Ni=0,Zc=e):Ni=0,Li(0)}}function ng(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bi(t)))}function ls(e){return Jm(),eg(),tg(),ag()}function ag(){if(st!==5)return!1;var e=la,t=Kc;Kc=0;var n=mo(zr),r=H.T,l=F.p;try{F.p=32>n?32:n,H.T=null,n=Qc,Qc=null;var o=la,g=zr;if(st=0,_r=la=null,zr=0,(_e&6)!==0)throw Error(c(331));var x=_e;if(_e|=4,Hm(o.current),Nm(o,o.current,g,n),_e=x,Li(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Jr,o)}catch{}return!0}finally{F.p=l,H.T=r,ng(e,t)}}function rg(e,t,n){t=qt(n,t),t=_c(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(ti(e,2),yn(e))}function Me(e,t,n){if(e.tag===3)rg(e,e,n);else for(;t!==null;){if(t.tag===3){rg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ia===null||!ia.has(r))){e=qt(n,e),n=om(2),r=Pn(t,n,2),r!==null&&(cm(n,r,t,e),ti(r,2),yn(r));break}}t=t.return}}function Wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qx;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(Gc=!0,l.add(n),e=Wx.bind(null,e,t,n),t.then(e,e))}function Wx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(xe&n)===n&&(Ge===4||Ge===3&&(xe&62914560)===xe&&300>mn()-qc?(_e&2)===0&&Cr(e,0):Vc|=n,Er===xe&&(Er=0)),yn(e)}function ig(e,t){t===0&&(t=ef()),e=cr(e,t),e!==null&&(ti(e,t),yn(e))}function Ix(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ig(e,n)}function Jx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(c(314))}r!==null&&r.delete(t),ig(e,n)}function ey(e,t){return co(e,t)}var ss=null,kr=null,Ic=!1,os=!1,Jc=!1,Ha=0;function yn(e){e!==kr&&e.next===null&&(kr===null?ss=kr=e:kr=kr.next=e),os=!0,Ic||(Ic=!0,ny())}function Li(e,t){if(!Jc&&os){Jc=!0;do for(var n=!1,r=ss;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var o=0;else{var g=r.suspendedLanes,x=r.pingedLanes;o=(1<<31-At(42|e)+1)-1,o&=l&~(g&~x),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,cg(r,o))}else o=xe,o=ml(r,r===De?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||ei(r,o)||(n=!0,cg(r,o));r=r.next}while(n);Jc=!1}}function ty(){lg()}function lg(){os=Ic=!1;var e=0;Ha!==0&&(uy()&&(e=Ha),Ha=0);for(var t=mn(),n=null,r=ss;r!==null;){var l=r.next,o=sg(r,t);o===0?(r.next=null,n===null?ss=l:n.next=l,l===null&&(kr=n)):(n=r,(e!==0||(o&3)!==0)&&(os=!0)),r=l}Li(e)}function sg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var g=31-At(o),x=1<<g,E=l[g];E===-1?((x&n)===0||(x&r)!==0)&&(l[g]=C1(x,t)):E<=t&&(e.expiredLanes|=x),o&=~x}if(t=De,n=xe,n=ml(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&uo(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ei(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&uo(r),mo(n)){case 2:case 8:n=Wd;break;case 32:n=dl;break;case 268435456:n=Id;break;default:n=dl}return r=og.bind(null,e),n=co(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&uo(r),e.callbackPriority=2,e.callbackNode=null,2}function og(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ls()&&e.callbackNode!==n)return null;var r=xe;return r=ml(e,e===De?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qm(e,r,t),sg(e,mn()),e.callbackNode!=null&&e.callbackNode===n?og.bind(null,e):null)}function cg(e,t){if(ls())return null;qm(e,t,!0)}function ny(){fy(function(){(_e&6)!==0?co(Pd,ty):lg()})}function eu(){return Ha===0&&(Ha=Jd()),Ha}function ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yl(""+e)}function dg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ay(e,t,n,r,l){if(t==="submit"&&n&&n.stateNode===l){var o=ug((l[bt]||null).action),g=r.submitter;g&&(t=(t=g[bt]||null)?ug(t.formAction):g.getAttribute("formAction"),t!==null&&(o=t,g=null));var x=new wl("action","action",null,r,l);e.push({event:x,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var E=g?dg(l,g):new FormData(l);vc(n,{pending:!0,data:E,method:l.method,action:o},null,E)}}else typeof o=="function"&&(x.preventDefault(),E=g?dg(l,g):new FormData(l),vc(n,{pending:!0,data:E,method:l.method,action:o},o,E))},currentTarget:l}]})}}for(var tu=0;tu<Uo.length;tu++){var nu=Uo[tu],ry=nu.toLowerCase(),iy=nu[0].toUpperCase()+nu.slice(1);sn(ry,"on"+iy)}sn(qf,"onAnimationEnd"),sn(Kf,"onAnimationIteration"),sn(Qf,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(jx,"onTransitionRun"),sn(wx,"onTransitionStart"),sn(Ex,"onTransitionCancel"),sn(Zf,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ui));function fg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var g=r.length-1;0<=g;g--){var x=r[g],E=x.instance,D=x.currentTarget;if(x=x.listener,E!==o&&l.isPropagationStopped())break e;o=x,l.currentTarget=D;try{o(l)}catch(V){Fl(V)}l.currentTarget=null,o=E}else for(g=0;g<r.length;g++){if(x=r[g],E=x.instance,D=x.currentTarget,x=x.listener,E!==o&&l.isPropagationStopped())break e;o=x,l.currentTarget=D;try{o(l)}catch(V){Fl(V)}l.currentTarget=null,o=E}}}}function pe(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(hg(t,e,2,!1),n.add(r))}function au(e,t,n){var r=0;t&&(r|=4),hg(n,e,r,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function ru(e){if(!e[cs]){e[cs]=!0,lf.forEach(function(n){n!=="selectionchange"&&(ly.has(n)||au(n,!1,e),au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,au("selectionchange",!1,t))}}function hg(e,t,n,r){switch(Ng(t)){case 2:var l=Dy;break;case 8:l=By;break;default:l=xu}n=l.bind(null,t,n,e),l=void 0,!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function iu(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var x=r.stateNode.containerInfo;if(x===l)break;if(g===4)for(g=r.return;g!==null;){var E=g.tag;if((E===3||E===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;x!==null;){if(g=Pa(x),g===null)return;if(E=g.tag,E===5||E===6||E===26||E===27){r=o=g;continue e}x=x.parentNode}}r=r.return}vf(function(){var D=o,V=Eo(n),K=[];e:{var B=Xf.get(e);if(B!==void 0){var $=wl,oe=e;switch(e){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":$=ex;break;case"focusin":oe="focus",$=To;break;case"focusout":oe="blur",$=To;break;case"beforeblur":case"afterblur":$=To;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=V1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=ax;break;case qf:case Kf:case Qf:$=K1;break;case Zf:$=ix;break;case"scroll":case"scrollend":$=H1;break;case"wheel":$=sx;break;case"copy":case"cut":case"paste":$=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=_f;break;case"toggle":case"beforetoggle":$=cx}var ie=(t&4)!==0,Re=!ie&&(e==="scroll"||e==="scrollend"),R=ie?B!==null?B+"Capture":null:B;ie=[];for(var A=D,M;A!==null;){var q=A;if(M=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||M===null||R===null||(q=ri(A,R),q!=null&&ie.push(Hi(A,q,M))),Re)break;A=A.return}0<ie.length&&(B=new $(B,oe,null,n,V),K.push({event:B,listeners:ie}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",B&&n!==wo&&(oe=n.relatedTarget||n.fromElement)&&(Pa(oe)||oe[Fa]))break e;if(($||B)&&(B=V.window===V?V:(B=V.ownerDocument)?B.defaultView||B.parentWindow:window,$?(oe=n.relatedTarget||n.toElement,$=D,oe=oe?Pa(oe):null,oe!==null&&(Re=f(oe),ie=oe.tag,oe!==Re||ie!==5&&ie!==27&&ie!==6)&&(oe=null)):($=null,oe=D),$!==oe)){if(ie=wf,q="onMouseLeave",R="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ie=_f,q="onPointerLeave",R="onPointerEnter",A="pointer"),Re=$==null?B:ai($),M=oe==null?B:ai(oe),B=new ie(q,A+"leave",$,n,V),B.target=Re,B.relatedTarget=M,q=null,Pa(V)===D&&(ie=new ie(R,A+"enter",oe,n,V),ie.target=M,ie.relatedTarget=Re,q=ie),Re=q,$&&oe)t:{for(ie=$,R=oe,A=0,M=ie;M;M=Tr(M))A++;for(M=0,q=R;q;q=Tr(q))M++;for(;0<A-M;)ie=Tr(ie),A--;for(;0<M-A;)R=Tr(R),M--;for(;A--;){if(ie===R||R!==null&&ie===R.alternate)break t;ie=Tr(ie),R=Tr(R)}ie=null}else ie=null;$!==null&&mg(K,B,$,ie,!1),oe!==null&&Re!==null&&mg(K,Re,oe,ie,!0)}}e:{if(B=D?ai(D):window,$=B.nodeName&&B.nodeName.toLowerCase(),$==="select"||$==="input"&&B.type==="file")var J=Df;else if(Rf(B))if(Bf)J=yx;else{J=bx;var he=px}else $=B.nodeName,!$||$.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?D&&jo(D.elementType)&&(J=Df):J=xx;if(J&&(J=J(e,D))){Mf(K,J,n,V);break e}he&&he(e,B,D),e==="focusout"&&D&&B.type==="number"&&D.memoizedProps.value!=null&&So(B,"number",B.value)}switch(he=D?ai(D):window,e){case"focusin":(Rf(he)||he.contentEditable==="true")&&(lr=he,$o=D,fi=null);break;case"focusout":fi=$o=lr=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,Vf(K,n,V);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Vf(K,n,V)}var ne;if(Mo)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else ir?kf(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(zf&&n.locale!=="ko"&&(ir||se!=="onCompositionStart"?se==="onCompositionEnd"&&ir&&(ne=Sf()):(Qn=V,Co="value"in Qn?Qn.value:Qn.textContent,ir=!0)),he=us(D,se),0<he.length&&(se=new Ef(se,e,null,n,V),K.push({event:se,listeners:he}),ne?se.data=ne:(ne=Tf(n),ne!==null&&(se.data=ne)))),(ne=dx?fx(e,n):hx(e,n))&&(se=us(D,"onBeforeInput"),0<se.length&&(he=new Ef("onBeforeInput","beforeinput",null,n,V),K.push({event:he,listeners:se}),he.data=ne)),ay(K,e,D,n,V)}fg(K,t)})}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=ri(e,n),l!=null&&r.unshift(Hi(e,l,o)),l=ri(e,t),l!=null&&r.push(Hi(e,l,o))),e.tag===3)return r;e=e.return}return[]}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mg(e,t,n,r,l){for(var o=t._reactName,g=[];n!==null&&n!==r;){var x=n,E=x.alternate,D=x.stateNode;if(x=x.tag,E!==null&&E===r)break;x!==5&&x!==26&&x!==27||D===null||(E=D,l?(D=ri(n,o),D!=null&&g.unshift(Hi(n,D,E))):l||(D=ri(n,o),D!=null&&g.push(Hi(n,D,E)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var sy=/\r\n?/g,oy=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(oy,"")}function pg(e,t){return t=gg(t),gg(e)===t}function ds(){}function Te(e,t,n,r,l,o){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||nr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&nr(e,""+r);break;case"className":pl(e,"class",r);break;case"tabIndex":pl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":pl(e,n,r);break;case"style":xf(e,r,o);break;case"data":if(t!=="object"){pl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=yl(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",l.name,l,null),Te(e,t,"formEncType",l.formEncType,l,null),Te(e,t,"formMethod",l.formMethod,l,null),Te(e,t,"formTarget",l.formTarget,l,null)):(Te(e,t,"encType",l.encType,l,null),Te(e,t,"method",l.method,l,null),Te(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=yl(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=ds);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=yl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),gl(e,"popover",r);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":gl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=L1.get(n)||n,gl(e,n,r))}}function lu(e,t,n,r,l,o){switch(n){case"style":xf(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof r=="string"?nr(e,r):(typeof r=="number"||typeof r=="bigint")&&nr(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ds);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[bt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof r=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,l);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):gl(e,n,r)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var g=n[o];if(g!=null)switch(o){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Te(e,t,o,g,n,null)}}l&&Te(e,t,"srcSet",n.srcSet,n,null),r&&Te(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var x=o=g=l=null,E=null,D=null;for(r in n)if(n.hasOwnProperty(r)){var V=n[r];if(V!=null)switch(r){case"name":l=V;break;case"type":g=V;break;case"checked":E=V;break;case"defaultChecked":D=V;break;case"value":o=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(c(137,t));break;default:Te(e,t,r,V,n,null)}}mf(e,o,x,E,D,g,l,!1),bl(e);return;case"select":pe("invalid",e),r=g=o=null;for(l in n)if(n.hasOwnProperty(l)&&(x=n[l],x!=null))switch(l){case"value":o=x;break;case"defaultValue":g=x;break;case"multiple":r=x;default:Te(e,t,l,x,n,null)}t=o,n=g,e.multiple=!!r,t!=null?tr(e,!!r,t,!1):n!=null&&tr(e,!!r,n,!0);return;case"textarea":pe("invalid",e),o=l=r=null;for(g in n)if(n.hasOwnProperty(g)&&(x=n[g],x!=null))switch(g){case"value":r=x;break;case"defaultValue":l=x;break;case"children":o=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(91));break;default:Te(e,t,g,x,n,null)}pf(e,r,l,o),bl(e);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(r=n[E],r!=null))switch(E){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Te(e,t,E,r,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<Ui.length;r++)pe(Ui[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(r=n[D],r!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Te(e,t,D,r,n,null)}return;default:if(jo(t)){for(V in n)n.hasOwnProperty(V)&&(r=n[V],r!==void 0&&lu(e,t,V,r,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(r=n[x],r!=null&&Te(e,t,x,r,n,null))}function cy(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,g=null,x=null,E=null,D=null,V=null;for($ in n){var K=n[$];if(n.hasOwnProperty($)&&K!=null)switch($){case"checked":break;case"value":break;case"defaultValue":E=K;default:r.hasOwnProperty($)||Te(e,t,$,null,r,K)}}for(var B in r){var $=r[B];if(K=n[B],r.hasOwnProperty(B)&&($!=null||K!=null))switch(B){case"type":o=$;break;case"name":l=$;break;case"checked":D=$;break;case"defaultChecked":V=$;break;case"value":g=$;break;case"defaultValue":x=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(c(137,t));break;default:$!==K&&Te(e,t,B,$,r,K)}}vo(e,g,x,E,D,V,o,l);return;case"select":$=g=x=B=null;for(o in n)if(E=n[o],n.hasOwnProperty(o)&&E!=null)switch(o){case"value":break;case"multiple":$=E;default:r.hasOwnProperty(o)||Te(e,t,o,null,r,E)}for(l in r)if(o=r[l],E=n[l],r.hasOwnProperty(l)&&(o!=null||E!=null))switch(l){case"value":B=o;break;case"defaultValue":x=o;break;case"multiple":g=o;default:o!==E&&Te(e,t,l,o,r,E)}t=x,n=g,r=$,B!=null?tr(e,!!n,B,!1):!!r!=!!n&&(t!=null?tr(e,!!n,t,!0):tr(e,!!n,n?[]:"",!1));return;case"textarea":$=B=null;for(x in n)if(l=n[x],n.hasOwnProperty(x)&&l!=null&&!r.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Te(e,t,x,null,r,l)}for(g in r)if(l=r[g],o=n[g],r.hasOwnProperty(g)&&(l!=null||o!=null))switch(g){case"value":B=l;break;case"defaultValue":$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Te(e,t,g,l,r,o)}gf(e,B,$);return;case"option":for(var oe in n)if(B=n[oe],n.hasOwnProperty(oe)&&B!=null&&!r.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Te(e,t,oe,null,r,B)}for(E in r)if(B=r[E],$=n[E],r.hasOwnProperty(E)&&B!==$&&(B!=null||$!=null))switch(E){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Te(e,t,E,B,r,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)B=n[ie],n.hasOwnProperty(ie)&&B!=null&&!r.hasOwnProperty(ie)&&Te(e,t,ie,null,r,B);for(D in r)if(B=r[D],$=n[D],r.hasOwnProperty(D)&&B!==$&&(B!=null||$!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Te(e,t,D,B,r,$)}return;default:if(jo(t)){for(var Re in n)B=n[Re],n.hasOwnProperty(Re)&&B!==void 0&&!r.hasOwnProperty(Re)&&lu(e,t,Re,void 0,r,B);for(V in r)B=r[V],$=n[V],!r.hasOwnProperty(V)||B===$||B===void 0&&$===void 0||lu(e,t,V,B,r,$);return}}for(var R in n)B=n[R],n.hasOwnProperty(R)&&B!=null&&!r.hasOwnProperty(R)&&Te(e,t,R,null,r,B);for(K in r)B=r[K],$=n[K],!r.hasOwnProperty(K)||B===$||B==null&&$==null||Te(e,t,K,B,r,$)}var su=null,ou=null;function fs(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=null;function uy(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(e){return vg.resolve(null).then(e).catch(hy)}:yg;function hy(e){setTimeout(function(){throw e})}function oa(e){return e==="head"}function Sg(e,t){var n=t,r=0,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<r&&8>r){n=r;var g=e.ownerDocument;if(n&1&&Gi(g.documentElement),n&2&&Gi(g.body),n&4)for(n=g.head,Gi(n),g=n.firstChild;g;){var x=g.nextSibling,E=g.nodeName;g[ni]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&g.rel.toLowerCase()==="stylesheet"||n.removeChild(g),g=x}}if(l===0){e.removeChild(o),Fi(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);Fi(t)}function du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":du(n),po(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function my(e,t,n,r){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ni])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=cn(e.nextSibling),e===null)break}return null}function gy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=cn(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function py(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var hu=null;function jg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function wg(e,t,n){switch(t=fs(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);po(e)}var Pt=new Map,Eg=new Set;function hs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=F.d;F.d={f:by,r:xy,D:yy,C:vy,L:Sy,m:jy,X:Ey,S:wy,M:_y};function by(){var e=Nn.f(),t=rs();return e||t}function xy(e){var t=Wa(e);t!==null&&t.tag===5&&t.type==="form"?qh(t):Nn.r(e)}var Rr=typeof document>"u"?null:document;function _g(e,t,n){var r=Rr;if(r&&typeof t=="string"&&t){var l=Yt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Eg.has(l)||(Eg.add(l),e={rel:e,crossOrigin:n,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),ot(t,"link",e),Ie(t),r.head.appendChild(t)))}}function yy(e){Nn.D(e),_g("dns-prefetch",e,null)}function vy(e,t){Nn.C(e,t),_g("preconnect",e,t)}function Sy(e,t,n){Nn.L(e,t,n);var r=Rr;if(r&&e&&t){var l='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Yt(n.imageSizes)+'"]')):l+='[href="'+Yt(e)+'"]';var o=l;switch(t){case"style":o=Mr(e);break;case"script":o=Dr(e)}Pt.has(o)||(e=p({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(o,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Vi(o))||t==="script"&&r.querySelector(Yi(o))||(t=r.createElement("link"),ot(t,"link",e),Ie(t),r.head.appendChild(t)))}}function jy(e,t){Nn.m(e,t);var n=Rr;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Yt(r)+'"][href="'+Yt(e)+'"]',o=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Dr(e)}if(!Pt.has(o)&&(e=p({rel:"modulepreload",href:e},t),Pt.set(o,e),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yi(o)))return}r=n.createElement("link"),ot(r,"link",e),Ie(r),n.head.appendChild(r)}}}function wy(e,t,n){Nn.S(e,t,n);var r=Rr;if(r&&e){var l=Ia(r).hoistableStyles,o=Mr(e);t=t||"default";var g=l.get(o);if(!g){var x={loading:0,preload:null};if(g=r.querySelector(Vi(o)))x.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(o))&&mu(e,n);var E=g=r.createElement("link");Ie(E),ot(E,"link",e),E._p=new Promise(function(D,V){E.onload=D,E.onerror=V}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,ms(g,t,r)}g={type:"stylesheet",instance:g,count:1,state:x},l.set(o,g)}}}function Ey(e,t){Nn.X(e,t);var n=Rr;if(n&&e){var r=Ia(n).hoistableScripts,l=Dr(e),o=r.get(l);o||(o=n.querySelector(Yi(l)),o||(e=p({src:e,async:!0},t),(t=Pt.get(l))&&gu(e,t),o=n.createElement("script"),Ie(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function _y(e,t){Nn.M(e,t);var n=Rr;if(n&&e){var r=Ia(n).hoistableScripts,l=Dr(e),o=r.get(l);o||(o=n.querySelector(Yi(l)),o||(e=p({src:e,async:!0,type:"module"},t),(t=Pt.get(l))&&gu(e,t),o=n.createElement("script"),Ie(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function zg(e,t,n,r){var l=(l=le.current)?hs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Mr(n.href),n=Ia(l).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Mr(n.href);var o=Ia(l).hoistableStyles,g=o.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,g),(o=l.querySelector(Vi(e)))&&!o._p&&(g.instance=o,g.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),o||zy(l,e,n,g.state))),t&&r===null)throw Error(c(528,""));return g}if(t&&r!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dr(n),n=Ia(l).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Mr(e){return'href="'+Yt(e)+'"'}function Vi(e){return'link[rel="stylesheet"]['+e+"]"}function Cg(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function zy(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),ot(t,"link",n),Ie(t),e.head.appendChild(t))}function Dr(e){return'[src="'+Yt(e)+'"]'}function Yi(e){return"script[async]"+e}function Ag(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(r)return t.instance=r,Ie(r),r;var l=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ie(r),ot(r,"style",l),ms(r,n.precedence,e),t.instance=r;case"stylesheet":l=Mr(n.href);var o=e.querySelector(Vi(l));if(o)return t.state.loading|=4,t.instance=o,Ie(o),o;r=Cg(n),(l=Pt.get(l))&&mu(r,l),o=(e.ownerDocument||e).createElement("link"),Ie(o);var g=o;return g._p=new Promise(function(x,E){g.onload=x,g.onerror=E}),ot(o,"link",r),t.state.loading|=4,ms(o,n.precedence,e),t.instance=o;case"script":return o=Dr(n.src),(l=e.querySelector(Yi(o)))?(t.instance=l,Ie(l),l):(r=n,(l=Pt.get(o))&&(r=p({},n),gu(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),ot(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,ms(r,n.precedence,e));return t.instance}function ms(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,o=l,g=0;g<r.length;g++){var x=r[g];if(x.dataset.precedence===t)o=x;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gs=null;function kg(e,t,n){if(gs===null){var r=new Map,l=gs=new Map;l.set(n,r)}else l=gs,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[ni]||o[dt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var g=o.getAttribute(t)||"";g=e+g;var x=r.get(g);x?x.push(o):r.set(g,[o])}}return r}function Tg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Cy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var qi=null;function Ay(){}function ky(e,t,n){if(qi===null)throw Error(c(475));var r=qi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Mr(n.href),o=e.querySelector(Vi(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=ps.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,Ie(o);return}o=e.ownerDocument||e,n=Cg(n),(l=Pt.get(l))&&mu(n,l),o=o.createElement("link"),Ie(o);var g=o;g._p=new Promise(function(x,E){g.onload=x,g.onerror=E}),ot(o,"link",n),t.instance=o}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=ps.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ty(){if(qi===null)throw Error(c(475));var e=qi;return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ps(){if(this.count--,this.count===0){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bs=null;function pu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bs=new Map,t.forEach(Ry,e),bs=null,ps.call(e))}function Ry(e,t){if(!(t.state.loading&4)){var n=bs.get(e);if(n)var r=n.get(null);else{n=new Map,bs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var g=l[o];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),r=g)}r&&n.set(null,r)}l=t.instance,g=l.getAttribute("data-precedence"),o=n.get(g)||r,o===r&&n.set(null,l),n.set(g,l),this.count++,r=ps.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ki={$$typeof:k,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function My(e,t,n,r,l,o,g,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Mg(e,t,n,r,l,o,g,x,E,D,V,K){return e=new My(e,t,n,g,x,E,D,K),t=1,o===!0&&(t|=24),o=Tt(3,null,null,t),e.current=o,o.stateNode=e,t=Wo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},tc(o),e}function Dg(e){return e?(e=ur,e):ur}function Bg(e,t,n,r,l,o){l=Dg(l),r.context===null?r.context=l:r.pendingContext=l,r=Fn(t),r.payload={element:n},o=o===void 0?null:o,o!==null&&(r.callback=o),n=Pn(e,r,t),n!==null&&(Ot(n,e,t),Si(n,e,t))}function Og(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){Og(e,t),(e=e.alternate)&&Og(e,t)}function $g(e){if(e.tag===13){var t=cr(e,67108864);t!==null&&Ot(t,e,67108864),bu(e,67108864)}}var xs=!0;function Dy(e,t,n,r){var l=H.T;H.T=null;var o=F.p;try{F.p=2,xu(e,t,n,r)}finally{F.p=o,H.T=l}}function By(e,t,n,r){var l=H.T;H.T=null;var o=F.p;try{F.p=8,xu(e,t,n,r)}finally{F.p=o,H.T=l}}function xu(e,t,n,r){if(xs){var l=yu(r);if(l===null)iu(e,t,r,ys,n),Lg(e,r);else if($y(l,e,t,n,r))r.stopPropagation();else if(Lg(e,r),t&4&&-1<Oy.indexOf(e)){for(;l!==null;){var o=Wa(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var g=wa(o.pendingLanes);if(g!==0){var x=o;for(x.pendingLanes|=2,x.entangledLanes|=2;g;){var E=1<<31-At(g);x.entanglements[1]|=E,g&=~E}yn(o),(_e&6)===0&&(ns=mn()+500,Li(0))}}break;case 13:x=cr(o,2),x!==null&&Ot(x,o,2),rs(),bu(o,2)}if(o=yu(r),o===null&&iu(e,t,r,ys,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else iu(e,t,r,null,n)}}function yu(e){return e=Eo(e),vu(e)}var ys=null;function vu(e){if(ys=null,e=Pa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ys=e,null}function Ng(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v1()){case Pd:return 2;case Wd:return 8;case dl:case S1:return 32;case Id:return 268435456;default:return 32}default:return 32}}var Su=!1,ca=null,ua=null,da=null,Qi=new Map,Zi=new Map,fa=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":Qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(t.pointerId)}}function Xi(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Wa(t),t!==null&&$g(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function $y(e,t,n,r,l){switch(t){case"focusin":return ca=Xi(ca,e,t,n,r,l),!0;case"dragenter":return ua=Xi(ua,e,t,n,r,l),!0;case"mouseover":return da=Xi(da,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Qi.set(o,Xi(Qi.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Zi.set(o,Xi(Zi.get(o)||null,e,t,n,r,l)),!0}return!1}function Ug(e){var t=Pa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,k1(e.priority,function(){if(n.tag===13){var r=Bt();r=ho(r);var l=cr(n,r);l!==null&&Ot(l,n,r),bu(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yu(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wo=r,n.target.dispatchEvent(r),wo=null}else return t=Wa(n),t!==null&&$g(t),e.blockedOn=n,!1;t.shift()}return!0}function Hg(e,t,n){vs(e)&&n.delete(t)}function Ny(){Su=!1,ca!==null&&vs(ca)&&(ca=null),ua!==null&&vs(ua)&&(ua=null),da!==null&&vs(da)&&(da=null),Qi.forEach(Hg),Zi.forEach(Hg)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,Su||(Su=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ny)))}var js=null;function Gg(e){js!==e&&(js=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){js===e&&(js=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(vu(r||n)===null)continue;break}var o=Wa(n);o!==null&&(e.splice(t,3),t-=3,vc(o,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function Fi(e){function t(E){return Ss(E,e)}ca!==null&&Ss(ca,e),ua!==null&&Ss(ua,e),da!==null&&Ss(da,e),Qi.forEach(t),Zi.forEach(t);for(var n=0;n<fa.length;n++){var r=fa[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<fa.length&&(n=fa[0],n.blockedOn===null);)Ug(n),n.blockedOn===null&&fa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],o=n[r+1],g=l[bt]||null;if(typeof o=="function")g||Gg(n);else if(g){var x=null;if(o&&o.hasAttribute("formAction")){if(l=o,g=o[bt]||null)x=g.formAction;else if(vu(l)!==null)continue}else x=g.action;typeof x=="function"?n[r+1]=x:(n.splice(r,3),r-=3),Gg(n)}}}function ju(e){this._internalRoot=e}ws.prototype.render=ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,r=Bt();Bg(n,r,e,t,null,null)},ws.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bg(e.current,2,null,e,null,null),rs(),t[Fa]=null}};function ws(e){this._internalRoot=e}ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=af();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fa.length&&t!==0&&t<fa[n].priority;n++);fa.splice(n,0,e),n===0&&Ug(e)}};var Vg=s.version;if(Vg!=="19.1.0")throw Error(c(527,Vg,"19.1.0"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var Ly={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Jr=Es.inject(Ly),Ct=Es}catch{}}return Wi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,r="",l=rm,o=im,g=lm,x=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(x=t.unstable_transitionCallbacks)),t=Mg(e,1,!1,null,null,n,r,l,o,g,x,null),e[Fa]=t.current,ru(e),new ju(t)},Wi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var r=!1,l="",o=rm,g=im,x=lm,E=null,D=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks),n.formState!==void 0&&(D=n.formState)),t=Mg(e,1,!0,t,n??null,r,l,o,g,x,E,D),t.context=Dg(null),n=t.current,r=Bt(),r=ho(r),l=Fn(r),l.callback=null,Pn(n,l,r),n=r,t.current.lanes=n,ti(t,n),yn(t),e[Fa]=t.current,ru(e),new ws(t)},Wi.version="19.1.0",Wi}var Ig;function Fy(){if(Ig)return _u.exports;Ig=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),_u.exports=Xy(),_u.exports}var Py=Fy(),rt=function(){return rt=Object.assign||function(s){for(var u,c=1,d=arguments.length;c<d;c++){u=arguments[c];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(s[f]=u[f])}return s},rt.apply(this,arguments)};function Vr(a,s,u){if(u||arguments.length===2)for(var c=0,d=s.length,f;c<d;c++)(f||!(c in s))&&(f||(f=Array.prototype.slice.call(s,0,c)),f[c]=s[c]);return a.concat(f||Array.prototype.slice.call(s))}var Be="-ms-",al="-moz-",we="-webkit-",Wp="comm",eo="rule",Td="decl",Wy="@import",Ip="@keyframes",Iy="@layer",Jp=Math.abs,Rd=String.fromCharCode,dd=Object.assign;function Jy(a,s){return at(a,0)^45?(((s<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function e0(a){return a.trim()}function Un(a,s){return(a=s.exec(a))?a[0]:a}function de(a,s,u){return a.replace(s,u)}function $s(a,s,u){return a.indexOf(s,u)}function at(a,s){return a.charCodeAt(s)|0}function Yr(a,s,u){return a.slice(s,u)}function vn(a){return a.length}function t0(a){return a.length}function tl(a,s){return s.push(a),a}function ev(a,s){return a.map(s).join("")}function Jg(a,s){return a.filter(function(u){return!Un(u,s)})}var to=1,qr=1,n0=0,Jt=0,Ze=0,Xr="";function no(a,s,u,c,d,f,y,v){return{value:a,root:s,parent:u,type:c,props:d,children:f,line:to,column:qr,length:y,return:"",siblings:v}}function ba(a,s){return dd(no("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function Br(a){for(;a.root;)a=ba(a.root,{children:[a]});tl(a,a.siblings)}function tv(){return Ze}function nv(){return Ze=Jt>0?at(Xr,--Jt):0,qr--,Ze===10&&(qr=1,to--),Ze}function un(){return Ze=Jt<n0?at(Xr,Jt++):0,qr++,Ze===10&&(qr=1,to++),Ze}function Ya(){return at(Xr,Jt)}function Ns(){return Jt}function ao(a,s){return Yr(Xr,a,s)}function fd(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function av(a){return to=qr=1,n0=vn(Xr=a),Jt=0,[]}function rv(a){return Xr="",a}function ku(a){return e0(ao(Jt-1,hd(a===91?a+2:a===40?a+1:a)))}function iv(a){for(;(Ze=Ya())&&Ze<33;)un();return fd(a)>2||fd(Ze)>3?"":" "}function lv(a,s){for(;--s&&un()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return ao(a,Ns()+(s<6&&Ya()==32&&un()==32))}function hd(a){for(;un();)switch(Ze){case a:return Jt;case 34:case 39:a!==34&&a!==39&&hd(Ze);break;case 40:a===41&&hd(a);break;case 92:un();break}return Jt}function sv(a,s){for(;un()&&a+Ze!==57;)if(a+Ze===84&&Ya()===47)break;return"/*"+ao(s,Jt-1)+"*"+Rd(a===47?a:un())}function ov(a){for(;!fd(Ya());)un();return ao(a,Jt)}function cv(a){return rv(Ls("",null,null,null,[""],a=av(a),0,[0],a))}function Ls(a,s,u,c,d,f,y,v,m){for(var h=0,p=0,S=y,w=0,C=0,j=0,O=1,L=1,G=1,X=0,k="",Y=d,U=f,I=c,N=k;L;)switch(j=X,X=un()){case 40:if(j!=108&&at(N,S-1)==58){$s(N+=de(ku(X),"&","&\f"),"&\f",Jp(h?v[h-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:N+=ku(X);break;case 9:case 10:case 13:case 32:N+=iv(j);break;case 92:N+=lv(Ns()-1,7);continue;case 47:switch(Ya()){case 42:case 47:tl(uv(sv(un(),Ns()),s,u,m),m);break;default:N+="/"}break;case 123*O:v[h++]=vn(N)*G;case 125*O:case 59:case 0:switch(X){case 0:case 125:L=0;case 59+p:G==-1&&(N=de(N,/\f/g,"")),C>0&&vn(N)-S&&tl(C>32?tp(N+";",c,u,S-1,m):tp(de(N," ","")+";",c,u,S-2,m),m);break;case 59:N+=";";default:if(tl(I=ep(N,s,u,h,p,d,v,k,Y=[],U=[],S,f),f),X===123)if(p===0)Ls(N,s,I,I,Y,f,S,v,U);else switch(w===99&&at(N,3)===110?100:w){case 100:case 108:case 109:case 115:Ls(a,I,I,c&&tl(ep(a,I,I,0,0,d,v,k,d,Y=[],S,U),U),d,U,S,v,c?Y:U);break;default:Ls(N,I,I,I,[""],U,0,v,U)}}h=p=C=0,O=G=1,k=N="",S=y;break;case 58:S=1+vn(N),C=j;default:if(O<1){if(X==123)--O;else if(X==125&&O++==0&&nv()==125)continue}switch(N+=Rd(X),X*O){case 38:G=p>0?1:(N+="\f",-1);break;case 44:v[h++]=(vn(N)-1)*G,G=1;break;case 64:Ya()===45&&(N+=ku(un())),w=Ya(),p=S=vn(k=N+=ov(Ns())),X++;break;case 45:j===45&&vn(N)==2&&(O=0)}}return f}function ep(a,s,u,c,d,f,y,v,m,h,p,S){for(var w=d-1,C=d===0?f:[""],j=t0(C),O=0,L=0,G=0;O<c;++O)for(var X=0,k=Yr(a,w+1,w=Jp(L=y[O])),Y=a;X<j;++X)(Y=e0(L>0?C[X]+" "+k:de(k,/&\f/g,C[X])))&&(m[G++]=Y);return no(a,s,u,d===0?eo:v,m,h,p,S)}function uv(a,s,u,c){return no(a,s,u,Wp,Rd(tv()),Yr(a,2,-2),0,c)}function tp(a,s,u,c,d){return no(a,s,u,Td,Yr(a,0,c),Yr(a,c+1,-1),c,d)}function a0(a,s,u){switch(Jy(a,s)){case 5103:return we+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+a+a;case 4789:return al+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return we+a+al+a+Be+a+a;case 5936:switch(at(a,s+11)){case 114:return we+a+Be+de(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return we+a+Be+de(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return we+a+Be+de(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return we+a+Be+a+a;case 6165:return we+a+Be+"flex-"+a+a;case 5187:return we+a+de(a,/(\w+).+(:[^]+)/,we+"box-$1$2"+Be+"flex-$1$2")+a;case 5443:return we+a+Be+"flex-item-"+de(a,/flex-|-self/g,"")+(Un(a,/flex-|baseline/)?"":Be+"grid-row-"+de(a,/flex-|-self/g,""))+a;case 4675:return we+a+Be+"flex-line-pack"+de(a,/align-content|flex-|-self/g,"")+a;case 5548:return we+a+Be+de(a,"shrink","negative")+a;case 5292:return we+a+Be+de(a,"basis","preferred-size")+a;case 6060:return we+"box-"+de(a,"-grow","")+we+a+Be+de(a,"grow","positive")+a;case 4554:return we+de(a,/([^-])(transform)/g,"$1"+we+"$2")+a;case 6187:return de(de(de(a,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),a,"")+a;case 5495:case 3959:return de(a,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return de(de(a,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+a+a;case 4200:if(!Un(a,/flex-|baseline/))return Be+"grid-column-align"+Yr(a,s)+a;break;case 2592:case 3360:return Be+de(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,d){return s=d,Un(c.props,/grid-\w+-end/)})?~$s(a+(u=u[s].value),"span",0)?a:Be+de(a,"-start","")+a+Be+"grid-row-span:"+(~$s(u,"span",0)?Un(u,/\d+/):+Un(u,/\d+/)-+Un(a,/\d+/))+";":Be+de(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return Un(c.props,/grid-\w+-start/)})?a:Be+de(de(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return de(a,/(.+)-inline(.+)/,we+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(a)-1-s>6)switch(at(a,s+1)){case 109:if(at(a,s+4)!==45)break;case 102:return de(a,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+al+(at(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~$s(a,"stretch",0)?a0(de(a,"stretch","fill-available"),s,u)+a:a}break;case 5152:case 5920:return de(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,f,y,v,m,h){return Be+d+":"+f+h+(y?Be+d+"-span:"+(v?m:+m-+f)+h:"")+a});case 4949:if(at(a,s+6)===121)return de(a,":",":"+we)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return de(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(at(a,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+Be+"$2box$3")+a;case 100:return de(a,":",":"+Be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(a,"scroll-","scroll-snap-")+a}return a}function qs(a,s){for(var u="",c=0;c<a.length;c++)u+=s(a[c],c,a,s)||"";return u}function dv(a,s,u,c){switch(a.type){case Iy:if(a.children.length)break;case Wy:case Td:return a.return=a.return||a.value;case Wp:return"";case Ip:return a.return=a.value+"{"+qs(a.children,c)+"}";case eo:if(!vn(a.value=a.props.join(",")))return""}return vn(u=qs(a.children,c))?a.return=a.value+"{"+u+"}":""}function fv(a){var s=t0(a);return function(u,c,d,f){for(var y="",v=0;v<s;v++)y+=a[v](u,c,d,f)||"";return y}}function hv(a){return function(s){s.root||(s=s.return)&&a(s)}}function mv(a,s,u,c){if(a.length>-1&&!a.return)switch(a.type){case Td:a.return=a0(a.value,a.length,u);return;case Ip:return qs([ba(a,{value:de(a.value,"@","@"+we)})],c);case eo:if(a.length)return ev(u=a.props,function(d){switch(Un(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Br(ba(a,{props:[de(d,/:(read-\w+)/,":"+al+"$1")]})),Br(ba(a,{props:[d]})),dd(a,{props:Jg(u,c)});break;case"::placeholder":Br(ba(a,{props:[de(d,/:(plac\w+)/,":"+we+"input-$1")]})),Br(ba(a,{props:[de(d,/:(plac\w+)/,":"+al+"$1")]})),Br(ba(a,{props:[de(d,/:(plac\w+)/,Be+"input-$1")]})),Br(ba(a,{props:[d]})),dd(a,{props:Jg(u,c)});break}return""})}}var gv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Kr=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",r0="active",i0="data-styled-version",ro="6.1.19",Md=`/*!sc*/
`,Ks=typeof window<"u"&&typeof document<"u",pv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),bv={},io=Object.freeze([]),Qr=Object.freeze({});function l0(a,s,u){return u===void 0&&(u=Qr),a.theme!==u.theme&&a.theme||s||u.theme}var s0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yv=/(^-|-$)/g;function np(a){return a.replace(xv,"-").replace(yv,"")}var vv=/(a)(d)/gi,_s=52,ap=function(a){return String.fromCharCode(a+(a>25?39:97))};function md(a){var s,u="";for(s=Math.abs(a);s>_s;s=s/_s|0)u=ap(s%_s)+u;return(ap(s%_s)+u).replace(vv,"$1-$2")}var Tu,o0=5381,Hr=function(a,s){for(var u=s.length;u;)a=33*a^s.charCodeAt(--u);return a},c0=function(a){return Hr(o0,a)};function Dd(a){return md(c0(a)>>>0)}function Sv(a){return a.displayName||a.name||"Component"}function Ru(a){return typeof a=="string"&&!0}var u0=typeof Symbol=="function"&&Symbol.for,d0=u0?Symbol.for("react.memo"):60115,jv=u0?Symbol.for("react.forward_ref"):60112,wv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ev={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_v=((Tu={})[jv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tu[d0]=f0,Tu);function rp(a){return("type"in(s=a)&&s.type.$$typeof)===d0?f0:"$$typeof"in a?_v[a.$$typeof]:wv;var s}var zv=Object.defineProperty,Cv=Object.getOwnPropertyNames,ip=Object.getOwnPropertySymbols,Av=Object.getOwnPropertyDescriptor,kv=Object.getPrototypeOf,lp=Object.prototype;function h0(a,s,u){if(typeof s!="string"){if(lp){var c=kv(s);c&&c!==lp&&h0(a,c,u)}var d=Cv(s);ip&&(d=d.concat(ip(s)));for(var f=rp(a),y=rp(s),v=0;v<d.length;++v){var m=d[v];if(!(m in Ev||u&&u[m]||y&&m in y||f&&m in f)){var h=Av(s,m);try{zv(a,m,h)}catch{}}}}return a}function qa(a){return typeof a=="function"}function Bd(a){return typeof a=="object"&&"styledComponentId"in a}function Va(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function Qs(a,s){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function rl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function gd(a,s,u){if(u===void 0&&(u=!1),!u&&!rl(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)a[c]=gd(a[c],s[c]);else if(rl(s))for(var c in s)a[c]=gd(a[c],s[c]);return a}function Od(a,s){Object.defineProperty(a,"toString",{value:s})}function Ka(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Tv=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return a.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,f=d;s>=f;)if((f<<=1)<0)throw Ka(16,"".concat(s));this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(var y=d;y<f;y++)this.groupSizes[y]=0}for(var v=this.indexOfGroup(s+1),m=(y=0,u.length);y<m;y++)this.tag.insertRule(v,u[y])&&(this.groupSizes[s]++,v++)},a.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),d=c+u;this.groupSizes[s]=0;for(var f=c;f<d;f++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],d=this.indexOfGroup(s),f=d+c,y=d;y<f;y++)u+="".concat(this.tag.getRule(y)).concat(Md);return u},a}(),Us=new Map,Zs=new Map,Hs=1,zs=function(a){if(Us.has(a))return Us.get(a);for(;Zs.has(Hs);)Hs++;var s=Hs++;return Us.set(a,s),Zs.set(s,a),s},Rv=function(a,s){Hs=s+1,Us.set(a,s),Zs.set(s,a)},Mv="style[".concat(Kr,"][").concat(i0,'="').concat(ro,'"]'),Dv=new RegExp("^".concat(Kr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bv=function(a,s,u){for(var c,d=u.split(","),f=0,y=d.length;f<y;f++)(c=d[f])&&a.registerName(s,c)},Ov=function(a,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(Md),d=[],f=0,y=c.length;f<y;f++){var v=c[f].trim();if(v){var m=v.match(Dv);if(m){var h=0|parseInt(m[1],10),p=m[2];h!==0&&(Rv(p,h),Bv(a,p,m[3]),a.getTag().insertRules(h,d)),d.length=0}else d.push(v)}}},sp=function(a){for(var s=document.querySelectorAll(Mv),u=0,c=s.length;u<c;u++){var d=s[u];d&&d.getAttribute(Kr)!==r0&&(Ov(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function $v(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var m0=function(a){var s=document.head,u=a||s,c=document.createElement("style"),d=function(v){var m=Array.from(v.querySelectorAll("style[".concat(Kr,"]")));return m[m.length-1]}(u),f=d!==void 0?d.nextSibling:null;c.setAttribute(Kr,r0),c.setAttribute(i0,ro);var y=$v();return y&&c.setAttribute("nonce",y),u.insertBefore(c,f),c},Nv=function(){function a(s){this.element=m0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,d=0,f=c.length;d<f;d++){var y=c[d];if(y.ownerNode===u)return y}throw Ka(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},a}(),Lv=function(){function a(s){this.element=m0(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),Uv=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),op=Ks,Hv={isServer:!Ks,useCSSOMInjection:!pv},Xs=function(){function a(s,u,c){s===void 0&&(s=Qr),u===void 0&&(u={});var d=this;this.options=rt(rt({},Hv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&Ks&&op&&(op=!1,sp(this)),Od(this,function(){return function(f){for(var y=f.getTag(),v=y.length,m="",h=function(S){var w=function(G){return Zs.get(G)}(S);if(w===void 0)return"continue";var C=f.names.get(w),j=y.getGroup(S);if(C===void 0||!C.size||j.length===0)return"continue";var O="".concat(Kr,".g").concat(S,'[id="').concat(w,'"]'),L="";C!==void 0&&C.forEach(function(G){G.length>0&&(L+="".concat(G,","))}),m+="".concat(j).concat(O,'{content:"').concat(L,'"}').concat(Md)},p=0;p<v;p++)h(p);return m}(d)})}return a.registerId=function(s){return zs(s)},a.prototype.rehydrate=function(){!this.server&&Ks&&sp(this)},a.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new a(rt(rt({},this.options),s),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,d=u.target;return u.isServer?new Uv(d):c?new Nv(d):new Lv(d)}(this.options),new Tv(s)));var s},a.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},a.prototype.registerName=function(s,u){if(zs(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},a.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(zs(s),c)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(zs(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),Gv=/&/g,Vv=/^\s*\/\/.*$/gm;function g0(a,s){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=g0(u.children,s)),u})}function Yv(a){var s,u,c,d=Qr,f=d.options,y=f===void 0?Qr:f,v=d.plugins,m=v===void 0?io:v,h=function(w,C,j){return j.startsWith(u)&&j.endsWith(u)&&j.replaceAll(u,"").length>0?".".concat(s):w},p=m.slice();p.push(function(w){w.type===eo&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Gv,u).replace(c,h))}),y.prefix&&p.push(mv),p.push(dv);var S=function(w,C,j,O){C===void 0&&(C=""),j===void 0&&(j=""),O===void 0&&(O="&"),s=O,u=C,c=new RegExp("\\".concat(u,"\\b"),"g");var L=w.replace(Vv,""),G=cv(j||C?"".concat(j," ").concat(C," { ").concat(L," }"):L);y.namespace&&(G=g0(G,y.namespace));var X=[];return qs(G,fv(p.concat(hv(function(k){return X.push(k)})))),X};return S.hash=m.length?m.reduce(function(w,C){return C.name||Ka(15),Hr(w,C.name)},o0).toString():"",S}var qv=new Xs,pd=Yv(),p0=Ee.createContext({shouldForwardProp:void 0,styleSheet:qv,stylis:pd});p0.Consumer;Ee.createContext(void 0);function bd(){return T.useContext(p0)}var b0=function(){function a(s,u){var c=this;this.inject=function(d,f){f===void 0&&(f=pd);var y=c.name+f.hash;d.hasNameForId(c.id,y)||d.insertRules(c.id,y,f(c.rules,y,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,Od(this,function(){throw Ka(12,String(c.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=pd),this.name+s.hash},a}(),Kv=function(a){return a>="A"&&a<="Z"};function cp(a){for(var s="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;Kv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var x0=function(a){return a==null||a===!1||a===""},y0=function(a){var s,u,c=[];for(var d in a){var f=a[d];a.hasOwnProperty(d)&&!x0(f)&&(Array.isArray(f)&&f.isCss||qa(f)?c.push("".concat(cp(d),":"),f,";"):rl(f)?c.push.apply(c,Vr(Vr(["".concat(d," {")],y0(f),!1),["}"],!1)):c.push("".concat(cp(d),": ").concat((s=d,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in gv||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function xa(a,s,u,c){if(x0(a))return[];if(Bd(a))return[".".concat(a.styledComponentId)];if(qa(a)){if(!qa(f=a)||f.prototype&&f.prototype.isReactComponent||!s)return[a];var d=a(s);return xa(d,s,u,c)}var f;return a instanceof b0?u?(a.inject(u,c),[a.getName(c)]):[a]:rl(a)?y0(a):Array.isArray(a)?Array.prototype.concat.apply(io,a.map(function(y){return xa(y,s,u,c)})):[a.toString()]}function v0(a){for(var s=0;s<a.length;s+=1){var u=a[s];if(qa(u)&&!Bd(u))return!1}return!0}var Qv=c0(ro),Zv=function(){function a(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&v0(s),this.componentId=u,this.baseHash=Hr(Qv,u),this.baseStyle=c,Xs.registerId(u)}return a.prototype.generateAndInjectStyles=function(s,u,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=Va(d,this.staticRulesId);else{var f=Qs(xa(this.rules,s,u,c)),y=md(Hr(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,y)){var v=c(f,".".concat(y),void 0,this.componentId);u.insertRules(this.componentId,y,v)}d=Va(d,y),this.staticRulesId=y}else{for(var m=Hr(this.baseHash,c.hash),h="",p=0;p<this.rules.length;p++){var S=this.rules[p];if(typeof S=="string")h+=S;else if(S){var w=Qs(xa(S,s,u,c));m=Hr(m,w+p),h+=w}}if(h){var C=md(m>>>0);u.hasNameForId(this.componentId,C)||u.insertRules(this.componentId,C,c(h,".".concat(C),void 0,this.componentId)),d=Va(d,C)}}return d},a}(),il=Ee.createContext(void 0);il.Consumer;function Xv(a){var s=Ee.useContext(il),u=T.useMemo(function(){return function(c,d){if(!c)throw Ka(14);if(qa(c)){var f=c(d);return f}if(Array.isArray(c)||typeof c!="object")throw Ka(8);return d?rt(rt({},d),c):c}(a.theme,s)},[a.theme,s]);return a.children?Ee.createElement(il.Provider,{value:u},a.children):null}var Mu={};function Fv(a,s,u){var c=Bd(a),d=a,f=!Ru(a),y=s.attrs,v=y===void 0?io:y,m=s.componentId,h=m===void 0?function(Y,U){var I=typeof Y!="string"?"sc":np(Y);Mu[I]=(Mu[I]||0)+1;var N="".concat(I,"-").concat(Dd(ro+I+Mu[I]));return U?"".concat(U,"-").concat(N):N}(s.displayName,s.parentComponentId):m,p=s.displayName,S=p===void 0?function(Y){return Ru(Y)?"styled.".concat(Y):"Styled(".concat(Sv(Y),")")}(a):p,w=s.displayName&&s.componentId?"".concat(np(s.displayName),"-").concat(s.componentId):s.componentId||h,C=c&&d.attrs?d.attrs.concat(v).filter(Boolean):v,j=s.shouldForwardProp;if(c&&d.shouldForwardProp){var O=d.shouldForwardProp;if(s.shouldForwardProp){var L=s.shouldForwardProp;j=function(Y,U){return O(Y,U)&&L(Y,U)}}else j=O}var G=new Zv(u,w,c?d.componentStyle:void 0);function X(Y,U){return function(I,N,Z){var ae=I.attrs,Ce=I.componentStyle,ve=I.defaultProps,Ue=I.foldedComponentIds,Ht=I.styledComponentId,it=I.target,Ae=Ee.useContext(il),H=bd(),F=I.shouldForwardProp||H.shouldForwardProp,re=l0(N,Ae,ve)||Qr,ue=function(me,le,We){for(var je,ut=rt(rt({},le),{className:void 0,theme:We}),ja=0;ja<me.length;ja+=1){var jn=qa(je=me[ja])?je(ut):je;for(var Gt in jn)ut[Gt]=Gt==="className"?Va(ut[Gt],jn[Gt]):Gt==="style"?rt(rt({},ut[Gt]),jn[Gt]):jn[Gt]}return le.className&&(ut.className=Va(ut.className,le.className)),ut}(ae,N,re),z=ue.as||it,Q={};for(var P in ue)ue[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&ue.theme===re||(P==="forwardedAs"?Q.as=ue.forwardedAs:F&&!F(P,z)||(Q[P]=ue[P]));var W=function(me,le){var We=bd(),je=me.generateAndInjectStyles(le,We.styleSheet,We.stylis);return je}(Ce,ue),te=Va(Ue,Ht);return W&&(te+=" "+W),ue.className&&(te+=" "+ue.className),Q[Ru(z)&&!s0.has(z)?"class":"className"]=te,Z&&(Q.ref=Z),T.createElement(z,Q)}(k,Y,U)}X.displayName=S;var k=Ee.forwardRef(X);return k.attrs=C,k.componentStyle=G,k.displayName=S,k.shouldForwardProp=j,k.foldedComponentIds=c?Va(d.foldedComponentIds,d.styledComponentId):"",k.styledComponentId=w,k.target=c?d.target:a,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Y){this._foldedDefaultProps=c?function(U){for(var I=[],N=1;N<arguments.length;N++)I[N-1]=arguments[N];for(var Z=0,ae=I;Z<ae.length;Z++)gd(U,ae[Z],!0);return U}({},d.defaultProps,Y):Y}}),Od(k,function(){return".".concat(k.styledComponentId)}),f&&h0(k,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function up(a,s){for(var u=[a[0]],c=0,d=s.length;c<d;c+=1)u.push(s[c],a[c+1]);return u}var dp=function(a){return Object.assign(a,{isCss:!0})};function It(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(qa(a)||rl(a))return dp(xa(up(io,Vr([a],s,!0))));var c=a;return s.length===0&&c.length===1&&typeof c[0]=="string"?xa(c):dp(xa(up(c,s)))}function xd(a,s,u){if(u===void 0&&(u=Qr),!s)throw Ka(1,s);var c=function(d){for(var f=[],y=1;y<arguments.length;y++)f[y-1]=arguments[y];return a(s,u,It.apply(void 0,Vr([d],f,!1)))};return c.attrs=function(d){return xd(a,s,rt(rt({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return xd(a,s,rt(rt({},u),d))},c}var S0=function(a){return xd(Fv,a)},b=S0;s0.forEach(function(a){b[a]=S0(a)});var Pv=function(){function a(s,u){this.rules=s,this.componentId=u,this.isStatic=v0(s),Xs.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,u,c,d){var f=d(Qs(xa(this.rules,u,c,d)),""),y=this.componentId+s;c.insertRules(y,y,f)},a.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,u,c,d){s>2&&Xs.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,d)},a}();function j0(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=It.apply(void 0,Vr([a],s,!1)),d="sc-global-".concat(Dd(JSON.stringify(c))),f=new Pv(c,d),y=function(m){var h=bd(),p=Ee.useContext(il),S=Ee.useRef(h.styleSheet.allocateGSInstance(d)).current;return h.styleSheet.server&&v(S,m,h.styleSheet,p,h.stylis),Ee.useLayoutEffect(function(){if(!h.styleSheet.server)return v(S,m,h.styleSheet,p,h.stylis),function(){return f.removeStyles(S,h.styleSheet)}},[S,m,h.styleSheet,p,h.stylis]),null};function v(m,h,p,S,w){if(f.isStatic)f.renderStyles(m,bv,p,w);else{var C=rt(rt({},h),{theme:l0(h,S,y.defaultProps)});f.renderStyles(m,C,p,w)}}return Ee.memo(y)}function $d(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Qs(It.apply(void 0,Vr([a],s,!1))),d=Dd(c);return new b0(d,c)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fp="popstate";function Wv(a={}){function s(c,d){let{pathname:f,search:y,hash:v}=c.location;return yd("",{pathname:f,search:y,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:ll(d)}return Jv(s,u,null,a)}function Ne(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function en(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Iv(){return Math.random().toString(36).substring(2,10)}function hp(a,s){return{usr:a.state,key:a.key,idx:s}}function yd(a,s,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Fr(s):s,state:u,key:s&&s.key||c||Iv()}}function ll({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Fr(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function Jv(a,s,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,y=d.history,v="POP",m=null,h=p();h==null&&(h=0,y.replaceState({...y.state,idx:h},""));function p(){return(y.state||{idx:null}).idx}function S(){v="POP";let L=p(),G=L==null?null:L-h;h=L,m&&m({action:v,location:O.location,delta:G})}function w(L,G){v="PUSH";let X=yd(O.location,L,G);h=p()+1;let k=hp(X,h),Y=O.createHref(X);try{y.pushState(k,"",Y)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;d.location.assign(Y)}f&&m&&m({action:v,location:O.location,delta:1})}function C(L,G){v="REPLACE";let X=yd(O.location,L,G);h=p();let k=hp(X,h),Y=O.createHref(X);y.replaceState(k,"",Y),f&&m&&m({action:v,location:O.location,delta:0})}function j(L){return e2(L)}let O={get action(){return v},get location(){return a(d,y)},listen(L){if(m)throw new Error("A history only accepts one active listener");return d.addEventListener(fp,S),m=L,()=>{d.removeEventListener(fp,S),m=null}},createHref(L){return s(d,L)},createURL:j,encodeLocation(L){let G=j(L);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:w,replace:C,go(L){return y.go(L)}};return O}function e2(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:ll(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function w0(a,s,u="/"){return t2(a,s,u,!1)}function t2(a,s,u,c){let d=typeof s=="string"?Fr(s):s,f=Yn(d.pathname||"/",u);if(f==null)return null;let y=E0(a);n2(y);let v=null;for(let m=0;v==null&&m<y.length;++m){let h=h2(f);v=d2(y[m],h,c)}return v}function E0(a,s=[],u=[],c=""){let d=(f,y,v)=>{let m={relativePath:v===void 0?f.path||"":v,caseSensitive:f.caseSensitive===!0,childrenIndex:y,route:f};m.relativePath.startsWith("/")&&(Ne(m.relativePath.startsWith(c),`Absolute route path "${m.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(c.length));let h=Gn([c,m.relativePath]),p=u.concat(m);f.children&&f.children.length>0&&(Ne(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),E0(f.children,s,p,h)),!(f.path==null&&!f.index)&&s.push({path:h,score:c2(h,f.index),routesMeta:p})};return a.forEach((f,y)=>{if(f.path===""||!f.path?.includes("?"))d(f,y);else for(let v of _0(f.path))d(f,y,v)}),s}function _0(a){let s=a.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let y=_0(c.join("/")),v=[];return v.push(...y.map(m=>m===""?f:[f,m].join("/"))),d&&v.push(...y),v.map(m=>a.startsWith("/")&&m===""?"/":m)}function n2(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:u2(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var a2=/^:[\w-]+$/,r2=3,i2=2,l2=1,s2=10,o2=-2,mp=a=>a==="*";function c2(a,s){let u=a.split("/"),c=u.length;return u.some(mp)&&(c+=o2),s&&(c+=i2),u.filter(d=>!mp(d)).reduce((d,f)=>d+(a2.test(f)?r2:f===""?l2:s2),c)}function u2(a,s){return a.length===s.length&&a.slice(0,-1).every((c,d)=>c===s[d])?a[a.length-1]-s[s.length-1]:0}function d2(a,s,u=!1){let{routesMeta:c}=a,d={},f="/",y=[];for(let v=0;v<c.length;++v){let m=c[v],h=v===c.length-1,p=f==="/"?s:s.slice(f.length)||"/",S=Fs({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},p),w=m.route;if(!S&&h&&u&&!c[c.length-1].route.index&&(S=Fs({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},p)),!S)return null;Object.assign(d,S.params),y.push({params:d,pathname:Gn([f,S.pathname]),pathnameBase:b2(Gn([f,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(f=Gn([f,S.pathnameBase]))}return y}function Fs(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=f2(a.path,a.caseSensitive,a.end),d=s.match(u);if(!d)return null;let f=d[0],y=f.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:c.reduce((h,{paramName:p,isOptional:S},w)=>{if(p==="*"){let j=v[w]||"";y=f.slice(0,f.length-j.length).replace(/(.)\/+$/,"$1")}const C=v[w];return S&&!C?h[p]=void 0:h[p]=(C||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:y,pattern:a}}function f2(a,s=!1,u=!0){en(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,v,m)=>(c.push({paramName:v,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function h2(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return en(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Yn(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function m2(a,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof a=="string"?Fr(a):a;return{pathname:u?u.startsWith("/")?u:g2(u,s):s,search:x2(c),hash:y2(d)}}function g2(a,s){let u=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Du(a,s,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function p2(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Nd(a){let s=p2(a);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Ld(a,s,u,c=!1){let d;typeof a=="string"?d=Fr(a):(d={...a},Ne(!d.pathname||!d.pathname.includes("?"),Du("?","pathname","search",d)),Ne(!d.pathname||!d.pathname.includes("#"),Du("#","pathname","hash",d)),Ne(!d.search||!d.search.includes("#"),Du("#","search","hash",d)));let f=a===""||d.pathname==="",y=f?"/":d.pathname,v;if(y==null)v=u;else{let S=s.length-1;if(!c&&y.startsWith("..")){let w=y.split("/");for(;w[0]==="..";)w.shift(),S-=1;d.pathname=w.join("/")}v=S>=0?s[S]:"/"}let m=m2(d,v),h=y&&y!=="/"&&y.endsWith("/"),p=(f||y===".")&&u.endsWith("/");return!m.pathname.endsWith("/")&&(h||p)&&(m.pathname+="/"),m}var Gn=a=>a.join("/").replace(/\/\/+/g,"/"),b2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),x2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,y2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function v2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var z0=["POST","PUT","PATCH","DELETE"];new Set(z0);var S2=["GET",...z0];new Set(S2);var Pr=T.createContext(null);Pr.displayName="DataRouter";var lo=T.createContext(null);lo.displayName="DataRouterState";T.createContext(!1);var C0=T.createContext({isTransitioning:!1});C0.displayName="ViewTransition";var j2=T.createContext(new Map);j2.displayName="Fetchers";var w2=T.createContext(null);w2.displayName="Await";var dn=T.createContext(null);dn.displayName="Navigation";var sl=T.createContext(null);sl.displayName="Location";var Sn=T.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var Ud=T.createContext(null);Ud.displayName="RouteError";function E2(a,{relative:s}={}){Ne(Wr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=T.useContext(dn),{hash:d,pathname:f,search:y}=ol(a,{relative:s}),v=f;return u!=="/"&&(v=f==="/"?u:Gn([u,f])),c.createHref({pathname:v,search:y,hash:d})}function Wr(){return T.useContext(sl)!=null}function fn(){return Ne(Wr(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(sl).location}var A0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k0(a){T.useContext(dn).static||T.useLayoutEffect(a)}function Hd(){let{isDataRoute:a}=T.useContext(Sn);return a?N2():_2()}function _2(){Ne(Wr(),"useNavigate() may be used only in the context of a <Router> component.");let a=T.useContext(Pr),{basename:s,navigator:u}=T.useContext(dn),{matches:c}=T.useContext(Sn),{pathname:d}=fn(),f=JSON.stringify(Nd(c)),y=T.useRef(!1);return k0(()=>{y.current=!0}),T.useCallback((m,h={})=>{if(en(y.current,A0),!y.current)return;if(typeof m=="number"){u.go(m);return}let p=Ld(m,JSON.parse(f),d,h.relative==="path");a==null&&s!=="/"&&(p.pathname=p.pathname==="/"?s:Gn([s,p.pathname])),(h.replace?u.replace:u.push)(p,h.state,h)},[s,u,f,d,a])}T.createContext(null);function ol(a,{relative:s}={}){let{matches:u}=T.useContext(Sn),{pathname:c}=fn(),d=JSON.stringify(Nd(u));return T.useMemo(()=>Ld(a,JSON.parse(d),c,s==="path"),[a,d,c,s])}function z2(a,s){return T0(a,s)}function T0(a,s,u,c){Ne(Wr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=T.useContext(dn),{matches:f}=T.useContext(Sn),y=f[f.length-1],v=y?y.params:{},m=y?y.pathname:"/",h=y?y.pathnameBase:"/",p=y&&y.route;{let G=p&&p.path||"";R0(m,!p||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let S=fn(),w;if(s){let G=typeof s=="string"?Fr(s):s;Ne(h==="/"||G.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${G.pathname}" was given in the \`location\` prop.`),w=G}else w=S;let C=w.pathname||"/",j=C;if(h!=="/"){let G=h.replace(/^\//,"").split("/");j="/"+C.replace(/^\//,"").split("/").slice(G.length).join("/")}let O=w0(a,{pathname:j});en(p||O!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),en(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=R2(O&&O.map(G=>Object.assign({},G,{params:Object.assign({},v,G.params),pathname:Gn([h,d.encodeLocation?d.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?h:Gn([h,d.encodeLocation?d.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),f,u,c);return s&&L?T.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},L):L}function C2(){let a=$2(),s=v2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",a),y=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:f},"ErrorBoundary")," or"," ",T.createElement("code",{style:f},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},s),u?T.createElement("pre",{style:d},u):null,y)}var A2=T.createElement(C2,null),k2=class extends T.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?T.createElement(Sn.Provider,{value:this.props.routeContext},T.createElement(Ud.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function T2({routeContext:a,match:s,children:u}){let c=T.useContext(Pr);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),T.createElement(Sn.Provider,{value:a},u)}function R2(a,s=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let d=a,f=u?.errors;if(f!=null){let m=d.findIndex(h=>h.route.id&&f?.[h.route.id]!==void 0);Ne(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,v=-1;if(u)for(let m=0;m<d.length;m++){let h=d[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(v=m),h.route.id){let{loaderData:p,errors:S}=u,w=h.route.loader&&!p.hasOwnProperty(h.route.id)&&(!S||S[h.route.id]===void 0);if(h.route.lazy||w){y=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}return d.reduceRight((m,h,p)=>{let S,w=!1,C=null,j=null;u&&(S=f&&h.route.id?f[h.route.id]:void 0,C=h.route.errorElement||A2,y&&(v<0&&p===0?(R0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,j=null):v===p&&(w=!0,j=h.route.hydrateFallbackElement||null)));let O=s.concat(d.slice(0,p+1)),L=()=>{let G;return S?G=C:w?G=j:h.route.Component?G=T.createElement(h.route.Component,null):h.route.element?G=h.route.element:G=m,T.createElement(T2,{match:h,routeContext:{outlet:m,matches:O,isDataRoute:u!=null},children:G})};return u&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?T.createElement(k2,{location:u.location,revalidation:u.revalidation,component:C,error:S,children:L(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):L()},null)}function Gd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function M2(a){let s=T.useContext(Pr);return Ne(s,Gd(a)),s}function D2(a){let s=T.useContext(lo);return Ne(s,Gd(a)),s}function B2(a){let s=T.useContext(Sn);return Ne(s,Gd(a)),s}function Vd(a){let s=B2(a),u=s.matches[s.matches.length-1];return Ne(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function O2(){return Vd("useRouteId")}function $2(){let a=T.useContext(Ud),s=D2("useRouteError"),u=Vd("useRouteError");return a!==void 0?a:s.errors?.[u]}function N2(){let{router:a}=M2("useNavigate"),s=Vd("useNavigate"),u=T.useRef(!1);return k0(()=>{u.current=!0}),T.useCallback(async(d,f={})=>{en(u.current,A0),u.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:s,...f}))},[a,s])}var gp={};function R0(a,s,u){!s&&!gp[a]&&(gp[a]=!0,en(!1,u))}T.memo(L2);function L2({routes:a,future:s,state:u}){return T0(a,void 0,u,s)}function Gs({to:a,replace:s,state:u,relative:c}){Ne(Wr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=T.useContext(dn);en(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=T.useContext(Sn),{pathname:y}=fn(),v=Hd(),m=Ld(a,Nd(f),y,c==="path"),h=JSON.stringify(m);return T.useEffect(()=>{v(JSON.parse(h),{replace:s,state:u,relative:c})},[v,h,c,s,u]),null}function Wt(a){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function U2({basename:a="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){Ne(!Wr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=a.replace(/^\/*/,"/"),v=T.useMemo(()=>({basename:y,navigator:d,static:f,future:{}}),[y,d,f]);typeof u=="string"&&(u=Fr(u));let{pathname:m="/",search:h="",hash:p="",state:S=null,key:w="default"}=u,C=T.useMemo(()=>{let j=Yn(m,y);return j==null?null:{location:{pathname:j,search:h,hash:p,state:S,key:w},navigationType:c}},[y,m,h,p,S,w,c]);return en(C!=null,`<Router basename="${y}"> is not able to match the URL "${m}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:T.createElement(dn.Provider,{value:v},T.createElement(sl.Provider,{children:s,value:C}))}function H2({children:a,location:s}){return z2(vd(a),s)}function vd(a,s=[]){let u=[];return T.Children.forEach(a,(c,d)=>{if(!T.isValidElement(c))return;let f=[...s,d];if(c.type===T.Fragment){u.push.apply(u,vd(c.props.children,f));return}Ne(c.type===Wt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=vd(c.props.children,f)),u.push(y)}),u}var Vs="get",Ys="application/x-www-form-urlencoded";function so(a){return a!=null&&typeof a.tagName=="string"}function G2(a){return so(a)&&a.tagName.toLowerCase()==="button"}function V2(a){return so(a)&&a.tagName.toLowerCase()==="form"}function Y2(a){return so(a)&&a.tagName.toLowerCase()==="input"}function q2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function K2(a,s){return a.button===0&&(!s||s==="_self")&&!q2(a)}function Sd(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let c=a[u];return s.concat(Array.isArray(c)?c.map(d=>[u,d]):[[u,c]])},[]))}function Q2(a,s){let u=Sd(a);return s&&s.forEach((c,d)=>{u.has(d)||s.getAll(d).forEach(f=>{u.append(d,f)})}),u}var Cs=null;function Z2(){if(Cs===null)try{new FormData(document.createElement("form"),0),Cs=!1}catch{Cs=!0}return Cs}var X2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bu(a){return a!=null&&!X2.has(a)?(en(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ys}"`),null):a}function F2(a,s){let u,c,d,f,y;if(V2(a)){let v=a.getAttribute("action");c=v?Yn(v,s):null,u=a.getAttribute("method")||Vs,d=Bu(a.getAttribute("enctype"))||Ys,f=new FormData(a)}else if(G2(a)||Y2(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||v.getAttribute("action");if(c=m?Yn(m,s):null,u=a.getAttribute("formmethod")||v.getAttribute("method")||Vs,d=Bu(a.getAttribute("formenctype"))||Bu(v.getAttribute("enctype"))||Ys,f=new FormData(v,a),!Z2()){let{name:h,type:p,value:S}=a;if(p==="image"){let w=h?`${h}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else h&&f.append(h,S)}}else{if(so(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Vs,c=null,d=Ys,y=a}return f&&d==="text/plain"&&(y=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yd(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function P2(a,s,u){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Yn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function W2(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function I2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function J2(a,s,u){let c=await Promise.all(a.map(async d=>{let f=s.routes[d.route.id];if(f){let y=await W2(f,u);return y.links?y.links():[]}return[]}));return a5(c.flat(1).filter(I2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function pp(a,s,u,c,d,f){let y=(m,h)=>u[h]?m.route.id!==u[h].route.id:!0,v=(m,h)=>u[h].pathname!==m.pathname||u[h].route.path?.endsWith("*")&&u[h].params["*"]!==m.params["*"];return f==="assets"?s.filter((m,h)=>y(m,h)||v(m,h)):f==="data"?s.filter((m,h)=>{let p=c.routes[m.route.id];if(!p||!p.hasLoader)return!1;if(y(m,h)||v(m,h))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function e5(a,s,{includeHydrateFallback:u}={}){return t5(a.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function t5(a){return[...new Set(a)]}function n5(a){let s={},u=Object.keys(a).sort();for(let c of u)s[c]=a[c];return s}function a5(a,s){let u=new Set;return new Set(s),a.reduce((c,d)=>{let f=JSON.stringify(n5(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}function M0(){let a=T.useContext(Pr);return Yd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function r5(){let a=T.useContext(lo);return Yd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var qd=T.createContext(void 0);qd.displayName="FrameworkContext";function D0(){let a=T.useContext(qd);return Yd(a,"You must render this element inside a <HydratedRouter> element"),a}function i5(a,s){let u=T.useContext(qd),[c,d]=T.useState(!1),[f,y]=T.useState(!1),{onFocus:v,onBlur:m,onMouseEnter:h,onMouseLeave:p,onTouchStart:S}=s,w=T.useRef(null);T.useEffect(()=>{if(a==="render"&&y(!0),a==="viewport"){let O=G=>{G.forEach(X=>{y(X.isIntersecting)})},L=new IntersectionObserver(O,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[a]),T.useEffect(()=>{if(c){let O=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(O)}}},[c]);let C=()=>{d(!0)},j=()=>{d(!1),y(!1)};return u?a!=="intent"?[f,w,{}]:[f,w,{onFocus:Ii(v,C),onBlur:Ii(m,j),onMouseEnter:Ii(h,C),onMouseLeave:Ii(p,j),onTouchStart:Ii(S,C)}]:[!1,w,{}]}function Ii(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function l5({page:a,...s}){let{router:u}=M0(),c=T.useMemo(()=>w0(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?T.createElement(o5,{page:a,matches:c,...s}):null}function s5(a){let{manifest:s,routeModules:u}=D0(),[c,d]=T.useState([]);return T.useEffect(()=>{let f=!1;return J2(a,s,u).then(y=>{f||d(y)}),()=>{f=!0}},[a,s,u]),c}function o5({page:a,matches:s,...u}){let c=fn(),{manifest:d,routeModules:f}=D0(),{basename:y}=M0(),{loaderData:v,matches:m}=r5(),h=T.useMemo(()=>pp(a,s,m,d,c,"data"),[a,s,m,d,c]),p=T.useMemo(()=>pp(a,s,m,d,c,"assets"),[a,s,m,d,c]),S=T.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let j=new Set,O=!1;if(s.forEach(G=>{let X=d.routes[G.route.id];!X||!X.hasLoader||(!h.some(k=>k.route.id===G.route.id)&&G.route.id in v&&f[G.route.id]?.shouldRevalidate||X.hasClientLoader?O=!0:j.add(G.route.id))}),j.size===0)return[];let L=P2(a,y,"data");return O&&j.size>0&&L.searchParams.set("_routes",s.filter(G=>j.has(G.route.id)).map(G=>G.route.id).join(",")),[L.pathname+L.search]},[y,v,c,d,h,s,a,f]),w=T.useMemo(()=>e5(p,d),[p,d]),C=s5(p);return T.createElement(T.Fragment,null,S.map(j=>T.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...u})),w.map(j=>T.createElement("link",{key:j,rel:"modulepreload",href:j,...u})),C.map(({key:j,link:O})=>T.createElement("link",{key:j,...O})))}function c5(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var B0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{B0&&(window.__reactRouterVersion="7.7.1")}catch{}function u5({basename:a,children:s,window:u}){let c=T.useRef();c.current==null&&(c.current=Wv({window:u,v5Compat:!0}));let d=c.current,[f,y]=T.useState({action:d.action,location:d.location}),v=T.useCallback(m=>{T.startTransition(()=>y(m))},[y]);return T.useLayoutEffect(()=>d.listen(v),[d,v]),T.createElement(U2,{basename:a,children:s,location:f.location,navigationType:f.action,navigator:d})}var O0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,va=T.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:y,state:v,target:m,to:h,preventScrollReset:p,viewTransition:S,...w},C){let{basename:j}=T.useContext(dn),O=typeof h=="string"&&O0.test(h),L,G=!1;if(typeof h=="string"&&O&&(L=h,B0))try{let ae=new URL(window.location.href),Ce=h.startsWith("//")?new URL(ae.protocol+h):new URL(h),ve=Yn(Ce.pathname,j);Ce.origin===ae.origin&&ve!=null?h=ve+Ce.search+Ce.hash:G=!0}catch{en(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=E2(h,{relative:d}),[k,Y,U]=i5(c,w),I=m5(h,{replace:y,state:v,target:m,preventScrollReset:p,relative:d,viewTransition:S});function N(ae){s&&s(ae),ae.defaultPrevented||I(ae)}let Z=T.createElement("a",{...w,...U,href:L||X,onClick:G||f?s:N,ref:c5(C,Y),target:m,"data-discover":!O&&u==="render"?"true":void 0});return k&&!O?T.createElement(T.Fragment,null,Z,T.createElement(l5,{page:X})):Z});va.displayName="Link";var d5=T.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:y,viewTransition:v,children:m,...h},p){let S=ol(y,{relative:h.relative}),w=fn(),C=T.useContext(lo),{navigator:j,basename:O}=T.useContext(dn),L=C!=null&&y5(S)&&v===!0,G=j.encodeLocation?j.encodeLocation(S).pathname:S.pathname,X=w.pathname,k=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;u||(X=X.toLowerCase(),k=k?k.toLowerCase():null,G=G.toLowerCase()),k&&O&&(k=Yn(k,O)||k);const Y=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let U=X===G||!d&&X.startsWith(G)&&X.charAt(Y)==="/",I=k!=null&&(k===G||!d&&k.startsWith(G)&&k.charAt(G.length)==="/"),N={isActive:U,isPending:I,isTransitioning:L},Z=U?s:void 0,ae;typeof c=="function"?ae=c(N):ae=[c,U?"active":null,I?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof f=="function"?f(N):f;return T.createElement(va,{...h,"aria-current":Z,className:ae,ref:p,style:Ce,to:y,viewTransition:v},typeof m=="function"?m(N):m)});d5.displayName="NavLink";var f5=T.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:f,method:y=Vs,action:v,onSubmit:m,relative:h,preventScrollReset:p,viewTransition:S,...w},C)=>{let j=b5(),O=x5(v,{relative:h}),L=y.toLowerCase()==="get"?"get":"post",G=typeof v=="string"&&O0.test(v),X=k=>{if(m&&m(k),k.defaultPrevented)return;k.preventDefault();let Y=k.nativeEvent.submitter,U=Y?.getAttribute("formmethod")||y;j(Y||k.currentTarget,{fetcherKey:s,method:U,navigate:u,replace:d,state:f,relative:h,preventScrollReset:p,viewTransition:S})};return T.createElement("form",{ref:C,method:L,action:O,onSubmit:c?m:X,...w,"data-discover":!G&&a==="render"?"true":void 0})});f5.displayName="Form";function h5(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $0(a){let s=T.useContext(Pr);return Ne(s,h5(a)),s}function m5(a,{target:s,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:y}={}){let v=Hd(),m=fn(),h=ol(a,{relative:f});return T.useCallback(p=>{if(K2(p,s)){p.preventDefault();let S=u!==void 0?u:ll(m)===ll(h);v(a,{replace:S,state:c,preventScrollReset:d,relative:f,viewTransition:y})}},[m,v,h,u,c,s,a,d,f,y])}function N0(a){en(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=T.useRef(Sd(a)),u=T.useRef(!1),c=fn(),d=T.useMemo(()=>Q2(c.search,u.current?null:s.current),[c.search]),f=Hd(),y=T.useCallback((v,m)=>{const h=Sd(typeof v=="function"?v(new URLSearchParams(d)):v);u.current=!0,f("?"+h,m)},[f,d]);return[d,y]}var g5=0,p5=()=>`__${String(++g5)}__`;function b5(){let{router:a}=$0("useSubmit"),{basename:s}=T.useContext(dn),u=O2();return T.useCallback(async(c,d={})=>{let{action:f,method:y,encType:v,formData:m,body:h}=F2(c,s);if(d.navigate===!1){let p=d.fetcherKey||p5();await a.fetch(p,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:m,body:h,formMethod:d.method||y,formEncType:d.encType||v,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:m,body:h,formMethod:d.method||y,formEncType:d.encType||v,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,s,u])}function x5(a,{relative:s}={}){let{basename:u}=T.useContext(dn),c=T.useContext(Sn);Ne(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...ol(a||".",{relative:s})},y=fn();if(a==null){f.search=y.search;let v=new URLSearchParams(f.search),m=v.getAll("index");if(m.some(p=>p==="")){v.delete("index"),m.filter(S=>S).forEach(S=>v.append("index",S));let p=v.toString();f.search=p?`?${p}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Gn([u,f.pathname])),ll(f)}function y5(a,{relative:s}={}){let u=T.useContext(C0);Ne(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=$0("useViewTransitionState"),d=ol(a,{relative:s});if(!u.isTransitioning)return!1;let f=Yn(u.currentLocation.pathname,c)||u.currentLocation.pathname,y=Yn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Fs(d.pathname,y)!=null||Fs(d.pathname,f)!=null}const L0="/assets/logo-BY-LKRi7.png",cl={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}},_={navy:"#10223f",navyDeep:"#0a1830",navySoft:"#1b3358",red:"#cd004e",redDark:"#a8003f",blue:"#0864c8",paper:"#f4f7fc",line:"#dce4ef",ink:"#10223f",muted:"#586c86",fontDisplay:'"Barlow Condensed", "Arial Narrow", Arial, sans-serif',fontBody:"Barlow, Arial, Helvetica, sans-serif"},v5=b.a`
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
`,S5=b.nav`
  background: #fff;
  border-bottom: 1px solid ${_.line};
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: ${_.fontBody};
  text-align: left;
`,j5=b.div`
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
`,w5=b(va)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  border-radius: 8px;
`,E5=b.img`
  height: 44px;
  width: 44px;
  object-fit: contain;
`,_5=b.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`,z5=b.span`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: ${_.navy};
  white-space: nowrap;
`,C5=b.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${_.muted};

  @media (max-width: 380px) {
    display: none;
  }
`,A5=b.div`
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
`,Ou=b(va)`
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
`,k5=b(va)`
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
`,T5=b.button`
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
`,R5=b.span`
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
`;function U0(){const a=fn(),[s,u]=T.useState(!1),c=!1,d=()=>u(!1);return T.useEffect(()=>{if(!s)return;const f=y=>{y.key==="Escape"&&u(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[s]),i.jsxs(i.Fragment,{children:[i.jsx(v5,{href:"#inhalt",children:"Zum Inhalt springen"}),i.jsx(S5,{"aria-label":"Hauptnavigation",children:i.jsxs(j5,{children:[i.jsxs(w5,{to:"/sponsoring",onClick:d,children:[i.jsx(E5,{src:L0,alt:""}),i.jsxs(_5,{children:[i.jsx(z5,{children:"SC Konstanz-Wollmatingen"}),i.jsx(C5,{children:"Partner & Sponsoring"})]})]}),i.jsx(T5,{"aria-label":s?"Menü schließen":"Menü öffnen","aria-expanded":s,"aria-controls":"hauptmenue",onClick:()=>u(f=>!f),children:i.jsx(R5,{$open:s})}),i.jsxs(A5,{id:"hauptmenue",$open:s,children:[i.jsx(Ou,{to:"/sponsoring",$active:a.pathname==="/sponsoring","aria-current":a.pathname==="/sponsoring"?"page":void 0,onClick:d,children:"Sponsoring"}),i.jsx(Ou,{to:"/sponsoring/club-500",$active:a.pathname==="/sponsoring/club-500","aria-current":a.pathname==="/sponsoring/club-500"?"page":void 0,onClick:d,children:"500er Club"}),i.jsx(Ou,{to:"/sponsoring/ballspende",$active:a.pathname==="/sponsoring/ballspende","aria-current":a.pathname==="/sponsoring/ballspende"?"page":void 0,onClick:d,children:"Ballspende"}),c,i.jsx(k5,{to:"/sponsoring#kontakt",onClick:d,children:"Anfrage stellen"})]})]})})]})}const M5=b.footer`
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
`,D5=b.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }
`,B5=b.div`
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
`,O5=b.div`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0.35rem;
`,bp=b.h2`
  font-family: ${_.fontDisplay};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  margin: 0 0 0.75rem;
`,xp=b.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.4rem;
`,H0=`
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`,As=b.a`
  ${H0}
`,$u=b(va)`
  ${H0}
`,$5=b.div`
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
`;function ul(){return i.jsxs(M5,{children:[i.jsxs(D5,{children:[i.jsxs(B5,{children:[i.jsx("img",{src:L0,alt:""}),i.jsxs("div",{children:[i.jsx(O5,{children:"SC Konstanz-Wollmatingen e.V."}),"Schleyerweg 5, 78467 Konstanz"]})]}),i.jsxs("nav",{"aria-label":"Kontakt",children:[i.jsx(bp,{children:"Sponsoring"}),i.jsxs(xp,{children:[i.jsx("li",{children:i.jsx(As,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})}),i.jsx("li",{children:i.jsx($u,{to:"/sponsoring/club-500",children:"500er Club"})}),i.jsx("li",{children:i.jsx($u,{to:"/sponsoring/ballspende",children:"Ballspende"})}),i.jsx("li",{children:i.jsx(As,{href:"https://www.sckw.de",target:"_blank",rel:"noopener",children:"sckw.de"})})]})]}),i.jsxs("nav",{"aria-label":"Rechtliches",children:[i.jsx(bp,{children:"Rechtliches"}),i.jsxs(xp,{children:[i.jsx("li",{children:i.jsx(As,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})}),i.jsx("li",{children:i.jsx(As,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"})})]})]})]}),i.jsxs($5,{children:[i.jsxs("span",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen e.V."]}),i.jsx($u,{to:"/sponsoring/spielerpatenschaft",children:"Personal Partner"})]})]})}const G0="/assets/cheerleading_0-DQQGXi0R.jpg",V0="/assets/cheerleading_1-NkLBARmH.jpg",Y0="/assets/cheerleading_2-CrezcZYL.jpg",q0="/assets/cheerleading_3-GN5rPHNN.jpg",K0="/assets/1-ClVWb4ei.png",Q0="/assets/10-Bwp2eIye.png",Z0="/assets/11-W061sOUI.png",X0="/assets/12-TjJyzl8L.png",F0="/assets/13-ChUUCdQQ.png",P0="/assets/14-BVhdRr98.png",W0="/assets/2-CcfgIQYe.png",I0="/assets/3-DYiPkVd7.png",J0="/assets/4-1upoqVoS.png",eb="/assets/5-D0tadXAC.png",tb="/assets/6-NJ4ELm_j.png",nb="/assets/7-BXo4_Bcj.png",ab="/assets/8-BbOqEnj_.png",rb="/assets/9-CIK0gi9o.png",ib="/assets/herren_0-BVVgyt1l.jpg",lb="/assets/herren_1-B8ywOnNy.jpg",sb="/assets/herren_10-DPVQsg9B.jpg",ob="/assets/herren_11-wfWG62H3.jpg",cb="/assets/herren_12-DEJSN2zG.jpg",ub="/assets/herren_13-F52vdukE.jpg",db="/assets/herren_14-Cq9hoKfG.jpg",fb="/assets/herren_15-aYIFGauG.jpg",hb="/assets/herren_16-NYI2EaEN.jpg",mb="/assets/herren_17-B_52ysA2.jpg",gb="/assets/herren_18-DbwjVNKJ.jpg",pb="/assets/herren_19-BduD_J85.png",bb="/assets/herren_2--jFuixBF.jpg",xb="/assets/herren_3-BPz1zlkG.jpg",yb="/assets/herren_4-BZRrQaFr.jpg",vb="/assets/herren_5-D-QrfY2P.jpg",Sb="/assets/herren_6-DWQvi6Am.jpg",jb="/assets/herren_7-BXO6B8Bt.jpg",wb="/assets/herren_8-Cg4rdr7T.jpg",Eb="/assets/herren_9-DoLnTdRG.jpg",_b="/assets/herren_club500_1-DNikBmOh.png",zb="/assets/herren_club500_2-CABnv8vs.png",Cb="/assets/herren_club500_3-Cjxe_RiU.png",Ab="/assets/herren_club500_4-Dgm0Z9_i.png",kb="/assets/herren_club500_5-3OeJLCAP.png",Tb="/assets/herren_jubel_500club-mxBrnD8H.png",Rb="/assets/IMG-team-BGcF1agj.png",Mb="/assets/IMG_5349-CpvIVKhM.jpg",Db="/assets/IMG_5369-DQ4CSwdg.jpg",Bb="/assets/IMG_5421-BBzniIEN.jpg",Ob="/assets/IMG_5442-D2PgutWB.jpg",$b="/assets/IMG_5952-B9VW6Qie.jpg",Nb="/assets/Unbenann324t-IPGo6eoQ.png",Lb="/assets/image0-DDrU5aZn.jpeg",Ub="/assets/image11-BNM8hTkT.jpeg",Hb="/assets/image8-BUnedp9U.jpeg",N5="/assets/grafhardenberg-Di5cVggE.png",L5="/assets/horta-DydWIGV7.png",U5="/assets/logans-BgpKwKYA.png",H5="/assets/ricobet-DsVC-eZt.png",G5="/assets/rothaus-DqkKD9yW.png",V5="/assets/tasty-B2pSa1rE.png",Y5="/assets/cabin-window-B83r_CDB.jpg",q5="/assets/outside-9-xz17qL.jpg",K5="/assets/shower-B75caJ-F.jpg",Q5="/assets/sitting-area-D7khB3Gw.jpg",Z5="/assets/toilet-BpMHYbhh.jpg",X5=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":G0,"../assets/gallery/cheerleading/cheerleading_1.jpg":V0,"../assets/gallery/cheerleading/cheerleading_2.jpg":Y0,"../assets/gallery/cheerleading/cheerleading_3.jpg":q0,"../assets/gallery/damen/1.png":K0,"../assets/gallery/damen/10.png":Q0,"../assets/gallery/damen/11.png":Z0,"../assets/gallery/damen/12.png":X0,"../assets/gallery/damen/13.png":F0,"../assets/gallery/damen/14.png":P0,"../assets/gallery/damen/2.png":W0,"../assets/gallery/damen/3.png":I0,"../assets/gallery/damen/4.png":J0,"../assets/gallery/damen/5.png":eb,"../assets/gallery/damen/6.png":tb,"../assets/gallery/damen/7.png":nb,"../assets/gallery/damen/8.png":ab,"../assets/gallery/damen/9.png":rb,"../assets/gallery/herren/herren_0.jpg":ib,"../assets/gallery/herren/herren_1.jpg":lb,"../assets/gallery/herren/herren_10.jpg":sb,"../assets/gallery/herren/herren_11.jpg":ob,"../assets/gallery/herren/herren_12.jpg":cb,"../assets/gallery/herren/herren_13.jpg":ub,"../assets/gallery/herren/herren_14.jpg":db,"../assets/gallery/herren/herren_15.jpg":fb,"../assets/gallery/herren/herren_16.jpg":hb,"../assets/gallery/herren/herren_17.jpg":mb,"../assets/gallery/herren/herren_18.jpg":gb,"../assets/gallery/herren/herren_19.png":pb,"../assets/gallery/herren/herren_2.jpg":bb,"../assets/gallery/herren/herren_3.jpg":xb,"../assets/gallery/herren/herren_4.jpg":yb,"../assets/gallery/herren/herren_5.jpg":vb,"../assets/gallery/herren/herren_6.jpg":Sb,"../assets/gallery/herren/herren_7.jpg":jb,"../assets/gallery/herren/herren_8.jpg":wb,"../assets/gallery/herren/herren_9.jpg":Eb,"../assets/gallery/herren/herren_club500_1.png":_b,"../assets/gallery/herren/herren_club500_2.png":zb,"../assets/gallery/herren/herren_club500_3.png":Cb,"../assets/gallery/herren/herren_club500_4.png":Ab,"../assets/gallery/herren/herren_club500_5.png":kb,"../assets/gallery/herren/herren_jubel_500club.png":Tb,"../assets/gallery/jfv/IMG-team.png":Rb,"../assets/gallery/jfv/IMG_5349.jpg":Mb,"../assets/gallery/jfv/IMG_5369.jpg":Db,"../assets/gallery/jfv/IMG_5421.jpg":Bb,"../assets/gallery/jfv/IMG_5442.jpg":Ob,"../assets/gallery/jfv/IMG_5952.jpg":$b,"../assets/gallery/jfv/Unbenann324t.png":Nb,"../assets/gallery/jfv/image0.jpeg":Lb,"../assets/gallery/jfv/image11.jpeg":Ub,"../assets/gallery/jfv/image8.jpeg":Hb}),F5=Object.assign({"../assets/sponsors/grafhardenberg.png":N5,"../assets/sponsors/horta.png":L5,"../assets/sponsors/logans.png":U5,"../assets/sponsors/ricobet.png":H5,"../assets/sponsors/rothaus.png":G5,"../assets/sponsors/tasty.png":V5}),P5=Object.assign({"../assets/renovation/cabin-window.jpg":Y5,"../assets/renovation/outside.jpg":q5,"../assets/renovation/shower.jpg":K5,"../assets/renovation/sitting-area.jpg":Q5,"../assets/renovation/toilet.jpg":Z5}),Gb=a=>a.split("/").pop()?.toLowerCase()||"",W5=a=>{const s=a.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function I5(a){const s=[...a];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const J5=()=>{const a={};Object.entries(X5).forEach(([c,d])=>{const f=W5(c);a[f]||(a[f]=[]),a[f].push(d)}),Object.keys(a).forEach(c=>{a[c]=I5(a[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{a[c]&&(s[c]=a[c])}),Object.keys(a).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=a[c])}),s},eS=()=>{const a={};return Object.entries(F5).forEach(([s,u])=>{const c=Gb(s);a[c]=u}),a},Vb=()=>{const a={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(P5).forEach(([s,u])=>{const c=Gb(s);c.includes("sitting")?a.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?a.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&a.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?a.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?a.waschkueche.push({src:u,alt:"Dusche"}):a.waschkueche.push({src:u,alt:"Waschküche"}))}),a},ct=a=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":G0,"../assets/gallery/cheerleading/cheerleading_1.jpg":V0,"../assets/gallery/cheerleading/cheerleading_2.jpg":Y0,"../assets/gallery/cheerleading/cheerleading_3.jpg":q0,"../assets/gallery/damen/1.png":K0,"../assets/gallery/damen/10.png":Q0,"../assets/gallery/damen/11.png":Z0,"../assets/gallery/damen/12.png":X0,"../assets/gallery/damen/13.png":F0,"../assets/gallery/damen/14.png":P0,"../assets/gallery/damen/2.png":W0,"../assets/gallery/damen/3.png":I0,"../assets/gallery/damen/4.png":J0,"../assets/gallery/damen/5.png":eb,"../assets/gallery/damen/6.png":tb,"../assets/gallery/damen/7.png":nb,"../assets/gallery/damen/8.png":ab,"../assets/gallery/damen/9.png":rb,"../assets/gallery/herren/herren_0.jpg":ib,"../assets/gallery/herren/herren_1.jpg":lb,"../assets/gallery/herren/herren_10.jpg":sb,"../assets/gallery/herren/herren_11.jpg":ob,"../assets/gallery/herren/herren_12.jpg":cb,"../assets/gallery/herren/herren_13.jpg":ub,"../assets/gallery/herren/herren_14.jpg":db,"../assets/gallery/herren/herren_15.jpg":fb,"../assets/gallery/herren/herren_16.jpg":hb,"../assets/gallery/herren/herren_17.jpg":mb,"../assets/gallery/herren/herren_18.jpg":gb,"../assets/gallery/herren/herren_19.png":pb,"../assets/gallery/herren/herren_2.jpg":bb,"../assets/gallery/herren/herren_3.jpg":xb,"../assets/gallery/herren/herren_4.jpg":yb,"../assets/gallery/herren/herren_5.jpg":vb,"../assets/gallery/herren/herren_6.jpg":Sb,"../assets/gallery/herren/herren_7.jpg":jb,"../assets/gallery/herren/herren_8.jpg":wb,"../assets/gallery/herren/herren_9.jpg":Eb,"../assets/gallery/herren/herren_club500_1.png":_b,"../assets/gallery/herren/herren_club500_2.png":zb,"../assets/gallery/herren/herren_club500_3.png":Cb,"../assets/gallery/herren/herren_club500_4.png":Ab,"../assets/gallery/herren/herren_club500_5.png":kb,"../assets/gallery/herren/herren_jubel_500club.png":Tb,"../assets/gallery/jfv/IMG-team.png":Rb,"../assets/gallery/jfv/IMG_5349.jpg":Mb,"../assets/gallery/jfv/IMG_5369.jpg":Db,"../assets/gallery/jfv/IMG_5421.jpg":Bb,"../assets/gallery/jfv/IMG_5442.jpg":Ob,"../assets/gallery/jfv/IMG_5952.jpg":$b,"../assets/gallery/jfv/Unbenann324t.png":Nb,"../assets/gallery/jfv/image0.jpeg":Lb,"../assets/gallery/jfv/image11.jpeg":Ub,"../assets/gallery/jfv/image8.jpeg":Hb})).find(([c])=>c.includes(a));return u?u[1]:""},tS=(a,s)=>ct(`${a}/${a}_${s}.jpg`);J5(),eS(),Vb();const nS={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28"},{name:"Stefan K.",amount:800,date:"2024-07-26"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27"}]}},aS={packages:nS},rS=b.div`
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
`,iS=b.div`
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
`,lS=b.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,sS=b.div`
  margin-bottom: 1.5rem;
`,oS=b.div`
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
`,cS=b.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,uS=b.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${a=>Math.min(a.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,dS=b.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,fS=b.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,hS=b.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,mS=b.div`
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
`,gS=b.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,pS=b.div`
  flex: 1;
`,bS=b.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,xS=b.span`
  font-weight: 600;
  color: #374151;
`,yS=b.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,vS=b.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,SS=b.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,jS=b.button`
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
`,wS=b.div`
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
`,ES=()=>{const a=aS;return{kabinen:{current:a.packages.kabinen.current,goal:a.packages.kabinen.goal,donors:a.packages.kabinen.donors},fassade:{current:a.packages.fassade.current,goal:a.packages.fassade.goal,donors:a.packages.fassade.donors},waschkueche:{current:a.packages.waschkueche.current,goal:a.packages.waschkueche.goal,donors:a.packages.waschkueche.donors}}};function _S({data:a=ES(),realTime:s=!1}){const[u,c]=T.useState(a),[d,f]=T.useState(new Date),[y,v]=T.useState(!1),m=async()=>{v(!0);try{const S=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(S.ok){const w=await S.json(),C={kabinen:{current:w.packages.kabinen.current,goal:w.packages.kabinen.goal,donors:w.packages.kabinen.donors},fassade:{current:w.packages.fassade.current,goal:w.packages.fassade.goal,donors:w.packages.fassade.donors},waschkueche:{current:w.packages.waschkueche.current,goal:w.packages.waschkueche.goal,donors:w.packages.waschkueche.donors}};c(C),f(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(S){console.error("❌ Fehler beim Laden der Spendendaten:",S)}finally{v(!1)}};T.useEffect(()=>{if(!s)return;const S=setInterval(()=>{m()},3e4);return()=>clearInterval(S)},[s]);const h=S=>{switch(S){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},p=S=>{switch(S){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return S}};return i.jsxs(i.Fragment,{children:[i.jsx(rS,{children:Object.entries(u).map(([S,w])=>{const C=w.current/w.goal*100;return i.jsxs(iS,{children:[i.jsxs(lS,{children:[h(S)," ",p(S)]}),i.jsxs(sS,{children:[i.jsxs(oS,{children:[i.jsxs("span",{children:[w.current.toLocaleString("de-DE")," €"]}),i.jsxs("span",{children:[w.goal.toLocaleString("de-DE")," €"]})]}),i.jsx(cS,{children:i.jsx(uS,{$progress:C})}),i.jsxs(dS,{children:[Math.round(C),"% erreicht"]})]}),i.jsxs(fS,{children:[i.jsxs(hS,{children:["💝 Spender (",w.donors.length,")"]}),i.jsx(mS,{children:w.donors.length>0?w.donors.slice().reverse().map((j,O)=>i.jsxs(gS,{children:[i.jsxs(pS,{children:[i.jsx(bS,{children:j.anonymous?"Anonymer Spender":j.name}),j.comment&&i.jsxs(yS,{children:['"',j.comment,'"']}),j.date&&i.jsx(vS,{children:j.date})]}),i.jsxs(xS,{children:[j.amount.toLocaleString("de-DE")," €"]})]},O)):i.jsx(SS,{children:"Noch keine Spenden 🤗"})})]})]},S)})}),i.jsxs(jS,{onClick:m,disabled:y,title:"Spendendaten aktualisieren",children:["🔄",y?"Lade...":"Aktualisieren"]}),i.jsxs(wS,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const zS=b.section`
  background: url("${tS("herren",18)}") center/cover;
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
`,CS=b.div`
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
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,kS=b.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,TS=b.main`
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
`,RS=b.section`
  margin-bottom: 4rem;
`,MS=b.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,DS=b.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,BS=b.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,OS=b.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,$S=b.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,NS=b.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,LS=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,US=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Nu=b.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Lu=b.div`
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
`,HS=b.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,GS=b.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,VS=b.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,YS=b.div`
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
`,qS=b.div`
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
`,KS=b.div`
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
`,QS=b.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,ZS=b.button`
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
`,yp=b.button`
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
`,Uu=b.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Hu=b.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,XS=b.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,FS=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,PS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Gu=b.div`
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
`,Vu=b.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Yu=b.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,qu=b.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Ku=b.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,WS=b.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,IS=b.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,JS=b.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,ej=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,ks=b.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Ts=b.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Rs=b.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,tj=b.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,nj=b.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,aj=b.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,rj=b.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,ij=b.a`
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
`,lj=b.div`
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
`,sj=b.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,oj=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,cj=b.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,uj=b.button`
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
`,dj=b.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Qu=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Zu=b.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Xu=b.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,fj=b.button`
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
`,hj=b.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,Or=Vb();function Fu({images:a,onImageClick:s}){const[u,c]=T.useState(0);return T.useEffect(()=>{if(a.length<=1)return;const d=setInterval(()=>{c(f=>(f+1)%a.length)},4e3);return()=>clearInterval(d)},[a.length]),a.length===0?i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):i.jsxs(HS,{children:[a.map((d,f)=>i.jsx(GS,{src:d.src,alt:d.alt,$isActive:f===u,onClick:()=>s(f)},f)),a.length>1&&i.jsx(VS,{children:a.map((d,f)=>i.jsx(YS,{$isActive:f===u,onClick:()=>c(f)},f))})]})}function mj({images:a,initialIndex:s,onClose:u}){const[c,d]=T.useState(s),f=T.useCallback(()=>{d(v=>(v+1)%a.length)},[a.length]),y=T.useCallback(()=>{d(v=>(v-1+a.length)%a.length)},[a.length]);return T.useEffect(()=>{const v=m=>{m.key==="Escape"&&u(),m.key==="ArrowRight"&&f(),m.key==="ArrowLeft"&&y()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[u,f,y]),i.jsx(qS,{onClick:u,children:i.jsxs(KS,{onClick:v=>v.stopPropagation(),children:[i.jsx(ZS,{onClick:u,children:"×"}),i.jsx(QS,{src:a[c].src,alt:a[c].alt}),a.length>1&&i.jsxs(i.Fragment,{children:[i.jsx(yp,{$direction:"prev",onClick:y,children:"‹"}),i.jsx(yp,{$direction:"next",onClick:f,children:"›"})]})]})})}function gj(){const[a,s]=T.useState(!1),[u,c]=T.useState([]),[d,f]=T.useState(0),[y,v]=T.useState(!1),m=(S,w)=>{c(S),f(w),s(!0)},h=S=>{S.preventDefault(),v(!0)},p=()=>{navigator.clipboard.writeText("DE84 6905 0001 0000 0929 99")};return i.jsxs(i.Fragment,{children:[i.jsx(zS,{children:i.jsxs(CS,{children:[i.jsx(AS,{children:"🏟️ Fürstenberg weiterentwickeln"}),i.jsx(kS,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),i.jsxs(TS,{children:[i.jsxs(RS,{children:[i.jsx(MS,{children:"Der Fürstenberg - unser Kultplatz"}),i.jsx(DS,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),i.jsxs(BS,{children:[i.jsx(OS,{children:"✨ Charme erhalten, Komfort verbessern"}),i.jsx($S,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),i.jsxs(NS,{children:[i.jsx(LS,{children:"🔍 Wo wir ansetzen möchten"}),i.jsxs(US,{children:[i.jsxs(Nu,{children:[i.jsx(Lu,{children:i.jsx(Fu,{images:Or.kabinen,onImageClick:S=>m(Or.kabinen,S)})}),i.jsx(Uu,{children:"🔧 Kabinen komfortabler gestalten"}),i.jsx(Hu,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),i.jsxs(Nu,{children:[i.jsx(Lu,{children:i.jsx(Fu,{images:Or.fassade,onImageClick:S=>m(Or.fassade,S)})}),i.jsx(Uu,{children:"🎨 Fassade & Fenster erneuern"}),i.jsx(Hu,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),i.jsxs(Nu,{children:[i.jsx(Lu,{children:i.jsx(Fu,{images:Or.waschkueche,onImageClick:S=>m(Or.waschkueche,S)})}),i.jsx(Uu,{children:"🧺 Waschküche auf Vordermann bringen"}),i.jsx(Hu,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),i.jsxs(XS,{children:[i.jsx(FS,{children:"✨ Unsere Pläne für den Fürstenberg"}),i.jsxs(PS,{children:[i.jsxs(Gu,{children:[i.jsx(Vu,{children:"🪑"}),i.jsx(Yu,{children:"Kabinen sanieren"}),i.jsx(qu,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),i.jsx(Ku,{children:"~8.000 €"})]}),i.jsxs(Gu,{children:[i.jsx(Vu,{children:"🎨"}),i.jsx(Yu,{children:"Fassade & Fenster erneuern"}),i.jsx(qu,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),i.jsx(Ku,{children:"~15.000 €"})]}),i.jsxs(Gu,{children:[i.jsx(Vu,{children:"🧺"}),i.jsx(Yu,{children:"Waschküche modernisieren"}),i.jsx(qu,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),i.jsx(Ku,{children:"~5.000 €"})]})]})]}),i.jsxs(WS,{children:[i.jsx(IS,{children:"🤝 Werden Sie Renovierungs-Partner!"}),i.jsx(JS,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),i.jsxs(ej,{children:[i.jsxs(ks,{children:[i.jsx(Ts,{children:"🏆"}),i.jsxs(Rs,{children:[i.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),i.jsxs(ks,{children:[i.jsx(Ts,{children:"📄"}),i.jsxs(Rs,{children:[i.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),i.jsxs(ks,{children:[i.jsx(Ts,{children:"📱"}),i.jsxs(Rs,{children:[i.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),i.jsxs(ks,{children:[i.jsx(Ts,{children:"🎯"}),i.jsxs(Rs,{children:[i.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),i.jsxs(tj,{children:[i.jsx(nj,{children:"🤝 Gemeinsam für den Fürstenberg"}),i.jsx(aj,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),i.jsx(_S,{realTime:!0}),i.jsx(rj,{children:i.jsx(ij,{className:"primary",href:"#",onClick:h,children:"🏦 Per Überweisung spenden"})})]})]}),i.jsx(ul,{}),y&&i.jsx(lj,{onClick:()=>v(!1),children:i.jsxs(sj,{onClick:S=>S.stopPropagation(),children:[i.jsxs(oj,{children:[i.jsx(cj,{children:"Kontoverbindung für Spenden"}),i.jsx(uj,{onClick:()=>v(!1),children:"×"})]}),i.jsxs(dj,{children:[i.jsxs(Qu,{children:[i.jsx(Zu,{children:"Kontoinhaber:"}),i.jsx(Xu,{children:"Sport Club Konstanz-Wollmatingen e.V."})]}),i.jsxs(Qu,{children:[i.jsx(Zu,{children:"IBAN:"}),i.jsx(Xu,{children:"DE84 6905 0001 0000 0929 99"})]}),i.jsxs(Qu,{children:[i.jsx(Zu,{children:"BIC:"}),i.jsx(Xu,{children:"SOLADES1KNZ"})]})]}),i.jsx(fj,{onClick:p,children:"📋 IBAN kopieren"}),i.jsx(hj,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),a&&i.jsx(mj,{images:u,initialIndex:d,onClose:()=>s(!1)})]})}const Pu={text:"Meister 2025/26 und Aufsteiger.",highlight:"Verbandsliga Südbaden",suffix:"Seit Saison 26/27 spielen wir in der"},pj=["Auggen","Bühlertal","Denzlingen","Gundelfingen","Hausen","Hofstetten","Kuppenheim","Lahr","Laufenburg","Linx","Pfullendorf","Rielasingen","Salem","Wolfenweiler","Wyhl"],Kd=[{value:"1,7 Mio.",label:"Social-Media-Views in 12 Monaten",description:"IG 1,32 Mio. + FB 414K, 01.10.2025 - 05.10.2026, 100 % organisch"},{value:"63.300",label:"Personen erreicht auf Instagram",description:"Instagram Reach, 01.10.2025 - 05.10.2026"},{value:"52 %",label:"der Aufrufe von Nicht-Followern",description:"Instagram, letzte 90 Tage (431.973 Aufrufe), Stand 05.10.2026"},{value:"60.000+",label:"Website-Aufrufe / Jahr",description:"23.800 Sessions, Ø 2:19 Min. Verweildauer"}],bj="Logo in allen Spielvor- und Nachberichten · Stadionansage bei jedem Heimspiel · Logo auf der Startseite",jd=[{id:"hauptsponsor",name:"Hauptsponsor",preis:"15.000 €",topFeature:"Trikotbrust",trikot:"Brust (bis 400 cm²)",bande:"9 m",banner:"1× XL (3 × 2 m)",magazin:"1 Seite",saisonkarten:10,vergeben:!0,sponsorName:"Fuchsbau Immobilien",sponsorLogo:"/sponsors/fuchsbau-logo.png",sponsorWebsite:"https://immofuchsbau.com/"},{id:"stadionname",name:"Stadionname-Partner",preis:"12.000 €",topFeature:"Namensrecht Stadion",trikot:"–",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:10,vergeben:!1},{id:"co-sponsor-1",name:"Co-Sponsor I",preis:"9.500 €",topFeature:"Trikot-Rücken",trikot:"Rücken (bis 200 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1},{id:"co-sponsor-2",name:"Co-Sponsor II",preis:"8.000 €",topFeature:"Trikot-Ärmel",trikot:"Ärmel (2 × 100 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1}],wd=[{name:"Einzelbande",groesse:"3 × 1 m",preis:"600 €",slots:25,kategorie:"bande"},{name:"Doppelbande",groesse:"6 × 1 m",preis:"1.000 €",slots:12,kategorie:"bande"},{name:"Banner Standard",groesse:"ca. 2 × 1,5 m",preis:"1.200 €",slots:10,kategorie:"banner"},{name:"Banner XL",groesse:"ca. 3 × 2 m",preis:"2.000 €",slots:4,kategorie:"banner"}],vp=[{name:"Ballspende",beschreibung:"Ihr Name als Ballspender: Durchsage vor dem Spiel, bei jedem Tor und zur Halbzeit, dazu eine Instagram-Story.",preis:"150 € / Spiel",hinweis:"5er-Pack: 500 €",link:{to:"/sponsoring/ballspende",label:"Freie Spiele ansehen"}},{name:"Spielpräsentator",beschreibung:"Alle Aufstellungen und Auswechslungen, präsentiert von Ihrer Firma.",preis:"ab 250 € / Spiel"},{name:"Magazin-Inserat",beschreibung:"Unser Heimspielmagazin: 15 Ausgaben pro Saison, je rund 100 gedruckte Exemplare und 1.000 bis 1.500 Online-Zugriffe.",preis:"250 - 1.000 €",hinweis:"1/4 Seite 250 € · 1/2 Seite 500 € · 1 Seite 1.000 €"}],xj=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Wu={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},Yb=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],qb=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Kb=["Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],yj="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",jt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},vj=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],Sj=b.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 1.25rem;
  }
`,jj=b.a`
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
`,wj=b.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${_.red};
`,Ej=b.img`
  align-self: center;
  width: 100%;
  max-width: 320px;
  max-height: 170px;
  object-fit: contain;

  @media (min-width: 900px) {
    max-height: 240px;
  }
`,_j=b.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${_.ink};
`,zj=b.ul`
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
`,Cj=b.a`
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
`,Aj=b.img`
  max-width: 100%;
  max-height: ${a=>a.$square?"68px":"48px"};
  object-fit: contain;
`,kj={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/standorte/konstanz"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"http://www.stadtwerke-konstanz.de/karriere/"},{name:"Sparkasse Bodensee",logo:"/sponsors/sparkasse-bodensee.png",website:"https://www.sparkasse-bodensee.de/"},{name:"Fuchs Haustechnik",logo:"/sponsors/fuchs.png",website:"https://www.fuchs-haustechnik.de/"},{name:"Logans Linde",logo:"/sponsors/logans-linde.png",website:"https://logans-wollmatingen.de/",square:!0},{name:"MUMM Magazin",logo:"/sponsors/mumm-magazin.png",website:"https://www.nil-media.de/mumm-magazin/"},{name:"DANLIN Media",logo:"/sponsors/DANLIN.avif",website:"https://www.danlin-media.de/"},{name:"Grenzgänger-Tools",logo:"/sponsors/grenzgaenger-tools.png",website:"https://grenzgaenger-tools.de"},{name:"Karaki Services",logo:"/sponsors/karaki-services.png",website:"https://karaki-services.de/"},{name:"HI-PRO Europe",logo:"/sponsors/hi-pro.webp",website:"https://www.hi-pro.eu/",square:!0},{name:"Enis Sporttreff",logo:"/sponsors/enis-sporttreff.webp",website:"https://enis-sporttreff.de/",square:!0},{name:"ZMVZ Dr. Schütz GmbH",logo:"/sponsors/dr-schuetz.svg",website:"https://www.schuetz-die-zaehne.de/"},{name:"Adel Bruno Grimm",logo:"/sponsors/adelbrunogrimm.png",website:"https://adelbrunogrimm.com/",square:!0}]};function Tj(){const{hauptsponsor:a,partners:s}=kj;return i.jsxs(Sj,{children:[i.jsxs(jj,{href:a.website,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(wj,{children:"Hauptsponsor"}),i.jsx(Ej,{src:a.logo,alt:a.name}),i.jsx(_j,{children:a.name})]}),i.jsx(zj,{"aria-label":"Partner",children:s.map(u=>i.jsx("li",{children:i.jsx(Cj,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:i.jsx(Aj,{src:u.logo,alt:u.name,$square:"square"in u&&u.square})})},u.name))})]})}const Ir=It`
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

  ${({$variant:a="primary"})=>a==="primary"?It`
          background: ${_.red};
          color: #fff;
          border: 2px solid ${_.red};
          &:hover {
            background: ${_.redDark};
            border-color: ${_.redDark};
            color: #fff;
          }
        `:a==="outlineLight"?It`
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.55);
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              border-color: #fff;
              color: #fff;
            }
          `:It`
            background: transparent;
            color: ${_.navy};
            border: 2px solid ${_.navy};
            &:hover {
              background: ${_.navy};
              color: #fff;
            }
          `}
`,Pe=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Zr=b.p`
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
`,Rj=b.h2`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: 0;
  color: ${a=>a.$onDark?"#fff":_.navy};
  margin: 0;
`,Qb=b.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${a=>a.$onDark?"rgba(255, 255, 255, 0.8)":_.muted};
  max-width: 62ch;
  margin: 1rem 0 0;
`,Mj=b.header`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 2.75rem;
  }
`;function Ut({eyebrow:a,title:s,lead:u,onDark:c,id:d}){return i.jsxs(Mj,{children:[i.jsx(Zr,{$onDark:c,children:a}),i.jsx(Rj,{id:d,$onDark:c,children:s}),u&&i.jsx(Qb,{$onDark:c,children:u})]})}const Qa=b.a`
  ${Ir}
`,Dj=b.button`
  ${Ir}
`;function Bj({email:a,address:s,interestOptions:u,interest:c}){const[d,f]=T.useState(c??""),[y,v]=T.useState({}),[m,h]=T.useState(!1);T.useEffect(()=>{c&&f(c)},[c]);const p=C=>{C.preventDefault();const j=C.currentTarget,O=new FormData(j);if(String(O.get("website")||"").trim()!=="")return;const L=Ue=>String(O.get(Ue)||"").trim(),G=L("firstName"),X=L("lastName"),k=L("company"),Y=L("phone"),U=L("email"),I=L("message"),N={};G||(N.firstName="Bitte geben Sie Ihren Vornamen an."),X||(N.lastName="Bitte geben Sie Ihren Nachnamen an."),/^[+\d][\d\s\-/()]{5,}$/.test(Y)||(N.phone="Bitte geben Sie eine Telefonnummer an, z. B. 07531 123456."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(U)||(N.email="Bitte geben Sie eine gültige E-Mail-Adresse an."),O.get("consent")||(N.consent="Bitte stimmen Sie der Datenverarbeitung zu."),v(N);const Z=Object.keys(N)[0];if(Z){j.querySelector(`[name="${Z}"]`)?.focus(),h(!1);return}const ae=d||"Sponsoring allgemein",Ce=`Sponsoring-Anfrage: ${ae}${k?` (${k})`:""}`,ve=["Hallo SCKW-Team,","",`ich interessiere mich für: ${ae}.`,...I?["",I]:[],"",`Name: ${G} ${X}`,...k?[`Firma: ${k}`]:[],`Telefon: ${Y}`,`E-Mail: ${U}`,"","Viele Grüße",`${G} ${X}`].join(`
`);window.location.href=`mailto:${a}?subject=${encodeURIComponent(Ce)}&body=${encodeURIComponent(ve)}`,h(!0)},S=C=>y[C]?{"aria-invalid":!0,"aria-describedby":`${C}-error`}:{},w=C=>y[C]?i.jsx(Vj,{id:`${C}-error`,children:y[C]}):null;return i.jsx(Oj,{id:"kontakt","aria-labelledby":"kontakt-title",children:i.jsx(Pe,{children:i.jsxs($j,{children:[i.jsxs("div",{children:[i.jsx(Ut,{id:"kontakt-title",eyebrow:"Kontakt",title:"Partner werden.",lead:"Schreiben Sie uns kurz, was Sie sich vorstellen. Wir melden uns innerhalb von 24 Stunden und finden mit Ihnen das passende Paket."}),i.jsxs(Nj,{children:[i.jsx(Sp,{children:"E-Mail"}),i.jsx(Lj,{href:`mailto:${a}`,children:a}),i.jsx(Sp,{children:"Anschrift"}),i.jsx("address",{children:s.map(C=>i.jsxs("span",{children:[C,i.jsx("br",{})]},C))})]})]}),i.jsxs(Uj,{children:[i.jsx(Hj,{children:"Anfrage stellen"}),i.jsxs(Gj,{noValidate:!0,onSubmit:p,children:[i.jsxs(Ji,{children:[i.jsx("label",{htmlFor:"interest",children:"Interesse an"}),i.jsxs("select",{id:"interest",name:"interest",value:d,onChange:C=>f(C.target.value),children:[i.jsx("option",{value:"",children:"Noch offen, bitte beraten"}),u.map(C=>i.jsx("option",{value:C,children:C},C))]})]}),i.jsxs(nl,{children:[i.jsx("label",{htmlFor:"firstName",children:"Vorname"}),i.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0,...S("firstName")}),w("firstName")]}),i.jsxs(nl,{children:[i.jsx("label",{htmlFor:"lastName",children:"Nachname"}),i.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0,...S("lastName")}),w("lastName")]}),i.jsxs(nl,{children:[i.jsxs("label",{htmlFor:"company",children:["Firma ",i.jsx(jp,{children:"(optional)"})]}),i.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),i.jsxs(nl,{children:[i.jsx("label",{htmlFor:"phone",children:"Telefon"}),i.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0,...S("phone")}),w("phone")]}),i.jsxs(Ji,{children:[i.jsx("label",{htmlFor:"email",children:"E-Mail"}),i.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,...S("email")}),w("email")]}),i.jsxs(Ji,{children:[i.jsxs("label",{htmlFor:"message",children:["Nachricht ",i.jsx(jp,{children:"(optional)"})]}),i.jsx("textarea",{id:"message",name:"message",rows:4})]}),i.jsxs(Yj,{"aria-hidden":"true",children:[i.jsx("label",{htmlFor:"website",children:"Dieses Feld bitte leer lassen"}),i.jsx("input",{id:"website",name:"website",type:"text",tabIndex:-1,autoComplete:"off"})]}),i.jsxs(Ji,{children:[i.jsxs(qj,{children:[i.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0,...S("consent")}),i.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß den"," ",i.jsx("a",{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),w("consent")]}),i.jsxs(Ji,{children:[i.jsx(Dj,{type:"submit",children:"Anfrage per E-Mail senden"}),i.jsx(Kj,{children:"Ihr E-Mail-Programm öffnet sich mit der fertigen Anfrage."})]}),i.jsx(Qj,{role:"status","aria-live":"polite",children:m&&i.jsxs(i.Fragment,{children:["Ihre Anfrage liegt jetzt im E-Mail-Programm bereit. Bitte dort auf Senden klicken. Hat sich nichts geöffnet? Dann schreiben Sie uns direkt an"," ",i.jsx("a",{href:`mailto:${a}`,children:a}),"."]})})]})]})]})})})}const Oj=b.section`
  background: ${_.paper};
  color-scheme: light;
  padding: 4rem 0;
  text-align: left;
  scroll-margin-top: 72px;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,$j=b.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: 4rem;
    align-items: start;
  }
`,Nj=b.div`
  display: grid;
  gap: 0.25rem;
  color: ${_.ink};
  font-size: 1.05rem;
  line-height: 1.5;

  address {
    font-style: normal;
  }
`,Sp=b.span`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${_.muted};
`,Lj=b.a`
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
`,Uj=b.div`
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Hj=b.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.75rem;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 0 1.25rem;
`,Gj=b.form`
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
`,nl=b.div`
  display: flex;
  flex-direction: column;
`,Ji=b(nl)`
  grid-column: 1 / -1;

  & > button {
    align-self: flex-start;
  }
`,jp=b.span`
  font-weight: 400;
  color: ${_.muted};
`,Vj=b.span`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${_.redDark};
`,Yj=b.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,qj=b.div`
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
`,Kj=b.span`
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: ${_.muted};
`,Qj=b.p`
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
`,Ed=929,_d=1239,Zj=28,Ms=jd.find(a=>a.id==="stadionname"),Ds=wd.find(a=>a.name==="Doppelbande")??wd[0],Xj=[{id:"tribuene",tab:"Haupttribüne",image:"/stadion/fuerstenberg-tribuene.jpg",place:"auf dem Dach der Haupttribüne",wide:{x:0,y:.3,w:1,h:.33},zoom:{x:.22,y:.4,w:.56,h:.12},zoomSmall:{x:.34,y:.41,w:.32,h:.08},marker:{x:326,y:547,w:286,h:25},overlay:a=>i.jsxs(i.Fragment,{children:[i.jsx("polygon",{points:"332,553 606,553 606,567 332,567",fill:"#dddbd2",stroke:"#2a2f38",strokeWidth:"0.8"}),i.jsx(wp,{x:469,y:560.5,maxWidth:258,size:10.5,text:a})]}),product:Ms&&!Ms.vergeben?{title:"Stadionname-Partner",detail:`Ihr Name für das Stadion, ${Ms.preis} pro Saison`,interest:Ms.name,action:"Stadionname anfragen"}:null},{id:"gegengerade",tab:"Gegengerade",image:"/stadion/fuerstenberg-gegengerade.jpg",place:"an einer freien Stelle der Bandenreihe",wide:{x:0,y:.4,w:1,h:.26},zoom:{x:.29,y:.49,w:.58,h:.1},zoomSmall:{x:.44,y:.505,w:.3,h:.07},marker:{x:494,y:656,w:116,h:29},overlay:a=>i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"500.5",y:"663.5",width:"104",height:"17",fill:"rgba(0,0,0,0.25)"}),i.jsx("rect",{x:"500",y:"662",width:"104",height:"17",fill:"#efefea",stroke:"rgba(0,0,0,0.2)",strokeWidth:"0.4"}),i.jsx("rect",{x:"500",y:"677",width:"104",height:"2",fill:_.red}),i.jsx(wp,{x:552,y:669.5,maxWidth:94,size:11,fill:_.navy,text:a})]}),product:{title:`${Ds.name}, ${Ds.groesse}`,detail:`${Ds.preis} pro Saison, noch ${Ds.slots} Plätze frei`,interest:"Bande oder Banner",action:"Bande anfragen"}}];function Fj({onRequest:a}){const s=Xj.filter(k=>k.product),[u,c]=T.useState(s[0]?.id),[d,f]=T.useState(""),[y,v]=T.useState(!1),[m,h]=T.useState({w:0,h:0}),p=T.useRef(null),S=T.useRef(!1),w=T.useRef(void 0),C=s.find(k=>k.id===u)??s[0],j=(d.trim()||"Ihr Name").toUpperCase();if(T.useLayoutEffect(()=>{const k=p.current;if(!k)return;const Y=()=>h({w:k.clientWidth,h:k.clientHeight});Y();const U=new ResizeObserver(Y);return U.observe(k),()=>U.disconnect()},[]),T.useEffect(()=>{const k=p.current;if(!k)return;if(!("IntersectionObserver"in window)){v(!0);return}const Y=new IntersectionObserver(([U])=>{U.isIntersecting&&!S.current&&(S.current=!0,w.current=window.setTimeout(()=>v(!0),900),Y.disconnect())},{threshold:.5});return Y.observe(k),()=>{Y.disconnect(),window.clearTimeout(w.current)}},[]),!C||!C.product)return null;const O=C.product,L=k=>{k!==C.id&&(window.clearTimeout(w.current),c(k),v(!1),w.current=window.setTimeout(()=>v(!0),700))},G=m.w<640?C.zoomSmall:C.zoom,X=Pj(y?G:C.wide,m);return i.jsx(Wj,{"aria-labelledby":"stadion-title",id:"stadion",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"stadion-title",eyebrow:"Fürstenberg-Sportplatz",title:"Ihr Name am Fürstenberg.",lead:"Tippen Sie Ihren Firmennamen ein und sehen Sie, wo er bei uns im Stadion stehen würde."}),i.jsxs(Ij,{children:[i.jsxs(Jj,{children:[i.jsx("label",{htmlFor:"stadion-name",children:"Ihr Firmenname"}),i.jsx("input",{id:"stadion-name",type:"text",value:d,maxLength:Zj,placeholder:"z. B. Bäckerei Muster",autoComplete:"organization",onChange:k=>{f(k.target.value),y||v(!0)}})]}),s.length>1&&i.jsx(ew,{role:"group","aria-label":"Ansicht wählen",children:s.map(k=>i.jsx(tw,{type:"button","aria-pressed":k.id===C.id,onClick:()=>L(k.id),children:k.tab},k.id))})]}),i.jsxs(nw,{children:[i.jsxs(aw,{ref:p,children:[i.jsxs(rw,{style:{transform:`translate(${X.tx}px, ${X.ty}px) scale(${X.s})`},children:[i.jsx("img",{src:C.image,alt:`${C.tab} am Fürstenberg-Sportplatz, ${C.place} steht ${j}`,width:Ed,height:_d}),i.jsxs("svg",{viewBox:`0 0 ${Ed} ${_d}`,preserveAspectRatio:"none","aria-hidden":"true",children:[C.overlay(j),i.jsx(lw,{x:C.marker.x,y:C.marker.y,width:C.marker.w,height:C.marker.h,rx:"3",$hidden:y},`${C.id}-${y}`)]})]}),i.jsx(sw,{type:"button",onClick:()=>v(k=>!k),"aria-pressed":y,children:y?"Ganzes Stadion zeigen":"Heranzoomen"})]}),i.jsxs(ow,{children:[i.jsxs("div",{children:[i.jsx("strong",{children:O.title}),i.jsx("span",{children:O.detail})]}),i.jsx(cw,{type:"button",onClick:()=>a(O.interest),children:O.action})]})]}),i.jsx(uw,{children:"Beispielhafte Darstellung auf echten Fotos vom Fürstenberg-Sportplatz. Gestaltung und Platzierung stimmen wir mit Ihnen ab."})]})})}function Pj(a,s){const{w:u,h:c}=s;if(!u||!c)return{tx:0,ty:0,s:1};const d=u*_d/Ed,f=Math.max(1,Math.min(1/a.w,c/(a.h*d))),y=(a.x+a.w/2)*u,v=(a.y+a.h/2)*d,m=Math.min(0,Math.max(u-f*u,u/2-f*y)),h=Math.min(0,Math.max(c-f*d,c/2-f*v));return{tx:m,ty:h,s:f}}function wp({x:a,y:s,maxWidth:u,size:c,text:d,fill:f="#1d2330"}){const y=d.length*c*.5,v=y>u?c*u/y:c;return i.jsx("text",{x:a,y:s,textAnchor:"middle",dominantBaseline:"central",fill:f,style:{fontFamily:_.fontDisplay,fontWeight:800,fontSize:v,letterSpacing:"0.02em"},children:d})}const Wj=b.section`
  padding: 4rem 0;
  background: #fff;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,Ij=b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,Jj=b.div`
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
`,ew=b.div`
  display: inline-flex;
  padding: 4px;
  gap: 4px;
  background: ${_.paper};
  border: 1px solid ${_.line};
  border-radius: 10px;
`,tw=b.button`
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
`,nw=b.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${_.navyDeep};
  border: 1px solid ${_.line};
`,aw=b.div`
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
`,rw=b.div`
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
`,iw=$d`
  0%, 100% { stroke-opacity: 1; }
  50% { stroke-opacity: 0.25; }
`,lw=b.rect`
  fill: none;
  stroke: #fff;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
  transition: opacity 0.4s ease;
  opacity: ${a=>a.$hidden?0:1};

  ${a=>!a.$hidden&&It`
      animation: ${iw} 1.1s ease-in-out 3;
    `}
`,sw=b.button`
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
`,ow=b.figcaption`
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
`,cw=b.button`
  ${Ir}
  min-height: 44px;
`,uw=b.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${_.muted};
`,Zb=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Iu=a=>a.replace(/ €/g," €"),Ju=a=>{document.getElementById(a)?.scrollIntoView({behavior:Zb()?"auto":"smooth",block:"start"})},dw=b.div`
  color-scheme: light;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  background: #fff;

  section[id] {
    scroll-margin-top: 72px;
  }
`,$r=b.section`
  padding: 4rem 0;
  background: ${({$tone:a})=>a==="paper"?_.paper:a==="navy"?_.navy:"#fff"};
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,fw=b.section`
  position: relative;
  overflow: hidden;
  background: ${_.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 860px);
`,hw=b.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center 30% / cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 1.2s ease;
`,mw=b.div`
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
`,gw=b(Pe)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
`,pw=b.h1`
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
`,bw=b.p`
  max-width: 34rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);

  strong {
    color: #fff;
    font-weight: 700;
  }
`,xw=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,yw=b.ul`
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
`,vw=b.strong`
  display: block;
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 2.75rem);
  line-height: 1;
  color: #fff;
  font-variant-numeric: tabular-nums;
`,Sw=b.span`
  display: block;
  margin-top: 0.35rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
`,jw=b.div`
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
`,ww=b.div`
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
`,ma=b.li`
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  line-height: 1.45;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${_.blue};
  }
`,Ew=b.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
`,_w=b.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,zw=b.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`,Cw=b.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 1;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0;
`,Aw=b.p`
  margin: 0.4rem 0 0;
  font-weight: 600;
  color: ${_.red};
`,kw=b.p`
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
`,Tw=b.ul`
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 1.25rem 0 0;
  border-top: 1px solid ${_.line};
  display: grid;
  gap: 0.55rem;
  flex: 1;
`,Rw=b.button`
  ${Ir}
  width: 100%;
  margin-top: auto;
`,Mw=b.div`
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
`,Dw=b.strong`
  display: block;
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${_.navy};
`,Bw=b.a`
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
`,ed=b.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${_.muted};
`,Ep=b.div`
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  overflow: hidden;
`,_p=b.div`
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
`,zp=b.div`
  overflow-x: auto;

  &:focus-visible {
    outline-offset: -3px;
  }
`,Cp=b.table`
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
`,Ow=b.div`
  display: grid;
  gap: 1.25rem;
`,$w=b.div`
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
`,Nw=b.img`
  display: block;
  width: 100%;
  height: auto;
  background: #0b0b0d;
`,Lw=b.div`
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
`,Uw=b.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,Hw=b.article`
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
`,Gw=b.p`
  && {
    margin: 0.5rem 0 1rem;
    font-family: ${_.fontDisplay};
    font-weight: 800;
    font-size: 1.9rem;
    color: ${_.red};
    font-variant-numeric: tabular-nums;
  }
`,Vw=b.p`
  && {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${_.line};
    font-weight: 600;
    color: ${_.muted};
  }
`,Yw=b.div`
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
`,qw=b.div`
  position: relative;
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 4rem;
    align-items: center;
  }
`,Kw=b.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Qw=b.h3`
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
`,Zw=b.ul`
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
`,Xw=b.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`,Fw=b.p`
  margin: 0 0 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 60ch;
`,Pw=b.div`
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
`,Ww=b.div`
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
`,Iw=b.span`
  text-transform: none;
`,Ap=b(va)`
  ${Ir}
`;function ga(){return i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3 8.5l3 3 7-7",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Jw(){const[a,s]=T.useState(Kd),[u,c]=T.useState();T.useEffect(()=>{fetch("/social-stats.json").then(j=>j.ok?j.json():Promise.reject()).then(j=>{j?.kpis?.length&&s(j.kpis)}).catch(()=>{})},[]);const d=[ct("herren/herren_6"),ct("herren/herren_16"),ct("herren/herren_5"),ct("herren/herren_14")].filter(Boolean),[f,y]=T.useState(0);T.useEffect(()=>{if(d.length<=1||Zb())return;const j=setInterval(()=>{y(O=>(O+1)%d.length)},7e3);return()=>clearInterval(j)},[d.length]);const v=j=>{c(j),Ju("kontakt")},m=jd.filter(j=>!j.vergeben),h=jd.filter(j=>j.vergeben),p=j=>Number(j.replace(/\D/g,"")),S=[...m].sort((j,O)=>p(j.preis)-p(O.preis))[0]?.preis,w=[...m.map(j=>j.name),"Bande oder Banner","Buswerbung",...vp.map(j=>j.name)],C=bj.split(" · ");return i.jsxs(dw,{children:[i.jsxs(fw,{"aria-labelledby":"hero-title","data-dark":!0,children:[d.map((j,O)=>i.jsx(hw,{$bg:j,$active:O===f,"aria-hidden":"true"},O)),i.jsx(mw,{}),i.jsxs(gw,{children:[i.jsx(Zr,{$onDark:!0,children:"Partner werden beim SC Konstanz-Wollmatingen"}),i.jsxs(pw,{id:"hero-title",children:[i.jsx("span",{children:"Sponsoring,"})," ",i.jsx("span",{children:"das messbar wirkt."})]}),i.jsxs(bw,{children:["Wir sind ein Sportverein aus Wollmatingen, seit 1930. Und wir haben Reichweite: ",i.jsx("strong",{children:"1,7 Millionen Views"})," auf Instagram und Facebook in den letzten zwölf Monaten, ohne einen Euro Werbebudget."]}),i.jsxs(xw,{children:[i.jsx(Qa,{href:"#kontakt",onClick:j=>{j.preventDefault(),Ju("kontakt")},children:"Anfrage stellen"}),i.jsx(Qa,{href:"#angebot",$variant:"outlineLight",onClick:j=>{j.preventDefault(),Ju("angebot")},children:"Angebote ansehen"})]}),i.jsx(yw,{"aria-label":"Reichweite in Zahlen",children:a.map(j=>i.jsxs("li",{children:[i.jsx(vw,{children:j.value}),i.jsx(Sw,{children:j.label})]},j.label))})]})]}),i.jsx(jw,{"data-dark":!0,children:i.jsxs(Pe,{children:[i.jsx("strong",{children:Pu.text}),Pu.suffix," ",Pu.highlight,"."]})}),i.jsx($r,{"aria-labelledby":"partner-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"partner-title",eyebrow:"Saison 26/27",title:"Unsere Partner.",lead:"Ohne sie ginge es nicht. Danke an alle Unternehmen, die den SCKW schon unterstützen."}),i.jsx(Tj,{})]})}),i.jsx($r,{$tone:"paper",id:"angebot","aria-labelledby":"angebot-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"angebot-title",eyebrow:`Ab ${S} pro Saison`,title:"Exklusiv-Partnerschaften.",lead:"Trikot oder Stadionname, dazu Bande, Banner, Magazin und Saisonkarten. Jedes Paket gibt es nur einmal."}),i.jsxs(ww,{children:[i.jsx("strong",{children:"In jedem Paket enthalten:"}),i.jsx(Ew,{children:C.map(j=>i.jsxs(ma,{children:[i.jsx(ga,{}),j]},j))})]}),h.map(j=>i.jsxs(Mw,{children:[i.jsxs("div",{children:[i.jsx(Dw,{children:j.name}),i.jsxs("span",{children:[j.topFeature,", vergeben an"]})]}),i.jsxs(Bw,{as:j.sponsorWebsite?"a":"div",href:j.sponsorWebsite,target:j.sponsorWebsite?"_blank":void 0,rel:j.sponsorWebsite?"noopener noreferrer":void 0,children:[j.sponsorLogo&&i.jsx("img",{src:j.sponsorLogo,alt:""}),i.jsx("strong",{children:j.sponsorName})]})]},j.id)),i.jsx(_w,{children:m.map(j=>i.jsxs(zw,{"aria-labelledby":`paket-${j.id}`,children:[i.jsx(Cw,{id:`paket-${j.id}`,children:j.name}),i.jsx(Aw,{children:j.topFeature}),i.jsxs(kw,{children:[j.preis," ",i.jsx("span",{children:"pro Saison"})]}),i.jsxs(Tw,{children:[j.id==="stadionname"&&i.jsxs(ma,{children:[i.jsx(ga,{}),"Das Stadion trägt Ihren Namen"]}),j.trikot!=="–"&&i.jsxs(ma,{children:[i.jsx(ga,{}),"Trikot: ",j.trikot]}),i.jsxs(ma,{children:[i.jsx(ga,{}),"Bande: ",j.bande]}),i.jsxs(ma,{children:[i.jsx(ga,{}),"Banner: ",j.banner]}),i.jsxs(ma,{children:[i.jsx(ga,{}),"Stadionmagazin: ",j.magazin]}),i.jsxs(ma,{children:[i.jsx(ga,{}),j.saisonkarten," Saisonkarten"]})]}),i.jsxs(Rw,{type:"button",onClick:()=>v(j.name),children:[j.name," anfragen"]})]},j.id))}),i.jsx(ed,{children:"Alle Preise zzgl. MwSt."})]})}),i.jsx(Fj,{onRequest:v}),i.jsx($r,{$tone:"paper",id:"werbeflaechen","aria-labelledby":"werbeflaechen-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"werbeflaechen-title",eyebrow:"Einzeln buchbar",title:"Werbeflächen.",lead:"Banden, Banner und Buswerbung zu festen Preisen. Für Betriebe, die in der Region gesehen werden wollen."}),i.jsxs(Ow,{children:[i.jsxs(Ep,{children:[i.jsxs(_p,{children:[i.jsx("h3",{children:"Banden & Banner"}),i.jsx("p",{children:"Am Spielfeldrand, bei jedem Heimspiel sichtbar."})]}),i.jsx(zp,{tabIndex:0,role:"region","aria-label":"Preise Banden und Banner",children:i.jsxs(Cp,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Fläche"}),i.jsx("th",{scope:"col",children:"Größe"}),i.jsx("th",{scope:"col",className:"num",children:"Plätze"}),i.jsx("th",{scope:"col",className:"num",children:"Preis pro Saison"})]})}),i.jsx("tbody",{children:wd.map(j=>i.jsxs("tr",{children:[i.jsx("td",{children:j.name}),i.jsx("td",{children:j.groesse}),i.jsx("td",{className:"num",children:j.slots}),i.jsx("td",{className:"num",children:j.preis})]},j.name))})]})})]}),i.jsxs(Ep,{children:[i.jsxs(_p,{children:[i.jsx("h3",{children:"Buswerbung"}),i.jsx("p",{children:"Jede Woche unterwegs in Konstanz, im Landkreis und bei Auswärtsspielen."})]}),i.jsxs($w,{children:[i.jsx(Nw,{src:"/vereinsbus.png",alt:"Vereinsbus des SCKW mit eingezeichneten Werbeflächen"}),i.jsxs(Lw,{children:[i.jsx("h4",{children:"Optionen"}),i.jsx("ul",{children:Kb.map(j=>i.jsxs(ma,{children:[i.jsx(ga,{}),j]},j))}),i.jsx(ed,{children:yj})]}),i.jsx(zp,{tabIndex:0,role:"region","aria-label":"Preise Buswerbung",children:i.jsxs(Cp,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Fläche"}),i.jsx("th",{scope:"col",children:"Größe"}),i.jsx("th",{scope:"col",className:"num",children:"Preis pro Jahr"})]})}),i.jsx("tbody",{children:[...Yb,...qb].map(j=>i.jsxs("tr",{children:[i.jsx("td",{children:j.position}),i.jsx("td",{children:j.groesse}),i.jsx("td",{className:"num",children:j.preis})]},j.position))})]})})]})]})]}),i.jsx(ed,{children:"Alle Preise zzgl. MwSt."})]})}),i.jsx($r,{id:"spieltag","aria-labelledby":"spieltag-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"spieltag-title",eyebrow:"Ab 150 € netto",title:"Spieltag & Medien.",lead:"Der einfachste Einstieg ins Sponsoring, gut zum Ausprobieren."}),i.jsx(Uw,{children:vp.map(j=>i.jsxs(Hw,{children:[i.jsx("h3",{children:j.name}),i.jsx(Gw,{children:Iu(j.preis)}),i.jsx("p",{children:Iu(j.beschreibung)}),j.hinweis&&i.jsx(Vw,{children:Iu(j.hinweis)}),j.link&&i.jsx(Ap,{to:j.link.to,$variant:"outlineDark",style:{marginTop:"1rem"},children:j.link.label})]},j.name))})]})}),i.jsxs($r,{$tone:"navy","aria-labelledby":"reichweite-title","data-dark":!0,children:[i.jsx(Yw,{"aria-hidden":"true",children:"Verbandsliga"}),i.jsx(Pe,{children:i.jsxs(qw,{children:[i.jsxs("div",{children:[i.jsx(Ut,{id:"reichweite-title",eyebrow:"Verbandsliga Südbaden",title:"Ihre Reichweite wächst mit.",onDark:!0}),i.jsx(Fw,{children:"Als Meister und Aufsteiger spielen wir seit dieser Saison Verbandsliga, gegen 15 Vereine von Kuppenheim bei Baden-Baden bis an den Bodensee. Trikot und Vereinsbus sind bei den Auswärtsspielen dabei."}),i.jsxs(Pw,{children:[i.jsx("strong",{children:"Was das für Sie bedeutet"}),"Mehr Kilometer für den Vereinsbus, eine höhere Liga für Ihre Bande. Ihr Paket kostet dadurch nicht mehr."]})]}),i.jsxs(Kw,{children:[i.jsx(Qw,{children:"Auswärts unterwegs in"}),i.jsx(Zw,{children:pj.map(j=>i.jsx("li",{children:j},j))}),i.jsx(Xw,{children:"Heimspiele in Konstanz. Quelle: SBFV, Staffel 2026/27."})]})]})})]}),i.jsx($r,{"aria-labelledby":"club500-title",children:i.jsx(Pe,{children:i.jsxs(Ww,{children:[i.jsxs("div",{children:[i.jsx(Zr,{children:"100 Felder, 500 € pro Feld und Saison"}),i.jsxs("h2",{id:"club500-title",children:["Der ",i.jsx(Iw,{children:"500er"})," Club."]}),i.jsx("p",{children:"Für Privatpersonen und Firmen: Mit einem Feld im 500er Club unterstützen Sie direkt unsere erste Mannschaft in der Verbandsliga. Sie erhalten eine Spendenbescheinigung und auf Wunsch einen Platz auf der Spendentafel."})]}),i.jsx(Ap,{to:"/sponsoring/club-500",$variant:"outlineDark",children:"Zum 500er Club"})]})})}),i.jsx(Bj,{email:jt.email,address:jt.vollAdresse.split(`
`),interestOptions:w,interest:u}),i.jsx(ul,{})]})}function e3(){return N0(),!0}const t3=j0`
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
`,kp=b.div`
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
`,Tp=b.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,Rp=b.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Bs=b.button`
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
`,n3=b.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print {
    display: none !important;
  }
`,a3=b.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print {
    padding: 0;
    background: none;
  }
`,zt=b.section`
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
`,tn=b.div`
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
`,nn=b.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,an=b.div`
  text-align: center;
  margin-bottom: 6mm;
`,rn=b.img`
  height: 20mm;
`,ln=b.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,_t=b.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,pt=b.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Oe=b.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,ee=b.li`
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
`,wt=b.ul`
  padding: 0;
  margin: 3mm 0;
`,Za=b.div`
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
`,gt=b.div`
  margin-bottom: 4mm;
`,nt=b.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Lt=b.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${a=>(a.$lines||1)*8}mm;
  background: #fafafa;
`,r3=b.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Qd=b.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Vn=b.div`
  text-align: ${a=>a.$right?"right":a.$center?"center":"left"};
`;function Sa(){return i.jsxs(r3,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",i.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function hn(){return i.jsxs(Qd,{children:[i.jsxs(Vn,{children:[i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),i.jsx("br",{}),"Schleyerweg 5",i.jsx("br",{}),"78467 Konstanz"]}),i.jsxs(Vn,{$center:!0,children:[jt.email,i.jsx("br",{}),"partner.sckw.de"]}),i.jsxs(Vn,{$right:!0,children:["Sparkasse Bodensee",i.jsx("br",{}),"IBAN: DE84 6905 0001 0000 0929 99",i.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const Mp=ct("herren/herren_0"),td=ct("herren/herren_6"),Dp=ct("herren/herren_1"),i3=ct("herren/herren_14"),Ps=b.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function l3(){return i.jsx(zt,{children:i.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),i.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),i.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),i.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",i.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Kd.slice(0,2).map(a=>i.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[i.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:a.value}),i.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:a.label})]},a.label))}),i.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function s3(){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"WARUM SCKW?"}),i.jsx(_t,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Kd.map(a=>i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[i.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:a.value}),i.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:a.label})]},a.label))}),i.jsx(pt,{children:"Was Sie bei uns erreichen"}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),i.jsx(ee,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),i.jsx(ee,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),i.jsx(ee,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),i.jsx(pt,{children:"Der Verein auf einen Blick"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsxs(Oe,{children:[i.jsx("strong",{children:"Gegründet:"})," 1912"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Mitglieder:"})," 500+"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),i.jsxs("div",{children:[i.jsxs(Oe,{children:[i.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),Mp&&i.jsx(Ps,{src:Mp,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),i.jsx(hn,{})]})]})}function o3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"HAUPTSPONSOR"}),i.jsx(_t,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Trikotwerbung auf der Brust"}),i.jsx(ee,{children:"Business Club Mitgliedschaft"}),i.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),i.jsx(ee,{children:"1/1 seitiges Inserat im SC Magazin"}),i.jsx(ee,{children:"10 Saisonkarten"}),i.jsx(ee,{children:"Werbeauftritte nach Absprache"}),i.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(Za,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}function c3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"CO-SPONSOR"}),i.jsx(_t,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Werbung auf den Trainingsanzügen"}),i.jsx(ee,{children:"Business Club Mitgliedschaft"}),i.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),i.jsx(ee,{children:"1/2 seitiges Inserat im SC Magazin"}),i.jsx(ee,{children:"5 Saisonkarten"}),i.jsx(ee,{children:"Werbeauftritte nach Absprache"}),i.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(Za,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}function u3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"SILBER-PARTNER"}),i.jsx(_t,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"1 Bande (5×2 m) am Gelände"}),i.jsx(ee,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),i.jsx(ee,{children:"Werbeplane am Gelände"}),i.jsx(ee,{children:"Vereinsplakate + Eventsichtbarkeit"}),i.jsx(ee,{children:"Website: Logo auf Startseite"})]}),i.jsxs(Za,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),i.jsx(pt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),i.jsx(_t,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),i.jsx(ee,{children:"Website: Logo auf der Startseite"}),i.jsx(ee,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),i.jsx(ee,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),i.jsxs(Za,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}function d3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"BANDENWERBUNG"}),i.jsx(_t,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),i.jsx(wt,{children:i.jsx(ee,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Platzierung:"}),i.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",i.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",i.jsx("br",{}),i.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),i.jsxs(Za,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 800€ pro Saison"})]}),Dp&&i.jsx(Ps,{src:Dp,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}function f3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:'WERBUNG IM „HEIMSPIEL"'}),i.jsx(_t,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),i.jsxs(wt,{children:[i.jsx(ee,{children:"15 Ausgaben pro Saison"}),i.jsx(ee,{children:"ca. 100 Exemplare pro Heimspiel"}),i.jsx(ee,{children:"Digitale Version (Social Media & Webseite)"}),i.jsx(ee,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),i.jsx(ee,{children:"DIN A4 Stadionmagazin"}),i.jsx(ee,{children:"wird ausgelegt in diversen Arztpraxen"})]}),a&&i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>i.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),i.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),i.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),a&&i.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[i.jsx("strong",{children:"Maße"}),i.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",i.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",i.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}function h3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"SPIELTAG-SPONSORING"}),i.jsx(_t,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),i.jsx(pt,{children:"Ballspende"}),i.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),i.jsx(ee,{children:"Namensnennung in der Halbzeitpause"}),i.jsx(ee,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),i.jsx(ee,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),i.jsxs(Za,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack:"," ",i.jsx("strong",{children:"500€"})," (statt 750€)"]}),i.jsx(pt,{children:"Spielpräsentator"}),i.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),i.jsx(ee,{children:"Namentliche Erwähnung im SC Magazin"}),i.jsx(ee,{children:"Social Media Erwähnung am Spieltag"})]}),i.jsxs(Za,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 250€ pro Spiel"})]}),td&&i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[i.jsx(Ps,{src:td,alt:"Action",style:{height:"48mm"}}),i.jsx(Ps,{src:i3||td,alt:"Jubel",style:{height:"48mm"}})]}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}function m3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"BUSWERBUNG"}),i.jsx(_t,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),i.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),a&&i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),i.jsx("tbody",{children:[...Yb,...qb].map((s,u)=>i.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),a&&i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),i.jsx(pt,{children:"Zusatzoptionen"}),i.jsx(wt,{children:Kb.map((s,u)=>i.jsx(ee,{children:s},u))}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}function g3({showPrices:a}){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{children:"PRÄMIEN-MODELL"}),i.jsx(_t,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a&&i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),i.jsxs("tbody",{children:[xj.map((s,u)=>i.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),i.jsxs("tr",{style:{background:"#f0f9ff"},children:[i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Wu.starter}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Wu.premium}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Wu.kombi})]})]})]}),i.jsx(pt,{children:"So funktioniert's"}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),i.jsx(ee,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),i.jsx(ee,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),i.jsx(ee,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),i.jsx(pt,{children:"Inkludierte Leistungen"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx(Oe,{children:i.jsx("strong",{children:"Starter:"})}),i.jsxs(wt,{children:[i.jsx(ee,{children:"Stadionansage bei Erfolg"}),i.jsx(ee,{children:"Logo auf Website"})]})]}),i.jsxs("div",{children:[i.jsx(Oe,{children:i.jsx("strong",{children:"Premium:"})}),i.jsxs(wt,{children:[i.jsx(ee,{children:"+ Social Media Post bei Erfolg"}),i.jsx(ee,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),i.jsx(Sa,{}),i.jsx(hn,{})]})]})}const Bp=ct("herren/herren_jubel_500club");function p3(){return i.jsxs(zt,{children:[Bp&&i.jsx("img",{src:Bp,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),i.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[i.jsx(_t,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),i.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[i.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den CLUB 500."})," ","Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),i.jsx(pt,{children:"Ihre Vorteile"}),i.jsxs(wt,{children:[i.jsxs(ee,{children:["Offizielle ",i.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),i.jsxs(ee,{children:["Veröffentlichung Ihres ",i.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),i.jsx(ee,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),i.jsx(pt,{children:"Zahlungsoptionen"}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),i.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(a=>i.jsxs("tr",{children:[i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:a.label}),i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:a.betrag})]},a.label))})]}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),i.jsx(pt,{children:"Spendenkonto"}),i.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[i.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),i.jsx("br",{}),"IBAN: ",i.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",i.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[i.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",i.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),i.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",i.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),i.jsx(hn,{})]})]})}function b3(){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG CLUB 500"}),i.jsxs(_t,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an"," ",jt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(nt,{children:"Vorname:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"Nachname:"}),i.jsx(Lt,{$lines:1})]})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"Firma (optional):"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"Straße, Hausnummer:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(nt,{children:"PLZ:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"Ort:"}),i.jsx(Lt,{$lines:1})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(nt,{children:"Geb.-Datum:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"Telefon:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"E-Mail:"}),i.jsx(Lt,{$lines:1})]})]}),i.jsx(pt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:i.jsxs(nt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),i.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),i.jsx(pt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im CLUB 500 bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:i.jsxs(nt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),i.jsxs(gt,{style:{marginTop:"2mm"},children:[i.jsx(nt,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),i.jsx(Lt,{$lines:1})]}),i.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. CLUB 500. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[i.jsxs(gt,{children:[i.jsx(nt,{children:"Konstanz, den _______________"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),i.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"Unterschrift:"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),i.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[i.jsx("strong",{children:"Spendenkonto:"})," Sport Club Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",i.jsx("br",{}),i.jsx("strong",{children:"Kontakt:"})," ",jt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs(Qd,{style:{marginTop:"auto"},children:[i.jsx(Vn,{children:i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),i.jsx(Vn,{$center:!0,children:"CLUB 500"}),i.jsx(Vn,{$right:!0,children:"partner.sckw.de"})]})]})]})}function x3(){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),i.jsx(_t,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(a=>i.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[i.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:a.n}),i.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:a.t}),i.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:a.d})]},a.n))}),i.jsx(pt,{children:"Kontakt"}),i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:jt.email})]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),i.jsxs("div",{style:{gridColumn:"1 / -1"},children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),i.jsxs("div",{style:{fontSize:"11pt"},children:[jt.adresse.name," · ",jt.adresse.strasse," ·"," ",jt.adresse.plz," ",jt.adresse.ort]})]})]}),i.jsx(pt,{children:"Gesprächsleitfaden"}),i.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "1,4 Mio. Social-Media-Views in dieser Saison – 100 % organisch, aktuell 394.000 Views/Monat."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),i.jsx(hn,{})]})]})}function y3(){return i.jsxs(zt,{children:[i.jsx(tn,{}),i.jsxs(nn,{children:[i.jsx(an,{children:i.jsx(rn,{src:"/logo.svg"})}),i.jsx(ln,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),i.jsxs(_t,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an"," ",jt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(gt,{children:[i.jsx(nt,{children:"Datum:"}),i.jsx(Lt,{$lines:1})]}),i.jsxs(gt,{children:[i.jsx(nt,{children:"Gesprächsführer (Helfer):"}),i.jsx(Lt,{$lines:1})]})]}),vj.map((a,s)=>i.jsxs(gt,{children:[i.jsxs(nt,{children:[a.label,":"]}),i.jsx(Lt,{$lines:a.lines})]},s)),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:i.jsxs(nt,{style:{marginBottom:0},children:["☐ ",a]})},a))}),i.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:i.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[i.jsx("strong",{children:"Schnellreferenz:"})," ",jt.email," · partner.sckw.de · ",jt.vollAdresse.replace(/\n/g," · ")]})}),i.jsxs(Qd,{style:{marginTop:"auto"},children:[i.jsx(Vn,{children:i.jsx("strong",{children:"Internes Dokument"})}),i.jsx(Vn,{$center:!0}),i.jsx(Vn,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Ln=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>i.jsx(l3,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>i.jsx(s3,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:a=>i.jsx(o3,{showPrices:a})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:a=>i.jsx(c3,{showPrices:a})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:a=>i.jsx(u3,{showPrices:a})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:a=>i.jsx(d3,{showPrices:a})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:a=>i.jsx(f3,{showPrices:a})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:a=>i.jsx(h3,{showPrices:a})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:a=>i.jsx(m3,{showPrices:a})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:a=>i.jsx(g3,{showPrices:a})},{id:"club500",label:"CLUB 500",group:"community",render:()=>i.jsx(p3,{})},{id:"club500form",label:"CLUB 500 Anmeldung",group:"community",render:()=>i.jsx(b3,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>i.jsx(x3,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>i.jsx(y3,{})}],v3=b.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print {
    display: none !important;
  }
`,S3=b.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,j3=b.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,w3=b.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,E3=b.button`
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
`,nd=b.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,ad=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,rd=b.label`
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
`,_3=b.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Ga=b.button`
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
`,z3=b.button`
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
`,C3=b.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function A3(){const a=e3(),[s]=N0(),u=s.get("preset"),c=s.get("view"),d=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Ln.filter(N=>N.group==="broschüre").map(N=>N.id)),[f,y]=T.useState(!0),[v,m]=T.useState(d),[h,p]=T.useState(c==="preview"?"preview":"dashboard");if(!a)return i.jsx(Gs,{to:"/",replace:!0});const S=N=>{m(Z=>{const ae=new Set(Z);return ae.has(N)?ae.delete(N):ae.add(N),ae})},w=()=>m(new Set(Ln.map(N=>N.id))),C=()=>m(new Set),j=()=>m(new Set(Ln.filter(N=>N.group==="broschüre").map(N=>N.id))),O=()=>m(new Set(Ln.map(N=>N.id))),L=()=>m(new Set(["cover","why","spieltag","banden"])),G=()=>m(new Set(["cover","why","haupt","co","silber"])),X=()=>m(new Set(["club500","club500form"])),k=Ln.filter(N=>v.has(N.id)),Y=Ln.filter(N=>N.group==="broschüre"),U=Ln.filter(N=>N.group==="community"),I=Ln.filter(N=>N.group==="helfer");return h==="preview"?i.jsxs(i.Fragment,{children:[i.jsx(t3,{}),i.jsxs(kp,{children:[i.jsxs(Tp,{children:["Vorschau · ",k.length," Seiten"]}),i.jsxs(Rp,{children:[i.jsx(Bs,{$active:f,onClick:()=>y(N=>!N),children:f?"Preise ✓":"Preise ✗"}),i.jsx(Bs,{onClick:()=>p("dashboard"),children:"Zurück"}),i.jsx(Bs,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),i.jsxs(n3,{children:[i.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',i.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),i.jsx(a3,{children:k.map(N=>i.jsx("div",{children:N.render(f)},N.id))})]}):i.jsxs(i.Fragment,{children:[i.jsxs(kp,{children:[i.jsx(Tp,{children:"Sponsoring-Kit · SCKW"}),i.jsx(Rp,{children:i.jsx(Bs,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),i.jsxs(v3,{children:[i.jsx(S3,{children:"Sponsoring-Kit zusammenstellen"}),i.jsx(j3,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),i.jsxs(w3,{children:[i.jsx(E3,{$on:f,onClick:()=>y(N=>!N),children:f?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),i.jsxs(C3,{children:[v.size," von ",Ln.length," Seiten ausgewählt"]})]}),i.jsxs(_3,{children:[i.jsx(Ga,{onClick:w,children:"Alles"}),i.jsx(Ga,{onClick:j,children:"Broschüre komplett"}),i.jsx(Ga,{onClick:O,children:"Komplett-Kit (+ Helfer)"}),i.jsx(Ga,{onClick:G,children:"Nur Premium-Pakete"}),i.jsx(Ga,{onClick:L,children:"Starter-Paket"}),i.jsx(Ga,{onClick:X,children:"CLUB 500"}),i.jsx(Ga,{onClick:C,children:"Keine"})]}),i.jsx(nd,{children:"Broschüre"}),i.jsx(ad,{children:Y.map(N=>i.jsxs(rd,{$checked:v.has(N.id),children:[i.jsx("input",{type:"checkbox",checked:v.has(N.id),onChange:()=>S(N.id)}),N.label]},N.id))}),i.jsx(nd,{children:"Community / CLUB 500"}),i.jsx(ad,{children:U.map(N=>i.jsxs(rd,{$checked:v.has(N.id),children:[i.jsx("input",{type:"checkbox",checked:v.has(N.id),onChange:()=>S(N.id)}),N.label]},N.id))}),i.jsx(nd,{children:"Helfer-Anhang"}),i.jsx(ad,{children:I.map(N=>i.jsxs(rd,{$checked:v.has(N.id),children:[i.jsx("input",{type:"checkbox",checked:v.has(N.id),onChange:()=>S(N.id)}),N.label]},N.id))}),i.jsxs(z3,{disabled:v.size===0,onClick:()=>p("preview"),children:["Vorschau & Drucken (",v.size," Seiten)"]})]})]})}function k3(a,s){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),d=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(d),s&&(c.href=s),d.href=a,d.href}const T3=(()=>{let a=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${s()}${a}`)})();function ya(a){const s=[];for(let u=0,c=a.length;u<c;u++)s.push(a[u]);return s}let Nr=null;function Xb(a={}){return Nr||(a.includeStyleProperties?(Nr=a.includeStyleProperties,Nr):(Nr=ya(window.getComputedStyle(document.documentElement)),Nr))}function Ws(a,s){const c=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function R3(a){const s=Ws(a,"border-left-width"),u=Ws(a,"border-right-width");return a.clientWidth+s+u}function M3(a){const s=Ws(a,"border-top-width"),u=Ws(a,"border-bottom-width");return a.clientHeight+s+u}function Fb(a,s={}){const u=s.width||R3(a),c=s.height||M3(a);return{width:u,height:c}}function D3(){let a,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(a=parseInt(u,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const $t=16384;function B3(a){(a.width>$t||a.height>$t)&&(a.width>$t&&a.height>$t?a.width>a.height?(a.height*=$t/a.width,a.width=$t):(a.width*=$t/a.height,a.height=$t):a.width>$t?(a.height*=$t/a.width,a.width=$t):(a.width*=$t/a.height,a.height=$t))}function Is(a){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=a})}async function O3(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function $3(a,s,u){const c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"svg"),f=document.createElementNS(c,"foreignObject");return d.setAttribute("width",`${s}`),d.setAttribute("height",`${u}`),d.setAttribute("viewBox",`0 0 ${s} ${u}`),f.setAttribute("width","100%"),f.setAttribute("height","100%"),f.setAttribute("x","0"),f.setAttribute("y","0"),f.setAttribute("externalResourcesRequired","true"),d.appendChild(f),f.appendChild(a),O3(d)}const Et=(a,s)=>{if(a instanceof s)return!0;const u=Object.getPrototypeOf(a);return u===null?!1:u.constructor.name===s.name||Et(u,s)};function N3(a){const s=a.getPropertyValue("content");return`${a.cssText} content: '${s.replace(/'|"/g,"")}';`}function L3(a,s){return Xb(s).map(u=>{const c=a.getPropertyValue(u),d=a.getPropertyPriority(u);return`${u}: ${c}${d?" !important":""};`}).join(" ")}function U3(a,s,u,c){const d=`.${a}:${s}`,f=u.cssText?N3(u):L3(u,c);return document.createTextNode(`${d}{${f}}`)}function Op(a,s,u,c){const d=window.getComputedStyle(a,u),f=d.getPropertyValue("content");if(f===""||f==="none")return;const y=T3();try{s.className=`${s.className} ${y}`}catch{return}const v=document.createElement("style");v.appendChild(U3(y,u,d,c)),s.appendChild(v)}function H3(a,s,u){Op(a,s,":before",u),Op(a,s,":after",u)}const $p="application/font-woff",Np="image/jpeg",G3={woff:$p,woff2:$p,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Np,jpeg:Np,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function V3(a){const s=/\.([^./]*?)$/g.exec(a);return s?s[1]:""}function Zd(a){const s=V3(a).toLowerCase();return G3[s]||""}function Y3(a){return a.split(/,/)[1]}function zd(a){return a.search(/^(data:)/)!==-1}function q3(a,s){return`data:${s};base64,${a}`}async function Pb(a,s,u){const c=await fetch(a,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const d=await c.blob();return new Promise((f,y)=>{const v=new FileReader;v.onerror=y,v.onloadend=()=>{try{f(u({res:c,result:v.result}))}catch(m){y(m)}},v.readAsDataURL(d)})}const id={};function K3(a,s,u){let c=a.replace(/\?.*/,"");return u&&(c=a),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Xd(a,s,u){const c=K3(a,s,u.includeQueryParams);if(id[c]!=null)return id[c];u.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let d;try{const f=await Pb(a,u.fetchRequestInit,({res:y,result:v})=>(s||(s=y.headers.get("Content-Type")||""),Y3(v)));d=q3(f,s)}catch(f){d=u.imagePlaceholder||"";let y=`Failed to fetch resource: ${a}`;f&&(y=typeof f=="string"?f:f.message),y&&console.warn(y)}return id[c]=d,d}async function Q3(a){const s=a.toDataURL();return s==="data:,"?a.cloneNode(!1):Is(s)}async function Z3(a,s){if(a.currentSrc){const f=document.createElement("canvas"),y=f.getContext("2d");f.width=a.clientWidth,f.height=a.clientHeight,y?.drawImage(a,0,0,f.width,f.height);const v=f.toDataURL();return Is(v)}const u=a.poster,c=Zd(u),d=await Xd(u,c,s);return Is(d)}async function X3(a,s){var u;try{if(!((u=a?.contentDocument)===null||u===void 0)&&u.body)return await oo(a.contentDocument.body,s,!0)}catch{}return a.cloneNode(!1)}async function F3(a,s){return Et(a,HTMLCanvasElement)?Q3(a):Et(a,HTMLVideoElement)?Z3(a,s):Et(a,HTMLIFrameElement)?X3(a,s):a.cloneNode(Wb(a))}const P3=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",Wb=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function W3(a,s,u){var c,d;if(Wb(s))return s;let f=[];return P3(a)&&a.assignedNodes?f=ya(a.assignedNodes()):Et(a,HTMLIFrameElement)&&(!((c=a.contentDocument)===null||c===void 0)&&c.body)?f=ya(a.contentDocument.body.childNodes):f=ya(((d=a.shadowRoot)!==null&&d!==void 0?d:a).childNodes),f.length===0||Et(a,HTMLVideoElement)||await f.reduce((y,v)=>y.then(()=>oo(v,u)).then(m=>{m&&s.appendChild(m)}),Promise.resolve()),s}function I3(a,s,u){const c=s.style;if(!c)return;const d=window.getComputedStyle(a);d.cssText?(c.cssText=d.cssText,c.transformOrigin=d.transformOrigin):Xb(u).forEach(f=>{let y=d.getPropertyValue(f);f==="font-size"&&y.endsWith("px")&&(y=`${Math.floor(parseFloat(y.substring(0,y.length-2)))-.1}px`),Et(a,HTMLIFrameElement)&&f==="display"&&y==="inline"&&(y="block"),f==="d"&&s.getAttribute("d")&&(y=`path(${s.getAttribute("d")})`),c.setProperty(f,y,d.getPropertyPriority(f))})}function J3(a,s){Et(a,HTMLTextAreaElement)&&(s.innerHTML=a.value),Et(a,HTMLInputElement)&&s.setAttribute("value",a.value)}function e4(a,s){if(Et(a,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(d=>a.value===d.getAttribute("value"));c&&c.setAttribute("selected","")}}function t4(a,s,u){return Et(s,Element)&&(I3(a,s,u),H3(a,s,u),J3(a,s),e4(a,s)),s}async function n4(a,s){const u=a.querySelectorAll?a.querySelectorAll("use"):[];if(u.length===0)return a;const c={};for(let f=0;f<u.length;f++){const v=u[f].getAttribute("xlink:href");if(v){const m=a.querySelector(v),h=document.querySelector(v);!m&&h&&!c[v]&&(c[v]=await oo(h,s,!0))}}const d=Object.values(c);if(d.length){const f="http://www.w3.org/1999/xhtml",y=document.createElementNS(f,"svg");y.setAttribute("xmlns",f),y.style.position="absolute",y.style.width="0",y.style.height="0",y.style.overflow="hidden",y.style.display="none";const v=document.createElementNS(f,"defs");y.appendChild(v);for(let m=0;m<d.length;m++)v.appendChild(d[m]);a.appendChild(y)}return a}async function oo(a,s,u){return!u&&s.filter&&!s.filter(a)?null:Promise.resolve(a).then(c=>F3(c,s)).then(c=>W3(a,c,s)).then(c=>t4(a,c,s)).then(c=>n4(c,s))}const Ib=/url\((['"]?)([^'"]+?)\1\)/g,a4=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,r4=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function i4(a){const s=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function l4(a){const s=[];return a.replace(Ib,(u,c,d)=>(s.push(d),u)),s.filter(u=>!zd(u))}async function s4(a,s,u,c,d){try{const f=u?k3(s,u):s,y=Zd(s);let v;return d||(v=await Xd(f,y,c)),a.replace(i4(s),`$1${v}$3`)}catch{}return a}function o4(a,{preferredFontFormat:s}){return s?a.replace(r4,u=>{for(;;){const[c,,d]=a4.exec(u)||[];if(!d)return"";if(d===s)return`src: ${c};`}}):a}function Jb(a){return a.search(Ib)!==-1}async function e1(a,s,u){if(!Jb(a))return a;const c=o4(a,u);return l4(c).reduce((f,y)=>f.then(v=>s4(v,y,s,u)),Promise.resolve(c))}async function Lr(a,s,u){var c;const d=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(a);if(d){const f=await e1(d,null,u);return s.style.setProperty(a,f,s.style.getPropertyPriority(a)),!0}return!1}async function c4(a,s){await Lr("background",a,s)||await Lr("background-image",a,s),await Lr("mask",a,s)||await Lr("-webkit-mask",a,s)||await Lr("mask-image",a,s)||await Lr("-webkit-mask-image",a,s)}async function u4(a,s){const u=Et(a,HTMLImageElement);if(!(u&&!zd(a.src))&&!(Et(a,SVGImageElement)&&!zd(a.href.baseVal)))return;const c=u?a.src:a.href.baseVal,d=await Xd(c,Zd(c),s);await new Promise((f,y)=>{a.onload=f,a.onerror=s.onImageErrorHandler?(...m)=>{try{f(s.onImageErrorHandler(...m))}catch(h){y(h)}}:y;const v=a;v.decode&&(v.decode=f),v.loading==="lazy"&&(v.loading="eager"),u?(a.srcset="",a.src=d):a.href.baseVal=d})}async function d4(a,s){const c=ya(a.childNodes).map(d=>t1(d,s));await Promise.all(c).then(()=>a)}async function t1(a,s){Et(a,Element)&&(await c4(a,s),await u4(a,s),await d4(a,s))}function f4(a,s){const{style:u}=a;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(d=>{u[d]=c[d]}),a}const Lp={};async function Up(a){let s=Lp[a];if(s!=null)return s;const c=await(await fetch(a)).text();return s={url:a,cssText:c},Lp[a]=s,s}async function Hp(a,s){let u=a.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,f=(u.match(/url\([^)]+\)/g)||[]).map(async y=>{let v=y.replace(c,"$1");return v.startsWith("https://")||(v=new URL(v,a.url).href),Pb(v,s.fetchRequestInit,({result:m})=>(u=u.replace(y,`url(${m})`),[y,m]))});return Promise.all(f).then(()=>u)}function Gp(a){if(a==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=a.replace(u,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const m=d.exec(c);if(m===null)break;s.push(m[0])}c=c.replace(d,"");const f=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,y="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",v=new RegExp(y,"gi");for(;;){let m=f.exec(c);if(m===null){if(m=v.exec(c),m===null)break;f.lastIndex=v.lastIndex}else v.lastIndex=f.lastIndex;s.push(m[0])}return s}async function h4(a,s){const u=[],c=[];return a.forEach(d=>{if("cssRules"in d)try{ya(d.cssRules||[]).forEach((f,y)=>{if(f.type===CSSRule.IMPORT_RULE){let v=y+1;const m=f.href,h=Up(m).then(p=>Hp(p,s)).then(p=>Gp(p).forEach(S=>{try{d.insertRule(S,S.startsWith("@import")?v+=1:d.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:S,error:w})}})).catch(p=>{console.error("Error loading remote css",p.toString())});c.push(h)}})}catch(f){const y=a.find(v=>v.href==null)||document.styleSheets[0];d.href!=null&&c.push(Up(d.href).then(v=>Hp(v,s)).then(v=>Gp(v).forEach(m=>{y.insertRule(m,y.cssRules.length)})).catch(v=>{console.error("Error loading remote stylesheet",v)})),console.error("Error inlining remote css file",f)}}),Promise.all(c).then(()=>(a.forEach(d=>{if("cssRules"in d)try{ya(d.cssRules||[]).forEach(f=>{u.push(f)})}catch(f){console.error(`Error while reading CSS rules from ${d.href}`,f)}}),u))}function m4(a){return a.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>Jb(s.style.getPropertyValue("src")))}async function g4(a,s){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=ya(a.ownerDocument.styleSheets),c=await h4(u,s);return m4(c)}function n1(a){return a.trim().replace(/["']/g,"")}function p4(a){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(f=>{s.add(n1(f))}),Array.from(c.children).forEach(f=>{f instanceof HTMLElement&&u(f)})}return u(a),s}async function b4(a,s){const u=await g4(a,s),c=p4(a);return(await Promise.all(u.filter(f=>c.has(n1(f.style.fontFamily))).map(f=>{const y=f.parentStyleSheet?f.parentStyleSheet.href:null;return e1(f.cssText,y,s)}))).join(`
`)}async function x4(a,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await b4(a,s);if(u){const c=document.createElement("style"),d=document.createTextNode(u);c.appendChild(d),a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)}}async function y4(a,s={}){const{width:u,height:c}=Fb(a,s),d=await oo(a,s,!0);return await x4(d,s),await t1(d,s),f4(d,s),await $3(d,u,c)}async function v4(a,s={}){const{width:u,height:c}=Fb(a,s),d=await y4(a,s),f=await Is(d),y=document.createElement("canvas"),v=y.getContext("2d"),m=s.pixelRatio||D3(),h=s.canvasWidth||u,p=s.canvasHeight||c;return y.width=h*m,y.height=p*m,s.skipAutoScale||B3(y),y.style.width=`${h}`,y.style.height=`${p}`,s.backgroundColor&&(v.fillStyle=s.backgroundColor,v.fillRect(0,0,y.width,y.height)),v.drawImage(f,0,0,y.width,y.height),y}async function S4(a,s={}){return(await v4(a,s)).toDataURL()}const el=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]},{id:"fuerstenberg-bande",label:"Fürstenberg: Bande",image:"/stadion/bande.jpg",zones:[{id:"freie-bande",label:"Einzelbande 3 × 1 m",x:4.2,y:44.5,width:37.5,height:17.5}]},{id:"fuerstenberg-tribuene",label:"Fürstenberg: Tribünendach",image:"/stadion/tribuene.jpg",zones:[{id:"dach-schriftzug",label:"Schriftzug Tribünendach",x:.5,y:15.5,width:77,height:9.5}]}],j4=b.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,w4=b.div`
  max-width: 1200px;
  margin: 0 auto;
`,E4=b.div`
  text-align: center;
  margin-bottom: 2rem;
`,_4=b.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,z4=b.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,C4=b.select`
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
`,A4=b.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,k4=b.div`
  flex: 1;
  min-width: 0;
`,T4=b.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,R4=b.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,M4=b.div`
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
`,D4=b.img`
  width: ${a=>a.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${a=>a.$offsetX}%, ${a=>a.$offsetY}%);
`,B4=b.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,O4=b.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,$4=b.div`
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
`,N4=b.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,L4=b.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,U4=b.label`
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
`,H4=b.button`
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
`,G4=b.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,V4=b.input`
  display: none;
`,Y4=b.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,ld=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,sd=b.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,od=b.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,q4=b.button`
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
`,K4=b.button`
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
`;function Q4(){const[a,s]=T.useState(el[0].id),[u,c]=T.useState(null),[d,f]=T.useState([]),[y,v]=T.useState(!1),m=T.useRef({}),h=T.useRef(null),p=el.find(k=>k.id===a)??el[0],S=k=>d.find(Y=>Y.zoneId===k),w=T.useCallback((k,Y)=>{if(!Y)return;const U=new FileReader;U.onload=I=>{const N=I.target?.result;f(Z=>[...Z.filter(ae=>ae.zoneId!==k),{zoneId:k,dataUrl:N,scale:1,offsetX:0,offsetY:0}])},U.readAsDataURL(Y)},[]),C=T.useCallback((k,Y)=>{f(U=>U.map(I=>I.zoneId===k?{...I,scale:Y}:I))},[]),j=T.useCallback((k,Y,U)=>{f(I=>I.map(N=>N.zoneId===k?{...N,offsetX:Y,offsetY:U}:N))},[]),O=T.useCallback(k=>{f(Y=>Y.filter(U=>U.zoneId!==k))},[]),L=T.useCallback(()=>{f([]),c(null)},[]),G=T.useCallback(async()=>{if(h.current){v(!0);try{const k=await S4(h.current,{pixelRatio:2,cacheBust:!0}),Y=document.createElement("a");Y.download=`${p.label}-mockup.png`,Y.href=k,Y.click()}finally{v(!1)}}},[p.label]),X=k=>{c(k.id),S(k.id)||m.current[k.id]?.click()};return i.jsx(j4,{children:i.jsxs(w4,{children:[i.jsxs(E4,{children:[i.jsx(_4,{children:"Mockup Generator"}),i.jsx(z4,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),el.length>1&&i.jsx(C4,{value:a,onChange:k=>{s(k.target.value),f([]),c(null)},children:el.map(k=>i.jsx("option",{value:k.id,children:k.label},k.id))}),i.jsxs(A4,{children:[i.jsx(k4,{children:i.jsxs(T4,{ref:h,children:[i.jsx(R4,{src:p.image,alt:p.label,draggable:!1}),p.zones.map(k=>{const Y=S(k.id);return i.jsx(M4,{$active:u===k.id,$hasLogo:!!Y,style:{left:`${k.x}%`,top:`${k.y}%`,width:`${k.width}%`,height:`${k.height}%`},onClick:()=>X(k),onDragOver:U=>{U.preventDefault(),c(k.id)},onDrop:U=>{U.preventDefault();const I=U.dataTransfer.files?.[0];w(k.id,I)},children:Y&&i.jsx(D4,{src:Y.dataUrl,alt:"Logo",draggable:!1,$scale:Y.scale,$offsetX:Y.offsetX,$offsetY:Y.offsetY})},k.id)})]})}),i.jsxs(B4,{children:[i.jsx(O4,{children:"Werbeflächen"}),p.zones.map(k=>{const Y=S(k.id);return i.jsxs($4,{$active:u===k.id,onClick:()=>c(k.id),children:[i.jsx(N4,{children:k.label}),i.jsxs(L4,{children:[i.jsx(U4,{htmlFor:`file-${k.id}`,children:Y?"Ändern":"Logo hochladen"}),i.jsx(V4,{id:`file-${k.id}`,ref:U=>{m.current[k.id]=U},type:"file",accept:"image/*",onChange:U=>w(k.id,U.target.files?.[0])}),Y&&i.jsx(H4,{onClick:U=>{U.stopPropagation(),O(k.id)},children:"Entfernen"}),Y&&i.jsx(G4,{src:Y.dataUrl,alt:"Vorschau"})]}),Y&&i.jsxs(i.Fragment,{children:[i.jsxs(ld,{children:[i.jsxs(sd,{children:[Math.round(Y.scale*100),"%"]}),i.jsx(od,{type:"range",min:"0.3",max:"3",step:"0.05",value:Y.scale,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),C(k.id,parseFloat(U.target.value))}})]}),i.jsxs(ld,{children:[i.jsx(sd,{children:"X"}),i.jsx(od,{type:"range",min:"-100",max:"100",step:"1",value:Y.offsetX,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),j(k.id,parseFloat(U.target.value),Y.offsetY)}})]}),i.jsxs(ld,{children:[i.jsx(sd,{children:"Y"}),i.jsx(od,{type:"range",min:"-100",max:"100",step:"1",value:Y.offsetY,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),j(k.id,Y.offsetX,parseFloat(U.target.value))}})]})]}),!Y&&i.jsx(Y4,{children:"Klicken oder Bild hierher ziehen"})]},k.id)}),d.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(K4,{onClick:G,disabled:y,children:y?"Wird erstellt...":"Bild herunterladen"}),i.jsx(q4,{onClick:L,children:"Alle Logos entfernen"})]})]})]})]})})}var Z4=Object.defineProperty,Js=Object.getOwnPropertySymbols,a1=Object.prototype.hasOwnProperty,r1=Object.prototype.propertyIsEnumerable,Vp=(a,s,u)=>s in a?Z4(a,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[s]=u,Cd=(a,s)=>{for(var u in s||(s={}))a1.call(s,u)&&Vp(a,u,s[u]);if(Js)for(var u of Js(s))r1.call(s,u)&&Vp(a,u,s[u]);return a},Ad=(a,s)=>{var u={};for(var c in a)a1.call(a,c)&&s.indexOf(c)<0&&(u[c]=a[c]);if(a!=null&&Js)for(var c of Js(a))s.indexOf(c)<0&&r1.call(a,c)&&(u[c]=a[c]);return u};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Xa;(a=>{const s=class be{constructor(m,h,p,S){if(this.version=m,this.errorCorrectionLevel=h,this.modules=[],this.isFunction=[],m<be.MIN_VERSION||m>be.MAX_VERSION)throw new RangeError("Version value out of range");if(S<-1||S>7)throw new RangeError("Mask value out of range");this.size=m*4+17;let w=[];for(let j=0;j<this.size;j++)w.push(!1);for(let j=0;j<this.size;j++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(p);if(this.drawCodewords(C),S==-1){let j=1e9;for(let O=0;O<8;O++){this.applyMask(O),this.drawFormatBits(O);const L=this.getPenaltyScore();L<j&&(S=O,j=L),this.applyMask(O)}}d(0<=S&&S<=7),this.mask=S,this.applyMask(S),this.drawFormatBits(S),this.isFunction=[]}static encodeText(m,h){const p=a.QrSegment.makeSegments(m);return be.encodeSegments(p,h)}static encodeBinary(m,h){const p=a.QrSegment.makeBytes(m);return be.encodeSegments([p],h)}static encodeSegments(m,h,p=1,S=40,w=-1,C=!0){if(!(be.MIN_VERSION<=p&&p<=S&&S<=be.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let j,O;for(j=p;;j++){const k=be.getNumDataCodewords(j,h)*8,Y=y.getTotalBits(m,j);if(Y<=k){O=Y;break}if(j>=S)throw new RangeError("Data too long")}for(const k of[be.Ecc.MEDIUM,be.Ecc.QUARTILE,be.Ecc.HIGH])C&&O<=be.getNumDataCodewords(j,k)*8&&(h=k);let L=[];for(const k of m){u(k.mode.modeBits,4,L),u(k.numChars,k.mode.numCharCountBits(j),L);for(const Y of k.getData())L.push(Y)}d(L.length==O);const G=be.getNumDataCodewords(j,h)*8;d(L.length<=G),u(0,Math.min(4,G-L.length),L),u(0,(8-L.length%8)%8,L),d(L.length%8==0);for(let k=236;L.length<G;k^=253)u(k,8,L);let X=[];for(;X.length*8<L.length;)X.push(0);return L.forEach((k,Y)=>X[Y>>>3]|=k<<7-(Y&7)),new be(j,h,X,w)}getModule(m,h){return 0<=m&&m<this.size&&0<=h&&h<this.size&&this.modules[h][m]}getModules(){return this.modules}drawFunctionPatterns(){for(let p=0;p<this.size;p++)this.setFunctionModule(6,p,p%2==0),this.setFunctionModule(p,6,p%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const m=this.getAlignmentPatternPositions(),h=m.length;for(let p=0;p<h;p++)for(let S=0;S<h;S++)p==0&&S==0||p==0&&S==h-1||p==h-1&&S==0||this.drawAlignmentPattern(m[p],m[S]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(m){const h=this.errorCorrectionLevel.formatBits<<3|m;let p=h;for(let w=0;w<10;w++)p=p<<1^(p>>>9)*1335;const S=(h<<10|p)^21522;d(S>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,c(S,w));this.setFunctionModule(8,7,c(S,6)),this.setFunctionModule(8,8,c(S,7)),this.setFunctionModule(7,8,c(S,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,c(S,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,c(S,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,c(S,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let m=this.version;for(let p=0;p<12;p++)m=m<<1^(m>>>11)*7973;const h=this.version<<12|m;d(h>>>18==0);for(let p=0;p<18;p++){const S=c(h,p),w=this.size-11+p%3,C=Math.floor(p/3);this.setFunctionModule(w,C,S),this.setFunctionModule(C,w,S)}}drawFinderPattern(m,h){for(let p=-4;p<=4;p++)for(let S=-4;S<=4;S++){const w=Math.max(Math.abs(S),Math.abs(p)),C=m+S,j=h+p;0<=C&&C<this.size&&0<=j&&j<this.size&&this.setFunctionModule(C,j,w!=2&&w!=4)}}drawAlignmentPattern(m,h){for(let p=-2;p<=2;p++)for(let S=-2;S<=2;S++)this.setFunctionModule(m+S,h+p,Math.max(Math.abs(S),Math.abs(p))!=1)}setFunctionModule(m,h,p){this.modules[h][m]=p,this.isFunction[h][m]=!0}addEccAndInterleave(m){const h=this.version,p=this.errorCorrectionLevel;if(m.length!=be.getNumDataCodewords(h,p))throw new RangeError("Invalid argument");const S=be.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][h],w=be.ECC_CODEWORDS_PER_BLOCK[p.ordinal][h],C=Math.floor(be.getNumRawDataModules(h)/8),j=S-C%S,O=Math.floor(C/S);let L=[];const G=be.reedSolomonComputeDivisor(w);for(let k=0,Y=0;k<S;k++){let U=m.slice(Y,Y+O-w+(k<j?0:1));Y+=U.length;const I=be.reedSolomonComputeRemainder(U,G);k<j&&U.push(0),L.push(U.concat(I))}let X=[];for(let k=0;k<L[0].length;k++)L.forEach((Y,U)=>{(k!=O-w||U>=j)&&X.push(Y[k])});return d(X.length==C),X}drawCodewords(m){if(m.length!=Math.floor(be.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let h=0;for(let p=this.size-1;p>=1;p-=2){p==6&&(p=5);for(let S=0;S<this.size;S++)for(let w=0;w<2;w++){const C=p-w,O=(p+1&2)==0?this.size-1-S:S;!this.isFunction[O][C]&&h<m.length*8&&(this.modules[O][C]=c(m[h>>>3],7-(h&7)),h++)}}d(h==m.length*8)}applyMask(m){if(m<0||m>7)throw new RangeError("Mask value out of range");for(let h=0;h<this.size;h++)for(let p=0;p<this.size;p++){let S;switch(m){case 0:S=(p+h)%2==0;break;case 1:S=h%2==0;break;case 2:S=p%3==0;break;case 3:S=(p+h)%3==0;break;case 4:S=(Math.floor(p/3)+Math.floor(h/2))%2==0;break;case 5:S=p*h%2+p*h%3==0;break;case 6:S=(p*h%2+p*h%3)%2==0;break;case 7:S=((p+h)%2+p*h%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[h][p]&&S&&(this.modules[h][p]=!this.modules[h][p])}}getPenaltyScore(){let m=0;for(let w=0;w<this.size;w++){let C=!1,j=0,O=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[w][L]==C?(j++,j==5?m+=be.PENALTY_N1:j>5&&m++):(this.finderPenaltyAddHistory(j,O),C||(m+=this.finderPenaltyCountPatterns(O)*be.PENALTY_N3),C=this.modules[w][L],j=1);m+=this.finderPenaltyTerminateAndCount(C,j,O)*be.PENALTY_N3}for(let w=0;w<this.size;w++){let C=!1,j=0,O=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[L][w]==C?(j++,j==5?m+=be.PENALTY_N1:j>5&&m++):(this.finderPenaltyAddHistory(j,O),C||(m+=this.finderPenaltyCountPatterns(O)*be.PENALTY_N3),C=this.modules[L][w],j=1);m+=this.finderPenaltyTerminateAndCount(C,j,O)*be.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let C=0;C<this.size-1;C++){const j=this.modules[w][C];j==this.modules[w][C+1]&&j==this.modules[w+1][C]&&j==this.modules[w+1][C+1]&&(m+=be.PENALTY_N2)}let h=0;for(const w of this.modules)h=w.reduce((C,j)=>C+(j?1:0),h);const p=this.size*this.size,S=Math.ceil(Math.abs(h*20-p*10)/p)-1;return d(0<=S&&S<=9),m+=S*be.PENALTY_N4,d(0<=m&&m<=2568888),m}getAlignmentPatternPositions(){if(this.version==1)return[];{const m=Math.floor(this.version/7)+2,h=this.version==32?26:Math.ceil((this.version*4+4)/(m*2-2))*2;let p=[6];for(let S=this.size-7;p.length<m;S-=h)p.splice(1,0,S);return p}}static getNumRawDataModules(m){if(m<be.MIN_VERSION||m>be.MAX_VERSION)throw new RangeError("Version number out of range");let h=(16*m+128)*m+64;if(m>=2){const p=Math.floor(m/7)+2;h-=(25*p-10)*p-55,m>=7&&(h-=36)}return d(208<=h&&h<=29648),h}static getNumDataCodewords(m,h){return Math.floor(be.getNumRawDataModules(m)/8)-be.ECC_CODEWORDS_PER_BLOCK[h.ordinal][m]*be.NUM_ERROR_CORRECTION_BLOCKS[h.ordinal][m]}static reedSolomonComputeDivisor(m){if(m<1||m>255)throw new RangeError("Degree out of range");let h=[];for(let S=0;S<m-1;S++)h.push(0);h.push(1);let p=1;for(let S=0;S<m;S++){for(let w=0;w<h.length;w++)h[w]=be.reedSolomonMultiply(h[w],p),w+1<h.length&&(h[w]^=h[w+1]);p=be.reedSolomonMultiply(p,2)}return h}static reedSolomonComputeRemainder(m,h){let p=h.map(S=>0);for(const S of m){const w=S^p.shift();p.push(0),h.forEach((C,j)=>p[j]^=be.reedSolomonMultiply(C,w))}return p}static reedSolomonMultiply(m,h){if(m>>>8||h>>>8)throw new RangeError("Byte out of range");let p=0;for(let S=7;S>=0;S--)p=p<<1^(p>>>7)*285,p^=(h>>>S&1)*m;return d(p>>>8==0),p}finderPenaltyCountPatterns(m){const h=m[1];d(h<=this.size*3);const p=h>0&&m[2]==h&&m[3]==h*3&&m[4]==h&&m[5]==h;return(p&&m[0]>=h*4&&m[6]>=h?1:0)+(p&&m[6]>=h*4&&m[0]>=h?1:0)}finderPenaltyTerminateAndCount(m,h,p){return m&&(this.finderPenaltyAddHistory(h,p),h=0),h+=this.size,this.finderPenaltyAddHistory(h,p),this.finderPenaltyCountPatterns(p)}finderPenaltyAddHistory(m,h){h[0]==0&&(m+=this.size),h.pop(),h.unshift(m)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=s;function u(v,m,h){if(m<0||m>31||v>>>m)throw new RangeError("Value out of range");for(let p=m-1;p>=0;p--)h.push(v>>>p&1)}function c(v,m){return(v>>>m&1)!=0}function d(v){if(!v)throw new Error("Assertion error")}const f=class Ve{constructor(m,h,p){if(this.mode=m,this.numChars=h,this.bitData=p,h<0)throw new RangeError("Invalid argument");this.bitData=p.slice()}static makeBytes(m){let h=[];for(const p of m)u(p,8,h);return new Ve(Ve.Mode.BYTE,m.length,h)}static makeNumeric(m){if(!Ve.isNumeric(m))throw new RangeError("String contains non-numeric characters");let h=[];for(let p=0;p<m.length;){const S=Math.min(m.length-p,3);u(parseInt(m.substring(p,p+S),10),S*3+1,h),p+=S}return new Ve(Ve.Mode.NUMERIC,m.length,h)}static makeAlphanumeric(m){if(!Ve.isAlphanumeric(m))throw new RangeError("String contains unencodable characters in alphanumeric mode");let h=[],p;for(p=0;p+2<=m.length;p+=2){let S=Ve.ALPHANUMERIC_CHARSET.indexOf(m.charAt(p))*45;S+=Ve.ALPHANUMERIC_CHARSET.indexOf(m.charAt(p+1)),u(S,11,h)}return p<m.length&&u(Ve.ALPHANUMERIC_CHARSET.indexOf(m.charAt(p)),6,h),new Ve(Ve.Mode.ALPHANUMERIC,m.length,h)}static makeSegments(m){return m==""?[]:Ve.isNumeric(m)?[Ve.makeNumeric(m)]:Ve.isAlphanumeric(m)?[Ve.makeAlphanumeric(m)]:[Ve.makeBytes(Ve.toUtf8ByteArray(m))]}static makeEci(m){let h=[];if(m<0)throw new RangeError("ECI assignment value out of range");if(m<128)u(m,8,h);else if(m<16384)u(2,2,h),u(m,14,h);else if(m<1e6)u(6,3,h),u(m,21,h);else throw new RangeError("ECI assignment value out of range");return new Ve(Ve.Mode.ECI,0,h)}static isNumeric(m){return Ve.NUMERIC_REGEX.test(m)}static isAlphanumeric(m){return Ve.ALPHANUMERIC_REGEX.test(m)}getData(){return this.bitData.slice()}static getTotalBits(m,h){let p=0;for(const S of m){const w=S.mode.numCharCountBits(h);if(S.numChars>=1<<w)return 1/0;p+=4+w+S.bitData.length}return p}static toUtf8ByteArray(m){m=encodeURI(m);let h=[];for(let p=0;p<m.length;p++)m.charAt(p)!="%"?h.push(m.charCodeAt(p)):(h.push(parseInt(m.substring(p+1,p+3),16)),p+=2);return h}};f.NUMERIC_REGEX=/^[0-9]*$/,f.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,f.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let y=f;a.QrSegment=f})(Xa||(Xa={}));(a=>{(s=>{const u=class{constructor(d,f){this.ordinal=d,this.formatBits=f}};u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),s.Ecc=u})(a.QrCode||(a.QrCode={}))})(Xa||(Xa={}));(a=>{(s=>{const u=class{constructor(d,f){this.modeBits=d,this.numBitsCharCount=f}numCharCountBits(d){return this.numBitsCharCount[Math.floor((d+7)/17)]}};u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),s.Mode=u})(a.QrSegment||(a.QrSegment={}))})(Xa||(Xa={}));var Gr=Xa;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var X4={L:Gr.QrCode.Ecc.LOW,M:Gr.QrCode.Ecc.MEDIUM,Q:Gr.QrCode.Ecc.QUARTILE,H:Gr.QrCode.Ecc.HIGH},i1=128,l1="L",s1="#FFFFFF",o1="#000000",c1=!1,u1=1,F4=4,P4=0,W4=.1;function d1(a,s=0){const u=[];return a.forEach(function(c,d){let f=null;c.forEach(function(y,v){if(!y&&f!==null){u.push(`M${f+s} ${d+s}h${v-f}v1H${f+s}z`),f=null;return}if(v===c.length-1){if(!y)return;f===null?u.push(`M${v+s},${d+s} h1v1H${v+s}z`):u.push(`M${f+s},${d+s} h${v+1-f}v1H${f+s}z`);return}y&&f===null&&(f=v)})}),u.join("")}function f1(a,s){return a.slice().map((u,c)=>c<s.y||c>=s.y+s.h?u:u.map((d,f)=>f<s.x||f>=s.x+s.w?d:!1))}function I4(a,s,u,c){if(c==null)return null;const d=a.length+u*2,f=Math.floor(s*W4),y=d/s,v=(c.width||f)*y,m=(c.height||f)*y,h=c.x==null?a.length/2-v/2:c.x*y,p=c.y==null?a.length/2-m/2:c.y*y,S=c.opacity==null?1:c.opacity;let w=null;if(c.excavate){let j=Math.floor(h),O=Math.floor(p),L=Math.ceil(v+h-j),G=Math.ceil(m+p-O);w={x:j,y:O,w:L,h:G}}const C=c.crossOrigin;return{x:h,y:p,h:m,w:v,excavation:w,opacity:S,crossOrigin:C}}function J4(a,s){return s!=null?Math.max(Math.floor(s),0):a?F4:P4}function h1({value:a,level:s,minVersion:u,includeMargin:c,marginSize:d,imageSettings:f,size:y,boostLevel:v}){let m=Ee.useMemo(()=>{const j=(Array.isArray(a)?a:[a]).reduce((O,L)=>(O.push(...Gr.QrSegment.makeSegments(L)),O),[]);return Gr.QrCode.encodeSegments(j,X4[s],u,void 0,void 0,v)},[a,s,u,v]);const{cells:h,margin:p,numCells:S,calculatedImageSettings:w}=Ee.useMemo(()=>{let C=m.getModules();const j=J4(c,d),O=C.length+j*2,L=I4(C,y,j,f);return{cells:C,margin:j,numCells:O,calculatedImageSettings:L}},[m,y,f,c,d]);return{qrcode:m,margin:p,cells:h,numCells:S,calculatedImageSettings:w}}var e6=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),t6=Ee.forwardRef(function(s,u){const c=s,{value:d,size:f=i1,level:y=l1,bgColor:v=s1,fgColor:m=o1,includeMargin:h=c1,minVersion:p=u1,boostLevel:S,marginSize:w,imageSettings:C}=c,O=Ad(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:L}=O,G=Ad(O,["style"]),X=C?.src,k=Ee.useRef(null),Y=Ee.useRef(null),U=Ee.useCallback(it=>{k.current=it,typeof u=="function"?u(it):u&&(u.current=it)},[u]),[I,N]=Ee.useState(!1),{margin:Z,cells:ae,numCells:Ce,calculatedImageSettings:ve}=h1({value:d,level:y,minVersion:p,boostLevel:S,includeMargin:h,marginSize:w,imageSettings:C,size:f});Ee.useEffect(()=>{if(k.current!=null){const it=k.current,Ae=it.getContext("2d");if(!Ae)return;let H=ae;const F=Y.current,re=ve!=null&&F!==null&&F.complete&&F.naturalHeight!==0&&F.naturalWidth!==0;re&&ve.excavation!=null&&(H=f1(ae,ve.excavation));const ue=window.devicePixelRatio||1;it.height=it.width=f*ue;const z=f/Ce*ue;Ae.scale(z,z),Ae.fillStyle=v,Ae.fillRect(0,0,Ce,Ce),Ae.fillStyle=m,e6?Ae.fill(new Path2D(d1(H,Z))):ae.forEach(function(Q,P){Q.forEach(function(W,te){W&&Ae.fillRect(te+Z,P+Z,1,1)})}),ve&&(Ae.globalAlpha=ve.opacity),re&&Ae.drawImage(F,ve.x+Z,ve.y+Z,ve.w,ve.h)}}),Ee.useEffect(()=>{N(!1)},[X]);const Ue=Cd({height:f,width:f},L);let Ht=null;return X!=null&&(Ht=Ee.createElement("img",{src:X,key:X,style:{display:"none"},onLoad:()=>{N(!0)},ref:Y,crossOrigin:ve?.crossOrigin})),Ee.createElement(Ee.Fragment,null,Ee.createElement("canvas",Cd({style:Ue,height:f,width:f,ref:U,role:"img"},G)),Ht)});t6.displayName="QRCodeCanvas";var m1=Ee.forwardRef(function(s,u){const c=s,{value:d,size:f=i1,level:y=l1,bgColor:v=s1,fgColor:m=o1,includeMargin:h=c1,minVersion:p=u1,boostLevel:S,title:w,marginSize:C,imageSettings:j}=c,O=Ad(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:L,cells:G,numCells:X,calculatedImageSettings:k}=h1({value:d,level:y,minVersion:p,boostLevel:S,includeMargin:h,marginSize:C,imageSettings:j,size:f});let Y=G,U=null;j!=null&&k!=null&&(k.excavation!=null&&(Y=f1(G,k.excavation)),U=Ee.createElement("image",{href:j.src,height:k.h,width:k.w,x:k.x+L,y:k.y+L,preserveAspectRatio:"none",opacity:k.opacity,crossOrigin:k.crossOrigin}));const I=d1(Y,L);return Ee.createElement("svg",Cd({height:f,width:f,viewBox:`0 0 ${X} ${X}`,ref:u,role:"img"},O),!!w&&Ee.createElement("title",null,w),Ee.createElement("path",{fill:v,d:`M0,0 h${X}v${X}H0z`,shapeRendering:"crispEdges"}),Ee.createElement("path",{fill:m,d:I,shapeRendering:"crispEdges"}),U)});m1.displayName="QRCodeSVG";const n6={subtitle:"Nach der Meisterschaft in der Landesliga spielt unsere erste Mannschaft seit dieser Saison in der Verbandsliga. Mit einem Feld im 500er Club stehen Sie direkt hinter ihr, ob privat oder mit Ihrer Firma. Jedes Feld steht für einen Förderer.",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Saison 2026/27"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},benefits:[{icon:"📄",title:"Spendenbescheinigung",text:"Der SC Konstanz-Wollmatingen ist als gemeinnützig anerkannt. Auf Wunsch erhalten Sie eine Zuwendungsbestätigung."},{icon:"🏅",title:"Ihr Name auf der Spendentafel",text:"Auf der Website und am Vereinsgelände, wenn Sie möchten. Wer lieber im Hintergrund bleibt, erscheint als „SCKW Gönner“."},{icon:"⚽",title:"Direkt für die Erste",text:"Ihr Beitrag fließt in Auswärtsfahrten, Training, Material und den Spielbetrieb in der Verbandsliga."}],spendentafel:{label:"Spendentafel (optional)",sublabel:"Tragen Sie hier Ihren Namen oder Firmennamen ein, wenn Sie auf unserer Spendentafel (Website & Vereinsgelände) veröffentlicht werden möchten. Lassen Sie das Feld leer, wenn Sie anonym spenden möchten.",nameFieldPlaceholder:"Name/Firma für die Spendentafel (leer = anonym)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},bankCtaLabel:"Per Überweisung spenden",ueberweisungHinweis:"Ihr Name und Ihre Adresse werden automatisch in den Verwendungszweck übernommen, damit wir Ihnen die Spendenbescheinigung zuschicken können.",verwendungszweck:"CLUB 500",bankDetails:{kontoinhaber:"Sport Club Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},a6=100,r6=[{feld:1,name:"Ulrike Dunand",anonym:!1,saisonBis:2027},{feld:2,name:"Dieter Graf",anonym:!1,saisonBis:2027},{feld:3,name:"Bernd Reister",anonym:!1,saisonBis:2027},{feld:4,name:"Stefan Weber",anonym:!1,saisonBis:2027},{feld:5,name:"Lutz Grüneberg",anonym:!1,saisonBis:2027},{feld:6,name:"Steffen Allert",anonym:!1,saisonBis:2028},{feld:7,name:"Fa. Müller Putz & Stuck GmbH",anonym:!1,saisonBis:2027},{feld:8,name:"René Frey",anonym:!1,saisonBis:2027},{feld:9,name:"Luciano Rossetti",anonym:!1,saisonBis:2027},{feld:10,name:"Paolo Rossetti",anonym:!1,saisonBis:2027},{feld:11,name:"Rolf Degen",anonym:!1,saisonBis:2027},{feld:12,name:"Senioren des SCKW",anonym:!1,saisonBis:2027},{feld:13,name:"Brigitte und Thomas Fuchs",anonym:!1,saisonBis:2027},{feld:14,name:"ZMVZ|Dr. Schütz GmbH",anonym:!1,saisonBis:2027},{feld:15,name:"Izet|Roter Gugelhan",anonym:!1,saisonBis:2027},{feld:16,name:"Dr. Laubach|Zahnheilkunde",anonym:!1,saisonBis:2027},{feld:17,name:"Manni",anonym:!1,saisonBis:2027},{feld:18,name:"Martina|Laubach",anonym:!1,saisonBis:2027}],i6={felderGesamt:a6,foerderer:r6},Yp="SCKW Gönner",Hn={blau:"#0061D6",magenta:"#CC0546",navy:"#021A3E",grund:"#010814",rahmen:"#264270",weiss:"#FFFFFF",gedaempft:"#96BAF0"},l6=b.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.5rem;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;

    .tafel-name {
      font-size: 0.85rem;
    }

    ${({$zugeklappt:a})=>a&&It`
        /* !important: die Felder setzen display inline */
        li[data-extra="true"] {
          display: none !important;
        }
      `}
  }
`,s6=b.button`
  display: none;
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem;
  font: inherit;
  font-weight: 700;
  color: ${Hn.weiss};
  background: transparent;
  border: 2px solid ${Hn.rahmen};
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;function o6(){const{felderGesamt:a,foerderer:s}=i6,[u,c]=T.useState(!1),d=new Map(s.map(h=>[h.feld,h])),f=s.length,y=Array.from({length:a},(h,p)=>p+1),v=Math.max(0,...s.map(h=>h.feld)),m=Math.ceil((v+6)/3)*3;return i.jsx("section",{"aria-labelledby":"tafel-titel",style:{background:Hn.grund,padding:"3rem 1rem",color:Hn.weiss},children:i.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[i.jsx("h2",{id:"tafel-titel",style:{textAlign:"center",fontSize:"clamp(1.5rem,4vw,2.25rem)",margin:0},children:"Unsere Förderer"}),i.jsxs("p",{style:{textAlign:"center",fontWeight:700,letterSpacing:".05em",marginTop:".75rem"},children:[f," von ",a," Feldern vergeben"]}),i.jsx("div",{role:"progressbar","aria-valuenow":f,"aria-valuemin":0,"aria-valuemax":a,"aria-label":`${f} von ${a} Feldern vergeben`,style:{height:10,borderRadius:999,background:"#0E1E3A",overflow:"hidden",margin:"0 auto 2rem",maxWidth:640},children:i.jsx("div",{style:{width:`${f/a*100}%`,height:"100%",background:Hn.magenta}})}),i.jsx(l6,{id:"tafel-felder",$zugeklappt:!u,children:y.map(h=>{const p=d.get(h),S=p?p.anonym?Yp:p.name:null,w=S?S.replace("|",`
`):null;return i.jsxs("li",{"data-extra":!p&&h>m,style:{background:p?Hn.blau:Hn.navy,border:p?"none":`2px solid ${Hn.rahmen}`,borderRadius:8,padding:".5rem .4rem",minHeight:76,display:"flex",flexDirection:"column",justifyContent:p?"space-between":"center",alignItems:p?"stretch":"center"},children:[i.jsx("span",{style:{fontSize:p?".8rem":"1.1rem",fontWeight:700,color:p?"#C6DEFC":"#3E5A80",lineHeight:1},children:String(h).padStart(2,"0")}),w&&i.jsx("span",{className:"tafel-name",style:{fontSize:"1.05rem",fontWeight:700,textAlign:"center",lineHeight:1.15,hyphens:"manual",whiteSpace:"pre-line"},children:w})]},h)})}),m<a&&i.jsx(s6,{type:"button","aria-expanded":u,"aria-controls":"tafel-felder",onClick:()=>c(h=>!h),children:u?"Weniger anzeigen":`Alle ${a} Felder anzeigen`}),i.jsxs("p",{style:{textAlign:"center",marginTop:"2rem",color:Hn.gedaempft,fontSize:".95rem"},children:["Jedes Feld steht für einen Förderer unserer ersten Mannschaft. Ob Ihr Name erscheint, entscheiden Sie selbst - sonst steht dort „",Yp,'".']})]})})}const c6=b.div`
  color-scheme: light;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  background: #fff;
`,u6=b.section`
  position: relative;
  overflow: hidden;
  background: ${_.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 760px);
`,d6=b.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center 30% / cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 1.2s ease;
`,f6=b.div`
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
`,h6=b(Pe)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 3.5rem;
`,m6=b.h1`
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
`,g6=b.p`
  max-width: 36rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
`,p6=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,qp=b.section`
  padding: 4rem 0;
  scroll-margin-top: 72px;
  background: ${({$paper:a})=>a?_.paper:"#fff"};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,b6=b.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,x6=b.article`
  background: #fff;
  border: 1px solid ${_.line};
  border-top: 4px solid ${_.red};
  border-radius: 14px;
  padding: 1.5rem;
`,y6=b.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.05;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 0 0.6rem;
`,v6=b.p`
  margin: 0;
  line-height: 1.55;
  color: ${_.ink};
`,S6=b.div`
  h2 {
    font-family: ${_.fontDisplay};
    font-weight: 800;
    text-transform: uppercase;
    scroll-margin-top: 90px;
  }
`,j6=b.div`
  max-width: 760px;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,w6=b.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${_.ink};
  margin-bottom: 0.6rem;
`,E6=b.h3`
  font-family: ${_.fontBody};
  font-size: 1rem;
  font-weight: 700;
  color: ${_.ink};
  margin: 0 0 0.6rem;
`,_6=b.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Fd=It`
  border: 2px solid ${({$active:a})=>a?_.blue:_.line};
  background: ${({$active:a})=>a?"#eef5ff":"#fff"};
  border-radius: 12px;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: ${_.blue};
  }
`,z6=b.button`
  ${Fd}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.1rem 1.1rem 1rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: ${_.ink};
`,C6=b.span`
  font-family: ${_.fontDisplay};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  color: ${_.navy};
`,A6=b.span`
  margin-top: 0.35rem;
  font-size: 1rem;
  font-weight: 700;
`,k6=b.span`
  font-size: 0.9rem;
  color: ${_.muted};
`,T6=b.div`
  ${Fd}
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
  margin-bottom: 2rem;
`,R6=b.button`
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
`,M6=b.span`
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
`,D6=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr auto;
    align-items: start;
  }
`,B6=b.div`
  display: flex;
  gap: 0.4rem;
`,O6=b.button`
  ${Fd}
  min-height: 48px;
  padding: 0 0.85rem;
  border-radius: 8px;
  color: ${({$active:a})=>a?"#0650a3":_.ink};
  font: inherit;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
`,pa=b.input`
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
`,$6=b.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${_.muted};
`,N6=b.div`
  margin-bottom: 1.75rem;
`,L6=b.p`
  margin: 0 0 0.6rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${_.muted};
`,U6=b.label`
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
`,H6=b.p`
  margin: 0.35rem 0 0 1.85rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${_.muted};
`,G6=$d`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,V6=$d`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,Y6=b.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:a})=>a?It`animation: ${G6} 0.3s ease forwards;`:It`animation: ${V6} 0.2s ease forwards; pointer-events: none;`}
`,Kp=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,q6=b.div`
  margin-bottom: 2rem;
`,K6=b.button`
  ${Ir}
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
  max-width: 420px;
  min-height: 60px;
  padding: 0.6rem 1.4rem;
`,Q6=b.span`
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.9;
`,Z6=b.p`
  margin: 1rem 0 0;
  padding: 0.85rem 1rem;
  background: ${_.paper};
  border-left: 3px solid ${_.blue};
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${_.ink};
  max-width: 60ch;
`,X6=b.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 24, 48, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,F6=b.div`
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
`,P6=b.button`
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
`,W6=b.h2`
  font-family: ${_.fontDisplay};
  font-size: 1.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 2.5rem 0.5rem 0;
  line-height: 1;
`,I6=b.p`
  font-size: 0.95rem;
  color: ${_.muted};
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,J6=b.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid ${_.line};
`,Os=b.div`
  font-size: 0.95rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
  strong { color: ${_.navy}; }
`,eE=b.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${_.muted};
`,tE=b.p`
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  background: ${_.paper};
  border-left: 3px solid ${_.blue};
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
`;function Qp(a){return a.toLocaleString("de-DE",{minimumFractionDigits:a%1===0?0:1,maximumFractionDigits:2})}function nE(a,s,u,c,d){return["BCD","002","1","SCT",u,a,s,`EUR${c.toFixed(2)}`,"","",d].join(`
`)}const cd=[ct("herren/herren_club500_1"),ct("herren/herren_club500_4"),ct("herren/herren_club500_2"),ct("herren/herren_club500_3"),ct("herren/herren_club500_5")].filter(Boolean),aE=["1 Jahr","2 Jahre","3 Jahre"],g1=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Zp=a=>{document.getElementById(a)?.scrollIntoView({behavior:g1()?"auto":"smooth",block:"start"})};function rE(){const a=n6,[s,u]=T.useState(0);T.useEffect(()=>{if(cd.length<=1||g1())return;const Z=setInterval(()=>u(ae=>(ae+1)%cd.length),6e3);return()=>clearInterval(Z)},[]);const[c,d]=T.useState(0),[f,y]=T.useState(!1),[v,m]=T.useState(""),[h,p]=T.useState("1 Jahr"),[S,w]=T.useState(""),[C,j]=T.useState(!1),[O,L]=T.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[G,X]=T.useState(!1);T.useEffect(()=>{if(!G)return;const Z=ae=>{ae.key==="Escape"&&X(!1)};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[G]);const k=T.useMemo(()=>{if(f){const Z=parseFloat(v.replace(",","."));return isNaN(Z)||Z<a.customAmount.minAmount?0:Z}return a.memberships[c]?.value??0},[f,v,c,a.memberships,a.customAmount.minAmount]),Y=T.useMemo(()=>f?h:a.memberships[c]?.duration??"",[f,h,c,a.memberships]),U=T.useMemo(()=>{const Z=[a.verwendungszweck];if(Y&&Z.push(Y),S.trim()&&Z.push(`Tafel: ${S.trim()}`),C){const ae=[O.vorname,O.nachname].filter(Boolean).join(" "),Ce=[O.strasse,O.plz,O.ort].filter(Boolean).join(", "),ve=[ae,Ce].filter(Boolean).join(", ");ve&&Z.push(`Besch: ${ve}`)}return Z.join(" | ")},[a.verwendungszweck,Y,S,C,O]),I=T.useMemo(()=>nE(a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,k,U),[a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,k,U]),N=(Z,ae)=>L(Ce=>({...Ce,[Z]:ae}));return i.jsxs(c6,{children:[i.jsxs(u6,{"aria-labelledby":"club500-title","data-dark":!0,children:[cd.map((Z,ae)=>i.jsx(d6,{$bg:Z,$active:ae===s,"aria-hidden":"true"},ae)),i.jsx(f6,{}),i.jsxs(h6,{children:[i.jsx(Zr,{$onDark:!0,children:"100 Felder, 500 € pro Feld und Saison"}),i.jsxs(m6,{id:"club500-title",children:["Der ",i.jsx("span",{children:"500er"})," Club."]}),i.jsx(g6,{children:a.subtitle}),i.jsxs(p6,{children:[i.jsx(Qa,{href:"#feld-sichern",onClick:Z=>{Z.preventDefault(),Zp("feld-sichern")},children:"Feld sichern"}),i.jsx(Qa,{href:"#tafel-titel",$variant:"outlineLight",onClick:Z=>{Z.preventDefault(),Zp("tafel-titel")},children:"Unsere Förderer ansehen"})]})]})]}),i.jsx(qp,{"aria-labelledby":"benefits-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"benefits-title",eyebrow:"Ihre Unterstützung",title:"Was Ihr Feld bewirkt."}),i.jsx(b6,{children:a.benefits.map(Z=>i.jsxs(x6,{children:[i.jsx(y6,{children:Z.title}),i.jsx(v6,{children:Z.text})]},Z.title))})]})}),i.jsx(S6,{"data-dark":!0,children:i.jsx(o6,{})}),i.jsx(qp,{$paper:!0,id:"feld-sichern","aria-labelledby":"feld-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"feld-title",eyebrow:"Per Überweisung oder QR-Code",title:"Feld sichern.",lead:"Wählen Sie, für wie viele Saisons Sie ein Feld übernehmen möchten."}),i.jsxs(j6,{children:[i.jsxs("div",{role:"group","aria-labelledby":"optionen-label",children:[i.jsx(E6,{id:"optionen-label",children:a.sectionTitle}),i.jsx(_6,{children:a.memberships.map((Z,ae)=>{const Ce=!f&&c===ae;return i.jsxs(z6,{$active:Ce,"aria-pressed":Ce,onClick:()=>{y(!1),d(ae)},type:"button",children:[i.jsx(C6,{children:Z.label}),i.jsx(A6,{children:Z.duration}),i.jsx(k6,{children:Z.description})]},Z.value)})}),i.jsxs(T6,{$active:f,onClick:()=>{f||y(!0)},children:[i.jsxs(R6,{type:"button","aria-pressed":f,children:[i.jsx(M6,{$active:f}),a.customAmount.label]}),f&&i.jsxs(D6,{onClick:Z=>Z.stopPropagation(),children:[i.jsx(pa,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR","aria-label":"Eigener Betrag in Euro",value:v,onChange:Z=>m(Z.target.value),autoFocus:!0}),i.jsx(B6,{role:"group","aria-label":"Laufzeit",children:aE.map(Z=>i.jsx(O6,{$active:h===Z,"aria-pressed":h===Z,onClick:()=>p(Z),type:"button",children:Z},Z))})]}),f&&i.jsx($6,{children:a.customAmount.minHint})]})]}),i.jsxs(N6,{children:[i.jsx(w6,{htmlFor:"tafel-name",children:a.spendentafel.label}),i.jsx(L6,{id:"tafel-hinweis",children:a.spendentafel.sublabel}),i.jsx(pa,{id:"tafel-name",type:"text","aria-describedby":"tafel-hinweis",placeholder:a.spendentafel.nameFieldPlaceholder,value:S,onChange:Z=>w(Z.target.value)})]}),i.jsxs(q6,{children:[i.jsxs(U6,{children:[i.jsx("input",{type:"checkbox",checked:C,onChange:Z=>j(Z.target.checked)}),i.jsx("span",{children:a.bescheinigung.label})]}),i.jsx(H6,{children:a.bescheinigung.hinweis}),i.jsxs(Y6,{$visible:C,children:[i.jsxs(Kp,{children:[i.jsx(pa,{type:"text",name:"bescheinigung-vorname",autoComplete:"given-name","aria-label":a.bescheinigung.fields.vorname,placeholder:a.bescheinigung.fields.vorname,value:O.vorname,onChange:Z=>N("vorname",Z.target.value)}),i.jsx(pa,{type:"text",name:"bescheinigung-nachname",autoComplete:"family-name","aria-label":a.bescheinigung.fields.nachname,placeholder:a.bescheinigung.fields.nachname,value:O.nachname,onChange:Z=>N("nachname",Z.target.value)})]}),i.jsx(pa,{type:"email",name:"bescheinigung-email",autoComplete:"email","aria-label":a.bescheinigung.fields.email,placeholder:a.bescheinigung.fields.email,value:O.email,onChange:Z=>N("email",Z.target.value)}),i.jsx(pa,{type:"text",name:"bescheinigung-strasse",autoComplete:"street-address","aria-label":a.bescheinigung.fields.strasse,placeholder:a.bescheinigung.fields.strasse,value:O.strasse,onChange:Z=>N("strasse",Z.target.value)}),i.jsxs(Kp,{children:[i.jsx(pa,{type:"text",name:"bescheinigung-plz",autoComplete:"postal-code","aria-label":a.bescheinigung.fields.plz,placeholder:a.bescheinigung.fields.plz,value:O.plz,onChange:Z=>N("plz",Z.target.value)}),i.jsx(pa,{type:"text",name:"bescheinigung-ort",autoComplete:"address-level2","aria-label":a.bescheinigung.fields.ort,placeholder:a.bescheinigung.fields.ort,value:O.ort,onChange:Z=>N("ort",Z.target.value)})]})]})]}),i.jsxs(K6,{type:"button",onClick:()=>X(!0),children:[a.bankCtaLabel,i.jsxs(Q6,{children:[Qp(k)," €"]})]}),C&&i.jsx(Z6,{children:a.ueberweisungHinweis})]})]})}),i.jsx(ul,{}),G&&i.jsx(X6,{onClick:()=>X(!1),children:i.jsxs(F6,{role:"dialog","aria-modal":"true","aria-labelledby":"qr-title",onClick:Z=>Z.stopPropagation(),children:[i.jsx(P6,{type:"button","aria-label":"Schließen",onClick:()=>X(!1),autoFocus:!0,children:"×"}),i.jsx(W6,{id:"qr-title",children:"Überweisung per QR-Code"}),i.jsx(I6,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING usw.). Alle Daten werden automatisch ausgefüllt."}),k>0&&i.jsx(J6,{children:i.jsx(m1,{value:I,size:220,level:"M"})}),i.jsx(Os,{children:i.jsx("strong",{children:a.bankDetails.kontoinhaber})}),i.jsxs(Os,{children:["IBAN: ",i.jsx("strong",{children:a.bankDetails.iban})]}),i.jsxs(Os,{children:["Betrag: ",i.jsxs("strong",{children:[Qp(k)," €"]}),Y&&i.jsxs(i.Fragment,{children:[", ",i.jsx("strong",{children:Y})]})]}),i.jsxs(Os,{children:["Verwendungszweck: ",i.jsx("strong",{children:U})]}),i.jsxs(eE,{children:[a.bankDetails.bank,", ",a.bankDetails.adresse]}),C&&O.email&&i.jsxs(tE,{children:["Wir senden Ihre Spendenbescheinigung an ",i.jsx("strong",{children:O.email}),"."]})]})})]})}const iE="2026/27",lE=[{anstoss:"2026-08-15T16:00",gegner:"FC Wolfenweiler-Schallstadt",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Heidi Reister"},{anstoss:"2026-08-26T17:45",gegner:"FC Rot-Weiß Salem",ort:"Fürstenberg",wettbewerb:"SBFV-Pokal",spender:"Manuel Nicoletti"},{anstoss:"2026-08-29T16:00",gegner:"SC Lahr",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Lutz Grüneberg"},{anstoss:"2026-09-12T16:00",gegner:"SV 08 Laufenburg",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Espac Maschinenbau GmbH"},{anstoss:"2026-09-26T16:00",gegner:"Spvgg. Gundelfingen/Wildtal",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Lejla Kocan"},{anstoss:"2026-10-10T16:00",gegner:"SC Pfullendorf",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Gerhard Huger"},{anstoss:"2026-10-24T16:00",gegner:"1. FC Rielasingen-Arlen",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Sabine und Michael Uhl"},{anstoss:"2026-11-07T14:30",gegner:"FC Denzlingen",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:"Iris und Thomas Bode"},{anstoss:"2026-11-14T14:30",gegner:"SV 08 Kuppenheim",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:"Phoenicia"},{anstoss:"2026-12-05T14:30",gegner:"SV Bühlertal",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-03-20T16:00",gegner:"FC Auggen",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-04-03T16:00",gegner:"SV Linx",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-04-17T16:00",gegner:"VfR Hausen",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-05-01T16:00",gegner:"SC Wyhl",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-05-15T16:00",gegner:"SC Hofstetten",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-06-05T16:00",gegner:"FC Rot-Weiß Salem",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null}],sE={saison:iE,spiele:lE},Xp="150 €",oE="sponsoring@sckw.de",cE=ct("herren/herren_1.jpg"),uE=[{title:"Stadiondurchsage",text:"Ihr Name vor dem Anpfiff, bei jedem Tor und zur Halbzeit."},{title:"Heimspielmagazin",text:"Nennung als Ballspender im Heft zum Spiel."},{title:"Instagram",text:"Eine Story mit Ihrem Namen auf unserem Instagram-Kanal."}],p1=a=>new Date(a).toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit",year:"numeric"}),dE=a=>new Date(a).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),fE=a=>{const s=`SCKW - ${a.gegner} am ${p1(a.anstoss)}`,u=`Ballspende: ${s}`,c=`Hallo,

ich möchte Ballspender beim Heimspiel ${s} werden.

Name für Durchsage und Heft:
Telefon:

Viele Grüße`;return`mailto:${oE}?subject=${encodeURIComponent(u)}&body=${encodeURIComponent(c)}`},hE=b.div`
  color-scheme: light;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  background: #fff;
`,mE=b.section`
  position: relative;
  overflow: hidden;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(10, 24, 48, 0.94) 0%, rgba(10, 24, 48, 0.7) 55%, rgba(10, 24, 48, 0.35) 100%),
    url(${cE}) center 30% / cover no-repeat,
    ${_.navyDeep};
`,gE=b(Pe)`
  padding-top: 5rem;
  padding-bottom: 3.5rem;
`,pE=b.h1`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.9;
  margin: 0;
`,bE=b.p`
  max-width: 34rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
`,Fp=b.section`
  padding: 4rem 0;
  scroll-margin-top: 72px;
  background: ${({$paper:a})=>a?_.paper:"#fff"};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,xE=b.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,yE=b.div`
  border: 1px solid ${_.line};
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    font-family: ${_.fontDisplay};
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
    color: ${_.muted};
    line-height: 1.5;
  }
`,vE=b.p`
  margin: 2rem 0 0;
  font-size: 1.1rem;

  strong {
    font-family: ${_.fontDisplay};
    font-size: 2rem;
    color: ${_.red};
    margin-right: 0.5rem;
  }
`,SE=b.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
`,jE=b.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;
  background: #fff;
  border: 1px solid ${_.line};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  opacity: ${({$vorbei:a})=>a?.6:1};

  @media (min-width: 768px) {
    grid-template-columns: 11rem 1fr auto;
  }
`,wE=b.div`
  font-weight: 700;

  span {
    display: block;
    font-weight: 400;
    color: ${_.muted};
    font-size: 0.9rem;
  }
`,EE=b.div`
  font-family: ${_.fontDisplay};
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.15;

  span {
    display: block;
    font-family: ${_.fontBody};
    font-size: 0.9rem;
    font-weight: 400;
    color: ${_.muted};
  }
`,_E=b.div`
  font-weight: 700;
  color: ${_.blue};

  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${_.muted};
  }

  @media (min-width: 768px) {
    text-align: right;
  }
`,zE=b.span`
  color: ${_.muted};
  font-weight: 600;
`;function CE(){const{saison:a,spiele:s}=sE,u=Date.now(),c=s.filter(d=>!d.spender&&new Date(d.anstoss).getTime()>u).length;return i.jsxs(hE,{children:[i.jsx(mE,{"aria-labelledby":"ballspende-title","data-dark":!0,children:i.jsxs(gE,{children:[i.jsxs(Zr,{$onDark:!0,children:[Xp," pro Heimspiel · Saison ",a]}),i.jsx(pE,{id:"ballspende-title",children:"Ballspende."}),i.jsx(bE,{children:"Sie spenden den Spielball für ein Heimspiel unserer Ersten in der Verbandsliga. Dafür hört das ganze Stadion Ihren Namen."}),i.jsx(Qa,{href:"#spiele",children:c>0?`${c} freie Spiele ansehen`:"Alle Spiele ansehen"})]})}),i.jsx(Fp,{"aria-labelledby":"leistung-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"leistung-title",eyebrow:"Ihre Ballspende",title:"Was Sie bekommen."}),i.jsx(xE,{children:uE.map(d=>i.jsxs(yE,{children:[i.jsx("h3",{children:d.title}),i.jsx("p",{children:d.text})]},d.title))}),i.jsxs(vE,{children:[i.jsx("strong",{children:Xp})," pro Spiel · 5er-Pack 500 €"]})]})}),i.jsx(Fp,{$paper:!0,id:"spiele","aria-labelledby":"spiele-title",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"spiele-title",eyebrow:`Heimspiele ${a}`,title:"Alle Spiele, alle Ballspender.",lead:"Freies Spiel gefunden? Ein Klick, und die Anfrage ist schon vorbereitet."}),i.jsx(SE,{children:s.map(d=>{const f=new Date(d.anstoss).getTime()<u;return i.jsxs(jE,{$vorbei:f&&!d.spender,children:[i.jsxs(wE,{children:[p1(d.anstoss),i.jsxs("span",{children:[dE(d.anstoss)," Uhr"]})]}),i.jsxs(EE,{children:[d.gegner,i.jsxs("span",{children:[d.ort,d.wettbewerb!=="Verbandsliga"&&` · ${d.wettbewerb}`]})]}),d.spender?i.jsxs(_E,{children:[i.jsx("span",{children:"Ballspender"}),d.spender]}):f?i.jsx(zE,{children:"Spiel vorbei"}):i.jsx(Qa,{href:fE(d),children:"Spiel anfragen"})]},d.anstoss)})})]})}),i.jsx(ul,{})]})}const AE=["Ein Spieler-Post in der Hinrunde und einer in der Rückrunde","Eine Vorstellung als Partner mit ein bis zwei gemeinsamen Bildern mit dem Spieler","Sie kommen mit aufs Bild, wenn er trifft oder Spieler des Spiels wird","Ein vom Spieler signiertes Trikot für Ihr Büro","Exklusiv: nur ein Partner pro Spieler","So sichtbar oder so dezent, wie Sie möchten"];function kE(){return i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3 8.5l3 3 7-7",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}function TE(){const a=`mailto:${jt.email}?subject=${encodeURIComponent("Personal Partner - Interesse")}`;return i.jsxs(RE,{children:[i.jsx(ME,{"aria-labelledby":"pp-title","data-dark":!0,children:i.jsxs(Pe,{children:[i.jsx(DE,{to:"/sponsoring",children:"Zurück zur Übersicht"}),i.jsx(Zr,{$onDark:!0,children:"Persönliche Partnerschaft"}),i.jsx(BE,{id:"pp-title",children:"Personal Partner."}),i.jsx(Qb,{$onDark:!0,children:"Unterstützen Sie gezielt einen SCKW-Spieler und begleiten Sie ihn durch seine Saison. Persönlich, exklusiv und ganz nah an der Mannschaft."})]})}),i.jsx(OE,{"aria-labelledby":"pp-leistungen",children:i.jsx(Pe,{children:i.jsxs($E,{children:[i.jsxs("div",{children:[i.jsx(Ut,{id:"pp-leistungen",eyebrow:"Ein Spieler, ein Partner",title:"Ganz nah dran."}),i.jsx(NE,{children:"Als Personal Partner stehen Sie hinter einem einzelnen Spieler und begleiten seine Saison beim SCKW. Das ist persönlicher als jede Bande: Sie lernen den Spieler kennen, erscheinen gemeinsam mit ihm auf unseren Kanälen und sind bei seinen großen Momenten dabei."})]}),i.jsxs(LE,{children:[i.jsx(UE,{children:"Das ist enthalten"}),i.jsx(HE,{children:AE.map(s=>i.jsxs("li",{children:[i.jsx(kE,{}),s]},s))}),i.jsxs(GE,{children:[i.jsx("span",{children:"Eine Saison"}),i.jsx(VE,{children:"2.500 €"})]}),i.jsx(YE,{children:"Verhandlungsbasis, im Gespräch individuell anpassbar."})]})]})})}),i.jsx(qE,{"aria-labelledby":"pp-kontakt",children:i.jsxs(Pe,{children:[i.jsx(Ut,{id:"pp-kontakt",eyebrow:"Kontakt",title:"Sprechen wir darüber.",lead:"Erzählen Sie uns, welchen Spieler Sie begleiten möchten. Wir melden uns innerhalb von 24 Stunden."}),i.jsx(Qa,{href:a,children:"Per E-Mail anfragen"})]})}),i.jsx(ul,{})]})}const RE=b.div`
  color-scheme: light;
  font-family: ${_.fontBody};
  color: ${_.ink};
  text-align: left;
  background: #fff;
`,ME=b.section`
  background: ${_.navy};
  color: #fff;
  padding: 3rem 0 3.5rem;

  @media (min-width: 768px) {
    padding: 4rem 0 5rem;
  }
`,DE=b(va)`
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
`,BE=b.h1`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 9vw, 5.5rem);
  line-height: 0.9;
  margin: 0;
  color: #fff;
`,OE=b.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,$E=b.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: 4rem;
    align-items: start;
  }
`,NE=b.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.65;
  color: ${_.ink};
  max-width: 60ch;
`,LE=b.div`
  background: #fff;
  border: 1px solid ${_.line};
  border-top: 4px solid ${_.red};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,UE=b.h3`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${_.navy};
  margin: 0 0 1rem;
`,HE=b.ul`
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
`,GE=b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${_.line};
  font-weight: 600;
  color: ${_.muted};
`,VE=b.span`
  font-family: ${_.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 2.8rem);
  line-height: 1;
  color: ${_.navy};
`,YE=b.p`
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: ${_.muted};
`,qE=b.section`
  background: ${_.paper};
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,KE="https://partner.sckw.de",QE=6e3,ZE=[{id:"reichweite",active:!0,eyebrow:"SC Konstanz-Wollmatingen · Sponsoring",title:"1,7 Mio. Views in 12 Monaten",subline:"100 % organisch, ohne Werbebudget. Ihre Marke ist bei jedem Spiel dabei.",href:"/sponsoring",image:"herren/herren_6",cta:"Partner werden"},{id:"exklusiv",active:!0,eyebrow:"Exklusiv-Partnerschaften",title:"Das Gesicht des Vereins werden",subline:"Stadionname, Trikot-Rücken oder Trikot-Ärmel sind noch frei.",href:"/sponsoring#angebot",image:"herren/herren_16",badge:"Noch frei",cta:"Details ansehen"},{id:"werbeflaechen",active:!0,eyebrow:"Werbeflächen",title:"Ihr Logo bei jedem Heimspiel",subline:"Banden und Banner direkt am Spielfeldrand.",href:"/sponsoring#werbeflaechen",image:"herren/herren_5",cta:"Flächen ansehen"},{id:"spieltag",active:!0,eyebrow:"Spieltag & Medien",title:"Schon mit kleinem Budget dabei",subline:"Ballspende, Spielpräsentator oder Magazin-Inserat.",href:"/sponsoring#spieltag",image:"herren/herren_14",badge:"Einstieg",cta:"Möglichkeiten ansehen"},{id:"club-500",active:!0,eyebrow:"500er Club",title:"Mit 500 € pro Saison dabei",subline:"Ein Feld im 500er Club unterstützt direkt unsere erste Mannschaft.",href:"/sponsoring/club-500",image:"herren/herren_6",cta:"Zum 500er Club"},{id:"kontakt",active:!0,eyebrow:"Partner werden",title:"Lassen Sie uns reden",subline:"Wir stellen gern ein Paket nach Ihren Wünschen zusammen: sponsoring@sckw.de",href:"/sponsoring",image:"herren/herren_16",cta:"Zur Sponsoring-Seite"}],ud=ZE.filter(a=>a.active),XE=45;function FE(){const[a,s]=T.useState(0),[u,c]=T.useState(!1),[d,f]=T.useState(!1),y=T.useRef(null),v=ud.length,m=T.useCallback(C=>s((C%v+v)%v),[v]);T.useEffect(()=>{const C=window.matchMedia("(prefers-reduced-motion: reduce)");f(C.matches);const j=()=>f(C.matches);return C.addEventListener?.("change",j),()=>C.removeEventListener?.("change",j)},[]),T.useEffect(()=>{if(u||d||v<=1)return;const C=setInterval(()=>s(j=>(j+1)%v),QE);return()=>clearInterval(C)},[u,d,v]);const h=C=>{y.current=C.touches[0].clientX},p=C=>{if(y.current===null)return;const j=C.changedTouches[0].clientX-y.current;Math.abs(j)>XE&&m(a+(j<0?1:-1)),y.current=null};if(v===0)return null;const S=ud[a],w=ct(S.image);return i.jsxs(PE,{role:"group","aria-roledescription":"Karussell","aria-label":"Sponsoring-Angebote des SC Konstanz-Wollmatingen",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1),onTouchStart:h,onTouchEnd:p,children:[i.jsxs(b1,{href:`${KE}${S.href}`,target:"_blank",rel:"noopener noreferrer","aria-label":`${S.title} - ${S.cta} (öffnet in neuem Tab)`,$bg:w,children:[i.jsxs(WE,{children:[i.jsx(IE,{src:"/logo-transparent.avif",alt:"SC Konstanz-Wollmatingen"}),S.badge&&i.jsx(JE,{children:S.badge})]}),i.jsxs(e_,{children:[i.jsx(t_,{children:S.eyebrow}),i.jsx(n_,{children:S.title}),i.jsx(a_,{children:S.subline}),i.jsxs(r_,{children:[S.cta,i.jsx("span",{"aria-hidden":!0,children:"→"})]})]})]},S.id),v>1&&i.jsxs(i_,{children:[i.jsx(Pp,{onClick:()=>m(a-1),"aria-label":"Vorheriges Angebot",children:"‹"}),i.jsx(l_,{children:ud.map((C,j)=>i.jsx(s_,{$active:j===a,onClick:()=>m(j),"aria-label":`Angebot ${j+1} von ${v}`,"aria-current":j===a?"true":void 0},C.id))}),i.jsx(Pp,{onClick:()=>m(a+1),"aria-label":"Nächstes Angebot",children:"›"})]})]})}const PE=b.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
`,b1=b.a`
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
      ${cl.colors.primaryDark} 155%
    );

    &::before {
      display: none;
    }
  }
`,WE=b.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,IE=b.img`
  height: 44px;
  width: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));

  @media (max-width: 480px) {
    height: 36px;
  }
`,JE=b.span`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
  color: #fff;
  background: ${cl.colors.primary};
  box-shadow: 0 4px 14px rgba(217, 36, 95, 0.45);
`,e_=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,t_=b.span`
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
    background: ${cl.colors.primary};
  }
`,n_=b.h2`
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
`,a_=b.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
  max-width: 42ch;

  @media (max-width: 480px) {
    font-size: 14.5px;
  }
`,r_=b.span`
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
  color: ${cl.colors.primaryDark};
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);

  span {
    transition: transform 0.2s ease;
  }

  ${b1}:hover & span {
    transform: translateX(4px);
  }
`,i_=b.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,Pp=b.button`
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
`,l_=b.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,s_=b.button`
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
`,o_=j0`
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
`,c_=b.div`
  padding: 0;
  display: flex;
  justify-content: center;
`;function u_(){return i.jsxs(i.Fragment,{children:[i.jsx(o_,{}),i.jsx(c_,{children:i.jsx(FE,{})})]})}function d_(){const{pathname:a,hash:s}=fn();return T.useEffect(()=>{if(!s){window.scrollTo(0,0);return}const u=decodeURIComponent(s.slice(1));let c=0,d=0,f=0;const y=()=>{const v=document.getElementById(u);v?(v.scrollIntoView({block:"start"}),f=window.setTimeout(()=>v.scrollIntoView({block:"start"}),400)):c++<20&&(d=window.setTimeout(y,100))};return y(),()=>{window.clearTimeout(d),window.clearTimeout(f)}},[a,s]),null}function Ur({children:a}){return i.jsxs(i.Fragment,{children:[i.jsx(U0,{}),i.jsx("main",{id:"inhalt",children:a})]})}function f_(){return i.jsxs(u5,{children:[i.jsx(d_,{}),i.jsxs(H2,{children:[i.jsx(Wt,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(U0,{}),i.jsx(Gs,{to:"/sponsoring",replace:!0})]})}),i.jsx(Wt,{path:"/sponsoring",element:i.jsx(Ur,{children:i.jsx(Jw,{})})}),i.jsx(Wt,{path:"/sponsoring-handoff",element:i.jsx(A3,{})}),i.jsx(Wt,{path:"/widget",element:i.jsx(u_,{})}),i.jsx(Wt,{path:"/sponsoring/club-500",element:i.jsx(Ur,{children:i.jsx(rE,{})})}),i.jsx(Wt,{path:"/sponsoring/ballspende",element:i.jsx(Ur,{children:i.jsx(CE,{})})}),i.jsx(Wt,{path:"/sponsoring/pakete",element:i.jsx(Gs,{to:"/sponsoring#angebot",replace:!0})}),i.jsx(Wt,{path:"/sponsoring/spielerpatenschaft",element:i.jsx(Ur,{children:i.jsx(TE,{})})}),i.jsx(Wt,{path:"/mockup-generator",element:i.jsx(Ur,{children:i.jsx(Q4,{})})}),i.jsx(Wt,{path:"/renovierung",element:i.jsx(Ur,{children:i.jsx(gj,{})})}),i.jsx(Wt,{path:"*",element:i.jsx(Gs,{to:"/sponsoring",replace:!0})})]})]})}console.log("sckw sponsoring Website loaded");Py.createRoot(document.getElementById("root")).render(i.jsx(T.StrictMode,{children:i.jsx(Xv,{theme:cl,children:i.jsx(f_,{})})}));
