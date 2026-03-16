(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=u(d);fetch(d.href,m)}})();function dy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var wu={exports:{}},Pr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function fy(){if($g)return Pr;$g=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,m){var p=null;if(m!==void 0&&(p=""+m),d.key!==void 0&&(p=""+d.key),"key"in d){m={};for(var y in d)y!=="key"&&(m[y]=d[y])}else m=d;return d=m.ref,{$$typeof:a,type:c,key:p,ref:d!==void 0?d:null,props:m}}return Pr.Fragment=s,Pr.jsx=u,Pr.jsxs=u,Pr}var qg;function hy(){return qg||(qg=1,wu.exports=fy()),wu.exports}var r=hy(),zu={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function my(){if(Kg)return le;Kg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function C(j){return j===null||typeof j!="object"?null:(j=R&&j[R]||j["@@iterator"],typeof j=="function"?j:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,$={};function Q(j,N,q){this.props=j,this.context=N,this.refs=$,this.updater=q||V}Q.prototype.isReactComponent={},Q.prototype.setState=function(j,N){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,N,"setState")},Q.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function U(){}U.prototype=Q.prototype;function L(j,N,q){this.props=j,this.context=N,this.refs=$,this.updater=q||V}var G=L.prototype=new U;G.constructor=L,Y(G,Q.prototype),G.isPureReactComponent=!0;var P=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function H(j,N,q,Z,I,de){return q=de.ref,{$$typeof:a,type:j,key:N,ref:q!==void 0?q:null,props:de}}function ve(j,N){return H(j.type,N,void 0,void 0,void 0,j.props)}function ge(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function lt(j){var N={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(q){return N[q]})}var ut=/\/+/g;function $e(j,N){return typeof j=="object"&&j!==null&&j.key!=null?lt(""+j.key):N.toString(36)}function gn(){}function pn(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(gn,gn):(j.status="pending",j.then(function(N){j.status==="pending"&&(j.status="fulfilled",j.value=N)},function(N){j.status==="pending"&&(j.status="rejected",j.reason=N)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function qe(j,N,q,Z,I){var de=typeof j;(de==="undefined"||de==="boolean")&&(j=null);var ie=!1;if(j===null)ie=!0;else switch(de){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(j.$$typeof){case a:case s:ie=!0;break;case w:return ie=j._init,qe(ie(j._payload),N,q,Z,I)}}if(ie)return I=I(j),ie=Z===""?"."+$e(j,0):Z,P(I)?(q="",ie!=null&&(q=ie.replace(ut,"$&/")+"/"),qe(I,N,q,"",function(nt){return nt})):I!=null&&(ge(I)&&(I=ve(I,q+(I.key==null||j&&j.key===I.key?"":(""+I.key).replace(ut,"$&/")+"/")+ie)),N.push(I)),1;ie=0;var Ke=Z===""?".":Z+":";if(P(j))for(var be=0;be<j.length;be++)Z=j[be],de=Ke+$e(Z,be),ie+=qe(Z,N,q,de,I);else if(be=C(j),typeof be=="function")for(j=be.call(j),be=0;!(Z=j.next()).done;)Z=Z.value,de=Ke+$e(Z,be++),ie+=qe(Z,N,q,de,I);else if(de==="object"){if(typeof j.then=="function")return qe(pn(j),N,q,Z,I);throw N=String(j),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ie}function M(j,N,q){if(j==null)return j;var Z=[],I=0;return qe(j,Z,"","",function(de){return N.call(q,de,I++)}),Z}function K(j){if(j._status===-1){var N=j._result;N=N(),N.then(function(q){(j._status===0||j._status===-1)&&(j._status=1,j._result=q)},function(q){(j._status===0||j._status===-1)&&(j._status=2,j._result=q)}),j._status===-1&&(j._status=0,j._result=N)}if(j._status===1)return j._result.default;throw j._result}var ee=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function ue(){}return le.Children={map:M,forEach:function(j,N,q){M(j,function(){N.apply(this,arguments)},q)},count:function(j){var N=0;return M(j,function(){N++}),N},toArray:function(j){return M(j,function(N){return N})||[]},only:function(j){if(!ge(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},le.Component=Q,le.Fragment=u,le.Profiler=d,le.PureComponent=L,le.StrictMode=c,le.Suspense=b,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,le.__COMPILER_RUNTIME={__proto__:null,c:function(j){return X.H.useMemoCache(j)}},le.cache=function(j){return function(){return j.apply(null,arguments)}},le.cloneElement=function(j,N,q){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Z=Y({},j.props),I=j.key,de=void 0;if(N!=null)for(ie in N.ref!==void 0&&(de=void 0),N.key!==void 0&&(I=""+N.key),N)!ne.call(N,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&N.ref===void 0||(Z[ie]=N[ie]);var ie=arguments.length-2;if(ie===1)Z.children=q;else if(1<ie){for(var Ke=Array(ie),be=0;be<ie;be++)Ke[be]=arguments[be+2];Z.children=Ke}return H(j.type,I,void 0,void 0,de,Z)},le.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},le.createElement=function(j,N,q){var Z,I={},de=null;if(N!=null)for(Z in N.key!==void 0&&(de=""+N.key),N)ne.call(N,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(I[Z]=N[Z]);var ie=arguments.length-2;if(ie===1)I.children=q;else if(1<ie){for(var Ke=Array(ie),be=0;be<ie;be++)Ke[be]=arguments[be+2];I.children=Ke}if(j&&j.defaultProps)for(Z in ie=j.defaultProps,ie)I[Z]===void 0&&(I[Z]=ie[Z]);return H(j,de,void 0,void 0,null,I)},le.createRef=function(){return{current:null}},le.forwardRef=function(j){return{$$typeof:y,render:j}},le.isValidElement=ge,le.lazy=function(j){return{$$typeof:w,_payload:{_status:-1,_result:j},_init:K}},le.memo=function(j,N){return{$$typeof:x,type:j,compare:N===void 0?null:N}},le.startTransition=function(j){var N=X.T,q={};X.T=q;try{var Z=j(),I=X.S;I!==null&&I(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ue,ee)}catch(de){ee(de)}finally{X.T=N}},le.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},le.use=function(j){return X.H.use(j)},le.useActionState=function(j,N,q){return X.H.useActionState(j,N,q)},le.useCallback=function(j,N){return X.H.useCallback(j,N)},le.useContext=function(j){return X.H.useContext(j)},le.useDebugValue=function(){},le.useDeferredValue=function(j,N){return X.H.useDeferredValue(j,N)},le.useEffect=function(j,N,q){var Z=X.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(j,N)},le.useId=function(){return X.H.useId()},le.useImperativeHandle=function(j,N,q){return X.H.useImperativeHandle(j,N,q)},le.useInsertionEffect=function(j,N){return X.H.useInsertionEffect(j,N)},le.useLayoutEffect=function(j,N){return X.H.useLayoutEffect(j,N)},le.useMemo=function(j,N){return X.H.useMemo(j,N)},le.useOptimistic=function(j,N){return X.H.useOptimistic(j,N)},le.useReducer=function(j,N,q){return X.H.useReducer(j,N,q)},le.useRef=function(j){return X.H.useRef(j)},le.useState=function(j){return X.H.useState(j)},le.useSyncExternalStore=function(j,N,q){return X.H.useSyncExternalStore(j,N,q)},le.useTransition=function(){return X.H.useTransition()},le.version="19.1.0",le}var Zg;function Rd(){return Zg||(Zg=1,zu.exports=my()),zu.exports}var A=Rd();const en=dy(A);var Eu={exports:{}},Jr={},_u={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function gy(){return Xg||(Xg=1,function(a){function s(M,K){var ee=M.length;M.push(K);e:for(;0<ee;){var ue=ee-1>>>1,j=M[ue];if(0<d(j,K))M[ue]=K,M[ee]=j,ee=ue;else break e}}function u(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var K=M[0],ee=M.pop();if(ee!==K){M[0]=ee;e:for(var ue=0,j=M.length,N=j>>>1;ue<N;){var q=2*(ue+1)-1,Z=M[q],I=q+1,de=M[I];if(0>d(Z,ee))I<j&&0>d(de,Z)?(M[ue]=de,M[I]=ee,ue=I):(M[ue]=Z,M[q]=ee,ue=q);else if(I<j&&0>d(de,ee))M[ue]=de,M[I]=ee,ue=I;else break e}}return K}function d(M,K){var ee=M.sortIndex-K.sortIndex;return ee!==0?ee:M.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var b=[],x=[],w=1,R=null,C=3,V=!1,Y=!1,$=!1,Q=!1,U=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function P(M){for(var K=u(x);K!==null;){if(K.callback===null)c(x);else if(K.startTime<=M)c(x),K.sortIndex=K.expirationTime,s(b,K);else break;K=u(x)}}function X(M){if($=!1,P(M),!Y)if(u(b)!==null)Y=!0,ne||(ne=!0,$e());else{var K=u(x);K!==null&&qe(X,K.startTime-M)}}var ne=!1,H=-1,ve=5,ge=-1;function lt(){return Q?!0:!(a.unstable_now()-ge<ve)}function ut(){if(Q=!1,ne){var M=a.unstable_now();ge=M;var K=!0;try{e:{Y=!1,$&&($=!1,L(H),H=-1),V=!0;var ee=C;try{t:{for(P(M),R=u(b);R!==null&&!(R.expirationTime>M&&lt());){var ue=R.callback;if(typeof ue=="function"){R.callback=null,C=R.priorityLevel;var j=ue(R.expirationTime<=M);if(M=a.unstable_now(),typeof j=="function"){R.callback=j,P(M),K=!0;break t}R===u(b)&&c(b),P(M)}else c(b);R=u(b)}if(R!==null)K=!0;else{var N=u(x);N!==null&&qe(X,N.startTime-M),K=!1}}break e}finally{R=null,C=ee,V=!1}K=void 0}}finally{K?$e():ne=!1}}}var $e;if(typeof G=="function")$e=function(){G(ut)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,pn=gn.port2;gn.port1.onmessage=ut,$e=function(){pn.postMessage(null)}}else $e=function(){U(ut,0)};function qe(M,K){H=U(function(){M(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return C},a.unstable_next=function(M){switch(C){case 1:case 2:case 3:var K=3;break;default:K=C}var ee=C;C=K;try{return M()}finally{C=ee}},a.unstable_requestPaint=function(){Q=!0},a.unstable_runWithPriority=function(M,K){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ee=C;C=M;try{return K()}finally{C=ee}},a.unstable_scheduleCallback=function(M,K,ee){var ue=a.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ue+ee:ue):ee=ue,M){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,M={id:w++,callback:K,priorityLevel:M,startTime:ee,expirationTime:j,sortIndex:-1},ee>ue?(M.sortIndex=ee,s(x,M),u(b)===null&&M===u(x)&&($?(L(H),H=-1):$=!0,qe(X,ee-ue))):(M.sortIndex=j,s(b,M),Y||V||(Y=!0,ne||(ne=!0,$e()))),M},a.unstable_shouldYield=lt,a.unstable_wrapCallback=function(M){var K=C;return function(){var ee=C;C=K;try{return M.apply(this,arguments)}finally{C=ee}}}}(Tu)),Tu}var Qg;function py(){return Qg||(Qg=1,_u.exports=gy()),_u.exports}var ku={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function xy(){if(Pg)return rt;Pg=1;var a=Rd();function s(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)x+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,x,w){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:b,containerInfo:x,implementation:w}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,rt.createPortal=function(b,x){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return m(b,x,null,w)},rt.flushSync=function(b){var x=p.T,w=c.p;try{if(p.T=null,c.p=2,b)return b()}finally{p.T=x,c.p=w,c.d.f()}},rt.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(b,x))},rt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},rt.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var w=x.as,R=y(w,x.crossOrigin),C=typeof x.integrity=="string"?x.integrity:void 0,V=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;w==="style"?c.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:R,integrity:C,fetchPriority:V}):w==="script"&&c.d.X(b,{crossOrigin:R,integrity:C,fetchPriority:V,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},rt.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var w=y(x.as,x.crossOrigin);c.d.M(b,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(b)},rt.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var w=x.as,R=y(w,x.crossOrigin);c.d.L(b,w,{crossOrigin:R,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},rt.preloadModule=function(b,x){if(typeof b=="string")if(x){var w=y(x.as,x.crossOrigin);c.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(b)},rt.requestFormReset=function(b){c.d.r(b)},rt.unstable_batchedUpdates=function(b,x){return b(x)},rt.useFormState=function(b,x,w){return p.H.useFormState(b,x,w)},rt.useFormStatus=function(){return p.H.useHostTransitionStatus()},rt.version="19.1.0",rt}var Jg;function by(){if(Jg)return ku.exports;Jg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),ku.exports=xy(),ku.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function yy(){if(Wg)return Jr;Wg=1;var a=py(),s=Rd(),u=by();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return y(l),e;if(o===i)return y(l),t;o=o.sibling}throw Error(c(188))}if(n.return!==i.return)n=l,i=o;else{for(var f=!1,g=l.child;g;){if(g===n){f=!0,n=l,i=o;break}if(g===i){f=!0,i=l,n=o;break}g=g.sibling}if(!f){for(g=o.child;g;){if(g===n){f=!0,n=o,i=l;break}if(g===i){f=!0,i=o,n=l;break}g=g.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==i)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,R=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),G=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var gn=Symbol.for("react.client.reference");function pn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Q:return"Profiler";case $:return"StrictMode";case X:return"Suspense";case ne:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case G:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:pn(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return pn(e(t))}catch{}}return null}var qe=Array.isArray,M=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ue=[],j=-1;function N(e){return{current:e}}function q(e){0>j||(e.current=ue[j],ue[j]=null,j--)}function Z(e,t){j++,ue[j]=e.current,e.current=t}var I=N(null),de=N(null),ie=N(null),Ke=N(null);function be(e,t){switch(Z(ie,t),Z(de,e),Z(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=xg(t),e=bg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(I),Z(I,e)}function nt(){q(I),q(de),q(ie)}function xi(e){e.memoizedState!==null&&Z(Ke,e);var t=I.current,n=bg(t,e.type);t!==n&&(Z(de,e),Z(I,n))}function xn(e){de.current===e&&(q(I),q(de)),Ke.current===e&&(q(Ke),qr._currentValue=ee)}var Dt=Object.prototype.hasOwnProperty,co=a.unstable_scheduleCallback,uo=a.unstable_cancelCallback,$x=a.unstable_shouldYield,qx=a.unstable_requestPaint,rn=a.unstable_now,Kx=a.unstable_getCurrentPriorityLevel,Jd=a.unstable_ImmediatePriority,Wd=a.unstable_UserBlockingPriority,ul=a.unstable_NormalPriority,Zx=a.unstable_LowPriority,Fd=a.unstable_IdlePriority,Xx=a.log,Qx=a.unstable_setDisableYieldValue,Fa=null,jt=null;function Vn(e){if(typeof Xx=="function"&&Qx(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Fa,e)}catch{}}var St=Math.clz32?Math.clz32:Wx,Px=Math.log,Jx=Math.LN2;function Wx(e){return e>>>=0,e===0?32:31-(Px(e)/Jx|0)|0}var dl=256,fl=4194304;function bi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hl(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~o,i!==0?l=bi(i):(f&=g,f!==0?l=bi(f):n||(n=g&~e,n!==0&&(l=bi(n))))):(g=i&~o,g!==0?l=bi(g):f!==0?l=bi(f):n||(n=i&~e,n!==0&&(l=bi(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function Ia(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Id(){var e=dl;return dl<<=1,(dl&4194048)===0&&(dl=256),e}function ef(){var e=fl;return fl<<=1,(fl&62914560)===0&&(fl=4194304),e}function fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ix(e,t,n,i,l,o){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,_=e.hiddenUpdates;for(n=f&~n;0<n;){var B=31-St(n),O=1<<B;g[B]=0,v[B]=-1;var T=_[B];if(T!==null)for(_[B]=null,B=0;B<T.length;B++){var k=T[B];k!==null&&(k.lane&=-536870913)}n&=~O}i!==0&&tf(e,i,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function tf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-St(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function nf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-St(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function af(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Hg(e.type))}function eb(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Yn=Math.random().toString(36).slice(2),it="__reactFiber$"+Yn,dt="__reactProps$"+Yn,$i="__reactContainer$"+Yn,go="__reactEvents$"+Yn,tb="__reactListeners$"+Yn,nb="__reactHandles$"+Yn,rf="__reactResources$"+Yn,tr="__reactMarker$"+Yn;function po(e){delete e[it],delete e[dt],delete e[go],delete e[tb],delete e[nb]}function qi(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$i]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sg(e);e!==null;){if(n=e[it])return n;e=Sg(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){if(e=e[it]||e[$i]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function nr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Zi(e){var t=e[rf];return t||(t=e[rf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[tr]=!0}var lf=new Set,sf={};function yi(e,t){Xi(e,t),Xi(e+"Capture",t)}function Xi(e,t){for(sf[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var ib=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),of={},cf={};function ab(e){return Dt.call(cf,e)?!0:Dt.call(of,e)?!1:ib.test(e)?cf[e]=!0:(of[e]=!0,!1)}function ml(e,t,n){if(ab(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function bn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var xo,uf;function Qi(e){if(xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xo=t&&t[1]||"",uf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xo+e+uf}var bo=!1;function yo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(k){var T=k}Reflect.construct(e,[],O)}else{try{O.call()}catch(k){T=k}e.call(O.prototype)}}else{try{throw Error()}catch(k){T=k}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(k){if(k&&T&&typeof k.stack=="string")return[k.stack,T.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),f=o[0],g=o[1];if(f&&g){var v=f.split(`
`),_=g.split(`
`);for(l=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(i===v.length||l===_.length)for(i=v.length-1,l=_.length-1;1<=i&&0<=l&&v[i]!==_[l];)l--;for(;1<=i&&0<=l;i--,l--)if(v[i]!==_[l]){if(i!==1||l!==1)do if(i--,l--,0>l||v[i]!==_[l]){var B=`
`+v[i].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=i&&0<=l);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qi(n):""}function rb(e){switch(e.tag){case 26:case 27:case 5:return Qi(e.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 15:return yo(e.type,!1);case 11:return yo(e.type.render,!1);case 1:return yo(e.type,!0);case 31:return Qi("Activity");default:return""}}function df(e){try{var t="";do t+=rb(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lb(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){i=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pl(e){e._valueTracker||(e._valueTracker=lb(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ff(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sb=/[\n"\\]/g;function Nt(e){return e.replace(sb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vo(e,t,n,i,l,o,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?jo(e,f,Ot(t)):n!=null?jo(e,f,Ot(n)):i!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ot(g):e.removeAttribute("name")}function mf(e,t,n,i,l,o,f,g){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ot(n):"",t=t!=null?""+Ot(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function jo(e,t,n){t==="number"&&xl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Pi(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gf(e,t,n){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ot(n):""}function pf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(c(92));if(qe(i)){if(1<i.length)throw Error(c(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ot(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ob=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ob.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function bf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&xf(e,l,i)}else for(var o in t)t.hasOwnProperty(o)&&xf(e,o,t[o])}function So(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ub=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(e){return ub.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wo=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wi=null,Fi=null;function yf(e){var t=Ki(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[dt]||null;if(!l)throw Error(c(90));vo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&hf(i)}break e;case"textarea":gf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}}}var Eo=!1;function vf(e,t,n){if(Eo)return e(t,n);Eo=!0;try{var i=e(t);return i}finally{if(Eo=!1,(Wi!==null||Fi!==null)&&(is(),Wi&&(t=Wi,e=Fi,Fi=Wi=null,yf(t),e)))for(t=0;t<e.length;t++)yf(e[t])}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var i=n[dt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=!1;if(yn)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){_o=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{_o=!1}var $n=null,To=null,yl=null;function jf(){if(yl)return yl;var e,t=To,n=t.length,i,l="value"in $n?$n.value:$n.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===l[o-i];i++);return yl=l.slice(e,1<i?1-i:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function Sf(){return!1}function ft(e){function t(n,i,l,o,f){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jl:Sf,this.isPropagationStopped=Sf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),t}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=ft(vi),rr=w({},vi,{view:0,detail:0}),db=ft(rr),ko,Ao,lr,wl=w({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(ko=e.screenX-lr.screenX,Ao=e.screenY-lr.screenY):Ao=ko=0,lr=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),wf=ft(wl),fb=w({},wl,{dataTransfer:0}),hb=ft(fb),mb=w({},rr,{relatedTarget:0}),Ro=ft(mb),gb=w({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),pb=ft(gb),xb=w({},vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bb=ft(xb),yb=w({},vi,{data:0}),zf=ft(yb),vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sb[e])?!!t[e]:!1}function Co(){return wb}var zb=w({},rr,{key:function(e){if(e.key){var t=vb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eb=ft(zb),_b=w({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=ft(_b),Tb=w({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),kb=ft(Tb),Ab=w({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rb=ft(Ab),Cb=w({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mb=ft(Cb),Bb=w({},vi,{newState:0,oldState:0}),Db=ft(Bb),Ob=[9,13,27,32],Mo=yn&&"CompositionEvent"in window,sr=null;yn&&"documentMode"in document&&(sr=document.documentMode);var Nb=yn&&"TextEvent"in window&&!sr,_f=yn&&(!Mo||sr&&8<sr&&11>=sr),Tf=" ",kf=!1;function Af(e,t){switch(e){case"keyup":return Ob.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ii=!1;function Hb(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(kf=!0,Tf);case"textInput":return e=t.data,e===Tf&&kf?null:e;default:return null}}function Lb(e,t){if(Ii)return e==="compositionend"||!Mo&&Af(e,t)?(e=jf(),yl=To=$n=null,Ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _f&&t.locale!=="ko"?null:t.data;default:return null}}var Ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ub[e.type]:t==="textarea"}function Mf(e,t,n,i){Wi?Fi?Fi.push(i):Fi=[i]:Wi=i,t=cs(t,"onChange"),0<t.length&&(n=new Sl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var or=null,cr=null;function Gb(e){fg(e,0)}function zl(e){var t=nr(e);if(hf(t))return e}function Bf(e,t){if(e==="change")return t}var Df=!1;if(yn){var Bo;if(yn){var Do="oninput"in document;if(!Do){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Do=typeof Of.oninput=="function"}Bo=Do}else Bo=!1;Df=Bo&&(!document.documentMode||9<document.documentMode)}function Nf(){or&&(or.detachEvent("onpropertychange",Hf),cr=or=null)}function Hf(e){if(e.propertyName==="value"&&zl(cr)){var t=[];Mf(t,cr,e,zo(e)),vf(Gb,t)}}function Vb(e,t,n){e==="focusin"?(Nf(),or=t,cr=n,or.attachEvent("onpropertychange",Hf)):e==="focusout"&&Nf()}function Yb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(cr)}function $b(e,t){if(e==="click")return zl(t)}function qb(e,t){if(e==="input"||e==="change")return zl(t)}function Kb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Kb;function ur(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Dt.call(t,l)||!wt(e[l],t[l]))return!1}return!0}function Lf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uf(e,t){var n=Lf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lf(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xl(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Zb=yn&&"documentMode"in document&&11>=document.documentMode,ea=null,No=null,dr=null,Ho=!1;function Yf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ho||ea==null||ea!==xl(i)||(i=ea,"selectionStart"in i&&Oo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),dr&&ur(dr,i)||(dr=i,i=cs(No,"onSelect"),0<i.length&&(t=new Sl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ea)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ta={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionrun:ji("Transition","TransitionRun"),transitionstart:ji("Transition","TransitionStart"),transitioncancel:ji("Transition","TransitionCancel"),transitionend:ji("Transition","TransitionEnd")},Lo={},$f={};yn&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Si(e){if(Lo[e])return Lo[e];if(!ta[e])return e;var t=ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $f)return Lo[e]=t[n];return e}var qf=Si("animationend"),Kf=Si("animationiteration"),Zf=Si("animationstart"),Xb=Si("transitionrun"),Qb=Si("transitionstart"),Pb=Si("transitioncancel"),Xf=Si("transitionend"),Qf=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function Wt(e,t){Qf.set(e,t),yi(t,[e])}var Pf=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=Pf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:df(t)},Pf.set(e,t),t)}return{value:e,source:t,stack:df(t)}}var Lt=[],na=0,Go=0;function El(){for(var e=na,t=Go=na=0;t<e;){var n=Lt[t];Lt[t++]=null;var i=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var o=Lt[t];if(Lt[t++]=null,i!==null&&l!==null){var f=i.pending;f===null?l.next=l:(l.next=f.next,f.next=l),i.pending=l}o!==0&&Jf(n,l,o)}}function _l(e,t,n,i){Lt[na++]=e,Lt[na++]=t,Lt[na++]=n,Lt[na++]=i,Go|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Vo(e,t,n,i){return _l(e,t,n,i),Tl(e)}function ia(e,t){return _l(e,null,null,t),Tl(e)}function Jf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-St(n),e=o.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),o):null}function Tl(e){if(50<Nr)throw Nr=0,Xc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Jb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,i){return new Jb(e,t,n,i)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kl(e,t,n,i,l,o){var f=0;if(i=e,typeof e=="function")Yo(e)&&(f=1);else if(typeof e=="string")f=F1(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=zt(31,n,t,l),e.elementType=ge,e.lanes=o,e;case Y:return wi(n.children,l,o,t);case $:f=8,l|=24;break;case Q:return e=zt(12,n,t,l|2),e.elementType=Q,e.lanes=o,e;case X:return e=zt(13,n,t,l),e.elementType=X,e.lanes=o,e;case ne:return e=zt(19,n,t,l),e.elementType=ne,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case G:f=10;break e;case L:f=9;break e;case P:f=11;break e;case H:f=14;break e;case ve:f=16,i=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=zt(f,n,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function wi(e,t,n,i){return e=zt(7,e,i,t),e.lanes=n,e}function $o(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ra=[],la=0,Al=null,Rl=0,Ut=[],Gt=0,zi=null,jn=1,Sn="";function Ei(e,t){ra[la++]=Rl,ra[la++]=Al,Al=e,Rl=t}function Ff(e,t,n){Ut[Gt++]=jn,Ut[Gt++]=Sn,Ut[Gt++]=zi,zi=e;var i=jn;e=Sn;var l=32-St(i)-1;i&=~(1<<l),n+=1;var o=32-St(t)+l;if(30<o){var f=l-l%5;o=(i&(1<<f)-1).toString(32),i>>=f,l-=f,jn=1<<32-St(t)+l|n<<l|i,Sn=o+e}else jn=1<<o|n<<l|i,Sn=e}function Ko(e){e.return!==null&&(Ei(e,1),Ff(e,1,0))}function Zo(e){for(;e===Al;)Al=ra[--la],ra[la]=null,Rl=ra[--la],ra[la]=null;for(;e===zi;)zi=Ut[--Gt],Ut[Gt]=null,Sn=Ut[--Gt],Ut[Gt]=null,jn=Ut[--Gt],Ut[Gt]=null}var st=null,De=null,xe=!1,_i=null,ln=!1,Xo=Error(c(519));function Ti(e){var t=Error(c(418,""));throw mr(Ht(t,e)),Xo}function If(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[dt]=i,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<Lr.length;n++)he(Lr[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),mf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),pl(t);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),pf(t,i.value,i.defaultValue,i.children),pl(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||pg(t.textContent,n)?(i.popover!=null&&(he("beforetoggle",t),he("toggle",t)),i.onScroll!=null&&he("scroll",t),i.onScrollEnd!=null&&he("scrollend",t),i.onClick!=null&&(t.onclick=us),t=!0):t=!1,t||Ti(e)}function eh(e){for(st=e.return;st;)switch(st.tag){case 5:case 13:ln=!1;return;case 27:case 3:ln=!0;return;default:st=st.return}}function fr(e){if(e!==st)return!1;if(!xe)return eh(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cu(e.type,e.memoizedProps)),n=!n),n&&De&&Ti(e),eh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){De=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}De=null}}else t===27?(t=De,ri(e.type)?(e=hu,hu=null,De=e):De=t):De=st?It(e.stateNode.nextSibling):null;return!0}function hr(){De=st=null,xe=!1}function th(){var e=_i;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),_i=null),e}function mr(e){_i===null?_i=[e]:_i.push(e)}var Qo=N(null),ki=null,wn=null;function qn(e,t,n){Z(Qo,t._currentValue),t._currentValue=n}function zn(e){e._currentValue=Qo.current,q(Qo)}function Po(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var f=l.child;o=o.firstContext;e:for(;o!==null;){var g=o;o=l;for(var v=0;v<t.length;v++)if(g.context===t[v]){o.lanes|=n,g=o.alternate,g!==null&&(g.lanes|=n),Po(o.return,n,e),i||(f=null);break e}o=g.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=n,o=f.alternate,o!==null&&(o.lanes|=n),Po(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function gr(e,t,n,i){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var g=l.type;wt(l.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(l===Ke.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(qr):e=[qr])}l=l.return}e!==null&&Jo(t,e,n,i),t.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ai(e){ki=e,wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return nh(ki,e)}function Ml(e,t){return ki===null&&Ai(e),nh(e,t)}function nh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wn===null){if(e===null)throw Error(c(308));wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wn=wn.next=t;return n}var Wb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Fb=a.unstable_scheduleCallback,Ib=a.unstable_NormalPriority,Ve={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new Wb,data:new Map,refCount:0}}function pr(e){e.refCount--,e.refCount===0&&Fb(Ib,function(){e.controller.abort()})}var xr=null,Fo=0,sa=0,oa=null;function e1(e,t){if(xr===null){var n=xr=[];Fo=0,sa=eu(),oa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Fo++,t.then(ih,ih),t}function ih(){if(--Fo===0&&xr!==null){oa!==null&&(oa.status="fulfilled");var e=xr;xr=null,sa=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function t1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var ah=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&e1(e,t),ah!==null&&ah(e,t)};var Ri=N(null);function Io(){var e=Ri.current;return e!==null?e:Te.pooledCache}function Bl(e,t){t===null?Z(Ri,Ri.current):Z(Ri,t.pool)}function rh(){var e=Io();return e===null?null:{parent:Ve._currentValue,pool:e}}var br=Error(c(460)),lh=Error(c(474)),Dl=Error(c(542)),ec={then:function(){}};function sh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ol(){}function oh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ol,Ol),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then(Ol,Ol);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw yr=t,br}}var yr=null;function ch(){if(yr===null)throw Error(c(459));var e=yr;return yr=null,e}function uh(e){if(e===br||e===Dl)throw Error(c(483))}var Kn=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Tl(e),Jf(e,null,n),t}return _l(e,i,t,n),Tl(e)}function vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nf(e,n)}}function ic(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=f:o=o.next=f,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ac=!1;function jr(){if(ac){var e=oa;if(e!==null)throw e}}function Sr(e,t,n,i){ac=!1;var l=e.updateQueue;Kn=!1;var o=l.firstBaseUpdate,f=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var v=g,_=v.next;v.next=null,f===null?o=_:f.next=_,f=v;var B=e.alternate;B!==null&&(B=B.updateQueue,g=B.lastBaseUpdate,g!==f&&(g===null?B.firstBaseUpdate=_:g.next=_,B.lastBaseUpdate=v))}if(o!==null){var O=l.baseState;f=0,B=_=v=null,g=o;do{var T=g.lane&-536870913,k=T!==g.lane;if(k?(me&T)===T:(i&T)===T){T!==0&&T===sa&&(ac=!0),B!==null&&(B=B.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var re=e,te=g;T=t;var Ee=n;switch(te.tag){case 1:if(re=te.payload,typeof re=="function"){O=re.call(Ee,O,T);break e}O=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=te.payload,T=typeof re=="function"?re.call(Ee,O,T):re,T==null)break e;O=w({},O,T);break e;case 2:Kn=!0}}T=g.callback,T!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[T]:k.push(T))}else k={lane:T,tag:g.tag,payload:g.payload,callback:g.callback,next:null},B===null?(_=B=k,v=O):B=B.next=k,f|=T;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;k=g,g=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);B===null&&(v=O),l.baseState=v,l.firstBaseUpdate=_,l.lastBaseUpdate=B,o===null&&(l.shared.lanes=0),ti|=f,e.lanes=f,e.memoizedState=O}}function dh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function fh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)dh(n[e],t)}var ca=N(null),Nl=N(0);function hh(e,t){e=Cn,Z(Nl,e),Z(ca,t),Cn=e|t.baseLanes}function rc(){Z(Nl,Cn),Z(ca,ca.current)}function lc(){Cn=Nl.current,q(ca),q(Nl)}var Qn=0,oe=null,we=null,Le=null,Hl=!1,ua=!1,Ci=!1,Ll=0,wr=0,da=null,n1=0;function Ne(){throw Error(c(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function oc(e,t,n,i,l,o){return Qn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Jh:Wh,Ci=!1,o=n(i,l),Ci=!1,ua&&(o=gh(t,n,i,l)),mh(e),o}function mh(e){M.H=ql;var t=we!==null&&we.next!==null;if(Qn=0,Le=we=oe=null,Hl=!1,wr=0,da=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Cl(e)&&(Xe=!0))}function gh(e,t,n,i){oe=e;var l=0;do{if(ua&&(da=null),wr=0,ua=!1,25<=l)throw Error(c(301));if(l+=1,Le=we=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=c1,o=t(n,i)}while(ua);return o}function i1(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?zr(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(oe.flags|=1024),t}function cc(){var e=Ll!==0;return Ll=0,e}function uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dc(e){if(Hl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hl=!1}Qn=0,Le=we=oe=null,ua=!1,wr=Ll=0,da=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?oe.memoizedState=Le=e:Le=Le.next=e,Le}function Ue(){if(we===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Le===null?oe.memoizedState:Le.next;if(t!==null)Le=t,we=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Le===null?oe.memoizedState=Le=e:Le=Le.next=e}return Le}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zr(e){var t=wr;return wr+=1,da===null&&(da=[]),e=oh(da,e,t),t=oe,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Jh:Wh),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zr(e);if(e.$$typeof===G)return at(e)}throw Error(c(438,String(e)))}function hc(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fc(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=lt;return t.index++,n}function En(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Ue();return mc(t,we,e)}function mc(e,t,n){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=n;var l=e.baseQueue,o=i.pending;if(o!==null){if(l!==null){var f=l.next;l.next=o.next,o.next=f}t.baseQueue=l=o,i.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var g=f=null,v=null,_=t,B=!1;do{var O=_.lane&-536870913;if(O!==_.lane?(me&O)===O:(Qn&O)===O){var T=_.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),O===sa&&(B=!0);else if((Qn&T)===T){_=_.next,T===sa&&(B=!0);continue}else O={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(g=v=O,f=o):v=v.next=O,oe.lanes|=T,ti|=T;O=_.action,Ci&&n(o,O),o=_.hasEagerState?_.eagerState:n(o,O)}else T={lane:O,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(g=v=T,f=o):v=v.next=T,oe.lanes|=O,ti|=O;_=_.next}while(_!==null&&_!==t);if(v===null?f=o:v.next=g,!wt(o,e.memoizedState)&&(Xe=!0,B&&(n=oa,n!==null)))throw n;e.memoizedState=o,e.baseState=f,e.baseQueue=v,i.lastRenderedState=o}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function gc(e){var t=Ue(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do o=e(o,f.action),f=f.next;while(f!==l);wt(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function ph(e,t,n){var i=oe,l=Ue(),o=xe;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!wt((we||l).memoizedState,n);f&&(l.memoizedState=n,Xe=!0),l=l.queue;var g=yh.bind(null,i,l,e);if(Er(2048,8,g,[e]),l.getSnapshot!==t||f||Le!==null&&Le.memoizedState.tag&1){if(i.flags|=2048,fa(9,Vl(),bh.bind(null,i,l,n,t),null),Te===null)throw Error(c(349));o||(Qn&124)!==0||xh(i,t,n)}return n}function xh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=fc(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bh(e,t,n,i){t.value=n,t.getSnapshot=i,vh(t)&&jh(e)}function yh(e,t,n){return n(function(){vh(t)&&jh(e)})}function vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function jh(e){var t=ia(e,2);t!==null&&At(t,e,2)}function pc(e){var t=ht();if(typeof e=="function"){var n=e;if(e=n(),Ci){Vn(!0);try{n()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t}function Sh(e,t,n,i){return e.baseState=n,mc(e,we,typeof i=="function"?i:En)}function a1(e,t,n,i,l){if($l(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};M.T!==null?n(!0):o.isTransition=!1,i(o),n=t.pending,n===null?(o.next=t.pending=o,wh(t,o)):(o.next=n.next,t.pending=n.next=o)}}function wh(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var o=M.T,f={};M.T=f;try{var g=n(l,i),v=M.S;v!==null&&v(f,g),zh(e,t,g)}catch(_){xc(e,t,_)}finally{M.T=o}}else try{o=n(l,i),zh(e,t,o)}catch(_){xc(e,t,_)}}function zh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Eh(e,t,i)},function(i){return xc(e,t,i)}):Eh(e,t,n)}function Eh(e,t,n){t.status="fulfilled",t.value=n,_h(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wh(e,n)))}function xc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,_h(t),t=t.next;while(t!==i)}e.action=null}function _h(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Th(e,t){return t}function kh(e,t){if(xe){var n=Te.formState;if(n!==null){e:{var i=oe;if(xe){if(De){t:{for(var l=De,o=ln;l.nodeType!==8;){if(!o){l=null;break t}if(l=It(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){De=It(l.nextSibling),i=l.data==="F!";break e}}Ti(i)}i=!1}i&&(t=n[0])}}return n=ht(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Th,lastRenderedState:t},n.queue=i,n=Xh.bind(null,oe,i),i.dispatch=n,i=pc(!1),o=Sc.bind(null,oe,!1,i.queue),i=ht(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=a1.bind(null,oe,l,o,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ah(e){var t=Ue();return Rh(t,we,e)}function Rh(e,t,n){if(t=mc(e,t,Th)[0],e=Gl(En)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=zr(t)}catch(f){throw f===br?Dl:f}else i=t;t=Ue();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,fa(9,Vl(),r1.bind(null,l,n),null)),[i,o,e]}function r1(e,t){e.action=t}function Ch(e){var t=Ue(),n=we;if(n!==null)return Rh(t,n,e);Ue(),t=t.memoizedState,n=Ue();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=oe.updateQueue,t===null&&(t=fc(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Vl(){return{destroy:void 0,resource:void 0}}function Mh(){return Ue().memoizedState}function Yl(e,t,n,i){var l=ht();i=i===void 0?null:i,oe.flags|=e,l.memoizedState=fa(1|t,Vl(),n,i)}function Er(e,t,n,i){var l=Ue();i=i===void 0?null:i;var o=l.memoizedState.inst;we!==null&&i!==null&&sc(i,we.memoizedState.deps)?l.memoizedState=fa(t,o,n,i):(oe.flags|=e,l.memoizedState=fa(1|t,o,n,i))}function Bh(e,t){Yl(8390656,8,e,t)}function Dh(e,t){Er(2048,8,e,t)}function Oh(e,t){return Er(4,2,e,t)}function Nh(e,t){return Er(4,4,e,t)}function Hh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,n){n=n!=null?n.concat([e]):null,Er(4,4,Hh.bind(null,t,e),n)}function bc(){}function Uh(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&sc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Gh(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&sc(t,i[1]))return i[0];if(i=e(),Ci){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[i,t],i}function yc(e,t,n){return n===void 0||(Qn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=$m(),oe.lanes|=e,ti|=e,n)}function Vh(e,t,n,i){return wt(n,t)?n:ca.current!==null?(e=yc(e,n,i),wt(e,t)||(Xe=!0),e):(Qn&42)===0?(Xe=!0,e.memoizedState=n):(e=$m(),oe.lanes|=e,ti|=e,t)}function Yh(e,t,n,i,l){var o=K.p;K.p=o!==0&&8>o?o:8;var f=M.T,g={};M.T=g,Sc(e,!1,t,n);try{var v=l(),_=M.S;if(_!==null&&_(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var B=t1(v,i);_r(e,t,B,kt(e))}else _r(e,t,i,kt(e))}catch(O){_r(e,t,{then:function(){},status:"rejected",reason:O},kt())}finally{K.p=o,M.T=f}}function l1(){}function vc(e,t,n,i){if(e.tag!==5)throw Error(c(476));var l=$h(e).queue;Yh(e,l,t,ee,n===null?l1:function(){return qh(e),n(i)})}function $h(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qh(e){var t=$h(e).next.queue;_r(e,t,{},kt())}function jc(){return at(qr)}function Kh(){return Ue().memoizedState}function Zh(){return Ue().memoizedState}function s1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Zn(n);var i=Xn(t,e,n);i!==null&&(At(i,t,n),vr(i,t,n)),t={cache:Wo()},e.payload=t;return}t=t.return}}function o1(e,t,n){var i=kt();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},$l(e)?Qh(t,n):(n=Vo(e,t,n,i),n!==null&&(At(n,e,i),Ph(n,t,i)))}function Xh(e,t,n){var i=kt();_r(e,t,n,i)}function _r(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if($l(e))Qh(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,g=o(f,n);if(l.hasEagerState=!0,l.eagerState=g,wt(g,f))return _l(e,t,l,0),Te===null&&El(),!1}catch{}finally{}if(n=Vo(e,t,l,i),n!==null)return At(n,e,i),Ph(n,t,i),!0}return!1}function Sc(e,t,n,i){if(i={lane:2,revertLane:eu(),action:i,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(t)throw Error(c(479))}else t=Vo(e,n,i,2),t!==null&&At(t,e,2)}function $l(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Qh(e,t){ua=Hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ph(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nf(e,n)}}var ql={readContext:at,use:Ul,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Jh={readContext:at,use:Ul,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Bh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yl(4194308,4,Hh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yl(4194308,4,e,t)},useInsertionEffect:function(e,t){Yl(4,2,e,t)},useMemo:function(e,t){var n=ht();t=t===void 0?null:t;var i=e();if(Ci){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ht();if(n!==void 0){var l=n(t);if(Ci){Vn(!0);try{n(t)}finally{Vn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=o1.bind(null,oe,e),[i.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=pc(e);var t=e.queue,n=Xh.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bc,useDeferredValue:function(e,t){var n=ht();return yc(n,e,t)},useTransition:function(){var e=pc(!1);return e=Yh.bind(null,oe,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=oe,l=ht();if(xe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Te===null)throw Error(c(349));(me&124)!==0||xh(i,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Bh(yh.bind(null,i,o,e),[e]),i.flags|=2048,fa(9,Vl(),bh.bind(null,i,o,n,t),null),n},useId:function(){var e=ht(),t=Te.identifierPrefix;if(xe){var n=Sn,i=jn;n=(i&~(1<<32-St(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ll++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=n1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:jc,useFormState:kh,useActionState:kh,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Sc.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:hc,useCacheRefresh:function(){return ht().memoizedState=s1.bind(null,oe)}},Wh={readContext:at,use:Ul,useCallback:Uh,useContext:at,useEffect:Dh,useImperativeHandle:Lh,useInsertionEffect:Oh,useLayoutEffect:Nh,useMemo:Gh,useReducer:Gl,useRef:Mh,useState:function(){return Gl(En)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Ue();return Vh(n,we.memoizedState,e,t)},useTransition:function(){var e=Gl(En)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:zr(e),t]},useSyncExternalStore:ph,useId:Kh,useHostTransitionStatus:jc,useFormState:Ah,useActionState:Ah,useOptimistic:function(e,t){var n=Ue();return Sh(n,we,e,t)},useMemoCache:hc,useCacheRefresh:Zh},c1={readContext:at,use:Ul,useCallback:Uh,useContext:at,useEffect:Dh,useImperativeHandle:Lh,useInsertionEffect:Oh,useLayoutEffect:Nh,useMemo:Gh,useReducer:gc,useRef:Mh,useState:function(){return gc(En)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Ue();return we===null?yc(n,e,t):Vh(n,we.memoizedState,e,t)},useTransition:function(){var e=gc(En)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:zr(e),t]},useSyncExternalStore:ph,useId:Kh,useHostTransitionStatus:jc,useFormState:Ch,useActionState:Ch,useOptimistic:function(e,t){var n=Ue();return we!==null?Sh(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Zh},ha=null,Tr=0;function Kl(e){var t=Tr;return Tr+=1,ha===null&&(ha=[]),oh(ha,e,t)}function kr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zl(e,t){throw t.$$typeof===R?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fh(e){var t=e._init;return t(e._payload)}function Ih(e){function t(z,S){if(e){var E=z.deletions;E===null?(z.deletions=[S],z.flags|=16):E.push(S)}}function n(z,S){if(!e)return null;for(;S!==null;)t(z,S),S=S.sibling;return null}function i(z){for(var S=new Map;z!==null;)z.key!==null?S.set(z.key,z):S.set(z.index,z),z=z.sibling;return S}function l(z,S){return z=vn(z,S),z.index=0,z.sibling=null,z}function o(z,S,E){return z.index=E,e?(E=z.alternate,E!==null?(E=E.index,E<S?(z.flags|=67108866,S):E):(z.flags|=67108866,S)):(z.flags|=1048576,S)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,S,E,D){return S===null||S.tag!==6?(S=$o(E,z.mode,D),S.return=z,S):(S=l(S,E),S.return=z,S)}function v(z,S,E,D){var J=E.type;return J===Y?B(z,S,E.props.children,D,E.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ve&&Fh(J)===S.type)?(S=l(S,E.props),kr(S,E),S.return=z,S):(S=kl(E.type,E.key,E.props,null,z.mode,D),kr(S,E),S.return=z,S)}function _(z,S,E,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=qo(E,z.mode,D),S.return=z,S):(S=l(S,E.children||[]),S.return=z,S)}function B(z,S,E,D,J){return S===null||S.tag!==7?(S=wi(E,z.mode,D,J),S.return=z,S):(S=l(S,E),S.return=z,S)}function O(z,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=$o(""+S,z.mode,E),S.return=z,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return E=kl(S.type,S.key,S.props,null,z.mode,E),kr(E,S),E.return=z,E;case V:return S=qo(S,z.mode,E),S.return=z,S;case ve:var D=S._init;return S=D(S._payload),O(z,S,E)}if(qe(S)||$e(S))return S=wi(S,z.mode,E,null),S.return=z,S;if(typeof S.then=="function")return O(z,Kl(S),E);if(S.$$typeof===G)return O(z,Ml(z,S),E);Zl(z,S)}return null}function T(z,S,E,D){var J=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:g(z,S,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return E.key===J?v(z,S,E,D):null;case V:return E.key===J?_(z,S,E,D):null;case ve:return J=E._init,E=J(E._payload),T(z,S,E,D)}if(qe(E)||$e(E))return J!==null?null:B(z,S,E,D,null);if(typeof E.then=="function")return T(z,S,Kl(E),D);if(E.$$typeof===G)return T(z,S,Ml(z,E),D);Zl(z,E)}return null}function k(z,S,E,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return z=z.get(E)||null,g(S,z,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return z=z.get(D.key===null?E:D.key)||null,v(S,z,D,J);case V:return z=z.get(D.key===null?E:D.key)||null,_(S,z,D,J);case ve:var ce=D._init;return D=ce(D._payload),k(z,S,E,D,J)}if(qe(D)||$e(D))return z=z.get(E)||null,B(S,z,D,J,null);if(typeof D.then=="function")return k(z,S,E,Kl(D),J);if(D.$$typeof===G)return k(z,S,E,Ml(S,D),J);Zl(S,D)}return null}function re(z,S,E,D){for(var J=null,ce=null,F=S,ae=S=0,Pe=null;F!==null&&ae<E.length;ae++){F.index>ae?(Pe=F,F=null):Pe=F.sibling;var pe=T(z,F,E[ae],D);if(pe===null){F===null&&(F=Pe);break}e&&F&&pe.alternate===null&&t(z,F),S=o(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe,F=Pe}if(ae===E.length)return n(z,F),xe&&Ei(z,ae),J;if(F===null){for(;ae<E.length;ae++)F=O(z,E[ae],D),F!==null&&(S=o(F,S,ae),ce===null?J=F:ce.sibling=F,ce=F);return xe&&Ei(z,ae),J}for(F=i(F);ae<E.length;ae++)Pe=k(F,z,ae,E[ae],D),Pe!==null&&(e&&Pe.alternate!==null&&F.delete(Pe.key===null?ae:Pe.key),S=o(Pe,S,ae),ce===null?J=Pe:ce.sibling=Pe,ce=Pe);return e&&F.forEach(function(ui){return t(z,ui)}),xe&&Ei(z,ae),J}function te(z,S,E,D){if(E==null)throw Error(c(151));for(var J=null,ce=null,F=S,ae=S=0,Pe=null,pe=E.next();F!==null&&!pe.done;ae++,pe=E.next()){F.index>ae?(Pe=F,F=null):Pe=F.sibling;var ui=T(z,F,pe.value,D);if(ui===null){F===null&&(F=Pe);break}e&&F&&ui.alternate===null&&t(z,F),S=o(ui,S,ae),ce===null?J=ui:ce.sibling=ui,ce=ui,F=Pe}if(pe.done)return n(z,F),xe&&Ei(z,ae),J;if(F===null){for(;!pe.done;ae++,pe=E.next())pe=O(z,pe.value,D),pe!==null&&(S=o(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return xe&&Ei(z,ae),J}for(F=i(F);!pe.done;ae++,pe=E.next())pe=k(F,z,ae,pe.value,D),pe!==null&&(e&&pe.alternate!==null&&F.delete(pe.key===null?ae:pe.key),S=o(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return e&&F.forEach(function(uy){return t(z,uy)}),xe&&Ei(z,ae),J}function Ee(z,S,E,D){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case C:e:{for(var J=E.key;S!==null;){if(S.key===J){if(J=E.type,J===Y){if(S.tag===7){n(z,S.sibling),D=l(S,E.props.children),D.return=z,z=D;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ve&&Fh(J)===S.type){n(z,S.sibling),D=l(S,E.props),kr(D,E),D.return=z,z=D;break e}n(z,S);break}else t(z,S);S=S.sibling}E.type===Y?(D=wi(E.props.children,z.mode,D,E.key),D.return=z,z=D):(D=kl(E.type,E.key,E.props,null,z.mode,D),kr(D,E),D.return=z,z=D)}return f(z);case V:e:{for(J=E.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(z,S.sibling),D=l(S,E.children||[]),D.return=z,z=D;break e}else{n(z,S);break}else t(z,S);S=S.sibling}D=qo(E,z.mode,D),D.return=z,z=D}return f(z);case ve:return J=E._init,E=J(E._payload),Ee(z,S,E,D)}if(qe(E))return re(z,S,E,D);if($e(E)){if(J=$e(E),typeof J!="function")throw Error(c(150));return E=J.call(E),te(z,S,E,D)}if(typeof E.then=="function")return Ee(z,S,Kl(E),D);if(E.$$typeof===G)return Ee(z,S,Ml(z,E),D);Zl(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(n(z,S.sibling),D=l(S,E),D.return=z,z=D):(n(z,S),D=$o(E,z.mode,D),D.return=z,z=D),f(z)):n(z,S)}return function(z,S,E,D){try{Tr=0;var J=Ee(z,S,E,D);return ha=null,J}catch(F){if(F===br||F===Dl)throw F;var ce=zt(29,F,null,z.mode);return ce.lanes=D,ce.return=z,ce}finally{}}}var ma=Ih(!0),em=Ih(!1),Vt=N(null),sn=null;function Pn(e){var t=e.alternate;Z(Ye,Ye.current&1),Z(Vt,e),sn===null&&(t===null||ca.current!==null||t.memoizedState!==null)&&(sn=e)}function tm(e){if(e.tag===22){if(Z(Ye,Ye.current),Z(Vt,e),sn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(sn=e)}}else Jn()}function Jn(){Z(Ye,Ye.current),Z(Vt,Vt.current)}function _n(e){q(Vt),sn===e&&(sn=null),q(Ye)}var Ye=N(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||fu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=kt(),l=Zn(i);l.payload=t,n!=null&&(l.callback=n),t=Xn(e,l,i),t!==null&&(At(t,e,i),vr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=kt(),l=Zn(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Xn(e,l,i),t!==null&&(At(t,e,i),vr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),i=Zn(n);i.tag=2,t!=null&&(i.callback=t),t=Xn(e,i,n),t!==null&&(At(t,e,n),vr(t,e,n))}};function nm(e,t,n,i,l,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,f):t.prototype&&t.prototype.isPureReactComponent?!ur(n,i)||!ur(l,o):!0}function im(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function Mi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function am(e){Ql(e)}function rm(e){console.error(e)}function lm(e){Ql(e)}function Pl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function sm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ec(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Pl(e,t)},n}function om(e){return e=Zn(e),e.tag=3,e}function cm(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;e.payload=function(){return l(o)},e.callback=function(){sm(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){sm(t,n,i),typeof l!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function u1(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&gr(t,n,l,!0),n=Vt.current,n!==null){switch(n.tag){case 13:return sn===null?Pc():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===ec?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Wc(e,i,l)),!1;case 22:return n.flags|=65536,i===ec?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Wc(e,i,l)),!1}throw Error(c(435,n.tag))}return Wc(e,i,l),Pc(),!1}if(xe)return t=Vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Xo&&(e=Error(c(422),{cause:i}),mr(Ht(e,n)))):(i!==Xo&&(t=Error(c(423),{cause:i}),mr(Ht(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Ht(i,n),l=Ec(e.stateNode,i,l),ic(e,l),Oe!==4&&(Oe=2)),!1;var o=Error(c(520),{cause:i});if(o=Ht(o,n),Or===null?Or=[o]:Or.push(o),Oe!==4&&(Oe=2),t===null)return!0;i=Ht(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ec(n.stateNode,i,e),ic(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ni===null||!ni.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=om(l),cm(l,e,n,i),ic(n,l),!1}n=n.return}while(n!==null);return!1}var um=Error(c(461)),Xe=!1;function Ie(e,t,n,i){t.child=e===null?em(t,null,n,i):ma(t,e.child,n,i)}function dm(e,t,n,i,l){n=n.render;var o=t.ref;if("ref"in i){var f={};for(var g in i)g!=="ref"&&(f[g]=i[g])}else f=i;return Ai(t),i=oc(e,t,n,f,o,l),g=cc(),e!==null&&!Xe?(uc(e,t,l),Tn(e,t,l)):(xe&&g&&Ko(t),t.flags|=1,Ie(e,t,i,l),t.child)}function fm(e,t,n,i,l){if(e===null){var o=n.type;return typeof o=="function"&&!Yo(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,hm(e,t,o,i,l)):(e=kl(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Bc(e,l)){var f=o.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(f,i)&&e.ref===t.ref)return Tn(e,t,l)}return t.flags|=1,e=vn(o,i),e.ref=t.ref,e.return=t,t.child=e}function hm(e,t,n,i,l){if(e!==null){var o=e.memoizedProps;if(ur(o,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=o,Bc(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Tn(e,t,l)}return _c(e,t,n,i,l)}function mm(e,t,n){var i=t.pendingProps,l=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=o!==null?o.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~i}else t.childLanes=0,t.child=null;return gm(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(t,o!==null?o.cachePool:null),o!==null?hh(t,o):rc(),tm(t);else return t.lanes=t.childLanes=536870912,gm(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Bl(t,o.cachePool),hh(t,o),Jn(),t.memoizedState=null):(e!==null&&Bl(t,null),rc(),Jn());return Ie(e,t,l,n),t.child}function gm(e,t,n,i){var l=Io();return l=l===null?null:{parent:Ve._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Bl(t,null),rc(),tm(t),e!==null&&gr(e,t,i,!0),null}function Jl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,i,l){return Ai(t),n=oc(e,t,n,i,void 0,l),i=cc(),e!==null&&!Xe?(uc(e,t,l),Tn(e,t,l)):(xe&&i&&Ko(t),t.flags|=1,Ie(e,t,n,l),t.child)}function pm(e,t,n,i,l,o){return Ai(t),t.updateQueue=null,n=gh(t,i,n,l),mh(e),i=cc(),e!==null&&!Xe?(uc(e,t,o),Tn(e,t,o)):(xe&&i&&Ko(t),t.flags|=1,Ie(e,t,n,o),t.child)}function xm(e,t,n,i,l){if(Ai(t),t.stateNode===null){var o=aa,f=n.contextType;typeof f=="object"&&f!==null&&(o=at(f)),o=new n(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=zc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},tc(t),f=n.contextType,o.context=typeof f=="object"&&f!==null?at(f):aa,o.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(wc(t,n,f,i),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&zc.enqueueReplaceState(o,o.state,null),Sr(t,i,o,l),jr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var g=t.memoizedProps,v=Mi(n,g);o.props=v;var _=o.context,B=n.contextType;f=aa,typeof B=="object"&&B!==null&&(f=at(B));var O=n.getDerivedStateFromProps;B=typeof O=="function"||typeof o.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,B||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g||_!==f)&&im(t,o,i,f),Kn=!1;var T=t.memoizedState;o.state=T,Sr(t,i,o,l),jr(),_=t.memoizedState,g||T!==_||Kn?(typeof O=="function"&&(wc(t,n,O,i),_=t.memoizedState),(v=Kn||nm(t,n,v,i,T,_,f))?(B||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=_),o.props=i,o.state=_,o.context=f,i=v):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,nc(e,t),f=t.memoizedProps,B=Mi(n,f),o.props=B,O=t.pendingProps,T=o.context,_=n.contextType,v=aa,typeof _=="object"&&_!==null&&(v=at(_)),g=n.getDerivedStateFromProps,(_=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==O||T!==v)&&im(t,o,i,v),Kn=!1,T=t.memoizedState,o.state=T,Sr(t,i,o,l),jr();var k=t.memoizedState;f!==O||T!==k||Kn||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof g=="function"&&(wc(t,n,g,i),k=t.memoizedState),(B=Kn||nm(t,n,B,i,T,k,v)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(_||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,k,v),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,k,v)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=k),o.props=i,o.state=k,o.context=v,i=B):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,Jl(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=ma(t,e.child,null,l),t.child=ma(t,null,n,l)):Ie(e,t,n,l),t.memoizedState=o.state,e=t.child):e=Tn(e,t,l),e}function bm(e,t,n,i){return hr(),t.flags|=256,Ie(e,t,n,i),t.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kc(e){return{baseLanes:e,cachePool:rh()}}function Ac(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yt),e}function ym(e,t,n){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(l?Pn(t):Jn(),xe){var g=De,v;if(v=g){e:{for(v=g,g=ln;v.nodeType!==8;){if(!g){g=null;break e}if(v=It(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(t.memoizedState={dehydrated:g,treeContext:zi!==null?{id:jn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},v=zt(18,null,null,0),v.stateNode=g,v.return=t,t.child=v,st=t,De=null,v=!0):v=!1}v||Ti(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return fu(g)?t.lanes=32:t.lanes=536870912,null;_n(t)}return g=i.children,i=i.fallback,l?(Jn(),l=t.mode,g=Wl({mode:"hidden",children:g},l),i=wi(i,l,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,l=t.child,l.memoizedState=kc(n),l.childLanes=Ac(e,f,n),t.memoizedState=Tc,i):(Pn(t),Rc(t,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(o)t.flags&256?(Pn(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState!==null?(Jn(),t.child=e.child,t.flags|=128,t=null):(Jn(),l=i.fallback,g=t.mode,i=Wl({mode:"visible",children:i.children},g),l=wi(l,g,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,ma(t,e.child,null,n),i=t.child,i.memoizedState=kc(n),i.childLanes=Ac(e,f,n),t.memoizedState=Tc,t=l);else if(Pn(t),fu(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var _=f.dgst;f=_,i=Error(c(419)),i.stack="",i.digest=f,mr({value:i,source:null,stack:null}),t=Cc(e,t,n)}else if(Xe||gr(e,t,n,!1),f=(n&e.childLanes)!==0,Xe||f){if(f=Te,f!==null&&(i=n&-n,i=(i&42)!==0?1:ho(i),i=(i&(f.suspendedLanes|n))!==0?0:i,i!==0&&i!==v.retryLane))throw v.retryLane=i,ia(e,i),At(f,e,i),um;g.data==="$?"||Pc(),t=Cc(e,t,n)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,De=It(g.nextSibling),st=t,xe=!0,_i=null,ln=!1,e!==null&&(Ut[Gt++]=jn,Ut[Gt++]=Sn,Ut[Gt++]=zi,jn=e.id,Sn=e.overflow,zi=t),t=Rc(t,i.children),t.flags|=4096);return t}return l?(Jn(),l=i.fallback,g=t.mode,v=e.child,_=v.sibling,i=vn(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,_!==null?l=vn(_,l):(l=wi(l,g,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,g=e.child.memoizedState,g===null?g=kc(n):(v=g.cachePool,v!==null?(_=Ve._currentValue,v=v.parent!==_?{parent:_,pool:_}:v):v=rh(),g={baseLanes:g.baseLanes|n,cachePool:v}),l.memoizedState=g,l.childLanes=Ac(e,f,n),t.memoizedState=Tc,i):(Pn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Rc(e,t){return t=Wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wl(e,t){return e=zt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cc(e,t,n){return ma(t,e.child,null,n),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Po(e.return,t,n)}function Mc(e,t,n,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=l)}function jm(e,t,n){var i=t.pendingProps,l=i.revealOrder,o=i.tail;if(Ie(e,t,i.children,n),i=Ye.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,n,t);else if(e.tag===19)vm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(Z(Ye,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Mc(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Mc(t,!0,n,null,o);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function d1(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),qn(t,Ve,e.memoizedState.cache),hr();break;case 27:case 5:xi(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Pn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ym(e,t,n):(Pn(t),e=Tn(e,t,n),e!==null?e.sibling:null);Pn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(gr(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return jm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(Ye,Ye.current),i)break;return null;case 22:case 23:return t.lanes=0,mm(e,t,n);case 24:qn(t,Ve,e.memoizedState.cache)}return Tn(e,t,n)}function Sm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Bc(e,n)&&(t.flags&128)===0)return Xe=!1,d1(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,xe&&(t.flags&1048576)!==0&&Ff(t,Rl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Yo(i)?(e=Mi(i,e),t.tag=1,t=xm(null,t,i,e,n)):(t.tag=0,t=_c(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===P){t.tag=11,t=dm(null,t,i,e,n);break e}else if(l===H){t.tag=14,t=fm(null,t,i,e,n);break e}}throw t=pn(i)||i,Error(c(306,t,""))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Mi(i,t.pendingProps),xm(e,t,i,l,n);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,nc(e,t),Sr(t,i,null,n);var f=t.memoizedState;if(i=f.cache,qn(t,Ve,i),i!==o.cache&&Jo(t,[Ve],n,!0),jr(),i=f.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bm(e,t,i,n);break e}else if(i!==l){l=Ht(Error(c(424)),t),mr(l),t=bm(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=It(e.firstChild),st=t,xe=!0,_i=null,ln=!0,n=em(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hr(),i===l){t=Tn(e,t,n);break e}Ie(e,t,i,n)}t=t.child}return t;case 26:return Jl(e,t),e===null?(n=_g(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,i=ds(ie.current).createElement(n),i[it]=t,i[dt]=e,tt(i,n,e),Ze(i),t.stateNode=i):t.memoizedState=_g(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xi(t),e===null&&xe&&(i=t.stateNode=wg(t.type,t.pendingProps,ie.current),st=t,ln=!0,l=De,ri(t.type)?(hu=l,De=It(i.firstChild)):De=l),Ie(e,t,t.pendingProps.children,n),Jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((l=i=De)&&(i=U1(i,t.type,t.pendingProps,ln),i!==null?(t.stateNode=i,st=t,De=It(i.firstChild),ln=!1,l=!0):l=!1),l||Ti(t)),xi(t),l=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,i=o.children,cu(l,o)?i=null:f!==null&&cu(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=oc(e,t,i1,null,null,n),qr._currentValue=l),Jl(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&xe&&((e=n=De)&&(n=G1(n,t.pendingProps,ln),n!==null?(t.stateNode=n,st=t,De=null,e=!0):e=!1),e||Ti(t)),null;case 13:return ym(e,t,n);case 4:return be(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ma(t,null,i,n):Ie(e,t,i,n),t.child;case 11:return dm(e,t,t.type,t.pendingProps,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,qn(t,t.type,i.value),Ie(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ai(t),l=at(l),i=i(l),t.flags|=1,Ie(e,t,i,n),t.child;case 14:return fm(e,t,t.type,t.pendingProps,n);case 15:return hm(e,t,t.type,t.pendingProps,n);case 19:return jm(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=Wl(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=vn(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return mm(e,t,n);case 24:return Ai(t),i=at(Ve),e===null?(l=Io(),l===null&&(l=Te,o=Wo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:i,cache:l},tc(t),qn(t,Ve,l)):((e.lanes&n)!==0&&(nc(e,t),Sr(t,null,null,n),jr()),l=e.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),qn(t,Ve,i)):(i=o.cache,qn(t,Ve,i),i!==l.cache&&Jo(t,[Ve],n,!0))),Ie(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function kn(e){e.flags|=4}function wm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cg(t)){if(t=Vt.current,t!==null&&((me&4194048)===me?sn!==null:(me&62914560)!==me&&(me&536870912)===0||t!==sn))throw yr=ec,lh;e.flags|=8192}}function Fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ef():536870912,e.lanes|=t,ba|=t)}function Ar(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function f1(e,t,n){var i=t.pendingProps;switch(Zo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),zn(Ve),nt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fr(t)?kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,th())),Be(t),null;case 26:return n=t.memoizedState,e===null?(kn(t),n!==null?(Be(t),wm(t,n)):(Be(t),t.flags&=-16777217)):n?n!==e.memoizedState?(kn(t),Be(t),wm(t,n)):(Be(t),t.flags&=-16777217):(e.memoizedProps!==i&&kn(t),Be(t),t.flags&=-16777217),null;case 27:xn(t),n=ie.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Be(t),null}e=I.current,fr(t)?If(t):(e=wg(l,i,n),t.stateNode=e,kn(t))}return Be(t),null;case 5:if(xn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Be(t),null}if(e=I.current,fr(t))If(t);else{switch(l=ds(ie.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[it]=t,e[dt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(tt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&kn(t)}}return Be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,fr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=st,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||pg(e.nodeValue,n)),e||Ti(t)}else e=ds(e).createTextNode(i),e[it]=t,t.stateNode=e}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[it]=t}else hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else l=th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(_n(t),t):(_n(t),null)}if(_n(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Fl(t,t.updateQueue),Be(t),null;case 4:return nt(),e===null&&au(t.stateNode.containerInfo),Be(t),null;case 10:return zn(t.type),Be(t),null;case 19:if(q(Ye),l=t.memoizedState,l===null)return Be(t),null;if(i=(t.flags&128)!==0,o=l.rendering,o===null)if(i)Ar(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Xl(e),o!==null){for(t.flags|=128,Ar(l,!1),e=o.updateQueue,t.updateQueue=e,Fl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wf(n,e),n=n.sibling;return Z(Ye,Ye.current&1|2),t.child}e=e.sibling}l.tail!==null&&rn()>ts&&(t.flags|=128,i=!0,Ar(l,!1),t.lanes=4194304)}else{if(!i)if(e=Xl(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Fl(t,e),Ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!xe)return Be(t),null}else 2*rn()-l.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,i=!0,Ar(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=rn(),t.sibling=null,e=Ye.current,Z(Ye,i?e&1|2:e&1),t):(Be(t),null);case 22:case 23:return _n(t),lc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Fl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&q(Ri),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zn(Ve),Be(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function h1(e,t){switch(Zo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(Ve),nt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xn(t),null;case 13:if(_n(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Ye),null;case 4:return nt(),null;case 10:return zn(t.type),null;case 22:case 23:return _n(t),lc(),e!==null&&q(Ri),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zn(Ve),null;case 25:return null;default:return null}}function zm(e,t){switch(Zo(t),t.tag){case 3:zn(Ve),nt();break;case 26:case 27:case 5:xn(t);break;case 4:nt();break;case 13:_n(t);break;case 19:q(Ye);break;case 10:zn(t.type);break;case 22:case 23:_n(t),lc(),e!==null&&q(Ri);break;case 24:zn(Ve)}}function Rr(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var o=n.create,f=n.inst;i=o(),f.destroy=i}n=n.next}while(n!==l)}}catch(g){_e(t,t.return,g)}}function Wn(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){var f=i.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,l=t;var v=n,_=g;try{_()}catch(B){_e(l,v,B)}}}i=i.next}while(i!==o)}}catch(B){_e(t,t.return,B)}}function Em(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fh(t,n)}catch(i){_e(e,e.return,i)}}}function _m(e,t,n){n.props=Mi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function Cr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){_e(e,t,l)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){_e(e,t,l)}else n.current=null}function Tm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){_e(e,e.return,l)}}function Dc(e,t,n){try{var i=e.stateNode;D1(i,e.type,n,t),i[dt]=t}catch(l){_e(e,e.return,l)}}function km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ri(e.type)||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ri(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us));else if(i!==4&&(i===27&&ri(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}function Il(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ri(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Am(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tt(t,i,n),t[it]=e,t[dt]=n}catch(o){_e(e,e.return,o)}}var An=!1,He=!1,Hc=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function m1(e,t){if(e=e.containerInfo,su=xs,e=Vf(e),Oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var f=0,g=-1,v=-1,_=0,B=0,O=e,T=null;t:for(;;){for(var k;O!==n||l!==0&&O.nodeType!==3||(g=f+l),O!==o||i!==0&&O.nodeType!==3||(v=f+i),O.nodeType===3&&(f+=O.nodeValue.length),(k=O.firstChild)!==null;)T=O,O=k;for(;;){if(O===e)break t;if(T===n&&++_===l&&(g=f),T===o&&++B===i&&(v=f),(k=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=k}n=g===-1||v===-1?null:{start:g,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},xs=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,i=n.stateNode;try{var re=Mi(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(re,o),i.__reactInternalSnapshotBeforeUpdate=e}catch(te){_e(n,n.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Cm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Fn(e,n),i&4&&Rr(5,n);break;case 1:if(Fn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var l=Mi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}i&64&&Em(n),i&512&&Cr(n,n.return);break;case 3:if(Fn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fh(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&i&4&&Am(n);case 26:case 5:Fn(e,n),t===null&&i&4&&Tm(n),i&512&&Cr(n,n.return);break;case 12:Fn(e,n);break;case 13:Fn(e,n),i&4&&Dm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=w1.bind(null,n),V1(e,n))));break;case 22:if(i=n.memoizedState!==null||An,!i){t=t!==null&&t.memoizedState!==null||He,l=An;var o=He;An=i,(He=t)&&!o?In(e,n,(n.subtreeFlags&8772)!==0):Fn(e,n),An=l,He=o}break;case 30:break;default:Fn(e,n)}}function Mm(e){var t=e.alternate;t!==null&&(e.alternate=null,Mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,mt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)Bm(e,t,n),n=n.sibling}function Bm(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 26:He||on(n,t),Rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||on(n,t);var i=Re,l=mt;ri(n.type)&&(Re=n.stateNode,mt=!1),Rn(e,t,n),Gr(n.stateNode),Re=i,mt=l;break;case 5:He||on(n,t);case 6:if(i=Re,l=mt,Re=null,Rn(e,t,n),Re=i,mt=l,Re!==null)if(mt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(o){_e(n,t,o)}else try{Re.removeChild(n.stateNode)}catch(o){_e(n,t,o)}break;case 18:Re!==null&&(mt?(e=Re,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qr(e)):jg(Re,n.stateNode));break;case 4:i=Re,l=mt,Re=n.stateNode.containerInfo,mt=!0,Rn(e,t,n),Re=i,mt=l;break;case 0:case 11:case 14:case 15:He||Wn(2,n,t),He||Wn(4,n,t),Rn(e,t,n);break;case 1:He||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&_m(n,t,i)),Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:He=(i=He)||n.memoizedState!==null,Rn(e,t,n),He=i;break;default:Rn(e,t,n)}}function Dm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(n){_e(t,t.return,n)}}function g1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rm),t;default:throw Error(c(435,e.tag))}}function Lc(e,t){var n=g1(e);t.forEach(function(i){var l=z1.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function Et(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],o=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(ri(g.type)){Re=g.stateNode,mt=!1;break e}break;case 5:Re=g.stateNode,mt=!1;break e;case 3:case 4:Re=g.stateNode.containerInfo,mt=!0;break e}g=g.return}if(Re===null)throw Error(c(160));Bm(o,f,l),Re=null,mt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}var Ft=null;function Om(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),_t(e),i&4&&(Wn(3,e,e.return),Rr(3,e),Wn(5,e,e.return));break;case 1:Et(t,e),_t(e),i&512&&(He||n===null||on(n,n.return)),i&64&&An&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=Ft;if(Et(t,e),_t(e),i&512&&(He||n===null||on(n,n.return)),i&4){var o=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[tr]||o[it]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),tt(o,i,n),o[it]=e,Ze(o),i=o;break e;case"link":var f=Ag("link","href",l).get(i+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(o=f[g],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}o=l.createElement(i),tt(o,i,n),l.head.appendChild(o);break;case"meta":if(f=Ag("meta","content",l).get(i+(n.content||""))){for(g=0;g<f.length;g++)if(o=f[g],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}o=l.createElement(i),tt(o,i,n),l.head.appendChild(o);break;default:throw Error(c(468,i))}o[it]=e,Ze(o),i=o}e.stateNode=i}else Rg(l,e.type,e.stateNode);else e.stateNode=kg(l,i,e.memoizedProps);else o!==i?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,i===null?Rg(l,e.type,e.stateNode):kg(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Dc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),_t(e),i&512&&(He||n===null||on(n,n.return)),n!==null&&i&4&&Dc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),_t(e),i&512&&(He||n===null||on(n,n.return)),e.flags&32){l=e.stateNode;try{Ji(l,"")}catch(k){_e(e,e.return,k)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Dc(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Hc=!0);break;case 6:if(Et(t,e),_t(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(k){_e(e,e.return,k)}}break;case 3:if(ms=null,l=Ft,Ft=fs(t.containerInfo),Et(t,e),Ft=l,_t(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(k){_e(e,e.return,k)}Hc&&(Hc=!1,Nm(e));break;case 4:i=Ft,Ft=fs(e.stateNode.containerInfo),Et(t,e),_t(e),Ft=i;break;case 12:Et(t,e),_t(e);break;case 13:Et(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qc=rn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,_=An,B=He;if(An=_||l,He=B||v,Et(t,e),He=B,An=_,_t(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||An||He||Bi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(o=v.stateNode,l)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=v.stateNode;var O=v.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;g.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(k){_e(v,v.return,k)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(k){_e(v,v.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Lc(e,n))));break;case 19:Et(t,e),_t(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 30:break;case 21:break;default:Et(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(km(i)){n=i;break}i=i.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,o=Oc(e);Il(e,o,l);break;case 5:var f=n.stateNode;n.flags&32&&(Ji(f,""),n.flags&=-33);var g=Oc(e);Il(e,g,f);break;case 3:case 4:var v=n.stateNode.containerInfo,_=Oc(e);Nc(e,_,v);break;default:throw Error(c(161))}}catch(B){_e(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cm(e,t.alternate,t),t=t.sibling}function Bi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Bi(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_m(t,t.return,n),Bi(t);break;case 27:Gr(t.stateNode);case 26:case 5:on(t,t.return),Bi(t);break;case 22:t.memoizedState===null&&Bi(t);break;case 30:Bi(t);break;default:Bi(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:In(l,o,n),Rr(4,o);break;case 1:if(In(l,o,n),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){_e(i,i.return,_)}if(i=o,l=i.updateQueue,l!==null){var g=i.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)dh(v[l],g)}catch(_){_e(i,i.return,_)}}n&&f&64&&Em(o),Cr(o,o.return);break;case 27:Am(o);case 26:case 5:In(l,o,n),n&&i===null&&f&4&&Tm(o),Cr(o,o.return);break;case 12:In(l,o,n);break;case 13:In(l,o,n),n&&f&4&&Dm(l,o);break;case 22:o.memoizedState===null&&In(l,o,n),Cr(o,o.return);break;case 30:break;default:In(l,o,n)}t=t.sibling}}function Uc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pr(n))}function Gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pr(e))}function cn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hm(e,t,n,i),t=t.sibling}function Hm(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:cn(e,t,n,i),l&2048&&Rr(9,t);break;case 1:cn(e,t,n,i);break;case 3:cn(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pr(e)));break;case 12:if(l&2048){cn(e,t,n,i),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,g=o.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){_e(t,t.return,v)}}else cn(e,t,n,i);break;case 13:cn(e,t,n,i);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?cn(e,t,n,i):Mr(e,t):o._visibility&2?cn(e,t,n,i):(o._visibility|=2,ga(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Uc(f,t);break;case 24:cn(e,t,n,i),l&2048&&Gc(t.alternate,t);break;default:cn(e,t,n,i)}}function ga(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,f=t,g=n,v=i,_=f.flags;switch(f.tag){case 0:case 11:case 15:ga(o,f,g,v,l),Rr(8,f);break;case 23:break;case 22:var B=f.stateNode;f.memoizedState!==null?B._visibility&2?ga(o,f,g,v,l):Mr(o,f):(B._visibility|=2,ga(o,f,g,v,l)),l&&_&2048&&Uc(f.alternate,f);break;case 24:ga(o,f,g,v,l),l&&_&2048&&Gc(f.alternate,f);break;default:ga(o,f,g,v,l)}t=t.sibling}}function Mr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:Mr(n,i),l&2048&&Uc(i.alternate,i);break;case 24:Mr(n,i),l&2048&&Gc(i.alternate,i);break;default:Mr(n,i)}t=t.sibling}}var Br=8192;function pa(e){if(e.subtreeFlags&Br)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 26:pa(e),e.flags&Br&&e.memoizedState!==null&&ey(Ft,e.memoizedState,e.memoizedProps);break;case 5:pa(e);break;case 3:case 4:var t=Ft;Ft=fs(e.stateNode.containerInfo),pa(e),Ft=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Br,Br=16777216,pa(e),Br=t):pa(e));break;default:pa(e)}}function Um(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Vm(i,e)}Um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:Dr(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Dr(e);break;case 12:Dr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,es(e)):Dr(e);break;default:Dr(e)}}function es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Vm(i,e)}Um(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,es(t));break;default:es(t)}e=e.sibling}}function Vm(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pr(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else e:for(n=e;Qe!==null;){i=Qe;var l=i.sibling,o=i.return;if(Mm(i),i===n){Qe=null;break e}if(l!==null){l.return=o,Qe=l;break e}Qe=o}}}var p1={getCacheForType:function(e){var t=at(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},x1=typeof WeakMap=="function"?WeakMap:Map,je=0,Te=null,fe=null,me=0,Se=0,Tt=null,ei=!1,xa=!1,Vc=!1,Cn=0,Oe=0,ti=0,Di=0,Yc=0,Yt=0,ba=0,Or=null,gt=null,$c=!1,qc=0,ts=1/0,ns=null,ni=null,et=0,ii=null,ya=null,va=0,Kc=0,Zc=null,Ym=null,Nr=0,Xc=null;function kt(){if((je&2)!==0&&me!==0)return me&-me;if(M.T!==null){var e=sa;return e!==0?e:eu()}return af()}function $m(){Yt===0&&(Yt=(me&536870912)===0||xe?Id():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),Yt}function At(e,t,n){(e===Te&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(ja(e,0),ai(e,me,Yt,!1)),er(e,n),((je&2)===0||e!==Te)&&(e===Te&&((je&2)===0&&(Di|=n),Oe===4&&ai(e,me,Yt,!1)),un(e))}function qm(e,t,n){if((je&6)!==0)throw Error(c(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ia(e,t),l=i?v1(e,t):Jc(e,t,!0),o=i;do{if(l===0){xa&&!i&&ai(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!b1(n)){l=Jc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;l=Or;var v=g.current.memoizedState.isDehydrated;if(v&&(ja(g,f).flags|=256),f=Jc(g,f,!1),f!==2){if(Vc&&!v){g.errorRecoveryDisabledLanes|=o,Di|=o,l=4;break e}o=gt,gt=l,o!==null&&(gt===null?gt=o:gt.push.apply(gt,o))}l=f}if(o=!1,l!==2)continue}}if(l===1){ja(e,0),ai(e,t,0,!0);break}e:{switch(i=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ai(i,t,Yt,!ei);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=qc+300-rn(),10<l)){if(ai(i,t,Yt,!ei),hl(i,0,!0)!==0)break e;i.timeoutHandle=yg(Km.bind(null,i,n,gt,ns,$c,t,Yt,Di,ba,ei,o,2,-0,0),l);break e}Km(i,n,gt,ns,$c,t,Yt,Di,ba,ei,o,0,-0,0)}}break}while(!0);un(e)}function Km(e,t,n,i,l,o,f,g,v,_,B,O,T,k){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&($r={stylesheets:null,count:0,unsuspend:I1},Lm(t),O=ty(),O!==null)){e.cancelPendingCommit=O(Fm.bind(null,e,t,o,n,i,l,f,g,v,B,1,T,k)),ai(e,o,f,!_);return}Fm(e,t,o,n,i,l,f,g,v)}function b1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],o=l.getSnapshot;l=l.value;try{if(!wt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ai(e,t,n,i){t&=~Yc,t&=~Di,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var o=31-St(l),f=1<<o;i[o]=-1,l&=~f}n!==0&&tf(e,n,t)}function is(){return(je&6)===0?(Hr(0),!1):!0}function Qc(){if(fe!==null){if(Se===0)var e=fe.return;else e=fe,wn=ki=null,dc(e),ha=null,Tr=0,e=fe;for(;e!==null;)zm(e.alternate,e),e=e.return;fe=null}}function ja(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,N1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qc(),Te=e,fe=n=vn(e.current,null),me=t,Se=0,Tt=null,ei=!1,xa=Ia(e,t),Vc=!1,ba=Yt=Yc=Di=ti=Oe=0,gt=Or=null,$c=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-St(i),o=1<<l;t|=e[l],i&=~o}return Cn=t,El(),n}function Zm(e,t){oe=null,M.H=ql,t===br||t===Dl?(t=ch(),Se=3):t===lh?(t=ch(),Se=4):Se=t===um?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,fe===null&&(Oe=1,Pl(e,Ht(t,e.current)))}function Xm(){var e=M.H;return M.H=ql,e===null?ql:e}function Qm(){var e=M.A;return M.A=p1,e}function Pc(){Oe=4,ei||(me&4194048)!==me&&Vt.current!==null||(xa=!0),(ti&134217727)===0&&(Di&134217727)===0||Te===null||ai(Te,me,Yt,!1)}function Jc(e,t,n){var i=je;je|=2;var l=Xm(),o=Qm();(Te!==e||me!==t)&&(ns=null,ja(e,t)),t=!1;var f=Oe;e:do try{if(Se!==0&&fe!==null){var g=fe,v=Tt;switch(Se){case 8:Qc(),f=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(t=!0);var _=Se;if(Se=0,Tt=null,Sa(e,g,v,_),n&&xa){f=0;break e}break;default:_=Se,Se=0,Tt=null,Sa(e,g,v,_)}}y1(),f=Oe;break}catch(B){Zm(e,B)}while(!0);return t&&e.shellSuspendCounter++,wn=ki=null,je=i,M.H=l,M.A=o,fe===null&&(Te=null,me=0,El()),f}function y1(){for(;fe!==null;)Pm(fe)}function v1(e,t){var n=je;je|=2;var i=Xm(),l=Qm();Te!==e||me!==t?(ns=null,ts=rn()+500,ja(e,t)):xa=Ia(e,t);e:do try{if(Se!==0&&fe!==null){t=fe;var o=Tt;t:switch(Se){case 1:Se=0,Tt=null,Sa(e,t,o,1);break;case 2:case 9:if(sh(o)){Se=0,Tt=null,Jm(t);break}t=function(){Se!==2&&Se!==9||Te!==e||(Se=7),un(e)},o.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:sh(o)?(Se=0,Tt=null,Jm(t)):(Se=0,Tt=null,Sa(e,t,o,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var g=fe;if(!f||Cg(f)){Se=0,Tt=null;var v=g.sibling;if(v!==null)fe=v;else{var _=g.return;_!==null?(fe=_,as(_)):fe=null}break t}}Se=0,Tt=null,Sa(e,t,o,5);break;case 6:Se=0,Tt=null,Sa(e,t,o,6);break;case 8:Qc(),Oe=6;break e;default:throw Error(c(462))}}j1();break}catch(B){Zm(e,B)}while(!0);return wn=ki=null,M.H=i,M.A=l,je=n,fe!==null?0:(Te=null,me=0,El(),Oe)}function j1(){for(;fe!==null&&!$x();)Pm(fe)}function Pm(e){var t=Sm(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?as(e):fe=t}function Jm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pm(n,t,t.pendingProps,t.type,void 0,me);break;case 11:t=pm(n,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:dc(t);default:zm(n,t),t=fe=Wf(t,Cn),t=Sm(n,t,Cn)}e.memoizedProps=e.pendingProps,t===null?as(e):fe=t}function Sa(e,t,n,i){wn=ki=null,dc(t),ha=null,Tr=0;var l=t.return;try{if(u1(e,l,t,n,me)){Oe=1,Pl(e,Ht(n,e.current)),fe=null;return}}catch(o){if(l!==null)throw fe=l,o;Oe=1,Pl(e,Ht(n,e.current)),fe=null;return}t.flags&32768?(xe||i===1?e=!0:xa||(me&536870912)!==0?e=!1:(ei=e=!0,(i===2||i===9||i===3||i===6)&&(i=Vt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Wm(t,e)):as(t)}function as(e){var t=e;do{if((t.flags&32768)!==0){Wm(t,ei);return}e=t.return;var n=f1(t.alternate,t,Cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Oe===0&&(Oe=5)}function Wm(e,t){do{var n=h1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Oe=6,fe=null}function Fm(e,t,n,i,l,o,f,g,v){e.cancelPendingCommit=null;do rs();while(et!==0);if((je&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Go,Ix(e,n,o,f,g,v),e===Te&&(fe=Te=null,me=0),ya=t,ii=e,va=n,Kc=o,Zc=l,Ym=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,E1(ul,function(){return ig(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=M.T,M.T=null,l=K.p,K.p=2,f=je,je|=4;try{m1(e,t,n)}finally{je=f,K.p=l,M.T=i}}et=1,Im(),eg(),tg()}}function Im(){if(et===1){et=0;var e=ii,t=ya,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var i=K.p;K.p=2;var l=je;je|=4;try{Om(t,e);var o=ou,f=Vf(e.containerInfo),g=o.focusedElem,v=o.selectionRange;if(f!==g&&g&&g.ownerDocument&&Gf(g.ownerDocument.documentElement,g)){if(v!==null&&Oo(g)){var _=v.start,B=v.end;if(B===void 0&&(B=_),"selectionStart"in g)g.selectionStart=_,g.selectionEnd=Math.min(B,g.value.length);else{var O=g.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var k=T.getSelection(),re=g.textContent.length,te=Math.min(v.start,re),Ee=v.end===void 0?te:Math.min(v.end,re);!k.extend&&te>Ee&&(f=Ee,Ee=te,te=f);var z=Uf(g,te),S=Uf(g,Ee);if(z&&S&&(k.rangeCount!==1||k.anchorNode!==z.node||k.anchorOffset!==z.offset||k.focusNode!==S.node||k.focusOffset!==S.offset)){var E=O.createRange();E.setStart(z.node,z.offset),k.removeAllRanges(),te>Ee?(k.addRange(E),k.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),k.addRange(E))}}}}for(O=[],k=g;k=k.parentNode;)k.nodeType===1&&O.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<O.length;g++){var D=O[g];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}xs=!!su,ou=su=null}finally{je=l,K.p=i,M.T=n}}e.current=t,et=2}}function eg(){if(et===2){et=0;var e=ii,t=ya,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var i=K.p;K.p=2;var l=je;je|=4;try{Cm(e,t.alternate,t)}finally{je=l,K.p=i,M.T=n}}et=3}}function tg(){if(et===4||et===3){et=0,qx();var e=ii,t=ya,n=va,i=Ym;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,ya=ii=null,ng(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ni=null),mo(n),t=t.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Fa,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=M.T,l=K.p,K.p=2,M.T=null;try{for(var o=e.onRecoverableError,f=0;f<i.length;f++){var g=i[f];o(g.value,{componentStack:g.stack})}}finally{M.T=t,K.p=l}}(va&3)!==0&&rs(),un(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Xc?Nr++:(Nr=0,Xc=e):Nr=0,Hr(0)}}function ng(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pr(t)))}function rs(e){return Im(),eg(),tg(),ig()}function ig(){if(et!==5)return!1;var e=ii,t=Kc;Kc=0;var n=mo(va),i=M.T,l=K.p;try{K.p=32>n?32:n,M.T=null,n=Zc,Zc=null;var o=ii,f=va;if(et=0,ya=ii=null,va=0,(je&6)!==0)throw Error(c(331));var g=je;if(je|=4,Gm(o.current),Hm(o,o.current,f,n),je=g,Hr(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Fa,o)}catch{}return!0}finally{K.p=l,M.T=i,ng(e,t)}}function ag(e,t,n){t=Ht(n,t),t=Ec(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(er(e,2),un(e))}function _e(e,t,n){if(e.tag===3)ag(e,e,n);else for(;t!==null;){if(t.tag===3){ag(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ni===null||!ni.has(i))){e=Ht(n,e),n=om(2),i=Xn(t,n,2),i!==null&&(cm(n,i,t,e),er(i,2),un(i));break}}t=t.return}}function Wc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new x1;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Vc=!0,l.add(n),e=S1.bind(null,e,t,n),t.then(e,e))}function S1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(me&n)===n&&(Oe===4||Oe===3&&(me&62914560)===me&&300>rn()-qc?(je&2)===0&&ja(e,0):Yc|=n,ba===me&&(ba=0)),un(e)}function rg(e,t){t===0&&(t=ef()),e=ia(e,t),e!==null&&(er(e,t),un(e))}function w1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rg(e,n)}function z1(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),rg(e,n)}function E1(e,t){return co(e,t)}var ls=null,wa=null,Fc=!1,ss=!1,Ic=!1,Oi=0;function un(e){e!==wa&&e.next===null&&(wa===null?ls=wa=e:wa=wa.next=e),ss=!0,Fc||(Fc=!0,T1())}function Hr(e,t){if(!Ic&&ss){Ic=!0;do for(var n=!1,i=ls;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var f=i.suspendedLanes,g=i.pingedLanes;o=(1<<31-St(42|e)+1)-1,o&=l&~(f&~g),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,cg(i,o))}else o=me,o=hl(i,i===Te?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Ia(i,o)||(n=!0,cg(i,o));i=i.next}while(n);Ic=!1}}function _1(){lg()}function lg(){ss=Fc=!1;var e=0;Oi!==0&&(O1()&&(e=Oi),Oi=0);for(var t=rn(),n=null,i=ls;i!==null;){var l=i.next,o=sg(i,t);o===0?(i.next=null,n===null?ls=l:n.next=l,l===null&&(wa=n)):(n=i,(e!==0||(o&3)!==0)&&(ss=!0)),i=l}Hr(e)}function sg(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-St(o),g=1<<f,v=l[f];v===-1?((g&n)===0||(g&i)!==0)&&(l[f]=Fx(g,t)):v<=t&&(e.expiredLanes|=g),o&=~g}if(t=Te,n=me,n=hl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&uo(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ia(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&uo(i),mo(n)){case 2:case 8:n=Wd;break;case 32:n=ul;break;case 268435456:n=Fd;break;default:n=ul}return i=og.bind(null,e),n=co(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&uo(i),e.callbackPriority=2,e.callbackNode=null,2}function og(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(rs()&&e.callbackNode!==n)return null;var i=me;return i=hl(e,e===Te?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(qm(e,i,t),sg(e,rn()),e.callbackNode!=null&&e.callbackNode===n?og.bind(null,e):null)}function cg(e,t){if(rs())return null;qm(e,t,!0)}function T1(){H1(function(){(je&6)!==0?co(Jd,_1):lg()})}function eu(){return Oi===0&&(Oi=Id()),Oi}function ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bl(""+e)}function dg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function k1(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var o=ug((l[dt]||null).action),f=i.submitter;f&&(t=(t=f[dt]||null)?ug(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var g=new Sl("action","action",null,i,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Oi!==0){var v=f?dg(l,f):new FormData(l);vc(n,{pending:!0,data:v,method:l.method,action:o},null,v)}}else typeof o=="function"&&(g.preventDefault(),v=f?dg(l,f):new FormData(l),vc(n,{pending:!0,data:v,method:l.method,action:o},o,v))},currentTarget:l}]})}}for(var tu=0;tu<Uo.length;tu++){var nu=Uo[tu],A1=nu.toLowerCase(),R1=nu[0].toUpperCase()+nu.slice(1);Wt(A1,"on"+R1)}Wt(qf,"onAnimationEnd"),Wt(Kf,"onAnimationIteration"),Wt(Zf,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(Xb,"onTransitionRun"),Wt(Qb,"onTransitionStart"),Wt(Pb,"onTransitionCancel"),Wt(Xf,"onTransitionEnd"),Xi("onMouseEnter",["mouseout","mouseover"]),Xi("onMouseLeave",["mouseout","mouseover"]),Xi("onPointerEnter",["pointerout","pointerover"]),Xi("onPointerLeave",["pointerout","pointerover"]),yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lr));function fg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var f=i.length-1;0<=f;f--){var g=i[f],v=g.instance,_=g.currentTarget;if(g=g.listener,v!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=_;try{o(l)}catch(B){Ql(B)}l.currentTarget=null,o=v}else for(f=0;f<i.length;f++){if(g=i[f],v=g.instance,_=g.currentTarget,g=g.listener,v!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=_;try{o(l)}catch(B){Ql(B)}l.currentTarget=null,o=v}}}}function he(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var i=e+"__bubble";n.has(i)||(hg(t,e,2,!1),n.add(i))}function iu(e,t,n){var i=0;t&&(i|=4),hg(n,e,i,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[os]){e[os]=!0,lf.forEach(function(n){n!=="selectionchange"&&(C1.has(n)||iu(n,!1,e),iu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,iu("selectionchange",!1,t))}}function hg(e,t,n,i){switch(Hg(t)){case 2:var l=ay;break;case 8:l=ry;break;default:l=bu}n=l.bind(null,t,n,e),l=void 0,!_o||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ru(e,t,n,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var g=i.stateNode.containerInfo;if(g===l)break;if(f===4)for(f=i.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;g!==null;){if(f=qi(g),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){i=o=f;continue e}g=g.parentNode}}i=i.return}vf(function(){var _=o,B=zo(n),O=[];e:{var T=Qf.get(e);if(T!==void 0){var k=Sl,re=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":k=Eb;break;case"focusin":re="focus",k=Ro;break;case"focusout":re="blur",k=Ro;break;case"beforeblur":case"afterblur":k=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=hb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=kb;break;case qf:case Kf:case Zf:k=pb;break;case Xf:k=Rb;break;case"scroll":case"scrollend":k=db;break;case"wheel":k=Mb;break;case"copy":case"cut":case"paste":k=bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ef;break;case"toggle":case"beforetoggle":k=Db}var te=(t&4)!==0,Ee=!te&&(e==="scroll"||e==="scrollend"),z=te?T!==null?T+"Capture":null:T;te=[];for(var S=_,E;S!==null;){var D=S;if(E=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||E===null||z===null||(D=ir(S,z),D!=null&&te.push(Ur(S,D,E))),Ee)break;S=S.return}0<te.length&&(T=new k(T,re,null,n,B),O.push({event:T,listeners:te}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",T&&n!==wo&&(re=n.relatedTarget||n.fromElement)&&(qi(re)||re[$i]))break e;if((k||T)&&(T=B.window===B?B:(T=B.ownerDocument)?T.defaultView||T.parentWindow:window,k?(re=n.relatedTarget||n.toElement,k=_,re=re?qi(re):null,re!==null&&(Ee=m(re),te=re.tag,re!==Ee||te!==5&&te!==27&&te!==6)&&(re=null)):(k=null,re=_),k!==re)){if(te=wf,D="onMouseLeave",z="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ef,D="onPointerLeave",z="onPointerEnter",S="pointer"),Ee=k==null?T:nr(k),E=re==null?T:nr(re),T=new te(D,S+"leave",k,n,B),T.target=Ee,T.relatedTarget=E,D=null,qi(B)===_&&(te=new te(z,S+"enter",re,n,B),te.target=E,te.relatedTarget=Ee,D=te),Ee=D,k&&re)t:{for(te=k,z=re,S=0,E=te;E;E=za(E))S++;for(E=0,D=z;D;D=za(D))E++;for(;0<S-E;)te=za(te),S--;for(;0<E-S;)z=za(z),E--;for(;S--;){if(te===z||z!==null&&te===z.alternate)break t;te=za(te),z=za(z)}te=null}else te=null;k!==null&&mg(O,T,k,te,!1),re!==null&&Ee!==null&&mg(O,Ee,re,te,!0)}}e:{if(T=_?nr(_):window,k=T.nodeName&&T.nodeName.toLowerCase(),k==="select"||k==="input"&&T.type==="file")var J=Bf;else if(Cf(T))if(Df)J=qb;else{J=Yb;var ce=Vb}else k=T.nodeName,!k||k.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?_&&So(_.elementType)&&(J=Bf):J=$b;if(J&&(J=J(e,_))){Mf(O,J,n,B);break e}ce&&ce(e,T,_),e==="focusout"&&_&&T.type==="number"&&_.memoizedProps.value!=null&&jo(T,"number",T.value)}switch(ce=_?nr(_):window,e){case"focusin":(Cf(ce)||ce.contentEditable==="true")&&(ea=ce,No=_,dr=null);break;case"focusout":dr=No=ea=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,Yf(O,n,B);break;case"selectionchange":if(Zb)break;case"keydown":case"keyup":Yf(O,n,B)}var F;if(Mo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Ii?Af(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(_f&&n.locale!=="ko"&&(Ii||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Ii&&(F=jf()):($n=B,To="value"in $n?$n.value:$n.textContent,Ii=!0)),ce=cs(_,ae),0<ce.length&&(ae=new zf(ae,e,null,n,B),O.push({event:ae,listeners:ce}),F?ae.data=F:(F=Rf(n),F!==null&&(ae.data=F)))),(F=Nb?Hb(e,n):Lb(e,n))&&(ae=cs(_,"onBeforeInput"),0<ae.length&&(ce=new zf("onBeforeInput","beforeinput",null,n,B),O.push({event:ce,listeners:ae}),ce.data=F)),k1(O,e,_,n,B)}fg(O,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=ir(e,n),l!=null&&i.unshift(Ur(e,l,o)),l=ir(e,t),l!=null&&i.push(Ur(e,l,o))),e.tag===3)return i;e=e.return}return[]}function za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mg(e,t,n,i,l){for(var o=t._reactName,f=[];n!==null&&n!==i;){var g=n,v=g.alternate,_=g.stateNode;if(g=g.tag,v!==null&&v===i)break;g!==5&&g!==26&&g!==27||_===null||(v=_,l?(_=ir(n,o),_!=null&&f.unshift(Ur(n,_,v))):l||(_=ir(n,o),_!=null&&f.push(Ur(n,_,v)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var M1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(M1,`
`).replace(B1,"")}function pg(e,t){return t=gg(t),gg(e)===t}function us(){}function ze(e,t,n,i,l,o){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ji(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ji(e,""+i);break;case"className":gl(e,"class",i);break;case"tabIndex":gl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(e,n,i);break;case"style":bf(e,i,o);break;case"data":if(t!=="object"){gl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=bl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",l.name,l,null),ze(e,t,"formEncType",l.formEncType,l,null),ze(e,t,"formMethod",l.formMethod,l,null),ze(e,t,"formTarget",l.formTarget,l,null)):(ze(e,t,"encType",l.encType,l,null),ze(e,t,"method",l.method,l,null),ze(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=bl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=us);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=bl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":he("beforetoggle",e),he("toggle",e),ml(e,"popover",i);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ml(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=cb.get(n)||n,ml(e,n,i))}}function lu(e,t,n,i,l,o){switch(n){case"style":bf(e,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ji(e,i):(typeof i=="number"||typeof i=="bigint")&&Ji(e,""+i);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"onClick":i!=null&&(e.onclick=us);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[dt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ml(e,n,i)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var i=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var f=n[o];if(f!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,o,f,n,null)}}l&&ze(e,t,"srcSet",n.srcSet,n,null),i&&ze(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var g=o=f=l=null,v=null,_=null;for(i in n)if(n.hasOwnProperty(i)){var B=n[i];if(B!=null)switch(i){case"name":l=B;break;case"type":f=B;break;case"checked":v=B;break;case"defaultChecked":_=B;break;case"value":o=B;break;case"defaultValue":g=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:ze(e,t,i,B,n,null)}}mf(e,o,g,v,_,f,l,!1),pl(e);return;case"select":he("invalid",e),i=f=o=null;for(l in n)if(n.hasOwnProperty(l)&&(g=n[l],g!=null))switch(l){case"value":o=g;break;case"defaultValue":f=g;break;case"multiple":i=g;default:ze(e,t,l,g,n,null)}t=o,n=f,e.multiple=!!i,t!=null?Pi(e,!!i,t,!1):n!=null&&Pi(e,!!i,n,!0);return;case"textarea":he("invalid",e),o=l=i=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":i=g;break;case"defaultValue":l=g;break;case"children":o=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:ze(e,t,f,g,n,null)}pf(e,i,l,o),pl(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(i=n[v],i!=null))switch(v){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ze(e,t,v,i,n,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(i=0;i<Lr.length;i++)he(Lr[i],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(i=n[_],i!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,_,i,n,null)}return;default:if(So(t)){for(B in n)n.hasOwnProperty(B)&&(i=n[B],i!==void 0&&lu(e,t,B,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&ze(e,t,g,i,n,null))}function D1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,f=null,g=null,v=null,_=null,B=null;for(k in n){var O=n[k];if(n.hasOwnProperty(k)&&O!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":v=O;default:i.hasOwnProperty(k)||ze(e,t,k,null,i,O)}}for(var T in i){var k=i[T];if(O=n[T],i.hasOwnProperty(T)&&(k!=null||O!=null))switch(T){case"type":o=k;break;case"name":l=k;break;case"checked":_=k;break;case"defaultChecked":B=k;break;case"value":f=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:k!==O&&ze(e,t,T,k,i,O)}}vo(e,f,g,v,_,B,o,l);return;case"select":k=f=g=T=null;for(o in n)if(v=n[o],n.hasOwnProperty(o)&&v!=null)switch(o){case"value":break;case"multiple":k=v;default:i.hasOwnProperty(o)||ze(e,t,o,null,i,v)}for(l in i)if(o=i[l],v=n[l],i.hasOwnProperty(l)&&(o!=null||v!=null))switch(l){case"value":T=o;break;case"defaultValue":g=o;break;case"multiple":f=o;default:o!==v&&ze(e,t,l,o,i,v)}t=g,n=f,i=k,T!=null?Pi(e,!!n,T,!1):!!i!=!!n&&(t!=null?Pi(e,!!n,t,!0):Pi(e,!!n,n?[]:"",!1));return;case"textarea":k=T=null;for(g in n)if(l=n[g],n.hasOwnProperty(g)&&l!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ze(e,t,g,null,i,l)}for(f in i)if(l=i[f],o=n[f],i.hasOwnProperty(f)&&(l!=null||o!=null))switch(f){case"value":T=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&ze(e,t,f,l,i,o)}gf(e,T,k);return;case"option":for(var re in n)if(T=n[re],n.hasOwnProperty(re)&&T!=null&&!i.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:ze(e,t,re,null,i,T)}for(v in i)if(T=i[v],k=n[v],i.hasOwnProperty(v)&&T!==k&&(T!=null||k!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:ze(e,t,v,T,i,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in n)T=n[te],n.hasOwnProperty(te)&&T!=null&&!i.hasOwnProperty(te)&&ze(e,t,te,null,i,T);for(_ in i)if(T=i[_],k=n[_],i.hasOwnProperty(_)&&T!==k&&(T!=null||k!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:ze(e,t,_,T,i,k)}return;default:if(So(t)){for(var Ee in n)T=n[Ee],n.hasOwnProperty(Ee)&&T!==void 0&&!i.hasOwnProperty(Ee)&&lu(e,t,Ee,void 0,i,T);for(B in i)T=i[B],k=n[B],!i.hasOwnProperty(B)||T===k||T===void 0&&k===void 0||lu(e,t,B,T,i,k);return}}for(var z in n)T=n[z],n.hasOwnProperty(z)&&T!=null&&!i.hasOwnProperty(z)&&ze(e,t,z,null,i,T);for(O in i)T=i[O],k=n[O],!i.hasOwnProperty(O)||T===k||T==null&&k==null||ze(e,t,O,T,i,k)}var su=null,ou=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=null;function O1(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(e){return vg.resolve(null).then(e).catch(L1)}:yg;function L1(e){setTimeout(function(){throw e})}function ri(e){return e==="head"}function jg(e,t){var n=t,i=0,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<i&&8>i){n=i;var f=e.ownerDocument;if(n&1&&Gr(f.documentElement),n&2&&Gr(f.body),n&4)for(n=f.head,Gr(n),f=n.firstChild;f;){var g=f.nextSibling,v=f.nodeName;f[tr]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=g}}if(l===0){e.removeChild(o),Qr(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=o}while(n);Qr(t)}function du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":du(n),po(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function U1(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[tr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function G1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=It(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function V1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var hu=null;function Sg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function wg(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Gr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);po(e)}var $t=new Map,zg=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=K.d;K.d={f:Y1,r:$1,D:q1,C:K1,L:Z1,m:X1,X:P1,S:Q1,M:J1};function Y1(){var e=Mn.f(),t=is();return e||t}function $1(e){var t=Ki(e);t!==null&&t.tag===5&&t.type==="form"?qh(t):Mn.r(e)}var Ea=typeof document>"u"?null:document;function Eg(e,t,n){var i=Ea;if(i&&typeof t=="string"&&t){var l=Nt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),zg.has(l)||(zg.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),tt(t,"link",e),Ze(t),i.head.appendChild(t)))}}function q1(e){Mn.D(e),Eg("dns-prefetch",e,null)}function K1(e,t){Mn.C(e,t),Eg("preconnect",e,t)}function Z1(e,t,n){Mn.L(e,t,n);var i=Ea;if(i&&e&&t){var l='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Nt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Nt(n.imageSizes)+'"]')):l+='[href="'+Nt(e)+'"]';var o=l;switch(t){case"style":o=_a(e);break;case"script":o=Ta(e)}$t.has(o)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$t.set(o,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Vr(o))||t==="script"&&i.querySelector(Yr(o))||(t=i.createElement("link"),tt(t,"link",e),Ze(t),i.head.appendChild(t)))}}function X1(e,t){Mn.m(e,t);var n=Ea;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Nt(i)+'"][href="'+Nt(e)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ta(e)}if(!$t.has(o)&&(e=w({rel:"modulepreload",href:e},t),$t.set(o,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yr(o)))return}i=n.createElement("link"),tt(i,"link",e),Ze(i),n.head.appendChild(i)}}}function Q1(e,t,n){Mn.S(e,t,n);var i=Ea;if(i&&e){var l=Zi(i).hoistableStyles,o=_a(e);t=t||"default";var f=l.get(o);if(!f){var g={loading:0,preload:null};if(f=i.querySelector(Vr(o)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$t.get(o))&&mu(e,n);var v=f=i.createElement("link");Ze(v),tt(v,"link",e),v._p=new Promise(function(_,B){v.onload=_,v.onerror=B}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,hs(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:g},l.set(o,f)}}}function P1(e,t){Mn.X(e,t);var n=Ea;if(n&&e){var i=Zi(n).hoistableScripts,l=Ta(e),o=i.get(l);o||(o=n.querySelector(Yr(l)),o||(e=w({src:e,async:!0},t),(t=$t.get(l))&&gu(e,t),o=n.createElement("script"),Ze(o),tt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function J1(e,t){Mn.M(e,t);var n=Ea;if(n&&e){var i=Zi(n).hoistableScripts,l=Ta(e),o=i.get(l);o||(o=n.querySelector(Yr(l)),o||(e=w({src:e,async:!0,type:"module"},t),(t=$t.get(l))&&gu(e,t),o=n.createElement("script"),Ze(o),tt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function _g(e,t,n,i){var l=(l=ie.current)?fs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=_a(n.href),n=Zi(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=_a(n.href);var o=Zi(l).hoistableStyles,f=o.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=l.querySelector(Vr(e)))&&!o._p&&(f.instance=o,f.state.loading=5),$t.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$t.set(e,n),o||W1(l,e,n,f.state))),t&&i===null)throw Error(c(528,""));return f}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(n),n=Zi(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _a(e){return'href="'+Nt(e)+'"'}function Vr(e){return'link[rel="stylesheet"]['+e+"]"}function Tg(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function W1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),tt(t,"link",n),Ze(t),e.head.appendChild(t))}function Ta(e){return'[src="'+Nt(e)+'"]'}function Yr(e){return"script[async]"+e}function kg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Nt(n.href)+'"]');if(i)return t.instance=i,Ze(i),i;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ze(i),tt(i,"style",l),hs(i,n.precedence,e),t.instance=i;case"stylesheet":l=_a(n.href);var o=e.querySelector(Vr(l));if(o)return t.state.loading|=4,t.instance=o,Ze(o),o;i=Tg(n),(l=$t.get(l))&&mu(i,l),o=(e.ownerDocument||e).createElement("link"),Ze(o);var f=o;return f._p=new Promise(function(g,v){f.onload=g,f.onerror=v}),tt(o,"link",i),t.state.loading|=4,hs(o,n.precedence,e),t.instance=o;case"script":return o=Ta(n.src),(l=e.querySelector(Yr(o)))?(t.instance=l,Ze(l),l):(i=n,(l=$t.get(o))&&(i=w({},n),gu(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),tt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,hs(i,n.precedence,e));return t.instance}function hs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,f=0;f<i.length;f++){var g=i[f];if(g.dataset.precedence===t)o=g;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ms=null;function Ag(e,t,n){if(ms===null){var i=new Map,l=ms=new Map;l.set(n,i)}else l=ms,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[tr]||o[it]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var g=i.get(f);g?g.push(o):i.set(f,[o])}}return i}function Rg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function F1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $r=null;function I1(){}function ey(e,t,n){if($r===null)throw Error(c(475));var i=$r;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=_a(n.href),o=e.querySelector(Vr(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=gs.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=o,Ze(o);return}o=e.ownerDocument||e,n=Tg(n),(l=$t.get(l))&&mu(n,l),o=o.createElement("link"),Ze(o);var f=o;f._p=new Promise(function(g,v){f.onload=g,f.onerror=v}),tt(o,"link",n),t.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=gs.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function ty(){if($r===null)throw Error(c(475));var e=$r;return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function pu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,t.forEach(ny,e),ps=null,gs.call(e))}function ny(e,t){if(!(t.state.loading&4)){var n=ps.get(e);if(n)var i=n.get(null);else{n=new Map,ps.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var f=l[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}l=t.instance,f=l.getAttribute("data-precedence"),o=n.get(f)||i,o===i&&n.set(null,l),n.set(f,l),this.count++,i=gs.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var qr={$$typeof:G,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function iy(e,t,n,i,l,o,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Mg(e,t,n,i,l,o,f,g,v,_,B,O){return e=new iy(e,t,n,f,g,v,_,O),t=1,o===!0&&(t|=24),o=zt(3,null,null,t),e.current=o,o.stateNode=e,t=Wo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:t},tc(o),e}function Bg(e){return e?(e=aa,e):aa}function Dg(e,t,n,i,l,o){l=Bg(l),i.context===null?i.context=l:i.pendingContext=l,i=Zn(t),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=Xn(e,i,t),n!==null&&(At(n,e,t),vr(n,e,t))}function Og(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xu(e,t){Og(e,t),(e=e.alternate)&&Og(e,t)}function Ng(e){if(e.tag===13){var t=ia(e,67108864);t!==null&&At(t,e,67108864),xu(e,67108864)}}var xs=!0;function ay(e,t,n,i){var l=M.T;M.T=null;var o=K.p;try{K.p=2,bu(e,t,n,i)}finally{K.p=o,M.T=l}}function ry(e,t,n,i){var l=M.T;M.T=null;var o=K.p;try{K.p=8,bu(e,t,n,i)}finally{K.p=o,M.T=l}}function bu(e,t,n,i){if(xs){var l=yu(i);if(l===null)ru(e,t,i,bs,n),Lg(e,i);else if(sy(l,e,t,n,i))i.stopPropagation();else if(Lg(e,i),t&4&&-1<ly.indexOf(e)){for(;l!==null;){var o=Ki(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=bi(o.pendingLanes);if(f!==0){var g=o;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var v=1<<31-St(f);g.entanglements[1]|=v,f&=~v}un(o),(je&6)===0&&(ts=rn()+500,Hr(0))}}break;case 13:g=ia(o,2),g!==null&&At(g,o,2),is(),xu(o,2)}if(o=yu(i),o===null&&ru(e,t,i,bs,n),o===l)break;l=o}l!==null&&i.stopPropagation()}else ru(e,t,i,null,n)}}function yu(e){return e=zo(e),vu(e)}var bs=null;function vu(e){if(bs=null,e=qi(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bs=e,null}function Hg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kx()){case Jd:return 2;case Wd:return 8;case ul:case Zx:return 32;case Fd:return 268435456;default:return 32}default:return 32}}var ju=!1,li=null,si=null,oi=null,Kr=new Map,Zr=new Map,ci=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(e,t){switch(e){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":oi=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Xr(e,t,n,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ki(t),t!==null&&Ng(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sy(e,t,n,i,l){switch(t){case"focusin":return li=Xr(li,e,t,n,i,l),!0;case"dragenter":return si=Xr(si,e,t,n,i,l),!0;case"mouseover":return oi=Xr(oi,e,t,n,i,l),!0;case"pointerover":var o=l.pointerId;return Kr.set(o,Xr(Kr.get(o)||null,e,t,n,i,l)),!0;case"gotpointercapture":return o=l.pointerId,Zr.set(o,Xr(Zr.get(o)||null,e,t,n,i,l)),!0}return!1}function Ug(e){var t=qi(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,eb(e.priority,function(){if(n.tag===13){var i=kt();i=ho(i);var l=ia(n,i);l!==null&&At(l,n,i),xu(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);wo=i,n.target.dispatchEvent(i),wo=null}else return t=Ki(n),t!==null&&Ng(t),e.blockedOn=n,!1;t.shift()}return!0}function Gg(e,t,n){ys(e)&&n.delete(t)}function oy(){ju=!1,li!==null&&ys(li)&&(li=null),si!==null&&ys(si)&&(si=null),oi!==null&&ys(oi)&&(oi=null),Kr.forEach(Gg),Zr.forEach(Gg)}function vs(e,t){e.blockedOn===t&&(e.blockedOn=null,ju||(ju=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,oy)))}var js=null;function Vg(e){js!==e&&(js=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){js===e&&(js=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(vu(i||n)===null)continue;break}var o=Ki(n);o!==null&&(e.splice(t,3),t-=3,vc(o,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Qr(e){function t(v){return vs(v,e)}li!==null&&vs(li,e),si!==null&&vs(si,e),oi!==null&&vs(oi,e),Kr.forEach(t),Zr.forEach(t);for(var n=0;n<ci.length;n++){var i=ci[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)Ug(n),n.blockedOn===null&&ci.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],o=n[i+1],f=l[dt]||null;if(typeof o=="function")f||Vg(n);else if(f){var g=null;if(o&&o.hasAttribute("formAction")){if(l=o,f=o[dt]||null)g=f.formAction;else if(vu(l)!==null)continue}else g=f.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),Vg(n)}}}function Su(e){this._internalRoot=e}Ss.prototype.render=Su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,i=kt();Dg(n,i,e,t,null,null)},Ss.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dg(e.current,2,null,e,null,null),is(),t[$i]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=af();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ci.length&&t!==0&&t<ci[n].priority;n++);ci.splice(n,0,e),n===0&&Ug(e)}};var Yg=s.version;if(Yg!=="19.1.0")throw Error(c(527,Yg,"19.1.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Fa=ws.inject(cy),jt=ws}catch{}}return Jr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,i="",l=am,o=rm,f=lm,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=Mg(e,1,!1,null,null,n,i,l,o,f,g,null),e[$i]=t.current,au(e),new Su(t)},Jr.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var i=!1,l="",o=am,f=rm,g=lm,v=null,_=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(_=n.formState)),t=Mg(e,1,!0,t,n??null,i,l,o,f,g,v,_),t.context=Bg(null),n=t.current,i=kt(),i=ho(i),l=Zn(i),l.callback=null,Xn(n,l,i),n=i,t.current.lanes=n,er(t,n),un(t),e[$i]=t.current,au(e),new Ss(t)},Jr.version="19.1.0",Jr}var Fg;function vy(){if(Fg)return Eu.exports;Fg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Eu.exports=yy(),Eu.exports}var jy=vy(),Fe=function(){return Fe=Object.assign||function(s){for(var u,c=1,d=arguments.length;c<d;c++){u=arguments[c];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(s[m]=u[m])}return s},Fe.apply(this,arguments)};function al(a,s,u){if(u||arguments.length===2)for(var c=0,d=s.length,m;c<d;c++)(m||!(c in s))&&(m||(m=Array.prototype.slice.call(s,0,c)),m[c]=s[c]);return a.concat(m||Array.prototype.slice.call(s))}var ke="-ms-",il="-moz-",ye="-webkit-",$0="comm",Is="rule",Cd="decl",Sy="@import",q0="@keyframes",wy="@layer",K0=Math.abs,Md=String.fromCharCode,xd=Object.assign;function zy(a,s){return We(a,0)^45?(((s<<2^We(a,0))<<2^We(a,1))<<2^We(a,2))<<2^We(a,3):0}function Z0(a){return a.trim()}function Nn(a,s){return(a=s.exec(a))?a[0]:a}function se(a,s,u){return a.replace(s,u)}function Hs(a,s,u){return a.indexOf(s,u)}function We(a,s){return a.charCodeAt(s)|0}function qa(a,s,u){return a.slice(s,u)}function fn(a){return a.length}function X0(a){return a.length}function tl(a,s){return s.push(a),a}function Ey(a,s){return a.map(s).join("")}function Ig(a,s){return a.filter(function(u){return!Nn(u,s)})}var eo=1,Ka=1,Q0=0,qt=0,Ge=0,Qa="";function to(a,s,u,c,d,m,p,y){return{value:a,root:s,parent:u,type:c,props:d,children:m,line:eo,column:Ka,length:p,return:"",siblings:y}}function hi(a,s){return xd(to("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function ka(a){for(;a.root;)a=hi(a.root,{children:[a]});tl(a,a.siblings)}function _y(){return Ge}function Ty(){return Ge=qt>0?We(Qa,--qt):0,Ka--,Ge===10&&(Ka=1,eo--),Ge}function tn(){return Ge=qt<Q0?We(Qa,qt++):0,Ka++,Ge===10&&(Ka=1,eo++),Ge}function Ui(){return We(Qa,qt)}function Ls(){return qt}function no(a,s){return qa(Qa,a,s)}function bd(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ky(a){return eo=Ka=1,Q0=fn(Qa=a),qt=0,[]}function Ay(a){return Qa="",a}function Au(a){return Z0(no(qt-1,yd(a===91?a+2:a===40?a+1:a)))}function Ry(a){for(;(Ge=Ui())&&Ge<33;)tn();return bd(a)>2||bd(Ge)>3?"":" "}function Cy(a,s){for(;--s&&tn()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return no(a,Ls()+(s<6&&Ui()==32&&tn()==32))}function yd(a){for(;tn();)switch(Ge){case a:return qt;case 34:case 39:a!==34&&a!==39&&yd(Ge);break;case 40:a===41&&yd(a);break;case 92:tn();break}return qt}function My(a,s){for(;tn()&&a+Ge!==57;)if(a+Ge===84&&Ui()===47)break;return"/*"+no(s,qt-1)+"*"+Md(a===47?a:tn())}function By(a){for(;!bd(Ui());)tn();return no(a,qt)}function Dy(a){return Ay(Us("",null,null,null,[""],a=ky(a),0,[0],a))}function Us(a,s,u,c,d,m,p,y,b){for(var x=0,w=0,R=p,C=0,V=0,Y=0,$=1,Q=1,U=1,L=0,G="",P=d,X=m,ne=c,H=G;Q;)switch(Y=L,L=tn()){case 40:if(Y!=108&&We(H,R-1)==58){Hs(H+=se(Au(L),"&","&\f"),"&\f",K0(x?y[x-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:H+=Au(L);break;case 9:case 10:case 13:case 32:H+=Ry(Y);break;case 92:H+=Cy(Ls()-1,7);continue;case 47:switch(Ui()){case 42:case 47:tl(Oy(My(tn(),Ls()),s,u,b),b);break;default:H+="/"}break;case 123*$:y[x++]=fn(H)*U;case 125*$:case 59:case 0:switch(L){case 0:case 125:Q=0;case 59+w:U==-1&&(H=se(H,/\f/g,"")),V>0&&fn(H)-R&&tl(V>32?t0(H+";",c,u,R-1,b):t0(se(H," ","")+";",c,u,R-2,b),b);break;case 59:H+=";";default:if(tl(ne=e0(H,s,u,x,w,d,y,G,P=[],X=[],R,m),m),L===123)if(w===0)Us(H,s,ne,ne,P,m,R,y,X);else switch(C===99&&We(H,3)===110?100:C){case 100:case 108:case 109:case 115:Us(a,ne,ne,c&&tl(e0(a,ne,ne,0,0,d,y,G,d,P=[],R,X),X),d,X,R,y,c?P:X);break;default:Us(H,ne,ne,ne,[""],X,0,y,X)}}x=w=V=0,$=U=1,G=H="",R=p;break;case 58:R=1+fn(H),V=Y;default:if($<1){if(L==123)--$;else if(L==125&&$++==0&&Ty()==125)continue}switch(H+=Md(L),L*$){case 38:U=w>0?1:(H+="\f",-1);break;case 44:y[x++]=(fn(H)-1)*U,U=1;break;case 64:Ui()===45&&(H+=Au(tn())),C=Ui(),w=R=fn(G=H+=By(Ls())),L++;break;case 45:Y===45&&fn(H)==2&&($=0)}}return m}function e0(a,s,u,c,d,m,p,y,b,x,w,R){for(var C=d-1,V=d===0?m:[""],Y=X0(V),$=0,Q=0,U=0;$<c;++$)for(var L=0,G=qa(a,C+1,C=K0(Q=p[$])),P=a;L<Y;++L)(P=Z0(Q>0?V[L]+" "+G:se(G,/&\f/g,V[L])))&&(b[U++]=P);return to(a,s,u,d===0?Is:y,b,x,w,R)}function Oy(a,s,u,c){return to(a,s,u,$0,Md(_y()),qa(a,2,-2),0,c)}function t0(a,s,u,c,d){return to(a,s,u,Cd,qa(a,0,c),qa(a,c+1,-1),c,d)}function P0(a,s,u){switch(zy(a,s)){case 5103:return ye+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+a+a;case 4789:return il+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+a+il+a+ke+a+a;case 5936:switch(We(a,s+11)){case 114:return ye+a+ke+se(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ye+a+ke+se(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ye+a+ke+se(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ye+a+ke+a+a;case 6165:return ye+a+ke+"flex-"+a+a;case 5187:return ye+a+se(a,/(\w+).+(:[^]+)/,ye+"box-$1$2"+ke+"flex-$1$2")+a;case 5443:return ye+a+ke+"flex-item-"+se(a,/flex-|-self/g,"")+(Nn(a,/flex-|baseline/)?"":ke+"grid-row-"+se(a,/flex-|-self/g,""))+a;case 4675:return ye+a+ke+"flex-line-pack"+se(a,/align-content|flex-|-self/g,"")+a;case 5548:return ye+a+ke+se(a,"shrink","negative")+a;case 5292:return ye+a+ke+se(a,"basis","preferred-size")+a;case 6060:return ye+"box-"+se(a,"-grow","")+ye+a+ke+se(a,"grow","positive")+a;case 4554:return ye+se(a,/([^-])(transform)/g,"$1"+ye+"$2")+a;case 6187:return se(se(se(a,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),a,"")+a;case 5495:case 3959:return se(a,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return se(se(a,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+a+a;case 4200:if(!Nn(a,/flex-|baseline/))return ke+"grid-column-align"+qa(a,s)+a;break;case 2592:case 3360:return ke+se(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,d){return s=d,Nn(c.props,/grid-\w+-end/)})?~Hs(a+(u=u[s].value),"span",0)?a:ke+se(a,"-start","")+a+ke+"grid-row-span:"+(~Hs(u,"span",0)?Nn(u,/\d+/):+Nn(u,/\d+/)-+Nn(a,/\d+/))+";":ke+se(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return Nn(c.props,/grid-\w+-start/)})?a:ke+se(se(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return se(a,/(.+)-inline(.+)/,ye+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(a)-1-s>6)switch(We(a,s+1)){case 109:if(We(a,s+4)!==45)break;case 102:return se(a,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+il+(We(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~Hs(a,"stretch",0)?P0(se(a,"stretch","fill-available"),s,u)+a:a}break;case 5152:case 5920:return se(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,m,p,y,b,x){return ke+d+":"+m+x+(p?ke+d+"-span:"+(y?b:+b-+m)+x:"")+a});case 4949:if(We(a,s+6)===121)return se(a,":",":"+ye)+a;break;case 6444:switch(We(a,We(a,14)===45?18:11)){case 120:return se(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(We(a,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+ke+"$2box$3")+a;case 100:return se(a,":",":"+ke)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(a,"scroll-","scroll-snap-")+a}return a}function Ks(a,s){for(var u="",c=0;c<a.length;c++)u+=s(a[c],c,a,s)||"";return u}function Ny(a,s,u,c){switch(a.type){case wy:if(a.children.length)break;case Sy:case Cd:return a.return=a.return||a.value;case $0:return"";case q0:return a.return=a.value+"{"+Ks(a.children,c)+"}";case Is:if(!fn(a.value=a.props.join(",")))return""}return fn(u=Ks(a.children,c))?a.return=a.value+"{"+u+"}":""}function Hy(a){var s=X0(a);return function(u,c,d,m){for(var p="",y=0;y<s;y++)p+=a[y](u,c,d,m)||"";return p}}function Ly(a){return function(s){s.root||(s=s.return)&&a(s)}}function Uy(a,s,u,c){if(a.length>-1&&!a.return)switch(a.type){case Cd:a.return=P0(a.value,a.length,u);return;case q0:return Ks([hi(a,{value:se(a.value,"@","@"+ye)})],c);case Is:if(a.length)return Ey(u=a.props,function(d){switch(Nn(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ka(hi(a,{props:[se(d,/:(read-\w+)/,":"+il+"$1")]})),ka(hi(a,{props:[d]})),xd(a,{props:Ig(u,c)});break;case"::placeholder":ka(hi(a,{props:[se(d,/:(plac\w+)/,":"+ye+"input-$1")]})),ka(hi(a,{props:[se(d,/:(plac\w+)/,":"+il+"$1")]})),ka(hi(a,{props:[se(d,/:(plac\w+)/,ke+"input-$1")]})),ka(hi(a,{props:[d]})),xd(a,{props:Ig(u,c)});break}return""})}}var Gy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct={},Za=typeof process<"u"&&Ct!==void 0&&(Ct.REACT_APP_SC_ATTR||Ct.SC_ATTR)||"data-styled",J0="active",W0="data-styled-version",io="6.1.19",Bd=`/*!sc*/
`,Zs=typeof window<"u"&&typeof document<"u",Vy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==""?Ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.SC_DISABLE_SPEEDY!==void 0&&Ct.SC_DISABLE_SPEEDY!==""&&Ct.SC_DISABLE_SPEEDY!=="false"&&Ct.SC_DISABLE_SPEEDY),Yy={},ao=Object.freeze([]),Xa=Object.freeze({});function F0(a,s,u){return u===void 0&&(u=Xa),a.theme!==u.theme&&a.theme||s||u.theme}var I0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$y=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qy=/(^-|-$)/g;function n0(a){return a.replace($y,"-").replace(qy,"")}var Ky=/(a)(d)/gi,zs=52,i0=function(a){return String.fromCharCode(a+(a>25?39:97))};function vd(a){var s,u="";for(s=Math.abs(a);s>zs;s=s/zs|0)u=i0(s%zs)+u;return(i0(s%zs)+u).replace(Ky,"$1-$2")}var Ru,ep=5381,Va=function(a,s){for(var u=s.length;u;)a=33*a^s.charCodeAt(--u);return a},tp=function(a){return Va(ep,a)};function np(a){return vd(tp(a)>>>0)}function Zy(a){return a.displayName||a.name||"Component"}function Cu(a){return typeof a=="string"&&!0}var ip=typeof Symbol=="function"&&Symbol.for,ap=ip?Symbol.for("react.memo"):60115,Xy=ip?Symbol.for("react.forward_ref"):60112,Qy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Py={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jy=((Ru={})[Xy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ru[ap]=rp,Ru);function a0(a){return("type"in(s=a)&&s.type.$$typeof)===ap?rp:"$$typeof"in a?Jy[a.$$typeof]:Qy;var s}var Wy=Object.defineProperty,Fy=Object.getOwnPropertyNames,r0=Object.getOwnPropertySymbols,Iy=Object.getOwnPropertyDescriptor,ev=Object.getPrototypeOf,l0=Object.prototype;function lp(a,s,u){if(typeof s!="string"){if(l0){var c=ev(s);c&&c!==l0&&lp(a,c,u)}var d=Fy(s);r0&&(d=d.concat(r0(s)));for(var m=a0(a),p=a0(s),y=0;y<d.length;++y){var b=d[y];if(!(b in Py||u&&u[b]||p&&b in p||m&&b in m)){var x=Iy(s,b);try{Wy(a,b,x)}catch{}}}}return a}function Gi(a){return typeof a=="function"}function Dd(a){return typeof a=="object"&&"styledComponentId"in a}function Li(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function jd(a,s){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function rl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Sd(a,s,u){if(u===void 0&&(u=!1),!u&&!rl(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)a[c]=Sd(a[c],s[c]);else if(rl(s))for(var c in s)a[c]=Sd(a[c],s[c]);return a}function Od(a,s){Object.defineProperty(a,"toString",{value:s})}function Vi(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var tv=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return a.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,m=d;s>=m;)if((m<<=1)<0)throw Vi(16,"".concat(s));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var p=d;p<m;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(s+1),b=(p=0,u.length);p<b;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[s]++,y++)},a.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),d=c+u;this.groupSizes[s]=0;for(var m=c;m<d;m++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],d=this.indexOfGroup(s),m=d+c,p=d;p<m;p++)u+="".concat(this.tag.getRule(p)).concat(Bd);return u},a}(),Gs=new Map,Xs=new Map,Vs=1,Es=function(a){if(Gs.has(a))return Gs.get(a);for(;Xs.has(Vs);)Vs++;var s=Vs++;return Gs.set(a,s),Xs.set(s,a),s},nv=function(a,s){Vs=s+1,Gs.set(a,s),Xs.set(s,a)},iv="style[".concat(Za,"][").concat(W0,'="').concat(io,'"]'),av=new RegExp("^".concat(Za,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rv=function(a,s,u){for(var c,d=u.split(","),m=0,p=d.length;m<p;m++)(c=d[m])&&a.registerName(s,c)},lv=function(a,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(Bd),d=[],m=0,p=c.length;m<p;m++){var y=c[m].trim();if(y){var b=y.match(av);if(b){var x=0|parseInt(b[1],10),w=b[2];x!==0&&(nv(w,x),rv(a,w,b[3]),a.getTag().insertRules(x,d)),d.length=0}else d.push(y)}}},s0=function(a){for(var s=document.querySelectorAll(iv),u=0,c=s.length;u<c;u++){var d=s[u];d&&d.getAttribute(Za)!==J0&&(lv(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function sv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sp=function(a){var s=document.head,u=a||s,c=document.createElement("style"),d=function(y){var b=Array.from(y.querySelectorAll("style[".concat(Za,"]")));return b[b.length-1]}(u),m=d!==void 0?d.nextSibling:null;c.setAttribute(Za,J0),c.setAttribute(W0,io);var p=sv();return p&&c.setAttribute("nonce",p),u.insertBefore(c,m),c},ov=function(){function a(s){this.element=sp(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,d=0,m=c.length;d<m;d++){var p=c[d];if(p.ownerNode===u)return p}throw Vi(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},a}(),cv=function(){function a(s){this.element=sp(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),uv=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),o0=Zs,dv={isServer:!Zs,useCSSOMInjection:!Vy},Qs=function(){function a(s,u,c){s===void 0&&(s=Xa),u===void 0&&(u={});var d=this;this.options=Fe(Fe({},dv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&Zs&&o0&&(o0=!1,s0(this)),Od(this,function(){return function(m){for(var p=m.getTag(),y=p.length,b="",x=function(R){var C=function(U){return Xs.get(U)}(R);if(C===void 0)return"continue";var V=m.names.get(C),Y=p.getGroup(R);if(V===void 0||!V.size||Y.length===0)return"continue";var $="".concat(Za,".g").concat(R,'[id="').concat(C,'"]'),Q="";V!==void 0&&V.forEach(function(U){U.length>0&&(Q+="".concat(U,","))}),b+="".concat(Y).concat($,'{content:"').concat(Q,'"}').concat(Bd)},w=0;w<y;w++)x(w);return b}(d)})}return a.registerId=function(s){return Es(s)},a.prototype.rehydrate=function(){!this.server&&Zs&&s0(this)},a.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new a(Fe(Fe({},this.options),s),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,d=u.target;return u.isServer?new uv(d):c?new ov(d):new cv(d)}(this.options),new tv(s)));var s},a.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},a.prototype.registerName=function(s,u){if(Es(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},a.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(Es(s),c)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(Es(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),fv=/&/g,hv=/^\s*\/\/.*$/gm;function op(a,s){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=op(u.children,s)),u})}function mv(a){var s,u,c,d=Xa,m=d.options,p=m===void 0?Xa:m,y=d.plugins,b=y===void 0?ao:y,x=function(C,V,Y){return Y.startsWith(u)&&Y.endsWith(u)&&Y.replaceAll(u,"").length>0?".".concat(s):C},w=b.slice();w.push(function(C){C.type===Is&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(fv,u).replace(c,x))}),p.prefix&&w.push(Uy),w.push(Ny);var R=function(C,V,Y,$){V===void 0&&(V=""),Y===void 0&&(Y=""),$===void 0&&($="&"),s=$,u=V,c=new RegExp("\\".concat(u,"\\b"),"g");var Q=C.replace(hv,""),U=Dy(Y||V?"".concat(Y," ").concat(V," { ").concat(Q," }"):Q);p.namespace&&(U=op(U,p.namespace));var L=[];return Ks(U,Hy(w.concat(Ly(function(G){return L.push(G)})))),L};return R.hash=b.length?b.reduce(function(C,V){return V.name||Vi(15),Va(C,V.name)},ep).toString():"",R}var gv=new Qs,wd=mv(),cp=en.createContext({shouldForwardProp:void 0,styleSheet:gv,stylis:wd});cp.Consumer;en.createContext(void 0);function zd(){return A.useContext(cp)}var pv=function(){function a(s,u){var c=this;this.inject=function(d,m){m===void 0&&(m=wd);var p=c.name+m.hash;d.hasNameForId(c.id,p)||d.insertRules(c.id,p,m(c.rules,p,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,Od(this,function(){throw Vi(12,String(c.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=wd),this.name+s.hash},a}(),xv=function(a){return a>="A"&&a<="Z"};function c0(a){for(var s="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;xv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var up=function(a){return a==null||a===!1||a===""},dp=function(a){var s,u,c=[];for(var d in a){var m=a[d];a.hasOwnProperty(d)&&!up(m)&&(Array.isArray(m)&&m.isCss||Gi(m)?c.push("".concat(c0(d),":"),m,";"):rl(m)?c.push.apply(c,al(al(["".concat(d," {")],dp(m),!1),["}"],!1)):c.push("".concat(c0(d),": ").concat((s=d,(u=m)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in Gy||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function mi(a,s,u,c){if(up(a))return[];if(Dd(a))return[".".concat(a.styledComponentId)];if(Gi(a)){if(!Gi(m=a)||m.prototype&&m.prototype.isReactComponent||!s)return[a];var d=a(s);return mi(d,s,u,c)}var m;return a instanceof pv?u?(a.inject(u,c),[a.getName(c)]):[a]:rl(a)?dp(a):Array.isArray(a)?Array.prototype.concat.apply(ao,a.map(function(p){return mi(p,s,u,c)})):[a.toString()]}function fp(a){for(var s=0;s<a.length;s+=1){var u=a[s];if(Gi(u)&&!Dd(u))return!1}return!0}var bv=tp(io),yv=function(){function a(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&fp(s),this.componentId=u,this.baseHash=Va(bv,u),this.baseStyle=c,Qs.registerId(u)}return a.prototype.generateAndInjectStyles=function(s,u,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=Li(d,this.staticRulesId);else{var m=jd(mi(this.rules,s,u,c)),p=vd(Va(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=c(m,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}d=Li(d,p),this.staticRulesId=p}else{for(var b=Va(this.baseHash,c.hash),x="",w=0;w<this.rules.length;w++){var R=this.rules[w];if(typeof R=="string")x+=R;else if(R){var C=jd(mi(R,s,u,c));b=Va(b,C+w),x+=C}}if(x){var V=vd(b>>>0);u.hasNameForId(this.componentId,V)||u.insertRules(this.componentId,V,c(x,".".concat(V),void 0,this.componentId)),d=Li(d,V)}}return d},a}(),ll=en.createContext(void 0);ll.Consumer;function vv(a){var s=en.useContext(ll),u=A.useMemo(function(){return function(c,d){if(!c)throw Vi(14);if(Gi(c)){var m=c(d);return m}if(Array.isArray(c)||typeof c!="object")throw Vi(8);return d?Fe(Fe({},d),c):c}(a.theme,s)},[a.theme,s]);return a.children?en.createElement(ll.Provider,{value:u},a.children):null}var Mu={};function jv(a,s,u){var c=Dd(a),d=a,m=!Cu(a),p=s.attrs,y=p===void 0?ao:p,b=s.componentId,x=b===void 0?function(P,X){var ne=typeof P!="string"?"sc":n0(P);Mu[ne]=(Mu[ne]||0)+1;var H="".concat(ne,"-").concat(np(io+ne+Mu[ne]));return X?"".concat(X,"-").concat(H):H}(s.displayName,s.parentComponentId):b,w=s.displayName,R=w===void 0?function(P){return Cu(P)?"styled.".concat(P):"Styled(".concat(Zy(P),")")}(a):w,C=s.displayName&&s.componentId?"".concat(n0(s.displayName),"-").concat(s.componentId):s.componentId||x,V=c&&d.attrs?d.attrs.concat(y).filter(Boolean):y,Y=s.shouldForwardProp;if(c&&d.shouldForwardProp){var $=d.shouldForwardProp;if(s.shouldForwardProp){var Q=s.shouldForwardProp;Y=function(P,X){return $(P,X)&&Q(P,X)}}else Y=$}var U=new yv(u,C,c?d.componentStyle:void 0);function L(P,X){return function(ne,H,ve){var ge=ne.attrs,lt=ne.componentStyle,ut=ne.defaultProps,$e=ne.foldedComponentIds,gn=ne.styledComponentId,pn=ne.target,qe=en.useContext(ll),M=zd(),K=ne.shouldForwardProp||M.shouldForwardProp,ee=F0(H,qe,ut)||Xa,ue=function(de,ie,Ke){for(var be,nt=Fe(Fe({},ie),{className:void 0,theme:Ke}),xi=0;xi<de.length;xi+=1){var xn=Gi(be=de[xi])?be(nt):be;for(var Dt in xn)nt[Dt]=Dt==="className"?Li(nt[Dt],xn[Dt]):Dt==="style"?Fe(Fe({},nt[Dt]),xn[Dt]):xn[Dt]}return ie.className&&(nt.className=Li(nt.className,ie.className)),nt}(ge,H,ee),j=ue.as||pn,N={};for(var q in ue)ue[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&ue.theme===ee||(q==="forwardedAs"?N.as=ue.forwardedAs:K&&!K(q,j)||(N[q]=ue[q]));var Z=function(de,ie){var Ke=zd(),be=de.generateAndInjectStyles(ie,Ke.styleSheet,Ke.stylis);return be}(lt,ue),I=Li($e,gn);return Z&&(I+=" "+Z),ue.className&&(I+=" "+ue.className),N[Cu(j)&&!I0.has(j)?"class":"className"]=I,ve&&(N.ref=ve),A.createElement(j,N)}(G,P,X)}L.displayName=R;var G=en.forwardRef(L);return G.attrs=V,G.componentStyle=U,G.displayName=R,G.shouldForwardProp=Y,G.foldedComponentIds=c?Li(d.foldedComponentIds,d.styledComponentId):"",G.styledComponentId=C,G.target=c?d.target:a,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=c?function(X){for(var ne=[],H=1;H<arguments.length;H++)ne[H-1]=arguments[H];for(var ve=0,ge=ne;ve<ge.length;ve++)Sd(X,ge[ve],!0);return X}({},d.defaultProps,P):P}}),Od(G,function(){return".".concat(G.styledComponentId)}),m&&lp(G,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function u0(a,s){for(var u=[a[0]],c=0,d=s.length;c<d;c+=1)u.push(s[c],a[c+1]);return u}var d0=function(a){return Object.assign(a,{isCss:!0})};function hp(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Gi(a)||rl(a))return d0(mi(u0(ao,al([a],s,!0))));var c=a;return s.length===0&&c.length===1&&typeof c[0]=="string"?mi(c):d0(mi(u0(c,s)))}function Ed(a,s,u){if(u===void 0&&(u=Xa),!s)throw Vi(1,s);var c=function(d){for(var m=[],p=1;p<arguments.length;p++)m[p-1]=arguments[p];return a(s,u,hp.apply(void 0,al([d],m,!1)))};return c.attrs=function(d){return Ed(a,s,Fe(Fe({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return Ed(a,s,Fe(Fe({},u),d))},c}var mp=function(a){return Ed(jv,a)},h=mp;I0.forEach(function(a){h[a]=mp(a)});var Sv=function(){function a(s,u){this.rules=s,this.componentId=u,this.isStatic=fp(s),Qs.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,u,c,d){var m=d(jd(mi(this.rules,u,c,d)),""),p=this.componentId+s;c.insertRules(p,p,m)},a.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,u,c,d){s>2&&Qs.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,d)},a}();function wv(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=hp.apply(void 0,al([a],s,!1)),d="sc-global-".concat(np(JSON.stringify(c))),m=new Sv(c,d),p=function(b){var x=zd(),w=en.useContext(ll),R=en.useRef(x.styleSheet.allocateGSInstance(d)).current;return x.styleSheet.server&&y(R,b,x.styleSheet,w,x.stylis),en.useLayoutEffect(function(){if(!x.styleSheet.server)return y(R,b,x.styleSheet,w,x.stylis),function(){return m.removeStyles(R,x.styleSheet)}},[R,b,x.styleSheet,w,x.stylis]),null};function y(b,x,w,R,C){if(m.isStatic)m.renderStyles(b,Yy,w,C);else{var V=Fe(Fe({},x),{theme:F0(x,R,p.defaultProps)});m.renderStyles(b,V,w,C)}}return en.memo(p)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var f0="popstate";function zv(a={}){function s(c,d){let{pathname:m,search:p,hash:y}=c.location;return _d("",{pathname:m,search:p,hash:y},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:sl(d)}return _v(s,u,null,a)}function Me(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Kt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Ev(){return Math.random().toString(36).substring(2,10)}function h0(a,s){return{usr:a.state,key:a.key,idx:s}}function _d(a,s,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Pa(s):s,state:u,key:s&&s.key||c||Ev()}}function sl({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Pa(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function _v(a,s,u,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,p=d.history,y="POP",b=null,x=w();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function w(){return(p.state||{idx:null}).idx}function R(){y="POP";let Q=w(),U=Q==null?null:Q-x;x=Q,b&&b({action:y,location:$.location,delta:U})}function C(Q,U){y="PUSH";let L=_d($.location,Q,U);x=w()+1;let G=h0(L,x),P=$.createHref(L);try{p.pushState(G,"",P)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;d.location.assign(P)}m&&b&&b({action:y,location:$.location,delta:1})}function V(Q,U){y="REPLACE";let L=_d($.location,Q,U);x=w();let G=h0(L,x),P=$.createHref(L);p.replaceState(G,"",P),m&&b&&b({action:y,location:$.location,delta:0})}function Y(Q){return Tv(Q)}let $={get action(){return y},get location(){return a(d,p)},listen(Q){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(f0,R),b=Q,()=>{d.removeEventListener(f0,R),b=null}},createHref(Q){return s(d,Q)},createURL:Y,encodeLocation(Q){let U=Y(Q);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:C,replace:V,go(Q){return p.go(Q)}};return $}function Tv(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Me(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:sl(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function gp(a,s,u="/"){return kv(a,s,u,!1)}function kv(a,s,u,c){let d=typeof s=="string"?Pa(s):s,m=Gn(d.pathname||"/",u);if(m==null)return null;let p=pp(a);Av(p);let y=null;for(let b=0;y==null&&b<p.length;++b){let x=Gv(m);y=Lv(p[b],x,c)}return y}function pp(a,s=[],u=[],c=""){let d=(m,p,y)=>{let b={relativePath:y===void 0?m.path||"":y,caseSensitive:m.caseSensitive===!0,childrenIndex:p,route:m};b.relativePath.startsWith("/")&&(Me(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length));let x=Hn([c,b.relativePath]),w=u.concat(b);m.children&&m.children.length>0&&(Me(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),pp(m.children,s,w,x)),!(m.path==null&&!m.index)&&s.push({path:x,score:Nv(x,m.index),routesMeta:w})};return a.forEach((m,p)=>{if(m.path===""||!m.path?.includes("?"))d(m,p);else for(let y of xp(m.path))d(m,p,y)}),s}function xp(a){let s=a.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),m=u.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let p=xp(c.join("/")),y=[];return y.push(...p.map(b=>b===""?m:[m,b].join("/"))),d&&y.push(...p),y.map(b=>a.startsWith("/")&&b===""?"/":b)}function Av(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:Hv(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Rv=/^:[\w-]+$/,Cv=3,Mv=2,Bv=1,Dv=10,Ov=-2,m0=a=>a==="*";function Nv(a,s){let u=a.split("/"),c=u.length;return u.some(m0)&&(c+=Ov),s&&(c+=Mv),u.filter(d=>!m0(d)).reduce((d,m)=>d+(Rv.test(m)?Cv:m===""?Bv:Dv),c)}function Hv(a,s){return a.length===s.length&&a.slice(0,-1).every((c,d)=>c===s[d])?a[a.length-1]-s[s.length-1]:0}function Lv(a,s,u=!1){let{routesMeta:c}=a,d={},m="/",p=[];for(let y=0;y<c.length;++y){let b=c[y],x=y===c.length-1,w=m==="/"?s:s.slice(m.length)||"/",R=Ps({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},w),C=b.route;if(!R&&x&&u&&!c[c.length-1].route.index&&(R=Ps({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},w)),!R)return null;Object.assign(d,R.params),p.push({params:d,pathname:Hn([m,R.pathname]),pathnameBase:qv(Hn([m,R.pathnameBase])),route:C}),R.pathnameBase!=="/"&&(m=Hn([m,R.pathnameBase]))}return p}function Ps(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=Uv(a.path,a.caseSensitive,a.end),d=s.match(u);if(!d)return null;let m=d[0],p=m.replace(/(.)\/+$/,"$1"),y=d.slice(1);return{params:c.reduce((x,{paramName:w,isOptional:R},C)=>{if(w==="*"){let Y=y[C]||"";p=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const V=y[C];return R&&!V?x[w]=void 0:x[w]=(V||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:p,pattern:a}}function Uv(a,s=!1,u=!0){Kt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,b)=>(c.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function Gv(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Kt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Gn(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function Vv(a,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof a=="string"?Pa(a):a;return{pathname:u?u.startsWith("/")?u:Yv(u,s):s,search:Kv(c),hash:Zv(d)}}function Yv(a,s){let u=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Bu(a,s,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $v(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Nd(a){let s=$v(a);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Hd(a,s,u,c=!1){let d;typeof a=="string"?d=Pa(a):(d={...a},Me(!d.pathname||!d.pathname.includes("?"),Bu("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Bu("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Bu("#","search","hash",d)));let m=a===""||d.pathname==="",p=m?"/":d.pathname,y;if(p==null)y=u;else{let R=s.length-1;if(!c&&p.startsWith("..")){let C=p.split("/");for(;C[0]==="..";)C.shift(),R-=1;d.pathname=C.join("/")}y=R>=0?s[R]:"/"}let b=Vv(d,y),x=p&&p!=="/"&&p.endsWith("/"),w=(m||p===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(x||w)&&(b.pathname+="/"),b}var Hn=a=>a.join("/").replace(/\/\/+/g,"/"),qv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Kv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Zv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Xv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var bp=["POST","PUT","PATCH","DELETE"];new Set(bp);var Qv=["GET",...bp];new Set(Qv);var Ja=A.createContext(null);Ja.displayName="DataRouter";var ro=A.createContext(null);ro.displayName="DataRouterState";A.createContext(!1);var yp=A.createContext({isTransitioning:!1});yp.displayName="ViewTransition";var Pv=A.createContext(new Map);Pv.displayName="Fetchers";var Jv=A.createContext(null);Jv.displayName="Await";var nn=A.createContext(null);nn.displayName="Navigation";var ol=A.createContext(null);ol.displayName="Location";var hn=A.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var Ld=A.createContext(null);Ld.displayName="RouteError";function Wv(a,{relative:s}={}){Me(Wa(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=A.useContext(nn),{hash:d,pathname:m,search:p}=cl(a,{relative:s}),y=m;return u!=="/"&&(y=m==="/"?u:Hn([u,m])),c.createHref({pathname:y,search:p,hash:d})}function Wa(){return A.useContext(ol)!=null}function mn(){return Me(Wa(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(ol).location}var vp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jp(a){A.useContext(nn).static||A.useLayoutEffect(a)}function Ud(){let{isDataRoute:a}=A.useContext(hn);return a?uj():Fv()}function Fv(){Me(Wa(),"useNavigate() may be used only in the context of a <Router> component.");let a=A.useContext(Ja),{basename:s,navigator:u}=A.useContext(nn),{matches:c}=A.useContext(hn),{pathname:d}=mn(),m=JSON.stringify(Nd(c)),p=A.useRef(!1);return jp(()=>{p.current=!0}),A.useCallback((b,x={})=>{if(Kt(p.current,vp),!p.current)return;if(typeof b=="number"){u.go(b);return}let w=Hd(b,JSON.parse(m),d,x.relative==="path");a==null&&s!=="/"&&(w.pathname=w.pathname==="/"?s:Hn([s,w.pathname])),(x.replace?u.replace:u.push)(w,x.state,x)},[s,u,m,d,a])}A.createContext(null);function cl(a,{relative:s}={}){let{matches:u}=A.useContext(hn),{pathname:c}=mn(),d=JSON.stringify(Nd(u));return A.useMemo(()=>Hd(a,JSON.parse(d),c,s==="path"),[a,d,c,s])}function Iv(a,s){return Sp(a,s)}function Sp(a,s,u,c){Me(Wa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=A.useContext(nn),{matches:m}=A.useContext(hn),p=m[m.length-1],y=p?p.params:{},b=p?p.pathname:"/",x=p?p.pathnameBase:"/",w=p&&p.route;{let U=w&&w.path||"";wp(b,!w||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let R=mn(),C;if(s){let U=typeof s=="string"?Pa(s):s;Me(x==="/"||U.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),C=U}else C=R;let V=C.pathname||"/",Y=V;if(x!=="/"){let U=x.replace(/^\//,"").split("/");Y="/"+V.replace(/^\//,"").split("/").slice(U.length).join("/")}let $=gp(a,{pathname:Y});Kt(w||$!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Kt($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=aj($&&$.map(U=>Object.assign({},U,{params:Object.assign({},y,U.params),pathname:Hn([x,d.encodeLocation?d.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:Hn([x,d.encodeLocation?d.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),m,u,c);return s&&Q?A.createElement(ol.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},Q):Q}function ej(){let a=cj(),s=Xv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:m},"ErrorBoundary")," or"," ",A.createElement("code",{style:m},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},s),u?A.createElement("pre",{style:d},u):null,p)}var tj=A.createElement(ej,null),nj=class extends A.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?A.createElement(hn.Provider,{value:this.props.routeContext},A.createElement(Ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ij({routeContext:a,match:s,children:u}){let c=A.useContext(Ja);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),A.createElement(hn.Provider,{value:a},u)}function aj(a,s=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let d=a,m=u?.errors;if(m!=null){let b=d.findIndex(x=>x.route.id&&m?.[x.route.id]!==void 0);Me(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let p=!1,y=-1;if(u)for(let b=0;b<d.length;b++){let x=d[b];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=b),x.route.id){let{loaderData:w,errors:R}=u,C=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!R||R[x.route.id]===void 0);if(x.route.lazy||C){p=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((b,x,w)=>{let R,C=!1,V=null,Y=null;u&&(R=m&&x.route.id?m[x.route.id]:void 0,V=x.route.errorElement||tj,p&&(y<0&&w===0?(wp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,Y=null):y===w&&(C=!0,Y=x.route.hydrateFallbackElement||null)));let $=s.concat(d.slice(0,w+1)),Q=()=>{let U;return R?U=V:C?U=Y:x.route.Component?U=A.createElement(x.route.Component,null):x.route.element?U=x.route.element:U=b,A.createElement(ij,{match:x,routeContext:{outlet:b,matches:$,isDataRoute:u!=null},children:U})};return u&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?A.createElement(nj,{location:u.location,revalidation:u.revalidation,component:V,error:R,children:Q(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):Q()},null)}function Gd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rj(a){let s=A.useContext(Ja);return Me(s,Gd(a)),s}function lj(a){let s=A.useContext(ro);return Me(s,Gd(a)),s}function sj(a){let s=A.useContext(hn);return Me(s,Gd(a)),s}function Vd(a){let s=sj(a),u=s.matches[s.matches.length-1];return Me(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function oj(){return Vd("useRouteId")}function cj(){let a=A.useContext(Ld),s=lj("useRouteError"),u=Vd("useRouteError");return a!==void 0?a:s.errors?.[u]}function uj(){let{router:a}=rj("useNavigate"),s=Vd("useNavigate"),u=A.useRef(!1);return jp(()=>{u.current=!0}),A.useCallback(async(d,m={})=>{Kt(u.current,vp),u.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:s,...m}))},[a,s])}var g0={};function wp(a,s,u){!s&&!g0[a]&&(g0[a]=!0,Kt(!1,u))}A.memo(dj);function dj({routes:a,future:s,state:u}){return Sp(a,void 0,u,s)}function Ys({to:a,replace:s,state:u,relative:c}){Me(Wa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=A.useContext(nn);Kt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=A.useContext(hn),{pathname:p}=mn(),y=Ud(),b=Hd(a,Nd(m),p,c==="path"),x=JSON.stringify(b);return A.useEffect(()=>{y(JSON.parse(x),{replace:s,state:u,relative:c})},[y,x,c,s,u]),null}function On(a){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fj({basename:a="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:m=!1}){Me(!Wa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=A.useMemo(()=>({basename:p,navigator:d,static:m,future:{}}),[p,d,m]);typeof u=="string"&&(u=Pa(u));let{pathname:b="/",search:x="",hash:w="",state:R=null,key:C="default"}=u,V=A.useMemo(()=>{let Y=Gn(b,p);return Y==null?null:{location:{pathname:Y,search:x,hash:w,state:R,key:C},navigationType:c}},[p,b,x,w,R,C,c]);return Kt(V!=null,`<Router basename="${p}"> is not able to match the URL "${b}${x}${w}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:A.createElement(nn.Provider,{value:y},A.createElement(ol.Provider,{children:s,value:V}))}function hj({children:a,location:s}){return Iv(Td(a),s)}function Td(a,s=[]){let u=[];return A.Children.forEach(a,(c,d)=>{if(!A.isValidElement(c))return;let m=[...s,d];if(c.type===A.Fragment){u.push.apply(u,Td(c.props.children,m));return}Me(c.type===On,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=Td(c.props.children,m)),u.push(p)}),u}var $s="get",qs="application/x-www-form-urlencoded";function lo(a){return a!=null&&typeof a.tagName=="string"}function mj(a){return lo(a)&&a.tagName.toLowerCase()==="button"}function gj(a){return lo(a)&&a.tagName.toLowerCase()==="form"}function pj(a){return lo(a)&&a.tagName.toLowerCase()==="input"}function xj(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function bj(a,s){return a.button===0&&(!s||s==="_self")&&!xj(a)}function kd(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let c=a[u];return s.concat(Array.isArray(c)?c.map(d=>[u,d]):[[u,c]])},[]))}function yj(a,s){let u=kd(a);return s&&s.forEach((c,d)=>{u.has(d)||s.getAll(d).forEach(m=>{u.append(d,m)})}),u}var _s=null;function vj(){if(_s===null)try{new FormData(document.createElement("form"),0),_s=!1}catch{_s=!0}return _s}var jj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Du(a){return a!=null&&!jj.has(a)?(Kt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qs}"`),null):a}function Sj(a,s){let u,c,d,m,p;if(gj(a)){let y=a.getAttribute("action");c=y?Gn(y,s):null,u=a.getAttribute("method")||$s,d=Du(a.getAttribute("enctype"))||qs,m=new FormData(a)}else if(mj(a)||pj(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=a.getAttribute("formaction")||y.getAttribute("action");if(c=b?Gn(b,s):null,u=a.getAttribute("formmethod")||y.getAttribute("method")||$s,d=Du(a.getAttribute("formenctype"))||Du(y.getAttribute("enctype"))||qs,m=new FormData(y,a),!vj()){let{name:x,type:w,value:R}=a;if(w==="image"){let C=x?`${x}.`:"";m.append(`${C}x`,"0"),m.append(`${C}y`,"0")}else x&&m.append(x,R)}}else{if(lo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=$s,c=null,d=qs,p=a}return m&&d==="text/plain"&&(p=m,m=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yd(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function wj(a,s,u){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Gn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function zj(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ej(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function _j(a,s,u){let c=await Promise.all(a.map(async d=>{let m=s.routes[d.route.id];if(m){let p=await zj(m,u);return p.links?p.links():[]}return[]}));return Rj(c.flat(1).filter(Ej).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function p0(a,s,u,c,d,m){let p=(b,x)=>u[x]?b.route.id!==u[x].route.id:!0,y=(b,x)=>u[x].pathname!==b.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==b.params["*"];return m==="assets"?s.filter((b,x)=>p(b,x)||y(b,x)):m==="data"?s.filter((b,x)=>{let w=c.routes[b.route.id];if(!w||!w.hasLoader)return!1;if(p(b,x)||y(b,x))return!0;if(b.route.shouldRevalidate){let R=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Tj(a,s,{includeHydrateFallback:u}={}){return kj(a.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function kj(a){return[...new Set(a)]}function Aj(a){let s={},u=Object.keys(a).sort();for(let c of u)s[c]=a[c];return s}function Rj(a,s){let u=new Set;return new Set(s),a.reduce((c,d)=>{let m=JSON.stringify(Aj(d));return u.has(m)||(u.add(m),c.push({key:m,link:d})),c},[])}function zp(){let a=A.useContext(Ja);return Yd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Cj(){let a=A.useContext(ro);return Yd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var $d=A.createContext(void 0);$d.displayName="FrameworkContext";function Ep(){let a=A.useContext($d);return Yd(a,"You must render this element inside a <HydratedRouter> element"),a}function Mj(a,s){let u=A.useContext($d),[c,d]=A.useState(!1),[m,p]=A.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:x,onMouseLeave:w,onTouchStart:R}=s,C=A.useRef(null);A.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let $=U=>{U.forEach(L=>{p(L.isIntersecting)})},Q=new IntersectionObserver($,{threshold:.5});return C.current&&Q.observe(C.current),()=>{Q.disconnect()}}},[a]),A.useEffect(()=>{if(c){let $=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout($)}}},[c]);let V=()=>{d(!0)},Y=()=>{d(!1),p(!1)};return u?a!=="intent"?[m,C,{}]:[m,C,{onFocus:Wr(y,V),onBlur:Wr(b,Y),onMouseEnter:Wr(x,V),onMouseLeave:Wr(w,Y),onTouchStart:Wr(R,V)}]:[!1,C,{}]}function Wr(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function Bj({page:a,...s}){let{router:u}=zp(),c=A.useMemo(()=>gp(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?A.createElement(Oj,{page:a,matches:c,...s}):null}function Dj(a){let{manifest:s,routeModules:u}=Ep(),[c,d]=A.useState([]);return A.useEffect(()=>{let m=!1;return _j(a,s,u).then(p=>{m||d(p)}),()=>{m=!0}},[a,s,u]),c}function Oj({page:a,matches:s,...u}){let c=mn(),{manifest:d,routeModules:m}=Ep(),{basename:p}=zp(),{loaderData:y,matches:b}=Cj(),x=A.useMemo(()=>p0(a,s,b,d,c,"data"),[a,s,b,d,c]),w=A.useMemo(()=>p0(a,s,b,d,c,"assets"),[a,s,b,d,c]),R=A.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let Y=new Set,$=!1;if(s.forEach(U=>{let L=d.routes[U.route.id];!L||!L.hasLoader||(!x.some(G=>G.route.id===U.route.id)&&U.route.id in y&&m[U.route.id]?.shouldRevalidate||L.hasClientLoader?$=!0:Y.add(U.route.id))}),Y.size===0)return[];let Q=wj(a,p,"data");return $&&Y.size>0&&Q.searchParams.set("_routes",s.filter(U=>Y.has(U.route.id)).map(U=>U.route.id).join(",")),[Q.pathname+Q.search]},[p,y,c,d,x,s,a,m]),C=A.useMemo(()=>Tj(w,d),[w,d]),V=Dj(w);return A.createElement(A.Fragment,null,R.map(Y=>A.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...u})),C.map(Y=>A.createElement("link",{key:Y,rel:"modulepreload",href:Y,...u})),V.map(({key:Y,link:$})=>A.createElement("link",{key:Y,...$})))}function Nj(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_p&&(window.__reactRouterVersion="7.7.1")}catch{}function Hj({basename:a,children:s,window:u}){let c=A.useRef();c.current==null&&(c.current=zv({window:u,v5Compat:!0}));let d=c.current,[m,p]=A.useState({action:d.action,location:d.location}),y=A.useCallback(b=>{A.startTransition(()=>p(b))},[p]);return A.useLayoutEffect(()=>d.listen(y),[d,y]),A.createElement(fj,{basename:a,children:s,location:m.location,navigationType:m.action,navigator:d})}var Tp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,so=A.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:m,replace:p,state:y,target:b,to:x,preventScrollReset:w,viewTransition:R,...C},V){let{basename:Y}=A.useContext(nn),$=typeof x=="string"&&Tp.test(x),Q,U=!1;if(typeof x=="string"&&$&&(Q=x,_p))try{let ge=new URL(window.location.href),lt=x.startsWith("//")?new URL(ge.protocol+x):new URL(x),ut=Gn(lt.pathname,Y);lt.origin===ge.origin&&ut!=null?x=ut+lt.search+lt.hash:U=!0}catch{Kt(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Wv(x,{relative:d}),[G,P,X]=Mj(c,C),ne=Vj(x,{replace:p,state:y,target:b,preventScrollReset:w,relative:d,viewTransition:R});function H(ge){s&&s(ge),ge.defaultPrevented||ne(ge)}let ve=A.createElement("a",{...C,...X,href:Q||L,onClick:U||m?s:H,ref:Nj(V,P),target:b,"data-discover":!$&&u==="render"?"true":void 0});return G&&!$?A.createElement(A.Fragment,null,ve,A.createElement(Bj,{page:L})):ve});so.displayName="Link";var Lj=A.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:m,to:p,viewTransition:y,children:b,...x},w){let R=cl(p,{relative:x.relative}),C=mn(),V=A.useContext(ro),{navigator:Y,basename:$}=A.useContext(nn),Q=V!=null&&Zj(R)&&y===!0,U=Y.encodeLocation?Y.encodeLocation(R).pathname:R.pathname,L=C.pathname,G=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;u||(L=L.toLowerCase(),G=G?G.toLowerCase():null,U=U.toLowerCase()),G&&$&&(G=Gn(G,$)||G);const P=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let X=L===U||!d&&L.startsWith(U)&&L.charAt(P)==="/",ne=G!=null&&(G===U||!d&&G.startsWith(U)&&G.charAt(U.length)==="/"),H={isActive:X,isPending:ne,isTransitioning:Q},ve=X?s:void 0,ge;typeof c=="function"?ge=c(H):ge=[c,X?"active":null,ne?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let lt=typeof m=="function"?m(H):m;return A.createElement(so,{...x,"aria-current":ve,className:ge,ref:w,style:lt,to:p,viewTransition:y},typeof b=="function"?b(H):b)});Lj.displayName="NavLink";var Uj=A.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:m,method:p=$s,action:y,onSubmit:b,relative:x,preventScrollReset:w,viewTransition:R,...C},V)=>{let Y=qj(),$=Kj(y,{relative:x}),Q=p.toLowerCase()==="get"?"get":"post",U=typeof y=="string"&&Tp.test(y),L=G=>{if(b&&b(G),G.defaultPrevented)return;G.preventDefault();let P=G.nativeEvent.submitter,X=P?.getAttribute("formmethod")||p;Y(P||G.currentTarget,{fetcherKey:s,method:X,navigate:u,replace:d,state:m,relative:x,preventScrollReset:w,viewTransition:R})};return A.createElement("form",{ref:V,method:Q,action:$,onSubmit:c?b:L,...C,"data-discover":!U&&a==="render"?"true":void 0})});Uj.displayName="Form";function Gj(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kp(a){let s=A.useContext(Ja);return Me(s,Gj(a)),s}function Vj(a,{target:s,replace:u,state:c,preventScrollReset:d,relative:m,viewTransition:p}={}){let y=Ud(),b=mn(),x=cl(a,{relative:m});return A.useCallback(w=>{if(bj(w,s)){w.preventDefault();let R=u!==void 0?u:sl(b)===sl(x);y(a,{replace:R,state:c,preventScrollReset:d,relative:m,viewTransition:p})}},[b,y,x,u,c,s,a,d,m,p])}function Ap(a){Kt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=A.useRef(kd(a)),u=A.useRef(!1),c=mn(),d=A.useMemo(()=>yj(c.search,u.current?null:s.current),[c.search]),m=Ud(),p=A.useCallback((y,b)=>{const x=kd(typeof y=="function"?y(new URLSearchParams(d)):y);u.current=!0,m("?"+x,b)},[m,d]);return[d,p]}var Yj=0,$j=()=>`__${String(++Yj)}__`;function qj(){let{router:a}=kp("useSubmit"),{basename:s}=A.useContext(nn),u=oj();return A.useCallback(async(c,d={})=>{let{action:m,method:p,encType:y,formData:b,body:x}=Sj(c,s);if(d.navigate===!1){let w=d.fetcherKey||$j();await a.fetch(w,u,d.action||m,{preventScrollReset:d.preventScrollReset,formData:b,body:x,formMethod:d.method||p,formEncType:d.encType||y,flushSync:d.flushSync})}else await a.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:b,body:x,formMethod:d.method||p,formEncType:d.encType||y,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,s,u])}function Kj(a,{relative:s}={}){let{basename:u}=A.useContext(nn),c=A.useContext(hn);Me(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...cl(a||".",{relative:s})},p=mn();if(a==null){m.search=p.search;let y=new URLSearchParams(m.search),b=y.getAll("index");if(b.some(w=>w==="")){y.delete("index"),b.filter(R=>R).forEach(R=>y.append("index",R));let w=y.toString();m.search=w?`?${w}`:""}}return(!a||a===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Hn([u,m.pathname])),sl(m)}function Zj(a,{relative:s}={}){let u=A.useContext(yp);Me(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=kp("useViewTransitionState"),d=cl(a,{relative:s});if(!u.isTransitioning)return!1;let m=Gn(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=Gn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Ps(d.pathname,p)!=null||Ps(d.pathname,m)!=null}const Xj="/assets/logo-BY-LKRi7.png",Qj=h.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,Pj=h.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,Jj=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wj=h.img`
  height: 40px;
  width: auto;
`,Fj=h.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${a=>a.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,Ij=h.div`
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
    display: ${a=>a.$open?"flex":"none"};
  }
`,Ou=h(so)`
  text-decoration: none;
  color: ${a=>a.$active?a.theme.colors.primary:"#333"};
  font-weight: ${a=>a.$active?"700":"600"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${a=>a.$active?`2px solid ${a.theme.colors.primary}`:"2px solid transparent"};

  &:hover {
    color: ${a=>a.theme.colors.primary};
    background: rgba(217, 36, 95, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: rgba(217, 36, 95, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`,eS=h.button`
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
`;function Fr(){const a=mn(),[s,u]=A.useState(!1);return r.jsx(Qj,{children:r.jsxs(Pj,{children:[r.jsx(Ou,{to:"/",onClick:()=>u(!1),children:r.jsxs(Jj,{children:[r.jsx(Wj,{src:Xj,alt:"SCKW Logo"}),r.jsx(Fj,{children:"SC Konstanz-Wollmatingen e. V."})]})}),r.jsxs(eS,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>u(d=>!d),children:["Menü",r.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),r.jsxs(Ij,{id:"mobile-nav",$open:s,children:[r.jsx(Ou,{to:"/sponsoring",$active:a.pathname==="/sponsoring"||a.pathname==="/sponsoring-v2",onClick:()=>u(!1),children:"🤝 Sponsoring"}),r.jsx(Ou,{to:"/jobs",$active:a.pathname==="/jobs",onClick:()=>u(!1),children:"💼 Jobbörse"}),!1]})]})})}const tS=h.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Nu=h.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,nS=h(so)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,iS=h.div`
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
`,aS=h.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function qd(){return r.jsx(tS,{children:r.jsxs(iS,{children:[r.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",r.jsx(Nu,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),r.jsxs(aS,{"aria-label":"Rechtliches",children:[r.jsx(nS,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),r.jsx(Nu,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),r.jsx(Nu,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const Ln=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),rS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,lS=h.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${a=>a.isVergeben?"0.8":"1"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`,sS=h.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,oS=h.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,cS=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,uS=h.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${a=>a.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${a=>a.isVergeben?"line-through":"none"};
`,dS=h.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:a})=>a==="verfügbar"?"#d4edda":a==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:a})=>a==="verfügbar"?"#155724":a==="vergeben"?"#721c24":"#856404"};
`,fS=h.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,hS=h.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  line-height: 1.5;
  color: ${a=>a.isHighlight?"#e10073":"#222"};
  font-weight: ${a=>a.isHighlight?"600":"400"};
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`,mS=h.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,gS=h.span`
  flex: 1;
`,pS=h.a`
  display: inline-block;
  background: ${a=>a.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 1.75rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${a=>a.isVergeben?"none":"auto"};
  margin-top: auto;
  border: ${a=>a.isVergeben?"2px solid #ccc":"2px solid #e10073"};
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${a=>a.isVergeben?"#ccc":"#b8005a"};
    border-color: ${a=>a.isVergeben?"#ccc":"#b8005a"};
    transform: ${a=>a.isVergeben?"none":"translateY(-1px)"};
    box-shadow: ${a=>a.isVergeben?"none":"0 4px 12px rgba(225, 0, 115, 0.3)"};
  }

  &:focus {
    outline: 3px solid
      ${a=>a.isVergeben?"#ccc":"rgba(225, 0, 115, 0.5)"};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
    padding: 1rem 1.5rem;
  }
`,xS=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,bS=h.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,yS=h.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,vS=h.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,jS=h.a`
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
`,SS="sponsoring@sckw.de";function Ya({packages:a}){const s=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=p=>{const y=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return y?y[0]:""},c=p=>{const y=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),b=encodeURIComponent(`Interesse am Sponsoring-Paket "${y}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${y}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${SS}?subject=${b}&body=${x}`},d=p=>{const y=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:y,isFullyBooked:y===0}},m=a.filter(p=>!p.title.includes("Platz-Renovierung"));return r.jsx(rS,{children:m.map((p,y)=>{const{isFullyBooked:b}=d(p),x=s(p.status),w=x==="vergeben"||b,R=b?"vergeben":x,C=p.keyBenefits||[];return r.jsxs(lS,{isVergeben:w,children:[r.jsxs(sS,{children:[r.jsx(oS,{children:u(p.title)}),r.jsx(cS,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!w&&r.jsx(uS,{children:p.price}),r.jsx(dS,{status:R,children:R==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),w&&p.sponsors&&p.sponsors.length>0?r.jsxs(xS,{children:[p.sponsors[0].image&&r.jsx(bS,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),r.jsx(yS,{children:p.sponsors[0].name}),r.jsxs(vS,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&r.jsx(jS,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):r.jsx(fS,{children:C.map((V,Y)=>r.jsxs(hS,{isHighlight:V.highlight,children:[r.jsx(mS,{children:V.icon}),r.jsx(gS,{children:V.text})]},Y))}),r.jsx(pS,{href:w?void 0:c(p.title),isVergeben:w,children:w?"Vergeben":"Jetzt anfragen"})]},y)})})}const wS=h.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${a=>a.theme.colors.bgMuted};
  border: 1px solid ${a=>a.theme.colors.border};
  overflow: hidden;
`,zS=h.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,ES=h.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${a=>a.isOpen?a.theme.colors.bg:a.theme.colors.bgMuted};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: ${a=>a.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  span {
    text-align: left;
  }

  &:hover {
    background: ${a=>a.theme.colors.bg};
  }

  &:focus {
    outline: 2px solid #e10073;
    outline-offset: -2px;
  }
`,_S=h.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${a=>a.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${a=>a.theme.colors.primary};
`,TS=h.div`
  background: ${a=>a.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${a=>a.isOpen?"500px":"0"};
  opacity: ${a=>a.isOpen?"1":"0"};
`,kS=h.div`
  padding: 1.5rem;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  color: ${a=>a.theme.colors.text};
  text-align: left;

  b {
    color: ${a=>a.theme.colors.primary};
    font-weight: 600;
  }

  br {
    margin-bottom: 0.5rem;
  }
`,AS=h.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,RS=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:r.jsxs(r.Fragment,{children:[r.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:r.jsxs(r.Fragment,{children:[r.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:r.jsx(r.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function CS(){const[a,s]=A.useState([]),u=d=>{s(m=>m.includes(d)?m.filter(p=>p!==d):[...m,d])},c=(d,m)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),u(m))};return r.jsx(wS,{children:RS.map(d=>{const m=a.includes(d.id);return r.jsxs(zS,{children:[r.jsxs(ES,{isOpen:m,onClick:()=>u(d.id),onKeyDown:p=>c(p,d.id),"aria-expanded":m,"aria-controls":`accordion-content-${d.id}`,children:[r.jsxs("span",{children:[r.jsx(AS,{children:d.icon}),d.title]}),r.jsx(_S,{isOpen:m,children:"▼"})]}),r.jsx(TS,{isOpen:m,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:r.jsx(kS,{children:d.content})})]},d.id)})})}const Rp="/assets/cheerleading_0-DQQGXi0R.jpg",Cp="/assets/cheerleading_1-NkLBARmH.jpg",Mp="/assets/cheerleading_2-CrezcZYL.jpg",Bp="/assets/cheerleading_3-GN5rPHNN.jpg",Dp="/assets/1-ClVWb4ei.png",Op="/assets/10-Bwp2eIye.png",Np="/assets/11-W061sOUI.png",Hp="/assets/12-TjJyzl8L.png",Lp="/assets/13-ChUUCdQQ.png",Up="/assets/14-BVhdRr98.png",Gp="/assets/2-CcfgIQYe.png",Vp="/assets/3-DYiPkVd7.png",Yp="/assets/4-1upoqVoS.png",$p="/assets/5-D0tadXAC.png",qp="/assets/6-NJ4ELm_j.png",Kp="/assets/7-BXo4_Bcj.png",Zp="/assets/8-BbOqEnj_.png",Xp="/assets/9-CIK0gi9o.png",Qp="/assets/herren_0-BVVgyt1l.jpg",Pp="/assets/herren_1-B8ywOnNy.jpg",Jp="/assets/herren_10-DPVQsg9B.jpg",Wp="/assets/herren_11-wfWG62H3.jpg",Fp="/assets/herren_12-DEJSN2zG.jpg",Ip="/assets/herren_13-F52vdukE.jpg",ex="/assets/herren_14-Cq9hoKfG.jpg",tx="/assets/herren_15-aYIFGauG.jpg",nx="/assets/herren_16-NYI2EaEN.jpg",ix="/assets/herren_17-B_52ysA2.jpg",ax="/assets/herren_18-DbwjVNKJ.jpg",rx="/assets/herren_19-BduD_J85.png",lx="/assets/herren_2--jFuixBF.jpg",sx="/assets/herren_3-BPz1zlkG.jpg",ox="/assets/herren_4-BZRrQaFr.jpg",cx="/assets/herren_5-D-QrfY2P.jpg",ux="/assets/herren_6-DWQvi6Am.jpg",dx="/assets/herren_7-BXO6B8Bt.jpg",fx="/assets/herren_8-Cg4rdr7T.jpg",hx="/assets/herren_9-DoLnTdRG.jpg",mx="/assets/herren_jubel_500club-mxBrnD8H.png",gx="/assets/IMG-team-BGcF1agj.png",px="/assets/IMG_5349-CpvIVKhM.jpg",xx="/assets/IMG_5369-DQ4CSwdg.jpg",bx="/assets/IMG_5421-BBzniIEN.jpg",yx="/assets/IMG_5442-D2PgutWB.jpg",vx="/assets/IMG_5952-B9VW6Qie.jpg",jx="/assets/Unbenann324t-IPGo6eoQ.png",Sx="/assets/image0-DDrU5aZn.jpeg",wx="/assets/image11-BNM8hTkT.jpeg",zx="/assets/image8-BUnedp9U.jpeg",MS="/assets/grafhardenberg-Di5cVggE.png",BS="/assets/horta-DydWIGV7.png",DS="/assets/logans-BgpKwKYA.png",OS="/assets/ricobet-DsVC-eZt.png",NS="/assets/rothaus-DqkKD9yW.png",HS="/assets/tasty-B2pSa1rE.png",LS="/assets/cabin-window-B83r_CDB.jpg",US="/assets/outside-9-xz17qL.jpg",GS="/assets/shower-B75caJ-F.jpg",VS="/assets/sitting-area-D7khB3Gw.jpg",YS="/assets/toilet-BpMHYbhh.jpg",$S=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Rp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Cp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Mp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Bp,"../assets/gallery/damen/1.png":Dp,"../assets/gallery/damen/10.png":Op,"../assets/gallery/damen/11.png":Np,"../assets/gallery/damen/12.png":Hp,"../assets/gallery/damen/13.png":Lp,"../assets/gallery/damen/14.png":Up,"../assets/gallery/damen/2.png":Gp,"../assets/gallery/damen/3.png":Vp,"../assets/gallery/damen/4.png":Yp,"../assets/gallery/damen/5.png":$p,"../assets/gallery/damen/6.png":qp,"../assets/gallery/damen/7.png":Kp,"../assets/gallery/damen/8.png":Zp,"../assets/gallery/damen/9.png":Xp,"../assets/gallery/herren/herren_0.jpg":Qp,"../assets/gallery/herren/herren_1.jpg":Pp,"../assets/gallery/herren/herren_10.jpg":Jp,"../assets/gallery/herren/herren_11.jpg":Wp,"../assets/gallery/herren/herren_12.jpg":Fp,"../assets/gallery/herren/herren_13.jpg":Ip,"../assets/gallery/herren/herren_14.jpg":ex,"../assets/gallery/herren/herren_15.jpg":tx,"../assets/gallery/herren/herren_16.jpg":nx,"../assets/gallery/herren/herren_17.jpg":ix,"../assets/gallery/herren/herren_18.jpg":ax,"../assets/gallery/herren/herren_19.png":rx,"../assets/gallery/herren/herren_2.jpg":lx,"../assets/gallery/herren/herren_3.jpg":sx,"../assets/gallery/herren/herren_4.jpg":ox,"../assets/gallery/herren/herren_5.jpg":cx,"../assets/gallery/herren/herren_6.jpg":ux,"../assets/gallery/herren/herren_7.jpg":dx,"../assets/gallery/herren/herren_8.jpg":fx,"../assets/gallery/herren/herren_9.jpg":hx,"../assets/gallery/herren/herren_jubel_500club.png":mx,"../assets/gallery/jfv/IMG-team.png":gx,"../assets/gallery/jfv/IMG_5349.jpg":px,"../assets/gallery/jfv/IMG_5369.jpg":xx,"../assets/gallery/jfv/IMG_5421.jpg":bx,"../assets/gallery/jfv/IMG_5442.jpg":yx,"../assets/gallery/jfv/IMG_5952.jpg":vx,"../assets/gallery/jfv/Unbenann324t.png":jx,"../assets/gallery/jfv/image0.jpeg":Sx,"../assets/gallery/jfv/image11.jpeg":wx,"../assets/gallery/jfv/image8.jpeg":zx}),qS=Object.assign({"../assets/sponsors/grafhardenberg.png":MS,"../assets/sponsors/horta.png":BS,"../assets/sponsors/logans.png":DS,"../assets/sponsors/ricobet.png":OS,"../assets/sponsors/rothaus.png":NS,"../assets/sponsors/tasty.png":HS}),KS=Object.assign({"../assets/renovation/cabin-window.jpg":LS,"../assets/renovation/outside.jpg":US,"../assets/renovation/shower.jpg":GS,"../assets/renovation/sitting-area.jpg":VS,"../assets/renovation/toilet.jpg":YS}),Ex=a=>a.split("/").pop()?.toLowerCase()||"",ZS=a=>{const s=a.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function XS(a){const s=[...a];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const _x=()=>{const a={};Object.entries($S).forEach(([c,d])=>{const m=ZS(c);a[m]||(a[m]=[]),a[m].push(d)}),Object.keys(a).forEach(c=>{a[c]=XS(a[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{a[c]&&(s[c]=a[c])}),Object.keys(a).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=a[c])}),s},QS=()=>{const a={};return Object.entries(qS).forEach(([s,u])=>{const c=Ex(s);a[c]=u}),a},Tx=()=>{const a={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(KS).forEach(([s,u])=>{const c=Ex(s);c.includes("sitting")?a.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?a.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&a.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?a.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?a.waschkueche.push({src:u,alt:"Dusche"}):a.waschkueche.push({src:u,alt:"Waschküche"}))}),a},pt=a=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Rp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Cp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Mp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Bp,"../assets/gallery/damen/1.png":Dp,"../assets/gallery/damen/10.png":Op,"../assets/gallery/damen/11.png":Np,"../assets/gallery/damen/12.png":Hp,"../assets/gallery/damen/13.png":Lp,"../assets/gallery/damen/14.png":Up,"../assets/gallery/damen/2.png":Gp,"../assets/gallery/damen/3.png":Vp,"../assets/gallery/damen/4.png":Yp,"../assets/gallery/damen/5.png":$p,"../assets/gallery/damen/6.png":qp,"../assets/gallery/damen/7.png":Kp,"../assets/gallery/damen/8.png":Zp,"../assets/gallery/damen/9.png":Xp,"../assets/gallery/herren/herren_0.jpg":Qp,"../assets/gallery/herren/herren_1.jpg":Pp,"../assets/gallery/herren/herren_10.jpg":Jp,"../assets/gallery/herren/herren_11.jpg":Wp,"../assets/gallery/herren/herren_12.jpg":Fp,"../assets/gallery/herren/herren_13.jpg":Ip,"../assets/gallery/herren/herren_14.jpg":ex,"../assets/gallery/herren/herren_15.jpg":tx,"../assets/gallery/herren/herren_16.jpg":nx,"../assets/gallery/herren/herren_17.jpg":ix,"../assets/gallery/herren/herren_18.jpg":ax,"../assets/gallery/herren/herren_19.png":rx,"../assets/gallery/herren/herren_2.jpg":lx,"../assets/gallery/herren/herren_3.jpg":sx,"../assets/gallery/herren/herren_4.jpg":ox,"../assets/gallery/herren/herren_5.jpg":cx,"../assets/gallery/herren/herren_6.jpg":ux,"../assets/gallery/herren/herren_7.jpg":dx,"../assets/gallery/herren/herren_8.jpg":fx,"../assets/gallery/herren/herren_9.jpg":hx,"../assets/gallery/herren/herren_jubel_500club.png":mx,"../assets/gallery/jfv/IMG-team.png":gx,"../assets/gallery/jfv/IMG_5349.jpg":px,"../assets/gallery/jfv/IMG_5369.jpg":xx,"../assets/gallery/jfv/IMG_5421.jpg":bx,"../assets/gallery/jfv/IMG_5442.jpg":yx,"../assets/gallery/jfv/IMG_5952.jpg":vx,"../assets/gallery/jfv/Unbenann324t.png":jx,"../assets/gallery/jfv/image0.jpeg":Sx,"../assets/gallery/jfv/image11.jpeg":wx,"../assets/gallery/jfv/image8.jpeg":zx})).find(([c])=>c.includes(a));return u?u[1]:""},Kd=(a,s)=>pt(`${a}/${a}_${s}.jpg`);_x(),QS(),Tx();function PS(){const a=_x(),[s,u]=A.useState(null);return A.useEffect(()=>{if(!s)return;const c=d=>{d.key==="Escape"&&u(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[s]),r.jsxs("section",{children:[r.jsx("h3",{children:"Bildergalerie"}),Object.entries(a).map(([c,d])=>r.jsxs("div",{style:{marginBottom:"2.5rem"},children:[r.jsx(JS,{children:c.toUpperCase()}),r.jsx(WS,{children:d.map((m,p)=>r.jsx(FS,{src:m,alt:`Bild ${p+1} aus ${c}`,onClick:()=>u({folder:c,idx:p}),style:{cursor:"pointer"}},p))}),s&&s.folder===c&&r.jsx(IS,{onClick:()=>u(null),children:r.jsxs(e2,{onClick:m=>m.stopPropagation(),children:[r.jsx(t2,{src:d[s.idx],alt:`Großansicht aus ${c}`}),r.jsx(n2,{onClick:()=>u(null),title:"Schließen",children:"×"})]})})]},c))]})}const JS=h.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,WS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,FS=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,IS=h.div`
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
`,e2=h.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,t2=h.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,n2=h.button`
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
`,i2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,a2=h.div`
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
`,r2=h.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,l2=h.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,s2=h.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,o2=h.div`
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
`,c2=h.a`
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
`;function Hu({icon:a,title:s,description:u,packages:c,buttonHref:d,buttonText:m}){return r.jsxs(a2,{children:[r.jsx(r2,{children:a}),r.jsx(l2,{children:s}),r.jsx(s2,{children:u}),r.jsx(o2,{children:c.map((p,y)=>r.jsxs("div",{children:[p,y<c.length-1&&r.jsx("br",{})]},y))}),r.jsx(c2,{href:d,children:m})]})}const u2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,d2=h.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,f2=h.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,h2=h.p`
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

  ${({$isEmail:a})=>a&&`
    a {
      color: #e10073;
      &:hover {
        color: #b8005a;
      }
    }
  `}
`;function kx({headline:a,description:s,contactInfos:u}){const c=d=>{d.preventDefault();const m=d.currentTarget,p=new FormData(m);if(String(p.get("website")||"").trim()!=="")return;const b=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),w=String(p.get("email")||"").trim(),R=String(p.get("phone")||"").trim(),C={};if(b||(C.firstName="Bitte Vornamen angeben"),x||(C.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)||(C.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(R)||(C.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(C).length>0){const V=Object.keys(C)[0],Y=m.querySelector(`[name="${V}"]`);Y&&Y.focus(),alert(Object.values(C).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),m.reset()};return r.jsx(m2,{id:"kontakt",children:r.jsxs(g2,{children:[r.jsx(_2,{children:a}),r.jsx(T2,{children:s}),r.jsx(u2,{children:u.map((d,m)=>r.jsxs(d2,{children:[r.jsxs(f2,{children:[d.icon," ",d.title]}),r.jsx(h2,{$isEmail:d.isEmail,children:d.isEmail?r.jsx("a",{href:`mailto:${d.content}`,children:d.content}):d.content})]},m))}),r.jsxs(p2,{children:[r.jsx(x2,{children:"Kontakt aufnehmen"}),r.jsx(b2,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),r.jsxs(y2,{noValidate:!0,onSubmit:c,children:[r.jsxs(Lu,{children:[r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"firstName",children:"Vorname"}),r.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"lastName",children:"Nachname"}),r.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),r.jsxs(Lu,{children:[r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),r.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"phone",children:"Telefon"}),r.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),r.jsx(Lu,{children:r.jsxs(v2,{children:[r.jsx("label",{htmlFor:"email",children:"E-Mail"}),r.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),r.jsxs(j2,{"aria-hidden":"true",tabIndex:-1,children:[r.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),r.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),r.jsxs(S2,{children:[r.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),r.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",r.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),r.jsxs(w2,{children:[r.jsx(z2,{type:"submit",children:"Absenden"}),r.jsxs(E2,{children:["Alternativ:"," ",r.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const m2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,g2=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,p2=h.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,x2=h.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,b2=h.p`
  margin: 0 0 1rem 0;
  color: #555;
`,y2=h.form`
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
`,Lu=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,nl=h.div`
  display: flex;
  flex-direction: column;
`,v2=h(nl)`
  grid-column: 1 / -1;
`,j2=h.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,S2=h.div`
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
`,w2=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,z2=h.button`
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
`,E2=h.span`
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
`,_2=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,T2=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,k2=h.section`
  background: url("${Kd("herren",4)}") center/cover;
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
`,A2=h.h1`
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
`,R2=h.h2`
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
`,x0=h.a`
  display: inline-block;
  background: ${a=>a.secondary?"rgba(255, 255, 255, 0.15)":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  border: ${a=>a.secondary?"2px solid rgba(255, 255, 255, 0.5)":"none"};
  backdrop-filter: ${a=>a.secondary?"blur(15px)":"none"};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:hover {
    background: ${a=>a.secondary?"rgba(255, 255, 255, 0.25)":"#b8005a"};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`,C2=h.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,M2=h.main`
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
`,Ir=h.h2`
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
`,B2=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,D2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,O2=h.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,N2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,H2=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,L2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,b0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,y0=h.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,v0=h.ul`
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
`,U2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,G2=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,V2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,Y2=h.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,$2=h.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,q2=h.ul`
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
`,Uu=h.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,Gu=h.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Vu=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yu=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,$u=h.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,qu=h.div`
  font-size: 0.98rem;
  color: #666;
`,K2=h.div`
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
`,Z2=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,X2=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,Q2=h.a`
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
`,P2=h.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,J2=h.div`
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
`,W2=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,F2=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,I2=h.a`
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
`,e5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,t5=h.h3`
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
`,n5=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,i5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,j0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,S0=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,w0=h.table`
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
`,a5=h.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,r5=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,l5=h.ul`
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
`,s5=h.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,o5=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,c5=h.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,u5=h.a`
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
`;function d5(){return r.jsxs(r.Fragment,{children:[r.jsx(k2,{children:r.jsxs(B2,{children:[r.jsx(A2,{children:"SC Konstanz-Wollmatingen"}),r.jsx(R2,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),r.jsxs(C2,{children:[r.jsx(x0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),r.jsx(x0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),r.jsxs(M2,{children:[r.jsx(Ir,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),r.jsx(D2,{children:r.jsx(O2,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),r.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[r.jsx(P2,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),r.jsxs(i2,{role:"region","aria-label":"Sponsoring-Kategorien",children:[r.jsx(Hu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),r.jsx(Hu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),r.jsx(Hu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),r.jsxs("section",{"aria-labelledby":"premium-pakete",children:[r.jsx(Ir,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),r.jsx(Ya,{packages:Ln.filter(a=>a.price==="15.000 €/Jahr"||a.price==="12.000 €/Jahr"||a.price==="9.500 €/Jahr")})]}),r.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[r.jsx(Ir,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),r.jsx(Ya,{packages:Ln.filter(a=>a.price==="5.000 €/Jahr"||a.price==="800 €/Jahr"||a.price==="2.000 €/Jahr")})]}),r.jsxs("section",{"aria-labelledby":"starter-pakete",children:[r.jsx(Ir,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),r.jsx(Ya,{packages:Ln.filter(a=>a.price==="150 €/pro Spiel"||a.price==="500 €/5 Spiele"||a.price.includes("Ab 100"))}),r.jsxs(J2,{children:[r.jsx(W2,{children:"⚽ Ballspende-Beispiel ansehen"}),r.jsx(F2,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),r.jsx(I2,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),r.jsxs(N2,{children:[r.jsx(H2,{children:"Warum SC Konstanz-Wollmatingen?"}),r.jsxs(L2,{children:[r.jsxs(b0,{children:[r.jsx(y0,{children:"📊 Erreichte Reichweite"}),r.jsxs(v0,{children:[r.jsx("li",{children:"15+ Heimspiele pro Saison"}),r.jsx("li",{children:"200+ Zuschauer pro Spiel"}),r.jsx("li",{children:"2.500+ Instagram Follower"}),r.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),r.jsxs(b0,{children:[r.jsx(y0,{children:"🏆 Sportlicher Erfolg"}),r.jsxs(v0,{children:[r.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),r.jsx("li",{children:"2. Mannschaften pro Abteilung"}),r.jsx("li",{children:"Cheerleading-Team aktiv"}),r.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),r.jsx(Ir,{children:"Zusätzliche Werbemöglichkeiten"}),r.jsxs(U2,{children:[r.jsx(G2,{children:'Werbung im Stadionmagazin „Heimspiel"'}),r.jsxs(V2,{children:[r.jsxs(Y2,{children:[r.jsxs(Vu,{children:[r.jsx(Yu,{children:"1 Seite (Farbe)"}),r.jsx($u,{children:"1.000 €"}),r.jsx(qu,{children:"DIN A4 (297 × 210 mm)"})]}),r.jsxs(Vu,{children:[r.jsx(Yu,{children:"1/2 Seite (Farbe)"}),r.jsx($u,{children:"500 €"}),r.jsx(qu,{children:"DIN A5 (148 × 210 mm)"})]}),r.jsxs(Vu,{children:[r.jsx(Yu,{children:"1/4 Seite (Farbe)"}),r.jsx($u,{children:"250 €"}),r.jsx(qu,{children:"DIN A6 (105 × 148 mm)"})]})]}),r.jsx($2,{children:r.jsxs(q2,{children:[r.jsxs(Uu,{children:[r.jsx(Gu,{}),"15 Ausgaben pro Saison"]}),r.jsxs(Uu,{children:[r.jsx(Gu,{}),"ca. 100 Exemplare pro Heimspiel"]}),r.jsxs(Uu,{children:[r.jsx(Gu,{}),"Digitale Version (Social Media & Website)"]})]})})]}),r.jsxs(K2,{children:[r.jsx(Z2,{children:"📖 Aktuelle Ausgabe als Beispiel"}),r.jsx(X2,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),r.jsx(Q2,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),r.jsxs(e5,{children:[r.jsx(t5,{children:"Werbeflächen auf dem Vereinsbus"}),r.jsx(n5,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),r.jsxs(i5,{children:[r.jsxs(j0,{children:[r.jsx(S0,{children:"Premium-Flächen"}),r.jsxs(w0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Position"}),r.jsx("th",{children:"Sichtbarkeit"}),r.jsx("th",{children:"Preis / Jahr"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Heckfläche (100×80 cm)"}),r.jsx("td",{children:"Sehr hoch"}),r.jsx("td",{children:"1.200 €"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Seitentüren (links/rechts)"}),r.jsx("td",{children:"Hoch"}),r.jsx("td",{children:"je 900 €"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Hintere Seitenflächen"}),r.jsx("td",{children:"Mittel-hoch"}),r.jsx("td",{children:"je 600 €"})]})]})]})]}),r.jsxs(j0,{children:[r.jsx(S0,{children:"Standard-Flächen"}),r.jsxs(w0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Position"}),r.jsx("th",{children:"Sichtbarkeit"}),r.jsx("th",{children:"Preis / Jahr"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),r.jsx("td",{children:"Mittel"}),r.jsx("td",{children:"400 € je Seite"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Frontstoßstange"}),r.jsx("td",{children:"Gering-mittel"}),r.jsx("td",{children:"250 €"})]})]})]})]})]}),r.jsxs(a5,{children:[r.jsx(r5,{children:"Zusatzoptionen:"}),r.jsxs(l5,{children:[r.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),r.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),r.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),r.jsxs(s5,{children:[r.jsx(o5,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),r.jsx(c5,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),r.jsx(u5,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),r.jsx(CS,{}),r.jsx(kx,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),r.jsx(PS,{})]}),r.jsx(qd,{})]})}const Zd=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],Ax=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],$a={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},f5="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",Rx=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],Cx=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Mx=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],h5="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",Bt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},m5=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],g5=h.div`
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
`,p5=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,x5=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,b5=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,y5=h.div`
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
`,v5=h.img`
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
`,j5=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,S5=h.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,w5=h.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,z5=h.div`
  background: ${({$gradient:a})=>a};
  height: 100%;
  width: ${({$percent:a})=>a}%;
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
`,E5=h.div`
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
`,_5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,Ku=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,Zu=h.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:a})=>a};
  flex-shrink: 0;
`,T5=h.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Bx=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:pt("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:pt("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:pt("herren/herren_16")}],k5=Math.max(...Bx.map(a=>a.value));function A5(){return r.jsxs(g5,{children:[r.jsx(p5,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),r.jsx(x5,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),r.jsx(b5,{children:Bx.map(a=>r.jsxs(y5,{children:[r.jsx(v5,{src:a.image,alt:a.label}),r.jsxs(j5,{children:[r.jsxs(S5,{children:[a.icon," ",a.label]}),r.jsx(w5,{children:r.jsx(z5,{$percent:a.value/k5*100,$gradient:a.gradient})})]}),r.jsxs(E5,{children:[(a.value/1e3).toFixed(0),"k"]})]},a.label))}),r.jsxs(_5,{children:[r.jsxs(Ku,{children:[r.jsx(Zu,{$color:"#9ca3af"}),r.jsx("span",{children:"Aktuell (Winterpause)"})]}),r.jsxs(Ku,{children:[r.jsx(Zu,{$color:"#e10073"}),r.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),r.jsxs(Ku,{children:[r.jsx(Zu,{$color:"#ff6b9d"}),r.jsx("span",{children:"Prognose kommende Saison"})]})]}),r.jsxs(T5,{children:[r.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const R5=h.div`
  width: 100%;
  margin: 2rem 0;
`,C5=h.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,M5=h.table`
  width: 100%;
  border-collapse: collapse;
`,z0=h.th`
  background: ${a=>a.isVergeben?"#f8f9fa":"#e10073"};
  color: ${a=>a.isVergeben?"#666":"#fff"};
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
`,Ni=h.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${a=>a.isVergeben?"#f8f9fa":"#fff"};
  color: ${a=>a.isVergeben?"#999":"#222"};
  font-size: 0.95rem;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${a=>a.isHighlight&&`
    background: #fff6fa;
    color: #e10073;
    font-weight: 600;
  `}
`,B5=h.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${a=>a.isVergeben?"#f8f9fa":"#fff"};
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;

  ${a=>a.isVergeben&&`
    color: #999;
    text-decoration: line-through;
  `}
`,D5=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,O5=h.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${a=>a.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${a=>a.isVergeben?.8:1};
`,N5=h.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,H5=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,Xu=h.div`
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
`,E0=h.a`
  display: inline-block;
  background: ${a=>a.isVergeben?"#ccc":"#e10073"};
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
  pointer-events: ${a=>a.isVergeben?"none":"auto"};
`,L5="sponsoring@sckw.de";function U5({packages:a}){const s=c=>{const d=c.replace(/[^\w\s]/gi,"").trim(),m=encodeURIComponent(`Interesse am Paket "${d}"`);return`mailto:${L5}?subject=${m}`},u=c=>{const d=c.benefits.find(p=>{const y=p.toLowerCase();return y.includes("social media")||y.includes("instagram")});if(!d)return"-";const m=d.toLowerCase();return m.includes("premium")||m.includes("allen")?"ÜBERALL":m.includes("sehr präsent")?"Sehr präsent":m.includes("regelmässig")||m.includes("regelmäßig")?"Regelmäßig":"Standard"};return r.jsxs(R5,{children:[r.jsx(C5,{children:r.jsxs(M5,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(z0,{children:"Paket"}),a.map((c,d)=>r.jsx(z0,{isVergeben:c.status.includes("Vergeben"),children:c.title},d))]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx(Ni,{children:"Preis"}),a.map((c,d)=>r.jsx(B5,{isVergeben:c.status.includes("Vergeben"),children:c.price},d))]}),r.jsxs("tr",{children:[r.jsx(Ni,{children:"Trikot/Banner"}),a.map((c,d)=>{const m=c.benefits.find(p=>p.includes("Trikot")||p.includes("Banner"));return r.jsx(Ni,{children:m?"✅ Ja":"-"},d)})]}),r.jsxs("tr",{children:[r.jsx(Ni,{children:"Social Media"}),a.map((c,d)=>{const m=u(c);return r.jsx(Ni,{isHighlight:m==="ÜBERALL",children:m==="-"?"-":`✅ ${m}`},d)})]}),r.jsxs("tr",{children:[r.jsx(Ni,{children:"Aktion"}),a.map((c,d)=>r.jsx(Ni,{children:r.jsx(E0,{href:c.status.includes("Vergeben")?void 0:s(c.title),isVergeben:c.status.includes("Vergeben"),children:c.status.includes("Vergeben")?"Vergeben":"Anfragen"})},d))]})]})]})}),r.jsx(D5,{children:a.map((c,d)=>{const m=c.status.includes("Vergeben");return r.jsxs(O5,{isVergeben:m,children:[r.jsx(N5,{children:c.title}),r.jsx(H5,{children:c.price}),r.jsxs(Xu,{children:[r.jsx("span",{children:"Status"}),r.jsx("span",{children:m?"🟥 Vergeben":"🟩 Verfügbar"})]}),r.jsxs(Xu,{children:[r.jsx("span",{children:"Social Media"}),r.jsx("span",{children:u(c)})]}),r.jsxs(Xu,{children:[r.jsx("span",{children:"Vorteile"}),r.jsxs("span",{children:[c.benefits.length," Leistungen"]})]}),r.jsx(E0,{href:m?void 0:s(c.title),isVergeben:m,children:m?"Bereits vergeben":"Jetzt anfragen"})]},d)})})]})}const G5=h.div`
  margin-top: 2.5rem;
`,V5=h.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,Y5=h.button`
  background: ${({$active:a})=>a?"#e10073":"transparent"};
  color: ${({$active:a})=>a?"white":"#666"};
  border: none;
  padding: 0.875rem 1.5rem;
  font-weight: ${({$active:a})=>a?"800":"600"};
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s ease;
  position: relative;
  border-bottom: ${({$active:a})=>a?"3px solid #e10073":"3px solid transparent"};

  &:hover {
    background: ${({$active:a})=>a?"#e10073":"#f8f9fa"};
    color: ${({$active:a})=>a?"white":"#e10073"};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.2rem;
  }
`,$5=h.div`
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
`,q5=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,K5=Ln.filter(a=>a.tier==="premium"),Z5=Ln.filter(a=>a.tier==="lokal"),X5=Ln.filter(a=>a.tier==="starter");function Q5(){const[a,s]=A.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:K5},{key:"lokal",label:"🏢 Lokal",packages:Z5},{key:"starter",label:"🌟 Starter",packages:X5}],c=u.find(d=>d.key===a);return r.jsxs(G5,{children:[r.jsx(V5,{children:u.map(d=>r.jsx(Y5,{$active:a===d.key,onClick:()=>s(d.key),children:d.label},d.key))}),r.jsxs($5,{children:[c&&r.jsx(U5,{packages:c.packages}),r.jsxs(q5,{children:[a==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",a==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",a==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const P5=h.div`
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
`,J5=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,W5=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,F5=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,I5=h.table`
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
`,Qu=h.td`
  font-weight: 700;
  color: #e10073;
`,ew=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,tw=h.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,nw=h.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,iw=h.div`
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
`,aw=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function rw(){const a=Ax;return r.jsxs(P5,{children:[r.jsx(J5,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),r.jsx(W5,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),r.jsx(F5,{children:r.jsxs(I5,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Leistung / Erfolg"}),r.jsx("th",{children:"Starter"}),r.jsx("th",{children:"Premium"}),r.jsx("th",{children:"Kombi (Beispiel)"})]})}),r.jsxs("tbody",{children:[a.map((s,u)=>r.jsxs("tr",{children:[r.jsx("td",{children:s.label}),r.jsx(Qu,{children:s.starter}),r.jsx(Qu,{children:s.premium}),r.jsx(Qu,{children:s.kombi})]},u)),r.jsxs("tr",{children:[r.jsx("td",{children:"Erwartete Kosten"}),r.jsx("td",{children:$a.starter}),r.jsx("td",{children:$a.premium}),r.jsx("td",{children:$a.kombi})]})]})]})}),r.jsx(ew,{children:["Starter","Premium","Kombi"].map(s=>r.jsxs(tw,{children:[r.jsx(nw,{children:s}),a.map((u,c)=>r.jsxs(iw,{children:[r.jsx("span",{children:u.label}),r.jsx("span",{children:s==="Starter"?u.starter:s==="Premium"?u.premium:u.kombi})]},c))]},s))}),r.jsx(aw,{children:f5})]})}const lw=h.div`
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
`,sw=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,ow=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,cw=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,uw=h.table`
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
`,dw=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,fw=h.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,hw=h.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,mw=h.div`
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
`,gw=h.div`
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
`,pw=h.div`
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
`;function xw(){const a=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return r.jsxs(lw,{children:[r.jsx(sw,{children:"👤 Spielerpatenschaften (diskret)"}),r.jsx(ow,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),r.jsx(cw,{children:r.jsxs(uw,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Merkmal"}),r.jsx("th",{children:"Bronze"}),r.jsx("th",{children:"Silber"}),r.jsx("th",{children:"Gold"})]})}),r.jsx("tbody",{children:a.map((s,u)=>r.jsxs("tr",{children:[r.jsx("td",{children:s.label}),r.jsx("td",{children:s.bronze}),r.jsx("td",{children:s.silber}),r.jsx("td",{children:s.gold})]},u))})]})}),r.jsx(dw,{children:["Bronze","Silber","Gold"].map(s=>r.jsxs(fw,{children:[r.jsx(hw,{children:s}),a.map((u,c)=>r.jsxs(mw,{children:[r.jsx("span",{children:u.label}),r.jsx("span",{children:s==="Bronze"?u.bronze:s==="Silber"?u.silber:u.gold})]},c))]},s))}),r.jsxs(gw,{children:[r.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),r.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',r.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',r.jsx("em",{children:"[Foto vom Torjubel]"})]}),r.jsxs(pw,{children:[r.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const bw=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,yw=h.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,vw=h.a`
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
`,jw=h.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,Sw=h.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,ww=h.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,zw=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Ew=h.a`
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
`,_w=h.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,Tw=h.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,kw={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function Aw(){const{hauptsponsor:a,partners:s}=kw;return r.jsxs(bw,{children:[r.jsx(yw,{children:r.jsxs(vw,{href:a.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(jw,{children:"Hauptsponsor"}),r.jsx(Sw,{src:a.logo,alt:a.name}),r.jsx(ww,{children:a.name})]})}),r.jsx(zw,{children:s.map((u,c)=>r.jsxs(Ew,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(_w,{src:u.logo,alt:u.name}),r.jsx(Tw,{children:u.name})]},c))})]})}const dn=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Ga=h.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,Ts=h(Ga)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`,Bn=h.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,di=h.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,fi=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,Rw=h.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,Cw=h.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center/cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,Mw=h.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,Bw=h.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,Dw=h.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Ow=h.p`
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
`,Nw=h.div`
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
`,Hw=h.div`
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
`,Lw=h.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Uw=h.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,Gw=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,_0=h.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$primary:a})=>a?"white":"transparent"};
  color: ${({$primary:a})=>a?"#e10073":"white"};
  font-weight: 800;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({$primary:a})=>a?"0 6px 20px rgba(0, 0, 0, 0.2)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:a})=>a?"white":"rgba(255, 255, 255, 0.4)"};
  width: 100%;
  max-width: 280px;
  min-height: 48px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({$primary:a})=>a?"#f8f9fa":"rgba(255, 255, 255, 0.1)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`,Vw=h.div`
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
`,ks=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,As=h.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,Rs=h.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,Yw=h.div`
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
`,$w=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Pu=h.div`
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
`,Ju=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,Wu=h.div`
  padding: 1.5rem 1.25rem 2rem;
`,Fu=h.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,Iu=h.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`,Cs=h.div`
  margin-top: 2.5rem;
`,Ms=h.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,ed=h.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,qw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,td=h.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`,Kw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,nd=h.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,id=h.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,ad=h.div`
  padding: 1.25rem 1rem 1.5rem;
`,rd=h.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,ld=h.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,T0=h.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,Zw=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,k0=h.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,Xw=h.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,Qw=h.table`
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
`,Pw=h.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,Jw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Bs=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Ds=h.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,Os=h.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`,Ww=h.section`
  padding: 4rem 0;
  scroll-margin-top: 90px;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,Fw=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,Iw=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,e3=h.div`
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
`,t3=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,n3=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,i3=h.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.25);
`,a3=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,sd=h.div`
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
`,r3=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #e10073;
  text-align: center;
`,l3=h.a`
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
`,s3=Zd,o3=Ln.filter(a=>a.tier==="premium"),c3=Ln.filter(a=>a.tier==="lokal"),u3=Ln.filter(a=>a.tier==="starter");function d3(){const a=[pt("herren/herren_6"),pt("herren/herren_16"),pt("herren/herren_5"),pt("herren/herren_14")].filter(Boolean),[s,u]=A.useState(0);return A.useEffect(()=>{if(a.length<=1)return;const c=setInterval(()=>{u(d=>(d+1)%a.length)},6e3);return()=>clearInterval(c)},[a.length]),r.jsxs(r.Fragment,{children:[r.jsxs(Rw,{children:[a.map((c,d)=>r.jsx(Cw,{$bg:c,$active:d===s},d)),r.jsx(Mw,{}),r.jsxs(Bw,{children:[r.jsx(Dw,{children:"Sponsoring, das messbar wirkt"}),r.jsxs(Ow,{children:["In der Winterpause erzielen wir bereits"," ",r.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",r.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),r.jsx(Nw,{children:s3.map(c=>r.jsxs(Hw,{children:[r.jsx(Lw,{children:c.value}),r.jsx(Uw,{children:c.label})]},c.label))}),r.jsxs(Gw,{children:[r.jsx(_0,{href:"#kontakt",$primary:!0,onClick:c=>{c.preventDefault();const d=document.getElementById("kontakt");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),r.jsx(_0,{href:"#pakete",onClick:c=>{c.preventDefault();const d=document.getElementById("pakete");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),r.jsx(Ts,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Warum sich Sponsoring bei uns lohnt"}),r.jsx(fi,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),r.jsxs($w,{children:[r.jsxs(Pu,{children:[r.jsx(Ju,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),r.jsxs(Wu,{children:[r.jsx(Fu,{children:"Sichtbarkeit, die bleibt"}),r.jsx(Iu,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),r.jsxs(Pu,{children:[r.jsx(Ju,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),r.jsxs(Wu,{children:[r.jsx(Fu,{children:"Ihre Kunden sind hier"}),r.jsx(Iu,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),r.jsxs(Pu,{children:[r.jsx(Ju,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),r.jsxs(Wu,{children:[r.jsx(Fu,{children:"Doppelte Wirkung"}),r.jsx(Iu,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Diese Unternehmen sind bereits Partner"}),r.jsx(fi,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),r.jsx(Aw,{})]})}),r.jsx(Ts,{id:"pakete",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Finden Sie Ihr perfektes Paket"}),r.jsx(fi,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, individuell auf Ihr Unternehmen zugeschnitten."})]}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Premium-Partnerschaften"}),r.jsx(Ya,{packages:o3})]}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Pakete im Vergleich"}),r.jsx(Q5,{})]}),r.jsx(rw,{}),r.jsx(xw,{}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Lokale Werbemöglichkeiten"}),r.jsx(Ya,{packages:c3}),r.jsx(ed,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Starter & Spieltag"}),r.jsx(Ya,{packages:u3})]})]})}),r.jsx(Ga,{id:"reichweite",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"So viele Menschen erreichen Sie"}),r.jsx(fi,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),r.jsxs(Vw,{children:[r.jsxs(ks,{children:[r.jsx(As,{children:"32.000"}),r.jsx(Rs,{children:"Reichweite / 30 Tage"})]}),r.jsxs(ks,{children:[r.jsx(As,{children:"250.000"}),r.jsx(Rs,{children:"Reichweite / 90 Tage"})]}),r.jsxs(ks,{children:[r.jsx(As,{children:"50-80k"}),r.jsx(Rs,{children:"Pro Monat in Saison"})]}),r.jsxs(ks,{children:[r.jsx(As,{children:"500-800k"}),r.jsx(Rs,{children:"Saisonreichweite (konservativ)"})]})]}),r.jsxs(Yw,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",r.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),r.jsx(Ts,{children:r.jsx(dn,{children:r.jsx(A5,{})})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Was Sie auf Social Media bekommen"}),r.jsx(fi,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),r.jsxs(qw,{children:[r.jsx(td,{children:"📱 Feed-Posts mit Ihrem Logo"}),r.jsx(td,{children:"📸 Stories & Erwähnungen"}),r.jsx(td,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),r.jsx(ed,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),r.jsx(Ts,{id:"buswerbung",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Mobile Werbung auf unserem Vereinsbus"}),r.jsx(fi,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),r.jsxs(Zw,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen mit Werbeflächen",style:{width:"100%",borderRadius:12,marginBottom:"1.5rem",display:"block"}}),r.jsx(k0,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),r.jsx(Xw,{children:r.jsxs(Qw,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fläche"}),r.jsx("th",{children:"Größe (ca.)"}),r.jsx("th",{children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[...Rx,...Cx].map(c=>r.jsxs("tr",{children:[r.jsx("td",{children:c.position}),r.jsx("td",{children:c.groesse}),r.jsx("td",{children:r.jsx("strong",{children:c.preis})})]},c.position))})]})}),r.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[r.jsx(k0,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),r.jsx(Pw,{children:Mx.map((c,d)=>r.jsx("li",{children:c},d))})]})]}),r.jsx(ed,{children:h5})]})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Ihre Marke in Aktion"}),r.jsx(fi,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),r.jsxs(Kw,{children:[r.jsxs(nd,{children:[r.jsx(id,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),r.jsxs(ad,{children:[r.jsx(rd,{children:"Stadionmagazin"}),r.jsx(ld,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),r.jsx(T0,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),r.jsxs(nd,{children:[r.jsx(id,{src:pt("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),r.jsxs(ad,{children:[r.jsx(rd,{children:"Bandenwerbung"}),r.jsx(ld,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),r.jsxs(nd,{children:[r.jsx(id,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),r.jsxs(ad,{children:[r.jsx(rd,{children:"Ballspende"}),r.jsx(ld,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),r.jsx(T0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),r.jsx(Ww,{id:"500club",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(Fw,{children:"500 €Club"}),r.jsx(Iw,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken - werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),r.jsxs(e3,{children:[r.jsxs(t3,{children:[r.jsxs(i3,{children:[r.jsx("div",{style:{fontSize:"0.85rem",opacity:.9,fontWeight:600,marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Mitgliedschaft"}),r.jsx("div",{style:{fontSize:"clamp(1.8rem, 5vw, 2.4rem)",fontWeight:900,lineHeight:1.1},children:"Ab 125€ / Quartal"}),r.jsx("div",{style:{fontSize:"1rem",opacity:.9,marginTop:"0.25rem"},children:"oder 250€ halbjährlich · 500€ jährlich"})]}),r.jsxs(a3,{children:[r.jsxs(sd,{children:["Offizielle ",r.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),r.jsxs(sd,{children:["Ihr ",r.jsx("strong",{children:"Name oder Firmenname"})," wird veröffentlicht"]}),r.jsxs(sd,{children:["Direkte Förderung von ",r.jsx("strong",{children:"Jugend- & Amateurfußball"})]})]})]}),r.jsxs(n3,{children:[r.jsxs(r3,{children:[r.jsx("div",{style:{fontSize:"0.8rem",color:"#e10073",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.75rem"},children:"Spendenkonto"}),r.jsx("div",{style:{fontWeight:800,color:"#222",fontSize:"1.05rem",marginBottom:"0.5rem"},children:"SC Konstanz-Wollmatingen e.V."}),r.jsxs("div",{style:{color:"#444",lineHeight:1.7,fontSize:"0.95rem"},children:["IBAN: ",r.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"}),r.jsx("br",{}),"Sparkasse Bodensee",r.jsx("br",{}),r.jsx("span",{style:{fontSize:"0.85rem",color:"#888"},children:"Schleyerweg 5 · 78467 Konstanz"})]})]}),r.jsx(l3,{href:"/sponsoring-handoff?preset=club500&view=preview",children:"500 €Club Anmeldung"})]})]})]})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"In 4 Schritten zum Sponsoring-Start"}),r.jsx(fi,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),r.jsxs(Jw,{children:[r.jsxs(Bs,{children:[r.jsx(Ds,{children:"1. Kontakt"}),r.jsx(Os,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),r.jsxs(Bs,{children:[r.jsx(Ds,{children:"2. Bedarf"}),r.jsx(Os,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),r.jsxs(Bs,{children:[r.jsx(Ds,{children:"3. Angebot"}),r.jsx(Os,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),r.jsxs(Bs,{children:[r.jsx(Ds,{children:"4. Umsetzung"}),r.jsx(Os,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),r.jsx(kx,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:Bt.email,isEmail:!0},{icon:"📍",title:"Adresse",content:Bt.vollAdresse}]}),r.jsx(qd,{})]})}function f3(){return Ap(),!0}const h3=wv`
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
`,A0=h.div`
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
`,R0=h.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,C0=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ns=h.button`
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
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`,m3=h.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,g3=h.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,vt=h.section`
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
`,Zt=h.div`
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
`,Xt=h.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,Qt=h.div`text-align: center; margin-bottom: 6mm;`,Pt=h.img`height: 20mm;`,Jt=h.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,yt=h.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,ct=h.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Ae=h.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,W=h.li`
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
`,xt=h.ul`padding: 0; margin: 3mm 0;`,Yi=h.div`
  display: ${a=>a.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,ot=h.div`margin-bottom: 4mm;`,Je=h.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Mt=h.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${a=>(a.$lines||1)*8}mm;
  background: #fafafa;
`,p3=h.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Xd=h.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Un=h.div`
  text-align: ${a=>a.$right?"right":a.$center?"center":"left"};
`;function pi(){return r.jsxs(p3,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",r.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function an(){return r.jsxs(Xd,{children:[r.jsxs(Un,{children:[r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),r.jsx("br",{}),"Schleyerweg 5",r.jsx("br",{}),"78467 Konstanz"]}),r.jsxs(Un,{$center:!0,children:[Bt.email,r.jsx("br",{}),"partner.sckw.de"]}),r.jsxs(Un,{$right:!0,children:["Sparkasse Bodensee",r.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",r.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const M0=pt("herren/herren_0"),od=pt("herren/herren_6"),B0=pt("herren/herren_1"),x3=pt("herren/herren_14"),Js=h.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function b3(){return r.jsx(vt,{children:r.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),r.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),r.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),r.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",r.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Zd.slice(0,2).map(a=>r.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[r.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:a.value}),r.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:a.label})]},a.label))}),r.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function y3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"WARUM SCKW?"}),r.jsx(yt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Zd.map(a=>r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[r.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:a.value}),r.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:a.label})]},a.label))}),r.jsx(ct,{children:"Was Sie bei uns erreichen"}),r.jsxs(xt,{children:[r.jsx(W,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),r.jsx(W,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),r.jsx(W,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),r.jsx(W,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),r.jsx(ct,{children:"Der Verein auf einen Blick"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsxs(Ae,{children:[r.jsx("strong",{children:"Gegründet:"})," 1912"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Mitglieder:"})," 500+"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),r.jsxs("div",{children:[r.jsxs(Ae,{children:[r.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),M0&&r.jsx(Js,{src:M0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),r.jsx(an,{})]})]})}function v3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"HAUPTSPONSOR"}),r.jsx(yt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(xt,{children:[r.jsx(W,{children:"Trikotwerbung auf der Brust"}),r.jsx(W,{children:"Business Club Mitgliedschaft"}),r.jsx(W,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),r.jsx(W,{children:"1/1 seitiges Inserat im SC Magazin"}),r.jsx(W,{children:"10 Saisonkarten"}),r.jsx(W,{children:"Werbeauftritte nach Absprache"}),r.jsx(W,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(W,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(W,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(W,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(W,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(Yi,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function j3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"CO-SPONSOR"}),r.jsx(yt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(xt,{children:[r.jsx(W,{children:"Werbung auf den Trainingsanzügen"}),r.jsx(W,{children:"Business Club Mitgliedschaft"}),r.jsx(W,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),r.jsx(W,{children:"1/2 seitiges Inserat im SC Magazin"}),r.jsx(W,{children:"5 Saisonkarten"}),r.jsx(W,{children:"Werbeauftritte nach Absprache"}),r.jsx(W,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(W,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(W,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(W,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(W,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(Yi,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function S3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"SILBER-PARTNER"}),r.jsx(yt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),r.jsxs(xt,{children:[r.jsx(W,{children:"1 Bande (5×2 m) am Gelände"}),r.jsx(W,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),r.jsx(W,{children:"Werbeplane am Gelände"}),r.jsx(W,{children:"Vereinsplakate + Eventsichtbarkeit"}),r.jsx(W,{children:"Website: Logo auf Startseite"})]}),r.jsxs(Yi,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),r.jsx(ct,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),r.jsx(yt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),r.jsxs(xt,{children:[r.jsx(W,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),r.jsx(W,{children:"Website: Logo auf der Startseite"}),r.jsx(W,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),r.jsx(W,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),r.jsxs(Yi,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function w3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"BANDENWERBUNG"}),r.jsx(yt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),r.jsx(xt,{children:r.jsx(W,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Platzierung:"}),r.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",r.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",r.jsx("br",{}),r.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),r.jsxs(Yi,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 800€ pro Saison"})]}),B0&&r.jsx(Js,{src:B0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function z3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:'WERBUNG IM „HEIMSPIEL"'}),r.jsx(yt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),r.jsxs(xt,{children:[r.jsx(W,{children:"15 Ausgaben pro Saison"}),r.jsx(W,{children:"ca. 100 Exemplare pro Heimspiel"}),r.jsx(W,{children:"Digitale Version (Social Media & Webseite)"}),r.jsx(W,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),r.jsx(W,{children:"DIN A4 Stadionmagazin"}),r.jsx(W,{children:"wird ausgelegt in diversen Arztpraxen"})]}),a&&r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>r.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),r.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),r.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),a&&r.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[r.jsx("strong",{children:"Maße"}),r.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",r.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",r.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function E3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"SPIELTAG-SPONSORING"}),r.jsx(yt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),r.jsx(ct,{children:"Ballspende"}),r.jsx(Ae,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),r.jsxs(xt,{children:[r.jsx(W,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),r.jsx(W,{children:"Namensnennung in der Halbzeitpause"}),r.jsx(W,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),r.jsx(W,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),r.jsxs(Yi,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",r.jsx("strong",{children:"500€"})," (statt 750€)"]}),r.jsx(ct,{children:"Spielpräsentator"}),r.jsx(Ae,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),r.jsxs(xt,{children:[r.jsx(W,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),r.jsx(W,{children:"Namentliche Erwähnung im SC Magazin"}),r.jsx(W,{children:"Social Media Erwähnung am Spieltag"})]}),r.jsxs(Yi,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 250€ pro Spiel"})]}),od&&r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[r.jsx(Js,{src:od,alt:"Action",style:{height:"48mm"}}),r.jsx(Js,{src:x3||od,alt:"Jubel",style:{height:"48mm"}})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function _3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"BUSWERBUNG"}),r.jsx(yt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),a&&r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[...Rx,...Cx].map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),a&&r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),r.jsx(ct,{children:"Zusatzoptionen"}),r.jsx(xt,{children:Mx.map((s,u)=>r.jsx(W,{children:s},u))}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function T3({showPrices:a}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"PRÄMIEN-MODELL"}),r.jsx(yt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a&&r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),r.jsxs("tbody",{children:[Ax.map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),r.jsxs("tr",{style:{background:"#f0f9ff"},children:[r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:$a.starter}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:$a.premium}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:$a.kombi})]})]})]}),r.jsx(ct,{children:"So funktioniert's"}),r.jsxs(xt,{children:[r.jsx(W,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),r.jsx(W,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),r.jsx(W,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),r.jsx(W,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),r.jsx(ct,{children:"Inkludierte Leistungen"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx(Ae,{children:r.jsx("strong",{children:"Starter:"})}),r.jsxs(xt,{children:[r.jsx(W,{children:"Stadionansage bei Erfolg"}),r.jsx(W,{children:"Logo auf Website"})]})]}),r.jsxs("div",{children:[r.jsx(Ae,{children:r.jsx("strong",{children:"Premium:"})}),r.jsxs(xt,{children:[r.jsx(W,{children:"+ Social Media Post bei Erfolg"}),r.jsx(W,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}const D0=pt("herren/herren_jubel_500club");function k3(){return r.jsxs(vt,{children:[D0&&r.jsx("img",{src:D0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),r.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[r.jsx(yt,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),r.jsxs(Ae,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[r.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den 500 €Club."})," Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),r.jsx(ct,{children:"Ihre Vorteile"}),r.jsxs(xt,{children:[r.jsxs(W,{children:["Offizielle ",r.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),r.jsxs(W,{children:["Veröffentlichung Ihres ",r.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),r.jsx(W,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),r.jsx(ct,{children:"Zahlungsoptionen"}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),r.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(a=>r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:a.label}),r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:a.betrag})]},a.label))})]}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),r.jsx(ct,{children:"Spendenkonto"}),r.jsxs(Ae,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[r.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),r.jsx("br",{}),"IBAN: ",r.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",r.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[r.jsxs(Ae,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",r.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),r.jsxs(Ae,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",r.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),r.jsx(an,{})]})]})}function A3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG 500 €CLUB"}),r.jsxs(yt,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an ",Bt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Vorname:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Nachname:"}),r.jsx(Mt,{$lines:1})]})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Firma (optional):"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Straße, Hausnummer:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"PLZ:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Ort:"}),r.jsx(Mt,{$lines:1})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Geb.-Datum:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Telefon:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"E-Mail:"}),r.jsx(Mt,{$lines:1})]})]}),r.jsx(ct,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:r.jsxs(Je,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),r.jsx(Ae,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),r.jsx(ct,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im 500 €Club bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:r.jsxs(Je,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),r.jsxs(ot,{style:{marginTop:"2mm"},children:[r.jsx(Je,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),r.jsx(Mt,{$lines:1})]}),r.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. 500 €Club. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Konstanz, den _______________"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),r.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Unterschrift:"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),r.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[r.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",r.jsx("br",{}),r.jsx("strong",{children:"Kontakt:"})," ",Bt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs(Xd,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),r.jsx(Un,{$center:!0,children:"500 €Club"}),r.jsx(Un,{$right:!0,children:"partner.sckw.de"})]})]})]})}function R3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),r.jsx(yt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(a=>r.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[r.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:a.n}),r.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:a.t}),r.jsx(Ae,{style:{margin:0,fontSize:"9pt"},children:a.d})]},a.n))}),r.jsx(ct,{children:"Kontakt"}),r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:Bt.email})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),r.jsxs("div",{style:{gridColumn:"1 / -1"},children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),r.jsxs("div",{style:{fontSize:"11pt"},children:[Bt.adresse.name," · ",Bt.adresse.strasse," · ",Bt.adresse.plz," ",Bt.adresse.ort]})]})]}),r.jsx(ct,{children:"Gesprächsleitfaden"}),r.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),r.jsx(an,{})]})]})}function C3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),r.jsxs(yt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",Bt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Datum:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Gesprächsführer (Helfer):"}),r.jsx(Mt,{$lines:1})]})]}),m5.map((a,s)=>r.jsxs(ot,{children:[r.jsxs(Je,{children:[a.label,":"]}),r.jsx(Mt,{$lines:a.lines})]},s)),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:r.jsxs(Je,{style:{marginBottom:0},children:["☐ ",a]})},a))}),r.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:r.jsxs(Ae,{style:{margin:0,fontSize:"8pt"},children:[r.jsx("strong",{children:"Schnellreferenz:"})," ",Bt.email," · partner.sckw.de ·"," ",Bt.vollAdresse.replace(/\n/g," · ")]})}),r.jsxs(Xd,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"Internes Dokument"})}),r.jsx(Un,{$center:!0}),r.jsx(Un,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Dn=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>r.jsx(b3,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>r.jsx(y3,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:a=>r.jsx(v3,{showPrices:a})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:a=>r.jsx(j3,{showPrices:a})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:a=>r.jsx(S3,{showPrices:a})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:a=>r.jsx(w3,{showPrices:a})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:a=>r.jsx(z3,{showPrices:a})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:a=>r.jsx(E3,{showPrices:a})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:a=>r.jsx(_3,{showPrices:a})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:a=>r.jsx(T3,{showPrices:a})},{id:"club500",label:"500 €Club",group:"community",render:()=>r.jsx(k3,{})},{id:"club500form",label:"500 €Club Anmeldung",group:"community",render:()=>r.jsx(A3,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>r.jsx(R3,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>r.jsx(C3,{})}],M3=h.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,B3=h.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,D3=h.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,O3=h.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,N3=h.button`
  background: ${a=>a.$on?"#1a365d":"#f1f5f9"};
  color: ${a=>a.$on?"#fff":"#475569"};
  border: 2px solid ${a=>a.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { opacity: 0.85; }
`,cd=h.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,ud=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,dd=h.label`
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
  &:hover { border-color: #94a3b8; }

  input { accent-color: #1a365d; width: 16px; height: 16px; cursor: pointer; }
`,H3=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Hi=h.button`
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
`,L3=h.button`
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
`,U3=h.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function G3(){const a=f3(),[s]=Ap(),u=s.get("preset"),c=s.get("view"),d=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Dn.filter(H=>H.group==="broschüre").map(H=>H.id)),[m,p]=A.useState(!0),[y,b]=A.useState(d),[x,w]=A.useState(c==="preview"?"preview":"dashboard");if(!a)return r.jsx(Ys,{to:"/",replace:!0});const R=H=>{b(ve=>{const ge=new Set(ve);return ge.has(H)?ge.delete(H):ge.add(H),ge})},C=()=>b(new Set(Dn.map(H=>H.id))),V=()=>b(new Set),Y=()=>b(new Set(Dn.filter(H=>H.group==="broschüre").map(H=>H.id))),$=()=>b(new Set(Dn.map(H=>H.id))),Q=()=>b(new Set(["cover","why","spieltag","banden"])),U=()=>b(new Set(["cover","why","haupt","co","silber"])),L=()=>b(new Set(["club500","club500form"])),G=Dn.filter(H=>y.has(H.id)),P=Dn.filter(H=>H.group==="broschüre"),X=Dn.filter(H=>H.group==="community"),ne=Dn.filter(H=>H.group==="helfer");return x==="preview"?r.jsxs(r.Fragment,{children:[r.jsx(h3,{}),r.jsxs(A0,{children:[r.jsxs(R0,{children:["Vorschau · ",G.length," Seiten"]}),r.jsxs(C0,{children:[r.jsx(Ns,{$active:m,onClick:()=>p(H=>!H),children:m?"Preise ✓":"Preise ✗"}),r.jsx(Ns,{onClick:()=>w("dashboard"),children:"Zurück"}),r.jsx(Ns,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),r.jsxs(m3,{children:[r.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',r.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),r.jsx(g3,{children:G.map(H=>r.jsx("div",{children:H.render(m)},H.id))})]}):r.jsxs(r.Fragment,{children:[r.jsxs(A0,{children:[r.jsx(R0,{children:"Sponsoring-Kit · SCKW"}),r.jsx(C0,{children:r.jsx(Ns,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),r.jsxs(M3,{children:[r.jsx(B3,{children:"Sponsoring-Kit zusammenstellen"}),r.jsx(D3,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),r.jsxs(O3,{children:[r.jsx(N3,{$on:m,onClick:()=>p(H=>!H),children:m?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),r.jsxs(U3,{children:[y.size," von ",Dn.length," Seiten ausgewählt"]})]}),r.jsxs(H3,{children:[r.jsx(Hi,{onClick:C,children:"Alles"}),r.jsx(Hi,{onClick:Y,children:"Broschüre komplett"}),r.jsx(Hi,{onClick:$,children:"Komplett-Kit (+ Helfer)"}),r.jsx(Hi,{onClick:U,children:"Nur Premium-Pakete"}),r.jsx(Hi,{onClick:Q,children:"Starter-Paket"}),r.jsx(Hi,{onClick:L,children:"500 €Club"}),r.jsx(Hi,{onClick:V,children:"Keine"})]}),r.jsx(cd,{children:"Broschüre"}),r.jsx(ud,{children:P.map(H=>r.jsxs(dd,{$checked:y.has(H.id),children:[r.jsx("input",{type:"checkbox",checked:y.has(H.id),onChange:()=>R(H.id)}),H.label]},H.id))}),r.jsx(cd,{children:"Community / 500 €Club"}),r.jsx(ud,{children:X.map(H=>r.jsxs(dd,{$checked:y.has(H.id),children:[r.jsx("input",{type:"checkbox",checked:y.has(H.id),onChange:()=>R(H.id)}),H.label]},H.id))}),r.jsx(cd,{children:"Helfer-Anhang"}),r.jsx(ud,{children:ne.map(H=>r.jsxs(dd,{$checked:y.has(H.id),children:[r.jsx("input",{type:"checkbox",checked:y.has(H.id),onChange:()=>R(H.id)}),H.label]},H.id))}),r.jsxs(L3,{disabled:y.size===0,onClick:()=>w("preview"),children:["Vorschau & Drucken (",y.size," Seiten)"]})]})]})}const V3=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],Y3=h.section`
  background: url("${Kd("herren",1)}") center/cover;
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
`,$3=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,q3=h.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,K3=h.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,Z3=h.main`
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
`,X3=h.section`
  margin-bottom: 4rem;
`,Q3=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,P3=h.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,J3=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,W3=h.div`
  text-align: center;
  margin-bottom: 3rem;
`,F3=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,I3=h.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,e6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,t6=h.div`
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
`,n6=h.div`
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
`,i6=h.div`
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
`,a6=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,r6=h.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,l6=h.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,s6=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,o6=h.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,c6=h.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,u6=h.button`
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
`,d6=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,f6=h.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,h6=h.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,m6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Aa=h.div`
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
`,O0=h.div`
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
`,Ra=h.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ca=h.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ma=h.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,Ba=h.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Ce=h.li`
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
`,Da=h.button`
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
`,g6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,p6=h.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,x6=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,b6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,fd=h.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,hd=h.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,md=h.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,gd=h.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,y6=h.a`
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
`,v6=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,j6=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,S6=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Oa=h.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Na=h.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,Ha=h.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function w6(){return r.jsxs(r.Fragment,{children:[r.jsx(Y3,{children:r.jsxs($3,{children:[r.jsx(q3,{children:"SCKW Jobbörse"}),r.jsx(K3,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),r.jsxs(Z3,{children:[r.jsxs(X3,{children:[r.jsx(Q3,{children:"Willkommen bei der SCKW Jobbörse"}),r.jsx(P3,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),r.jsxs(J3,{children:[r.jsxs(W3,{children:[r.jsx(F3,{children:"So könnte es aussehen"}),r.jsx(I3,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),r.jsx(e6,{children:V3.map(a=>r.jsxs(t6,{children:[a.isExample&&r.jsx(n6,{children:"MUSTER"}),r.jsx(i6,{children:r.jsx(a6,{src:`/sponsors/${a.logo}`,alt:`${a.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=a.company.substring(0,2).toUpperCase()}})}),r.jsx(r6,{children:a.title}),r.jsx(l6,{children:a.company}),r.jsx(s6,{children:a.tags.map((s,u)=>r.jsx(o6,{children:s},u))}),r.jsx(c6,{children:a.description}),r.jsx(u6,{children:"Mehr erfahren"})]},a.id))})]}),r.jsxs(d6,{children:[r.jsx(f6,{children:"Preise für Stellenausschreibungen"}),r.jsx(h6,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),r.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),r.jsxs(m6,{children:[r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Basis"}),r.jsx(Ca,{children:"149 €"}),r.jsx(Ma,{children:"netto / Anzeige"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"30 Tage auf Website (Jobbereich)"}),r.jsx(Ce,{children:"Firmenlogo und Link"}),r.jsx(Ce,{children:"Detaillierte Stellenbeschreibung"}),r.jsx(Ce,{children:"Bewerbermanagement"})]}),r.jsx(Da,{className:"secondary",children:"Basis wählen"})]}),r.jsxs(Aa,{className:"popular",children:[r.jsx(O0,{children:"BELIEBT"}),r.jsx(Ra,{children:"Standard"}),r.jsx(Ca,{children:"229 €"}),r.jsx(Ma,{children:"netto / Anzeige"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Alle Basis-Features"}),r.jsx(Ce,{children:"1 Social Media Post"}),r.jsx(Ce,{children:"Instagram + Facebook Reichweite"}),r.jsx(Ce,{children:"Newsletter-Erwähnung"})]}),r.jsx(Da,{children:"Standard wählen"})]}),r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Boosted"}),r.jsx(Ca,{children:"349 €"}),r.jsx(Ma,{children:"netto / Anzeige"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Alle Standard-Features"}),r.jsx(Ce,{children:"Instagram Story"}),r.jsx(Ce,{children:"Stadionmagazin-Erwähnung"}),r.jsx(Ce,{children:"Prioritäre Platzierung"})]}),r.jsx(Da,{className:"secondary",children:"Boosted wählen"})]})]}),r.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),r.jsxs(g6,{children:[r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Job Flat SMALL"}),r.jsx(Ca,{children:"799 €"}),r.jsx(Ma,{children:"netto / Jahr"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Bis zu 6 Anzeigen im Jahr"}),r.jsx(Ce,{children:"6 Social Media Posts"}),r.jsx(Ce,{children:"Website-Präsenz"}),r.jsx(Ce,{children:"Newsletter-Integration"})]}),r.jsx(Da,{className:"secondary",children:"Small Flat"})]}),r.jsxs(Aa,{className:"popular",children:[r.jsx(O0,{children:"EMPFOHLEN"}),r.jsx(Ra,{children:"Job Flat MEDIUM"}),r.jsx(Ca,{children:"1.199 €"}),r.jsx(Ma,{children:"netto / Jahr"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Bis zu 12 Anzeigen im Jahr"}),r.jsx(Ce,{children:"Stadionmagazin-Präsenz"}),r.jsx(Ce,{children:"Social Media Posts"}),r.jsx(Ce,{children:"Stories & Highlights"})]}),r.jsx(Da,{children:"Medium Flat"})]}),r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Job Flat PARTNER"}),r.jsx(Ca,{children:"1.499 €"}),r.jsx(Ma,{children:"netto / Jahr"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Unbegrenzte Anzeigen"}),r.jsx(Ce,{children:"Erwähnung bei Heimspielen"}),r.jsx(Ce,{children:'"Top Partner" Sichtbarkeit'}),r.jsx(Ce,{children:"Prioritärer Support"})]}),r.jsx(Da,{className:"secondary",children:"Partner Flat"})]})]}),r.jsxs(p6,{children:[r.jsx(x6,{children:"➕ Zusatzoptionen"}),r.jsxs(b6,{children:[r.jsxs(fd,{children:[r.jsx(hd,{children:"Social Story"}),r.jsx(md,{children:"39 €"}),r.jsx(gd,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),r.jsxs(fd,{children:[r.jsx(hd,{children:"Designservice"}),r.jsx(md,{children:"59 €"}),r.jsx(gd,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),r.jsxs(fd,{children:[r.jsx(hd,{children:"Stadionmagazin"}),r.jsx(md,{children:"99 €"}),r.jsx(gd,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),r.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:r.jsx(y6,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),r.jsxs(v6,{children:[r.jsx(j6,{children:"🎯 Warum SCKW Jobbörse?"}),r.jsxs(S6,{children:[r.jsxs(Oa,{children:[r.jsx(Na,{children:"🏠"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"👥"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"💰"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"📈"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"⚡"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"🤲"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),r.jsx(qd,{})]})}h.div`
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
`;h.div`
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
`;h.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;h.div`
  margin-bottom: 1.5rem;
`;h.div`
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
`;h.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;h.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${a=>Math.min(a.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`;h.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;h.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`;h.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;h.div`
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
`;h.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;h.div`
  flex: 1;
`;h.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;h.span`
  font-weight: 600;
  color: #374151;
`;h.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`;h.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`;h.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`;h.button`
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
`;h.div`
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
`;h.section`
  background: url("${Kd("herren",18)}") center/cover;
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
`;h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`;h.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;h.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`;h.main`
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
`;h.section`
  margin-bottom: 4rem;
`;h.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`;h.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;h.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`;h.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;h.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`;h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;h.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;h.div`
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
`;h.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;h.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`;h.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`;h.div`
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
`;h.div`
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
`;h.div`
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
`;h.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;h.button`
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
`;h.button`
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
`;h.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`;h.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`;h.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;h.div`
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
`;h.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;h.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`;h.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`;h.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`;h.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`;h.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;h.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`;h.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;h.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`;h.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`;h.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;h.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;h.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;h.a`
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
`;h.div`
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
`;h.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;h.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`;h.button`
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
`;h.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;h.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;h.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;h.button`
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
`;h.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;Tx();function z6(a,s){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),d=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(d),s&&(c.href=s),d.href=a,d.href}const E6=(()=>{let a=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${s()}${a}`)})();function gi(a){const s=[];for(let u=0,c=a.length;u<c;u++)s.push(a[u]);return s}let La=null;function Dx(a={}){return La||(a.includeStyleProperties?(La=a.includeStyleProperties,La):(La=gi(window.getComputedStyle(document.documentElement)),La))}function Ws(a,s){const c=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function _6(a){const s=Ws(a,"border-left-width"),u=Ws(a,"border-right-width");return a.clientWidth+s+u}function T6(a){const s=Ws(a,"border-top-width"),u=Ws(a,"border-bottom-width");return a.clientHeight+s+u}function Ox(a,s={}){const u=s.width||_6(a),c=s.height||T6(a);return{width:u,height:c}}function k6(){let a,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(a=parseInt(u,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const Rt=16384;function A6(a){(a.width>Rt||a.height>Rt)&&(a.width>Rt&&a.height>Rt?a.width>a.height?(a.height*=Rt/a.width,a.width=Rt):(a.width*=Rt/a.height,a.height=Rt):a.width>Rt?(a.height*=Rt/a.width,a.width=Rt):(a.width*=Rt/a.height,a.height=Rt))}function Fs(a){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=a})}async function R6(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function C6(a,s,u){const c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"svg"),m=document.createElementNS(c,"foreignObject");return d.setAttribute("width",`${s}`),d.setAttribute("height",`${u}`),d.setAttribute("viewBox",`0 0 ${s} ${u}`),m.setAttribute("width","100%"),m.setAttribute("height","100%"),m.setAttribute("x","0"),m.setAttribute("y","0"),m.setAttribute("externalResourcesRequired","true"),d.appendChild(m),m.appendChild(a),R6(d)}const bt=(a,s)=>{if(a instanceof s)return!0;const u=Object.getPrototypeOf(a);return u===null?!1:u.constructor.name===s.name||bt(u,s)};function M6(a){const s=a.getPropertyValue("content");return`${a.cssText} content: '${s.replace(/'|"/g,"")}';`}function B6(a,s){return Dx(s).map(u=>{const c=a.getPropertyValue(u),d=a.getPropertyPriority(u);return`${u}: ${c}${d?" !important":""};`}).join(" ")}function D6(a,s,u,c){const d=`.${a}:${s}`,m=u.cssText?M6(u):B6(u,c);return document.createTextNode(`${d}{${m}}`)}function N0(a,s,u,c){const d=window.getComputedStyle(a,u),m=d.getPropertyValue("content");if(m===""||m==="none")return;const p=E6();try{s.className=`${s.className} ${p}`}catch{return}const y=document.createElement("style");y.appendChild(D6(p,u,d,c)),s.appendChild(y)}function O6(a,s,u){N0(a,s,":before",u),N0(a,s,":after",u)}const H0="application/font-woff",L0="image/jpeg",N6={woff:H0,woff2:H0,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:L0,jpeg:L0,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function H6(a){const s=/\.([^./]*?)$/g.exec(a);return s?s[1]:""}function Qd(a){const s=H6(a).toLowerCase();return N6[s]||""}function L6(a){return a.split(/,/)[1]}function Ad(a){return a.search(/^(data:)/)!==-1}function U6(a,s){return`data:${s};base64,${a}`}async function Nx(a,s,u){const c=await fetch(a,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const d=await c.blob();return new Promise((m,p)=>{const y=new FileReader;y.onerror=p,y.onloadend=()=>{try{m(u({res:c,result:y.result}))}catch(b){p(b)}},y.readAsDataURL(d)})}const pd={};function G6(a,s,u){let c=a.replace(/\?.*/,"");return u&&(c=a),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Pd(a,s,u){const c=G6(a,s,u.includeQueryParams);if(pd[c]!=null)return pd[c];u.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let d;try{const m=await Nx(a,u.fetchRequestInit,({res:p,result:y})=>(s||(s=p.headers.get("Content-Type")||""),L6(y)));d=U6(m,s)}catch(m){d=u.imagePlaceholder||"";let p=`Failed to fetch resource: ${a}`;m&&(p=typeof m=="string"?m:m.message),p&&console.warn(p)}return pd[c]=d,d}async function V6(a){const s=a.toDataURL();return s==="data:,"?a.cloneNode(!1):Fs(s)}async function Y6(a,s){if(a.currentSrc){const m=document.createElement("canvas"),p=m.getContext("2d");m.width=a.clientWidth,m.height=a.clientHeight,p?.drawImage(a,0,0,m.width,m.height);const y=m.toDataURL();return Fs(y)}const u=a.poster,c=Qd(u),d=await Pd(u,c,s);return Fs(d)}async function $6(a,s){var u;try{if(!((u=a?.contentDocument)===null||u===void 0)&&u.body)return await oo(a.contentDocument.body,s,!0)}catch{}return a.cloneNode(!1)}async function q6(a,s){return bt(a,HTMLCanvasElement)?V6(a):bt(a,HTMLVideoElement)?Y6(a,s):bt(a,HTMLIFrameElement)?$6(a,s):a.cloneNode(Hx(a))}const K6=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",Hx=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function Z6(a,s,u){var c,d;if(Hx(s))return s;let m=[];return K6(a)&&a.assignedNodes?m=gi(a.assignedNodes()):bt(a,HTMLIFrameElement)&&(!((c=a.contentDocument)===null||c===void 0)&&c.body)?m=gi(a.contentDocument.body.childNodes):m=gi(((d=a.shadowRoot)!==null&&d!==void 0?d:a).childNodes),m.length===0||bt(a,HTMLVideoElement)||await m.reduce((p,y)=>p.then(()=>oo(y,u)).then(b=>{b&&s.appendChild(b)}),Promise.resolve()),s}function X6(a,s,u){const c=s.style;if(!c)return;const d=window.getComputedStyle(a);d.cssText?(c.cssText=d.cssText,c.transformOrigin=d.transformOrigin):Dx(u).forEach(m=>{let p=d.getPropertyValue(m);m==="font-size"&&p.endsWith("px")&&(p=`${Math.floor(parseFloat(p.substring(0,p.length-2)))-.1}px`),bt(a,HTMLIFrameElement)&&m==="display"&&p==="inline"&&(p="block"),m==="d"&&s.getAttribute("d")&&(p=`path(${s.getAttribute("d")})`),c.setProperty(m,p,d.getPropertyPriority(m))})}function Q6(a,s){bt(a,HTMLTextAreaElement)&&(s.innerHTML=a.value),bt(a,HTMLInputElement)&&s.setAttribute("value",a.value)}function P6(a,s){if(bt(a,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(d=>a.value===d.getAttribute("value"));c&&c.setAttribute("selected","")}}function J6(a,s,u){return bt(s,Element)&&(X6(a,s,u),O6(a,s,u),Q6(a,s),P6(a,s)),s}async function W6(a,s){const u=a.querySelectorAll?a.querySelectorAll("use"):[];if(u.length===0)return a;const c={};for(let m=0;m<u.length;m++){const y=u[m].getAttribute("xlink:href");if(y){const b=a.querySelector(y),x=document.querySelector(y);!b&&x&&!c[y]&&(c[y]=await oo(x,s,!0))}}const d=Object.values(c);if(d.length){const m="http://www.w3.org/1999/xhtml",p=document.createElementNS(m,"svg");p.setAttribute("xmlns",m),p.style.position="absolute",p.style.width="0",p.style.height="0",p.style.overflow="hidden",p.style.display="none";const y=document.createElementNS(m,"defs");p.appendChild(y);for(let b=0;b<d.length;b++)y.appendChild(d[b]);a.appendChild(p)}return a}async function oo(a,s,u){return!u&&s.filter&&!s.filter(a)?null:Promise.resolve(a).then(c=>q6(c,s)).then(c=>Z6(a,c,s)).then(c=>J6(a,c,s)).then(c=>W6(c,s))}const Lx=/url\((['"]?)([^'"]+?)\1\)/g,F6=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,I6=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function ez(a){const s=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function tz(a){const s=[];return a.replace(Lx,(u,c,d)=>(s.push(d),u)),s.filter(u=>!Ad(u))}async function nz(a,s,u,c,d){try{const m=u?z6(s,u):s,p=Qd(s);let y;return d||(y=await Pd(m,p,c)),a.replace(ez(s),`$1${y}$3`)}catch{}return a}function iz(a,{preferredFontFormat:s}){return s?a.replace(I6,u=>{for(;;){const[c,,d]=F6.exec(u)||[];if(!d)return"";if(d===s)return`src: ${c};`}}):a}function Ux(a){return a.search(Lx)!==-1}async function Gx(a,s,u){if(!Ux(a))return a;const c=iz(a,u);return tz(c).reduce((m,p)=>m.then(y=>nz(y,p,s,u)),Promise.resolve(c))}async function Ua(a,s,u){var c;const d=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(a);if(d){const m=await Gx(d,null,u);return s.style.setProperty(a,m,s.style.getPropertyPriority(a)),!0}return!1}async function az(a,s){await Ua("background",a,s)||await Ua("background-image",a,s),await Ua("mask",a,s)||await Ua("-webkit-mask",a,s)||await Ua("mask-image",a,s)||await Ua("-webkit-mask-image",a,s)}async function rz(a,s){const u=bt(a,HTMLImageElement);if(!(u&&!Ad(a.src))&&!(bt(a,SVGImageElement)&&!Ad(a.href.baseVal)))return;const c=u?a.src:a.href.baseVal,d=await Pd(c,Qd(c),s);await new Promise((m,p)=>{a.onload=m,a.onerror=s.onImageErrorHandler?(...b)=>{try{m(s.onImageErrorHandler(...b))}catch(x){p(x)}}:p;const y=a;y.decode&&(y.decode=m),y.loading==="lazy"&&(y.loading="eager"),u?(a.srcset="",a.src=d):a.href.baseVal=d})}async function lz(a,s){const c=gi(a.childNodes).map(d=>Vx(d,s));await Promise.all(c).then(()=>a)}async function Vx(a,s){bt(a,Element)&&(await az(a,s),await rz(a,s),await lz(a,s))}function sz(a,s){const{style:u}=a;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(d=>{u[d]=c[d]}),a}const U0={};async function G0(a){let s=U0[a];if(s!=null)return s;const c=await(await fetch(a)).text();return s={url:a,cssText:c},U0[a]=s,s}async function V0(a,s){let u=a.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,m=(u.match(/url\([^)]+\)/g)||[]).map(async p=>{let y=p.replace(c,"$1");return y.startsWith("https://")||(y=new URL(y,a.url).href),Nx(y,s.fetchRequestInit,({result:b})=>(u=u.replace(p,`url(${b})`),[p,b]))});return Promise.all(m).then(()=>u)}function Y0(a){if(a==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=a.replace(u,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const b=d.exec(c);if(b===null)break;s.push(b[0])}c=c.replace(d,"");const m=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,p="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",y=new RegExp(p,"gi");for(;;){let b=m.exec(c);if(b===null){if(b=y.exec(c),b===null)break;m.lastIndex=y.lastIndex}else y.lastIndex=m.lastIndex;s.push(b[0])}return s}async function oz(a,s){const u=[],c=[];return a.forEach(d=>{if("cssRules"in d)try{gi(d.cssRules||[]).forEach((m,p)=>{if(m.type===CSSRule.IMPORT_RULE){let y=p+1;const b=m.href,x=G0(b).then(w=>V0(w,s)).then(w=>Y0(w).forEach(R=>{try{d.insertRule(R,R.startsWith("@import")?y+=1:d.cssRules.length)}catch(C){console.error("Error inserting rule from remote css",{rule:R,error:C})}})).catch(w=>{console.error("Error loading remote css",w.toString())});c.push(x)}})}catch(m){const p=a.find(y=>y.href==null)||document.styleSheets[0];d.href!=null&&c.push(G0(d.href).then(y=>V0(y,s)).then(y=>Y0(y).forEach(b=>{p.insertRule(b,p.cssRules.length)})).catch(y=>{console.error("Error loading remote stylesheet",y)})),console.error("Error inlining remote css file",m)}}),Promise.all(c).then(()=>(a.forEach(d=>{if("cssRules"in d)try{gi(d.cssRules||[]).forEach(m=>{u.push(m)})}catch(m){console.error(`Error while reading CSS rules from ${d.href}`,m)}}),u))}function cz(a){return a.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>Ux(s.style.getPropertyValue("src")))}async function uz(a,s){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=gi(a.ownerDocument.styleSheets),c=await oz(u,s);return cz(c)}function Yx(a){return a.trim().replace(/["']/g,"")}function dz(a){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(m=>{s.add(Yx(m))}),Array.from(c.children).forEach(m=>{m instanceof HTMLElement&&u(m)})}return u(a),s}async function fz(a,s){const u=await uz(a,s),c=dz(a);return(await Promise.all(u.filter(m=>c.has(Yx(m.style.fontFamily))).map(m=>{const p=m.parentStyleSheet?m.parentStyleSheet.href:null;return Gx(m.cssText,p,s)}))).join(`
`)}async function hz(a,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await fz(a,s);if(u){const c=document.createElement("style"),d=document.createTextNode(u);c.appendChild(d),a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)}}async function mz(a,s={}){const{width:u,height:c}=Ox(a,s),d=await oo(a,s,!0);return await hz(d,s),await Vx(d,s),sz(d,s),await C6(d,u,c)}async function gz(a,s={}){const{width:u,height:c}=Ox(a,s),d=await mz(a,s),m=await Fs(d),p=document.createElement("canvas"),y=p.getContext("2d"),b=s.pixelRatio||k6(),x=s.canvasWidth||u,w=s.canvasHeight||c;return p.width=x*b,p.height=w*b,s.skipAutoScale||A6(p),p.style.width=`${x}`,p.style.height=`${w}`,s.backgroundColor&&(y.fillStyle=s.backgroundColor,y.fillRect(0,0,p.width,p.height)),y.drawImage(m,0,0,p.width,p.height),p}async function pz(a,s={}){return(await gz(a,s)).toDataURL()}const el=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],xz=h.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,bz=h.div`
  max-width: 1200px;
  margin: 0 auto;
`,yz=h.div`
  text-align: center;
  margin-bottom: 2rem;
`,vz=h.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,jz=h.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,Sz=h.select`
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
`,wz=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,zz=h.div`
  flex: 1;
  min-width: 0;
`,Ez=h.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,_z=h.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,Tz=h.div`
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
`,kz=h.img`
  width: ${a=>a.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
`,Az=h.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,Rz=h.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,Cz=h.div`
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
`,Mz=h.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,Bz=h.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Dz=h.label`
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
`,Oz=h.button`
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
`,Nz=h.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,Hz=h.input`
  display: none;
`,Lz=h.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,Uz=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Gz=h.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,Vz=h.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,Yz=h.button`
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
`,$z=h.button`
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
`;function qz(){const[a,s]=A.useState(el[0].id),[u,c]=A.useState(null),[d,m]=A.useState([]),[p,y]=A.useState(!1),b=A.useRef({}),x=A.useRef(null),w=el.find(L=>L.id===a)??el[0],R=L=>d.find(G=>G.zoneId===L),C=A.useCallback((L,G)=>{if(!G)return;const P=new FileReader;P.onload=X=>{const ne=X.target?.result;m(H=>[...H.filter(ve=>ve.zoneId!==L),{zoneId:L,dataUrl:ne,scale:1}])},P.readAsDataURL(G)},[]),V=A.useCallback((L,G)=>{m(P=>P.map(X=>X.zoneId===L?{...X,scale:G}:X))},[]),Y=A.useCallback(L=>{m(G=>G.filter(P=>P.zoneId!==L))},[]),$=A.useCallback(()=>{m([]),c(null)},[]),Q=A.useCallback(async()=>{if(x.current){y(!0);try{const L=await pz(x.current,{pixelRatio:2,cacheBust:!0}),G=document.createElement("a");G.download=`${w.label}-mockup.png`,G.href=L,G.click()}finally{y(!1)}}},[w.label]),U=L=>{c(L.id),R(L.id)||b.current[L.id]?.click()};return r.jsx(xz,{children:r.jsxs(bz,{children:[r.jsxs(yz,{children:[r.jsx(vz,{children:"Mockup Generator"}),r.jsx(jz,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),el.length>1&&r.jsx(Sz,{value:a,onChange:L=>{s(L.target.value),m([]),c(null)},children:el.map(L=>r.jsx("option",{value:L.id,children:L.label},L.id))}),r.jsxs(wz,{children:[r.jsx(zz,{children:r.jsxs(Ez,{ref:x,children:[r.jsx(_z,{src:w.image,alt:w.label,draggable:!1}),w.zones.map(L=>{const G=R(L.id);return r.jsx(Tz,{$active:u===L.id,$hasLogo:!!G,style:{left:`${L.x}%`,top:`${L.y}%`,width:`${L.width}%`,height:`${L.height}%`},onClick:()=>U(L),onDragOver:P=>{P.preventDefault(),c(L.id)},onDrop:P=>{P.preventDefault();const X=P.dataTransfer.files?.[0];C(L.id,X)},children:G&&r.jsx(kz,{src:G.dataUrl,alt:"Logo",draggable:!1,$scale:G.scale})},L.id)})]})}),r.jsxs(Az,{children:[r.jsx(Rz,{children:"Werbeflächen"}),w.zones.map(L=>{const G=R(L.id);return r.jsxs(Cz,{$active:u===L.id,onClick:()=>c(L.id),children:[r.jsx(Mz,{children:L.label}),r.jsxs(Bz,{children:[r.jsx(Dz,{htmlFor:`file-${L.id}`,children:G?"Ändern":"Logo hochladen"}),r.jsx(Hz,{id:`file-${L.id}`,ref:P=>{b.current[L.id]=P},type:"file",accept:"image/*",onChange:P=>C(L.id,P.target.files?.[0])}),G&&r.jsx(Oz,{onClick:P=>{P.stopPropagation(),Y(L.id)},children:"Entfernen"}),G&&r.jsx(Nz,{src:G.dataUrl,alt:"Vorschau"})]}),G&&r.jsxs(Uz,{children:[r.jsxs(Gz,{children:[Math.round(G.scale*100),"%"]}),r.jsx(Vz,{type:"range",min:"0.3",max:"3",step:"0.05",value:G.scale,onClick:P=>P.stopPropagation(),onChange:P=>{P.stopPropagation(),V(L.id,parseFloat(P.target.value))}})]}),!G&&r.jsx(Lz,{children:"Klicken oder Bild hierher ziehen"})]},L.id)}),d.length>0&&r.jsxs(r.Fragment,{children:[r.jsx($z,{onClick:Q,disabled:p,children:p?"Wird erstellt...":"Bild herunterladen"}),r.jsx(Yz,{onClick:$,children:"Alle Logos entfernen"})]})]})]})]})})}const Kz=!1;function Zz(){return r.jsx(Hj,{children:r.jsxs(hj,{children:[r.jsx(On,{path:"/",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(Ys,{to:"/sponsoring",replace:!0})]})}),r.jsx(On,{path:"/sponsoring",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(d3,{})]})}),r.jsx(On,{path:"/sponsoring-v2",element:r.jsx(Ys,{to:"/sponsoring",replace:!0})}),r.jsx(On,{path:"/sponsoring-v1",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(d5,{})]})}),r.jsx(On,{path:"/sponsoring-handoff",element:r.jsx(G3,{})}),r.jsx(On,{path:"/mockup-generator",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(qz,{})]})}),r.jsx(On,{path:"/jobs",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(w6,{})]})}),Kz,r.jsx(On,{path:"*",element:r.jsx(Ys,{to:"/sponsoring",replace:!0})})]})})}const Xz={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");jy.createRoot(document.getElementById("root")).render(r.jsx(A.StrictMode,{children:r.jsx(vv,{theme:Xz,children:r.jsx(Zz,{})})}));
