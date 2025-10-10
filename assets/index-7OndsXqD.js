(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function s(d){if(d.ep)return;d.ep=!0;const g=c(d);fetch(d.href,g)}})();function bb(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var zc={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function yb(){if(Ag)return hi;Ag=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(s,d,g){var p=null;if(g!==void 0&&(p=""+g),d.key!==void 0&&(p=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:l,type:s,key:p,ref:d!==void 0?d:null,props:g}}return hi.Fragment=u,hi.jsx=c,hi.jsxs=c,hi}var Rg;function vb(){return Rg||(Rg=1,zc.exports=yb()),zc.exports}var o=vb(),wc={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function xb(){if(Mg)return ie;Mg=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function D(x){return x===null||typeof x!="object"?null:(x=R&&x[R]||x["@@iterator"],typeof x=="function"?x:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,L={};function X(x,k,Y){this.props=x,this.context=k,this.refs=L,this.updater=Y||H}X.prototype.isReactComponent={},X.prototype.setState=function(x,k){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,k,"setState")},X.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function U(){}U.prototype=X.prototype;function $(x,k,Y){this.props=x,this.context=k,this.refs=L,this.updater=Y||H}var Q=$.prototype=new U;Q.constructor=$,G(Q,X.prototype),Q.isPureReactComponent=!0;var ae=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(x,k,Y,V,F,oe){return Y=oe.ref,{$$typeof:l,type:x,key:k,ref:Y!==void 0?Y:null,props:oe}}function we(x,k){return W(x.type,k,void 0,void 0,void 0,x.props)}function _e(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function at(x){var k={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return k[Y]})}var it=/\/+/g;function Ye(x,k){return typeof x=="object"&&x!==null&&x.key!=null?at(""+x.key):k.toString(36)}function Zt(){}function Kt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Zt,Zt):(x.status="pending",x.then(function(k){x.status==="pending"&&(x.status="fulfilled",x.value=k)},function(k){x.status==="pending"&&(x.status="rejected",x.reason=k)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function qe(x,k,Y,V,F){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(oe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case l:case u:ee=!0;break;case w:return ee=x._init,qe(ee(x._payload),k,Y,V,F)}}if(ee)return F=F(x),ee=V===""?"."+Ye(x,0):V,ae(F)?(Y="",ee!=null&&(Y=ee.replace(it,"$&/")+"/"),qe(F,k,Y,"",function(Pe){return Pe})):F!=null&&(_e(F)&&(F=we(F,Y+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(it,"$&/")+"/")+ee)),k.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(x))for(var pe=0;pe<x.length;pe++)V=x[pe],oe=Ve+Ye(V,pe),ee+=qe(V,k,Y,oe,F);else if(pe=D(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(V=x.next()).done;)V=V.value,oe=Ve+Ye(V,pe++),ee+=qe(V,k,Y,oe,F);else if(oe==="object"){if(typeof x.then=="function")return qe(Kt(x),k,Y,V,F);throw k=String(x),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ee}function O(x,k,Y){if(x==null)return x;var V=[],F=0;return qe(x,V,"","",function(oe){return k.call(Y,oe,F++)}),V}function q(x){if(x._status===-1){var k=x._result;k=k(),k.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=k)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ce(){}return ie.Children={map:O,forEach:function(x,k,Y){O(x,function(){k.apply(this,arguments)},Y)},count:function(x){var k=0;return O(x,function(){k++}),k},toArray:function(x){return O(x,function(k){return k})||[]},only:function(x){if(!_e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=X,ie.Fragment=c,ie.Profiler=d,ie.PureComponent=$,ie.StrictMode=s,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Z.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cloneElement=function(x,k,Y){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=G({},x.props),F=x.key,oe=void 0;if(k!=null)for(ee in k.ref!==void 0&&(oe=void 0),k.key!==void 0&&(F=""+k.key),k)!le.call(k,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&k.ref===void 0||(V[ee]=k[ee]);var ee=arguments.length-2;if(ee===1)V.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(x.type,F,void 0,void 0,oe,V)},ie.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},ie.createElement=function(x,k,Y){var V,F={},oe=null;if(k!=null)for(V in k.key!==void 0&&(oe=""+k.key),k)le.call(k,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=k[V]);var ee=arguments.length-2;if(ee===1)F.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(x&&x.defaultProps)for(V in ee=x.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(x,oe,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:j,render:x}},ie.isValidElement=_e,ie.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:q}},ie.memo=function(x,k){return{$$typeof:m,type:x,compare:k===void 0?null:k}},ie.startTransition=function(x){var k=Z.T,Y={};Z.T=Y;try{var V=x(),F=Z.S;F!==null&&F(Y,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ce,P)}catch(oe){P(oe)}finally{Z.T=k}},ie.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ie.use=function(x){return Z.H.use(x)},ie.useActionState=function(x,k,Y){return Z.H.useActionState(x,k,Y)},ie.useCallback=function(x,k){return Z.H.useCallback(x,k)},ie.useContext=function(x){return Z.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,k){return Z.H.useDeferredValue(x,k)},ie.useEffect=function(x,k,Y){var V=Z.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,k)},ie.useId=function(){return Z.H.useId()},ie.useImperativeHandle=function(x,k,Y){return Z.H.useImperativeHandle(x,k,Y)},ie.useInsertionEffect=function(x,k){return Z.H.useInsertionEffect(x,k)},ie.useLayoutEffect=function(x,k){return Z.H.useLayoutEffect(x,k)},ie.useMemo=function(x,k){return Z.H.useMemo(x,k)},ie.useOptimistic=function(x,k){return Z.H.useOptimistic(x,k)},ie.useReducer=function(x,k,Y){return Z.H.useReducer(x,k,Y)},ie.useRef=function(x){return Z.H.useRef(x)},ie.useState=function(x){return Z.H.useState(x)},ie.useSyncExternalStore=function(x,k,Y){return Z.H.useSyncExternalStore(x,k,Y)},ie.useTransition=function(){return Z.H.useTransition()},ie.version="19.1.0",ie}var Dg;function vo(){return Dg||(Dg=1,wc.exports=xb()),wc.exports}var M=vo();const sa=bb(M);var Tc={exports:{}},gi={},Ac={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Sb(){return Og||(Og=1,function(l){function u(O,q){var P=O.length;O.push(q);e:for(;0<P;){var ce=P-1>>>1,x=O[ce];if(0<d(x,q))O[ce]=q,O[P]=x,P=ce;else break e}}function c(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var q=O[0],P=O.pop();if(P!==q){O[0]=P;e:for(var ce=0,x=O.length,k=x>>>1;ce<k;){var Y=2*(ce+1)-1,V=O[Y],F=Y+1,oe=O[F];if(0>d(V,P))F<x&&0>d(oe,V)?(O[ce]=oe,O[F]=P,ce=F):(O[ce]=V,O[Y]=P,ce=Y);else if(F<x&&0>d(oe,P))O[ce]=oe,O[F]=P,ce=F;else break e}}return q}function d(O,q){var P=O.sortIndex-q.sortIndex;return P!==0?P:O.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var p=Date,j=p.now();l.unstable_now=function(){return p.now()-j}}var y=[],m=[],w=1,R=null,D=3,H=!1,G=!1,L=!1,X=!1,U=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function ae(O){for(var q=c(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=O)s(m),q.sortIndex=q.expirationTime,u(y,q);else break;q=c(m)}}function Z(O){if(L=!1,ae(O),!G)if(c(y)!==null)G=!0,le||(le=!0,Ye());else{var q=c(m);q!==null&&qe(Z,q.startTime-O)}}var le=!1,W=-1,we=5,_e=-1;function at(){return X?!0:!(l.unstable_now()-_e<we)}function it(){if(X=!1,le){var O=l.unstable_now();_e=O;var q=!0;try{e:{G=!1,L&&(L=!1,$(W),W=-1),H=!0;var P=D;try{t:{for(ae(O),R=c(y);R!==null&&!(R.expirationTime>O&&at());){var ce=R.callback;if(typeof ce=="function"){R.callback=null,D=R.priorityLevel;var x=ce(R.expirationTime<=O);if(O=l.unstable_now(),typeof x=="function"){R.callback=x,ae(O),q=!0;break t}R===c(y)&&s(y),ae(O)}else s(y);R=c(y)}if(R!==null)q=!0;else{var k=c(m);k!==null&&qe(Z,k.startTime-O),q=!1}}break e}finally{R=null,D=P,H=!1}q=void 0}}finally{q?Ye():le=!1}}}var Ye;if(typeof Q=="function")Ye=function(){Q(it)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Kt=Zt.port2;Zt.port1.onmessage=it,Ye=function(){Kt.postMessage(null)}}else Ye=function(){U(it,0)};function qe(O,q){W=U(function(){O(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(O){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var P=D;D=q;try{return O()}finally{D=P}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var P=D;D=O;try{return q()}finally{D=P}},l.unstable_scheduleCallback=function(O,q,P){var ce=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ce+P:ce):P=ce,O){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,O={id:w++,callback:q,priorityLevel:O,startTime:P,expirationTime:x,sortIndex:-1},P>ce?(O.sortIndex=P,u(m,O),c(y)===null&&O===c(m)&&(L?($(W),W=-1):L=!0,qe(Z,P-ce))):(O.sortIndex=x,u(y,O),G||H||(G=!0,le||(le=!0,Ye()))),O},l.unstable_shouldYield=at,l.unstable_wrapCallback=function(O){var q=D;return function(){var P=D;D=q;try{return O.apply(this,arguments)}finally{D=P}}}}(Rc)),Rc}var Cg;function jb(){return Cg||(Cg=1,Ac.exports=Sb()),Ac.exports}var Mc={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function _b(){if(Bg)return tt;Bg=1;var l=vo();function u(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)m+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(y,m,w){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:y,containerInfo:m,implementation:w}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,tt.createPortal=function(y,m){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return g(y,m,null,w)},tt.flushSync=function(y){var m=p.T,w=s.p;try{if(p.T=null,s.p=2,y)return y()}finally{p.T=m,s.p=w,s.d.f()}},tt.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(y,m))},tt.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},tt.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var w=m.as,R=j(w,m.crossOrigin),D=typeof m.integrity=="string"?m.integrity:void 0,H=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;w==="style"?s.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:R,integrity:D,fetchPriority:H}):w==="script"&&s.d.X(y,{crossOrigin:R,integrity:D,fetchPriority:H,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},tt.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var w=j(m.as,m.crossOrigin);s.d.M(y,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(y)},tt.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var w=m.as,R=j(w,m.crossOrigin);s.d.L(y,w,{crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},tt.preloadModule=function(y,m){if(typeof y=="string")if(m){var w=j(m.as,m.crossOrigin);s.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(y)},tt.requestFormReset=function(y){s.d.r(y)},tt.unstable_batchedUpdates=function(y,m){return y(m)},tt.useFormState=function(y,m,w){return p.H.useFormState(y,m,w)},tt.useFormStatus=function(){return p.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Ng;function Eb(){if(Ng)return Mc.exports;Ng=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Mc.exports=_b(),Mc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function zb(){if(kg)return gi;kg=1;var l=jb(),u=vo(),c=Eb();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(g(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return j(i),e;if(r===a)return j(i),t;r=r.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,h=i.child;h;){if(h===n){f=!0,n=i,a=r;break}if(h===a){f=!0,a=i,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=i;break}if(h===a){f=!0,a=r,n=i;break}h=h.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,R=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Zt=Symbol.for("react.client.reference");function Kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case X:return"Profiler";case L:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Q:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Kt(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Kt(e(t))}catch{}}return null}var qe=Array.isArray,O=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ce=[],x=-1;function k(e){return{current:e}}function Y(e){0>x||(e.current=ce[x],ce[x]=null,x--)}function V(e,t){x++,ce[x]=e.current,e.current=t}var F=k(null),oe=k(null),ee=k(null),Ve=k(null);function pe(e,t){switch(V(ee,t),V(oe,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ng(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ng(t),e=ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(F),V(F,e)}function Pe(){Y(F),Y(oe),Y(ee)}function Ln(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=ag(t,e.type);t!==n&&(V(oe,e),V(F,n))}function Jt(e){oe.current===e&&(Y(F),Y(oe)),Ve.current===e&&(Y(Ve),si._currentValue=P)}var St=Object.prototype.hasOwnProperty,du=l.unstable_scheduleCallback,hu=l.unstable_cancelCallback,$0=l.unstable_shouldYield,W0=l.unstable_requestPaint,Ht=l.unstable_now,F0=l.unstable_getCurrentPriorityLevel,No=l.unstable_ImmediatePriority,ko=l.unstable_UserBlockingPriority,Ei=l.unstable_NormalPriority,P0=l.unstable_LowPriority,Uo=l.unstable_IdlePriority,I0=l.log,ep=l.unstable_setDisableYieldValue,pl=null,ft=null;function mn(e){if(typeof I0=="function"&&ep(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(pl,e)}catch{}}var dt=Math.clz32?Math.clz32:ap,tp=Math.log,np=Math.LN2;function ap(e){return e>>>=0,e===0?32:31-(tp(e)/np|0)|0}var zi=256,wi=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ti(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?i=Yn(a):(f&=h,f!==0?i=Yn(f):n||(n=h&~e,n!==0&&(i=Yn(n))))):(h=a&~r,h!==0?i=Yn(h):f!==0?i=Yn(f):n||(n=a&~e,n!==0&&(i=Yn(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ho(){var e=zi;return zi<<=1,(zi&4194048)===0&&(zi=256),e}function Go(){var e=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),e}function gu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ip(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,b=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var C=31-dt(n),N=1<<C;h[C]=0,b[C]=-1;var T=z[C];if(T!==null)for(z[C]=null,C=0;C<T.length;C++){var A=T[C];A!==null&&(A.lane&=-536870913)}n&=~N}a!==0&&Lo(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Lo(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Yo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function mu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qo(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function rp(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var pn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+pn,rt="__reactProps$"+pn,fa="__reactContainer$"+pn,bu="__reactEvents$"+pn,up="__reactListeners$"+pn,sp="__reactHandles$"+pn,Vo="__reactResources$"+pn,vl="__reactMarker$"+pn;function yu(e){delete e[Ie],delete e[rt],delete e[bu],delete e[up],delete e[sp]}function da(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fa]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ug(e);e!==null;){if(n=e[Ie])return n;e=ug(e)}return t}e=n,n=e.parentNode}return null}function ha(e){if(e=e[Ie]||e[fa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ga(e){var t=e[Vo];return t||(t=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[vl]=!0}var Xo=new Set,Qo={};function qn(e,t){ma(e,t),ma(e+"Capture",t)}function ma(e,t){for(Qo[e]=t,e=0;e<t.length;e++)Xo.add(t[e])}var cp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zo={},Ko={};function op(e){return St.call(Ko,e)?!0:St.call(Zo,e)?!1:cp.test(e)?Ko[e]=!0:(Zo[e]=!0,!1)}function Ai(e,t,n){if(op(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ri(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function $t(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var vu,Jo;function pa(e){if(vu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vu=t&&t[1]||"",Jo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vu+e+Jo}var xu=!1;function Su(e,t){if(!e||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(A){var T=A}Reflect.construct(e,[],N)}else{try{N.call()}catch(A){T=A}e.call(N.prototype)}}else{try{throw Error()}catch(A){T=A}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var b=f.split(`
`),z=h.split(`
`);for(i=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(a===b.length||i===z.length)for(a=b.length-1,i=z.length-1;1<=a&&0<=i&&b[a]!==z[i];)i--;for(;1<=a&&0<=i;a--,i--)if(b[a]!==z[i]){if(a!==1||i!==1)do if(a--,i--,0>i||b[a]!==z[i]){var C=`
`+b[a].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=a&&0<=i);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pa(n):""}function fp(e){switch(e.tag){case 26:case 27:case 5:return pa(e.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 15:return Su(e.type,!1);case 11:return Su(e.type.render,!1);case 1:return Su(e.type,!0);case 31:return pa("Activity");default:return""}}function $o(e){try{var t="";do t+=fp(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dp(e){var t=Wo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=dp(e))}function Fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Wo(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hp=/[\n"\\]/g;function _t(e){return e.replace(hp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ju(e,t,n,a,i,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?_u(e,f,jt(t)):n!=null?_u(e,f,jt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function Po(e,t,n,a,i,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function _u(e,t,n){t==="number"&&Di(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ba(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Io(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function ef(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(qe(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ya(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||gp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&tf(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&tf(e,r,t[r])}function Eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return pp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zu=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,xa=null;function af(e){var t=ha(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ju(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[rt]||null;if(!i)throw Error(s(90));ju(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Fo(a)}break e;case"textarea":Io(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ba(e,!!n.multiple,t,!1)}}}var Tu=!1;function lf(e,t,n){if(Tu)return e(t,n);Tu=!0;try{var a=e(t);return a}finally{if(Tu=!1,(va!==null||xa!==null)&&(br(),va&&(t=va,e=xa,xa=va=null,af(t),e)))for(t=0;t<e.length;t++)af(e[t])}}function Sl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Wt)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){Au=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{Au=!1}var bn=null,Ru=null,Ci=null;function rf(){if(Ci)return Ci;var e,t=Ru,n=t.length,a,i="value"in bn?bn.value:bn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return Ci=i.slice(e,1<a?1-a:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function uf(){return!1}function ut(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ni:uf,this.isPropagationStopped=uf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=ut(Vn),_l=w({},Vn,{view:0,detail:0}),bp=ut(_l),Mu,Du,El,Ui=w({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(Mu=e.screenX-El.screenX,Du=e.screenY-El.screenY):Du=Mu=0,El=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),sf=ut(Ui),yp=w({},Ui,{dataTransfer:0}),vp=ut(yp),xp=w({},_l,{relatedTarget:0}),Ou=ut(xp),Sp=w({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=ut(Sp),_p=w({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=ut(_p),zp=w({},Vn,{data:0}),cf=ut(zp),wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function Cu(){return Rp}var Mp=w({},_l,{key:function(e){if(e.key){var t=wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=ut(Mp),Op=w({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=ut(Op),Cp=w({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),Bp=ut(Cp),Np=w({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=ut(Np),Up=w({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=ut(Up),Gp=w({},Vn,{newState:0,oldState:0}),Lp=ut(Gp),Yp=[9,13,27,32],Bu=Wt&&"CompositionEvent"in window,zl=null;Wt&&"documentMode"in document&&(zl=document.documentMode);var qp=Wt&&"TextEvent"in window&&!zl,ff=Wt&&(!Bu||zl&&8<zl&&11>=zl),df=" ",hf=!1;function gf(e,t){switch(e){case"keyup":return Yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sa=!1;function Vp(e,t){switch(e){case"compositionend":return mf(t);case"keypress":return t.which!==32?null:(hf=!0,df);case"textInput":return e=t.data,e===df&&hf?null:e;default:return null}}function Xp(e,t){if(Sa)return e==="compositionend"||!Bu&&gf(e,t)?(e=rf(),Ci=Ru=bn=null,Sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function bf(e,t,n,a){va?xa?xa.push(a):xa=[a]:va=a,t=_r(t,"onChange"),0<t.length&&(n=new ki("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var wl=null,Tl=null;function Zp(e){Fh(e,0)}function Hi(e){var t=xl(e);if(Fo(t))return e}function yf(e,t){if(e==="change")return t}var vf=!1;if(Wt){var Nu;if(Wt){var ku="oninput"in document;if(!ku){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),ku=typeof xf.oninput=="function"}Nu=ku}else Nu=!1;vf=Nu&&(!document.documentMode||9<document.documentMode)}function Sf(){wl&&(wl.detachEvent("onpropertychange",jf),Tl=wl=null)}function jf(e){if(e.propertyName==="value"&&Hi(Tl)){var t=[];bf(t,Tl,e,wu(e)),lf(Zp,t)}}function Kp(e,t,n){e==="focusin"?(Sf(),wl=t,Tl=n,wl.attachEvent("onpropertychange",jf)):e==="focusout"&&Sf()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Tl)}function $p(e,t){if(e==="click")return Hi(t)}function Wp(e,t){if(e==="input"||e==="change")return Hi(t)}function Fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Fp;function Al(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!St.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function _f(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var n=_f(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_f(n)}}function zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Di(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pp=Wt&&"documentMode"in document&&11>=document.documentMode,ja=null,Hu=null,Rl=null,Gu=!1;function Tf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||ja==null||ja!==Di(a)||(a=ja,"selectionStart"in a&&Uu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rl&&Al(Rl,a)||(Rl=a,a=_r(Hu,"onSelect"),0<a.length&&(t=new ki("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ja)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _a={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Lu={},Af={};Wt&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function Qn(e){if(Lu[e])return Lu[e];if(!_a[e])return e;var t=_a[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Af)return Lu[e]=t[n];return e}var Rf=Qn("animationend"),Mf=Qn("animationiteration"),Df=Qn("animationstart"),Ip=Qn("transitionrun"),e1=Qn("transitionstart"),t1=Qn("transitioncancel"),Of=Qn("transitionend"),Cf=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Ot(e,t){Cf.set(e,t),qn(t,[e])}var Bf=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var n=Bf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:$o(t)},Bf.set(e,t),t)}return{value:e,source:t,stack:$o(t)}}var zt=[],Ea=0,qu=0;function Gi(){for(var e=Ea,t=qu=Ea=0;t<e;){var n=zt[t];zt[t++]=null;var a=zt[t];zt[t++]=null;var i=zt[t];zt[t++]=null;var r=zt[t];if(zt[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&Nf(n,i,r)}}function Li(e,t,n,a){zt[Ea++]=e,zt[Ea++]=t,zt[Ea++]=n,zt[Ea++]=a,qu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Vu(e,t,n,a){return Li(e,t,n,a),Yi(e)}function za(e,t){return Li(e,null,null,t),Yi(e)}function Nf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-dt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function Yi(e){if(50<ei)throw ei=0,$s=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var wa={};function n1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,a){return new n1(e,t,n,a)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function kf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")Xu(e)&&(f=1);else if(typeof e=="string")f=lb(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=gt(31,n,t,i),e.elementType=_e,e.lanes=r,e;case G:return Zn(n.children,i,r,t);case L:f=8,i|=24;break;case X:return e=gt(12,n,t,i|2),e.elementType=X,e.lanes=r,e;case Z:return e=gt(13,n,t,i),e.elementType=Z,e.lanes=r,e;case le:return e=gt(19,n,t,i),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case Q:f=10;break e;case $:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case we:f=16,a=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=gt(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Zn(e,t,n,a){return e=gt(7,e,a,t),e.lanes=n,e}function Qu(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Zu(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ta=[],Aa=0,Vi=null,Xi=0,wt=[],Tt=0,Kn=null,Pt=1,It="";function Jn(e,t){Ta[Aa++]=Xi,Ta[Aa++]=Vi,Vi=e,Xi=t}function Uf(e,t,n){wt[Tt++]=Pt,wt[Tt++]=It,wt[Tt++]=Kn,Kn=e;var a=Pt;e=It;var i=32-dt(a)-1;a&=~(1<<i),n+=1;var r=32-dt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,Pt=1<<32-dt(t)+i|n<<i|a,It=r+e}else Pt=1<<r|n<<i|a,It=e}function Ku(e){e.return!==null&&(Jn(e,1),Uf(e,1,0))}function Ju(e){for(;e===Vi;)Vi=Ta[--Aa],Ta[Aa]=null,Xi=Ta[--Aa],Ta[Aa]=null;for(;e===Kn;)Kn=wt[--Tt],wt[Tt]=null,It=wt[--Tt],wt[Tt]=null,Pt=wt[--Tt],wt[Tt]=null}var lt=null,Oe=null,me=!1,$n=null,Gt=!1,$u=Error(s(519));function Wn(e){var t=Error(s(418,""));throw Ol(Et(t,e)),$u}function Hf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[rt]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ni.length;n++)de(ni[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Po(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Mi(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),ef(t,a.value,a.defaultValue,a.children),Mi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||tg(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Er),t=!0):t=!1,t||Wn(e)}function Gf(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function Ml(e){if(e!==lt)return!1;if(!me)return Gf(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fc(e.type,e.memoizedProps)),n=!n),n&&Oe&&Wn(e),Gf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,Cn(e.type)?(e=mc,mc=null,Oe=e):Oe=t):Oe=lt?Bt(e.stateNode.nextSibling):null;return!0}function Dl(){Oe=lt=null,me=!1}function Lf(){var e=$n;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),$n=null),e}function Ol(e){$n===null?$n=[e]:$n.push(e)}var Wu=k(null),Fn=null,en=null;function yn(e,t,n){V(Wu,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=Wu.current,Y(Wu)}function Fu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Pu(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var b=0;b<t.length;b++)if(h.context===t[b]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),Fu(r.return,n,e),a||(f=null);break e}r=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(s(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),Fu(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Cl(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=i.type;ht(i.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(i===Ve.current){if(f=i.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(si):e=[si])}i=i.return}e!==null&&Pu(t,e,n,a),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Yf(Fn,e)}function Zi(e,t){return Fn===null&&Pn(e),Yf(e,t)}function Yf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(s(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var a1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},l1=l.unstable_scheduleCallback,i1=l.unstable_NormalPriority,Ge={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new a1,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&l1(i1,function(){e.controller.abort()})}var Nl=null,es=0,Ra=0,Ma=null;function r1(e,t){if(Nl===null){var n=Nl=[];es=0,Ra=nc(),Ma={status:"pending",value:void 0,then:function(a){n.push(a)}}}return es++,t.then(qf,qf),t}function qf(){if(--es===0&&Nl!==null){Ma!==null&&(Ma.status="fulfilled");var e=Nl;Nl=null,Ra=0,Ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function u1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Vf=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&r1(e,t),Vf!==null&&Vf(e,t)};var In=k(null);function ts(){var e=In.current;return e!==null?e:ze.pooledCache}function Ki(e,t){t===null?V(In,In.current):V(In,t.pool)}function Xf(){var e=ts();return e===null?null:{parent:Ge._currentValue,pool:e}}var kl=Error(s(460)),Qf=Error(s(474)),Ji=Error(s(542)),ns={then:function(){}};function Zf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $i(){}function Kf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($i,$i),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$f(e),e;default:if(typeof t.status=="string")t.then($i,$i);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$f(e),e}throw Ul=t,kl}}var Ul=null;function Jf(){if(Ul===null)throw Error(s(459));var e=Ul;return Ul=null,e}function $f(e){if(e===kl||e===Ji)throw Error(s(483))}var vn=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Yi(e),Nf(e,null,n),t}return Li(e,a,t,n),Yi(e)}function Hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Yo(e,n)}}function is(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rs=!1;function Gl(){if(rs){var e=Ma;if(e!==null)throw e}}function Ll(e,t,n,a){rs=!1;var i=e.updateQueue;vn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var b=h,z=b.next;b.next=null,f===null?r=z:f.next=z,f=b;var C=e.alternate;C!==null&&(C=C.updateQueue,h=C.lastBaseUpdate,h!==f&&(h===null?C.firstBaseUpdate=z:h.next=z,C.lastBaseUpdate=b))}if(r!==null){var N=i.baseState;f=0,C=z=b=null,h=r;do{var T=h.lane&-536870913,A=T!==h.lane;if(A?(he&T)===T:(a&T)===T){T!==0&&T===Ra&&(rs=!0),C!==null&&(C=C.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;T=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){N=ne.call(je,N,T);break e}N=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,T=typeof ne=="function"?ne.call(je,N,T):ne,T==null)break e;N=w({},N,T);break e;case 2:vn=!0}}T=h.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[T]:A.push(T))}else A={lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},C===null?(z=C=A,b=N):C=C.next=A,f|=T;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;A=h,h=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);C===null&&(b=N),i.baseState=b,i.firstBaseUpdate=z,i.lastBaseUpdate=C,r===null&&(i.shared.lanes=0),Rn|=f,e.lanes=f,e.memoizedState=N}}function Wf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ff(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wf(n[e],t)}var Da=k(null),Wi=k(0);function Pf(e,t){e=cn,V(Wi,e),V(Da,t),cn=e|t.baseLanes}function us(){V(Wi,cn),V(Da,Da.current)}function ss(){cn=Wi.current,Y(Da),Y(Wi)}var jn=0,ue=null,xe=null,ke=null,Fi=!1,Oa=!1,ea=!1,Pi=0,Yl=0,Ca=null,s1=0;function Be(){throw Error(s(321))}function cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function os(e,t,n,a,i,r){return jn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Nd:kd,ea=!1,r=n(a,i),ea=!1,Oa&&(r=ed(t,n,a,i)),If(e),r}function If(e){O.H=lr;var t=xe!==null&&xe.next!==null;if(jn=0,ke=xe=ue=null,Fi=!1,Yl=0,Ca=null,t)throw Error(s(300));e===null||Qe||(e=e.dependencies,e!==null&&Qi(e)&&(Qe=!0))}function ed(e,t,n,a){ue=e;var i=0;do{if(Oa&&(Ca=null),Yl=0,Oa=!1,25<=i)throw Error(s(301));if(i+=1,ke=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}O.H=m1,r=t(n,a)}while(Oa);return r}function c1(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?ql(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ue.flags|=1024),t}function fs(){var e=Pi!==0;return Pi=0,e}function ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function hs(e){if(Fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fi=!1}jn=0,ke=xe=ue=null,Oa=!1,Yl=Pi=0,Ca=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ue.memoizedState=ke=e:ke=ke.next=e,ke}function Ue(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=ke===null?ue.memoizedState:ke.next;if(t!==null)ke=t,xe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ke===null?ue.memoizedState=ke=e:ke=ke.next=e}return ke}function gs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var t=Yl;return Yl+=1,Ca===null&&(Ca=[]),e=Kf(Ca,e,t),t=ue,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Nd:kd),e}function Ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===Q)return et(e)}throw Error(s(438,String(e)))}function ms(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=gs(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=at;return t.index++,n}function nn(e,t){return typeof t=="function"?t(e):t}function er(e){var t=Ue();return ps(t,xe,e)}function ps(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=f=null,b=null,z=t,C=!1;do{var N=z.lane&-536870913;if(N!==z.lane?(he&N)===N:(jn&N)===N){var T=z.revertLane;if(T===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),N===Ra&&(C=!0);else if((jn&T)===T){z=z.next,T===Ra&&(C=!0);continue}else N={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},b===null?(h=b=N,f=r):b=b.next=N,ue.lanes|=T,Rn|=T;N=z.action,ea&&n(r,N),r=z.hasEagerState?z.eagerState:n(r,N)}else T={lane:N,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},b===null?(h=b=T,f=r):b=b.next=T,ue.lanes|=N,Rn|=N;z=z.next}while(z!==null&&z!==t);if(b===null?f=r:b.next=h,!ht(r,e.memoizedState)&&(Qe=!0,C&&(n=Ma,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=b,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function bs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);ht(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function td(e,t,n){var a=ue,i=Ue(),r=me;if(r){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!ht((xe||i).memoizedState,n);f&&(i.memoizedState=n,Qe=!0),i=i.queue;var h=ld.bind(null,a,i,e);if(Vl(2048,8,h,[e]),i.getSnapshot!==t||f||ke!==null&&ke.memoizedState.tag&1){if(a.flags|=2048,Ba(9,tr(),ad.bind(null,a,i,n,t),null),ze===null)throw Error(s(349));r||(jn&124)!==0||nd(a,t,n)}return n}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=gs(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,a){t.value=n,t.getSnapshot=a,id(t)&&rd(e)}function ld(e,t,n){return n(function(){id(t)&&rd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function rd(e){var t=za(e,2);t!==null&&vt(t,e,2)}function ys(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ea){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function ud(e,t,n,a){return e.baseState=n,ps(e,xe,typeof a=="function"?a:nn)}function o1(e,t,n,a,i){if(ar(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};O.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,sd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function sd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=O.T,f={};O.T=f;try{var h=n(i,a),b=O.S;b!==null&&b(f,h),cd(e,t,h)}catch(z){vs(e,t,z)}finally{O.T=r}}else try{r=n(i,a),cd(e,t,r)}catch(z){vs(e,t,z)}}function cd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){od(e,t,a)},function(a){return vs(e,t,a)}):od(e,t,n)}function od(e,t,n){t.status="fulfilled",t.value=n,fd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sd(e,n)))}function vs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,fd(t),t=t.next;while(t!==a)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function hd(e,t){if(me){var n=ze.formState;if(n!==null){e:{var a=ue;if(me){if(Oe){t:{for(var i=Oe,r=Gt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Bt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Oe=Bt(i.nextSibling),a=i.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},n.queue=a,n=Od.bind(null,ue,a),a.dispatch=n,a=ys(!1),r=Es.bind(null,ue,!1,a.queue),a=st(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=o1.bind(null,ue,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function gd(e){var t=Ue();return md(t,xe,e)}function md(e,t,n){if(t=ps(e,t,dd)[0],e=er(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ql(t)}catch(f){throw f===kl?Ji:f}else a=t;t=Ue();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Ba(9,tr(),f1.bind(null,i,n),null)),[a,r,e]}function f1(e,t){e.action=t}function pd(e){var t=Ue(),n=xe;if(n!==null)return md(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ba(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=gs(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function tr(){return{destroy:void 0,resource:void 0}}function bd(){return Ue().memoizedState}function nr(e,t,n,a){var i=st();a=a===void 0?null:a,ue.flags|=e,i.memoizedState=Ba(1|t,tr(),n,a)}function Vl(e,t,n,a){var i=Ue();a=a===void 0?null:a;var r=i.memoizedState.inst;xe!==null&&a!==null&&cs(a,xe.memoizedState.deps)?i.memoizedState=Ba(t,r,n,a):(ue.flags|=e,i.memoizedState=Ba(1|t,r,n,a))}function yd(e,t){nr(8390656,8,e,t)}function vd(e,t){Vl(2048,8,e,t)}function xd(e,t){return Vl(4,2,e,t)}function Sd(e,t){return Vl(4,4,e,t)}function jd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _d(e,t,n){n=n!=null?n.concat([e]):null,Vl(4,4,jd.bind(null,t,e),n)}function xs(){}function Ed(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&cs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function zd(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&cs(t,a[1]))return a[0];if(a=e(),ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function Ss(e,t,n){return n===void 0||(jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ah(),ue.lanes|=e,Rn|=e,n)}function wd(e,t,n,a){return ht(n,t)?n:Da.current!==null?(e=Ss(e,n,a),ht(e,t)||(Qe=!0),e):(jn&42)===0?(Qe=!0,e.memoizedState=n):(e=Ah(),ue.lanes|=e,Rn|=e,t)}function Td(e,t,n,a,i){var r=q.p;q.p=r!==0&&8>r?r:8;var f=O.T,h={};O.T=h,Es(e,!1,t,n);try{var b=i(),z=O.S;if(z!==null&&z(h,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var C=u1(b,a);Xl(e,t,C,yt(e))}else Xl(e,t,a,yt(e))}catch(N){Xl(e,t,{then:function(){},status:"rejected",reason:N},yt())}finally{q.p=r,O.T=f}}function d1(){}function js(e,t,n,a){if(e.tag!==5)throw Error(s(476));var i=Ad(e).queue;Td(e,i,t,P,n===null?d1:function(){return Rd(e),n(a)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=Ad(e).next.queue;Xl(e,t,{},yt())}function _s(){return et(si)}function Md(){return Ue().memoizedState}function Dd(){return Ue().memoizedState}function h1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=xn(n);var a=Sn(t,e,n);a!==null&&(vt(a,t,n),Hl(a,t,n)),t={cache:Iu()},e.payload=t;return}t=t.return}}function g1(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ar(e)?Cd(t,n):(n=Vu(e,t,n,a),n!==null&&(vt(n,e,a),Bd(n,t,a)))}function Od(e,t,n){var a=yt();Xl(e,t,n,a)}function Xl(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ar(e))Cd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(i.hasEagerState=!0,i.eagerState=h,ht(h,f))return Li(e,t,i,0),ze===null&&Gi(),!1}catch{}finally{}if(n=Vu(e,t,i,a),n!==null)return vt(n,e,a),Bd(n,t,a),!0}return!1}function Es(e,t,n,a){if(a={lane:2,revertLane:nc(),action:a,hasEagerState:!1,eagerState:null,next:null},ar(e)){if(t)throw Error(s(479))}else t=Vu(e,n,a,2),t!==null&&vt(t,e,2)}function ar(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Cd(e,t){Oa=Fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Yo(e,n)}}var lr={readContext:et,use:Ii,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Nd={readContext:et,use:Ii,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:yd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,nr(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nr(4194308,4,e,t)},useInsertionEffect:function(e,t){nr(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var i=n(t);if(ea){mn(!0);try{n(t)}finally{mn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=g1.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=ys(e);var t=e.queue,n=Od.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){var n=st();return Ss(n,e,t)},useTransition:function(){var e=ys(!1);return e=Td.bind(null,ue,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,i=st();if(me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),ze===null)throw Error(s(349));(he&124)!==0||nd(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,yd(ld.bind(null,a,r,e),[e]),a.flags|=2048,Ba(9,tr(),ad.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=ze.identifierPrefix;if(me){var n=It,a=Pt;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=s1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:_s,useFormState:hd,useActionState:hd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Es.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:ms,useCacheRefresh:function(){return st().memoizedState=h1.bind(null,ue)}},kd={readContext:et,use:Ii,useCallback:Ed,useContext:et,useEffect:vd,useImperativeHandle:_d,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:zd,useReducer:er,useRef:bd,useState:function(){return er(nn)},useDebugValue:xs,useDeferredValue:function(e,t){var n=Ue();return wd(n,xe.memoizedState,e,t)},useTransition:function(){var e=er(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:td,useId:Md,useHostTransitionStatus:_s,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var n=Ue();return ud(n,xe,e,t)},useMemoCache:ms,useCacheRefresh:Dd},m1={readContext:et,use:Ii,useCallback:Ed,useContext:et,useEffect:vd,useImperativeHandle:_d,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:zd,useReducer:bs,useRef:bd,useState:function(){return bs(nn)},useDebugValue:xs,useDeferredValue:function(e,t){var n=Ue();return xe===null?Ss(n,e,t):wd(n,xe.memoizedState,e,t)},useTransition:function(){var e=bs(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:td,useId:Md,useHostTransitionStatus:_s,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=Ue();return xe!==null?ud(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ms,useCacheRefresh:Dd},Na=null,Ql=0;function ir(e){var t=Ql;return Ql+=1,Na===null&&(Na=[]),Kf(Na,e,t)}function Zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rr(e,t){throw t.$$typeof===R?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){var t=e._init;return t(e._payload)}function Hd(e){function t(_,S){if(e){var E=_.deletions;E===null?(_.deletions=[S],_.flags|=16):E.push(S)}}function n(_,S){if(!e)return null;for(;S!==null;)t(_,S),S=S.sibling;return null}function a(_){for(var S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(_,S){return _=Ft(_,S),_.index=0,_.sibling=null,_}function r(_,S,E){return _.index=E,e?(E=_.alternate,E!==null?(E=E.index,E<S?(_.flags|=67108866,S):E):(_.flags|=67108866,S)):(_.flags|=1048576,S)}function f(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function h(_,S,E,B){return S===null||S.tag!==6?(S=Qu(E,_.mode,B),S.return=_,S):(S=i(S,E),S.return=_,S)}function b(_,S,E,B){var K=E.type;return K===G?C(_,S,E.props.children,B,E.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Ud(K)===S.type)?(S=i(S,E.props),Zl(S,E),S.return=_,S):(S=qi(E.type,E.key,E.props,null,_.mode,B),Zl(S,E),S.return=_,S)}function z(_,S,E,B){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=Zu(E,_.mode,B),S.return=_,S):(S=i(S,E.children||[]),S.return=_,S)}function C(_,S,E,B,K){return S===null||S.tag!==7?(S=Zn(E,_.mode,B,K),S.return=_,S):(S=i(S,E),S.return=_,S)}function N(_,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Qu(""+S,_.mode,E),S.return=_,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case D:return E=qi(S.type,S.key,S.props,null,_.mode,E),Zl(E,S),E.return=_,E;case H:return S=Zu(S,_.mode,E),S.return=_,S;case we:var B=S._init;return S=B(S._payload),N(_,S,E)}if(qe(S)||Ye(S))return S=Zn(S,_.mode,E,null),S.return=_,S;if(typeof S.then=="function")return N(_,ir(S),E);if(S.$$typeof===Q)return N(_,Zi(_,S),E);rr(_,S)}return null}function T(_,S,E,B){var K=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return K!==null?null:h(_,S,""+E,B);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case D:return E.key===K?b(_,S,E,B):null;case H:return E.key===K?z(_,S,E,B):null;case we:return K=E._init,E=K(E._payload),T(_,S,E,B)}if(qe(E)||Ye(E))return K!==null?null:C(_,S,E,B,null);if(typeof E.then=="function")return T(_,S,ir(E),B);if(E.$$typeof===Q)return T(_,S,Zi(_,E),B);rr(_,E)}return null}function A(_,S,E,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return _=_.get(E)||null,h(S,_,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return _=_.get(B.key===null?E:B.key)||null,b(S,_,B,K);case H:return _=_.get(B.key===null?E:B.key)||null,z(S,_,B,K);case we:var se=B._init;return B=se(B._payload),A(_,S,E,B,K)}if(qe(B)||Ye(B))return _=_.get(E)||null,C(S,_,B,K,null);if(typeof B.then=="function")return A(_,S,E,ir(B),K);if(B.$$typeof===Q)return A(_,S,E,Zi(S,B),K);rr(S,B)}return null}function ne(_,S,E,B){for(var K=null,se=null,J=S,te=S=0,Ke=null;J!==null&&te<E.length;te++){J.index>te?(Ke=J,J=null):Ke=J.sibling;var ge=T(_,J,E[te],B);if(ge===null){J===null&&(J=Ke);break}e&&J&&ge.alternate===null&&t(_,J),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge,J=Ke}if(te===E.length)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;te<E.length;te++)J=N(_,E[te],B),J!==null&&(S=r(J,S,te),se===null?K=J:se.sibling=J,se=J);return me&&Jn(_,te),K}for(J=a(J);te<E.length;te++)Ke=A(J,_,te,E[te],B),Ke!==null&&(e&&Ke.alternate!==null&&J.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),se===null?K=Ke:se.sibling=Ke,se=Ke);return e&&J.forEach(function(Hn){return t(_,Hn)}),me&&Jn(_,te),K}function I(_,S,E,B){if(E==null)throw Error(s(151));for(var K=null,se=null,J=S,te=S=0,Ke=null,ge=E.next();J!==null&&!ge.done;te++,ge=E.next()){J.index>te?(Ke=J,J=null):Ke=J.sibling;var Hn=T(_,J,ge.value,B);if(Hn===null){J===null&&(J=Ke);break}e&&J&&Hn.alternate===null&&t(_,J),S=r(Hn,S,te),se===null?K=Hn:se.sibling=Hn,se=Hn,J=Ke}if(ge.done)return n(_,J),me&&Jn(_,te),K;if(J===null){for(;!ge.done;te++,ge=E.next())ge=N(_,ge.value,B),ge!==null&&(S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return me&&Jn(_,te),K}for(J=a(J);!ge.done;te++,ge=E.next())ge=A(J,_,te,ge.value,B),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?te:ge.key),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return e&&J.forEach(function(pb){return t(_,pb)}),me&&Jn(_,te),K}function je(_,S,E,B){if(typeof E=="object"&&E!==null&&E.type===G&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case D:e:{for(var K=E.key;S!==null;){if(S.key===K){if(K=E.type,K===G){if(S.tag===7){n(_,S.sibling),B=i(S,E.props.children),B.return=_,_=B;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Ud(K)===S.type){n(_,S.sibling),B=i(S,E.props),Zl(B,E),B.return=_,_=B;break e}n(_,S);break}else t(_,S);S=S.sibling}E.type===G?(B=Zn(E.props.children,_.mode,B,E.key),B.return=_,_=B):(B=qi(E.type,E.key,E.props,null,_.mode,B),Zl(B,E),B.return=_,_=B)}return f(_);case H:e:{for(K=E.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(_,S.sibling),B=i(S,E.children||[]),B.return=_,_=B;break e}else{n(_,S);break}else t(_,S);S=S.sibling}B=Zu(E,_.mode,B),B.return=_,_=B}return f(_);case we:return K=E._init,E=K(E._payload),je(_,S,E,B)}if(qe(E))return ne(_,S,E,B);if(Ye(E)){if(K=Ye(E),typeof K!="function")throw Error(s(150));return E=K.call(E),I(_,S,E,B)}if(typeof E.then=="function")return je(_,S,ir(E),B);if(E.$$typeof===Q)return je(_,S,Zi(_,E),B);rr(_,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(n(_,S.sibling),B=i(S,E),B.return=_,_=B):(n(_,S),B=Qu(E,_.mode,B),B.return=_,_=B),f(_)):n(_,S)}return function(_,S,E,B){try{Ql=0;var K=je(_,S,E,B);return Na=null,K}catch(J){if(J===kl||J===Ji)throw J;var se=gt(29,J,null,_.mode);return se.lanes=B,se.return=_,se}finally{}}}var ka=Hd(!0),Gd=Hd(!1),At=k(null),Lt=null;function _n(e){var t=e.alternate;V(Le,Le.current&1),V(At,e),Lt===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(Lt=e)}function Ld(e){if(e.tag===22){if(V(Le,Le.current),V(At,e),Lt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Lt=e)}}else En()}function En(){V(Le,Le.current),V(At,At.current)}function an(e){Y(At),Lt===e&&(Lt=null),Y(Le)}var Le=k(0);function ur(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||gc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function zs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),i=xn(a);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Hl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),i=xn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Hl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=xn(n);a.tag=2,t!=null&&(a.callback=t),t=Sn(e,a,n),t!==null&&(vt(t,e,n),Hl(t,e,n))}};function Yd(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Al(n,a)||!Al(i,r):!0}function qd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vd(e){sr(e)}function Xd(e){console.error(e)}function Qd(e){sr(e)}function cr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Zd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ts(e,t,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){cr(e,t)},n}function Kd(e){return e=xn(e),e.tag=3,e}function Jd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){Zd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Zd(t,n,a),typeof i!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function p1(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Cl(t,n,i,!0),n=At.current,n!==null){switch(n.tag){case 13:return Lt===null?Fs():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===ns?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Is(e,a,i)),!1;case 22:return n.flags|=65536,a===ns?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Is(e,a,i)),!1}throw Error(s(435,n.tag))}return Is(e,a,i),Fs(),!1}if(me)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==$u&&(e=Error(s(422),{cause:a}),Ol(Et(e,n)))):(a!==$u&&(t=Error(s(423),{cause:a}),Ol(Et(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Et(a,n),i=Ts(e.stateNode,a,i),is(e,i),Ce!==4&&(Ce=2)),!1;var r=Error(s(520),{cause:a});if(r=Et(r,n),Il===null?Il=[r]:Il.push(r),Ce!==4&&(Ce=2),t===null)return!0;a=Et(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Ts(n.stateNode,a,e),is(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Kd(i),Jd(i,e,n,a),is(n,i),!1}n=n.return}while(n!==null);return!1}var $d=Error(s(461)),Qe=!1;function $e(e,t,n,a){t.child=e===null?Gd(t,null,n,a):ka(t,e.child,n,a)}function Wd(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=os(e,t,n,f,r,i),h=fs(),e!==null&&!Qe?(ds(e,t,i),ln(e,t,i)):(me&&h&&Ku(t),t.flags|=1,$e(e,t,a,i),t.child)}function Fd(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Xu(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Pd(e,t,r,a,i)):(e=qi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ns(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Al,n(f,a)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Al(r,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=r,Ns(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ln(e,t,i)}return As(e,t,n,a,i)}function Id(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return eh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ki(t,r!==null?r.cachePool:null),r!==null?Pf(t,r):us(),Ld(t);else return t.lanes=t.childLanes=536870912,eh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Ki(t,r.cachePool),Pf(t,r),En(),t.memoizedState=null):(e!==null&&Ki(t,null),us(),En());return $e(e,t,i,n),t.child}function eh(e,t,n,a){var i=ts();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ki(t,null),us(),Ld(t),e!==null&&Cl(e,t,a,!0),null}function or(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function As(e,t,n,a,i){return Pn(t),n=os(e,t,n,a,void 0,i),a=fs(),e!==null&&!Qe?(ds(e,t,i),ln(e,t,i)):(me&&a&&Ku(t),t.flags|=1,$e(e,t,n,i),t.child)}function th(e,t,n,a,i,r){return Pn(t),t.updateQueue=null,n=ed(t,a,n,i),If(e),a=fs(),e!==null&&!Qe?(ds(e,t,r),ln(e,t,r)):(me&&a&&Ku(t),t.flags|=1,$e(e,t,n,r),t.child)}function nh(e,t,n,a,i){if(Pn(t),t.stateNode===null){var r=wa,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ws,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},as(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):wa,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(zs(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&ws.enqueueReplaceState(r,r.state,null),Ll(t,a,r,i),Gl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,b=ta(n,h);r.props=b;var z=r.context,C=n.contextType;f=wa,typeof C=="object"&&C!==null&&(f=et(C));var N=n.getDerivedStateFromProps;C=typeof N=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,C||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||z!==f)&&qd(t,r,a,f),vn=!1;var T=t.memoizedState;r.state=T,Ll(t,a,r,i),Gl(),z=t.memoizedState,h||T!==z||vn?(typeof N=="function"&&(zs(t,n,N,a),z=t.memoizedState),(b=vn||Yd(t,n,b,a,T,z,f))?(C||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),r.props=a,r.state=z,r.context=f,a=b):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,ls(e,t),f=t.memoizedProps,C=ta(n,f),r.props=C,N=t.pendingProps,T=r.context,z=n.contextType,b=wa,typeof z=="object"&&z!==null&&(b=et(z)),h=n.getDerivedStateFromProps,(z=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==N||T!==b)&&qd(t,r,a,b),vn=!1,T=t.memoizedState,r.state=T,Ll(t,a,r,i),Gl();var A=t.memoizedState;f!==N||T!==A||vn||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof h=="function"&&(zs(t,n,h,a),A=t.memoizedState),(C=vn||Yd(t,n,C,a,T,A,b)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(z||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,b)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=b,a=C):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,or(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ka(t,e.child,null,i),t.child=ka(t,null,n,i)):$e(e,t,n,i),t.memoizedState=r.state,e=t.child):e=ln(e,t,i),e}function ah(e,t,n,a){return Dl(),t.flags|=256,$e(e,t,n,a),t.child}var Rs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ms(e){return{baseLanes:e,cachePool:Xf()}}function Ds(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function lh(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(i?_n(t):En(),me){var h=Oe,b;if(b=h){e:{for(b=h,h=Gt;b.nodeType!==8;){if(!h){h=null;break e}if(b=Bt(b.nextSibling),b===null){h=null;break e}}h=b}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Pt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},b=gt(18,null,null,0),b.stateNode=h,b.return=t,t.child=b,lt=t,Oe=null,b=!0):b=!1}b||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return gc(h)?t.lanes=32:t.lanes=536870912,null;an(t)}return h=a.children,a=a.fallback,i?(En(),i=t.mode,h=fr({mode:"hidden",children:h},i),a=Zn(a,i,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,i=t.child,i.memoizedState=Ms(n),i.childLanes=Ds(e,f,n),t.memoizedState=Rs,a):(_n(t),Os(t,h))}if(b=e.memoizedState,b!==null&&(h=b.dehydrated,h!==null)){if(r)t.flags&256?(_n(t),t.flags&=-257,t=Cs(e,t,n)):t.memoizedState!==null?(En(),t.child=e.child,t.flags|=128,t=null):(En(),i=a.fallback,h=t.mode,a=fr({mode:"visible",children:a.children},h),i=Zn(i,h,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,ka(t,e.child,null,n),a=t.child,a.memoizedState=Ms(n),a.childLanes=Ds(e,f,n),t.memoizedState=Rs,t=i);else if(_n(t),gc(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var z=f.dgst;f=z,a=Error(s(419)),a.stack="",a.digest=f,Ol({value:a,source:null,stack:null}),t=Cs(e,t,n)}else if(Qe||Cl(e,t,n,!1),f=(n&e.childLanes)!==0,Qe||f){if(f=ze,f!==null&&(a=n&-n,a=(a&42)!==0?1:mu(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==b.retryLane))throw b.retryLane=a,za(e,a),vt(f,e,a),$d;h.data==="$?"||Fs(),t=Cs(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Oe=Bt(h.nextSibling),lt=t,me=!0,$n=null,Gt=!1,e!==null&&(wt[Tt++]=Pt,wt[Tt++]=It,wt[Tt++]=Kn,Pt=e.id,It=e.overflow,Kn=t),t=Os(t,a.children),t.flags|=4096);return t}return i?(En(),i=a.fallback,h=t.mode,b=e.child,z=b.sibling,a=Ft(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,z!==null?i=Ft(z,i):(i=Zn(i,h,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,h=e.child.memoizedState,h===null?h=Ms(n):(b=h.cachePool,b!==null?(z=Ge._currentValue,b=b.parent!==z?{parent:z,pool:z}:b):b=Xf(),h={baseLanes:h.baseLanes|n,cachePool:b}),i.memoizedState=h,i.childLanes=Ds(e,f,n),t.memoizedState=Rs,a):(_n(t),n=e.child,e=n.sibling,n=Ft(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Os(e,t){return t=fr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fr(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cs(e,t,n){return ka(t,e.child,null,n),e=Os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ih(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Fu(e.return,t,n)}function Bs(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function rh(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if($e(e,t,a.children,n),a=Le.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ih(e,n,t);else if(e.tag===19)ih(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Le,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ur(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ur(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,r);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Cl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ns(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qi(e)))}function b1(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),yn(t,Ge,e.memoizedState.cache),Dl();break;case 27:case 5:Ln(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:yn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(_n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lh(e,t,n):(_n(t),e=ln(e,t,n),e!==null?e.sibling:null);_n(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Cl(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return rh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Le,Le.current),a)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n);case 24:yn(t,Ge,e.memoizedState.cache)}return ln(e,t,n)}function uh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ns(e,n)&&(t.flags&128)===0)return Qe=!1,b1(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,me&&(t.flags&1048576)!==0&&Uf(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")Xu(a)?(e=ta(a,e),t.tag=1,t=nh(null,t,a,e,n)):(t.tag=0,t=As(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===ae){t.tag=11,t=Wd(null,t,a,e,n);break e}else if(i===W){t.tag=14,t=Fd(null,t,a,e,n);break e}}throw t=Kt(a)||a,Error(s(306,t,""))}}return t;case 0:return As(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ta(a,t.pendingProps),nh(e,t,a,i,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,ls(e,t),Ll(t,a,null,n);var f=t.memoizedState;if(a=f.cache,yn(t,Ge,a),a!==r.cache&&Pu(t,[Ge],n,!0),Gl(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ah(e,t,a,n);break e}else if(a!==i){i=Et(Error(s(424)),t),Ol(i),t=ah(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Bt(e.firstChild),lt=t,me=!0,$n=null,Gt=!0,n=Gd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Dl(),a===i){t=ln(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return or(e,t),e===null?(n=fg(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,a=zr(ee.current).createElement(n),a[Ie]=t,a[rt]=e,Fe(a,n,e),Xe(a),t.stateNode=a):t.memoizedState=fg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ln(t),e===null&&me&&(a=t.stateNode=sg(t.type,t.pendingProps,ee.current),lt=t,Gt=!0,i=Oe,Cn(t.type)?(mc=i,Oe=Bt(a.firstChild)):Oe=i),$e(e,t,t.pendingProps.children,n),or(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((i=a=Oe)&&(a=Q1(a,t.type,t.pendingProps,Gt),a!==null?(t.stateNode=a,lt=t,Oe=Bt(a.firstChild),Gt=!1,i=!0):i=!1),i||Wn(t)),Ln(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,fc(i,r)?a=null:f!==null&&fc(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=os(e,t,c1,null,null,n),si._currentValue=i),or(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&me&&((e=n=Oe)&&(n=Z1(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,lt=t,Oe=null,e=!0):e=!1),e||Wn(t)),null;case 13:return lh(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ka(t,null,a,n):$e(e,t,a,n),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,yn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Pn(t),i=et(i),a=a(i),t.flags|=1,$e(e,t,a,n),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 19:return rh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=fr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ft(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Id(e,t,n);case 24:return Pn(t),a=et(Ge),e===null?(i=ts(),i===null&&(i=ze,r=Iu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},as(t),yn(t,Ge,i)):((e.lanes&n)!==0&&(ls(e,t),Ll(t,null,null,n),Gl()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),yn(t,Ge,a)):(a=r.cache,yn(t,Ge,a),a!==i.cache&&Pu(t,[Ge],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function rn(e){e.flags|=4}function sh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pg(t)){if(t=At.current,t!==null&&((he&4194048)===he?Lt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Lt))throw Ul=ns,Qf;e.flags|=8192}}function dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Go():536870912,e.lanes|=t,La|=t)}function Kl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function y1(e,t,n){var a=t.pendingProps;switch(Ju(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tn(Ge),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lf())),De(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(De(t),sh(t,n)):(De(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),De(t),sh(t,n)):(De(t),t.flags&=-16777217):(e.memoizedProps!==a&&rn(t),De(t),t.flags&=-16777217),null;case 27:Jt(t),n=ee.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return De(t),null}e=F.current,Ml(t)?Hf(t):(e=sg(i,a,n),t.stateNode=e,rn(t))}return De(t),null;case 5:if(Jt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return De(t),null}if(e=F.current,Ml(t))Hf(t);else{switch(i=zr(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Ie]=t,e[rt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,Ml(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=lt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||tg(e.nodeValue,n)),e||Wn(t)}else e=zr(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ml(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ie]=t}else Dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(an(t),t):(an(t),null)}if(an(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),dr(t,t.updateQueue),De(t),null;case 4:return Pe(),e===null&&rc(t.stateNode.containerInfo),De(t),null;case 10:return tn(t.type),De(t),null;case 19:if(Y(Le),i=t.memoizedState,i===null)return De(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Kl(i,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=ur(e),r!==null){for(t.flags|=128,Kl(i,!1),e=r.updateQueue,t.updateQueue=e,dr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)kf(n,e),n=n.sibling;return V(Le,Le.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ht()>mr&&(t.flags|=128,a=!0,Kl(i,!1),t.lanes=4194304)}else{if(!a)if(e=ur(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,dr(t,e),Kl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!me)return De(t),null}else 2*Ht()-i.renderingStartTime>mr&&n!==536870912&&(t.flags|=128,a=!0,Kl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ht(),t.sibling=null,e=Le.current,V(Le,a?e&1|2:e&1),t):(De(t),null);case 22:case 23:return an(t),ss(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&dr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Y(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(Ge),De(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function v1(e,t){switch(Ju(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(Ge),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Le),null;case 4:return Pe(),null;case 10:return tn(t.type),null;case 22:case 23:return an(t),ss(),e!==null&&Y(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(Ge),null;case 25:return null;default:return null}}function ch(e,t){switch(Ju(t),t.tag){case 3:tn(Ge),Pe();break;case 26:case 27:case 5:Jt(t);break;case 4:Pe();break;case 13:an(t);break;case 19:Y(Le);break;case 10:tn(t.type);break;case 22:case 23:an(t),ss(),e!==null&&Y(In);break;case 24:tn(Ge)}}function Jl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(h){Ee(t,t.return,h)}}function zn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=t;var b=n,z=h;try{z()}catch(C){Ee(i,b,C)}}}a=a.next}while(a!==r)}}catch(C){Ee(t,t.return,C)}}function oh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ff(t,n)}catch(a){Ee(e,e.return,a)}}}function fh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function $l(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){Ee(e,t,i)}}function Yt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ee(e,t,i)}else n.current=null}function dh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Ee(e,e.return,i)}}function ks(e,t,n){try{var a=e.stateNode;L1(a,e.type,n,t),a[rt]=t}catch(i){Ee(e,e.return,i)}}function hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Er));else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function hr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hr(e,t,n),e=e.sibling;e!==null;)hr(e,t,n),e=e.sibling}function gh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fe(t,a,n),t[Ie]=e,t[rt]=n}catch(r){Ee(e,e.return,r)}}var un=!1,Ne=!1,Gs=!1,mh=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function x1(e,t){if(e=e.containerInfo,cc=Dr,e=wf(e),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,b=-1,z=0,C=0,N=e,T=null;t:for(;;){for(var A;N!==n||i!==0&&N.nodeType!==3||(h=f+i),N!==r||a!==0&&N.nodeType!==3||(b=f+a),N.nodeType===3&&(f+=N.nodeValue.length),(A=N.firstChild)!==null;)T=N,N=A;for(;;){if(N===e)break t;if(T===n&&++z===i&&(h=f),T===r&&++C===a&&(b=f),(A=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=A}n=h===-1||b===-1?null:{start:h,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(oc={focusedElem:e,selectionRange:n},Dr=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){Ee(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)hc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function ph(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:wn(e,n),a&4&&Jl(5,n);break;case 1:if(wn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ee(n,n.return,f)}else{var i=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ee(n,n.return,f)}}a&64&&oh(n),a&512&&$l(n,n.return);break;case 3:if(wn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ff(e,t)}catch(f){Ee(n,n.return,f)}}break;case 27:t===null&&a&4&&gh(n);case 26:case 5:wn(e,n),t===null&&a&4&&dh(n),a&512&&$l(n,n.return);break;case 12:wn(e,n);break;case 13:wn(e,n),a&4&&vh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=R1.bind(null,n),K1(e,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){t=t!==null&&t.memoizedState!==null||Ne,i=un;var r=Ne;un=a,(Ne=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):wn(e,n),un=i,Ne=r}break;case 30:break;default:wn(e,n)}}function bh(e){var t=e.alternate;t!==null&&(e.alternate=null,bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ct=!1;function sn(e,t,n){for(n=n.child;n!==null;)yh(e,t,n),n=n.sibling}function yh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:Ne||Yt(n,t),sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Yt(n,t);var a=Ae,i=ct;Cn(n.type)&&(Ae=n.stateNode,ct=!1),sn(e,t,n),li(n.stateNode),Ae=a,ct=i;break;case 5:Ne||Yt(n,t);case 6:if(a=Ae,i=ct,Ae=null,sn(e,t,n),Ae=a,ct=i,Ae!==null)if(ct)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){Ee(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){Ee(n,t,r)}break;case 18:Ae!==null&&(ct?(e=Ae,rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),di(e)):rg(Ae,n.stateNode));break;case 4:a=Ae,i=ct,Ae=n.stateNode.containerInfo,ct=!0,sn(e,t,n),Ae=a,ct=i;break;case 0:case 11:case 14:case 15:Ne||zn(2,n,t),Ne||zn(4,n,t),sn(e,t,n);break;case 1:Ne||(Yt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fh(n,t,a)),sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:Ne=(a=Ne)||n.memoizedState!==null,sn(e,t,n),Ne=a;break;default:sn(e,t,n)}}function vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(n){Ee(t,t.return,n)}}function S1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mh),t;default:throw Error(s(435,e.tag))}}function Ls(e,t){var n=S1(e);t.forEach(function(a){var i=M1.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function mt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Cn(h.type)){Ae=h.stateNode,ct=!1;break e}break;case 5:Ae=h.stateNode,ct=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,ct=!0;break e}h=h.return}if(Ae===null)throw Error(s(160));yh(r,f,i),Ae=null,ct=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}var Ct=null;function xh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),a&4&&(zn(3,e,e.return),Jl(3,e),zn(5,e,e.return));break;case 1:mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),a&64&&un&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ct;if(mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[vl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Xe(r),a=r;break e;case"link":var f=gg("link","href",i).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;case"meta":if(f=gg("meta","content",i).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;default:throw Error(s(468,a))}r[Ie]=e,Xe(r),a=r}e.stateNode=a}else mg(i,e.type,e.stateNode);else e.stateNode=hg(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?mg(i,e.type,e.stateNode):hg(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ks(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),n!==null&&a&4&&ks(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),e.flags&32){i=e.stateNode;try{ya(i,"")}catch(A){Ee(e,e.return,A)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,ks(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Gs=!0);break;case 6:if(mt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(A){Ee(e,e.return,A)}}break;case 3:if(Ar=null,i=Ct,Ct=wr(t.containerInfo),mt(t,e),Ct=i,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(A){Ee(e,e.return,A)}Gs&&(Gs=!1,Sh(e));break;case 4:a=Ct,Ct=wr(e.stateNode.containerInfo),mt(t,e),pt(e),Ct=a;break;case 12:mt(t,e),pt(e);break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zs=Ht()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ls(e,a)));break;case 22:i=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,z=un,C=Ne;if(un=z||i,Ne=C||b,mt(t,e),Ne=C,un=z,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||b||un||Ne||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(r=b.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=b.stateNode;var N=b.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null;h.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(A){Ee(b,b.return,A)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(A){Ee(b,b.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ls(e,n))));break;case 19:mt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ls(e,a)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(hh(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,r=Us(e);hr(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(ya(f,""),n.flags&=-33);var h=Us(e);hr(e,h,f);break;case 3:case 4:var b=n.stateNode.containerInfo,z=Us(e);Hs(e,z,b);break;default:throw Error(s(161))}}catch(C){Ee(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ph(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zn(4,t,t.return),na(t);break;case 1:Yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fh(t,t.return,n),na(t);break;case 27:li(t.stateNode);case 26:case 5:Yt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(i,r,n),Jl(4,r);break;case 1:if(Tn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Ee(a,a.return,z)}if(a=r,i=a.updateQueue,i!==null){var h=a.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)Wf(b[i],h)}catch(z){Ee(a,a.return,z)}}n&&f&64&&oh(r),$l(r,r.return);break;case 27:gh(r);case 26:case 5:Tn(i,r,n),n&&a===null&&f&4&&dh(r),$l(r,r.return);break;case 12:Tn(i,r,n);break;case 13:Tn(i,r,n),n&&f&4&&vh(i,r);break;case 22:r.memoizedState===null&&Tn(i,r,n),$l(r,r.return);break;case 30:break;default:Tn(i,r,n)}t=t.sibling}}function Ys(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bl(n))}function qs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jh(e,t,n,a),t=t.sibling}function jh(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),i&2048&&Jl(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e)));break;case 12:if(i&2048){qt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Ee(t,t.return,b)}}else qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?qt(e,t,n,a):Wl(e,t):r._visibility&2?qt(e,t,n,a):(r._visibility|=2,Ua(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&Ys(f,t);break;case 24:qt(e,t,n,a),i&2048&&qs(t.alternate,t);break;default:qt(e,t,n,a)}}function Ua(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,b=a,z=f.flags;switch(f.tag){case 0:case 11:case 15:Ua(r,f,h,b,i),Jl(8,f);break;case 23:break;case 22:var C=f.stateNode;f.memoizedState!==null?C._visibility&2?Ua(r,f,h,b,i):Wl(r,f):(C._visibility|=2,Ua(r,f,h,b,i)),i&&z&2048&&Ys(f.alternate,f);break;case 24:Ua(r,f,h,b,i),i&&z&2048&&qs(f.alternate,f);break;default:Ua(r,f,h,b,i)}t=t.sibling}}function Wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Wl(n,a),i&2048&&Ys(a.alternate,a);break;case 24:Wl(n,a),i&2048&&qs(a.alternate,a);break;default:Wl(n,a)}t=t.sibling}}var Fl=8192;function Ha(e){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)_h(e),e=e.sibling}function _h(e){switch(e.tag){case 26:Ha(e),e.flags&Fl&&e.memoizedState!==null&&rb(Ct,e.memoizedState,e.memoizedProps);break;case 5:Ha(e);break;case 3:case 4:var t=Ct;Ct=wr(e.stateNode.containerInfo),Ha(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Fl,Fl=16777216,Ha(e),Fl=t):Ha(e));break;default:Ha(e)}}function Eh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,wh(a,e)}Eh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zh(e),e=e.sibling}function zh(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&zn(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gr(e)):Pl(e);break;default:Pl(e)}}function gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,wh(a,e)}Eh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zn(8,t,t.return),gr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,gr(t));break;default:gr(t)}e=e.sibling}}function wh(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Bl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ze=a;else e:for(n=e;Ze!==null;){a=Ze;var i=a.sibling,r=a.return;if(bh(a),a===n){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var j1={getCacheForType:function(e){var t=et(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},_1=typeof WeakMap=="function"?WeakMap:Map,ye=0,ze=null,fe=null,he=0,ve=0,bt=null,An=!1,Ga=!1,Vs=!1,cn=0,Ce=0,Rn=0,aa=0,Xs=0,Rt=0,La=0,Il=null,ot=null,Qs=!1,Zs=0,mr=1/0,pr=null,Mn=null,We=0,Dn=null,Ya=null,qa=0,Ks=0,Js=null,Th=null,ei=0,$s=null;function yt(){if((ye&2)!==0&&he!==0)return he&-he;if(O.T!==null){var e=Ra;return e!==0?e:nc()}return qo()}function Ah(){Rt===0&&(Rt=(he&536870912)===0||me?Ho():536870912);var e=At.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===ze&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Va(e,0),On(e,he,Rt,!1)),yl(e,n),((ye&2)===0||e!==ze)&&(e===ze&&((ye&2)===0&&(aa|=n),Ce===4&&On(e,he,Rt,!1)),Vt(e))}function Rh(e,t,n){if((ye&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||bl(e,t),i=a?w1(e,t):Ps(e,t,!0),r=a;do{if(i===0){Ga&&!a&&On(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!E1(n)){i=Ps(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;i=Il;var b=h.current.memoizedState.isDehydrated;if(b&&(Va(h,f).flags|=256),f=Ps(h,f,!1),f!==2){if(Vs&&!b){h.errorRecoveryDisabledLanes|=r,aa|=r,i=4;break e}r=ot,ot=i,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Va(e,0),On(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:On(a,t,Rt,!An);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Zs+300-Ht(),10<i)){if(On(a,t,Rt,!An),Ti(a,0,!0)!==0)break e;a.timeoutHandle=lg(Mh.bind(null,a,n,ot,pr,Qs,t,Rt,aa,La,An,r,2,-0,0),i);break e}Mh(a,n,ot,pr,Qs,t,Rt,aa,La,An,r,0,-0,0)}}break}while(!0);Vt(e)}function Mh(e,t,n,a,i,r,f,h,b,z,C,N,T,A){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(ui={stylesheets:null,count:0,unsuspend:ib},_h(t),N=ub(),N!==null)){e.cancelPendingCommit=N(Uh.bind(null,e,t,r,n,a,i,f,h,b,C,1,T,A)),On(e,r,f,!z);return}Uh(e,t,r,n,a,i,f,h,b)}function E1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t,n,a){t&=~Xs,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-dt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&Lo(e,n,t)}function br(){return(ye&6)===0?(ti(0),!1):!0}function Ws(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,en=Fn=null,hs(e),Na=null,Ql=0,e=fe;for(;e!==null;)ch(e.alternate,e),e=e.return;fe=null}}function Va(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,q1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ws(),ze=e,fe=n=Ft(e.current,null),he=t,ve=0,bt=null,An=!1,Ga=bl(e,t),Vs=!1,La=Rt=Xs=aa=Rn=Ce=0,ot=Il=null,Qs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-dt(a),r=1<<i;t|=e[i],a&=~r}return cn=t,Gi(),n}function Dh(e,t){ue=null,O.H=lr,t===kl||t===Ji?(t=Jf(),ve=3):t===Qf?(t=Jf(),ve=4):ve=t===$d?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Ce=1,cr(e,Et(t,e.current)))}function Oh(){var e=O.H;return O.H=lr,e===null?lr:e}function Ch(){var e=O.A;return O.A=j1,e}function Fs(){Ce=4,An||(he&4194048)!==he&&At.current!==null||(Ga=!0),(Rn&134217727)===0&&(aa&134217727)===0||ze===null||On(ze,he,Rt,!1)}function Ps(e,t,n){var a=ye;ye|=2;var i=Oh(),r=Ch();(ze!==e||he!==t)&&(pr=null,Va(e,t)),t=!1;var f=Ce;e:do try{if(ve!==0&&fe!==null){var h=fe,b=bt;switch(ve){case 8:Ws(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var z=ve;if(ve=0,bt=null,Xa(e,h,b,z),n&&Ga){f=0;break e}break;default:z=ve,ve=0,bt=null,Xa(e,h,b,z)}}z1(),f=Ce;break}catch(C){Dh(e,C)}while(!0);return t&&e.shellSuspendCounter++,en=Fn=null,ye=a,O.H=i,O.A=r,fe===null&&(ze=null,he=0,Gi()),f}function z1(){for(;fe!==null;)Bh(fe)}function w1(e,t){var n=ye;ye|=2;var a=Oh(),i=Ch();ze!==e||he!==t?(pr=null,mr=Ht()+500,Va(e,t)):Ga=bl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,Xa(e,t,r,1);break;case 2:case 9:if(Zf(r)){ve=0,bt=null,Nh(t);break}t=function(){ve!==2&&ve!==9||ze!==e||(ve=7),Vt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Zf(r)?(ve=0,bt=null,Nh(t)):(ve=0,bt=null,Xa(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||pg(f)){ve=0,bt=null;var b=h.sibling;if(b!==null)fe=b;else{var z=h.return;z!==null?(fe=z,yr(z)):fe=null}break t}}ve=0,bt=null,Xa(e,t,r,5);break;case 6:ve=0,bt=null,Xa(e,t,r,6);break;case 8:Ws(),Ce=6;break e;default:throw Error(s(462))}}T1();break}catch(C){Dh(e,C)}while(!0);return en=Fn=null,O.H=a,O.A=i,ye=n,fe!==null?0:(ze=null,he=0,Gi(),Ce)}function T1(){for(;fe!==null&&!$0();)Bh(fe)}function Bh(e){var t=uh(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?yr(e):fe=t}function Nh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=th(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=th(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:hs(t);default:ch(n,t),t=fe=kf(t,cn),t=uh(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?yr(e):fe=t}function Xa(e,t,n,a){en=Fn=null,hs(t),Na=null,Ql=0;var i=t.return;try{if(p1(e,i,t,n,he)){Ce=1,cr(e,Et(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;Ce=1,cr(e,Et(n,e.current)),fe=null;return}t.flags&32768?(me||a===1?e=!0:Ga||(he&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),kh(t,e)):yr(t)}function yr(e){var t=e;do{if((t.flags&32768)!==0){kh(t,An);return}e=t.return;var n=y1(t.alternate,t,cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ce===0&&(Ce=5)}function kh(e,t){do{var n=v1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ce=6,fe=null}function Uh(e,t,n,a,i,r,f,h,b){e.cancelPendingCommit=null;do vr();while(We!==0);if((ye&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=qu,ip(e,n,r,f,h,b),e===ze&&(fe=ze=null,he=0),Ya=t,Dn=e,qa=n,Ks=r,Js=i,Th=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,D1(Ei,function(){return qh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,i=q.p,q.p=2,f=ye,ye|=4;try{x1(e,t,n)}finally{ye=f,q.p=i,O.T=a}}We=1,Hh(),Gh(),Lh()}}function Hh(){if(We===1){We=0;var e=Dn,t=Ya,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var a=q.p;q.p=2;var i=ye;ye|=4;try{xh(t,e);var r=oc,f=wf(e.containerInfo),h=r.focusedElem,b=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&zf(h.ownerDocument.documentElement,h)){if(b!==null&&Uu(h)){var z=b.start,C=b.end;if(C===void 0&&(C=z),"selectionStart"in h)h.selectionStart=z,h.selectionEnd=Math.min(C,h.value.length);else{var N=h.ownerDocument||document,T=N&&N.defaultView||window;if(T.getSelection){var A=T.getSelection(),ne=h.textContent.length,I=Math.min(b.start,ne),je=b.end===void 0?I:Math.min(b.end,ne);!A.extend&&I>je&&(f=je,je=I,I=f);var _=Ef(h,I),S=Ef(h,je);if(_&&S&&(A.rangeCount!==1||A.anchorNode!==_.node||A.anchorOffset!==_.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var E=N.createRange();E.setStart(_.node,_.offset),A.removeAllRanges(),I>je?(A.addRange(E),A.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),A.addRange(E))}}}}for(N=[],A=h;A=A.parentNode;)A.nodeType===1&&N.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<N.length;h++){var B=N[h];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Dr=!!cc,oc=cc=null}finally{ye=i,q.p=a,O.T=n}}e.current=t,We=2}}function Gh(){if(We===2){We=0;var e=Dn,t=Ya,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var a=q.p;q.p=2;var i=ye;ye|=4;try{ph(e,t.alternate,t)}finally{ye=i,q.p=a,O.T=n}}We=3}}function Lh(){if(We===4||We===3){We=0,W0();var e=Dn,t=Ya,n=qa,a=Th;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Ya=Dn=null,Yh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Mn=null),pu(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,i=q.p,q.p=2,O.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{O.T=t,q.p=i}}(qa&3)!==0&&vr(),Vt(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===$s?ei++:(ei=0,$s=e):ei=0,ti(0)}}function Yh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function vr(e){return Hh(),Gh(),Lh(),qh()}function qh(){if(We!==5)return!1;var e=Dn,t=Ks;Ks=0;var n=pu(qa),a=O.T,i=q.p;try{q.p=32>n?32:n,O.T=null,n=Js,Js=null;var r=Dn,f=qa;if(We=0,Ya=Dn=null,qa=0,(ye&6)!==0)throw Error(s(331));var h=ye;if(ye|=4,zh(r.current),jh(r,r.current,f,n),ye=h,ti(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(pl,r)}catch{}return!0}finally{q.p=i,O.T=a,Yh(e,t)}}function Vh(e,t,n){t=Et(n,t),t=Ts(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(yl(e,2),Vt(e))}function Ee(e,t,n){if(e.tag===3)Vh(e,e,n);else for(;t!==null;){if(t.tag===3){Vh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){e=Et(n,e),n=Kd(2),a=Sn(t,n,2),a!==null&&(Jd(n,a,t,e),yl(a,2),Vt(a));break}}t=t.return}}function Is(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new _1;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Vs=!0,i.add(n),e=A1.bind(null,e,t,n),t.then(e,e))}function A1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(he&n)===n&&(Ce===4||Ce===3&&(he&62914560)===he&&300>Ht()-Zs?(ye&2)===0&&Va(e,0):Xs|=n,La===he&&(La=0)),Vt(e)}function Xh(e,t){t===0&&(t=Go()),e=za(e,t),e!==null&&(yl(e,t),Vt(e))}function R1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xh(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Xh(e,n)}function D1(e,t){return du(e,t)}var xr=null,Qa=null,ec=!1,Sr=!1,tc=!1,la=0;function Vt(e){e!==Qa&&e.next===null&&(Qa===null?xr=Qa=e:Qa=Qa.next=e),Sr=!0,ec||(ec=!0,C1())}function ti(e,t){if(!tc&&Sr){tc=!0;do for(var n=!1,a=xr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=i&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Jh(a,r))}else r=he,r=Ti(a,a===ze?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||bl(a,r)||(n=!0,Jh(a,r));a=a.next}while(n);tc=!1}}function O1(){Qh()}function Qh(){Sr=ec=!1;var e=0;la!==0&&(Y1()&&(e=la),la=0);for(var t=Ht(),n=null,a=xr;a!==null;){var i=a.next,r=Zh(a,t);r===0?(a.next=null,n===null?xr=i:n.next=i,i===null&&(Qa=n)):(n=a,(e!==0||(r&3)!==0)&&(Sr=!0)),a=i}ti(e)}function Zh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,b=i[f];b===-1?((h&n)===0||(h&a)!==0)&&(i[f]=lp(h,t)):b<=t&&(e.expiredLanes|=h),r&=~h}if(t=ze,n=he,n=Ti(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&hu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&hu(a),pu(n)){case 2:case 8:n=ko;break;case 32:n=Ei;break;case 268435456:n=Uo;break;default:n=Ei}return a=Kh.bind(null,e),n=du(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&hu(a),e.callbackPriority=2,e.callbackNode=null,2}function Kh(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var a=he;return a=Ti(e,e===ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Rh(e,a,t),Zh(e,Ht()),e.callbackNode!=null&&e.callbackNode===n?Kh.bind(null,e):null)}function Jh(e,t){if(vr())return null;Rh(e,t,!0)}function C1(){V1(function(){(ye&6)!==0?du(No,O1):Qh()})}function nc(){return la===0&&(la=Ho()),la}function $h(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function Wh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function B1(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=$h((i[rt]||null).action),f=a.submitter;f&&(t=(t=f[rt]||null)?$h(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new ki("action","action",null,a,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var b=f?Wh(i,f):new FormData(i);js(n,{pending:!0,data:b,method:i.method,action:r},null,b)}}else typeof r=="function"&&(h.preventDefault(),b=f?Wh(i,f):new FormData(i),js(n,{pending:!0,data:b,method:i.method,action:r},r,b))},currentTarget:i}]})}}for(var ac=0;ac<Yu.length;ac++){var lc=Yu[ac],N1=lc.toLowerCase(),k1=lc[0].toUpperCase()+lc.slice(1);Ot(N1,"on"+k1)}Ot(Rf,"onAnimationEnd"),Ot(Mf,"onAnimationIteration"),Ot(Df,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Ip,"onTransitionRun"),Ot(e1,"onTransitionStart"),Ot(t1,"onTransitionCancel"),Ot(Of,"onTransitionEnd"),ma("onMouseEnter",["mouseout","mouseover"]),ma("onMouseLeave",["mouseout","mouseover"]),ma("onPointerEnter",["pointerout","pointerover"]),ma("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function Fh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],b=h.instance,z=h.currentTarget;if(h=h.listener,b!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=z;try{r(i)}catch(C){sr(C)}i.currentTarget=null,r=b}else for(f=0;f<a.length;f++){if(h=a[f],b=h.instance,z=h.currentTarget,h=h.listener,b!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=z;try{r(i)}catch(C){sr(C)}i.currentTarget=null,r=b}}}}function de(e,t){var n=t[bu];n===void 0&&(n=t[bu]=new Set);var a=e+"__bubble";n.has(a)||(Ph(t,e,2,!1),n.add(a))}function ic(e,t,n){var a=0;t&&(a|=4),Ph(n,e,a,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function rc(e){if(!e[jr]){e[jr]=!0,Xo.forEach(function(n){n!=="selectionchange"&&(U1.has(n)||ic(n,!1,e),ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,ic("selectionchange",!1,t))}}function Ph(e,t,n,a){switch(jg(t)){case 2:var i=ob;break;case 8:i=fb;break;default:i=xc}n=i.bind(null,t,n,e),i=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function uc(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=a.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=da(h),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){a=r=f;continue e}h=h.parentNode}}a=a.return}lf(function(){var z=r,C=wu(n),N=[];e:{var T=Cf.get(e);if(T!==void 0){var A=ki,ne=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":A=Dp;break;case"focusin":ne="focus",A=Ou;break;case"focusout":ne="blur",A=Ou;break;case"beforeblur":case"afterblur":A=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Bp;break;case Rf:case Mf:case Df:A=jp;break;case Of:A=kp;break;case"scroll":case"scrollend":A=bp;break;case"wheel":A=Hp;break;case"copy":case"cut":case"paste":A=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=of;break;case"toggle":case"beforetoggle":A=Lp}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),_=I?T!==null?T+"Capture":null:T;I=[];for(var S=z,E;S!==null;){var B=S;if(E=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||E===null||_===null||(B=Sl(S,_),B!=null&&I.push(ai(S,B,E))),je)break;S=S.return}0<I.length&&(T=new A(T,ne,null,n,C),N.push({event:T,listeners:I}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&n!==zu&&(ne=n.relatedTarget||n.fromElement)&&(da(ne)||ne[fa]))break e;if((A||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,A?(ne=n.relatedTarget||n.toElement,A=z,ne=ne?da(ne):null,ne!==null&&(je=g(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(A=null,ne=z),A!==ne)){if(I=sf,B="onMouseLeave",_="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=of,B="onPointerLeave",_="onPointerEnter",S="pointer"),je=A==null?T:xl(A),E=ne==null?T:xl(ne),T=new I(B,S+"leave",A,n,C),T.target=je,T.relatedTarget=E,B=null,da(C)===z&&(I=new I(_,S+"enter",ne,n,C),I.target=E,I.relatedTarget=je,B=I),je=B,A&&ne)t:{for(I=A,_=ne,S=0,E=I;E;E=Za(E))S++;for(E=0,B=_;B;B=Za(B))E++;for(;0<S-E;)I=Za(I),S--;for(;0<E-S;)_=Za(_),E--;for(;S--;){if(I===_||_!==null&&I===_.alternate)break t;I=Za(I),_=Za(_)}I=null}else I=null;A!==null&&Ih(N,T,A,I,!1),ne!==null&&je!==null&&Ih(N,je,ne,I,!0)}}e:{if(T=z?xl(z):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var K=yf;else if(pf(T))if(vf)K=Wp;else{K=Jp;var se=Kp}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&Eu(z.elementType)&&(K=yf):K=$p;if(K&&(K=K(e,z))){bf(N,K,n,C);break e}se&&se(e,T,z),e==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&_u(T,"number",T.value)}switch(se=z?xl(z):window,e){case"focusin":(pf(se)||se.contentEditable==="true")&&(ja=se,Hu=z,Rl=null);break;case"focusout":Rl=Hu=ja=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Tf(N,n,C);break;case"selectionchange":if(Pp)break;case"keydown":case"keyup":Tf(N,n,C)}var J;if(Bu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Sa?gf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(ff&&n.locale!=="ko"&&(Sa||te!=="onCompositionStart"?te==="onCompositionEnd"&&Sa&&(J=rf()):(bn=C,Ru="value"in bn?bn.value:bn.textContent,Sa=!0)),se=_r(z,te),0<se.length&&(te=new cf(te,e,null,n,C),N.push({event:te,listeners:se}),J?te.data=J:(J=mf(n),J!==null&&(te.data=J)))),(J=qp?Vp(e,n):Xp(e,n))&&(te=_r(z,"onBeforeInput"),0<te.length&&(se=new cf("onBeforeInput","beforeinput",null,n,C),N.push({event:se,listeners:te}),se.data=J)),B1(N,e,z,n,C)}Fh(N,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _r(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Sl(e,n),i!=null&&a.unshift(ai(e,i,r)),i=Sl(e,t),i!=null&&a.push(ai(e,i,r))),e.tag===3)return a;e=e.return}return[]}function Za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ih(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,b=h.alternate,z=h.stateNode;if(h=h.tag,b!==null&&b===a)break;h!==5&&h!==26&&h!==27||z===null||(b=z,i?(z=Sl(n,r),z!=null&&f.unshift(ai(n,z,b))):i||(z=Sl(n,r),z!=null&&f.push(ai(n,z,b)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var H1=/\r\n?/g,G1=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(H1,`
`).replace(G1,"")}function tg(e,t){return t=eg(t),eg(e)===t}function Er(){}function Se(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ya(e,""+a);break;case"className":Ri(e,"class",a);break;case"tabIndex":Ri(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,n,a);break;case"style":nf(e,a,r);break;case"data":if(t!=="object"){Ri(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Oi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",i.name,i,null),Se(e,t,"formEncType",i.formEncType,i,null),Se(e,t,"formMethod",i.formMethod,i,null),Se(e,t,"formTarget",i.formTarget,i,null)):(Se(e,t,"encType",i.encType,i,null),Se(e,t,"method",i.method,i,null),Se(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Oi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Er);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Oi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Ai(e,"popover",a);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ai(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=mp.get(n)||n,Ai(e,n,a))}}function sc(e,t,n,a,i,r){switch(n){case"style":nf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ya(e,a):(typeof a=="number"||typeof a=="bigint")&&ya(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Er);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[rt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ai(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,r,f,n,null)}}i&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=i=null,b=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var C=n[a];if(C!=null)switch(a){case"name":i=C;break;case"type":f=C;break;case"checked":b=C;break;case"defaultChecked":z=C;break;case"value":r=C;break;case"defaultValue":h=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,t));break;default:Se(e,t,a,C,n,null)}}Po(e,r,h,b,z,f,i,!1),Mi(e);return;case"select":de("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,i,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ba(e,!!a,t,!1):n!=null&&ba(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Se(e,t,f,h,n,null)}ef(e,a,i,r),Mi(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,b,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ni.length;a++)de(ni[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,z,a,n,null)}return;default:if(Eu(t)){for(C in n)n.hasOwnProperty(C)&&(a=n[C],a!==void 0&&sc(e,t,C,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function L1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,h=null,b=null,z=null,C=null;for(A in n){var N=n[A];if(n.hasOwnProperty(A)&&N!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":b=N;default:a.hasOwnProperty(A)||Se(e,t,A,null,a,N)}}for(var T in a){var A=a[T];if(N=n[T],a.hasOwnProperty(T)&&(A!=null||N!=null))switch(T){case"type":r=A;break;case"name":i=A;break;case"checked":z=A;break;case"defaultChecked":C=A;break;case"value":f=A;break;case"defaultValue":h=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:A!==N&&Se(e,t,T,A,a,N)}}ju(e,f,h,b,z,C,r,i);return;case"select":A=f=h=T=null;for(r in n)if(b=n[r],n.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":A=b;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,b)}for(i in a)if(r=a[i],b=n[i],a.hasOwnProperty(i)&&(r!=null||b!=null))switch(i){case"value":T=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==b&&Se(e,t,i,r,a,b)}t=h,n=f,a=A,T!=null?ba(e,!!n,T,!1):!!a!=!!n&&(t!=null?ba(e,!!n,t,!0):ba(e,!!n,n?[]:"",!1));return;case"textarea":A=T=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":T=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==r&&Se(e,t,f,i,a,r)}Io(e,T,A);return;case"option":for(var ne in n)if(T=n[ne],n.hasOwnProperty(ne)&&T!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,T)}for(b in a)if(T=a[b],A=n[b],a.hasOwnProperty(b)&&T!==A&&(T!=null||A!=null))switch(b){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Se(e,t,b,T,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)T=n[I],n.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,T);for(z in a)if(T=a[z],A=n[z],a.hasOwnProperty(z)&&T!==A&&(T!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:Se(e,t,z,T,a,A)}return;default:if(Eu(t)){for(var je in n)T=n[je],n.hasOwnProperty(je)&&T!==void 0&&!a.hasOwnProperty(je)&&sc(e,t,je,void 0,a,T);for(C in a)T=a[C],A=n[C],!a.hasOwnProperty(C)||T===A||T===void 0&&A===void 0||sc(e,t,C,T,a,A);return}}for(var _ in n)T=n[_],n.hasOwnProperty(_)&&T!=null&&!a.hasOwnProperty(_)&&Se(e,t,_,null,a,T);for(N in a)T=a[N],A=n[N],!a.hasOwnProperty(N)||T===A||T==null&&A==null||Se(e,t,N,T,a,A)}var cc=null,oc=null;function zr(e){return e.nodeType===9?e:e.ownerDocument}function ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dc=null;function Y1(){var e=window.event;return e&&e.type==="popstate"?e===dc?!1:(dc=e,!0):(dc=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,q1=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(X1)}:lg;function X1(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function rg(e,t){var n=t,a=0,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&li(f.documentElement),n&2&&li(f.body),n&4)for(n=f.head,li(n),f=n.firstChild;f;){var h=f.nextSibling,b=f.nodeName;f[vl]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(i===0){e.removeChild(r),di(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);di(t)}function hc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hc(n),yu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Q1(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function Z1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function K1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var mc=null;function ug(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function sg(e,t,n){switch(t=zr(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yu(e)}var Mt=new Map,cg=new Set;function wr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=q.d;q.d={f:J1,r:$1,D:W1,C:F1,L:P1,m:I1,X:tb,S:eb,M:nb};function J1(){var e=on.f(),t=br();return e||t}function $1(e){var t=ha(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):on.r(e)}var Ka=typeof document>"u"?null:document;function og(e,t,n){var a=Ka;if(a&&typeof t=="string"&&t){var i=_t(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),cg.has(i)||(cg.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function W1(e){on.D(e),og("dns-prefetch",e,null)}function F1(e,t){on.C(e,t),og("preconnect",e,t)}function P1(e,t,n){on.L(e,t,n);var a=Ka;if(a&&e&&t){var i='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+_t(n.imageSizes)+'"]')):i+='[href="'+_t(e)+'"]';var r=i;switch(t){case"style":r=Ja(e);break;case"script":r=$a(e)}Mt.has(r)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(ii(r))||t==="script"&&a.querySelector(ri(r))||(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function I1(e,t){on.m(e,t);var n=Ka;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+_t(a)+'"][href="'+_t(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=$a(e)}if(!Mt.has(r)&&(e=w({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ri(r)))return}a=n.createElement("link"),Fe(a,"link",e),Xe(a),n.head.appendChild(a)}}}function eb(e,t,n){on.S(e,t,n);var a=Ka;if(a&&e){var i=ga(a).hoistableStyles,r=Ja(e);t=t||"default";var f=i.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(ii(r)))h.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&pc(e,n);var b=f=a.createElement("link");Xe(b),Fe(b,"link",e),b._p=new Promise(function(z,C){b.onload=z,b.onerror=C}),b.addEventListener("load",function(){h.loading|=1}),b.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Tr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(r,f)}}}function tb(e,t){on.X(e,t);var n=Ka;if(n&&e){var a=ga(n).hoistableScripts,i=$a(e),r=a.get(i);r||(r=n.querySelector(ri(i)),r||(e=w({src:e,async:!0},t),(t=Mt.get(i))&&bc(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function nb(e,t){on.M(e,t);var n=Ka;if(n&&e){var a=ga(n).hoistableScripts,i=$a(e),r=a.get(i);r||(r=n.querySelector(ri(i)),r||(e=w({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&bc(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function fg(e,t,n,a){var i=(i=ee.current)?wr(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ja(n.href),n=ga(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ja(n.href);var r=ga(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(ii(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||ab(i,e,n,f.state))),t&&a===null)throw Error(s(528,""));return f}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$a(n),n=ga(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ja(e){return'href="'+_t(e)+'"'}function ii(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function ab(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Xe(t),e.head.appendChild(t))}function $a(e){return'[src="'+_t(e)+'"]'}function ri(e){return"script[async]"+e}function hg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(a)return t.instance=a,Xe(a),a;var i=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),Fe(a,"style",i),Tr(a,n.precedence,e),t.instance=a;case"stylesheet":i=Ja(n.href);var r=e.querySelector(ii(i));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;a=dg(n),(i=Mt.get(i))&&pc(a,i),r=(e.ownerDocument||e).createElement("link"),Xe(r);var f=r;return f._p=new Promise(function(h,b){f.onload=h,f.onerror=b}),Fe(r,"link",a),t.state.loading|=4,Tr(r,n.precedence,e),t.instance=r;case"script":return r=$a(n.src),(i=e.querySelector(ri(r)))?(t.instance=i,Xe(i),i):(a=n,(i=Mt.get(r))&&(a=w({},n),bc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),Fe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Tr(a,n.precedence,e));return t.instance}function Tr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ar=null;function gg(e,t,n){if(Ar===null){var a=new Map,i=Ar=new Map;i.set(n,a)}else i=Ar,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[vl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function mg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function lb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ui=null;function ib(){}function rb(e,t,n){if(ui===null)throw Error(s(475));var a=ui;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ja(n.href),r=e.querySelector(ii(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Rr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=dg(n),(i=Mt.get(i))&&pc(n,i),r=r.createElement("link"),Xe(r);var f=r;f._p=new Promise(function(h,b){f.onload=h,f.onerror=b}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Rr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function ub(){if(ui===null)throw Error(s(475));var e=ui;return e.stylesheets&&e.count===0&&yc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Rr(){if(this.count--,this.count===0){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mr=null;function yc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mr=new Map,t.forEach(sb,e),Mr=null,Rr.call(e))}function sb(e,t){if(!(t.state.loading&4)){var n=Mr.get(e);if(n)var a=n.get(null);else{n=new Map,Mr.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=Rr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var si={$$typeof:Q,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function cb(e,t,n,a,i,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.hiddenUpdates=gu(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function bg(e,t,n,a,i,r,f,h,b,z,C,N){return e=new cb(e,t,n,f,h,b,z,N),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=Iu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},as(r),e}function yg(e){return e?(e=wa,e):wa}function vg(e,t,n,a,i,r){i=yg(i),a.context===null?a.context=i:a.pendingContext=i,a=xn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Sn(e,a,t),n!==null&&(vt(n,e,t),Hl(n,e,t))}function xg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vc(e,t){xg(e,t),(e=e.alternate)&&xg(e,t)}function Sg(e){if(e.tag===13){var t=za(e,67108864);t!==null&&vt(t,e,67108864),vc(e,67108864)}}var Dr=!0;function ob(e,t,n,a){var i=O.T;O.T=null;var r=q.p;try{q.p=2,xc(e,t,n,a)}finally{q.p=r,O.T=i}}function fb(e,t,n,a){var i=O.T;O.T=null;var r=q.p;try{q.p=8,xc(e,t,n,a)}finally{q.p=r,O.T=i}}function xc(e,t,n,a){if(Dr){var i=Sc(a);if(i===null)uc(e,t,a,Or,n),_g(e,a);else if(hb(i,e,t,n,a))a.stopPropagation();else if(_g(e,a),t&4&&-1<db.indexOf(e)){for(;i!==null;){var r=ha(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Yn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var b=1<<31-dt(f);h.entanglements[1]|=b,f&=~b}Vt(r),(ye&6)===0&&(mr=Ht()+500,ti(0))}}break;case 13:h=za(r,2),h!==null&&vt(h,r,2),br(),vc(r,2)}if(r=Sc(a),r===null&&uc(e,t,a,Or,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else uc(e,t,a,null,n)}}function Sc(e){return e=wu(e),jc(e)}var Or=null;function jc(e){if(Or=null,e=da(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Or=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F0()){case No:return 2;case ko:return 8;case Ei:case P0:return 32;case Uo:return 268435456;default:return 32}default:return 32}}var _c=!1,Bn=null,Nn=null,kn=null,ci=new Map,oi=new Map,Un=[],db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function fi(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ha(t),t!==null&&Sg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hb(e,t,n,a,i){switch(t){case"focusin":return Bn=fi(Bn,e,t,n,a,i),!0;case"dragenter":return Nn=fi(Nn,e,t,n,a,i),!0;case"mouseover":return kn=fi(kn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return ci.set(r,fi(ci.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,oi.set(r,fi(oi.get(r)||null,e,t,n,a,i)),!0}return!1}function Eg(e){var t=da(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,rp(e.priority,function(){if(n.tag===13){var a=yt();a=mu(a);var i=za(n,a);i!==null&&vt(i,n,a),vc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);zu=a,n.target.dispatchEvent(a),zu=null}else return t=ha(n),t!==null&&Sg(t),e.blockedOn=n,!1;t.shift()}return!0}function zg(e,t,n){Cr(e)&&n.delete(t)}function gb(){_c=!1,Bn!==null&&Cr(Bn)&&(Bn=null),Nn!==null&&Cr(Nn)&&(Nn=null),kn!==null&&Cr(kn)&&(kn=null),ci.forEach(zg),oi.forEach(zg)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,_c||(_c=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,gb)))}var Nr=null;function wg(e){Nr!==e&&(Nr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Nr===e&&(Nr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(jc(a||n)===null)continue;break}var r=ha(n);r!==null&&(e.splice(t,3),t-=3,js(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function di(e){function t(b){return Br(b,e)}Bn!==null&&Br(Bn,e),Nn!==null&&Br(Nn,e),kn!==null&&Br(kn,e),ci.forEach(t),oi.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[rt]||null;if(typeof r=="function")f||wg(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[rt]||null)h=f.formAction;else if(jc(i)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),wg(n)}}}function Ec(e){this._internalRoot=e}kr.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=yt();vg(n,a,e,t,null,null)},kr.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vg(e.current,2,null,e,null,null),br(),t[fa]=null}};function kr(e){this._internalRoot=e}kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Eg(e)}};var Tg=u.version;if(Tg!=="19.1.0")throw Error(s(527,Tg,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var mb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ur.isDisabled&&Ur.supportsFiber)try{pl=Ur.inject(mb),ft=Ur}catch{}}return gi.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",i=Vd,r=Xd,f=Qd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=bg(e,1,!1,null,null,n,a,i,r,f,h,null),e[fa]=t.current,rc(e),new Ec(t)},gi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,i="",r=Vd,f=Xd,h=Qd,b=null,z=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(z=n.formState)),t=bg(e,1,!0,t,n??null,a,i,r,f,h,b,z),t.context=yg(null),n=t.current,a=yt(),a=mu(a),i=xn(a),i.callback=null,Sn(n,i,a),n=a,t.current.lanes=n,yl(t,n),Vt(t),e[fa]=t.current,rc(e),new kr(t)},gi.version="19.1.0",gi}var Ug;function wb(){if(Ug)return Tc.exports;Ug=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Tc.exports=zb(),Tc.exports}var Tb=wb(),nt=function(){return nt=Object.assign||function(u){for(var c,s=1,d=arguments.length;s<d;s++){c=arguments[s];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(u[g]=c[g])}return u},nt.apply(this,arguments)};function Pr(l,u,c){if(c||arguments.length===2)for(var s=0,d=u.length,g;s<d;s++)(g||!(s in u))&&(g||(g=Array.prototype.slice.call(u,0,s)),g[s]=u[s]);return l.concat(g||Array.prototype.slice.call(u))}var Te="-ms-",vi="-moz-",be="-webkit-",gm="comm",lu="rule",xo="decl",Ab="@import",mm="@keyframes",Rb="@layer",pm=Math.abs,So=String.fromCharCode,co=Object.assign;function Mb(l,u){return Je(l,0)^45?(((u<<2^Je(l,0))<<2^Je(l,1))<<2^Je(l,2))<<2^Je(l,3):0}function bm(l){return l.trim()}function fn(l,u){return(l=u.exec(l))?l[0]:l}function re(l,u,c){return l.replace(u,c)}function Qr(l,u,c){return l.indexOf(u,c)}function Je(l,u){return l.charCodeAt(u)|0}function sl(l,u,c){return l.slice(u,c)}function Xt(l){return l.length}function ym(l){return l.length}function bi(l,u){return u.push(l),l}function Db(l,u){return l.map(u).join("")}function Hg(l,u){return l.filter(function(c){return!fn(c,u)})}var iu=1,cl=1,vm=0,Dt=0,He=0,dl="";function ru(l,u,c,s,d,g,p,j){return{value:l,root:u,parent:c,type:s,props:d,children:g,line:iu,column:cl,length:p,return:"",siblings:j}}function Gn(l,u){return co(ru("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function Wa(l){for(;l.root;)l=Gn(l.root,{children:[l]});bi(l,l.siblings)}function Ob(){return He}function Cb(){return He=Dt>0?Je(dl,--Dt):0,cl--,He===10&&(cl=1,iu--),He}function Nt(){return He=Dt<vm?Je(dl,Dt++):0,cl++,He===10&&(cl=1,iu++),He}function ra(){return Je(dl,Dt)}function Zr(){return Dt}function uu(l,u){return sl(dl,l,u)}function oo(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bb(l){return iu=cl=1,vm=Xt(dl=l),Dt=0,[]}function Nb(l){return dl="",l}function Dc(l){return bm(uu(Dt-1,fo(l===91?l+2:l===40?l+1:l)))}function kb(l){for(;(He=ra())&&He<33;)Nt();return oo(l)>2||oo(He)>3?"":" "}function Ub(l,u){for(;--u&&Nt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return uu(l,Zr()+(u<6&&ra()==32&&Nt()==32))}function fo(l){for(;Nt();)switch(He){case l:return Dt;case 34:case 39:l!==34&&l!==39&&fo(He);break;case 40:l===41&&fo(l);break;case 92:Nt();break}return Dt}function Hb(l,u){for(;Nt()&&l+He!==57;)if(l+He===84&&ra()===47)break;return"/*"+uu(u,Dt-1)+"*"+So(l===47?l:Nt())}function Gb(l){for(;!oo(ra());)Nt();return uu(l,Dt)}function Lb(l){return Nb(Kr("",null,null,null,[""],l=Bb(l),0,[0],l))}function Kr(l,u,c,s,d,g,p,j,y){for(var m=0,w=0,R=p,D=0,H=0,G=0,L=1,X=1,U=1,$=0,Q="",ae=d,Z=g,le=s,W=Q;X;)switch(G=$,$=Nt()){case 40:if(G!=108&&Je(W,R-1)==58){Qr(W+=re(Dc($),"&","&\f"),"&\f",pm(m?j[m-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:W+=Dc($);break;case 9:case 10:case 13:case 32:W+=kb(G);break;case 92:W+=Ub(Zr()-1,7);continue;case 47:switch(ra()){case 42:case 47:bi(Yb(Hb(Nt(),Zr()),u,c,y),y);break;default:W+="/"}break;case 123*L:j[m++]=Xt(W)*U;case 125*L:case 59:case 0:switch($){case 0:case 125:X=0;case 59+w:U==-1&&(W=re(W,/\f/g,"")),H>0&&Xt(W)-R&&bi(H>32?Lg(W+";",s,c,R-1,y):Lg(re(W," ","")+";",s,c,R-2,y),y);break;case 59:W+=";";default:if(bi(le=Gg(W,u,c,m,w,d,j,Q,ae=[],Z=[],R,g),g),$===123)if(w===0)Kr(W,u,le,le,ae,g,R,j,Z);else switch(D===99&&Je(W,3)===110?100:D){case 100:case 108:case 109:case 115:Kr(l,le,le,s&&bi(Gg(l,le,le,0,0,d,j,Q,d,ae=[],R,Z),Z),d,Z,R,j,s?ae:Z);break;default:Kr(W,le,le,le,[""],Z,0,j,Z)}}m=w=H=0,L=U=1,Q=W="",R=p;break;case 58:R=1+Xt(W),H=G;default:if(L<1){if($==123)--L;else if($==125&&L++==0&&Cb()==125)continue}switch(W+=So($),$*L){case 38:U=w>0?1:(W+="\f",-1);break;case 44:j[m++]=(Xt(W)-1)*U,U=1;break;case 64:ra()===45&&(W+=Dc(Nt())),D=ra(),w=R=Xt(Q=W+=Gb(Zr())),$++;break;case 45:G===45&&Xt(W)==2&&(L=0)}}return g}function Gg(l,u,c,s,d,g,p,j,y,m,w,R){for(var D=d-1,H=d===0?g:[""],G=ym(H),L=0,X=0,U=0;L<s;++L)for(var $=0,Q=sl(l,D+1,D=pm(X=p[L])),ae=l;$<G;++$)(ae=bm(X>0?H[$]+" "+Q:re(Q,/&\f/g,H[$])))&&(y[U++]=ae);return ru(l,u,c,d===0?lu:j,y,m,w,R)}function Yb(l,u,c,s){return ru(l,u,c,gm,So(Ob()),sl(l,2,-2),0,s)}function Lg(l,u,c,s,d){return ru(l,u,c,xo,sl(l,0,s),sl(l,s+1,-1),s,d)}function xm(l,u,c){switch(Mb(l,u)){case 5103:return be+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+l+l;case 4789:return vi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return be+l+vi+l+Te+l+l;case 5936:switch(Je(l,u+11)){case 114:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return be+l+Te+l+l;case 6165:return be+l+Te+"flex-"+l+l;case 5187:return be+l+re(l,/(\w+).+(:[^]+)/,be+"box-$1$2"+Te+"flex-$1$2")+l;case 5443:return be+l+Te+"flex-item-"+re(l,/flex-|-self/g,"")+(fn(l,/flex-|baseline/)?"":Te+"grid-row-"+re(l,/flex-|-self/g,""))+l;case 4675:return be+l+Te+"flex-line-pack"+re(l,/align-content|flex-|-self/g,"")+l;case 5548:return be+l+Te+re(l,"shrink","negative")+l;case 5292:return be+l+Te+re(l,"basis","preferred-size")+l;case 6060:return be+"box-"+re(l,"-grow","")+be+l+Te+re(l,"grow","positive")+l;case 4554:return be+re(l,/([^-])(transform)/g,"$1"+be+"$2")+l;case 6187:return re(re(re(l,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),l,"")+l;case 5495:case 3959:return re(l,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(l,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+l+l;case 4200:if(!fn(l,/flex-|baseline/))return Te+"grid-column-align"+sl(l,u)+l;break;case 2592:case 3360:return Te+re(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(s,d){return u=d,fn(s.props,/grid-\w+-end/)})?~Qr(l+(c=c[u].value),"span",0)?l:Te+re(l,"-start","")+l+Te+"grid-row-span:"+(~Qr(c,"span",0)?fn(c,/\d+/):+fn(c,/\d+/)-+fn(l,/\d+/))+";":Te+re(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(s){return fn(s.props,/grid-\w+-start/)})?l:Te+re(re(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return re(l,/(.+)-inline(.+)/,be+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(l)-1-u>6)switch(Je(l,u+1)){case 109:if(Je(l,u+4)!==45)break;case 102:return re(l,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+vi+(Je(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~Qr(l,"stretch",0)?xm(re(l,"stretch","fill-available"),u,c)+l:l}break;case 5152:case 5920:return re(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,g,p,j,y,m){return Te+d+":"+g+m+(p?Te+d+"-span:"+(j?y:+y-+g)+m:"")+l});case 4949:if(Je(l,u+6)===121)return re(l,":",":"+be)+l;break;case 6444:switch(Je(l,Je(l,14)===45?18:11)){case 120:return re(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(l,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Te+"$2box$3")+l;case 100:return re(l,":",":"+Te)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(l,"scroll-","scroll-snap-")+l}return l}function Ir(l,u){for(var c="",s=0;s<l.length;s++)c+=u(l[s],s,l,u)||"";return c}function qb(l,u,c,s){switch(l.type){case Rb:if(l.children.length)break;case Ab:case xo:return l.return=l.return||l.value;case gm:return"";case mm:return l.return=l.value+"{"+Ir(l.children,s)+"}";case lu:if(!Xt(l.value=l.props.join(",")))return""}return Xt(c=Ir(l.children,s))?l.return=l.value+"{"+c+"}":""}function Vb(l){var u=ym(l);return function(c,s,d,g){for(var p="",j=0;j<u;j++)p+=l[j](c,s,d,g)||"";return p}}function Xb(l){return function(u){u.root||(u=u.return)&&l(u)}}function Qb(l,u,c,s){if(l.length>-1&&!l.return)switch(l.type){case xo:l.return=xm(l.value,l.length,c);return;case mm:return Ir([Gn(l,{value:re(l.value,"@","@"+be)})],s);case lu:if(l.length)return Db(c=l.props,function(d){switch(fn(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(Gn(l,{props:[re(d,/:(read-\w+)/,":"+vi+"$1")]})),Wa(Gn(l,{props:[d]})),co(l,{props:Hg(c,s)});break;case"::placeholder":Wa(Gn(l,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Wa(Gn(l,{props:[re(d,/:(plac\w+)/,":"+vi+"$1")]})),Wa(Gn(l,{props:[re(d,/:(plac\w+)/,Te+"input-$1")]})),Wa(Gn(l,{props:[d]})),co(l,{props:Hg(c,s)});break}return""})}}var Zb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},ol=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Sm="active",jm="data-styled-version",su="6.1.19",jo=`/*!sc*/
`,eu=typeof window<"u"&&typeof document<"u",Kb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),cu=Object.freeze([]),fl=Object.freeze({});function Jb(l,u,c){return c===void 0&&(c=fl),l.theme!==c.theme&&l.theme||u||c.theme}var _m=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$b=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wb=/(^-|-$)/g;function Yg(l){return l.replace($b,"-").replace(Wb,"")}var Fb=/(a)(d)/gi,Hr=52,qg=function(l){return String.fromCharCode(l+(l>25?39:97))};function ho(l){var u,c="";for(u=Math.abs(l);u>Hr;u=u/Hr|0)c=qg(u%Hr)+c;return(qg(u%Hr)+c).replace(Fb,"$1-$2")}var Oc,Em=5381,ul=function(l,u){for(var c=u.length;c;)l=33*l^u.charCodeAt(--c);return l},zm=function(l){return ul(Em,l)};function Pb(l){return ho(zm(l)>>>0)}function Ib(l){return l.displayName||l.name||"Component"}function Cc(l){return typeof l=="string"&&!0}var wm=typeof Symbol=="function"&&Symbol.for,Tm=wm?Symbol.for("react.memo"):60115,ey=wm?Symbol.for("react.forward_ref"):60112,ty={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ny={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Am={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ay=((Oc={})[ey]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oc[Tm]=Am,Oc);function Vg(l){return("type"in(u=l)&&u.type.$$typeof)===Tm?Am:"$$typeof"in l?ay[l.$$typeof]:ty;var u}var ly=Object.defineProperty,iy=Object.getOwnPropertyNames,Xg=Object.getOwnPropertySymbols,ry=Object.getOwnPropertyDescriptor,uy=Object.getPrototypeOf,Qg=Object.prototype;function Rm(l,u,c){if(typeof u!="string"){if(Qg){var s=uy(u);s&&s!==Qg&&Rm(l,s,c)}var d=iy(u);Xg&&(d=d.concat(Xg(u)));for(var g=Vg(l),p=Vg(u),j=0;j<d.length;++j){var y=d[j];if(!(y in ny||c&&c[y]||p&&y in p||g&&y in g)){var m=ry(u,y);try{ly(l,y,m)}catch{}}}}return l}function ca(l){return typeof l=="function"}function _o(l){return typeof l=="object"&&"styledComponentId"in l}function ia(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function Zg(l,u){if(l.length===0)return"";for(var c=l[0],s=1;s<l.length;s++)c+=l[s];return c}function xi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function go(l,u,c){if(c===void 0&&(c=!1),!c&&!xi(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var s=0;s<u.length;s++)l[s]=go(l[s],u[s]);else if(xi(u))for(var s in u)l[s]=go(l[s],u[s]);return l}function Eo(l,u){Object.defineProperty(l,"toString",{value:u})}function oa(l){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var sy=function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var c=0,s=0;s<u;s++)c+=this.groupSizes[s];return c},l.prototype.insertRules=function(u,c){if(u>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,g=d;u>=g;)if((g<<=1)<0)throw oa(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(s),this.length=g;for(var p=d;p<g;p++)this.groupSizes[p]=0}for(var j=this.indexOfGroup(u+1),y=(p=0,c.length);p<y;p++)this.tag.insertRule(j,c[p])&&(this.groupSizes[u]++,j++)},l.prototype.clearGroup=function(u){if(u<this.length){var c=this.groupSizes[u],s=this.indexOfGroup(u),d=s+c;this.groupSizes[u]=0;for(var g=s;g<d;g++)this.tag.deleteRule(s)}},l.prototype.getGroup=function(u){var c="";if(u>=this.length||this.groupSizes[u]===0)return c;for(var s=this.groupSizes[u],d=this.indexOfGroup(u),g=d+s,p=d;p<g;p++)c+="".concat(this.tag.getRule(p)).concat(jo);return c},l}(),Jr=new Map,tu=new Map,$r=1,Gr=function(l){if(Jr.has(l))return Jr.get(l);for(;tu.has($r);)$r++;var u=$r++;return Jr.set(l,u),tu.set(u,l),u},cy=function(l,u){$r=u+1,Jr.set(l,u),tu.set(u,l)},oy="style[".concat(ol,"][").concat(jm,'="').concat(su,'"]'),fy=new RegExp("^".concat(ol,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dy=function(l,u,c){for(var s,d=c.split(","),g=0,p=d.length;g<p;g++)(s=d[g])&&l.registerName(u,s)},hy=function(l,u){for(var c,s=((c=u.textContent)!==null&&c!==void 0?c:"").split(jo),d=[],g=0,p=s.length;g<p;g++){var j=s[g].trim();if(j){var y=j.match(fy);if(y){var m=0|parseInt(y[1],10),w=y[2];m!==0&&(cy(w,m),dy(l,w,y[3]),l.getTag().insertRules(m,d)),d.length=0}else d.push(j)}}},Kg=function(l){for(var u=document.querySelectorAll(oy),c=0,s=u.length;c<s;c++){var d=u[c];d&&d.getAttribute(ol)!==Sm&&(hy(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function gy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mm=function(l){var u=document.head,c=l||u,s=document.createElement("style"),d=function(j){var y=Array.from(j.querySelectorAll("style[".concat(ol,"]")));return y[y.length-1]}(c),g=d!==void 0?d.nextSibling:null;s.setAttribute(ol,Sm),s.setAttribute(jm,su);var p=gy();return p&&s.setAttribute("nonce",p),c.insertBefore(s,g),s},my=function(){function l(u){this.element=Mm(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var s=document.styleSheets,d=0,g=s.length;d<g;d++){var p=s[d];if(p.ownerNode===c)return p}throw oa(17)}(this.element),this.length=0}return l.prototype.insertRule=function(u,c){try{return this.sheet.insertRule(c,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var c=this.sheet.cssRules[u];return c&&c.cssText?c.cssText:""},l}(),py=function(){function l(u){this.element=Mm(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,c){if(u<=this.length&&u>=0){var s=document.createTextNode(c);return this.element.insertBefore(s,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l}(),by=function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,c){return u<=this.length&&(this.rules.splice(u,0,c),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l}(),Jg=eu,yy={isServer:!eu,useCSSOMInjection:!Kb},Dm=function(){function l(u,c,s){u===void 0&&(u=fl),c===void 0&&(c={});var d=this;this.options=nt(nt({},yy),u),this.gs=c,this.names=new Map(s),this.server=!!u.isServer,!this.server&&eu&&Jg&&(Jg=!1,Kg(this)),Eo(this,function(){return function(g){for(var p=g.getTag(),j=p.length,y="",m=function(R){var D=function(U){return tu.get(U)}(R);if(D===void 0)return"continue";var H=g.names.get(D),G=p.getGroup(R);if(H===void 0||!H.size||G.length===0)return"continue";var L="".concat(ol,".g").concat(R,'[id="').concat(D,'"]'),X="";H!==void 0&&H.forEach(function(U){U.length>0&&(X+="".concat(U,","))}),y+="".concat(G).concat(L,'{content:"').concat(X,'"}').concat(jo)},w=0;w<j;w++)m(w);return y}(d)})}return l.registerId=function(u){return Gr(u)},l.prototype.rehydrate=function(){!this.server&&eu&&Kg(this)},l.prototype.reconstructWithOptions=function(u,c){return c===void 0&&(c=!0),new l(nt(nt({},this.options),u),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=function(c){var s=c.useCSSOMInjection,d=c.target;return c.isServer?new by(d):s?new my(d):new py(d)}(this.options),new sy(u)));var u},l.prototype.hasNameForId=function(u,c){return this.names.has(u)&&this.names.get(u).has(c)},l.prototype.registerName=function(u,c){if(Gr(u),this.names.has(u))this.names.get(u).add(c);else{var s=new Set;s.add(c),this.names.set(u,s)}},l.prototype.insertRules=function(u,c,s){this.registerName(u,c),this.getTag().insertRules(Gr(u),s)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(Gr(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l}(),vy=/&/g,xy=/^\s*\/\/.*$/gm;function Om(l,u){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(u," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(u," ")),c.props=c.props.map(function(s){return"".concat(u," ").concat(s)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Om(c.children,u)),c})}function Sy(l){var u,c,s,d=fl,g=d.options,p=g===void 0?fl:g,j=d.plugins,y=j===void 0?cu:j,m=function(D,H,G){return G.startsWith(c)&&G.endsWith(c)&&G.replaceAll(c,"").length>0?".".concat(u):D},w=y.slice();w.push(function(D){D.type===lu&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(vy,c).replace(s,m))}),p.prefix&&w.push(Qb),w.push(qb);var R=function(D,H,G,L){H===void 0&&(H=""),G===void 0&&(G=""),L===void 0&&(L="&"),u=L,c=H,s=new RegExp("\\".concat(c,"\\b"),"g");var X=D.replace(xy,""),U=Lb(G||H?"".concat(G," ").concat(H," { ").concat(X," }"):X);p.namespace&&(U=Om(U,p.namespace));var $=[];return Ir(U,Vb(w.concat(Xb(function(Q){return $.push(Q)})))),$};return R.hash=y.length?y.reduce(function(D,H){return H.name||oa(15),ul(D,H.name)},Em).toString():"",R}var jy=new Dm,mo=Sy(),Cm=sa.createContext({shouldForwardProp:void 0,styleSheet:jy,stylis:mo});Cm.Consumer;sa.createContext(void 0);function $g(){return M.useContext(Cm)}var _y=function(){function l(u,c){var s=this;this.inject=function(d,g){g===void 0&&(g=mo);var p=s.name+g.hash;d.hasNameForId(s.id,p)||d.insertRules(s.id,p,g(s.rules,p,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=c,Eo(this,function(){throw oa(12,String(s.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=mo),this.name+u.hash},l}(),Ey=function(l){return l>="A"&&l<="Z"};function Wg(l){for(var u="",c=0;c<l.length;c++){var s=l[c];if(c===1&&s==="-"&&l[0]==="-")return l;Ey(s)?u+="-"+s.toLowerCase():u+=s}return u.startsWith("ms-")?"-"+u:u}var Bm=function(l){return l==null||l===!1||l===""},Nm=function(l){var u,c,s=[];for(var d in l){var g=l[d];l.hasOwnProperty(d)&&!Bm(g)&&(Array.isArray(g)&&g.isCss||ca(g)?s.push("".concat(Wg(d),":"),g,";"):xi(g)?s.push.apply(s,Pr(Pr(["".concat(d," {")],Nm(g),!1),["}"],!1)):s.push("".concat(Wg(d),": ").concat((u=d,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||u in Zb||u.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return s};function ua(l,u,c,s){if(Bm(l))return[];if(_o(l))return[".".concat(l.styledComponentId)];if(ca(l)){if(!ca(g=l)||g.prototype&&g.prototype.isReactComponent||!u)return[l];var d=l(u);return ua(d,u,c,s)}var g;return l instanceof _y?c?(l.inject(c,s),[l.getName(s)]):[l]:xi(l)?Nm(l):Array.isArray(l)?Array.prototype.concat.apply(cu,l.map(function(p){return ua(p,u,c,s)})):[l.toString()]}function zy(l){for(var u=0;u<l.length;u+=1){var c=l[u];if(ca(c)&&!_o(c))return!1}return!0}var wy=zm(su),Ty=function(){function l(u,c,s){this.rules=u,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&zy(u),this.componentId=c,this.baseHash=ul(wy,c),this.baseStyle=s,Dm.registerId(c)}return l.prototype.generateAndInjectStyles=function(u,c,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var g=Zg(ua(this.rules,u,c,s)),p=ho(ul(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,p)){var j=s(g,".".concat(p),void 0,this.componentId);c.insertRules(this.componentId,p,j)}d=ia(d,p),this.staticRulesId=p}else{for(var y=ul(this.baseHash,s.hash),m="",w=0;w<this.rules.length;w++){var R=this.rules[w];if(typeof R=="string")m+=R;else if(R){var D=Zg(ua(R,u,c,s));y=ul(y,D+w),m+=D}}if(m){var H=ho(y>>>0);c.hasNameForId(this.componentId,H)||c.insertRules(this.componentId,H,s(m,".".concat(H),void 0,this.componentId)),d=ia(d,H)}}return d},l}(),nu=sa.createContext(void 0);nu.Consumer;function Ay(l){var u=sa.useContext(nu),c=M.useMemo(function(){return function(s,d){if(!s)throw oa(14);if(ca(s)){var g=s(d);return g}if(Array.isArray(s)||typeof s!="object")throw oa(8);return d?nt(nt({},d),s):s}(l.theme,u)},[l.theme,u]);return l.children?sa.createElement(nu.Provider,{value:c},l.children):null}var Bc={};function Ry(l,u,c){var s=_o(l),d=l,g=!Cc(l),p=u.attrs,j=p===void 0?cu:p,y=u.componentId,m=y===void 0?function(ae,Z){var le=typeof ae!="string"?"sc":Yg(ae);Bc[le]=(Bc[le]||0)+1;var W="".concat(le,"-").concat(Pb(su+le+Bc[le]));return Z?"".concat(Z,"-").concat(W):W}(u.displayName,u.parentComponentId):y,w=u.displayName,R=w===void 0?function(ae){return Cc(ae)?"styled.".concat(ae):"Styled(".concat(Ib(ae),")")}(l):w,D=u.displayName&&u.componentId?"".concat(Yg(u.displayName),"-").concat(u.componentId):u.componentId||m,H=s&&d.attrs?d.attrs.concat(j).filter(Boolean):j,G=u.shouldForwardProp;if(s&&d.shouldForwardProp){var L=d.shouldForwardProp;if(u.shouldForwardProp){var X=u.shouldForwardProp;G=function(ae,Z){return L(ae,Z)&&X(ae,Z)}}else G=L}var U=new Ty(c,D,s?d.componentStyle:void 0);function $(ae,Z){return function(le,W,we){var _e=le.attrs,at=le.componentStyle,it=le.defaultProps,Ye=le.foldedComponentIds,Zt=le.styledComponentId,Kt=le.target,qe=sa.useContext(nu),O=$g(),q=le.shouldForwardProp||O.shouldForwardProp,P=Jb(W,qe,it)||fl,ce=function(oe,ee,Ve){for(var pe,Pe=nt(nt({},ee),{className:void 0,theme:Ve}),Ln=0;Ln<oe.length;Ln+=1){var Jt=ca(pe=oe[Ln])?pe(Pe):pe;for(var St in Jt)Pe[St]=St==="className"?ia(Pe[St],Jt[St]):St==="style"?nt(nt({},Pe[St]),Jt[St]):Jt[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(_e,W,P),x=ce.as||Kt,k={};for(var Y in ce)ce[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ce.theme===P||(Y==="forwardedAs"?k.as=ce.forwardedAs:q&&!q(Y,x)||(k[Y]=ce[Y]));var V=function(oe,ee){var Ve=$g(),pe=oe.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(at,ce),F=ia(Ye,Zt);return V&&(F+=" "+V),ce.className&&(F+=" "+ce.className),k[Cc(x)&&!_m.has(x)?"class":"className"]=F,we&&(k.ref=we),M.createElement(x,k)}(Q,ae,Z)}$.displayName=R;var Q=sa.forwardRef($);return Q.attrs=H,Q.componentStyle=U,Q.displayName=R,Q.shouldForwardProp=G,Q.foldedComponentIds=s?ia(d.foldedComponentIds,d.styledComponentId):"",Q.styledComponentId=D,Q.target=s?d.target:l,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=s?function(Z){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var we=0,_e=le;we<_e.length;we++)go(Z,_e[we],!0);return Z}({},d.defaultProps,ae):ae}}),Eo(Q,function(){return".".concat(Q.styledComponentId)}),g&&Rm(Q,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function Fg(l,u){for(var c=[l[0]],s=0,d=u.length;s<d;s+=1)c.push(u[s],l[s+1]);return c}var Pg=function(l){return Object.assign(l,{isCss:!0})};function My(l){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];if(ca(l)||xi(l))return Pg(ua(Fg(cu,Pr([l],u,!0))));var s=l;return u.length===0&&s.length===1&&typeof s[0]=="string"?ua(s):Pg(ua(Fg(s,u)))}function po(l,u,c){if(c===void 0&&(c=fl),!u)throw oa(1,u);var s=function(d){for(var g=[],p=1;p<arguments.length;p++)g[p-1]=arguments[p];return l(u,c,My.apply(void 0,Pr([d],g,!1)))};return s.attrs=function(d){return po(l,u,nt(nt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return po(l,u,nt(nt({},c),d))},s}var km=function(l){return po(Ry,l)},v=km;_m.forEach(function(l){v[l]=km(l)});/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ig="popstate";function Dy(l={}){function u(s,d){let{pathname:g,search:p,hash:j}=s.location;return bo("",{pathname:g,search:p,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(s,d){return typeof d=="string"?d:Si(d)}return Cy(u,c,null,l)}function Me(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function kt(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Oy(){return Math.random().toString(36).substring(2,10)}function em(l,u){return{usr:l.state,key:l.key,idx:u}}function bo(l,u,c=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?hl(u):u,state:c,key:u&&u.key||s||Oy()}}function Si({pathname:l="/",search:u="",hash:c=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function hl(l){let u={};if(l){let c=l.indexOf("#");c>=0&&(u.hash=l.substring(c),l=l.substring(0,c));let s=l.indexOf("?");s>=0&&(u.search=l.substring(s),l=l.substring(0,s)),l&&(u.pathname=l)}return u}function Cy(l,u,c,s={}){let{window:d=document.defaultView,v5Compat:g=!1}=s,p=d.history,j="POP",y=null,m=w();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function w(){return(p.state||{idx:null}).idx}function R(){j="POP";let X=w(),U=X==null?null:X-m;m=X,y&&y({action:j,location:L.location,delta:U})}function D(X,U){j="PUSH";let $=bo(L.location,X,U);m=w()+1;let Q=em($,m),ae=L.createHref($);try{p.pushState(Q,"",ae)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;d.location.assign(ae)}g&&y&&y({action:j,location:L.location,delta:1})}function H(X,U){j="REPLACE";let $=bo(L.location,X,U);m=w();let Q=em($,m),ae=L.createHref($);p.replaceState(Q,"",ae),g&&y&&y({action:j,location:L.location,delta:0})}function G(X){return By(X)}let L={get action(){return j},get location(){return l(d,p)},listen(X){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(Ig,R),y=X,()=>{d.removeEventListener(Ig,R),y=null}},createHref(X){return u(d,X)},createURL:G,encodeLocation(X){let U=G(X);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:D,replace:H,go(X){return p.go(X)}};return L}function By(l,u=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Me(c,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:Si(l);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=c+s),new URL(s,c)}function Um(l,u,c="/"){return Ny(l,u,c,!1)}function Ny(l,u,c,s){let d=typeof u=="string"?hl(u):u,g=hn(d.pathname||"/",c);if(g==null)return null;let p=Hm(l);ky(p);let j=null;for(let y=0;j==null&&y<p.length;++y){let m=Ky(g);j=Qy(p[y],m,s)}return j}function Hm(l,u=[],c=[],s=""){let d=(g,p,j)=>{let y={relativePath:j===void 0?g.path||"":j,caseSensitive:g.caseSensitive===!0,childrenIndex:p,route:g};y.relativePath.startsWith("/")&&(Me(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length));let m=dn([s,y.relativePath]),w=c.concat(y);g.children&&g.children.length>0&&(Me(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Hm(g.children,u,w,m)),!(g.path==null&&!g.index)&&u.push({path:m,score:Vy(m,g.index),routesMeta:w})};return l.forEach((g,p)=>{if(g.path===""||!g.path?.includes("?"))d(g,p);else for(let j of Gm(g.path))d(g,p,j)}),u}function Gm(l){let u=l.split("/");if(u.length===0)return[];let[c,...s]=u,d=c.endsWith("?"),g=c.replace(/\?$/,"");if(s.length===0)return d?[g,""]:[g];let p=Gm(s.join("/")),j=[];return j.push(...p.map(y=>y===""?g:[g,y].join("/"))),d&&j.push(...p),j.map(y=>l.startsWith("/")&&y===""?"/":y)}function ky(l){l.sort((u,c)=>u.score!==c.score?c.score-u.score:Xy(u.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var Uy=/^:[\w-]+$/,Hy=3,Gy=2,Ly=1,Yy=10,qy=-2,tm=l=>l==="*";function Vy(l,u){let c=l.split("/"),s=c.length;return c.some(tm)&&(s+=qy),u&&(s+=Gy),c.filter(d=>!tm(d)).reduce((d,g)=>d+(Uy.test(g)?Hy:g===""?Ly:Yy),s)}function Xy(l,u){return l.length===u.length&&l.slice(0,-1).every((s,d)=>s===u[d])?l[l.length-1]-u[u.length-1]:0}function Qy(l,u,c=!1){let{routesMeta:s}=l,d={},g="/",p=[];for(let j=0;j<s.length;++j){let y=s[j],m=j===s.length-1,w=g==="/"?u:u.slice(g.length)||"/",R=au({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},w),D=y.route;if(!R&&m&&c&&!s[s.length-1].route.index&&(R=au({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},w)),!R)return null;Object.assign(d,R.params),p.push({params:d,pathname:dn([g,R.pathname]),pathnameBase:Fy(dn([g,R.pathnameBase])),route:D}),R.pathnameBase!=="/"&&(g=dn([g,R.pathnameBase]))}return p}function au(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,s]=Zy(l.path,l.caseSensitive,l.end),d=u.match(c);if(!d)return null;let g=d[0],p=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:s.reduce((m,{paramName:w,isOptional:R},D)=>{if(w==="*"){let G=j[D]||"";p=g.slice(0,g.length-G.length).replace(/(.)\/+$/,"$1")}const H=j[D];return R&&!H?m[w]=void 0:m[w]=(H||"").replace(/%2F/g,"/"),m},{}),pathname:g,pathnameBase:p,pattern:l}}function Zy(l,u=!1,c=!0){kt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,j,y)=>(s.push({paramName:j,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(s.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),s]}function Ky(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return kt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function hn(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,s=l.charAt(c);return s&&s!=="/"?null:l.slice(c)||"/"}function Jy(l,u="/"){let{pathname:c,search:s="",hash:d=""}=typeof l=="string"?hl(l):l;return{pathname:c?c.startsWith("/")?c:$y(c,u):u,search:Py(s),hash:Iy(d)}}function $y(l,u){let c=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Nc(l,u,c,s){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wy(l){return l.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function zo(l){let u=Wy(l);return u.map((c,s)=>s===u.length-1?c.pathname:c.pathnameBase)}function wo(l,u,c,s=!1){let d;typeof l=="string"?d=hl(l):(d={...l},Me(!d.pathname||!d.pathname.includes("?"),Nc("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Nc("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Nc("#","search","hash",d)));let g=l===""||d.pathname==="",p=g?"/":d.pathname,j;if(p==null)j=c;else{let R=u.length-1;if(!s&&p.startsWith("..")){let D=p.split("/");for(;D[0]==="..";)D.shift(),R-=1;d.pathname=D.join("/")}j=R>=0?u[R]:"/"}let y=Jy(d,j),m=p&&p!=="/"&&p.endsWith("/"),w=(g||p===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(m||w)&&(y.pathname+="/"),y}var dn=l=>l.join("/").replace(/\/\/+/g,"/"),Fy=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Py=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Iy=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function ev(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Lm=["POST","PUT","PATCH","DELETE"];new Set(Lm);var tv=["GET",...Lm];new Set(tv);var gl=M.createContext(null);gl.displayName="DataRouter";var ou=M.createContext(null);ou.displayName="DataRouterState";M.createContext(!1);var Ym=M.createContext({isTransitioning:!1});Ym.displayName="ViewTransition";var nv=M.createContext(new Map);nv.displayName="Fetchers";var av=M.createContext(null);av.displayName="Await";var Ut=M.createContext(null);Ut.displayName="Navigation";var ji=M.createContext(null);ji.displayName="Location";var Qt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var To=M.createContext(null);To.displayName="RouteError";function lv(l,{relative:u}={}){Me(ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=M.useContext(Ut),{hash:d,pathname:g,search:p}=_i(l,{relative:u}),j=g;return c!=="/"&&(j=g==="/"?c:dn([c,g])),s.createHref({pathname:j,search:p,hash:d})}function ml(){return M.useContext(ji)!=null}function gn(){return Me(ml(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(ji).location}var qm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(l){M.useContext(Ut).static||M.useLayoutEffect(l)}function Xm(){let{isDataRoute:l}=M.useContext(Qt);return l?bv():iv()}function iv(){Me(ml(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(gl),{basename:u,navigator:c}=M.useContext(Ut),{matches:s}=M.useContext(Qt),{pathname:d}=gn(),g=JSON.stringify(zo(s)),p=M.useRef(!1);return Vm(()=>{p.current=!0}),M.useCallback((y,m={})=>{if(kt(p.current,qm),!p.current)return;if(typeof y=="number"){c.go(y);return}let w=wo(y,JSON.parse(g),d,m.relative==="path");l==null&&u!=="/"&&(w.pathname=w.pathname==="/"?u:dn([u,w.pathname])),(m.replace?c.replace:c.push)(w,m.state,m)},[u,c,g,d,l])}M.createContext(null);function _i(l,{relative:u}={}){let{matches:c}=M.useContext(Qt),{pathname:s}=gn(),d=JSON.stringify(zo(c));return M.useMemo(()=>wo(l,JSON.parse(d),s,u==="path"),[l,d,s,u])}function rv(l,u){return Qm(l,u)}function Qm(l,u,c,s){Me(ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=M.useContext(Ut),{matches:g}=M.useContext(Qt),p=g[g.length-1],j=p?p.params:{},y=p?p.pathname:"/",m=p?p.pathnameBase:"/",w=p&&p.route;{let U=w&&w.path||"";Zm(y,!w||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let R=gn(),D;if(u){let U=typeof u=="string"?hl(u):u;Me(m==="/"||U.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${U.pathname}" was given in the \`location\` prop.`),D=U}else D=R;let H=D.pathname||"/",G=H;if(m!=="/"){let U=m.replace(/^\//,"").split("/");G="/"+H.replace(/^\//,"").split("/").slice(U.length).join("/")}let L=Um(l,{pathname:G});kt(w||L!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),kt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=fv(L&&L.map(U=>Object.assign({},U,{params:Object.assign({},j,U.params),pathname:dn([m,d.encodeLocation?d.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?m:dn([m,d.encodeLocation?d.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),g,c,s);return u&&X?M.createElement(ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},X):X}function uv(){let l=pv(),u=ev(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},g={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:g},"ErrorBoundary")," or"," ",M.createElement("code",{style:g},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},u),c?M.createElement("pre",{style:d},c):null,p)}var sv=M.createElement(uv,null),cv=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){console.error("React Router caught the following error during render",l,u)}render(){return this.state.error!==void 0?M.createElement(Qt.Provider,{value:this.props.routeContext},M.createElement(To.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ov({routeContext:l,match:u,children:c}){let s=M.useContext(gl);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),M.createElement(Qt.Provider,{value:l},c)}function fv(l,u=[],c=null,s=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let d=l,g=c?.errors;if(g!=null){let y=d.findIndex(m=>m.route.id&&g?.[m.route.id]!==void 0);Me(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let p=!1,j=-1;if(c)for(let y=0;y<d.length;y++){let m=d[y];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(j=y),m.route.id){let{loaderData:w,errors:R}=c,D=m.route.loader&&!w.hasOwnProperty(m.route.id)&&(!R||R[m.route.id]===void 0);if(m.route.lazy||D){p=!0,j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}return d.reduceRight((y,m,w)=>{let R,D=!1,H=null,G=null;c&&(R=g&&m.route.id?g[m.route.id]:void 0,H=m.route.errorElement||sv,p&&(j<0&&w===0?(Zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,G=null):j===w&&(D=!0,G=m.route.hydrateFallbackElement||null)));let L=u.concat(d.slice(0,w+1)),X=()=>{let U;return R?U=H:D?U=G:m.route.Component?U=M.createElement(m.route.Component,null):m.route.element?U=m.route.element:U=y,M.createElement(ov,{match:m,routeContext:{outlet:y,matches:L,isDataRoute:c!=null},children:U})};return c&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?M.createElement(cv,{location:c.location,revalidation:c.revalidation,component:H,error:R,children:X(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):X()},null)}function Ao(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dv(l){let u=M.useContext(gl);return Me(u,Ao(l)),u}function hv(l){let u=M.useContext(ou);return Me(u,Ao(l)),u}function gv(l){let u=M.useContext(Qt);return Me(u,Ao(l)),u}function Ro(l){let u=gv(l),c=u.matches[u.matches.length-1];return Me(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function mv(){return Ro("useRouteId")}function pv(){let l=M.useContext(To),u=hv("useRouteError"),c=Ro("useRouteError");return l!==void 0?l:u.errors?.[c]}function bv(){let{router:l}=dv("useNavigate"),u=Ro("useNavigate"),c=M.useRef(!1);return Vm(()=>{c.current=!0}),M.useCallback(async(d,g={})=>{kt(c.current,qm),c.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:u,...g}))},[l,u])}var nm={};function Zm(l,u,c){!u&&!nm[l]&&(nm[l]=!0,kt(!1,c))}M.memo(yv);function yv({routes:l,future:u,state:c}){return Qm(l,void 0,c,u)}function vv({to:l,replace:u,state:c,relative:s}){Me(ml(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=M.useContext(Ut);kt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=M.useContext(Qt),{pathname:p}=gn(),j=Xm(),y=wo(l,zo(g),p,s==="path"),m=JSON.stringify(y);return M.useEffect(()=>{j(JSON.parse(m),{replace:u,state:c,relative:s})},[j,m,s,u,c]),null}function yi(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xv({basename:l="/",children:u=null,location:c,navigationType:s="POP",navigator:d,static:g=!1}){Me(!ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),j=M.useMemo(()=>({basename:p,navigator:d,static:g,future:{}}),[p,d,g]);typeof c=="string"&&(c=hl(c));let{pathname:y="/",search:m="",hash:w="",state:R=null,key:D="default"}=c,H=M.useMemo(()=>{let G=hn(y,p);return G==null?null:{location:{pathname:G,search:m,hash:w,state:R,key:D},navigationType:s}},[p,y,m,w,R,D,s]);return kt(H!=null,`<Router basename="${p}"> is not able to match the URL "${y}${m}${w}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:M.createElement(Ut.Provider,{value:j},M.createElement(ji.Provider,{children:u,value:H}))}function Sv({children:l,location:u}){return rv(yo(l),u)}function yo(l,u=[]){let c=[];return M.Children.forEach(l,(s,d)=>{if(!M.isValidElement(s))return;let g=[...u,d];if(s.type===M.Fragment){c.push.apply(c,yo(s.props.children,g));return}Me(s.type===yi,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||g.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=yo(s.props.children,g)),c.push(p)}),c}var Wr="get",Fr="application/x-www-form-urlencoded";function fu(l){return l!=null&&typeof l.tagName=="string"}function jv(l){return fu(l)&&l.tagName.toLowerCase()==="button"}function _v(l){return fu(l)&&l.tagName.toLowerCase()==="form"}function Ev(l){return fu(l)&&l.tagName.toLowerCase()==="input"}function zv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function wv(l,u){return l.button===0&&(!u||u==="_self")&&!zv(l)}var Lr=null;function Tv(){if(Lr===null)try{new FormData(document.createElement("form"),0),Lr=!1}catch{Lr=!0}return Lr}var Av=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kc(l){return l!=null&&!Av.has(l)?(kt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fr}"`),null):l}function Rv(l,u){let c,s,d,g,p;if(_v(l)){let j=l.getAttribute("action");s=j?hn(j,u):null,c=l.getAttribute("method")||Wr,d=kc(l.getAttribute("enctype"))||Fr,g=new FormData(l)}else if(jv(l)||Ev(l)&&(l.type==="submit"||l.type==="image")){let j=l.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||j.getAttribute("action");if(s=y?hn(y,u):null,c=l.getAttribute("formmethod")||j.getAttribute("method")||Wr,d=kc(l.getAttribute("formenctype"))||kc(j.getAttribute("enctype"))||Fr,g=new FormData(j,l),!Tv()){let{name:m,type:w,value:R}=l;if(w==="image"){let D=m?`${m}.`:"";g.append(`${D}x`,"0"),g.append(`${D}y`,"0")}else m&&g.append(m,R)}}else{if(fu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Wr,s=null,d=Fr,p=l}return g&&d==="text/plain"&&(p=g,g=void 0),{action:s,method:c.toLowerCase(),encType:d,formData:g,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mo(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function Mv(l,u,c){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${c}`:u&&hn(s.pathname,u)==="/"?s.pathname=`${u.replace(/\/$/,"")}/_root.${c}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${c}`,s}async function Dv(l,u){if(l.id in u)return u[l.id];try{let c=await import(l.module);return u[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ov(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Cv(l,u,c){let s=await Promise.all(l.map(async d=>{let g=u.routes[d.route.id];if(g){let p=await Dv(g,c);return p.links?p.links():[]}return[]}));return Uv(s.flat(1).filter(Ov).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function am(l,u,c,s,d,g){let p=(y,m)=>c[m]?y.route.id!==c[m].route.id:!0,j=(y,m)=>c[m].pathname!==y.pathname||c[m].route.path?.endsWith("*")&&c[m].params["*"]!==y.params["*"];return g==="assets"?u.filter((y,m)=>p(y,m)||j(y,m)):g==="data"?u.filter((y,m)=>{let w=s.routes[y.route.id];if(!w||!w.hasLoader)return!1;if(p(y,m)||j(y,m))return!0;if(y.route.shouldRevalidate){let R=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Bv(l,u,{includeHydrateFallback:c}={}){return Nv(l.map(s=>{let d=u.routes[s.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Nv(l){return[...new Set(l)]}function kv(l){let u={},c=Object.keys(l).sort();for(let s of c)u[s]=l[s];return u}function Uv(l,u){let c=new Set;return new Set(u),l.reduce((s,d)=>{let g=JSON.stringify(kv(d));return c.has(g)||(c.add(g),s.push({key:g,link:d})),s},[])}function Km(){let l=M.useContext(gl);return Mo(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Hv(){let l=M.useContext(ou);return Mo(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Do=M.createContext(void 0);Do.displayName="FrameworkContext";function Jm(){let l=M.useContext(Do);return Mo(l,"You must render this element inside a <HydratedRouter> element"),l}function Gv(l,u){let c=M.useContext(Do),[s,d]=M.useState(!1),[g,p]=M.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:m,onMouseLeave:w,onTouchStart:R}=u,D=M.useRef(null);M.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let L=U=>{U.forEach($=>{p($.isIntersecting)})},X=new IntersectionObserver(L,{threshold:.5});return D.current&&X.observe(D.current),()=>{X.disconnect()}}},[l]),M.useEffect(()=>{if(s){let L=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(L)}}},[s]);let H=()=>{d(!0)},G=()=>{d(!1),p(!1)};return c?l!=="intent"?[g,D,{}]:[g,D,{onFocus:mi(j,H),onBlur:mi(y,G),onMouseEnter:mi(m,H),onMouseLeave:mi(w,G),onTouchStart:mi(R,H)}]:[!1,D,{}]}function mi(l,u){return c=>{l&&l(c),c.defaultPrevented||u(c)}}function Lv({page:l,...u}){let{router:c}=Km(),s=M.useMemo(()=>Um(c.routes,l,c.basename),[c.routes,l,c.basename]);return s?M.createElement(qv,{page:l,matches:s,...u}):null}function Yv(l){let{manifest:u,routeModules:c}=Jm(),[s,d]=M.useState([]);return M.useEffect(()=>{let g=!1;return Cv(l,u,c).then(p=>{g||d(p)}),()=>{g=!0}},[l,u,c]),s}function qv({page:l,matches:u,...c}){let s=gn(),{manifest:d,routeModules:g}=Jm(),{basename:p}=Km(),{loaderData:j,matches:y}=Hv(),m=M.useMemo(()=>am(l,u,y,d,s,"data"),[l,u,y,d,s]),w=M.useMemo(()=>am(l,u,y,d,s,"assets"),[l,u,y,d,s]),R=M.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let G=new Set,L=!1;if(u.forEach(U=>{let $=d.routes[U.route.id];!$||!$.hasLoader||(!m.some(Q=>Q.route.id===U.route.id)&&U.route.id in j&&g[U.route.id]?.shouldRevalidate||$.hasClientLoader?L=!0:G.add(U.route.id))}),G.size===0)return[];let X=Mv(l,p,"data");return L&&G.size>0&&X.searchParams.set("_routes",u.filter(U=>G.has(U.route.id)).map(U=>U.route.id).join(",")),[X.pathname+X.search]},[p,j,s,d,m,u,l,g]),D=M.useMemo(()=>Bv(w,d),[w,d]),H=Yv(w);return M.createElement(M.Fragment,null,R.map(G=>M.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...c})),D.map(G=>M.createElement("link",{key:G,rel:"modulepreload",href:G,...c})),H.map(({key:G,link:L})=>M.createElement("link",{key:G,...L})))}function Vv(...l){return u=>{l.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var $m=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$m&&(window.__reactRouterVersion="7.7.1")}catch{}function Xv({basename:l,children:u,window:c}){let s=M.useRef();s.current==null&&(s.current=Dy({window:c,v5Compat:!0}));let d=s.current,[g,p]=M.useState({action:d.action,location:d.location}),j=M.useCallback(y=>{M.startTransition(()=>p(y))},[p]);return M.useLayoutEffect(()=>d.listen(j),[d,j]),M.createElement(xv,{basename:l,children:u,location:g.location,navigationType:g.action,navigator:d})}var Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oo=M.forwardRef(function({onClick:u,discover:c="render",prefetch:s="none",relative:d,reloadDocument:g,replace:p,state:j,target:y,to:m,preventScrollReset:w,viewTransition:R,...D},H){let{basename:G}=M.useContext(Ut),L=typeof m=="string"&&Wm.test(m),X,U=!1;if(typeof m=="string"&&L&&(X=m,$m))try{let _e=new URL(window.location.href),at=m.startsWith("//")?new URL(_e.protocol+m):new URL(m),it=hn(at.pathname,G);at.origin===_e.origin&&it!=null?m=it+at.search+at.hash:U=!0}catch{kt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=lv(m,{relative:d}),[Q,ae,Z]=Gv(s,D),le=Jv(m,{replace:p,state:j,target:y,preventScrollReset:w,relative:d,viewTransition:R});function W(_e){u&&u(_e),_e.defaultPrevented||le(_e)}let we=M.createElement("a",{...D,...Z,href:X||$,onClick:U||g?u:W,ref:Vv(H,ae),target:y,"data-discover":!L&&c==="render"?"true":void 0});return Q&&!L?M.createElement(M.Fragment,null,we,M.createElement(Lv,{page:$})):we});Oo.displayName="Link";var Qv=M.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:s="",end:d=!1,style:g,to:p,viewTransition:j,children:y,...m},w){let R=_i(p,{relative:m.relative}),D=gn(),H=M.useContext(ou),{navigator:G,basename:L}=M.useContext(Ut),X=H!=null&&Iv(R)&&j===!0,U=G.encodeLocation?G.encodeLocation(R).pathname:R.pathname,$=D.pathname,Q=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;c||($=$.toLowerCase(),Q=Q?Q.toLowerCase():null,U=U.toLowerCase()),Q&&L&&(Q=hn(Q,L)||Q);const ae=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Z=$===U||!d&&$.startsWith(U)&&$.charAt(ae)==="/",le=Q!=null&&(Q===U||!d&&Q.startsWith(U)&&Q.charAt(U.length)==="/"),W={isActive:Z,isPending:le,isTransitioning:X},we=Z?u:void 0,_e;typeof s=="function"?_e=s(W):_e=[s,Z?"active":null,le?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let at=typeof g=="function"?g(W):g;return M.createElement(Oo,{...m,"aria-current":we,className:_e,ref:w,style:at,to:p,viewTransition:j},typeof y=="function"?y(W):y)});Qv.displayName="NavLink";var Zv=M.forwardRef(({discover:l="render",fetcherKey:u,navigate:c,reloadDocument:s,replace:d,state:g,method:p=Wr,action:j,onSubmit:y,relative:m,preventScrollReset:w,viewTransition:R,...D},H)=>{let G=Fv(),L=Pv(j,{relative:m}),X=p.toLowerCase()==="get"?"get":"post",U=typeof j=="string"&&Wm.test(j),$=Q=>{if(y&&y(Q),Q.defaultPrevented)return;Q.preventDefault();let ae=Q.nativeEvent.submitter,Z=ae?.getAttribute("formmethod")||p;G(ae||Q.currentTarget,{fetcherKey:u,method:Z,navigate:c,replace:d,state:g,relative:m,preventScrollReset:w,viewTransition:R})};return M.createElement("form",{ref:H,method:X,action:L,onSubmit:s?y:$,...D,"data-discover":!U&&l==="render"?"true":void 0})});Zv.displayName="Form";function Kv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fm(l){let u=M.useContext(gl);return Me(u,Kv(l)),u}function Jv(l,{target:u,replace:c,state:s,preventScrollReset:d,relative:g,viewTransition:p}={}){let j=Xm(),y=gn(),m=_i(l,{relative:g});return M.useCallback(w=>{if(wv(w,u)){w.preventDefault();let R=c!==void 0?c:Si(y)===Si(m);j(l,{replace:R,state:s,preventScrollReset:d,relative:g,viewTransition:p})}},[y,j,m,c,s,u,l,d,g,p])}var $v=0,Wv=()=>`__${String(++$v)}__`;function Fv(){let{router:l}=Fm("useSubmit"),{basename:u}=M.useContext(Ut),c=mv();return M.useCallback(async(s,d={})=>{let{action:g,method:p,encType:j,formData:y,body:m}=Rv(s,u);if(d.navigate===!1){let w=d.fetcherKey||Wv();await l.fetch(w,c,d.action||g,{preventScrollReset:d.preventScrollReset,formData:y,body:m,formMethod:d.method||p,formEncType:d.encType||j,flushSync:d.flushSync})}else await l.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:y,body:m,formMethod:d.method||p,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,u,c])}function Pv(l,{relative:u}={}){let{basename:c}=M.useContext(Ut),s=M.useContext(Qt);Me(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),g={..._i(l||".",{relative:u})},p=gn();if(l==null){g.search=p.search;let j=new URLSearchParams(g.search),y=j.getAll("index");if(y.some(w=>w==="")){j.delete("index"),y.filter(R=>R).forEach(R=>j.append("index",R));let w=j.toString();g.search=w?`?${w}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(g.pathname=g.pathname==="/"?c:dn([c,g.pathname])),Si(g)}function Iv(l,{relative:u}={}){let c=M.useContext(Ym);Me(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Fm("useViewTransitionState"),d=_i(l,{relative:u});if(!c.isTransitioning)return!1;let g=hn(c.currentLocation.pathname,s)||c.currentLocation.pathname,p=hn(c.nextLocation.pathname,s)||c.nextLocation.pathname;return au(d.pathname,p)!=null||au(d.pathname,g)!=null}const ex="/assets/logo-Hzr1jdtX.png",tx=v.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,nx=v.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,ax=v.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,lx=v.img`
  height: 40px;
  width: auto;
`,ix=v.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;

  @media (max-width: 640px) {
    display: none;
  }
`,rx=v.div`
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
`,Yr=v(Oo)`
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
`,ux=v.button`
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
`;function sx(){const l=gn(),[u,c]=M.useState(!1);return o.jsx(tx,{children:o.jsxs(nx,{children:[o.jsx(Yr,{to:"/",onClick:()=>c(!1),children:o.jsxs(ax,{children:[o.jsx(lx,{src:ex,alt:"SCKW Logo"}),o.jsx(ix,{children:"SC Konstanz-Wollmatingen e. V."})]})}),o.jsxs(ux,{"aria-label":"Menü öffnen/schließen","aria-expanded":u,"aria-controls":"mobile-nav",onClick:()=>c(s=>!s),children:["Menü",o.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),o.jsxs(rx,{id:"mobile-nav",$open:u,children:[o.jsx(Yr,{to:"/sponsoring",$active:l.pathname==="/sponsoring",onClick:()=>c(!1),children:"🤝 Sponsoring"}),o.jsx(Yr,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>c(!1),children:"💼 Jobbörse"}),o.jsx(Yr,{to:"/renovierung",$active:l.pathname==="/renovierung",onClick:()=>c(!1),children:"🏗️ Renovierung"})]})]})})}const cx=v.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,ox=v.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function Co(){return o.jsxs(cx,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",o.jsx(ox,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})}const Uc=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"Social Media Post/Monat",highlight:!1,icon:"📱"},{text:"Stadionansage bei jedem Heimspiel",highlight:!1,icon:"📢"},{text:"1 Bande + 4x Plakat",highlight:!0,icon:"🖼️"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","Social Media Post/Monat","Stadionansage bei jedem Heimspiel","1 Bande (5x2 m) am Gelände","4x Plakat (A1) am Gelände"]},{title:"🥈 Co-Sponsor",price:"9.500 €/Jahr",status:"🟨 1 von 2 verfügbar",maxSponsors:2,sponsors:[],keyBenefits:[{text:"Trikotärmel",highlight:!0,icon:"👕"},{text:"1 Bande",highlight:!1,icon:"🖼️"},{text:"2x Social Media pro Spiel",highlight:!0,icon:"📱"},{text:"Social Media 1x pro Spiel",highlight:!1,icon:"📱"}],benefits:["Trikotärmel 1. Mannschaft","1 Bande (5x2 m) am Gelände","2x Social Media pro Spiel (Instagram)","Social Media 1x pro Spiel (Facebook)"]},{title:"🥈 SILBER",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Bande",highlight:!0,icon:"🖼️"},{text:"Instagram-Erwähnung",highlight:!1,icon:"📱"},{text:"Werbeplane am Gelände",highlight:!1,icon:"🏟️"},{text:"Vereinsplakate + Eventsichtbarkeit",highlight:!0,icon:"🎉"}],benefits:["1 Bande (5x2 m) am Gelände","Instagram-Erwähnung","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟩 Verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"3x1m Werbebande",highlight:!0,icon:"🏟️"},{text:"Sichtbarkeit bei jedem Heimspiel",highlight:!1,icon:"⚽"},{text:"Link auf Homepage optional",highlight:!1,icon:"🌐"}],benefits:["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Link auf Homepage optional"]},{title:"⚽ Ballspende",price:"150 €/pro Spiel",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[],keyBenefits:[{text:"Social Media Post am Spieltag",highlight:!0,icon:"📱"},{text:"Namensnennung vor dem Spiel",highlight:!1,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Namensnennung vor dem Spiel","Namensnennung in der Halbzeitpause"]},{title:"⚽ Ballspende 5er Pack",price:"500 €/5 Spiele",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[],keyBenefits:[{text:"Ballspende für 5 Spiele",highlight:!0,icon:"⚽"},{text:"Namensnennung vor jedem Spiel",highlight:!0,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Ballspende für 5 Spiele","Namensnennung vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","Günstigerer Preis pro Spiel gegenüber Einzelspende"]}],fx=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,dx=v.div`
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
`,hx=v.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,gx=v.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,mx=v.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,px=v.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,bx=v.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,yx=v.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,vx=v.li`
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
`,xx=v.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,Sx=v.span`
  flex: 1;
`,jx=v.a`
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
`,_x=v.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ex="sponsoring@sckw.de";function Hc({packages:l}){const u=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",c=p=>{const j=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},s=p=>{const j=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),y=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),m=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Ex}?subject=${y}&body=${m}`},d=p=>{const j=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},g=l.filter(p=>!p.title.includes("Platz-Renovierung"));return o.jsx(fx,{children:g.map((p,j)=>{const{isFullyBooked:y}=d(p),m=u(p.status),w=m==="vergeben"||y,R=y?"vergeben":m,D=p.keyBenefits||[];return o.jsxs(dx,{isVergeben:w,children:[o.jsxs(hx,{children:[o.jsx(gx,{children:c(p.title)}),o.jsx(mx,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!w&&o.jsx(px,{children:p.price}),o.jsx(bx,{status:R,children:R==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),w?o.jsx(_x,{children:"✅ Alle Plätze vergeben"}):o.jsx(yx,{children:D.map((H,G)=>o.jsxs(vx,{isHighlight:H.highlight,children:[o.jsx(xx,{children:H.icon}),o.jsx(Sx,{children:H.text})]},G))}),o.jsx(jx,{href:w?void 0:s(p.title),isVergeben:w,children:w?"Vergeben":"Jetzt anfragen"})]},j)})})}const zx=v.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,wx=v.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Tx=v.button`
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
`,Ax=v.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,Rx=v.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,Mx=v.div`
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
`,Dx=v.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Ox=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:o.jsx(o.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function Cx(){const[l,u]=M.useState([]),c=d=>{u(g=>g.includes(d)?g.filter(p=>p!==d):[...g,d])},s=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c(g))};return o.jsx(zx,{children:Ox.map(d=>{const g=l.includes(d.id);return o.jsxs(wx,{children:[o.jsxs(Tx,{isOpen:g,onClick:()=>c(d.id),onKeyDown:p=>s(p,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[o.jsxs("span",{children:[o.jsx(Dx,{children:d.icon}),d.title]}),o.jsx(Ax,{isOpen:g,children:"▼"})]}),o.jsx(Rx,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:o.jsx(Mx,{children:d.content})})]},d.id)})})}const Pm="/assets/cheerleading_0-DQQGXi0R.jpg",Im="/assets/cheerleading_1-NkLBARmH.jpg",e0="/assets/cheerleading_2-CrezcZYL.jpg",t0="/assets/cheerleading_3-GN5rPHNN.jpg",n0="/assets/1-ClVWb4ei.png",a0="/assets/10-Bwp2eIye.png",l0="/assets/11-W061sOUI.png",i0="/assets/12-TjJyzl8L.png",r0="/assets/13-ChUUCdQQ.png",u0="/assets/14-BVhdRr98.png",s0="/assets/2-CcfgIQYe.png",c0="/assets/3-DYiPkVd7.png",o0="/assets/4-1upoqVoS.png",f0="/assets/5-D0tadXAC.png",d0="/assets/6-NJ4ELm_j.png",h0="/assets/7-BXo4_Bcj.png",g0="/assets/8-BbOqEnj_.png",m0="/assets/9-CIK0gi9o.png",p0="/assets/herren_0-BVVgyt1l.jpg",b0="/assets/herren_1-B8ywOnNy.jpg",y0="/assets/herren_10-DPVQsg9B.jpg",v0="/assets/herren_11-wfWG62H3.jpg",x0="/assets/herren_12-DEJSN2zG.jpg",S0="/assets/herren_13-F52vdukE.jpg",j0="/assets/herren_14-Cq9hoKfG.jpg",_0="/assets/herren_15-aYIFGauG.jpg",E0="/assets/herren_16-NYI2EaEN.jpg",z0="/assets/herren_17-B_52ysA2.jpg",w0="/assets/herren_18-DbwjVNKJ.jpg",T0="/assets/herren_19-BduD_J85.png",A0="/assets/herren_2--jFuixBF.jpg",R0="/assets/herren_3-BPz1zlkG.jpg",M0="/assets/herren_4-BZRrQaFr.jpg",D0="/assets/herren_5-D-QrfY2P.jpg",O0="/assets/herren_6-DWQvi6Am.jpg",C0="/assets/herren_7-BXO6B8Bt.jpg",B0="/assets/herren_8-Cg4rdr7T.jpg",N0="/assets/herren_9-DoLnTdRG.jpg",k0="/assets/IMG-team-BGcF1agj.png",U0="/assets/IMG_5349-CpvIVKhM.jpg",H0="/assets/IMG_5369-DQ4CSwdg.jpg",G0="/assets/IMG_5421-BBzniIEN.jpg",L0="/assets/IMG_5442-D2PgutWB.jpg",Y0="/assets/IMG_5952-B9VW6Qie.jpg",q0="/assets/Unbenann324t-IPGo6eoQ.png",V0="/assets/image0-DDrU5aZn.jpeg",X0="/assets/image11-BNM8hTkT.jpeg",Q0="/assets/image8-BUnedp9U.jpeg",Bx="/assets/grafhardenberg-Di5cVggE.png",Nx="/assets/horta-DydWIGV7.png",kx="/assets/logans-BgpKwKYA.png",Ux="/assets/ricobet-DsVC-eZt.png",Hx="/assets/rothaus-DqkKD9yW.png",Gx="/assets/tasty-B2pSa1rE.png",Lx="/assets/cabin-window-B83r_CDB.jpg",Yx="/assets/outside-9-xz17qL.jpg",qx="/assets/shower-B75caJ-F.jpg",Vx="/assets/sitting-area-D7khB3Gw.jpg",Xx="/assets/toilet-BpMHYbhh.jpg",Qx=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Pm,"../assets/gallery/cheerleading/cheerleading_1.jpg":Im,"../assets/gallery/cheerleading/cheerleading_2.jpg":e0,"../assets/gallery/cheerleading/cheerleading_3.jpg":t0,"../assets/gallery/damen/1.png":n0,"../assets/gallery/damen/10.png":a0,"../assets/gallery/damen/11.png":l0,"../assets/gallery/damen/12.png":i0,"../assets/gallery/damen/13.png":r0,"../assets/gallery/damen/14.png":u0,"../assets/gallery/damen/2.png":s0,"../assets/gallery/damen/3.png":c0,"../assets/gallery/damen/4.png":o0,"../assets/gallery/damen/5.png":f0,"../assets/gallery/damen/6.png":d0,"../assets/gallery/damen/7.png":h0,"../assets/gallery/damen/8.png":g0,"../assets/gallery/damen/9.png":m0,"../assets/gallery/herren/herren_0.jpg":p0,"../assets/gallery/herren/herren_1.jpg":b0,"../assets/gallery/herren/herren_10.jpg":y0,"../assets/gallery/herren/herren_11.jpg":v0,"../assets/gallery/herren/herren_12.jpg":x0,"../assets/gallery/herren/herren_13.jpg":S0,"../assets/gallery/herren/herren_14.jpg":j0,"../assets/gallery/herren/herren_15.jpg":_0,"../assets/gallery/herren/herren_16.jpg":E0,"../assets/gallery/herren/herren_17.jpg":z0,"../assets/gallery/herren/herren_18.jpg":w0,"../assets/gallery/herren/herren_19.png":T0,"../assets/gallery/herren/herren_2.jpg":A0,"../assets/gallery/herren/herren_3.jpg":R0,"../assets/gallery/herren/herren_4.jpg":M0,"../assets/gallery/herren/herren_5.jpg":D0,"../assets/gallery/herren/herren_6.jpg":O0,"../assets/gallery/herren/herren_7.jpg":C0,"../assets/gallery/herren/herren_8.jpg":B0,"../assets/gallery/herren/herren_9.jpg":N0,"../assets/gallery/jfv/IMG-team.png":k0,"../assets/gallery/jfv/IMG_5349.jpg":U0,"../assets/gallery/jfv/IMG_5369.jpg":H0,"../assets/gallery/jfv/IMG_5421.jpg":G0,"../assets/gallery/jfv/IMG_5442.jpg":L0,"../assets/gallery/jfv/IMG_5952.jpg":Y0,"../assets/gallery/jfv/Unbenann324t.png":q0,"../assets/gallery/jfv/image0.jpeg":V0,"../assets/gallery/jfv/image11.jpeg":X0,"../assets/gallery/jfv/image8.jpeg":Q0}),Zx=Object.assign({"../assets/sponsors/grafhardenberg.png":Bx,"../assets/sponsors/horta.png":Nx,"../assets/sponsors/logans.png":kx,"../assets/sponsors/ricobet.png":Ux,"../assets/sponsors/rothaus.png":Hx,"../assets/sponsors/tasty.png":Gx}),Kx=Object.assign({"../assets/renovation/cabin-window.jpg":Lx,"../assets/renovation/outside.jpg":Yx,"../assets/renovation/shower.jpg":qx,"../assets/renovation/sitting-area.jpg":Vx,"../assets/renovation/toilet.jpg":Xx}),Z0=l=>l.split("/").pop()?.toLowerCase()||"",Jx=l=>{const u=l.match(/gallery\/(.*?)\//);return u?u[1]:"Sonstige"};function $x(l){const u=[...l];for(let c=u.length-1;c>0;c--){const s=Math.floor(Math.random()*(c+1));[u[c],u[s]]=[u[s],u[c]]}return u}const K0=()=>{const l={};Object.entries(Qx).forEach(([s,d])=>{const g=Jx(s);l[g]||(l[g]=[]),l[g].push(d)}),Object.keys(l).forEach(s=>{l[s]=$x(l[s])});const u={},c=["jfv","cheerleading","damen","herren"];return c.forEach(s=>{l[s]&&(u[s]=l[s])}),Object.keys(l).forEach(s=>{c.includes(s.toLowerCase())||(u[s]=l[s])}),u},Wx=()=>{const l={};return Object.entries(Zx).forEach(([u,c])=>{const s=Z0(u);l[s]=c}),l},J0=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(Kx).forEach(([u,c])=>{const s=Z0(u);s.includes("sitting")?l.kabinen.push({src:c,alt:"Sitzbereich in den Kabinen"}):s.includes("outside")||s.includes("cabin-window")?s.includes("outside")?l.fassade.push({src:c,alt:"Außenfassade des Fürstenberg"}):s.includes("cabin-window")&&l.fassade.push({src:c,alt:"Fenster in den Kabinen"}):(s.includes("toilet")||s.includes("shower")||s.includes("wash"))&&(s.includes("toilet")?l.waschkueche.push({src:c,alt:"Toilette"}):s.includes("shower")?l.waschkueche.push({src:c,alt:"Dusche"}):l.waschkueche.push({src:c,alt:"Waschküche"}))}),l},Fx=l=>{const c=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Pm,"../assets/gallery/cheerleading/cheerleading_1.jpg":Im,"../assets/gallery/cheerleading/cheerleading_2.jpg":e0,"../assets/gallery/cheerleading/cheerleading_3.jpg":t0,"../assets/gallery/damen/1.png":n0,"../assets/gallery/damen/10.png":a0,"../assets/gallery/damen/11.png":l0,"../assets/gallery/damen/12.png":i0,"../assets/gallery/damen/13.png":r0,"../assets/gallery/damen/14.png":u0,"../assets/gallery/damen/2.png":s0,"../assets/gallery/damen/3.png":c0,"../assets/gallery/damen/4.png":o0,"../assets/gallery/damen/5.png":f0,"../assets/gallery/damen/6.png":d0,"../assets/gallery/damen/7.png":h0,"../assets/gallery/damen/8.png":g0,"../assets/gallery/damen/9.png":m0,"../assets/gallery/herren/herren_0.jpg":p0,"../assets/gallery/herren/herren_1.jpg":b0,"../assets/gallery/herren/herren_10.jpg":y0,"../assets/gallery/herren/herren_11.jpg":v0,"../assets/gallery/herren/herren_12.jpg":x0,"../assets/gallery/herren/herren_13.jpg":S0,"../assets/gallery/herren/herren_14.jpg":j0,"../assets/gallery/herren/herren_15.jpg":_0,"../assets/gallery/herren/herren_16.jpg":E0,"../assets/gallery/herren/herren_17.jpg":z0,"../assets/gallery/herren/herren_18.jpg":w0,"../assets/gallery/herren/herren_19.png":T0,"../assets/gallery/herren/herren_2.jpg":A0,"../assets/gallery/herren/herren_3.jpg":R0,"../assets/gallery/herren/herren_4.jpg":M0,"../assets/gallery/herren/herren_5.jpg":D0,"../assets/gallery/herren/herren_6.jpg":O0,"../assets/gallery/herren/herren_7.jpg":C0,"../assets/gallery/herren/herren_8.jpg":B0,"../assets/gallery/herren/herren_9.jpg":N0,"../assets/gallery/jfv/IMG-team.png":k0,"../assets/gallery/jfv/IMG_5349.jpg":U0,"../assets/gallery/jfv/IMG_5369.jpg":H0,"../assets/gallery/jfv/IMG_5421.jpg":G0,"../assets/gallery/jfv/IMG_5442.jpg":L0,"../assets/gallery/jfv/IMG_5952.jpg":Y0,"../assets/gallery/jfv/Unbenann324t.png":q0,"../assets/gallery/jfv/image0.jpeg":V0,"../assets/gallery/jfv/image11.jpeg":X0,"../assets/gallery/jfv/image8.jpeg":Q0})).find(([s])=>s.includes(l));return c?c[1]:""},Bo=(l,u)=>Fx(`${l}/${l}_${u}.jpg`);K0(),Wx(),J0();function Px(){const l=K0(),[u,c]=M.useState(null);return M.useEffect(()=>{if(!u)return;const s=d=>{d.key==="Escape"&&c(null)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[u]),o.jsxs("section",{children:[o.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([s,d])=>o.jsxs("div",{style:{marginBottom:"2.5rem"},children:[o.jsx(Ix,{children:s.toUpperCase()}),o.jsx(e2,{children:d.map((g,p)=>o.jsx(t2,{src:g,alt:`Bild ${p+1} aus ${s}`,onClick:()=>c({folder:s,idx:p}),style:{cursor:"pointer"}},p))}),u&&u.folder===s&&o.jsx(n2,{onClick:()=>c(null),children:o.jsxs(a2,{onClick:g=>g.stopPropagation(),children:[o.jsx(l2,{src:d[u.idx],alt:`Großansicht aus ${s}`}),o.jsx(i2,{onClick:()=>c(null),title:"Schließen",children:"×"})]})})]},s))]})}const Ix=v.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,e2=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,t2=v.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,n2=v.div`
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
`,a2=v.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,l2=v.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,i2=v.button`
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
`,r2=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,u2=v.div`
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
`,s2=v.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,c2=v.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,o2=v.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,f2=v.div`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #333;
  margin-bottom: 2.5rem;
  text-align: center;
  line-height: 1.7;
  padding: 0 1rem;

  /* Zentrierte Bullet Points */
  ul,
  ol {
    display: inline-block;
    text-align: left;
  }
`,d2=v.a`
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
`;function Gc({icon:l,title:u,description:c,packages:s,buttonHref:d,buttonText:g}){return o.jsxs(u2,{children:[o.jsx(s2,{children:l}),o.jsx(c2,{children:u}),o.jsx(o2,{children:c}),o.jsx(f2,{children:s.map((p,j)=>o.jsxs("div",{children:[p,j<s.length-1&&o.jsx("br",{})]},j))}),o.jsx(d2,{href:d,children:g})]})}const h2=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;
`,g2=v.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  text-align: center;
`,m2=v.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,p2=v.p`
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
`;function b2({headline:l,description:u,contactInfos:c}){return o.jsxs(y2,{id:"kontakt",children:[o.jsx(v2,{children:l}),o.jsx(x2,{children:u}),o.jsx(h2,{children:c.map((s,d)=>o.jsxs(g2,{children:[o.jsxs(m2,{children:[s.icon," ",s.title]}),o.jsx(p2,{$isEmail:s.isEmail,children:s.isEmail?o.jsx("a",{href:`mailto:${s.content}`,children:s.content}):s.content})]},d))})]})}const y2=v.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,v2=v.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,x2=v.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,S2=v.section`
  background: url("${Bo("herren",4)}") center/cover;
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
`,j2=v.h1`
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
`,_2=v.h2`
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
`,lm=v.a`
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
`,E2=v.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,z2=v.main`
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
`,pi=v.h2`
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
`,w2=v.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,T2=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,A2=v.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,R2=v.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,M2=v.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,D2=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,im=v.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,rm=v.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,um=v.ul`
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
`,O2=v.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,C2=v.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,B2=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,N2=v.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,k2=v.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,U2=v.ul`
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
`,Lc=v.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,Yc=v.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,qc=v.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Vc=v.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Xc=v.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,Qc=v.div`
  font-size: 0.98rem;
  color: #666;
`,H2=v.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,G2=v.section`
  background: #f7f7fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,L2=v.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: block;

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`,Y2=v.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,q2=v.h3`
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
`,V2=v.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,X2=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,sm=v.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,cm=v.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,om=v.table`
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
`,Q2=v.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,Z2=v.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,K2=v.ul`
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
`,J2=v.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,$2=v.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,W2=v.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,F2=v.a`
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
`;function P2(){return o.jsxs(o.Fragment,{children:[o.jsx(S2,{children:o.jsxs(w2,{children:[o.jsx(j2,{children:"SC Konstanz-Wollmatingen"}),o.jsx(_2,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),o.jsxs(E2,{children:[o.jsx(lm,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),o.jsx(lm,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),o.jsxs(z2,{children:[o.jsx(pi,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),o.jsx(T2,{children:o.jsx(A2,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten – bei uns ist für jeden das Richtige dabei."})}),o.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[o.jsx(H2,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),o.jsxs(r2,{role:"region","aria-label":"Sponsoring-Kategorien",children:[o.jsx(Gc,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),o.jsx(Gc,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),o.jsx(Gc,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),o.jsxs("section",{"aria-labelledby":"premium-pakete",children:[o.jsx(pi,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),o.jsx(Hc,{packages:Uc.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[o.jsx(pi,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),o.jsx(Hc,{packages:Uc.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"starter-pakete",children:[o.jsx(pi,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),o.jsx(G2,{children:o.jsx(L2,{src:"/ballspende.png",alt:"Ballspende - Vielen Dank - DerbyStar Bundesliga Fußball mit SC Konstanz-Wollmatingen Logo"})}),o.jsx(Hc,{packages:Uc.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))})]}),o.jsx(Cx,{}),o.jsxs(R2,{children:[o.jsx(M2,{children:"Warum SC Konstanz-Wollmatingen?"}),o.jsxs(D2,{children:[o.jsxs(im,{children:[o.jsx(rm,{children:"📊 Erreichte Reichweite"}),o.jsxs(um,{children:[o.jsx("li",{children:"15+ Heimspiele pro Saison"}),o.jsx("li",{children:"200+ Zuschauer pro Spiel"}),o.jsx("li",{children:"2.500+ Instagram Follower"}),o.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),o.jsxs(im,{children:[o.jsx(rm,{children:"🏆 Sportlicher Erfolg"}),o.jsxs(um,{children:[o.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),o.jsx("li",{children:"2. Mannschaften pro Abteilung"}),o.jsx("li",{children:"Cheerleading-Team aktiv"}),o.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),o.jsx(pi,{children:"Werbemöglichkeiten"}),o.jsxs(O2,{children:[o.jsx(C2,{children:'Werbung im Stadionmagazin „Heimspiel"'}),o.jsxs(B2,{children:[o.jsxs(N2,{children:[o.jsxs(qc,{children:[o.jsx(Vc,{children:"1 Seite (Farbe)"}),o.jsx(Xc,{children:"1.000 €"}),o.jsx(Qc,{children:"DIN A4 (297 × 210 mm)"})]}),o.jsxs(qc,{children:[o.jsx(Vc,{children:"1/2 Seite (Farbe)"}),o.jsx(Xc,{children:"500 €"}),o.jsx(Qc,{children:"DIN A5 (148 × 210 mm)"})]}),o.jsxs(qc,{children:[o.jsx(Vc,{children:"1/4 Seite (Farbe)"}),o.jsx(Xc,{children:"250 €"}),o.jsx(Qc,{children:"DIN A6 (105 × 148 mm)"})]})]}),o.jsx(k2,{children:o.jsxs(U2,{children:[o.jsxs(Lc,{children:[o.jsx(Yc,{}),"15 Ausgaben pro Saison"]}),o.jsxs(Lc,{children:[o.jsx(Yc,{}),"ca. 100 Exemplare pro Heimspiel"]}),o.jsxs(Lc,{children:[o.jsx(Yc,{}),"Digitale Version (Social Media & Website)"]})]})})]})]}),o.jsxs(Y2,{children:[o.jsx(q2,{children:"Werbeflächen auf dem Vereinsbus"}),o.jsx(V2,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),o.jsxs(X2,{children:[o.jsxs(sm,{children:[o.jsx(cm,{children:"Premium-Flächen"}),o.jsxs(om,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche (100×80 cm)"}),o.jsx("td",{children:"Sehr hoch"}),o.jsx("td",{children:"1.200 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitentüren (links/rechts)"}),o.jsx("td",{children:"Hoch"}),o.jsx("td",{children:"je 900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Hintere Seitenflächen"}),o.jsx("td",{children:"Mittel–hoch"}),o.jsx("td",{children:"je 600 €"})]})]})]})]}),o.jsxs(sm,{children:[o.jsx(cm,{children:"Standard-Flächen"}),o.jsxs(om,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),o.jsx("td",{children:"Mittel"}),o.jsx("td",{children:"400 € je Seite"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Frontstoßstange"}),o.jsx("td",{children:"Gering–mittel"}),o.jsx("td",{children:"250 €"})]})]})]})]})]}),o.jsxs(Q2,{children:[o.jsx(Z2,{children:"Zusatzoptionen:"}),o.jsxs(K2,{children:[o.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),o.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),o.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50–100 €)"})]})]}),o.jsxs(J2,{children:[o.jsx($2,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),o.jsx(W2,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),o.jsx(F2,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),o.jsx(b2,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),o.jsx(Px,{})]}),o.jsx(Co,{})]})}const I2=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],eS=v.section`
  background: url("${Bo("herren",1)}") center/cover;
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
`,tS=v.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,nS=v.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,aS=v.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,lS=v.main`
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
`,iS=v.section`
  margin-bottom: 4rem;
`,rS=v.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,uS=v.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,sS=v.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,cS=v.div`
  text-align: center;
  margin-bottom: 3rem;
`,oS=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,fS=v.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,dS=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,hS=v.div`
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
`,gS=v.div`
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
`,mS=v.div`
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
`,pS=v.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,bS=v.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,yS=v.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,vS=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,xS=v.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,SS=v.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,jS=v.button`
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
`,_S=v.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,ES=v.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,zS=v.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,wS=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Fa=v.div`
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
`,fm=v.div`
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
`,Pa=v.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ia=v.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,el=v.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,tl=v.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Re=v.li`
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
`,nl=v.button`
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
`,TS=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,AS=v.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,RS=v.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,MS=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Zc=v.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Kc=v.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Jc=v.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,$c=v.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,DS=v.a`
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
`,OS=v.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,CS=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,BS=v.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,al=v.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ll=v.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,il=v.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function NS(){return o.jsxs(o.Fragment,{children:[o.jsx(eS,{children:o.jsxs(tS,{children:[o.jsx(nS,{children:"SCKW Jobbörse"}),o.jsx(aS,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),o.jsxs(lS,{children:[o.jsxs(iS,{children:[o.jsx(rS,{children:"Willkommen bei der SCKW Jobbörse"}),o.jsx(uS,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),o.jsxs(sS,{children:[o.jsxs(cS,{children:[o.jsx(oS,{children:"So könnte es aussehen"}),o.jsx(fS,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),o.jsx(dS,{children:I2.map(l=>o.jsxs(hS,{children:[l.isExample&&o.jsx(gS,{children:"MUSTER"}),o.jsx(mS,{children:o.jsx(pS,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:u=>{u.currentTarget.style.display="none",u.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",u.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),o.jsx(bS,{children:l.title}),o.jsx(yS,{children:l.company}),o.jsx(vS,{children:l.tags.map((u,c)=>o.jsx(xS,{children:u},c))}),o.jsx(SS,{children:l.description}),o.jsx(jS,{children:"Mehr erfahren"})]},l.id))})]}),o.jsxs(_S,{children:[o.jsx(ES,{children:"Preise für Stellenausschreibungen"}),o.jsx(zS,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),o.jsxs(wS,{children:[o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Basis"}),o.jsx(Ia,{children:"149 €"}),o.jsx(el,{children:"netto / Anzeige"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),o.jsx(Re,{children:"Firmenlogo und Link"}),o.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),o.jsx(Re,{children:"Bewerbermanagement"})]}),o.jsx(nl,{className:"secondary",children:"Basis wählen"})]}),o.jsxs(Fa,{className:"popular",children:[o.jsx(fm,{children:"BELIEBT"}),o.jsx(Pa,{children:"Standard"}),o.jsx(Ia,{children:"229 €"}),o.jsx(el,{children:"netto / Anzeige"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Alle Basis-Features"}),o.jsx(Re,{children:"1 Social Media Post"}),o.jsx(Re,{children:"Instagram + Facebook Reichweite"}),o.jsx(Re,{children:"Newsletter-Erwähnung"})]}),o.jsx(nl,{children:"Standard wählen"})]}),o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Boosted"}),o.jsx(Ia,{children:"349 €"}),o.jsx(el,{children:"netto / Anzeige"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Alle Standard-Features"}),o.jsx(Re,{children:"Instagram Story"}),o.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),o.jsx(Re,{children:"Prioritäre Platzierung"})]}),o.jsx(nl,{className:"secondary",children:"Boosted wählen"})]})]}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),o.jsxs(TS,{children:[o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Job Flat SMALL"}),o.jsx(Ia,{children:"799 €"}),o.jsx(el,{children:"netto / Jahr"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),o.jsx(Re,{children:"6 Social Media Posts"}),o.jsx(Re,{children:"Website-Präsenz"}),o.jsx(Re,{children:"Newsletter-Integration"})]}),o.jsx(nl,{className:"secondary",children:"Small Flat"})]}),o.jsxs(Fa,{className:"popular",children:[o.jsx(fm,{children:"EMPFOHLEN"}),o.jsx(Pa,{children:"Job Flat MEDIUM"}),o.jsx(Ia,{children:"1.199 €"}),o.jsx(el,{children:"netto / Jahr"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),o.jsx(Re,{children:"Stadionmagazin-Präsenz"}),o.jsx(Re,{children:"Social Media Posts"}),o.jsx(Re,{children:"Stories & Highlights"})]}),o.jsx(nl,{children:"Medium Flat"})]}),o.jsxs(Fa,{children:[o.jsx(Pa,{children:"Job Flat PARTNER"}),o.jsx(Ia,{children:"1.499 €"}),o.jsx(el,{children:"netto / Jahr"}),o.jsxs(tl,{children:[o.jsx(Re,{children:"Unbegrenzte Anzeigen"}),o.jsx(Re,{children:"Erwähnung bei Heimspielen"}),o.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),o.jsx(Re,{children:"Prioritärer Support"})]}),o.jsx(nl,{className:"secondary",children:"Partner Flat"})]})]}),o.jsxs(AS,{children:[o.jsx(RS,{children:"➕ Zusatzoptionen"}),o.jsxs(MS,{children:[o.jsxs(Zc,{children:[o.jsx(Kc,{children:"Social Story"}),o.jsx(Jc,{children:"39 €"}),o.jsx($c,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),o.jsxs(Zc,{children:[o.jsx(Kc,{children:"Designservice"}),o.jsx(Jc,{children:"59 €"}),o.jsx($c,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),o.jsxs(Zc,{children:[o.jsx(Kc,{children:"Stadionmagazin"}),o.jsx(Jc,{children:"99 €"}),o.jsx($c,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),o.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:o.jsx(DS,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),o.jsxs(OS,{children:[o.jsx(CS,{children:"🎯 Warum SCKW Jobbörse?"}),o.jsxs(BS,{children:[o.jsxs(al,{children:[o.jsx(ll,{children:"🏠"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"👥"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"💰"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"📈"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"⚡"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),o.jsxs(al,{children:[o.jsx(ll,{children:"🤲"}),o.jsxs(il,{children:[o.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),o.jsx(Co,{})]})}const kS={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},US={packages:kS},HS=v.div`
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
`,GS=v.div`
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
`,LS=v.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,YS=v.div`
  margin-bottom: 1.5rem;
`,qS=v.div`
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
`,VS=v.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,XS=v.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,QS=v.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,ZS=v.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,KS=v.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,JS=v.div`
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
`,$S=v.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,WS=v.div`
  flex: 1;
`,FS=v.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,PS=v.span`
  font-weight: 600;
  color: #374151;
`,IS=v.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,e5=v.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,t5=v.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,n5=v.button`
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
`,a5=v.div`
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
`,l5=()=>{const l=US;return{kabinen:{current:l.packages.kabinen.current,goal:l.packages.kabinen.goal,donors:l.packages.kabinen.donors},fassade:{current:l.packages.fassade.current,goal:l.packages.fassade.goal,donors:l.packages.fassade.donors},waschkueche:{current:l.packages.waschkueche.current,goal:l.packages.waschkueche.goal,donors:l.packages.waschkueche.donors}}};function i5({data:l=l5(),realTime:u=!1}){const[c,s]=M.useState(l),[d,g]=M.useState(new Date),[p,j]=M.useState(!1),y=async()=>{j(!0);try{const R=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(R.ok){const D=await R.json(),H={kabinen:{current:D.packages.kabinen.current,goal:D.packages.kabinen.goal,donors:D.packages.kabinen.donors},fassade:{current:D.packages.fassade.current,goal:D.packages.fassade.goal,donors:D.packages.fassade.donors},waschkueche:{current:D.packages.waschkueche.current,goal:D.packages.waschkueche.goal,donors:D.packages.waschkueche.donors}};s(H),g(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(R){console.error("❌ Fehler beim Laden der Spendendaten:",R)}finally{j(!1)}};M.useEffect(()=>{if(!u)return;const R=setInterval(()=>{y()},3e4);return()=>clearInterval(R)},[u]);const m=R=>{switch(R){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},w=R=>{switch(R){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return R}};return o.jsxs(o.Fragment,{children:[o.jsx(HS,{children:Object.entries(c).map(([R,D])=>{const H=D.current/D.goal*100;return o.jsxs(GS,{children:[o.jsxs(LS,{children:[m(R)," ",w(R)]}),o.jsxs(YS,{children:[o.jsxs(qS,{children:[o.jsxs("span",{children:[D.current.toLocaleString("de-DE")," €"]}),o.jsxs("span",{children:[D.goal.toLocaleString("de-DE")," €"]})]}),o.jsx(VS,{children:o.jsx(XS,{$progress:H})}),o.jsxs(QS,{children:[Math.round(H),"% erreicht"]})]}),o.jsxs(ZS,{children:[o.jsxs(KS,{children:["💝 Spender (",D.donors.length,")"]}),o.jsx(JS,{children:D.donors.length>0?D.donors.slice().reverse().map((G,L)=>o.jsxs($S,{children:[o.jsxs(WS,{children:[o.jsx(FS,{children:G.anonymous?"Anonymer Spender":G.name}),G.comment&&o.jsxs(IS,{children:['"',G.comment,'"']}),G.date&&o.jsx(e5,{children:G.date})]}),o.jsxs(PS,{children:[G.amount.toLocaleString("de-DE")," €"]})]},L)):o.jsx(t5,{children:"Noch keine Spenden 🤗"})})]})]},R)})}),o.jsxs(n5,{onClick:y,disabled:p,title:"Spendendaten aktualisieren",children:["🔄",p?"Lade...":"Aktualisieren"]}),o.jsxs(a5,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const r5=v.section`
  background: url("${Bo("herren",18)}") center/cover;
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
`,u5=v.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,s5=v.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,c5=v.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,o5=v.main`
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
`,f5=v.section`
  margin-bottom: 4rem;
`,d5=v.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,h5=v.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,g5=v.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,m5=v.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,p5=v.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,b5=v.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,y5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,v5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Wc=v.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Fc=v.div`
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
`,x5=v.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,S5=v.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,j5=v.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,_5=v.div`
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
`,E5=v.div`
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
`,z5=v.div`
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
`,w5=v.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,T5=v.button`
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
`,dm=v.button`
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
`,Pc=v.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Ic=v.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,A5=v.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,R5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,M5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,eo=v.div`
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
`,to=v.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,no=v.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,ao=v.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,lo=v.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,D5=v.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,O5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,C5=v.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,B5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,qr=v.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Vr=v.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Xr=v.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,N5=v.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,k5=v.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,U5=v.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,H5=v.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,hm=v.a`
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
`,G5=v.div`
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
`,L5=v.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,Y5=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,q5=v.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,V5=v.button`
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
`,X5=v.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,io=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,ro=v.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,uo=v.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,Q5=v.button`
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
`,Z5=v.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,rl=J0();function so({images:l,onImageClick:u}){const[c,s]=M.useState(0);return M.useEffect(()=>{if(l.length<=1)return;const d=setInterval(()=>{s(g=>(g+1)%l.length)},4e3);return()=>clearInterval(d)},[l.length]),l.length===0?o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):o.jsxs(x5,{children:[l.map((d,g)=>o.jsx(S5,{src:d.src,alt:d.alt,$isActive:g===c,onClick:()=>u(g)},g)),l.length>1&&o.jsx(j5,{children:l.map((d,g)=>o.jsx(_5,{$isActive:g===c,onClick:()=>s(g)},g))})]})}function K5({images:l,initialIndex:u,onClose:c}){const[s,d]=M.useState(u),g=M.useCallback(()=>{d(j=>(j+1)%l.length)},[l.length]),p=M.useCallback(()=>{d(j=>(j-1+l.length)%l.length)},[l.length]);return M.useEffect(()=>{const j=y=>{y.key==="Escape"&&c(),y.key==="ArrowRight"&&g(),y.key==="ArrowLeft"&&p()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[c,g,p]),o.jsx(E5,{onClick:c,children:o.jsxs(z5,{onClick:j=>j.stopPropagation(),children:[o.jsx(T5,{onClick:c,children:"×"}),o.jsx(w5,{src:l[s].src,alt:l[s].alt}),l.length>1&&o.jsxs(o.Fragment,{children:[o.jsx(dm,{$direction:"prev",onClick:p,children:"‹"}),o.jsx(dm,{$direction:"next",onClick:g,children:"›"})]})]})})}function J5(){const[l,u]=M.useState(!1),[c,s]=M.useState([]),[d,g]=M.useState(0),[p,j]=M.useState(!1),y=(R,D)=>{s(R),g(D),u(!0)},m=R=>{R.preventDefault(),j(!0)},w=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return o.jsxs(o.Fragment,{children:[o.jsx(r5,{children:o.jsxs(u5,{children:[o.jsx(s5,{children:"🏟️ Fürstenberg weiterentwickeln"}),o.jsx(c5,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),o.jsxs(o5,{children:[o.jsxs(f5,{children:[o.jsx(d5,{children:"Der Fürstenberg - unser Kultplatz"}),o.jsx(h5,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),o.jsxs(g5,{children:[o.jsx(m5,{children:"✨ Charme erhalten, Komfort verbessern"}),o.jsx(p5,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),o.jsxs(b5,{children:[o.jsx(y5,{children:"🔍 Wo wir ansetzen möchten"}),o.jsxs(v5,{children:[o.jsxs(Wc,{children:[o.jsx(Fc,{children:o.jsx(so,{images:rl.kabinen,onImageClick:R=>y(rl.kabinen,R)})}),o.jsx(Pc,{children:"🔧 Kabinen komfortabler gestalten"}),o.jsx(Ic,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),o.jsxs(Wc,{children:[o.jsx(Fc,{children:o.jsx(so,{images:rl.fassade,onImageClick:R=>y(rl.fassade,R)})}),o.jsx(Pc,{children:"🎨 Fassade & Fenster erneuern"}),o.jsx(Ic,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),o.jsxs(Wc,{children:[o.jsx(Fc,{children:o.jsx(so,{images:rl.waschkueche,onImageClick:R=>y(rl.waschkueche,R)})}),o.jsx(Pc,{children:"🧺 Waschküche auf Vordermann bringen"}),o.jsx(Ic,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),o.jsxs(A5,{children:[o.jsx(R5,{children:"✨ Unsere Pläne für den Fürstenberg"}),o.jsxs(M5,{children:[o.jsxs(eo,{children:[o.jsx(to,{children:"🪑"}),o.jsx(no,{children:"Kabinen sanieren"}),o.jsx(ao,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),o.jsx(lo,{children:"~8.000 €"})]}),o.jsxs(eo,{children:[o.jsx(to,{children:"🎨"}),o.jsx(no,{children:"Fassade & Fenster erneuern"}),o.jsx(ao,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),o.jsx(lo,{children:"~15.000 €"})]}),o.jsxs(eo,{children:[o.jsx(to,{children:"🧺"}),o.jsx(no,{children:"Waschküche modernisieren"}),o.jsx(ao,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),o.jsx(lo,{children:"~5.000 €"})]})]})]}),o.jsxs(D5,{children:[o.jsx(O5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),o.jsx(C5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),o.jsxs(B5,{children:[o.jsxs(qr,{children:[o.jsx(Vr,{children:"🏆"}),o.jsxs(Xr,{children:[o.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),o.jsxs(qr,{children:[o.jsx(Vr,{children:"📄"}),o.jsxs(Xr,{children:[o.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),o.jsxs(qr,{children:[o.jsx(Vr,{children:"📱"}),o.jsxs(Xr,{children:[o.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),o.jsxs(qr,{children:[o.jsx(Vr,{children:"🎯"}),o.jsxs(Xr,{children:[o.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),o.jsxs(N5,{children:[o.jsx(k5,{children:"🤝 Gemeinsam für den Fürstenberg"}),o.jsx(U5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),o.jsx(i5,{realTime:!0}),o.jsxs(H5,{children:[o.jsx(hm,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),o.jsx(hm,{href:"#",onClick:m,children:"🏦 Per Überweisung spenden"})]})]})]}),o.jsx(Co,{}),p&&o.jsx(G5,{onClick:()=>j(!1),children:o.jsxs(L5,{onClick:R=>R.stopPropagation(),children:[o.jsxs(Y5,{children:[o.jsx(q5,{children:"Kontoverbindung für Spenden"}),o.jsx(V5,{onClick:()=>j(!1),children:"×"})]}),o.jsxs(X5,{children:[o.jsxs(io,{children:[o.jsx(ro,{children:"Kontoinhaber:"}),o.jsx(uo,{children:"SC Konstanz-Wollmatingen"})]}),o.jsxs(io,{children:[o.jsx(ro,{children:"IBAN:"}),o.jsx(uo,{children:"DE12 6905 0001 0000 0228 06"})]}),o.jsxs(io,{children:[o.jsx(ro,{children:"BIC:"}),o.jsx(uo,{children:"SOLADES1KNZ"})]})]}),o.jsx(Q5,{onClick:w,children:"📋 IBAN kopieren"}),o.jsx(Z5,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),l&&o.jsx(K5,{images:c,initialIndex:d,onClose:()=>u(!1)})]})}function $5(){return o.jsxs(Xv,{children:[o.jsx(sx,{}),o.jsxs(Sv,{children:[o.jsx(yi,{path:"/",element:o.jsx(vv,{to:"/sponsoring",replace:!0})}),o.jsx(yi,{path:"/sponsoring",element:o.jsx(P2,{})}),o.jsx(yi,{path:"/jobs",element:o.jsx(NS,{})}),o.jsx(yi,{path:"/renovierung",element:o.jsx(J5,{})})]})]})}const W5={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");Tb.createRoot(document.getElementById("root")).render(o.jsx(M.StrictMode,{children:o.jsx(Ay,{theme:W5,children:o.jsx($5,{})})}));
