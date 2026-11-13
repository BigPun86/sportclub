(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const y of f.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function Gy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ju={exports:{}},Fi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Vy(){if(qg)return Fi;qg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,f){var y=null;if(f!==void 0&&(y=""+f),d.key!==void 0&&(y=""+d.key),"key"in d){f={};for(var v in d)v!=="key"&&(f[v]=d[v])}else f=d;return d=f.ref,{$$typeof:a,type:c,key:y,ref:d!==void 0?d:null,props:f}}return Fi.Fragment=s,Fi.jsx=u,Fi.jsxs=u,Fi}var Kg;function Yy(){return Kg||(Kg=1,ju.exports=Vy()),ju.exports}var i=Yy(),wu={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function qy(){if(Qg)return ue;Qg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),y=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function w(z){return z===null||typeof z!="object"?null:(z=S&&z[S]||z["@@iterator"],typeof z=="function"?z:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,$={};function L(z,Q,P){this.props=z,this.context=Q,this.refs=$,this.updater=P||C}L.prototype.isReactComponent={},L.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},L.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=L.prototype;function Z(z,Q,P){this.props=z,this.context=Q,this.refs=$,this.updater=P||C}var T=Z.prototype=new N;T.constructor=Z,j(T,L.prototype),T.isPureReactComponent=!0;var Y=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function H(z,Q,P,W,te,pe){return P=pe.ref,{$$typeof:a,type:z,key:Q,ref:P!==void 0?P:null,props:pe}}function de(z,Q){return H(z.type,Q,void 0,void 0,void 0,z.props)}function se(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function X(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(P){return Q[P]})}var ce=/\/+/g;function ze(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?X(""+z.key):Q.toString(36)}function mt(){}function it(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(mt,mt):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ke(z,Q,P,W,te){var pe=typeof z;(pe==="undefined"||pe==="boolean")&&(z=null);var ie=!1;if(z===null)ie=!0;else switch(pe){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(z.$$typeof){case a:case s:ie=!0;break;case x:return ie=z._init,ke(ie(z._payload),Q,P,W,te)}}if(ie)return te=te(z),ie=W===""?"."+ze(z,0):W,Y(te)?(P="",ie!=null&&(P=ie.replace(ce,"$&/")+"/"),ke(te,Q,P,"",function(ut){return ut})):te!=null&&(se(te)&&(te=de(te,P+(te.key==null||z&&z.key===te.key?"":(""+te.key).replace(ce,"$&/")+"/")+ie)),Q.push(te)),1;ie=0;var We=W===""?".":W+":";if(Y(z))for(var we=0;we<z.length;we++)W=z[we],pe=We+ze(W,we),ie+=ke(W,Q,P,pe,te);else if(we=w(z),typeof we=="function")for(z=we.call(z),we=0;!(W=z.next()).done;)W=W.value,pe=We+ze(W,we++),ie+=ke(W,Q,P,pe,te);else if(pe==="object"){if(typeof z.then=="function")return ke(it(z),Q,P,W,te);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function G(z,Q,P){if(z==null)return z;var W=[],te=0;return ke(z,W,"","",function(pe){return Q.call(P,pe,te++)}),W}function F(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(P){(z._status===0||z._status===-1)&&(z._status=1,z._result=P)},function(P){(z._status===0||z._status===-1)&&(z._status=2,z._result=P)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var ae=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function fe(){}return ue.Children={map:G,forEach:function(z,Q,P){G(z,function(){Q.apply(this,arguments)},P)},count:function(z){var Q=0;return G(z,function(){Q++}),Q},toArray:function(z){return G(z,function(Q){return Q})||[]},only:function(z){if(!se(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ue.Component=L,ue.Fragment=u,ue.Profiler=d,ue.PureComponent=Z,ue.StrictMode=c,ue.Suspense=h,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ue.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},ue.cache=function(z){return function(){return z.apply(null,arguments)}},ue.cloneElement=function(z,Q,P){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var W=j({},z.props),te=z.key,pe=void 0;if(Q!=null)for(ie in Q.ref!==void 0&&(pe=void 0),Q.key!==void 0&&(te=""+Q.key),Q)!I.call(Q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Q.ref===void 0||(W[ie]=Q[ie]);var ie=arguments.length-2;if(ie===1)W.children=P;else if(1<ie){for(var We=Array(ie),we=0;we<ie;we++)We[we]=arguments[we+2];W.children=We}return H(z.type,te,void 0,void 0,pe,W)},ue.createContext=function(z){return z={$$typeof:y,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},ue.createElement=function(z,Q,P){var W,te={},pe=null;if(Q!=null)for(W in Q.key!==void 0&&(pe=""+Q.key),Q)I.call(Q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(te[W]=Q[W]);var ie=arguments.length-2;if(ie===1)te.children=P;else if(1<ie){for(var We=Array(ie),we=0;we<ie;we++)We[we]=arguments[we+2];te.children=We}if(z&&z.defaultProps)for(W in ie=z.defaultProps,ie)te[W]===void 0&&(te[W]=ie[W]);return H(z,pe,void 0,void 0,null,te)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(z){return{$$typeof:v,render:z}},ue.isValidElement=se,ue.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:F}},ue.memo=function(z,Q){return{$$typeof:g,type:z,compare:Q===void 0?null:Q}},ue.startTransition=function(z){var Q=U.T,P={};U.T=P;try{var W=z(),te=U.S;te!==null&&te(P,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(fe,ae)}catch(pe){ae(pe)}finally{U.T=Q}},ue.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ue.use=function(z){return U.H.use(z)},ue.useActionState=function(z,Q,P){return U.H.useActionState(z,Q,P)},ue.useCallback=function(z,Q){return U.H.useCallback(z,Q)},ue.useContext=function(z){return U.H.useContext(z)},ue.useDebugValue=function(){},ue.useDeferredValue=function(z,Q){return U.H.useDeferredValue(z,Q)},ue.useEffect=function(z,Q,P){var W=U.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(z,Q)},ue.useId=function(){return U.H.useId()},ue.useImperativeHandle=function(z,Q,P){return U.H.useImperativeHandle(z,Q,P)},ue.useInsertionEffect=function(z,Q){return U.H.useInsertionEffect(z,Q)},ue.useLayoutEffect=function(z,Q){return U.H.useLayoutEffect(z,Q)},ue.useMemo=function(z,Q){return U.H.useMemo(z,Q)},ue.useOptimistic=function(z,Q){return U.H.useOptimistic(z,Q)},ue.useReducer=function(z,Q,P){return U.H.useReducer(z,Q,P)},ue.useRef=function(z){return U.H.useRef(z)},ue.useState=function(z){return U.H.useState(z)},ue.useSyncExternalStore=function(z,Q,P){return U.H.useSyncExternalStore(z,Q,P)},ue.useTransition=function(){return U.H.useTransition()},ue.version="19.1.0",ue}var Zg;function Td(){return Zg||(Zg=1,wu.exports=qy()),wu.exports}var k=Td();const _e=Gy(k);var Eu={exports:{}},Pi={},_u={exports:{}},zu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Ky(){return Xg||(Xg=1,function(a){function s(G,F){var ae=G.length;G.push(F);e:for(;0<ae;){var fe=ae-1>>>1,z=G[fe];if(0<d(z,F))G[fe]=F,G[ae]=z,ae=fe;else break e}}function u(G){return G.length===0?null:G[0]}function c(G){if(G.length===0)return null;var F=G[0],ae=G.pop();if(ae!==F){G[0]=ae;e:for(var fe=0,z=G.length,Q=z>>>1;fe<Q;){var P=2*(fe+1)-1,W=G[P],te=P+1,pe=G[te];if(0>d(W,ae))te<z&&0>d(pe,W)?(G[fe]=pe,G[te]=ae,fe=te):(G[fe]=W,G[P]=ae,fe=P);else if(te<z&&0>d(pe,ae))G[fe]=pe,G[te]=ae,fe=te;else break e}}return F}function d(G,F){var ae=G.sortIndex-F.sortIndex;return ae!==0?ae:G.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var y=Date,v=y.now();a.unstable_now=function(){return y.now()-v}}var h=[],g=[],x=1,S=null,w=3,C=!1,j=!1,$=!1,L=!1,N=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function Y(G){for(var F=u(g);F!==null;){if(F.callback===null)c(g);else if(F.startTime<=G)c(g),F.sortIndex=F.expirationTime,s(h,F);else break;F=u(g)}}function U(G){if($=!1,Y(G),!j)if(u(h)!==null)j=!0,I||(I=!0,ze());else{var F=u(g);F!==null&&ke(U,F.startTime-G)}}var I=!1,H=-1,de=5,se=-1;function X(){return L?!0:!(a.unstable_now()-se<de)}function ce(){if(L=!1,I){var G=a.unstable_now();se=G;var F=!0;try{e:{j=!1,$&&($=!1,Z(H),H=-1),C=!0;var ae=w;try{t:{for(Y(G),S=u(h);S!==null&&!(S.expirationTime>G&&X());){var fe=S.callback;if(typeof fe=="function"){S.callback=null,w=S.priorityLevel;var z=fe(S.expirationTime<=G);if(G=a.unstable_now(),typeof z=="function"){S.callback=z,Y(G),F=!0;break t}S===u(h)&&c(h),Y(G)}else c(h);S=u(h)}if(S!==null)F=!0;else{var Q=u(g);Q!==null&&ke(U,Q.startTime-G),F=!1}}break e}finally{S=null,w=ae,C=!1}F=void 0}}finally{F?ze():I=!1}}}var ze;if(typeof T=="function")ze=function(){T(ce)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,it=mt.port2;mt.port1.onmessage=ce,ze=function(){it.postMessage(null)}}else ze=function(){N(ce,0)};function ke(G,F){H=N(function(){G(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(G){switch(w){case 1:case 2:case 3:var F=3;break;default:F=w}var ae=w;w=F;try{return G()}finally{w=ae}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(G,F){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ae=w;w=G;try{return F()}finally{w=ae}},a.unstable_scheduleCallback=function(G,F,ae){var fe=a.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?fe+ae:fe):ae=fe,G){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ae+z,G={id:x++,callback:F,priorityLevel:G,startTime:ae,expirationTime:z,sortIndex:-1},ae>fe?(G.sortIndex=ae,s(g,G),u(h)===null&&G===u(g)&&($?(Z(H),H=-1):$=!0,ke(U,ae-fe))):(G.sortIndex=z,s(h,G),j||C||(j=!0,I||(I=!0,ze()))),G},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(G){var F=w;return function(){var ae=w;w=F;try{return G.apply(this,arguments)}finally{w=ae}}}}(zu)),zu}var Fg;function Qy(){return Fg||(Fg=1,_u.exports=Ky()),_u.exports}var Cu={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function Zy(){if(Pg)return ht;Pg=1;var a=Td();function s(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(h,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:h,containerInfo:g,implementation:x}}var y=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ht.createPortal=function(h,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return f(h,g,null,x)},ht.flushSync=function(h){var g=y.T,x=c.p;try{if(y.T=null,c.p=2,h)return h()}finally{y.T=g,c.p=x,c.d.f()}},ht.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(h,g))},ht.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},ht.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var x=g.as,S=v(x,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?c.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:C}):x==="script"&&c.d.X(h,{crossOrigin:S,integrity:w,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ht.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=v(g.as,g.crossOrigin);c.d.M(h,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(h)},ht.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=v(x,g.crossOrigin);c.d.L(h,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ht.preloadModule=function(h,g){if(typeof h=="string")if(g){var x=v(g.as,g.crossOrigin);c.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(h)},ht.requestFormReset=function(h){c.d.r(h)},ht.unstable_batchedUpdates=function(h,g){return h(g)},ht.useFormState=function(h,g,x){return y.H.useFormState(h,g,x)},ht.useFormStatus=function(){return y.H.useHostTransitionStatus()},ht.version="19.1.0",ht}var Wg;function Xy(){if(Wg)return Cu.exports;Wg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Cu.exports=Zy(),Cu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function Fy(){if(Ig)return Pi;Ig=1;var a=Qy(),s=Td(),u=Xy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return v(l),e;if(o===r)return v(l),t;o=o.sibling}throw Error(c(188))}if(n.return!==r.return)n=l,r=o;else{for(var m=!1,b=l.child;b;){if(b===n){m=!0,n=l,r=o;break}if(b===r){m=!0,r=l,n=o;break}b=b.sibling}if(!m){for(b=o.child;b;){if(b===n){m=!0,n=o,r=l;break}if(b===r){m=!0,r=o,n=l;break}b=b.sibling}if(!m)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),T=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case L:return"Profiler";case $:return"StrictMode";case U:return"Suspense";case I:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case T:return(e.displayName||"Context")+".Provider";case Z:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:it(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return it(e(t))}catch{}}return null}var ke=Array.isArray,G=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},fe=[],z=-1;function Q(e){return{current:e}}function P(e){0>z||(e.current=fe[z],fe[z]=null,z--)}function W(e,t){z++,fe[z]=e.current,e.current=t}var te=Q(null),pe=Q(null),ie=Q(null),We=Q(null);function we(e,t){switch(W(ie,t),W(pe,e),W(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=xg(t),e=yg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(te),W(te,e)}function ut(){P(te),P(pe),P(ie)}function Sa(e){e.memoizedState!==null&&W(We,e);var t=te.current,n=yg(t,e.type);t!==n&&(W(pe,e),W(te,n))}function jn(e){pe.current===e&&(P(te),P(pe)),We.current===e&&(P(We),qi._currentValue=ae)}var Gt=Object.prototype.hasOwnProperty,oo=a.unstable_scheduleCallback,co=a.unstable_cancelCallback,y1=a.unstable_shouldYield,v1=a.unstable_requestPaint,mn=a.unstable_now,S1=a.unstable_getCurrentPriorityLevel,Wd=a.unstable_ImmediatePriority,Id=a.unstable_UserBlockingPriority,ul=a.unstable_NormalPriority,j1=a.unstable_LowPriority,Jd=a.unstable_IdlePriority,w1=a.log,E1=a.unstable_setDisableYieldValue,Ir=null,kt=null;function Yn(e){if(typeof w1=="function"&&E1(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Ir,e)}catch{}}var Tt=Math.clz32?Math.clz32:C1,_1=Math.log,z1=Math.LN2;function C1(e){return e>>>=0,e===0?32:31-(_1(e)/z1|0)|0}var dl=256,fl=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hl(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~o,r!==0?l=ja(r):(m&=b,m!==0?l=ja(m):n||(n=b&~e,n!==0&&(l=ja(n))))):(b=r&~o,b!==0?l=ja(b):m!==0?l=ja(m):n||(n=r&~e,n!==0&&(l=ja(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function Jr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function A1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(){var e=dl;return dl<<=1,(dl&4194048)===0&&(dl=256),e}function tf(){var e=fl;return fl<<=1,(fl&62914560)===0&&(fl=4194304),e}function uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function k1(e,t,n,r,l,o){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,_=e.expirationTimes,D=e.hiddenUpdates;for(n=m&~n;0<n;){var V=31-Tt(n),K=1<<V;b[V]=0,_[V]=-1;var B=D[V];if(B!==null)for(D[V]=null,V=0;V<B.length;V++){var O=B[V];O!==null&&(O.lane&=-536870913)}n&=~K}r!==0&&nf(e,r,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function nf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Tt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function af(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}function fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ho(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rf(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Lg(e.type))}function T1(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var qn=Math.random().toString(36).slice(2),dt="__reactFiber$"+qn,xt="__reactProps$"+qn,Xa="__reactContainer$"+qn,mo="__reactEvents$"+qn,R1="__reactListeners$"+qn,M1="__reactHandles$"+qn,lf="__reactResources$"+qn,ti="__reactMarker$"+qn;function go(e){delete e[dt],delete e[xt],delete e[mo],delete e[R1],delete e[M1]}function Fa(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xa]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wg(e);e!==null;){if(n=e[dt])return n;e=wg(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){if(e=e[dt]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Wa(e){var t=e[lf];return t||(t=e[lf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[ti]=!0}var sf=new Set,of={};function wa(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(of[e]=t,e=0;e<t.length;e++)sf.add(t[e])}var D1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cf={},uf={};function B1(e){return Gt.call(uf,e)?!0:Gt.call(cf,e)?!1:D1.test(e)?uf[e]=!0:(cf[e]=!0,!1)}function ml(e,t,n){if(B1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var po,df;function Ja(e){if(po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);po=t&&t[1]||"",df=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+po+e+df}var bo=!1;function xo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(O){var B=O}Reflect.construct(e,[],K)}else{try{K.call()}catch(O){B=O}e.call(K.prototype)}}else{try{throw Error()}catch(O){B=O}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(O){if(O&&B&&typeof O.stack=="string")return[O.stack,B.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),m=o[0],b=o[1];if(m&&b){var _=m.split(`
`),D=b.split(`
`);for(l=r=0;r<_.length&&!_[r].includes("DetermineComponentFrameRoot");)r++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(r===_.length||l===D.length)for(r=_.length-1,l=D.length-1;1<=r&&0<=l&&_[r]!==D[l];)l--;for(;1<=r&&0<=l;r--,l--)if(_[r]!==D[l]){if(r!==1||l!==1)do if(r--,l--,0>l||_[r]!==D[l]){var V=`
`+_[r].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=r&&0<=l);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ja(n):""}function O1(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return xo(e.type,!1);case 11:return xo(e.type.render,!1);case 1:return xo(e.type,!0);case 31:return Ja("Activity");default:return""}}function ff(e){try{var t="";do t+=O1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $1(e){var t=hf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){r=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pl(e){e._valueTracker||(e._valueTracker=$1(e))}function mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var N1=/[\n"\\]/g;function Yt(e){return e.replace(N1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yo(e,t,n,r,l,o,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?vo(e,m,Vt(t)):n!=null?vo(e,m,Vt(n)):r!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Vt(b):e.removeAttribute("name")}function gf(e,t,n,r,l,o,m,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function vo(e,t,n){t==="number"&&bl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function er(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function pf(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function bf(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(c(92));if(ke(r)){if(1<r.length)throw Error(c(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var L1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xf(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||L1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in t)r=t[l],t.hasOwnProperty(l)&&n[l]!==r&&xf(e,l,r)}else for(var o in t)t.hasOwnProperty(o)&&xf(e,o,t[o])}function So(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),H1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return H1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var jo=null;function wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nr=null,ar=null;function vf(e){var t=Pa(e);if(t&&(e=t.stateNode)){var n=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=r[xt]||null;if(!l)throw Error(c(90));yo(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&mf(r)}break e;case"textarea":pf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}}}var Eo=!1;function Sf(e,t,n){if(Eo)return e(t,n);Eo=!0;try{var r=e(t);return r}finally{if(Eo=!1,(nr!==null||ar!==null)&&(as(),nr&&(t=nr,e=ar,ar=nr=null,vf(t),e)))for(t=0;t<e.length;t++)vf(e[t])}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=n[xt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=!1;if(En)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){_o=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{_o=!1}var Kn=null,zo=null,yl=null;function jf(){if(yl)return yl;var e,t=zo,n=t.length,r,l="value"in Kn?Kn.value:Kn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===l[o-r];r++);return yl=l.slice(e,1<r?1-r:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function wf(){return!1}function yt(e){function t(n,r,l,o,m){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sl:wf,this.isPropagationStopped=wf,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),t}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=yt(Ea),ii=x({},Ea,{view:0,detail:0}),G1=yt(ii),Co,Ao,li,wl=x({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Co=e.screenX-li.screenX,Ao=e.screenY-li.screenY):Ao=Co=0,li=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),Ef=yt(wl),V1=x({},wl,{dataTransfer:0}),Y1=yt(V1),q1=x({},ii,{relatedTarget:0}),ko=yt(q1),K1=x({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=yt(K1),Z1=x({},Ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),X1=yt(Z1),F1=x({},Ea,{data:0}),_f=yt(F1),P1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I1[e])?!!t[e]:!1}function To(){return J1}var ex=x({},ii,{key:function(e){if(e.key){var t=P1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tx=yt(ex),nx=x({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=yt(nx),ax=x({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),rx=yt(ax),ix=x({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=yt(ix),sx=x({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=yt(sx),cx=x({},Ea,{newState:0,oldState:0}),ux=yt(cx),dx=[9,13,27,32],Ro=En&&"CompositionEvent"in window,si=null;En&&"documentMode"in document&&(si=document.documentMode);var fx=En&&"TextEvent"in window&&!si,Cf=En&&(!Ro||si&&8<si&&11>=si),Af=" ",kf=!1;function Tf(e,t){switch(e){case"keyup":return dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function hx(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(kf=!0,Af);case"textInput":return e=t.data,e===Af&&kf?null:e;default:return null}}function mx(e,t){if(rr)return e==="compositionend"||!Ro&&Tf(e,t)?(e=jf(),yl=zo=Kn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cf&&t.locale!=="ko"?null:t.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gx[e.type]:t==="textarea"}function Df(e,t,n,r){nr?ar?ar.push(r):ar=[r]:nr=r,t=cs(t,"onChange"),0<t.length&&(n=new jl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oi=null,ci=null;function px(e){hg(e,0)}function El(e){var t=ni(e);if(mf(t))return e}function Bf(e,t){if(e==="change")return t}var Of=!1;if(En){var Mo;if(En){var Do="oninput"in document;if(!Do){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),Do=typeof $f.oninput=="function"}Mo=Do}else Mo=!1;Of=Mo&&(!document.documentMode||9<document.documentMode)}function Nf(){oi&&(oi.detachEvent("onpropertychange",Lf),ci=oi=null)}function Lf(e){if(e.propertyName==="value"&&El(ci)){var t=[];Df(t,ci,e,wo(e)),Sf(px,t)}}function bx(e,t,n){e==="focusin"?(Nf(),oi=t,ci=n,oi.attachEvent("onpropertychange",Lf)):e==="focusout"&&Nf()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(ci)}function yx(e,t){if(e==="click")return El(t)}function vx(e,t){if(e==="input"||e==="change")return El(t)}function Sx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Sx;function ui(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gt.call(t,l)||!Rt(e[l],t[l]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hf(e,t){var n=Uf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bl(e.document)}return t}function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jx=En&&"documentMode"in document&&11>=document.documentMode,ir=null,Oo=null,di=null,$o=!1;function Yf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$o||ir==null||ir!==bl(r)||(r=ir,"selectionStart"in r&&Bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&ui(di,r)||(di=r,r=cs(Oo,"onSelect"),0<r.length&&(t=new jl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},No={},qf={};En&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function za(e){if(No[e])return No[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return No[e]=t[n];return e}var Kf=za("animationend"),Qf=za("animationiteration"),Zf=za("animationstart"),wx=za("transitionrun"),Ex=za("transitionstart"),_x=za("transitioncancel"),Xf=za("transitionend"),Ff=new Map,Lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lo.push("scrollEnd");function ln(e,t){Ff.set(e,t),wa(t,[e])}var Pf=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=Pf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ff(t)},Pf.set(e,t),t)}return{value:e,source:t,stack:ff(t)}}var Kt=[],sr=0,Uo=0;function _l(){for(var e=sr,t=Uo=sr=0;t<e;){var n=Kt[t];Kt[t++]=null;var r=Kt[t];Kt[t++]=null;var l=Kt[t];Kt[t++]=null;var o=Kt[t];if(Kt[t++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}o!==0&&Wf(n,l,o)}}function zl(e,t,n,r){Kt[sr++]=e,Kt[sr++]=t,Kt[sr++]=n,Kt[sr++]=r,Uo|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ho(e,t,n,r){return zl(e,t,n,r),Cl(e)}function or(e,t){return zl(e,null,null,t),Cl(e)}function Wf(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,r=o.alternate,r!==null&&(r.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-Tt(n),e=o.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=n|536870912),o):null}function Cl(e){if(50<$i)throw $i=0,Qc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cr={};function zx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,r){return new zx(e,t,n,r)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function If(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Al(e,t,n,r,l,o){var m=0;if(r=e,typeof e=="function")Go(e)&&(m=1);else if(typeof e=="string")m=Ay(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Mt(31,n,t,l),e.elementType=se,e.lanes=o,e;case j:return Ca(n.children,l,o,t);case $:m=8,l|=24;break;case L:return e=Mt(12,n,t,l|2),e.elementType=L,e.lanes=o,e;case U:return e=Mt(13,n,t,l),e.elementType=U,e.lanes=o,e;case I:return e=Mt(19,n,t,l),e.elementType=I,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:case T:m=10;break e;case Z:m=9;break e;case Y:m=11;break e;case H:m=14;break e;case de:m=16,r=null;break e}m=29,n=Error(c(130,e===null?"null":typeof e,"")),r=null}return t=Mt(m,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ca(e,t,n,r){return e=Mt(7,e,r,t),e.lanes=n,e}function Vo(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Yo(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ur=[],dr=0,kl=null,Tl=0,Qt=[],Zt=0,Aa=null,zn=1,Cn="";function ka(e,t){ur[dr++]=Tl,ur[dr++]=kl,kl=e,Tl=t}function Jf(e,t,n){Qt[Zt++]=zn,Qt[Zt++]=Cn,Qt[Zt++]=Aa,Aa=e;var r=zn;e=Cn;var l=32-Tt(r)-1;r&=~(1<<l),n+=1;var o=32-Tt(t)+l;if(30<o){var m=l-l%5;o=(r&(1<<m)-1).toString(32),r>>=m,l-=m,zn=1<<32-Tt(t)+l|n<<l|r,Cn=o+e}else zn=1<<o|n<<l|r,Cn=e}function qo(e){e.return!==null&&(ka(e,1),Jf(e,1,0))}function Ko(e){for(;e===kl;)kl=ur[--dr],ur[dr]=null,Tl=ur[--dr],ur[dr]=null;for(;e===Aa;)Aa=Qt[--Zt],Qt[Zt]=null,Cn=Qt[--Zt],Qt[Zt]=null,zn=Qt[--Zt],Qt[Zt]=null}var gt=null,He=null,je=!1,Ta=null,gn=!1,Qo=Error(c(519));function Ra(e){var t=Error(c(418,""));throw mi(qt(t,e)),Qo}function eh(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[xt]=r,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<Li.length;n++)xe(Li[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),gf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),pl(t);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),bf(t,r.value,r.defaultValue,r.children),pl(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||bg(t.textContent,n)?(r.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),r.onScroll!=null&&xe("scroll",t),r.onScrollEnd!=null&&xe("scrollend",t),r.onClick!=null&&(t.onclick=us),t=!0):t=!1,t||Ra(e)}function th(e){for(gt=e.return;gt;)switch(gt.tag){case 5:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:gt=gt.return}}function fi(e){if(e!==gt)return!1;if(!je)return th(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ou(e.type,e.memoizedProps)),n=!n),n&&He&&Ra(e),th(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,sa(e.type)?(e=fu,fu=null,He=e):He=t):He=gt?on(e.stateNode.nextSibling):null;return!0}function hi(){He=gt=null,je=!1}function nh(){var e=Ta;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Ta=null),e}function mi(e){Ta===null?Ta=[e]:Ta.push(e)}var Zo=Q(null),Ma=null,An=null;function Qn(e,t,n){W(Zo,t._currentValue),t._currentValue=n}function kn(e){e._currentValue=Zo.current,P(Zo)}function Xo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t,n,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var b=o;o=l;for(var _=0;_<t.length;_++)if(b.context===t[_]){o.lanes|=n,b=o.alternate,b!==null&&(b.lanes|=n),Xo(o.return,n,e),r||(m=null);break e}o=b.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(c(341));m.lanes|=n,o=m.alternate,o!==null&&(o.lanes|=n),Xo(m,n,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function gi(e,t,n,r){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var b=l.type;Rt(l.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(l===We.current){if(m=l.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(qi):e=[qi])}l=l.return}e!==null&&Fo(t,e,n,r),t.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){Ma=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return ah(Ma,e)}function Ml(e,t){return Ma===null&&Da(e),ah(e,t)}function ah(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},An===null){if(e===null)throw Error(c(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return n}var Cx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ax=a.unstable_scheduleCallback,kx=a.unstable_NormalPriority,Fe={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Po(){return{controller:new Cx,data:new Map,refCount:0}}function pi(e){e.refCount--,e.refCount===0&&Ax(kx,function(){e.controller.abort()})}var bi=null,Wo=0,fr=0,hr=null;function Tx(e,t){if(bi===null){var n=bi=[];Wo=0,fr=Jc(),hr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Wo++,t.then(rh,rh),t}function rh(){if(--Wo===0&&bi!==null){hr!==null&&(hr.status="fulfilled");var e=bi;bi=null,fr=0,hr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rx(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var ih=G.S;G.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Tx(e,t),ih!==null&&ih(e,t)};var Ba=Q(null);function Io(){var e=Ba.current;return e!==null?e:Be.pooledCache}function Dl(e,t){t===null?W(Ba,Ba.current):W(Ba,t.pool)}function lh(){var e=Io();return e===null?null:{parent:Fe._currentValue,pool:e}}var xi=Error(c(460)),sh=Error(c(474)),Bl=Error(c(542)),Jo={then:function(){}};function oh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ol(){}function ch(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ol,Ol),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dh(e),e;default:if(typeof t.status=="string")t.then(Ol,Ol);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dh(e),e}throw yi=t,xi}}var yi=null;function uh(){if(yi===null)throw Error(c(459));var e=yi;return yi=null,e}function dh(e){if(e===xi||e===Bl)throw Error(c(483))}var Zn=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ce&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Cl(e),Wf(e,null,n),t}return zl(e,r,t,n),Cl(e)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,af(e,n)}}function nc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ac=!1;function Si(){if(ac){var e=hr;if(e!==null)throw e}}function ji(e,t,n,r){ac=!1;var l=e.updateQueue;Zn=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var _=b,D=_.next;_.next=null,m===null?o=D:m.next=D,m=_;var V=e.alternate;V!==null&&(V=V.updateQueue,b=V.lastBaseUpdate,b!==m&&(b===null?V.firstBaseUpdate=D:b.next=D,V.lastBaseUpdate=_))}if(o!==null){var K=l.baseState;m=0,V=D=_=null,b=o;do{var B=b.lane&-536870913,O=B!==b.lane;if(O?(ve&B)===B:(r&B)===B){B!==0&&B===fr&&(ac=!0),V!==null&&(V=V.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var oe=e,re=b;B=t;var Me=n;switch(re.tag){case 1:if(oe=re.payload,typeof oe=="function"){K=oe.call(Me,K,B);break e}K=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=re.payload,B=typeof oe=="function"?oe.call(Me,K,B):oe,B==null)break e;K=x({},K,B);break e;case 2:Zn=!0}}B=b.callback,B!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[B]:O.push(B))}else O={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},V===null?(D=V=O,_=K):V=V.next=O,m|=B;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;O=b,b=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);V===null&&(_=K),l.baseState=_,l.firstBaseUpdate=D,l.lastBaseUpdate=V,o===null&&(l.shared.lanes=0),aa|=m,e.lanes=m,e.memoizedState=K}}function fh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function hh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)fh(n[e],t)}var mr=Q(null),$l=Q(0);function mh(e,t){e=$n,W($l,e),W(mr,t),$n=e|t.baseLanes}function rc(){W($l,$n),W(mr,mr.current)}function ic(){$n=$l.current,P(mr),P($l)}var Pn=0,me=null,Te=null,Ke=null,Nl=!1,gr=!1,Oa=!1,Ll=0,wi=0,pr=null,Mx=0;function Ye(){throw Error(c(321))}function lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function sc(e,t,n,r,l,o){return Pn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?Wh:Ih,Oa=!1,o=n(r,l),Oa=!1,gr&&(o=ph(t,n,r,l)),gh(e),o}function gh(e){G.H=ql;var t=Te!==null&&Te.next!==null;if(Pn=0,Ke=Te=me=null,Nl=!1,wi=0,pr=null,t)throw Error(c(300));e===null||Je||(e=e.dependencies,e!==null&&Rl(e)&&(Je=!0))}function ph(e,t,n,r){me=e;var l=0;do{if(gr&&(pr=null),wi=0,gr=!1,25<=l)throw Error(c(301));if(l+=1,Ke=Te=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}G.H=Ux,o=t(n,r)}while(gr);return o}function Dx(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?Ei(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(me.flags|=1024),t}function oc(){var e=Ll!==0;return Ll=0,e}function cc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function uc(e){if(Nl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nl=!1}Pn=0,Ke=Te=me=null,gr=!1,wi=Ll=0,pr=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?me.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(Te===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ke===null?me.memoizedState:Ke.next;if(t!==null)Ke=t,Te=e;else{if(e===null)throw me.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ke===null?me.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ei(e){var t=wi;return wi+=1,pr===null&&(pr=[]),e=ch(pr,e,t),t=me,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?Wh:Ih),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ei(e);if(e.$$typeof===T)return ft(e)}throw Error(c(438,String(e)))}function fc(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=dc(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=X;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Qe();return hc(t,Te,e)}function hc(e,t,n){var r=e.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=n;var l=e.baseQueue,o=r.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}t.baseQueue=l=o,r.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var b=m=null,_=null,D=t,V=!1;do{var K=D.lane&-536870913;if(K!==D.lane?(ve&K)===K:(Pn&K)===K){var B=D.revertLane;if(B===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),K===fr&&(V=!0);else if((Pn&B)===B){D=D.next,B===fr&&(V=!0);continue}else K={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},_===null?(b=_=K,m=o):_=_.next=K,me.lanes|=B,aa|=B;K=D.action,Oa&&n(o,K),o=D.hasEagerState?D.eagerState:n(o,K)}else B={lane:K,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},_===null?(b=_=B,m=o):_=_.next=B,me.lanes|=K,aa|=K;D=D.next}while(D!==null&&D!==t);if(_===null?m=o:_.next=b,!Rt(o,e.memoizedState)&&(Je=!0,V&&(n=hr,n!==null)))throw n;e.memoizedState=o,e.baseState=m,e.baseQueue=_,r.lastRenderedState=o}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function mc(e){var t=Qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);Rt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bh(e,t,n){var r=me,l=Qe(),o=je;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var m=!Rt((Te||l).memoizedState,n);m&&(l.memoizedState=n,Je=!0),l=l.queue;var b=vh.bind(null,r,l,e);if(_i(2048,8,b,[e]),l.getSnapshot!==t||m||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,br(9,Gl(),yh.bind(null,r,l,n,t),null),Be===null)throw Error(c(349));o||(Pn&124)!==0||xh(r,t,n)}return n}function xh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=dc(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yh(e,t,n,r){t.value=n,t.getSnapshot=r,Sh(t)&&jh(e)}function vh(e,t,n){return n(function(){Sh(t)&&jh(e)})}function Sh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function jh(e){var t=or(e,2);t!==null&&Nt(t,e,2)}function gc(e){var t=vt();if(typeof e=="function"){var n=e;if(e=n(),Oa){Yn(!0);try{n()}finally{Yn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function wh(e,t,n,r){return e.baseState=n,hc(e,Te,typeof r=="function"?r:Tn)}function Bx(e,t,n,r,l){if(Yl(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};G.T!==null?n(!0):o.isTransition=!1,r(o),n=t.pending,n===null?(o.next=t.pending=o,Eh(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Eh(e,t){var n=t.action,r=t.payload,l=e.state;if(t.isTransition){var o=G.T,m={};G.T=m;try{var b=n(l,r),_=G.S;_!==null&&_(m,b),_h(e,t,b)}catch(D){pc(e,t,D)}finally{G.T=o}}else try{o=n(l,r),_h(e,t,o)}catch(D){pc(e,t,D)}}function _h(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){zh(e,t,r)},function(r){return pc(e,t,r)}):zh(e,t,n)}function zh(e,t,n){t.status="fulfilled",t.value=n,Ch(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Eh(e,n)))}function pc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Ch(t),t=t.next;while(t!==r)}e.action=null}function Ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ah(e,t){return t}function kh(e,t){if(je){var n=Be.formState;if(n!==null){e:{var r=me;if(je){if(He){t:{for(var l=He,o=gn;l.nodeType!==8;){if(!o){l=null;break t}if(l=on(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){He=on(l.nextSibling),r=l.data==="F!";break e}}Ra(r)}r=!1}r&&(t=n[0])}}return n=vt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ah,lastRenderedState:t},n.queue=r,n=Xh.bind(null,me,r),r.dispatch=n,r=gc(!1),o=Sc.bind(null,me,!1,r.queue),r=vt(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,n=Bx.bind(null,me,l,o,n),l.dispatch=n,r.memoizedState=e,[t,n,!1]}function Th(e){var t=Qe();return Rh(t,Te,e)}function Rh(e,t,n){if(t=hc(e,t,Ah)[0],e=Hl(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Ei(t)}catch(m){throw m===xi?Bl:m}else r=t;t=Qe();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(me.flags|=2048,br(9,Gl(),Ox.bind(null,l,n),null)),[r,o,e]}function Ox(e,t){e.action=t}function Mh(e){var t=Qe(),n=Te;if(n!==null)return Rh(t,n,e);Qe(),t=t.memoizedState,n=Qe();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function br(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=me.updateQueue,t===null&&(t=dc(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Gl(){return{destroy:void 0,resource:void 0}}function Dh(){return Qe().memoizedState}function Vl(e,t,n,r){var l=vt();r=r===void 0?null:r,me.flags|=e,l.memoizedState=br(1|t,Gl(),n,r)}function _i(e,t,n,r){var l=Qe();r=r===void 0?null:r;var o=l.memoizedState.inst;Te!==null&&r!==null&&lc(r,Te.memoizedState.deps)?l.memoizedState=br(t,o,n,r):(me.flags|=e,l.memoizedState=br(1|t,o,n,r))}function Bh(e,t){Vl(8390656,8,e,t)}function Oh(e,t){_i(2048,8,e,t)}function $h(e,t){return _i(4,2,e,t)}function Nh(e,t){return _i(4,4,e,t)}function Lh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uh(e,t,n){n=n!=null?n.concat([e]):null,_i(4,4,Lh.bind(null,t,e),n)}function bc(){}function Hh(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&lc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gh(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&lc(t,r[1]))return r[0];if(r=e(),Oa){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[r,t],r}function xc(e,t,n){return n===void 0||(Pn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=qm(),me.lanes|=e,aa|=e,n)}function Vh(e,t,n,r){return Rt(n,t)?n:mr.current!==null?(e=xc(e,n,r),Rt(e,t)||(Je=!0),e):(Pn&42)===0?(Je=!0,e.memoizedState=n):(e=qm(),me.lanes|=e,aa|=e,t)}function Yh(e,t,n,r,l){var o=F.p;F.p=o!==0&&8>o?o:8;var m=G.T,b={};G.T=b,Sc(e,!1,t,n);try{var _=l(),D=G.S;if(D!==null&&D(b,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var V=Rx(_,r);zi(e,t,V,$t(e))}else zi(e,t,r,$t(e))}catch(K){zi(e,t,{then:function(){},status:"rejected",reason:K},$t())}finally{F.p=o,G.T=m}}function $x(){}function yc(e,t,n,r){if(e.tag!==5)throw Error(c(476));var l=qh(e).queue;Yh(e,l,t,ae,n===null?$x:function(){return Kh(e),n(r)})}function qh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Kh(e){var t=qh(e).next.queue;zi(e,t,{},$t())}function vc(){return ft(qi)}function Qh(){return Qe().memoizedState}function Zh(){return Qe().memoizedState}function Nx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$t();e=Xn(n);var r=Fn(t,e,n);r!==null&&(Nt(r,t,n),vi(r,t,n)),t={cache:Po()},e.payload=t;return}t=t.return}}function Lx(e,t,n){var r=$t();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Yl(e)?Fh(t,n):(n=Ho(e,t,n,r),n!==null&&(Nt(n,e,r),Ph(n,t,r)))}function Xh(e,t,n){var r=$t();zi(e,t,n,r)}function zi(e,t,n,r){var l={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))Fh(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,b=o(m,n);if(l.hasEagerState=!0,l.eagerState=b,Rt(b,m))return zl(e,t,l,0),Be===null&&_l(),!1}catch{}finally{}if(n=Ho(e,t,l,r),n!==null)return Nt(n,e,r),Ph(n,t,r),!0}return!1}function Sc(e,t,n,r){if(r={lane:2,revertLane:Jc(),action:r,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(t)throw Error(c(479))}else t=Ho(e,n,r,2),t!==null&&Nt(t,e,2)}function Yl(e){var t=e.alternate;return e===me||t!==null&&t===me}function Fh(e,t){gr=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ph(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,af(e,n)}}var ql={readContext:ft,use:Ul,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},Wh={readContext:ft,use:Ul,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Bh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Vl(4194308,4,Lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vl(4194308,4,e,t)},useInsertionEffect:function(e,t){Vl(4,2,e,t)},useMemo:function(e,t){var n=vt();t=t===void 0?null:t;var r=e();if(Oa){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=vt();if(n!==void 0){var l=n(t);if(Oa){Yn(!0);try{n(t)}finally{Yn(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=Lx.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,n=Xh.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bc,useDeferredValue:function(e,t){var n=vt();return xc(n,e,t)},useTransition:function(){var e=gc(!1);return e=Yh.bind(null,me,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=me,l=vt();if(je){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Be===null)throw Error(c(349));(ve&124)!==0||xh(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Bh(vh.bind(null,r,o,e),[e]),r.flags|=2048,br(9,Gl(),yh.bind(null,r,o,n,t),null),n},useId:function(){var e=vt(),t=Be.identifierPrefix;if(je){var n=Cn,r=zn;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ll++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Mx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vc,useFormState:kh,useActionState:kh,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Sc.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return vt().memoizedState=Nx.bind(null,me)}},Ih={readContext:ft,use:Ul,useCallback:Hh,useContext:ft,useEffect:Oh,useImperativeHandle:Uh,useInsertionEffect:$h,useLayoutEffect:Nh,useMemo:Gh,useReducer:Hl,useRef:Dh,useState:function(){return Hl(Tn)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Qe();return Vh(n,Te.memoizedState,e,t)},useTransition:function(){var e=Hl(Tn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Ei(e),t]},useSyncExternalStore:bh,useId:Qh,useHostTransitionStatus:vc,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var n=Qe();return wh(n,Te,e,t)},useMemoCache:fc,useCacheRefresh:Zh},Ux={readContext:ft,use:Ul,useCallback:Hh,useContext:ft,useEffect:Oh,useImperativeHandle:Uh,useInsertionEffect:$h,useLayoutEffect:Nh,useMemo:Gh,useReducer:mc,useRef:Dh,useState:function(){return mc(Tn)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Qe();return Te===null?xc(n,e,t):Vh(n,Te.memoizedState,e,t)},useTransition:function(){var e=mc(Tn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Ei(e),t]},useSyncExternalStore:bh,useId:Qh,useHostTransitionStatus:vc,useFormState:Mh,useActionState:Mh,useOptimistic:function(e,t){var n=Qe();return Te!==null?wh(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fc,useCacheRefresh:Zh},xr=null,Ci=0;function Kl(e){var t=Ci;return Ci+=1,xr===null&&(xr=[]),ch(xr,e,t)}function Ai(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ql(e,t){throw t.$$typeof===S?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jh(e){var t=e._init;return t(e._payload)}function em(e){function t(R,A){if(e){var M=R.deletions;M===null?(R.deletions=[A],R.flags|=16):M.push(A)}}function n(R,A){if(!e)return null;for(;A!==null;)t(R,A),A=A.sibling;return null}function r(R){for(var A=new Map;R!==null;)R.key!==null?A.set(R.key,R):A.set(R.index,R),R=R.sibling;return A}function l(R,A){return R=_n(R,A),R.index=0,R.sibling=null,R}function o(R,A,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<A?(R.flags|=67108866,A):M):(R.flags|=67108866,A)):(R.flags|=1048576,A)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function b(R,A,M,q){return A===null||A.tag!==6?(A=Vo(M,R.mode,q),A.return=R,A):(A=l(A,M),A.return=R,A)}function _(R,A,M,q){var J=M.type;return J===j?V(R,A,M.props.children,q,M.key):A!==null&&(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===de&&Jh(J)===A.type)?(A=l(A,M.props),Ai(A,M),A.return=R,A):(A=Al(M.type,M.key,M.props,null,R.mode,q),Ai(A,M),A.return=R,A)}function D(R,A,M,q){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=Yo(M,R.mode,q),A.return=R,A):(A=l(A,M.children||[]),A.return=R,A)}function V(R,A,M,q,J){return A===null||A.tag!==7?(A=Ca(M,R.mode,q,J),A.return=R,A):(A=l(A,M),A.return=R,A)}function K(R,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Vo(""+A,R.mode,M),A.return=R,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return M=Al(A.type,A.key,A.props,null,R.mode,M),Ai(M,A),M.return=R,M;case C:return A=Yo(A,R.mode,M),A.return=R,A;case de:var q=A._init;return A=q(A._payload),K(R,A,M)}if(ke(A)||ze(A))return A=Ca(A,R.mode,M,null),A.return=R,A;if(typeof A.then=="function")return K(R,Kl(A),M);if(A.$$typeof===T)return K(R,Ml(R,A),M);Ql(R,A)}return null}function B(R,A,M,q){var J=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return J!==null?null:b(R,A,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return M.key===J?_(R,A,M,q):null;case C:return M.key===J?D(R,A,M,q):null;case de:return J=M._init,M=J(M._payload),B(R,A,M,q)}if(ke(M)||ze(M))return J!==null?null:V(R,A,M,q,null);if(typeof M.then=="function")return B(R,A,Kl(M),q);if(M.$$typeof===T)return B(R,A,Ml(R,M),q);Ql(R,M)}return null}function O(R,A,M,q,J){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return R=R.get(M)||null,b(A,R,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return R=R.get(q.key===null?M:q.key)||null,_(A,R,q,J);case C:return R=R.get(q.key===null?M:q.key)||null,D(A,R,q,J);case de:var ge=q._init;return q=ge(q._payload),O(R,A,M,q,J)}if(ke(q)||ze(q))return R=R.get(M)||null,V(A,R,q,J,null);if(typeof q.then=="function")return O(R,A,M,Kl(q),J);if(q.$$typeof===T)return O(R,A,M,Ml(A,q),J);Ql(A,q)}return null}function oe(R,A,M,q){for(var J=null,ge=null,ne=A,le=A=0,tt=null;ne!==null&&le<M.length;le++){ne.index>le?(tt=ne,ne=null):tt=ne.sibling;var Se=B(R,ne,M[le],q);if(Se===null){ne===null&&(ne=tt);break}e&&ne&&Se.alternate===null&&t(R,ne),A=o(Se,A,le),ge===null?J=Se:ge.sibling=Se,ge=Se,ne=tt}if(le===M.length)return n(R,ne),je&&ka(R,le),J;if(ne===null){for(;le<M.length;le++)ne=K(R,M[le],q),ne!==null&&(A=o(ne,A,le),ge===null?J=ne:ge.sibling=ne,ge=ne);return je&&ka(R,le),J}for(ne=r(ne);le<M.length;le++)tt=O(ne,R,le,M[le],q),tt!==null&&(e&&tt.alternate!==null&&ne.delete(tt.key===null?le:tt.key),A=o(tt,A,le),ge===null?J=tt:ge.sibling=tt,ge=tt);return e&&ne.forEach(function(fa){return t(R,fa)}),je&&ka(R,le),J}function re(R,A,M,q){if(M==null)throw Error(c(151));for(var J=null,ge=null,ne=A,le=A=0,tt=null,Se=M.next();ne!==null&&!Se.done;le++,Se=M.next()){ne.index>le?(tt=ne,ne=null):tt=ne.sibling;var fa=B(R,ne,Se.value,q);if(fa===null){ne===null&&(ne=tt);break}e&&ne&&fa.alternate===null&&t(R,ne),A=o(fa,A,le),ge===null?J=fa:ge.sibling=fa,ge=fa,ne=tt}if(Se.done)return n(R,ne),je&&ka(R,le),J;if(ne===null){for(;!Se.done;le++,Se=M.next())Se=K(R,Se.value,q),Se!==null&&(A=o(Se,A,le),ge===null?J=Se:ge.sibling=Se,ge=Se);return je&&ka(R,le),J}for(ne=r(ne);!Se.done;le++,Se=M.next())Se=O(ne,R,le,Se.value,q),Se!==null&&(e&&Se.alternate!==null&&ne.delete(Se.key===null?le:Se.key),A=o(Se,A,le),ge===null?J=Se:ge.sibling=Se,ge=Se);return e&&ne.forEach(function(Hy){return t(R,Hy)}),je&&ka(R,le),J}function Me(R,A,M,q){if(typeof M=="object"&&M!==null&&M.type===j&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case w:e:{for(var J=M.key;A!==null;){if(A.key===J){if(J=M.type,J===j){if(A.tag===7){n(R,A.sibling),q=l(A,M.props.children),q.return=R,R=q;break e}}else if(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===de&&Jh(J)===A.type){n(R,A.sibling),q=l(A,M.props),Ai(q,M),q.return=R,R=q;break e}n(R,A);break}else t(R,A);A=A.sibling}M.type===j?(q=Ca(M.props.children,R.mode,q,M.key),q.return=R,R=q):(q=Al(M.type,M.key,M.props,null,R.mode,q),Ai(q,M),q.return=R,R=q)}return m(R);case C:e:{for(J=M.key;A!==null;){if(A.key===J)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){n(R,A.sibling),q=l(A,M.children||[]),q.return=R,R=q;break e}else{n(R,A);break}else t(R,A);A=A.sibling}q=Yo(M,R.mode,q),q.return=R,R=q}return m(R);case de:return J=M._init,M=J(M._payload),Me(R,A,M,q)}if(ke(M))return oe(R,A,M,q);if(ze(M)){if(J=ze(M),typeof J!="function")throw Error(c(150));return M=J.call(M),re(R,A,M,q)}if(typeof M.then=="function")return Me(R,A,Kl(M),q);if(M.$$typeof===T)return Me(R,A,Ml(R,M),q);Ql(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(n(R,A.sibling),q=l(A,M),q.return=R,R=q):(n(R,A),q=Vo(M,R.mode,q),q.return=R,R=q),m(R)):n(R,A)}return function(R,A,M,q){try{Ci=0;var J=Me(R,A,M,q);return xr=null,J}catch(ne){if(ne===xi||ne===Bl)throw ne;var ge=Mt(29,ne,null,R.mode);return ge.lanes=q,ge.return=R,ge}finally{}}}var yr=em(!0),tm=em(!1),Xt=Q(null),pn=null;function Wn(e){var t=e.alternate;W(Pe,Pe.current&1),W(Xt,e),pn===null&&(t===null||mr.current!==null||t.memoizedState!==null)&&(pn=e)}function nm(e){if(e.tag===22){if(W(Pe,Pe.current),W(Xt,e),pn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(pn=e)}}else In()}function In(){W(Pe,Pe.current),W(Xt,Xt.current)}function Rn(e){P(Xt),pn===e&&(pn=null),P(Pe)}var Pe=Q(0);function Zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||du(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function jc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$t(),l=Xn(r);l.payload=t,n!=null&&(l.callback=n),t=Fn(e,l,r),t!==null&&(Nt(t,e,r),vi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$t(),l=Xn(r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Fn(e,l,r),t!==null&&(Nt(t,e,r),vi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$t(),r=Xn(n);r.tag=2,t!=null&&(r.callback=t),t=Fn(e,r,n),t!==null&&(Nt(t,e,n),vi(t,e,n))}};function am(e,t,n,r,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,m):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(l,o):!0}function rm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wc.enqueueReplaceState(t,t.state,null)}function $a(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function im(e){Xl(e)}function lm(e){console.error(e)}function sm(e){Xl(e)}function Fl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function om(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ec(e,t,n){return n=Xn(n),n.tag=3,n.payload={element:null},n.callback=function(){Fl(e,t)},n}function cm(e){return e=Xn(e),e.tag=3,e}function um(e,t,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=r.value;e.payload=function(){return l(o)},e.callback=function(){om(t,n,r)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){om(t,n,r),typeof l!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Hx(e,t,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&gi(t,n,l,!0),n=Xt.current,n!==null){switch(n.tag){case 13:return pn===null?Xc():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===Jo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Pc(e,r,l)),!1;case 22:return n.flags|=65536,r===Jo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Pc(e,r,l)),!1}throw Error(c(435,n.tag))}return Pc(e,r,l),Xc(),!1}if(je)return t=Xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==Qo&&(e=Error(c(422),{cause:r}),mi(qt(e,n)))):(r!==Qo&&(t=Error(c(423),{cause:r}),mi(qt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=qt(r,n),l=Ec(e.stateNode,r,l),nc(e,l),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:r});if(o=qt(o,n),Oi===null?Oi=[o]:Oi.push(o),Ge!==4&&(Ge=2),t===null)return!0;r=qt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ec(n.stateNode,r,e),nc(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ra===null||!ra.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=cm(l),um(l,e,n,r),nc(n,l),!1}n=n.return}while(n!==null);return!1}var dm=Error(c(461)),Je=!1;function lt(e,t,n,r){t.child=e===null?tm(t,null,n,r):yr(t,e.child,n,r)}function fm(e,t,n,r,l){n=n.render;var o=t.ref;if("ref"in r){var m={};for(var b in r)b!=="ref"&&(m[b]=r[b])}else m=r;return Da(t),r=sc(e,t,n,m,o,l),b=oc(),e!==null&&!Je?(cc(e,t,l),Mn(e,t,l)):(je&&b&&qo(t),t.flags|=1,lt(e,t,r,l),t.child)}function hm(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Go(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,mm(e,t,o,r,l)):(e=Al(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Mc(e,l)){var m=o.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(m,r)&&e.ref===t.ref)return Mn(e,t,l)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function mm(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(ui(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,Mc(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Mn(e,t,l)}return _c(e,t,n,r,l)}function gm(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=o!==null?o.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return pm(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(t,o!==null?o.cachePool:null),o!==null?mh(t,o):rc(),nm(t);else return t.lanes=t.childLanes=536870912,pm(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Dl(t,o.cachePool),mh(t,o),In(),t.memoizedState=null):(e!==null&&Dl(t,null),rc(),In());return lt(e,t,l,n),t.child}function pm(e,t,n,r){var l=Io();return l=l===null?null:{parent:Fe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Dl(t,null),rc(),nm(t),e!==null&&gi(e,t,r,!0),null}function Pl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,l){return Da(t),n=sc(e,t,n,r,void 0,l),r=oc(),e!==null&&!Je?(cc(e,t,l),Mn(e,t,l)):(je&&r&&qo(t),t.flags|=1,lt(e,t,n,l),t.child)}function bm(e,t,n,r,l,o){return Da(t),t.updateQueue=null,n=ph(t,r,n,l),gh(e),r=oc(),e!==null&&!Je?(cc(e,t,o),Mn(e,t,o)):(je&&r&&qo(t),t.flags|=1,lt(e,t,n,o),t.child)}function xm(e,t,n,r,l){if(Da(t),t.stateNode===null){var o=cr,m=n.contextType;typeof m=="object"&&m!==null&&(o=ft(m)),o=new n(r,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=wc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=r,o.state=t.memoizedState,o.refs={},ec(t),m=n.contextType,o.context=typeof m=="object"&&m!==null?ft(m):cr,o.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(jc(t,n,m,r),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&wc.enqueueReplaceState(o,o.state,null),ji(t,r,o,l),Si(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){o=t.stateNode;var b=t.memoizedProps,_=$a(n,b);o.props=_;var D=o.context,V=n.contextType;m=cr,typeof V=="object"&&V!==null&&(m=ft(V));var K=n.getDerivedStateFromProps;V=typeof K=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,V||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||D!==m)&&rm(t,o,r,m),Zn=!1;var B=t.memoizedState;o.state=B,ji(t,r,o,l),Si(),D=t.memoizedState,b||B!==D||Zn?(typeof K=="function"&&(jc(t,n,K,r),D=t.memoizedState),(_=Zn||am(t,n,_,r,B,D,m))?(V||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=D),o.props=r,o.state=D,o.context=m,r=_):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,tc(e,t),m=t.memoizedProps,V=$a(n,m),o.props=V,K=t.pendingProps,B=o.context,D=n.contextType,_=cr,typeof D=="object"&&D!==null&&(_=ft(D)),b=n.getDerivedStateFromProps,(D=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==K||B!==_)&&rm(t,o,r,_),Zn=!1,B=t.memoizedState,o.state=B,ji(t,r,o,l),Si();var O=t.memoizedState;m!==K||B!==O||Zn||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof b=="function"&&(jc(t,n,b,r),O=t.memoizedState),(V=Zn||am(t,n,V,r,B,O,_)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(D||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,O,_),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,O,_)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=O),o.props=r,o.state=O,o.context=_,r=V):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Pl(e,t),r=(t.flags&128)!==0,o||r?(o=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&r?(t.child=yr(t,e.child,null,l),t.child=yr(t,null,n,l)):lt(e,t,n,l),t.memoizedState=o.state,e=t.child):e=Mn(e,t,l),e}function ym(e,t,n,r){return hi(),t.flags|=256,lt(e,t,n,r),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:lh()}}function Ac(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ft),e}function vm(e,t,n){var r=t.pendingProps,l=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(l?Wn(t):In(),je){var b=He,_;if(_=b){e:{for(_=b,b=gn;_.nodeType!==8;){if(!b){b=null;break e}if(_=on(_.nextSibling),_===null){b=null;break e}}b=_}b!==null?(t.memoizedState={dehydrated:b,treeContext:Aa!==null?{id:zn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},_=Mt(18,null,null,0),_.stateNode=b,_.return=t,t.child=_,gt=t,He=null,_=!0):_=!1}_||Ra(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return du(b)?t.lanes=32:t.lanes=536870912,null;Rn(t)}return b=r.children,r=r.fallback,l?(In(),l=t.mode,b=Wl({mode:"hidden",children:b},l),r=Ca(r,l,n,null),b.return=t,r.return=t,b.sibling=r,t.child=b,l=t.child,l.memoizedState=Cc(n),l.childLanes=Ac(e,m,n),t.memoizedState=zc,r):(Wn(t),kc(t,b))}if(_=e.memoizedState,_!==null&&(b=_.dehydrated,b!==null)){if(o)t.flags&256?(Wn(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),l=r.fallback,b=t.mode,r=Wl({mode:"visible",children:r.children},b),l=Ca(l,b,n,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,yr(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=Ac(e,m,n),t.memoizedState=zc,t=l);else if(Wn(t),du(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var D=m.dgst;m=D,r=Error(c(419)),r.stack="",r.digest=m,mi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(Je||gi(e,t,n,!1),m=(n&e.childLanes)!==0,Je||m){if(m=Be,m!==null&&(r=n&-n,r=(r&42)!==0?1:fo(r),r=(r&(m.suspendedLanes|n))!==0?0:r,r!==0&&r!==_.retryLane))throw _.retryLane=r,or(e,r),Nt(m,e,r),dm;b.data==="$?"||Xc(),t=Tc(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,He=on(b.nextSibling),gt=t,je=!0,Ta=null,gn=!1,e!==null&&(Qt[Zt++]=zn,Qt[Zt++]=Cn,Qt[Zt++]=Aa,zn=e.id,Cn=e.overflow,Aa=t),t=kc(t,r.children),t.flags|=4096);return t}return l?(In(),l=r.fallback,b=t.mode,_=e.child,D=_.sibling,r=_n(_,{mode:"hidden",children:r.children}),r.subtreeFlags=_.subtreeFlags&65011712,D!==null?l=_n(D,l):(l=Ca(l,b,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,b=e.child.memoizedState,b===null?b=Cc(n):(_=b.cachePool,_!==null?(D=Fe._currentValue,_=_.parent!==D?{parent:D,pool:D}:_):_=lh(),b={baseLanes:b.baseLanes|n,cachePool:_}),l.memoizedState=b,l.childLanes=Ac(e,m,n),t.memoizedState=zc,r):(Wn(t),n=e.child,e=n.sibling,n=_n(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function kc(e,t){return t=Wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wl(e,t){return e=Mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Tc(e,t,n){return yr(t,e.child,null,n),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xo(e.return,t,n)}function Rc(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function jm(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(lt(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sm(e,n,t);else if(e.tag===19)Sm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(W(Pe,r),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Rc(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Rc(t,!0,n,null,o);break;case"together":Rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(gi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function Gx(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),Qn(t,Fe,e.memoizedState.cache),hi();break;case 27:case 5:Sa(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?vm(e,t,n):(Wn(t),e=Mn(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var l=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(gi(e,t,n,!1),r=(n&t.childLanes)!==0),l){if(r)return jm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,gm(e,t,n);case 24:Qn(t,Fe,e.memoizedState.cache)}return Mn(e,t,n)}function wm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Mc(e,n)&&(t.flags&128)===0)return Je=!1,Gx(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,je&&(t.flags&1048576)!==0&&Jf(t,Tl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,l=r._init;if(r=l(r._payload),t.type=r,typeof r=="function")Go(r)?(e=$a(r,e),t.tag=1,t=xm(null,t,r,e,n)):(t.tag=0,t=_c(null,t,r,e,n));else{if(r!=null){if(l=r.$$typeof,l===Y){t.tag=11,t=fm(null,t,r,e,n);break e}else if(l===H){t.tag=14,t=hm(null,t,r,e,n);break e}}throw t=it(r)||r,Error(c(306,t,""))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,l=$a(r,t.pendingProps),xm(e,t,r,l,n);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(c(387));r=t.pendingProps;var o=t.memoizedState;l=o.element,tc(e,t),ji(t,r,null,n);var m=t.memoizedState;if(r=m.cache,Qn(t,Fe,r),r!==o.cache&&Fo(t,[Fe],n,!0),Si(),r=m.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=ym(e,t,r,n);break e}else if(r!==l){l=qt(Error(c(424)),t),mi(l),t=ym(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=on(e.firstChild),gt=t,je=!0,Ta=null,gn=!0,n=tm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hi(),r===l){t=Mn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 26:return Pl(e,t),e===null?(n=Cg(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,r=ds(ie.current).createElement(n),r[dt]=t,r[xt]=e,ot(r,n,e),Ie(r),t.stateNode=r):t.memoizedState=Cg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Sa(t),e===null&&je&&(r=t.stateNode=Eg(t.type,t.pendingProps,ie.current),gt=t,gn=!0,l=He,sa(t.type)?(fu=l,He=on(r.firstChild)):He=l),lt(e,t,t.pendingProps.children,n),Pl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((l=r=He)&&(r=gy(r,t.type,t.pendingProps,gn),r!==null?(t.stateNode=r,gt=t,He=on(r.firstChild),gn=!1,l=!0):l=!1),l||Ra(t)),Sa(t),l=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,r=o.children,ou(l,o)?r=null:m!==null&&ou(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=sc(e,t,Dx,null,null,n),qi._currentValue=l),Pl(e,t),lt(e,t,r,n),t.child;case 6:return e===null&&je&&((e=n=He)&&(n=py(n,t.pendingProps,gn),n!==null?(t.stateNode=n,gt=t,He=null,e=!0):e=!1),e||Ra(t)),null;case 13:return vm(e,t,n);case 4:return we(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):lt(e,t,r,n),t.child;case 11:return fm(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qn(t,t.type,r.value),lt(e,t,r.children,n),t.child;case 9:return l=t.type._context,r=t.pendingProps.children,Da(t),l=ft(l),r=r(l),t.flags|=1,lt(e,t,r,n),t.child;case 14:return hm(e,t,t.type,t.pendingProps,n);case 15:return mm(e,t,t.type,t.pendingProps,n);case 19:return jm(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=Wl(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=_n(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return gm(e,t,n);case 24:return Da(t),r=ft(Fe),e===null?(l=Io(),l===null&&(l=Be,o=Po(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:r,cache:l},ec(t),Qn(t,Fe,l)):((e.lanes&n)!==0&&(tc(e,t),ji(t,null,null,n),Si()),l=e.memoizedState,o=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Qn(t,Fe,r)):(r=o.cache,Qn(t,Fe,r),r!==l.cache&&Fo(t,[Fe],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Dn(e){e.flags|=4}function Em(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mg(t)){if(t=Xt.current,t!==null&&((ve&4194048)===ve?pn!==null:(ve&62914560)!==ve&&(ve&536870912)===0||t!==pn))throw yi=Jo,sh;e.flags|=8192}}function Il(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tf():536870912,e.lanes|=t,wr|=t)}function ki(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vx(e,t,n){var r=t.pendingProps;switch(Ko(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),kn(Fe),ut(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fi(t)?Dn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nh())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(Dn(t),n!==null?(Ue(t),Em(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Dn(t),Ue(t),Em(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==r&&Dn(t),Ue(t),t.flags&=-16777217),null;case 27:jn(t),n=ie.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dn(t);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}e=te.current,fi(t)?eh(t):(e=Eg(l,r,n),t.stateNode=e,Dn(t))}return Ue(t),null;case 5:if(jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dn(t);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}if(e=te.current,fi(t))eh(t);else{switch(l=ds(ie.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?l.createElement(n,{is:r.is}):l.createElement(n)}}e[dt]=t,e[xt]=r;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ot(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Dn(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,fi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,l=gt,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||bg(e.nodeValue,n)),e||Ra(t)}else e=ds(e).createTextNode(r),e[dt]=t,t.stateNode=e}return Ue(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[dt]=t}else hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else l=nh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Rn(t),t):(Rn(t),null)}if(Rn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool);var o=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Il(t,t.updateQueue),Ue(t),null;case 4:return ut(),e===null&&au(t.stateNode.containerInfo),Ue(t),null;case 10:return kn(t.type),Ue(t),null;case 19:if(P(Pe),l=t.memoizedState,l===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)ki(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Zl(e),o!==null){for(t.flags|=128,ki(l,!1),e=o.updateQueue,t.updateQueue=e,Il(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)If(n,e),n=n.sibling;return W(Pe,Pe.current&1|2),t.child}e=e.sibling}l.tail!==null&&mn()>ts&&(t.flags|=128,r=!0,ki(l,!1),t.lanes=4194304)}else{if(!r)if(e=Zl(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Il(t,e),ki(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!je)return Ue(t),null}else 2*mn()-l.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,r=!0,ki(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=mn(),t.sibling=null,e=Pe.current,W(Pe,r?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return Rn(t),ic(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&Il(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&P(Ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kn(Fe),Ue(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Yx(e,t){switch(Ko(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(Fe),ut(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jn(t),null;case 13:if(Rn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Pe),null;case 4:return ut(),null;case 10:return kn(t.type),null;case 22:case 23:return Rn(t),ic(),e!==null&&P(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(Fe),null;case 25:return null;default:return null}}function _m(e,t){switch(Ko(t),t.tag){case 3:kn(Fe),ut();break;case 26:case 27:case 5:jn(t);break;case 4:ut();break;case 13:Rn(t);break;case 19:P(Pe);break;case 10:kn(t.type);break;case 22:case 23:Rn(t),ic(),e!==null&&P(Ba);break;case 24:kn(Fe)}}function Ti(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&e)===e){r=void 0;var o=n.create,m=n.inst;r=o(),m.destroy=r}n=n.next}while(n!==l)}}catch(b){De(t,t.return,b)}}function Jn(e,t,n){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var o=l.next;r=o;do{if((r.tag&e)===e){var m=r.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,l=t;var _=n,D=b;try{D()}catch(V){De(l,_,V)}}}r=r.next}while(r!==o)}}catch(V){De(t,t.return,V)}}function zm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hh(t,n)}catch(r){De(e,e.return,r)}}}function Cm(e,t,n){n.props=$a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){De(e,t,r)}}function Ri(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(l){De(e,t,l)}}function bn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){De(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){De(e,t,l)}else n.current=null}function Am(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){De(e,e.return,l)}}function Dc(e,t,n){try{var r=e.stateNode;uy(r,e.type,n,t),r[xt]=t}catch(l){De(e,e.return,l)}}function km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us));else if(r!==4&&(r===27&&sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function Tm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,r,n),t[dt]=e,t[xt]=n}catch(o){De(e,e.return,o)}}var Bn=!1,qe=!1,$c=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,et=null;function qx(e,t){if(e=e.containerInfo,lu=bs,e=Vf(e),Bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var m=0,b=-1,_=-1,D=0,V=0,K=e,B=null;t:for(;;){for(var O;K!==n||l!==0&&K.nodeType!==3||(b=m+l),K!==o||r!==0&&K.nodeType!==3||(_=m+r),K.nodeType===3&&(m+=K.nodeValue.length),(O=K.firstChild)!==null;)B=K,K=O;for(;;){if(K===e)break t;if(B===n&&++D===l&&(b=m),B===o&&++V===r&&(_=m),(O=K.nextSibling)!==null)break;K=B,B=K.parentNode}K=O}n=b===-1||_===-1?null:{start:b,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:e,selectionRange:n},bs=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var oe=$a(n.type,l,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(oe,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(re){De(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)uu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function Mm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ea(e,n),r&4&&Ti(5,n);break;case 1:if(ea(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){De(n,n.return,m)}else{var l=$a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){De(n,n.return,m)}}r&64&&zm(n),r&512&&Ri(n,n.return);break;case 3:if(ea(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hh(e,t)}catch(m){De(n,n.return,m)}}break;case 27:t===null&&r&4&&Tm(n);case 26:case 5:ea(e,n),t===null&&r&4&&Am(n),r&512&&Ri(n,n.return);break;case 12:ea(e,n);break;case 13:ea(e,n),r&4&&Om(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Jx.bind(null,n),by(e,n))));break;case 22:if(r=n.memoizedState!==null||Bn,!r){t=t!==null&&t.memoizedState!==null||qe,l=Bn;var o=qe;Bn=r,(qe=t)&&!o?ta(e,n,(n.subtreeFlags&8772)!==0):ea(e,n),Bn=l,qe=o}break;case 30:break;default:ea(e,n)}}function Dm(e){var t=e.alternate;t!==null&&(e.alternate=null,Dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&go(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,St=!1;function On(e,t,n){for(n=n.child;n!==null;)Bm(e,t,n),n=n.sibling}function Bm(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ir,n)}catch{}switch(n.tag){case 26:qe||bn(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||bn(n,t);var r=Ne,l=St;sa(n.type)&&(Ne=n.stateNode,St=!1),On(e,t,n),Hi(n.stateNode),Ne=r,St=l;break;case 5:qe||bn(n,t);case 6:if(r=Ne,l=St,Ne=null,On(e,t,n),Ne=r,St=l,Ne!==null)if(St)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(o){De(n,t,o)}else try{Ne.removeChild(n.stateNode)}catch(o){De(n,t,o)}break;case 18:Ne!==null&&(St?(e=Ne,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Xi(e)):jg(Ne,n.stateNode));break;case 4:r=Ne,l=St,Ne=n.stateNode.containerInfo,St=!0,On(e,t,n),Ne=r,St=l;break;case 0:case 11:case 14:case 15:qe||Jn(2,n,t),qe||Jn(4,n,t),On(e,t,n);break;case 1:qe||(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Cm(n,t,r)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:qe=(r=qe)||n.memoizedState!==null,On(e,t,n),qe=r;break;default:On(e,t,n)}}function Om(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xi(e)}catch(n){De(t,t.return,n)}}function Kx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rm),t;default:throw Error(c(435,e.tag))}}function Nc(e,t){var n=Kx(e);t.forEach(function(r){var l=ey.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r],o=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(sa(b.type)){Ne=b.stateNode,St=!1;break e}break;case 5:Ne=b.stateNode,St=!1;break e;case 3:case 4:Ne=b.stateNode.containerInfo,St=!0;break e}b=b.return}if(Ne===null)throw Error(c(160));Bm(o,m,l),Ne=null,St=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)$m(t,e),t=t.sibling}var sn=null;function $m(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Bt(e),r&4&&(Jn(3,e,e.return),Ti(3,e),Jn(5,e,e.return));break;case 1:Dt(t,e),Bt(e),r&512&&(qe||n===null||bn(n,n.return)),r&64&&Bn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var l=sn;if(Dt(t,e),Bt(e),r&512&&(qe||n===null||bn(n,n.return)),r&4){var o=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(r){case"title":o=l.getElementsByTagName("title")[0],(!o||o[ti]||o[dt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(r),l.head.insertBefore(o,l.querySelector("head > title"))),ot(o,r,n),o[dt]=e,Ie(o),r=o;break e;case"link":var m=Tg("link","href",l).get(r+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(o=m[b],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}o=l.createElement(r),ot(o,r,n),l.head.appendChild(o);break;case"meta":if(m=Tg("meta","content",l).get(r+(n.content||""))){for(b=0;b<m.length;b++)if(o=m[b],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}o=l.createElement(r),ot(o,r,n),l.head.appendChild(o);break;default:throw Error(c(468,r))}o[dt]=e,Ie(o),r=o}e.stateNode=r}else Rg(l,e.type,e.stateNode);else e.stateNode=kg(l,r,e.memoizedProps);else o!==r?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Rg(l,e.type,e.stateNode):kg(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Dc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),Bt(e),r&512&&(qe||n===null||bn(n,n.return)),n!==null&&r&4&&Dc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),Bt(e),r&512&&(qe||n===null||bn(n,n.return)),e.flags&32){l=e.stateNode;try{tr(l,"")}catch(O){De(e,e.return,O)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,Dc(e,l,n!==null?n.memoizedProps:l)),r&1024&&($c=!0);break;case 6:if(Dt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(c(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(O){De(e,e.return,O)}}break;case 3:if(ms=null,l=sn,sn=fs(t.containerInfo),Dt(t,e),sn=l,Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(t.containerInfo)}catch(O){De(e,e.return,O)}$c&&($c=!1,Nm(e));break;case 4:r=sn,sn=fs(e.stateNode.containerInfo),Dt(t,e),Bt(e),sn=r;break;case 12:Dt(t,e),Bt(e);break;case 13:Dt(t,e),Bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yc=mn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nc(e,r)));break;case 22:l=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,D=Bn,V=qe;if(Bn=D||l,qe=V||_,Dt(t,e),qe=V,Bn=D,Bt(e),r&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||_||Bn||qe||Na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(o=_.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=_.stateNode;var K=_.memoizedProps.style,B=K!=null&&K.hasOwnProperty("display")?K.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(O){De(_,_.return,O)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=l?"":_.memoizedProps}catch(O){De(_,_.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Nc(e,n))));break;case 19:Dt(t,e),Bt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nc(e,r)));break;case 30:break;case 21:break;default:Dt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(km(r)){n=r;break}r=r.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,o=Bc(e);Jl(e,o,l);break;case 5:var m=n.stateNode;n.flags&32&&(tr(m,""),n.flags&=-33);var b=Bc(e);Jl(e,b,m);break;case 3:case 4:var _=n.stateNode.containerInfo,D=Bc(e);Oc(e,D,_);break;default:throw Error(c(161))}}catch(V){De(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mm(e,t.alternate,t),t=t.sibling}function Na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Na(t);break;case 1:bn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Cm(t,t.return,n),Na(t);break;case 27:Hi(t.stateNode);case 26:case 5:bn(t,t.return),Na(t);break;case 22:t.memoizedState===null&&Na(t);break;case 30:Na(t);break;default:Na(t)}e=e.sibling}}function ta(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,l=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:ta(l,o,n),Ti(4,o);break;case 1:if(ta(l,o,n),r=o,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){De(r,r.return,D)}if(r=o,l=r.updateQueue,l!==null){var b=r.stateNode;try{var _=l.shared.hiddenCallbacks;if(_!==null)for(l.shared.hiddenCallbacks=null,l=0;l<_.length;l++)fh(_[l],b)}catch(D){De(r,r.return,D)}}n&&m&64&&zm(o),Ri(o,o.return);break;case 27:Tm(o);case 26:case 5:ta(l,o,n),n&&r===null&&m&4&&Am(o),Ri(o,o.return);break;case 12:ta(l,o,n);break;case 13:ta(l,o,n),n&&m&4&&Om(l,o);break;case 22:o.memoizedState===null&&ta(l,o,n),Ri(o,o.return);break;case 30:break;default:ta(l,o,n)}t=t.sibling}}function Lc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pi(n))}function Uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e))}function xn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(e,t,n,r),t=t.sibling}function Lm(e,t,n,r){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,n,r),l&2048&&Ti(9,t);break;case 1:xn(e,t,n,r);break;case 3:xn(e,t,n,r),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e)));break;case 12:if(l&2048){xn(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,b=o.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){De(t,t.return,_)}}else xn(e,t,n,r);break;case 13:xn(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?xn(e,t,n,r):Mi(e,t):o._visibility&2?xn(e,t,n,r):(o._visibility|=2,vr(e,t,n,r,(t.subtreeFlags&10256)!==0)),l&2048&&Lc(m,t);break;case 24:xn(e,t,n,r),l&2048&&Uc(t.alternate,t);break;default:xn(e,t,n,r)}}function vr(e,t,n,r,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,b=n,_=r,D=m.flags;switch(m.tag){case 0:case 11:case 15:vr(o,m,b,_,l),Ti(8,m);break;case 23:break;case 22:var V=m.stateNode;m.memoizedState!==null?V._visibility&2?vr(o,m,b,_,l):Mi(o,m):(V._visibility|=2,vr(o,m,b,_,l)),l&&D&2048&&Lc(m.alternate,m);break;case 24:vr(o,m,b,_,l),l&&D&2048&&Uc(m.alternate,m);break;default:vr(o,m,b,_,l)}t=t.sibling}}function Mi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,l=r.flags;switch(r.tag){case 22:Mi(n,r),l&2048&&Lc(r.alternate,r);break;case 24:Mi(n,r),l&2048&&Uc(r.alternate,r);break;default:Mi(n,r)}t=t.sibling}}var Di=8192;function Sr(e){if(e.subtreeFlags&Di)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 26:Sr(e),e.flags&Di&&e.memoizedState!==null&&Ty(sn,e.memoizedState,e.memoizedProps);break;case 5:Sr(e);break;case 3:case 4:var t=sn;sn=fs(e.stateNode.containerInfo),Sr(e),sn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Di,Di=16777216,Sr(e),Di=t):Sr(e));break;default:Sr(e)}}function Hm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];et=r,Vm(r,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,es(e)):Bi(e);break;default:Bi(e)}}function es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];et=r,Vm(r,e)}Hm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,es(t));break;default:es(t)}e=e.sibling}}function Vm(e,t){for(;et!==null;){var n=et;switch(n.tag){case 0:case 11:case 15:Jn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,et=r;else e:for(n=e;et!==null;){r=et;var l=r.sibling,o=r.return;if(Dm(r),r===n){et=null;break e}if(l!==null){l.return=o,et=l;break e}et=o}}}var Qx={getCacheForType:function(e){var t=ft(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Zx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Be=null,be=null,ve=0,Ae=0,Ot=null,na=!1,jr=!1,Hc=!1,$n=0,Ge=0,aa=0,La=0,Gc=0,Ft=0,wr=0,Oi=null,jt=null,Vc=!1,Yc=0,ts=1/0,ns=null,ra=null,st=0,ia=null,Er=null,_r=0,qc=0,Kc=null,Ym=null,$i=0,Qc=null;function $t(){if((Ce&2)!==0&&ve!==0)return ve&-ve;if(G.T!==null){var e=fr;return e!==0?e:Jc()}return rf()}function qm(){Ft===0&&(Ft=(ve&536870912)===0||je?ef():536870912);var e=Xt.current;return e!==null&&(e.flags|=32),Ft}function Nt(e,t,n){(e===Be&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(zr(e,0),la(e,ve,Ft,!1)),ei(e,n),((Ce&2)===0||e!==Be)&&(e===Be&&((Ce&2)===0&&(La|=n),Ge===4&&la(e,ve,Ft,!1)),yn(e))}function Km(e,t,n){if((Ce&6)!==0)throw Error(c(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Jr(e,t),l=r?Px(e,t):Fc(e,t,!0),o=r;do{if(l===0){jr&&!r&&la(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Xx(n)){l=Fc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;l=Oi;var _=b.current.memoizedState.isDehydrated;if(_&&(zr(b,m).flags|=256),m=Fc(b,m,!1),m!==2){if(Hc&&!_){b.errorRecoveryDisabledLanes|=o,La|=o,l=4;break e}o=jt,jt=l,o!==null&&(jt===null?jt=o:jt.push.apply(jt,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){zr(e,0),la(e,t,0,!0);break}e:{switch(r=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:la(r,t,Ft,!na);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Yc+300-mn(),10<l)){if(la(r,t,Ft,!na),hl(r,0,!0)!==0)break e;r.timeoutHandle=vg(Qm.bind(null,r,n,jt,ns,Vc,t,Ft,La,wr,na,o,2,-0,0),l);break e}Qm(r,n,jt,ns,Vc,t,Ft,La,wr,na,o,0,-0,0)}}break}while(!0);yn(e)}function Qm(e,t,n,r,l,o,m,b,_,D,V,K,B,O){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Yi={stylesheets:null,count:0,unsuspend:ky},Um(t),K=Ry(),K!==null)){e.cancelPendingCommit=K(Jm.bind(null,e,t,o,n,r,l,m,b,_,V,1,B,O)),la(e,o,m,!D);return}Jm(e,t,o,n,r,l,m,b,_)}function Xx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Rt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,n,r){t&=~Gc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var o=31-Tt(l),m=1<<o;r[o]=-1,l&=~m}n!==0&&nf(e,n,t)}function as(){return(Ce&6)===0?(Ni(0),!1):!0}function Zc(){if(be!==null){if(Ae===0)var e=be.return;else e=be,An=Ma=null,uc(e),xr=null,Ci=0,e=be;for(;e!==null;)_m(e.alternate,e),e=e.return;be=null}}function zr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,fy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Zc(),Be=e,be=n=_n(e.current,null),ve=t,Ae=0,Ot=null,na=!1,jr=Jr(e,t),Hc=!1,wr=Ft=Gc=La=aa=Ge=0,jt=Oi=null,Vc=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var l=31-Tt(r),o=1<<l;t|=e[l],r&=~o}return $n=t,_l(),n}function Zm(e,t){me=null,G.H=ql,t===xi||t===Bl?(t=uh(),Ae=3):t===sh?(t=uh(),Ae=4):Ae=t===dm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,be===null&&(Ge=1,Fl(e,qt(t,e.current)))}function Xm(){var e=G.H;return G.H=ql,e===null?ql:e}function Fm(){var e=G.A;return G.A=Qx,e}function Xc(){Ge=4,na||(ve&4194048)!==ve&&Xt.current!==null||(jr=!0),(aa&134217727)===0&&(La&134217727)===0||Be===null||la(Be,ve,Ft,!1)}function Fc(e,t,n){var r=Ce;Ce|=2;var l=Xm(),o=Fm();(Be!==e||ve!==t)&&(ns=null,zr(e,t)),t=!1;var m=Ge;e:do try{if(Ae!==0&&be!==null){var b=be,_=Ot;switch(Ae){case 8:Zc(),m=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(t=!0);var D=Ae;if(Ae=0,Ot=null,Cr(e,b,_,D),n&&jr){m=0;break e}break;default:D=Ae,Ae=0,Ot=null,Cr(e,b,_,D)}}Fx(),m=Ge;break}catch(V){Zm(e,V)}while(!0);return t&&e.shellSuspendCounter++,An=Ma=null,Ce=r,G.H=l,G.A=o,be===null&&(Be=null,ve=0,_l()),m}function Fx(){for(;be!==null;)Pm(be)}function Px(e,t){var n=Ce;Ce|=2;var r=Xm(),l=Fm();Be!==e||ve!==t?(ns=null,ts=mn()+500,zr(e,t)):jr=Jr(e,t);e:do try{if(Ae!==0&&be!==null){t=be;var o=Ot;t:switch(Ae){case 1:Ae=0,Ot=null,Cr(e,t,o,1);break;case 2:case 9:if(oh(o)){Ae=0,Ot=null,Wm(t);break}t=function(){Ae!==2&&Ae!==9||Be!==e||(Ae=7),yn(e)},o.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:oh(o)?(Ae=0,Ot=null,Wm(t)):(Ae=0,Ot=null,Cr(e,t,o,7));break;case 5:var m=null;switch(be.tag){case 26:m=be.memoizedState;case 5:case 27:var b=be;if(!m||Mg(m)){Ae=0,Ot=null;var _=b.sibling;if(_!==null)be=_;else{var D=b.return;D!==null?(be=D,rs(D)):be=null}break t}}Ae=0,Ot=null,Cr(e,t,o,5);break;case 6:Ae=0,Ot=null,Cr(e,t,o,6);break;case 8:Zc(),Ge=6;break e;default:throw Error(c(462))}}Wx();break}catch(V){Zm(e,V)}while(!0);return An=Ma=null,G.H=r,G.A=l,Ce=n,be!==null?0:(Be=null,ve=0,_l(),Ge)}function Wx(){for(;be!==null&&!y1();)Pm(be)}function Pm(e){var t=wm(e.alternate,e,$n);e.memoizedProps=e.pendingProps,t===null?rs(e):be=t}function Wm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bm(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=bm(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:uc(t);default:_m(n,t),t=be=If(t,$n),t=wm(n,t,$n)}e.memoizedProps=e.pendingProps,t===null?rs(e):be=t}function Cr(e,t,n,r){An=Ma=null,uc(t),xr=null,Ci=0;var l=t.return;try{if(Hx(e,l,t,n,ve)){Ge=1,Fl(e,qt(n,e.current)),be=null;return}}catch(o){if(l!==null)throw be=l,o;Ge=1,Fl(e,qt(n,e.current)),be=null;return}t.flags&32768?(je||r===1?e=!0:jr||(ve&536870912)!==0?e=!1:(na=e=!0,(r===2||r===9||r===3||r===6)&&(r=Xt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Im(t,e)):rs(t)}function rs(e){var t=e;do{if((t.flags&32768)!==0){Im(t,na);return}e=t.return;var n=Vx(t.alternate,t,$n);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ge===0&&(Ge=5)}function Im(e,t){do{var n=Yx(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ge=6,be=null}function Jm(e,t,n,r,l,o,m,b,_){e.cancelPendingCommit=null;do is();while(st!==0);if((Ce&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Uo,k1(e,n,o,m,b,_),e===Be&&(be=Be=null,ve=0),Er=t,ia=e,_r=n,qc=o,Kc=l,Ym=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ty(ul,function(){return rg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=G.T,G.T=null,l=F.p,F.p=2,m=Ce,Ce|=4;try{qx(e,t,n)}finally{Ce=m,F.p=l,G.T=r}}st=1,eg(),tg(),ng()}}function eg(){if(st===1){st=0;var e=ia,t=Er,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=G.T,G.T=null;var r=F.p;F.p=2;var l=Ce;Ce|=4;try{$m(t,e);var o=su,m=Vf(e.containerInfo),b=o.focusedElem,_=o.selectionRange;if(m!==b&&b&&b.ownerDocument&&Gf(b.ownerDocument.documentElement,b)){if(_!==null&&Bo(b)){var D=_.start,V=_.end;if(V===void 0&&(V=D),"selectionStart"in b)b.selectionStart=D,b.selectionEnd=Math.min(V,b.value.length);else{var K=b.ownerDocument||document,B=K&&K.defaultView||window;if(B.getSelection){var O=B.getSelection(),oe=b.textContent.length,re=Math.min(_.start,oe),Me=_.end===void 0?re:Math.min(_.end,oe);!O.extend&&re>Me&&(m=Me,Me=re,re=m);var R=Hf(b,re),A=Hf(b,Me);if(R&&A&&(O.rangeCount!==1||O.anchorNode!==R.node||O.anchorOffset!==R.offset||O.focusNode!==A.node||O.focusOffset!==A.offset)){var M=K.createRange();M.setStart(R.node,R.offset),O.removeAllRanges(),re>Me?(O.addRange(M),O.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),O.addRange(M))}}}}for(K=[],O=b;O=O.parentNode;)O.nodeType===1&&K.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<K.length;b++){var q=K[b];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}bs=!!lu,su=lu=null}finally{Ce=l,F.p=r,G.T=n}}e.current=t,st=2}}function tg(){if(st===2){st=0;var e=ia,t=Er,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=G.T,G.T=null;var r=F.p;F.p=2;var l=Ce;Ce|=4;try{Mm(e,t.alternate,t)}finally{Ce=l,F.p=r,G.T=n}}st=3}}function ng(){if(st===4||st===3){st=0,v1();var e=ia,t=Er,n=_r,r=Ym;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,Er=ia=null,ag(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ra=null),ho(n),t=t.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ir,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=G.T,l=F.p,F.p=2,G.T=null;try{for(var o=e.onRecoverableError,m=0;m<r.length;m++){var b=r[m];o(b.value,{componentStack:b.stack})}}finally{G.T=t,F.p=l}}(_r&3)!==0&&is(),yn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Qc?$i++:($i=0,Qc=e):$i=0,Ni(0)}}function ag(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pi(t)))}function is(e){return eg(),tg(),ng(),rg()}function rg(){if(st!==5)return!1;var e=ia,t=qc;qc=0;var n=ho(_r),r=G.T,l=F.p;try{F.p=32>n?32:n,G.T=null,n=Kc,Kc=null;var o=ia,m=_r;if(st=0,Er=ia=null,_r=0,(Ce&6)!==0)throw Error(c(331));var b=Ce;if(Ce|=4,Gm(o.current),Lm(o,o.current,m,n),Ce=b,Ni(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ir,o)}catch{}return!0}finally{F.p=l,G.T=r,ag(e,t)}}function ig(e,t,n){t=qt(n,t),t=Ec(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(ei(e,2),yn(e))}function De(e,t,n){if(e.tag===3)ig(e,e,n);else for(;t!==null;){if(t.tag===3){ig(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ra===null||!ra.has(r))){e=qt(n,e),n=cm(2),r=Fn(t,n,2),r!==null&&(um(n,r,t,e),ei(r,2),yn(r));break}}t=t.return}}function Pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zx;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(Hc=!0,l.add(n),e=Ix.bind(null,e,t,n),t.then(e,e))}function Ix(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Be===e&&(ve&n)===n&&(Ge===4||Ge===3&&(ve&62914560)===ve&&300>mn()-Yc?(Ce&2)===0&&zr(e,0):Gc|=n,wr===ve&&(wr=0)),yn(e)}function lg(e,t){t===0&&(t=tf()),e=or(e,t),e!==null&&(ei(e,t),yn(e))}function Jx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lg(e,n)}function ey(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(c(314))}r!==null&&r.delete(t),lg(e,n)}function ty(e,t){return oo(e,t)}var ls=null,Ar=null,Wc=!1,ss=!1,Ic=!1,Ua=0;function yn(e){e!==Ar&&e.next===null&&(Ar===null?ls=Ar=e:Ar=Ar.next=e),ss=!0,Wc||(Wc=!0,ay())}function Ni(e,t){if(!Ic&&ss){Ic=!0;do for(var n=!1,r=ls;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var o=0;else{var m=r.suspendedLanes,b=r.pingedLanes;o=(1<<31-Tt(42|e)+1)-1,o&=l&~(m&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,ug(r,o))}else o=ve,o=hl(r,r===Be?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||Jr(r,o)||(n=!0,ug(r,o));r=r.next}while(n);Ic=!1}}function ny(){sg()}function sg(){ss=Wc=!1;var e=0;Ua!==0&&(dy()&&(e=Ua),Ua=0);for(var t=mn(),n=null,r=ls;r!==null;){var l=r.next,o=og(r,t);o===0?(r.next=null,n===null?ls=l:n.next=l,l===null&&(Ar=n)):(n=r,(e!==0||(o&3)!==0)&&(ss=!0)),r=l}Ni(e)}function og(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-Tt(o),b=1<<m,_=l[m];_===-1?((b&n)===0||(b&r)!==0)&&(l[m]=A1(b,t)):_<=t&&(e.expiredLanes|=b),o&=~b}if(t=Be,n=ve,n=hl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&co(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Jr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&co(r),ho(n)){case 2:case 8:n=Id;break;case 32:n=ul;break;case 268435456:n=Jd;break;default:n=ul}return r=cg.bind(null,e),n=oo(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&co(r),e.callbackPriority=2,e.callbackNode=null,2}function cg(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(is()&&e.callbackNode!==n)return null;var r=ve;return r=hl(e,e===Be?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Km(e,r,t),og(e,mn()),e.callbackNode!=null&&e.callbackNode===n?cg.bind(null,e):null)}function ug(e,t){if(is())return null;Km(e,t,!0)}function ay(){hy(function(){(Ce&6)!==0?oo(Wd,ny):sg()})}function Jc(){return Ua===0&&(Ua=ef()),Ua}function dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function fg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ry(e,t,n,r,l){if(t==="submit"&&n&&n.stateNode===l){var o=dg((l[xt]||null).action),m=r.submitter;m&&(t=(t=m[xt]||null)?dg(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var b=new jl("action","action",null,r,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ua!==0){var _=m?fg(l,m):new FormData(l);yc(n,{pending:!0,data:_,method:l.method,action:o},null,_)}}else typeof o=="function"&&(b.preventDefault(),_=m?fg(l,m):new FormData(l),yc(n,{pending:!0,data:_,method:l.method,action:o},o,_))},currentTarget:l}]})}}for(var eu=0;eu<Lo.length;eu++){var tu=Lo[eu],iy=tu.toLowerCase(),ly=tu[0].toUpperCase()+tu.slice(1);ln(iy,"on"+ly)}ln(Kf,"onAnimationEnd"),ln(Qf,"onAnimationIteration"),ln(Zf,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(wx,"onTransitionRun"),ln(Ex,"onTransitionStart"),ln(_x,"onTransitionCancel"),ln(Xf,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Li));function hg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var m=r.length-1;0<=m;m--){var b=r[m],_=b.instance,D=b.currentTarget;if(b=b.listener,_!==o&&l.isPropagationStopped())break e;o=b,l.currentTarget=D;try{o(l)}catch(V){Xl(V)}l.currentTarget=null,o=_}else for(m=0;m<r.length;m++){if(b=r[m],_=b.instance,D=b.currentTarget,b=b.listener,_!==o&&l.isPropagationStopped())break e;o=b,l.currentTarget=D;try{o(l)}catch(V){Xl(V)}l.currentTarget=null,o=_}}}}function xe(e,t){var n=t[mo];n===void 0&&(n=t[mo]=new Set);var r=e+"__bubble";n.has(r)||(mg(t,e,2,!1),n.add(r))}function nu(e,t,n){var r=0;t&&(r|=4),mg(n,e,r,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[os]){e[os]=!0,sf.forEach(function(n){n!=="selectionchange"&&(sy.has(n)||nu(n,!1,e),nu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,nu("selectionchange",!1,t))}}function mg(e,t,n,r){switch(Lg(t)){case 2:var l=By;break;case 8:l=Oy;break;default:l=bu}n=l.bind(null,t,n,e),l=void 0,!_o||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ru(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var b=r.stateNode.containerInfo;if(b===l)break;if(m===4)for(m=r.return;m!==null;){var _=m.tag;if((_===3||_===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;b!==null;){if(m=Fa(b),m===null)return;if(_=m.tag,_===5||_===6||_===26||_===27){r=o=m;continue e}b=b.parentNode}}r=r.return}Sf(function(){var D=o,V=wo(n),K=[];e:{var B=Ff.get(e);if(B!==void 0){var O=jl,oe=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":O=tx;break;case"focusin":oe="focus",O=ko;break;case"focusout":oe="blur",O=ko;break;case"beforeblur":case"afterblur":O=ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=rx;break;case Kf:case Qf:case Zf:O=Q1;break;case Xf:O=lx;break;case"scroll":case"scrollend":O=G1;break;case"wheel":O=ox;break;case"copy":case"cut":case"paste":O=X1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=zf;break;case"toggle":case"beforetoggle":O=ux}var re=(t&4)!==0,Me=!re&&(e==="scroll"||e==="scrollend"),R=re?B!==null?B+"Capture":null:B;re=[];for(var A=D,M;A!==null;){var q=A;if(M=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||M===null||R===null||(q=ai(A,R),q!=null&&re.push(Ui(A,q,M))),Me)break;A=A.return}0<re.length&&(B=new O(B,oe,null,n,V),K.push({event:B,listeners:re}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",B&&n!==jo&&(oe=n.relatedTarget||n.fromElement)&&(Fa(oe)||oe[Xa]))break e;if((O||B)&&(B=V.window===V?V:(B=V.ownerDocument)?B.defaultView||B.parentWindow:window,O?(oe=n.relatedTarget||n.toElement,O=D,oe=oe?Fa(oe):null,oe!==null&&(Me=f(oe),re=oe.tag,oe!==Me||re!==5&&re!==27&&re!==6)&&(oe=null)):(O=null,oe=D),O!==oe)){if(re=Ef,q="onMouseLeave",R="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(re=zf,q="onPointerLeave",R="onPointerEnter",A="pointer"),Me=O==null?B:ni(O),M=oe==null?B:ni(oe),B=new re(q,A+"leave",O,n,V),B.target=Me,B.relatedTarget=M,q=null,Fa(V)===D&&(re=new re(R,A+"enter",oe,n,V),re.target=M,re.relatedTarget=Me,q=re),Me=q,O&&oe)t:{for(re=O,R=oe,A=0,M=re;M;M=kr(M))A++;for(M=0,q=R;q;q=kr(q))M++;for(;0<A-M;)re=kr(re),A--;for(;0<M-A;)R=kr(R),M--;for(;A--;){if(re===R||R!==null&&re===R.alternate)break t;re=kr(re),R=kr(R)}re=null}else re=null;O!==null&&gg(K,B,O,re,!1),oe!==null&&Me!==null&&gg(K,Me,oe,re,!0)}}e:{if(B=D?ni(D):window,O=B.nodeName&&B.nodeName.toLowerCase(),O==="select"||O==="input"&&B.type==="file")var J=Bf;else if(Mf(B))if(Of)J=vx;else{J=xx;var ge=bx}else O=B.nodeName,!O||O.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?D&&So(D.elementType)&&(J=Bf):J=yx;if(J&&(J=J(e,D))){Df(K,J,n,V);break e}ge&&ge(e,B,D),e==="focusout"&&D&&B.type==="number"&&D.memoizedProps.value!=null&&vo(B,"number",B.value)}switch(ge=D?ni(D):window,e){case"focusin":(Mf(ge)||ge.contentEditable==="true")&&(ir=ge,Oo=D,di=null);break;case"focusout":di=Oo=ir=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,Yf(K,n,V);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":Yf(K,n,V)}var ne;if(Ro)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else rr?Tf(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(Cf&&n.locale!=="ko"&&(rr||le!=="onCompositionStart"?le==="onCompositionEnd"&&rr&&(ne=jf()):(Kn=V,zo="value"in Kn?Kn.value:Kn.textContent,rr=!0)),ge=cs(D,le),0<ge.length&&(le=new _f(le,e,null,n,V),K.push({event:le,listeners:ge}),ne?le.data=ne:(ne=Rf(n),ne!==null&&(le.data=ne)))),(ne=fx?hx(e,n):mx(e,n))&&(le=cs(D,"onBeforeInput"),0<le.length&&(ge=new _f("onBeforeInput","beforeinput",null,n,V),K.push({event:ge,listeners:le}),ge.data=ne)),ry(K,e,D,n,V)}hg(K,t)})}function Ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=ai(e,n),l!=null&&r.unshift(Ui(e,l,o)),l=ai(e,t),l!=null&&r.push(Ui(e,l,o))),e.tag===3)return r;e=e.return}return[]}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gg(e,t,n,r,l){for(var o=t._reactName,m=[];n!==null&&n!==r;){var b=n,_=b.alternate,D=b.stateNode;if(b=b.tag,_!==null&&_===r)break;b!==5&&b!==26&&b!==27||D===null||(_=D,l?(D=ai(n,o),D!=null&&m.unshift(Ui(n,D,_))):l||(D=ai(n,o),D!=null&&m.push(Ui(n,D,_)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var oy=/\r\n?/g,cy=/\u0000|\uFFFD/g;function pg(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(cy,"")}function bg(e,t){return t=pg(t),pg(e)===t}function us(){}function Re(e,t,n,r,l,o){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||tr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&tr(e,""+r);break;case"className":gl(e,"class",r);break;case"tabIndex":gl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(e,n,r);break;case"style":yf(e,r,o);break;case"data":if(t!=="object"){gl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=xl(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",l.name,l,null),Re(e,t,"formEncType",l.formEncType,l,null),Re(e,t,"formMethod",l.formMethod,l,null),Re(e,t,"formTarget",l.formTarget,l,null)):(Re(e,t,"encType",l.encType,l,null),Re(e,t,"method",l.method,l,null),Re(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=xl(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=us);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=xl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ml(e,"popover",r);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ml(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=U1.get(n)||n,ml(e,n,r))}}function iu(e,t,n,r,l,o){switch(n){case"style":yf(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof r=="string"?tr(e,r):(typeof r=="number"||typeof r=="bigint")&&tr(e,""+r);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=us);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!of.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[xt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof r=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,l);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):ml(e,n,r)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var r=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var m=n[o];if(m!=null)switch(o){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Re(e,t,o,m,n,null)}}l&&Re(e,t,"srcSet",n.srcSet,n,null),r&&Re(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var b=o=m=l=null,_=null,D=null;for(r in n)if(n.hasOwnProperty(r)){var V=n[r];if(V!=null)switch(r){case"name":l=V;break;case"type":m=V;break;case"checked":_=V;break;case"defaultChecked":D=V;break;case"value":o=V;break;case"defaultValue":b=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(c(137,t));break;default:Re(e,t,r,V,n,null)}}gf(e,o,b,_,D,m,l,!1),pl(e);return;case"select":xe("invalid",e),r=m=o=null;for(l in n)if(n.hasOwnProperty(l)&&(b=n[l],b!=null))switch(l){case"value":o=b;break;case"defaultValue":m=b;break;case"multiple":r=b;default:Re(e,t,l,b,n,null)}t=o,n=m,e.multiple=!!r,t!=null?er(e,!!r,t,!1):n!=null&&er(e,!!r,n,!0);return;case"textarea":xe("invalid",e),o=l=r=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":r=b;break;case"defaultValue":l=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(c(91));break;default:Re(e,t,m,b,n,null)}bf(e,r,l,o),pl(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(r=n[_],r!=null))switch(_){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Re(e,t,_,r,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(r=0;r<Li.length;r++)xe(Li[r],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(r=n[D],r!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Re(e,t,D,r,n,null)}return;default:if(So(t)){for(V in n)n.hasOwnProperty(V)&&(r=n[V],r!==void 0&&iu(e,t,V,r,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(r=n[b],r!=null&&Re(e,t,b,r,n,null))}function uy(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,b=null,_=null,D=null,V=null;for(O in n){var K=n[O];if(n.hasOwnProperty(O)&&K!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":_=K;default:r.hasOwnProperty(O)||Re(e,t,O,null,r,K)}}for(var B in r){var O=r[B];if(K=n[B],r.hasOwnProperty(B)&&(O!=null||K!=null))switch(B){case"type":o=O;break;case"name":l=O;break;case"checked":D=O;break;case"defaultChecked":V=O;break;case"value":m=O;break;case"defaultValue":b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:O!==K&&Re(e,t,B,O,r,K)}}yo(e,m,b,_,D,V,o,l);return;case"select":O=m=b=B=null;for(o in n)if(_=n[o],n.hasOwnProperty(o)&&_!=null)switch(o){case"value":break;case"multiple":O=_;default:r.hasOwnProperty(o)||Re(e,t,o,null,r,_)}for(l in r)if(o=r[l],_=n[l],r.hasOwnProperty(l)&&(o!=null||_!=null))switch(l){case"value":B=o;break;case"defaultValue":b=o;break;case"multiple":m=o;default:o!==_&&Re(e,t,l,o,r,_)}t=b,n=m,r=O,B!=null?er(e,!!n,B,!1):!!r!=!!n&&(t!=null?er(e,!!n,t,!0):er(e,!!n,n?[]:"",!1));return;case"textarea":O=B=null;for(b in n)if(l=n[b],n.hasOwnProperty(b)&&l!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Re(e,t,b,null,r,l)}for(m in r)if(l=r[m],o=n[m],r.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":B=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Re(e,t,m,l,r,o)}pf(e,B,O);return;case"option":for(var oe in n)if(B=n[oe],n.hasOwnProperty(oe)&&B!=null&&!r.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Re(e,t,oe,null,r,B)}for(_ in r)if(B=r[_],O=n[_],r.hasOwnProperty(_)&&B!==O&&(B!=null||O!=null))switch(_){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Re(e,t,_,B,r,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)B=n[re],n.hasOwnProperty(re)&&B!=null&&!r.hasOwnProperty(re)&&Re(e,t,re,null,r,B);for(D in r)if(B=r[D],O=n[D],r.hasOwnProperty(D)&&B!==O&&(B!=null||O!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Re(e,t,D,B,r,O)}return;default:if(So(t)){for(var Me in n)B=n[Me],n.hasOwnProperty(Me)&&B!==void 0&&!r.hasOwnProperty(Me)&&iu(e,t,Me,void 0,r,B);for(V in r)B=r[V],O=n[V],!r.hasOwnProperty(V)||B===O||B===void 0&&O===void 0||iu(e,t,V,B,r,O);return}}for(var R in n)B=n[R],n.hasOwnProperty(R)&&B!=null&&!r.hasOwnProperty(R)&&Re(e,t,R,null,r,B);for(K in r)B=r[K],O=n[K],!r.hasOwnProperty(K)||B===O||B==null&&O==null||Re(e,t,K,B,r,O)}var lu=null,su=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cu=null;function dy(){var e=window.event;return e&&e.type==="popstate"?e===cu?!1:(cu=e,!0):(cu=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(my)}:vg;function my(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function jg(e,t){var n=t,r=0,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<r&&8>r){n=r;var m=e.ownerDocument;if(n&1&&Hi(m.documentElement),n&2&&Hi(m.body),n&4)for(n=m.head,Hi(n),m=n.firstChild;m;){var b=m.nextSibling,_=m.nodeName;m[ti]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(l===0){e.removeChild(o),Xi(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);Xi(t)}function uu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":uu(n),go(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function gy(e,t,n,r){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ti])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=on(e.nextSibling),e===null)break}return null}function py(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=on(e.nextSibling),e===null))return null;return e}function du(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function by(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fu=null;function wg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Eg(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Hi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);go(e)}var Pt=new Map,_g=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=F.d;F.d={f:xy,r:yy,D:vy,C:Sy,L:jy,m:wy,X:_y,S:Ey,M:zy};function xy(){var e=Nn.f(),t=as();return e||t}function yy(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Kh(t):Nn.r(e)}var Tr=typeof document>"u"?null:document;function zg(e,t,n){var r=Tr;if(r&&typeof t=="string"&&t){var l=Yt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),_g.has(l)||(_g.add(l),e={rel:e,crossOrigin:n,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),ot(t,"link",e),Ie(t),r.head.appendChild(t)))}}function vy(e){Nn.D(e),zg("dns-prefetch",e,null)}function Sy(e,t){Nn.C(e,t),zg("preconnect",e,t)}function jy(e,t,n){Nn.L(e,t,n);var r=Tr;if(r&&e&&t){var l='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Yt(n.imageSizes)+'"]')):l+='[href="'+Yt(e)+'"]';var o=l;switch(t){case"style":o=Rr(e);break;case"script":o=Mr(e)}Pt.has(o)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(o,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Gi(o))||t==="script"&&r.querySelector(Vi(o))||(t=r.createElement("link"),ot(t,"link",e),Ie(t),r.head.appendChild(t)))}}function wy(e,t){Nn.m(e,t);var n=Tr;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Yt(r)+'"][href="'+Yt(e)+'"]',o=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Mr(e)}if(!Pt.has(o)&&(e=x({rel:"modulepreload",href:e},t),Pt.set(o,e),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Vi(o)))return}r=n.createElement("link"),ot(r,"link",e),Ie(r),n.head.appendChild(r)}}}function Ey(e,t,n){Nn.S(e,t,n);var r=Tr;if(r&&e){var l=Wa(r).hoistableStyles,o=Rr(e);t=t||"default";var m=l.get(o);if(!m){var b={loading:0,preload:null};if(m=r.querySelector(Gi(o)))b.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(o))&&hu(e,n);var _=m=r.createElement("link");Ie(_),ot(_,"link",e),_._p=new Promise(function(D,V){_.onload=D,_.onerror=V}),_.addEventListener("load",function(){b.loading|=1}),_.addEventListener("error",function(){b.loading|=2}),b.loading|=4,hs(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:b},l.set(o,m)}}}function _y(e,t){Nn.X(e,t);var n=Tr;if(n&&e){var r=Wa(n).hoistableScripts,l=Mr(e),o=r.get(l);o||(o=n.querySelector(Vi(l)),o||(e=x({src:e,async:!0},t),(t=Pt.get(l))&&mu(e,t),o=n.createElement("script"),Ie(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function zy(e,t){Nn.M(e,t);var n=Tr;if(n&&e){var r=Wa(n).hoistableScripts,l=Mr(e),o=r.get(l);o||(o=n.querySelector(Vi(l)),o||(e=x({src:e,async:!0,type:"module"},t),(t=Pt.get(l))&&mu(e,t),o=n.createElement("script"),Ie(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Cg(e,t,n,r){var l=(l=ie.current)?fs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Rr(n.href),n=Wa(l).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Rr(n.href);var o=Wa(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(Gi(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),o||Cy(l,e,n,m.state))),t&&r===null)throw Error(c(528,""));return m}if(t&&r!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Mr(n),n=Wa(l).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Rr(e){return'href="'+Yt(e)+'"'}function Gi(e){return'link[rel="stylesheet"]['+e+"]"}function Ag(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Cy(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),ot(t,"link",n),Ie(t),e.head.appendChild(t))}function Mr(e){return'[src="'+Yt(e)+'"]'}function Vi(e){return"script[async]"+e}function kg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(r)return t.instance=r,Ie(r),r;var l=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ie(r),ot(r,"style",l),hs(r,n.precedence,e),t.instance=r;case"stylesheet":l=Rr(n.href);var o=e.querySelector(Gi(l));if(o)return t.state.loading|=4,t.instance=o,Ie(o),o;r=Ag(n),(l=Pt.get(l))&&hu(r,l),o=(e.ownerDocument||e).createElement("link"),Ie(o);var m=o;return m._p=new Promise(function(b,_){m.onload=b,m.onerror=_}),ot(o,"link",r),t.state.loading|=4,hs(o,n.precedence,e),t.instance=o;case"script":return o=Mr(n.src),(l=e.querySelector(Vi(o)))?(t.instance=l,Ie(l),l):(r=n,(l=Pt.get(o))&&(r=x({},n),mu(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),ot(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,hs(r,n.precedence,e));return t.instance}function hs(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,o=l,m=0;m<r.length;m++){var b=r[m];if(b.dataset.precedence===t)o=b;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ms=null;function Tg(e,t,n){if(ms===null){var r=new Map,l=ms=new Map;l.set(n,r)}else l=ms,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[ti]||o[dt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var b=r.get(m);b?b.push(o):r.set(m,[o])}}return r}function Rg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ay(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Yi=null;function ky(){}function Ty(e,t,n){if(Yi===null)throw Error(c(475));var r=Yi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Rr(n.href),o=e.querySelector(Gi(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=gs.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,Ie(o);return}o=e.ownerDocument||e,n=Ag(n),(l=Pt.get(l))&&hu(n,l),o=o.createElement("link"),Ie(o);var m=o;m._p=new Promise(function(b,_){m.onload=b,m.onerror=_}),ot(o,"link",n),t.instance=o}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=gs.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ry(){if(Yi===null)throw Error(c(475));var e=Yi;return e.stylesheets&&e.count===0&&gu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function gu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,t.forEach(My,e),ps=null,gs.call(e))}function My(e,t){if(!(t.state.loading&4)){var n=ps.get(e);if(n)var r=n.get(null);else{n=new Map,ps.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),r=m)}r&&n.set(null,r)}l=t.instance,m=l.getAttribute("data-precedence"),o=n.get(m)||r,o===r&&n.set(null,l),n.set(m,l),this.count++,r=gs.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var qi={$$typeof:T,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Dy(e,t,n,r,l,o,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.hiddenUpdates=uo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Dg(e,t,n,r,l,o,m,b,_,D,V,K){return e=new Dy(e,t,n,m,b,_,D,K),t=1,o===!0&&(t|=24),o=Mt(3,null,null,t),e.current=o,o.stateNode=e,t=Po(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},ec(o),e}function Bg(e){return e?(e=cr,e):cr}function Og(e,t,n,r,l,o){l=Bg(l),r.context===null?r.context=l:r.pendingContext=l,r=Xn(t),r.payload={element:n},o=o===void 0?null:o,o!==null&&(r.callback=o),n=Fn(e,r,t),n!==null&&(Nt(n,e,t),vi(n,e,t))}function $g(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pu(e,t){$g(e,t),(e=e.alternate)&&$g(e,t)}function Ng(e){if(e.tag===13){var t=or(e,67108864);t!==null&&Nt(t,e,67108864),pu(e,67108864)}}var bs=!0;function By(e,t,n,r){var l=G.T;G.T=null;var o=F.p;try{F.p=2,bu(e,t,n,r)}finally{F.p=o,G.T=l}}function Oy(e,t,n,r){var l=G.T;G.T=null;var o=F.p;try{F.p=8,bu(e,t,n,r)}finally{F.p=o,G.T=l}}function bu(e,t,n,r){if(bs){var l=xu(r);if(l===null)ru(e,t,r,xs,n),Ug(e,r);else if(Ny(l,e,t,n,r))r.stopPropagation();else if(Ug(e,r),t&4&&-1<$y.indexOf(e)){for(;l!==null;){var o=Pa(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=ja(o.pendingLanes);if(m!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var _=1<<31-Tt(m);b.entanglements[1]|=_,m&=~_}yn(o),(Ce&6)===0&&(ts=mn()+500,Ni(0))}}break;case 13:b=or(o,2),b!==null&&Nt(b,o,2),as(),pu(o,2)}if(o=xu(r),o===null&&ru(e,t,r,xs,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else ru(e,t,r,null,n)}}function xu(e){return e=wo(e),yu(e)}var xs=null;function yu(e){if(xs=null,e=Fa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xs=e,null}function Lg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(S1()){case Wd:return 2;case Id:return 8;case ul:case j1:return 32;case Jd:return 268435456;default:return 32}default:return 32}}var vu=!1,oa=null,ca=null,ua=null,Ki=new Map,Qi=new Map,da=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function Zi(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Pa(t),t!==null&&Ng(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ny(e,t,n,r,l){switch(t){case"focusin":return oa=Zi(oa,e,t,n,r,l),!0;case"dragenter":return ca=Zi(ca,e,t,n,r,l),!0;case"mouseover":return ua=Zi(ua,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Ki.set(o,Zi(Ki.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Qi.set(o,Zi(Qi.get(o)||null,e,t,n,r,l)),!0}return!1}function Hg(e){var t=Fa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,T1(e.priority,function(){if(n.tag===13){var r=$t();r=fo(r);var l=or(n,r);l!==null&&Nt(l,n,r),pu(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xu(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jo=r,n.target.dispatchEvent(r),jo=null}else return t=Pa(n),t!==null&&Ng(t),e.blockedOn=n,!1;t.shift()}return!0}function Gg(e,t,n){ys(e)&&n.delete(t)}function Ly(){vu=!1,oa!==null&&ys(oa)&&(oa=null),ca!==null&&ys(ca)&&(ca=null),ua!==null&&ys(ua)&&(ua=null),Ki.forEach(Gg),Qi.forEach(Gg)}function vs(e,t){e.blockedOn===t&&(e.blockedOn=null,vu||(vu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ly)))}var Ss=null;function Vg(e){Ss!==e&&(Ss=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ss===e&&(Ss=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(yu(r||n)===null)continue;break}var o=Pa(n);o!==null&&(e.splice(t,3),t-=3,yc(o,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function Xi(e){function t(_){return vs(_,e)}oa!==null&&vs(oa,e),ca!==null&&vs(ca,e),ua!==null&&vs(ua,e),Ki.forEach(t),Qi.forEach(t);for(var n=0;n<da.length;n++){var r=da[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<da.length&&(n=da[0],n.blockedOn===null);)Hg(n),n.blockedOn===null&&da.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],o=n[r+1],m=l[xt]||null;if(typeof o=="function")m||Vg(n);else if(m){var b=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[xt]||null)b=m.formAction;else if(yu(l)!==null)continue}else b=m.action;typeof b=="function"?n[r+1]=b:(n.splice(r,3),r-=3),Vg(n)}}}function Su(e){this._internalRoot=e}js.prototype.render=Su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,r=$t();Og(n,r,e,t,null,null)},js.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Og(e.current,2,null,e,null,null),as(),t[Xa]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<da.length&&t!==0&&t<da[n].priority;n++);da.splice(n,0,e),n===0&&Hg(e)}};var Yg=s.version;if(Yg!=="19.1.0")throw Error(c(527,Yg,"19.1.0"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Uy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Ir=ws.inject(Uy),kt=ws}catch{}}return Pi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,r="",l=im,o=lm,m=sm,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=Dg(e,1,!1,null,null,n,r,l,o,m,b,null),e[Xa]=t.current,au(e),new Su(t)},Pi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var r=!1,l="",o=im,m=lm,b=sm,_=null,D=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(D=n.formState)),t=Dg(e,1,!0,t,n??null,r,l,o,m,b,_,D),t.context=Bg(null),n=t.current,r=$t(),r=fo(r),l=Xn(r),l.callback=null,Fn(n,l,r),n=r,t.current.lanes=n,ei(t,n),yn(t),e[Xa]=t.current,au(e),new js(t)},Pi.version="19.1.0",Pi}var Jg;function Py(){if(Jg)return Eu.exports;Jg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Eu.exports=Fy(),Eu.exports}var Wy=Py(),rt=function(){return rt=Object.assign||function(s){for(var u,c=1,d=arguments.length;c<d;c++){u=arguments[c];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(s[f]=u[f])}return s},rt.apply(this,arguments)};function Gr(a,s,u){if(u||arguments.length===2)for(var c=0,d=s.length,f;c<d;c++)(f||!(c in s))&&(f||(f=Array.prototype.slice.call(s,0,c)),f[c]=s[c]);return a.concat(f||Array.prototype.slice.call(s))}var Oe="-ms-",nl="-moz-",Ee="-webkit-",Wp="comm",Js="rule",Rd="decl",Iy="@import",Ip="@keyframes",Jy="@layer",Jp=Math.abs,Md=String.fromCharCode,fd=Object.assign;function ev(a,s){return at(a,0)^45?(((s<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function e0(a){return a.trim()}function Un(a,s){return(a=s.exec(a))?a[0]:a}function he(a,s,u){return a.replace(s,u)}function Os(a,s,u){return a.indexOf(s,u)}function at(a,s){return a.charCodeAt(s)|0}function Vr(a,s,u){return a.slice(s,u)}function vn(a){return a.length}function t0(a){return a.length}function el(a,s){return s.push(a),a}function tv(a,s){return a.map(s).join("")}function ep(a,s){return a.filter(function(u){return!Un(u,s)})}var eo=1,Yr=1,n0=0,It=0,Xe=0,Zr="";function to(a,s,u,c,d,f,y,v){return{value:a,root:s,parent:u,type:c,props:d,children:f,line:eo,column:Yr,length:y,return:"",siblings:v}}function pa(a,s){return fd(to("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function Dr(a){for(;a.root;)a=pa(a.root,{children:[a]});el(a,a.siblings)}function nv(){return Xe}function av(){return Xe=It>0?at(Zr,--It):0,Yr--,Xe===10&&(Yr=1,eo--),Xe}function un(){return Xe=It<n0?at(Zr,It++):0,Yr++,Xe===10&&(Yr=1,eo++),Xe}function Va(){return at(Zr,It)}function $s(){return It}function no(a,s){return Vr(Zr,a,s)}function hd(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rv(a){return eo=Yr=1,n0=vn(Zr=a),It=0,[]}function iv(a){return Zr="",a}function Au(a){return e0(no(It-1,md(a===91?a+2:a===40?a+1:a)))}function lv(a){for(;(Xe=Va())&&Xe<33;)un();return hd(a)>2||hd(Xe)>3?"":" "}function sv(a,s){for(;--s&&un()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return no(a,$s()+(s<6&&Va()==32&&un()==32))}function md(a){for(;un();)switch(Xe){case a:return It;case 34:case 39:a!==34&&a!==39&&md(Xe);break;case 40:a===41&&md(a);break;case 92:un();break}return It}function ov(a,s){for(;un()&&a+Xe!==57;)if(a+Xe===84&&Va()===47)break;return"/*"+no(s,It-1)+"*"+Md(a===47?a:un())}function cv(a){for(;!hd(Va());)un();return no(a,It)}function uv(a){return iv(Ns("",null,null,null,[""],a=rv(a),0,[0],a))}function Ns(a,s,u,c,d,f,y,v,h){for(var g=0,x=0,S=y,w=0,C=0,j=0,$=1,L=1,N=1,Z=0,T="",Y=d,U=f,I=c,H=T;L;)switch(j=Z,Z=un()){case 40:if(j!=108&&at(H,S-1)==58){Os(H+=he(Au(Z),"&","&\f"),"&\f",Jp(g?v[g-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:H+=Au(Z);break;case 9:case 10:case 13:case 32:H+=lv(j);break;case 92:H+=sv($s()-1,7);continue;case 47:switch(Va()){case 42:case 47:el(dv(ov(un(),$s()),s,u,h),h);break;default:H+="/"}break;case 123*$:v[g++]=vn(H)*N;case 125*$:case 59:case 0:switch(Z){case 0:case 125:L=0;case 59+x:N==-1&&(H=he(H,/\f/g,"")),C>0&&vn(H)-S&&el(C>32?np(H+";",c,u,S-1,h):np(he(H," ","")+";",c,u,S-2,h),h);break;case 59:H+=";";default:if(el(I=tp(H,s,u,g,x,d,v,T,Y=[],U=[],S,f),f),Z===123)if(x===0)Ns(H,s,I,I,Y,f,S,v,U);else switch(w===99&&at(H,3)===110?100:w){case 100:case 108:case 109:case 115:Ns(a,I,I,c&&el(tp(a,I,I,0,0,d,v,T,d,Y=[],S,U),U),d,U,S,v,c?Y:U);break;default:Ns(H,I,I,I,[""],U,0,v,U)}}g=x=C=0,$=N=1,T=H="",S=y;break;case 58:S=1+vn(H),C=j;default:if($<1){if(Z==123)--$;else if(Z==125&&$++==0&&av()==125)continue}switch(H+=Md(Z),Z*$){case 38:N=x>0?1:(H+="\f",-1);break;case 44:v[g++]=(vn(H)-1)*N,N=1;break;case 64:Va()===45&&(H+=Au(un())),w=Va(),x=S=vn(T=H+=cv($s())),Z++;break;case 45:j===45&&vn(H)==2&&($=0)}}return f}function tp(a,s,u,c,d,f,y,v,h,g,x,S){for(var w=d-1,C=d===0?f:[""],j=t0(C),$=0,L=0,N=0;$<c;++$)for(var Z=0,T=Vr(a,w+1,w=Jp(L=y[$])),Y=a;Z<j;++Z)(Y=e0(L>0?C[Z]+" "+T:he(T,/&\f/g,C[Z])))&&(h[N++]=Y);return to(a,s,u,d===0?Js:v,h,g,x,S)}function dv(a,s,u,c){return to(a,s,u,Wp,Md(nv()),Vr(a,2,-2),0,c)}function np(a,s,u,c,d){return to(a,s,u,Rd,Vr(a,0,c),Vr(a,c+1,-1),c,d)}function a0(a,s,u){switch(ev(a,s)){case 5103:return Ee+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+a+a;case 4789:return nl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+a+nl+a+Oe+a+a;case 5936:switch(at(a,s+11)){case 114:return Ee+a+Oe+he(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ee+a+Oe+he(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ee+a+Oe+he(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Ee+a+Oe+a+a;case 6165:return Ee+a+Oe+"flex-"+a+a;case 5187:return Ee+a+he(a,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Oe+"flex-$1$2")+a;case 5443:return Ee+a+Oe+"flex-item-"+he(a,/flex-|-self/g,"")+(Un(a,/flex-|baseline/)?"":Oe+"grid-row-"+he(a,/flex-|-self/g,""))+a;case 4675:return Ee+a+Oe+"flex-line-pack"+he(a,/align-content|flex-|-self/g,"")+a;case 5548:return Ee+a+Oe+he(a,"shrink","negative")+a;case 5292:return Ee+a+Oe+he(a,"basis","preferred-size")+a;case 6060:return Ee+"box-"+he(a,"-grow","")+Ee+a+Oe+he(a,"grow","positive")+a;case 4554:return Ee+he(a,/([^-])(transform)/g,"$1"+Ee+"$2")+a;case 6187:return he(he(he(a,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),a,"")+a;case 5495:case 3959:return he(a,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return he(he(a,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+a+a;case 4200:if(!Un(a,/flex-|baseline/))return Oe+"grid-column-align"+Vr(a,s)+a;break;case 2592:case 3360:return Oe+he(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,d){return s=d,Un(c.props,/grid-\w+-end/)})?~Os(a+(u=u[s].value),"span",0)?a:Oe+he(a,"-start","")+a+Oe+"grid-row-span:"+(~Os(u,"span",0)?Un(u,/\d+/):+Un(u,/\d+/)-+Un(a,/\d+/))+";":Oe+he(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return Un(c.props,/grid-\w+-start/)})?a:Oe+he(he(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return he(a,/(.+)-inline(.+)/,Ee+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(a)-1-s>6)switch(at(a,s+1)){case 109:if(at(a,s+4)!==45)break;case 102:return he(a,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+nl+(at(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~Os(a,"stretch",0)?a0(he(a,"stretch","fill-available"),s,u)+a:a}break;case 5152:case 5920:return he(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,f,y,v,h,g){return Oe+d+":"+f+g+(y?Oe+d+"-span:"+(v?h:+h-+f)+g:"")+a});case 4949:if(at(a,s+6)===121)return he(a,":",":"+Ee)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return he(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(at(a,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Oe+"$2box$3")+a;case 100:return he(a,":",":"+Oe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(a,"scroll-","scroll-snap-")+a}return a}function Ys(a,s){for(var u="",c=0;c<a.length;c++)u+=s(a[c],c,a,s)||"";return u}function fv(a,s,u,c){switch(a.type){case Jy:if(a.children.length)break;case Iy:case Rd:return a.return=a.return||a.value;case Wp:return"";case Ip:return a.return=a.value+"{"+Ys(a.children,c)+"}";case Js:if(!vn(a.value=a.props.join(",")))return""}return vn(u=Ys(a.children,c))?a.return=a.value+"{"+u+"}":""}function hv(a){var s=t0(a);return function(u,c,d,f){for(var y="",v=0;v<s;v++)y+=a[v](u,c,d,f)||"";return y}}function mv(a){return function(s){s.root||(s=s.return)&&a(s)}}function gv(a,s,u,c){if(a.length>-1&&!a.return)switch(a.type){case Rd:a.return=a0(a.value,a.length,u);return;case Ip:return Ys([pa(a,{value:he(a.value,"@","@"+Ee)})],c);case Js:if(a.length)return tv(u=a.props,function(d){switch(Un(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dr(pa(a,{props:[he(d,/:(read-\w+)/,":"+nl+"$1")]})),Dr(pa(a,{props:[d]})),fd(a,{props:ep(u,c)});break;case"::placeholder":Dr(pa(a,{props:[he(d,/:(plac\w+)/,":"+Ee+"input-$1")]})),Dr(pa(a,{props:[he(d,/:(plac\w+)/,":"+nl+"$1")]})),Dr(pa(a,{props:[he(d,/:(plac\w+)/,Oe+"input-$1")]})),Dr(pa(a,{props:[d]})),fd(a,{props:ep(u,c)});break}return""})}}var pv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ut={},qr=typeof process<"u"&&Ut!==void 0&&(Ut.REACT_APP_SC_ATTR||Ut.SC_ATTR)||"data-styled",r0="active",i0="data-styled-version",ao="6.1.19",Dd=`/*!sc*/
`,qs=typeof window<"u"&&typeof document<"u",bv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==""?Ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.SC_DISABLE_SPEEDY!==void 0&&Ut.SC_DISABLE_SPEEDY!==""&&Ut.SC_DISABLE_SPEEDY!=="false"&&Ut.SC_DISABLE_SPEEDY),xv={},ro=Object.freeze([]),Kr=Object.freeze({});function l0(a,s,u){return u===void 0&&(u=Kr),a.theme!==u.theme&&a.theme||s||u.theme}var s0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),yv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vv=/(^-|-$)/g;function ap(a){return a.replace(yv,"-").replace(vv,"")}var Sv=/(a)(d)/gi,Es=52,rp=function(a){return String.fromCharCode(a+(a>25?39:97))};function gd(a){var s,u="";for(s=Math.abs(a);s>Es;s=s/Es|0)u=rp(s%Es)+u;return(rp(s%Es)+u).replace(Sv,"$1-$2")}var ku,o0=5381,Ur=function(a,s){for(var u=s.length;u;)a=33*a^s.charCodeAt(--u);return a},c0=function(a){return Ur(o0,a)};function Bd(a){return gd(c0(a)>>>0)}function jv(a){return a.displayName||a.name||"Component"}function Tu(a){return typeof a=="string"&&!0}var u0=typeof Symbol=="function"&&Symbol.for,d0=u0?Symbol.for("react.memo"):60115,wv=u0?Symbol.for("react.forward_ref"):60112,Ev={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zv=((ku={})[wv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ku[d0]=f0,ku);function ip(a){return("type"in(s=a)&&s.type.$$typeof)===d0?f0:"$$typeof"in a?zv[a.$$typeof]:Ev;var s}var Cv=Object.defineProperty,Av=Object.getOwnPropertyNames,lp=Object.getOwnPropertySymbols,kv=Object.getOwnPropertyDescriptor,Tv=Object.getPrototypeOf,sp=Object.prototype;function h0(a,s,u){if(typeof s!="string"){if(sp){var c=Tv(s);c&&c!==sp&&h0(a,c,u)}var d=Av(s);lp&&(d=d.concat(lp(s)));for(var f=ip(a),y=ip(s),v=0;v<d.length;++v){var h=d[v];if(!(h in _v||u&&u[h]||y&&h in y||f&&h in f)){var g=kv(s,h);try{Cv(a,h,g)}catch{}}}}return a}function Ya(a){return typeof a=="function"}function Od(a){return typeof a=="object"&&"styledComponentId"in a}function Ga(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function Ks(a,s){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function al(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function pd(a,s,u){if(u===void 0&&(u=!1),!u&&!al(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)a[c]=pd(a[c],s[c]);else if(al(s))for(var c in s)a[c]=pd(a[c],s[c]);return a}function $d(a,s){Object.defineProperty(a,"toString",{value:s})}function qa(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Rv=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return a.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,f=d;s>=f;)if((f<<=1)<0)throw qa(16,"".concat(s));this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(var y=d;y<f;y++)this.groupSizes[y]=0}for(var v=this.indexOfGroup(s+1),h=(y=0,u.length);y<h;y++)this.tag.insertRule(v,u[y])&&(this.groupSizes[s]++,v++)},a.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),d=c+u;this.groupSizes[s]=0;for(var f=c;f<d;f++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],d=this.indexOfGroup(s),f=d+c,y=d;y<f;y++)u+="".concat(this.tag.getRule(y)).concat(Dd);return u},a}(),Ls=new Map,Qs=new Map,Us=1,_s=function(a){if(Ls.has(a))return Ls.get(a);for(;Qs.has(Us);)Us++;var s=Us++;return Ls.set(a,s),Qs.set(s,a),s},Mv=function(a,s){Us=s+1,Ls.set(a,s),Qs.set(s,a)},Dv="style[".concat(qr,"][").concat(i0,'="').concat(ao,'"]'),Bv=new RegExp("^".concat(qr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ov=function(a,s,u){for(var c,d=u.split(","),f=0,y=d.length;f<y;f++)(c=d[f])&&a.registerName(s,c)},$v=function(a,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(Dd),d=[],f=0,y=c.length;f<y;f++){var v=c[f].trim();if(v){var h=v.match(Bv);if(h){var g=0|parseInt(h[1],10),x=h[2];g!==0&&(Mv(x,g),Ov(a,x,h[3]),a.getTag().insertRules(g,d)),d.length=0}else d.push(v)}}},op=function(a){for(var s=document.querySelectorAll(Dv),u=0,c=s.length;u<c;u++){var d=s[u];d&&d.getAttribute(qr)!==r0&&($v(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function Nv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var m0=function(a){var s=document.head,u=a||s,c=document.createElement("style"),d=function(v){var h=Array.from(v.querySelectorAll("style[".concat(qr,"]")));return h[h.length-1]}(u),f=d!==void 0?d.nextSibling:null;c.setAttribute(qr,r0),c.setAttribute(i0,ao);var y=Nv();return y&&c.setAttribute("nonce",y),u.insertBefore(c,f),c},Lv=function(){function a(s){this.element=m0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,d=0,f=c.length;d<f;d++){var y=c[d];if(y.ownerNode===u)return y}throw qa(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},a}(),Uv=function(){function a(s){this.element=m0(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),Hv=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),cp=qs,Gv={isServer:!qs,useCSSOMInjection:!bv},Zs=function(){function a(s,u,c){s===void 0&&(s=Kr),u===void 0&&(u={});var d=this;this.options=rt(rt({},Gv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&qs&&cp&&(cp=!1,op(this)),$d(this,function(){return function(f){for(var y=f.getTag(),v=y.length,h="",g=function(S){var w=function(N){return Qs.get(N)}(S);if(w===void 0)return"continue";var C=f.names.get(w),j=y.getGroup(S);if(C===void 0||!C.size||j.length===0)return"continue";var $="".concat(qr,".g").concat(S,'[id="').concat(w,'"]'),L="";C!==void 0&&C.forEach(function(N){N.length>0&&(L+="".concat(N,","))}),h+="".concat(j).concat($,'{content:"').concat(L,'"}').concat(Dd)},x=0;x<v;x++)g(x);return h}(d)})}return a.registerId=function(s){return _s(s)},a.prototype.rehydrate=function(){!this.server&&qs&&op(this)},a.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new a(rt(rt({},this.options),s),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,d=u.target;return u.isServer?new Hv(d):c?new Lv(d):new Uv(d)}(this.options),new Rv(s)));var s},a.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},a.prototype.registerName=function(s,u){if(_s(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},a.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(_s(s),c)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(_s(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),Vv=/&/g,Yv=/^\s*\/\/.*$/gm;function g0(a,s){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=g0(u.children,s)),u})}function qv(a){var s,u,c,d=Kr,f=d.options,y=f===void 0?Kr:f,v=d.plugins,h=v===void 0?ro:v,g=function(w,C,j){return j.startsWith(u)&&j.endsWith(u)&&j.replaceAll(u,"").length>0?".".concat(s):w},x=h.slice();x.push(function(w){w.type===Js&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Vv,u).replace(c,g))}),y.prefix&&x.push(gv),x.push(fv);var S=function(w,C,j,$){C===void 0&&(C=""),j===void 0&&(j=""),$===void 0&&($="&"),s=$,u=C,c=new RegExp("\\".concat(u,"\\b"),"g");var L=w.replace(Yv,""),N=uv(j||C?"".concat(j," ").concat(C," { ").concat(L," }"):L);y.namespace&&(N=g0(N,y.namespace));var Z=[];return Ys(N,hv(x.concat(mv(function(T){return Z.push(T)})))),Z};return S.hash=h.length?h.reduce(function(w,C){return C.name||qa(15),Ur(w,C.name)},o0).toString():"",S}var Kv=new Zs,bd=qv(),p0=_e.createContext({shouldForwardProp:void 0,styleSheet:Kv,stylis:bd});p0.Consumer;_e.createContext(void 0);function xd(){return k.useContext(p0)}var b0=function(){function a(s,u){var c=this;this.inject=function(d,f){f===void 0&&(f=bd);var y=c.name+f.hash;d.hasNameForId(c.id,y)||d.insertRules(c.id,y,f(c.rules,y,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,$d(this,function(){throw qa(12,String(c.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=bd),this.name+s.hash},a}(),Qv=function(a){return a>="A"&&a<="Z"};function up(a){for(var s="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;Qv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var x0=function(a){return a==null||a===!1||a===""},y0=function(a){var s,u,c=[];for(var d in a){var f=a[d];a.hasOwnProperty(d)&&!x0(f)&&(Array.isArray(f)&&f.isCss||Ya(f)?c.push("".concat(up(d),":"),f,";"):al(f)?c.push.apply(c,Gr(Gr(["".concat(d," {")],y0(f),!1),["}"],!1)):c.push("".concat(up(d),": ").concat((s=d,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in pv||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function ba(a,s,u,c){if(x0(a))return[];if(Od(a))return[".".concat(a.styledComponentId)];if(Ya(a)){if(!Ya(f=a)||f.prototype&&f.prototype.isReactComponent||!s)return[a];var d=a(s);return ba(d,s,u,c)}var f;return a instanceof b0?u?(a.inject(u,c),[a.getName(c)]):[a]:al(a)?y0(a):Array.isArray(a)?Array.prototype.concat.apply(ro,a.map(function(y){return ba(y,s,u,c)})):[a.toString()]}function v0(a){for(var s=0;s<a.length;s+=1){var u=a[s];if(Ya(u)&&!Od(u))return!1}return!0}var Zv=c0(ao),Xv=function(){function a(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&v0(s),this.componentId=u,this.baseHash=Ur(Zv,u),this.baseStyle=c,Zs.registerId(u)}return a.prototype.generateAndInjectStyles=function(s,u,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=Ga(d,this.staticRulesId);else{var f=Ks(ba(this.rules,s,u,c)),y=gd(Ur(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,y)){var v=c(f,".".concat(y),void 0,this.componentId);u.insertRules(this.componentId,y,v)}d=Ga(d,y),this.staticRulesId=y}else{for(var h=Ur(this.baseHash,c.hash),g="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")g+=S;else if(S){var w=Ks(ba(S,s,u,c));h=Ur(h,w+x),g+=w}}if(g){var C=gd(h>>>0);u.hasNameForId(this.componentId,C)||u.insertRules(this.componentId,C,c(g,".".concat(C),void 0,this.componentId)),d=Ga(d,C)}}return d},a}(),rl=_e.createContext(void 0);rl.Consumer;function Fv(a){var s=_e.useContext(rl),u=k.useMemo(function(){return function(c,d){if(!c)throw qa(14);if(Ya(c)){var f=c(d);return f}if(Array.isArray(c)||typeof c!="object")throw qa(8);return d?rt(rt({},d),c):c}(a.theme,s)},[a.theme,s]);return a.children?_e.createElement(rl.Provider,{value:u},a.children):null}var Ru={};function Pv(a,s,u){var c=Od(a),d=a,f=!Tu(a),y=s.attrs,v=y===void 0?ro:y,h=s.componentId,g=h===void 0?function(Y,U){var I=typeof Y!="string"?"sc":ap(Y);Ru[I]=(Ru[I]||0)+1;var H="".concat(I,"-").concat(Bd(ao+I+Ru[I]));return U?"".concat(U,"-").concat(H):H}(s.displayName,s.parentComponentId):h,x=s.displayName,S=x===void 0?function(Y){return Tu(Y)?"styled.".concat(Y):"Styled(".concat(jv(Y),")")}(a):x,w=s.displayName&&s.componentId?"".concat(ap(s.displayName),"-").concat(s.componentId):s.componentId||g,C=c&&d.attrs?d.attrs.concat(v).filter(Boolean):v,j=s.shouldForwardProp;if(c&&d.shouldForwardProp){var $=d.shouldForwardProp;if(s.shouldForwardProp){var L=s.shouldForwardProp;j=function(Y,U){return $(Y,U)&&L(Y,U)}}else j=$}var N=new Xv(u,w,c?d.componentStyle:void 0);function Z(Y,U){return function(I,H,de){var se=I.attrs,X=I.componentStyle,ce=I.defaultProps,ze=I.foldedComponentIds,mt=I.styledComponentId,it=I.target,ke=_e.useContext(rl),G=xd(),F=I.shouldForwardProp||G.shouldForwardProp,ae=l0(H,ke,ce)||Kr,fe=function(pe,ie,We){for(var we,ut=rt(rt({},ie),{className:void 0,theme:We}),Sa=0;Sa<pe.length;Sa+=1){var jn=Ya(we=pe[Sa])?we(ut):we;for(var Gt in jn)ut[Gt]=Gt==="className"?Ga(ut[Gt],jn[Gt]):Gt==="style"?rt(rt({},ut[Gt]),jn[Gt]):jn[Gt]}return ie.className&&(ut.className=Ga(ut.className,ie.className)),ut}(se,H,ae),z=fe.as||it,Q={};for(var P in fe)fe[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&fe.theme===ae||(P==="forwardedAs"?Q.as=fe.forwardedAs:F&&!F(P,z)||(Q[P]=fe[P]));var W=function(pe,ie){var We=xd(),we=pe.generateAndInjectStyles(ie,We.styleSheet,We.stylis);return we}(X,fe),te=Ga(ze,mt);return W&&(te+=" "+W),fe.className&&(te+=" "+fe.className),Q[Tu(z)&&!s0.has(z)?"class":"className"]=te,de&&(Q.ref=de),k.createElement(z,Q)}(T,Y,U)}Z.displayName=S;var T=_e.forwardRef(Z);return T.attrs=C,T.componentStyle=N,T.displayName=S,T.shouldForwardProp=j,T.foldedComponentIds=c?Ga(d.foldedComponentIds,d.styledComponentId):"",T.styledComponentId=w,T.target=c?d.target:a,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Y){this._foldedDefaultProps=c?function(U){for(var I=[],H=1;H<arguments.length;H++)I[H-1]=arguments[H];for(var de=0,se=I;de<se.length;de++)pd(U,se[de],!0);return U}({},d.defaultProps,Y):Y}}),$d(T,function(){return".".concat(T.styledComponentId)}),f&&h0(T,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function dp(a,s){for(var u=[a[0]],c=0,d=s.length;c<d;c+=1)u.push(s[c],a[c+1]);return u}var fp=function(a){return Object.assign(a,{isCss:!0})};function cn(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Ya(a)||al(a))return fp(ba(dp(ro,Gr([a],s,!0))));var c=a;return s.length===0&&c.length===1&&typeof c[0]=="string"?ba(c):fp(ba(dp(c,s)))}function yd(a,s,u){if(u===void 0&&(u=Kr),!s)throw qa(1,s);var c=function(d){for(var f=[],y=1;y<arguments.length;y++)f[y-1]=arguments[y];return a(s,u,cn.apply(void 0,Gr([d],f,!1)))};return c.attrs=function(d){return yd(a,s,rt(rt({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return yd(a,s,rt(rt({},u),d))},c}var S0=function(a){return yd(Pv,a)},p=S0;s0.forEach(function(a){p[a]=S0(a)});var Wv=function(){function a(s,u){this.rules=s,this.componentId=u,this.isStatic=v0(s),Zs.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,u,c,d){var f=d(Ks(ba(this.rules,u,c,d)),""),y=this.componentId+s;c.insertRules(y,y,f)},a.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,u,c,d){s>2&&Zs.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,d)},a}();function j0(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=cn.apply(void 0,Gr([a],s,!1)),d="sc-global-".concat(Bd(JSON.stringify(c))),f=new Wv(c,d),y=function(h){var g=xd(),x=_e.useContext(rl),S=_e.useRef(g.styleSheet.allocateGSInstance(d)).current;return g.styleSheet.server&&v(S,h,g.styleSheet,x,g.stylis),_e.useLayoutEffect(function(){if(!g.styleSheet.server)return v(S,h,g.styleSheet,x,g.stylis),function(){return f.removeStyles(S,g.styleSheet)}},[S,h,g.styleSheet,x,g.stylis]),null};function v(h,g,x,S,w){if(f.isStatic)f.renderStyles(h,xv,x,w);else{var C=rt(rt({},g),{theme:l0(g,S,y.defaultProps)});f.renderStyles(h,C,x,w)}}return _e.memo(y)}function Nd(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Ks(cn.apply(void 0,Gr([a],s,!1))),d=Bd(c);return new b0(d,c)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hp="popstate";function Iv(a={}){function s(c,d){let{pathname:f,search:y,hash:v}=c.location;return vd("",{pathname:f,search:y,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:il(d)}return e2(s,u,null,a)}function Le(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Jt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Jv(){return Math.random().toString(36).substring(2,10)}function mp(a,s){return{usr:a.state,key:a.key,idx:s}}function vd(a,s,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Xr(s):s,state:u,key:s&&s.key||c||Jv()}}function il({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Xr(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function e2(a,s,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,y=d.history,v="POP",h=null,g=x();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function x(){return(y.state||{idx:null}).idx}function S(){v="POP";let L=x(),N=L==null?null:L-g;g=L,h&&h({action:v,location:$.location,delta:N})}function w(L,N){v="PUSH";let Z=vd($.location,L,N);g=x()+1;let T=mp(Z,g),Y=$.createHref(Z);try{y.pushState(T,"",Y)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;d.location.assign(Y)}f&&h&&h({action:v,location:$.location,delta:1})}function C(L,N){v="REPLACE";let Z=vd($.location,L,N);g=x();let T=mp(Z,g),Y=$.createHref(Z);y.replaceState(T,"",Y),f&&h&&h({action:v,location:$.location,delta:0})}function j(L){return t2(L)}let $={get action(){return v},get location(){return a(d,y)},listen(L){if(h)throw new Error("A history only accepts one active listener");return d.addEventListener(hp,S),h=L,()=>{d.removeEventListener(hp,S),h=null}},createHref(L){return s(d,L)},createURL:j,encodeLocation(L){let N=j(L);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:w,replace:C,go(L){return y.go(L)}};return $}function t2(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Le(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:il(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function w0(a,s,u="/"){return n2(a,s,u,!1)}function n2(a,s,u,c){let d=typeof s=="string"?Xr(s):s,f=Vn(d.pathname||"/",u);if(f==null)return null;let y=E0(a);a2(y);let v=null;for(let h=0;v==null&&h<y.length;++h){let g=m2(f);v=f2(y[h],g,c)}return v}function E0(a,s=[],u=[],c=""){let d=(f,y,v)=>{let h={relativePath:v===void 0?f.path||"":v,caseSensitive:f.caseSensitive===!0,childrenIndex:y,route:f};h.relativePath.startsWith("/")&&(Le(h.relativePath.startsWith(c),`Absolute route path "${h.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(c.length));let g=Hn([c,h.relativePath]),x=u.concat(h);f.children&&f.children.length>0&&(Le(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),E0(f.children,s,x,g)),!(f.path==null&&!f.index)&&s.push({path:g,score:u2(g,f.index),routesMeta:x})};return a.forEach((f,y)=>{if(f.path===""||!f.path?.includes("?"))d(f,y);else for(let v of _0(f.path))d(f,y,v)}),s}function _0(a){let s=a.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let y=_0(c.join("/")),v=[];return v.push(...y.map(h=>h===""?f:[f,h].join("/"))),d&&v.push(...y),v.map(h=>a.startsWith("/")&&h===""?"/":h)}function a2(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:d2(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var r2=/^:[\w-]+$/,i2=3,l2=2,s2=1,o2=10,c2=-2,gp=a=>a==="*";function u2(a,s){let u=a.split("/"),c=u.length;return u.some(gp)&&(c+=c2),s&&(c+=l2),u.filter(d=>!gp(d)).reduce((d,f)=>d+(r2.test(f)?i2:f===""?s2:o2),c)}function d2(a,s){return a.length===s.length&&a.slice(0,-1).every((c,d)=>c===s[d])?a[a.length-1]-s[s.length-1]:0}function f2(a,s,u=!1){let{routesMeta:c}=a,d={},f="/",y=[];for(let v=0;v<c.length;++v){let h=c[v],g=v===c.length-1,x=f==="/"?s:s.slice(f.length)||"/",S=Xs({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},x),w=h.route;if(!S&&g&&u&&!c[c.length-1].route.index&&(S=Xs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!S)return null;Object.assign(d,S.params),y.push({params:d,pathname:Hn([f,S.pathname]),pathnameBase:x2(Hn([f,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(f=Hn([f,S.pathnameBase]))}return y}function Xs(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=h2(a.path,a.caseSensitive,a.end),d=s.match(u);if(!d)return null;let f=d[0],y=f.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:c.reduce((g,{paramName:x,isOptional:S},w)=>{if(x==="*"){let j=v[w]||"";y=f.slice(0,f.length-j.length).replace(/(.)\/+$/,"$1")}const C=v[w];return S&&!C?g[x]=void 0:g[x]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:y,pattern:a}}function h2(a,s=!1,u=!0){Jt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,v,h)=>(c.push({paramName:v,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function m2(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Jt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Vn(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function g2(a,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof a=="string"?Xr(a):a;return{pathname:u?u.startsWith("/")?u:p2(u,s):s,search:y2(c),hash:v2(d)}}function p2(a,s){let u=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Mu(a,s,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function b2(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Ld(a){let s=b2(a);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Ud(a,s,u,c=!1){let d;typeof a=="string"?d=Xr(a):(d={...a},Le(!d.pathname||!d.pathname.includes("?"),Mu("?","pathname","search",d)),Le(!d.pathname||!d.pathname.includes("#"),Mu("#","pathname","hash",d)),Le(!d.search||!d.search.includes("#"),Mu("#","search","hash",d)));let f=a===""||d.pathname==="",y=f?"/":d.pathname,v;if(y==null)v=u;else{let S=s.length-1;if(!c&&y.startsWith("..")){let w=y.split("/");for(;w[0]==="..";)w.shift(),S-=1;d.pathname=w.join("/")}v=S>=0?s[S]:"/"}let h=g2(d,v),g=y&&y!=="/"&&y.endsWith("/"),x=(f||y===".")&&u.endsWith("/");return!h.pathname.endsWith("/")&&(g||x)&&(h.pathname+="/"),h}var Hn=a=>a.join("/").replace(/\/\/+/g,"/"),x2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),y2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,v2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function S2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var z0=["POST","PUT","PATCH","DELETE"];new Set(z0);var j2=["GET",...z0];new Set(j2);var Fr=k.createContext(null);Fr.displayName="DataRouter";var io=k.createContext(null);io.displayName="DataRouterState";k.createContext(!1);var C0=k.createContext({isTransitioning:!1});C0.displayName="ViewTransition";var w2=k.createContext(new Map);w2.displayName="Fetchers";var E2=k.createContext(null);E2.displayName="Await";var dn=k.createContext(null);dn.displayName="Navigation";var ll=k.createContext(null);ll.displayName="Location";var Sn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var Hd=k.createContext(null);Hd.displayName="RouteError";function _2(a,{relative:s}={}){Le(Pr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=k.useContext(dn),{hash:d,pathname:f,search:y}=sl(a,{relative:s}),v=f;return u!=="/"&&(v=f==="/"?u:Hn([u,f])),c.createHref({pathname:v,search:y,hash:d})}function Pr(){return k.useContext(ll)!=null}function fn(){return Le(Pr(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(ll).location}var A0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k0(a){k.useContext(dn).static||k.useLayoutEffect(a)}function Gd(){let{isDataRoute:a}=k.useContext(Sn);return a?L2():z2()}function z2(){Le(Pr(),"useNavigate() may be used only in the context of a <Router> component.");let a=k.useContext(Fr),{basename:s,navigator:u}=k.useContext(dn),{matches:c}=k.useContext(Sn),{pathname:d}=fn(),f=JSON.stringify(Ld(c)),y=k.useRef(!1);return k0(()=>{y.current=!0}),k.useCallback((h,g={})=>{if(Jt(y.current,A0),!y.current)return;if(typeof h=="number"){u.go(h);return}let x=Ud(h,JSON.parse(f),d,g.relative==="path");a==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:Hn([s,x.pathname])),(g.replace?u.replace:u.push)(x,g.state,g)},[s,u,f,d,a])}k.createContext(null);function sl(a,{relative:s}={}){let{matches:u}=k.useContext(Sn),{pathname:c}=fn(),d=JSON.stringify(Ld(u));return k.useMemo(()=>Ud(a,JSON.parse(d),c,s==="path"),[a,d,c,s])}function C2(a,s){return T0(a,s)}function T0(a,s,u,c){Le(Pr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=k.useContext(dn),{matches:f}=k.useContext(Sn),y=f[f.length-1],v=y?y.params:{},h=y?y.pathname:"/",g=y?y.pathnameBase:"/",x=y&&y.route;{let N=x&&x.path||"";R0(h,!x||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let S=fn(),w;if(s){let N=typeof s=="string"?Xr(s):s;Le(g==="/"||N.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${N.pathname}" was given in the \`location\` prop.`),w=N}else w=S;let C=w.pathname||"/",j=C;if(g!=="/"){let N=g.replace(/^\//,"").split("/");j="/"+C.replace(/^\//,"").split("/").slice(N.length).join("/")}let $=w0(a,{pathname:j});Jt(x||$!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Jt($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=M2($&&$.map(N=>Object.assign({},N,{params:Object.assign({},v,N.params),pathname:Hn([g,d.encodeLocation?d.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?g:Hn([g,d.encodeLocation?d.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),f,u,c);return s&&L?k.createElement(ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},L):L}function A2(){let a=N2(),s=S2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",a),y=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:f},"ErrorBoundary")," or"," ",k.createElement("code",{style:f},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},s),u?k.createElement("pre",{style:d},u):null,y)}var k2=k.createElement(A2,null),T2=class extends k.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?k.createElement(Sn.Provider,{value:this.props.routeContext},k.createElement(Hd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function R2({routeContext:a,match:s,children:u}){let c=k.useContext(Fr);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),k.createElement(Sn.Provider,{value:a},u)}function M2(a,s=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let d=a,f=u?.errors;if(f!=null){let h=d.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Le(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,h+1))}let y=!1,v=-1;if(u)for(let h=0;h<d.length;h++){let g=d[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=h),g.route.id){let{loaderData:x,errors:S}=u,w=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){y=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}return d.reduceRight((h,g,x)=>{let S,w=!1,C=null,j=null;u&&(S=f&&g.route.id?f[g.route.id]:void 0,C=g.route.errorElement||k2,y&&(v<0&&x===0?(R0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,j=null):v===x&&(w=!0,j=g.route.hydrateFallbackElement||null)));let $=s.concat(d.slice(0,x+1)),L=()=>{let N;return S?N=C:w?N=j:g.route.Component?N=k.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=h,k.createElement(R2,{match:g,routeContext:{outlet:h,matches:$,isDataRoute:u!=null},children:N})};return u&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?k.createElement(T2,{location:u.location,revalidation:u.revalidation,component:C,error:S,children:L(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):L()},null)}function Vd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D2(a){let s=k.useContext(Fr);return Le(s,Vd(a)),s}function B2(a){let s=k.useContext(io);return Le(s,Vd(a)),s}function O2(a){let s=k.useContext(Sn);return Le(s,Vd(a)),s}function Yd(a){let s=O2(a),u=s.matches[s.matches.length-1];return Le(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function $2(){return Yd("useRouteId")}function N2(){let a=k.useContext(Hd),s=B2("useRouteError"),u=Yd("useRouteError");return a!==void 0?a:s.errors?.[u]}function L2(){let{router:a}=D2("useNavigate"),s=Yd("useNavigate"),u=k.useRef(!1);return k0(()=>{u.current=!0}),k.useCallback(async(d,f={})=>{Jt(u.current,A0),u.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:s,...f}))},[a,s])}var pp={};function R0(a,s,u){!s&&!pp[a]&&(pp[a]=!0,Jt(!1,u))}k.memo(U2);function U2({routes:a,future:s,state:u}){return T0(a,void 0,u,s)}function Hs({to:a,replace:s,state:u,relative:c}){Le(Pr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=k.useContext(dn);Jt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=k.useContext(Sn),{pathname:y}=fn(),v=Gd(),h=Ud(a,Ld(f),y,c==="path"),g=JSON.stringify(h);return k.useEffect(()=>{v(JSON.parse(g),{replace:s,state:u,relative:c})},[v,g,c,s,u]),null}function Wt(a){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function H2({basename:a="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){Le(!Pr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=a.replace(/^\/*/,"/"),v=k.useMemo(()=>({basename:y,navigator:d,static:f,future:{}}),[y,d,f]);typeof u=="string"&&(u=Xr(u));let{pathname:h="/",search:g="",hash:x="",state:S=null,key:w="default"}=u,C=k.useMemo(()=>{let j=Vn(h,y);return j==null?null:{location:{pathname:j,search:g,hash:x,state:S,key:w},navigationType:c}},[y,h,g,x,S,w,c]);return Jt(C!=null,`<Router basename="${y}"> is not able to match the URL "${h}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:k.createElement(dn.Provider,{value:v},k.createElement(ll.Provider,{children:s,value:C}))}function G2({children:a,location:s}){return C2(Sd(a),s)}function Sd(a,s=[]){let u=[];return k.Children.forEach(a,(c,d)=>{if(!k.isValidElement(c))return;let f=[...s,d];if(c.type===k.Fragment){u.push.apply(u,Sd(c.props.children,f));return}Le(c.type===Wt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=Sd(c.props.children,f)),u.push(y)}),u}var Gs="get",Vs="application/x-www-form-urlencoded";function lo(a){return a!=null&&typeof a.tagName=="string"}function V2(a){return lo(a)&&a.tagName.toLowerCase()==="button"}function Y2(a){return lo(a)&&a.tagName.toLowerCase()==="form"}function q2(a){return lo(a)&&a.tagName.toLowerCase()==="input"}function K2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Q2(a,s){return a.button===0&&(!s||s==="_self")&&!K2(a)}function jd(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let c=a[u];return s.concat(Array.isArray(c)?c.map(d=>[u,d]):[[u,c]])},[]))}function Z2(a,s){let u=jd(a);return s&&s.forEach((c,d)=>{u.has(d)||s.getAll(d).forEach(f=>{u.append(d,f)})}),u}var zs=null;function X2(){if(zs===null)try{new FormData(document.createElement("form"),0),zs=!1}catch{zs=!0}return zs}var F2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Du(a){return a!=null&&!F2.has(a)?(Jt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vs}"`),null):a}function P2(a,s){let u,c,d,f,y;if(Y2(a)){let v=a.getAttribute("action");c=v?Vn(v,s):null,u=a.getAttribute("method")||Gs,d=Du(a.getAttribute("enctype"))||Vs,f=new FormData(a)}else if(V2(a)||q2(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=a.getAttribute("formaction")||v.getAttribute("action");if(c=h?Vn(h,s):null,u=a.getAttribute("formmethod")||v.getAttribute("method")||Gs,d=Du(a.getAttribute("formenctype"))||Du(v.getAttribute("enctype"))||Vs,f=new FormData(v,a),!X2()){let{name:g,type:x,value:S}=a;if(x==="image"){let w=g?`${g}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else g&&f.append(g,S)}}else{if(lo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Gs,c=null,d=Vs,y=a}return f&&d==="text/plain"&&(y=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qd(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function W2(a,s,u){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Vn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function I2(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function J2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function eS(a,s,u){let c=await Promise.all(a.map(async d=>{let f=s.routes[d.route.id];if(f){let y=await I2(f,u);return y.links?y.links():[]}return[]}));return rS(c.flat(1).filter(J2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function bp(a,s,u,c,d,f){let y=(h,g)=>u[g]?h.route.id!==u[g].route.id:!0,v=(h,g)=>u[g].pathname!==h.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==h.params["*"];return f==="assets"?s.filter((h,g)=>y(h,g)||v(h,g)):f==="data"?s.filter((h,g)=>{let x=c.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(y(h,g)||v(h,g))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function tS(a,s,{includeHydrateFallback:u}={}){return nS(a.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function nS(a){return[...new Set(a)]}function aS(a){let s={},u=Object.keys(a).sort();for(let c of u)s[c]=a[c];return s}function rS(a,s){let u=new Set;return new Set(s),a.reduce((c,d)=>{let f=JSON.stringify(aS(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}function M0(){let a=k.useContext(Fr);return qd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function iS(){let a=k.useContext(io);return qd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Kd=k.createContext(void 0);Kd.displayName="FrameworkContext";function D0(){let a=k.useContext(Kd);return qd(a,"You must render this element inside a <HydratedRouter> element"),a}function lS(a,s){let u=k.useContext(Kd),[c,d]=k.useState(!1),[f,y]=k.useState(!1),{onFocus:v,onBlur:h,onMouseEnter:g,onMouseLeave:x,onTouchStart:S}=s,w=k.useRef(null);k.useEffect(()=>{if(a==="render"&&y(!0),a==="viewport"){let $=N=>{N.forEach(Z=>{y(Z.isIntersecting)})},L=new IntersectionObserver($,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[a]),k.useEffect(()=>{if(c){let $=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout($)}}},[c]);let C=()=>{d(!0)},j=()=>{d(!1),y(!1)};return u?a!=="intent"?[f,w,{}]:[f,w,{onFocus:Wi(v,C),onBlur:Wi(h,j),onMouseEnter:Wi(g,C),onMouseLeave:Wi(x,j),onTouchStart:Wi(S,C)}]:[!1,w,{}]}function Wi(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function sS({page:a,...s}){let{router:u}=M0(),c=k.useMemo(()=>w0(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?k.createElement(cS,{page:a,matches:c,...s}):null}function oS(a){let{manifest:s,routeModules:u}=D0(),[c,d]=k.useState([]);return k.useEffect(()=>{let f=!1;return eS(a,s,u).then(y=>{f||d(y)}),()=>{f=!0}},[a,s,u]),c}function cS({page:a,matches:s,...u}){let c=fn(),{manifest:d,routeModules:f}=D0(),{basename:y}=M0(),{loaderData:v,matches:h}=iS(),g=k.useMemo(()=>bp(a,s,h,d,c,"data"),[a,s,h,d,c]),x=k.useMemo(()=>bp(a,s,h,d,c,"assets"),[a,s,h,d,c]),S=k.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let j=new Set,$=!1;if(s.forEach(N=>{let Z=d.routes[N.route.id];!Z||!Z.hasLoader||(!g.some(T=>T.route.id===N.route.id)&&N.route.id in v&&f[N.route.id]?.shouldRevalidate||Z.hasClientLoader?$=!0:j.add(N.route.id))}),j.size===0)return[];let L=W2(a,y,"data");return $&&j.size>0&&L.searchParams.set("_routes",s.filter(N=>j.has(N.route.id)).map(N=>N.route.id).join(",")),[L.pathname+L.search]},[y,v,c,d,g,s,a,f]),w=k.useMemo(()=>tS(x,d),[x,d]),C=oS(x);return k.createElement(k.Fragment,null,S.map(j=>k.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...u})),w.map(j=>k.createElement("link",{key:j,rel:"modulepreload",href:j,...u})),C.map(({key:j,link:$})=>k.createElement("link",{key:j,...$})))}function uS(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var B0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{B0&&(window.__reactRouterVersion="7.7.1")}catch{}function dS({basename:a,children:s,window:u}){let c=k.useRef();c.current==null&&(c.current=Iv({window:u,v5Compat:!0}));let d=c.current,[f,y]=k.useState({action:d.action,location:d.location}),v=k.useCallback(h=>{k.startTransition(()=>y(h))},[y]);return k.useLayoutEffect(()=>d.listen(v),[d,v]),k.createElement(H2,{basename:a,children:s,location:f.location,navigationType:f.action,navigator:d})}var O0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ya=k.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:y,state:v,target:h,to:g,preventScrollReset:x,viewTransition:S,...w},C){let{basename:j}=k.useContext(dn),$=typeof g=="string"&&O0.test(g),L,N=!1;if(typeof g=="string"&&$&&(L=g,B0))try{let se=new URL(window.location.href),X=g.startsWith("//")?new URL(se.protocol+g):new URL(g),ce=Vn(X.pathname,j);X.origin===se.origin&&ce!=null?g=ce+X.search+X.hash:N=!0}catch{Jt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=_2(g,{relative:d}),[T,Y,U]=lS(c,w),I=gS(g,{replace:y,state:v,target:h,preventScrollReset:x,relative:d,viewTransition:S});function H(se){s&&s(se),se.defaultPrevented||I(se)}let de=k.createElement("a",{...w,...U,href:L||Z,onClick:N||f?s:H,ref:uS(C,Y),target:h,"data-discover":!$&&u==="render"?"true":void 0});return T&&!$?k.createElement(k.Fragment,null,de,k.createElement(sS,{page:Z})):de});ya.displayName="Link";var fS=k.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:y,viewTransition:v,children:h,...g},x){let S=sl(y,{relative:g.relative}),w=fn(),C=k.useContext(io),{navigator:j,basename:$}=k.useContext(dn),L=C!=null&&vS(S)&&v===!0,N=j.encodeLocation?j.encodeLocation(S).pathname:S.pathname,Z=w.pathname,T=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;u||(Z=Z.toLowerCase(),T=T?T.toLowerCase():null,N=N.toLowerCase()),T&&$&&(T=Vn(T,$)||T);const Y=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let U=Z===N||!d&&Z.startsWith(N)&&Z.charAt(Y)==="/",I=T!=null&&(T===N||!d&&T.startsWith(N)&&T.charAt(N.length)==="/"),H={isActive:U,isPending:I,isTransitioning:L},de=U?s:void 0,se;typeof c=="function"?se=c(H):se=[c,U?"active":null,I?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let X=typeof f=="function"?f(H):f;return k.createElement(ya,{...g,"aria-current":de,className:se,ref:x,style:X,to:y,viewTransition:v},typeof h=="function"?h(H):h)});fS.displayName="NavLink";var hS=k.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:f,method:y=Gs,action:v,onSubmit:h,relative:g,preventScrollReset:x,viewTransition:S,...w},C)=>{let j=xS(),$=yS(v,{relative:g}),L=y.toLowerCase()==="get"?"get":"post",N=typeof v=="string"&&O0.test(v),Z=T=>{if(h&&h(T),T.defaultPrevented)return;T.preventDefault();let Y=T.nativeEvent.submitter,U=Y?.getAttribute("formmethod")||y;j(Y||T.currentTarget,{fetcherKey:s,method:U,navigate:u,replace:d,state:f,relative:g,preventScrollReset:x,viewTransition:S})};return k.createElement("form",{ref:C,method:L,action:$,onSubmit:c?h:Z,...w,"data-discover":!N&&a==="render"?"true":void 0})});hS.displayName="Form";function mS(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $0(a){let s=k.useContext(Fr);return Le(s,mS(a)),s}function gS(a,{target:s,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:y}={}){let v=Gd(),h=fn(),g=sl(a,{relative:f});return k.useCallback(x=>{if(Q2(x,s)){x.preventDefault();let S=u!==void 0?u:il(h)===il(g);v(a,{replace:S,state:c,preventScrollReset:d,relative:f,viewTransition:y})}},[h,v,g,u,c,s,a,d,f,y])}function N0(a){Jt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=k.useRef(jd(a)),u=k.useRef(!1),c=fn(),d=k.useMemo(()=>Z2(c.search,u.current?null:s.current),[c.search]),f=Gd(),y=k.useCallback((v,h)=>{const g=jd(typeof v=="function"?v(new URLSearchParams(d)):v);u.current=!0,f("?"+g,h)},[f,d]);return[d,y]}var pS=0,bS=()=>`__${String(++pS)}__`;function xS(){let{router:a}=$0("useSubmit"),{basename:s}=k.useContext(dn),u=$2();return k.useCallback(async(c,d={})=>{let{action:f,method:y,encType:v,formData:h,body:g}=P2(c,s);if(d.navigate===!1){let x=d.fetcherKey||bS();await a.fetch(x,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:h,body:g,formMethod:d.method||y,formEncType:d.encType||v,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:h,body:g,formMethod:d.method||y,formEncType:d.encType||v,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,s,u])}function yS(a,{relative:s}={}){let{basename:u}=k.useContext(dn),c=k.useContext(Sn);Le(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...sl(a||".",{relative:s})},y=fn();if(a==null){f.search=y.search;let v=new URLSearchParams(f.search),h=v.getAll("index");if(h.some(x=>x==="")){v.delete("index"),h.filter(S=>S).forEach(S=>v.append("index",S));let x=v.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Hn([u,f.pathname])),il(f)}function vS(a,{relative:s}={}){let u=k.useContext(C0);Le(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=$0("useViewTransitionState"),d=sl(a,{relative:s});if(!u.isTransitioning)return!1;let f=Vn(u.currentLocation.pathname,c)||u.currentLocation.pathname,y=Vn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Xs(d.pathname,y)!=null||Xs(d.pathname,f)!=null}const L0="/assets/logo-BY-LKRi7.png",ol={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}},E={navy:"#10223f",navyDeep:"#0a1830",navySoft:"#1b3358",red:"#cd004e",redDark:"#a8003f",blue:"#0864c8",paper:"#f4f7fc",line:"#dce4ef",ink:"#10223f",muted:"#586c86",fontDisplay:'"Barlow Condensed", "Arial Narrow", Arial, sans-serif',fontBody:"Barlow, Arial, Helvetica, sans-serif"},SS=p.a`
  position: absolute;
  left: 1rem;
  top: -100px;
  z-index: 200;
  background: ${E.navy};
  color: #fff;
  font-family: ${E.fontBody};
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 8px;

  &:focus {
    top: 0.75rem;
  }
`,jS=p.nav`
  background: #fff;
  border-bottom: 1px solid ${E.line};
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: ${E.fontBody};
  text-align: left;
`,wS=p.div`
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
`,ES=p(ya)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  border-radius: 8px;
`,_S=p.img`
  height: 44px;
  width: 44px;
  object-fit: contain;
`,zS=p.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`,CS=p.span`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: ${E.navy};
  white-space: nowrap;
`,AS=p.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${E.muted};

  @media (max-width: 380px) {
    display: none;
  }
`,kS=p.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid ${E.line};
    box-shadow: 0 12px 24px rgba(16, 34, 63, 0.08);
    padding: 0.75rem 1rem 1rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    display: ${a=>a.$open?"flex":"none"};
  }
`,Bu=p(ya)`
  text-decoration: none;
  color: ${a=>a.$active?E.navy:E.muted};
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
    background: ${E.red};
    opacity: ${a=>a.$active?1:0};
  }

  &:hover {
    color: ${E.navy};
    background: ${E.paper};
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
`,TS=p(ya)`
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.1rem;
  border-radius: 8px;
  background: ${E.red};
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    background: ${E.redDark};
  }

  @media (max-width: 767px) {
    margin: 0.5rem 0 0;
  }
`,RS=p.button`
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: ${E.navy};
  color: #fff;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${E.navySoft};
    border-color: transparent;
  }

  @media (max-width: 767px) {
    display: inline-flex;
  }
`,MS=p.span`
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
`;function U0(){const a=fn(),[s,u]=k.useState(!1),c=!1,d=()=>u(!1);return k.useEffect(()=>{if(!s)return;const f=y=>{y.key==="Escape"&&u(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[s]),i.jsxs(i.Fragment,{children:[i.jsx(SS,{href:"#inhalt",children:"Zum Inhalt springen"}),i.jsx(jS,{"aria-label":"Hauptnavigation",children:i.jsxs(wS,{children:[i.jsxs(ES,{to:"/sponsoring",onClick:d,children:[i.jsx(_S,{src:L0,alt:""}),i.jsxs(zS,{children:[i.jsx(CS,{children:"SC Konstanz-Wollmatingen"}),i.jsx(AS,{children:"Partner & Sponsoring"})]})]}),i.jsx(RS,{"aria-label":s?"Menü schließen":"Menü öffnen","aria-expanded":s,"aria-controls":"hauptmenue",onClick:()=>u(f=>!f),children:i.jsx(MS,{$open:s})}),i.jsxs(kS,{id:"hauptmenue",$open:s,children:[i.jsx(Bu,{to:"/sponsoring",$active:a.pathname==="/sponsoring","aria-current":a.pathname==="/sponsoring"?"page":void 0,onClick:d,children:"Sponsoring"}),i.jsx(Bu,{to:"/sponsoring/club-500",$active:a.pathname==="/sponsoring/club-500","aria-current":a.pathname==="/sponsoring/club-500"?"page":void 0,onClick:d,children:"500er Club"}),i.jsx(Bu,{to:"/sponsoring/ballspende",$active:a.pathname==="/sponsoring/ballspende","aria-current":a.pathname==="/sponsoring/ballspende"?"page":void 0,onClick:d,children:"Ballspende"}),c,i.jsx(TS,{to:"/sponsoring#kontakt",onClick:d,children:"Anfrage stellen"})]})]})})]})}const DS=p.footer`
  width: 100%;
  background: ${E.navyDeep};
  border-top: 4px solid ${E.red};
  color: rgba(255, 255, 255, 0.72);
  font-family: ${E.fontBody};
  font-size: 0.95rem;
  text-align: left;
  padding: 2.5rem 1rem 2rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem 2.5rem;
  }
`,BS=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }
`,OS=p.div`
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
`,$S=p.div`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0.35rem;
`,xp=p.h2`
  font-family: ${E.fontDisplay};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  margin: 0 0 0.75rem;
`,yp=p.ul`
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
`,Cs=p.a`
  ${H0}
`,Ou=p(ya)`
  ${H0}
`,NS=p.div`
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
`;function cl(){return i.jsxs(DS,{children:[i.jsxs(BS,{children:[i.jsxs(OS,{children:[i.jsx("img",{src:L0,alt:""}),i.jsxs("div",{children:[i.jsx($S,{children:"SC Konstanz-Wollmatingen e.V."}),"Schleyerweg 5, 78467 Konstanz"]})]}),i.jsxs("nav",{"aria-label":"Kontakt",children:[i.jsx(xp,{children:"Sponsoring"}),i.jsxs(yp,{children:[i.jsx("li",{children:i.jsx(Cs,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})}),i.jsx("li",{children:i.jsx(Ou,{to:"/sponsoring/club-500",children:"500er Club"})}),i.jsx("li",{children:i.jsx(Ou,{to:"/sponsoring/ballspende",children:"Ballspende"})}),i.jsx("li",{children:i.jsx(Cs,{href:"https://www.sckw.de",target:"_blank",rel:"noopener",children:"sckw.de"})})]})]}),i.jsxs("nav",{"aria-label":"Rechtliches",children:[i.jsx(xp,{children:"Rechtliches"}),i.jsxs(yp,{children:[i.jsx("li",{children:i.jsx(Cs,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})}),i.jsx("li",{children:i.jsx(Cs,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"})})]})]})]}),i.jsxs(NS,{children:[i.jsxs("span",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen e.V."]}),i.jsx(Ou,{to:"/sponsoring/spielerpatenschaft",children:"Personal Partner"})]})]})}const G0="/assets/cheerleading_0-DQQGXi0R.jpg",V0="/assets/cheerleading_1-NkLBARmH.jpg",Y0="/assets/cheerleading_2-CrezcZYL.jpg",q0="/assets/cheerleading_3-GN5rPHNN.jpg",K0="/assets/1-ClVWb4ei.png",Q0="/assets/10-Bwp2eIye.png",Z0="/assets/11-W061sOUI.png",X0="/assets/12-TjJyzl8L.png",F0="/assets/13-ChUUCdQQ.png",P0="/assets/14-BVhdRr98.png",W0="/assets/2-CcfgIQYe.png",I0="/assets/3-DYiPkVd7.png",J0="/assets/4-1upoqVoS.png",eb="/assets/5-D0tadXAC.png",tb="/assets/6-NJ4ELm_j.png",nb="/assets/7-BXo4_Bcj.png",ab="/assets/8-BbOqEnj_.png",rb="/assets/9-CIK0gi9o.png",ib="/assets/herren_0-BVVgyt1l.jpg",lb="/assets/herren_1-B8ywOnNy.jpg",sb="/assets/herren_10-DPVQsg9B.jpg",ob="/assets/herren_11-wfWG62H3.jpg",cb="/assets/herren_12-DEJSN2zG.jpg",ub="/assets/herren_13-F52vdukE.jpg",db="/assets/herren_14-Cq9hoKfG.jpg",fb="/assets/herren_15-aYIFGauG.jpg",hb="/assets/herren_16-NYI2EaEN.jpg",mb="/assets/herren_17-B_52ysA2.jpg",gb="/assets/herren_18-DbwjVNKJ.jpg",pb="/assets/herren_19-BduD_J85.png",bb="/assets/herren_2--jFuixBF.jpg",xb="/assets/herren_3-BPz1zlkG.jpg",yb="/assets/herren_4-BZRrQaFr.jpg",vb="/assets/herren_5-D-QrfY2P.jpg",Sb="/assets/herren_6-DWQvi6Am.jpg",jb="/assets/herren_7-BXO6B8Bt.jpg",wb="/assets/herren_8-Cg4rdr7T.jpg",Eb="/assets/herren_9-DoLnTdRG.jpg",_b="/assets/herren_club500_1-DNikBmOh.png",zb="/assets/herren_club500_2-CABnv8vs.png",Cb="/assets/herren_club500_3-Cjxe_RiU.png",Ab="/assets/herren_club500_4-Dgm0Z9_i.png",kb="/assets/herren_club500_5-3OeJLCAP.png",Tb="/assets/herren_jubel_500club-mxBrnD8H.png",Rb="/assets/IMG-team-BGcF1agj.png",Mb="/assets/IMG_5349-CpvIVKhM.jpg",Db="/assets/IMG_5369-DQ4CSwdg.jpg",Bb="/assets/IMG_5421-BBzniIEN.jpg",Ob="/assets/IMG_5442-D2PgutWB.jpg",$b="/assets/IMG_5952-B9VW6Qie.jpg",Nb="/assets/Unbenann324t-IPGo6eoQ.png",Lb="/assets/image0-DDrU5aZn.jpeg",Ub="/assets/image11-BNM8hTkT.jpeg",Hb="/assets/image8-BUnedp9U.jpeg",LS="/assets/grafhardenberg-Di5cVggE.png",US="/assets/horta-DydWIGV7.png",HS="/assets/logans-BgpKwKYA.png",GS="/assets/ricobet-DsVC-eZt.png",VS="/assets/rothaus-DqkKD9yW.png",YS="/assets/tasty-B2pSa1rE.png",qS="/assets/cabin-window-B83r_CDB.jpg",KS="/assets/outside-9-xz17qL.jpg",QS="/assets/shower-B75caJ-F.jpg",ZS="/assets/sitting-area-D7khB3Gw.jpg",XS="/assets/toilet-BpMHYbhh.jpg",FS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":G0,"../assets/gallery/cheerleading/cheerleading_1.jpg":V0,"../assets/gallery/cheerleading/cheerleading_2.jpg":Y0,"../assets/gallery/cheerleading/cheerleading_3.jpg":q0,"../assets/gallery/damen/1.png":K0,"../assets/gallery/damen/10.png":Q0,"../assets/gallery/damen/11.png":Z0,"../assets/gallery/damen/12.png":X0,"../assets/gallery/damen/13.png":F0,"../assets/gallery/damen/14.png":P0,"../assets/gallery/damen/2.png":W0,"../assets/gallery/damen/3.png":I0,"../assets/gallery/damen/4.png":J0,"../assets/gallery/damen/5.png":eb,"../assets/gallery/damen/6.png":tb,"../assets/gallery/damen/7.png":nb,"../assets/gallery/damen/8.png":ab,"../assets/gallery/damen/9.png":rb,"../assets/gallery/herren/herren_0.jpg":ib,"../assets/gallery/herren/herren_1.jpg":lb,"../assets/gallery/herren/herren_10.jpg":sb,"../assets/gallery/herren/herren_11.jpg":ob,"../assets/gallery/herren/herren_12.jpg":cb,"../assets/gallery/herren/herren_13.jpg":ub,"../assets/gallery/herren/herren_14.jpg":db,"../assets/gallery/herren/herren_15.jpg":fb,"../assets/gallery/herren/herren_16.jpg":hb,"../assets/gallery/herren/herren_17.jpg":mb,"../assets/gallery/herren/herren_18.jpg":gb,"../assets/gallery/herren/herren_19.png":pb,"../assets/gallery/herren/herren_2.jpg":bb,"../assets/gallery/herren/herren_3.jpg":xb,"../assets/gallery/herren/herren_4.jpg":yb,"../assets/gallery/herren/herren_5.jpg":vb,"../assets/gallery/herren/herren_6.jpg":Sb,"../assets/gallery/herren/herren_7.jpg":jb,"../assets/gallery/herren/herren_8.jpg":wb,"../assets/gallery/herren/herren_9.jpg":Eb,"../assets/gallery/herren/herren_club500_1.png":_b,"../assets/gallery/herren/herren_club500_2.png":zb,"../assets/gallery/herren/herren_club500_3.png":Cb,"../assets/gallery/herren/herren_club500_4.png":Ab,"../assets/gallery/herren/herren_club500_5.png":kb,"../assets/gallery/herren/herren_jubel_500club.png":Tb,"../assets/gallery/jfv/IMG-team.png":Rb,"../assets/gallery/jfv/IMG_5349.jpg":Mb,"../assets/gallery/jfv/IMG_5369.jpg":Db,"../assets/gallery/jfv/IMG_5421.jpg":Bb,"../assets/gallery/jfv/IMG_5442.jpg":Ob,"../assets/gallery/jfv/IMG_5952.jpg":$b,"../assets/gallery/jfv/Unbenann324t.png":Nb,"../assets/gallery/jfv/image0.jpeg":Lb,"../assets/gallery/jfv/image11.jpeg":Ub,"../assets/gallery/jfv/image8.jpeg":Hb}),PS=Object.assign({"../assets/sponsors/grafhardenberg.png":LS,"../assets/sponsors/horta.png":US,"../assets/sponsors/logans.png":HS,"../assets/sponsors/ricobet.png":GS,"../assets/sponsors/rothaus.png":VS,"../assets/sponsors/tasty.png":YS}),WS=Object.assign({"../assets/renovation/cabin-window.jpg":qS,"../assets/renovation/outside.jpg":KS,"../assets/renovation/shower.jpg":QS,"../assets/renovation/sitting-area.jpg":ZS,"../assets/renovation/toilet.jpg":XS}),Gb=a=>a.split("/").pop()?.toLowerCase()||"",IS=a=>{const s=a.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function JS(a){const s=[...a];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const e5=()=>{const a={};Object.entries(FS).forEach(([c,d])=>{const f=IS(c);a[f]||(a[f]=[]),a[f].push(d)}),Object.keys(a).forEach(c=>{a[c]=JS(a[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{a[c]&&(s[c]=a[c])}),Object.keys(a).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=a[c])}),s},t5=()=>{const a={};return Object.entries(PS).forEach(([s,u])=>{const c=Gb(s);a[c]=u}),a},Vb=()=>{const a={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(WS).forEach(([s,u])=>{const c=Gb(s);c.includes("sitting")?a.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?a.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&a.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?a.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?a.waschkueche.push({src:u,alt:"Dusche"}):a.waschkueche.push({src:u,alt:"Waschküche"}))}),a},ct=a=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":G0,"../assets/gallery/cheerleading/cheerleading_1.jpg":V0,"../assets/gallery/cheerleading/cheerleading_2.jpg":Y0,"../assets/gallery/cheerleading/cheerleading_3.jpg":q0,"../assets/gallery/damen/1.png":K0,"../assets/gallery/damen/10.png":Q0,"../assets/gallery/damen/11.png":Z0,"../assets/gallery/damen/12.png":X0,"../assets/gallery/damen/13.png":F0,"../assets/gallery/damen/14.png":P0,"../assets/gallery/damen/2.png":W0,"../assets/gallery/damen/3.png":I0,"../assets/gallery/damen/4.png":J0,"../assets/gallery/damen/5.png":eb,"../assets/gallery/damen/6.png":tb,"../assets/gallery/damen/7.png":nb,"../assets/gallery/damen/8.png":ab,"../assets/gallery/damen/9.png":rb,"../assets/gallery/herren/herren_0.jpg":ib,"../assets/gallery/herren/herren_1.jpg":lb,"../assets/gallery/herren/herren_10.jpg":sb,"../assets/gallery/herren/herren_11.jpg":ob,"../assets/gallery/herren/herren_12.jpg":cb,"../assets/gallery/herren/herren_13.jpg":ub,"../assets/gallery/herren/herren_14.jpg":db,"../assets/gallery/herren/herren_15.jpg":fb,"../assets/gallery/herren/herren_16.jpg":hb,"../assets/gallery/herren/herren_17.jpg":mb,"../assets/gallery/herren/herren_18.jpg":gb,"../assets/gallery/herren/herren_19.png":pb,"../assets/gallery/herren/herren_2.jpg":bb,"../assets/gallery/herren/herren_3.jpg":xb,"../assets/gallery/herren/herren_4.jpg":yb,"../assets/gallery/herren/herren_5.jpg":vb,"../assets/gallery/herren/herren_6.jpg":Sb,"../assets/gallery/herren/herren_7.jpg":jb,"../assets/gallery/herren/herren_8.jpg":wb,"../assets/gallery/herren/herren_9.jpg":Eb,"../assets/gallery/herren/herren_club500_1.png":_b,"../assets/gallery/herren/herren_club500_2.png":zb,"../assets/gallery/herren/herren_club500_3.png":Cb,"../assets/gallery/herren/herren_club500_4.png":Ab,"../assets/gallery/herren/herren_club500_5.png":kb,"../assets/gallery/herren/herren_jubel_500club.png":Tb,"../assets/gallery/jfv/IMG-team.png":Rb,"../assets/gallery/jfv/IMG_5349.jpg":Mb,"../assets/gallery/jfv/IMG_5369.jpg":Db,"../assets/gallery/jfv/IMG_5421.jpg":Bb,"../assets/gallery/jfv/IMG_5442.jpg":Ob,"../assets/gallery/jfv/IMG_5952.jpg":$b,"../assets/gallery/jfv/Unbenann324t.png":Nb,"../assets/gallery/jfv/image0.jpeg":Lb,"../assets/gallery/jfv/image11.jpeg":Ub,"../assets/gallery/jfv/image8.jpeg":Hb})).find(([c])=>c.includes(a));return u?u[1]:""},n5=(a,s)=>ct(`${a}/${a}_${s}.jpg`);e5(),t5(),Vb();const a5={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28"},{name:"Stefan K.",amount:800,date:"2024-07-26"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27"}]}},r5={packages:a5},i5=p.div`
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
`,l5=p.div`
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
`,s5=p.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,o5=p.div`
  margin-bottom: 1.5rem;
`,c5=p.div`
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
`,u5=p.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,d5=p.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${a=>Math.min(a.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,f5=p.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,h5=p.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,m5=p.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,g5=p.div`
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
`,p5=p.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,b5=p.div`
  flex: 1;
`,x5=p.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,y5=p.span`
  font-weight: 600;
  color: #374151;
`,v5=p.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,S5=p.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,j5=p.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,w5=p.button`
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
`,E5=p.div`
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
`,_5=()=>{const a=r5;return{kabinen:{current:a.packages.kabinen.current,goal:a.packages.kabinen.goal,donors:a.packages.kabinen.donors},fassade:{current:a.packages.fassade.current,goal:a.packages.fassade.goal,donors:a.packages.fassade.donors},waschkueche:{current:a.packages.waschkueche.current,goal:a.packages.waschkueche.goal,donors:a.packages.waschkueche.donors}}};function z5({data:a=_5(),realTime:s=!1}){const[u,c]=k.useState(a),[d,f]=k.useState(new Date),[y,v]=k.useState(!1),h=async()=>{v(!0);try{const S=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(S.ok){const w=await S.json(),C={kabinen:{current:w.packages.kabinen.current,goal:w.packages.kabinen.goal,donors:w.packages.kabinen.donors},fassade:{current:w.packages.fassade.current,goal:w.packages.fassade.goal,donors:w.packages.fassade.donors},waschkueche:{current:w.packages.waschkueche.current,goal:w.packages.waschkueche.goal,donors:w.packages.waschkueche.donors}};c(C),f(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(S){console.error("❌ Fehler beim Laden der Spendendaten:",S)}finally{v(!1)}};k.useEffect(()=>{if(!s)return;const S=setInterval(()=>{h()},3e4);return()=>clearInterval(S)},[s]);const g=S=>{switch(S){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},x=S=>{switch(S){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return S}};return i.jsxs(i.Fragment,{children:[i.jsx(i5,{children:Object.entries(u).map(([S,w])=>{const C=w.current/w.goal*100;return i.jsxs(l5,{children:[i.jsxs(s5,{children:[g(S)," ",x(S)]}),i.jsxs(o5,{children:[i.jsxs(c5,{children:[i.jsxs("span",{children:[w.current.toLocaleString("de-DE")," €"]}),i.jsxs("span",{children:[w.goal.toLocaleString("de-DE")," €"]})]}),i.jsx(u5,{children:i.jsx(d5,{$progress:C})}),i.jsxs(f5,{children:[Math.round(C),"% erreicht"]})]}),i.jsxs(h5,{children:[i.jsxs(m5,{children:["💝 Spender (",w.donors.length,")"]}),i.jsx(g5,{children:w.donors.length>0?w.donors.slice().reverse().map((j,$)=>i.jsxs(p5,{children:[i.jsxs(b5,{children:[i.jsx(x5,{children:j.anonymous?"Anonymer Spender":j.name}),j.comment&&i.jsxs(v5,{children:['"',j.comment,'"']}),j.date&&i.jsx(S5,{children:j.date})]}),i.jsxs(y5,{children:[j.amount.toLocaleString("de-DE")," €"]})]},$)):i.jsx(j5,{children:"Noch keine Spenden 🤗"})})]})]},S)})}),i.jsxs(w5,{onClick:h,disabled:y,title:"Spendendaten aktualisieren",children:["🔄",y?"Lade...":"Aktualisieren"]}),i.jsxs(E5,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const C5=p.section`
  background: url("${n5("herren",18)}") center/cover;
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
`,A5=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,k5=p.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,T5=p.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,R5=p.main`
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
`,M5=p.section`
  margin-bottom: 4rem;
`,D5=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,B5=p.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,O5=p.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,$5=p.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,N5=p.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,L5=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,U5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,H5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,$u=p.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Nu=p.div`
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
`,G5=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,V5=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,Y5=p.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,q5=p.div`
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
`,K5=p.div`
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
`,Q5=p.div`
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
`,Z5=p.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,X5=p.button`
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
`,vp=p.button`
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
`,Lu=p.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Uu=p.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,F5=p.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,P5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,W5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Hu=p.div`
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
`,Gu=p.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Vu=p.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Yu=p.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,qu=p.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,I5=p.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,J5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,ej=p.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,tj=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,As=p.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,ks=p.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Ts=p.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,nj=p.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,aj=p.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,rj=p.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,ij=p.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,lj=p.a`
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
`,sj=p.div`
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
`,oj=p.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,cj=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,uj=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,dj=p.button`
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
`,fj=p.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Ku=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Qu=p.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Zu=p.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,hj=p.button`
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
`,mj=p.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,Br=Vb();function Xu({images:a,onImageClick:s}){const[u,c]=k.useState(0);return k.useEffect(()=>{if(a.length<=1)return;const d=setInterval(()=>{c(f=>(f+1)%a.length)},4e3);return()=>clearInterval(d)},[a.length]),a.length===0?i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):i.jsxs(G5,{children:[a.map((d,f)=>i.jsx(V5,{src:d.src,alt:d.alt,$isActive:f===u,onClick:()=>s(f)},f)),a.length>1&&i.jsx(Y5,{children:a.map((d,f)=>i.jsx(q5,{$isActive:f===u,onClick:()=>c(f)},f))})]})}function gj({images:a,initialIndex:s,onClose:u}){const[c,d]=k.useState(s),f=k.useCallback(()=>{d(v=>(v+1)%a.length)},[a.length]),y=k.useCallback(()=>{d(v=>(v-1+a.length)%a.length)},[a.length]);return k.useEffect(()=>{const v=h=>{h.key==="Escape"&&u(),h.key==="ArrowRight"&&f(),h.key==="ArrowLeft"&&y()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[u,f,y]),i.jsx(K5,{onClick:u,children:i.jsxs(Q5,{onClick:v=>v.stopPropagation(),children:[i.jsx(X5,{onClick:u,children:"×"}),i.jsx(Z5,{src:a[c].src,alt:a[c].alt}),a.length>1&&i.jsxs(i.Fragment,{children:[i.jsx(vp,{$direction:"prev",onClick:y,children:"‹"}),i.jsx(vp,{$direction:"next",onClick:f,children:"›"})]})]})})}function pj(){const[a,s]=k.useState(!1),[u,c]=k.useState([]),[d,f]=k.useState(0),[y,v]=k.useState(!1),h=(S,w)=>{c(S),f(w),s(!0)},g=S=>{S.preventDefault(),v(!0)},x=()=>{navigator.clipboard.writeText("DE84 6905 0001 0000 0929 99")};return i.jsxs(i.Fragment,{children:[i.jsx(C5,{children:i.jsxs(A5,{children:[i.jsx(k5,{children:"🏟️ Fürstenberg weiterentwickeln"}),i.jsx(T5,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),i.jsxs(R5,{children:[i.jsxs(M5,{children:[i.jsx(D5,{children:"Der Fürstenberg - unser Kultplatz"}),i.jsx(B5,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),i.jsxs(O5,{children:[i.jsx($5,{children:"✨ Charme erhalten, Komfort verbessern"}),i.jsx(N5,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),i.jsxs(L5,{children:[i.jsx(U5,{children:"🔍 Wo wir ansetzen möchten"}),i.jsxs(H5,{children:[i.jsxs($u,{children:[i.jsx(Nu,{children:i.jsx(Xu,{images:Br.kabinen,onImageClick:S=>h(Br.kabinen,S)})}),i.jsx(Lu,{children:"🔧 Kabinen komfortabler gestalten"}),i.jsx(Uu,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),i.jsxs($u,{children:[i.jsx(Nu,{children:i.jsx(Xu,{images:Br.fassade,onImageClick:S=>h(Br.fassade,S)})}),i.jsx(Lu,{children:"🎨 Fassade & Fenster erneuern"}),i.jsx(Uu,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),i.jsxs($u,{children:[i.jsx(Nu,{children:i.jsx(Xu,{images:Br.waschkueche,onImageClick:S=>h(Br.waschkueche,S)})}),i.jsx(Lu,{children:"🧺 Waschküche auf Vordermann bringen"}),i.jsx(Uu,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),i.jsxs(F5,{children:[i.jsx(P5,{children:"✨ Unsere Pläne für den Fürstenberg"}),i.jsxs(W5,{children:[i.jsxs(Hu,{children:[i.jsx(Gu,{children:"🪑"}),i.jsx(Vu,{children:"Kabinen sanieren"}),i.jsx(Yu,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),i.jsx(qu,{children:"~8.000 €"})]}),i.jsxs(Hu,{children:[i.jsx(Gu,{children:"🎨"}),i.jsx(Vu,{children:"Fassade & Fenster erneuern"}),i.jsx(Yu,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),i.jsx(qu,{children:"~15.000 €"})]}),i.jsxs(Hu,{children:[i.jsx(Gu,{children:"🧺"}),i.jsx(Vu,{children:"Waschküche modernisieren"}),i.jsx(Yu,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),i.jsx(qu,{children:"~5.000 €"})]})]})]}),i.jsxs(I5,{children:[i.jsx(J5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),i.jsx(ej,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),i.jsxs(tj,{children:[i.jsxs(As,{children:[i.jsx(ks,{children:"🏆"}),i.jsxs(Ts,{children:[i.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),i.jsxs(As,{children:[i.jsx(ks,{children:"📄"}),i.jsxs(Ts,{children:[i.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),i.jsxs(As,{children:[i.jsx(ks,{children:"📱"}),i.jsxs(Ts,{children:[i.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),i.jsxs(As,{children:[i.jsx(ks,{children:"🎯"}),i.jsxs(Ts,{children:[i.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),i.jsxs(nj,{children:[i.jsx(aj,{children:"🤝 Gemeinsam für den Fürstenberg"}),i.jsx(rj,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),i.jsx(z5,{realTime:!0}),i.jsx(ij,{children:i.jsx(lj,{className:"primary",href:"#",onClick:g,children:"🏦 Per Überweisung spenden"})})]})]}),i.jsx(cl,{}),y&&i.jsx(sj,{onClick:()=>v(!1),children:i.jsxs(oj,{onClick:S=>S.stopPropagation(),children:[i.jsxs(cj,{children:[i.jsx(uj,{children:"Kontoverbindung für Spenden"}),i.jsx(dj,{onClick:()=>v(!1),children:"×"})]}),i.jsxs(fj,{children:[i.jsxs(Ku,{children:[i.jsx(Qu,{children:"Kontoinhaber:"}),i.jsx(Zu,{children:"Sport Club Konstanz-Wollmatingen e.V."})]}),i.jsxs(Ku,{children:[i.jsx(Qu,{children:"IBAN:"}),i.jsx(Zu,{children:"DE84 6905 0001 0000 0929 99"})]}),i.jsxs(Ku,{children:[i.jsx(Qu,{children:"BIC:"}),i.jsx(Zu,{children:"SOLADES1KNZ"})]})]}),i.jsx(hj,{onClick:x,children:"📋 IBAN kopieren"}),i.jsx(mj,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),a&&i.jsx(gj,{images:u,initialIndex:d,onClose:()=>s(!1)})]})}const Fu={text:"Meister 2025/26 und Aufsteiger.",highlight:"Verbandsliga Südbaden",suffix:"Seit Saison 26/27 spielen wir in der"},bj=["Auggen","Bühlertal","Denzlingen","Gundelfingen","Hausen","Hofstetten","Kuppenheim","Lahr","Laufenburg","Linx","Pfullendorf","Rielasingen","Salem","Wolfenweiler","Wyhl"],Qd=[{value:"1,7 Mio.",label:"Social-Media-Views in 12 Monaten",description:"IG 1,32 Mio. + FB 414K, 01.10.2025 - 05.10.2026, 100 % organisch"},{value:"63.300",label:"Personen erreicht auf Instagram",description:"Instagram Reach, 01.10.2025 - 05.10.2026"},{value:"52 %",label:"der Aufrufe von Nicht-Followern",description:"Instagram, letzte 90 Tage (431.973 Aufrufe), Stand 05.10.2026"},{value:"60.000+",label:"Website-Aufrufe / Jahr",description:"23.800 Sessions, Ø 2:19 Min. Verweildauer"}],xj="Logo in allen Spielvor- und Nachberichten · Stadionansage bei jedem Heimspiel · Logo auf der Startseite",wd=[{id:"hauptsponsor",name:"Hauptsponsor",preis:"15.000 €",topFeature:"Trikotbrust",trikot:"Brust (bis 400 cm²)",bande:"9 m",banner:"1× XL (3 × 2 m)",magazin:"1 Seite",saisonkarten:10,vergeben:!0,sponsorName:"Fuchsbau Immobilien",sponsorLogo:"/sponsors/fuchsbau-logo.png",sponsorWebsite:"https://immofuchsbau.com/"},{id:"stadionname",name:"Stadionname-Partner",preis:"12.000 €",topFeature:"Namensrecht Stadion",trikot:"–",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:10,vergeben:!1},{id:"co-sponsor-1",name:"Co-Sponsor I",preis:"9.500 €",topFeature:"Trikot-Rücken",trikot:"Rücken (bis 200 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1},{id:"co-sponsor-2",name:"Co-Sponsor II",preis:"8.000 €",topFeature:"Trikot-Ärmel",trikot:"Ärmel (2 × 100 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1}],Ed=[{name:"Einzelbande",groesse:"3 × 1 m",preis:"600 €",slots:25,kategorie:"bande"},{name:"Doppelbande",groesse:"6 × 1 m",preis:"1.000 €",slots:12,kategorie:"bande"},{name:"Banner Standard",groesse:"ca. 2 × 1,5 m",preis:"1.200 €",slots:10,kategorie:"banner"},{name:"Banner XL",groesse:"ca. 3 × 2 m",preis:"2.000 €",slots:4,kategorie:"banner"}],Sp=[{name:"Ballspende",beschreibung:"Ihr Name als Ballspender: Durchsage vor dem Spiel, bei jedem Tor und zur Halbzeit, dazu eine Instagram-Story.",preis:"150 € / Spiel",hinweis:"5er-Pack: 500 €",link:{to:"/sponsoring/ballspende",label:"Freie Spiele ansehen"}},{name:"Spielpräsentator",beschreibung:"Alle Aufstellungen und Auswechslungen, präsentiert von Ihrer Firma.",preis:"ab 250 € / Spiel"},{name:"Magazin-Inserat",beschreibung:"Unser Heimspielmagazin: 15 Ausgaben pro Saison, je rund 100 gedruckte Exemplare und 1.000 bis 1.500 Online-Zugriffe.",preis:"250 - 1.000 €",hinweis:"1/4 Seite 250 € · 1/2 Seite 500 € · 1 Seite 1.000 €"}],yj=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Pu={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},Yb=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],qb=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Kb=["Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],vj="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",wt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},Sj=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],jj=p.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 1.25rem;
  }
`,wj=p.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  background: #fff;
  border: 1px solid ${E.line};
  border-top: 4px solid ${E.red};
  border-radius: 14px;
  padding: 1.5rem;
  text-decoration: none;
  min-height: 220px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${E.blue};
    border-top-color: ${E.red};
  }
`,Ej=p.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${E.red};
`,_j=p.img`
  align-self: center;
  width: 100%;
  max-width: 320px;
  max-height: 170px;
  object-fit: contain;

  @media (min-width: 900px) {
    max-height: 240px;
  }
`,zj=p.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${E.ink};
`,Cj=p.ul`
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
`,Aj=p.a`
  height: 100%;
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  text-decoration: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${E.blue};
  }
`,kj=p.img`
  max-width: 100%;
  max-height: ${a=>a.$square?"68px":"48px"};
  object-fit: contain;
`,Tj={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/standorte/konstanz"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"http://www.stadtwerke-konstanz.de/karriere/"},{name:"Sparkasse Bodensee",logo:"/sponsors/sparkasse-bodensee.png",website:"https://www.sparkasse-bodensee.de/"},{name:"Fuchs Haustechnik",logo:"/sponsors/fuchs.png",website:"https://www.fuchs-haustechnik.de/"},{name:"Logans Linde",logo:"/sponsors/logans-linde.png",website:"https://logans-wollmatingen.de/",square:!0},{name:"MUMM Magazin",logo:"/sponsors/mumm-magazin.png",website:"https://www.nil-media.de/mumm-magazin/"},{name:"DANLIN Media",logo:"/sponsors/DANLIN.avif",website:"https://www.danlin-media.de/"},{name:"Grenzgänger-Tools",logo:"/sponsors/grenzgaenger-tools.png",website:"https://grenzgaenger-tools.de"},{name:"Karaki Services",logo:"/sponsors/karaki-services.png",website:"https://karaki-services.de/"},{name:"HI-PRO Europe",logo:"/sponsors/hi-pro.webp",website:"https://www.hi-pro.eu/",square:!0},{name:"Enis Sporttreff",logo:"/sponsors/enis-sporttreff.webp",website:"https://enis-sporttreff.de/",square:!0},{name:"ZMVZ Dr. Schütz GmbH",logo:"/sponsors/dr-schuetz.svg",website:"https://www.schuetz-die-zaehne.de/"},{name:"Adel Bruno Grimm",logo:"/sponsors/adelbrunogrimm.png",website:"https://adelbrunogrimm.com/",square:!0}]};function Rj(){const{hauptsponsor:a,partners:s}=Tj;return i.jsxs(jj,{children:[i.jsxs(wj,{href:a.website,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Ej,{children:"Hauptsponsor"}),i.jsx(_j,{src:a.logo,alt:a.name}),i.jsx(zj,{children:a.name})]}),i.jsx(Cj,{"aria-label":"Partner",children:s.map(u=>i.jsx("li",{children:i.jsx(Aj,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:i.jsx(kj,{src:u.logo,alt:u.name,$square:"square"in u&&u.square})})},u.name))})]})}const Wr=cn`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0 1.4rem;
  border-radius: 8px;
  font-family: ${E.fontBody};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  ${({$variant:a="primary"})=>a==="primary"?cn`
          background: ${E.red};
          color: #fff;
          border: 2px solid ${E.red};
          &:hover {
            background: ${E.redDark};
            border-color: ${E.redDark};
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
            color: ${E.navy};
            border: 2px solid ${E.navy};
            &:hover {
              background: ${E.navy};
              color: #fff;
            }
          `}
`,Ze=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Qr=p.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.75rem;
  font-family: ${E.fontBody};
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${a=>a.$onDark?"rgba(255, 255, 255, 0.8)":E.muted};

  &::before {
    content: "";
    width: 40px;
    height: 3px;
    background: ${E.red};
    flex-shrink: 0;
  }
`,Mj=p.h2`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: 0;
  color: ${a=>a.$onDark?"#fff":E.navy};
  margin: 0;
`,Qb=p.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${a=>a.$onDark?"rgba(255, 255, 255, 0.8)":E.muted};
  max-width: 62ch;
  margin: 1rem 0 0;
`,Dj=p.header`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 2.75rem;
  }
`;function Et({eyebrow:a,title:s,lead:u,onDark:c,id:d}){return i.jsxs(Dj,{children:[i.jsx(Qr,{$onDark:c,children:a}),i.jsx(Mj,{id:d,$onDark:c,children:s}),u&&i.jsx(Qb,{$onDark:c,children:u})]})}const Ka=p.a`
  ${Wr}
`,Bj=p.button`
  ${Wr}
`;function Oj({email:a,address:s,interestOptions:u,interest:c}){const[d,f]=k.useState(c??""),[y,v]=k.useState({}),[h,g]=k.useState(!1);k.useEffect(()=>{c&&f(c)},[c]);const x=C=>{C.preventDefault();const j=C.currentTarget,$=new FormData(j);if(String($.get("website")||"").trim()!=="")return;const L=ze=>String($.get(ze)||"").trim(),N=L("firstName"),Z=L("lastName"),T=L("company"),Y=L("phone"),U=L("email"),I=L("message"),H={};N||(H.firstName="Bitte geben Sie Ihren Vornamen an."),Z||(H.lastName="Bitte geben Sie Ihren Nachnamen an."),/^[+\d][\d\s\-/()]{5,}$/.test(Y)||(H.phone="Bitte geben Sie eine Telefonnummer an, z. B. 07531 123456."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(U)||(H.email="Bitte geben Sie eine gültige E-Mail-Adresse an."),$.get("consent")||(H.consent="Bitte stimmen Sie der Datenverarbeitung zu."),v(H);const de=Object.keys(H)[0];if(de){j.querySelector(`[name="${de}"]`)?.focus(),g(!1);return}const se=d||"Sponsoring allgemein",X=`Sponsoring-Anfrage: ${se}${T?` (${T})`:""}`,ce=["Hallo SCKW-Team,","",`ich interessiere mich für: ${se}.`,...I?["",I]:[],"",`Name: ${N} ${Z}`,...T?[`Firma: ${T}`]:[],`Telefon: ${Y}`,`E-Mail: ${U}`,"","Viele Grüße",`${N} ${Z}`].join(`
`);window.location.href=`mailto:${a}?subject=${encodeURIComponent(X)}&body=${encodeURIComponent(ce)}`,g(!0)},S=C=>y[C]?{"aria-invalid":!0,"aria-describedby":`${C}-error`}:{},w=C=>y[C]?i.jsx(Yj,{id:`${C}-error`,children:y[C]}):null;return i.jsx($j,{id:"kontakt","aria-labelledby":"kontakt-title",children:i.jsx(Ze,{children:i.jsxs(Nj,{children:[i.jsxs("div",{children:[i.jsx(Et,{id:"kontakt-title",eyebrow:"Kontakt",title:"Partner werden.",lead:"Schreiben Sie uns kurz, was Sie sich vorstellen. Wir melden uns innerhalb von 24 Stunden und finden mit Ihnen das passende Paket."}),i.jsxs(Lj,{children:[i.jsx(jp,{children:"E-Mail"}),i.jsx(Uj,{href:`mailto:${a}`,children:a}),i.jsx(jp,{children:"Anschrift"}),i.jsx("address",{children:s.map(C=>i.jsxs("span",{children:[C,i.jsx("br",{})]},C))})]})]}),i.jsxs(Hj,{children:[i.jsx(Gj,{children:"Anfrage stellen"}),i.jsxs(Vj,{noValidate:!0,onSubmit:x,children:[i.jsxs(Ii,{children:[i.jsx("label",{htmlFor:"interest",children:"Interesse an"}),i.jsxs("select",{id:"interest",name:"interest",value:d,onChange:C=>f(C.target.value),children:[i.jsx("option",{value:"",children:"Noch offen, bitte beraten"}),u.map(C=>i.jsx("option",{value:C,children:C},C))]})]}),i.jsxs(tl,{children:[i.jsx("label",{htmlFor:"firstName",children:"Vorname"}),i.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0,...S("firstName")}),w("firstName")]}),i.jsxs(tl,{children:[i.jsx("label",{htmlFor:"lastName",children:"Nachname"}),i.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0,...S("lastName")}),w("lastName")]}),i.jsxs(tl,{children:[i.jsxs("label",{htmlFor:"company",children:["Firma ",i.jsx(wp,{children:"(optional)"})]}),i.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),i.jsxs(tl,{children:[i.jsx("label",{htmlFor:"phone",children:"Telefon"}),i.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0,...S("phone")}),w("phone")]}),i.jsxs(Ii,{children:[i.jsx("label",{htmlFor:"email",children:"E-Mail"}),i.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,...S("email")}),w("email")]}),i.jsxs(Ii,{children:[i.jsxs("label",{htmlFor:"message",children:["Nachricht ",i.jsx(wp,{children:"(optional)"})]}),i.jsx("textarea",{id:"message",name:"message",rows:4})]}),i.jsxs(qj,{"aria-hidden":"true",children:[i.jsx("label",{htmlFor:"website",children:"Dieses Feld bitte leer lassen"}),i.jsx("input",{id:"website",name:"website",type:"text",tabIndex:-1,autoComplete:"off"})]}),i.jsxs(Ii,{children:[i.jsxs(Kj,{children:[i.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0,...S("consent")}),i.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß den"," ",i.jsx("a",{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),w("consent")]}),i.jsxs(Ii,{children:[i.jsx(Bj,{type:"submit",children:"Anfrage per E-Mail senden"}),i.jsx(Qj,{children:"Ihr E-Mail-Programm öffnet sich mit der fertigen Anfrage."})]}),i.jsx(Zj,{role:"status","aria-live":"polite",children:h&&i.jsxs(i.Fragment,{children:["Ihre Anfrage liegt jetzt im E-Mail-Programm bereit. Bitte dort auf Senden klicken. Hat sich nichts geöffnet? Dann schreiben Sie uns direkt an"," ",i.jsx("a",{href:`mailto:${a}`,children:a}),"."]})})]})]})]})})})}const $j=p.section`
  background: ${E.paper};
  color-scheme: light;
  padding: 4rem 0;
  text-align: left;
  scroll-margin-top: 72px;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,Nj=p.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: 4rem;
    align-items: start;
  }
`,Lj=p.div`
  display: grid;
  gap: 0.25rem;
  color: ${E.ink};
  font-size: 1.05rem;
  line-height: 1.5;

  address {
    font-style: normal;
  }
`,jp=p.span`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${E.muted};
`,Uj=p.a`
  font-family: ${E.fontDisplay};
  font-size: 1.75rem;
  font-weight: 700;
  color: ${E.blue};
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    text-decoration: underline;
    color: ${E.blue};
  }
`,Hj=p.div`
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Gj=p.h3`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 1.75rem;
  text-transform: uppercase;
  color: ${E.navy};
  margin: 0 0 1.25rem;
`,Vj=p.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  label {
    font-weight: 600;
    font-size: 0.95rem;
    color: ${E.ink};
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
    color: ${E.ink};
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
    outline: 3px solid ${E.blue};
    outline-offset: 1px;
    border-color: ${E.blue};
  }

  [aria-invalid="true"] {
    border-color: ${E.red};
  }
`,tl=p.div`
  display: flex;
  flex-direction: column;
`,Ii=p(tl)`
  grid-column: 1 / -1;

  & > button {
    align-self: flex-start;
  }
`,wp=p.span`
  font-weight: 400;
  color: ${E.muted};
`,Yj=p.span`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${E.redDark};
`,qj=p.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,Kj=p.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0.1rem 0 0;
    flex-shrink: 0;
    accent-color: ${E.blue};
  }

  label {
    font-weight: 400;
    color: ${E.muted};
    margin: 0;
  }

  a {
    color: ${E.blue};
    font-weight: 600;
    text-decoration: underline;
  }
`,Qj=p.span`
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: ${E.muted};
`,Zj=p.p`
  grid-column: 1 / -1;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${E.ink};

  &:empty {
    display: none;
  }

  a {
    color: ${E.blue};
    font-weight: 600;
  }
`,_d=929,zd=1239,Xj=28,Rs=wd.find(a=>a.id==="stadionname"),Ms=Ed.find(a=>a.name==="Doppelbande")??Ed[0],Fj=[{id:"tribuene",tab:"Haupttribüne",image:"/stadion/fuerstenberg-tribuene.jpg",place:"auf dem Dach der Haupttribüne",wide:{x:0,y:.3,w:1,h:.33},zoom:{x:.22,y:.4,w:.56,h:.12},zoomSmall:{x:.34,y:.41,w:.32,h:.08},marker:{x:326,y:547,w:286,h:25},overlay:a=>i.jsxs(i.Fragment,{children:[i.jsx("polygon",{points:"332,553 606,553 606,567 332,567",fill:"#dddbd2",stroke:"#2a2f38",strokeWidth:"0.8"}),i.jsx(Ep,{x:469,y:560.5,maxWidth:258,size:10.5,text:a})]}),product:Rs&&!Rs.vergeben?{title:"Stadionname-Partner",detail:`Ihr Name für das Stadion, ${Rs.preis} pro Saison`,interest:Rs.name,action:"Stadionname anfragen"}:null},{id:"gegengerade",tab:"Gegengerade",image:"/stadion/fuerstenberg-gegengerade.jpg",place:"an einer freien Stelle der Bandenreihe",wide:{x:0,y:.4,w:1,h:.26},zoom:{x:.29,y:.49,w:.58,h:.1},zoomSmall:{x:.44,y:.505,w:.3,h:.07},marker:{x:494,y:656,w:116,h:29},overlay:a=>i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"500.5",y:"663.5",width:"104",height:"17",fill:"rgba(0,0,0,0.25)"}),i.jsx("rect",{x:"500",y:"662",width:"104",height:"17",fill:"#efefea",stroke:"rgba(0,0,0,0.2)",strokeWidth:"0.4"}),i.jsx("rect",{x:"500",y:"677",width:"104",height:"2",fill:E.red}),i.jsx(Ep,{x:552,y:669.5,maxWidth:94,size:11,fill:E.navy,text:a})]}),product:{title:`${Ms.name}, ${Ms.groesse}`,detail:`${Ms.preis} pro Saison, noch ${Ms.slots} Plätze frei`,interest:"Bande oder Banner",action:"Bande anfragen"}}];function Pj({onRequest:a}){const s=Fj.filter(T=>T.product),[u,c]=k.useState(s[0]?.id),[d,f]=k.useState(""),[y,v]=k.useState(!1),[h,g]=k.useState({w:0,h:0}),x=k.useRef(null),S=k.useRef(!1),w=k.useRef(void 0),C=s.find(T=>T.id===u)??s[0],j=(d.trim()||"Ihr Name").toUpperCase();if(k.useLayoutEffect(()=>{const T=x.current;if(!T)return;const Y=()=>g({w:T.clientWidth,h:T.clientHeight});Y();const U=new ResizeObserver(Y);return U.observe(T),()=>U.disconnect()},[]),k.useEffect(()=>{const T=x.current;if(!T)return;if(!("IntersectionObserver"in window)){v(!0);return}const Y=new IntersectionObserver(([U])=>{U.isIntersecting&&!S.current&&(S.current=!0,w.current=window.setTimeout(()=>v(!0),900),Y.disconnect())},{threshold:.5});return Y.observe(T),()=>{Y.disconnect(),window.clearTimeout(w.current)}},[]),!C||!C.product)return null;const $=C.product,L=T=>{T!==C.id&&(window.clearTimeout(w.current),c(T),v(!1),w.current=window.setTimeout(()=>v(!0),700))},N=h.w<640?C.zoomSmall:C.zoom,Z=Wj(y?N:C.wide,h);return i.jsx(Ij,{"aria-labelledby":"stadion-title",id:"stadion",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"stadion-title",eyebrow:"Fürstenberg-Sportplatz",title:"Ihr Name am Fürstenberg.",lead:"Tippen Sie Ihren Firmennamen ein und sehen Sie, wo er bei uns im Stadion stehen würde."}),i.jsxs(Jj,{children:[i.jsxs(ew,{children:[i.jsx("label",{htmlFor:"stadion-name",children:"Ihr Firmenname"}),i.jsx("input",{id:"stadion-name",type:"text",value:d,maxLength:Xj,placeholder:"z. B. Bäckerei Muster",autoComplete:"organization",onChange:T=>{f(T.target.value),y||v(!0)}})]}),s.length>1&&i.jsx(tw,{role:"group","aria-label":"Ansicht wählen",children:s.map(T=>i.jsx(nw,{type:"button","aria-pressed":T.id===C.id,onClick:()=>L(T.id),children:T.tab},T.id))})]}),i.jsxs(aw,{children:[i.jsxs(rw,{ref:x,children:[i.jsxs(iw,{style:{transform:`translate(${Z.tx}px, ${Z.ty}px) scale(${Z.s})`},children:[i.jsx("img",{src:C.image,alt:`${C.tab} am Fürstenberg-Sportplatz, ${C.place} steht ${j}`,width:_d,height:zd}),i.jsxs("svg",{viewBox:`0 0 ${_d} ${zd}`,preserveAspectRatio:"none","aria-hidden":"true",children:[C.overlay(j),i.jsx(sw,{x:C.marker.x,y:C.marker.y,width:C.marker.w,height:C.marker.h,rx:"3",$hidden:y},`${C.id}-${y}`)]})]}),i.jsx(ow,{type:"button",onClick:()=>v(T=>!T),"aria-pressed":y,children:y?"Ganzes Stadion zeigen":"Heranzoomen"})]}),i.jsxs(cw,{children:[i.jsxs("div",{children:[i.jsx("strong",{children:$.title}),i.jsx("span",{children:$.detail})]}),i.jsx(uw,{type:"button",onClick:()=>a($.interest),children:$.action})]})]}),i.jsx(dw,{children:"Beispielhafte Darstellung auf echten Fotos vom Fürstenberg-Sportplatz. Gestaltung und Platzierung stimmen wir mit Ihnen ab."})]})})}function Wj(a,s){const{w:u,h:c}=s;if(!u||!c)return{tx:0,ty:0,s:1};const d=u*zd/_d,f=Math.max(1,Math.min(1/a.w,c/(a.h*d))),y=(a.x+a.w/2)*u,v=(a.y+a.h/2)*d,h=Math.min(0,Math.max(u-f*u,u/2-f*y)),g=Math.min(0,Math.max(c-f*d,c/2-f*v));return{tx:h,ty:g,s:f}}function Ep({x:a,y:s,maxWidth:u,size:c,text:d,fill:f="#1d2330"}){const y=d.length*c*.5,v=y>u?c*u/y:c;return i.jsx("text",{x:a,y:s,textAnchor:"middle",dominantBaseline:"central",fill:f,style:{fontFamily:E.fontDisplay,fontWeight:800,fontSize:v,letterSpacing:"0.02em"},children:d})}const Ij=p.section`
  padding: 4rem 0;
  background: #fff;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,Jj=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,ew=p.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 280px;
  max-width: 440px;

  label {
    font-weight: 700;
    font-size: 0.95rem;
    color: ${E.ink};
    margin-bottom: 0.4rem;
  }

  input {
    height: 52px;
    padding: 0 1rem;
    border: 2px solid ${E.navy};
    border-radius: 8px;
    font: inherit;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${E.ink};
    background: #fff;
    color-scheme: light;
  }

  input::placeholder {
    color: #8a99ad;
    font-weight: 500;
  }

  input:focus-visible {
    outline: 3px solid ${E.blue};
    outline-offset: 2px;
  }
`,tw=p.div`
  display: inline-flex;
  padding: 4px;
  gap: 4px;
  background: ${E.paper};
  border: 1px solid ${E.line};
  border-radius: 10px;
`,nw=p.button`
  min-height: 44px;
  padding: 0 1rem;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: ${E.muted};
  font-family: ${E.fontBody};
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${E.navy};
    border-color: transparent;
  }

  &[aria-pressed="true"] {
    background: ${E.navy};
    color: #fff;
  }
`,aw=p.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${E.navyDeep};
  border: 1px solid ${E.line};
`,rw=p.div`
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
`,iw=p.div`
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
`,lw=Nd`
  0%, 100% { stroke-opacity: 1; }
  50% { stroke-opacity: 0.25; }
`,sw=p.rect`
  fill: none;
  stroke: #fff;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
  transition: opacity 0.4s ease;
  opacity: ${a=>a.$hidden?0:1};

  ${a=>!a.$hidden&&cn`
      animation: ${lw} 1.1s ease-in-out 3;
    `}
`,ow=p.button`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  min-height: 44px;
  padding: 0 1rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  background: rgba(10, 24, 48, 0.78);
  color: #fff;
  font-family: ${E.fontBody};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  backdrop-filter: blur(6px);

  &:hover {
    background: ${E.navy};
    border-color: #fff;
  }

  &:focus-visible {
    outline-color: #9cc8ff;
  }
`,cw=p.figcaption`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border-top: 1px solid ${E.line};

  strong {
    display: block;
    font-family: ${E.fontDisplay};
    font-weight: 800;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: ${E.navy};
  }

  span {
    color: ${E.muted};
  }
`,uw=p.button`
  ${Wr}
  min-height: 44px;
`,dw=p.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${E.muted};
`,Zb=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Wu=a=>a.replace(/ €/g," €"),Iu=a=>{document.getElementById(a)?.scrollIntoView({behavior:Zb()?"auto":"smooth",block:"start"})},fw=p.div`
  color-scheme: light;
  font-family: ${E.fontBody};
  color: ${E.ink};
  text-align: left;
  background: #fff;

  section[id] {
    scroll-margin-top: 72px;
  }
`,Or=p.section`
  padding: 4rem 0;
  background: ${({$tone:a})=>a==="paper"?E.paper:a==="navy"?E.navy:"#fff"};
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,hw=p.section`
  position: relative;
  overflow: hidden;
  background: ${E.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 860px);
`,mw=p.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center 30% / cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 1.2s ease;
`,gw=p.div`
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
`,pw=p(Ze)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
`,bw=p.h1`
  font-family: ${E.fontDisplay};
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
`,xw=p.p`
  max-width: 34rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);

  strong {
    color: #fff;
    font-weight: 700;
  }
`,yw=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,vw=p.ul`
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
`,Sw=p.strong`
  display: block;
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 2.75rem);
  line-height: 1;
  color: #fff;
  font-variant-numeric: tabular-nums;
`,jw=p.span`
  display: block;
  margin-top: 0.35rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
`,ww=p.div`
  background: ${E.red};
  color: #fff;
  padding: 0.9rem 0;
  font-size: 1.05rem;
  line-height: 1.4;

  strong {
    font-family: ${E.fontDisplay};
    font-weight: 800;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
`,Ew=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 12px;
  font-size: 0.95rem;
  color: ${E.ink};

  strong {
    font-weight: 700;
  }
`,ha=p.li`
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  line-height: 1.45;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${E.blue};
  }
`,_w=p.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
`,zw=p.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,Cw=p.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`,Aw=p.h3`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 1;
  text-transform: uppercase;
  color: ${E.navy};
  margin: 0;
`,kw=p.p`
  margin: 0.4rem 0 0;
  font-weight: 600;
  color: ${E.red};
`,Tw=p.p`
  margin: 1.25rem 0;
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 1;
  color: ${E.navy};
  font-variant-numeric: tabular-nums;

  span {
    font-family: ${E.fontBody};
    font-size: 1rem;
    font-weight: 500;
    color: ${E.muted};
    margin-left: 0.15rem;
  }
`,Rw=p.ul`
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 1.25rem 0 0;
  border-top: 1px solid ${E.line};
  display: grid;
  gap: 0.55rem;
  flex: 1;
`,Mw=p.button`
  ${Wr}
  width: 100%;
  margin-top: auto;
`,Dw=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  border: 1px dashed #b9c6d8;
  border-radius: 12px;
  color: ${E.muted};

  span {
    font-size: 0.95rem;
  }
`,Bw=p.strong`
  display: block;
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${E.navy};
`,Ow=p.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${E.ink};

  img {
    width: 88px;
    height: 52px;
    object-fit: contain;
    background: #fff;
    border: 1px solid ${E.line};
    border-radius: 8px;
    padding: 0.3rem;
  }

  strong {
    font-weight: 700;
  }
`,Ju=p.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${E.muted};
`,_p=p.div`
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 14px;
  overflow: hidden;
`,zp=p.div`
  padding: 1.5rem 1.5rem 1rem;

  h3 {
    font-family: ${E.fontDisplay};
    font-weight: 800;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: ${E.navy};
    margin: 0;
  }

  p {
    margin: 0.35rem 0 0;
    color: ${E.muted};
  }
`,Cp=p.div`
  overflow-x: auto;

  &:focus-visible {
    outline-offset: -3px;
  }
`,Ap=p.table`
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
    color: ${E.muted};
    background: ${E.paper};
    border-top: 1px solid ${E.line};
    border-bottom: 1px solid ${E.line};
  }

  td {
    border-bottom: 1px solid ${E.line};
    color: ${E.ink};
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
`,$w=p.div`
  display: grid;
  gap: 1.25rem;
`,Nw=p.div`
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
`,Lw=p.img`
  display: block;
  width: 100%;
  height: auto;
  background: #0b0b0d;
`,Uw=p.div`
  grid-area: opt;
  padding: 1.25rem 1.5rem 1.5rem;

  h4 {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    color: ${E.ink};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;
    color: ${E.ink};
  }
`,Hw=p.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,Gw=p.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 14px;
  padding: 1.5rem;

  h3 {
    font-family: ${E.fontDisplay};
    font-weight: 800;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${E.navy};
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 1.5;
    color: ${E.ink};
  }
`,Vw=p.p`
  && {
    margin: 0.5rem 0 1rem;
    font-family: ${E.fontDisplay};
    font-weight: 800;
    font-size: 1.9rem;
    color: ${E.red};
    font-variant-numeric: tabular-nums;
  }
`,Yw=p.p`
  && {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${E.line};
    font-weight: 600;
    color: ${E.muted};
  }
`,qw=p.div`
  position: absolute;
  inset: auto -2rem -1.5rem auto;
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-style: italic;
  font-size: clamp(6rem, 18vw, 15rem);
  line-height: 0.8;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.04);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`,Kw=p.div`
  position: relative;
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 4rem;
    align-items: center;
  }
`,Qw=p.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Zw=p.h3`
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
`,Xw=p.ul`
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
    font-family: ${E.fontDisplay};
    font-weight: 700;
    font-size: clamp(1.1rem, 4.4vw, 1.35rem);
    line-height: 1.2;
    text-transform: uppercase;
    color: #fff;
    padding-left: 0.75rem;
    border-left: 3px solid ${E.red};
  }
`,Fw=p.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`,Pw=p.p`
  margin: 0 0 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 60ch;
`,Ww=p.div`
  border-left: 3px solid ${E.red};
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
`,Iw=p.div`
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 1.5rem;
  border: 1px solid ${E.line};
  border-top: 4px solid ${E.blue};
  border-radius: 14px;
  background: #fff;

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 3rem;
    padding: 2.5rem;
  }

  h2 {
    font-family: ${E.fontDisplay};
    font-weight: 800;
    font-size: clamp(2rem, 5vw, 2.75rem);
    line-height: 1;
    text-transform: uppercase;
    color: ${E.navy};
    margin: 0 0 0.75rem;
  }

  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${E.muted};
    max-width: 60ch;
  }
`,Jw=p.span`
  text-transform: none;
`,kp=p(ya)`
  ${Wr}
`;function ma(){return i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3 8.5l3 3 7-7",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}function e3(){const[a,s]=k.useState(Qd),[u,c]=k.useState();k.useEffect(()=>{fetch("/social-stats.json").then(j=>j.ok?j.json():Promise.reject()).then(j=>{j?.kpis?.length&&s(j.kpis)}).catch(()=>{})},[]);const d=[ct("herren/herren_6"),ct("herren/herren_16"),ct("herren/herren_5"),ct("herren/herren_14")].filter(Boolean),[f,y]=k.useState(0);k.useEffect(()=>{if(d.length<=1||Zb())return;const j=setInterval(()=>{y($=>($+1)%d.length)},7e3);return()=>clearInterval(j)},[d.length]);const v=j=>{c(j),Iu("kontakt")},h=wd.filter(j=>!j.vergeben),g=wd.filter(j=>j.vergeben),x=j=>Number(j.replace(/\D/g,"")),S=[...h].sort((j,$)=>x(j.preis)-x($.preis))[0]?.preis,w=[...h.map(j=>j.name),"Bande oder Banner","Buswerbung",...Sp.map(j=>j.name)],C=xj.split(" · ");return i.jsxs(fw,{children:[i.jsxs(hw,{"aria-labelledby":"hero-title","data-dark":!0,children:[d.map((j,$)=>i.jsx(mw,{$bg:j,$active:$===f,"aria-hidden":"true"},$)),i.jsx(gw,{}),i.jsxs(pw,{children:[i.jsx(Qr,{$onDark:!0,children:"Partner werden beim SC Konstanz-Wollmatingen"}),i.jsxs(bw,{id:"hero-title",children:[i.jsx("span",{children:"Sponsoring,"})," ",i.jsx("span",{children:"das messbar wirkt."})]}),i.jsxs(xw,{children:["Wir sind ein Sportverein aus Wollmatingen, seit 1930. Und wir haben Reichweite: ",i.jsx("strong",{children:"1,7 Millionen Views"})," auf Instagram und Facebook in den letzten zwölf Monaten, ohne einen Euro Werbebudget."]}),i.jsxs(yw,{children:[i.jsx(Ka,{href:"#kontakt",onClick:j=>{j.preventDefault(),Iu("kontakt")},children:"Anfrage stellen"}),i.jsx(Ka,{href:"#angebot",$variant:"outlineLight",onClick:j=>{j.preventDefault(),Iu("angebot")},children:"Angebote ansehen"})]}),i.jsx(vw,{"aria-label":"Reichweite in Zahlen",children:a.map(j=>i.jsxs("li",{children:[i.jsx(Sw,{children:j.value}),i.jsx(jw,{children:j.label})]},j.label))})]})]}),i.jsx(ww,{"data-dark":!0,children:i.jsxs(Ze,{children:[i.jsx("strong",{children:Fu.text}),Fu.suffix," ",Fu.highlight,"."]})}),i.jsx(Or,{"aria-labelledby":"partner-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"partner-title",eyebrow:"Saison 26/27",title:"Unsere Partner.",lead:"Ohne sie ginge es nicht. Danke an alle Unternehmen, die den SCKW schon unterstützen."}),i.jsx(Rj,{})]})}),i.jsx(Or,{$tone:"paper",id:"angebot","aria-labelledby":"angebot-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"angebot-title",eyebrow:`Ab ${S} pro Saison`,title:"Exklusiv-Partnerschaften.",lead:"Trikot oder Stadionname, dazu Bande, Banner, Magazin und Saisonkarten. Jedes Paket gibt es nur einmal."}),i.jsxs(Ew,{children:[i.jsx("strong",{children:"In jedem Paket enthalten:"}),i.jsx(_w,{children:C.map(j=>i.jsxs(ha,{children:[i.jsx(ma,{}),j]},j))})]}),g.map(j=>i.jsxs(Dw,{children:[i.jsxs("div",{children:[i.jsx(Bw,{children:j.name}),i.jsxs("span",{children:[j.topFeature,", vergeben an"]})]}),i.jsxs(Ow,{as:j.sponsorWebsite?"a":"div",href:j.sponsorWebsite,target:j.sponsorWebsite?"_blank":void 0,rel:j.sponsorWebsite?"noopener noreferrer":void 0,children:[j.sponsorLogo&&i.jsx("img",{src:j.sponsorLogo,alt:""}),i.jsx("strong",{children:j.sponsorName})]})]},j.id)),i.jsx(zw,{children:h.map(j=>i.jsxs(Cw,{"aria-labelledby":`paket-${j.id}`,children:[i.jsx(Aw,{id:`paket-${j.id}`,children:j.name}),i.jsx(kw,{children:j.topFeature}),i.jsxs(Tw,{children:[j.preis," ",i.jsx("span",{children:"pro Saison"})]}),i.jsxs(Rw,{children:[j.id==="stadionname"&&i.jsxs(ha,{children:[i.jsx(ma,{}),"Das Stadion trägt Ihren Namen"]}),j.trikot!=="–"&&i.jsxs(ha,{children:[i.jsx(ma,{}),"Trikot: ",j.trikot]}),i.jsxs(ha,{children:[i.jsx(ma,{}),"Bande: ",j.bande]}),i.jsxs(ha,{children:[i.jsx(ma,{}),"Banner: ",j.banner]}),i.jsxs(ha,{children:[i.jsx(ma,{}),"Stadionmagazin: ",j.magazin]}),i.jsxs(ha,{children:[i.jsx(ma,{}),j.saisonkarten," Saisonkarten"]})]}),i.jsxs(Mw,{type:"button",onClick:()=>v(j.name),children:[j.name," anfragen"]})]},j.id))}),i.jsx(Ju,{children:"Alle Preise zzgl. MwSt."})]})}),i.jsx(Pj,{onRequest:v}),i.jsx(Or,{$tone:"paper",id:"werbeflaechen","aria-labelledby":"werbeflaechen-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"werbeflaechen-title",eyebrow:"Einzeln buchbar",title:"Werbeflächen.",lead:"Banden, Banner und Buswerbung zu festen Preisen. Für Betriebe, die in der Region gesehen werden wollen."}),i.jsxs($w,{children:[i.jsxs(_p,{children:[i.jsxs(zp,{children:[i.jsx("h3",{children:"Banden & Banner"}),i.jsx("p",{children:"Am Spielfeldrand, bei jedem Heimspiel sichtbar."})]}),i.jsx(Cp,{tabIndex:0,role:"region","aria-label":"Preise Banden und Banner",children:i.jsxs(Ap,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Fläche"}),i.jsx("th",{scope:"col",children:"Größe"}),i.jsx("th",{scope:"col",className:"num",children:"Plätze"}),i.jsx("th",{scope:"col",className:"num",children:"Preis pro Saison"})]})}),i.jsx("tbody",{children:Ed.map(j=>i.jsxs("tr",{children:[i.jsx("td",{children:j.name}),i.jsx("td",{children:j.groesse}),i.jsx("td",{className:"num",children:j.slots}),i.jsx("td",{className:"num",children:j.preis})]},j.name))})]})})]}),i.jsxs(_p,{children:[i.jsxs(zp,{children:[i.jsx("h3",{children:"Buswerbung"}),i.jsx("p",{children:"Jede Woche unterwegs in Konstanz, im Landkreis und bei Auswärtsspielen."})]}),i.jsxs(Nw,{children:[i.jsx(Lw,{src:"/vereinsbus.png",alt:"Vereinsbus des SCKW mit eingezeichneten Werbeflächen"}),i.jsxs(Uw,{children:[i.jsx("h4",{children:"Optionen"}),i.jsx("ul",{children:Kb.map(j=>i.jsxs(ha,{children:[i.jsx(ma,{}),j]},j))}),i.jsx(Ju,{children:vj})]}),i.jsx(Cp,{tabIndex:0,role:"region","aria-label":"Preise Buswerbung",children:i.jsxs(Ap,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Fläche"}),i.jsx("th",{scope:"col",children:"Größe"}),i.jsx("th",{scope:"col",className:"num",children:"Preis pro Jahr"})]})}),i.jsx("tbody",{children:[...Yb,...qb].map(j=>i.jsxs("tr",{children:[i.jsx("td",{children:j.position}),i.jsx("td",{children:j.groesse}),i.jsx("td",{className:"num",children:j.preis})]},j.position))})]})})]})]})]}),i.jsx(Ju,{children:"Alle Preise zzgl. MwSt."})]})}),i.jsx(Or,{id:"spieltag","aria-labelledby":"spieltag-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"spieltag-title",eyebrow:"Ab 150 € netto",title:"Spieltag & Medien.",lead:"Der einfachste Einstieg ins Sponsoring, gut zum Ausprobieren."}),i.jsx(Hw,{children:Sp.map(j=>i.jsxs(Gw,{children:[i.jsx("h3",{children:j.name}),i.jsx(Vw,{children:Wu(j.preis)}),i.jsx("p",{children:Wu(j.beschreibung)}),j.hinweis&&i.jsx(Yw,{children:Wu(j.hinweis)}),j.link&&i.jsx(kp,{to:j.link.to,$variant:"outlineDark",style:{marginTop:"1rem"},children:j.link.label})]},j.name))})]})}),i.jsxs(Or,{$tone:"navy","aria-labelledby":"reichweite-title","data-dark":!0,children:[i.jsx(qw,{"aria-hidden":"true",children:"Verbandsliga"}),i.jsx(Ze,{children:i.jsxs(Kw,{children:[i.jsxs("div",{children:[i.jsx(Et,{id:"reichweite-title",eyebrow:"Verbandsliga Südbaden",title:"Ihre Reichweite wächst mit.",onDark:!0}),i.jsx(Pw,{children:"Als Meister und Aufsteiger spielen wir seit dieser Saison Verbandsliga, gegen 15 Vereine von Kuppenheim bei Baden-Baden bis an den Bodensee. Trikot und Vereinsbus sind bei den Auswärtsspielen dabei."}),i.jsxs(Ww,{children:[i.jsx("strong",{children:"Was das für Sie bedeutet"}),"Mehr Kilometer für den Vereinsbus, eine höhere Liga für Ihre Bande. Ihr Paket kostet dadurch nicht mehr."]})]}),i.jsxs(Qw,{children:[i.jsx(Zw,{children:"Auswärts unterwegs in"}),i.jsx(Xw,{children:bj.map(j=>i.jsx("li",{children:j},j))}),i.jsx(Fw,{children:"Heimspiele in Konstanz. Quelle: SBFV, Staffel 2026/27."})]})]})})]}),i.jsx(Or,{"aria-labelledby":"club500-title",children:i.jsx(Ze,{children:i.jsxs(Iw,{children:[i.jsxs("div",{children:[i.jsx(Qr,{children:"100 Felder, 500 € pro Feld und Saison"}),i.jsxs("h2",{id:"club500-title",children:["Der ",i.jsx(Jw,{children:"500er"})," Club."]}),i.jsx("p",{children:"Für Privatpersonen und Firmen: Mit einem Feld im 500er Club unterstützen Sie direkt unsere erste Mannschaft in der Verbandsliga. Sie erhalten eine Spendenbescheinigung und auf Wunsch einen Platz auf der Spendentafel."})]}),i.jsx(kp,{to:"/sponsoring/club-500",$variant:"outlineDark",children:"Zum 500er Club"})]})})}),i.jsx(Oj,{email:wt.email,address:wt.vollAdresse.split(`
`),interestOptions:w,interest:u}),i.jsx(cl,{})]})}function t3(){return N0(),!0}const n3=j0`
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
`,Tp=p.div`
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
`,Rp=p.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,Mp=p.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ds=p.button`
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
`,a3=p.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print {
    display: none !important;
  }
`,r3=p.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print {
    padding: 0;
    background: none;
  }
`,At=p.section`
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
`,en=p.div`
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
`,tn=p.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,nn=p.div`
  text-align: center;
  margin-bottom: 6mm;
`,an=p.img`
  height: 20mm;
`,rn=p.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Ct=p.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,bt=p.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,$e=p.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,ee=p.li`
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
`,_t=p.ul`
  padding: 0;
  margin: 3mm 0;
`,Qa=p.div`
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
`,pt=p.div`
  margin-bottom: 4mm;
`,nt=p.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Ht=p.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${a=>(a.$lines||1)*8}mm;
  background: #fafafa;
`,i3=p.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Zd=p.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Gn=p.div`
  text-align: ${a=>a.$right?"right":a.$center?"center":"left"};
`;function va(){return i.jsxs(i3,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",i.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function hn(){return i.jsxs(Zd,{children:[i.jsxs(Gn,{children:[i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),i.jsx("br",{}),"Schleyerweg 5",i.jsx("br",{}),"78467 Konstanz"]}),i.jsxs(Gn,{$center:!0,children:[wt.email,i.jsx("br",{}),"partner.sckw.de"]}),i.jsxs(Gn,{$right:!0,children:["Sparkasse Bodensee",i.jsx("br",{}),"IBAN: DE84 6905 0001 0000 0929 99",i.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const Dp=ct("herren/herren_0"),ed=ct("herren/herren_6"),Bp=ct("herren/herren_1"),l3=ct("herren/herren_14"),Fs=p.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function s3(){return i.jsx(At,{children:i.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),i.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),i.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),i.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",i.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Qd.slice(0,2).map(a=>i.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[i.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:a.value}),i.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:a.label})]},a.label))}),i.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function o3(){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"WARUM SCKW?"}),i.jsx(Ct,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Qd.map(a=>i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[i.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:a.value}),i.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:a.label})]},a.label))}),i.jsx(bt,{children:"Was Sie bei uns erreichen"}),i.jsxs(_t,{children:[i.jsx(ee,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),i.jsx(ee,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),i.jsx(ee,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),i.jsx(ee,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),i.jsx(bt,{children:"Der Verein auf einen Blick"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsxs($e,{children:[i.jsx("strong",{children:"Gegründet:"})," 1912"]}),i.jsxs($e,{children:[i.jsx("strong",{children:"Mitglieder:"})," 500+"]}),i.jsxs($e,{children:[i.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),i.jsxs("div",{children:[i.jsxs($e,{children:[i.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),i.jsxs($e,{children:[i.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),i.jsxs($e,{children:[i.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),Dp&&i.jsx(Fs,{src:Dp,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),i.jsx(hn,{})]})]})}function c3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"HAUPTSPONSOR"}),i.jsx(Ct,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(_t,{children:[i.jsx(ee,{children:"Trikotwerbung auf der Brust"}),i.jsx(ee,{children:"Business Club Mitgliedschaft"}),i.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),i.jsx(ee,{children:"1/1 seitiges Inserat im SC Magazin"}),i.jsx(ee,{children:"10 Saisonkarten"}),i.jsx(ee,{children:"Werbeauftritte nach Absprache"}),i.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function u3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"CO-SPONSOR"}),i.jsx(Ct,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(_t,{children:[i.jsx(ee,{children:"Werbung auf den Trainingsanzügen"}),i.jsx(ee,{children:"Business Club Mitgliedschaft"}),i.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),i.jsx(ee,{children:"1/2 seitiges Inserat im SC Magazin"}),i.jsx(ee,{children:"5 Saisonkarten"}),i.jsx(ee,{children:"Werbeauftritte nach Absprache"}),i.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function d3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"SILBER-PARTNER"}),i.jsx(Ct,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),i.jsxs(_t,{children:[i.jsx(ee,{children:"1 Bande (5×2 m) am Gelände"}),i.jsx(ee,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),i.jsx(ee,{children:"Werbeplane am Gelände"}),i.jsx(ee,{children:"Vereinsplakate + Eventsichtbarkeit"}),i.jsx(ee,{children:"Website: Logo auf Startseite"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),i.jsx(bt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),i.jsx(Ct,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),i.jsxs(_t,{children:[i.jsx(ee,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),i.jsx(ee,{children:"Website: Logo auf der Startseite"}),i.jsx(ee,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),i.jsx(ee,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function f3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"BANDENWERBUNG"}),i.jsx(Ct,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),i.jsx(_t,{children:i.jsx(ee,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),i.jsxs($e,{children:[i.jsx("strong",{children:"Platzierung:"}),i.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",i.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",i.jsx("br",{}),i.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 800€ pro Saison"})]}),Bp&&i.jsx(Fs,{src:Bp,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function h3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:'WERBUNG IM „HEIMSPIEL"'}),i.jsx(Ct,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),i.jsxs(_t,{children:[i.jsx(ee,{children:"15 Ausgaben pro Saison"}),i.jsx(ee,{children:"ca. 100 Exemplare pro Heimspiel"}),i.jsx(ee,{children:"Digitale Version (Social Media & Webseite)"}),i.jsx(ee,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),i.jsx(ee,{children:"DIN A4 Stadionmagazin"}),i.jsx(ee,{children:"wird ausgelegt in diversen Arztpraxen"})]}),a&&i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>i.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),i.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),i.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),a&&i.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[i.jsx("strong",{children:"Maße"}),i.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",i.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",i.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function m3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"SPIELTAG-SPONSORING"}),i.jsx(Ct,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),i.jsx(bt,{children:"Ballspende"}),i.jsx($e,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),i.jsxs(_t,{children:[i.jsx(ee,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),i.jsx(ee,{children:"Namensnennung in der Halbzeitpause"}),i.jsx(ee,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),i.jsx(ee,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack:"," ",i.jsx("strong",{children:"500€"})," (statt 750€)"]}),i.jsx(bt,{children:"Spielpräsentator"}),i.jsx($e,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),i.jsxs(_t,{children:[i.jsx(ee,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),i.jsx(ee,{children:"Namentliche Erwähnung im SC Magazin"}),i.jsx(ee,{children:"Social Media Erwähnung am Spieltag"})]}),i.jsxs(Qa,{$hidden:!a,children:["Beitrag: ",i.jsx("strong",{children:"ab 250€ pro Spiel"})]}),ed&&i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[i.jsx(Fs,{src:ed,alt:"Action",style:{height:"48mm"}}),i.jsx(Fs,{src:l3||ed,alt:"Jubel",style:{height:"48mm"}})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function g3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"BUSWERBUNG"}),i.jsx(Ct,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),i.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),a&&i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),i.jsx("tbody",{children:[...Yb,...qb].map((s,u)=>i.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),a&&i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),i.jsx(bt,{children:"Zusatzoptionen"}),i.jsx(_t,{children:Kb.map((s,u)=>i.jsx(ee,{children:s},u))}),i.jsx(va,{}),i.jsx(hn,{})]})]})}function p3({showPrices:a}){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{children:"PRÄMIEN-MODELL"}),i.jsx(Ct,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a&&i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),i.jsxs("tbody",{children:[yj.map((s,u)=>i.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),i.jsxs("tr",{style:{background:"#f0f9ff"},children:[i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Pu.starter}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Pu.premium}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Pu.kombi})]})]})]}),i.jsx(bt,{children:"So funktioniert's"}),i.jsxs(_t,{children:[i.jsx(ee,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),i.jsx(ee,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),i.jsx(ee,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),i.jsx(ee,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),i.jsx(bt,{children:"Inkludierte Leistungen"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx($e,{children:i.jsx("strong",{children:"Starter:"})}),i.jsxs(_t,{children:[i.jsx(ee,{children:"Stadionansage bei Erfolg"}),i.jsx(ee,{children:"Logo auf Website"})]})]}),i.jsxs("div",{children:[i.jsx($e,{children:i.jsx("strong",{children:"Premium:"})}),i.jsxs(_t,{children:[i.jsx(ee,{children:"+ Social Media Post bei Erfolg"}),i.jsx(ee,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),i.jsx(va,{}),i.jsx(hn,{})]})]})}const Op=ct("herren/herren_jubel_500club");function b3(){return i.jsxs(At,{children:[Op&&i.jsx("img",{src:Op,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),i.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[i.jsx(Ct,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),i.jsxs($e,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[i.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den CLUB 500."})," ","Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),i.jsx(bt,{children:"Ihre Vorteile"}),i.jsxs(_t,{children:[i.jsxs(ee,{children:["Offizielle ",i.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),i.jsxs(ee,{children:["Veröffentlichung Ihres ",i.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),i.jsx(ee,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),i.jsx(bt,{children:"Zahlungsoptionen"}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),i.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(a=>i.jsxs("tr",{children:[i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:a.label}),i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:a.betrag})]},a.label))})]}),i.jsx($e,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),i.jsx(bt,{children:"Spendenkonto"}),i.jsxs($e,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[i.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),i.jsx("br",{}),"IBAN: ",i.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",i.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[i.jsxs($e,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",i.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),i.jsxs($e,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",i.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),i.jsx(hn,{})]})]})}function x3(){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG CLUB 500"}),i.jsxs(Ct,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an"," ",wt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(pt,{children:[i.jsx(nt,{children:"Vorname:"}),i.jsx(Ht,{$lines:1})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"Nachname:"}),i.jsx(Ht,{$lines:1})]})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"Firma (optional):"}),i.jsx(Ht,{$lines:1})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"Straße, Hausnummer:"}),i.jsx(Ht,{$lines:1})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[i.jsxs(pt,{children:[i.jsx(nt,{children:"PLZ:"}),i.jsx(Ht,{$lines:1})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"Ort:"}),i.jsx(Ht,{$lines:1})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[i.jsxs(pt,{children:[i.jsx(nt,{children:"Geb.-Datum:"}),i.jsx(Ht,{$lines:1})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"Telefon:"}),i.jsx(Ht,{$lines:1})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"E-Mail:"}),i.jsx(Ht,{$lines:1})]})]}),i.jsx(bt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),i.jsx($e,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:i.jsxs(nt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),i.jsx($e,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),i.jsx(bt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),i.jsx($e,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im CLUB 500 bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:i.jsxs(nt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),i.jsxs(pt,{style:{marginTop:"2mm"},children:[i.jsx(nt,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),i.jsx(Ht,{$lines:1})]}),i.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. CLUB 500. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[i.jsxs(pt,{children:[i.jsx(nt,{children:"Konstanz, den _______________"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),i.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"Unterschrift:"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),i.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[i.jsx("strong",{children:"Spendenkonto:"})," Sport Club Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",i.jsx("br",{}),i.jsx("strong",{children:"Kontakt:"})," ",wt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs(Zd,{style:{marginTop:"auto"},children:[i.jsx(Gn,{children:i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),i.jsx(Gn,{$center:!0,children:"CLUB 500"}),i.jsx(Gn,{$right:!0,children:"partner.sckw.de"})]})]})]})}function y3(){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),i.jsx(Ct,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(a=>i.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[i.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:a.n}),i.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:a.t}),i.jsx($e,{style:{margin:0,fontSize:"9pt"},children:a.d})]},a.n))}),i.jsx(bt,{children:"Kontakt"}),i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:wt.email})]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),i.jsxs("div",{style:{gridColumn:"1 / -1"},children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),i.jsxs("div",{style:{fontSize:"11pt"},children:[wt.adresse.name," · ",wt.adresse.strasse," ·"," ",wt.adresse.plz," ",wt.adresse.ort]})]})]}),i.jsx(bt,{children:"Gesprächsleitfaden"}),i.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[i.jsx($e,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "1,4 Mio. Social-Media-Views in dieser Saison – 100 % organisch, aktuell 394.000 Views/Monat."'}),i.jsx($e,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),i.jsx($e,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),i.jsx($e,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),i.jsx(hn,{})]})]})}function v3(){return i.jsxs(At,{children:[i.jsx(en,{}),i.jsxs(tn,{children:[i.jsx(nn,{children:i.jsx(an,{src:"/logo.svg"})}),i.jsx(rn,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),i.jsxs(Ct,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an"," ",wt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(pt,{children:[i.jsx(nt,{children:"Datum:"}),i.jsx(Ht,{$lines:1})]}),i.jsxs(pt,{children:[i.jsx(nt,{children:"Gesprächsführer (Helfer):"}),i.jsx(Ht,{$lines:1})]})]}),Sj.map((a,s)=>i.jsxs(pt,{children:[i.jsxs(nt,{children:[a.label,":"]}),i.jsx(Ht,{$lines:a.lines})]},s)),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(a=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:i.jsxs(nt,{style:{marginBottom:0},children:["☐ ",a]})},a))}),i.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:i.jsxs($e,{style:{margin:0,fontSize:"8pt"},children:[i.jsx("strong",{children:"Schnellreferenz:"})," ",wt.email," · partner.sckw.de · ",wt.vollAdresse.replace(/\n/g," · ")]})}),i.jsxs(Zd,{style:{marginTop:"auto"},children:[i.jsx(Gn,{children:i.jsx("strong",{children:"Internes Dokument"})}),i.jsx(Gn,{$center:!0}),i.jsx(Gn,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Ln=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>i.jsx(s3,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>i.jsx(o3,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:a=>i.jsx(c3,{showPrices:a})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:a=>i.jsx(u3,{showPrices:a})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:a=>i.jsx(d3,{showPrices:a})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:a=>i.jsx(f3,{showPrices:a})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:a=>i.jsx(h3,{showPrices:a})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:a=>i.jsx(m3,{showPrices:a})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:a=>i.jsx(g3,{showPrices:a})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:a=>i.jsx(p3,{showPrices:a})},{id:"club500",label:"CLUB 500",group:"community",render:()=>i.jsx(b3,{})},{id:"club500form",label:"CLUB 500 Anmeldung",group:"community",render:()=>i.jsx(x3,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>i.jsx(y3,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>i.jsx(v3,{})}],S3=p.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print {
    display: none !important;
  }
`,j3=p.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,w3=p.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,E3=p.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,_3=p.button`
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
`,td=p.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,nd=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,ad=p.label`
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
`,z3=p.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Ha=p.button`
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
`,C3=p.button`
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
`,A3=p.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function k3(){const a=t3(),[s]=N0(),u=s.get("preset"),c=s.get("view"),d=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Ln.filter(H=>H.group==="broschüre").map(H=>H.id)),[f,y]=k.useState(!0),[v,h]=k.useState(d),[g,x]=k.useState(c==="preview"?"preview":"dashboard");if(!a)return i.jsx(Hs,{to:"/",replace:!0});const S=H=>{h(de=>{const se=new Set(de);return se.has(H)?se.delete(H):se.add(H),se})},w=()=>h(new Set(Ln.map(H=>H.id))),C=()=>h(new Set),j=()=>h(new Set(Ln.filter(H=>H.group==="broschüre").map(H=>H.id))),$=()=>h(new Set(Ln.map(H=>H.id))),L=()=>h(new Set(["cover","why","spieltag","banden"])),N=()=>h(new Set(["cover","why","haupt","co","silber"])),Z=()=>h(new Set(["club500","club500form"])),T=Ln.filter(H=>v.has(H.id)),Y=Ln.filter(H=>H.group==="broschüre"),U=Ln.filter(H=>H.group==="community"),I=Ln.filter(H=>H.group==="helfer");return g==="preview"?i.jsxs(i.Fragment,{children:[i.jsx(n3,{}),i.jsxs(Tp,{children:[i.jsxs(Rp,{children:["Vorschau · ",T.length," Seiten"]}),i.jsxs(Mp,{children:[i.jsx(Ds,{$active:f,onClick:()=>y(H=>!H),children:f?"Preise ✓":"Preise ✗"}),i.jsx(Ds,{onClick:()=>x("dashboard"),children:"Zurück"}),i.jsx(Ds,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),i.jsxs(a3,{children:[i.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',i.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),i.jsx(r3,{children:T.map(H=>i.jsx("div",{children:H.render(f)},H.id))})]}):i.jsxs(i.Fragment,{children:[i.jsxs(Tp,{children:[i.jsx(Rp,{children:"Sponsoring-Kit · SCKW"}),i.jsx(Mp,{children:i.jsx(Ds,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),i.jsxs(S3,{children:[i.jsx(j3,{children:"Sponsoring-Kit zusammenstellen"}),i.jsx(w3,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),i.jsxs(E3,{children:[i.jsx(_3,{$on:f,onClick:()=>y(H=>!H),children:f?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),i.jsxs(A3,{children:[v.size," von ",Ln.length," Seiten ausgewählt"]})]}),i.jsxs(z3,{children:[i.jsx(Ha,{onClick:w,children:"Alles"}),i.jsx(Ha,{onClick:j,children:"Broschüre komplett"}),i.jsx(Ha,{onClick:$,children:"Komplett-Kit (+ Helfer)"}),i.jsx(Ha,{onClick:N,children:"Nur Premium-Pakete"}),i.jsx(Ha,{onClick:L,children:"Starter-Paket"}),i.jsx(Ha,{onClick:Z,children:"CLUB 500"}),i.jsx(Ha,{onClick:C,children:"Keine"})]}),i.jsx(td,{children:"Broschüre"}),i.jsx(nd,{children:Y.map(H=>i.jsxs(ad,{$checked:v.has(H.id),children:[i.jsx("input",{type:"checkbox",checked:v.has(H.id),onChange:()=>S(H.id)}),H.label]},H.id))}),i.jsx(td,{children:"Community / CLUB 500"}),i.jsx(nd,{children:U.map(H=>i.jsxs(ad,{$checked:v.has(H.id),children:[i.jsx("input",{type:"checkbox",checked:v.has(H.id),onChange:()=>S(H.id)}),H.label]},H.id))}),i.jsx(td,{children:"Helfer-Anhang"}),i.jsx(nd,{children:I.map(H=>i.jsxs(ad,{$checked:v.has(H.id),children:[i.jsx("input",{type:"checkbox",checked:v.has(H.id),onChange:()=>S(H.id)}),H.label]},H.id))}),i.jsxs(C3,{disabled:v.size===0,onClick:()=>x("preview"),children:["Vorschau & Drucken (",v.size," Seiten)"]})]})]})}function T3(a,s){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),d=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(d),s&&(c.href=s),d.href=a,d.href}const R3=(()=>{let a=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${s()}${a}`)})();function xa(a){const s=[];for(let u=0,c=a.length;u<c;u++)s.push(a[u]);return s}let $r=null;function Xb(a={}){return $r||(a.includeStyleProperties?($r=a.includeStyleProperties,$r):($r=xa(window.getComputedStyle(document.documentElement)),$r))}function Ps(a,s){const c=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function M3(a){const s=Ps(a,"border-left-width"),u=Ps(a,"border-right-width");return a.clientWidth+s+u}function D3(a){const s=Ps(a,"border-top-width"),u=Ps(a,"border-bottom-width");return a.clientHeight+s+u}function Fb(a,s={}){const u=s.width||M3(a),c=s.height||D3(a);return{width:u,height:c}}function B3(){let a,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(a=parseInt(u,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const Lt=16384;function O3(a){(a.width>Lt||a.height>Lt)&&(a.width>Lt&&a.height>Lt?a.width>a.height?(a.height*=Lt/a.width,a.width=Lt):(a.width*=Lt/a.height,a.height=Lt):a.width>Lt?(a.height*=Lt/a.width,a.width=Lt):(a.width*=Lt/a.height,a.height=Lt))}function Ws(a){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=a})}async function $3(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function N3(a,s,u){const c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"svg"),f=document.createElementNS(c,"foreignObject");return d.setAttribute("width",`${s}`),d.setAttribute("height",`${u}`),d.setAttribute("viewBox",`0 0 ${s} ${u}`),f.setAttribute("width","100%"),f.setAttribute("height","100%"),f.setAttribute("x","0"),f.setAttribute("y","0"),f.setAttribute("externalResourcesRequired","true"),d.appendChild(f),f.appendChild(a),$3(d)}const zt=(a,s)=>{if(a instanceof s)return!0;const u=Object.getPrototypeOf(a);return u===null?!1:u.constructor.name===s.name||zt(u,s)};function L3(a){const s=a.getPropertyValue("content");return`${a.cssText} content: '${s.replace(/'|"/g,"")}';`}function U3(a,s){return Xb(s).map(u=>{const c=a.getPropertyValue(u),d=a.getPropertyPriority(u);return`${u}: ${c}${d?" !important":""};`}).join(" ")}function H3(a,s,u,c){const d=`.${a}:${s}`,f=u.cssText?L3(u):U3(u,c);return document.createTextNode(`${d}{${f}}`)}function $p(a,s,u,c){const d=window.getComputedStyle(a,u),f=d.getPropertyValue("content");if(f===""||f==="none")return;const y=R3();try{s.className=`${s.className} ${y}`}catch{return}const v=document.createElement("style");v.appendChild(H3(y,u,d,c)),s.appendChild(v)}function G3(a,s,u){$p(a,s,":before",u),$p(a,s,":after",u)}const Np="application/font-woff",Lp="image/jpeg",V3={woff:Np,woff2:Np,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Lp,jpeg:Lp,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Y3(a){const s=/\.([^./]*?)$/g.exec(a);return s?s[1]:""}function Xd(a){const s=Y3(a).toLowerCase();return V3[s]||""}function q3(a){return a.split(/,/)[1]}function Cd(a){return a.search(/^(data:)/)!==-1}function K3(a,s){return`data:${s};base64,${a}`}async function Pb(a,s,u){const c=await fetch(a,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const d=await c.blob();return new Promise((f,y)=>{const v=new FileReader;v.onerror=y,v.onloadend=()=>{try{f(u({res:c,result:v.result}))}catch(h){y(h)}},v.readAsDataURL(d)})}const rd={};function Q3(a,s,u){let c=a.replace(/\?.*/,"");return u&&(c=a),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Fd(a,s,u){const c=Q3(a,s,u.includeQueryParams);if(rd[c]!=null)return rd[c];u.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let d;try{const f=await Pb(a,u.fetchRequestInit,({res:y,result:v})=>(s||(s=y.headers.get("Content-Type")||""),q3(v)));d=K3(f,s)}catch(f){d=u.imagePlaceholder||"";let y=`Failed to fetch resource: ${a}`;f&&(y=typeof f=="string"?f:f.message),y&&console.warn(y)}return rd[c]=d,d}async function Z3(a){const s=a.toDataURL();return s==="data:,"?a.cloneNode(!1):Ws(s)}async function X3(a,s){if(a.currentSrc){const f=document.createElement("canvas"),y=f.getContext("2d");f.width=a.clientWidth,f.height=a.clientHeight,y?.drawImage(a,0,0,f.width,f.height);const v=f.toDataURL();return Ws(v)}const u=a.poster,c=Xd(u),d=await Fd(u,c,s);return Ws(d)}async function F3(a,s){var u;try{if(!((u=a?.contentDocument)===null||u===void 0)&&u.body)return await so(a.contentDocument.body,s,!0)}catch{}return a.cloneNode(!1)}async function P3(a,s){return zt(a,HTMLCanvasElement)?Z3(a):zt(a,HTMLVideoElement)?X3(a,s):zt(a,HTMLIFrameElement)?F3(a,s):a.cloneNode(Wb(a))}const W3=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",Wb=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function I3(a,s,u){var c,d;if(Wb(s))return s;let f=[];return W3(a)&&a.assignedNodes?f=xa(a.assignedNodes()):zt(a,HTMLIFrameElement)&&(!((c=a.contentDocument)===null||c===void 0)&&c.body)?f=xa(a.contentDocument.body.childNodes):f=xa(((d=a.shadowRoot)!==null&&d!==void 0?d:a).childNodes),f.length===0||zt(a,HTMLVideoElement)||await f.reduce((y,v)=>y.then(()=>so(v,u)).then(h=>{h&&s.appendChild(h)}),Promise.resolve()),s}function J3(a,s,u){const c=s.style;if(!c)return;const d=window.getComputedStyle(a);d.cssText?(c.cssText=d.cssText,c.transformOrigin=d.transformOrigin):Xb(u).forEach(f=>{let y=d.getPropertyValue(f);f==="font-size"&&y.endsWith("px")&&(y=`${Math.floor(parseFloat(y.substring(0,y.length-2)))-.1}px`),zt(a,HTMLIFrameElement)&&f==="display"&&y==="inline"&&(y="block"),f==="d"&&s.getAttribute("d")&&(y=`path(${s.getAttribute("d")})`),c.setProperty(f,y,d.getPropertyPriority(f))})}function e4(a,s){zt(a,HTMLTextAreaElement)&&(s.innerHTML=a.value),zt(a,HTMLInputElement)&&s.setAttribute("value",a.value)}function t4(a,s){if(zt(a,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(d=>a.value===d.getAttribute("value"));c&&c.setAttribute("selected","")}}function n4(a,s,u){return zt(s,Element)&&(J3(a,s,u),G3(a,s,u),e4(a,s),t4(a,s)),s}async function a4(a,s){const u=a.querySelectorAll?a.querySelectorAll("use"):[];if(u.length===0)return a;const c={};for(let f=0;f<u.length;f++){const v=u[f].getAttribute("xlink:href");if(v){const h=a.querySelector(v),g=document.querySelector(v);!h&&g&&!c[v]&&(c[v]=await so(g,s,!0))}}const d=Object.values(c);if(d.length){const f="http://www.w3.org/1999/xhtml",y=document.createElementNS(f,"svg");y.setAttribute("xmlns",f),y.style.position="absolute",y.style.width="0",y.style.height="0",y.style.overflow="hidden",y.style.display="none";const v=document.createElementNS(f,"defs");y.appendChild(v);for(let h=0;h<d.length;h++)v.appendChild(d[h]);a.appendChild(y)}return a}async function so(a,s,u){return!u&&s.filter&&!s.filter(a)?null:Promise.resolve(a).then(c=>P3(c,s)).then(c=>I3(a,c,s)).then(c=>n4(a,c,s)).then(c=>a4(c,s))}const Ib=/url\((['"]?)([^'"]+?)\1\)/g,r4=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,i4=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function l4(a){const s=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function s4(a){const s=[];return a.replace(Ib,(u,c,d)=>(s.push(d),u)),s.filter(u=>!Cd(u))}async function o4(a,s,u,c,d){try{const f=u?T3(s,u):s,y=Xd(s);let v;return d||(v=await Fd(f,y,c)),a.replace(l4(s),`$1${v}$3`)}catch{}return a}function c4(a,{preferredFontFormat:s}){return s?a.replace(i4,u=>{for(;;){const[c,,d]=r4.exec(u)||[];if(!d)return"";if(d===s)return`src: ${c};`}}):a}function Jb(a){return a.search(Ib)!==-1}async function e1(a,s,u){if(!Jb(a))return a;const c=c4(a,u);return s4(c).reduce((f,y)=>f.then(v=>o4(v,y,s,u)),Promise.resolve(c))}async function Nr(a,s,u){var c;const d=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(a);if(d){const f=await e1(d,null,u);return s.style.setProperty(a,f,s.style.getPropertyPriority(a)),!0}return!1}async function u4(a,s){await Nr("background",a,s)||await Nr("background-image",a,s),await Nr("mask",a,s)||await Nr("-webkit-mask",a,s)||await Nr("mask-image",a,s)||await Nr("-webkit-mask-image",a,s)}async function d4(a,s){const u=zt(a,HTMLImageElement);if(!(u&&!Cd(a.src))&&!(zt(a,SVGImageElement)&&!Cd(a.href.baseVal)))return;const c=u?a.src:a.href.baseVal,d=await Fd(c,Xd(c),s);await new Promise((f,y)=>{a.onload=f,a.onerror=s.onImageErrorHandler?(...h)=>{try{f(s.onImageErrorHandler(...h))}catch(g){y(g)}}:y;const v=a;v.decode&&(v.decode=f),v.loading==="lazy"&&(v.loading="eager"),u?(a.srcset="",a.src=d):a.href.baseVal=d})}async function f4(a,s){const c=xa(a.childNodes).map(d=>t1(d,s));await Promise.all(c).then(()=>a)}async function t1(a,s){zt(a,Element)&&(await u4(a,s),await d4(a,s),await f4(a,s))}function h4(a,s){const{style:u}=a;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(d=>{u[d]=c[d]}),a}const Up={};async function Hp(a){let s=Up[a];if(s!=null)return s;const c=await(await fetch(a)).text();return s={url:a,cssText:c},Up[a]=s,s}async function Gp(a,s){let u=a.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,f=(u.match(/url\([^)]+\)/g)||[]).map(async y=>{let v=y.replace(c,"$1");return v.startsWith("https://")||(v=new URL(v,a.url).href),Pb(v,s.fetchRequestInit,({result:h})=>(u=u.replace(y,`url(${h})`),[y,h]))});return Promise.all(f).then(()=>u)}function Vp(a){if(a==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=a.replace(u,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=d.exec(c);if(h===null)break;s.push(h[0])}c=c.replace(d,"");const f=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,y="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",v=new RegExp(y,"gi");for(;;){let h=f.exec(c);if(h===null){if(h=v.exec(c),h===null)break;f.lastIndex=v.lastIndex}else v.lastIndex=f.lastIndex;s.push(h[0])}return s}async function m4(a,s){const u=[],c=[];return a.forEach(d=>{if("cssRules"in d)try{xa(d.cssRules||[]).forEach((f,y)=>{if(f.type===CSSRule.IMPORT_RULE){let v=y+1;const h=f.href,g=Hp(h).then(x=>Gp(x,s)).then(x=>Vp(x).forEach(S=>{try{d.insertRule(S,S.startsWith("@import")?v+=1:d.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:S,error:w})}})).catch(x=>{console.error("Error loading remote css",x.toString())});c.push(g)}})}catch(f){const y=a.find(v=>v.href==null)||document.styleSheets[0];d.href!=null&&c.push(Hp(d.href).then(v=>Gp(v,s)).then(v=>Vp(v).forEach(h=>{y.insertRule(h,y.cssRules.length)})).catch(v=>{console.error("Error loading remote stylesheet",v)})),console.error("Error inlining remote css file",f)}}),Promise.all(c).then(()=>(a.forEach(d=>{if("cssRules"in d)try{xa(d.cssRules||[]).forEach(f=>{u.push(f)})}catch(f){console.error(`Error while reading CSS rules from ${d.href}`,f)}}),u))}function g4(a){return a.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>Jb(s.style.getPropertyValue("src")))}async function p4(a,s){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=xa(a.ownerDocument.styleSheets),c=await m4(u,s);return g4(c)}function n1(a){return a.trim().replace(/["']/g,"")}function b4(a){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(f=>{s.add(n1(f))}),Array.from(c.children).forEach(f=>{f instanceof HTMLElement&&u(f)})}return u(a),s}async function x4(a,s){const u=await p4(a,s),c=b4(a);return(await Promise.all(u.filter(f=>c.has(n1(f.style.fontFamily))).map(f=>{const y=f.parentStyleSheet?f.parentStyleSheet.href:null;return e1(f.cssText,y,s)}))).join(`
`)}async function y4(a,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await x4(a,s);if(u){const c=document.createElement("style"),d=document.createTextNode(u);c.appendChild(d),a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)}}async function v4(a,s={}){const{width:u,height:c}=Fb(a,s),d=await so(a,s,!0);return await y4(d,s),await t1(d,s),h4(d,s),await N3(d,u,c)}async function S4(a,s={}){const{width:u,height:c}=Fb(a,s),d=await v4(a,s),f=await Ws(d),y=document.createElement("canvas"),v=y.getContext("2d"),h=s.pixelRatio||B3(),g=s.canvasWidth||u,x=s.canvasHeight||c;return y.width=g*h,y.height=x*h,s.skipAutoScale||O3(y),y.style.width=`${g}`,y.style.height=`${x}`,s.backgroundColor&&(v.fillStyle=s.backgroundColor,v.fillRect(0,0,y.width,y.height)),v.drawImage(f,0,0,y.width,y.height),y}async function j4(a,s={}){return(await S4(a,s)).toDataURL()}const Ji=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]},{id:"fuerstenberg-bande",label:"Fürstenberg: Bande",image:"/stadion/bande.jpg",zones:[{id:"freie-bande",label:"Einzelbande 3 × 1 m",x:4.2,y:44.5,width:37.5,height:17.5}]},{id:"fuerstenberg-tribuene",label:"Fürstenberg: Tribünendach",image:"/stadion/tribuene.jpg",zones:[{id:"dach-schriftzug",label:"Schriftzug Tribünendach",x:.5,y:15.5,width:77,height:9.5}]}],w4=p.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,E4=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,_4=p.div`
  text-align: center;
  margin-bottom: 2rem;
`,z4=p.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,C4=p.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,A4=p.select`
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
`,k4=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,T4=p.div`
  flex: 1;
  min-width: 0;
`,R4=p.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,M4=p.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,D4=p.div`
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
`,B4=p.img`
  width: ${a=>a.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${a=>a.$offsetX}%, ${a=>a.$offsetY}%);
`,O4=p.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,$4=p.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,N4=p.div`
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
`,L4=p.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,U4=p.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,H4=p.label`
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
`,G4=p.button`
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
`,V4=p.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,Y4=p.input`
  display: none;
`,q4=p.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,id=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,ld=p.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,sd=p.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,K4=p.button`
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
`,Q4=p.button`
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
`;function Z4(){const[a,s]=k.useState(Ji[0].id),[u,c]=k.useState(null),[d,f]=k.useState([]),[y,v]=k.useState(!1),h=k.useRef({}),g=k.useRef(null),x=Ji.find(T=>T.id===a)??Ji[0],S=T=>d.find(Y=>Y.zoneId===T),w=k.useCallback((T,Y)=>{if(!Y)return;const U=new FileReader;U.onload=I=>{const H=I.target?.result;f(de=>[...de.filter(se=>se.zoneId!==T),{zoneId:T,dataUrl:H,scale:1,offsetX:0,offsetY:0}])},U.readAsDataURL(Y)},[]),C=k.useCallback((T,Y)=>{f(U=>U.map(I=>I.zoneId===T?{...I,scale:Y}:I))},[]),j=k.useCallback((T,Y,U)=>{f(I=>I.map(H=>H.zoneId===T?{...H,offsetX:Y,offsetY:U}:H))},[]),$=k.useCallback(T=>{f(Y=>Y.filter(U=>U.zoneId!==T))},[]),L=k.useCallback(()=>{f([]),c(null)},[]),N=k.useCallback(async()=>{if(g.current){v(!0);try{const T=await j4(g.current,{pixelRatio:2,cacheBust:!0}),Y=document.createElement("a");Y.download=`${x.label}-mockup.png`,Y.href=T,Y.click()}finally{v(!1)}}},[x.label]),Z=T=>{c(T.id),S(T.id)||h.current[T.id]?.click()};return i.jsx(w4,{children:i.jsxs(E4,{children:[i.jsxs(_4,{children:[i.jsx(z4,{children:"Mockup Generator"}),i.jsx(C4,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),Ji.length>1&&i.jsx(A4,{value:a,onChange:T=>{s(T.target.value),f([]),c(null)},children:Ji.map(T=>i.jsx("option",{value:T.id,children:T.label},T.id))}),i.jsxs(k4,{children:[i.jsx(T4,{children:i.jsxs(R4,{ref:g,children:[i.jsx(M4,{src:x.image,alt:x.label,draggable:!1}),x.zones.map(T=>{const Y=S(T.id);return i.jsx(D4,{$active:u===T.id,$hasLogo:!!Y,style:{left:`${T.x}%`,top:`${T.y}%`,width:`${T.width}%`,height:`${T.height}%`},onClick:()=>Z(T),onDragOver:U=>{U.preventDefault(),c(T.id)},onDrop:U=>{U.preventDefault();const I=U.dataTransfer.files?.[0];w(T.id,I)},children:Y&&i.jsx(B4,{src:Y.dataUrl,alt:"Logo",draggable:!1,$scale:Y.scale,$offsetX:Y.offsetX,$offsetY:Y.offsetY})},T.id)})]})}),i.jsxs(O4,{children:[i.jsx($4,{children:"Werbeflächen"}),x.zones.map(T=>{const Y=S(T.id);return i.jsxs(N4,{$active:u===T.id,onClick:()=>c(T.id),children:[i.jsx(L4,{children:T.label}),i.jsxs(U4,{children:[i.jsx(H4,{htmlFor:`file-${T.id}`,children:Y?"Ändern":"Logo hochladen"}),i.jsx(Y4,{id:`file-${T.id}`,ref:U=>{h.current[T.id]=U},type:"file",accept:"image/*",onChange:U=>w(T.id,U.target.files?.[0])}),Y&&i.jsx(G4,{onClick:U=>{U.stopPropagation(),$(T.id)},children:"Entfernen"}),Y&&i.jsx(V4,{src:Y.dataUrl,alt:"Vorschau"})]}),Y&&i.jsxs(i.Fragment,{children:[i.jsxs(id,{children:[i.jsxs(ld,{children:[Math.round(Y.scale*100),"%"]}),i.jsx(sd,{type:"range",min:"0.3",max:"3",step:"0.05",value:Y.scale,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),C(T.id,parseFloat(U.target.value))}})]}),i.jsxs(id,{children:[i.jsx(ld,{children:"X"}),i.jsx(sd,{type:"range",min:"-100",max:"100",step:"1",value:Y.offsetX,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),j(T.id,parseFloat(U.target.value),Y.offsetY)}})]}),i.jsxs(id,{children:[i.jsx(ld,{children:"Y"}),i.jsx(sd,{type:"range",min:"-100",max:"100",step:"1",value:Y.offsetY,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),j(T.id,Y.offsetX,parseFloat(U.target.value))}})]})]}),!Y&&i.jsx(q4,{children:"Klicken oder Bild hierher ziehen"})]},T.id)}),d.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Q4,{onClick:N,disabled:y,children:y?"Wird erstellt...":"Bild herunterladen"}),i.jsx(K4,{onClick:L,children:"Alle Logos entfernen"})]})]})]})]})})}var X4=Object.defineProperty,Is=Object.getOwnPropertySymbols,a1=Object.prototype.hasOwnProperty,r1=Object.prototype.propertyIsEnumerable,Yp=(a,s,u)=>s in a?X4(a,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[s]=u,Ad=(a,s)=>{for(var u in s||(s={}))a1.call(s,u)&&Yp(a,u,s[u]);if(Is)for(var u of Is(s))r1.call(s,u)&&Yp(a,u,s[u]);return a},kd=(a,s)=>{var u={};for(var c in a)a1.call(a,c)&&s.indexOf(c)<0&&(u[c]=a[c]);if(a!=null&&Is)for(var c of Is(a))s.indexOf(c)<0&&r1.call(a,c)&&(u[c]=a[c]);return u};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Za;(a=>{const s=class ye{constructor(h,g,x,S){if(this.version=h,this.errorCorrectionLevel=g,this.modules=[],this.isFunction=[],h<ye.MIN_VERSION||h>ye.MAX_VERSION)throw new RangeError("Version value out of range");if(S<-1||S>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let w=[];for(let j=0;j<this.size;j++)w.push(!1);for(let j=0;j<this.size;j++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(x);if(this.drawCodewords(C),S==-1){let j=1e9;for(let $=0;$<8;$++){this.applyMask($),this.drawFormatBits($);const L=this.getPenaltyScore();L<j&&(S=$,j=L),this.applyMask($)}}d(0<=S&&S<=7),this.mask=S,this.applyMask(S),this.drawFormatBits(S),this.isFunction=[]}static encodeText(h,g){const x=a.QrSegment.makeSegments(h);return ye.encodeSegments(x,g)}static encodeBinary(h,g){const x=a.QrSegment.makeBytes(h);return ye.encodeSegments([x],g)}static encodeSegments(h,g,x=1,S=40,w=-1,C=!0){if(!(ye.MIN_VERSION<=x&&x<=S&&S<=ye.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let j,$;for(j=x;;j++){const T=ye.getNumDataCodewords(j,g)*8,Y=y.getTotalBits(h,j);if(Y<=T){$=Y;break}if(j>=S)throw new RangeError("Data too long")}for(const T of[ye.Ecc.MEDIUM,ye.Ecc.QUARTILE,ye.Ecc.HIGH])C&&$<=ye.getNumDataCodewords(j,T)*8&&(g=T);let L=[];for(const T of h){u(T.mode.modeBits,4,L),u(T.numChars,T.mode.numCharCountBits(j),L);for(const Y of T.getData())L.push(Y)}d(L.length==$);const N=ye.getNumDataCodewords(j,g)*8;d(L.length<=N),u(0,Math.min(4,N-L.length),L),u(0,(8-L.length%8)%8,L),d(L.length%8==0);for(let T=236;L.length<N;T^=253)u(T,8,L);let Z=[];for(;Z.length*8<L.length;)Z.push(0);return L.forEach((T,Y)=>Z[Y>>>3]|=T<<7-(Y&7)),new ye(j,g,Z,w)}getModule(h,g){return 0<=h&&h<this.size&&0<=g&&g<this.size&&this.modules[g][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let x=0;x<this.size;x++)this.setFunctionModule(6,x,x%2==0),this.setFunctionModule(x,6,x%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),g=h.length;for(let x=0;x<g;x++)for(let S=0;S<g;S++)x==0&&S==0||x==0&&S==g-1||x==g-1&&S==0||this.drawAlignmentPattern(h[x],h[S]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const g=this.errorCorrectionLevel.formatBits<<3|h;let x=g;for(let w=0;w<10;w++)x=x<<1^(x>>>9)*1335;const S=(g<<10|x)^21522;d(S>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,c(S,w));this.setFunctionModule(8,7,c(S,6)),this.setFunctionModule(8,8,c(S,7)),this.setFunctionModule(7,8,c(S,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,c(S,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,c(S,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,c(S,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let x=0;x<12;x++)h=h<<1^(h>>>11)*7973;const g=this.version<<12|h;d(g>>>18==0);for(let x=0;x<18;x++){const S=c(g,x),w=this.size-11+x%3,C=Math.floor(x/3);this.setFunctionModule(w,C,S),this.setFunctionModule(C,w,S)}}drawFinderPattern(h,g){for(let x=-4;x<=4;x++)for(let S=-4;S<=4;S++){const w=Math.max(Math.abs(S),Math.abs(x)),C=h+S,j=g+x;0<=C&&C<this.size&&0<=j&&j<this.size&&this.setFunctionModule(C,j,w!=2&&w!=4)}}drawAlignmentPattern(h,g){for(let x=-2;x<=2;x++)for(let S=-2;S<=2;S++)this.setFunctionModule(h+S,g+x,Math.max(Math.abs(S),Math.abs(x))!=1)}setFunctionModule(h,g,x){this.modules[g][h]=x,this.isFunction[g][h]=!0}addEccAndInterleave(h){const g=this.version,x=this.errorCorrectionLevel;if(h.length!=ye.getNumDataCodewords(g,x))throw new RangeError("Invalid argument");const S=ye.NUM_ERROR_CORRECTION_BLOCKS[x.ordinal][g],w=ye.ECC_CODEWORDS_PER_BLOCK[x.ordinal][g],C=Math.floor(ye.getNumRawDataModules(g)/8),j=S-C%S,$=Math.floor(C/S);let L=[];const N=ye.reedSolomonComputeDivisor(w);for(let T=0,Y=0;T<S;T++){let U=h.slice(Y,Y+$-w+(T<j?0:1));Y+=U.length;const I=ye.reedSolomonComputeRemainder(U,N);T<j&&U.push(0),L.push(U.concat(I))}let Z=[];for(let T=0;T<L[0].length;T++)L.forEach((Y,U)=>{(T!=$-w||U>=j)&&Z.push(Y[T])});return d(Z.length==C),Z}drawCodewords(h){if(h.length!=Math.floor(ye.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let g=0;for(let x=this.size-1;x>=1;x-=2){x==6&&(x=5);for(let S=0;S<this.size;S++)for(let w=0;w<2;w++){const C=x-w,$=(x+1&2)==0?this.size-1-S:S;!this.isFunction[$][C]&&g<h.length*8&&(this.modules[$][C]=c(h[g>>>3],7-(g&7)),g++)}}d(g==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let g=0;g<this.size;g++)for(let x=0;x<this.size;x++){let S;switch(h){case 0:S=(x+g)%2==0;break;case 1:S=g%2==0;break;case 2:S=x%3==0;break;case 3:S=(x+g)%3==0;break;case 4:S=(Math.floor(x/3)+Math.floor(g/2))%2==0;break;case 5:S=x*g%2+x*g%3==0;break;case 6:S=(x*g%2+x*g%3)%2==0;break;case 7:S=((x+g)%2+x*g%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[g][x]&&S&&(this.modules[g][x]=!this.modules[g][x])}}getPenaltyScore(){let h=0;for(let w=0;w<this.size;w++){let C=!1,j=0,$=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[w][L]==C?(j++,j==5?h+=ye.PENALTY_N1:j>5&&h++):(this.finderPenaltyAddHistory(j,$),C||(h+=this.finderPenaltyCountPatterns($)*ye.PENALTY_N3),C=this.modules[w][L],j=1);h+=this.finderPenaltyTerminateAndCount(C,j,$)*ye.PENALTY_N3}for(let w=0;w<this.size;w++){let C=!1,j=0,$=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[L][w]==C?(j++,j==5?h+=ye.PENALTY_N1:j>5&&h++):(this.finderPenaltyAddHistory(j,$),C||(h+=this.finderPenaltyCountPatterns($)*ye.PENALTY_N3),C=this.modules[L][w],j=1);h+=this.finderPenaltyTerminateAndCount(C,j,$)*ye.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let C=0;C<this.size-1;C++){const j=this.modules[w][C];j==this.modules[w][C+1]&&j==this.modules[w+1][C]&&j==this.modules[w+1][C+1]&&(h+=ye.PENALTY_N2)}let g=0;for(const w of this.modules)g=w.reduce((C,j)=>C+(j?1:0),g);const x=this.size*this.size,S=Math.ceil(Math.abs(g*20-x*10)/x)-1;return d(0<=S&&S<=9),h+=S*ye.PENALTY_N4,d(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,g=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let x=[6];for(let S=this.size-7;x.length<h;S-=g)x.splice(1,0,S);return x}}static getNumRawDataModules(h){if(h<ye.MIN_VERSION||h>ye.MAX_VERSION)throw new RangeError("Version number out of range");let g=(16*h+128)*h+64;if(h>=2){const x=Math.floor(h/7)+2;g-=(25*x-10)*x-55,h>=7&&(g-=36)}return d(208<=g&&g<=29648),g}static getNumDataCodewords(h,g){return Math.floor(ye.getNumRawDataModules(h)/8)-ye.ECC_CODEWORDS_PER_BLOCK[g.ordinal][h]*ye.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let g=[];for(let S=0;S<h-1;S++)g.push(0);g.push(1);let x=1;for(let S=0;S<h;S++){for(let w=0;w<g.length;w++)g[w]=ye.reedSolomonMultiply(g[w],x),w+1<g.length&&(g[w]^=g[w+1]);x=ye.reedSolomonMultiply(x,2)}return g}static reedSolomonComputeRemainder(h,g){let x=g.map(S=>0);for(const S of h){const w=S^x.shift();x.push(0),g.forEach((C,j)=>x[j]^=ye.reedSolomonMultiply(C,w))}return x}static reedSolomonMultiply(h,g){if(h>>>8||g>>>8)throw new RangeError("Byte out of range");let x=0;for(let S=7;S>=0;S--)x=x<<1^(x>>>7)*285,x^=(g>>>S&1)*h;return d(x>>>8==0),x}finderPenaltyCountPatterns(h){const g=h[1];d(g<=this.size*3);const x=g>0&&h[2]==g&&h[3]==g*3&&h[4]==g&&h[5]==g;return(x&&h[0]>=g*4&&h[6]>=g?1:0)+(x&&h[6]>=g*4&&h[0]>=g?1:0)}finderPenaltyTerminateAndCount(h,g,x){return h&&(this.finderPenaltyAddHistory(g,x),g=0),g+=this.size,this.finderPenaltyAddHistory(g,x),this.finderPenaltyCountPatterns(x)}finderPenaltyAddHistory(h,g){g[0]==0&&(h+=this.size),g.pop(),g.unshift(h)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=s;function u(v,h,g){if(h<0||h>31||v>>>h)throw new RangeError("Value out of range");for(let x=h-1;x>=0;x--)g.push(v>>>x&1)}function c(v,h){return(v>>>h&1)!=0}function d(v){if(!v)throw new Error("Assertion error")}const f=class Ve{constructor(h,g,x){if(this.mode=h,this.numChars=g,this.bitData=x,g<0)throw new RangeError("Invalid argument");this.bitData=x.slice()}static makeBytes(h){let g=[];for(const x of h)u(x,8,g);return new Ve(Ve.Mode.BYTE,h.length,g)}static makeNumeric(h){if(!Ve.isNumeric(h))throw new RangeError("String contains non-numeric characters");let g=[];for(let x=0;x<h.length;){const S=Math.min(h.length-x,3);u(parseInt(h.substring(x,x+S),10),S*3+1,g),x+=S}return new Ve(Ve.Mode.NUMERIC,h.length,g)}static makeAlphanumeric(h){if(!Ve.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let g=[],x;for(x=0;x+2<=h.length;x+=2){let S=Ve.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x))*45;S+=Ve.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x+1)),u(S,11,g)}return x<h.length&&u(Ve.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x)),6,g),new Ve(Ve.Mode.ALPHANUMERIC,h.length,g)}static makeSegments(h){return h==""?[]:Ve.isNumeric(h)?[Ve.makeNumeric(h)]:Ve.isAlphanumeric(h)?[Ve.makeAlphanumeric(h)]:[Ve.makeBytes(Ve.toUtf8ByteArray(h))]}static makeEci(h){let g=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)u(h,8,g);else if(h<16384)u(2,2,g),u(h,14,g);else if(h<1e6)u(6,3,g),u(h,21,g);else throw new RangeError("ECI assignment value out of range");return new Ve(Ve.Mode.ECI,0,g)}static isNumeric(h){return Ve.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return Ve.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,g){let x=0;for(const S of h){const w=S.mode.numCharCountBits(g);if(S.numChars>=1<<w)return 1/0;x+=4+w+S.bitData.length}return x}static toUtf8ByteArray(h){h=encodeURI(h);let g=[];for(let x=0;x<h.length;x++)h.charAt(x)!="%"?g.push(h.charCodeAt(x)):(g.push(parseInt(h.substring(x+1,x+3),16)),x+=2);return g}};f.NUMERIC_REGEX=/^[0-9]*$/,f.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,f.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let y=f;a.QrSegment=f})(Za||(Za={}));(a=>{(s=>{const u=class{constructor(d,f){this.ordinal=d,this.formatBits=f}};u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),s.Ecc=u})(a.QrCode||(a.QrCode={}))})(Za||(Za={}));(a=>{(s=>{const u=class{constructor(d,f){this.modeBits=d,this.numBitsCharCount=f}numCharCountBits(d){return this.numBitsCharCount[Math.floor((d+7)/17)]}};u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),s.Mode=u})(a.QrSegment||(a.QrSegment={}))})(Za||(Za={}));var Hr=Za;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var F4={L:Hr.QrCode.Ecc.LOW,M:Hr.QrCode.Ecc.MEDIUM,Q:Hr.QrCode.Ecc.QUARTILE,H:Hr.QrCode.Ecc.HIGH},i1=128,l1="L",s1="#FFFFFF",o1="#000000",c1=!1,u1=1,P4=4,W4=0,I4=.1;function d1(a,s=0){const u=[];return a.forEach(function(c,d){let f=null;c.forEach(function(y,v){if(!y&&f!==null){u.push(`M${f+s} ${d+s}h${v-f}v1H${f+s}z`),f=null;return}if(v===c.length-1){if(!y)return;f===null?u.push(`M${v+s},${d+s} h1v1H${v+s}z`):u.push(`M${f+s},${d+s} h${v+1-f}v1H${f+s}z`);return}y&&f===null&&(f=v)})}),u.join("")}function f1(a,s){return a.slice().map((u,c)=>c<s.y||c>=s.y+s.h?u:u.map((d,f)=>f<s.x||f>=s.x+s.w?d:!1))}function J4(a,s,u,c){if(c==null)return null;const d=a.length+u*2,f=Math.floor(s*I4),y=d/s,v=(c.width||f)*y,h=(c.height||f)*y,g=c.x==null?a.length/2-v/2:c.x*y,x=c.y==null?a.length/2-h/2:c.y*y,S=c.opacity==null?1:c.opacity;let w=null;if(c.excavate){let j=Math.floor(g),$=Math.floor(x),L=Math.ceil(v+g-j),N=Math.ceil(h+x-$);w={x:j,y:$,w:L,h:N}}const C=c.crossOrigin;return{x:g,y:x,h,w:v,excavation:w,opacity:S,crossOrigin:C}}function e6(a,s){return s!=null?Math.max(Math.floor(s),0):a?P4:W4}function h1({value:a,level:s,minVersion:u,includeMargin:c,marginSize:d,imageSettings:f,size:y,boostLevel:v}){let h=_e.useMemo(()=>{const j=(Array.isArray(a)?a:[a]).reduce(($,L)=>($.push(...Hr.QrSegment.makeSegments(L)),$),[]);return Hr.QrCode.encodeSegments(j,F4[s],u,void 0,void 0,v)},[a,s,u,v]);const{cells:g,margin:x,numCells:S,calculatedImageSettings:w}=_e.useMemo(()=>{let C=h.getModules();const j=e6(c,d),$=C.length+j*2,L=J4(C,y,j,f);return{cells:C,margin:j,numCells:$,calculatedImageSettings:L}},[h,y,f,c,d]);return{qrcode:h,margin:x,cells:g,numCells:S,calculatedImageSettings:w}}var t6=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),n6=_e.forwardRef(function(s,u){const c=s,{value:d,size:f=i1,level:y=l1,bgColor:v=s1,fgColor:h=o1,includeMargin:g=c1,minVersion:x=u1,boostLevel:S,marginSize:w,imageSettings:C}=c,$=kd(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:L}=$,N=kd($,["style"]),Z=C?.src,T=_e.useRef(null),Y=_e.useRef(null),U=_e.useCallback(it=>{T.current=it,typeof u=="function"?u(it):u&&(u.current=it)},[u]),[I,H]=_e.useState(!1),{margin:de,cells:se,numCells:X,calculatedImageSettings:ce}=h1({value:d,level:y,minVersion:x,boostLevel:S,includeMargin:g,marginSize:w,imageSettings:C,size:f});_e.useEffect(()=>{if(T.current!=null){const it=T.current,ke=it.getContext("2d");if(!ke)return;let G=se;const F=Y.current,ae=ce!=null&&F!==null&&F.complete&&F.naturalHeight!==0&&F.naturalWidth!==0;ae&&ce.excavation!=null&&(G=f1(se,ce.excavation));const fe=window.devicePixelRatio||1;it.height=it.width=f*fe;const z=f/X*fe;ke.scale(z,z),ke.fillStyle=v,ke.fillRect(0,0,X,X),ke.fillStyle=h,t6?ke.fill(new Path2D(d1(G,de))):se.forEach(function(Q,P){Q.forEach(function(W,te){W&&ke.fillRect(te+de,P+de,1,1)})}),ce&&(ke.globalAlpha=ce.opacity),ae&&ke.drawImage(F,ce.x+de,ce.y+de,ce.w,ce.h)}}),_e.useEffect(()=>{H(!1)},[Z]);const ze=Ad({height:f,width:f},L);let mt=null;return Z!=null&&(mt=_e.createElement("img",{src:Z,key:Z,style:{display:"none"},onLoad:()=>{H(!0)},ref:Y,crossOrigin:ce?.crossOrigin})),_e.createElement(_e.Fragment,null,_e.createElement("canvas",Ad({style:ze,height:f,width:f,ref:U,role:"img"},N)),mt)});n6.displayName="QRCodeCanvas";var m1=_e.forwardRef(function(s,u){const c=s,{value:d,size:f=i1,level:y=l1,bgColor:v=s1,fgColor:h=o1,includeMargin:g=c1,minVersion:x=u1,boostLevel:S,title:w,marginSize:C,imageSettings:j}=c,$=kd(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:L,cells:N,numCells:Z,calculatedImageSettings:T}=h1({value:d,level:y,minVersion:x,boostLevel:S,includeMargin:g,marginSize:C,imageSettings:j,size:f});let Y=N,U=null;j!=null&&T!=null&&(T.excavation!=null&&(Y=f1(N,T.excavation)),U=_e.createElement("image",{href:j.src,height:T.h,width:T.w,x:T.x+L,y:T.y+L,preserveAspectRatio:"none",opacity:T.opacity,crossOrigin:T.crossOrigin}));const I=d1(Y,L);return _e.createElement("svg",Ad({height:f,width:f,viewBox:`0 0 ${Z} ${Z}`,ref:u,role:"img"},$),!!w&&_e.createElement("title",null,w),_e.createElement("path",{fill:v,d:`M0,0 h${Z}v${Z}H0z`,shapeRendering:"crispEdges"}),_e.createElement("path",{fill:h,d:I,shapeRendering:"crispEdges"}),U)});m1.displayName="QRCodeSVG";const a6={subtitle:"Nach der Meisterschaft in der Landesliga spielt unsere erste Mannschaft seit dieser Saison in der Verbandsliga. Mit einem Feld im 500er Club stehen Sie direkt hinter ihr, ob privat oder mit Ihrer Firma. Jedes Feld steht für einen Förderer.",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Saison 2026/27"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},benefits:[{icon:"📄",title:"Spendenbescheinigung",text:"Der SC Konstanz-Wollmatingen ist als gemeinnützig anerkannt. Auf Wunsch erhalten Sie eine Zuwendungsbestätigung."},{icon:"🏅",title:"Ihr Name auf der Spendentafel",text:"Auf der Website und am Vereinsgelände, wenn Sie möchten. Wer lieber im Hintergrund bleibt, erscheint als „SCKW Gönner“."},{icon:"⚽",title:"Direkt für die Erste",text:"Ihr Beitrag fließt in Auswärtsfahrten, Training, Material und den Spielbetrieb in der Verbandsliga."}],spendentafel:{label:"Spendentafel (optional)",sublabel:"Tragen Sie hier Ihren Namen oder Firmennamen ein, wenn Sie auf unserer Spendentafel (Website & Vereinsgelände) veröffentlicht werden möchten. Lassen Sie das Feld leer, wenn Sie anonym spenden möchten.",nameFieldPlaceholder:"Name/Firma für die Spendentafel (leer = anonym)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},bankCtaLabel:"Per Überweisung spenden",ueberweisungHinweis:"Ihr Name und Ihre Adresse werden automatisch in den Verwendungszweck übernommen, damit wir Ihnen die Spendenbescheinigung zuschicken können.",verwendungszweck:"CLUB 500",bankDetails:{kontoinhaber:"Sport Club Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},r6=100,i6=[{feld:1,name:"Ulrike Dunand",anonym:!1,saisonBis:2027},{feld:2,name:"Dieter Graf",anonym:!1,saisonBis:2027},{feld:3,name:"Bernd Reister",anonym:!1,saisonBis:2027},{feld:4,name:"Stefan Weber",anonym:!1,saisonBis:2027},{feld:5,name:"Lutz Grüneberg",anonym:!1,saisonBis:2027},{feld:6,name:"Steffen Allert",anonym:!1,saisonBis:2028},{feld:7,name:"Fa. Müller Putz & Stuck GmbH",anonym:!1,saisonBis:2027},{feld:8,name:"René Frey",anonym:!1,saisonBis:2027},{feld:9,name:"Luciano Rossetti",anonym:!1,saisonBis:2027},{feld:10,name:"Paolo Rossetti",anonym:!1,saisonBis:2027},{feld:11,name:"Rolf Degen",anonym:!1,saisonBis:2027},{feld:12,name:"Senioren des SCKW",anonym:!1,saisonBis:2027},{feld:13,name:"Brigitte und Thomas Fuchs",anonym:!1,saisonBis:2027},{feld:14,name:"ZMVZ|Dr. Schütz GmbH",anonym:!1,saisonBis:2027},{feld:15,name:"Izet|Roter Gugelhan",anonym:!1,saisonBis:2027},{feld:16,name:"Dr. Laubach|Zahnheilkunde",anonym:!1,saisonBis:2027},{feld:17,name:"Manni",anonym:!1,saisonBis:2027},{feld:18,name:"Martina|Laubach",anonym:!1,saisonBis:2027}],qp={felderGesamt:r6,foerderer:i6},l6=p.div`
  color-scheme: light;
  font-family: ${E.fontBody};
  color: ${E.ink};
  text-align: left;
  background: #fff;
`,s6=p.section`
  position: relative;
  overflow: hidden;
  background: ${E.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 760px);
`,o6=p.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center 30% / cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 1.2s ease;
`,c6=p.div`
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
`,u6=p(Ze)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 3.5rem;
`,d6=p.h1`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6.5rem);
  line-height: 0.9;
  margin: 0;
  color: #fff;

  span {
    text-transform: none;
  }
`,f6=p.p`
  max-width: 36rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
`,h6=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,od=p.section`
  padding: 4rem 0;
  scroll-margin-top: 72px;
  background: ${({$paper:a})=>a?E.paper:"#fff"};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,m6=p.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,g6=p.article`
  background: #fff;
  border: 1px solid ${E.line};
  border-top: 4px solid ${E.red};
  border-radius: 14px;
  padding: 1.5rem;
`,p6=p.h3`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.05;
  text-transform: uppercase;
  color: ${E.navy};
  margin: 0 0 0.6rem;
`,b6=p.p`
  margin: 0;
  line-height: 1.55;
  color: ${E.ink};
`,Kp="SCKW Gönner",x6=p.div`
  max-width: 640px;
  height: 8px;
  margin: 0.75rem 0 2rem;
  border-radius: 999px;
  background: ${E.line};
  overflow: hidden;

  i {
    display: block;
    height: 100%;
    background: ${E.red};
  }
`,y6=p.p`
  margin: 0;
  font-weight: 700;
`,v6=p.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`,g1=p.li`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 12px;
  padding: 1rem 1.25rem;

  span {
    min-width: 2.2rem;
    font-family: ${E.fontDisplay};
    font-size: 1.4rem;
    font-weight: 800;
    color: ${E.blue};
  }

  strong {
    line-height: 1.25;
  }
`,S6=p(g1)`
  justify-content: space-between;
  flex-wrap: wrap;
  background: transparent;
  border: 2px dashed ${E.line};

  strong {
    color: ${E.muted};
  }

  a {
    font-weight: 700;
    color: ${E.red};
    text-decoration: none;
  }
`,j6=p.div`
  max-width: 760px;
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,w6=p.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${E.ink};
  margin-bottom: 0.6rem;
`,E6=p.h3`
  font-family: ${E.fontBody};
  font-size: 1rem;
  font-weight: 700;
  color: ${E.ink};
  margin: 0 0 0.6rem;
`,_6=p.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Pd=cn`
  border: 2px solid ${({$active:a})=>a?E.blue:E.line};
  background: ${({$active:a})=>a?"#eef5ff":"#fff"};
  border-radius: 12px;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: ${E.blue};
  }
`,z6=p.button`
  ${Pd}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.1rem 1.1rem 1rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: ${E.ink};
`,C6=p.span`
  font-family: ${E.fontDisplay};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  color: ${E.navy};
`,A6=p.span`
  margin-top: 0.35rem;
  font-size: 1rem;
  font-weight: 700;
`,k6=p.span`
  font-size: 0.9rem;
  color: ${E.muted};
`,T6=p.div`
  ${Pd}
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
  margin-bottom: 2rem;
`,R6=p.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  color: ${E.ink};
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: transparent;
  }
`,M6=p.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({$active:a})=>a?E.blue:"#9aa9bd"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({$active:a})=>a?E.blue:"transparent"};
  }
`,D6=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr auto;
    align-items: start;
  }
`,B6=p.div`
  display: flex;
  gap: 0.4rem;
`,O6=p.button`
  ${Pd}
  min-height: 48px;
  padding: 0 0.85rem;
  border-radius: 8px;
  color: ${({$active:a})=>a?"#0650a3":E.ink};
  font: inherit;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
`,ga=p.input`
  width: 100%;
  height: 48px;
  padding: 0 0.85rem;
  border: 1px solid #b9c6d8;
  border-radius: 8px;
  font: inherit;
  font-size: 1rem;
  background: #fff;
  color: ${E.ink};
  color-scheme: light;

  &:focus-visible {
    outline: 3px solid ${E.blue};
    outline-offset: 1px;
    border-color: ${E.blue};
  }

  &::placeholder {
    color: #7b8ba1;
  }
`,$6=p.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${E.muted};
`,N6=p.div`
  margin-bottom: 1.75rem;
`,L6=p.p`
  margin: 0 0 0.6rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${E.muted};
`,U6=p.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.4;
  color: ${E.ink};

  input {
    margin: 0.1rem 0 0;
    width: 20px;
    height: 20px;
    accent-color: ${E.blue};
    flex-shrink: 0;
  }
`,H6=p.p`
  margin: 0.35rem 0 0 1.85rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${E.muted};
`,G6=Nd`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,V6=Nd`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,Y6=p.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:a})=>a?cn`animation: ${G6} 0.3s ease forwards;`:cn`animation: ${V6} 0.2s ease forwards; pointer-events: none;`}
`,Qp=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,q6=p.div`
  margin-bottom: 2rem;
`,K6=p.button`
  ${Wr}
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
  max-width: 420px;
  min-height: 60px;
  padding: 0.6rem 1.4rem;
`,Q6=p.span`
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.9;
`,Z6=p.p`
  margin: 1rem 0 0;
  padding: 0.85rem 1rem;
  background: ${E.paper};
  border-left: 3px solid ${E.blue};
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${E.ink};
  max-width: 60ch;
`,X6=p.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 24, 48, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,F6=p.div`
  background: #fff;
  border-radius: 14px;
  border-top: 4px solid ${E.red};
  padding: 2rem 1.5rem 1.5rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 24px 48px rgba(10, 24, 48, 0.35);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  font-family: ${E.fontBody};
  color: ${E.ink};
  text-align: left;
  color-scheme: light;
`,P6=p.button`
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
  color: ${E.muted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${E.paper};
    border-color: transparent;
  }
`,W6=p.h2`
  font-family: ${E.fontDisplay};
  font-size: 1.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${E.navy};
  margin: 0 2.5rem 0.5rem 0;
  line-height: 1;
`,I6=p.p`
  font-size: 0.95rem;
  color: ${E.muted};
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,J6=p.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid ${E.line};
`,Bs=p.div`
  font-size: 0.95rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
  strong { color: ${E.navy}; }
`,eE=p.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${E.muted};
`,tE=p.p`
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  background: ${E.paper};
  border-left: 3px solid ${E.blue};
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
`;function Zp(a){return a.toLocaleString("de-DE",{minimumFractionDigits:a%1===0?0:1,maximumFractionDigits:2})}function nE(a,s,u,c,d){return["BCD","002","1","SCT",u,a,s,`EUR${c.toFixed(2)}`,"","",d].join(`
`)}const cd=[ct("herren/herren_club500_1"),ct("herren/herren_club500_4"),ct("herren/herren_club500_2"),ct("herren/herren_club500_3"),ct("herren/herren_club500_5")].filter(Boolean),aE=["1 Jahr","2 Jahre","3 Jahre"],p1=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ud=a=>{document.getElementById(a)?.scrollIntoView({behavior:p1()?"auto":"smooth",block:"start"})};function rE(){const a=a6,{felderGesamt:s}=qp,u=[...qp.foerderer].sort((X,ce)=>X.feld-ce.feld),[c,d]=k.useState(0);k.useEffect(()=>{if(cd.length<=1||p1())return;const X=setInterval(()=>d(ce=>(ce+1)%cd.length),6e3);return()=>clearInterval(X)},[]);const[f,y]=k.useState(0),[v,h]=k.useState(!1),[g,x]=k.useState(""),[S,w]=k.useState("1 Jahr"),[C,j]=k.useState(""),[$,L]=k.useState(!1),[N,Z]=k.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[T,Y]=k.useState(!1);k.useEffect(()=>{if(!T)return;const X=ce=>{ce.key==="Escape"&&Y(!1)};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[T]);const U=k.useMemo(()=>{if(v){const X=parseFloat(g.replace(",","."));return isNaN(X)||X<a.customAmount.minAmount?0:X}return a.memberships[f]?.value??0},[v,g,f,a.memberships,a.customAmount.minAmount]),I=k.useMemo(()=>v?S:a.memberships[f]?.duration??"",[v,S,f,a.memberships]),H=k.useMemo(()=>{const X=[a.verwendungszweck];if(I&&X.push(I),C.trim()&&X.push(`Tafel: ${C.trim()}`),$){const ce=[N.vorname,N.nachname].filter(Boolean).join(" "),ze=[N.strasse,N.plz,N.ort].filter(Boolean).join(", "),mt=[ce,ze].filter(Boolean).join(", ");mt&&X.push(`Besch: ${mt}`)}return X.join(" | ")},[a.verwendungszweck,I,C,$,N]),de=k.useMemo(()=>nE(a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,U,H),[a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,U,H]),se=(X,ce)=>Z(ze=>({...ze,[X]:ce}));return i.jsxs(l6,{children:[i.jsxs(s6,{"aria-labelledby":"club500-title","data-dark":!0,children:[cd.map((X,ce)=>i.jsx(o6,{$bg:X,$active:ce===c,"aria-hidden":"true"},ce)),i.jsx(c6,{}),i.jsxs(u6,{children:[i.jsx(Qr,{$onDark:!0,children:"100 Felder, 500 € pro Feld und Saison"}),i.jsxs(d6,{id:"club500-title",children:["Der ",i.jsx("span",{children:"500er"})," Club."]}),i.jsx(f6,{children:a.subtitle}),i.jsxs(h6,{children:[i.jsx(Ka,{href:"#feld-sichern",onClick:X=>{X.preventDefault(),ud("feld-sichern")},children:"Feld sichern"}),i.jsx(Ka,{href:"#foerderer",$variant:"outlineLight",onClick:X=>{X.preventDefault(),ud("foerderer")},children:"Unsere Förderer ansehen"})]})]})]}),i.jsx(od,{"aria-labelledby":"benefits-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"benefits-title",eyebrow:"Ihre Unterstützung",title:"Was Ihr Feld bewirkt."}),i.jsx(m6,{children:a.benefits.map(X=>i.jsxs(g6,{children:[i.jsx(p6,{children:X.title}),i.jsx(b6,{children:X.text})]},X.title))})]})}),i.jsx(od,{$paper:!0,id:"foerderer","aria-labelledby":"foerderer-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"foerderer-title",eyebrow:"Fördertafel",title:"Unsere Förderer.",lead:`Ob Ihr Name erscheint, entscheiden Sie selbst - sonst steht dort „${Kp}".`}),i.jsxs(y6,{children:[u.length," von ",s," Feldern vergeben"]}),i.jsx(x6,{role:"progressbar","aria-valuenow":u.length,"aria-valuemin":0,"aria-valuemax":s,"aria-label":`${u.length} von ${s} Feldern vergeben`,children:i.jsx("i",{style:{width:`${u.length/s*100}%`}})}),i.jsxs(v6,{children:[u.map(X=>i.jsxs(g1,{children:[i.jsx("span",{children:String(X.feld).padStart(2,"0")}),i.jsx("strong",{children:X.anonym?Kp:X.name.replace("|"," ")})]},X.feld)),s>u.length&&i.jsxs(S6,{children:[i.jsxs("strong",{children:[s-u.length," Felder frei"]}),i.jsx("a",{href:"#feld-sichern",onClick:X=>{X.preventDefault(),ud("feld-sichern")},children:"Feld sichern →"})]})]})]})}),i.jsx(od,{id:"feld-sichern","aria-labelledby":"feld-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"feld-title",eyebrow:"Per Überweisung oder QR-Code",title:"Feld sichern.",lead:"Wählen Sie, für wie viele Saisons Sie ein Feld übernehmen möchten."}),i.jsxs(j6,{children:[i.jsxs("div",{role:"group","aria-labelledby":"optionen-label",children:[i.jsx(E6,{id:"optionen-label",children:a.sectionTitle}),i.jsx(_6,{children:a.memberships.map((X,ce)=>{const ze=!v&&f===ce;return i.jsxs(z6,{$active:ze,"aria-pressed":ze,onClick:()=>{h(!1),y(ce)},type:"button",children:[i.jsx(C6,{children:X.label}),i.jsx(A6,{children:X.duration}),i.jsx(k6,{children:X.description})]},X.value)})}),i.jsxs(T6,{$active:v,onClick:()=>{v||h(!0)},children:[i.jsxs(R6,{type:"button","aria-pressed":v,children:[i.jsx(M6,{$active:v}),a.customAmount.label]}),v&&i.jsxs(D6,{onClick:X=>X.stopPropagation(),children:[i.jsx(ga,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR","aria-label":"Eigener Betrag in Euro",value:g,onChange:X=>x(X.target.value),autoFocus:!0}),i.jsx(B6,{role:"group","aria-label":"Laufzeit",children:aE.map(X=>i.jsx(O6,{$active:S===X,"aria-pressed":S===X,onClick:()=>w(X),type:"button",children:X},X))})]}),v&&i.jsx($6,{children:a.customAmount.minHint})]})]}),i.jsxs(N6,{children:[i.jsx(w6,{htmlFor:"tafel-name",children:a.spendentafel.label}),i.jsx(L6,{id:"tafel-hinweis",children:a.spendentafel.sublabel}),i.jsx(ga,{id:"tafel-name",type:"text","aria-describedby":"tafel-hinweis",placeholder:a.spendentafel.nameFieldPlaceholder,value:C,onChange:X=>j(X.target.value)})]}),i.jsxs(q6,{children:[i.jsxs(U6,{children:[i.jsx("input",{type:"checkbox",checked:$,onChange:X=>L(X.target.checked)}),i.jsx("span",{children:a.bescheinigung.label})]}),i.jsx(H6,{children:a.bescheinigung.hinweis}),i.jsxs(Y6,{$visible:$,children:[i.jsxs(Qp,{children:[i.jsx(ga,{type:"text",name:"bescheinigung-vorname",autoComplete:"given-name","aria-label":a.bescheinigung.fields.vorname,placeholder:a.bescheinigung.fields.vorname,value:N.vorname,onChange:X=>se("vorname",X.target.value)}),i.jsx(ga,{type:"text",name:"bescheinigung-nachname",autoComplete:"family-name","aria-label":a.bescheinigung.fields.nachname,placeholder:a.bescheinigung.fields.nachname,value:N.nachname,onChange:X=>se("nachname",X.target.value)})]}),i.jsx(ga,{type:"email",name:"bescheinigung-email",autoComplete:"email","aria-label":a.bescheinigung.fields.email,placeholder:a.bescheinigung.fields.email,value:N.email,onChange:X=>se("email",X.target.value)}),i.jsx(ga,{type:"text",name:"bescheinigung-strasse",autoComplete:"street-address","aria-label":a.bescheinigung.fields.strasse,placeholder:a.bescheinigung.fields.strasse,value:N.strasse,onChange:X=>se("strasse",X.target.value)}),i.jsxs(Qp,{children:[i.jsx(ga,{type:"text",name:"bescheinigung-plz",autoComplete:"postal-code","aria-label":a.bescheinigung.fields.plz,placeholder:a.bescheinigung.fields.plz,value:N.plz,onChange:X=>se("plz",X.target.value)}),i.jsx(ga,{type:"text",name:"bescheinigung-ort",autoComplete:"address-level2","aria-label":a.bescheinigung.fields.ort,placeholder:a.bescheinigung.fields.ort,value:N.ort,onChange:X=>se("ort",X.target.value)})]})]})]}),i.jsxs(K6,{type:"button",onClick:()=>Y(!0),children:[a.bankCtaLabel,i.jsxs(Q6,{children:[Zp(U)," €"]})]}),$&&i.jsx(Z6,{children:a.ueberweisungHinweis})]})]})}),i.jsx(cl,{}),T&&i.jsx(X6,{onClick:()=>Y(!1),children:i.jsxs(F6,{role:"dialog","aria-modal":"true","aria-labelledby":"qr-title",onClick:X=>X.stopPropagation(),children:[i.jsx(P6,{type:"button","aria-label":"Schließen",onClick:()=>Y(!1),autoFocus:!0,children:"×"}),i.jsx(W6,{id:"qr-title",children:"Überweisung per QR-Code"}),i.jsx(I6,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING usw.). Alle Daten werden automatisch ausgefüllt."}),U>0&&i.jsx(J6,{children:i.jsx(m1,{value:de,size:220,level:"M"})}),i.jsx(Bs,{children:i.jsx("strong",{children:a.bankDetails.kontoinhaber})}),i.jsxs(Bs,{children:["IBAN: ",i.jsx("strong",{children:a.bankDetails.iban})]}),i.jsxs(Bs,{children:["Betrag: ",i.jsxs("strong",{children:[Zp(U)," €"]}),I&&i.jsxs(i.Fragment,{children:[", ",i.jsx("strong",{children:I})]})]}),i.jsxs(Bs,{children:["Verwendungszweck: ",i.jsx("strong",{children:H})]}),i.jsxs(eE,{children:[a.bankDetails.bank,", ",a.bankDetails.adresse]}),$&&N.email&&i.jsxs(tE,{children:["Wir senden Ihre Spendenbescheinigung an ",i.jsx("strong",{children:N.email}),"."]})]})})]})}const iE="2026/27",lE=[{anstoss:"2026-08-15T16:00",gegner:"FC Wolfenweiler-Schallstadt",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Heidi Reister"},{anstoss:"2026-08-26T17:45",gegner:"FC Rot-Weiß Salem",ort:"Fürstenberg",wettbewerb:"SBFV-Pokal",spender:"Manuel Nicoletti"},{anstoss:"2026-08-29T16:00",gegner:"SC Lahr",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Lutz Grüneberg"},{anstoss:"2026-09-12T16:00",gegner:"SV 08 Laufenburg",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Espac Maschinenbau GmbH"},{anstoss:"2026-09-26T16:00",gegner:"Spvgg. Gundelfingen/Wildtal",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Lejla Kocan"},{anstoss:"2026-10-10T16:00",gegner:"SC Pfullendorf",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Gerhard Huger"},{anstoss:"2026-10-24T16:00",gegner:"1. FC Rielasingen-Arlen",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:"Sabine und Michael Uhl"},{anstoss:"2026-11-07T14:30",gegner:"FC Denzlingen",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:"Iris und Thomas Bode"},{anstoss:"2026-11-14T14:30",gegner:"SV 08 Kuppenheim",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:"Phoenicia"},{anstoss:"2026-12-05T14:30",gegner:"SV Bühlertal",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:"Christian Berger"},{anstoss:"2027-03-20T16:00",gegner:"FC Auggen",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-04-03T16:00",gegner:"SV Linx",ort:"Waldheim Kunstrasen",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-04-17T16:00",gegner:"VfR Hausen",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-05-01T16:00",gegner:"SC Wyhl",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-05-15T16:00",gegner:"SC Hofstetten",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null},{anstoss:"2027-06-05T16:00",gegner:"FC Rot-Weiß Salem",ort:"Fürstenberg",wettbewerb:"Verbandsliga",spender:null}],sE={saison:iE,spiele:lE},Xp="150 €",oE="sponsoring@sckw.de",cE=ct("herren/herren_1.jpg"),uE=[{title:"Stadiondurchsage",text:"Ihr Name vor dem Anpfiff, bei jedem Tor und zur Halbzeit."},{title:"Heimspielmagazin",text:"Nennung als Ballspender im Heft zum Spiel."},{title:"Instagram",text:"Eine Story mit Ihrem Namen auf unserem Instagram-Kanal."}],b1=a=>new Date(a).toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit",year:"numeric"}),dE=a=>new Date(a).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),fE=a=>{const s=`SCKW - ${a.gegner} am ${b1(a.anstoss)}`,u=`Ballspende: ${s}`,c=`Hallo,

ich möchte Ballspender beim Heimspiel ${s} werden.

Name für Durchsage und Heft:
Telefon:

Viele Grüße`;return`mailto:${oE}?subject=${encodeURIComponent(u)}&body=${encodeURIComponent(c)}`},hE=p.div`
  color-scheme: light;
  font-family: ${E.fontBody};
  color: ${E.ink};
  text-align: left;
  background: #fff;
`,mE=p.section`
  position: relative;
  overflow: hidden;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(10, 24, 48, 0.94) 0%, rgba(10, 24, 48, 0.7) 55%, rgba(10, 24, 48, 0.35) 100%),
    url(${cE}) center 30% / cover no-repeat,
    ${E.navyDeep};
`,gE=p(Ze)`
  padding-top: 5rem;
  padding-bottom: 3.5rem;
`,pE=p.h1`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.9;
  margin: 0;
`,bE=p.p`
  max-width: 34rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
`,Fp=p.section`
  padding: 4rem 0;
  scroll-margin-top: 72px;
  background: ${({$paper:a})=>a?E.paper:"#fff"};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,xE=p.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`,yE=p.div`
  border: 1px solid ${E.line};
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    font-family: ${E.fontDisplay};
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
    color: ${E.muted};
    line-height: 1.5;
  }
`,vE=p.p`
  margin: 2rem 0 0;
  font-size: 1.1rem;

  strong {
    font-family: ${E.fontDisplay};
    font-size: 2rem;
    color: ${E.red};
    margin-right: 0.5rem;
  }
`,SE=p.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
`,jE=p.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;
  background: #fff;
  border: 1px solid ${E.line};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  opacity: ${({$vorbei:a})=>a?.6:1};

  @media (min-width: 768px) {
    grid-template-columns: 11rem 1fr auto;
  }
`,wE=p.div`
  font-weight: 700;

  span {
    display: block;
    font-weight: 400;
    color: ${E.muted};
    font-size: 0.9rem;
  }
`,EE=p.div`
  font-family: ${E.fontDisplay};
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.15;

  span {
    display: block;
    font-family: ${E.fontBody};
    font-size: 0.9rem;
    font-weight: 400;
    color: ${E.muted};
  }
`,_E=p.div`
  font-weight: 700;
  color: ${E.blue};

  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${E.muted};
  }

  @media (min-width: 768px) {
    text-align: right;
  }
`,zE=p.span`
  color: ${E.muted};
  font-weight: 600;
`;function CE(){const{saison:a,spiele:s}=sE,u=Date.now(),c=s.filter(d=>!d.spender&&new Date(d.anstoss).getTime()>u).length;return i.jsxs(hE,{children:[i.jsx(mE,{"aria-labelledby":"ballspende-title","data-dark":!0,children:i.jsxs(gE,{children:[i.jsxs(Qr,{$onDark:!0,children:[Xp," pro Heimspiel · Saison ",a]}),i.jsx(pE,{id:"ballspende-title",children:"Ballspende."}),i.jsx(bE,{children:"Sie spenden den Spielball für ein Heimspiel unserer Ersten in der Verbandsliga. Dafür hört das ganze Stadion Ihren Namen."}),i.jsx(Ka,{href:"#spiele",children:c>0?`${c} freie Spiele ansehen`:"Alle Spiele ansehen"})]})}),i.jsx(Fp,{"aria-labelledby":"leistung-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"leistung-title",eyebrow:"Ihre Ballspende",title:"Was Sie bekommen."}),i.jsx(xE,{children:uE.map(d=>i.jsxs(yE,{children:[i.jsx("h3",{children:d.title}),i.jsx("p",{children:d.text})]},d.title))}),i.jsxs(vE,{children:[i.jsx("strong",{children:Xp})," pro Spiel · 5er-Pack 500 €"]})]})}),i.jsx(Fp,{$paper:!0,id:"spiele","aria-labelledby":"spiele-title",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"spiele-title",eyebrow:`Heimspiele ${a}`,title:"Alle Spiele, alle Ballspender.",lead:"Freies Spiel gefunden? Ein Klick, und die Anfrage ist schon vorbereitet."}),i.jsx(SE,{children:s.map(d=>{const f=new Date(d.anstoss).getTime()<u;return i.jsxs(jE,{$vorbei:f&&!d.spender,children:[i.jsxs(wE,{children:[b1(d.anstoss),i.jsxs("span",{children:[dE(d.anstoss)," Uhr"]})]}),i.jsxs(EE,{children:[d.gegner,i.jsxs("span",{children:[d.ort,d.wettbewerb!=="Verbandsliga"&&` · ${d.wettbewerb}`]})]}),d.spender?i.jsxs(_E,{children:[i.jsx("span",{children:"Ballspender"}),d.spender]}):f?i.jsx(zE,{children:"Spiel vorbei"}):i.jsx(Ka,{href:fE(d),children:"Spiel anfragen"})]},d.anstoss)})})]})}),i.jsx(cl,{})]})}const AE=["Ein Spieler-Post in der Hinrunde und einer in der Rückrunde","Eine Vorstellung als Partner mit ein bis zwei gemeinsamen Bildern mit dem Spieler","Sie kommen mit aufs Bild, wenn er trifft oder Spieler des Spiels wird","Ein vom Spieler signiertes Trikot für Ihr Büro","Exklusiv: nur ein Partner pro Spieler","So sichtbar oder so dezent, wie Sie möchten"];function kE(){return i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3 8.5l3 3 7-7",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}function TE(){const a=`mailto:${wt.email}?subject=${encodeURIComponent("Personal Partner - Interesse")}`;return i.jsxs(RE,{children:[i.jsx(ME,{"aria-labelledby":"pp-title","data-dark":!0,children:i.jsxs(Ze,{children:[i.jsx(DE,{to:"/sponsoring",children:"Zurück zur Übersicht"}),i.jsx(Qr,{$onDark:!0,children:"Persönliche Partnerschaft"}),i.jsx(BE,{id:"pp-title",children:"Personal Partner."}),i.jsx(Qb,{$onDark:!0,children:"Unterstützen Sie gezielt einen SCKW-Spieler und begleiten Sie ihn durch seine Saison. Persönlich, exklusiv und ganz nah an der Mannschaft."})]})}),i.jsx(OE,{"aria-labelledby":"pp-leistungen",children:i.jsx(Ze,{children:i.jsxs($E,{children:[i.jsxs("div",{children:[i.jsx(Et,{id:"pp-leistungen",eyebrow:"Ein Spieler, ein Partner",title:"Ganz nah dran."}),i.jsx(NE,{children:"Als Personal Partner stehen Sie hinter einem einzelnen Spieler und begleiten seine Saison beim SCKW. Das ist persönlicher als jede Bande: Sie lernen den Spieler kennen, erscheinen gemeinsam mit ihm auf unseren Kanälen und sind bei seinen großen Momenten dabei."})]}),i.jsxs(LE,{children:[i.jsx(UE,{children:"Das ist enthalten"}),i.jsx(HE,{children:AE.map(s=>i.jsxs("li",{children:[i.jsx(kE,{}),s]},s))}),i.jsxs(GE,{children:[i.jsx("span",{children:"Eine Saison"}),i.jsx(VE,{children:"2.500 €"})]}),i.jsx(YE,{children:"Verhandlungsbasis, im Gespräch individuell anpassbar."})]})]})})}),i.jsx(qE,{"aria-labelledby":"pp-kontakt",children:i.jsxs(Ze,{children:[i.jsx(Et,{id:"pp-kontakt",eyebrow:"Kontakt",title:"Sprechen wir darüber.",lead:"Erzählen Sie uns, welchen Spieler Sie begleiten möchten. Wir melden uns innerhalb von 24 Stunden."}),i.jsx(Ka,{href:a,children:"Per E-Mail anfragen"})]})}),i.jsx(cl,{})]})}const RE=p.div`
  color-scheme: light;
  font-family: ${E.fontBody};
  color: ${E.ink};
  text-align: left;
  background: #fff;
`,ME=p.section`
  background: ${E.navy};
  color: #fff;
  padding: 3rem 0 3.5rem;

  @media (min-width: 768px) {
    padding: 4rem 0 5rem;
  }
`,DE=p(ya)`
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
`,BE=p.h1`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 9vw, 5.5rem);
  line-height: 0.9;
  margin: 0;
  color: #fff;
`,OE=p.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,$E=p.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: 4rem;
    align-items: start;
  }
`,NE=p.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.65;
  color: ${E.ink};
  max-width: 60ch;
`,LE=p.div`
  background: #fff;
  border: 1px solid ${E.line};
  border-top: 4px solid ${E.red};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,UE=p.h3`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${E.navy};
  margin: 0 0 1rem;
`,HE=p.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    padding: 0.7rem 0;
    line-height: 1.5;
    border-bottom: 1px solid ${E.line};
  }

  li:last-child {
    border-bottom: none;
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.25rem;
    color: ${E.blue};
  }
`,GE=p.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${E.line};
  font-weight: 600;
  color: ${E.muted};
`,VE=p.span`
  font-family: ${E.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 2.8rem);
  line-height: 1;
  color: ${E.navy};
`,YE=p.p`
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: ${E.muted};
`,qE=p.section`
  background: ${E.paper};
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,KE="https://partner.sckw.de",QE=6e3,ZE=[{id:"reichweite",active:!0,eyebrow:"SC Konstanz-Wollmatingen · Sponsoring",title:"1,7 Mio. Views in 12 Monaten",subline:"100 % organisch, ohne Werbebudget. Ihre Marke ist bei jedem Spiel dabei.",href:"/sponsoring",image:"herren/herren_6",cta:"Partner werden"},{id:"exklusiv",active:!0,eyebrow:"Exklusiv-Partnerschaften",title:"Das Gesicht des Vereins werden",subline:"Stadionname, Trikot-Rücken oder Trikot-Ärmel sind noch frei.",href:"/sponsoring#angebot",image:"herren/herren_16",badge:"Noch frei",cta:"Details ansehen"},{id:"werbeflaechen",active:!0,eyebrow:"Werbeflächen",title:"Ihr Logo bei jedem Heimspiel",subline:"Banden und Banner direkt am Spielfeldrand.",href:"/sponsoring#werbeflaechen",image:"herren/herren_5",cta:"Flächen ansehen"},{id:"spieltag",active:!0,eyebrow:"Spieltag & Medien",title:"Schon mit kleinem Budget dabei",subline:"Ballspende, Spielpräsentator oder Magazin-Inserat.",href:"/sponsoring#spieltag",image:"herren/herren_14",badge:"Einstieg",cta:"Möglichkeiten ansehen"},{id:"club-500",active:!0,eyebrow:"500er Club",title:"Mit 500 € pro Saison dabei",subline:"Ein Feld im 500er Club unterstützt direkt unsere erste Mannschaft.",href:"/sponsoring/club-500",image:"herren/herren_6",cta:"Zum 500er Club"},{id:"kontakt",active:!0,eyebrow:"Partner werden",title:"Lassen Sie uns reden",subline:"Wir stellen gern ein Paket nach Ihren Wünschen zusammen: sponsoring@sckw.de",href:"/sponsoring",image:"herren/herren_16",cta:"Zur Sponsoring-Seite"}],dd=ZE.filter(a=>a.active),XE=45;function FE(){const[a,s]=k.useState(0),[u,c]=k.useState(!1),[d,f]=k.useState(!1),y=k.useRef(null),v=dd.length,h=k.useCallback(C=>s((C%v+v)%v),[v]);k.useEffect(()=>{const C=window.matchMedia("(prefers-reduced-motion: reduce)");f(C.matches);const j=()=>f(C.matches);return C.addEventListener?.("change",j),()=>C.removeEventListener?.("change",j)},[]),k.useEffect(()=>{if(u||d||v<=1)return;const C=setInterval(()=>s(j=>(j+1)%v),QE);return()=>clearInterval(C)},[u,d,v]);const g=C=>{y.current=C.touches[0].clientX},x=C=>{if(y.current===null)return;const j=C.changedTouches[0].clientX-y.current;Math.abs(j)>XE&&h(a+(j<0?1:-1)),y.current=null};if(v===0)return null;const S=dd[a],w=ct(S.image);return i.jsxs(PE,{role:"group","aria-roledescription":"Karussell","aria-label":"Sponsoring-Angebote des SC Konstanz-Wollmatingen",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1),onTouchStart:g,onTouchEnd:x,children:[i.jsxs(x1,{href:`${KE}${S.href}`,target:"_blank",rel:"noopener noreferrer","aria-label":`${S.title} - ${S.cta} (öffnet in neuem Tab)`,$bg:w,children:[i.jsxs(WE,{children:[i.jsx(IE,{src:"/logo-transparent.avif",alt:"SC Konstanz-Wollmatingen"}),S.badge&&i.jsx(JE,{children:S.badge})]}),i.jsxs(e_,{children:[i.jsx(t_,{children:S.eyebrow}),i.jsx(n_,{children:S.title}),i.jsx(a_,{children:S.subline}),i.jsxs(r_,{children:[S.cta,i.jsx("span",{"aria-hidden":!0,children:"→"})]})]})]},S.id),v>1&&i.jsxs(i_,{children:[i.jsx(Pp,{onClick:()=>h(a-1),"aria-label":"Vorheriges Angebot",children:"‹"}),i.jsx(l_,{children:dd.map((C,j)=>i.jsx(s_,{$active:j===a,onClick:()=>h(j),"aria-label":`Angebot ${j+1} von ${v}`,"aria-current":j===a?"true":void 0},C.id))}),i.jsx(Pp,{onClick:()=>h(a+1),"aria-label":"Nächstes Angebot",children:"›"})]})]})}const PE=p.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
`,x1=p.a`
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
      ${ol.colors.primaryDark} 155%
    );

    &::before {
      display: none;
    }
  }
`,WE=p.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,IE=p.img`
  height: 44px;
  width: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));

  @media (max-width: 480px) {
    height: 36px;
  }
`,JE=p.span`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
  color: #fff;
  background: ${ol.colors.primary};
  box-shadow: 0 4px 14px rgba(217, 36, 95, 0.45);
`,e_=p.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,t_=p.span`
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
    background: ${ol.colors.primary};
  }
`,n_=p.h2`
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
`,a_=p.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
  max-width: 42ch;

  @media (max-width: 480px) {
    font-size: 14.5px;
  }
`,r_=p.span`
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
  color: ${ol.colors.primaryDark};
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);

  span {
    transition: transform 0.2s ease;
  }

  ${x1}:hover & span {
    transform: translateX(4px);
  }
`,i_=p.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,Pp=p.button`
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
`,l_=p.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,s_=p.button`
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
`,c_=p.div`
  padding: 0;
  display: flex;
  justify-content: center;
`;function u_(){return i.jsxs(i.Fragment,{children:[i.jsx(o_,{}),i.jsx(c_,{children:i.jsx(FE,{})})]})}function d_(){const{pathname:a,hash:s}=fn();return k.useEffect(()=>{if(!s){window.scrollTo(0,0);return}const u=decodeURIComponent(s.slice(1));let c=0,d=0,f=0;const y=()=>{const v=document.getElementById(u);v?(v.scrollIntoView({block:"start"}),f=window.setTimeout(()=>v.scrollIntoView({block:"start"}),400)):c++<20&&(d=window.setTimeout(y,100))};return y(),()=>{window.clearTimeout(d),window.clearTimeout(f)}},[a,s]),null}function Lr({children:a}){return i.jsxs(i.Fragment,{children:[i.jsx(U0,{}),i.jsx("main",{id:"inhalt",children:a})]})}function f_(){return i.jsxs(dS,{children:[i.jsx(d_,{}),i.jsxs(G2,{children:[i.jsx(Wt,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(U0,{}),i.jsx(Hs,{to:"/sponsoring",replace:!0})]})}),i.jsx(Wt,{path:"/sponsoring",element:i.jsx(Lr,{children:i.jsx(e3,{})})}),i.jsx(Wt,{path:"/sponsoring-handoff",element:i.jsx(k3,{})}),i.jsx(Wt,{path:"/widget",element:i.jsx(u_,{})}),i.jsx(Wt,{path:"/sponsoring/club-500",element:i.jsx(Lr,{children:i.jsx(rE,{})})}),i.jsx(Wt,{path:"/sponsoring/ballspende",element:i.jsx(Lr,{children:i.jsx(CE,{})})}),i.jsx(Wt,{path:"/sponsoring/pakete",element:i.jsx(Hs,{to:"/sponsoring#angebot",replace:!0})}),i.jsx(Wt,{path:"/sponsoring/spielerpatenschaft",element:i.jsx(Lr,{children:i.jsx(TE,{})})}),i.jsx(Wt,{path:"/mockup-generator",element:i.jsx(Lr,{children:i.jsx(Z4,{})})}),i.jsx(Wt,{path:"/renovierung",element:i.jsx(Lr,{children:i.jsx(pj,{})})}),i.jsx(Wt,{path:"*",element:i.jsx(Hs,{to:"/sponsoring",replace:!0})})]})]})}console.log("sckw sponsoring Website loaded");Wy.createRoot(document.getElementById("root")).render(i.jsx(k.StrictMode,{children:i.jsx(Fv,{theme:ol,children:i.jsx(f_,{})})}));
