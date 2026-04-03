(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&o(x)}).observe(document,{childList:!0,subtree:!0});function u(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(d){if(d.ep)return;d.ep=!0;const h=u(d);fetch(d.href,h)}})();function iv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Bu={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function rv(){if(o0)return nl;o0=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(o,d,h){var x=null;if(h!==void 0&&(x=""+h),d.key!==void 0&&(x=""+d.key),"key"in d){h={};for(var v in d)v!=="key"&&(h[v]=d[v])}else h=d;return d=h.ref,{$$typeof:i,type:o,key:x,ref:d!==void 0?d:null,props:h}}return nl.Fragment=s,nl.jsx=u,nl.jsxs=u,nl}var c0;function av(){return c0||(c0=1,Bu.exports=rv()),Bu.exports}var a=av(),Du={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function lv(){if(u0)return se;u0=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.iterator;function w(z){return z===null||typeof z!="object"?null:(z=j&&z[j]||z["@@iterator"],typeof z=="function"?z:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,H={};function G(z,P,Z){this.props=z,this.context=P,this.refs=H,this.updater=Z||D}G.prototype.isReactComponent={},G.prototype.setState=function(z,P){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,P,"setState")},G.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=G.prototype;function K(z,P,Z){this.props=z,this.context=P,this.refs=H,this.updater=Z||D}var A=K.prototype=new U;A.constructor=K,R(A,G.prototype),A.isPureReactComponent=!0;var q=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function $(z,P,Z,X,ee,me){return Z=me.ref,{$$typeof:i,type:z,key:P,ref:Z!==void 0?Z:null,props:me}}function he(z,P){return $(z.type,P,void 0,void 0,void 0,z.props)}function oe(z){return typeof z=="object"&&z!==null&&z.$$typeof===i}function Me(z){var P={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Z){return P[Z]})}var J=/\/+/g;function ye(z,P){return typeof z=="object"&&z!==null&&z.key!=null?Me(""+z.key):P.toString(36)}function pt(){}function at(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(pt,pt):(z.status="pending",z.then(function(P){z.status==="pending"&&(z.status="fulfilled",z.value=P)},function(P){z.status==="pending"&&(z.status="rejected",z.reason=P)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ke(z,P,Z,X,ee){var me=typeof z;(me==="undefined"||me==="boolean")&&(z=null);var re=!1;if(z===null)re=!0;else switch(me){case"bigint":case"string":case"number":re=!0;break;case"object":switch(z.$$typeof){case i:case s:re=!0;break;case y:return re=z._init,ke(re(z._payload),P,Z,X,ee)}}if(re)return ee=ee(z),re=X===""?"."+ye(z,0):X,q(ee)?(Z="",re!=null&&(Z=re.replace(J,"$&/")+"/"),ke(ee,P,Z,"",function(ct){return ct})):ee!=null&&(oe(ee)&&(ee=he(ee,Z+(ee.key==null||z&&z.key===ee.key?"":(""+ee.key).replace(J,"$&/")+"/")+re)),P.push(ee)),1;re=0;var We=X===""?".":X+":";if(q(z))for(var Se=0;Se<z.length;Se++)X=z[Se],me=We+ye(X,Se),re+=ke(X,P,Z,me,ee);else if(Se=w(z),typeof Se=="function")for(z=Se.call(z),Se=0;!(X=z.next()).done;)X=X.value,me=We+ye(X,Se++),re+=ke(X,P,Z,me,ee);else if(me==="object"){if(typeof z.then=="function")return ke(at(z),P,Z,X,ee);throw P=String(z),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return re}function O(z,P,Z){if(z==null)return z;var X=[],ee=0;return ke(z,X,"","",function(me){return P.call(Z,me,ee++)}),X}function Q(z){if(z._status===-1){var P=z._result;P=P(),P.then(function(Z){(z._status===0||z._status===-1)&&(z._status=1,z._result=Z)},function(Z){(z._status===0||z._status===-1)&&(z._status=2,z._result=Z)}),z._status===-1&&(z._status=0,z._result=P)}if(z._status===1)return z._result.default;throw z._result}var ne=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ce(){}return se.Children={map:O,forEach:function(z,P,Z){O(z,function(){P.apply(this,arguments)},Z)},count:function(z){var P=0;return O(z,function(){P++}),P},toArray:function(z){return O(z,function(P){return P})||[]},only:function(z){if(!oe(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},se.Component=G,se.Fragment=u,se.Profiler=d,se.PureComponent=K,se.StrictMode=o,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,se.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},se.cache=function(z){return function(){return z.apply(null,arguments)}},se.cloneElement=function(z,P,Z){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var X=R({},z.props),ee=z.key,me=void 0;if(P!=null)for(re in P.ref!==void 0&&(me=void 0),P.key!==void 0&&(ee=""+P.key),P)!W.call(P,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&P.ref===void 0||(X[re]=P[re]);var re=arguments.length-2;if(re===1)X.children=Z;else if(1<re){for(var We=Array(re),Se=0;Se<re;Se++)We[Se]=arguments[Se+2];X.children=We}return $(z.type,ee,void 0,void 0,me,X)},se.createContext=function(z){return z={$$typeof:x,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:h,_context:z},z},se.createElement=function(z,P,Z){var X,ee={},me=null;if(P!=null)for(X in P.key!==void 0&&(me=""+P.key),P)W.call(P,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ee[X]=P[X]);var re=arguments.length-2;if(re===1)ee.children=Z;else if(1<re){for(var We=Array(re),Se=0;Se<re;Se++)We[Se]=arguments[Se+2];ee.children=We}if(z&&z.defaultProps)for(X in re=z.defaultProps,re)ee[X]===void 0&&(ee[X]=re[X]);return $(z,me,void 0,void 0,null,ee)},se.createRef=function(){return{current:null}},se.forwardRef=function(z){return{$$typeof:v,render:z}},se.isValidElement=oe,se.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:Q}},se.memo=function(z,P){return{$$typeof:g,type:z,compare:P===void 0?null:P}},se.startTransition=function(z){var P=N.T,Z={};N.T=Z;try{var X=z(),ee=N.S;ee!==null&&ee(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ce,ne)}catch(me){ne(me)}finally{N.T=P}},se.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},se.use=function(z){return N.H.use(z)},se.useActionState=function(z,P,Z){return N.H.useActionState(z,P,Z)},se.useCallback=function(z,P){return N.H.useCallback(z,P)},se.useContext=function(z){return N.H.useContext(z)},se.useDebugValue=function(){},se.useDeferredValue=function(z,P){return N.H.useDeferredValue(z,P)},se.useEffect=function(z,P,Z){var X=N.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(z,P)},se.useId=function(){return N.H.useId()},se.useImperativeHandle=function(z,P,Z){return N.H.useImperativeHandle(z,P,Z)},se.useInsertionEffect=function(z,P){return N.H.useInsertionEffect(z,P)},se.useLayoutEffect=function(z,P){return N.H.useLayoutEffect(z,P)},se.useMemo=function(z,P){return N.H.useMemo(z,P)},se.useOptimistic=function(z,P){return N.H.useOptimistic(z,P)},se.useReducer=function(z,P,Z){return N.H.useReducer(z,P,Z)},se.useRef=function(z){return N.H.useRef(z)},se.useState=function(z){return N.H.useState(z)},se.useSyncExternalStore=function(z,P,Z){return N.H.useSyncExternalStore(z,P,Z)},se.useTransition=function(){return N.H.useTransition()},se.version="19.1.0",se}var d0;function Xd(){return d0||(d0=1,Du.exports=lv()),Du.exports}var C=Xd();const ze=iv(C);var Ou={exports:{}},il={},Nu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function sv(){return f0||(f0=1,function(i){function s(O,Q){var ne=O.length;O.push(Q);e:for(;0<ne;){var ce=ne-1>>>1,z=O[ce];if(0<d(z,Q))O[ce]=Q,O[ne]=z,ne=ce;else break e}}function u(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var Q=O[0],ne=O.pop();if(ne!==Q){O[0]=ne;e:for(var ce=0,z=O.length,P=z>>>1;ce<P;){var Z=2*(ce+1)-1,X=O[Z],ee=Z+1,me=O[ee];if(0>d(X,ne))ee<z&&0>d(me,X)?(O[ce]=me,O[ee]=ne,ce=ee):(O[ce]=X,O[Z]=ne,ce=Z);else if(ee<z&&0>d(me,ne))O[ce]=me,O[ee]=ne,ce=ee;else break e}}return Q}function d(O,Q){var ne=O.sortIndex-Q.sortIndex;return ne!==0?ne:O.id-Q.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var x=Date,v=x.now();i.unstable_now=function(){return x.now()-v}}var p=[],g=[],y=1,j=null,w=3,D=!1,R=!1,H=!1,G=!1,U=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function q(O){for(var Q=u(g);Q!==null;){if(Q.callback===null)o(g);else if(Q.startTime<=O)o(g),Q.sortIndex=Q.expirationTime,s(p,Q);else break;Q=u(g)}}function N(O){if(H=!1,q(O),!R)if(u(p)!==null)R=!0,W||(W=!0,ye());else{var Q=u(g);Q!==null&&ke(N,Q.startTime-O)}}var W=!1,$=-1,he=5,oe=-1;function Me(){return G?!0:!(i.unstable_now()-oe<he)}function J(){if(G=!1,W){var O=i.unstable_now();oe=O;var Q=!0;try{e:{R=!1,H&&(H=!1,K($),$=-1),D=!0;var ne=w;try{t:{for(q(O),j=u(p);j!==null&&!(j.expirationTime>O&&Me());){var ce=j.callback;if(typeof ce=="function"){j.callback=null,w=j.priorityLevel;var z=ce(j.expirationTime<=O);if(O=i.unstable_now(),typeof z=="function"){j.callback=z,q(O),Q=!0;break t}j===u(p)&&o(p),q(O)}else o(p);j=u(p)}if(j!==null)Q=!0;else{var P=u(g);P!==null&&ke(N,P.startTime-O),Q=!1}}break e}finally{j=null,w=ne,D=!1}Q=void 0}}finally{Q?ye():W=!1}}}var ye;if(typeof A=="function")ye=function(){A(J)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,at=pt.port2;pt.port1.onmessage=J,ye=function(){at.postMessage(null)}}else ye=function(){U(J,0)};function ke(O,Q){$=U(function(){O(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(O){switch(w){case 1:case 2:case 3:var Q=3;break;default:Q=w}var ne=w;w=Q;try{return O()}finally{w=ne}},i.unstable_requestPaint=function(){G=!0},i.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ne=w;w=O;try{return Q()}finally{w=ne}},i.unstable_scheduleCallback=function(O,Q,ne){var ce=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ce+ne:ce):ne=ce,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ne+z,O={id:y++,callback:Q,priorityLevel:O,startTime:ne,expirationTime:z,sortIndex:-1},ne>ce?(O.sortIndex=ne,s(g,O),u(p)===null&&O===u(g)&&(H?(K($),$=-1):H=!0,ke(N,ne-ce))):(O.sortIndex=z,s(p,O),R||D||(R=!0,W||(W=!0,ye()))),O},i.unstable_shouldYield=Me,i.unstable_wrapCallback=function(O){var Q=w;return function(){var ne=w;w=Q;try{return O.apply(this,arguments)}finally{w=ne}}}}(Lu)),Lu}var h0;function ov(){return h0||(h0=1,Nu.exports=sv()),Nu.exports}var Hu={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function cv(){if(m0)return ft;m0=1;var i=Xd();function s(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(p,g,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:p,containerInfo:g,implementation:y}}var x=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ft.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return h(p,g,null,y)},ft.flushSync=function(p){var g=x.T,y=o.p;try{if(x.T=null,o.p=2,p)return p()}finally{x.T=g,o.p=y,o.d.f()}},ft.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(p,g))},ft.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},ft.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,j=v(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?o.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:w,fetchPriority:D}):y==="script"&&o.d.X(p,{crossOrigin:j,integrity:w,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ft.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=v(g.as,g.crossOrigin);o.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(p)},ft.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,j=v(y,g.crossOrigin);o.d.L(p,y,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ft.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=v(g.as,g.crossOrigin);o.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(p)},ft.requestFormReset=function(p){o.d.r(p)},ft.unstable_batchedUpdates=function(p,g){return p(g)},ft.useFormState=function(p,g,y){return x.H.useFormState(p,g,y)},ft.useFormStatus=function(){return x.H.useHostTransitionStatus()},ft.version="19.1.0",ft}var g0;function uv(){if(g0)return Hu.exports;g0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Hu.exports=cv(),Hu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function dv(){if(p0)return il;p0=1;var i=ov(),s=Xd(),u=uv();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===n)return v(l),e;if(c===r)return v(l),t;c=c.sibling}throw Error(o(188))}if(n.return!==r.return)n=l,r=c;else{for(var m=!1,b=l.child;b;){if(b===n){m=!0,n=l,r=c;break}if(b===r){m=!0,r=l,n=c;break}b=b.sibling}if(!m){for(b=c.child;b;){if(b===n){m=!0,n=c,r=l;break}if(b===r){m=!0,r=c,n=l;break}b=b.sibling}if(!m)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,j=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),A=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),Me=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case G:return"Profiler";case H:return"StrictMode";case N:return"Suspense";case W:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case A:return(e.displayName||"Context")+".Provider";case K:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var ke=Array.isArray,O=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ce=[],z=-1;function P(e){return{current:e}}function Z(e){0>z||(e.current=ce[z],ce[z]=null,z--)}function X(e,t){z++,ce[z]=e.current,e.current=t}var ee=P(null),me=P(null),re=P(null),We=P(null);function Se(e,t){switch(X(re,t),X(me,e),X(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ng(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ng(t),e=Lg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ee),X(ee,e)}function ct(){Z(ee),Z(me),Z(re)}function vi(e){e.memoizedState!==null&&X(We,e);var t=ee.current,n=Lg(t,e.type);t!==n&&(X(me,e),X(ee,n))}function vn(e){me.current===e&&(Z(ee),Z(me)),We.current===e&&(Z(We),Wa._currentValue=ne)}var Ut=Object.prototype.hasOwnProperty,vo=i.unstable_scheduleCallback,jo=i.unstable_cancelCallback,Ob=i.unstable_shouldYield,Nb=i.unstable_requestPaint,cn=i.unstable_now,Lb=i.unstable_getCurrentPriorityLevel,pf=i.unstable_ImmediatePriority,xf=i.unstable_UserBlockingPriority,xl=i.unstable_NormalPriority,Hb=i.unstable_LowPriority,bf=i.unstable_IdlePriority,Ub=i.log,Gb=i.unstable_setDisableYieldValue,aa=null,_t=null;function Yn(e){if(typeof Ub=="function"&&Gb(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(aa,e)}catch{}}var kt=Math.clz32?Math.clz32:Yb,$b=Math.log,Vb=Math.LN2;function Yb(e){return e>>>=0,e===0?32:31-($b(e)/Vb|0)|0}var bl=256,yl=4194304;function ji(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vl(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var l=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~c,r!==0?l=ji(r):(m&=b,m!==0?l=ji(m):n||(n=b&~e,n!==0&&(l=ji(n))))):(b=r&~c,b!==0?l=ji(b):m!==0?l=ji(m):n||(n=r&~e,n!==0&&(l=ji(n)))),l===0?0:t!==0&&t!==l&&(t&c)===0&&(c=l&-l,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:l}function la(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(){var e=bl;return bl<<=1,(bl&4194048)===0&&(bl=256),e}function vf(){var e=yl;return yl<<=1,(yl&62914560)===0&&(yl=4194304),e}function So(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qb(e,t,n,r,l,c){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,S=e.expirationTimes,T=e.hiddenUpdates;for(n=m&~n;0<n;){var L=31-kt(n),Y=1<<L;b[L]=0,S[L]=-1;var M=T[L];if(M!==null)for(T[L]=null,L=0;L<M.length;L++){var B=M[L];B!==null&&(B.lane&=-536870913)}n&=~Y}r!==0&&jf(e,r,0),c!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function jf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-kt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function Sf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}function wo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wf(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:n0(e.type))}function Kb(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Pn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Pn,xt="__reactProps$"+Pn,Qi="__reactContainer$"+Pn,Eo="__reactEvents$"+Pn,Qb="__reactListeners$"+Pn,Zb="__reactHandles$"+Pn,zf="__reactResources$"+Pn,oa="__reactMarker$"+Pn;function _o(e){delete e[ut],delete e[xt],delete e[Eo],delete e[Qb],delete e[Zb]}function Zi(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qi]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$g(e);e!==null;){if(n=e[ut])return n;e=$g(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){if(e=e[ut]||e[Qi]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ca(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ji(e){var t=e[zf];return t||(t=e[zf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[oa]=!0}var Ef=new Set,_f={};function Si(e,t){Wi(e,t),Wi(e+"Capture",t)}function Wi(e,t){for(_f[e]=t,e=0;e<t.length;e++)Ef.add(t[e])}var Xb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kf={},Af={};function Jb(e){return Ut.call(Af,e)?!0:Ut.call(kf,e)?!1:Xb.test(e)?Af[e]=!0:(kf[e]=!0,!1)}function jl(e,t,n){if(Jb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Sl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function jn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var ko,Tf;function Fi(e){if(ko===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ko=t&&t[1]||"",Tf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ko+e+Tf}var Ao=!1;function To(e,t){if(!e||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var M=B}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(B){M=B}e.call(Y.prototype)}}else{try{throw Error()}catch(B){M=B}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&M&&typeof B.stack=="string")return[B.stack,M.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],b=c[1];if(m&&b){var S=m.split(`
`),T=b.split(`
`);for(l=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(r===S.length||l===T.length)for(r=S.length-1,l=T.length-1;1<=r&&0<=l&&S[r]!==T[l];)l--;for(;1<=r&&0<=l;r--,l--)if(S[r]!==T[l]){if(r!==1||l!==1)do if(r--,l--,0>l||S[r]!==T[l]){var L=`
`+S[r].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=r&&0<=l);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Fi(n):""}function Wb(e){switch(e.tag){case 26:case 27:case 5:return Fi(e.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 15:return To(e.type,!1);case 11:return To(e.type.render,!1);case 1:return To(e.type,!0);case 31:return Fi("Activity");default:return""}}function Cf(e){try{var t="";do t+=Wb(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fb(e){var t=Rf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){r=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wl(e){e._valueTracker||(e._valueTracker=Fb(e))}function Mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ib=/[\n"\\]/g;function $t(e){return e.replace(Ib,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Co(e,t,n,r,l,c,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Ro(e,m,Gt(t)):n!=null?Ro(e,m,Gt(n)):r!=null&&e.removeAttribute("value"),l==null&&c!=null&&(e.defaultChecked=!!c),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gt(b):e.removeAttribute("name")}function Bf(e,t,n,r,l,c,m,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function Ro(e,t,n){t==="number"&&zl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ii(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Df(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function Of(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(o(92));if(ke(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var e1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nf(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||e1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Lf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in t)r=t[l],t.hasOwnProperty(l)&&n[l]!==r&&Nf(e,l,r)}else for(var c in t)t.hasOwnProperty(c)&&Nf(e,c,t[c])}function Mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return n1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bo=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,nr=null;function Hf(e){var t=Xi(e);if(t&&(e=t.stateNode)){var n=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Co(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=r[xt]||null;if(!l)throw Error(o(90));Co(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Mf(r)}break e;case"textarea":Df(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}}}var Oo=!1;function Uf(e,t,n){if(Oo)return e(t,n);Oo=!0;try{var r=e(t);return r}finally{if(Oo=!1,(tr!==null||nr!==null)&&(us(),tr&&(t=tr,e=nr,nr=tr=null,Hf(t),e)))for(t=0;t<e.length;t++)Hf(e[t])}}function ua(e,t){var n=e.stateNode;if(n===null)return null;var r=n[xt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=!1;if(Sn)try{var da={};Object.defineProperty(da,"passive",{get:function(){No=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{No=!1}var qn=null,Lo=null,_l=null;function Gf(){if(_l)return _l;var e,t=Lo,n=t.length,r,l="value"in qn?qn.value:qn.textContent,c=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===l[c-r];r++);return _l=l.slice(e,1<r?1-r:void 0)}function kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Al(){return!0}function $f(){return!1}function bt(e){function t(n,r,l,c,m){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Al:$f,this.isPropagationStopped=$f,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),t}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=bt(wi),fa=y({},wi,{view:0,detail:0}),i1=bt(fa),Ho,Uo,ha,Cl=y({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(Ho=e.screenX-ha.screenX,Uo=e.screenY-ha.screenY):Uo=Ho=0,ha=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),Vf=bt(Cl),r1=y({},Cl,{dataTransfer:0}),a1=bt(r1),l1=y({},fa,{relatedTarget:0}),Go=bt(l1),s1=y({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),o1=bt(s1),c1=y({},wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u1=bt(c1),d1=y({},wi,{data:0}),Yf=bt(d1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m1[e])?!!t[e]:!1}function $o(){return g1}var p1=y({},fa,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(e){return e.type==="keypress"?kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),x1=bt(p1),b1=y({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=bt(b1),y1=y({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),v1=bt(y1),j1=y({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),S1=bt(j1),w1=y({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z1=bt(w1),E1=y({},wi,{newState:0,oldState:0}),_1=bt(E1),k1=[9,13,27,32],Vo=Sn&&"CompositionEvent"in window,ma=null;Sn&&"documentMode"in document&&(ma=document.documentMode);var A1=Sn&&"TextEvent"in window&&!ma,qf=Sn&&(!Vo||ma&&8<ma&&11>=ma),Kf=" ",Qf=!1;function Zf(e,t){switch(e){case"keyup":return k1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function T1(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(Qf=!0,Kf);case"textInput":return e=t.data,e===Kf&&Qf?null:e;default:return null}}function C1(e,t){if(ir)return e==="compositionend"||!Vo&&Zf(e,t)?(e=Gf(),_l=Lo=qn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qf&&t.locale!=="ko"?null:t.data;default:return null}}var R1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!R1[e.type]:t==="textarea"}function Wf(e,t,n,r){tr?nr?nr.push(r):nr=[r]:tr=r,t=ps(t,"onChange"),0<t.length&&(n=new Tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ga=null,pa=null;function M1(e){Rg(e,0)}function Rl(e){var t=ca(e);if(Mf(t))return e}function Ff(e,t){if(e==="change")return t}var If=!1;if(Sn){var Yo;if(Sn){var Po="oninput"in document;if(!Po){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Po=typeof eh.oninput=="function"}Yo=Po}else Yo=!1;If=Yo&&(!document.documentMode||9<document.documentMode)}function th(){ga&&(ga.detachEvent("onpropertychange",nh),pa=ga=null)}function nh(e){if(e.propertyName==="value"&&Rl(pa)){var t=[];Wf(t,pa,e,Do(e)),Uf(M1,t)}}function B1(e,t,n){e==="focusin"?(th(),ga=t,pa=n,ga.attachEvent("onpropertychange",nh)):e==="focusout"&&th()}function D1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(pa)}function O1(e,t){if(e==="click")return Rl(t)}function N1(e,t){if(e==="input"||e==="change")return Rl(t)}function L1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:L1;function xa(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ut.call(t,l)||!At(e[l],t[l]))return!1}return!0}function ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rh(e,t){var n=ih(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ih(n)}}function ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zl(e.document)}return t}function qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var H1=Sn&&"documentMode"in document&&11>=document.documentMode,rr=null,Ko=null,ba=null,Qo=!1;function sh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||rr==null||rr!==zl(r)||(r=rr,"selectionStart"in r&&qo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ba&&xa(ba,r)||(ba=r,r=ps(Ko,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function zi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionrun:zi("Transition","TransitionRun"),transitionstart:zi("Transition","TransitionStart"),transitioncancel:zi("Transition","TransitionCancel"),transitionend:zi("Transition","TransitionEnd")},Zo={},oh={};Sn&&(oh=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Ei(e){if(Zo[e])return Zo[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oh)return Zo[e]=t[n];return e}var ch=Ei("animationend"),uh=Ei("animationiteration"),dh=Ei("animationstart"),U1=Ei("transitionrun"),G1=Ei("transitionstart"),$1=Ei("transitioncancel"),fh=Ei("transitionend"),hh=new Map,Xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xo.push("scrollEnd");function nn(e,t){hh.set(e,t),Si(t,[e])}var mh=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var n=mh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Cf(t)},mh.set(e,t),t)}return{value:e,source:t,stack:Cf(t)}}var Yt=[],lr=0,Jo=0;function Ml(){for(var e=lr,t=Jo=lr=0;t<e;){var n=Yt[t];Yt[t++]=null;var r=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var c=Yt[t];if(Yt[t++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}c!==0&&gh(n,l,c)}}function Bl(e,t,n,r){Yt[lr++]=e,Yt[lr++]=t,Yt[lr++]=n,Yt[lr++]=r,Jo|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Wo(e,t,n,r){return Bl(e,t,n,r),Dl(e)}function sr(e,t){return Bl(e,null,null,t),Dl(e)}function gh(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var l=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(l=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,l&&t!==null&&(l=31-kt(n),e=c.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=n|536870912),c):null}function Dl(e){if(50<Ya)throw Ya=0,iu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var or={};function V1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new V1(e,t,n,r)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ph(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ol(e,t,n,r,l,c){var m=0;if(r=e,typeof e=="function")Fo(e)&&(m=1);else if(typeof e=="string")m=Py(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=Tt(31,n,t,l),e.elementType=oe,e.lanes=c,e;case R:return _i(n.children,l,c,t);case H:m=8,l|=24;break;case G:return e=Tt(12,n,t,l|2),e.elementType=G,e.lanes=c,e;case N:return e=Tt(13,n,t,l),e.elementType=N,e.lanes=c,e;case W:return e=Tt(19,n,t,l),e.elementType=W,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case A:m=10;break e;case K:m=9;break e;case q:m=11;break e;case $:m=14;break e;case he:m=16,r=null;break e}m=29,n=Error(o(130,e===null?"null":typeof e,"")),r=null}return t=Tt(m,n,t,l),t.elementType=e,t.type=r,t.lanes=c,t}function _i(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Io(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function ec(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cr=[],ur=0,Nl=null,Ll=0,Pt=[],qt=0,ki=null,zn=1,En="";function Ai(e,t){cr[ur++]=Ll,cr[ur++]=Nl,Nl=e,Ll=t}function xh(e,t,n){Pt[qt++]=zn,Pt[qt++]=En,Pt[qt++]=ki,ki=e;var r=zn;e=En;var l=32-kt(r)-1;r&=~(1<<l),n+=1;var c=32-kt(t)+l;if(30<c){var m=l-l%5;c=(r&(1<<m)-1).toString(32),r>>=m,l-=m,zn=1<<32-kt(t)+l|n<<l|r,En=c+e}else zn=1<<c|n<<l|r,En=e}function tc(e){e.return!==null&&(Ai(e,1),xh(e,1,0))}function nc(e){for(;e===Nl;)Nl=cr[--ur],cr[ur]=null,Ll=cr[--ur],cr[ur]=null;for(;e===ki;)ki=Pt[--qt],Pt[qt]=null,En=Pt[--qt],Pt[qt]=null,zn=Pt[--qt],Pt[qt]=null}var ht=null,Ge=null,je=!1,Ti=null,un=!1,ic=Error(o(519));function Ci(e){var t=Error(o(418,""));throw ja(Vt(t,e)),ic}function bh(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ut]=e,t[xt]=r,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<qa.length;n++)pe(qa[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),Bf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),wl(t);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),Of(t,r.value,r.defaultValue,r.children),wl(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||Og(t.textContent,n)?(r.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),r.onScroll!=null&&pe("scroll",t),r.onScrollEnd!=null&&pe("scrollend",t),r.onClick!=null&&(t.onclick=xs),t=!0):t=!1,t||Ci(e)}function yh(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 13:un=!1;return;case 27:case 3:un=!0;return;default:ht=ht.return}}function ya(e){if(e!==ht)return!1;if(!je)return yh(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||yu(e.type,e.memoizedProps)),n=!n),n&&Ge&&Ci(e),yh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ge=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ge=null}}else t===27?(t=Ge,si(e.type)?(e=wu,wu=null,Ge=e):Ge=t):Ge=ht?an(e.stateNode.nextSibling):null;return!0}function va(){Ge=ht=null,je=!1}function vh(){var e=Ti;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Ti=null),e}function ja(e){Ti===null?Ti=[e]:Ti.push(e)}var rc=P(null),Ri=null,_n=null;function Kn(e,t,n){X(rc,t._currentValue),t._currentValue=n}function kn(e){e._currentValue=rc.current,Z(rc)}function ac(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lc(e,t,n,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=l;for(var S=0;S<t.length;S++)if(b.context===t[S]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),ac(c.return,n,e),r||(m=null);break e}c=b.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(o(341));m.lanes|=n,c=m.alternate,c!==null&&(c.lanes|=n),ac(m,n,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Sa(e,t,n,r){e=null;for(var l=t,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var b=l.type;At(l.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(l===We.current){if(m=l.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Wa):e=[Wa])}l=l.return}e!==null&&lc(t,e,n,r),t.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Mi(e){Ri=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return jh(Ri,e)}function Ul(e,t){return Ri===null&&Mi(e),jh(e,t)}function jh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_n===null){if(e===null)throw Error(o(308));_n=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _n=_n.next=t;return n}var Y1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},P1=i.unstable_scheduleCallback,q1=i.unstable_NormalPriority,Ze={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sc(){return{controller:new Y1,data:new Map,refCount:0}}function wa(e){e.refCount--,e.refCount===0&&P1(q1,function(){e.controller.abort()})}var za=null,oc=0,dr=0,fr=null;function K1(e,t){if(za===null){var n=za=[];oc=0,dr=uu(),fr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return oc++,t.then(Sh,Sh),t}function Sh(){if(--oc===0&&za!==null){fr!==null&&(fr.status="fulfilled");var e=za;za=null,dr=0,fr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Q1(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var wh=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&K1(e,t),wh!==null&&wh(e,t)};var Bi=P(null);function cc(){var e=Bi.current;return e!==null?e:Be.pooledCache}function Gl(e,t){t===null?X(Bi,Bi.current):X(Bi,t.pool)}function zh(){var e=cc();return e===null?null:{parent:Ze._currentValue,pool:e}}var Ea=Error(o(460)),Eh=Error(o(474)),$l=Error(o(542)),uc={then:function(){}};function _h(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vl(){}function kh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vl,Vl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Th(e),e;default:if(typeof t.status=="string")t.then(Vl,Vl);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Th(e),e}throw _a=t,Ea}}var _a=null;function Ah(){if(_a===null)throw Error(o(459));var e=_a;return _a=null,e}function Th(e){if(e===Ea||e===$l)throw Error(o(483))}var Qn=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ee&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Dl(e),gh(e,null,n),t}return Bl(e,r,t,n),Dl(e)}function ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sf(e,n)}}function hc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?l=c=t:c=c.next=t}else l=c=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var mc=!1;function Aa(){if(mc){var e=fr;if(e!==null)throw e}}function Ta(e,t,n,r){mc=!1;var l=e.updateQueue;Qn=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var S=b,T=S.next;S.next=null,m===null?c=T:m.next=T,m=S;var L=e.alternate;L!==null&&(L=L.updateQueue,b=L.lastBaseUpdate,b!==m&&(b===null?L.firstBaseUpdate=T:b.next=T,L.lastBaseUpdate=S))}if(c!==null){var Y=l.baseState;m=0,L=T=S=null,b=c;do{var M=b.lane&-536870913,B=M!==b.lane;if(B?(be&M)===M:(r&M)===M){M!==0&&M===dr&&(mc=!0),L!==null&&(L=L.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var le=e,ie=b;M=t;var Ce=n;switch(ie.tag){case 1:if(le=ie.payload,typeof le=="function"){Y=le.call(Ce,Y,M);break e}Y=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ie.payload,M=typeof le=="function"?le.call(Ce,Y,M):le,M==null)break e;Y=y({},Y,M);break e;case 2:Qn=!0}}M=b.callback,M!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[M]:B.push(M))}else B={lane:M,tag:b.tag,payload:b.payload,callback:b.callback,next:null},L===null?(T=L=B,S=Y):L=L.next=B,m|=M;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;B=b,b=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);L===null&&(S=Y),l.baseState=S,l.firstBaseUpdate=T,l.lastBaseUpdate=L,c===null&&(l.shared.lanes=0),ii|=m,e.lanes=m,e.memoizedState=Y}}function Ch(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Rh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ch(n[e],t)}var hr=P(null),Yl=P(0);function Mh(e,t){e=Dn,X(Yl,e),X(hr,t),Dn=e|t.baseLanes}function gc(){X(Yl,Dn),X(hr,hr.current)}function pc(){Dn=Yl.current,Z(hr),Z(Yl)}var Jn=0,de=null,Ae=null,qe=null,Pl=!1,mr=!1,Di=!1,ql=0,Ca=0,gr=null,Z1=0;function Ye(){throw Error(o(321))}function xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function bc(e,t,n,r,l,c){return Jn=c,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?gm:pm,Di=!1,c=n(r,l),Di=!1,mr&&(c=Dh(t,n,r,l)),Bh(e),c}function Bh(e){O.H=Wl;var t=Ae!==null&&Ae.next!==null;if(Jn=0,qe=Ae=de=null,Pl=!1,Ca=0,gr=null,t)throw Error(o(300));e===null||Ie||(e=e.dependencies,e!==null&&Hl(e)&&(Ie=!0))}function Dh(e,t,n,r){de=e;var l=0;do{if(mr&&(gr=null),Ca=0,mr=!1,25<=l)throw Error(o(301));if(l+=1,qe=Ae=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}O.H=ty,c=t(n,r)}while(mr);return c}function X1(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Ra(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(de.flags|=1024),t}function yc(){var e=ql!==0;return ql=0,e}function vc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jc(e){if(Pl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pl=!1}Jn=0,qe=Ae=de=null,mr=!1,Ca=ql=0,gr=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?de.memoizedState=qe=e:qe=qe.next=e,qe}function Ke(){if(Ae===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=qe===null?de.memoizedState:qe.next;if(t!==null)qe=t,Ae=e;else{if(e===null)throw de.alternate===null?Error(o(467)):Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},qe===null?de.memoizedState=qe=e:qe=qe.next=e}return qe}function Sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ra(e){var t=Ca;return Ca+=1,gr===null&&(gr=[]),e=kh(gr,e,t),t=de,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?gm:pm),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ra(e);if(e.$$typeof===A)return dt(e)}throw Error(o(438,String(e)))}function wc(e){var t=null,n=de.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Sc(),de.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Me;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Ke();return zc(t,Ae,e)}function zc(e,t,n){var r=e.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var l=e.baseQueue,c=r.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}t.baseQueue=l=c,r.pending=null}if(c=e.baseState,l===null)e.memoizedState=c;else{t=l.next;var b=m=null,S=null,T=t,L=!1;do{var Y=T.lane&-536870913;if(Y!==T.lane?(be&Y)===Y:(Jn&Y)===Y){var M=T.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),Y===dr&&(L=!0);else if((Jn&M)===M){T=T.next,M===dr&&(L=!0);continue}else Y={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},S===null?(b=S=Y,m=c):S=S.next=Y,de.lanes|=M,ii|=M;Y=T.action,Di&&n(c,Y),c=T.hasEagerState?T.eagerState:n(c,Y)}else M={lane:Y,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},S===null?(b=S=M,m=c):S=S.next=M,de.lanes|=Y,ii|=Y;T=T.next}while(T!==null&&T!==t);if(S===null?m=c:S.next=b,!At(c,e.memoizedState)&&(Ie=!0,L&&(n=fr,n!==null)))throw n;e.memoizedState=c,e.baseState=m,e.baseQueue=S,r.lastRenderedState=c}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ec(e){var t=Ke(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,c=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do c=e(c,m.action),m=m.next;while(m!==l);At(c,t.memoizedState)||(Ie=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function Oh(e,t,n){var r=de,l=Ke(),c=je;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var m=!At((Ae||l).memoizedState,n);m&&(l.memoizedState=n,Ie=!0),l=l.queue;var b=Hh.bind(null,r,l,e);if(Ma(2048,8,b,[e]),l.getSnapshot!==t||m||qe!==null&&qe.memoizedState.tag&1){if(r.flags|=2048,pr(9,Zl(),Lh.bind(null,r,l,n,t),null),Be===null)throw Error(o(349));c||(Jn&124)!==0||Nh(r,t,n)}return n}function Nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t=Sc(),de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lh(e,t,n,r){t.value=n,t.getSnapshot=r,Uh(t)&&Gh(e)}function Hh(e,t,n){return n(function(){Uh(t)&&Gh(e)})}function Uh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Gh(e){var t=sr(e,2);t!==null&&Dt(t,e,2)}function _c(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),Di){Yn(!0);try{n()}finally{Yn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function $h(e,t,n,r){return e.baseState=n,zc(e,Ae,typeof r=="function"?r:An)}function J1(e,t,n,r,l){if(Jl(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};O.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Vh(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Vh(e,t){var n=t.action,r=t.payload,l=e.state;if(t.isTransition){var c=O.T,m={};O.T=m;try{var b=n(l,r),S=O.S;S!==null&&S(m,b),Yh(e,t,b)}catch(T){kc(e,t,T)}finally{O.T=c}}else try{c=n(l,r),Yh(e,t,c)}catch(T){kc(e,t,T)}}function Yh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Ph(e,t,r)},function(r){return kc(e,t,r)}):Ph(e,t,n)}function Ph(e,t,n){t.status="fulfilled",t.value=n,qh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vh(e,n)))}function kc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,qh(t),t=t.next;while(t!==r)}e.action=null}function qh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kh(e,t){return t}function Qh(e,t){if(je){var n=Be.formState;if(n!==null){e:{var r=de;if(je){if(Ge){t:{for(var l=Ge,c=un;l.nodeType!==8;){if(!c){l=null;break t}if(l=an(l.nextSibling),l===null){l=null;break t}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ge=an(l.nextSibling),r=l.data==="F!";break e}}Ci(r)}r=!1}r&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kh,lastRenderedState:t},n.queue=r,n=fm.bind(null,de,r),r.dispatch=n,r=_c(!1),c=Mc.bind(null,de,!1,r.queue),r=yt(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,n=J1.bind(null,de,l,c,n),l.dispatch=n,r.memoizedState=e,[t,n,!1]}function Zh(e){var t=Ke();return Xh(t,Ae,e)}function Xh(e,t,n){if(t=zc(e,t,Kh)[0],e=Ql(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Ra(t)}catch(m){throw m===Ea?$l:m}else r=t;t=Ke();var l=t.queue,c=l.dispatch;return n!==t.memoizedState&&(de.flags|=2048,pr(9,Zl(),W1.bind(null,l,n),null)),[r,c,e]}function W1(e,t){e.action=t}function Jh(e){var t=Ke(),n=Ae;if(n!==null)return Xh(t,n,e);Ke(),t=t.memoizedState,n=Ke();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function pr(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=de.updateQueue,t===null&&(t=Sc(),de.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zl(){return{destroy:void 0,resource:void 0}}function Wh(){return Ke().memoizedState}function Xl(e,t,n,r){var l=yt();r=r===void 0?null:r,de.flags|=e,l.memoizedState=pr(1|t,Zl(),n,r)}function Ma(e,t,n,r){var l=Ke();r=r===void 0?null:r;var c=l.memoizedState.inst;Ae!==null&&r!==null&&xc(r,Ae.memoizedState.deps)?l.memoizedState=pr(t,c,n,r):(de.flags|=e,l.memoizedState=pr(1|t,c,n,r))}function Fh(e,t){Xl(8390656,8,e,t)}function Ih(e,t){Ma(2048,8,e,t)}function em(e,t){return Ma(4,2,e,t)}function tm(e,t){return Ma(4,4,e,t)}function nm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function im(e,t,n){n=n!=null?n.concat([e]):null,Ma(4,4,nm.bind(null,t,e),n)}function Ac(){}function rm(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function am(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xc(t,r[1]))return r[0];if(r=e(),Di){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[r,t],r}function Tc(e,t,n){return n===void 0||(Jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=og(),de.lanes|=e,ii|=e,n)}function lm(e,t,n,r){return At(n,t)?n:hr.current!==null?(e=Tc(e,n,r),At(e,t)||(Ie=!0),e):(Jn&42)===0?(Ie=!0,e.memoizedState=n):(e=og(),de.lanes|=e,ii|=e,t)}function sm(e,t,n,r,l){var c=Q.p;Q.p=c!==0&&8>c?c:8;var m=O.T,b={};O.T=b,Mc(e,!1,t,n);try{var S=l(),T=O.S;if(T!==null&&T(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var L=Q1(S,r);Ba(e,t,L,Bt(e))}else Ba(e,t,r,Bt(e))}catch(Y){Ba(e,t,{then:function(){},status:"rejected",reason:Y},Bt())}finally{Q.p=c,O.T=m}}function F1(){}function Cc(e,t,n,r){if(e.tag!==5)throw Error(o(476));var l=om(e).queue;sm(e,l,t,ne,n===null?F1:function(){return cm(e),n(r)})}function om(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cm(e){var t=om(e).next.queue;Ba(e,t,{},Bt())}function Rc(){return dt(Wa)}function um(){return Ke().memoizedState}function dm(){return Ke().memoizedState}function I1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Bt();e=Zn(n);var r=Xn(t,e,n);r!==null&&(Dt(r,t,n),ka(r,t,n)),t={cache:sc()},e.payload=t;return}t=t.return}}function ey(e,t,n){var r=Bt();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Jl(e)?hm(t,n):(n=Wo(e,t,n,r),n!==null&&(Dt(n,e,r),mm(n,t,r)))}function fm(e,t,n){var r=Bt();Ba(e,t,n,r)}function Ba(e,t,n,r){var l={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))hm(t,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,b=c(m,n);if(l.hasEagerState=!0,l.eagerState=b,At(b,m))return Bl(e,t,l,0),Be===null&&Ml(),!1}catch{}finally{}if(n=Wo(e,t,l,r),n!==null)return Dt(n,e,r),mm(n,t,r),!0}return!1}function Mc(e,t,n,r){if(r={lane:2,revertLane:uu(),action:r,hasEagerState:!1,eagerState:null,next:null},Jl(e)){if(t)throw Error(o(479))}else t=Wo(e,n,r,2),t!==null&&Dt(t,e,2)}function Jl(e){var t=e.alternate;return e===de||t!==null&&t===de}function hm(e,t){mr=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mm(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sf(e,n)}}var Wl={readContext:dt,use:Kl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},gm={readContext:dt,use:Kl,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Fh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xl(4194308,4,nm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xl(4194308,4,e,t)},useInsertionEffect:function(e,t){Xl(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var r=e();if(Di){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=yt();if(n!==void 0){var l=n(t);if(Di){Yn(!0);try{n(t)}finally{Yn(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=ey.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=_c(e);var t=e.queue,n=fm.bind(null,de,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ac,useDeferredValue:function(e,t){var n=yt();return Tc(n,e,t)},useTransition:function(){var e=_c(!1);return e=sm.bind(null,de,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=de,l=yt();if(je){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Be===null)throw Error(o(349));(be&124)!==0||Nh(r,t,n)}l.memoizedState=n;var c={value:n,getSnapshot:t};return l.queue=c,Fh(Hh.bind(null,r,c,e),[e]),r.flags|=2048,pr(9,Zl(),Lh.bind(null,r,c,n,t),null),n},useId:function(){var e=yt(),t=Be.identifierPrefix;if(je){var n=En,r=zn;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=ql++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Z1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Rc,useFormState:Qh,useActionState:Qh,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Mc.bind(null,de,!0,n),n.dispatch=t,[e,t]},useMemoCache:wc,useCacheRefresh:function(){return yt().memoizedState=I1.bind(null,de)}},pm={readContext:dt,use:Kl,useCallback:rm,useContext:dt,useEffect:Ih,useImperativeHandle:im,useInsertionEffect:em,useLayoutEffect:tm,useMemo:am,useReducer:Ql,useRef:Wh,useState:function(){return Ql(An)},useDebugValue:Ac,useDeferredValue:function(e,t){var n=Ke();return lm(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Ql(An)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Ra(e),t]},useSyncExternalStore:Oh,useId:um,useHostTransitionStatus:Rc,useFormState:Zh,useActionState:Zh,useOptimistic:function(e,t){var n=Ke();return $h(n,Ae,e,t)},useMemoCache:wc,useCacheRefresh:dm},ty={readContext:dt,use:Kl,useCallback:rm,useContext:dt,useEffect:Ih,useImperativeHandle:im,useInsertionEffect:em,useLayoutEffect:tm,useMemo:am,useReducer:Ec,useRef:Wh,useState:function(){return Ec(An)},useDebugValue:Ac,useDeferredValue:function(e,t){var n=Ke();return Ae===null?Tc(n,e,t):lm(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Ec(An)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Ra(e),t]},useSyncExternalStore:Oh,useId:um,useHostTransitionStatus:Rc,useFormState:Jh,useActionState:Jh,useOptimistic:function(e,t){var n=Ke();return Ae!==null?$h(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wc,useCacheRefresh:dm},xr=null,Da=0;function Fl(e){var t=Da;return Da+=1,xr===null&&(xr=[]),kh(xr,e,t)}function Oa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Il(e,t){throw t.$$typeof===j?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xm(e){var t=e._init;return t(e._payload)}function bm(e){function t(_,E){if(e){var k=_.deletions;k===null?(_.deletions=[E],_.flags|=16):k.push(E)}}function n(_,E){if(!e)return null;for(;E!==null;)t(_,E),E=E.sibling;return null}function r(_){for(var E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function l(_,E){return _=wn(_,E),_.index=0,_.sibling=null,_}function c(_,E,k){return _.index=k,e?(k=_.alternate,k!==null?(k=k.index,k<E?(_.flags|=67108866,E):k):(_.flags|=67108866,E)):(_.flags|=1048576,E)}function m(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function b(_,E,k,V){return E===null||E.tag!==6?(E=Io(k,_.mode,V),E.return=_,E):(E=l(E,k),E.return=_,E)}function S(_,E,k,V){var F=k.type;return F===R?L(_,E,k.props.children,V,k.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===he&&xm(F)===E.type)?(E=l(E,k.props),Oa(E,k),E.return=_,E):(E=Ol(k.type,k.key,k.props,null,_.mode,V),Oa(E,k),E.return=_,E)}function T(_,E,k,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=ec(k,_.mode,V),E.return=_,E):(E=l(E,k.children||[]),E.return=_,E)}function L(_,E,k,V,F){return E===null||E.tag!==7?(E=_i(k,_.mode,V,F),E.return=_,E):(E=l(E,k),E.return=_,E)}function Y(_,E,k){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Io(""+E,_.mode,k),E.return=_,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return k=Ol(E.type,E.key,E.props,null,_.mode,k),Oa(k,E),k.return=_,k;case D:return E=ec(E,_.mode,k),E.return=_,E;case he:var V=E._init;return E=V(E._payload),Y(_,E,k)}if(ke(E)||ye(E))return E=_i(E,_.mode,k,null),E.return=_,E;if(typeof E.then=="function")return Y(_,Fl(E),k);if(E.$$typeof===A)return Y(_,Ul(_,E),k);Il(_,E)}return null}function M(_,E,k,V){var F=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return F!==null?null:b(_,E,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case w:return k.key===F?S(_,E,k,V):null;case D:return k.key===F?T(_,E,k,V):null;case he:return F=k._init,k=F(k._payload),M(_,E,k,V)}if(ke(k)||ye(k))return F!==null?null:L(_,E,k,V,null);if(typeof k.then=="function")return M(_,E,Fl(k),V);if(k.$$typeof===A)return M(_,E,Ul(_,k),V);Il(_,k)}return null}function B(_,E,k,V,F){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return _=_.get(k)||null,b(E,_,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return _=_.get(V.key===null?k:V.key)||null,S(E,_,V,F);case D:return _=_.get(V.key===null?k:V.key)||null,T(E,_,V,F);case he:var fe=V._init;return V=fe(V._payload),B(_,E,k,V,F)}if(ke(V)||ye(V))return _=_.get(k)||null,L(E,_,V,F,null);if(typeof V.then=="function")return B(_,E,k,Fl(V),F);if(V.$$typeof===A)return B(_,E,k,Ul(E,V),F);Il(E,V)}return null}function le(_,E,k,V){for(var F=null,fe=null,te=E,ae=E=0,tt=null;te!==null&&ae<k.length;ae++){te.index>ae?(tt=te,te=null):tt=te.sibling;var ve=M(_,te,k[ae],V);if(ve===null){te===null&&(te=tt);break}e&&te&&ve.alternate===null&&t(_,te),E=c(ve,E,ae),fe===null?F=ve:fe.sibling=ve,fe=ve,te=tt}if(ae===k.length)return n(_,te),je&&Ai(_,ae),F;if(te===null){for(;ae<k.length;ae++)te=Y(_,k[ae],V),te!==null&&(E=c(te,E,ae),fe===null?F=te:fe.sibling=te,fe=te);return je&&Ai(_,ae),F}for(te=r(te);ae<k.length;ae++)tt=B(te,_,ae,k[ae],V),tt!==null&&(e&&tt.alternate!==null&&te.delete(tt.key===null?ae:tt.key),E=c(tt,E,ae),fe===null?F=tt:fe.sibling=tt,fe=tt);return e&&te.forEach(function(fi){return t(_,fi)}),je&&Ai(_,ae),F}function ie(_,E,k,V){if(k==null)throw Error(o(151));for(var F=null,fe=null,te=E,ae=E=0,tt=null,ve=k.next();te!==null&&!ve.done;ae++,ve=k.next()){te.index>ae?(tt=te,te=null):tt=te.sibling;var fi=M(_,te,ve.value,V);if(fi===null){te===null&&(te=tt);break}e&&te&&fi.alternate===null&&t(_,te),E=c(fi,E,ae),fe===null?F=fi:fe.sibling=fi,fe=fi,te=tt}if(ve.done)return n(_,te),je&&Ai(_,ae),F;if(te===null){for(;!ve.done;ae++,ve=k.next())ve=Y(_,ve.value,V),ve!==null&&(E=c(ve,E,ae),fe===null?F=ve:fe.sibling=ve,fe=ve);return je&&Ai(_,ae),F}for(te=r(te);!ve.done;ae++,ve=k.next())ve=B(te,_,ae,ve.value,V),ve!==null&&(e&&ve.alternate!==null&&te.delete(ve.key===null?ae:ve.key),E=c(ve,E,ae),fe===null?F=ve:fe.sibling=ve,fe=ve);return e&&te.forEach(function(nv){return t(_,nv)}),je&&Ai(_,ae),F}function Ce(_,E,k,V){if(typeof k=="object"&&k!==null&&k.type===R&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case w:e:{for(var F=k.key;E!==null;){if(E.key===F){if(F=k.type,F===R){if(E.tag===7){n(_,E.sibling),V=l(E,k.props.children),V.return=_,_=V;break e}}else if(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===he&&xm(F)===E.type){n(_,E.sibling),V=l(E,k.props),Oa(V,k),V.return=_,_=V;break e}n(_,E);break}else t(_,E);E=E.sibling}k.type===R?(V=_i(k.props.children,_.mode,V,k.key),V.return=_,_=V):(V=Ol(k.type,k.key,k.props,null,_.mode,V),Oa(V,k),V.return=_,_=V)}return m(_);case D:e:{for(F=k.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){n(_,E.sibling),V=l(E,k.children||[]),V.return=_,_=V;break e}else{n(_,E);break}else t(_,E);E=E.sibling}V=ec(k,_.mode,V),V.return=_,_=V}return m(_);case he:return F=k._init,k=F(k._payload),Ce(_,E,k,V)}if(ke(k))return le(_,E,k,V);if(ye(k)){if(F=ye(k),typeof F!="function")throw Error(o(150));return k=F.call(k),ie(_,E,k,V)}if(typeof k.then=="function")return Ce(_,E,Fl(k),V);if(k.$$typeof===A)return Ce(_,E,Ul(_,k),V);Il(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,E!==null&&E.tag===6?(n(_,E.sibling),V=l(E,k),V.return=_,_=V):(n(_,E),V=Io(k,_.mode,V),V.return=_,_=V),m(_)):n(_,E)}return function(_,E,k,V){try{Da=0;var F=Ce(_,E,k,V);return xr=null,F}catch(te){if(te===Ea||te===$l)throw te;var fe=Tt(29,te,null,_.mode);return fe.lanes=V,fe.return=_,fe}finally{}}}var br=bm(!0),ym=bm(!1),Kt=P(null),dn=null;function Wn(e){var t=e.alternate;X(Xe,Xe.current&1),X(Kt,e),dn===null&&(t===null||hr.current!==null||t.memoizedState!==null)&&(dn=e)}function vm(e){if(e.tag===22){if(X(Xe,Xe.current),X(Kt,e),dn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(dn=e)}}else Fn()}function Fn(){X(Xe,Xe.current),X(Kt,Kt.current)}function Tn(e){Z(Kt),dn===e&&(dn=null),Z(Xe)}var Xe=P(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Su(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Bt(),l=Zn(r);l.payload=t,n!=null&&(l.callback=n),t=Xn(e,l,r),t!==null&&(Dt(t,e,r),ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Bt(),l=Zn(r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Xn(e,l,r),t!==null&&(Dt(t,e,r),ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bt(),r=Zn(n);r.tag=2,t!=null&&(r.callback=t),t=Xn(e,r,n),t!==null&&(Dt(t,e,n),ka(t,e,n))}};function jm(e,t,n,r,l,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,m):t.prototype&&t.prototype.isPureReactComponent?!xa(n,r)||!xa(l,c):!0}function Sm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function Oi(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wm(e){ts(e)}function zm(e){console.error(e)}function Em(e){ts(e)}function ns(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function _m(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Oc(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){ns(e,t)},n}function km(e){return e=Zn(e),e.tag=3,e}function Am(e,t,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;e.payload=function(){return l(c)},e.callback=function(){_m(t,n,r)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){_m(t,n,r),typeof l!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function ny(e,t,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Sa(t,n,l,!0),n=Kt.current,n!==null){switch(n.tag){case 13:return dn===null?au():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===uc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),su(e,r,l)),!1;case 22:return n.flags|=65536,r===uc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),su(e,r,l)),!1}throw Error(o(435,n.tag))}return su(e,r,l),au(),!1}if(je)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==ic&&(e=Error(o(422),{cause:r}),ja(Vt(e,n)))):(r!==ic&&(t=Error(o(423),{cause:r}),ja(Vt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=Vt(r,n),l=Oc(e.stateNode,r,l),hc(e,l),$e!==4&&($e=2)),!1;var c=Error(o(520),{cause:r});if(c=Vt(c,n),Va===null?Va=[c]:Va.push(c),$e!==4&&($e=2),t===null)return!0;r=Vt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Oc(n.stateNode,r,e),hc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))))return n.flags|=65536,l&=-l,n.lanes|=l,l=km(l),Am(l,e,n,r),hc(n,l),!1}n=n.return}while(n!==null);return!1}var Tm=Error(o(461)),Ie=!1;function lt(e,t,n,r){t.child=e===null?ym(t,null,n,r):br(t,e.child,n,r)}function Cm(e,t,n,r,l){n=n.render;var c=t.ref;if("ref"in r){var m={};for(var b in r)b!=="ref"&&(m[b]=r[b])}else m=r;return Mi(t),r=bc(e,t,n,m,c,l),b=yc(),e!==null&&!Ie?(vc(e,t,l),Cn(e,t,l)):(je&&b&&tc(t),t.flags|=1,lt(e,t,r,l),t.child)}function Rm(e,t,n,r,l){if(e===null){var c=n.type;return typeof c=="function"&&!Fo(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Mm(e,t,c,r,l)):(e=Ol(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Yc(e,l)){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(m,r)&&e.ref===t.ref)return Cn(e,t,l)}return t.flags|=1,e=wn(c,r),e.ref=t.ref,e.return=t,t.child=e}function Mm(e,t,n,r,l){if(e!==null){var c=e.memoizedProps;if(xa(c,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=c,Yc(e,l))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,Cn(e,t,l)}return Nc(e,t,n,r,l)}function Bm(e,t,n){var r=t.pendingProps,l=r.children,c=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=c!==null?c.baseLanes|n:n,e!==null){for(l=t.child=e.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;t.childLanes=c&~r}else t.childLanes=0,t.child=null;return Dm(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(t,c!==null?c.cachePool:null),c!==null?Mh(t,c):gc(),vm(t);else return t.lanes=t.childLanes=536870912,Dm(e,t,c!==null?c.baseLanes|n:n,n)}else c!==null?(Gl(t,c.cachePool),Mh(t,c),Fn(),t.memoizedState=null):(e!==null&&Gl(t,null),gc(),Fn());return lt(e,t,l,n),t.child}function Dm(e,t,n,r){var l=cc();return l=l===null?null:{parent:Ze._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Gl(t,null),gc(),vm(t),e!==null&&Sa(e,t,r,!0),null}function is(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nc(e,t,n,r,l){return Mi(t),n=bc(e,t,n,r,void 0,l),r=yc(),e!==null&&!Ie?(vc(e,t,l),Cn(e,t,l)):(je&&r&&tc(t),t.flags|=1,lt(e,t,n,l),t.child)}function Om(e,t,n,r,l,c){return Mi(t),t.updateQueue=null,n=Dh(t,r,n,l),Bh(e),r=yc(),e!==null&&!Ie?(vc(e,t,c),Cn(e,t,c)):(je&&r&&tc(t),t.flags|=1,lt(e,t,n,c),t.child)}function Nm(e,t,n,r,l){if(Mi(t),t.stateNode===null){var c=or,m=n.contextType;typeof m=="object"&&m!==null&&(c=dt(m)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Dc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},dc(t),m=n.contextType,c.context=typeof m=="object"&&m!==null?dt(m):or,c.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Bc(t,n,m,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Dc.enqueueReplaceState(c,c.state,null),Ta(t,r,c,l),Aa(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,S=Oi(n,b);c.props=S;var T=c.context,L=n.contextType;m=or,typeof L=="object"&&L!==null&&(m=dt(L));var Y=n.getDerivedStateFromProps;L=typeof Y=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||T!==m)&&Sm(t,c,r,m),Qn=!1;var M=t.memoizedState;c.state=M,Ta(t,r,c,l),Aa(),T=t.memoizedState,b||M!==T||Qn?(typeof Y=="function"&&(Bc(t,n,Y,r),T=t.memoizedState),(S=Qn||jm(t,n,S,r,M,T,m))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=T),c.props=r,c.state=T,c.context=m,r=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,fc(e,t),m=t.memoizedProps,L=Oi(n,m),c.props=L,Y=t.pendingProps,M=c.context,T=n.contextType,S=or,typeof T=="object"&&T!==null&&(S=dt(T)),b=n.getDerivedStateFromProps,(T=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==Y||M!==S)&&Sm(t,c,r,S),Qn=!1,M=t.memoizedState,c.state=M,Ta(t,r,c,l),Aa();var B=t.memoizedState;m!==Y||M!==B||Qn||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof b=="function"&&(Bc(t,n,b,r),B=t.memoizedState),(L=Qn||jm(t,n,L,r,M,B,S)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(T||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,B,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,B,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),c.props=r,c.state=B,c.context=S,r=L):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,is(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=br(t,e.child,null,l),t.child=br(t,null,n,l)):lt(e,t,n,l),t.memoizedState=c.state,e=t.child):e=Cn(e,t,l),e}function Lm(e,t,n,r){return va(),t.flags|=256,lt(e,t,n,r),t.child}var Lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:zh()}}function Uc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function Hm(e,t,n){var r=t.pendingProps,l=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(l?Wn(t):Fn(),je){var b=Ge,S;if(S=b){e:{for(S=b,b=un;S.nodeType!==8;){if(!b){b=null;break e}if(S=an(S.nextSibling),S===null){b=null;break e}}b=S}b!==null?(t.memoizedState={dehydrated:b,treeContext:ki!==null?{id:zn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},S=Tt(18,null,null,0),S.stateNode=b,S.return=t,t.child=S,ht=t,Ge=null,S=!0):S=!1}S||Ci(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Su(b)?t.lanes=32:t.lanes=536870912,null;Tn(t)}return b=r.children,r=r.fallback,l?(Fn(),l=t.mode,b=rs({mode:"hidden",children:b},l),r=_i(r,l,n,null),b.return=t,r.return=t,b.sibling=r,t.child=b,l=t.child,l.memoizedState=Hc(n),l.childLanes=Uc(e,m,n),t.memoizedState=Lc,r):(Wn(t),Gc(t,b))}if(S=e.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(c)t.flags&256?(Wn(t),t.flags&=-257,t=$c(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),l=r.fallback,b=t.mode,r=rs({mode:"visible",children:r.children},b),l=_i(l,b,n,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,br(t,e.child,null,n),r=t.child,r.memoizedState=Hc(n),r.childLanes=Uc(e,m,n),t.memoizedState=Lc,t=l);else if(Wn(t),Su(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var T=m.dgst;m=T,r=Error(o(419)),r.stack="",r.digest=m,ja({value:r,source:null,stack:null}),t=$c(e,t,n)}else if(Ie||Sa(e,t,n,!1),m=(n&e.childLanes)!==0,Ie||m){if(m=Be,m!==null&&(r=n&-n,r=(r&42)!==0?1:wo(r),r=(r&(m.suspendedLanes|n))!==0?0:r,r!==0&&r!==S.retryLane))throw S.retryLane=r,sr(e,r),Dt(m,e,r),Tm;b.data==="$?"||au(),t=$c(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ge=an(b.nextSibling),ht=t,je=!0,Ti=null,un=!1,e!==null&&(Pt[qt++]=zn,Pt[qt++]=En,Pt[qt++]=ki,zn=e.id,En=e.overflow,ki=t),t=Gc(t,r.children),t.flags|=4096);return t}return l?(Fn(),l=r.fallback,b=t.mode,S=e.child,T=S.sibling,r=wn(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,T!==null?l=wn(T,l):(l=_i(l,b,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,b=e.child.memoizedState,b===null?b=Hc(n):(S=b.cachePool,S!==null?(T=Ze._currentValue,S=S.parent!==T?{parent:T,pool:T}:S):S=zh(),b={baseLanes:b.baseLanes|n,cachePool:S}),l.memoizedState=b,l.childLanes=Uc(e,m,n),t.memoizedState=Lc,r):(Wn(t),n=e.child,e=n.sibling,n=wn(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Gc(e,t){return t=rs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rs(e,t){return e=Tt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function $c(e,t,n){return br(t,e.child,null,n),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Um(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ac(e.return,t,n)}function Vc(e,t,n,r,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=n,c.tailMode=l)}function Gm(e,t,n){var r=t.pendingProps,l=r.revealOrder,c=r.tail;if(lt(e,t,r.children,n),r=Xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Um(e,n,t);else if(e.tag===19)Um(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(X(Xe,r),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vc(t,!1,l,n,c);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&es(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vc(t,!0,n,null,c);break;case"together":Vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ii|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function iy(e,t,n){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),Kn(t,Ze,e.memoizedState.cache),va();break;case 27:case 5:vi(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:Kn(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Hm(e,t,n):(Wn(t),e=Cn(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var l=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Sa(e,t,n,!1),r=(n&t.childLanes)!==0),l){if(r)return Gm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(Xe,Xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,n);case 24:Kn(t,Ze,e.memoizedState.cache)}return Cn(e,t,n)}function $m(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Yc(e,n)&&(t.flags&128)===0)return Ie=!1,iy(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,je&&(t.flags&1048576)!==0&&xh(t,Ll,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,l=r._init;if(r=l(r._payload),t.type=r,typeof r=="function")Fo(r)?(e=Oi(r,e),t.tag=1,t=Nm(null,t,r,e,n)):(t.tag=0,t=Nc(null,t,r,e,n));else{if(r!=null){if(l=r.$$typeof,l===q){t.tag=11,t=Cm(null,t,r,e,n);break e}else if(l===$){t.tag=14,t=Rm(null,t,r,e,n);break e}}throw t=at(r)||r,Error(o(306,t,""))}}return t;case 0:return Nc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,l=Oi(r,t.pendingProps),Nm(e,t,r,l,n);case 3:e:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(o(387));r=t.pendingProps;var c=t.memoizedState;l=c.element,fc(e,t),Ta(t,r,null,n);var m=t.memoizedState;if(r=m.cache,Kn(t,Ze,r),r!==c.cache&&lc(t,[Ze],n,!0),Aa(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Lm(e,t,r,n);break e}else if(r!==l){l=Vt(Error(o(424)),t),ja(l),t=Lm(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=an(e.firstChild),ht=t,je=!0,Ti=null,un=!0,n=ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(va(),r===l){t=Cn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 26:return is(e,t),e===null?(n=qg(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,r=bs(re.current).createElement(n),r[ut]=t,r[xt]=e,ot(r,n,e),Fe(r),t.stateNode=r):t.memoizedState=qg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vi(t),e===null&&je&&(r=t.stateNode=Vg(t.type,t.pendingProps,re.current),ht=t,un=!0,l=Ge,si(t.type)?(wu=l,Ge=an(r.firstChild)):Ge=l),lt(e,t,t.pendingProps.children,n),is(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((l=r=Ge)&&(r=Ry(r,t.type,t.pendingProps,un),r!==null?(t.stateNode=r,ht=t,Ge=an(r.firstChild),un=!1,l=!0):l=!1),l||Ci(t)),vi(t),l=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,r=c.children,yu(l,c)?r=null:m!==null&&yu(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=bc(e,t,X1,null,null,n),Wa._currentValue=l),is(e,t),lt(e,t,r,n),t.child;case 6:return e===null&&je&&((e=n=Ge)&&(n=My(n,t.pendingProps,un),n!==null?(t.stateNode=n,ht=t,Ge=null,e=!0):e=!1),e||Ci(t)),null;case 13:return Hm(e,t,n);case 4:return Se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):lt(e,t,r,n),t.child;case 11:return Cm(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Kn(t,t.type,r.value),lt(e,t,r.children,n),t.child;case 9:return l=t.type._context,r=t.pendingProps.children,Mi(t),l=dt(l),r=r(l),t.flags|=1,lt(e,t,r,n),t.child;case 14:return Rm(e,t,t.type,t.pendingProps,n);case 15:return Mm(e,t,t.type,t.pendingProps,n);case 19:return Gm(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=rs(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=wn(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Bm(e,t,n);case 24:return Mi(t),r=dt(Ze),e===null?(l=cc(),l===null&&(l=Be,c=sc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=n),l=c),t.memoizedState={parent:r,cache:l},dc(t),Kn(t,Ze,l)):((e.lanes&n)!==0&&(fc(e,t),Ta(t,null,null,n),Aa()),l=e.memoizedState,c=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Kn(t,Ze,r)):(r=c.cache,Kn(t,Ze,r),r!==l.cache&&lc(t,[Ze],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Rn(e){e.flags|=4}function Vm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jg(t)){if(t=Kt.current,t!==null&&((be&4194048)===be?dn!==null:(be&62914560)!==be&&(be&536870912)===0||t!==dn))throw _a=uc,Eh;e.flags|=8192}}function as(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vf():536870912,e.lanes|=t,Sr|=t)}function Na(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ry(e,t,n){var r=t.pendingProps;switch(nc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),kn(Ze),ct(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ya(t)?Rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vh())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(Rn(t),n!==null?(Ue(t),Vm(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Rn(t),Ue(t),Vm(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==r&&Rn(t),Ue(t),t.flags&=-16777217),null;case 27:vn(t),n=re.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rn(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}e=ee.current,ya(t)?bh(t):(e=Vg(l,r,n),t.stateNode=e,Rn(t))}return Ue(t),null;case 5:if(vn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rn(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}if(e=ee.current,ya(t))bh(t);else{switch(l=bs(re.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?l.createElement(n,{is:r.is}):l.createElement(n)}}e[ut]=t,e[xt]=r;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ot(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Rn(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Rn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(e=re.current,ya(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,l=ht,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Og(e.nodeValue,n)),e||Ci(t)}else e=bs(e).createTextNode(r),e[ut]=t,t.stateNode=e}return Ue(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ya(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[ut]=t}else va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else l=vh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Tn(t),t):(Tn(t),null)}if(Tn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),as(t,t.updateQueue),Ue(t),null;case 4:return ct(),e===null&&mu(t.stateNode.containerInfo),Ue(t),null;case 10:return kn(t.type),Ue(t),null;case 19:if(Z(Xe),l=t.memoizedState,l===null)return Ue(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)Na(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=es(e),c!==null){for(t.flags|=128,Na(l,!1),e=c.updateQueue,t.updateQueue=e,as(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ph(n,e),n=n.sibling;return X(Xe,Xe.current&1|2),t.child}e=e.sibling}l.tail!==null&&cn()>os&&(t.flags|=128,r=!0,Na(l,!1),t.lanes=4194304)}else{if(!r)if(e=es(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,as(t,e),Na(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!je)return Ue(t),null}else 2*cn()-l.renderingStartTime>os&&n!==536870912&&(t.flags|=128,r=!0,Na(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=cn(),t.sibling=null,e=Xe.current,X(Xe,r?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return Tn(t),pc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&as(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Z(Bi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kn(Ze),Ue(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ay(e,t){switch(nc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(Ze),ct(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return vn(t),null;case 13:if(Tn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(Xe),null;case 4:return ct(),null;case 10:return kn(t.type),null;case 22:case 23:return Tn(t),pc(),e!==null&&Z(Bi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(Ze),null;case 25:return null;default:return null}}function Ym(e,t){switch(nc(t),t.tag){case 3:kn(Ze),ct();break;case 26:case 27:case 5:vn(t);break;case 4:ct();break;case 13:Tn(t);break;case 19:Z(Xe);break;case 10:kn(t.type);break;case 22:case 23:Tn(t),pc(),e!==null&&Z(Bi);break;case 24:kn(Ze)}}function La(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&e)===e){r=void 0;var c=n.create,m=n.inst;r=c(),m.destroy=r}n=n.next}while(n!==l)}}catch(b){Re(t,t.return,b)}}function In(e,t,n){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&e)===e){var m=r.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,l=t;var S=n,T=b;try{T()}catch(L){Re(l,S,L)}}}r=r.next}while(r!==c)}}catch(L){Re(t,t.return,L)}}function Pm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Rh(t,n)}catch(r){Re(e,e.return,r)}}}function qm(e,t,n){n.props=Oi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Re(e,t,r)}}function Ha(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(l){Re(e,t,l)}}function fn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){Re(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Re(e,t,l)}else n.current=null}function Km(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){Re(e,e.return,l)}}function Pc(e,t,n){try{var r=e.stateNode;_y(r,e.type,n,t),r[xt]=t}catch(l){Re(e,e.return,l)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&si(e.type)||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&si(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(r!==4&&(r===27&&si(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&si(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ls(e,t,n),e=e.sibling;e!==null;)ls(e,t,n),e=e.sibling}function Zm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,r,n),t[ut]=e,t[xt]=n}catch(c){Re(e,e.return,c)}}var Mn=!1,Pe=!1,Qc=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,et=null;function ly(e,t){if(e=e.containerInfo,xu=zs,e=lh(e),qo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,b=-1,S=-1,T=0,L=0,Y=e,M=null;t:for(;;){for(var B;Y!==n||l!==0&&Y.nodeType!==3||(b=m+l),Y!==c||r!==0&&Y.nodeType!==3||(S=m+r),Y.nodeType===3&&(m+=Y.nodeValue.length),(B=Y.firstChild)!==null;)M=Y,Y=B;for(;;){if(Y===e)break t;if(M===n&&++T===l&&(b=m),M===c&&++L===r&&(S=m),(B=Y.nextSibling)!==null)break;Y=M,M=Y.parentNode}Y=B}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:e,selectionRange:n},zs=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,l=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var le=Oi(n.type,l,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(le,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Re(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ju(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ju(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function Jm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ei(e,n),r&4&&La(5,n);break;case 1:if(ei(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Re(n,n.return,m)}else{var l=Oi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Re(n,n.return,m)}}r&64&&Pm(n),r&512&&Ha(n,n.return);break;case 3:if(ei(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Rh(e,t)}catch(m){Re(n,n.return,m)}}break;case 27:t===null&&r&4&&Zm(n);case 26:case 5:ei(e,n),t===null&&r&4&&Km(n),r&512&&Ha(n,n.return);break;case 12:ei(e,n);break;case 13:ei(e,n),r&4&&Im(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gy.bind(null,n),By(e,n))));break;case 22:if(r=n.memoizedState!==null||Mn,!r){t=t!==null&&t.memoizedState!==null||Pe,l=Mn;var c=Pe;Mn=r,(Pe=t)&&!c?ti(e,n,(n.subtreeFlags&8772)!==0):ei(e,n),Mn=l,Pe=c}break;case 30:break;default:ei(e,n)}}function Wm(e){var t=e.alternate;t!==null&&(e.alternate=null,Wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_o(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,vt=!1;function Bn(e,t,n){for(n=n.child;n!==null;)Fm(e,t,n),n=n.sibling}function Fm(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(aa,n)}catch{}switch(n.tag){case 26:Pe||fn(n,t),Bn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||fn(n,t);var r=Ne,l=vt;si(n.type)&&(Ne=n.stateNode,vt=!1),Bn(e,t,n),Qa(n.stateNode),Ne=r,vt=l;break;case 5:Pe||fn(n,t);case 6:if(r=Ne,l=vt,Ne=null,Bn(e,t,n),Ne=r,vt=l,Ne!==null)if(vt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(c){Re(n,t,c)}else try{Ne.removeChild(n.stateNode)}catch(c){Re(n,t,c)}break;case 18:Ne!==null&&(vt?(e=Ne,Gg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),tl(e)):Gg(Ne,n.stateNode));break;case 4:r=Ne,l=vt,Ne=n.stateNode.containerInfo,vt=!0,Bn(e,t,n),Ne=r,vt=l;break;case 0:case 11:case 14:case 15:Pe||In(2,n,t),Pe||In(4,n,t),Bn(e,t,n);break;case 1:Pe||(fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&qm(n,t,r)),Bn(e,t,n);break;case 21:Bn(e,t,n);break;case 22:Pe=(r=Pe)||n.memoizedState!==null,Bn(e,t,n),Pe=r;break;default:Bn(e,t,n)}}function Im(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tl(e)}catch(n){Re(t,t.return,n)}}function sy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xm),t;default:throw Error(o(435,e.tag))}}function Zc(e,t){var n=sy(e);t.forEach(function(r){var l=py.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r],c=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(si(b.type)){Ne=b.stateNode,vt=!1;break e}break;case 5:Ne=b.stateNode,vt=!1;break e;case 3:case 4:Ne=b.stateNode.containerInfo,vt=!0;break e}b=b.return}if(Ne===null)throw Error(o(160));Fm(c,m,l),Ne=null,vt=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)eg(t,e),t=t.sibling}var rn=null;function eg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),Rt(e),r&4&&(In(3,e,e.return),La(3,e),In(5,e,e.return));break;case 1:Ct(t,e),Rt(e),r&512&&(Pe||n===null||fn(n,n.return)),r&64&&Mn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var l=rn;if(Ct(t,e),Rt(e),r&512&&(Pe||n===null||fn(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(r){case"title":c=l.getElementsByTagName("title")[0],(!c||c[oa]||c[ut]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(r),l.head.insertBefore(c,l.querySelector("head > title"))),ot(c,r,n),c[ut]=e,Fe(c),r=c;break e;case"link":var m=Zg("link","href",l).get(r+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(c=m[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}c=l.createElement(r),ot(c,r,n),l.head.appendChild(c);break;case"meta":if(m=Zg("meta","content",l).get(r+(n.content||""))){for(b=0;b<m.length;b++)if(c=m[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}c=l.createElement(r),ot(c,r,n),l.head.appendChild(c);break;default:throw Error(o(468,r))}c[ut]=e,Fe(c),r=c}e.stateNode=r}else Xg(l,e.type,e.stateNode);else e.stateNode=Qg(l,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?Xg(l,e.type,e.stateNode):Qg(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Pc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ct(t,e),Rt(e),r&512&&(Pe||n===null||fn(n,n.return)),n!==null&&r&4&&Pc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ct(t,e),Rt(e),r&512&&(Pe||n===null||fn(n,n.return)),e.flags&32){l=e.stateNode;try{er(l,"")}catch(B){Re(e,e.return,B)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,Pc(e,l,n!==null?n.memoizedProps:l)),r&1024&&(Qc=!0);break;case 6:if(Ct(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(B){Re(e,e.return,B)}}break;case 3:if(js=null,l=rn,rn=ys(t.containerInfo),Ct(t,e),rn=l,Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(t.containerInfo)}catch(B){Re(e,e.return,B)}Qc&&(Qc=!1,tg(e));break;case 4:r=rn,rn=ys(e.stateNode.containerInfo),Ct(t,e),Rt(e),rn=r;break;case 12:Ct(t,e),Rt(e);break;case 13:Ct(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=cn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zc(e,r)));break;case 22:l=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,T=Mn,L=Pe;if(Mn=T||l,Pe=L||S,Ct(t,e),Pe=L,Mn=T,Rt(e),r&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||S||Mn||Pe||Ni(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,l)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var Y=S.memoizedProps.style,M=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;b.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(B){Re(S,S.return,B)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(B){Re(S,S.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Zc(e,n))));break;case 19:Ct(t,e),Rt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zc(e,r)));break;case 30:break;case 21:break;default:Ct(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qm(r)){n=r;break}r=r.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var l=n.stateNode,c=qc(e);ls(e,c,l);break;case 5:var m=n.stateNode;n.flags&32&&(er(m,""),n.flags&=-33);var b=qc(e);ls(e,b,m);break;case 3:case 4:var S=n.stateNode.containerInfo,T=qc(e);Kc(e,T,S);break;default:throw Error(o(161))}}catch(L){Re(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;tg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ei(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jm(e,t.alternate,t),t=t.sibling}function Ni(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),Ni(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&qm(t,t.return,n),Ni(t);break;case 27:Qa(t.stateNode);case 26:case 5:fn(t,t.return),Ni(t);break;case 22:t.memoizedState===null&&Ni(t);break;case 30:Ni(t);break;default:Ni(t)}e=e.sibling}}function ti(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,l=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:ti(l,c,n),La(4,c);break;case 1:if(ti(l,c,n),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){Re(r,r.return,T)}if(r=c,l=r.updateQueue,l!==null){var b=r.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)Ch(S[l],b)}catch(T){Re(r,r.return,T)}}n&&m&64&&Pm(c),Ha(c,c.return);break;case 27:Zm(c);case 26:case 5:ti(l,c,n),n&&r===null&&m&4&&Km(c),Ha(c,c.return);break;case 12:ti(l,c,n);break;case 13:ti(l,c,n),n&&m&4&&Im(l,c);break;case 22:c.memoizedState===null&&ti(l,c,n),Ha(c,c.return);break;case 30:break;default:ti(l,c,n)}t=t.sibling}}function Xc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wa(n))}function Jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e))}function hn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ng(e,t,n,r),t=t.sibling}function ng(e,t,n,r){var l=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,r),l&2048&&La(9,t);break;case 1:hn(e,t,n,r);break;case 3:hn(e,t,n,r),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e)));break;case 12:if(l&2048){hn(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,b=c.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Re(t,t.return,S)}}else hn(e,t,n,r);break;case 13:hn(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?hn(e,t,n,r):Ua(e,t):c._visibility&2?hn(e,t,n,r):(c._visibility|=2,yr(e,t,n,r,(t.subtreeFlags&10256)!==0)),l&2048&&Xc(m,t);break;case 24:hn(e,t,n,r),l&2048&&Jc(t.alternate,t);break;default:hn(e,t,n,r)}}function yr(e,t,n,r,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,m=t,b=n,S=r,T=m.flags;switch(m.tag){case 0:case 11:case 15:yr(c,m,b,S,l),La(8,m);break;case 23:break;case 22:var L=m.stateNode;m.memoizedState!==null?L._visibility&2?yr(c,m,b,S,l):Ua(c,m):(L._visibility|=2,yr(c,m,b,S,l)),l&&T&2048&&Xc(m.alternate,m);break;case 24:yr(c,m,b,S,l),l&&T&2048&&Jc(m.alternate,m);break;default:yr(c,m,b,S,l)}t=t.sibling}}function Ua(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,l=r.flags;switch(r.tag){case 22:Ua(n,r),l&2048&&Xc(r.alternate,r);break;case 24:Ua(n,r),l&2048&&Jc(r.alternate,r);break;default:Ua(n,r)}t=t.sibling}}var Ga=8192;function vr(e){if(e.subtreeFlags&Ga)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 26:vr(e),e.flags&Ga&&e.memoizedState!==null&&Ky(rn,e.memoizedState,e.memoizedProps);break;case 5:vr(e);break;case 3:case 4:var t=rn;rn=ys(e.stateNode.containerInfo),vr(e),rn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ga,Ga=16777216,vr(e),Ga=t):vr(e));break;default:vr(e)}}function rg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $a(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];et=r,lg(r,e)}rg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ag(e),e=e.sibling}function ag(e){switch(e.tag){case 0:case 11:case 15:$a(e),e.flags&2048&&In(9,e,e.return);break;case 3:$a(e);break;case 12:$a(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ss(e)):$a(e);break;default:$a(e)}}function ss(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];et=r,lg(r,e)}rg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),ss(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ss(t));break;default:ss(t)}e=e.sibling}}function lg(e,t){for(;et!==null;){var n=et;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,et=r;else e:for(n=e;et!==null;){r=et;var l=r.sibling,c=r.return;if(Wm(r),r===n){et=null;break e}if(l!==null){l.return=c,et=l;break e}et=c}}}var oy={getCacheForType:function(e){var t=dt(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},cy=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Be=null,ge=null,be=0,_e=0,Mt=null,ni=!1,jr=!1,Wc=!1,Dn=0,$e=0,ii=0,Li=0,Fc=0,Qt=0,Sr=0,Va=null,jt=null,Ic=!1,eu=0,os=1/0,cs=null,ri=null,st=0,ai=null,wr=null,zr=0,tu=0,nu=null,sg=null,Ya=0,iu=null;function Bt(){if((Ee&2)!==0&&be!==0)return be&-be;if(O.T!==null){var e=dr;return e!==0?e:uu()}return wf()}function og(){Qt===0&&(Qt=(be&536870912)===0||je?yf():536870912);var e=Kt.current;return e!==null&&(e.flags|=32),Qt}function Dt(e,t,n){(e===Be&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Er(e,0),li(e,be,Qt,!1)),sa(e,n),((Ee&2)===0||e!==Be)&&(e===Be&&((Ee&2)===0&&(Li|=n),$e===4&&li(e,be,Qt,!1)),mn(e))}function cg(e,t,n){if((Ee&6)!==0)throw Error(o(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||la(e,t),l=r?fy(e,t):lu(e,t,!0),c=r;do{if(l===0){jr&&!r&&li(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!uy(n)){l=lu(e,t,!1),c=!1;continue}if(l===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;l=Va;var S=b.current.memoizedState.isDehydrated;if(S&&(Er(b,m).flags|=256),m=lu(b,m,!1),m!==2){if(Wc&&!S){b.errorRecoveryDisabledLanes|=c,Li|=c,l=4;break e}c=jt,jt=l,c!==null&&(jt===null?jt=c:jt.push.apply(jt,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){Er(e,0),li(e,t,0,!0);break}e:{switch(r=e,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:li(r,t,Qt,!ni);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=eu+300-cn(),10<l)){if(li(r,t,Qt,!ni),vl(r,0,!0)!==0)break e;r.timeoutHandle=Hg(ug.bind(null,r,n,jt,cs,Ic,t,Qt,Li,Sr,ni,c,2,-0,0),l);break e}ug(r,n,jt,cs,Ic,t,Qt,Li,Sr,ni,c,0,-0,0)}}break}while(!0);mn(e)}function ug(e,t,n,r,l,c,m,b,S,T,L,Y,M,B){if(e.timeoutHandle=-1,Y=t.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Ja={stylesheets:null,count:0,unsuspend:qy},ig(t),Y=Qy(),Y!==null)){e.cancelPendingCommit=Y(xg.bind(null,e,t,c,n,r,l,m,b,S,L,1,M,B)),li(e,c,m,!T);return}xg(e,t,c,n,r,l,m,b,S)}function uy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],c=l.getSnapshot;l=l.value;try{if(!At(c(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function li(e,t,n,r){t&=~Fc,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var c=31-kt(l),m=1<<c;r[c]=-1,l&=~m}n!==0&&jf(e,n,t)}function us(){return(Ee&6)===0?(Pa(0),!1):!0}function ru(){if(ge!==null){if(_e===0)var e=ge.return;else e=ge,_n=Ri=null,jc(e),xr=null,Da=0,e=ge;for(;e!==null;)Ym(e.alternate,e),e=e.return;ge=null}}function Er(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ay(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ru(),Be=e,ge=n=wn(e.current,null),be=t,_e=0,Mt=null,ni=!1,jr=la(e,t),Wc=!1,Sr=Qt=Fc=Li=ii=$e=0,jt=Va=null,Ic=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var l=31-kt(r),c=1<<l;t|=e[l],r&=~c}return Dn=t,Ml(),n}function dg(e,t){de=null,O.H=Wl,t===Ea||t===$l?(t=Ah(),_e=3):t===Eh?(t=Ah(),_e=4):_e=t===Tm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,ge===null&&($e=1,ns(e,Vt(t,e.current)))}function fg(){var e=O.H;return O.H=Wl,e===null?Wl:e}function hg(){var e=O.A;return O.A=oy,e}function au(){$e=4,ni||(be&4194048)!==be&&Kt.current!==null||(jr=!0),(ii&134217727)===0&&(Li&134217727)===0||Be===null||li(Be,be,Qt,!1)}function lu(e,t,n){var r=Ee;Ee|=2;var l=fg(),c=hg();(Be!==e||be!==t)&&(cs=null,Er(e,t)),t=!1;var m=$e;e:do try{if(_e!==0&&ge!==null){var b=ge,S=Mt;switch(_e){case 8:ru(),m=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var T=_e;if(_e=0,Mt=null,_r(e,b,S,T),n&&jr){m=0;break e}break;default:T=_e,_e=0,Mt=null,_r(e,b,S,T)}}dy(),m=$e;break}catch(L){dg(e,L)}while(!0);return t&&e.shellSuspendCounter++,_n=Ri=null,Ee=r,O.H=l,O.A=c,ge===null&&(Be=null,be=0,Ml()),m}function dy(){for(;ge!==null;)mg(ge)}function fy(e,t){var n=Ee;Ee|=2;var r=fg(),l=hg();Be!==e||be!==t?(cs=null,os=cn()+500,Er(e,t)):jr=la(e,t);e:do try{if(_e!==0&&ge!==null){t=ge;var c=Mt;t:switch(_e){case 1:_e=0,Mt=null,_r(e,t,c,1);break;case 2:case 9:if(_h(c)){_e=0,Mt=null,gg(t);break}t=function(){_e!==2&&_e!==9||Be!==e||(_e=7),mn(e)},c.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:_h(c)?(_e=0,Mt=null,gg(t)):(_e=0,Mt=null,_r(e,t,c,7));break;case 5:var m=null;switch(ge.tag){case 26:m=ge.memoizedState;case 5:case 27:var b=ge;if(!m||Jg(m)){_e=0,Mt=null;var S=b.sibling;if(S!==null)ge=S;else{var T=b.return;T!==null?(ge=T,ds(T)):ge=null}break t}}_e=0,Mt=null,_r(e,t,c,5);break;case 6:_e=0,Mt=null,_r(e,t,c,6);break;case 8:ru(),$e=6;break e;default:throw Error(o(462))}}hy();break}catch(L){dg(e,L)}while(!0);return _n=Ri=null,O.H=r,O.A=l,Ee=n,ge!==null?0:(Be=null,be=0,Ml(),$e)}function hy(){for(;ge!==null&&!Ob();)mg(ge)}function mg(e){var t=$m(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?ds(e):ge=t}function gg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Om(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Om(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:jc(t);default:Ym(n,t),t=ge=ph(t,Dn),t=$m(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?ds(e):ge=t}function _r(e,t,n,r){_n=Ri=null,jc(t),xr=null,Da=0;var l=t.return;try{if(ny(e,l,t,n,be)){$e=1,ns(e,Vt(n,e.current)),ge=null;return}}catch(c){if(l!==null)throw ge=l,c;$e=1,ns(e,Vt(n,e.current)),ge=null;return}t.flags&32768?(je||r===1?e=!0:jr||(be&536870912)!==0?e=!1:(ni=e=!0,(r===2||r===9||r===3||r===6)&&(r=Kt.current,r!==null&&r.tag===13&&(r.flags|=16384))),pg(t,e)):ds(t)}function ds(e){var t=e;do{if((t.flags&32768)!==0){pg(t,ni);return}e=t.return;var n=ry(t.alternate,t,Dn);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);$e===0&&($e=5)}function pg(e,t){do{var n=ay(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);$e=6,ge=null}function xg(e,t,n,r,l,c,m,b,S){e.cancelPendingCommit=null;do fs();while(st!==0);if((Ee&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Jo,qb(e,n,c,m,b,S),e===Be&&(ge=Be=null,be=0),wr=t,ai=e,zr=n,tu=c,nu=l,sg=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xy(xl,function(){return Sg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,l=Q.p,Q.p=2,m=Ee,Ee|=4;try{ly(e,t,n)}finally{Ee=m,Q.p=l,O.T=r}}st=1,bg(),yg(),vg()}}function bg(){if(st===1){st=0;var e=ai,t=wr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var r=Q.p;Q.p=2;var l=Ee;Ee|=4;try{eg(t,e);var c=bu,m=lh(e.containerInfo),b=c.focusedElem,S=c.selectionRange;if(m!==b&&b&&b.ownerDocument&&ah(b.ownerDocument.documentElement,b)){if(S!==null&&qo(b)){var T=S.start,L=S.end;if(L===void 0&&(L=T),"selectionStart"in b)b.selectionStart=T,b.selectionEnd=Math.min(L,b.value.length);else{var Y=b.ownerDocument||document,M=Y&&Y.defaultView||window;if(M.getSelection){var B=M.getSelection(),le=b.textContent.length,ie=Math.min(S.start,le),Ce=S.end===void 0?ie:Math.min(S.end,le);!B.extend&&ie>Ce&&(m=Ce,Ce=ie,ie=m);var _=rh(b,ie),E=rh(b,Ce);if(_&&E&&(B.rangeCount!==1||B.anchorNode!==_.node||B.anchorOffset!==_.offset||B.focusNode!==E.node||B.focusOffset!==E.offset)){var k=Y.createRange();k.setStart(_.node,_.offset),B.removeAllRanges(),ie>Ce?(B.addRange(k),B.extend(E.node,E.offset)):(k.setEnd(E.node,E.offset),B.addRange(k))}}}}for(Y=[],B=b;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Y.length;b++){var V=Y[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}zs=!!xu,bu=xu=null}finally{Ee=l,Q.p=r,O.T=n}}e.current=t,st=2}}function yg(){if(st===2){st=0;var e=ai,t=wr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var r=Q.p;Q.p=2;var l=Ee;Ee|=4;try{Jm(e,t.alternate,t)}finally{Ee=l,Q.p=r,O.T=n}}st=3}}function vg(){if(st===4||st===3){st=0,Nb();var e=ai,t=wr,n=zr,r=sg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,wr=ai=null,jg(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ri=null),zo(n),t=t.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(aa,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=O.T,l=Q.p,Q.p=2,O.T=null;try{for(var c=e.onRecoverableError,m=0;m<r.length;m++){var b=r[m];c(b.value,{componentStack:b.stack})}}finally{O.T=t,Q.p=l}}(zr&3)!==0&&fs(),mn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===iu?Ya++:(Ya=0,iu=e):Ya=0,Pa(0)}}function jg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wa(t)))}function fs(e){return bg(),yg(),vg(),Sg()}function Sg(){if(st!==5)return!1;var e=ai,t=tu;tu=0;var n=zo(zr),r=O.T,l=Q.p;try{Q.p=32>n?32:n,O.T=null,n=nu,nu=null;var c=ai,m=zr;if(st=0,wr=ai=null,zr=0,(Ee&6)!==0)throw Error(o(331));var b=Ee;if(Ee|=4,ag(c.current),ng(c,c.current,m,n),Ee=b,Pa(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(aa,c)}catch{}return!0}finally{Q.p=l,O.T=r,jg(e,t)}}function wg(e,t,n){t=Vt(n,t),t=Oc(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(sa(e,2),mn(e))}function Re(e,t,n){if(e.tag===3)wg(e,e,n);else for(;t!==null;){if(t.tag===3){wg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){e=Vt(n,e),n=km(2),r=Xn(t,n,2),r!==null&&(Am(n,r,t,e),sa(r,2),mn(r));break}}t=t.return}}function su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cy;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(Wc=!0,l.add(n),e=my.bind(null,e,t,n),t.then(e,e))}function my(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Be===e&&(be&n)===n&&($e===4||$e===3&&(be&62914560)===be&&300>cn()-eu?(Ee&2)===0&&Er(e,0):Fc|=n,Sr===be&&(Sr=0)),mn(e)}function zg(e,t){t===0&&(t=vf()),e=sr(e,t),e!==null&&(sa(e,t),mn(e))}function gy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zg(e,n)}function py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(t),zg(e,n)}function xy(e,t){return vo(e,t)}var hs=null,kr=null,ou=!1,ms=!1,cu=!1,Hi=0;function mn(e){e!==kr&&e.next===null&&(kr===null?hs=kr=e:kr=kr.next=e),ms=!0,ou||(ou=!0,yy())}function Pa(e,t){if(!cu&&ms){cu=!0;do for(var n=!1,r=hs;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var m=r.suspendedLanes,b=r.pingedLanes;c=(1<<31-kt(42|e)+1)-1,c&=l&~(m&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Ag(r,c))}else c=be,c=vl(r,r===Be?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||la(r,c)||(n=!0,Ag(r,c));r=r.next}while(n);cu=!1}}function by(){Eg()}function Eg(){ms=ou=!1;var e=0;Hi!==0&&(ky()&&(e=Hi),Hi=0);for(var t=cn(),n=null,r=hs;r!==null;){var l=r.next,c=_g(r,t);c===0?(r.next=null,n===null?hs=l:n.next=l,l===null&&(kr=n)):(n=r,(e!==0||(c&3)!==0)&&(ms=!0)),r=l}Pa(e)}function _g(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-kt(c),b=1<<m,S=l[m];S===-1?((b&n)===0||(b&r)!==0)&&(l[m]=Pb(b,t)):S<=t&&(e.expiredLanes|=b),c&=~b}if(t=Be,n=be,n=vl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&jo(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||la(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&jo(r),zo(n)){case 2:case 8:n=xf;break;case 32:n=xl;break;case 268435456:n=bf;break;default:n=xl}return r=kg.bind(null,e),n=vo(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&jo(r),e.callbackPriority=2,e.callbackNode=null,2}function kg(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(fs()&&e.callbackNode!==n)return null;var r=be;return r=vl(e,e===Be?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(cg(e,r,t),_g(e,cn()),e.callbackNode!=null&&e.callbackNode===n?kg.bind(null,e):null)}function Ag(e,t){if(fs())return null;cg(e,t,!0)}function yy(){Ty(function(){(Ee&6)!==0?vo(pf,by):Eg()})}function uu(){return Hi===0&&(Hi=yf()),Hi}function Tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(""+e)}function Cg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vy(e,t,n,r,l){if(t==="submit"&&n&&n.stateNode===l){var c=Tg((l[xt]||null).action),m=r.submitter;m&&(t=(t=m[xt]||null)?Tg(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var b=new Tl("action","action",null,r,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Hi!==0){var S=m?Cg(l,m):new FormData(l);Cc(n,{pending:!0,data:S,method:l.method,action:c},null,S)}}else typeof c=="function"&&(b.preventDefault(),S=m?Cg(l,m):new FormData(l),Cc(n,{pending:!0,data:S,method:l.method,action:c},c,S))},currentTarget:l}]})}}for(var du=0;du<Xo.length;du++){var fu=Xo[du],jy=fu.toLowerCase(),Sy=fu[0].toUpperCase()+fu.slice(1);nn(jy,"on"+Sy)}nn(ch,"onAnimationEnd"),nn(uh,"onAnimationIteration"),nn(dh,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(U1,"onTransitionRun"),nn(G1,"onTransitionStart"),nn($1,"onTransitionCancel"),nn(fh,"onTransitionEnd"),Wi("onMouseEnter",["mouseout","mouseover"]),Wi("onMouseLeave",["mouseout","mouseover"]),Wi("onPointerEnter",["pointerout","pointerover"]),Wi("onPointerLeave",["pointerout","pointerover"]),Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Si("onBeforeInput",["compositionend","keypress","textInput","paste"]),Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa));function Rg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var m=r.length-1;0<=m;m--){var b=r[m],S=b.instance,T=b.currentTarget;if(b=b.listener,S!==c&&l.isPropagationStopped())break e;c=b,l.currentTarget=T;try{c(l)}catch(L){ts(L)}l.currentTarget=null,c=S}else for(m=0;m<r.length;m++){if(b=r[m],S=b.instance,T=b.currentTarget,b=b.listener,S!==c&&l.isPropagationStopped())break e;c=b,l.currentTarget=T;try{c(l)}catch(L){ts(L)}l.currentTarget=null,c=S}}}}function pe(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Mg(t,e,2,!1),n.add(r))}function hu(e,t,n){var r=0;t&&(r|=4),Mg(n,e,r,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function mu(e){if(!e[gs]){e[gs]=!0,Ef.forEach(function(n){n!=="selectionchange"&&(wy.has(n)||hu(n,!1,e),hu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,hu("selectionchange",!1,t))}}function Mg(e,t,n,r){switch(n0(t)){case 2:var l=Jy;break;case 8:l=Wy;break;default:l=Au}n=l.bind(null,t,n,e),l=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gu(e,t,n,r,l){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var b=r.stateNode.containerInfo;if(b===l)break;if(m===4)for(m=r.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;b!==null;){if(m=Zi(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){r=c=m;continue e}b=b.parentNode}}r=r.return}Uf(function(){var T=c,L=Do(n),Y=[];e:{var M=hh.get(e);if(M!==void 0){var B=Tl,le=e;switch(e){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":B=x1;break;case"focusin":le="focus",B=Go;break;case"focusout":le="blur",B=Go;break;case"beforeblur":case"afterblur":B=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=v1;break;case ch:case uh:case dh:B=o1;break;case fh:B=S1;break;case"scroll":case"scrollend":B=i1;break;case"wheel":B=z1;break;case"copy":case"cut":case"paste":B=u1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Pf;break;case"toggle":case"beforetoggle":B=_1}var ie=(t&4)!==0,Ce=!ie&&(e==="scroll"||e==="scrollend"),_=ie?M!==null?M+"Capture":null:M;ie=[];for(var E=T,k;E!==null;){var V=E;if(k=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||k===null||_===null||(V=ua(E,_),V!=null&&ie.push(Ka(E,V,k))),Ce)break;E=E.return}0<ie.length&&(M=new B(M,le,null,n,L),Y.push({event:M,listeners:ie}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",M&&n!==Bo&&(le=n.relatedTarget||n.fromElement)&&(Zi(le)||le[Qi]))break e;if((B||M)&&(M=L.window===L?L:(M=L.ownerDocument)?M.defaultView||M.parentWindow:window,B?(le=n.relatedTarget||n.toElement,B=T,le=le?Zi(le):null,le!==null&&(Ce=h(le),ie=le.tag,le!==Ce||ie!==5&&ie!==27&&ie!==6)&&(le=null)):(B=null,le=T),B!==le)){if(ie=Vf,V="onMouseLeave",_="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Pf,V="onPointerLeave",_="onPointerEnter",E="pointer"),Ce=B==null?M:ca(B),k=le==null?M:ca(le),M=new ie(V,E+"leave",B,n,L),M.target=Ce,M.relatedTarget=k,V=null,Zi(L)===T&&(ie=new ie(_,E+"enter",le,n,L),ie.target=k,ie.relatedTarget=Ce,V=ie),Ce=V,B&&le)t:{for(ie=B,_=le,E=0,k=ie;k;k=Ar(k))E++;for(k=0,V=_;V;V=Ar(V))k++;for(;0<E-k;)ie=Ar(ie),E--;for(;0<k-E;)_=Ar(_),k--;for(;E--;){if(ie===_||_!==null&&ie===_.alternate)break t;ie=Ar(ie),_=Ar(_)}ie=null}else ie=null;B!==null&&Bg(Y,M,B,ie,!1),le!==null&&Ce!==null&&Bg(Y,Ce,le,ie,!0)}}e:{if(M=T?ca(T):window,B=M.nodeName&&M.nodeName.toLowerCase(),B==="select"||B==="input"&&M.type==="file")var F=Ff;else if(Jf(M))if(If)F=N1;else{F=D1;var fe=B1}else B=M.nodeName,!B||B.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?T&&Mo(T.elementType)&&(F=Ff):F=O1;if(F&&(F=F(e,T))){Wf(Y,F,n,L);break e}fe&&fe(e,M,T),e==="focusout"&&T&&M.type==="number"&&T.memoizedProps.value!=null&&Ro(M,"number",M.value)}switch(fe=T?ca(T):window,e){case"focusin":(Jf(fe)||fe.contentEditable==="true")&&(rr=fe,Ko=T,ba=null);break;case"focusout":ba=Ko=rr=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,sh(Y,n,L);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":sh(Y,n,L)}var te;if(Vo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else ir?Zf(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(qf&&n.locale!=="ko"&&(ir||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ir&&(te=Gf()):(qn=L,Lo="value"in qn?qn.value:qn.textContent,ir=!0)),fe=ps(T,ae),0<fe.length&&(ae=new Yf(ae,e,null,n,L),Y.push({event:ae,listeners:fe}),te?ae.data=te:(te=Xf(n),te!==null&&(ae.data=te)))),(te=A1?T1(e,n):C1(e,n))&&(ae=ps(T,"onBeforeInput"),0<ae.length&&(fe=new Yf("onBeforeInput","beforeinput",null,n,L),Y.push({event:fe,listeners:ae}),fe.data=te)),vy(Y,e,T,n,L)}Rg(Y,t)})}function Ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=ua(e,n),l!=null&&r.unshift(Ka(e,l,c)),l=ua(e,t),l!=null&&r.push(Ka(e,l,c))),e.tag===3)return r;e=e.return}return[]}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bg(e,t,n,r,l){for(var c=t._reactName,m=[];n!==null&&n!==r;){var b=n,S=b.alternate,T=b.stateNode;if(b=b.tag,S!==null&&S===r)break;b!==5&&b!==26&&b!==27||T===null||(S=T,l?(T=ua(n,c),T!=null&&m.unshift(Ka(n,T,S))):l||(T=ua(n,c),T!=null&&m.push(Ka(n,T,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var zy=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function Dg(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(Ey,"")}function Og(e,t){return t=Dg(t),Dg(e)===t}function xs(){}function Te(e,t,n,r,l,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||er(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&er(e,""+r);break;case"className":Sl(e,"class",r);break;case"tabIndex":Sl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Sl(e,n,r);break;case"style":Lf(e,r,c);break;case"data":if(t!=="object"){Sl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=El(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",l.name,l,null),Te(e,t,"formEncType",l.formEncType,l,null),Te(e,t,"formMethod",l.formMethod,l,null),Te(e,t,"formTarget",l.formTarget,l,null)):(Te(e,t,"encType",l.encType,l,null),Te(e,t,"method",l.method,l,null),Te(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=El(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=xs);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=El(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),jl(e,"popover",r);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":jl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=t1.get(n)||n,jl(e,n,r))}}function pu(e,t,n,r,l,c){switch(n){case"style":Lf(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof r=="string"?er(e,r):(typeof r=="number"||typeof r=="bigint")&&er(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=xs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),c=e[xt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,l),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,l);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):jl(e,n,r)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,l=!1,c;for(c in n)if(n.hasOwnProperty(c)){var m=n[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Te(e,t,c,m,n,null)}}l&&Te(e,t,"srcSet",n.srcSet,n,null),r&&Te(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var b=c=m=l=null,S=null,T=null;for(r in n)if(n.hasOwnProperty(r)){var L=n[r];if(L!=null)switch(r){case"name":l=L;break;case"type":m=L;break;case"checked":S=L;break;case"defaultChecked":T=L;break;case"value":c=L;break;case"defaultValue":b=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:Te(e,t,r,L,n,null)}}Bf(e,c,b,S,T,m,l,!1),wl(e);return;case"select":pe("invalid",e),r=m=c=null;for(l in n)if(n.hasOwnProperty(l)&&(b=n[l],b!=null))switch(l){case"value":c=b;break;case"defaultValue":m=b;break;case"multiple":r=b;default:Te(e,t,l,b,n,null)}t=c,n=m,e.multiple=!!r,t!=null?Ii(e,!!r,t,!1):n!=null&&Ii(e,!!r,n,!0);return;case"textarea":pe("invalid",e),c=l=r=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":r=b;break;case"defaultValue":l=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:Te(e,t,m,b,n,null)}Of(e,r,l,c),wl(e);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Te(e,t,S,r,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<qa.length;r++)pe(qa[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(r=n[T],r!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Te(e,t,T,r,n,null)}return;default:if(Mo(t)){for(L in n)n.hasOwnProperty(L)&&(r=n[L],r!==void 0&&pu(e,t,L,r,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(r=n[b],r!=null&&Te(e,t,b,r,n,null))}function _y(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,b=null,S=null,T=null,L=null;for(B in n){var Y=n[B];if(n.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=Y;default:r.hasOwnProperty(B)||Te(e,t,B,null,r,Y)}}for(var M in r){var B=r[M];if(Y=n[M],r.hasOwnProperty(M)&&(B!=null||Y!=null))switch(M){case"type":c=B;break;case"name":l=B;break;case"checked":T=B;break;case"defaultChecked":L=B;break;case"value":m=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==Y&&Te(e,t,M,B,r,Y)}}Co(e,m,b,S,T,L,c,l);return;case"select":B=m=b=M=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":B=S;default:r.hasOwnProperty(c)||Te(e,t,c,null,r,S)}for(l in r)if(c=r[l],S=n[l],r.hasOwnProperty(l)&&(c!=null||S!=null))switch(l){case"value":M=c;break;case"defaultValue":b=c;break;case"multiple":m=c;default:c!==S&&Te(e,t,l,c,r,S)}t=b,n=m,r=B,M!=null?Ii(e,!!n,M,!1):!!r!=!!n&&(t!=null?Ii(e,!!n,t,!0):Ii(e,!!n,n?[]:"",!1));return;case"textarea":B=M=null;for(b in n)if(l=n[b],n.hasOwnProperty(b)&&l!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Te(e,t,b,null,r,l)}for(m in r)if(l=r[m],c=n[m],r.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":M=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&Te(e,t,m,l,r,c)}Df(e,M,B);return;case"option":for(var le in n)if(M=n[le],n.hasOwnProperty(le)&&M!=null&&!r.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:Te(e,t,le,null,r,M)}for(S in r)if(M=r[S],B=n[S],r.hasOwnProperty(S)&&M!==B&&(M!=null||B!=null))switch(S){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Te(e,t,S,M,r,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)M=n[ie],n.hasOwnProperty(ie)&&M!=null&&!r.hasOwnProperty(ie)&&Te(e,t,ie,null,r,M);for(T in r)if(M=r[T],B=n[T],r.hasOwnProperty(T)&&M!==B&&(M!=null||B!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:Te(e,t,T,M,r,B)}return;default:if(Mo(t)){for(var Ce in n)M=n[Ce],n.hasOwnProperty(Ce)&&M!==void 0&&!r.hasOwnProperty(Ce)&&pu(e,t,Ce,void 0,r,M);for(L in r)M=r[L],B=n[L],!r.hasOwnProperty(L)||M===B||M===void 0&&B===void 0||pu(e,t,L,M,r,B);return}}for(var _ in n)M=n[_],n.hasOwnProperty(_)&&M!=null&&!r.hasOwnProperty(_)&&Te(e,t,_,null,r,M);for(Y in r)M=r[Y],B=n[Y],!r.hasOwnProperty(Y)||M===B||M==null&&B==null||Te(e,t,Y,M,r,B)}var xu=null,bu=null;function bs(e){return e.nodeType===9?e:e.ownerDocument}function Ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=null;function ky(){var e=window.event;return e&&e.type==="popstate"?e===vu?!1:(vu=e,!0):(vu=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(Cy)}:Hg;function Cy(e){setTimeout(function(){throw e})}function si(e){return e==="head"}function Gg(e,t){var n=t,r=0,l=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<r&&8>r){n=r;var m=e.ownerDocument;if(n&1&&Qa(m.documentElement),n&2&&Qa(m.body),n&4)for(n=m.head,Qa(n),m=n.firstChild;m;){var b=m.nextSibling,S=m.nodeName;m[oa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(l===0){e.removeChild(c),tl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:r=n.charCodeAt(0)-48;else r=0;n=c}while(n);tl(t)}function ju(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ju(n),_o(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ry(e,t,n,r){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[oa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function My(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=an(e.nextSibling),e===null))return null;return e}function Su(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function By(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var wu=null;function $g(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Vg(e,t,n){switch(t=bs(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Qa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_o(e)}var Zt=new Map,Yg=new Set;function ys(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=Q.d;Q.d={f:Dy,r:Oy,D:Ny,C:Ly,L:Hy,m:Uy,X:$y,S:Gy,M:Vy};function Dy(){var e=On.f(),t=us();return e||t}function Oy(e){var t=Xi(e);t!==null&&t.tag===5&&t.type==="form"?cm(t):On.r(e)}var Tr=typeof document>"u"?null:document;function Pg(e,t,n){var r=Tr;if(r&&typeof t=="string"&&t){var l=$t(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Yg.has(l)||(Yg.add(l),e={rel:e,crossOrigin:n,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),ot(t,"link",e),Fe(t),r.head.appendChild(t)))}}function Ny(e){On.D(e),Pg("dns-prefetch",e,null)}function Ly(e,t){On.C(e,t),Pg("preconnect",e,t)}function Hy(e,t,n){On.L(e,t,n);var r=Tr;if(r&&e&&t){var l='link[rel="preload"][as="'+$t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+$t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+$t(n.imageSizes)+'"]')):l+='[href="'+$t(e)+'"]';var c=l;switch(t){case"style":c=Cr(e);break;case"script":c=Rr(e)}Zt.has(c)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(c,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Za(c))||t==="script"&&r.querySelector(Xa(c))||(t=r.createElement("link"),ot(t,"link",e),Fe(t),r.head.appendChild(t)))}}function Uy(e,t){On.m(e,t);var n=Tr;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+$t(r)+'"][href="'+$t(e)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Rr(e)}if(!Zt.has(c)&&(e=y({rel:"modulepreload",href:e},t),Zt.set(c,e),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xa(c)))return}r=n.createElement("link"),ot(r,"link",e),Fe(r),n.head.appendChild(r)}}}function Gy(e,t,n){On.S(e,t,n);var r=Tr;if(r&&e){var l=Ji(r).hoistableStyles,c=Cr(e);t=t||"default";var m=l.get(c);if(!m){var b={loading:0,preload:null};if(m=r.querySelector(Za(c)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(c))&&zu(e,n);var S=m=r.createElement("link");Fe(S),ot(S,"link",e),S._p=new Promise(function(T,L){S.onload=T,S.onerror=L}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,vs(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:b},l.set(c,m)}}}function $y(e,t){On.X(e,t);var n=Tr;if(n&&e){var r=Ji(n).hoistableScripts,l=Rr(e),c=r.get(l);c||(c=n.querySelector(Xa(l)),c||(e=y({src:e,async:!0},t),(t=Zt.get(l))&&Eu(e,t),c=n.createElement("script"),Fe(c),ot(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Vy(e,t){On.M(e,t);var n=Tr;if(n&&e){var r=Ji(n).hoistableScripts,l=Rr(e),c=r.get(l);c||(c=n.querySelector(Xa(l)),c||(e=y({src:e,async:!0,type:"module"},t),(t=Zt.get(l))&&Eu(e,t),c=n.createElement("script"),Fe(c),ot(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function qg(e,t,n,r){var l=(l=re.current)?ys(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Cr(n.href),n=Ji(l).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Cr(n.href);var c=Ji(l).hoistableStyles,m=c.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=l.querySelector(Za(e)))&&!c._p&&(m.instance=c,m.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),c||Yy(l,e,n,m.state))),t&&r===null)throw Error(o(528,""));return m}if(t&&r!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rr(n),n=Ji(l).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Cr(e){return'href="'+$t(e)+'"'}function Za(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Yy(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),ot(t,"link",n),Fe(t),e.head.appendChild(t))}function Rr(e){return'[src="'+$t(e)+'"]'}function Xa(e){return"script[async]"+e}function Qg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+$t(n.href)+'"]');if(r)return t.instance=r,Fe(r),r;var l=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Fe(r),ot(r,"style",l),vs(r,n.precedence,e),t.instance=r;case"stylesheet":l=Cr(n.href);var c=e.querySelector(Za(l));if(c)return t.state.loading|=4,t.instance=c,Fe(c),c;r=Kg(n),(l=Zt.get(l))&&zu(r,l),c=(e.ownerDocument||e).createElement("link"),Fe(c);var m=c;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),ot(c,"link",r),t.state.loading|=4,vs(c,n.precedence,e),t.instance=c;case"script":return c=Rr(n.src),(l=e.querySelector(Xa(c)))?(t.instance=l,Fe(l),l):(r=n,(l=Zt.get(c))&&(r=y({},n),Eu(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Fe(l),ot(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,vs(r,n.precedence,e));return t.instance}function vs(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,m=0;m<r.length;m++){var b=r[m];if(b.dataset.precedence===t)c=b;else if(c!==l)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var js=null;function Zg(e,t,n){if(js===null){var r=new Map,l=js=new Map;l.set(n,r)}else l=js,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var c=n[l];if(!(c[oa]||c[ut]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var b=r.get(m);b?b.push(c):r.set(m,[c])}}return r}function Xg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Py(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ja=null;function qy(){}function Ky(e,t,n){if(Ja===null)throw Error(o(475));var r=Ja;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Cr(n.href),c=e.querySelector(Za(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Ss.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=c,Fe(c);return}c=e.ownerDocument||e,n=Kg(n),(l=Zt.get(l))&&zu(n,l),c=c.createElement("link"),Fe(c);var m=c;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),ot(c,"link",n),t.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=Ss.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function Qy(){if(Ja===null)throw Error(o(475));var e=Ja;return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Ss(){if(this.count--,this.count===0){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ws=null;function _u(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ws=new Map,t.forEach(Zy,e),ws=null,Ss.call(e))}function Zy(e,t){if(!(t.state.loading&4)){var n=ws.get(e);if(n)var r=n.get(null);else{n=new Map,ws.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),r=m)}r&&n.set(null,r)}l=t.instance,m=l.getAttribute("data-precedence"),c=n.get(m)||r,c===r&&n.set(null,l),n.set(m,l),this.count++,r=Ss.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Wa={$$typeof:A,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Xy(e,t,n,r,l,c,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=So(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.hiddenUpdates=So(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Wg(e,t,n,r,l,c,m,b,S,T,L,Y){return e=new Xy(e,t,n,m,b,S,T,Y),t=1,c===!0&&(t|=24),c=Tt(3,null,null,t),e.current=c,c.stateNode=e,t=sc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},dc(c),e}function Fg(e){return e?(e=or,e):or}function Ig(e,t,n,r,l,c){l=Fg(l),r.context===null?r.context=l:r.pendingContext=l,r=Zn(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Xn(e,r,t),n!==null&&(Dt(n,e,t),ka(n,e,t))}function e0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ku(e,t){e0(e,t),(e=e.alternate)&&e0(e,t)}function t0(e){if(e.tag===13){var t=sr(e,67108864);t!==null&&Dt(t,e,67108864),ku(e,67108864)}}var zs=!0;function Jy(e,t,n,r){var l=O.T;O.T=null;var c=Q.p;try{Q.p=2,Au(e,t,n,r)}finally{Q.p=c,O.T=l}}function Wy(e,t,n,r){var l=O.T;O.T=null;var c=Q.p;try{Q.p=8,Au(e,t,n,r)}finally{Q.p=c,O.T=l}}function Au(e,t,n,r){if(zs){var l=Tu(r);if(l===null)gu(e,t,r,Es,n),i0(e,r);else if(Iy(l,e,t,n,r))r.stopPropagation();else if(i0(e,r),t&4&&-1<Fy.indexOf(e)){for(;l!==null;){var c=Xi(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ji(c.pendingLanes);if(m!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-kt(m);b.entanglements[1]|=S,m&=~S}mn(c),(Ee&6)===0&&(os=cn()+500,Pa(0))}}break;case 13:b=sr(c,2),b!==null&&Dt(b,c,2),us(),ku(c,2)}if(c=Tu(r),c===null&&gu(e,t,r,Es,n),c===l)break;l=c}l!==null&&r.stopPropagation()}else gu(e,t,r,null,n)}}function Tu(e){return e=Do(e),Cu(e)}var Es=null;function Cu(e){if(Es=null,e=Zi(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Es=e,null}function n0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lb()){case pf:return 2;case xf:return 8;case xl:case Hb:return 32;case bf:return 268435456;default:return 32}default:return 32}}var Ru=!1,oi=null,ci=null,ui=null,Fa=new Map,Ia=new Map,di=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i0(e,t){switch(e){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":ui=null;break;case"pointerover":case"pointerout":Fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(t.pointerId)}}function el(e,t,n,r,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},t!==null&&(t=Xi(t),t!==null&&t0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Iy(e,t,n,r,l){switch(t){case"focusin":return oi=el(oi,e,t,n,r,l),!0;case"dragenter":return ci=el(ci,e,t,n,r,l),!0;case"mouseover":return ui=el(ui,e,t,n,r,l),!0;case"pointerover":var c=l.pointerId;return Fa.set(c,el(Fa.get(c)||null,e,t,n,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Ia.set(c,el(Ia.get(c)||null,e,t,n,r,l)),!0}return!1}function r0(e){var t=Zi(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=x(n),t!==null){e.blockedOn=t,Kb(e.priority,function(){if(n.tag===13){var r=Bt();r=wo(r);var l=sr(n,r);l!==null&&Dt(l,n,r),ku(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tu(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bo=r,n.target.dispatchEvent(r),Bo=null}else return t=Xi(n),t!==null&&t0(t),e.blockedOn=n,!1;t.shift()}return!0}function a0(e,t,n){_s(e)&&n.delete(t)}function ev(){Ru=!1,oi!==null&&_s(oi)&&(oi=null),ci!==null&&_s(ci)&&(ci=null),ui!==null&&_s(ui)&&(ui=null),Fa.forEach(a0),Ia.forEach(a0)}function ks(e,t){e.blockedOn===t&&(e.blockedOn=null,Ru||(Ru=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ev)))}var As=null;function l0(e){As!==e&&(As=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){As===e&&(As=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(Cu(r||n)===null)continue;break}var c=Xi(n);c!==null&&(e.splice(t,3),t-=3,Cc(c,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function tl(e){function t(S){return ks(S,e)}oi!==null&&ks(oi,e),ci!==null&&ks(ci,e),ui!==null&&ks(ui,e),Fa.forEach(t),Ia.forEach(t);for(var n=0;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<di.length&&(n=di[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&di.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],c=n[r+1],m=l[xt]||null;if(typeof c=="function")m||l0(n);else if(m){var b=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[xt]||null)b=m.formAction;else if(Cu(l)!==null)continue}else b=m.action;typeof b=="function"?n[r+1]=b:(n.splice(r,3),r-=3),l0(n)}}}function Mu(e){this._internalRoot=e}Ts.prototype.render=Mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,r=Bt();Ig(n,r,e,t,null,null)},Ts.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ig(e.current,2,null,e,null,null),us(),t[Qi]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<di.length&&t!==0&&t<di[n].priority;n++);di.splice(n,0,e),n===0&&r0(e)}};var s0=s.version;if(s0!=="19.1.0")throw Error(o(527,s0,"19.1.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var tv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{aa=Cs.inject(tv),_t=Cs}catch{}}return il.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,r="",l=wm,c=zm,m=Em,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=Wg(e,1,!1,null,null,n,r,l,c,m,b,null),e[Qi]=t.current,mu(e),new Mu(t)},il.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var r=!1,l="",c=wm,m=zm,b=Em,S=null,T=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(T=n.formState)),t=Wg(e,1,!0,t,n??null,r,l,c,m,b,S,T),t.context=Fg(null),n=t.current,r=Bt(),r=wo(r),l=Zn(r),l.callback=null,Xn(n,l,r),n=r,t.current.lanes=n,sa(t,n),mn(t),e[Qi]=t.current,mu(e),new Ts(t)},il.version="19.1.0",il}var x0;function fv(){if(x0)return Ou.exports;x0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Ou.exports=dv(),Ou.exports}var hv=fv(),rt=function(){return rt=Object.assign||function(s){for(var u,o=1,d=arguments.length;o<d;o++){u=arguments[o];for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(s[h]=u[h])}return s},rt.apply(this,arguments)};function Jr(i,s,u){if(u||arguments.length===2)for(var o=0,d=s.length,h;o<d;o++)(h||!(o in s))&&(h||(h=Array.prototype.slice.call(s,0,o)),h[o]=s[o]);return i.concat(h||Array.prototype.slice.call(s))}var De="-ms-",ul="-moz-",we="-webkit-",xp="comm",oo="rule",Jd="decl",mv="@import",bp="@keyframes",gv="@layer",yp=Math.abs,Wd=String.fromCharCode,Od=Object.assign;function pv(i,s){return it(i,0)^45?(((s<<2^it(i,0))<<2^it(i,1))<<2^it(i,2))<<2^it(i,3):0}function vp(i){return i.trim()}function Hn(i,s){return(i=s.exec(i))?i[0]:i}function ue(i,s,u){return i.replace(s,u)}function Ps(i,s,u){return i.indexOf(s,u)}function it(i,s){return i.charCodeAt(s)|0}function Wr(i,s,u){return i.slice(s,u)}function xn(i){return i.length}function jp(i){return i.length}function ol(i,s){return s.push(i),i}function xv(i,s){return i.map(s).join("")}function b0(i,s){return i.filter(function(u){return!Hn(u,s)})}var co=1,Fr=1,Sp=0,Xt=0,Qe=0,ta="";function uo(i,s,u,o,d,h,x,v){return{value:i,root:s,parent:u,type:o,props:d,children:h,line:co,column:Fr,length:x,return:"",siblings:v}}function pi(i,s){return Od(uo("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},s)}function Mr(i){for(;i.root;)i=pi(i.root,{children:[i]});ol(i,i.siblings)}function bv(){return Qe}function yv(){return Qe=Xt>0?it(ta,--Xt):0,Fr--,Qe===10&&(Fr=1,co--),Qe}function ln(){return Qe=Xt<Sp?it(ta,Xt++):0,Fr++,Qe===10&&(Fr=1,co++),Qe}function Vi(){return it(ta,Xt)}function qs(){return Xt}function fo(i,s){return Wr(ta,i,s)}function Nd(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vv(i){return co=Fr=1,Sp=xn(ta=i),Xt=0,[]}function jv(i){return ta="",i}function Uu(i){return vp(fo(Xt-1,Ld(i===91?i+2:i===40?i+1:i)))}function Sv(i){for(;(Qe=Vi())&&Qe<33;)ln();return Nd(i)>2||Nd(Qe)>3?"":" "}function wv(i,s){for(;--s&&ln()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return fo(i,qs()+(s<6&&Vi()==32&&ln()==32))}function Ld(i){for(;ln();)switch(Qe){case i:return Xt;case 34:case 39:i!==34&&i!==39&&Ld(Qe);break;case 40:i===41&&Ld(i);break;case 92:ln();break}return Xt}function zv(i,s){for(;ln()&&i+Qe!==57;)if(i+Qe===84&&Vi()===47)break;return"/*"+fo(s,Xt-1)+"*"+Wd(i===47?i:ln())}function Ev(i){for(;!Nd(Vi());)ln();return fo(i,Xt)}function _v(i){return jv(Ks("",null,null,null,[""],i=vv(i),0,[0],i))}function Ks(i,s,u,o,d,h,x,v,p){for(var g=0,y=0,j=x,w=0,D=0,R=0,H=1,G=1,U=1,K=0,A="",q=d,N=h,W=o,$=A;G;)switch(R=K,K=ln()){case 40:if(R!=108&&it($,j-1)==58){Ps($+=ue(Uu(K),"&","&\f"),"&\f",yp(g?v[g-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:$+=Uu(K);break;case 9:case 10:case 13:case 32:$+=Sv(R);break;case 92:$+=wv(qs()-1,7);continue;case 47:switch(Vi()){case 42:case 47:ol(kv(zv(ln(),qs()),s,u,p),p);break;default:$+="/"}break;case 123*H:v[g++]=xn($)*U;case 125*H:case 59:case 0:switch(K){case 0:case 125:G=0;case 59+y:U==-1&&($=ue($,/\f/g,"")),D>0&&xn($)-j&&ol(D>32?v0($+";",o,u,j-1,p):v0(ue($," ","")+";",o,u,j-2,p),p);break;case 59:$+=";";default:if(ol(W=y0($,s,u,g,y,d,v,A,q=[],N=[],j,h),h),K===123)if(y===0)Ks($,s,W,W,q,h,j,v,N);else switch(w===99&&it($,3)===110?100:w){case 100:case 108:case 109:case 115:Ks(i,W,W,o&&ol(y0(i,W,W,0,0,d,v,A,d,q=[],j,N),N),d,N,j,v,o?q:N);break;default:Ks($,W,W,W,[""],N,0,v,N)}}g=y=D=0,H=U=1,A=$="",j=x;break;case 58:j=1+xn($),D=R;default:if(H<1){if(K==123)--H;else if(K==125&&H++==0&&yv()==125)continue}switch($+=Wd(K),K*H){case 38:U=y>0?1:($+="\f",-1);break;case 44:v[g++]=(xn($)-1)*U,U=1;break;case 64:Vi()===45&&($+=Uu(ln())),w=Vi(),y=j=xn(A=$+=Ev(qs())),K++;break;case 45:R===45&&xn($)==2&&(H=0)}}return h}function y0(i,s,u,o,d,h,x,v,p,g,y,j){for(var w=d-1,D=d===0?h:[""],R=jp(D),H=0,G=0,U=0;H<o;++H)for(var K=0,A=Wr(i,w+1,w=yp(G=x[H])),q=i;K<R;++K)(q=vp(G>0?D[K]+" "+A:ue(A,/&\f/g,D[K])))&&(p[U++]=q);return uo(i,s,u,d===0?oo:v,p,g,y,j)}function kv(i,s,u,o){return uo(i,s,u,xp,Wd(bv()),Wr(i,2,-2),0,o)}function v0(i,s,u,o,d){return uo(i,s,u,Jd,Wr(i,0,o),Wr(i,o+1,-1),o,d)}function wp(i,s,u){switch(pv(i,s)){case 5103:return we+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+i+i;case 4789:return ul+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return we+i+ul+i+De+i+i;case 5936:switch(it(i,s+11)){case 114:return we+i+De+ue(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return we+i+De+ue(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return we+i+De+ue(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return we+i+De+i+i;case 6165:return we+i+De+"flex-"+i+i;case 5187:return we+i+ue(i,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+i;case 5443:return we+i+De+"flex-item-"+ue(i,/flex-|-self/g,"")+(Hn(i,/flex-|baseline/)?"":De+"grid-row-"+ue(i,/flex-|-self/g,""))+i;case 4675:return we+i+De+"flex-line-pack"+ue(i,/align-content|flex-|-self/g,"")+i;case 5548:return we+i+De+ue(i,"shrink","negative")+i;case 5292:return we+i+De+ue(i,"basis","preferred-size")+i;case 6060:return we+"box-"+ue(i,"-grow","")+we+i+De+ue(i,"grow","positive")+i;case 4554:return we+ue(i,/([^-])(transform)/g,"$1"+we+"$2")+i;case 6187:return ue(ue(ue(i,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),i,"")+i;case 5495:case 3959:return ue(i,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ue(ue(i,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+i+i;case 4200:if(!Hn(i,/flex-|baseline/))return De+"grid-column-align"+Wr(i,s)+i;break;case 2592:case 3360:return De+ue(i,"template-","")+i;case 4384:case 3616:return u&&u.some(function(o,d){return s=d,Hn(o.props,/grid-\w+-end/)})?~Ps(i+(u=u[s].value),"span",0)?i:De+ue(i,"-start","")+i+De+"grid-row-span:"+(~Ps(u,"span",0)?Hn(u,/\d+/):+Hn(u,/\d+/)-+Hn(i,/\d+/))+";":De+ue(i,"-start","")+i;case 4896:case 4128:return u&&u.some(function(o){return Hn(o.props,/grid-\w+-start/)})?i:De+ue(ue(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ue(i,/(.+)-inline(.+)/,we+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(i)-1-s>6)switch(it(i,s+1)){case 109:if(it(i,s+4)!==45)break;case 102:return ue(i,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+ul+(it(i,s+3)==108?"$3":"$2-$3"))+i;case 115:return~Ps(i,"stretch",0)?wp(ue(i,"stretch","fill-available"),s,u)+i:i}break;case 5152:case 5920:return ue(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,d,h,x,v,p,g){return De+d+":"+h+g+(x?De+d+"-span:"+(v?p:+p-+h)+g:"")+i});case 4949:if(it(i,s+6)===121)return ue(i,":",":"+we)+i;break;case 6444:switch(it(i,it(i,14)===45?18:11)){case 120:return ue(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(it(i,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+i;case 100:return ue(i,":",":"+De)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(i,"scroll-","scroll-snap-")+i}return i}function Fs(i,s){for(var u="",o=0;o<i.length;o++)u+=s(i[o],o,i,s)||"";return u}function Av(i,s,u,o){switch(i.type){case gv:if(i.children.length)break;case mv:case Jd:return i.return=i.return||i.value;case xp:return"";case bp:return i.return=i.value+"{"+Fs(i.children,o)+"}";case oo:if(!xn(i.value=i.props.join(",")))return""}return xn(u=Fs(i.children,o))?i.return=i.value+"{"+u+"}":""}function Tv(i){var s=jp(i);return function(u,o,d,h){for(var x="",v=0;v<s;v++)x+=i[v](u,o,d,h)||"";return x}}function Cv(i){return function(s){s.root||(s=s.return)&&i(s)}}function Rv(i,s,u,o){if(i.length>-1&&!i.return)switch(i.type){case Jd:i.return=wp(i.value,i.length,u);return;case bp:return Fs([pi(i,{value:ue(i.value,"@","@"+we)})],o);case oo:if(i.length)return xv(u=i.props,function(d){switch(Hn(d,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(pi(i,{props:[ue(d,/:(read-\w+)/,":"+ul+"$1")]})),Mr(pi(i,{props:[d]})),Od(i,{props:b0(u,o)});break;case"::placeholder":Mr(pi(i,{props:[ue(d,/:(plac\w+)/,":"+we+"input-$1")]})),Mr(pi(i,{props:[ue(d,/:(plac\w+)/,":"+ul+"$1")]})),Mr(pi(i,{props:[ue(d,/:(plac\w+)/,De+"input-$1")]})),Mr(pi(i,{props:[d]})),Od(i,{props:b0(u,o)});break}return""})}}var Mv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Ir=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",zp="active",Ep="data-styled-version",ho="6.1.19",Fd=`/*!sc*/
`,Is=typeof window<"u"&&typeof document<"u",Bv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),Dv={},mo=Object.freeze([]),ea=Object.freeze({});function _p(i,s,u){return u===void 0&&(u=ea),i.theme!==u.theme&&i.theme||s||u.theme}var kp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ov=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nv=/(^-|-$)/g;function j0(i){return i.replace(Ov,"-").replace(Nv,"")}var Lv=/(a)(d)/gi,Rs=52,S0=function(i){return String.fromCharCode(i+(i>25?39:97))};function Hd(i){var s,u="";for(s=Math.abs(i);s>Rs;s=s/Rs|0)u=S0(s%Rs)+u;return(S0(s%Rs)+u).replace(Lv,"$1-$2")}var Gu,Ap=5381,Kr=function(i,s){for(var u=s.length;u;)i=33*i^s.charCodeAt(--u);return i},Tp=function(i){return Kr(Ap,i)};function Id(i){return Hd(Tp(i)>>>0)}function Hv(i){return i.displayName||i.name||"Component"}function $u(i){return typeof i=="string"&&!0}var Cp=typeof Symbol=="function"&&Symbol.for,Rp=Cp?Symbol.for("react.memo"):60115,Uv=Cp?Symbol.for("react.forward_ref"):60112,Gv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vv=((Gu={})[Uv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gu[Rp]=Mp,Gu);function w0(i){return("type"in(s=i)&&s.type.$$typeof)===Rp?Mp:"$$typeof"in i?Vv[i.$$typeof]:Gv;var s}var Yv=Object.defineProperty,Pv=Object.getOwnPropertyNames,z0=Object.getOwnPropertySymbols,qv=Object.getOwnPropertyDescriptor,Kv=Object.getPrototypeOf,E0=Object.prototype;function Bp(i,s,u){if(typeof s!="string"){if(E0){var o=Kv(s);o&&o!==E0&&Bp(i,o,u)}var d=Pv(s);z0&&(d=d.concat(z0(s)));for(var h=w0(i),x=w0(s),v=0;v<d.length;++v){var p=d[v];if(!(p in $v||u&&u[p]||x&&p in x||h&&p in h)){var g=qv(s,p);try{Yv(i,p,g)}catch{}}}}return i}function Yi(i){return typeof i=="function"}function ef(i){return typeof i=="object"&&"styledComponentId"in i}function $i(i,s){return i&&s?"".concat(i," ").concat(s):i||s||""}function eo(i,s){if(i.length===0)return"";for(var u=i[0],o=1;o<i.length;o++)u+=i[o];return u}function dl(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ud(i,s,u){if(u===void 0&&(u=!1),!u&&!dl(i)&&!Array.isArray(i))return s;if(Array.isArray(s))for(var o=0;o<s.length;o++)i[o]=Ud(i[o],s[o]);else if(dl(s))for(var o in s)i[o]=Ud(i[o],s[o]);return i}function tf(i,s){Object.defineProperty(i,"toString",{value:s})}function Pi(i){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Qv=function(){function i(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return i.prototype.indexOfGroup=function(s){for(var u=0,o=0;o<s;o++)u+=this.groupSizes[o];return u},i.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var o=this.groupSizes,d=o.length,h=d;s>=h;)if((h<<=1)<0)throw Pi(16,"".concat(s));this.groupSizes=new Uint32Array(h),this.groupSizes.set(o),this.length=h;for(var x=d;x<h;x++)this.groupSizes[x]=0}for(var v=this.indexOfGroup(s+1),p=(x=0,u.length);x<p;x++)this.tag.insertRule(v,u[x])&&(this.groupSizes[s]++,v++)},i.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],o=this.indexOfGroup(s),d=o+u;this.groupSizes[s]=0;for(var h=o;h<d;h++)this.tag.deleteRule(o)}},i.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var o=this.groupSizes[s],d=this.indexOfGroup(s),h=d+o,x=d;x<h;x++)u+="".concat(this.tag.getRule(x)).concat(Fd);return u},i}(),Qs=new Map,to=new Map,Zs=1,Ms=function(i){if(Qs.has(i))return Qs.get(i);for(;to.has(Zs);)Zs++;var s=Zs++;return Qs.set(i,s),to.set(s,i),s},Zv=function(i,s){Zs=s+1,Qs.set(i,s),to.set(s,i)},Xv="style[".concat(Ir,"][").concat(Ep,'="').concat(ho,'"]'),Jv=new RegExp("^".concat(Ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wv=function(i,s,u){for(var o,d=u.split(","),h=0,x=d.length;h<x;h++)(o=d[h])&&i.registerName(s,o)},Fv=function(i,s){for(var u,o=((u=s.textContent)!==null&&u!==void 0?u:"").split(Fd),d=[],h=0,x=o.length;h<x;h++){var v=o[h].trim();if(v){var p=v.match(Jv);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(Zv(y,g),Wv(i,y,p[3]),i.getTag().insertRules(g,d)),d.length=0}else d.push(v)}}},_0=function(i){for(var s=document.querySelectorAll(Xv),u=0,o=s.length;u<o;u++){var d=s[u];d&&d.getAttribute(Ir)!==zp&&(Fv(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function Iv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dp=function(i){var s=document.head,u=i||s,o=document.createElement("style"),d=function(v){var p=Array.from(v.querySelectorAll("style[".concat(Ir,"]")));return p[p.length-1]}(u),h=d!==void 0?d.nextSibling:null;o.setAttribute(Ir,zp),o.setAttribute(Ep,ho);var x=Iv();return x&&o.setAttribute("nonce",x),u.insertBefore(o,h),o},e2=function(){function i(s){this.element=Dp(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,d=0,h=o.length;d<h;d++){var x=o[d];if(x.ownerNode===u)return x}throw Pi(17)}(this.element),this.length=0}return i.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},i.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},i}(),t2=function(){function i(s){this.element=Dp(s),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[s]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},i.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},i}(),n2=function(){function i(s){this.rules=[],this.length=0}return i.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},i.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},i.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},i}(),k0=Is,i2={isServer:!Is,useCSSOMInjection:!Bv},no=function(){function i(s,u,o){s===void 0&&(s=ea),u===void 0&&(u={});var d=this;this.options=rt(rt({},i2),s),this.gs=u,this.names=new Map(o),this.server=!!s.isServer,!this.server&&Is&&k0&&(k0=!1,_0(this)),tf(this,function(){return function(h){for(var x=h.getTag(),v=x.length,p="",g=function(j){var w=function(U){return to.get(U)}(j);if(w===void 0)return"continue";var D=h.names.get(w),R=x.getGroup(j);if(D===void 0||!D.size||R.length===0)return"continue";var H="".concat(Ir,".g").concat(j,'[id="').concat(w,'"]'),G="";D!==void 0&&D.forEach(function(U){U.length>0&&(G+="".concat(U,","))}),p+="".concat(R).concat(H,'{content:"').concat(G,'"}').concat(Fd)},y=0;y<v;y++)g(y);return p}(d)})}return i.registerId=function(s){return Ms(s)},i.prototype.rehydrate=function(){!this.server&&Is&&_0(this)},i.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new i(rt(rt({},this.options),s),this.gs,u&&this.names||void 0)},i.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var o=u.useCSSOMInjection,d=u.target;return u.isServer?new n2(d):o?new e2(d):new t2(d)}(this.options),new Qv(s)));var s},i.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},i.prototype.registerName=function(s,u){if(Ms(s),this.names.has(s))this.names.get(s).add(u);else{var o=new Set;o.add(u),this.names.set(s,o)}},i.prototype.insertRules=function(s,u,o){this.registerName(s,u),this.getTag().insertRules(Ms(s),o)},i.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},i.prototype.clearRules=function(s){this.getTag().clearGroup(Ms(s)),this.clearNames(s)},i.prototype.clearTag=function(){this.tag=void 0},i}(),r2=/&/g,a2=/^\s*\/\/.*$/gm;function Op(i,s){return i.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(o){return"".concat(s," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Op(u.children,s)),u})}function l2(i){var s,u,o,d=ea,h=d.options,x=h===void 0?ea:h,v=d.plugins,p=v===void 0?mo:v,g=function(w,D,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(s):w},y=p.slice();y.push(function(w){w.type===oo&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(r2,u).replace(o,g))}),x.prefix&&y.push(Rv),y.push(Av);var j=function(w,D,R,H){D===void 0&&(D=""),R===void 0&&(R=""),H===void 0&&(H="&"),s=H,u=D,o=new RegExp("\\".concat(u,"\\b"),"g");var G=w.replace(a2,""),U=_v(R||D?"".concat(R," ").concat(D," { ").concat(G," }"):G);x.namespace&&(U=Op(U,x.namespace));var K=[];return Fs(U,Tv(y.concat(Cv(function(A){return K.push(A)})))),K};return j.hash=p.length?p.reduce(function(w,D){return D.name||Pi(15),Kr(w,D.name)},Ap).toString():"",j}var s2=new no,Gd=l2(),Np=ze.createContext({shouldForwardProp:void 0,styleSheet:s2,stylis:Gd});Np.Consumer;ze.createContext(void 0);function $d(){return C.useContext(Np)}var Lp=function(){function i(s,u){var o=this;this.inject=function(d,h){h===void 0&&(h=Gd);var x=o.name+h.hash;d.hasNameForId(o.id,x)||d.insertRules(o.id,x,h(o.rules,x,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,tf(this,function(){throw Pi(12,String(o.name))})}return i.prototype.getName=function(s){return s===void 0&&(s=Gd),this.name+s.hash},i}(),o2=function(i){return i>="A"&&i<="Z"};function A0(i){for(var s="",u=0;u<i.length;u++){var o=i[u];if(u===1&&o==="-"&&i[0]==="-")return i;o2(o)?s+="-"+o.toLowerCase():s+=o}return s.startsWith("ms-")?"-"+s:s}var Hp=function(i){return i==null||i===!1||i===""},Up=function(i){var s,u,o=[];for(var d in i){var h=i[d];i.hasOwnProperty(d)&&!Hp(h)&&(Array.isArray(h)&&h.isCss||Yi(h)?o.push("".concat(A0(d),":"),h,";"):dl(h)?o.push.apply(o,Jr(Jr(["".concat(d," {")],Up(h),!1),["}"],!1)):o.push("".concat(A0(d),": ").concat((s=d,(u=h)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in Mv||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function xi(i,s,u,o){if(Hp(i))return[];if(ef(i))return[".".concat(i.styledComponentId)];if(Yi(i)){if(!Yi(h=i)||h.prototype&&h.prototype.isReactComponent||!s)return[i];var d=i(s);return xi(d,s,u,o)}var h;return i instanceof Lp?u?(i.inject(u,o),[i.getName(o)]):[i]:dl(i)?Up(i):Array.isArray(i)?Array.prototype.concat.apply(mo,i.map(function(x){return xi(x,s,u,o)})):[i.toString()]}function Gp(i){for(var s=0;s<i.length;s+=1){var u=i[s];if(Yi(u)&&!ef(u))return!1}return!0}var c2=Tp(ho),u2=function(){function i(s,u,o){this.rules=s,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Gp(s),this.componentId=u,this.baseHash=Kr(c2,u),this.baseStyle=o,no.registerId(u)}return i.prototype.generateAndInjectStyles=function(s,u,o){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=$i(d,this.staticRulesId);else{var h=eo(xi(this.rules,s,u,o)),x=Hd(Kr(this.baseHash,h)>>>0);if(!u.hasNameForId(this.componentId,x)){var v=o(h,".".concat(x),void 0,this.componentId);u.insertRules(this.componentId,x,v)}d=$i(d,x),this.staticRulesId=x}else{for(var p=Kr(this.baseHash,o.hash),g="",y=0;y<this.rules.length;y++){var j=this.rules[y];if(typeof j=="string")g+=j;else if(j){var w=eo(xi(j,s,u,o));p=Kr(p,w+y),g+=w}}if(g){var D=Hd(p>>>0);u.hasNameForId(this.componentId,D)||u.insertRules(this.componentId,D,o(g,".".concat(D),void 0,this.componentId)),d=$i(d,D)}}return d},i}(),fl=ze.createContext(void 0);fl.Consumer;function d2(i){var s=ze.useContext(fl),u=C.useMemo(function(){return function(o,d){if(!o)throw Pi(14);if(Yi(o)){var h=o(d);return h}if(Array.isArray(o)||typeof o!="object")throw Pi(8);return d?rt(rt({},d),o):o}(i.theme,s)},[i.theme,s]);return i.children?ze.createElement(fl.Provider,{value:u},i.children):null}var Vu={};function f2(i,s,u){var o=ef(i),d=i,h=!$u(i),x=s.attrs,v=x===void 0?mo:x,p=s.componentId,g=p===void 0?function(q,N){var W=typeof q!="string"?"sc":j0(q);Vu[W]=(Vu[W]||0)+1;var $="".concat(W,"-").concat(Id(ho+W+Vu[W]));return N?"".concat(N,"-").concat($):$}(s.displayName,s.parentComponentId):p,y=s.displayName,j=y===void 0?function(q){return $u(q)?"styled.".concat(q):"Styled(".concat(Hv(q),")")}(i):y,w=s.displayName&&s.componentId?"".concat(j0(s.displayName),"-").concat(s.componentId):s.componentId||g,D=o&&d.attrs?d.attrs.concat(v).filter(Boolean):v,R=s.shouldForwardProp;if(o&&d.shouldForwardProp){var H=d.shouldForwardProp;if(s.shouldForwardProp){var G=s.shouldForwardProp;R=function(q,N){return H(q,N)&&G(q,N)}}else R=H}var U=new u2(u,w,o?d.componentStyle:void 0);function K(q,N){return function(W,$,he){var oe=W.attrs,Me=W.componentStyle,J=W.defaultProps,ye=W.foldedComponentIds,pt=W.styledComponentId,at=W.target,ke=ze.useContext(fl),O=$d(),Q=W.shouldForwardProp||O.shouldForwardProp,ne=_p($,ke,J)||ea,ce=function(me,re,We){for(var Se,ct=rt(rt({},re),{className:void 0,theme:We}),vi=0;vi<me.length;vi+=1){var vn=Yi(Se=me[vi])?Se(ct):Se;for(var Ut in vn)ct[Ut]=Ut==="className"?$i(ct[Ut],vn[Ut]):Ut==="style"?rt(rt({},ct[Ut]),vn[Ut]):vn[Ut]}return re.className&&(ct.className=$i(ct.className,re.className)),ct}(oe,$,ne),z=ce.as||at,P={};for(var Z in ce)ce[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&ce.theme===ne||(Z==="forwardedAs"?P.as=ce.forwardedAs:Q&&!Q(Z,z)||(P[Z]=ce[Z]));var X=function(me,re){var We=$d(),Se=me.generateAndInjectStyles(re,We.styleSheet,We.stylis);return Se}(Me,ce),ee=$i(ye,pt);return X&&(ee+=" "+X),ce.className&&(ee+=" "+ce.className),P[$u(z)&&!kp.has(z)?"class":"className"]=ee,he&&(P.ref=he),C.createElement(z,P)}(A,q,N)}K.displayName=j;var A=ze.forwardRef(K);return A.attrs=D,A.componentStyle=U,A.displayName=j,A.shouldForwardProp=R,A.foldedComponentIds=o?$i(d.foldedComponentIds,d.styledComponentId):"",A.styledComponentId=w,A.target=o?d.target:i,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=o?function(N){for(var W=[],$=1;$<arguments.length;$++)W[$-1]=arguments[$];for(var he=0,oe=W;he<oe.length;he++)Ud(N,oe[he],!0);return N}({},d.defaultProps,q):q}}),tf(A,function(){return".".concat(A.styledComponentId)}),h&&Bp(A,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function T0(i,s){for(var u=[i[0]],o=0,d=s.length;o<d;o+=1)u.push(s[o],i[o+1]);return u}var C0=function(i){return Object.assign(i,{isCss:!0})};function hl(i){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Yi(i)||dl(i))return C0(xi(T0(mo,Jr([i],s,!0))));var o=i;return s.length===0&&o.length===1&&typeof o[0]=="string"?xi(o):C0(xi(T0(o,s)))}function Vd(i,s,u){if(u===void 0&&(u=ea),!s)throw Pi(1,s);var o=function(d){for(var h=[],x=1;x<arguments.length;x++)h[x-1]=arguments[x];return i(s,u,hl.apply(void 0,Jr([d],h,!1)))};return o.attrs=function(d){return Vd(i,s,rt(rt({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},o.withConfig=function(d){return Vd(i,s,rt(rt({},u),d))},o}var $p=function(i){return Vd(f2,i)},f=$p;kp.forEach(function(i){f[i]=$p(i)});var h2=function(){function i(s,u){this.rules=s,this.componentId=u,this.isStatic=Gp(s),no.registerId(this.componentId+1)}return i.prototype.createStyles=function(s,u,o,d){var h=d(eo(xi(this.rules,u,o,d)),""),x=this.componentId+s;o.insertRules(x,x,h)},i.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},i.prototype.renderStyles=function(s,u,o,d){s>2&&no.registerId(this.componentId+s),this.removeStyles(s,o),this.createStyles(s,u,o,d)},i}();function m2(i){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var o=hl.apply(void 0,Jr([i],s,!1)),d="sc-global-".concat(Id(JSON.stringify(o))),h=new h2(o,d),x=function(p){var g=$d(),y=ze.useContext(fl),j=ze.useRef(g.styleSheet.allocateGSInstance(d)).current;return g.styleSheet.server&&v(j,p,g.styleSheet,y,g.stylis),ze.useLayoutEffect(function(){if(!g.styleSheet.server)return v(j,p,g.styleSheet,y,g.stylis),function(){return h.removeStyles(j,g.styleSheet)}},[j,p,g.styleSheet,y,g.stylis]),null};function v(p,g,y,j,w){if(h.isStatic)h.renderStyles(p,Dv,y,w);else{var D=rt(rt({},g),{theme:_p(g,j,x.defaultProps)});h.renderStyles(p,D,y,w)}}return ze.memo(x)}function Vp(i){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var o=eo(hl.apply(void 0,Jr([i],s,!1))),d=Id(o);return new Lp(d,o)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var R0="popstate";function g2(i={}){function s(o,d){let{pathname:h,search:x,hash:v}=o.location;return Yd("",{pathname:h,search:x,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(o,d){return typeof d=="string"?d:ml(d)}return x2(s,u,null,i)}function He(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function Jt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function p2(){return Math.random().toString(36).substring(2,10)}function M0(i,s){return{usr:i.state,key:i.key,idx:s}}function Yd(i,s,u=null,o){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?na(s):s,state:u,key:s&&s.key||o||p2()}}function ml({pathname:i="/",search:s="",hash:u=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function na(i){let s={};if(i){let u=i.indexOf("#");u>=0&&(s.hash=i.substring(u),i=i.substring(0,u));let o=i.indexOf("?");o>=0&&(s.search=i.substring(o),i=i.substring(0,o)),i&&(s.pathname=i)}return s}function x2(i,s,u,o={}){let{window:d=document.defaultView,v5Compat:h=!1}=o,x=d.history,v="POP",p=null,g=y();g==null&&(g=0,x.replaceState({...x.state,idx:g},""));function y(){return(x.state||{idx:null}).idx}function j(){v="POP";let G=y(),U=G==null?null:G-g;g=G,p&&p({action:v,location:H.location,delta:U})}function w(G,U){v="PUSH";let K=Yd(H.location,G,U);g=y()+1;let A=M0(K,g),q=H.createHref(K);try{x.pushState(A,"",q)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;d.location.assign(q)}h&&p&&p({action:v,location:H.location,delta:1})}function D(G,U){v="REPLACE";let K=Yd(H.location,G,U);g=y();let A=M0(K,g),q=H.createHref(K);x.replaceState(A,"",q),h&&p&&p({action:v,location:H.location,delta:0})}function R(G){return b2(G)}let H={get action(){return v},get location(){return i(d,x)},listen(G){if(p)throw new Error("A history only accepts one active listener");return d.addEventListener(R0,j),p=G,()=>{d.removeEventListener(R0,j),p=null}},createHref(G){return s(d,G)},createURL:R,encodeLocation(G){let U=R(G);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:w,replace:D,go(G){return x.go(G)}};return H}function b2(i,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),He(u,"No window.location.(origin|href) available to create URL");let o=typeof i=="string"?i:ml(i);return o=o.replace(/ $/,"%20"),!s&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function Yp(i,s,u="/"){return y2(i,s,u,!1)}function y2(i,s,u,o){let d=typeof s=="string"?na(s):s,h=Vn(d.pathname||"/",u);if(h==null)return null;let x=Pp(i);v2(x);let v=null;for(let p=0;v==null&&p<x.length;++p){let g=R2(h);v=T2(x[p],g,o)}return v}function Pp(i,s=[],u=[],o=""){let d=(h,x,v)=>{let p={relativePath:v===void 0?h.path||"":v,caseSensitive:h.caseSensitive===!0,childrenIndex:x,route:h};p.relativePath.startsWith("/")&&(He(p.relativePath.startsWith(o),`Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(o.length));let g=Un([o,p.relativePath]),y=u.concat(p);h.children&&h.children.length>0&&(He(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Pp(h.children,s,y,g)),!(h.path==null&&!h.index)&&s.push({path:g,score:k2(g,h.index),routesMeta:y})};return i.forEach((h,x)=>{if(h.path===""||!h.path?.includes("?"))d(h,x);else for(let v of qp(h.path))d(h,x,v)}),s}function qp(i){let s=i.split("/");if(s.length===0)return[];let[u,...o]=s,d=u.endsWith("?"),h=u.replace(/\?$/,"");if(o.length===0)return d?[h,""]:[h];let x=qp(o.join("/")),v=[];return v.push(...x.map(p=>p===""?h:[h,p].join("/"))),d&&v.push(...x),v.map(p=>i.startsWith("/")&&p===""?"/":p)}function v2(i){i.sort((s,u)=>s.score!==u.score?u.score-s.score:A2(s.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var j2=/^:[\w-]+$/,S2=3,w2=2,z2=1,E2=10,_2=-2,B0=i=>i==="*";function k2(i,s){let u=i.split("/"),o=u.length;return u.some(B0)&&(o+=_2),s&&(o+=w2),u.filter(d=>!B0(d)).reduce((d,h)=>d+(j2.test(h)?S2:h===""?z2:E2),o)}function A2(i,s){return i.length===s.length&&i.slice(0,-1).every((o,d)=>o===s[d])?i[i.length-1]-s[s.length-1]:0}function T2(i,s,u=!1){let{routesMeta:o}=i,d={},h="/",x=[];for(let v=0;v<o.length;++v){let p=o[v],g=v===o.length-1,y=h==="/"?s:s.slice(h.length)||"/",j=io({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),w=p.route;if(!j&&g&&u&&!o[o.length-1].route.index&&(j=io({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!j)return null;Object.assign(d,j.params),x.push({params:d,pathname:Un([h,j.pathname]),pathnameBase:O2(Un([h,j.pathnameBase])),route:w}),j.pathnameBase!=="/"&&(h=Un([h,j.pathnameBase]))}return x}function io(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,o]=C2(i.path,i.caseSensitive,i.end),d=s.match(u);if(!d)return null;let h=d[0],x=h.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:o.reduce((g,{paramName:y,isOptional:j},w)=>{if(y==="*"){let R=v[w]||"";x=h.slice(0,h.length-R.length).replace(/(.)\/+$/,"$1")}const D=v[w];return j&&!D?g[y]=void 0:g[y]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:x,pattern:i}}function C2(i,s=!1,u=!0){Jt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let o=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,v,p)=>(o.push({paramName:v,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(o.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),o]}function R2(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Jt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function Vn(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,o=i.charAt(u);return o&&o!=="/"?null:i.slice(u)||"/"}function M2(i,s="/"){let{pathname:u,search:o="",hash:d=""}=typeof i=="string"?na(i):i;return{pathname:u?u.startsWith("/")?u:B2(u,s):s,search:N2(o),hash:L2(d)}}function B2(i,s){let u=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Yu(i,s,u,o){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function D2(i){return i.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function nf(i){let s=D2(i);return s.map((u,o)=>o===s.length-1?u.pathname:u.pathnameBase)}function rf(i,s,u,o=!1){let d;typeof i=="string"?d=na(i):(d={...i},He(!d.pathname||!d.pathname.includes("?"),Yu("?","pathname","search",d)),He(!d.pathname||!d.pathname.includes("#"),Yu("#","pathname","hash",d)),He(!d.search||!d.search.includes("#"),Yu("#","search","hash",d)));let h=i===""||d.pathname==="",x=h?"/":d.pathname,v;if(x==null)v=u;else{let j=s.length-1;if(!o&&x.startsWith("..")){let w=x.split("/");for(;w[0]==="..";)w.shift(),j-=1;d.pathname=w.join("/")}v=j>=0?s[j]:"/"}let p=M2(d,v),g=x&&x!=="/"&&x.endsWith("/"),y=(h||x===".")&&u.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var Un=i=>i.join("/").replace(/\/\/+/g,"/"),O2=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),N2=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,L2=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function H2(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Kp=["POST","PUT","PATCH","DELETE"];new Set(Kp);var U2=["GET",...Kp];new Set(U2);var ia=C.createContext(null);ia.displayName="DataRouter";var go=C.createContext(null);go.displayName="DataRouterState";C.createContext(!1);var Qp=C.createContext({isTransitioning:!1});Qp.displayName="ViewTransition";var G2=C.createContext(new Map);G2.displayName="Fetchers";var $2=C.createContext(null);$2.displayName="Await";var sn=C.createContext(null);sn.displayName="Navigation";var gl=C.createContext(null);gl.displayName="Location";var bn=C.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var af=C.createContext(null);af.displayName="RouteError";function V2(i,{relative:s}={}){He(ra(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=C.useContext(sn),{hash:d,pathname:h,search:x}=pl(i,{relative:s}),v=h;return u!=="/"&&(v=h==="/"?u:Un([u,h])),o.createHref({pathname:v,search:x,hash:d})}function ra(){return C.useContext(gl)!=null}function yn(){return He(ra(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(gl).location}var Zp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xp(i){C.useContext(sn).static||C.useLayoutEffect(i)}function lf(){let{isDataRoute:i}=C.useContext(bn);return i?t5():Y2()}function Y2(){He(ra(),"useNavigate() may be used only in the context of a <Router> component.");let i=C.useContext(ia),{basename:s,navigator:u}=C.useContext(sn),{matches:o}=C.useContext(bn),{pathname:d}=yn(),h=JSON.stringify(nf(o)),x=C.useRef(!1);return Xp(()=>{x.current=!0}),C.useCallback((p,g={})=>{if(Jt(x.current,Zp),!x.current)return;if(typeof p=="number"){u.go(p);return}let y=rf(p,JSON.parse(h),d,g.relative==="path");i==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:Un([s,y.pathname])),(g.replace?u.replace:u.push)(y,g.state,g)},[s,u,h,d,i])}C.createContext(null);function pl(i,{relative:s}={}){let{matches:u}=C.useContext(bn),{pathname:o}=yn(),d=JSON.stringify(nf(u));return C.useMemo(()=>rf(i,JSON.parse(d),o,s==="path"),[i,d,o,s])}function P2(i,s){return Jp(i,s)}function Jp(i,s,u,o){He(ra(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=C.useContext(sn),{matches:h}=C.useContext(bn),x=h[h.length-1],v=x?x.params:{},p=x?x.pathname:"/",g=x?x.pathnameBase:"/",y=x&&x.route;{let U=y&&y.path||"";Wp(p,!y||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let j=yn(),w;if(s){let U=typeof s=="string"?na(s):s;He(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),w=U}else w=j;let D=w.pathname||"/",R=D;if(g!=="/"){let U=g.replace(/^\//,"").split("/");R="/"+D.replace(/^\//,"").split("/").slice(U.length).join("/")}let H=Yp(i,{pathname:R});Jt(y||H!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Jt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=X2(H&&H.map(U=>Object.assign({},U,{params:Object.assign({},v,U.params),pathname:Un([g,d.encodeLocation?d.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:Un([g,d.encodeLocation?d.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),h,u,o);return s&&G?C.createElement(gl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},G):G}function q2(){let i=e5(),s=H2(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},x=null;return console.error("Error handled by React Router default ErrorBoundary:",i),x=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:h},"ErrorBoundary")," or"," ",C.createElement("code",{style:h},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},s),u?C.createElement("pre",{style:d},u):null,x)}var K2=C.createElement(q2,null),Q2=class extends C.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?C.createElement(bn.Provider,{value:this.props.routeContext},C.createElement(af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Z2({routeContext:i,match:s,children:u}){let o=C.useContext(ia);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(bn.Provider,{value:i},u)}function X2(i,s=[],u=null,o=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let d=i,h=u?.errors;if(h!=null){let p=d.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);He(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,p+1))}let x=!1,v=-1;if(u)for(let p=0;p<d.length;p++){let g=d[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=p),g.route.id){let{loaderData:y,errors:j}=u,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!j||j[g.route.id]===void 0);if(g.route.lazy||w){x=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}return d.reduceRight((p,g,y)=>{let j,w=!1,D=null,R=null;u&&(j=h&&g.route.id?h[g.route.id]:void 0,D=g.route.errorElement||K2,x&&(v<0&&y===0?(Wp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,R=null):v===y&&(w=!0,R=g.route.hydrateFallbackElement||null)));let H=s.concat(d.slice(0,y+1)),G=()=>{let U;return j?U=D:w?U=R:g.route.Component?U=C.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=p,C.createElement(Z2,{match:g,routeContext:{outlet:p,matches:H,isDataRoute:u!=null},children:U})};return u&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?C.createElement(Q2,{location:u.location,revalidation:u.revalidation,component:D,error:j,children:G(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):G()},null)}function sf(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J2(i){let s=C.useContext(ia);return He(s,sf(i)),s}function W2(i){let s=C.useContext(go);return He(s,sf(i)),s}function F2(i){let s=C.useContext(bn);return He(s,sf(i)),s}function of(i){let s=F2(i),u=s.matches[s.matches.length-1];return He(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function I2(){return of("useRouteId")}function e5(){let i=C.useContext(af),s=W2("useRouteError"),u=of("useRouteError");return i!==void 0?i:s.errors?.[u]}function t5(){let{router:i}=J2("useNavigate"),s=of("useNavigate"),u=C.useRef(!1);return Xp(()=>{u.current=!0}),C.useCallback(async(d,h={})=>{Jt(u.current,Zp),u.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:s,...h}))},[i,s])}var D0={};function Wp(i,s,u){!s&&!D0[i]&&(D0[i]=!0,Jt(!1,u))}C.memo(n5);function n5({routes:i,future:s,state:u}){return Jp(i,void 0,u,s)}function Xs({to:i,replace:s,state:u,relative:o}){He(ra(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=C.useContext(sn);Jt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=C.useContext(bn),{pathname:x}=yn(),v=lf(),p=rf(i,nf(h),x,o==="path"),g=JSON.stringify(p);return C.useEffect(()=>{v(JSON.parse(g),{replace:s,state:u,relative:o})},[v,g,o,s,u]),null}function pn(i){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function i5({basename:i="/",children:s=null,location:u,navigationType:o="POP",navigator:d,static:h=!1}){He(!ra(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=i.replace(/^\/*/,"/"),v=C.useMemo(()=>({basename:x,navigator:d,static:h,future:{}}),[x,d,h]);typeof u=="string"&&(u=na(u));let{pathname:p="/",search:g="",hash:y="",state:j=null,key:w="default"}=u,D=C.useMemo(()=>{let R=Vn(p,x);return R==null?null:{location:{pathname:R,search:g,hash:y,state:j,key:w},navigationType:o}},[x,p,g,y,j,w,o]);return Jt(D!=null,`<Router basename="${x}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:C.createElement(sn.Provider,{value:v},C.createElement(gl.Provider,{children:s,value:D}))}function r5({children:i,location:s}){return P2(Pd(i),s)}function Pd(i,s=[]){let u=[];return C.Children.forEach(i,(o,d)=>{if(!C.isValidElement(o))return;let h=[...s,d];if(o.type===C.Fragment){u.push.apply(u,Pd(o.props.children,h));return}He(o.type===pn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!o.props.index||!o.props.children,"An index route cannot have child routes.");let x={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(x.children=Pd(o.props.children,h)),u.push(x)}),u}var Js="get",Ws="application/x-www-form-urlencoded";function po(i){return i!=null&&typeof i.tagName=="string"}function a5(i){return po(i)&&i.tagName.toLowerCase()==="button"}function l5(i){return po(i)&&i.tagName.toLowerCase()==="form"}function s5(i){return po(i)&&i.tagName.toLowerCase()==="input"}function o5(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function c5(i,s){return i.button===0&&(!s||s==="_self")&&!o5(i)}function qd(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((s,u)=>{let o=i[u];return s.concat(Array.isArray(o)?o.map(d=>[u,d]):[[u,o]])},[]))}function u5(i,s){let u=qd(i);return s&&s.forEach((o,d)=>{u.has(d)||s.getAll(d).forEach(h=>{u.append(d,h)})}),u}var Bs=null;function d5(){if(Bs===null)try{new FormData(document.createElement("form"),0),Bs=!1}catch{Bs=!0}return Bs}var f5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pu(i){return i!=null&&!f5.has(i)?(Jt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ws}"`),null):i}function h5(i,s){let u,o,d,h,x;if(l5(i)){let v=i.getAttribute("action");o=v?Vn(v,s):null,u=i.getAttribute("method")||Js,d=Pu(i.getAttribute("enctype"))||Ws,h=new FormData(i)}else if(a5(i)||s5(i)&&(i.type==="submit"||i.type==="image")){let v=i.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||v.getAttribute("action");if(o=p?Vn(p,s):null,u=i.getAttribute("formmethod")||v.getAttribute("method")||Js,d=Pu(i.getAttribute("formenctype"))||Pu(v.getAttribute("enctype"))||Ws,h=new FormData(v,i),!d5()){let{name:g,type:y,value:j}=i;if(y==="image"){let w=g?`${g}.`:"";h.append(`${w}x`,"0"),h.append(`${w}y`,"0")}else g&&h.append(g,j)}}else{if(po(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Js,o=null,d=Ws,x=i}return h&&d==="text/plain"&&(x=h,h=void 0),{action:o,method:u.toLowerCase(),encType:d,formData:h,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cf(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function m5(i,s,u){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname=`_root.${u}`:s&&Vn(o.pathname,s)==="/"?o.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function g5(i,s){if(i.id in s)return s[i.id];try{let u=await import(i.module);return s[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function p5(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function x5(i,s,u){let o=await Promise.all(i.map(async d=>{let h=s.routes[d.route.id];if(h){let x=await g5(h,u);return x.links?x.links():[]}return[]}));return j5(o.flat(1).filter(p5).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function O0(i,s,u,o,d,h){let x=(p,g)=>u[g]?p.route.id!==u[g].route.id:!0,v=(p,g)=>u[g].pathname!==p.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==p.params["*"];return h==="assets"?s.filter((p,g)=>x(p,g)||v(p,g)):h==="data"?s.filter((p,g)=>{let y=o.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(x(p,g)||v(p,g))return!0;if(p.route.shouldRevalidate){let j=p.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function b5(i,s,{includeHydrateFallback:u}={}){return y5(i.map(o=>{let d=s.routes[o.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function y5(i){return[...new Set(i)]}function v5(i){let s={},u=Object.keys(i).sort();for(let o of u)s[o]=i[o];return s}function j5(i,s){let u=new Set;return new Set(s),i.reduce((o,d)=>{let h=JSON.stringify(v5(d));return u.has(h)||(u.add(h),o.push({key:h,link:d})),o},[])}function Fp(){let i=C.useContext(ia);return cf(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function S5(){let i=C.useContext(go);return cf(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var uf=C.createContext(void 0);uf.displayName="FrameworkContext";function Ip(){let i=C.useContext(uf);return cf(i,"You must render this element inside a <HydratedRouter> element"),i}function w5(i,s){let u=C.useContext(uf),[o,d]=C.useState(!1),[h,x]=C.useState(!1),{onFocus:v,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:j}=s,w=C.useRef(null);C.useEffect(()=>{if(i==="render"&&x(!0),i==="viewport"){let H=U=>{U.forEach(K=>{x(K.isIntersecting)})},G=new IntersectionObserver(H,{threshold:.5});return w.current&&G.observe(w.current),()=>{G.disconnect()}}},[i]),C.useEffect(()=>{if(o){let H=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(H)}}},[o]);let D=()=>{d(!0)},R=()=>{d(!1),x(!1)};return u?i!=="intent"?[h,w,{}]:[h,w,{onFocus:rl(v,D),onBlur:rl(p,R),onMouseEnter:rl(g,D),onMouseLeave:rl(y,R),onTouchStart:rl(j,D)}]:[!1,w,{}]}function rl(i,s){return u=>{i&&i(u),u.defaultPrevented||s(u)}}function z5({page:i,...s}){let{router:u}=Fp(),o=C.useMemo(()=>Yp(u.routes,i,u.basename),[u.routes,i,u.basename]);return o?C.createElement(_5,{page:i,matches:o,...s}):null}function E5(i){let{manifest:s,routeModules:u}=Ip(),[o,d]=C.useState([]);return C.useEffect(()=>{let h=!1;return x5(i,s,u).then(x=>{h||d(x)}),()=>{h=!0}},[i,s,u]),o}function _5({page:i,matches:s,...u}){let o=yn(),{manifest:d,routeModules:h}=Ip(),{basename:x}=Fp(),{loaderData:v,matches:p}=S5(),g=C.useMemo(()=>O0(i,s,p,d,o,"data"),[i,s,p,d,o]),y=C.useMemo(()=>O0(i,s,p,d,o,"assets"),[i,s,p,d,o]),j=C.useMemo(()=>{if(i===o.pathname+o.search+o.hash)return[];let R=new Set,H=!1;if(s.forEach(U=>{let K=d.routes[U.route.id];!K||!K.hasLoader||(!g.some(A=>A.route.id===U.route.id)&&U.route.id in v&&h[U.route.id]?.shouldRevalidate||K.hasClientLoader?H=!0:R.add(U.route.id))}),R.size===0)return[];let G=m5(i,x,"data");return H&&R.size>0&&G.searchParams.set("_routes",s.filter(U=>R.has(U.route.id)).map(U=>U.route.id).join(",")),[G.pathname+G.search]},[x,v,o,d,g,s,i,h]),w=C.useMemo(()=>b5(y,d),[y,d]),D=E5(y);return C.createElement(C.Fragment,null,j.map(R=>C.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),w.map(R=>C.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),D.map(({key:R,link:H})=>C.createElement("link",{key:R,...H})))}function k5(...i){return s=>{i.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var ex=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ex&&(window.__reactRouterVersion="7.7.1")}catch{}function A5({basename:i,children:s,window:u}){let o=C.useRef();o.current==null&&(o.current=g2({window:u,v5Compat:!0}));let d=o.current,[h,x]=C.useState({action:d.action,location:d.location}),v=C.useCallback(p=>{C.startTransition(()=>x(p))},[x]);return C.useLayoutEffect(()=>d.listen(v),[d,v]),C.createElement(i5,{basename:i,children:s,location:h.location,navigationType:h.action,navigator:d})}var tx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xo=C.forwardRef(function({onClick:s,discover:u="render",prefetch:o="none",relative:d,reloadDocument:h,replace:x,state:v,target:p,to:g,preventScrollReset:y,viewTransition:j,...w},D){let{basename:R}=C.useContext(sn),H=typeof g=="string"&&tx.test(g),G,U=!1;if(typeof g=="string"&&H&&(G=g,ex))try{let oe=new URL(window.location.href),Me=g.startsWith("//")?new URL(oe.protocol+g):new URL(g),J=Vn(Me.pathname,R);Me.origin===oe.origin&&J!=null?g=J+Me.search+Me.hash:U=!0}catch{Jt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=V2(g,{relative:d}),[A,q,N]=w5(o,w),W=M5(g,{replace:x,state:v,target:p,preventScrollReset:y,relative:d,viewTransition:j});function $(oe){s&&s(oe),oe.defaultPrevented||W(oe)}let he=C.createElement("a",{...w,...N,href:G||K,onClick:U||h?s:$,ref:k5(D,q),target:p,"data-discover":!H&&u==="render"?"true":void 0});return A&&!H?C.createElement(C.Fragment,null,he,C.createElement(z5,{page:K})):he});xo.displayName="Link";var T5=C.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:o="",end:d=!1,style:h,to:x,viewTransition:v,children:p,...g},y){let j=pl(x,{relative:g.relative}),w=yn(),D=C.useContext(go),{navigator:R,basename:H}=C.useContext(sn),G=D!=null&&L5(j)&&v===!0,U=R.encodeLocation?R.encodeLocation(j).pathname:j.pathname,K=w.pathname,A=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;u||(K=K.toLowerCase(),A=A?A.toLowerCase():null,U=U.toLowerCase()),A&&H&&(A=Vn(A,H)||A);const q=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let N=K===U||!d&&K.startsWith(U)&&K.charAt(q)==="/",W=A!=null&&(A===U||!d&&A.startsWith(U)&&A.charAt(U.length)==="/"),$={isActive:N,isPending:W,isTransitioning:G},he=N?s:void 0,oe;typeof o=="function"?oe=o($):oe=[o,N?"active":null,W?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Me=typeof h=="function"?h($):h;return C.createElement(xo,{...g,"aria-current":he,className:oe,ref:y,style:Me,to:x,viewTransition:v},typeof p=="function"?p($):p)});T5.displayName="NavLink";var C5=C.forwardRef(({discover:i="render",fetcherKey:s,navigate:u,reloadDocument:o,replace:d,state:h,method:x=Js,action:v,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:j,...w},D)=>{let R=O5(),H=N5(v,{relative:g}),G=x.toLowerCase()==="get"?"get":"post",U=typeof v=="string"&&tx.test(v),K=A=>{if(p&&p(A),A.defaultPrevented)return;A.preventDefault();let q=A.nativeEvent.submitter,N=q?.getAttribute("formmethod")||x;R(q||A.currentTarget,{fetcherKey:s,method:N,navigate:u,replace:d,state:h,relative:g,preventScrollReset:y,viewTransition:j})};return C.createElement("form",{ref:D,method:G,action:H,onSubmit:o?p:K,...w,"data-discover":!U&&i==="render"?"true":void 0})});C5.displayName="Form";function R5(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nx(i){let s=C.useContext(ia);return He(s,R5(i)),s}function M5(i,{target:s,replace:u,state:o,preventScrollReset:d,relative:h,viewTransition:x}={}){let v=lf(),p=yn(),g=pl(i,{relative:h});return C.useCallback(y=>{if(c5(y,s)){y.preventDefault();let j=u!==void 0?u:ml(p)===ml(g);v(i,{replace:j,state:o,preventScrollReset:d,relative:h,viewTransition:x})}},[p,v,g,u,o,s,i,d,h,x])}function ix(i){Jt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=C.useRef(qd(i)),u=C.useRef(!1),o=yn(),d=C.useMemo(()=>u5(o.search,u.current?null:s.current),[o.search]),h=lf(),x=C.useCallback((v,p)=>{const g=qd(typeof v=="function"?v(new URLSearchParams(d)):v);u.current=!0,h("?"+g,p)},[h,d]);return[d,x]}var B5=0,D5=()=>`__${String(++B5)}__`;function O5(){let{router:i}=nx("useSubmit"),{basename:s}=C.useContext(sn),u=I2();return C.useCallback(async(o,d={})=>{let{action:h,method:x,encType:v,formData:p,body:g}=h5(o,s);if(d.navigate===!1){let y=d.fetcherKey||D5();await i.fetch(y,u,d.action||h,{preventScrollReset:d.preventScrollReset,formData:p,body:g,formMethod:d.method||x,formEncType:d.encType||v,flushSync:d.flushSync})}else await i.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:p,body:g,formMethod:d.method||x,formEncType:d.encType||v,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,s,u])}function N5(i,{relative:s}={}){let{basename:u}=C.useContext(sn),o=C.useContext(bn);He(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),h={...pl(i||".",{relative:s})},x=yn();if(i==null){h.search=x.search;let v=new URLSearchParams(h.search),p=v.getAll("index");if(p.some(y=>y==="")){v.delete("index"),p.filter(j=>j).forEach(j=>v.append("index",j));let y=v.toString();h.search=y?`?${y}`:""}}return(!i||i===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:Un([u,h.pathname])),ml(h)}function L5(i,{relative:s}={}){let u=C.useContext(Qp);He(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=nx("useViewTransitionState"),d=pl(i,{relative:s});if(!u.isTransitioning)return!1;let h=Vn(u.currentLocation.pathname,o)||u.currentLocation.pathname,x=Vn(u.nextLocation.pathname,o)||u.nextLocation.pathname;return io(d.pathname,x)!=null||io(d.pathname,h)!=null}const H5="/assets/logo-BY-LKRi7.png",U5=f.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,G5=f.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,$5=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,V5=f.img`
  height: 40px;
  width: auto;
`,Y5=f.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${i=>i.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,P5=f.div`
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
    display: ${i=>i.$open?"flex":"none"};
  }
`,qu=f(xo)`
  text-decoration: none;
  color: ${i=>i.$active?i.theme.colors.primary:"#333"};
  font-weight: ${i=>i.$active?"700":"600"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${i=>i.$active?`2px solid ${i.theme.colors.primary}`:"2px solid transparent"};

  &:hover {
    color: ${i=>i.theme.colors.primary};
    background: rgba(217, 36, 95, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: rgba(217, 36, 95, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`,q5=f.button`
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
`;function Br(){const i=yn(),[s,u]=C.useState(!1);return a.jsx(U5,{children:a.jsxs(G5,{children:[a.jsx(qu,{to:"/",onClick:()=>u(!1),children:a.jsxs($5,{children:[a.jsx(V5,{src:H5,alt:"SCKW Logo"}),a.jsx(Y5,{children:"SC Konstanz-Wollmatingen e. V."})]})}),a.jsxs(q5,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>u(d=>!d),children:["Menü",a.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),a.jsxs(P5,{id:"mobile-nav",$open:s,children:[a.jsx(qu,{to:"/sponsoring",$active:i.pathname==="/sponsoring"||i.pathname==="/sponsoring-v2",onClick:()=>u(!1),children:"🤝 Sponsoring"}),a.jsx(qu,{to:"/jobs",$active:i.pathname==="/jobs",onClick:()=>u(!1),children:"💼 Jobbörse"}),!1]})]})})}const K5=f.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Ku=f.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,N0=f(xo)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,Q5=f.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,Z5=f.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function bo(){return a.jsx(K5,{children:a.jsxs(Q5,{children:[a.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",a.jsx(Ku,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),a.jsxs(Z5,{"aria-label":"Rechtliches",children:[a.jsx(N0,{to:"/sponsoring/500er",children:"500er Club"}),a.jsx(N0,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),a.jsx(Ku,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),a.jsx(Ku,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const Gn=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),X5=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,J5=f.div`
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
`,W5=f.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,F5=f.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,I5=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,ej=f.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,tj=f.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,nj=f.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,ij=f.li`
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
`,rj=f.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,aj=f.span`
  flex: 1;
`,lj=f.a`
  display: inline-block;
  background: ${i=>i.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 1.75rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${i=>i.isVergeben?"none":"auto"};
  margin-top: auto;
  border: ${i=>i.isVergeben?"2px solid #ccc":"2px solid #e10073"};
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${i=>i.isVergeben?"#ccc":"#b8005a"};
    border-color: ${i=>i.isVergeben?"#ccc":"#b8005a"};
    transform: ${i=>i.isVergeben?"none":"translateY(-1px)"};
    box-shadow: ${i=>i.isVergeben?"none":"0 4px 12px rgba(225, 0, 115, 0.3)"};
  }

  &:focus {
    outline: 3px solid
      ${i=>i.isVergeben?"#ccc":"rgba(225, 0, 115, 0.5)"};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
    padding: 1rem 1.5rem;
  }
`,sj=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,oj=f.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,cj=f.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,uj=f.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,dj=f.a`
  display: inline-block;
  background: #f0f0f0;
  color: #e10073;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;

  &:hover {
    background: #e10073;
    color: white;
    border-color: #e10073;
    transform: translateY(-1px);
  }
`,fj="sponsoring@sckw.de";function Zr({packages:i}){const s=x=>x.toLowerCase().includes("verfügbar")?"verfügbar":x.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=x=>{const v=x.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return v?v[0]:""},o=x=>{const v=x.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),p=encodeURIComponent(`Interesse am Sponsoring-Paket "${v}"`),g=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${v}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${fj}?subject=${p}&body=${g}`},d=x=>{const v=x.maxSponsors-(x.sponsors?.length||0);return{availableSlots:v,isFullyBooked:v===0}},h=i.filter(x=>!x.title.includes("Platz-Renovierung"));return a.jsx(X5,{children:h.map((x,v)=>{const{isFullyBooked:p}=d(x),g=s(x.status),y=g==="vergeben"||p,j=p?"vergeben":g,w=x.keyBenefits||[];return a.jsxs(J5,{isVergeben:y,children:[a.jsxs(W5,{children:[a.jsx(F5,{children:u(x.title)}),a.jsx(I5,{children:x.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!y&&a.jsx(ej,{children:x.price}),a.jsx(tj,{status:j,children:j==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),y&&x.sponsors&&x.sponsors.length>0?a.jsxs(sj,{children:[x.sponsors[0].image&&a.jsx(oj,{src:`/sponsors/${x.sponsors[0].image}`,alt:x.sponsors[0].name}),a.jsx(cj,{children:x.sponsors[0].name}),a.jsxs(uj,{children:["Hauptsponsor seit ",x.sponsors[0].since]}),x.sponsors[0].website&&a.jsx(dj,{href:x.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):a.jsx(nj,{children:w.map((D,R)=>a.jsxs(ij,{isHighlight:D.highlight,children:[a.jsx(rj,{children:D.icon}),a.jsx(aj,{children:D.text})]},R))}),a.jsx(lj,{href:y?void 0:o(x.title),isVergeben:y,children:y?"Vergeben":"Jetzt anfragen"})]},v)})})}const hj=f.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${i=>i.theme.colors.bgMuted};
  border: 1px solid ${i=>i.theme.colors.border};
  overflow: hidden;
`,mj=f.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,gj=f.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${i=>i.isOpen?i.theme.colors.bg:i.theme.colors.bgMuted};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: ${i=>i.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  span {
    text-align: left;
  }

  &:hover {
    background: ${i=>i.theme.colors.bg};
  }

  &:focus {
    outline: 2px solid #e10073;
    outline-offset: -2px;
  }
`,pj=f.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${i=>i.theme.colors.primary};
`,xj=f.div`
  background: ${i=>i.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,bj=f.div`
  padding: 1.5rem;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  color: ${i=>i.theme.colors.text};
  text-align: left;

  b {
    color: ${i=>i.theme.colors.primary};
    font-weight: 600;
  }

  br {
    margin-bottom: 0.5rem;
  }
`,yj=f.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,vj=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:a.jsx(a.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function jj(){const[i,s]=C.useState([]),u=d=>{s(h=>h.includes(d)?h.filter(x=>x!==d):[...h,d])},o=(d,h)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),u(h))};return a.jsx(hj,{children:vj.map(d=>{const h=i.includes(d.id);return a.jsxs(mj,{children:[a.jsxs(gj,{isOpen:h,onClick:()=>u(d.id),onKeyDown:x=>o(x,d.id),"aria-expanded":h,"aria-controls":`accordion-content-${d.id}`,children:[a.jsxs("span",{children:[a.jsx(yj,{children:d.icon}),d.title]}),a.jsx(pj,{isOpen:h,children:"▼"})]}),a.jsx(xj,{isOpen:h,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:a.jsx(bj,{children:d.content})})]},d.id)})})}const rx="/assets/cheerleading_0-DQQGXi0R.jpg",ax="/assets/cheerleading_1-NkLBARmH.jpg",lx="/assets/cheerleading_2-CrezcZYL.jpg",sx="/assets/cheerleading_3-GN5rPHNN.jpg",ox="/assets/1-ClVWb4ei.png",cx="/assets/10-Bwp2eIye.png",ux="/assets/11-W061sOUI.png",dx="/assets/12-TjJyzl8L.png",fx="/assets/13-ChUUCdQQ.png",hx="/assets/14-BVhdRr98.png",mx="/assets/2-CcfgIQYe.png",gx="/assets/3-DYiPkVd7.png",px="/assets/4-1upoqVoS.png",xx="/assets/5-D0tadXAC.png",bx="/assets/6-NJ4ELm_j.png",yx="/assets/7-BXo4_Bcj.png",vx="/assets/8-BbOqEnj_.png",jx="/assets/9-CIK0gi9o.png",Sx="/assets/herren_0-BVVgyt1l.jpg",wx="/assets/herren_1-B8ywOnNy.jpg",zx="/assets/herren_10-DPVQsg9B.jpg",Ex="/assets/herren_11-wfWG62H3.jpg",_x="/assets/herren_12-DEJSN2zG.jpg",kx="/assets/herren_13-F52vdukE.jpg",Ax="/assets/herren_14-Cq9hoKfG.jpg",Tx="/assets/herren_15-aYIFGauG.jpg",Cx="/assets/herren_16-NYI2EaEN.jpg",Rx="/assets/herren_17-B_52ysA2.jpg",Mx="/assets/herren_18-DbwjVNKJ.jpg",Bx="/assets/herren_19-BduD_J85.png",Dx="/assets/herren_2--jFuixBF.jpg",Ox="/assets/herren_3-BPz1zlkG.jpg",Nx="/assets/herren_4-BZRrQaFr.jpg",Lx="/assets/herren_5-D-QrfY2P.jpg",Hx="/assets/herren_6-DWQvi6Am.jpg",Ux="/assets/herren_7-BXO6B8Bt.jpg",Gx="/assets/herren_8-Cg4rdr7T.jpg",$x="/assets/herren_9-DoLnTdRG.jpg",Vx="/assets/herren_club500_1-DNikBmOh.png",Yx="/assets/herren_club500_2-CABnv8vs.png",Px="/assets/herren_club500_3-Cjxe_RiU.png",qx="/assets/herren_club500_4-Dgm0Z9_i.png",Kx="/assets/herren_club500_5-3OeJLCAP.png",Qx="/assets/herren_jubel_500club-mxBrnD8H.png",Zx="/assets/IMG-team-BGcF1agj.png",Xx="/assets/IMG_5349-CpvIVKhM.jpg",Jx="/assets/IMG_5369-DQ4CSwdg.jpg",Wx="/assets/IMG_5421-BBzniIEN.jpg",Fx="/assets/IMG_5442-D2PgutWB.jpg",Ix="/assets/IMG_5952-B9VW6Qie.jpg",eb="/assets/Unbenann324t-IPGo6eoQ.png",tb="/assets/image0-DDrU5aZn.jpeg",nb="/assets/image11-BNM8hTkT.jpeg",ib="/assets/image8-BUnedp9U.jpeg",Sj="/assets/grafhardenberg-Di5cVggE.png",wj="/assets/horta-DydWIGV7.png",zj="/assets/logans-BgpKwKYA.png",Ej="/assets/ricobet-DsVC-eZt.png",_j="/assets/rothaus-DqkKD9yW.png",kj="/assets/tasty-B2pSa1rE.png",Aj="/assets/cabin-window-B83r_CDB.jpg",Tj="/assets/outside-9-xz17qL.jpg",Cj="/assets/shower-B75caJ-F.jpg",Rj="/assets/sitting-area-D7khB3Gw.jpg",Mj="/assets/toilet-BpMHYbhh.jpg",Bj=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":rx,"../assets/gallery/cheerleading/cheerleading_1.jpg":ax,"../assets/gallery/cheerleading/cheerleading_2.jpg":lx,"../assets/gallery/cheerleading/cheerleading_3.jpg":sx,"../assets/gallery/damen/1.png":ox,"../assets/gallery/damen/10.png":cx,"../assets/gallery/damen/11.png":ux,"../assets/gallery/damen/12.png":dx,"../assets/gallery/damen/13.png":fx,"../assets/gallery/damen/14.png":hx,"../assets/gallery/damen/2.png":mx,"../assets/gallery/damen/3.png":gx,"../assets/gallery/damen/4.png":px,"../assets/gallery/damen/5.png":xx,"../assets/gallery/damen/6.png":bx,"../assets/gallery/damen/7.png":yx,"../assets/gallery/damen/8.png":vx,"../assets/gallery/damen/9.png":jx,"../assets/gallery/herren/herren_0.jpg":Sx,"../assets/gallery/herren/herren_1.jpg":wx,"../assets/gallery/herren/herren_10.jpg":zx,"../assets/gallery/herren/herren_11.jpg":Ex,"../assets/gallery/herren/herren_12.jpg":_x,"../assets/gallery/herren/herren_13.jpg":kx,"../assets/gallery/herren/herren_14.jpg":Ax,"../assets/gallery/herren/herren_15.jpg":Tx,"../assets/gallery/herren/herren_16.jpg":Cx,"../assets/gallery/herren/herren_17.jpg":Rx,"../assets/gallery/herren/herren_18.jpg":Mx,"../assets/gallery/herren/herren_19.png":Bx,"../assets/gallery/herren/herren_2.jpg":Dx,"../assets/gallery/herren/herren_3.jpg":Ox,"../assets/gallery/herren/herren_4.jpg":Nx,"../assets/gallery/herren/herren_5.jpg":Lx,"../assets/gallery/herren/herren_6.jpg":Hx,"../assets/gallery/herren/herren_7.jpg":Ux,"../assets/gallery/herren/herren_8.jpg":Gx,"../assets/gallery/herren/herren_9.jpg":$x,"../assets/gallery/herren/herren_club500_1.png":Vx,"../assets/gallery/herren/herren_club500_2.png":Yx,"../assets/gallery/herren/herren_club500_3.png":Px,"../assets/gallery/herren/herren_club500_4.png":qx,"../assets/gallery/herren/herren_club500_5.png":Kx,"../assets/gallery/herren/herren_jubel_500club.png":Qx,"../assets/gallery/jfv/IMG-team.png":Zx,"../assets/gallery/jfv/IMG_5349.jpg":Xx,"../assets/gallery/jfv/IMG_5369.jpg":Jx,"../assets/gallery/jfv/IMG_5421.jpg":Wx,"../assets/gallery/jfv/IMG_5442.jpg":Fx,"../assets/gallery/jfv/IMG_5952.jpg":Ix,"../assets/gallery/jfv/Unbenann324t.png":eb,"../assets/gallery/jfv/image0.jpeg":tb,"../assets/gallery/jfv/image11.jpeg":nb,"../assets/gallery/jfv/image8.jpeg":ib}),Dj=Object.assign({"../assets/sponsors/grafhardenberg.png":Sj,"../assets/sponsors/horta.png":wj,"../assets/sponsors/logans.png":zj,"../assets/sponsors/ricobet.png":Ej,"../assets/sponsors/rothaus.png":_j,"../assets/sponsors/tasty.png":kj}),Oj=Object.assign({"../assets/renovation/cabin-window.jpg":Aj,"../assets/renovation/outside.jpg":Tj,"../assets/renovation/shower.jpg":Cj,"../assets/renovation/sitting-area.jpg":Rj,"../assets/renovation/toilet.jpg":Mj}),rb=i=>i.split("/").pop()?.toLowerCase()||"",Nj=i=>{const s=i.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function Lj(i){const s=[...i];for(let u=s.length-1;u>0;u--){const o=Math.floor(Math.random()*(u+1));[s[u],s[o]]=[s[o],s[u]]}return s}const ab=()=>{const i={};Object.entries(Bj).forEach(([o,d])=>{const h=Nj(o);i[h]||(i[h]=[]),i[h].push(d)}),Object.keys(i).forEach(o=>{i[o]=Lj(i[o])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(o=>{i[o]&&(s[o]=i[o])}),Object.keys(i).forEach(o=>{u.includes(o.toLowerCase())||(s[o]=i[o])}),s},Hj=()=>{const i={};return Object.entries(Dj).forEach(([s,u])=>{const o=rb(s);i[o]=u}),i},lb=()=>{const i={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(Oj).forEach(([s,u])=>{const o=rb(s);o.includes("sitting")?i.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):o.includes("outside")||o.includes("cabin-window")?o.includes("outside")?i.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):o.includes("cabin-window")&&i.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(o.includes("toilet")||o.includes("shower")||o.includes("wash"))&&(o.includes("toilet")?i.waschkueche.push({src:u,alt:"Toilette"}):o.includes("shower")?i.waschkueche.push({src:u,alt:"Dusche"}):i.waschkueche.push({src:u,alt:"Waschküche"}))}),i},Je=i=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":rx,"../assets/gallery/cheerleading/cheerleading_1.jpg":ax,"../assets/gallery/cheerleading/cheerleading_2.jpg":lx,"../assets/gallery/cheerleading/cheerleading_3.jpg":sx,"../assets/gallery/damen/1.png":ox,"../assets/gallery/damen/10.png":cx,"../assets/gallery/damen/11.png":ux,"../assets/gallery/damen/12.png":dx,"../assets/gallery/damen/13.png":fx,"../assets/gallery/damen/14.png":hx,"../assets/gallery/damen/2.png":mx,"../assets/gallery/damen/3.png":gx,"../assets/gallery/damen/4.png":px,"../assets/gallery/damen/5.png":xx,"../assets/gallery/damen/6.png":bx,"../assets/gallery/damen/7.png":yx,"../assets/gallery/damen/8.png":vx,"../assets/gallery/damen/9.png":jx,"../assets/gallery/herren/herren_0.jpg":Sx,"../assets/gallery/herren/herren_1.jpg":wx,"../assets/gallery/herren/herren_10.jpg":zx,"../assets/gallery/herren/herren_11.jpg":Ex,"../assets/gallery/herren/herren_12.jpg":_x,"../assets/gallery/herren/herren_13.jpg":kx,"../assets/gallery/herren/herren_14.jpg":Ax,"../assets/gallery/herren/herren_15.jpg":Tx,"../assets/gallery/herren/herren_16.jpg":Cx,"../assets/gallery/herren/herren_17.jpg":Rx,"../assets/gallery/herren/herren_18.jpg":Mx,"../assets/gallery/herren/herren_19.png":Bx,"../assets/gallery/herren/herren_2.jpg":Dx,"../assets/gallery/herren/herren_3.jpg":Ox,"../assets/gallery/herren/herren_4.jpg":Nx,"../assets/gallery/herren/herren_5.jpg":Lx,"../assets/gallery/herren/herren_6.jpg":Hx,"../assets/gallery/herren/herren_7.jpg":Ux,"../assets/gallery/herren/herren_8.jpg":Gx,"../assets/gallery/herren/herren_9.jpg":$x,"../assets/gallery/herren/herren_club500_1.png":Vx,"../assets/gallery/herren/herren_club500_2.png":Yx,"../assets/gallery/herren/herren_club500_3.png":Px,"../assets/gallery/herren/herren_club500_4.png":qx,"../assets/gallery/herren/herren_club500_5.png":Kx,"../assets/gallery/herren/herren_jubel_500club.png":Qx,"../assets/gallery/jfv/IMG-team.png":Zx,"../assets/gallery/jfv/IMG_5349.jpg":Xx,"../assets/gallery/jfv/IMG_5369.jpg":Jx,"../assets/gallery/jfv/IMG_5421.jpg":Wx,"../assets/gallery/jfv/IMG_5442.jpg":Fx,"../assets/gallery/jfv/IMG_5952.jpg":Ix,"../assets/gallery/jfv/Unbenann324t.png":eb,"../assets/gallery/jfv/image0.jpeg":tb,"../assets/gallery/jfv/image11.jpeg":nb,"../assets/gallery/jfv/image8.jpeg":ib})).find(([o])=>o.includes(i));return u?u[1]:""},df=(i,s)=>Je(`${i}/${i}_${s}.jpg`);ab(),Hj(),lb();function Uj(){const i=ab(),[s,u]=C.useState(null);return C.useEffect(()=>{if(!s)return;const o=d=>{d.key==="Escape"&&u(null)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[s]),a.jsxs("section",{children:[a.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([o,d])=>a.jsxs("div",{style:{marginBottom:"2.5rem"},children:[a.jsx(Gj,{children:o.toUpperCase()}),a.jsx($j,{children:d.map((h,x)=>a.jsx(Vj,{src:h,alt:`Bild ${x+1} aus ${o}`,onClick:()=>u({folder:o,idx:x}),style:{cursor:"pointer"}},x))}),s&&s.folder===o&&a.jsx(Yj,{onClick:()=>u(null),children:a.jsxs(Pj,{onClick:h=>h.stopPropagation(),children:[a.jsx(qj,{src:d[s.idx],alt:`Großansicht aus ${o}`}),a.jsx(Kj,{onClick:()=>u(null),title:"Schließen",children:"×"})]})})]},o))]})}const Gj=f.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,$j=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,Vj=f.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,Yj=f.div`
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
`,Pj=f.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,qj=f.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,Kj=f.button`
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
`,Qj=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,Zj=f.div`
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
`,Xj=f.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,Jj=f.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,Wj=f.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,Fj=f.div`
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
`,Ij=f.a`
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
`;function Qu({icon:i,title:s,description:u,packages:o,buttonHref:d,buttonText:h}){return a.jsxs(Zj,{children:[a.jsx(Xj,{children:i}),a.jsx(Jj,{children:s}),a.jsx(Wj,{children:u}),a.jsx(Fj,{children:o.map((x,v)=>a.jsxs("div",{children:[x,v<o.length-1&&a.jsx("br",{})]},v))}),a.jsx(Ij,{href:d,children:h})]})}const eS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,tS=f.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,nS=f.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,iS=f.p`
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

  ${({$isEmail:i})=>i&&`
    a {
      color: #e10073;
      &:hover {
        color: #b8005a;
      }
    }
  `}
`;function sb({headline:i,description:s,contactInfos:u}){const o=d=>{d.preventDefault();const h=d.currentTarget,x=new FormData(h);if(String(x.get("website")||"").trim()!=="")return;const p=String(x.get("firstName")||"").trim(),g=String(x.get("lastName")||"").trim(),y=String(x.get("email")||"").trim(),j=String(x.get("phone")||"").trim(),w={};if(p||(w.firstName="Bitte Vornamen angeben"),g||(w.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)||(w.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(j)||(w.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(w).length>0){const D=Object.keys(w)[0],R=h.querySelector(`[name="${D}"]`);R&&R.focus(),alert(Object.values(w).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),h.reset()};return a.jsx(rS,{id:"kontakt",children:a.jsxs(aS,{children:[a.jsx(pS,{children:i}),a.jsx(xS,{children:s}),a.jsx(eS,{children:u.map((d,h)=>a.jsxs(tS,{children:[a.jsxs(nS,{children:[d.icon," ",d.title]}),a.jsx(iS,{$isEmail:d.isEmail,children:d.isEmail?a.jsx("a",{href:`mailto:${d.content}`,children:d.content}):d.content})]},h))}),a.jsxs(lS,{children:[a.jsx(sS,{children:"Kontakt aufnehmen"}),a.jsx(oS,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),a.jsxs(cS,{noValidate:!0,onSubmit:o,children:[a.jsxs(Zu,{children:[a.jsxs(cl,{children:[a.jsx("label",{htmlFor:"firstName",children:"Vorname"}),a.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),a.jsxs(cl,{children:[a.jsx("label",{htmlFor:"lastName",children:"Nachname"}),a.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),a.jsxs(Zu,{children:[a.jsxs(cl,{children:[a.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),a.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),a.jsxs(cl,{children:[a.jsx("label",{htmlFor:"phone",children:"Telefon"}),a.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),a.jsx(Zu,{children:a.jsxs(uS,{children:[a.jsx("label",{htmlFor:"email",children:"E-Mail"}),a.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),a.jsxs(dS,{"aria-hidden":"true",tabIndex:-1,children:[a.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),a.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),a.jsxs(fS,{children:[a.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),a.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",a.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),a.jsxs(hS,{children:[a.jsx(mS,{type:"submit",children:"Absenden"}),a.jsxs(gS,{children:["Alternativ:"," ",a.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const rS=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,aS=f.div`
  max-width: 1000px;
  margin: 0 auto;
`,lS=f.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,sS=f.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,oS=f.p`
  margin: 0 0 1rem 0;
  color: #555;
`,cS=f.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
    display: inline-block;
    text-align: left;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    font-size: 1rem;
    line-height: 1.2;
    height: 44px;
    outline: none;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    background: #fff;
    color: #111;
    caret-color: #e10073;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.15);
  }

  input::placeholder {
    color: #9ca3af;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #111;
    transition: background-color 9999s ease-in-out 0s;
    box-shadow: 0 0 0px 1000px #fff inset;
  }
`,Zu=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,cl=f.div`
  display: flex;
  flex-direction: column;
`,uS=f(cl)`
  grid-column: 1 / -1;
`,dS=f.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,fS=f.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;

  input[type="checkbox"] {
    margin-top: 0.2rem;
  }

  a {
    color: #e10073;
  }
`,hS=f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,mS=f.button`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 16px rgba(225, 0, 115, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(225, 0, 115, 0.35);
  }
`,gS=f.span`
  font-size: 0.9rem;
  color: #666;

  a {
    color: #e10073;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`,pS=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,xS=f.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,bS=f.section`
  background: url("${df("herren",4)}") center/cover;
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
`,yS=f.h1`
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
`,vS=f.h2`
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
`,L0=f.a`
  display: inline-block;
  background: ${i=>i.secondary?"rgba(255, 255, 255, 0.15)":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  border: ${i=>i.secondary?"2px solid rgba(255, 255, 255, 0.5)":"none"};
  backdrop-filter: ${i=>i.secondary?"blur(15px)":"none"};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:hover {
    background: ${i=>i.secondary?"rgba(255, 255, 255, 0.25)":"#b8005a"};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`,jS=f.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,SS=f.main`
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
`,al=f.h2`
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
`,wS=f.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,zS=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,ES=f.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,_S=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,kS=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,AS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,H0=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,U0=f.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,G0=f.ul`
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
`,TS=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,CS=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,RS=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,MS=f.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,BS=f.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,DS=f.ul`
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
`,Xu=f.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,Ju=f.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Wu=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Fu=f.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Iu=f.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,ed=f.div`
  font-size: 0.98rem;
  color: #666;
`,OS=f.div`
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
`,NS=f.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,LS=f.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,HS=f.a`
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
`,US=f.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,GS=f.div`
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
`,$S=f.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,VS=f.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,YS=f.a`
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
`,PS=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,qS=f.h3`
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
`,KS=f.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,QS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,$0=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,V0=f.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,Y0=f.table`
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
`,ZS=f.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,XS=f.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,JS=f.ul`
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
`,WS=f.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,FS=f.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,IS=f.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,ew=f.a`
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
`;function tw(){return a.jsxs(a.Fragment,{children:[a.jsx(bS,{children:a.jsxs(wS,{children:[a.jsx(yS,{children:"SC Konstanz-Wollmatingen"}),a.jsx(vS,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),a.jsxs(jS,{children:[a.jsx(L0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),a.jsx(L0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),a.jsxs(SS,{children:[a.jsx(al,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),a.jsx(zS,{children:a.jsx(ES,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),a.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[a.jsx(US,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),a.jsxs(Qj,{role:"region","aria-label":"Sponsoring-Kategorien",children:[a.jsx(Qu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),a.jsx(Qu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),a.jsx(Qu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),a.jsxs("section",{"aria-labelledby":"premium-pakete",children:[a.jsx(al,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),a.jsx(Zr,{packages:Gn.filter(i=>i.price==="15.000 €/Jahr"||i.price==="12.000 €/Jahr"||i.price==="9.500 €/Jahr")})]}),a.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[a.jsx(al,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),a.jsx(Zr,{packages:Gn.filter(i=>i.price==="5.000 €/Jahr"||i.price==="800 €/Jahr"||i.price==="2.000 €/Jahr")})]}),a.jsxs("section",{"aria-labelledby":"starter-pakete",children:[a.jsx(al,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),a.jsx(Zr,{packages:Gn.filter(i=>i.price==="150 €/pro Spiel"||i.price==="500 €/5 Spiele"||i.price.includes("Ab 100"))}),a.jsxs(GS,{children:[a.jsx($S,{children:"⚽ Ballspende-Beispiel ansehen"}),a.jsx(VS,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),a.jsx(YS,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),a.jsxs(_S,{children:[a.jsx(kS,{children:"Warum SC Konstanz-Wollmatingen?"}),a.jsxs(AS,{children:[a.jsxs(H0,{children:[a.jsx(U0,{children:"📊 Erreichte Reichweite"}),a.jsxs(G0,{children:[a.jsx("li",{children:"15+ Heimspiele pro Saison"}),a.jsx("li",{children:"200+ Zuschauer pro Spiel"}),a.jsx("li",{children:"2.500+ Instagram Follower"}),a.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),a.jsxs(H0,{children:[a.jsx(U0,{children:"🏆 Sportlicher Erfolg"}),a.jsxs(G0,{children:[a.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),a.jsx("li",{children:"2. Mannschaften pro Abteilung"}),a.jsx("li",{children:"Cheerleading-Team aktiv"}),a.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),a.jsx(al,{children:"Zusätzliche Werbemöglichkeiten"}),a.jsxs(TS,{children:[a.jsx(CS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),a.jsxs(RS,{children:[a.jsxs(MS,{children:[a.jsxs(Wu,{children:[a.jsx(Fu,{children:"1 Seite (Farbe)"}),a.jsx(Iu,{children:"1.000 €"}),a.jsx(ed,{children:"DIN A4 (297 × 210 mm)"})]}),a.jsxs(Wu,{children:[a.jsx(Fu,{children:"1/2 Seite (Farbe)"}),a.jsx(Iu,{children:"500 €"}),a.jsx(ed,{children:"DIN A5 (148 × 210 mm)"})]}),a.jsxs(Wu,{children:[a.jsx(Fu,{children:"1/4 Seite (Farbe)"}),a.jsx(Iu,{children:"250 €"}),a.jsx(ed,{children:"DIN A6 (105 × 148 mm)"})]})]}),a.jsx(BS,{children:a.jsxs(DS,{children:[a.jsxs(Xu,{children:[a.jsx(Ju,{}),"15 Ausgaben pro Saison"]}),a.jsxs(Xu,{children:[a.jsx(Ju,{}),"ca. 100 Exemplare pro Heimspiel"]}),a.jsxs(Xu,{children:[a.jsx(Ju,{}),"Digitale Version (Social Media & Website)"]})]})})]}),a.jsxs(OS,{children:[a.jsx(NS,{children:"📖 Aktuelle Ausgabe als Beispiel"}),a.jsx(LS,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),a.jsx(HS,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),a.jsxs(PS,{children:[a.jsx(qS,{children:"Werbeflächen auf dem Vereinsbus"}),a.jsx(KS,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),a.jsxs(QS,{children:[a.jsxs($0,{children:[a.jsx(V0,{children:"Premium-Flächen"}),a.jsxs(Y0,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Position"}),a.jsx("th",{children:"Sichtbarkeit"}),a.jsx("th",{children:"Preis / Jahr"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Heckfläche (100×80 cm)"}),a.jsx("td",{children:"Sehr hoch"}),a.jsx("td",{children:"1.200 €"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Seitentüren (links/rechts)"}),a.jsx("td",{children:"Hoch"}),a.jsx("td",{children:"je 900 €"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Hintere Seitenflächen"}),a.jsx("td",{children:"Mittel-hoch"}),a.jsx("td",{children:"je 600 €"})]})]})]})]}),a.jsxs($0,{children:[a.jsx(V0,{children:"Standard-Flächen"}),a.jsxs(Y0,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Position"}),a.jsx("th",{children:"Sichtbarkeit"}),a.jsx("th",{children:"Preis / Jahr"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),a.jsx("td",{children:"Mittel"}),a.jsx("td",{children:"400 € je Seite"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Frontstoßstange"}),a.jsx("td",{children:"Gering-mittel"}),a.jsx("td",{children:"250 €"})]})]})]})]})]}),a.jsxs(ZS,{children:[a.jsx(XS,{children:"Zusatzoptionen:"}),a.jsxs(JS,{children:[a.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),a.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),a.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),a.jsxs(WS,{children:[a.jsx(FS,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),a.jsx(IS,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),a.jsx(ew,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),a.jsx(jj,{}),a.jsx(sb,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),a.jsx(Uj,{})]}),a.jsx(bo,{})]})}const ff=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],ob=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Xr={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},nw="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",cb=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],ub=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],db=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],iw="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",Ht={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},rw=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],aw=f.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }
`,lw=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,sw=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,ow=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,cw=f.div`
  display: grid;
  grid-template-columns: 120px 1fr 60px; /* Kompakter für Mobile */
  gap: 0.75rem;
  align-items: center;
  min-width: 0;

  @media (min-width: 768px) {
    grid-template-columns: 140px 1fr 100px;
    gap: 1rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 80px 1fr 50px; /* Extrem kompakt für iPhone SE */
    font-size: 0.8rem;
  }
`,uw=f.img`
  width: 100%;
  height: 60px; /* Kleiner auf Mobile */
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    width: 140px;
    height: 90px;
    border-radius: 12px;
  }
`,dw=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,fw=f.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,hw=f.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,mw=f.div`
  background: ${({$gradient:i})=>i};
  height: 100%;
  width: ${({$percent:i})=>i}%;
  border-radius: 9999px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
    border-radius: 9999px 9999px 0 0;
  }
`,gw=f.div`
  font-size: 1.3rem;
  font-weight: 900;
  color: #e10073;
  text-align: right;
  white-space: nowrap;
  min-width: 0;

  @media (max-width: 768px) {
    text-align: right;
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`,pw=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,td=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,nd=f.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:i})=>i};
  flex-shrink: 0;
`,xw=f.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,fb=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:Je("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:Je("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:Je("herren/herren_16")}],bw=Math.max(...fb.map(i=>i.value));function yw(){return a.jsxs(aw,{children:[a.jsx(lw,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),a.jsx(sw,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),a.jsx(ow,{children:fb.map(i=>a.jsxs(cw,{children:[a.jsx(uw,{src:i.image,alt:i.label}),a.jsxs(dw,{children:[a.jsxs(fw,{children:[i.icon," ",i.label]}),a.jsx(hw,{children:a.jsx(mw,{$percent:i.value/bw*100,$gradient:i.gradient})})]}),a.jsxs(gw,{children:[(i.value/1e3).toFixed(0),"k"]})]},i.label))}),a.jsxs(pw,{children:[a.jsxs(td,{children:[a.jsx(nd,{$color:"#9ca3af"}),a.jsx("span",{children:"Aktuell (Winterpause)"})]}),a.jsxs(td,{children:[a.jsx(nd,{$color:"#e10073"}),a.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),a.jsxs(td,{children:[a.jsx(nd,{$color:"#ff6b9d"}),a.jsx("span",{children:"Prognose kommende Saison"})]})]}),a.jsxs(xw,{children:[a.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const vw=f.div`
  width: 100%;
  margin: 2rem 0;
`,jw=f.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,Sw=f.table`
  width: 100%;
  border-collapse: collapse;
`,P0=f.th`
  background: ${i=>i.isVergeben?"#f8f9fa":"#e10073"};
  color: ${i=>i.isVergeben?"#666":"#fff"};
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 700;
  border: 1px solid #dee2e6;

  &:first-child {
    background: #f8f9fa;
    color: #222;
    font-weight: 800;
    text-align: left;
    min-width: 200px;
  }
`,Ui=f.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${i=>i.isVergeben?"#f8f9fa":"#fff"};
  color: ${i=>i.isVergeben?"#999":"#222"};
  font-size: 0.95rem;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${i=>i.isHighlight&&`
    background: #fff6fa;
    color: #e10073;
    font-weight: 600;
  `}
`,ww=f.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${i=>i.isVergeben?"#f8f9fa":"#fff"};
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;

  ${i=>i.isVergeben&&`
    color: #999;
    text-decoration: line-through;
  `}
`,zw=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,Ew=f.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${i=>i.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${i=>i.isVergeben?.8:1};
`,_w=f.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,kw=f.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,id=f.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-of-type {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    text-align: right;
    color: #222;
  }
`,q0=f.a`
  display: inline-block;
  background: ${i=>i.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  width: 100%;
  margin-top: 1.5rem;
  box-sizing: border-box;
  pointer-events: ${i=>i.isVergeben?"none":"auto"};
`,Aw="sponsoring@sckw.de";function Tw({packages:i}){const s=o=>{const d=o.replace(/[^\w\s]/gi,"").trim(),h=encodeURIComponent(`Interesse am Paket "${d}"`);return`mailto:${Aw}?subject=${h}`},u=o=>{const d=o.benefits.find(x=>{const v=x.toLowerCase();return v.includes("social media")||v.includes("instagram")});if(!d)return"-";const h=d.toLowerCase();return h.includes("premium")||h.includes("allen")?"ÜBERALL":h.includes("sehr präsent")?"Sehr präsent":h.includes("regelmässig")||h.includes("regelmäßig")?"Regelmäßig":"Standard"};return a.jsxs(vw,{children:[a.jsx(jw,{children:a.jsxs(Sw,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(P0,{children:"Paket"}),i.map((o,d)=>a.jsx(P0,{isVergeben:o.status.includes("Vergeben"),children:o.title},d))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx(Ui,{children:"Preis"}),i.map((o,d)=>a.jsx(ww,{isVergeben:o.status.includes("Vergeben"),children:o.price},d))]}),a.jsxs("tr",{children:[a.jsx(Ui,{children:"Trikot/Banner"}),i.map((o,d)=>{const h=o.benefits.find(x=>x.includes("Trikot")||x.includes("Banner"));return a.jsx(Ui,{children:h?"✅ Ja":"-"},d)})]}),a.jsxs("tr",{children:[a.jsx(Ui,{children:"Social Media"}),i.map((o,d)=>{const h=u(o);return a.jsx(Ui,{isHighlight:h==="ÜBERALL",children:h==="-"?"-":`✅ ${h}`},d)})]}),a.jsxs("tr",{children:[a.jsx(Ui,{children:"Aktion"}),i.map((o,d)=>a.jsx(Ui,{children:a.jsx(q0,{href:o.status.includes("Vergeben")?void 0:s(o.title),isVergeben:o.status.includes("Vergeben"),children:o.status.includes("Vergeben")?"Vergeben":"Anfragen"})},d))]})]})]})}),a.jsx(zw,{children:i.map((o,d)=>{const h=o.status.includes("Vergeben");return a.jsxs(Ew,{isVergeben:h,children:[a.jsx(_w,{children:o.title}),a.jsx(kw,{children:o.price}),a.jsxs(id,{children:[a.jsx("span",{children:"Status"}),a.jsx("span",{children:h?"🟥 Vergeben":"🟩 Verfügbar"})]}),a.jsxs(id,{children:[a.jsx("span",{children:"Social Media"}),a.jsx("span",{children:u(o)})]}),a.jsxs(id,{children:[a.jsx("span",{children:"Vorteile"}),a.jsxs("span",{children:[o.benefits.length," Leistungen"]})]}),a.jsx(q0,{href:h?void 0:s(o.title),isVergeben:h,children:h?"Bereits vergeben":"Jetzt anfragen"})]},d)})})]})}const Cw=f.div`
  margin-top: 2.5rem;
`,Rw=f.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,Mw=f.button`
  background: ${({$active:i})=>i?"#e10073":"transparent"};
  color: ${({$active:i})=>i?"white":"#666"};
  border: none;
  padding: 0.875rem 1.5rem;
  font-weight: ${({$active:i})=>i?"800":"600"};
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s ease;
  position: relative;
  border-bottom: ${({$active:i})=>i?"3px solid #e10073":"3px solid transparent"};

  &:hover {
    background: ${({$active:i})=>i?"#e10073":"#f8f9fa"};
    color: ${({$active:i})=>i?"white":"#e10073"};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.2rem;
  }
`,Bw=f.div`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Dw=f.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,Ow=Gn.filter(i=>i.tier==="premium"),Nw=Gn.filter(i=>i.tier==="lokal"),Lw=Gn.filter(i=>i.tier==="starter");function Hw(){const[i,s]=C.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:Ow},{key:"lokal",label:"🏢 Lokal",packages:Nw},{key:"starter",label:"🌟 Starter",packages:Lw}],o=u.find(d=>d.key===i);return a.jsxs(Cw,{children:[a.jsx(Rw,{children:u.map(d=>a.jsx(Mw,{$active:i===d.key,onClick:()=>s(d.key),children:d.label},d.key))}),a.jsxs(Bw,{children:[o&&a.jsx(Tw,{packages:o.packages}),a.jsxs(Dw,{children:[i==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",i==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",i==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const Uw=f.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
  margin: 2rem auto 0;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,Gw=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,$w=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,Vw=f.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,Yw=f.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #e10073;
    color: white;
    padding: 0.875rem 0.75rem;
    text-align: left;
    font-weight: 700;
    font-size: 0.95rem;
    border: 1px solid #d00068;

    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }

  td {
    padding: 0.875rem 0.75rem;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 0.9rem;
    color: #333;

    &:first-child {
      font-weight: 600;
      background: #f8f9fa;
    }
  }

  tr:nth-child(even) td {
    background: #f9f9f9;

    &:first-child {
      background: #f0f0f0;
    }
  }
`,rd=f.td`
  font-weight: 700;
  color: #e10073;
`,Pw=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,qw=f.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,Kw=f.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,Qw=f.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    font-weight: 700;
    color: #e10073;
    text-align: right;
  }
`,Zw=f.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function Xw(){const i=ob;return a.jsxs(Uw,{children:[a.jsx(Gw,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),a.jsx($w,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a.jsx(Vw,{children:a.jsxs(Yw,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Leistung / Erfolg"}),a.jsx("th",{children:"Starter"}),a.jsx("th",{children:"Premium"}),a.jsx("th",{children:"Kombi (Beispiel)"})]})}),a.jsxs("tbody",{children:[i.map((s,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:s.label}),a.jsx(rd,{children:s.starter}),a.jsx(rd,{children:s.premium}),a.jsx(rd,{children:s.kombi})]},u)),a.jsxs("tr",{children:[a.jsx("td",{children:"Erwartete Kosten"}),a.jsx("td",{children:Xr.starter}),a.jsx("td",{children:Xr.premium}),a.jsx("td",{children:Xr.kombi})]})]})]})}),a.jsx(Pw,{children:["Starter","Premium","Kombi"].map(s=>a.jsxs(qw,{children:[a.jsx(Kw,{children:s}),i.map((u,o)=>a.jsxs(Qw,{children:[a.jsx("span",{children:u.label}),a.jsx("span",{children:s==="Starter"?u.starter:s==="Premium"?u.premium:u.kombi})]},o))]},s))}),a.jsx(Zw,{children:nw})]})}const Jw=f.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
  margin: 2rem auto 0;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,Ww=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,Fw=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,Iw=f.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,e3=f.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #e10073;
    color: white;
    padding: 0.875rem 0.75rem;
    text-align: left;
    font-weight: 700;
    font-size: 0.9rem;
    border: 1px solid #d00068;

    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }

  td {
    padding: 0.875rem 0.75rem;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 0.85rem;
    color: #333;
    line-height: 1.4;

    &:first-child {
      font-weight: 700;
      background: #f8f9fa;
      color: #e10073;
    }
  }

  tr:nth-child(even) td {
    background: #f9f9f9;

    &:first-child {
      background: #f0f0f0;
    }
  }
`,t3=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,n3=f.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,i3=f.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,r3=f.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    font-weight: 700;
    color: #333;
    text-align: right;
  }
`,a3=f.div`
  background: linear-gradient(135deg, #fff6fa, #ffffff);
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;

  strong {
    color: #e10073;
  }

  em {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #888;
  }
`,l3=f.div`
  background: #f8f9fa;
  border-left: 4px solid #e10073;
  border-radius: 8px;
  padding: 1.25rem;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #444;
  line-height: 1.6;

  strong {
    color: #e10073;
  }
`;function s3(){const i=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return a.jsxs(Jw,{children:[a.jsx(Ww,{children:"👤 Spielerpatenschaften (diskret)"}),a.jsx(Fw,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),a.jsx(Iw,{children:a.jsxs(e3,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Merkmal"}),a.jsx("th",{children:"Bronze"}),a.jsx("th",{children:"Silber"}),a.jsx("th",{children:"Gold"})]})}),a.jsx("tbody",{children:i.map((s,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:s.label}),a.jsx("td",{children:s.bronze}),a.jsx("td",{children:s.silber}),a.jsx("td",{children:s.gold})]},u))})]})}),a.jsx(t3,{children:["Bronze","Silber","Gold"].map(s=>a.jsxs(n3,{children:[a.jsx(i3,{children:s}),i.map((u,o)=>a.jsxs(r3,{children:[a.jsx("span",{children:u.label}),a.jsx("span",{children:s==="Bronze"?u.bronze:s==="Silber"?u.silber:u.gold})]},o))]},s))}),a.jsxs(a3,{children:[a.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),a.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',a.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',a.jsx("em",{children:"[Foto vom Torjubel]"})]}),a.jsxs(l3,{children:[a.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const o3=f.div`
  max-width: 1000px;
  margin: 0 auto;
`,c3=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,u3=f.a`
  background: white;
  border-radius: 20px;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.12);
  border: 3px solid #e10073;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 280px;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.2);
  }
`,d3=f.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,f3=f.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,h3=f.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,m3=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,g3=f.a`
  background: white;
  border-radius: 12px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 100px;

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 8px 24px rgba(225, 0, 115, 0.12);
  }
`,p3=f.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,x3=f.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,b3={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function y3(){const{hauptsponsor:i,partners:s}=b3;return a.jsxs(o3,{children:[a.jsx(c3,{children:a.jsxs(u3,{href:i.website,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(d3,{children:"Hauptsponsor"}),a.jsx(f3,{src:i.logo,alt:i.name}),a.jsx(h3,{children:i.name})]})}),a.jsx(m3,{children:s.map((u,o)=>a.jsxs(g3,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(p3,{src:u.logo,alt:u.name}),a.jsx(x3,{children:u.name})]},o))})]})}const gn=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,qr=f.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,Ds=f(qr)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`,Nn=f.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,hi=f.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,mi=f.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,v3=f.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,j3=f.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:i})=>i}) center/cover no-repeat;
  opacity: ${({$active:i})=>i?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,S3=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,w3=f.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,z3=f.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,E3=f.p`
  color: white;
  font-size: clamp(1rem, 3.5vw, 1.4rem);
  font-weight: 500;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  opacity: 0.95;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`,_3=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  max-width: 100%;

  @media (min-width: 768px) {
    gap: 1.25rem;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(4, 1fr);
  }
`,k3=f.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,A3=f.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,T3=f.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,C3=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,K0=f.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$primary:i})=>i?"white":"transparent"};
  color: ${({$primary:i})=>i?"#e10073":"white"};
  font-weight: 800;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({$primary:i})=>i?"0 6px 20px rgba(0, 0, 0, 0.2)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:i})=>i?"white":"rgba(255, 255, 255, 0.4)"};
  width: 100%;
  max-width: 280px;
  min-height: 48px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({$primary:i})=>i?"#f8f9fa":"rgba(255, 255, 255, 0.1)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`,R3=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Os=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Ns=f.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,Ls=f.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,M3=f.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 16px;
  padding: 1.25rem;
  margin: 2rem auto 0;
  max-width: 900px;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,B3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ad=f.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);
  }
`,ld=f.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,sd=f.div`
  padding: 1.5rem 1.25rem 2rem;
`,od=f.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,cd=f.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`,Hs=f.div`
  margin-top: 2.5rem;
`,Us=f.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,ud=f.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,D3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,dd=f.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`,O3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,fd=f.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,hd=f.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,md=f.div`
  padding: 1.25rem 1rem 1.5rem;
`,gd=f.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,pd=f.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,Q0=f.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,N3=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,Z0=f.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,L3=f.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,H3=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  table-layout: fixed;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  th {
    text-align: left;
    padding: 0.5rem 0.4rem;
    color: #555;
    font-weight: 700;
    border-bottom: 1px solid #ececec;
    word-break: break-word;
  }

  td {
    padding: 0.5rem 0.4rem;
    border-bottom: 1px solid #f2f2f2;
    color: #333;
    word-break: break-word;
  }
`,U3=f.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,G3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Gs=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,$s=f.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,Vs=f.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`,$3=f.section`
  padding: 4rem 0;
  scroll-margin-top: 90px;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,V3=f.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,Y3=f.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,P3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2.5rem;
    align-items: start;
  }
`,q3=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,K3=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Q3=f.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.25);
`,Z3=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,xd=f.div`
  background: white;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-size: 0.95rem;
  color: #444;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f2c2d9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;

  &::before {
    content: '\\2713';
    color: #e10073;
    font-weight: 800;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`,X3=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #e10073;
  text-align: center;
`,J3=f.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.4);
  }
`,W3=ff,F3=Gn.filter(i=>i.tier==="premium"),I3=Gn.filter(i=>i.tier==="lokal"),e6=Gn.filter(i=>i.tier==="starter");function t6(){const i=[Je("herren/herren_6"),Je("herren/herren_16"),Je("herren/herren_5"),Je("herren/herren_14")].filter(Boolean),[s,u]=C.useState(0);return C.useEffect(()=>{if(i.length<=1)return;const o=setInterval(()=>{u(d=>(d+1)%i.length)},6e3);return()=>clearInterval(o)},[i.length]),a.jsxs(a.Fragment,{children:[a.jsxs(v3,{children:[i.map((o,d)=>a.jsx(j3,{$bg:o,$active:d===s},d)),a.jsx(S3,{}),a.jsxs(w3,{children:[a.jsx(z3,{children:"Sponsoring, das messbar wirkt"}),a.jsxs(E3,{children:["In der Winterpause erzielen wir bereits"," ",a.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",a.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),a.jsx(_3,{children:W3.map(o=>a.jsxs(k3,{children:[a.jsx(A3,{children:o.value}),a.jsx(T3,{children:o.label})]},o.label))}),a.jsxs(C3,{children:[a.jsx(K0,{href:"#kontakt",$primary:!0,onClick:o=>{o.preventDefault();const d=document.getElementById("kontakt");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),a.jsx(K0,{href:"#pakete",onClick:o=>{o.preventDefault();const d=document.getElementById("pakete");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),a.jsx(Ds,{children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"Warum sich Sponsoring bei uns lohnt"}),a.jsx(mi,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),a.jsxs(B3,{children:[a.jsxs(ad,{children:[a.jsx(ld,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),a.jsxs(sd,{children:[a.jsx(od,{children:"Sichtbarkeit, die bleibt"}),a.jsx(cd,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),a.jsxs(ad,{children:[a.jsx(ld,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),a.jsxs(sd,{children:[a.jsx(od,{children:"Ihre Kunden sind hier"}),a.jsx(cd,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),a.jsxs(ad,{children:[a.jsx(ld,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),a.jsxs(sd,{children:[a.jsx(od,{children:"Doppelte Wirkung"}),a.jsx(cd,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),a.jsx(qr,{children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"Diese Unternehmen sind bereits Partner"}),a.jsx(mi,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),a.jsx(y3,{})]})}),a.jsx(Ds,{id:"pakete",children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"Finden Sie Ihr perfektes Paket"}),a.jsx(mi,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, individuell auf Ihr Unternehmen zugeschnitten."})]}),a.jsxs(Hs,{children:[a.jsx(Us,{children:"Premium-Partnerschaften"}),a.jsx(Zr,{packages:F3})]}),a.jsxs(Hs,{children:[a.jsx(Us,{children:"Pakete im Vergleich"}),a.jsx(Hw,{})]}),a.jsx(Xw,{}),a.jsx(s3,{}),a.jsxs(Hs,{children:[a.jsx(Us,{children:"Lokale Werbemöglichkeiten"}),a.jsx(Zr,{packages:I3}),a.jsx(ud,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),a.jsxs(Hs,{children:[a.jsx(Us,{children:"Starter & Spieltag"}),a.jsx(Zr,{packages:e6})]})]})}),a.jsx(qr,{id:"reichweite",children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"So viele Menschen erreichen Sie"}),a.jsx(mi,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),a.jsxs(R3,{children:[a.jsxs(Os,{children:[a.jsx(Ns,{children:"32.000"}),a.jsx(Ls,{children:"Reichweite / 30 Tage"})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"250.000"}),a.jsx(Ls,{children:"Reichweite / 90 Tage"})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"50-80k"}),a.jsx(Ls,{children:"Pro Monat in Saison"})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"500-800k"}),a.jsx(Ls,{children:"Saisonreichweite (konservativ)"})]})]}),a.jsxs(M3,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",a.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),a.jsx(Ds,{children:a.jsx(gn,{children:a.jsx(yw,{})})}),a.jsx(qr,{children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"Was Sie auf Social Media bekommen"}),a.jsx(mi,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),a.jsxs(D3,{children:[a.jsx(dd,{children:"📱 Feed-Posts mit Ihrem Logo"}),a.jsx(dd,{children:"📸 Stories & Erwähnungen"}),a.jsx(dd,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),a.jsx(ud,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),a.jsx(Ds,{id:"buswerbung",children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"Mobile Werbung auf unserem Vereinsbus"}),a.jsx(mi,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),a.jsxs(N3,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[a.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen mit Werbeflächen",style:{width:"100%",borderRadius:12,marginBottom:"1.5rem",display:"block"}}),a.jsx(Z0,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),a.jsx(L3,{children:a.jsxs(H3,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Fläche"}),a.jsx("th",{children:"Größe (ca.)"}),a.jsx("th",{children:"Preis/Jahr"})]})}),a.jsx("tbody",{children:[...cb,...ub].map(o=>a.jsxs("tr",{children:[a.jsx("td",{children:o.position}),a.jsx("td",{children:o.groesse}),a.jsx("td",{children:a.jsx("strong",{children:o.preis})})]},o.position))})]})}),a.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[a.jsx(Z0,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),a.jsx(U3,{children:db.map((o,d)=>a.jsx("li",{children:o},d))})]})]}),a.jsx(ud,{children:iw})]})}),a.jsx(qr,{children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"Ihre Marke in Aktion"}),a.jsx(mi,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),a.jsxs(O3,{children:[a.jsxs(fd,{children:[a.jsx(hd,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),a.jsxs(md,{children:[a.jsx(gd,{children:"Stadionmagazin"}),a.jsx(pd,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),a.jsx(Q0,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),a.jsxs(fd,{children:[a.jsx(hd,{src:Je("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),a.jsxs(md,{children:[a.jsx(gd,{children:"Bandenwerbung"}),a.jsx(pd,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),a.jsxs(fd,{children:[a.jsx(hd,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),a.jsxs(md,{children:[a.jsx(gd,{children:"Ballspende"}),a.jsx(pd,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),a.jsx(Q0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),a.jsx($3,{id:"500club",children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(V3,{children:"500 €Club"}),a.jsx(Y3,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken - werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),a.jsxs(P3,{children:[a.jsxs(q3,{children:[a.jsxs(Q3,{children:[a.jsx("div",{style:{fontSize:"0.85rem",opacity:.9,fontWeight:600,marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Mitgliedschaft"}),a.jsx("div",{style:{fontSize:"clamp(1.8rem, 5vw, 2.4rem)",fontWeight:900,lineHeight:1.1},children:"Ab 125€ / Quartal"}),a.jsx("div",{style:{fontSize:"1rem",opacity:.9,marginTop:"0.25rem"},children:"oder 250€ halbjährlich · 500€ jährlich"})]}),a.jsxs(Z3,{children:[a.jsxs(xd,{children:["Offizielle ",a.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),a.jsxs(xd,{children:["Ihr ",a.jsx("strong",{children:"Name oder Firmenname"})," wird veröffentlicht"]}),a.jsxs(xd,{children:["Direkte Förderung von ",a.jsx("strong",{children:"Jugend- & Amateurfußball"})]})]})]}),a.jsxs(K3,{children:[a.jsxs(X3,{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#e10073",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.75rem"},children:"Spendenkonto"}),a.jsx("div",{style:{fontWeight:800,color:"#222",fontSize:"1.05rem",marginBottom:"0.5rem"},children:"SC Konstanz-Wollmatingen e.V."}),a.jsxs("div",{style:{color:"#444",lineHeight:1.7,fontSize:"0.95rem"},children:["IBAN: ",a.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"}),a.jsx("br",{}),"Sparkasse Bodensee",a.jsx("br",{}),a.jsx("span",{style:{fontSize:"0.85rem",color:"#888"},children:"Schleyerweg 5 · 78467 Konstanz"})]})]}),a.jsx(J3,{href:"/sponsoring-handoff?preset=club500&view=preview",children:"500 €Club Anmeldung"})]})]})]})}),a.jsx(qr,{children:a.jsxs(gn,{children:[a.jsxs(Nn,{children:[a.jsx(hi,{children:"In 4 Schritten zum Sponsoring-Start"}),a.jsx(mi,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),a.jsxs(G3,{children:[a.jsxs(Gs,{children:[a.jsx($s,{children:"1. Kontakt"}),a.jsx(Vs,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),a.jsxs(Gs,{children:[a.jsx($s,{children:"2. Bedarf"}),a.jsx(Vs,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),a.jsxs(Gs,{children:[a.jsx($s,{children:"3. Angebot"}),a.jsx(Vs,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),a.jsxs(Gs,{children:[a.jsx($s,{children:"4. Umsetzung"}),a.jsx(Vs,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),a.jsx(sb,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:Ht.email,isEmail:!0},{icon:"📍",title:"Adresse",content:Ht.vollAdresse}]}),a.jsx(bo,{})]})}function n6(){return ix(),!0}const i6=m2`
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
`,X0=f.div`
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
  @media print { display: none !important; }
`,J0=f.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,W0=f.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ys=f.button`
  background: ${i=>i.$primary?"#fff":i.$active?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"};
  color: ${i=>i.$primary?"#1a365d":"#fff"};
  border: 2px solid ${i=>i.$primary?"#fff":"rgba(255,255,255,0.25)"};
  padding: 0.5rem 1.1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`,r6=f.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,a6=f.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,Et=f.section`
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
    @media print { page-break-after: auto; break-after: auto; }
  }
`,Wt=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    bottom: -320px;
    left: -160px;
    background: radial-gradient(circle, rgba(74, 144, 226, 0.10) 0%, transparent 70%);
  }

  &::after {
    content: '';
    position: absolute;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    bottom: -200px;
    right: -120px;
    background: radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, transparent 70%);
  }
`,Ft=f.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,It=f.div`text-align: center; margin-bottom: 6mm;`,en=f.img`height: 20mm;`,tn=f.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,zt=f.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,gt=f.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Oe=f.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,I=f.li`
  font-size: 10.5pt;
  color: #222;
  line-height: 1.7;
  margin-bottom: 2mm;
  padding-left: 6mm;
  position: relative;
  list-style: none;
  &::before {
    content: '\\2713';
    position: absolute;
    left: 0;
    color: #1a365d;
    font-weight: 700;
  }
`,St=f.ul`padding: 0; margin: 3mm 0;`,qi=f.div`
  display: ${i=>i.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,mt=f.div`margin-bottom: 4mm;`,nt=f.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Lt=f.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${i=>(i.$lines||1)*8}mm;
  background: #fafafa;
`,l6=f.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,hf=f.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,$n=f.div`
  text-align: ${i=>i.$right?"right":i.$center?"center":"left"};
`;function yi(){return a.jsxs(l6,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",a.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function on(){return a.jsxs(hf,{children:[a.jsxs($n,{children:[a.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),a.jsx("br",{}),"Schleyerweg 5",a.jsx("br",{}),"78467 Konstanz"]}),a.jsxs($n,{$center:!0,children:[Ht.email,a.jsx("br",{}),"partner.sckw.de"]}),a.jsxs($n,{$right:!0,children:["Sparkasse Bodensee",a.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",a.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const F0=Je("herren/herren_0"),bd=Je("herren/herren_6"),I0=Je("herren/herren_1"),s6=Je("herren/herren_14"),ro=f.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function o6(){return a.jsx(Et,{children:a.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),a.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),a.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),a.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),a.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),a.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",a.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:ff.slice(0,2).map(i=>a.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[a.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:i.value}),a.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:i.label})]},i.label))}),a.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function c6(){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"WARUM SCKW?"}),a.jsx(zt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:ff.map(i=>a.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[a.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:i.value}),a.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:i.label})]},i.label))}),a.jsx(gt,{children:"Was Sie bei uns erreichen"}),a.jsxs(St,{children:[a.jsx(I,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),a.jsx(I,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),a.jsx(I,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),a.jsx(I,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),a.jsx(gt,{children:"Der Verein auf einen Blick"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsxs(Oe,{children:[a.jsx("strong",{children:"Gegründet:"})," 1912"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Mitglieder:"})," 500+"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),a.jsxs("div",{children:[a.jsxs(Oe,{children:[a.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),F0&&a.jsx(ro,{src:F0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),a.jsx(on,{})]})]})}function u6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"HAUPTSPONSOR"}),a.jsx(zt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),a.jsxs(St,{children:[a.jsx(I,{children:"Trikotwerbung auf der Brust"}),a.jsx(I,{children:"Business Club Mitgliedschaft"}),a.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),a.jsx(I,{children:"1/1 seitiges Inserat im SC Magazin"}),a.jsx(I,{children:"10 Saisonkarten"}),a.jsx(I,{children:"Werbeauftritte nach Absprache"}),a.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),a.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),a.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),a.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),a.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),a.jsxs(qi,{$hidden:!i,children:["Beitrag: ",a.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),a.jsx(yi,{}),a.jsx(on,{})]})]})}function d6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"CO-SPONSOR"}),a.jsx(zt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),a.jsxs(St,{children:[a.jsx(I,{children:"Werbung auf den Trainingsanzügen"}),a.jsx(I,{children:"Business Club Mitgliedschaft"}),a.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),a.jsx(I,{children:"1/2 seitiges Inserat im SC Magazin"}),a.jsx(I,{children:"5 Saisonkarten"}),a.jsx(I,{children:"Werbeauftritte nach Absprache"}),a.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),a.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),a.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),a.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),a.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),a.jsxs(qi,{$hidden:!i,children:["Beitrag: ",a.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),a.jsx(yi,{}),a.jsx(on,{})]})]})}function f6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"SILBER-PARTNER"}),a.jsx(zt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),a.jsxs(St,{children:[a.jsx(I,{children:"1 Bande (5×2 m) am Gelände"}),a.jsx(I,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),a.jsx(I,{children:"Werbeplane am Gelände"}),a.jsx(I,{children:"Vereinsplakate + Eventsichtbarkeit"}),a.jsx(I,{children:"Website: Logo auf Startseite"})]}),a.jsxs(qi,{$hidden:!i,children:["Beitrag: ",a.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),a.jsx(gt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),a.jsx(zt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),a.jsxs(St,{children:[a.jsx(I,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),a.jsx(I,{children:"Website: Logo auf der Startseite"}),a.jsx(I,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),a.jsx(I,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),a.jsxs(qi,{$hidden:!i,children:["Beitrag: ",a.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),a.jsx(yi,{}),a.jsx(on,{})]})]})}function h6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"BANDENWERBUNG"}),a.jsx(zt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),a.jsx(St,{children:a.jsx(I,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Platzierung:"}),a.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",a.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",a.jsx("br",{}),a.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),a.jsxs(qi,{$hidden:!i,children:["Beitrag: ",a.jsx("strong",{children:"ab 800€ pro Saison"})]}),I0&&a.jsx(ro,{src:I0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),a.jsx(yi,{}),a.jsx(on,{})]})]})}function m6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:'WERBUNG IM „HEIMSPIEL"'}),a.jsx(zt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),a.jsxs(St,{children:[a.jsx(I,{children:"15 Ausgaben pro Saison"}),a.jsx(I,{children:"ca. 100 Exemplare pro Heimspiel"}),a.jsx(I,{children:"Digitale Version (Social Media & Webseite)"}),a.jsx(I,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),a.jsx(I,{children:"DIN A4 Stadionmagazin"}),a.jsx(I,{children:"wird ausgelegt in diversen Arztpraxen"})]}),i&&a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>a.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),a.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),a.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),i&&a.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[a.jsx("strong",{children:"Maße"}),a.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",a.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",a.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),a.jsx(yi,{}),a.jsx(on,{})]})]})}function g6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"SPIELTAG-SPONSORING"}),a.jsx(zt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),a.jsx(gt,{children:"Ballspende"}),a.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),a.jsxs(St,{children:[a.jsx(I,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),a.jsx(I,{children:"Namensnennung in der Halbzeitpause"}),a.jsx(I,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),a.jsx(I,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),a.jsxs(qi,{$hidden:!i,children:["Beitrag: ",a.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",a.jsx("strong",{children:"500€"})," (statt 750€)"]}),a.jsx(gt,{children:"Spielpräsentator"}),a.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),a.jsxs(St,{children:[a.jsx(I,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),a.jsx(I,{children:"Namentliche Erwähnung im SC Magazin"}),a.jsx(I,{children:"Social Media Erwähnung am Spieltag"})]}),a.jsxs(qi,{$hidden:!i,children:["Beitrag: ",a.jsx("strong",{children:"ab 250€ pro Spiel"})]}),bd&&a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[a.jsx(ro,{src:bd,alt:"Action",style:{height:"48mm"}}),a.jsx(ro,{src:s6||bd,alt:"Jubel",style:{height:"48mm"}})]}),a.jsx(yi,{}),a.jsx(on,{})]})]})}function p6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"BUSWERBUNG"}),a.jsx(zt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),a.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),i&&a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),a.jsx("tbody",{children:[...cb,...ub].map((s,u)=>a.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),i&&a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),a.jsx(gt,{children:"Zusatzoptionen"}),a.jsx(St,{children:db.map((s,u)=>a.jsx(I,{children:s},u))}),a.jsx(yi,{}),a.jsx(on,{})]})]})}function x6({showPrices:i}){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{children:"PRÄMIEN-MODELL"}),a.jsx(zt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),i&&a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),a.jsxs("tbody",{children:[ob.map((s,u)=>a.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),a.jsxs("tr",{style:{background:"#f0f9ff"},children:[a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Xr.starter}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Xr.premium}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Xr.kombi})]})]})]}),a.jsx(gt,{children:"So funktioniert's"}),a.jsxs(St,{children:[a.jsx(I,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),a.jsx(I,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),a.jsx(I,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),a.jsx(I,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),a.jsx(gt,{children:"Inkludierte Leistungen"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsx(Oe,{children:a.jsx("strong",{children:"Starter:"})}),a.jsxs(St,{children:[a.jsx(I,{children:"Stadionansage bei Erfolg"}),a.jsx(I,{children:"Logo auf Website"})]})]}),a.jsxs("div",{children:[a.jsx(Oe,{children:a.jsx("strong",{children:"Premium:"})}),a.jsxs(St,{children:[a.jsx(I,{children:"+ Social Media Post bei Erfolg"}),a.jsx(I,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),a.jsx(yi,{}),a.jsx(on,{})]})]})}const ep=Je("herren/herren_jubel_500club");function b6(){return a.jsxs(Et,{children:[ep&&a.jsx("img",{src:ep,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),a.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[a.jsx(zt,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),a.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[a.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den 500 €Club."})," Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),a.jsx(gt,{children:"Ihre Vorteile"}),a.jsxs(St,{children:[a.jsxs(I,{children:["Offizielle ",a.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),a.jsxs(I,{children:["Veröffentlichung Ihres ",a.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),a.jsx(I,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),a.jsx(gt,{children:"Zahlungsoptionen"}),a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),a.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),a.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(i=>a.jsxs("tr",{children:[a.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:i.label}),a.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:i.betrag})]},i.label))})]}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),a.jsx(gt,{children:"Spendenkonto"}),a.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[a.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),a.jsx("br",{}),"IBAN: ",a.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",a.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),a.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[a.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",a.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),a.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",a.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),a.jsx(on,{})]})]})}function y6(){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG 500 €CLUB"}),a.jsxs(zt,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an ",Ht.email," senden."]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[a.jsxs(mt,{children:[a.jsx(nt,{children:"Vorname:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"Nachname:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"Firma (optional):"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"Straße, Hausnummer:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[a.jsxs(mt,{children:[a.jsx(nt,{children:"PLZ:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"Ort:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[a.jsxs(mt,{children:[a.jsx(nt,{children:"Geb.-Datum:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"Telefon:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"E-Mail:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsx(gt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(i=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:a.jsxs(nt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",i]})},i))}),a.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),a.jsx(gt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im 500 €Club bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(i=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:a.jsxs(nt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",i]})},i))}),a.jsxs(mt,{style:{marginTop:"2mm"},children:[a.jsx(nt,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),a.jsx(Lt,{$lines:1})]}),a.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. 500 €Club. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[a.jsxs(mt,{children:[a.jsx(nt,{children:"Konstanz, den _______________"}),a.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),a.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"Unterschrift:"}),a.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),a.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[a.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",a.jsx("br",{}),a.jsx("strong",{children:"Kontakt:"})," ",Ht.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),a.jsxs(hf,{style:{marginTop:"auto"},children:[a.jsx($n,{children:a.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),a.jsx($n,{$center:!0,children:"500 €Club"}),a.jsx($n,{$right:!0,children:"partner.sckw.de"})]})]})]})}function v6(){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),a.jsx(zt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(i=>a.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[a.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:i.n}),a.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:i.t}),a.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:i.d})]},i.n))}),a.jsx(gt,{children:"Kontakt"}),a.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),a.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:Ht.email})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),a.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),a.jsxs("div",{style:{gridColumn:"1 / -1"},children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),a.jsxs("div",{style:{fontSize:"11pt"},children:[Ht.adresse.name," · ",Ht.adresse.strasse," · ",Ht.adresse.plz," ",Ht.adresse.ort]})]})]}),a.jsx(gt,{children:"Gesprächsleitfaden"}),a.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),a.jsx(on,{})]})]})}function j6(){return a.jsxs(Et,{children:[a.jsx(Wt,{}),a.jsxs(Ft,{children:[a.jsx(It,{children:a.jsx(en,{src:"/logo.svg"})}),a.jsx(tn,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),a.jsxs(zt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",Ht.email," senden."]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[a.jsxs(mt,{children:[a.jsx(nt,{children:"Datum:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(mt,{children:[a.jsx(nt,{children:"Gesprächsführer (Helfer):"}),a.jsx(Lt,{$lines:1})]})]}),rw.map((i,s)=>a.jsxs(mt,{children:[a.jsxs(nt,{children:[i.label,":"]}),a.jsx(Lt,{$lines:i.lines})]},s)),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(i=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:a.jsxs(nt,{style:{marginBottom:0},children:["☐ ",i]})},i))}),a.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:a.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[a.jsx("strong",{children:"Schnellreferenz:"})," ",Ht.email," · partner.sckw.de ·"," ",Ht.vollAdresse.replace(/\n/g," · ")]})}),a.jsxs(hf,{style:{marginTop:"auto"},children:[a.jsx($n,{children:a.jsx("strong",{children:"Internes Dokument"})}),a.jsx($n,{$center:!0}),a.jsx($n,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Ln=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>a.jsx(o6,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>a.jsx(c6,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:i=>a.jsx(u6,{showPrices:i})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:i=>a.jsx(d6,{showPrices:i})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:i=>a.jsx(f6,{showPrices:i})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:i=>a.jsx(h6,{showPrices:i})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:i=>a.jsx(m6,{showPrices:i})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:i=>a.jsx(g6,{showPrices:i})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:i=>a.jsx(p6,{showPrices:i})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:i=>a.jsx(x6,{showPrices:i})},{id:"club500",label:"500 €Club",group:"community",render:()=>a.jsx(b6,{})},{id:"club500form",label:"500 €Club Anmeldung",group:"community",render:()=>a.jsx(y6,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>a.jsx(v6,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>a.jsx(j6,{})}],S6=f.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,w6=f.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,z6=f.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,E6=f.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,_6=f.button`
  background: ${i=>i.$on?"#1a365d":"#f1f5f9"};
  color: ${i=>i.$on?"#fff":"#475569"};
  border: 2px solid ${i=>i.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { opacity: 0.85; }
`,yd=f.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,vd=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,jd=f.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 2px solid ${i=>i.$checked?"#1a365d":"#e2e8f0"};
  background: ${i=>i.$checked?"#f0f4ff":"#fff"};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${i=>i.$checked?"#1a365d":"#64748b"};
  transition: all 0.15s;
  user-select: none;
  &:hover { border-color: #94a3b8; }

  input { accent-color: #1a365d; width: 16px; height: 16px; cursor: pointer; }
`,k6=f.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Gi=f.button`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { background: #e2e8f0; }
`,A6=f.button`
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
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26, 54, 93, 0.3); }
  &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
`,T6=f.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function C6(){const i=n6(),[s]=ix(),u=s.get("preset"),o=s.get("view"),d=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Ln.filter($=>$.group==="broschüre").map($=>$.id)),[h,x]=C.useState(!0),[v,p]=C.useState(d),[g,y]=C.useState(o==="preview"?"preview":"dashboard");if(!i)return a.jsx(Xs,{to:"/",replace:!0});const j=$=>{p(he=>{const oe=new Set(he);return oe.has($)?oe.delete($):oe.add($),oe})},w=()=>p(new Set(Ln.map($=>$.id))),D=()=>p(new Set),R=()=>p(new Set(Ln.filter($=>$.group==="broschüre").map($=>$.id))),H=()=>p(new Set(Ln.map($=>$.id))),G=()=>p(new Set(["cover","why","spieltag","banden"])),U=()=>p(new Set(["cover","why","haupt","co","silber"])),K=()=>p(new Set(["club500","club500form"])),A=Ln.filter($=>v.has($.id)),q=Ln.filter($=>$.group==="broschüre"),N=Ln.filter($=>$.group==="community"),W=Ln.filter($=>$.group==="helfer");return g==="preview"?a.jsxs(a.Fragment,{children:[a.jsx(i6,{}),a.jsxs(X0,{children:[a.jsxs(J0,{children:["Vorschau · ",A.length," Seiten"]}),a.jsxs(W0,{children:[a.jsx(Ys,{$active:h,onClick:()=>x($=>!$),children:h?"Preise ✓":"Preise ✗"}),a.jsx(Ys,{onClick:()=>y("dashboard"),children:"Zurück"}),a.jsx(Ys,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),a.jsxs(r6,{children:[a.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',a.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),a.jsx(a6,{children:A.map($=>a.jsx("div",{children:$.render(h)},$.id))})]}):a.jsxs(a.Fragment,{children:[a.jsxs(X0,{children:[a.jsx(J0,{children:"Sponsoring-Kit · SCKW"}),a.jsx(W0,{children:a.jsx(Ys,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),a.jsxs(S6,{children:[a.jsx(w6,{children:"Sponsoring-Kit zusammenstellen"}),a.jsx(z6,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),a.jsxs(E6,{children:[a.jsx(_6,{$on:h,onClick:()=>x($=>!$),children:h?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),a.jsxs(T6,{children:[v.size," von ",Ln.length," Seiten ausgewählt"]})]}),a.jsxs(k6,{children:[a.jsx(Gi,{onClick:w,children:"Alles"}),a.jsx(Gi,{onClick:R,children:"Broschüre komplett"}),a.jsx(Gi,{onClick:H,children:"Komplett-Kit (+ Helfer)"}),a.jsx(Gi,{onClick:U,children:"Nur Premium-Pakete"}),a.jsx(Gi,{onClick:G,children:"Starter-Paket"}),a.jsx(Gi,{onClick:K,children:"500 €Club"}),a.jsx(Gi,{onClick:D,children:"Keine"})]}),a.jsx(yd,{children:"Broschüre"}),a.jsx(vd,{children:q.map($=>a.jsxs(jd,{$checked:v.has($.id),children:[a.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>j($.id)}),$.label]},$.id))}),a.jsx(yd,{children:"Community / 500 €Club"}),a.jsx(vd,{children:N.map($=>a.jsxs(jd,{$checked:v.has($.id),children:[a.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>j($.id)}),$.label]},$.id))}),a.jsx(yd,{children:"Helfer-Anhang"}),a.jsx(vd,{children:W.map($=>a.jsxs(jd,{$checked:v.has($.id),children:[a.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>j($.id)}),$.label]},$.id))}),a.jsxs(A6,{disabled:v.size===0,onClick:()=>y("preview"),children:["Vorschau & Drucken (",v.size," Seiten)"]})]})]})}const R6=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],M6=f.section`
  background: url("${df("herren",1)}") center/cover;
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
`,B6=f.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,D6=f.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,O6=f.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,N6=f.main`
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
`,L6=f.section`
  margin-bottom: 4rem;
`,H6=f.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,U6=f.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,G6=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,$6=f.div`
  text-align: center;
  margin-bottom: 3rem;
`,V6=f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,Y6=f.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,P6=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,q6=f.div`
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
`,K6=f.div`
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
`,Q6=f.div`
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
`,Z6=f.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,X6=f.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,J6=f.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,W6=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,F6=f.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,I6=f.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,ez=f.button`
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
`,tz=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,nz=f.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,iz=f.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,rz=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Dr=f.div`
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
`,tp=f.div`
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
`,Or=f.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Nr=f.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Lr=f.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,Hr=f.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Le=f.li`
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
`,Ur=f.button`
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
`,az=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,lz=f.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,sz=f.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,oz=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Sd=f.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,wd=f.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,zd=f.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ed=f.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,cz=f.a`
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
`,uz=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,dz=f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,fz=f.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Gr=f.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,$r=f.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,Vr=f.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function hz(){return a.jsxs(a.Fragment,{children:[a.jsx(M6,{children:a.jsxs(B6,{children:[a.jsx(D6,{children:"SCKW Jobbörse"}),a.jsx(O6,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),a.jsxs(N6,{children:[a.jsxs(L6,{children:[a.jsx(H6,{children:"Willkommen bei der SCKW Jobbörse"}),a.jsx(U6,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),a.jsxs(G6,{children:[a.jsxs($6,{children:[a.jsx(V6,{children:"So könnte es aussehen"}),a.jsx(Y6,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),a.jsx(P6,{children:R6.map(i=>a.jsxs(q6,{children:[i.isExample&&a.jsx(K6,{children:"MUSTER"}),a.jsx(Q6,{children:a.jsx(Z6,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),a.jsx(X6,{children:i.title}),a.jsx(J6,{children:i.company}),a.jsx(W6,{children:i.tags.map((s,u)=>a.jsx(F6,{children:s},u))}),a.jsx(I6,{children:i.description}),a.jsx(ez,{children:"Mehr erfahren"})]},i.id))})]}),a.jsxs(tz,{children:[a.jsx(nz,{children:"Preise für Stellenausschreibungen"}),a.jsx(iz,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),a.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),a.jsxs(rz,{children:[a.jsxs(Dr,{children:[a.jsx(Or,{children:"Basis"}),a.jsx(Nr,{children:"149 €"}),a.jsx(Lr,{children:"netto / Anzeige"}),a.jsxs(Hr,{children:[a.jsx(Le,{children:"30 Tage auf Website (Jobbereich)"}),a.jsx(Le,{children:"Firmenlogo und Link"}),a.jsx(Le,{children:"Detaillierte Stellenbeschreibung"}),a.jsx(Le,{children:"Bewerbermanagement"})]}),a.jsx(Ur,{className:"secondary",children:"Basis wählen"})]}),a.jsxs(Dr,{className:"popular",children:[a.jsx(tp,{children:"BELIEBT"}),a.jsx(Or,{children:"Standard"}),a.jsx(Nr,{children:"229 €"}),a.jsx(Lr,{children:"netto / Anzeige"}),a.jsxs(Hr,{children:[a.jsx(Le,{children:"Alle Basis-Features"}),a.jsx(Le,{children:"1 Social Media Post"}),a.jsx(Le,{children:"Instagram + Facebook Reichweite"}),a.jsx(Le,{children:"Newsletter-Erwähnung"})]}),a.jsx(Ur,{children:"Standard wählen"})]}),a.jsxs(Dr,{children:[a.jsx(Or,{children:"Boosted"}),a.jsx(Nr,{children:"349 €"}),a.jsx(Lr,{children:"netto / Anzeige"}),a.jsxs(Hr,{children:[a.jsx(Le,{children:"Alle Standard-Features"}),a.jsx(Le,{children:"Instagram Story"}),a.jsx(Le,{children:"Stadionmagazin-Erwähnung"}),a.jsx(Le,{children:"Prioritäre Platzierung"})]}),a.jsx(Ur,{className:"secondary",children:"Boosted wählen"})]})]}),a.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),a.jsxs(az,{children:[a.jsxs(Dr,{children:[a.jsx(Or,{children:"Job Flat SMALL"}),a.jsx(Nr,{children:"799 €"}),a.jsx(Lr,{children:"netto / Jahr"}),a.jsxs(Hr,{children:[a.jsx(Le,{children:"Bis zu 6 Anzeigen im Jahr"}),a.jsx(Le,{children:"6 Social Media Posts"}),a.jsx(Le,{children:"Website-Präsenz"}),a.jsx(Le,{children:"Newsletter-Integration"})]}),a.jsx(Ur,{className:"secondary",children:"Small Flat"})]}),a.jsxs(Dr,{className:"popular",children:[a.jsx(tp,{children:"EMPFOHLEN"}),a.jsx(Or,{children:"Job Flat MEDIUM"}),a.jsx(Nr,{children:"1.199 €"}),a.jsx(Lr,{children:"netto / Jahr"}),a.jsxs(Hr,{children:[a.jsx(Le,{children:"Bis zu 12 Anzeigen im Jahr"}),a.jsx(Le,{children:"Stadionmagazin-Präsenz"}),a.jsx(Le,{children:"Social Media Posts"}),a.jsx(Le,{children:"Stories & Highlights"})]}),a.jsx(Ur,{children:"Medium Flat"})]}),a.jsxs(Dr,{children:[a.jsx(Or,{children:"Job Flat PARTNER"}),a.jsx(Nr,{children:"1.499 €"}),a.jsx(Lr,{children:"netto / Jahr"}),a.jsxs(Hr,{children:[a.jsx(Le,{children:"Unbegrenzte Anzeigen"}),a.jsx(Le,{children:"Erwähnung bei Heimspielen"}),a.jsx(Le,{children:'"Top Partner" Sichtbarkeit'}),a.jsx(Le,{children:"Prioritärer Support"})]}),a.jsx(Ur,{className:"secondary",children:"Partner Flat"})]})]}),a.jsxs(lz,{children:[a.jsx(sz,{children:"➕ Zusatzoptionen"}),a.jsxs(oz,{children:[a.jsxs(Sd,{children:[a.jsx(wd,{children:"Social Story"}),a.jsx(zd,{children:"39 €"}),a.jsx(Ed,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),a.jsxs(Sd,{children:[a.jsx(wd,{children:"Designservice"}),a.jsx(zd,{children:"59 €"}),a.jsx(Ed,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),a.jsxs(Sd,{children:[a.jsx(wd,{children:"Stadionmagazin"}),a.jsx(zd,{children:"99 €"}),a.jsx(Ed,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),a.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:a.jsx(cz,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),a.jsxs(uz,{children:[a.jsx(dz,{children:"🎯 Warum SCKW Jobbörse?"}),a.jsxs(fz,{children:[a.jsxs(Gr,{children:[a.jsx($r,{children:"🏠"}),a.jsxs(Vr,{children:[a.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),a.jsxs(Gr,{children:[a.jsx($r,{children:"👥"}),a.jsxs(Vr,{children:[a.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),a.jsxs(Gr,{children:[a.jsx($r,{children:"💰"}),a.jsxs(Vr,{children:[a.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),a.jsxs(Gr,{children:[a.jsx($r,{children:"📈"}),a.jsxs(Vr,{children:[a.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),a.jsxs(Gr,{children:[a.jsx($r,{children:"⚡"}),a.jsxs(Vr,{children:[a.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),a.jsxs(Gr,{children:[a.jsx($r,{children:"🤲"}),a.jsxs(Vr,{children:[a.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),a.jsx(bo,{})]})}f.div`
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
`;f.div`
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
`;f.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;f.div`
  margin-bottom: 1.5rem;
`;f.div`
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
`;f.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;f.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${i=>Math.min(i.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`;f.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;f.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`;f.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;f.div`
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
`;f.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;f.div`
  flex: 1;
`;f.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;f.span`
  font-weight: 600;
  color: #374151;
`;f.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`;f.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`;f.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`;f.button`
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
`;f.div`
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
`;f.section`
  background: url("${df("herren",18)}") center/cover;
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
`;f.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`;f.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;f.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`;f.main`
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
`;f.section`
  margin-bottom: 4rem;
`;f.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`;f.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;f.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`;f.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;f.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`;f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`;f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;f.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;f.div`
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
`;f.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;f.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${i=>i.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`;f.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`;f.div`
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
`;f.div`
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
`;f.div`
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
`;f.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;f.button`
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
`;f.button`
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
`;f.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`;f.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`;f.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`;f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;f.div`
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
`;f.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;f.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`;f.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`;f.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`;f.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`;f.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`;f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;f.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`;f.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;f.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`;f.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`;f.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;f.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;f.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;f.a`
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
`;f.div`
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
`;f.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;f.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`;f.button`
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
`;f.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;f.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;f.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;f.button`
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
`;f.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;lb();function mz(i,s){if(i.match(/^[a-z]+:\/\//i))return i;if(i.match(/^\/\//))return window.location.protocol+i;if(i.match(/^[a-z]+:/i))return i;const u=document.implementation.createHTMLDocument(),o=u.createElement("base"),d=u.createElement("a");return u.head.appendChild(o),u.body.appendChild(d),s&&(o.href=s),d.href=i,d.href}const gz=(()=>{let i=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(i+=1,`u${s()}${i}`)})();function bi(i){const s=[];for(let u=0,o=i.length;u<o;u++)s.push(i[u]);return s}let Yr=null;function hb(i={}){return Yr||(i.includeStyleProperties?(Yr=i.includeStyleProperties,Yr):(Yr=bi(window.getComputedStyle(document.documentElement)),Yr))}function ao(i,s){const o=(i.ownerDocument.defaultView||window).getComputedStyle(i).getPropertyValue(s);return o?parseFloat(o.replace("px","")):0}function pz(i){const s=ao(i,"border-left-width"),u=ao(i,"border-right-width");return i.clientWidth+s+u}function xz(i){const s=ao(i,"border-top-width"),u=ao(i,"border-bottom-width");return i.clientHeight+s+u}function mb(i,s={}){const u=s.width||pz(i),o=s.height||xz(i);return{width:u,height:o}}function bz(){let i,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(i=parseInt(u,10),Number.isNaN(i)&&(i=1)),i||window.devicePixelRatio||1}const Ot=16384;function yz(i){(i.width>Ot||i.height>Ot)&&(i.width>Ot&&i.height>Ot?i.width>i.height?(i.height*=Ot/i.width,i.width=Ot):(i.width*=Ot/i.height,i.height=Ot):i.width>Ot?(i.height*=Ot/i.width,i.width=Ot):(i.width*=Ot/i.height,i.height=Ot))}function lo(i){return new Promise((s,u)=>{const o=new Image;o.onload=()=>{o.decode().then(()=>{requestAnimationFrame(()=>s(o))})},o.onerror=u,o.crossOrigin="anonymous",o.decoding="async",o.src=i})}async function vz(i){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(i)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function jz(i,s,u){const o="http://www.w3.org/2000/svg",d=document.createElementNS(o,"svg"),h=document.createElementNS(o,"foreignObject");return d.setAttribute("width",`${s}`),d.setAttribute("height",`${u}`),d.setAttribute("viewBox",`0 0 ${s} ${u}`),h.setAttribute("width","100%"),h.setAttribute("height","100%"),h.setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("externalResourcesRequired","true"),d.appendChild(h),h.appendChild(i),vz(d)}const wt=(i,s)=>{if(i instanceof s)return!0;const u=Object.getPrototypeOf(i);return u===null?!1:u.constructor.name===s.name||wt(u,s)};function Sz(i){const s=i.getPropertyValue("content");return`${i.cssText} content: '${s.replace(/'|"/g,"")}';`}function wz(i,s){return hb(s).map(u=>{const o=i.getPropertyValue(u),d=i.getPropertyPriority(u);return`${u}: ${o}${d?" !important":""};`}).join(" ")}function zz(i,s,u,o){const d=`.${i}:${s}`,h=u.cssText?Sz(u):wz(u,o);return document.createTextNode(`${d}{${h}}`)}function np(i,s,u,o){const d=window.getComputedStyle(i,u),h=d.getPropertyValue("content");if(h===""||h==="none")return;const x=gz();try{s.className=`${s.className} ${x}`}catch{return}const v=document.createElement("style");v.appendChild(zz(x,u,d,o)),s.appendChild(v)}function Ez(i,s,u){np(i,s,":before",u),np(i,s,":after",u)}const ip="application/font-woff",rp="image/jpeg",_z={woff:ip,woff2:ip,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:rp,jpeg:rp,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function kz(i){const s=/\.([^./]*?)$/g.exec(i);return s?s[1]:""}function mf(i){const s=kz(i).toLowerCase();return _z[s]||""}function Az(i){return i.split(/,/)[1]}function Kd(i){return i.search(/^(data:)/)!==-1}function Tz(i,s){return`data:${s};base64,${i}`}async function gb(i,s,u){const o=await fetch(i,s);if(o.status===404)throw new Error(`Resource "${o.url}" not found`);const d=await o.blob();return new Promise((h,x)=>{const v=new FileReader;v.onerror=x,v.onloadend=()=>{try{h(u({res:o,result:v.result}))}catch(p){x(p)}},v.readAsDataURL(d)})}const _d={};function Cz(i,s,u){let o=i.replace(/\?.*/,"");return u&&(o=i),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),s?`[${s}]${o}`:o}async function gf(i,s,u){const o=Cz(i,s,u.includeQueryParams);if(_d[o]!=null)return _d[o];u.cacheBust&&(i+=(/\?/.test(i)?"&":"?")+new Date().getTime());let d;try{const h=await gb(i,u.fetchRequestInit,({res:x,result:v})=>(s||(s=x.headers.get("Content-Type")||""),Az(v)));d=Tz(h,s)}catch(h){d=u.imagePlaceholder||"";let x=`Failed to fetch resource: ${i}`;h&&(x=typeof h=="string"?h:h.message),x&&console.warn(x)}return _d[o]=d,d}async function Rz(i){const s=i.toDataURL();return s==="data:,"?i.cloneNode(!1):lo(s)}async function Mz(i,s){if(i.currentSrc){const h=document.createElement("canvas"),x=h.getContext("2d");h.width=i.clientWidth,h.height=i.clientHeight,x?.drawImage(i,0,0,h.width,h.height);const v=h.toDataURL();return lo(v)}const u=i.poster,o=mf(u),d=await gf(u,o,s);return lo(d)}async function Bz(i,s){var u;try{if(!((u=i?.contentDocument)===null||u===void 0)&&u.body)return await yo(i.contentDocument.body,s,!0)}catch{}return i.cloneNode(!1)}async function Dz(i,s){return wt(i,HTMLCanvasElement)?Rz(i):wt(i,HTMLVideoElement)?Mz(i,s):wt(i,HTMLIFrameElement)?Bz(i,s):i.cloneNode(pb(i))}const Oz=i=>i.tagName!=null&&i.tagName.toUpperCase()==="SLOT",pb=i=>i.tagName!=null&&i.tagName.toUpperCase()==="SVG";async function Nz(i,s,u){var o,d;if(pb(s))return s;let h=[];return Oz(i)&&i.assignedNodes?h=bi(i.assignedNodes()):wt(i,HTMLIFrameElement)&&(!((o=i.contentDocument)===null||o===void 0)&&o.body)?h=bi(i.contentDocument.body.childNodes):h=bi(((d=i.shadowRoot)!==null&&d!==void 0?d:i).childNodes),h.length===0||wt(i,HTMLVideoElement)||await h.reduce((x,v)=>x.then(()=>yo(v,u)).then(p=>{p&&s.appendChild(p)}),Promise.resolve()),s}function Lz(i,s,u){const o=s.style;if(!o)return;const d=window.getComputedStyle(i);d.cssText?(o.cssText=d.cssText,o.transformOrigin=d.transformOrigin):hb(u).forEach(h=>{let x=d.getPropertyValue(h);h==="font-size"&&x.endsWith("px")&&(x=`${Math.floor(parseFloat(x.substring(0,x.length-2)))-.1}px`),wt(i,HTMLIFrameElement)&&h==="display"&&x==="inline"&&(x="block"),h==="d"&&s.getAttribute("d")&&(x=`path(${s.getAttribute("d")})`),o.setProperty(h,x,d.getPropertyPriority(h))})}function Hz(i,s){wt(i,HTMLTextAreaElement)&&(s.innerHTML=i.value),wt(i,HTMLInputElement)&&s.setAttribute("value",i.value)}function Uz(i,s){if(wt(i,HTMLSelectElement)){const u=s,o=Array.from(u.children).find(d=>i.value===d.getAttribute("value"));o&&o.setAttribute("selected","")}}function Gz(i,s,u){return wt(s,Element)&&(Lz(i,s,u),Ez(i,s,u),Hz(i,s),Uz(i,s)),s}async function $z(i,s){const u=i.querySelectorAll?i.querySelectorAll("use"):[];if(u.length===0)return i;const o={};for(let h=0;h<u.length;h++){const v=u[h].getAttribute("xlink:href");if(v){const p=i.querySelector(v),g=document.querySelector(v);!p&&g&&!o[v]&&(o[v]=await yo(g,s,!0))}}const d=Object.values(o);if(d.length){const h="http://www.w3.org/1999/xhtml",x=document.createElementNS(h,"svg");x.setAttribute("xmlns",h),x.style.position="absolute",x.style.width="0",x.style.height="0",x.style.overflow="hidden",x.style.display="none";const v=document.createElementNS(h,"defs");x.appendChild(v);for(let p=0;p<d.length;p++)v.appendChild(d[p]);i.appendChild(x)}return i}async function yo(i,s,u){return!u&&s.filter&&!s.filter(i)?null:Promise.resolve(i).then(o=>Dz(o,s)).then(o=>Nz(i,o,s)).then(o=>Gz(i,o,s)).then(o=>$z(o,s))}const xb=/url\((['"]?)([^'"]+?)\1\)/g,Vz=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Yz=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Pz(i){const s=i.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function qz(i){const s=[];return i.replace(xb,(u,o,d)=>(s.push(d),u)),s.filter(u=>!Kd(u))}async function Kz(i,s,u,o,d){try{const h=u?mz(s,u):s,x=mf(s);let v;return d||(v=await gf(h,x,o)),i.replace(Pz(s),`$1${v}$3`)}catch{}return i}function Qz(i,{preferredFontFormat:s}){return s?i.replace(Yz,u=>{for(;;){const[o,,d]=Vz.exec(u)||[];if(!d)return"";if(d===s)return`src: ${o};`}}):i}function bb(i){return i.search(xb)!==-1}async function yb(i,s,u){if(!bb(i))return i;const o=Qz(i,u);return qz(o).reduce((h,x)=>h.then(v=>Kz(v,x,s,u)),Promise.resolve(o))}async function Pr(i,s,u){var o;const d=(o=s.style)===null||o===void 0?void 0:o.getPropertyValue(i);if(d){const h=await yb(d,null,u);return s.style.setProperty(i,h,s.style.getPropertyPriority(i)),!0}return!1}async function Zz(i,s){await Pr("background",i,s)||await Pr("background-image",i,s),await Pr("mask",i,s)||await Pr("-webkit-mask",i,s)||await Pr("mask-image",i,s)||await Pr("-webkit-mask-image",i,s)}async function Xz(i,s){const u=wt(i,HTMLImageElement);if(!(u&&!Kd(i.src))&&!(wt(i,SVGImageElement)&&!Kd(i.href.baseVal)))return;const o=u?i.src:i.href.baseVal,d=await gf(o,mf(o),s);await new Promise((h,x)=>{i.onload=h,i.onerror=s.onImageErrorHandler?(...p)=>{try{h(s.onImageErrorHandler(...p))}catch(g){x(g)}}:x;const v=i;v.decode&&(v.decode=h),v.loading==="lazy"&&(v.loading="eager"),u?(i.srcset="",i.src=d):i.href.baseVal=d})}async function Jz(i,s){const o=bi(i.childNodes).map(d=>vb(d,s));await Promise.all(o).then(()=>i)}async function vb(i,s){wt(i,Element)&&(await Zz(i,s),await Xz(i,s),await Jz(i,s))}function Wz(i,s){const{style:u}=i;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const o=s.style;return o!=null&&Object.keys(o).forEach(d=>{u[d]=o[d]}),i}const ap={};async function lp(i){let s=ap[i];if(s!=null)return s;const o=await(await fetch(i)).text();return s={url:i,cssText:o},ap[i]=s,s}async function sp(i,s){let u=i.cssText;const o=/url\(["']?([^"')]+)["']?\)/g,h=(u.match(/url\([^)]+\)/g)||[]).map(async x=>{let v=x.replace(o,"$1");return v.startsWith("https://")||(v=new URL(v,i.url).href),gb(v,s.fetchRequestInit,({result:p})=>(u=u.replace(x,`url(${p})`),[x,p]))});return Promise.all(h).then(()=>u)}function op(i){if(i==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let o=i.replace(u,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const p=d.exec(o);if(p===null)break;s.push(p[0])}o=o.replace(d,"");const h=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,x="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",v=new RegExp(x,"gi");for(;;){let p=h.exec(o);if(p===null){if(p=v.exec(o),p===null)break;h.lastIndex=v.lastIndex}else v.lastIndex=h.lastIndex;s.push(p[0])}return s}async function Fz(i,s){const u=[],o=[];return i.forEach(d=>{if("cssRules"in d)try{bi(d.cssRules||[]).forEach((h,x)=>{if(h.type===CSSRule.IMPORT_RULE){let v=x+1;const p=h.href,g=lp(p).then(y=>sp(y,s)).then(y=>op(y).forEach(j=>{try{d.insertRule(j,j.startsWith("@import")?v+=1:d.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:j,error:w})}})).catch(y=>{console.error("Error loading remote css",y.toString())});o.push(g)}})}catch(h){const x=i.find(v=>v.href==null)||document.styleSheets[0];d.href!=null&&o.push(lp(d.href).then(v=>sp(v,s)).then(v=>op(v).forEach(p=>{x.insertRule(p,x.cssRules.length)})).catch(v=>{console.error("Error loading remote stylesheet",v)})),console.error("Error inlining remote css file",h)}}),Promise.all(o).then(()=>(i.forEach(d=>{if("cssRules"in d)try{bi(d.cssRules||[]).forEach(h=>{u.push(h)})}catch(h){console.error(`Error while reading CSS rules from ${d.href}`,h)}}),u))}function Iz(i){return i.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>bb(s.style.getPropertyValue("src")))}async function e8(i,s){if(i.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=bi(i.ownerDocument.styleSheets),o=await Fz(u,s);return Iz(o)}function jb(i){return i.trim().replace(/["']/g,"")}function t8(i){const s=new Set;function u(o){(o.style.fontFamily||getComputedStyle(o).fontFamily).split(",").forEach(h=>{s.add(jb(h))}),Array.from(o.children).forEach(h=>{h instanceof HTMLElement&&u(h)})}return u(i),s}async function n8(i,s){const u=await e8(i,s),o=t8(i);return(await Promise.all(u.filter(h=>o.has(jb(h.style.fontFamily))).map(h=>{const x=h.parentStyleSheet?h.parentStyleSheet.href:null;return yb(h.cssText,x,s)}))).join(`
`)}async function i8(i,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await n8(i,s);if(u){const o=document.createElement("style"),d=document.createTextNode(u);o.appendChild(d),i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o)}}async function r8(i,s={}){const{width:u,height:o}=mb(i,s),d=await yo(i,s,!0);return await i8(d,s),await vb(d,s),Wz(d,s),await jz(d,u,o)}async function a8(i,s={}){const{width:u,height:o}=mb(i,s),d=await r8(i,s),h=await lo(d),x=document.createElement("canvas"),v=x.getContext("2d"),p=s.pixelRatio||bz(),g=s.canvasWidth||u,y=s.canvasHeight||o;return x.width=g*p,x.height=y*p,s.skipAutoScale||yz(x),x.style.width=`${g}`,x.style.height=`${y}`,s.backgroundColor&&(v.fillStyle=s.backgroundColor,v.fillRect(0,0,x.width,x.height)),v.drawImage(h,0,0,x.width,x.height),x}async function l8(i,s={}){return(await a8(i,s)).toDataURL()}const ll=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],s8=f.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,o8=f.div`
  max-width: 1200px;
  margin: 0 auto;
`,c8=f.div`
  text-align: center;
  margin-bottom: 2rem;
`,u8=f.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,d8=f.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,f8=f.select`
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
`,h8=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,m8=f.div`
  flex: 1;
  min-width: 0;
`,g8=f.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,p8=f.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,x8=f.div`
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
    background: ${i=>i.$hasLogo?"transparent":"rgba(59,130,246,0.08)"};
  }
`,b8=f.img`
  width: ${i=>i.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${i=>i.$offsetX}%, ${i=>i.$offsetY}%);
`,y8=f.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,v8=f.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,j8=f.div`
  background: #fff;
  border: 2px solid ${i=>i.$active?"#3b82f6":"#e5e7eb"};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
  }
`,S8=f.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,w8=f.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,z8=f.label`
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
`,E8=f.button`
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
`,_8=f.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,k8=f.input`
  display: none;
`,A8=f.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,kd=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Ad=f.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,Td=f.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,T8=f.button`
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
`,C8=f.button`
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
`;function R8(){const[i,s]=C.useState(ll[0].id),[u,o]=C.useState(null),[d,h]=C.useState([]),[x,v]=C.useState(!1),p=C.useRef({}),g=C.useRef(null),y=ll.find(A=>A.id===i)??ll[0],j=A=>d.find(q=>q.zoneId===A),w=C.useCallback((A,q)=>{if(!q)return;const N=new FileReader;N.onload=W=>{const $=W.target?.result;h(he=>[...he.filter(oe=>oe.zoneId!==A),{zoneId:A,dataUrl:$,scale:1,offsetX:0,offsetY:0}])},N.readAsDataURL(q)},[]),D=C.useCallback((A,q)=>{h(N=>N.map(W=>W.zoneId===A?{...W,scale:q}:W))},[]),R=C.useCallback((A,q,N)=>{h(W=>W.map($=>$.zoneId===A?{...$,offsetX:q,offsetY:N}:$))},[]),H=C.useCallback(A=>{h(q=>q.filter(N=>N.zoneId!==A))},[]),G=C.useCallback(()=>{h([]),o(null)},[]),U=C.useCallback(async()=>{if(g.current){v(!0);try{const A=await l8(g.current,{pixelRatio:2,cacheBust:!0}),q=document.createElement("a");q.download=`${y.label}-mockup.png`,q.href=A,q.click()}finally{v(!1)}}},[y.label]),K=A=>{o(A.id),j(A.id)||p.current[A.id]?.click()};return a.jsx(s8,{children:a.jsxs(o8,{children:[a.jsxs(c8,{children:[a.jsx(u8,{children:"Mockup Generator"}),a.jsx(d8,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),ll.length>1&&a.jsx(f8,{value:i,onChange:A=>{s(A.target.value),h([]),o(null)},children:ll.map(A=>a.jsx("option",{value:A.id,children:A.label},A.id))}),a.jsxs(h8,{children:[a.jsx(m8,{children:a.jsxs(g8,{ref:g,children:[a.jsx(p8,{src:y.image,alt:y.label,draggable:!1}),y.zones.map(A=>{const q=j(A.id);return a.jsx(x8,{$active:u===A.id,$hasLogo:!!q,style:{left:`${A.x}%`,top:`${A.y}%`,width:`${A.width}%`,height:`${A.height}%`},onClick:()=>K(A),onDragOver:N=>{N.preventDefault(),o(A.id)},onDrop:N=>{N.preventDefault();const W=N.dataTransfer.files?.[0];w(A.id,W)},children:q&&a.jsx(b8,{src:q.dataUrl,alt:"Logo",draggable:!1,$scale:q.scale,$offsetX:q.offsetX,$offsetY:q.offsetY})},A.id)})]})}),a.jsxs(y8,{children:[a.jsx(v8,{children:"Werbeflächen"}),y.zones.map(A=>{const q=j(A.id);return a.jsxs(j8,{$active:u===A.id,onClick:()=>o(A.id),children:[a.jsx(S8,{children:A.label}),a.jsxs(w8,{children:[a.jsx(z8,{htmlFor:`file-${A.id}`,children:q?"Ändern":"Logo hochladen"}),a.jsx(k8,{id:`file-${A.id}`,ref:N=>{p.current[A.id]=N},type:"file",accept:"image/*",onChange:N=>w(A.id,N.target.files?.[0])}),q&&a.jsx(E8,{onClick:N=>{N.stopPropagation(),H(A.id)},children:"Entfernen"}),q&&a.jsx(_8,{src:q.dataUrl,alt:"Vorschau"})]}),q&&a.jsxs(a.Fragment,{children:[a.jsxs(kd,{children:[a.jsxs(Ad,{children:[Math.round(q.scale*100),"%"]}),a.jsx(Td,{type:"range",min:"0.3",max:"3",step:"0.05",value:q.scale,onClick:N=>N.stopPropagation(),onChange:N=>{N.stopPropagation(),D(A.id,parseFloat(N.target.value))}})]}),a.jsxs(kd,{children:[a.jsx(Ad,{children:"X"}),a.jsx(Td,{type:"range",min:"-100",max:"100",step:"1",value:q.offsetX,onClick:N=>N.stopPropagation(),onChange:N=>{N.stopPropagation(),R(A.id,parseFloat(N.target.value),q.offsetY)}})]}),a.jsxs(kd,{children:[a.jsx(Ad,{children:"Y"}),a.jsx(Td,{type:"range",min:"-100",max:"100",step:"1",value:q.offsetY,onClick:N=>N.stopPropagation(),onChange:N=>{N.stopPropagation(),R(A.id,q.offsetX,parseFloat(N.target.value))}})]})]}),!q&&a.jsx(A8,{children:"Klicken oder Bild hierher ziehen"})]},A.id)}),d.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(C8,{onClick:U,disabled:x,children:x?"Wird erstellt...":"Bild herunterladen"}),a.jsx(T8,{onClick:G,children:"Alle Logos entfernen"})]})]})]})]})})}var M8=Object.defineProperty,so=Object.getOwnPropertySymbols,Sb=Object.prototype.hasOwnProperty,wb=Object.prototype.propertyIsEnumerable,cp=(i,s,u)=>s in i?M8(i,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[s]=u,Qd=(i,s)=>{for(var u in s||(s={}))Sb.call(s,u)&&cp(i,u,s[u]);if(so)for(var u of so(s))wb.call(s,u)&&cp(i,u,s[u]);return i},Zd=(i,s)=>{var u={};for(var o in i)Sb.call(i,o)&&s.indexOf(o)<0&&(u[o]=i[o]);if(i!=null&&so)for(var o of so(i))s.indexOf(o)<0&&wb.call(i,o)&&(u[o]=i[o]);return u};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ki;(i=>{const s=class xe{constructor(p,g,y,j){if(this.version=p,this.errorCorrectionLevel=g,this.modules=[],this.isFunction=[],p<xe.MIN_VERSION||p>xe.MAX_VERSION)throw new RangeError("Version value out of range");if(j<-1||j>7)throw new RangeError("Mask value out of range");this.size=p*4+17;let w=[];for(let R=0;R<this.size;R++)w.push(!1);for(let R=0;R<this.size;R++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const D=this.addEccAndInterleave(y);if(this.drawCodewords(D),j==-1){let R=1e9;for(let H=0;H<8;H++){this.applyMask(H),this.drawFormatBits(H);const G=this.getPenaltyScore();G<R&&(j=H,R=G),this.applyMask(H)}}d(0<=j&&j<=7),this.mask=j,this.applyMask(j),this.drawFormatBits(j),this.isFunction=[]}static encodeText(p,g){const y=i.QrSegment.makeSegments(p);return xe.encodeSegments(y,g)}static encodeBinary(p,g){const y=i.QrSegment.makeBytes(p);return xe.encodeSegments([y],g)}static encodeSegments(p,g,y=1,j=40,w=-1,D=!0){if(!(xe.MIN_VERSION<=y&&y<=j&&j<=xe.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let R,H;for(R=y;;R++){const A=xe.getNumDataCodewords(R,g)*8,q=x.getTotalBits(p,R);if(q<=A){H=q;break}if(R>=j)throw new RangeError("Data too long")}for(const A of[xe.Ecc.MEDIUM,xe.Ecc.QUARTILE,xe.Ecc.HIGH])D&&H<=xe.getNumDataCodewords(R,A)*8&&(g=A);let G=[];for(const A of p){u(A.mode.modeBits,4,G),u(A.numChars,A.mode.numCharCountBits(R),G);for(const q of A.getData())G.push(q)}d(G.length==H);const U=xe.getNumDataCodewords(R,g)*8;d(G.length<=U),u(0,Math.min(4,U-G.length),G),u(0,(8-G.length%8)%8,G),d(G.length%8==0);for(let A=236;G.length<U;A^=253)u(A,8,G);let K=[];for(;K.length*8<G.length;)K.push(0);return G.forEach((A,q)=>K[q>>>3]|=A<<7-(q&7)),new xe(R,g,K,w)}getModule(p,g){return 0<=p&&p<this.size&&0<=g&&g<this.size&&this.modules[g][p]}getModules(){return this.modules}drawFunctionPatterns(){for(let y=0;y<this.size;y++)this.setFunctionModule(6,y,y%2==0),this.setFunctionModule(y,6,y%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const p=this.getAlignmentPatternPositions(),g=p.length;for(let y=0;y<g;y++)for(let j=0;j<g;j++)y==0&&j==0||y==0&&j==g-1||y==g-1&&j==0||this.drawAlignmentPattern(p[y],p[j]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(p){const g=this.errorCorrectionLevel.formatBits<<3|p;let y=g;for(let w=0;w<10;w++)y=y<<1^(y>>>9)*1335;const j=(g<<10|y)^21522;d(j>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,o(j,w));this.setFunctionModule(8,7,o(j,6)),this.setFunctionModule(8,8,o(j,7)),this.setFunctionModule(7,8,o(j,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,o(j,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,o(j,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,o(j,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let p=this.version;for(let y=0;y<12;y++)p=p<<1^(p>>>11)*7973;const g=this.version<<12|p;d(g>>>18==0);for(let y=0;y<18;y++){const j=o(g,y),w=this.size-11+y%3,D=Math.floor(y/3);this.setFunctionModule(w,D,j),this.setFunctionModule(D,w,j)}}drawFinderPattern(p,g){for(let y=-4;y<=4;y++)for(let j=-4;j<=4;j++){const w=Math.max(Math.abs(j),Math.abs(y)),D=p+j,R=g+y;0<=D&&D<this.size&&0<=R&&R<this.size&&this.setFunctionModule(D,R,w!=2&&w!=4)}}drawAlignmentPattern(p,g){for(let y=-2;y<=2;y++)for(let j=-2;j<=2;j++)this.setFunctionModule(p+j,g+y,Math.max(Math.abs(j),Math.abs(y))!=1)}setFunctionModule(p,g,y){this.modules[g][p]=y,this.isFunction[g][p]=!0}addEccAndInterleave(p){const g=this.version,y=this.errorCorrectionLevel;if(p.length!=xe.getNumDataCodewords(g,y))throw new RangeError("Invalid argument");const j=xe.NUM_ERROR_CORRECTION_BLOCKS[y.ordinal][g],w=xe.ECC_CODEWORDS_PER_BLOCK[y.ordinal][g],D=Math.floor(xe.getNumRawDataModules(g)/8),R=j-D%j,H=Math.floor(D/j);let G=[];const U=xe.reedSolomonComputeDivisor(w);for(let A=0,q=0;A<j;A++){let N=p.slice(q,q+H-w+(A<R?0:1));q+=N.length;const W=xe.reedSolomonComputeRemainder(N,U);A<R&&N.push(0),G.push(N.concat(W))}let K=[];for(let A=0;A<G[0].length;A++)G.forEach((q,N)=>{(A!=H-w||N>=R)&&K.push(q[A])});return d(K.length==D),K}drawCodewords(p){if(p.length!=Math.floor(xe.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let g=0;for(let y=this.size-1;y>=1;y-=2){y==6&&(y=5);for(let j=0;j<this.size;j++)for(let w=0;w<2;w++){const D=y-w,H=(y+1&2)==0?this.size-1-j:j;!this.isFunction[H][D]&&g<p.length*8&&(this.modules[H][D]=o(p[g>>>3],7-(g&7)),g++)}}d(g==p.length*8)}applyMask(p){if(p<0||p>7)throw new RangeError("Mask value out of range");for(let g=0;g<this.size;g++)for(let y=0;y<this.size;y++){let j;switch(p){case 0:j=(y+g)%2==0;break;case 1:j=g%2==0;break;case 2:j=y%3==0;break;case 3:j=(y+g)%3==0;break;case 4:j=(Math.floor(y/3)+Math.floor(g/2))%2==0;break;case 5:j=y*g%2+y*g%3==0;break;case 6:j=(y*g%2+y*g%3)%2==0;break;case 7:j=((y+g)%2+y*g%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[g][y]&&j&&(this.modules[g][y]=!this.modules[g][y])}}getPenaltyScore(){let p=0;for(let w=0;w<this.size;w++){let D=!1,R=0,H=[0,0,0,0,0,0,0];for(let G=0;G<this.size;G++)this.modules[w][G]==D?(R++,R==5?p+=xe.PENALTY_N1:R>5&&p++):(this.finderPenaltyAddHistory(R,H),D||(p+=this.finderPenaltyCountPatterns(H)*xe.PENALTY_N3),D=this.modules[w][G],R=1);p+=this.finderPenaltyTerminateAndCount(D,R,H)*xe.PENALTY_N3}for(let w=0;w<this.size;w++){let D=!1,R=0,H=[0,0,0,0,0,0,0];for(let G=0;G<this.size;G++)this.modules[G][w]==D?(R++,R==5?p+=xe.PENALTY_N1:R>5&&p++):(this.finderPenaltyAddHistory(R,H),D||(p+=this.finderPenaltyCountPatterns(H)*xe.PENALTY_N3),D=this.modules[G][w],R=1);p+=this.finderPenaltyTerminateAndCount(D,R,H)*xe.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let D=0;D<this.size-1;D++){const R=this.modules[w][D];R==this.modules[w][D+1]&&R==this.modules[w+1][D]&&R==this.modules[w+1][D+1]&&(p+=xe.PENALTY_N2)}let g=0;for(const w of this.modules)g=w.reduce((D,R)=>D+(R?1:0),g);const y=this.size*this.size,j=Math.ceil(Math.abs(g*20-y*10)/y)-1;return d(0<=j&&j<=9),p+=j*xe.PENALTY_N4,d(0<=p&&p<=2568888),p}getAlignmentPatternPositions(){if(this.version==1)return[];{const p=Math.floor(this.version/7)+2,g=this.version==32?26:Math.ceil((this.version*4+4)/(p*2-2))*2;let y=[6];for(let j=this.size-7;y.length<p;j-=g)y.splice(1,0,j);return y}}static getNumRawDataModules(p){if(p<xe.MIN_VERSION||p>xe.MAX_VERSION)throw new RangeError("Version number out of range");let g=(16*p+128)*p+64;if(p>=2){const y=Math.floor(p/7)+2;g-=(25*y-10)*y-55,p>=7&&(g-=36)}return d(208<=g&&g<=29648),g}static getNumDataCodewords(p,g){return Math.floor(xe.getNumRawDataModules(p)/8)-xe.ECC_CODEWORDS_PER_BLOCK[g.ordinal][p]*xe.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][p]}static reedSolomonComputeDivisor(p){if(p<1||p>255)throw new RangeError("Degree out of range");let g=[];for(let j=0;j<p-1;j++)g.push(0);g.push(1);let y=1;for(let j=0;j<p;j++){for(let w=0;w<g.length;w++)g[w]=xe.reedSolomonMultiply(g[w],y),w+1<g.length&&(g[w]^=g[w+1]);y=xe.reedSolomonMultiply(y,2)}return g}static reedSolomonComputeRemainder(p,g){let y=g.map(j=>0);for(const j of p){const w=j^y.shift();y.push(0),g.forEach((D,R)=>y[R]^=xe.reedSolomonMultiply(D,w))}return y}static reedSolomonMultiply(p,g){if(p>>>8||g>>>8)throw new RangeError("Byte out of range");let y=0;for(let j=7;j>=0;j--)y=y<<1^(y>>>7)*285,y^=(g>>>j&1)*p;return d(y>>>8==0),y}finderPenaltyCountPatterns(p){const g=p[1];d(g<=this.size*3);const y=g>0&&p[2]==g&&p[3]==g*3&&p[4]==g&&p[5]==g;return(y&&p[0]>=g*4&&p[6]>=g?1:0)+(y&&p[6]>=g*4&&p[0]>=g?1:0)}finderPenaltyTerminateAndCount(p,g,y){return p&&(this.finderPenaltyAddHistory(g,y),g=0),g+=this.size,this.finderPenaltyAddHistory(g,y),this.finderPenaltyCountPatterns(y)}finderPenaltyAddHistory(p,g){g[0]==0&&(p+=this.size),g.pop(),g.unshift(p)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],i.QrCode=s;function u(v,p,g){if(p<0||p>31||v>>>p)throw new RangeError("Value out of range");for(let y=p-1;y>=0;y--)g.push(v>>>y&1)}function o(v,p){return(v>>>p&1)!=0}function d(v){if(!v)throw new Error("Assertion error")}const h=class Ve{constructor(p,g,y){if(this.mode=p,this.numChars=g,this.bitData=y,g<0)throw new RangeError("Invalid argument");this.bitData=y.slice()}static makeBytes(p){let g=[];for(const y of p)u(y,8,g);return new Ve(Ve.Mode.BYTE,p.length,g)}static makeNumeric(p){if(!Ve.isNumeric(p))throw new RangeError("String contains non-numeric characters");let g=[];for(let y=0;y<p.length;){const j=Math.min(p.length-y,3);u(parseInt(p.substring(y,y+j),10),j*3+1,g),y+=j}return new Ve(Ve.Mode.NUMERIC,p.length,g)}static makeAlphanumeric(p){if(!Ve.isAlphanumeric(p))throw new RangeError("String contains unencodable characters in alphanumeric mode");let g=[],y;for(y=0;y+2<=p.length;y+=2){let j=Ve.ALPHANUMERIC_CHARSET.indexOf(p.charAt(y))*45;j+=Ve.ALPHANUMERIC_CHARSET.indexOf(p.charAt(y+1)),u(j,11,g)}return y<p.length&&u(Ve.ALPHANUMERIC_CHARSET.indexOf(p.charAt(y)),6,g),new Ve(Ve.Mode.ALPHANUMERIC,p.length,g)}static makeSegments(p){return p==""?[]:Ve.isNumeric(p)?[Ve.makeNumeric(p)]:Ve.isAlphanumeric(p)?[Ve.makeAlphanumeric(p)]:[Ve.makeBytes(Ve.toUtf8ByteArray(p))]}static makeEci(p){let g=[];if(p<0)throw new RangeError("ECI assignment value out of range");if(p<128)u(p,8,g);else if(p<16384)u(2,2,g),u(p,14,g);else if(p<1e6)u(6,3,g),u(p,21,g);else throw new RangeError("ECI assignment value out of range");return new Ve(Ve.Mode.ECI,0,g)}static isNumeric(p){return Ve.NUMERIC_REGEX.test(p)}static isAlphanumeric(p){return Ve.ALPHANUMERIC_REGEX.test(p)}getData(){return this.bitData.slice()}static getTotalBits(p,g){let y=0;for(const j of p){const w=j.mode.numCharCountBits(g);if(j.numChars>=1<<w)return 1/0;y+=4+w+j.bitData.length}return y}static toUtf8ByteArray(p){p=encodeURI(p);let g=[];for(let y=0;y<p.length;y++)p.charAt(y)!="%"?g.push(p.charCodeAt(y)):(g.push(parseInt(p.substring(y+1,y+3),16)),y+=2);return g}};h.NUMERIC_REGEX=/^[0-9]*$/,h.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,h.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let x=h;i.QrSegment=h})(Ki||(Ki={}));(i=>{(s=>{const u=class{constructor(d,h){this.ordinal=d,this.formatBits=h}};u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),s.Ecc=u})(i.QrCode||(i.QrCode={}))})(Ki||(Ki={}));(i=>{(s=>{const u=class{constructor(d,h){this.modeBits=d,this.numBitsCharCount=h}numCharCountBits(d){return this.numBitsCharCount[Math.floor((d+7)/17)]}};u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),s.Mode=u})(i.QrSegment||(i.QrSegment={}))})(Ki||(Ki={}));var Qr=Ki;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var B8={L:Qr.QrCode.Ecc.LOW,M:Qr.QrCode.Ecc.MEDIUM,Q:Qr.QrCode.Ecc.QUARTILE,H:Qr.QrCode.Ecc.HIGH},zb=128,Eb="L",_b="#FFFFFF",kb="#000000",Ab=!1,Tb=1,D8=4,O8=0,N8=.1;function Cb(i,s=0){const u=[];return i.forEach(function(o,d){let h=null;o.forEach(function(x,v){if(!x&&h!==null){u.push(`M${h+s} ${d+s}h${v-h}v1H${h+s}z`),h=null;return}if(v===o.length-1){if(!x)return;h===null?u.push(`M${v+s},${d+s} h1v1H${v+s}z`):u.push(`M${h+s},${d+s} h${v+1-h}v1H${h+s}z`);return}x&&h===null&&(h=v)})}),u.join("")}function Rb(i,s){return i.slice().map((u,o)=>o<s.y||o>=s.y+s.h?u:u.map((d,h)=>h<s.x||h>=s.x+s.w?d:!1))}function L8(i,s,u,o){if(o==null)return null;const d=i.length+u*2,h=Math.floor(s*N8),x=d/s,v=(o.width||h)*x,p=(o.height||h)*x,g=o.x==null?i.length/2-v/2:o.x*x,y=o.y==null?i.length/2-p/2:o.y*x,j=o.opacity==null?1:o.opacity;let w=null;if(o.excavate){let R=Math.floor(g),H=Math.floor(y),G=Math.ceil(v+g-R),U=Math.ceil(p+y-H);w={x:R,y:H,w:G,h:U}}const D=o.crossOrigin;return{x:g,y,h:p,w:v,excavation:w,opacity:j,crossOrigin:D}}function H8(i,s){return s!=null?Math.max(Math.floor(s),0):i?D8:O8}function Mb({value:i,level:s,minVersion:u,includeMargin:o,marginSize:d,imageSettings:h,size:x,boostLevel:v}){let p=ze.useMemo(()=>{const R=(Array.isArray(i)?i:[i]).reduce((H,G)=>(H.push(...Qr.QrSegment.makeSegments(G)),H),[]);return Qr.QrCode.encodeSegments(R,B8[s],u,void 0,void 0,v)},[i,s,u,v]);const{cells:g,margin:y,numCells:j,calculatedImageSettings:w}=ze.useMemo(()=>{let D=p.getModules();const R=H8(o,d),H=D.length+R*2,G=L8(D,x,R,h);return{cells:D,margin:R,numCells:H,calculatedImageSettings:G}},[p,x,h,o,d]);return{qrcode:p,margin:y,cells:g,numCells:j,calculatedImageSettings:w}}var U8=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),G8=ze.forwardRef(function(s,u){const o=s,{value:d,size:h=zb,level:x=Eb,bgColor:v=_b,fgColor:p=kb,includeMargin:g=Ab,minVersion:y=Tb,boostLevel:j,marginSize:w,imageSettings:D}=o,H=Zd(o,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:G}=H,U=Zd(H,["style"]),K=D?.src,A=ze.useRef(null),q=ze.useRef(null),N=ze.useCallback(at=>{A.current=at,typeof u=="function"?u(at):u&&(u.current=at)},[u]),[W,$]=ze.useState(!1),{margin:he,cells:oe,numCells:Me,calculatedImageSettings:J}=Mb({value:d,level:x,minVersion:y,boostLevel:j,includeMargin:g,marginSize:w,imageSettings:D,size:h});ze.useEffect(()=>{if(A.current!=null){const at=A.current,ke=at.getContext("2d");if(!ke)return;let O=oe;const Q=q.current,ne=J!=null&&Q!==null&&Q.complete&&Q.naturalHeight!==0&&Q.naturalWidth!==0;ne&&J.excavation!=null&&(O=Rb(oe,J.excavation));const ce=window.devicePixelRatio||1;at.height=at.width=h*ce;const z=h/Me*ce;ke.scale(z,z),ke.fillStyle=v,ke.fillRect(0,0,Me,Me),ke.fillStyle=p,U8?ke.fill(new Path2D(Cb(O,he))):oe.forEach(function(P,Z){P.forEach(function(X,ee){X&&ke.fillRect(ee+he,Z+he,1,1)})}),J&&(ke.globalAlpha=J.opacity),ne&&ke.drawImage(Q,J.x+he,J.y+he,J.w,J.h)}}),ze.useEffect(()=>{$(!1)},[K]);const ye=Qd({height:h,width:h},G);let pt=null;return K!=null&&(pt=ze.createElement("img",{src:K,key:K,style:{display:"none"},onLoad:()=>{$(!0)},ref:q,crossOrigin:J?.crossOrigin})),ze.createElement(ze.Fragment,null,ze.createElement("canvas",Qd({style:ye,height:h,width:h,ref:N,role:"img"},U)),pt)});G8.displayName="QRCodeCanvas";var Bb=ze.forwardRef(function(s,u){const o=s,{value:d,size:h=zb,level:x=Eb,bgColor:v=_b,fgColor:p=kb,includeMargin:g=Ab,minVersion:y=Tb,boostLevel:j,title:w,marginSize:D,imageSettings:R}=o,H=Zd(o,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:G,cells:U,numCells:K,calculatedImageSettings:A}=Mb({value:d,level:x,minVersion:y,boostLevel:j,includeMargin:g,marginSize:D,imageSettings:R,size:h});let q=U,N=null;R!=null&&A!=null&&(A.excavation!=null&&(q=Rb(U,A.excavation)),N=ze.createElement("image",{href:R.src,height:A.h,width:A.w,x:A.x+G,y:A.y+G,preserveAspectRatio:"none",opacity:A.opacity,crossOrigin:A.crossOrigin}));const W=Cb(q,G);return ze.createElement("svg",Qd({height:h,width:h,viewBox:`0 0 ${K} ${K}`,ref:u,role:"img"},H),!!w&&ze.createElement("title",null,w),ze.createElement("path",{fill:v,d:`M0,0 h${K}v${K}H0z`,shapeRendering:"crispEdges"}),ze.createElement("path",{fill:p,d:W,shapeRendering:"crispEdges"}),N)});Bb.displayName="QRCodeSVG";const $8={subtitle:"Veränderung beginnt mit dem Engagement jedes Einzelnen. Spenden helfen, einen echten Unterschied zu machen. Gemeinsam erreichen wir mehr.",heroImage:"/sckw-logo-500club.png",heroTitle:"CLUB 500",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Mitglied im 500 €Club"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},spendentafel:{label:"Auf die Spendentafel",sublabel:"Ihr Name/Firma wird auf unserer Website & am Vereinsgelände veröffentlicht.",anonymLabel:"Anonym spenden",nameFieldPlaceholder:"Name/Firma für Veröffentlichung (optional, falls abweichend)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},paypalCtaLabel:"Mit PayPal spenden",bankCtaLabel:"Per Überweisung",verwendungszweck:"500 Euro Club",paypalMeUrl:"https://www.paypal.me/sckw2012",bankDetails:{kontoinhaber:"SC Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},V8=f.section`
  background: #0b0b0d;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
`,Y8=f.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:i})=>i}) center/cover no-repeat;
  opacity: ${({$active:i})=>i?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.65);
`,P8=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`,q8=f.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,K8=f.img`
  width: clamp(100px, 22vw, 180px);
  height: auto;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.6));
`,Q8=f.h1`
  color: #fff;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
`,Z8=f.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  margin: 0 0 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 600px;
`,X8=f.a`
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #e10073;
  font-weight: 800;
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  padding: 0.9rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);
  }
`,up=f.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Db=f.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,J8=f(Db)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,dp=f.h2`
  font-size: clamp(1.5rem, 4.5vw, 2.2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`,fp=f.p`
  font-size: clamp(0.92rem, 2.3vw, 1.05rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
`,W8=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Cd=f.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
`,Rd=f.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`,Md=f.p`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin: 0;

  strong {
    color: #222;
  }
`,hp=f.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.6rem;
`,F8=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,I8=f.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  border: 2px solid ${({$active:i})=>i?"#e10073":"#e5e7eb"};
  background: ${({$active:i})=>i?"#fff0f6":"#fff"};
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-family: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
    box-shadow: 0 4px 16px rgba(225, 0, 115, 0.1);
  }
`,e4=f.div`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${({$active:i})=>i?"#e10073":"#222"};
  margin-bottom: 0.25rem;
  transition: color 0.15s;
`,t4=f.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({$active:i})=>i?"#e10073":"#555"};
  margin-bottom: 0.2rem;
  transition: color 0.15s;
`,n4=f.div`
  font-size: 0.75rem;
  color: #999;
  line-height: 1.3;
`,i4=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem;
  border-radius: 16px;
  border: 2px solid ${({$active:i})=>i?"#e10073":"#e5e7eb"};
  background: ${({$active:i})=>i?"#fff0f6":"#fff"};
  margin-bottom: 1.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
  }
`,r4=f.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 0.95rem;
  color: #333;
`,a4=f.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({$active:i})=>i?"#e10073":"#ccc"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({$active:i})=>i?"#e10073":"transparent"};
  }
`,l4=f.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: start;
`,s4=f.div`
  display: flex;
  gap: 0.35rem;
`,o4=f.button`
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1.5px solid ${({$active:i})=>i?"#e10073":"#e5e7eb"};
  background: ${({$active:i})=>i?"#fff0f6":"#fff"};
  color: ${({$active:i})=>i?"#e10073":"#555"};
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: #e10073;
  }
`,gi=f.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  background: #fff;
  color: #111;

  &:focus {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.12);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,c4=f.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`,u4=f.div`
  margin-bottom: 1.5rem;
`,d4=f.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`,mp=f.button`
  flex: 1;
  padding: 0.65rem 0.5rem;
  border-radius: 8px;
  border: 1.5px solid ${({$active:i})=>i?"#e10073":"#e5e7eb"};
  background: ${({$active:i})=>i?"#fff0f6":"#fff"};
  color: ${({$active:i})=>i?"#e10073":"#555"};
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #e10073;
  }
`,f4=f.div`
  font-size: 0.78rem;
  color: #999;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`,h4=f.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  line-height: 1.4;

  input {
    margin-top: 2px;
    width: 18px;
    height: 18px;
    accent-color: #e10073;
    flex-shrink: 0;
  }
`,m4=f.div`
  font-size: 0.78rem;
  color: #999;
  margin: 0.3rem 0 0 1.6rem;
  line-height: 1.4;
`,g4=Vp`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,p4=Vp`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,x4=f.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:i})=>i?hl`animation: ${g4} 0.3s ease forwards;`:hl`animation: ${p4} 0.2s ease forwards; pointer-events: none;`}
`,gp=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,b4=f.div`
  margin-bottom: 1.75rem;
`,y4=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,v4=f.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 0.95rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: #fff;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.25);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.35);
  }
`,j4=f.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 0.95rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
  color: #e10073;
  border: 2px solid #e10073;
  box-shadow: 0 4px 12px rgba(225, 0, 115, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(225, 0, 115, 0.2);
    background: #fff0f6;
  }
`,pp=f.span`
  font-size: 0.78rem;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 0.15rem;
`,S4=f.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,w4=f.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`,z4=f.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover { background: #f0f0f0; }
`,E4=f.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #e10073;
  margin: 0 0 0.5rem;
`,_4=f.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,k4=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
`,sl=f.div`
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
  strong { color: #222; }
`,A4=f.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #166534;
  line-height: 1.5;
`;function Bd(i){return i.toLocaleString("de-DE",{minimumFractionDigits:i%1===0?0:1,maximumFractionDigits:2})}function T4(i,s,u,o,d){return["BCD","002","1","SCT",u,i,s,`EUR${o.toFixed(2)}`,"","",d].join(`
`)}const Dd=[Je("herren/herren_club500_1"),Je("herren/herren_club500_4"),Je("herren/herren_club500_2"),Je("herren/herren_club500_3"),Je("herren/herren_club500_5")].filter(Boolean),C4=["1 Jahr","2 Jahre","3 Jahre"];function R4(){const i=$8,[s,u]=C.useState(0);C.useEffect(()=>{if(Dd.length<=1)return;const J=setInterval(()=>u(ye=>(ye+1)%Dd.length),6e3);return()=>clearInterval(J)},[]);const[o,d]=C.useState(0),[h,x]=C.useState(!1),[v,p]=C.useState(""),[g,y]=C.useState("1 Jahr"),[j,w]=C.useState(!0),[D,R]=C.useState(""),[H,G]=C.useState(!0),[U,K]=C.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[A,q]=C.useState(!1),N=C.useMemo(()=>{if(h){const J=parseFloat(v.replace(",","."));return isNaN(J)||J<i.customAmount.minAmount?0:J}return i.memberships[o]?.value??0},[h,v,o,i.memberships,i.customAmount.minAmount]),W=C.useMemo(()=>h?g:i.memberships[o]?.duration??"",[h,g,o,i.memberships]),$=C.useMemo(()=>{const J=[i.verwendungszweck];return W&&J.push(W),j&&D.trim()&&J.push(`Tafel: ${D.trim()}`),j||J.push("Anonym"),J.join(" | ")},[i.verwendungszweck,W,j,D]),he=C.useMemo(()=>N<=0?"#":`${i.paypalMeUrl}/${N}EUR`,[N,i.paypalMeUrl]),oe=C.useMemo(()=>T4(i.bankDetails.kontoinhaber,i.bankDetails.ibanClean,i.bankDetails.bic,N,$),[i.bankDetails.kontoinhaber,i.bankDetails.ibanClean,i.bankDetails.bic,N,$]),Me=(J,ye)=>K(pt=>({...pt,[J]:ye}));return a.jsxs(a.Fragment,{children:[a.jsxs(V8,{children:[Dd.map((J,ye)=>a.jsx(Y8,{$bg:J,$active:ye===s},ye)),a.jsx(P8,{}),a.jsxs(q8,{children:[a.jsx(K8,{src:i.heroImage,alt:"Club 500"}),a.jsx(Q8,{children:i.heroTitle}),a.jsx(Z8,{children:i.subtitle}),a.jsx(X8,{href:"#mitglied-werden",onClick:J=>{J.preventDefault(),document.getElementById("mitglied-werden")?.scrollIntoView({behavior:"smooth"})},children:"Jetzt Mitglied werden"})]})]}),a.jsx(Db,{children:a.jsxs(up,{children:[a.jsx(dp,{children:"Ihre Vorteile"}),a.jsx(fp,{children:"Als Mitglied im 500 €Club unterstützen Sie direkt den Jugend- und Amateurfußball in Konstanz."}),a.jsxs(W8,{children:[a.jsxs(Cd,{children:[a.jsx(Rd,{children:"📄"}),a.jsxs(Md,{children:["Offizielle ",a.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]})]}),a.jsxs(Cd,{children:[a.jsx(Rd,{children:"🏅"}),a.jsxs(Md,{children:["Veröffentlichung Ihres ",a.jsx("strong",{children:"Namens oder Firmennamens"})," ","als Unterstützer"]})]}),a.jsxs(Cd,{children:[a.jsx(Rd,{children:"⚽"}),a.jsxs(Md,{children:["Direkte Förderung des ",a.jsx("strong",{children:"lokalen Sports"})," und der Jugend"]})]})]})]})}),a.jsx(J8,{id:"mitglied-werden",children:a.jsxs(up,{children:[a.jsx(dp,{children:"Mitglied werden"}),a.jsx(fp,{children:"Wählen Sie Ihre Unterstützung und werden Sie Teil des 500 €Club."}),a.jsx(hp,{children:i.sectionTitle}),a.jsx(F8,{children:i.memberships.map((J,ye)=>a.jsxs(I8,{$active:!h&&o===ye,onClick:()=>{x(!1),d(ye)},type:"button",children:[a.jsx(e4,{$active:!h&&o===ye,children:J.label}),a.jsx(t4,{$active:!h&&o===ye,children:J.duration}),a.jsx(n4,{children:J.description})]},J.value))}),a.jsxs(i4,{$active:h,onClick:()=>{h||x(!0)},children:[a.jsxs(r4,{children:[a.jsx(a4,{$active:h}),i.customAmount.label]}),h&&a.jsxs(l4,{onClick:J=>J.stopPropagation(),children:[a.jsx(gi,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR",value:v,onChange:J=>p(J.target.value),autoFocus:!0}),a.jsx(s4,{children:C4.map(J=>a.jsx(o4,{$active:g===J,onClick:()=>y(J),type:"button",children:J},J))})]}),h&&a.jsx(c4,{children:i.customAmount.minHint})]}),a.jsxs(u4,{children:[a.jsx(hp,{children:"Veröffentlichung"}),a.jsxs(d4,{children:[a.jsx(mp,{$active:j,onClick:()=>w(!0),type:"button",children:i.spendentafel.label}),a.jsx(mp,{$active:!j,onClick:()=>w(!1),type:"button",children:i.spendentafel.anonymLabel})]}),j&&a.jsxs(a.Fragment,{children:[a.jsx(f4,{children:i.spendentafel.sublabel}),a.jsx(gi,{type:"text",placeholder:i.spendentafel.nameFieldPlaceholder,value:D,onChange:J=>R(J.target.value)})]})]}),a.jsxs(b4,{children:[a.jsxs(h4,{children:[a.jsx("input",{type:"checkbox",checked:H,onChange:J=>G(J.target.checked)}),a.jsx("span",{children:i.bescheinigung.label})]}),a.jsx(m4,{children:i.bescheinigung.hinweis}),a.jsxs(x4,{$visible:H,children:[a.jsxs(gp,{children:[a.jsx(gi,{type:"text",placeholder:i.bescheinigung.fields.vorname,value:U.vorname,onChange:J=>Me("vorname",J.target.value)}),a.jsx(gi,{type:"text",placeholder:i.bescheinigung.fields.nachname,value:U.nachname,onChange:J=>Me("nachname",J.target.value)})]}),a.jsx(gi,{type:"email",placeholder:i.bescheinigung.fields.email,value:U.email,onChange:J=>Me("email",J.target.value)}),a.jsx(gi,{type:"text",placeholder:i.bescheinigung.fields.strasse,value:U.strasse,onChange:J=>Me("strasse",J.target.value)}),a.jsxs(gp,{children:[a.jsx(gi,{type:"text",placeholder:i.bescheinigung.fields.plz,value:U.plz,onChange:J=>Me("plz",J.target.value)}),a.jsx(gi,{type:"text",placeholder:i.bescheinigung.fields.ort,value:U.ort,onChange:J=>Me("ort",J.target.value)})]})]})]}),a.jsxs(y4,{children:[a.jsxs(v4,{href:he,target:"_blank",rel:"noopener noreferrer",children:[i.paypalCtaLabel,a.jsxs(pp,{children:[Bd(N)," €"]})]}),a.jsxs(j4,{type:"button",onClick:()=>q(!0),children:[i.bankCtaLabel,a.jsxs(pp,{children:[Bd(N)," €"]})]})]})]})}),a.jsx(bo,{}),A&&a.jsx(S4,{onClick:()=>q(!1),children:a.jsxs(w4,{onClick:J=>J.stopPropagation(),children:[a.jsx(z4,{onClick:()=>q(!1),children:"×"}),a.jsx(E4,{children:"Überweisung per QR-Code"}),a.jsx(_4,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING, etc.) – alle Daten werden automatisch ausgefüllt."}),N>0&&a.jsx(k4,{children:a.jsx(Bb,{value:oe,size:220,level:"M"})}),a.jsx(sl,{children:a.jsx("strong",{children:i.bankDetails.kontoinhaber})}),a.jsxs(sl,{children:["IBAN: ",a.jsx("strong",{children:i.bankDetails.iban})]}),a.jsxs(sl,{children:["Betrag: ",a.jsxs("strong",{children:[Bd(N)," €"]}),W&&a.jsxs(a.Fragment,{children:[" · ",a.jsx("strong",{children:W})]})]}),a.jsxs(sl,{children:["Verwendungszweck: ",a.jsx("strong",{children:$})]}),a.jsxs(sl,{style:{fontSize:"0.8rem",color:"#888"},children:[i.bankDetails.bank," · ",i.bankDetails.adresse]}),H&&U.email&&a.jsxs(A4,{children:["Wir senden Ihre Spendenbescheinigung an ",a.jsx("strong",{children:U.email}),"."]})]})})]})}const M4=!1;function B4(){return a.jsx(A5,{children:a.jsxs(r5,{children:[a.jsx(pn,{path:"/",element:a.jsxs(a.Fragment,{children:[a.jsx(Br,{}),a.jsx(Xs,{to:"/sponsoring",replace:!0})]})}),a.jsx(pn,{path:"/sponsoring",element:a.jsxs(a.Fragment,{children:[a.jsx(Br,{}),a.jsx(t6,{})]})}),a.jsx(pn,{path:"/sponsoring-v2",element:a.jsx(Xs,{to:"/sponsoring",replace:!0})}),a.jsx(pn,{path:"/sponsoring-v1",element:a.jsxs(a.Fragment,{children:[a.jsx(Br,{}),a.jsx(tw,{})]})}),a.jsx(pn,{path:"/sponsoring-handoff",element:a.jsx(C6,{})}),a.jsx(pn,{path:"/sponsoring/500er",element:a.jsxs(a.Fragment,{children:[a.jsx(Br,{}),a.jsx(R4,{})]})}),a.jsx(pn,{path:"/mockup-generator",element:a.jsxs(a.Fragment,{children:[a.jsx(Br,{}),a.jsx(R8,{})]})}),a.jsx(pn,{path:"/jobs",element:a.jsxs(a.Fragment,{children:[a.jsx(Br,{}),a.jsx(hz,{})]})}),M4,a.jsx(pn,{path:"*",element:a.jsx(Xs,{to:"/sponsoring",replace:!0})})]})})}const D4={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");hv.createRoot(document.getElementById("root")).render(a.jsx(C.StrictMode,{children:a.jsx(d2,{theme:D4,children:a.jsx(B4,{})})}));
