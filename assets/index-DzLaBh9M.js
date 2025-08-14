(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const y of g.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function o(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function s(d){if(d.ep)return;d.ep=!0;const g=o(d);fetch(d.href,g)}})();function Ab(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Oc={exports:{}},pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Rb(){if(Bg)return pi;Bg=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(s,d,g){var y=null;if(g!==void 0&&(y=""+g),d.key!==void 0&&(y=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:l,type:s,key:y,ref:d!==void 0?d:null,props:g}}return pi.Fragment=u,pi.jsx=o,pi.jsxs=o,pi}var Ng;function Mb(){return Ng||(Ng=1,Oc.exports=Rb()),Oc.exports}var c=Mb(),Cc={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Db(){if(Ug)return ie;Ug=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),y=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function D(x){return x===null||typeof x!="object"?null:(x=R&&x[R]||x["@@iterator"],typeof x=="function"?x:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,G={};function Z(x,U,Y){this.props=x,this.context=U,this.refs=G,this.updater=Y||H}Z.prototype.isReactComponent={},Z.prototype.setState=function(x,U){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,U,"setState")},Z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function k(){}k.prototype=Z.prototype;function J(x,U,Y){this.props=x,this.context=U,this.refs=G,this.updater=Y||H}var X=J.prototype=new k;X.constructor=J,L(X,Z.prototype),X.isPureReactComponent=!0;var ae=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(x,U,Y,V,F,oe){return Y=oe.ref,{$$typeof:l,type:x,key:U,ref:Y!==void 0?Y:null,props:oe}}function we(x,U){return W(x.type,U,void 0,void 0,void 0,x.props)}function _e(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function at(x){var U={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return U[Y]})}var it=/\/+/g;function Ye(x,U){return typeof x=="object"&&x!==null&&x.key!=null?at(""+x.key):U.toString(36)}function Qt(){}function Kt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Qt,Qt):(x.status="pending",x.then(function(U){x.status==="pending"&&(x.status="fulfilled",x.value=U)},function(U){x.status==="pending"&&(x.status="rejected",x.reason=U)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function qe(x,U,Y,V,F){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(oe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case l:case u:ee=!0;break;case w:return ee=x._init,qe(ee(x._payload),U,Y,V,F)}}if(ee)return F=F(x),ee=V===""?"."+Ye(x,0):V,ae(F)?(Y="",ee!=null&&(Y=ee.replace(it,"$&/")+"/"),qe(F,U,Y,"",function(Pe){return Pe})):F!=null&&(_e(F)&&(F=we(F,Y+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(it,"$&/")+"/")+ee)),U.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(x))for(var pe=0;pe<x.length;pe++)V=x[pe],oe=Ve+Ye(V,pe),ee+=qe(V,U,Y,oe,F);else if(pe=D(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(V=x.next()).done;)V=V.value,oe=Ve+Ye(V,pe++),ee+=qe(V,U,Y,oe,F);else if(oe==="object"){if(typeof x.then=="function")return qe(Kt(x),U,Y,V,F);throw U=String(x),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ee}function O(x,U,Y){if(x==null)return x;var V=[],F=0;return qe(x,V,"","",function(oe){return U.call(Y,oe,F++)}),V}function q(x){if(x._status===-1){var U=x._result;U=U(),U.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=U)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ce(){}return ie.Children={map:O,forEach:function(x,U,Y){O(x,function(){U.apply(this,arguments)},Y)},count:function(x){var U=0;return O(x,function(){U++}),U},toArray:function(x){return O(x,function(U){return U})||[]},only:function(x){if(!_e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=Z,ie.Fragment=o,ie.Profiler=d,ie.PureComponent=J,ie.StrictMode=s,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Q.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cloneElement=function(x,U,Y){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=L({},x.props),F=x.key,oe=void 0;if(U!=null)for(ee in U.ref!==void 0&&(oe=void 0),U.key!==void 0&&(F=""+U.key),U)!le.call(U,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&U.ref===void 0||(V[ee]=U[ee]);var ee=arguments.length-2;if(ee===1)V.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(x.type,F,void 0,void 0,oe,V)},ie.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},ie.createElement=function(x,U,Y){var V,F={},oe=null;if(U!=null)for(V in U.key!==void 0&&(oe=""+U.key),U)le.call(U,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=U[V]);var ee=arguments.length-2;if(ee===1)F.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(x&&x.defaultProps)for(V in ee=x.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(x,oe,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:j,render:x}},ie.isValidElement=_e,ie.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:q}},ie.memo=function(x,U){return{$$typeof:m,type:x,compare:U===void 0?null:U}},ie.startTransition=function(x){var U=Q.T,Y={};Q.T=Y;try{var V=x(),F=Q.S;F!==null&&F(Y,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ce,P)}catch(oe){P(oe)}finally{Q.T=U}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(x){return Q.H.use(x)},ie.useActionState=function(x,U,Y){return Q.H.useActionState(x,U,Y)},ie.useCallback=function(x,U){return Q.H.useCallback(x,U)},ie.useContext=function(x){return Q.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,U){return Q.H.useDeferredValue(x,U)},ie.useEffect=function(x,U,Y){var V=Q.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,U)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(x,U,Y){return Q.H.useImperativeHandle(x,U,Y)},ie.useInsertionEffect=function(x,U){return Q.H.useInsertionEffect(x,U)},ie.useLayoutEffect=function(x,U){return Q.H.useLayoutEffect(x,U)},ie.useMemo=function(x,U){return Q.H.useMemo(x,U)},ie.useOptimistic=function(x,U){return Q.H.useOptimistic(x,U)},ie.useReducer=function(x,U,Y){return Q.H.useReducer(x,U,Y)},ie.useRef=function(x){return Q.H.useRef(x)},ie.useState=function(x){return Q.H.useState(x)},ie.useSyncExternalStore=function(x,U,Y){return Q.H.useSyncExternalStore(x,U,Y)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.1.0",ie}var kg;function zo(){return kg||(kg=1,Cc.exports=Db()),Cc.exports}var M=zo();const fa=Ab(M);var Bc={exports:{}},bi={},Nc={exports:{}},Uc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Ob(){return Hg||(Hg=1,function(l){function u(O,q){var P=O.length;O.push(q);e:for(;0<P;){var ce=P-1>>>1,x=O[ce];if(0<d(x,q))O[ce]=q,O[P]=x,P=ce;else break e}}function o(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var q=O[0],P=O.pop();if(P!==q){O[0]=P;e:for(var ce=0,x=O.length,U=x>>>1;ce<U;){var Y=2*(ce+1)-1,V=O[Y],F=Y+1,oe=O[F];if(0>d(V,P))F<x&&0>d(oe,V)?(O[ce]=oe,O[F]=P,ce=F):(O[ce]=V,O[Y]=P,ce=Y);else if(F<x&&0>d(oe,P))O[ce]=oe,O[F]=P,ce=F;else break e}}return q}function d(O,q){var P=O.sortIndex-q.sortIndex;return P!==0?P:O.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var y=Date,j=y.now();l.unstable_now=function(){return y.now()-j}}var v=[],m=[],w=1,R=null,D=3,H=!1,L=!1,G=!1,Z=!1,k=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ae(O){for(var q=o(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=O)s(m),q.sortIndex=q.expirationTime,u(v,q);else break;q=o(m)}}function Q(O){if(G=!1,ae(O),!L)if(o(v)!==null)L=!0,le||(le=!0,Ye());else{var q=o(m);q!==null&&qe(Q,q.startTime-O)}}var le=!1,W=-1,we=5,_e=-1;function at(){return Z?!0:!(l.unstable_now()-_e<we)}function it(){if(Z=!1,le){var O=l.unstable_now();_e=O;var q=!0;try{e:{L=!1,G&&(G=!1,J(W),W=-1),H=!0;var P=D;try{t:{for(ae(O),R=o(v);R!==null&&!(R.expirationTime>O&&at());){var ce=R.callback;if(typeof ce=="function"){R.callback=null,D=R.priorityLevel;var x=ce(R.expirationTime<=O);if(O=l.unstable_now(),typeof x=="function"){R.callback=x,ae(O),q=!0;break t}R===o(v)&&s(v),ae(O)}else s(v);R=o(v)}if(R!==null)q=!0;else{var U=o(m);U!==null&&qe(Q,U.startTime-O),q=!1}}break e}finally{R=null,D=P,H=!1}q=void 0}}finally{q?Ye():le=!1}}}var Ye;if(typeof X=="function")Ye=function(){X(it)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Kt=Qt.port2;Qt.port1.onmessage=it,Ye=function(){Kt.postMessage(null)}}else Ye=function(){k(it,0)};function qe(O,q){W=k(function(){O(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(O){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var P=D;D=q;try{return O()}finally{D=P}},l.unstable_requestPaint=function(){Z=!0},l.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var P=D;D=O;try{return q()}finally{D=P}},l.unstable_scheduleCallback=function(O,q,P){var ce=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ce+P:ce):P=ce,O){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,O={id:w++,callback:q,priorityLevel:O,startTime:P,expirationTime:x,sortIndex:-1},P>ce?(O.sortIndex=P,u(m,O),o(v)===null&&O===o(m)&&(G?(J(W),W=-1):G=!0,qe(Q,P-ce))):(O.sortIndex=x,u(v,O),L||H||(L=!0,le||(le=!0,Ye()))),O},l.unstable_shouldYield=at,l.unstable_wrapCallback=function(O){var q=D;return function(){var P=D;D=q;try{return O.apply(this,arguments)}finally{D=P}}}}(Uc)),Uc}var Lg;function Cb(){return Lg||(Lg=1,Nc.exports=Ob()),Nc.exports}var kc={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Bb(){if(Gg)return tt;Gg=1;var l=zo();function u(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)m+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(v,m,w){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:v,containerInfo:m,implementation:w}}var y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,tt.createPortal=function(v,m){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return g(v,m,null,w)},tt.flushSync=function(v){var m=y.T,w=s.p;try{if(y.T=null,s.p=2,v)return v()}finally{y.T=m,s.p=w,s.d.f()}},tt.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},tt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},tt.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var w=m.as,R=j(w,m.crossOrigin),D=typeof m.integrity=="string"?m.integrity:void 0,H=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;w==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:R,integrity:D,fetchPriority:H}):w==="script"&&s.d.X(v,{crossOrigin:R,integrity:D,fetchPriority:H,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},tt.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var w=j(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(v)},tt.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var w=m.as,R=j(w,m.crossOrigin);s.d.L(v,w,{crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},tt.preloadModule=function(v,m){if(typeof v=="string")if(m){var w=j(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(v)},tt.requestFormReset=function(v){s.d.r(v)},tt.unstable_batchedUpdates=function(v,m){return v(m)},tt.useFormState=function(v,m,w){return y.H.useFormState(v,m,w)},tt.useFormStatus=function(){return y.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Yg;function Nb(){if(Yg)return kc.exports;Yg=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),kc.exports=Bb(),kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Ub(){if(qg)return bi;qg=1;var l=Cb(),u=zo(),o=Nb();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(g(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return j(i),e;if(r===a)return j(i),t;r=r.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,h=i.child;h;){if(h===n){f=!0,n=i,a=r;break}if(h===a){f=!0,a=i,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=i;break}if(h===a){f=!0,a=r,n=i;break}h=h.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,R=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Qt=Symbol.for("react.client.reference");function Kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case X:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Kt(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Kt(e(t))}catch{}}return null}var qe=Array.isArray,O=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ce=[],x=-1;function U(e){return{current:e}}function Y(e){0>x||(e.current=ce[x],ce[x]=null,x--)}function V(e,t){x++,ce[x]=e.current,e.current=t}var F=U(null),oe=U(null),ee=U(null),Ve=U(null);function pe(e,t){switch(V(ee,t),V(oe,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sg(t),e=cg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(F),V(F,e)}function Pe(){Y(F),Y(oe),Y(ee)}function Gn(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=cg(t,e.type);t!==n&&(V(oe,e),V(F,n))}function $t(e){oe.current===e&&(Y(F),Y(oe)),Ve.current===e&&(Y(Ve),fi._currentValue=P)}var St=Object.prototype.hasOwnProperty,vu=l.unstable_scheduleCallback,xu=l.unstable_cancelCallback,rp=l.unstable_shouldYield,up=l.unstable_requestPaint,Ht=l.unstable_now,sp=l.unstable_getCurrentPriorityLevel,Yo=l.unstable_ImmediatePriority,qo=l.unstable_UserBlockingPriority,Ai=l.unstable_NormalPriority,cp=l.unstable_LowPriority,Vo=l.unstable_IdlePriority,op=l.log,fp=l.unstable_setDisableYieldValue,vl=null,ft=null;function mn(e){if(typeof op=="function"&&fp(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(vl,e)}catch{}}var dt=Math.clz32?Math.clz32:gp,dp=Math.log,hp=Math.LN2;function gp(e){return e>>>=0,e===0?32:31-(dp(e)/hp|0)|0}var Ri=256,Mi=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?i=Yn(a):(f&=h,f!==0?i=Yn(f):n||(n=h&~e,n!==0&&(i=Yn(n))))):(h=a&~r,h!==0?i=Yn(h):f!==0?i=Yn(f):n||(n=a&~e,n!==0&&(i=Yn(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zo(){var e=Ri;return Ri<<=1,(Ri&4194048)===0&&(Ri=256),e}function Xo(){var e=Mi;return Mi<<=1,(Mi&62914560)===0&&(Mi=4194304),e}function Su(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pp(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,b=e.expirationTimes,E=e.hiddenUpdates;for(n=f&~n;0<n;){var C=31-dt(n),N=1<<C;h[C]=0,b[C]=-1;var T=E[C];if(T!==null)for(E[C]=null,C=0;C<T.length;C++){var A=T[C];A!==null&&(A.lane&=-536870913)}n&=~N}a!==0&&Qo(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Qo(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Ko(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function ju(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _u(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $o(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Ag(e.type))}function bp(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var pn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+pn,rt="__reactProps$"+pn,ga="__reactContainer$"+pn,zu="__reactEvents$"+pn,yp="__reactListeners$"+pn,vp="__reactHandles$"+pn,Jo="__reactResources$"+pn,jl="__reactMarker$"+pn;function Eu(e){delete e[Ie],delete e[rt],delete e[zu],delete e[yp],delete e[vp]}function ma(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ga]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hg(e);e!==null;){if(n=e[Ie])return n;e=hg(e)}return t}e=n,n=e.parentNode}return null}function pa(e){if(e=e[Ie]||e[ga]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ba(e){var t=e[Jo];return t||(t=e[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[jl]=!0}var Wo=new Set,Fo={};function qn(e,t){ya(e,t),ya(e+"Capture",t)}function ya(e,t){for(Fo[e]=t,e=0;e<t.length;e++)Wo.add(t[e])}var xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Po={},Io={};function Sp(e){return St.call(Io,e)?!0:St.call(Po,e)?!1:xp.test(e)?Io[e]=!0:(Po[e]=!0,!1)}function Oi(e,t,n){if(Sp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var wu,ef;function va(e){if(wu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wu=t&&t[1]||"",ef=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+e+ef}var Tu=!1;function Au(e,t){if(!e||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(A){var T=A}Reflect.construct(e,[],N)}else{try{N.call()}catch(A){T=A}e.call(N.prototype)}}else{try{throw Error()}catch(A){T=A}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var b=f.split(`
`),E=h.split(`
`);for(i=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(a===b.length||i===E.length)for(a=b.length-1,i=E.length-1;1<=a&&0<=i&&b[a]!==E[i];)i--;for(;1<=a&&0<=i;a--,i--)if(b[a]!==E[i]){if(a!==1||i!==1)do if(a--,i--,0>i||b[a]!==E[i]){var C=`
`+b[a].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=a&&0<=i);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?va(n):""}function jp(e){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return Au(e.type,!1);case 11:return Au(e.type.render,!1);case 1:return Au(e.type,!0);case 31:return va("Activity");default:return""}}function tf(e){try{var t="";do t+=jp(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e){var t=nf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=_p(e))}function af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=nf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zp=/[\n"\\]/g;function _t(e){return e.replace(zp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ru(e,t,n,a,i,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Mu(e,f,jt(t)):n!=null?Mu(e,f,jt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function lf(e,t,n,a,i,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Mu(e,t,n){t==="number"&&Ni(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xa(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rf(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function uf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(qe(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Sa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ep=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Ep.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&sf(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&sf(e,r,t[r])}function Du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(e){return Tp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ou=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,_a=null;function of(e){var t=pa(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ru(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[rt]||null;if(!i)throw Error(s(90));Ru(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&af(a)}break e;case"textarea":rf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xa(e,!!n.multiple,t,!1)}}}var Bu=!1;function ff(e,t,n){if(Bu)return e(t,n);Bu=!0;try{var a=e(t);return a}finally{if(Bu=!1,(ja!==null||_a!==null)&&(Sr(),ja&&(t=ja,e=_a,_a=ja=null,of(t),e)))for(t=0;t<e.length;t++)of(e[t])}}function zl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(Wt)try{var El={};Object.defineProperty(El,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",El,El),window.removeEventListener("test",El,El)}catch{Nu=!1}var bn=null,Uu=null,ki=null;function df(){if(ki)return ki;var e,t=Uu,n=t.length,a,i="value"in bn?bn.value:bn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return ki=i.slice(e,1<a?1-a:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function hf(){return!1}function ut(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Li:hf,this.isPropagationStopped=hf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=ut(Vn),wl=w({},Vn,{view:0,detail:0}),Ap=ut(wl),ku,Hu,Tl,Yi=w({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tl&&(Tl&&e.type==="mousemove"?(ku=e.screenX-Tl.screenX,Hu=e.screenY-Tl.screenY):Hu=ku=0,Tl=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Hu}}),gf=ut(Yi),Rp=w({},Yi,{dataTransfer:0}),Mp=ut(Rp),Dp=w({},wl,{relatedTarget:0}),Lu=ut(Dp),Op=w({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=ut(Op),Bp=w({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Np=ut(Bp),Up=w({},Vn,{data:0}),mf=ut(Up),kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function Gu(){return Gp}var Yp=w({},wl,{key:function(e){if(e.key){var t=kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qp=ut(Yp),Vp=w({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=ut(Vp),Zp=w({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),Xp=ut(Zp),Qp=w({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=ut(Qp),$p=w({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=ut($p),Wp=w({},Vn,{newState:0,oldState:0}),Fp=ut(Wp),Pp=[9,13,27,32],Yu=Wt&&"CompositionEvent"in window,Al=null;Wt&&"documentMode"in document&&(Al=document.documentMode);var Ip=Wt&&"TextEvent"in window&&!Al,bf=Wt&&(!Yu||Al&&8<Al&&11>=Al),yf=" ",vf=!1;function xf(e,t){switch(e){case"keyup":return Pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function e1(e,t){switch(e){case"compositionend":return Sf(t);case"keypress":return t.which!==32?null:(vf=!0,yf);case"textInput":return e=t.data,e===yf&&vf?null:e;default:return null}}function t1(e,t){if(za)return e==="compositionend"||!Yu&&xf(e,t)?(e=df(),ki=Uu=bn=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bf&&t.locale!=="ko"?null:t.data;default:return null}}var n1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!n1[e.type]:t==="textarea"}function _f(e,t,n,a){ja?_a?_a.push(a):_a=[a]:ja=a,t=Tr(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Rl=null,Ml=null;function a1(e){ag(e,0)}function qi(e){var t=_l(e);if(af(t))return e}function zf(e,t){if(e==="change")return t}var Ef=!1;if(Wt){var qu;if(Wt){var Vu="oninput"in document;if(!Vu){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),Vu=typeof wf.oninput=="function"}qu=Vu}else qu=!1;Ef=qu&&(!document.documentMode||9<document.documentMode)}function Tf(){Rl&&(Rl.detachEvent("onpropertychange",Af),Ml=Rl=null)}function Af(e){if(e.propertyName==="value"&&qi(Ml)){var t=[];_f(t,Ml,e,Cu(e)),ff(a1,t)}}function l1(e,t,n){e==="focusin"?(Tf(),Rl=t,Ml=n,Rl.attachEvent("onpropertychange",Af)):e==="focusout"&&Tf()}function i1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Ml)}function r1(e,t){if(e==="click")return qi(t)}function u1(e,t){if(e==="input"||e==="change")return qi(t)}function s1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:s1;function Dl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!St.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mf(e,t){var n=Rf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ni(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ni(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var c1=Wt&&"documentMode"in document&&11>=document.documentMode,Ea=null,Xu=null,Ol=null,Qu=!1;function Cf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||Ea==null||Ea!==Ni(a)||(a=Ea,"selectionStart"in a&&Zu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ol&&Dl(Ol,a)||(Ol=a,a=Tr(Xu,"onSelect"),0<a.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ea)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wa={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},Ku={},Bf={};Wt&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function Xn(e){if(Ku[e])return Ku[e];if(!wa[e])return e;var t=wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bf)return Ku[e]=t[n];return e}var Nf=Xn("animationend"),Uf=Xn("animationiteration"),kf=Xn("animationstart"),o1=Xn("transitionrun"),f1=Xn("transitionstart"),d1=Xn("transitioncancel"),Hf=Xn("transitionend"),Lf=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function Ot(e,t){Lf.set(e,t),qn(t,[e])}var Gf=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var n=Gf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:tf(t)},Gf.set(e,t),t)}return{value:e,source:t,stack:tf(t)}}var Et=[],Ta=0,Ju=0;function Vi(){for(var e=Ta,t=Ju=Ta=0;t<e;){var n=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var i=Et[t];Et[t++]=null;var r=Et[t];if(Et[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&Yf(n,i,r)}}function Zi(e,t,n,a){Et[Ta++]=e,Et[Ta++]=t,Et[Ta++]=n,Et[Ta++]=a,Ju|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Wu(e,t,n,a){return Zi(e,t,n,a),Xi(e)}function Aa(e,t){return Zi(e,null,null,t),Xi(e)}function Yf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-dt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function Xi(e){if(50<ai)throw ai=0,nc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ra={};function h1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,a){return new h1(e,t,n,a)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function qf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")Fu(e)&&(f=1);else if(typeof e=="string")f=mb(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=gt(31,n,t,i),e.elementType=_e,e.lanes=r,e;case L:return Qn(n.children,i,r,t);case G:f=8,i|=24;break;case Z:return e=gt(12,n,t,i|2),e.elementType=Z,e.lanes=r,e;case Q:return e=gt(13,n,t,i),e.elementType=Q,e.lanes=r,e;case le:return e=gt(19,n,t,i),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case X:f=10;break e;case J:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case we:f=16,a=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=gt(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Qn(e,t,n,a){return e=gt(7,e,a,t),e.lanes=n,e}function Pu(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Iu(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ma=[],Da=0,Ki=null,$i=0,wt=[],Tt=0,Kn=null,Pt=1,It="";function $n(e,t){Ma[Da++]=$i,Ma[Da++]=Ki,Ki=e,$i=t}function Vf(e,t,n){wt[Tt++]=Pt,wt[Tt++]=It,wt[Tt++]=Kn,Kn=e;var a=Pt;e=It;var i=32-dt(a)-1;a&=~(1<<i),n+=1;var r=32-dt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,Pt=1<<32-dt(t)+i|n<<i|a,It=r+e}else Pt=1<<r|n<<i|a,It=e}function es(e){e.return!==null&&($n(e,1),Vf(e,1,0))}function ts(e){for(;e===Ki;)Ki=Ma[--Da],Ma[Da]=null,$i=Ma[--Da],Ma[Da]=null;for(;e===Kn;)Kn=wt[--Tt],wt[Tt]=null,It=wt[--Tt],wt[Tt]=null,Pt=wt[--Tt],wt[Tt]=null}var lt=null,Oe=null,me=!1,Jn=null,Lt=!1,ns=Error(s(519));function Wn(e){var t=Error(s(418,""));throw Nl(zt(t,e)),ns}function Zf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[rt]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)de(ii[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),lf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Bi(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),uf(t,a.value,a.defaultValue,a.children),Bi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||ug(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Ar),t=!0):t=!1,t||Wn(e)}function Xf(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:lt=lt.return}}function Cl(e){if(e!==lt)return!1;if(!me)return Xf(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||yc(e.type,e.memoizedProps)),n=!n),n&&Oe&&Wn(e),Xf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,Cn(e.type)?(e=jc,jc=null,Oe=e):Oe=t):Oe=lt?Bt(e.stateNode.nextSibling):null;return!0}function Bl(){Oe=lt=null,me=!1}function Qf(){var e=Jn;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),Jn=null),e}function Nl(e){Jn===null?Jn=[e]:Jn.push(e)}var as=U(null),Fn=null,en=null;function yn(e,t,n){V(as,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=as.current,Y(as)}function ls(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function is(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var b=0;b<t.length;b++)if(h.context===t[b]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ls(r.return,n,e),a||(f=null);break e}r=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(s(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),ls(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Ul(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=i.type;ht(i.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(i===Ve.current){if(f=i.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}i=i.return}e!==null&&is(t,e,n,a),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Kf(Fn,e)}function Wi(e,t){return Fn===null&&Pn(e),Kf(e,t)}function Kf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(s(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var g1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},m1=l.unstable_scheduleCallback,p1=l.unstable_NormalPriority,Le={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rs(){return{controller:new g1,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&m1(p1,function(){e.controller.abort()})}var Hl=null,us=0,Oa=0,Ca=null;function b1(e,t){if(Hl===null){var n=Hl=[];us=0,Oa=cc(),Ca={status:"pending",value:void 0,then:function(a){n.push(a)}}}return us++,t.then($f,$f),t}function $f(){if(--us===0&&Hl!==null){Ca!==null&&(Ca.status="fulfilled");var e=Hl;Hl=null,Oa=0,Ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function y1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Jf=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&b1(e,t),Jf!==null&&Jf(e,t)};var In=U(null);function ss(){var e=In.current;return e!==null?e:Ee.pooledCache}function Fi(e,t){t===null?V(In,In.current):V(In,t.pool)}function Wf(){var e=ss();return e===null?null:{parent:Le._currentValue,pool:e}}var Ll=Error(s(460)),Ff=Error(s(474)),Pi=Error(s(542)),cs={then:function(){}};function Pf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ii(){}function If(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,td(e),e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,td(e),e}throw Gl=t,Ll}}var Gl=null;function ed(){if(Gl===null)throw Error(s(459));var e=Gl;return Gl=null,e}function td(e){if(e===Ll||e===Pi)throw Error(s(483))}var vn=!1;function os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Xi(e),Yf(e,null,n),t}return Zi(e,a,t,n),Xi(e)}function Yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ko(e,n)}}function ds(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hs=!1;function ql(){if(hs){var e=Ca;if(e!==null)throw e}}function Vl(e,t,n,a){hs=!1;var i=e.updateQueue;vn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var b=h,E=b.next;b.next=null,f===null?r=E:f.next=E,f=b;var C=e.alternate;C!==null&&(C=C.updateQueue,h=C.lastBaseUpdate,h!==f&&(h===null?C.firstBaseUpdate=E:h.next=E,C.lastBaseUpdate=b))}if(r!==null){var N=i.baseState;f=0,C=E=b=null,h=r;do{var T=h.lane&-536870913,A=T!==h.lane;if(A?(he&T)===T:(a&T)===T){T!==0&&T===Oa&&(hs=!0),C!==null&&(C=C.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;T=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){N=ne.call(je,N,T);break e}N=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,T=typeof ne=="function"?ne.call(je,N,T):ne,T==null)break e;N=w({},N,T);break e;case 2:vn=!0}}T=h.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[T]:A.push(T))}else A={lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},C===null?(E=C=A,b=N):C=C.next=A,f|=T;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;A=h,h=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);C===null&&(b=N),i.baseState=b,i.firstBaseUpdate=E,i.lastBaseUpdate=C,r===null&&(i.shared.lanes=0),Rn|=f,e.lanes=f,e.memoizedState=N}}function nd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function ad(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)nd(n[e],t)}var Ba=U(null),er=U(0);function ld(e,t){e=cn,V(er,e),V(Ba,t),cn=e|t.baseLanes}function gs(){V(er,cn),V(Ba,Ba.current)}function ms(){cn=er.current,Y(Ba),Y(er)}var jn=0,ue=null,xe=null,Ue=null,tr=!1,Na=!1,ea=!1,nr=0,Zl=0,Ua=null,v1=0;function Be(){throw Error(s(321))}function ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function bs(e,t,n,a,i,r){return jn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Yd:qd,ea=!1,r=n(a,i),ea=!1,Na&&(r=rd(t,n,a,i)),id(e),r}function id(e){O.H=sr;var t=xe!==null&&xe.next!==null;if(jn=0,Ue=xe=ue=null,tr=!1,Zl=0,Ua=null,t)throw Error(s(300));e===null||Xe||(e=e.dependencies,e!==null&&Ji(e)&&(Xe=!0))}function rd(e,t,n,a){ue=e;var i=0;do{if(Na&&(Ua=null),Zl=0,Na=!1,25<=i)throw Error(s(301));if(i+=1,Ue=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}O.H=w1,r=t(n,a)}while(Na);return r}function x1(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Xl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ue.flags|=1024),t}function ys(){var e=nr!==0;return nr=0,e}function vs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xs(e){if(tr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tr=!1}jn=0,Ue=xe=ue=null,Na=!1,Zl=nr=0,Ua=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function ke(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var t=Zl;return Zl+=1,Ua===null&&(Ua=[]),e=If(Ua,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Yd:qd),e}function ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===X)return et(e)}throw Error(s(438,String(e)))}function js(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ss(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=at;return t.index++,n}function nn(e,t){return typeof t=="function"?t(e):t}function lr(e){var t=ke();return _s(t,xe,e)}function _s(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=f=null,b=null,E=t,C=!1;do{var N=E.lane&-536870913;if(N!==E.lane?(he&N)===N:(jn&N)===N){var T=E.revertLane;if(T===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),N===Oa&&(C=!0);else if((jn&T)===T){E=E.next,T===Oa&&(C=!0);continue}else N={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(h=b=N,f=r):b=b.next=N,ue.lanes|=T,Rn|=T;N=E.action,ea&&n(r,N),r=E.hasEagerState?E.eagerState:n(r,N)}else T={lane:N,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(h=b=T,f=r):b=b.next=T,ue.lanes|=N,Rn|=N;E=E.next}while(E!==null&&E!==t);if(b===null?f=r:b.next=h,!ht(r,e.memoizedState)&&(Xe=!0,C&&(n=Ca,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=b,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function zs(e){var t=ke(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);ht(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function ud(e,t,n){var a=ue,i=ke(),r=me;if(r){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!ht((xe||i).memoizedState,n);f&&(i.memoizedState=n,Xe=!0),i=i.queue;var h=od.bind(null,a,i,e);if(Ql(2048,8,h,[e]),i.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,ka(9,ir(),cd.bind(null,a,i,n,t),null),Ee===null)throw Error(s(349));r||(jn&124)!==0||sd(a,t,n)}return n}function sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=Ss(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cd(e,t,n,a){t.value=n,t.getSnapshot=a,fd(t)&&dd(e)}function od(e,t,n){return n(function(){fd(t)&&dd(e)})}function fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function dd(e){var t=Aa(e,2);t!==null&&vt(t,e,2)}function Es(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ea){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function hd(e,t,n,a){return e.baseState=n,_s(e,xe,typeof a=="function"?a:nn)}function S1(e,t,n,a,i){if(ur(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};O.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,gd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function gd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=O.T,f={};O.T=f;try{var h=n(i,a),b=O.S;b!==null&&b(f,h),md(e,t,h)}catch(E){ws(e,t,E)}finally{O.T=r}}else try{r=n(i,a),md(e,t,r)}catch(E){ws(e,t,E)}}function md(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){pd(e,t,a)},function(a){return ws(e,t,a)}):pd(e,t,n)}function pd(e,t,n){t.status="fulfilled",t.value=n,bd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gd(e,n)))}function ws(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,bd(t),t=t.next;while(t!==a)}e.action=null}function bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yd(e,t){return t}function vd(e,t){if(me){var n=Ee.formState;if(n!==null){e:{var a=ue;if(me){if(Oe){t:{for(var i=Oe,r=Lt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Bt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Oe=Bt(i.nextSibling),a=i.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yd,lastRenderedState:t},n.queue=a,n=Hd.bind(null,ue,a),a.dispatch=n,a=Es(!1),r=Ds.bind(null,ue,!1,a.queue),a=st(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=S1.bind(null,ue,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function xd(e){var t=ke();return Sd(t,xe,e)}function Sd(e,t,n){if(t=_s(e,t,yd)[0],e=lr(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Xl(t)}catch(f){throw f===Ll?Pi:f}else a=t;t=ke();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,ka(9,ir(),j1.bind(null,i,n),null)),[a,r,e]}function j1(e,t){e.action=t}function jd(e){var t=ke(),n=xe;if(n!==null)return Sd(t,n,e);ke(),t=t.memoizedState,n=ke();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Ss(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ir(){return{destroy:void 0,resource:void 0}}function _d(){return ke().memoizedState}function rr(e,t,n,a){var i=st();a=a===void 0?null:a,ue.flags|=e,i.memoizedState=ka(1|t,ir(),n,a)}function Ql(e,t,n,a){var i=ke();a=a===void 0?null:a;var r=i.memoizedState.inst;xe!==null&&a!==null&&ps(a,xe.memoizedState.deps)?i.memoizedState=ka(t,r,n,a):(ue.flags|=e,i.memoizedState=ka(1|t,r,n,a))}function zd(e,t){rr(8390656,8,e,t)}function Ed(e,t){Ql(2048,8,e,t)}function wd(e,t){return Ql(4,2,e,t)}function Td(e,t){return Ql(4,4,e,t)}function Ad(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){n=n!=null?n.concat([e]):null,Ql(4,4,Ad.bind(null,t,e),n)}function Ts(){}function Md(e,t){var n=ke();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ps(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Dd(e,t){var n=ke();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ps(t,a[1]))return a[0];if(a=e(),ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function As(e,t,n){return n===void 0||(jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Bh(),ue.lanes|=e,Rn|=e,n)}function Od(e,t,n,a){return ht(n,t)?n:Ba.current!==null?(e=As(e,n,a),ht(e,t)||(Xe=!0),e):(jn&42)===0?(Xe=!0,e.memoizedState=n):(e=Bh(),ue.lanes|=e,Rn|=e,t)}function Cd(e,t,n,a,i){var r=q.p;q.p=r!==0&&8>r?r:8;var f=O.T,h={};O.T=h,Ds(e,!1,t,n);try{var b=i(),E=O.S;if(E!==null&&E(h,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var C=y1(b,a);Kl(e,t,C,yt(e))}else Kl(e,t,a,yt(e))}catch(N){Kl(e,t,{then:function(){},status:"rejected",reason:N},yt())}finally{q.p=r,O.T=f}}function _1(){}function Rs(e,t,n,a){if(e.tag!==5)throw Error(s(476));var i=Bd(e).queue;Cd(e,i,t,P,n===null?_1:function(){return Nd(e),n(a)})}function Bd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nd(e){var t=Bd(e).next.queue;Kl(e,t,{},yt())}function Ms(){return et(fi)}function Ud(){return ke().memoizedState}function kd(){return ke().memoizedState}function z1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=xn(n);var a=Sn(t,e,n);a!==null&&(vt(a,t,n),Yl(a,t,n)),t={cache:rs()},e.payload=t;return}t=t.return}}function E1(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ur(e)?Ld(t,n):(n=Wu(e,t,n,a),n!==null&&(vt(n,e,a),Gd(n,t,a)))}function Hd(e,t,n){var a=yt();Kl(e,t,n,a)}function Kl(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ur(e))Ld(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(i.hasEagerState=!0,i.eagerState=h,ht(h,f))return Zi(e,t,i,0),Ee===null&&Vi(),!1}catch{}finally{}if(n=Wu(e,t,i,a),n!==null)return vt(n,e,a),Gd(n,t,a),!0}return!1}function Ds(e,t,n,a){if(a={lane:2,revertLane:cc(),action:a,hasEagerState:!1,eagerState:null,next:null},ur(e)){if(t)throw Error(s(479))}else t=Wu(e,n,a,2),t!==null&&vt(t,e,2)}function ur(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Ld(e,t){Na=tr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ko(e,n)}}var sr={readContext:et,use:ar,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Yd={readContext:et,use:ar,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:zd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rr(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rr(4194308,4,e,t)},useInsertionEffect:function(e,t){rr(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var i=n(t);if(ea){mn(!0);try{n(t)}finally{mn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=E1.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Es(e);var t=e.queue,n=Hd.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ts,useDeferredValue:function(e,t){var n=st();return As(n,e,t)},useTransition:function(){var e=Es(!1);return e=Cd.bind(null,ue,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,i=st();if(me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ee===null)throw Error(s(349));(he&124)!==0||sd(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,zd(od.bind(null,a,r,e),[e]),a.flags|=2048,ka(9,ir(),cd.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=Ee.identifierPrefix;if(me){var n=It,a=Pt;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=v1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:vd,useActionState:vd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ds.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:js,useCacheRefresh:function(){return st().memoizedState=z1.bind(null,ue)}},qd={readContext:et,use:ar,useCallback:Md,useContext:et,useEffect:Ed,useImperativeHandle:Rd,useInsertionEffect:wd,useLayoutEffect:Td,useMemo:Dd,useReducer:lr,useRef:_d,useState:function(){return lr(nn)},useDebugValue:Ts,useDeferredValue:function(e,t){var n=ke();return Od(n,xe.memoizedState,e,t)},useTransition:function(){var e=lr(nn)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:ud,useId:Ud,useHostTransitionStatus:Ms,useFormState:xd,useActionState:xd,useOptimistic:function(e,t){var n=ke();return hd(n,xe,e,t)},useMemoCache:js,useCacheRefresh:kd},w1={readContext:et,use:ar,useCallback:Md,useContext:et,useEffect:Ed,useImperativeHandle:Rd,useInsertionEffect:wd,useLayoutEffect:Td,useMemo:Dd,useReducer:zs,useRef:_d,useState:function(){return zs(nn)},useDebugValue:Ts,useDeferredValue:function(e,t){var n=ke();return xe===null?As(n,e,t):Od(n,xe.memoizedState,e,t)},useTransition:function(){var e=zs(nn)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:ud,useId:Ud,useHostTransitionStatus:Ms,useFormState:jd,useActionState:jd,useOptimistic:function(e,t){var n=ke();return xe!==null?hd(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:js,useCacheRefresh:kd},Ha=null,$l=0;function cr(e){var t=$l;return $l+=1,Ha===null&&(Ha=[]),If(Ha,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function or(e,t){throw t.$$typeof===R?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vd(e){var t=e._init;return t(e._payload)}function Zd(e){function t(_,S){if(e){var z=_.deletions;z===null?(_.deletions=[S],_.flags|=16):z.push(S)}}function n(_,S){if(!e)return null;for(;S!==null;)t(_,S),S=S.sibling;return null}function a(_){for(var S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(_,S){return _=Ft(_,S),_.index=0,_.sibling=null,_}function r(_,S,z){return _.index=z,e?(z=_.alternate,z!==null?(z=z.index,z<S?(_.flags|=67108866,S):z):(_.flags|=67108866,S)):(_.flags|=1048576,S)}function f(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function h(_,S,z,B){return S===null||S.tag!==6?(S=Pu(z,_.mode,B),S.return=_,S):(S=i(S,z),S.return=_,S)}function b(_,S,z,B){var K=z.type;return K===L?C(_,S,z.props.children,B,z.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Vd(K)===S.type)?(S=i(S,z.props),Jl(S,z),S.return=_,S):(S=Qi(z.type,z.key,z.props,null,_.mode,B),Jl(S,z),S.return=_,S)}function E(_,S,z,B){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=Iu(z,_.mode,B),S.return=_,S):(S=i(S,z.children||[]),S.return=_,S)}function C(_,S,z,B,K){return S===null||S.tag!==7?(S=Qn(z,_.mode,B,K),S.return=_,S):(S=i(S,z),S.return=_,S)}function N(_,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Pu(""+S,_.mode,z),S.return=_,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case D:return z=Qi(S.type,S.key,S.props,null,_.mode,z),Jl(z,S),z.return=_,z;case H:return S=Iu(S,_.mode,z),S.return=_,S;case we:var B=S._init;return S=B(S._payload),N(_,S,z)}if(qe(S)||Ye(S))return S=Qn(S,_.mode,z,null),S.return=_,S;if(typeof S.then=="function")return N(_,cr(S),z);if(S.$$typeof===X)return N(_,Wi(_,S),z);or(_,S)}return null}function T(_,S,z,B){var K=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:h(_,S,""+z,B);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return z.key===K?b(_,S,z,B):null;case H:return z.key===K?E(_,S,z,B):null;case we:return K=z._init,z=K(z._payload),T(_,S,z,B)}if(qe(z)||Ye(z))return K!==null?null:C(_,S,z,B,null);if(typeof z.then=="function")return T(_,S,cr(z),B);if(z.$$typeof===X)return T(_,S,Wi(_,z),B);or(_,z)}return null}function A(_,S,z,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return _=_.get(z)||null,h(S,_,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return _=_.get(B.key===null?z:B.key)||null,b(S,_,B,K);case H:return _=_.get(B.key===null?z:B.key)||null,E(S,_,B,K);case we:var se=B._init;return B=se(B._payload),A(_,S,z,B,K)}if(qe(B)||Ye(B))return _=_.get(z)||null,C(S,_,B,K,null);if(typeof B.then=="function")return A(_,S,z,cr(B),K);if(B.$$typeof===X)return A(_,S,z,Wi(S,B),K);or(S,B)}return null}function ne(_,S,z,B){for(var K=null,se=null,$=S,te=S=0,Ke=null;$!==null&&te<z.length;te++){$.index>te?(Ke=$,$=null):Ke=$.sibling;var ge=T(_,$,z[te],B);if(ge===null){$===null&&($=Ke);break}e&&$&&ge.alternate===null&&t(_,$),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge,$=Ke}if(te===z.length)return n(_,$),me&&$n(_,te),K;if($===null){for(;te<z.length;te++)$=N(_,z[te],B),$!==null&&(S=r($,S,te),se===null?K=$:se.sibling=$,se=$);return me&&$n(_,te),K}for($=a($);te<z.length;te++)Ke=A($,_,te,z[te],B),Ke!==null&&(e&&Ke.alternate!==null&&$.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),se===null?K=Ke:se.sibling=Ke,se=Ke);return e&&$.forEach(function(Hn){return t(_,Hn)}),me&&$n(_,te),K}function I(_,S,z,B){if(z==null)throw Error(s(151));for(var K=null,se=null,$=S,te=S=0,Ke=null,ge=z.next();$!==null&&!ge.done;te++,ge=z.next()){$.index>te?(Ke=$,$=null):Ke=$.sibling;var Hn=T(_,$,ge.value,B);if(Hn===null){$===null&&($=Ke);break}e&&$&&Hn.alternate===null&&t(_,$),S=r(Hn,S,te),se===null?K=Hn:se.sibling=Hn,se=Hn,$=Ke}if(ge.done)return n(_,$),me&&$n(_,te),K;if($===null){for(;!ge.done;te++,ge=z.next())ge=N(_,ge.value,B),ge!==null&&(S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return me&&$n(_,te),K}for($=a($);!ge.done;te++,ge=z.next())ge=A($,_,te,ge.value,B),ge!==null&&(e&&ge.alternate!==null&&$.delete(ge.key===null?te:ge.key),S=r(ge,S,te),se===null?K=ge:se.sibling=ge,se=ge);return e&&$.forEach(function(Tb){return t(_,Tb)}),me&&$n(_,te),K}function je(_,S,z,B){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case D:e:{for(var K=z.key;S!==null;){if(S.key===K){if(K=z.type,K===L){if(S.tag===7){n(_,S.sibling),B=i(S,z.props.children),B.return=_,_=B;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Vd(K)===S.type){n(_,S.sibling),B=i(S,z.props),Jl(B,z),B.return=_,_=B;break e}n(_,S);break}else t(_,S);S=S.sibling}z.type===L?(B=Qn(z.props.children,_.mode,B,z.key),B.return=_,_=B):(B=Qi(z.type,z.key,z.props,null,_.mode,B),Jl(B,z),B.return=_,_=B)}return f(_);case H:e:{for(K=z.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(_,S.sibling),B=i(S,z.children||[]),B.return=_,_=B;break e}else{n(_,S);break}else t(_,S);S=S.sibling}B=Iu(z,_.mode,B),B.return=_,_=B}return f(_);case we:return K=z._init,z=K(z._payload),je(_,S,z,B)}if(qe(z))return ne(_,S,z,B);if(Ye(z)){if(K=Ye(z),typeof K!="function")throw Error(s(150));return z=K.call(z),I(_,S,z,B)}if(typeof z.then=="function")return je(_,S,cr(z),B);if(z.$$typeof===X)return je(_,S,Wi(_,z),B);or(_,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(_,S.sibling),B=i(S,z),B.return=_,_=B):(n(_,S),B=Pu(z,_.mode,B),B.return=_,_=B),f(_)):n(_,S)}return function(_,S,z,B){try{$l=0;var K=je(_,S,z,B);return Ha=null,K}catch($){if($===Ll||$===Pi)throw $;var se=gt(29,$,null,_.mode);return se.lanes=B,se.return=_,se}finally{}}}var La=Zd(!0),Xd=Zd(!1),At=U(null),Gt=null;function _n(e){var t=e.alternate;V(Ge,Ge.current&1),V(At,e),Gt===null&&(t===null||Ba.current!==null||t.memoizedState!==null)&&(Gt=e)}function Qd(e){if(e.tag===22){if(V(Ge,Ge.current),V(At,e),Gt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Gt=e)}}else zn()}function zn(){V(Ge,Ge.current),V(At,At.current)}function an(e){Y(At),Gt===e&&(Gt=null),Y(Ge)}var Ge=U(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Sc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Os(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),i=xn(a);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Yl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),i=xn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Yl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=xn(n);a.tag=2,t!=null&&(a.callback=t),t=Sn(e,a,n),t!==null&&(vt(t,e,n),Yl(t,e,n))}};function Kd(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Dl(n,a)||!Dl(i,r):!0}function $d(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Jd(e){dr(e)}function Wd(e){console.error(e)}function Fd(e){dr(e)}function hr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Pd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Bs(e,t,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){hr(e,t)},n}function Id(e){return e=xn(e),e.tag=3,e}function eh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){Pd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Pd(t,n,a),typeof i!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function T1(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ul(t,n,i,!0),n=At.current,n!==null){switch(n.tag){case 13:return Gt===null?lc():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===cs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),rc(e,a,i)),!1;case 22:return n.flags|=65536,a===cs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),rc(e,a,i)),!1}throw Error(s(435,n.tag))}return rc(e,a,i),lc(),!1}if(me)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==ns&&(e=Error(s(422),{cause:a}),Nl(zt(e,n)))):(a!==ns&&(t=Error(s(423),{cause:a}),Nl(zt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=zt(a,n),i=Bs(e.stateNode,a,i),ds(e,i),Ce!==4&&(Ce=2)),!1;var r=Error(s(520),{cause:a});if(r=zt(r,n),ni===null?ni=[r]:ni.push(r),Ce!==4&&(Ce=2),t===null)return!0;a=zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Bs(n.stateNode,a,e),ds(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Id(i),eh(i,e,n,a),ds(n,i),!1}n=n.return}while(n!==null);return!1}var th=Error(s(461)),Xe=!1;function Je(e,t,n,a){t.child=e===null?Xd(t,null,n,a):La(t,e.child,n,a)}function nh(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=bs(e,t,n,f,r,i),h=ys(),e!==null&&!Xe?(vs(e,t,i),ln(e,t,i)):(me&&h&&es(t),t.flags|=1,Je(e,t,a,i),t.child)}function ah(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Fu(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,lh(e,t,r,a,i)):(e=Qi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!qs(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Dl,n(f,a)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function lh(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Dl(r,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=r,qs(e,i))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,ln(e,t,i)}return Ns(e,t,n,a,i)}function ih(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return rh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,r!==null?r.cachePool:null),r!==null?ld(t,r):gs(),Qd(t);else return t.lanes=t.childLanes=536870912,rh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Fi(t,r.cachePool),ld(t,r),zn(),t.memoizedState=null):(e!==null&&Fi(t,null),gs(),zn());return Je(e,t,i,n),t.child}function rh(e,t,n,a){var i=ss();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Fi(t,null),gs(),Qd(t),e!==null&&Ul(e,t,a,!0),null}function gr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ns(e,t,n,a,i){return Pn(t),n=bs(e,t,n,a,void 0,i),a=ys(),e!==null&&!Xe?(vs(e,t,i),ln(e,t,i)):(me&&a&&es(t),t.flags|=1,Je(e,t,n,i),t.child)}function uh(e,t,n,a,i,r){return Pn(t),t.updateQueue=null,n=rd(t,a,n,i),id(e),a=ys(),e!==null&&!Xe?(vs(e,t,r),ln(e,t,r)):(me&&a&&es(t),t.flags|=1,Je(e,t,n,r),t.child)}function sh(e,t,n,a,i){if(Pn(t),t.stateNode===null){var r=Ra,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},os(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):Ra,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Os(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Cs.enqueueReplaceState(r,r.state,null),Vl(t,a,r,i),ql(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,b=ta(n,h);r.props=b;var E=r.context,C=n.contextType;f=Ra,typeof C=="object"&&C!==null&&(f=et(C));var N=n.getDerivedStateFromProps;C=typeof N=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,C||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||E!==f)&&$d(t,r,a,f),vn=!1;var T=t.memoizedState;r.state=T,Vl(t,a,r,i),ql(),E=t.memoizedState,h||T!==E||vn?(typeof N=="function"&&(Os(t,n,N,a),E=t.memoizedState),(b=vn||Kd(t,n,b,a,T,E,f))?(C||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),r.props=a,r.state=E,r.context=f,a=b):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,fs(e,t),f=t.memoizedProps,C=ta(n,f),r.props=C,N=t.pendingProps,T=r.context,E=n.contextType,b=Ra,typeof E=="object"&&E!==null&&(b=et(E)),h=n.getDerivedStateFromProps,(E=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==N||T!==b)&&$d(t,r,a,b),vn=!1,T=t.memoizedState,r.state=T,Vl(t,a,r,i),ql();var A=t.memoizedState;f!==N||T!==A||vn||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof h=="function"&&(Os(t,n,h,a),A=t.memoizedState),(C=vn||Kd(t,n,C,a,T,A,b)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,b)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=b,a=C):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,gr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):Je(e,t,n,i),t.memoizedState=r.state,e=t.child):e=ln(e,t,i),e}function ch(e,t,n,a){return Bl(),t.flags|=256,Je(e,t,n,a),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ks(e){return{baseLanes:e,cachePool:Wf()}}function Hs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function oh(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(i?_n(t):zn(),me){var h=Oe,b;if(b=h){e:{for(b=h,h=Lt;b.nodeType!==8;){if(!h){h=null;break e}if(b=Bt(b.nextSibling),b===null){h=null;break e}}h=b}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Pt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},b=gt(18,null,null,0),b.stateNode=h,b.return=t,t.child=b,lt=t,Oe=null,b=!0):b=!1}b||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Sc(h)?t.lanes=32:t.lanes=536870912,null;an(t)}return h=a.children,a=a.fallback,i?(zn(),i=t.mode,h=mr({mode:"hidden",children:h},i),a=Qn(a,i,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,i=t.child,i.memoizedState=ks(n),i.childLanes=Hs(e,f,n),t.memoizedState=Us,a):(_n(t),Ls(t,h))}if(b=e.memoizedState,b!==null&&(h=b.dehydrated,h!==null)){if(r)t.flags&256?(_n(t),t.flags&=-257,t=Gs(e,t,n)):t.memoizedState!==null?(zn(),t.child=e.child,t.flags|=128,t=null):(zn(),i=a.fallback,h=t.mode,a=mr({mode:"visible",children:a.children},h),i=Qn(i,h,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,La(t,e.child,null,n),a=t.child,a.memoizedState=ks(n),a.childLanes=Hs(e,f,n),t.memoizedState=Us,t=i);else if(_n(t),Sc(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var E=f.dgst;f=E,a=Error(s(419)),a.stack="",a.digest=f,Nl({value:a,source:null,stack:null}),t=Gs(e,t,n)}else if(Xe||Ul(e,t,n,!1),f=(n&e.childLanes)!==0,Xe||f){if(f=Ee,f!==null&&(a=n&-n,a=(a&42)!==0?1:ju(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==b.retryLane))throw b.retryLane=a,Aa(e,a),vt(f,e,a),th;h.data==="$?"||lc(),t=Gs(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Oe=Bt(h.nextSibling),lt=t,me=!0,Jn=null,Lt=!1,e!==null&&(wt[Tt++]=Pt,wt[Tt++]=It,wt[Tt++]=Kn,Pt=e.id,It=e.overflow,Kn=t),t=Ls(t,a.children),t.flags|=4096);return t}return i?(zn(),i=a.fallback,h=t.mode,b=e.child,E=b.sibling,a=Ft(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,E!==null?i=Ft(E,i):(i=Qn(i,h,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,h=e.child.memoizedState,h===null?h=ks(n):(b=h.cachePool,b!==null?(E=Le._currentValue,b=b.parent!==E?{parent:E,pool:E}:b):b=Wf(),h={baseLanes:h.baseLanes|n,cachePool:b}),i.memoizedState=h,i.childLanes=Hs(e,f,n),t.memoizedState=Us,a):(_n(t),n=e.child,e=n.sibling,n=Ft(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Ls(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Gs(e,t,n){return La(t,e.child,null,n),e=Ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ls(e.return,t,n)}function Ys(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function dh(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if(Je(e,t,a.children,n),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,n,t);else if(e.tag===19)fh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Ge,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ys(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ys(t,!0,n,null,r);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ul(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function A1(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),yn(t,Le,e.memoizedState.cache),Bl();break;case 27:case 5:Gn(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:yn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(_n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?oh(e,t,n):(_n(t),e=ln(e,t,n),e!==null?e.sibling:null);_n(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ul(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return dh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,ih(e,t,n);case 24:yn(t,Le,e.memoizedState.cache)}return ln(e,t,n)}function hh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!qs(e,n)&&(t.flags&128)===0)return Xe=!1,A1(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,me&&(t.flags&1048576)!==0&&Vf(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")Fu(a)?(e=ta(a,e),t.tag=1,t=sh(null,t,a,e,n)):(t.tag=0,t=Ns(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===ae){t.tag=11,t=nh(null,t,a,e,n);break e}else if(i===W){t.tag=14,t=ah(null,t,a,e,n);break e}}throw t=Kt(a)||a,Error(s(306,t,""))}}return t;case 0:return Ns(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ta(a,t.pendingProps),sh(e,t,a,i,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,fs(e,t),Vl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,yn(t,Le,a),a!==r.cache&&is(t,[Le],n,!0),ql(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ch(e,t,a,n);break e}else if(a!==i){i=zt(Error(s(424)),t),Nl(i),t=ch(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Bt(e.firstChild),lt=t,me=!0,Jn=null,Lt=!0,n=Xd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bl(),a===i){t=ln(e,t,n);break e}Je(e,t,a,n)}t=t.child}return t;case 26:return gr(e,t),e===null?(n=bg(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,a=Rr(ee.current).createElement(n),a[Ie]=t,a[rt]=e,Fe(a,n,e),Ze(a),t.stateNode=a):t.memoizedState=bg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&me&&(a=t.stateNode=gg(t.type,t.pendingProps,ee.current),lt=t,Lt=!0,i=Oe,Cn(t.type)?(jc=i,Oe=Bt(a.firstChild)):Oe=i),Je(e,t,t.pendingProps.children,n),gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((i=a=Oe)&&(a=nb(a,t.type,t.pendingProps,Lt),a!==null?(t.stateNode=a,lt=t,Oe=Bt(a.firstChild),Lt=!1,i=!0):i=!1),i||Wn(t)),Gn(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,yc(i,r)?a=null:f!==null&&yc(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=bs(e,t,x1,null,null,n),fi._currentValue=i),gr(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&me&&((e=n=Oe)&&(n=ab(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,lt=t,Oe=null,e=!0):e=!1),e||Wn(t)),null;case 13:return oh(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=La(t,null,a,n):Je(e,t,a,n),t.child;case 11:return nh(e,t,t.type,t.pendingProps,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,yn(t,t.type,a.value),Je(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Pn(t),i=et(i),a=a(i),t.flags|=1,Je(e,t,a,n),t.child;case 14:return ah(e,t,t.type,t.pendingProps,n);case 15:return lh(e,t,t.type,t.pendingProps,n);case 19:return dh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=mr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ft(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return ih(e,t,n);case 24:return Pn(t),a=et(Le),e===null?(i=ss(),i===null&&(i=Ee,r=rs(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},os(t),yn(t,Le,i)):((e.lanes&n)!==0&&(fs(e,t),Vl(t,null,null,n),ql()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),yn(t,Le,a)):(a=r.cache,yn(t,Le,a),a!==i.cache&&is(t,[Le],n,!0))),Je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function rn(e){e.flags|=4}function gh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(t)){if(t=At.current,t!==null&&((he&4194048)===he?Gt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Gt))throw Gl=cs,Ff;e.flags|=8192}}function pr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xo():536870912,e.lanes|=t,Va|=t)}function Wl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function R1(e,t,n){var a=t.pendingProps;switch(ts(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tn(Le),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Cl(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qf())),De(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(De(t),gh(t,n)):(De(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),De(t),gh(t,n)):(De(t),t.flags&=-16777217):(e.memoizedProps!==a&&rn(t),De(t),t.flags&=-16777217),null;case 27:$t(t),n=ee.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return De(t),null}e=F.current,Cl(t)?Zf(t):(e=gg(i,a,n),t.stateNode=e,rn(t))}return De(t),null;case 5:if($t(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return De(t),null}if(e=F.current,Cl(t))Zf(t);else{switch(i=Rr(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Ie]=t,e[rt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,Cl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=lt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||ug(e.nodeValue,n)),e||Wn(t)}else e=Rr(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Cl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ie]=t}else Bl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(an(t),t):(an(t),null)}if(an(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),pr(t,t.updateQueue),De(t),null;case 4:return Pe(),e===null&&hc(t.stateNode.containerInfo),De(t),null;case 10:return tn(t.type),De(t),null;case 19:if(Y(Ge),i=t.memoizedState,i===null)return De(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Wl(i,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=fr(e),r!==null){for(t.flags|=128,Wl(i,!1),e=r.updateQueue,t.updateQueue=e,pr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)qf(n,e),n=n.sibling;return V(Ge,Ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ht()>vr&&(t.flags|=128,a=!0,Wl(i,!1),t.lanes=4194304)}else{if(!a)if(e=fr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,pr(t,e),Wl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!me)return De(t),null}else 2*Ht()-i.renderingStartTime>vr&&n!==536870912&&(t.flags|=128,a=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ht(),t.sibling=null,e=Ge.current,V(Ge,a?e&1|2:e&1),t):(De(t),null);case 22:case 23:return an(t),ms(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&pr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Y(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(Le),De(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function M1(e,t){switch(ts(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(Le),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $t(t),null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Bl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Ge),null;case 4:return Pe(),null;case 10:return tn(t.type),null;case 22:case 23:return an(t),ms(),e!==null&&Y(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(Le),null;case 25:return null;default:return null}}function mh(e,t){switch(ts(t),t.tag){case 3:tn(Le),Pe();break;case 26:case 27:case 5:$t(t);break;case 4:Pe();break;case 13:an(t);break;case 19:Y(Ge);break;case 10:tn(t.type);break;case 22:case 23:an(t),ms(),e!==null&&Y(In);break;case 24:tn(Le)}}function Fl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(h){ze(t,t.return,h)}}function En(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=t;var b=n,E=h;try{E()}catch(C){ze(i,b,C)}}}a=a.next}while(a!==r)}}catch(C){ze(t,t.return,C)}}function ph(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ad(t,n)}catch(a){ze(e,e.return,a)}}}function bh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ze(e,t,a)}}function Pl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){ze(e,t,i)}}function Yt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){ze(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ze(e,t,i)}else n.current=null}function yh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){ze(e,e.return,i)}}function Vs(e,t,n){try{var a=e.stateNode;F1(a,e.type,n,t),a[rt]=t}catch(i){ze(e,e.return,i)}}function vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xs(e,t,n),e=e.sibling;e!==null;)Xs(e,t,n),e=e.sibling}function br(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(br(e,t,n),e=e.sibling;e!==null;)br(e,t,n),e=e.sibling}function xh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fe(t,a,n),t[Ie]=e,t[rt]=n}catch(r){ze(e,e.return,r)}}var un=!1,Ne=!1,Qs=!1,Sh=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function D1(e,t){if(e=e.containerInfo,pc=Nr,e=Of(e),Zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,b=-1,E=0,C=0,N=e,T=null;t:for(;;){for(var A;N!==n||i!==0&&N.nodeType!==3||(h=f+i),N!==r||a!==0&&N.nodeType!==3||(b=f+a),N.nodeType===3&&(f+=N.nodeValue.length),(A=N.firstChild)!==null;)T=N,N=A;for(;;){if(N===e)break t;if(T===n&&++E===i&&(h=f),T===r&&++C===a&&(b=f),(A=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=A}n=h===-1||b===-1?null:{start:h,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:e,selectionRange:n},Nr=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){ze(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function jh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:wn(e,n),a&4&&Fl(5,n);break;case 1:if(wn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){ze(n,n.return,f)}else{var i=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){ze(n,n.return,f)}}a&64&&ph(n),a&512&&Pl(n,n.return);break;case 3:if(wn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ad(e,t)}catch(f){ze(n,n.return,f)}}break;case 27:t===null&&a&4&&xh(n);case 26:case 5:wn(e,n),t===null&&a&4&&yh(n),a&512&&Pl(n,n.return);break;case 12:wn(e,n);break;case 13:wn(e,n),a&4&&Eh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=G1.bind(null,n),lb(e,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){t=t!==null&&t.memoizedState!==null||Ne,i=un;var r=Ne;un=a,(Ne=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):wn(e,n),un=i,Ne=r}break;case 30:break;default:wn(e,n)}}function _h(e){var t=e.alternate;t!==null&&(e.alternate=null,_h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ct=!1;function sn(e,t,n){for(n=n.child;n!==null;)zh(e,t,n),n=n.sibling}function zh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 26:Ne||Yt(n,t),sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Yt(n,t);var a=Ae,i=ct;Cn(n.type)&&(Ae=n.stateNode,ct=!1),sn(e,t,n),ui(n.stateNode),Ae=a,ct=i;break;case 5:Ne||Yt(n,t);case 6:if(a=Ae,i=ct,Ae=null,sn(e,t,n),Ae=a,ct=i,Ae!==null)if(ct)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){ze(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){ze(n,t,r)}break;case 18:Ae!==null&&(ct?(e=Ae,dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),mi(e)):dg(Ae,n.stateNode));break;case 4:a=Ae,i=ct,Ae=n.stateNode.containerInfo,ct=!0,sn(e,t,n),Ae=a,ct=i;break;case 0:case 11:case 14:case 15:Ne||En(2,n,t),Ne||En(4,n,t),sn(e,t,n);break;case 1:Ne||(Yt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&bh(n,t,a)),sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:Ne=(a=Ne)||n.memoizedState!==null,sn(e,t,n),Ne=a;break;default:sn(e,t,n)}}function Eh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mi(e)}catch(n){ze(t,t.return,n)}}function O1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sh),t;default:throw Error(s(435,e.tag))}}function Ks(e,t){var n=O1(e);t.forEach(function(a){var i=Y1.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function mt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Cn(h.type)){Ae=h.stateNode,ct=!1;break e}break;case 5:Ae=h.stateNode,ct=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,ct=!0;break e}h=h.return}if(Ae===null)throw Error(s(160));zh(r,f,i),Ae=null,ct=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)wh(t,e),t=t.sibling}var Ct=null;function wh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),a&4&&(En(3,e,e.return),Fl(3,e),En(5,e,e.return));break;case 1:mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),a&64&&un&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ct;if(mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[jl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Ze(r),a=r;break e;case"link":var f=xg("link","href",i).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;case"meta":if(f=xg("meta","content",i).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;default:throw Error(s(468,a))}r[Ie]=e,Ze(r),a=r}e.stateNode=a}else Sg(i,e.type,e.stateNode);else e.stateNode=vg(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Sg(i,e.type,e.stateNode):vg(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vs(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),n!==null&&a&4&&Vs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),pt(e),a&512&&(Ne||n===null||Yt(n,n.return)),e.flags&32){i=e.stateNode;try{Sa(i,"")}catch(A){ze(e,e.return,A)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Vs(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Qs=!0);break;case 6:if(mt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(A){ze(e,e.return,A)}}break;case 3:if(Or=null,i=Ct,Ct=Mr(t.containerInfo),mt(t,e),Ct=i,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(A){ze(e,e.return,A)}Qs&&(Qs=!1,Th(e));break;case 4:a=Ct,Ct=Mr(e.stateNode.containerInfo),mt(t,e),pt(e),Ct=a;break;case 12:mt(t,e),pt(e);break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Is=Ht()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ks(e,a)));break;case 22:i=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,E=un,C=Ne;if(un=E||i,Ne=C||b,mt(t,e),Ne=C,un=E,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||b||un||Ne||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(r=b.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=b.stateNode;var N=b.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null;h.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(A){ze(b,b.return,A)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(A){ze(b,b.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ks(e,n))));break;case 19:mt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ks(e,a)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(vh(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,r=Zs(e);br(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(Sa(f,""),n.flags&=-33);var h=Zs(e);br(e,h,f);break;case 3:case 4:var b=n.stateNode.containerInfo,E=Zs(e);Xs(e,E,b);break;default:throw Error(s(161))}}catch(C){ze(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Th(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Th(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jh(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),na(t);break;case 1:Yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&bh(t,t.return,n),na(t);break;case 27:ui(t.stateNode);case 26:case 5:Yt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(i,r,n),Fl(4,r);break;case 1:if(Tn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){ze(a,a.return,E)}if(a=r,i=a.updateQueue,i!==null){var h=a.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)nd(b[i],h)}catch(E){ze(a,a.return,E)}}n&&f&64&&ph(r),Pl(r,r.return);break;case 27:xh(r);case 26:case 5:Tn(i,r,n),n&&a===null&&f&4&&yh(r),Pl(r,r.return);break;case 12:Tn(i,r,n);break;case 13:Tn(i,r,n),n&&f&4&&Eh(i,r);break;case 22:r.memoizedState===null&&Tn(i,r,n),Pl(r,r.return);break;case 30:break;default:Tn(i,r,n)}t=t.sibling}}function $s(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&kl(n))}function Js(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ah(e,t,n,a),t=t.sibling}function Ah(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),i&2048&&Fl(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e)));break;case 12:if(i&2048){qt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ze(t,t.return,b)}}else qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?qt(e,t,n,a):Il(e,t):r._visibility&2?qt(e,t,n,a):(r._visibility|=2,Ga(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&$s(f,t);break;case 24:qt(e,t,n,a),i&2048&&Js(t.alternate,t);break;default:qt(e,t,n,a)}}function Ga(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,b=a,E=f.flags;switch(f.tag){case 0:case 11:case 15:Ga(r,f,h,b,i),Fl(8,f);break;case 23:break;case 22:var C=f.stateNode;f.memoizedState!==null?C._visibility&2?Ga(r,f,h,b,i):Il(r,f):(C._visibility|=2,Ga(r,f,h,b,i)),i&&E&2048&&$s(f.alternate,f);break;case 24:Ga(r,f,h,b,i),i&&E&2048&&Js(f.alternate,f);break;default:Ga(r,f,h,b,i)}t=t.sibling}}function Il(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Il(n,a),i&2048&&$s(a.alternate,a);break;case 24:Il(n,a),i&2048&&Js(a.alternate,a);break;default:Il(n,a)}t=t.sibling}}var ei=8192;function Ya(e){if(e.subtreeFlags&ei)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 26:Ya(e),e.flags&ei&&e.memoizedState!==null&&bb(Ct,e.memoizedState,e.memoizedProps);break;case 5:Ya(e);break;case 3:case 4:var t=Ct;Ct=Mr(e.stateNode.containerInfo),Ya(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ei,ei=16777216,Ya(e),ei=t):Ya(e));break;default:Ya(e)}}function Mh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Oh(a,e)}Mh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dh(e),e=e.sibling}function Dh(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&En(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yr(e)):ti(e);break;default:ti(e)}}function yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Oh(a,e)}Mh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),yr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yr(t));break;default:yr(t)}e=e.sibling}}function Oh(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:kl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var i=a.sibling,r=a.return;if(_h(a),a===n){Qe=null;break e}if(i!==null){i.return=r,Qe=i;break e}Qe=r}}}var C1={getCacheForType:function(e){var t=et(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},B1=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ee=null,fe=null,he=0,ve=0,bt=null,An=!1,qa=!1,Ws=!1,cn=0,Ce=0,Rn=0,aa=0,Fs=0,Rt=0,Va=0,ni=null,ot=null,Ps=!1,Is=0,vr=1/0,xr=null,Mn=null,We=0,Dn=null,Za=null,Xa=0,ec=0,tc=null,Ch=null,ai=0,nc=null;function yt(){if((ye&2)!==0&&he!==0)return he&-he;if(O.T!==null){var e=Oa;return e!==0?e:cc()}return $o()}function Bh(){Rt===0&&(Rt=(he&536870912)===0||me?Zo():536870912);var e=At.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Qa(e,0),On(e,he,Rt,!1)),Sl(e,n),((ye&2)===0||e!==Ee)&&(e===Ee&&((ye&2)===0&&(aa|=n),Ce===4&&On(e,he,Rt,!1)),Vt(e))}function Nh(e,t,n){if((ye&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||xl(e,t),i=a?k1(e,t):ic(e,t,!0),r=a;do{if(i===0){qa&&!a&&On(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!N1(n)){i=ic(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;i=ni;var b=h.current.memoizedState.isDehydrated;if(b&&(Qa(h,f).flags|=256),f=ic(h,f,!1),f!==2){if(Ws&&!b){h.errorRecoveryDisabledLanes|=r,aa|=r,i=4;break e}r=ot,ot=i,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Qa(e,0),On(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:On(a,t,Rt,!An);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Is+300-Ht(),10<i)){if(On(a,t,Rt,!An),Di(a,0,!0)!==0)break e;a.timeoutHandle=og(Uh.bind(null,a,n,ot,xr,Ps,t,Rt,aa,Va,An,r,2,-0,0),i);break e}Uh(a,n,ot,xr,Ps,t,Rt,aa,Va,An,r,0,-0,0)}}break}while(!0);Vt(e)}function Uh(e,t,n,a,i,r,f,h,b,E,C,N,T,A){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(oi={stylesheets:null,count:0,unsuspend:pb},Rh(t),N=yb(),N!==null)){e.cancelPendingCommit=N(Vh.bind(null,e,t,r,n,a,i,f,h,b,C,1,T,A)),On(e,r,f,!E);return}Vh(e,t,r,n,a,i,f,h,b)}function N1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t,n,a){t&=~Fs,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-dt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&Qo(e,n,t)}function Sr(){return(ye&6)===0?(li(0),!1):!0}function ac(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,en=Fn=null,xs(e),Ha=null,$l=0,e=fe;for(;e!==null;)mh(e.alternate,e),e=e.return;fe=null}}function Qa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,I1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ac(),Ee=e,fe=n=Ft(e.current,null),he=t,ve=0,bt=null,An=!1,qa=xl(e,t),Ws=!1,Va=Rt=Fs=aa=Rn=Ce=0,ot=ni=null,Ps=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-dt(a),r=1<<i;t|=e[i],a&=~r}return cn=t,Vi(),n}function kh(e,t){ue=null,O.H=sr,t===Ll||t===Pi?(t=ed(),ve=3):t===Ff?(t=ed(),ve=4):ve=t===th?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Ce=1,hr(e,zt(t,e.current)))}function Hh(){var e=O.H;return O.H=sr,e===null?sr:e}function Lh(){var e=O.A;return O.A=C1,e}function lc(){Ce=4,An||(he&4194048)!==he&&At.current!==null||(qa=!0),(Rn&134217727)===0&&(aa&134217727)===0||Ee===null||On(Ee,he,Rt,!1)}function ic(e,t,n){var a=ye;ye|=2;var i=Hh(),r=Lh();(Ee!==e||he!==t)&&(xr=null,Qa(e,t)),t=!1;var f=Ce;e:do try{if(ve!==0&&fe!==null){var h=fe,b=bt;switch(ve){case 8:ac(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var E=ve;if(ve=0,bt=null,Ka(e,h,b,E),n&&qa){f=0;break e}break;default:E=ve,ve=0,bt=null,Ka(e,h,b,E)}}U1(),f=Ce;break}catch(C){kh(e,C)}while(!0);return t&&e.shellSuspendCounter++,en=Fn=null,ye=a,O.H=i,O.A=r,fe===null&&(Ee=null,he=0,Vi()),f}function U1(){for(;fe!==null;)Gh(fe)}function k1(e,t){var n=ye;ye|=2;var a=Hh(),i=Lh();Ee!==e||he!==t?(xr=null,vr=Ht()+500,Qa(e,t)):qa=xl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,Ka(e,t,r,1);break;case 2:case 9:if(Pf(r)){ve=0,bt=null,Yh(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),Vt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Pf(r)?(ve=0,bt=null,Yh(t)):(ve=0,bt=null,Ka(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||jg(f)){ve=0,bt=null;var b=h.sibling;if(b!==null)fe=b;else{var E=h.return;E!==null?(fe=E,jr(E)):fe=null}break t}}ve=0,bt=null,Ka(e,t,r,5);break;case 6:ve=0,bt=null,Ka(e,t,r,6);break;case 8:ac(),Ce=6;break e;default:throw Error(s(462))}}H1();break}catch(C){kh(e,C)}while(!0);return en=Fn=null,O.H=a,O.A=i,ye=n,fe!==null?0:(Ee=null,he=0,Vi(),Ce)}function H1(){for(;fe!==null&&!rp();)Gh(fe)}function Gh(e){var t=hh(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?jr(e):fe=t}function Yh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uh(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=uh(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:xs(t);default:mh(n,t),t=fe=qf(t,cn),t=hh(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?jr(e):fe=t}function Ka(e,t,n,a){en=Fn=null,xs(t),Ha=null,$l=0;var i=t.return;try{if(T1(e,i,t,n,he)){Ce=1,hr(e,zt(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;Ce=1,hr(e,zt(n,e.current)),fe=null;return}t.flags&32768?(me||a===1?e=!0:qa||(he&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),qh(t,e)):jr(t)}function jr(e){var t=e;do{if((t.flags&32768)!==0){qh(t,An);return}e=t.return;var n=R1(t.alternate,t,cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ce===0&&(Ce=5)}function qh(e,t){do{var n=M1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ce=6,fe=null}function Vh(e,t,n,a,i,r,f,h,b){e.cancelPendingCommit=null;do _r();while(We!==0);if((ye&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=Ju,pp(e,n,r,f,h,b),e===Ee&&(fe=Ee=null,he=0),Za=t,Dn=e,Xa=n,ec=r,tc=i,Ch=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,q1(Ai,function(){return $h(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,i=q.p,q.p=2,f=ye,ye|=4;try{D1(e,t,n)}finally{ye=f,q.p=i,O.T=a}}We=1,Zh(),Xh(),Qh()}}function Zh(){if(We===1){We=0;var e=Dn,t=Za,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var a=q.p;q.p=2;var i=ye;ye|=4;try{wh(t,e);var r=bc,f=Of(e.containerInfo),h=r.focusedElem,b=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&Df(h.ownerDocument.documentElement,h)){if(b!==null&&Zu(h)){var E=b.start,C=b.end;if(C===void 0&&(C=E),"selectionStart"in h)h.selectionStart=E,h.selectionEnd=Math.min(C,h.value.length);else{var N=h.ownerDocument||document,T=N&&N.defaultView||window;if(T.getSelection){var A=T.getSelection(),ne=h.textContent.length,I=Math.min(b.start,ne),je=b.end===void 0?I:Math.min(b.end,ne);!A.extend&&I>je&&(f=je,je=I,I=f);var _=Mf(h,I),S=Mf(h,je);if(_&&S&&(A.rangeCount!==1||A.anchorNode!==_.node||A.anchorOffset!==_.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var z=N.createRange();z.setStart(_.node,_.offset),A.removeAllRanges(),I>je?(A.addRange(z),A.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),A.addRange(z))}}}}for(N=[],A=h;A=A.parentNode;)A.nodeType===1&&N.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<N.length;h++){var B=N[h];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Nr=!!pc,bc=pc=null}finally{ye=i,q.p=a,O.T=n}}e.current=t,We=2}}function Xh(){if(We===2){We=0;var e=Dn,t=Za,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var a=q.p;q.p=2;var i=ye;ye|=4;try{jh(e,t.alternate,t)}finally{ye=i,q.p=a,O.T=n}}We=3}}function Qh(){if(We===4||We===3){We=0,up();var e=Dn,t=Za,n=Xa,a=Ch;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Za=Dn=null,Kh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Mn=null),_u(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,i=q.p,q.p=2,O.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{O.T=t,q.p=i}}(Xa&3)!==0&&_r(),Vt(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===nc?ai++:(ai=0,nc=e):ai=0,li(0)}}function Kh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kl(t)))}function _r(e){return Zh(),Xh(),Qh(),$h()}function $h(){if(We!==5)return!1;var e=Dn,t=ec;ec=0;var n=_u(Xa),a=O.T,i=q.p;try{q.p=32>n?32:n,O.T=null,n=tc,tc=null;var r=Dn,f=Xa;if(We=0,Za=Dn=null,Xa=0,(ye&6)!==0)throw Error(s(331));var h=ye;if(ye|=4,Dh(r.current),Ah(r,r.current,f,n),ye=h,li(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(vl,r)}catch{}return!0}finally{q.p=i,O.T=a,Kh(e,t)}}function Jh(e,t,n){t=zt(n,t),t=Bs(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(Sl(e,2),Vt(e))}function ze(e,t,n){if(e.tag===3)Jh(e,e,n);else for(;t!==null;){if(t.tag===3){Jh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){e=zt(n,e),n=Id(2),a=Sn(t,n,2),a!==null&&(eh(n,a,t,e),Sl(a,2),Vt(a));break}}t=t.return}}function rc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new B1;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Ws=!0,i.add(n),e=L1.bind(null,e,t,n),t.then(e,e))}function L1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(he&n)===n&&(Ce===4||Ce===3&&(he&62914560)===he&&300>Ht()-Is?(ye&2)===0&&Qa(e,0):Fs|=n,Va===he&&(Va=0)),Vt(e)}function Wh(e,t){t===0&&(t=Xo()),e=Aa(e,t),e!==null&&(Sl(e,t),Vt(e))}function G1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wh(e,n)}function Y1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Wh(e,n)}function q1(e,t){return vu(e,t)}var zr=null,$a=null,uc=!1,Er=!1,sc=!1,la=0;function Vt(e){e!==$a&&e.next===null&&($a===null?zr=$a=e:$a=$a.next=e),Er=!0,uc||(uc=!0,Z1())}function li(e,t){if(!sc&&Er){sc=!0;do for(var n=!1,a=zr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=i&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,eg(a,r))}else r=he,r=Di(a,a===Ee?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||xl(a,r)||(n=!0,eg(a,r));a=a.next}while(n);sc=!1}}function V1(){Fh()}function Fh(){Er=uc=!1;var e=0;la!==0&&(P1()&&(e=la),la=0);for(var t=Ht(),n=null,a=zr;a!==null;){var i=a.next,r=Ph(a,t);r===0?(a.next=null,n===null?zr=i:n.next=i,i===null&&($a=n)):(n=a,(e!==0||(r&3)!==0)&&(Er=!0)),a=i}li(e)}function Ph(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,b=i[f];b===-1?((h&n)===0||(h&a)!==0)&&(i[f]=mp(h,t)):b<=t&&(e.expiredLanes|=h),r&=~h}if(t=Ee,n=he,n=Di(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&xu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&xu(a),_u(n)){case 2:case 8:n=qo;break;case 32:n=Ai;break;case 268435456:n=Vo;break;default:n=Ai}return a=Ih.bind(null,e),n=vu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&xu(a),e.callbackPriority=2,e.callbackNode=null,2}function Ih(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var a=he;return a=Di(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Nh(e,a,t),Ph(e,Ht()),e.callbackNode!=null&&e.callbackNode===n?Ih.bind(null,e):null)}function eg(e,t){if(_r())return null;Nh(e,t,!0)}function Z1(){eb(function(){(ye&6)!==0?vu(Yo,V1):Fh()})}function cc(){return la===0&&(la=Zo()),la}function tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ui(""+e)}function ng(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function X1(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=tg((i[rt]||null).action),f=a.submitter;f&&(t=(t=f[rt]||null)?tg(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Gi("action","action",null,a,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var b=f?ng(i,f):new FormData(i);Rs(n,{pending:!0,data:b,method:i.method,action:r},null,b)}}else typeof r=="function"&&(h.preventDefault(),b=f?ng(i,f):new FormData(i),Rs(n,{pending:!0,data:b,method:i.method,action:r},r,b))},currentTarget:i}]})}}for(var oc=0;oc<$u.length;oc++){var fc=$u[oc],Q1=fc.toLowerCase(),K1=fc[0].toUpperCase()+fc.slice(1);Ot(Q1,"on"+K1)}Ot(Nf,"onAnimationEnd"),Ot(Uf,"onAnimationIteration"),Ot(kf,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(o1,"onTransitionRun"),Ot(f1,"onTransitionStart"),Ot(d1,"onTransitionCancel"),Ot(Hf,"onTransitionEnd"),ya("onMouseEnter",["mouseout","mouseover"]),ya("onMouseLeave",["mouseout","mouseover"]),ya("onPointerEnter",["pointerout","pointerover"]),ya("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function ag(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],b=h.instance,E=h.currentTarget;if(h=h.listener,b!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=E;try{r(i)}catch(C){dr(C)}i.currentTarget=null,r=b}else for(f=0;f<a.length;f++){if(h=a[f],b=h.instance,E=h.currentTarget,h=h.listener,b!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=E;try{r(i)}catch(C){dr(C)}i.currentTarget=null,r=b}}}}function de(e,t){var n=t[zu];n===void 0&&(n=t[zu]=new Set);var a=e+"__bubble";n.has(a)||(lg(t,e,2,!1),n.add(a))}function dc(e,t,n){var a=0;t&&(a|=4),lg(n,e,a,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[wr]){e[wr]=!0,Wo.forEach(function(n){n!=="selectionchange"&&($1.has(n)||dc(n,!1,e),dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,dc("selectionchange",!1,t))}}function lg(e,t,n,a){switch(Ag(t)){case 2:var i=Sb;break;case 8:i=jb;break;default:i=Tc}n=i.bind(null,t,n,e),i=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gc(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=a.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=ma(h),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){a=r=f;continue e}h=h.parentNode}}a=a.return}ff(function(){var E=r,C=Cu(n),N=[];e:{var T=Lf.get(e);if(T!==void 0){var A=Gi,ne=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":A=qp;break;case"focusin":ne="focus",A=Lu;break;case"focusout":ne="blur",A=Lu;break;case"beforeblur":case"afterblur":A=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Xp;break;case Nf:case Uf:case kf:A=Cp;break;case Hf:A=Kp;break;case"scroll":case"scrollend":A=Ap;break;case"wheel":A=Jp;break;case"copy":case"cut":case"paste":A=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=pf;break;case"toggle":case"beforetoggle":A=Fp}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),_=I?T!==null?T+"Capture":null:T;I=[];for(var S=E,z;S!==null;){var B=S;if(z=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||z===null||_===null||(B=zl(S,_),B!=null&&I.push(ri(S,B,z))),je)break;S=S.return}0<I.length&&(T=new A(T,ne,null,n,C),N.push({event:T,listeners:I}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&n!==Ou&&(ne=n.relatedTarget||n.fromElement)&&(ma(ne)||ne[ga]))break e;if((A||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,A?(ne=n.relatedTarget||n.toElement,A=E,ne=ne?ma(ne):null,ne!==null&&(je=g(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(A=null,ne=E),A!==ne)){if(I=gf,B="onMouseLeave",_="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=pf,B="onPointerLeave",_="onPointerEnter",S="pointer"),je=A==null?T:_l(A),z=ne==null?T:_l(ne),T=new I(B,S+"leave",A,n,C),T.target=je,T.relatedTarget=z,B=null,ma(C)===E&&(I=new I(_,S+"enter",ne,n,C),I.target=z,I.relatedTarget=je,B=I),je=B,A&&ne)t:{for(I=A,_=ne,S=0,z=I;z;z=Ja(z))S++;for(z=0,B=_;B;B=Ja(B))z++;for(;0<S-z;)I=Ja(I),S--;for(;0<z-S;)_=Ja(_),z--;for(;S--;){if(I===_||_!==null&&I===_.alternate)break t;I=Ja(I),_=Ja(_)}I=null}else I=null;A!==null&&ig(N,T,A,I,!1),ne!==null&&je!==null&&ig(N,je,ne,I,!0)}}e:{if(T=E?_l(E):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var K=zf;else if(jf(T))if(Ef)K=u1;else{K=i1;var se=l1}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&Du(E.elementType)&&(K=zf):K=r1;if(K&&(K=K(e,E))){_f(N,K,n,C);break e}se&&se(e,T,E),e==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Mu(T,"number",T.value)}switch(se=E?_l(E):window,e){case"focusin":(jf(se)||se.contentEditable==="true")&&(Ea=se,Xu=E,Ol=null);break;case"focusout":Ol=Xu=Ea=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Cf(N,n,C);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":Cf(N,n,C)}var $;if(Yu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else za?xf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(bf&&n.locale!=="ko"&&(za||te!=="onCompositionStart"?te==="onCompositionEnd"&&za&&($=df()):(bn=C,Uu="value"in bn?bn.value:bn.textContent,za=!0)),se=Tr(E,te),0<se.length&&(te=new mf(te,e,null,n,C),N.push({event:te,listeners:se}),$?te.data=$:($=Sf(n),$!==null&&(te.data=$)))),($=Ip?e1(e,n):t1(e,n))&&(te=Tr(E,"onBeforeInput"),0<te.length&&(se=new mf("onBeforeInput","beforeinput",null,n,C),N.push({event:se,listeners:te}),se.data=$)),X1(N,e,E,n,C)}ag(N,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=zl(e,n),i!=null&&a.unshift(ri(e,i,r)),i=zl(e,t),i!=null&&a.push(ri(e,i,r))),e.tag===3)return a;e=e.return}return[]}function Ja(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ig(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,b=h.alternate,E=h.stateNode;if(h=h.tag,b!==null&&b===a)break;h!==5&&h!==26&&h!==27||E===null||(b=E,i?(E=zl(n,r),E!=null&&f.unshift(ri(n,E,b))):i||(E=zl(n,r),E!=null&&f.push(ri(n,E,b)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var J1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function rg(e){return(typeof e=="string"?e:""+e).replace(J1,`
`).replace(W1,"")}function ug(e,t){return t=rg(t),rg(e)===t}function Ar(){}function Se(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Sa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Sa(e,""+a);break;case"className":Ci(e,"class",a);break;case"tabIndex":Ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,n,a);break;case"style":cf(e,a,r);break;case"data":if(t!=="object"){Ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ui(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",i.name,i,null),Se(e,t,"formEncType",i.formEncType,i,null),Se(e,t,"formMethod",i.formMethod,i,null),Se(e,t,"formTarget",i.formTarget,i,null)):(Se(e,t,"encType",i.encType,i,null),Se(e,t,"method",i.method,i,null),Se(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ui(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ui(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Oi(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Oi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=wp.get(n)||n,Oi(e,n,a))}}function mc(e,t,n,a,i,r){switch(n){case"style":cf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Sa(e,a):(typeof a=="number"||typeof a=="bigint")&&Sa(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[rt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Oi(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,r,f,n,null)}}i&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=i=null,b=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var C=n[a];if(C!=null)switch(a){case"name":i=C;break;case"type":f=C;break;case"checked":b=C;break;case"defaultChecked":E=C;break;case"value":r=C;break;case"defaultValue":h=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,t));break;default:Se(e,t,a,C,n,null)}}lf(e,r,h,b,E,f,i,!1),Bi(e);return;case"select":de("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,i,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?xa(e,!!a,t,!1):n!=null&&xa(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Se(e,t,f,h,n,null)}uf(e,a,i,r),Bi(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,b,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)de(ii[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Se(e,t,E,a,n,null)}return;default:if(Du(t)){for(C in n)n.hasOwnProperty(C)&&(a=n[C],a!==void 0&&mc(e,t,C,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function F1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,h=null,b=null,E=null,C=null;for(A in n){var N=n[A];if(n.hasOwnProperty(A)&&N!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":b=N;default:a.hasOwnProperty(A)||Se(e,t,A,null,a,N)}}for(var T in a){var A=a[T];if(N=n[T],a.hasOwnProperty(T)&&(A!=null||N!=null))switch(T){case"type":r=A;break;case"name":i=A;break;case"checked":E=A;break;case"defaultChecked":C=A;break;case"value":f=A;break;case"defaultValue":h=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:A!==N&&Se(e,t,T,A,a,N)}}Ru(e,f,h,b,E,C,r,i);return;case"select":A=f=h=T=null;for(r in n)if(b=n[r],n.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":A=b;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,b)}for(i in a)if(r=a[i],b=n[i],a.hasOwnProperty(i)&&(r!=null||b!=null))switch(i){case"value":T=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==b&&Se(e,t,i,r,a,b)}t=h,n=f,a=A,T!=null?xa(e,!!n,T,!1):!!a!=!!n&&(t!=null?xa(e,!!n,t,!0):xa(e,!!n,n?[]:"",!1));return;case"textarea":A=T=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":T=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==r&&Se(e,t,f,i,a,r)}rf(e,T,A);return;case"option":for(var ne in n)if(T=n[ne],n.hasOwnProperty(ne)&&T!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,T)}for(b in a)if(T=a[b],A=n[b],a.hasOwnProperty(b)&&T!==A&&(T!=null||A!=null))switch(b){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Se(e,t,b,T,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)T=n[I],n.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,T);for(E in a)if(T=a[E],A=n[E],a.hasOwnProperty(E)&&T!==A&&(T!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:Se(e,t,E,T,a,A)}return;default:if(Du(t)){for(var je in n)T=n[je],n.hasOwnProperty(je)&&T!==void 0&&!a.hasOwnProperty(je)&&mc(e,t,je,void 0,a,T);for(C in a)T=a[C],A=n[C],!a.hasOwnProperty(C)||T===A||T===void 0&&A===void 0||mc(e,t,C,T,a,A);return}}for(var _ in n)T=n[_],n.hasOwnProperty(_)&&T!=null&&!a.hasOwnProperty(_)&&Se(e,t,_,null,a,T);for(N in a)T=a[N],A=n[N],!a.hasOwnProperty(N)||T===A||T==null&&A==null||Se(e,t,N,T,a,A)}var pc=null,bc=null;function Rr(e){return e.nodeType===9?e:e.ownerDocument}function sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=null;function P1(){var e=window.event;return e&&e.type==="popstate"?e===vc?!1:(vc=e,!0):(vc=null,!1)}var og=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(tb)}:og;function tb(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function dg(e,t){var n=t,a=0,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&ui(f.documentElement),n&2&&ui(f.body),n&4)for(n=f.head,ui(n),f=n.firstChild;f;){var h=f.nextSibling,b=f.nodeName;f[jl]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(i===0){e.removeChild(r),mi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);mi(t)}function xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xc(n),Eu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function nb(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function ab(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function Sc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var jc=null;function hg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function gg(e,t,n){switch(t=Rr(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eu(e)}var Mt=new Map,mg=new Set;function Mr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=q.d;q.d={f:ib,r:rb,D:ub,C:sb,L:cb,m:ob,X:db,S:fb,M:hb};function ib(){var e=on.f(),t=Sr();return e||t}function rb(e){var t=pa(e);t!==null&&t.tag===5&&t.type==="form"?Nd(t):on.r(e)}var Wa=typeof document>"u"?null:document;function pg(e,t,n){var a=Wa;if(a&&typeof t=="string"&&t){var i=_t(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),mg.has(i)||(mg.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function ub(e){on.D(e),pg("dns-prefetch",e,null)}function sb(e,t){on.C(e,t),pg("preconnect",e,t)}function cb(e,t,n){on.L(e,t,n);var a=Wa;if(a&&e&&t){var i='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+_t(n.imageSizes)+'"]')):i+='[href="'+_t(e)+'"]';var r=i;switch(t){case"style":r=Fa(e);break;case"script":r=Pa(e)}Mt.has(r)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(si(r))||t==="script"&&a.querySelector(ci(r))||(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function ob(e,t){on.m(e,t);var n=Wa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+_t(a)+'"][href="'+_t(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Pa(e)}if(!Mt.has(r)&&(e=w({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ci(r)))return}a=n.createElement("link"),Fe(a,"link",e),Ze(a),n.head.appendChild(a)}}}function fb(e,t,n){on.S(e,t,n);var a=Wa;if(a&&e){var i=ba(a).hoistableStyles,r=Fa(e);t=t||"default";var f=i.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(si(r)))h.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&_c(e,n);var b=f=a.createElement("link");Ze(b),Fe(b,"link",e),b._p=new Promise(function(E,C){b.onload=E,b.onerror=C}),b.addEventListener("load",function(){h.loading|=1}),b.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Dr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(r,f)}}}function db(e,t){on.X(e,t);var n=Wa;if(n&&e){var a=ba(n).hoistableScripts,i=Pa(e),r=a.get(i);r||(r=n.querySelector(ci(i)),r||(e=w({src:e,async:!0},t),(t=Mt.get(i))&&zc(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function hb(e,t){on.M(e,t);var n=Wa;if(n&&e){var a=ba(n).hoistableScripts,i=Pa(e),r=a.get(i);r||(r=n.querySelector(ci(i)),r||(e=w({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&zc(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function bg(e,t,n,a){var i=(i=ee.current)?Mr(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fa(n.href),n=ba(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fa(n.href);var r=ba(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(si(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||gb(i,e,n,f.state))),t&&a===null)throw Error(s(528,""));return f}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Pa(n),n=ba(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Fa(e){return'href="'+_t(e)+'"'}function si(e){return'link[rel="stylesheet"]['+e+"]"}function yg(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function gb(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Ze(t),e.head.appendChild(t))}function Pa(e){return'[src="'+_t(e)+'"]'}function ci(e){return"script[async]"+e}function vg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(a)return t.instance=a,Ze(a),a;var i=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),Fe(a,"style",i),Dr(a,n.precedence,e),t.instance=a;case"stylesheet":i=Fa(n.href);var r=e.querySelector(si(i));if(r)return t.state.loading|=4,t.instance=r,Ze(r),r;a=yg(n),(i=Mt.get(i))&&_c(a,i),r=(e.ownerDocument||e).createElement("link"),Ze(r);var f=r;return f._p=new Promise(function(h,b){f.onload=h,f.onerror=b}),Fe(r,"link",a),t.state.loading|=4,Dr(r,n.precedence,e),t.instance=r;case"script":return r=Pa(n.src),(i=e.querySelector(ci(r)))?(t.instance=i,Ze(i),i):(a=n,(i=Mt.get(r))&&(a=w({},n),zc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ze(i),Fe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Dr(a,n.precedence,e));return t.instance}function Dr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function _c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function xg(e,t,n){if(Or===null){var a=new Map,i=Or=new Map;i.set(n,a)}else i=Or,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[jl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function Sg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function mb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var oi=null;function pb(){}function bb(e,t,n){if(oi===null)throw Error(s(475));var a=oi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Fa(n.href),r=e.querySelector(si(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Cr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ze(r);return}r=e.ownerDocument||e,n=yg(n),(i=Mt.get(i))&&_c(n,i),r=r.createElement("link"),Ze(r);var f=r;f._p=new Promise(function(h,b){f.onload=h,f.onerror=b}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Cr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function yb(){if(oi===null)throw Error(s(475));var e=oi;return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cr(){if(this.count--,this.count===0){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Br=null;function Ec(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Br=new Map,t.forEach(vb,e),Br=null,Cr.call(e))}function vb(e,t){if(!(t.state.loading&4)){var n=Br.get(e);if(n)var a=n.get(null);else{n=new Map,Br.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=Cr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:X,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function xb(e,t,n,a,i,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.hiddenUpdates=Su(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function _g(e,t,n,a,i,r,f,h,b,E,C,N){return e=new xb(e,t,n,f,h,b,E,N),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=rs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},os(r),e}function zg(e){return e?(e=Ra,e):Ra}function Eg(e,t,n,a,i,r){i=zg(i),a.context===null?a.context=i:a.pendingContext=i,a=xn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Sn(e,a,t),n!==null&&(vt(n,e,t),Yl(n,e,t))}function wg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){wg(e,t),(e=e.alternate)&&wg(e,t)}function Tg(e){if(e.tag===13){var t=Aa(e,67108864);t!==null&&vt(t,e,67108864),wc(e,67108864)}}var Nr=!0;function Sb(e,t,n,a){var i=O.T;O.T=null;var r=q.p;try{q.p=2,Tc(e,t,n,a)}finally{q.p=r,O.T=i}}function jb(e,t,n,a){var i=O.T;O.T=null;var r=q.p;try{q.p=8,Tc(e,t,n,a)}finally{q.p=r,O.T=i}}function Tc(e,t,n,a){if(Nr){var i=Ac(a);if(i===null)gc(e,t,a,Ur,n),Rg(e,a);else if(zb(i,e,t,n,a))a.stopPropagation();else if(Rg(e,a),t&4&&-1<_b.indexOf(e)){for(;i!==null;){var r=pa(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Yn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var b=1<<31-dt(f);h.entanglements[1]|=b,f&=~b}Vt(r),(ye&6)===0&&(vr=Ht()+500,li(0))}}break;case 13:h=Aa(r,2),h!==null&&vt(h,r,2),Sr(),wc(r,2)}if(r=Ac(a),r===null&&gc(e,t,a,Ur,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else gc(e,t,a,null,n)}}function Ac(e){return e=Cu(e),Rc(e)}var Ur=null;function Rc(e){if(Ur=null,e=ma(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ur=e,null}function Ag(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sp()){case Yo:return 2;case qo:return 8;case Ai:case cp:return 32;case Vo:return 268435456;default:return 32}default:return 32}}var Mc=!1,Bn=null,Nn=null,Un=null,di=new Map,hi=new Map,kn=[],_b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rg(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function gi(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=pa(t),t!==null&&Tg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zb(e,t,n,a,i){switch(t){case"focusin":return Bn=gi(Bn,e,t,n,a,i),!0;case"dragenter":return Nn=gi(Nn,e,t,n,a,i),!0;case"mouseover":return Un=gi(Un,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return di.set(r,gi(di.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,hi.set(r,gi(hi.get(r)||null,e,t,n,a,i)),!0}return!1}function Mg(e){var t=ma(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,bp(e.priority,function(){if(n.tag===13){var a=yt();a=ju(a);var i=Aa(n,a);i!==null&&vt(i,n,a),wc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ac(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ou=a,n.target.dispatchEvent(a),Ou=null}else return t=pa(n),t!==null&&Tg(t),e.blockedOn=n,!1;t.shift()}return!0}function Dg(e,t,n){kr(e)&&n.delete(t)}function Eb(){Mc=!1,Bn!==null&&kr(Bn)&&(Bn=null),Nn!==null&&kr(Nn)&&(Nn=null),Un!==null&&kr(Un)&&(Un=null),di.forEach(Dg),hi.forEach(Dg)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mc||(Mc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Eb)))}var Lr=null;function Og(e){Lr!==e&&(Lr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Lr===e&&(Lr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Rc(a||n)===null)continue;break}var r=pa(n);r!==null&&(e.splice(t,3),t-=3,Rs(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function mi(e){function t(b){return Hr(b,e)}Bn!==null&&Hr(Bn,e),Nn!==null&&Hr(Nn,e),Un!==null&&Hr(Un,e),di.forEach(t),hi.forEach(t);for(var n=0;n<kn.length;n++){var a=kn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)Mg(n),n.blockedOn===null&&kn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[rt]||null;if(typeof r=="function")f||Og(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[rt]||null)h=f.formAction;else if(Rc(i)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Og(n)}}}function Dc(e){this._internalRoot=e}Gr.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=yt();Eg(n,a,e,t,null,null)},Gr.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Eg(e.current,2,null,e,null,null),Sr(),t[ga]=null}};function Gr(e){this._internalRoot=e}Gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=$o();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&Mg(e)}};var Cg=u.version;if(Cg!=="19.1.0")throw Error(s(527,Cg,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var wb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{vl=Yr.inject(wb),ft=Yr}catch{}}return bi.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",i=Jd,r=Wd,f=Fd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=_g(e,1,!1,null,null,n,a,i,r,f,h,null),e[ga]=t.current,hc(e),new Dc(t)},bi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,i="",r=Jd,f=Wd,h=Fd,b=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),t=_g(e,1,!0,t,n??null,a,i,r,f,h,b,E),t.context=zg(null),n=t.current,a=yt(),a=ju(a),i=xn(a),i.callback=null,Sn(n,i,a),n=a,t.current.lanes=n,Sl(t,n),Vt(t),e[ga]=t.current,hc(e),new Gr(t)},bi.version="19.1.0",bi}var Vg;function kb(){if(Vg)return Bc.exports;Vg=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Bc.exports=Ub(),Bc.exports}var Hb=kb(),nt=function(){return nt=Object.assign||function(u){for(var o,s=1,d=arguments.length;s<d;s++){o=arguments[s];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(u[g]=o[g])}return u},nt.apply(this,arguments)};function iu(l,u,o){if(o||arguments.length===2)for(var s=0,d=u.length,g;s<d;s++)(g||!(s in u))&&(g||(g=Array.prototype.slice.call(u,0,s)),g[s]=u[s]);return l.concat(g||Array.prototype.slice.call(u))}var Te="-ms-",_i="-moz-",be="-webkit-",_m="comm",fu="rule",Eo="decl",Lb="@import",zm="@keyframes",Gb="@layer",Em=Math.abs,wo=String.fromCharCode,mo=Object.assign;function Yb(l,u){return $e(l,0)^45?(((u<<2^$e(l,0))<<2^$e(l,1))<<2^$e(l,2))<<2^$e(l,3):0}function wm(l){return l.trim()}function fn(l,u){return(l=u.exec(l))?l[0]:l}function re(l,u,o){return l.replace(u,o)}function Pr(l,u,o){return l.indexOf(u,o)}function $e(l,u){return l.charCodeAt(u)|0}function fl(l,u,o){return l.slice(u,o)}function Zt(l){return l.length}function Tm(l){return l.length}function Si(l,u){return u.push(l),l}function qb(l,u){return l.map(u).join("")}function Zg(l,u){return l.filter(function(o){return!fn(o,u)})}var du=1,dl=1,Am=0,Dt=0,He=0,ml="";function hu(l,u,o,s,d,g,y,j){return{value:l,root:u,parent:o,type:s,props:d,children:g,line:du,column:dl,length:y,return:"",siblings:j}}function Ln(l,u){return mo(hu("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function Ia(l){for(;l.root;)l=Ln(l.root,{children:[l]});Si(l,l.siblings)}function Vb(){return He}function Zb(){return He=Dt>0?$e(ml,--Dt):0,dl--,He===10&&(dl=1,du--),He}function Nt(){return He=Dt<Am?$e(ml,Dt++):0,dl++,He===10&&(dl=1,du++),He}function ca(){return $e(ml,Dt)}function Ir(){return Dt}function gu(l,u){return fl(ml,l,u)}function po(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xb(l){return du=dl=1,Am=Zt(ml=l),Dt=0,[]}function Qb(l){return ml="",l}function Hc(l){return wm(gu(Dt-1,bo(l===91?l+2:l===40?l+1:l)))}function Kb(l){for(;(He=ca())&&He<33;)Nt();return po(l)>2||po(He)>3?"":" "}function $b(l,u){for(;--u&&Nt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return gu(l,Ir()+(u<6&&ca()==32&&Nt()==32))}function bo(l){for(;Nt();)switch(He){case l:return Dt;case 34:case 39:l!==34&&l!==39&&bo(He);break;case 40:l===41&&bo(l);break;case 92:Nt();break}return Dt}function Jb(l,u){for(;Nt()&&l+He!==57;)if(l+He===84&&ca()===47)break;return"/*"+gu(u,Dt-1)+"*"+wo(l===47?l:Nt())}function Wb(l){for(;!po(ca());)Nt();return gu(l,Dt)}function Fb(l){return Qb(eu("",null,null,null,[""],l=Xb(l),0,[0],l))}function eu(l,u,o,s,d,g,y,j,v){for(var m=0,w=0,R=y,D=0,H=0,L=0,G=1,Z=1,k=1,J=0,X="",ae=d,Q=g,le=s,W=X;Z;)switch(L=J,J=Nt()){case 40:if(L!=108&&$e(W,R-1)==58){Pr(W+=re(Hc(J),"&","&\f"),"&\f",Em(m?j[m-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:W+=Hc(J);break;case 9:case 10:case 13:case 32:W+=Kb(L);break;case 92:W+=$b(Ir()-1,7);continue;case 47:switch(ca()){case 42:case 47:Si(Pb(Jb(Nt(),Ir()),u,o,v),v);break;default:W+="/"}break;case 123*G:j[m++]=Zt(W)*k;case 125*G:case 59:case 0:switch(J){case 0:case 125:Z=0;case 59+w:k==-1&&(W=re(W,/\f/g,"")),H>0&&Zt(W)-R&&Si(H>32?Qg(W+";",s,o,R-1,v):Qg(re(W," ","")+";",s,o,R-2,v),v);break;case 59:W+=";";default:if(Si(le=Xg(W,u,o,m,w,d,j,X,ae=[],Q=[],R,g),g),J===123)if(w===0)eu(W,u,le,le,ae,g,R,j,Q);else switch(D===99&&$e(W,3)===110?100:D){case 100:case 108:case 109:case 115:eu(l,le,le,s&&Si(Xg(l,le,le,0,0,d,j,X,d,ae=[],R,Q),Q),d,Q,R,j,s?ae:Q);break;default:eu(W,le,le,le,[""],Q,0,j,Q)}}m=w=H=0,G=k=1,X=W="",R=y;break;case 58:R=1+Zt(W),H=L;default:if(G<1){if(J==123)--G;else if(J==125&&G++==0&&Zb()==125)continue}switch(W+=wo(J),J*G){case 38:k=w>0?1:(W+="\f",-1);break;case 44:j[m++]=(Zt(W)-1)*k,k=1;break;case 64:ca()===45&&(W+=Hc(Nt())),D=ca(),w=R=Zt(X=W+=Wb(Ir())),J++;break;case 45:L===45&&Zt(W)==2&&(G=0)}}return g}function Xg(l,u,o,s,d,g,y,j,v,m,w,R){for(var D=d-1,H=d===0?g:[""],L=Tm(H),G=0,Z=0,k=0;G<s;++G)for(var J=0,X=fl(l,D+1,D=Em(Z=y[G])),ae=l;J<L;++J)(ae=wm(Z>0?H[J]+" "+X:re(X,/&\f/g,H[J])))&&(v[k++]=ae);return hu(l,u,o,d===0?fu:j,v,m,w,R)}function Pb(l,u,o,s){return hu(l,u,o,_m,wo(Vb()),fl(l,2,-2),0,s)}function Qg(l,u,o,s,d){return hu(l,u,o,Eo,fl(l,0,s),fl(l,s+1,-1),s,d)}function Rm(l,u,o){switch(Yb(l,u)){case 5103:return be+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+l+l;case 4789:return _i+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return be+l+_i+l+Te+l+l;case 5936:switch($e(l,u+11)){case 114:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return be+l+Te+l+l;case 6165:return be+l+Te+"flex-"+l+l;case 5187:return be+l+re(l,/(\w+).+(:[^]+)/,be+"box-$1$2"+Te+"flex-$1$2")+l;case 5443:return be+l+Te+"flex-item-"+re(l,/flex-|-self/g,"")+(fn(l,/flex-|baseline/)?"":Te+"grid-row-"+re(l,/flex-|-self/g,""))+l;case 4675:return be+l+Te+"flex-line-pack"+re(l,/align-content|flex-|-self/g,"")+l;case 5548:return be+l+Te+re(l,"shrink","negative")+l;case 5292:return be+l+Te+re(l,"basis","preferred-size")+l;case 6060:return be+"box-"+re(l,"-grow","")+be+l+Te+re(l,"grow","positive")+l;case 4554:return be+re(l,/([^-])(transform)/g,"$1"+be+"$2")+l;case 6187:return re(re(re(l,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),l,"")+l;case 5495:case 3959:return re(l,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(l,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+l+l;case 4200:if(!fn(l,/flex-|baseline/))return Te+"grid-column-align"+fl(l,u)+l;break;case 2592:case 3360:return Te+re(l,"template-","")+l;case 4384:case 3616:return o&&o.some(function(s,d){return u=d,fn(s.props,/grid-\w+-end/)})?~Pr(l+(o=o[u].value),"span",0)?l:Te+re(l,"-start","")+l+Te+"grid-row-span:"+(~Pr(o,"span",0)?fn(o,/\d+/):+fn(o,/\d+/)-+fn(l,/\d+/))+";":Te+re(l,"-start","")+l;case 4896:case 4128:return o&&o.some(function(s){return fn(s.props,/grid-\w+-start/)})?l:Te+re(re(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return re(l,/(.+)-inline(.+)/,be+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(l)-1-u>6)switch($e(l,u+1)){case 109:if($e(l,u+4)!==45)break;case 102:return re(l,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+_i+($e(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~Pr(l,"stretch",0)?Rm(re(l,"stretch","fill-available"),u,o)+l:l}break;case 5152:case 5920:return re(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,g,y,j,v,m){return Te+d+":"+g+m+(y?Te+d+"-span:"+(j?v:+v-+g)+m:"")+l});case 4949:if($e(l,u+6)===121)return re(l,":",":"+be)+l;break;case 6444:switch($e(l,$e(l,14)===45?18:11)){case 120:return re(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+($e(l,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Te+"$2box$3")+l;case 100:return re(l,":",":"+Te)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(l,"scroll-","scroll-snap-")+l}return l}function ru(l,u){for(var o="",s=0;s<l.length;s++)o+=u(l[s],s,l,u)||"";return o}function Ib(l,u,o,s){switch(l.type){case Gb:if(l.children.length)break;case Lb:case Eo:return l.return=l.return||l.value;case _m:return"";case zm:return l.return=l.value+"{"+ru(l.children,s)+"}";case fu:if(!Zt(l.value=l.props.join(",")))return""}return Zt(o=ru(l.children,s))?l.return=l.value+"{"+o+"}":""}function ey(l){var u=Tm(l);return function(o,s,d,g){for(var y="",j=0;j<u;j++)y+=l[j](o,s,d,g)||"";return y}}function ty(l){return function(u){u.root||(u=u.return)&&l(u)}}function ny(l,u,o,s){if(l.length>-1&&!l.return)switch(l.type){case Eo:l.return=Rm(l.value,l.length,o);return;case zm:return ru([Ln(l,{value:re(l.value,"@","@"+be)})],s);case fu:if(l.length)return qb(o=l.props,function(d){switch(fn(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ia(Ln(l,{props:[re(d,/:(read-\w+)/,":"+_i+"$1")]})),Ia(Ln(l,{props:[d]})),mo(l,{props:Zg(o,s)});break;case"::placeholder":Ia(Ln(l,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Ia(Ln(l,{props:[re(d,/:(plac\w+)/,":"+_i+"$1")]})),Ia(Ln(l,{props:[re(d,/:(plac\w+)/,Te+"input-$1")]})),Ia(Ln(l,{props:[d]})),mo(l,{props:Zg(o,s)});break}return""})}}var ay={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},hl=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Mm="active",Dm="data-styled-version",mu="6.1.19",To=`/*!sc*/
`,uu=typeof window<"u"&&typeof document<"u",ly=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),pu=Object.freeze([]),gl=Object.freeze({});function iy(l,u,o){return o===void 0&&(o=gl),l.theme!==o.theme&&l.theme||u||o.theme}var Om=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ry=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uy=/(^-|-$)/g;function Kg(l){return l.replace(ry,"-").replace(uy,"")}var sy=/(a)(d)/gi,qr=52,$g=function(l){return String.fromCharCode(l+(l>25?39:97))};function yo(l){var u,o="";for(u=Math.abs(l);u>qr;u=u/qr|0)o=$g(u%qr)+o;return($g(u%qr)+o).replace(sy,"$1-$2")}var Lc,Cm=5381,ol=function(l,u){for(var o=u.length;o;)l=33*l^u.charCodeAt(--o);return l},Bm=function(l){return ol(Cm,l)};function cy(l){return yo(Bm(l)>>>0)}function oy(l){return l.displayName||l.name||"Component"}function Gc(l){return typeof l=="string"&&!0}var Nm=typeof Symbol=="function"&&Symbol.for,Um=Nm?Symbol.for("react.memo"):60115,fy=Nm?Symbol.for("react.forward_ref"):60112,dy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},km={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gy=((Lc={})[fy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lc[Um]=km,Lc);function Jg(l){return("type"in(u=l)&&u.type.$$typeof)===Um?km:"$$typeof"in l?gy[l.$$typeof]:dy;var u}var my=Object.defineProperty,py=Object.getOwnPropertyNames,Wg=Object.getOwnPropertySymbols,by=Object.getOwnPropertyDescriptor,yy=Object.getPrototypeOf,Fg=Object.prototype;function Hm(l,u,o){if(typeof u!="string"){if(Fg){var s=yy(u);s&&s!==Fg&&Hm(l,s,o)}var d=py(u);Wg&&(d=d.concat(Wg(u)));for(var g=Jg(l),y=Jg(u),j=0;j<d.length;++j){var v=d[j];if(!(v in hy||o&&o[v]||y&&v in y||g&&v in g)){var m=by(u,v);try{my(l,v,m)}catch{}}}}return l}function da(l){return typeof l=="function"}function Ao(l){return typeof l=="object"&&"styledComponentId"in l}function sa(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function Pg(l,u){if(l.length===0)return"";for(var o=l[0],s=1;s<l.length;s++)o+=l[s];return o}function zi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function vo(l,u,o){if(o===void 0&&(o=!1),!o&&!zi(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var s=0;s<u.length;s++)l[s]=vo(l[s],u[s]);else if(zi(u))for(var s in u)l[s]=vo(l[s],u[s]);return l}function Ro(l,u){Object.defineProperty(l,"toString",{value:u})}function ha(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var vy=function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var o=0,s=0;s<u;s++)o+=this.groupSizes[s];return o},l.prototype.insertRules=function(u,o){if(u>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,g=d;u>=g;)if((g<<=1)<0)throw ha(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(s),this.length=g;for(var y=d;y<g;y++)this.groupSizes[y]=0}for(var j=this.indexOfGroup(u+1),v=(y=0,o.length);y<v;y++)this.tag.insertRule(j,o[y])&&(this.groupSizes[u]++,j++)},l.prototype.clearGroup=function(u){if(u<this.length){var o=this.groupSizes[u],s=this.indexOfGroup(u),d=s+o;this.groupSizes[u]=0;for(var g=s;g<d;g++)this.tag.deleteRule(s)}},l.prototype.getGroup=function(u){var o="";if(u>=this.length||this.groupSizes[u]===0)return o;for(var s=this.groupSizes[u],d=this.indexOfGroup(u),g=d+s,y=d;y<g;y++)o+="".concat(this.tag.getRule(y)).concat(To);return o},l}(),tu=new Map,su=new Map,nu=1,Vr=function(l){if(tu.has(l))return tu.get(l);for(;su.has(nu);)nu++;var u=nu++;return tu.set(l,u),su.set(u,l),u},xy=function(l,u){nu=u+1,tu.set(l,u),su.set(u,l)},Sy="style[".concat(hl,"][").concat(Dm,'="').concat(mu,'"]'),jy=new RegExp("^".concat(hl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_y=function(l,u,o){for(var s,d=o.split(","),g=0,y=d.length;g<y;g++)(s=d[g])&&l.registerName(u,s)},zy=function(l,u){for(var o,s=((o=u.textContent)!==null&&o!==void 0?o:"").split(To),d=[],g=0,y=s.length;g<y;g++){var j=s[g].trim();if(j){var v=j.match(jy);if(v){var m=0|parseInt(v[1],10),w=v[2];m!==0&&(xy(w,m),_y(l,w,v[3]),l.getTag().insertRules(m,d)),d.length=0}else d.push(j)}}},Ig=function(l){for(var u=document.querySelectorAll(Sy),o=0,s=u.length;o<s;o++){var d=u[o];d&&d.getAttribute(hl)!==Mm&&(zy(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function Ey(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Lm=function(l){var u=document.head,o=l||u,s=document.createElement("style"),d=function(j){var v=Array.from(j.querySelectorAll("style[".concat(hl,"]")));return v[v.length-1]}(o),g=d!==void 0?d.nextSibling:null;s.setAttribute(hl,Mm),s.setAttribute(Dm,mu);var y=Ey();return y&&s.setAttribute("nonce",y),o.insertBefore(s,g),s},wy=function(){function l(u){this.element=Lm(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,d=0,g=s.length;d<g;d++){var y=s[d];if(y.ownerNode===o)return y}throw ha(17)}(this.element),this.length=0}return l.prototype.insertRule=function(u,o){try{return this.sheet.insertRule(o,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var o=this.sheet.cssRules[u];return o&&o.cssText?o.cssText:""},l}(),Ty=function(){function l(u){this.element=Lm(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,o){if(u<=this.length&&u>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l}(),Ay=function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,o){return u<=this.length&&(this.rules.splice(u,0,o),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l}(),em=uu,Ry={isServer:!uu,useCSSOMInjection:!ly},Gm=function(){function l(u,o,s){u===void 0&&(u=gl),o===void 0&&(o={});var d=this;this.options=nt(nt({},Ry),u),this.gs=o,this.names=new Map(s),this.server=!!u.isServer,!this.server&&uu&&em&&(em=!1,Ig(this)),Ro(this,function(){return function(g){for(var y=g.getTag(),j=y.length,v="",m=function(R){var D=function(k){return su.get(k)}(R);if(D===void 0)return"continue";var H=g.names.get(D),L=y.getGroup(R);if(H===void 0||!H.size||L.length===0)return"continue";var G="".concat(hl,".g").concat(R,'[id="').concat(D,'"]'),Z="";H!==void 0&&H.forEach(function(k){k.length>0&&(Z+="".concat(k,","))}),v+="".concat(L).concat(G,'{content:"').concat(Z,'"}').concat(To)},w=0;w<j;w++)m(w);return v}(d)})}return l.registerId=function(u){return Vr(u)},l.prototype.rehydrate=function(){!this.server&&uu&&Ig(this)},l.prototype.reconstructWithOptions=function(u,o){return o===void 0&&(o=!0),new l(nt(nt({},this.options),u),this.gs,o&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=function(o){var s=o.useCSSOMInjection,d=o.target;return o.isServer?new Ay(d):s?new wy(d):new Ty(d)}(this.options),new vy(u)));var u},l.prototype.hasNameForId=function(u,o){return this.names.has(u)&&this.names.get(u).has(o)},l.prototype.registerName=function(u,o){if(Vr(u),this.names.has(u))this.names.get(u).add(o);else{var s=new Set;s.add(o),this.names.set(u,s)}},l.prototype.insertRules=function(u,o,s){this.registerName(u,o),this.getTag().insertRules(Vr(u),s)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(Vr(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l}(),My=/&/g,Dy=/^\s*\/\/.*$/gm;function Ym(l,u){return l.map(function(o){return o.type==="rule"&&(o.value="".concat(u," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(u," ")),o.props=o.props.map(function(s){return"".concat(u," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Ym(o.children,u)),o})}function Oy(l){var u,o,s,d=gl,g=d.options,y=g===void 0?gl:g,j=d.plugins,v=j===void 0?pu:j,m=function(D,H,L){return L.startsWith(o)&&L.endsWith(o)&&L.replaceAll(o,"").length>0?".".concat(u):D},w=v.slice();w.push(function(D){D.type===fu&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(My,o).replace(s,m))}),y.prefix&&w.push(ny),w.push(Ib);var R=function(D,H,L,G){H===void 0&&(H=""),L===void 0&&(L=""),G===void 0&&(G="&"),u=G,o=H,s=new RegExp("\\".concat(o,"\\b"),"g");var Z=D.replace(Dy,""),k=Fb(L||H?"".concat(L," ").concat(H," { ").concat(Z," }"):Z);y.namespace&&(k=Ym(k,y.namespace));var J=[];return ru(k,ey(w.concat(ty(function(X){return J.push(X)})))),J};return R.hash=v.length?v.reduce(function(D,H){return H.name||ha(15),ol(D,H.name)},Cm).toString():"",R}var Cy=new Gm,xo=Oy(),qm=fa.createContext({shouldForwardProp:void 0,styleSheet:Cy,stylis:xo});qm.Consumer;fa.createContext(void 0);function tm(){return M.useContext(qm)}var By=function(){function l(u,o){var s=this;this.inject=function(d,g){g===void 0&&(g=xo);var y=s.name+g.hash;d.hasNameForId(s.id,y)||d.insertRules(s.id,y,g(s.rules,y,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=o,Ro(this,function(){throw ha(12,String(s.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=xo),this.name+u.hash},l}(),Ny=function(l){return l>="A"&&l<="Z"};function nm(l){for(var u="",o=0;o<l.length;o++){var s=l[o];if(o===1&&s==="-"&&l[0]==="-")return l;Ny(s)?u+="-"+s.toLowerCase():u+=s}return u.startsWith("ms-")?"-"+u:u}var Vm=function(l){return l==null||l===!1||l===""},Zm=function(l){var u,o,s=[];for(var d in l){var g=l[d];l.hasOwnProperty(d)&&!Vm(g)&&(Array.isArray(g)&&g.isCss||da(g)?s.push("".concat(nm(d),":"),g,";"):zi(g)?s.push.apply(s,iu(iu(["".concat(d," {")],Zm(g),!1),["}"],!1)):s.push("".concat(nm(d),": ").concat((u=d,(o=g)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||u in ay||u.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function oa(l,u,o,s){if(Vm(l))return[];if(Ao(l))return[".".concat(l.styledComponentId)];if(da(l)){if(!da(g=l)||g.prototype&&g.prototype.isReactComponent||!u)return[l];var d=l(u);return oa(d,u,o,s)}var g;return l instanceof By?o?(l.inject(o,s),[l.getName(s)]):[l]:zi(l)?Zm(l):Array.isArray(l)?Array.prototype.concat.apply(pu,l.map(function(y){return oa(y,u,o,s)})):[l.toString()]}function Uy(l){for(var u=0;u<l.length;u+=1){var o=l[u];if(da(o)&&!Ao(o))return!1}return!0}var ky=Bm(mu),Hy=function(){function l(u,o,s){this.rules=u,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Uy(u),this.componentId=o,this.baseHash=ol(ky,o),this.baseStyle=s,Gm.registerId(o)}return l.prototype.generateAndInjectStyles=function(u,o,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=sa(d,this.staticRulesId);else{var g=Pg(oa(this.rules,u,o,s)),y=yo(ol(this.baseHash,g)>>>0);if(!o.hasNameForId(this.componentId,y)){var j=s(g,".".concat(y),void 0,this.componentId);o.insertRules(this.componentId,y,j)}d=sa(d,y),this.staticRulesId=y}else{for(var v=ol(this.baseHash,s.hash),m="",w=0;w<this.rules.length;w++){var R=this.rules[w];if(typeof R=="string")m+=R;else if(R){var D=Pg(oa(R,u,o,s));v=ol(v,D+w),m+=D}}if(m){var H=yo(v>>>0);o.hasNameForId(this.componentId,H)||o.insertRules(this.componentId,H,s(m,".".concat(H),void 0,this.componentId)),d=sa(d,H)}}return d},l}(),cu=fa.createContext(void 0);cu.Consumer;function Ly(l){var u=fa.useContext(cu),o=M.useMemo(function(){return function(s,d){if(!s)throw ha(14);if(da(s)){var g=s(d);return g}if(Array.isArray(s)||typeof s!="object")throw ha(8);return d?nt(nt({},d),s):s}(l.theme,u)},[l.theme,u]);return l.children?fa.createElement(cu.Provider,{value:o},l.children):null}var Yc={};function Gy(l,u,o){var s=Ao(l),d=l,g=!Gc(l),y=u.attrs,j=y===void 0?pu:y,v=u.componentId,m=v===void 0?function(ae,Q){var le=typeof ae!="string"?"sc":Kg(ae);Yc[le]=(Yc[le]||0)+1;var W="".concat(le,"-").concat(cy(mu+le+Yc[le]));return Q?"".concat(Q,"-").concat(W):W}(u.displayName,u.parentComponentId):v,w=u.displayName,R=w===void 0?function(ae){return Gc(ae)?"styled.".concat(ae):"Styled(".concat(oy(ae),")")}(l):w,D=u.displayName&&u.componentId?"".concat(Kg(u.displayName),"-").concat(u.componentId):u.componentId||m,H=s&&d.attrs?d.attrs.concat(j).filter(Boolean):j,L=u.shouldForwardProp;if(s&&d.shouldForwardProp){var G=d.shouldForwardProp;if(u.shouldForwardProp){var Z=u.shouldForwardProp;L=function(ae,Q){return G(ae,Q)&&Z(ae,Q)}}else L=G}var k=new Hy(o,D,s?d.componentStyle:void 0);function J(ae,Q){return function(le,W,we){var _e=le.attrs,at=le.componentStyle,it=le.defaultProps,Ye=le.foldedComponentIds,Qt=le.styledComponentId,Kt=le.target,qe=fa.useContext(cu),O=tm(),q=le.shouldForwardProp||O.shouldForwardProp,P=iy(W,qe,it)||gl,ce=function(oe,ee,Ve){for(var pe,Pe=nt(nt({},ee),{className:void 0,theme:Ve}),Gn=0;Gn<oe.length;Gn+=1){var $t=da(pe=oe[Gn])?pe(Pe):pe;for(var St in $t)Pe[St]=St==="className"?sa(Pe[St],$t[St]):St==="style"?nt(nt({},Pe[St]),$t[St]):$t[St]}return ee.className&&(Pe.className=sa(Pe.className,ee.className)),Pe}(_e,W,P),x=ce.as||Kt,U={};for(var Y in ce)ce[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ce.theme===P||(Y==="forwardedAs"?U.as=ce.forwardedAs:q&&!q(Y,x)||(U[Y]=ce[Y]));var V=function(oe,ee){var Ve=tm(),pe=oe.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(at,ce),F=sa(Ye,Qt);return V&&(F+=" "+V),ce.className&&(F+=" "+ce.className),U[Gc(x)&&!Om.has(x)?"class":"className"]=F,we&&(U.ref=we),M.createElement(x,U)}(X,ae,Q)}J.displayName=R;var X=fa.forwardRef(J);return X.attrs=H,X.componentStyle=k,X.displayName=R,X.shouldForwardProp=L,X.foldedComponentIds=s?sa(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=D,X.target=s?d.target:l,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=s?function(Q){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var we=0,_e=le;we<_e.length;we++)vo(Q,_e[we],!0);return Q}({},d.defaultProps,ae):ae}}),Ro(X,function(){return".".concat(X.styledComponentId)}),g&&Hm(X,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function am(l,u){for(var o=[l[0]],s=0,d=u.length;s<d;s+=1)o.push(u[s],l[s+1]);return o}var lm=function(l){return Object.assign(l,{isCss:!0})};function Yy(l){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];if(da(l)||zi(l))return lm(oa(am(pu,iu([l],u,!0))));var s=l;return u.length===0&&s.length===1&&typeof s[0]=="string"?oa(s):lm(oa(am(s,u)))}function So(l,u,o){if(o===void 0&&(o=gl),!u)throw ha(1,u);var s=function(d){for(var g=[],y=1;y<arguments.length;y++)g[y-1]=arguments[y];return l(u,o,Yy.apply(void 0,iu([d],g,!1)))};return s.attrs=function(d){return So(l,u,nt(nt({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return So(l,u,nt(nt({},o),d))},s}var Xm=function(l){return So(Gy,l)},p=Xm;Om.forEach(function(l){p[l]=Xm(l)});/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var im="popstate";function qy(l={}){function u(s,d){let{pathname:g,search:y,hash:j}=s.location;return jo("",{pathname:g,search:y,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(s,d){return typeof d=="string"?d:Ei(d)}return Zy(u,o,null,l)}function Me(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function Ut(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Vy(){return Math.random().toString(36).substring(2,10)}function rm(l,u){return{usr:l.state,key:l.key,idx:u}}function jo(l,u,o=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?pl(u):u,state:o,key:u&&u.key||s||Vy()}}function Ei({pathname:l="/",search:u="",hash:o=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(l+=o.charAt(0)==="#"?o:"#"+o),l}function pl(l){let u={};if(l){let o=l.indexOf("#");o>=0&&(u.hash=l.substring(o),l=l.substring(0,o));let s=l.indexOf("?");s>=0&&(u.search=l.substring(s),l=l.substring(0,s)),l&&(u.pathname=l)}return u}function Zy(l,u,o,s={}){let{window:d=document.defaultView,v5Compat:g=!1}=s,y=d.history,j="POP",v=null,m=w();m==null&&(m=0,y.replaceState({...y.state,idx:m},""));function w(){return(y.state||{idx:null}).idx}function R(){j="POP";let Z=w(),k=Z==null?null:Z-m;m=Z,v&&v({action:j,location:G.location,delta:k})}function D(Z,k){j="PUSH";let J=jo(G.location,Z,k);m=w()+1;let X=rm(J,m),ae=G.createHref(J);try{y.pushState(X,"",ae)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;d.location.assign(ae)}g&&v&&v({action:j,location:G.location,delta:1})}function H(Z,k){j="REPLACE";let J=jo(G.location,Z,k);m=w();let X=rm(J,m),ae=G.createHref(J);y.replaceState(X,"",ae),g&&v&&v({action:j,location:G.location,delta:0})}function L(Z){return Xy(Z)}let G={get action(){return j},get location(){return l(d,y)},listen(Z){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(im,R),v=Z,()=>{d.removeEventListener(im,R),v=null}},createHref(Z){return u(d,Z)},createURL:L,encodeLocation(Z){let k=L(Z);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:D,replace:H,go(Z){return y.go(Z)}};return G}function Xy(l,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Me(o,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:Ei(l);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function Qm(l,u,o="/"){return Qy(l,u,o,!1)}function Qy(l,u,o,s){let d=typeof u=="string"?pl(u):u,g=hn(d.pathname||"/",o);if(g==null)return null;let y=Km(l);Ky(y);let j=null;for(let v=0;j==null&&v<y.length;++v){let m=lv(g);j=nv(y[v],m,s)}return j}function Km(l,u=[],o=[],s=""){let d=(g,y,j)=>{let v={relativePath:j===void 0?g.path||"":j,caseSensitive:g.caseSensitive===!0,childrenIndex:y,route:g};v.relativePath.startsWith("/")&&(Me(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length));let m=dn([s,v.relativePath]),w=o.concat(v);g.children&&g.children.length>0&&(Me(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Km(g.children,u,w,m)),!(g.path==null&&!g.index)&&u.push({path:m,score:ev(m,g.index),routesMeta:w})};return l.forEach((g,y)=>{if(g.path===""||!g.path?.includes("?"))d(g,y);else for(let j of $m(g.path))d(g,y,j)}),u}function $m(l){let u=l.split("/");if(u.length===0)return[];let[o,...s]=u,d=o.endsWith("?"),g=o.replace(/\?$/,"");if(s.length===0)return d?[g,""]:[g];let y=$m(s.join("/")),j=[];return j.push(...y.map(v=>v===""?g:[g,v].join("/"))),d&&j.push(...y),j.map(v=>l.startsWith("/")&&v===""?"/":v)}function Ky(l){l.sort((u,o)=>u.score!==o.score?o.score-u.score:tv(u.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var $y=/^:[\w-]+$/,Jy=3,Wy=2,Fy=1,Py=10,Iy=-2,um=l=>l==="*";function ev(l,u){let o=l.split("/"),s=o.length;return o.some(um)&&(s+=Iy),u&&(s+=Wy),o.filter(d=>!um(d)).reduce((d,g)=>d+($y.test(g)?Jy:g===""?Fy:Py),s)}function tv(l,u){return l.length===u.length&&l.slice(0,-1).every((s,d)=>s===u[d])?l[l.length-1]-u[u.length-1]:0}function nv(l,u,o=!1){let{routesMeta:s}=l,d={},g="/",y=[];for(let j=0;j<s.length;++j){let v=s[j],m=j===s.length-1,w=g==="/"?u:u.slice(g.length)||"/",R=ou({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},w),D=v.route;if(!R&&m&&o&&!s[s.length-1].route.index&&(R=ou({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},w)),!R)return null;Object.assign(d,R.params),y.push({params:d,pathname:dn([g,R.pathname]),pathnameBase:sv(dn([g,R.pathnameBase])),route:D}),R.pathnameBase!=="/"&&(g=dn([g,R.pathnameBase]))}return y}function ou(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[o,s]=av(l.path,l.caseSensitive,l.end),d=u.match(o);if(!d)return null;let g=d[0],y=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:s.reduce((m,{paramName:w,isOptional:R},D)=>{if(w==="*"){let L=j[D]||"";y=g.slice(0,g.length-L.length).replace(/(.)\/+$/,"$1")}const H=j[D];return R&&!H?m[w]=void 0:m[w]=(H||"").replace(/%2F/g,"/"),m},{}),pathname:g,pathnameBase:y,pattern:l}}function av(l,u=!1,o=!0){Ut(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,j,v)=>(s.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(s.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),s]}function lv(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Ut(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function hn(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,s=l.charAt(o);return s&&s!=="/"?null:l.slice(o)||"/"}function iv(l,u="/"){let{pathname:o,search:s="",hash:d=""}=typeof l=="string"?pl(l):l;return{pathname:o?o.startsWith("/")?o:rv(o,u):u,search:cv(s),hash:ov(d)}}function rv(l,u){let o=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function qc(l,u,o,s){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uv(l){return l.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function Mo(l){let u=uv(l);return u.map((o,s)=>s===u.length-1?o.pathname:o.pathnameBase)}function Do(l,u,o,s=!1){let d;typeof l=="string"?d=pl(l):(d={...l},Me(!d.pathname||!d.pathname.includes("?"),qc("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),qc("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),qc("#","search","hash",d)));let g=l===""||d.pathname==="",y=g?"/":d.pathname,j;if(y==null)j=o;else{let R=u.length-1;if(!s&&y.startsWith("..")){let D=y.split("/");for(;D[0]==="..";)D.shift(),R-=1;d.pathname=D.join("/")}j=R>=0?u[R]:"/"}let v=iv(d,j),m=y&&y!=="/"&&y.endsWith("/"),w=(g||y===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(m||w)&&(v.pathname+="/"),v}var dn=l=>l.join("/").replace(/\/\/+/g,"/"),sv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),cv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,ov=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function fv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Jm=["POST","PUT","PATCH","DELETE"];new Set(Jm);var dv=["GET",...Jm];new Set(dv);var bl=M.createContext(null);bl.displayName="DataRouter";var bu=M.createContext(null);bu.displayName="DataRouterState";M.createContext(!1);var Wm=M.createContext({isTransitioning:!1});Wm.displayName="ViewTransition";var hv=M.createContext(new Map);hv.displayName="Fetchers";var gv=M.createContext(null);gv.displayName="Await";var kt=M.createContext(null);kt.displayName="Navigation";var wi=M.createContext(null);wi.displayName="Location";var Xt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var Oo=M.createContext(null);Oo.displayName="RouteError";function mv(l,{relative:u}={}){Me(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=M.useContext(kt),{hash:d,pathname:g,search:y}=Ti(l,{relative:u}),j=g;return o!=="/"&&(j=g==="/"?o:dn([o,g])),s.createHref({pathname:j,search:y,hash:d})}function yl(){return M.useContext(wi)!=null}function gn(){return Me(yl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(wi).location}var Fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pm(l){M.useContext(kt).static||M.useLayoutEffect(l)}function Im(){let{isDataRoute:l}=M.useContext(Xt);return l?Av():pv()}function pv(){Me(yl(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(bl),{basename:u,navigator:o}=M.useContext(kt),{matches:s}=M.useContext(Xt),{pathname:d}=gn(),g=JSON.stringify(Mo(s)),y=M.useRef(!1);return Pm(()=>{y.current=!0}),M.useCallback((v,m={})=>{if(Ut(y.current,Fm),!y.current)return;if(typeof v=="number"){o.go(v);return}let w=Do(v,JSON.parse(g),d,m.relative==="path");l==null&&u!=="/"&&(w.pathname=w.pathname==="/"?u:dn([u,w.pathname])),(m.replace?o.replace:o.push)(w,m.state,m)},[u,o,g,d,l])}M.createContext(null);function Ti(l,{relative:u}={}){let{matches:o}=M.useContext(Xt),{pathname:s}=gn(),d=JSON.stringify(Mo(o));return M.useMemo(()=>Do(l,JSON.parse(d),s,u==="path"),[l,d,s,u])}function bv(l,u){return e0(l,u)}function e0(l,u,o,s){Me(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=M.useContext(kt),{matches:g}=M.useContext(Xt),y=g[g.length-1],j=y?y.params:{},v=y?y.pathname:"/",m=y?y.pathnameBase:"/",w=y&&y.route;{let k=w&&w.path||"";t0(v,!w||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let R=gn(),D;if(u){let k=typeof u=="string"?pl(u):u;Me(m==="/"||k.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${k.pathname}" was given in the \`location\` prop.`),D=k}else D=R;let H=D.pathname||"/",L=H;if(m!=="/"){let k=m.replace(/^\//,"").split("/");L="/"+H.replace(/^\//,"").split("/").slice(k.length).join("/")}let G=Qm(l,{pathname:L});Ut(w||G!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Ut(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=jv(G&&G.map(k=>Object.assign({},k,{params:Object.assign({},j,k.params),pathname:dn([m,d.encodeLocation?d.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?m:dn([m,d.encodeLocation?d.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),g,o,s);return u&&Z?M.createElement(wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},Z):Z}function yv(){let l=Tv(),u=fv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),o=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},g={padding:"2px 4px",backgroundColor:s},y=null;return console.error("Error handled by React Router default ErrorBoundary:",l),y=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:g},"ErrorBoundary")," or"," ",M.createElement("code",{style:g},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},u),o?M.createElement("pre",{style:d},o):null,y)}var vv=M.createElement(yv,null),xv=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){console.error("React Router caught the following error during render",l,u)}render(){return this.state.error!==void 0?M.createElement(Xt.Provider,{value:this.props.routeContext},M.createElement(Oo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sv({routeContext:l,match:u,children:o}){let s=M.useContext(bl);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),M.createElement(Xt.Provider,{value:l},o)}function jv(l,u=[],o=null,s=null){if(l==null){if(!o)return null;if(o.errors)l=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)l=o.matches;else return null}let d=l,g=o?.errors;if(g!=null){let v=d.findIndex(m=>m.route.id&&g?.[m.route.id]!==void 0);Me(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let y=!1,j=-1;if(o)for(let v=0;v<d.length;v++){let m=d[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(j=v),m.route.id){let{loaderData:w,errors:R}=o,D=m.route.loader&&!w.hasOwnProperty(m.route.id)&&(!R||R[m.route.id]===void 0);if(m.route.lazy||D){y=!0,j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}return d.reduceRight((v,m,w)=>{let R,D=!1,H=null,L=null;o&&(R=g&&m.route.id?g[m.route.id]:void 0,H=m.route.errorElement||vv,y&&(j<0&&w===0?(t0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,L=null):j===w&&(D=!0,L=m.route.hydrateFallbackElement||null)));let G=u.concat(d.slice(0,w+1)),Z=()=>{let k;return R?k=H:D?k=L:m.route.Component?k=M.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=v,M.createElement(Sv,{match:m,routeContext:{outlet:v,matches:G,isDataRoute:o!=null},children:k})};return o&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?M.createElement(xv,{location:o.location,revalidation:o.revalidation,component:H,error:R,children:Z(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):Z()},null)}function Co(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _v(l){let u=M.useContext(bl);return Me(u,Co(l)),u}function zv(l){let u=M.useContext(bu);return Me(u,Co(l)),u}function Ev(l){let u=M.useContext(Xt);return Me(u,Co(l)),u}function Bo(l){let u=Ev(l),o=u.matches[u.matches.length-1];return Me(o.route.id,`${l} can only be used on routes that contain a unique "id"`),o.route.id}function wv(){return Bo("useRouteId")}function Tv(){let l=M.useContext(Oo),u=zv("useRouteError"),o=Bo("useRouteError");return l!==void 0?l:u.errors?.[o]}function Av(){let{router:l}=_v("useNavigate"),u=Bo("useNavigate"),o=M.useRef(!1);return Pm(()=>{o.current=!0}),M.useCallback(async(d,g={})=>{Ut(o.current,Fm),o.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:u,...g}))},[l,u])}var sm={};function t0(l,u,o){!u&&!sm[l]&&(sm[l]=!0,Ut(!1,o))}M.memo(Rv);function Rv({routes:l,future:u,state:o}){return e0(l,void 0,o,u)}function Mv({to:l,replace:u,state:o,relative:s}){Me(yl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=M.useContext(kt);Ut(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=M.useContext(Xt),{pathname:y}=gn(),j=Im(),v=Do(l,Mo(g),y,s==="path"),m=JSON.stringify(v);return M.useEffect(()=>{j(JSON.parse(m),{replace:u,state:o,relative:s})},[j,m,s,u,o]),null}function ji(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dv({basename:l="/",children:u=null,location:o,navigationType:s="POP",navigator:d,static:g=!1}){Me(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),j=M.useMemo(()=>({basename:y,navigator:d,static:g,future:{}}),[y,d,g]);typeof o=="string"&&(o=pl(o));let{pathname:v="/",search:m="",hash:w="",state:R=null,key:D="default"}=o,H=M.useMemo(()=>{let L=hn(v,y);return L==null?null:{location:{pathname:L,search:m,hash:w,state:R,key:D},navigationType:s}},[y,v,m,w,R,D,s]);return Ut(H!=null,`<Router basename="${y}"> is not able to match the URL "${v}${m}${w}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:M.createElement(kt.Provider,{value:j},M.createElement(wi.Provider,{children:u,value:H}))}function Ov({children:l,location:u}){return bv(_o(l),u)}function _o(l,u=[]){let o=[];return M.Children.forEach(l,(s,d)=>{if(!M.isValidElement(s))return;let g=[...u,d];if(s.type===M.Fragment){o.push.apply(o,_o(s.props.children,g));return}Me(s.type===ji,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!s.props.index||!s.props.children,"An index route cannot have child routes.");let y={id:s.props.id||g.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(y.children=_o(s.props.children,g)),o.push(y)}),o}var au="get",lu="application/x-www-form-urlencoded";function yu(l){return l!=null&&typeof l.tagName=="string"}function Cv(l){return yu(l)&&l.tagName.toLowerCase()==="button"}function Bv(l){return yu(l)&&l.tagName.toLowerCase()==="form"}function Nv(l){return yu(l)&&l.tagName.toLowerCase()==="input"}function Uv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function kv(l,u){return l.button===0&&(!u||u==="_self")&&!Uv(l)}var Zr=null;function Hv(){if(Zr===null)try{new FormData(document.createElement("form"),0),Zr=!1}catch{Zr=!0}return Zr}var Lv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vc(l){return l!=null&&!Lv.has(l)?(Ut(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lu}"`),null):l}function Gv(l,u){let o,s,d,g,y;if(Bv(l)){let j=l.getAttribute("action");s=j?hn(j,u):null,o=l.getAttribute("method")||au,d=Vc(l.getAttribute("enctype"))||lu,g=new FormData(l)}else if(Cv(l)||Nv(l)&&(l.type==="submit"||l.type==="image")){let j=l.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||j.getAttribute("action");if(s=v?hn(v,u):null,o=l.getAttribute("formmethod")||j.getAttribute("method")||au,d=Vc(l.getAttribute("formenctype"))||Vc(j.getAttribute("enctype"))||lu,g=new FormData(j,l),!Hv()){let{name:m,type:w,value:R}=l;if(w==="image"){let D=m?`${m}.`:"";g.append(`${D}x`,"0"),g.append(`${D}y`,"0")}else m&&g.append(m,R)}}else{if(yu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=au,s=null,d=lu,y=l}return g&&d==="text/plain"&&(y=g,g=void 0),{action:s,method:o.toLowerCase(),encType:d,formData:g,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function No(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function Yv(l,u,o){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${o}`:u&&hn(s.pathname,u)==="/"?s.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function qv(l,u){if(l.id in u)return u[l.id];try{let o=await import(l.module);return u[l.id]=o,o}catch(o){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Zv(l,u,o){let s=await Promise.all(l.map(async d=>{let g=u.routes[d.route.id];if(g){let y=await qv(g,o);return y.links?y.links():[]}return[]}));return $v(s.flat(1).filter(Vv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function cm(l,u,o,s,d,g){let y=(v,m)=>o[m]?v.route.id!==o[m].route.id:!0,j=(v,m)=>o[m].pathname!==v.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==v.params["*"];return g==="assets"?u.filter((v,m)=>y(v,m)||j(v,m)):g==="data"?u.filter((v,m)=>{let w=s.routes[v.route.id];if(!w||!w.hasLoader)return!1;if(y(v,m)||j(v,m))return!0;if(v.route.shouldRevalidate){let R=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Xv(l,u,{includeHydrateFallback:o}={}){return Qv(l.map(s=>{let d=u.routes[s.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Qv(l){return[...new Set(l)]}function Kv(l){let u={},o=Object.keys(l).sort();for(let s of o)u[s]=l[s];return u}function $v(l,u){let o=new Set;return new Set(u),l.reduce((s,d)=>{let g=JSON.stringify(Kv(d));return o.has(g)||(o.add(g),s.push({key:g,link:d})),s},[])}function n0(){let l=M.useContext(bl);return No(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Jv(){let l=M.useContext(bu);return No(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Uo=M.createContext(void 0);Uo.displayName="FrameworkContext";function a0(){let l=M.useContext(Uo);return No(l,"You must render this element inside a <HydratedRouter> element"),l}function Wv(l,u){let o=M.useContext(Uo),[s,d]=M.useState(!1),[g,y]=M.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:m,onMouseLeave:w,onTouchStart:R}=u,D=M.useRef(null);M.useEffect(()=>{if(l==="render"&&y(!0),l==="viewport"){let G=k=>{k.forEach(J=>{y(J.isIntersecting)})},Z=new IntersectionObserver(G,{threshold:.5});return D.current&&Z.observe(D.current),()=>{Z.disconnect()}}},[l]),M.useEffect(()=>{if(s){let G=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(G)}}},[s]);let H=()=>{d(!0)},L=()=>{d(!1),y(!1)};return o?l!=="intent"?[g,D,{}]:[g,D,{onFocus:yi(j,H),onBlur:yi(v,L),onMouseEnter:yi(m,H),onMouseLeave:yi(w,L),onTouchStart:yi(R,H)}]:[!1,D,{}]}function yi(l,u){return o=>{l&&l(o),o.defaultPrevented||u(o)}}function Fv({page:l,...u}){let{router:o}=n0(),s=M.useMemo(()=>Qm(o.routes,l,o.basename),[o.routes,l,o.basename]);return s?M.createElement(Iv,{page:l,matches:s,...u}):null}function Pv(l){let{manifest:u,routeModules:o}=a0(),[s,d]=M.useState([]);return M.useEffect(()=>{let g=!1;return Zv(l,u,o).then(y=>{g||d(y)}),()=>{g=!0}},[l,u,o]),s}function Iv({page:l,matches:u,...o}){let s=gn(),{manifest:d,routeModules:g}=a0(),{basename:y}=n0(),{loaderData:j,matches:v}=Jv(),m=M.useMemo(()=>cm(l,u,v,d,s,"data"),[l,u,v,d,s]),w=M.useMemo(()=>cm(l,u,v,d,s,"assets"),[l,u,v,d,s]),R=M.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let L=new Set,G=!1;if(u.forEach(k=>{let J=d.routes[k.route.id];!J||!J.hasLoader||(!m.some(X=>X.route.id===k.route.id)&&k.route.id in j&&g[k.route.id]?.shouldRevalidate||J.hasClientLoader?G=!0:L.add(k.route.id))}),L.size===0)return[];let Z=Yv(l,y,"data");return G&&L.size>0&&Z.searchParams.set("_routes",u.filter(k=>L.has(k.route.id)).map(k=>k.route.id).join(",")),[Z.pathname+Z.search]},[y,j,s,d,m,u,l,g]),D=M.useMemo(()=>Xv(w,d),[w,d]),H=Pv(w);return M.createElement(M.Fragment,null,R.map(L=>M.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...o})),D.map(L=>M.createElement("link",{key:L,rel:"modulepreload",href:L,...o})),H.map(({key:L,link:G})=>M.createElement("link",{key:L,...G})))}function ex(...l){return u=>{l.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var l0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l0&&(window.__reactRouterVersion="7.7.1")}catch{}function tx({basename:l,children:u,window:o}){let s=M.useRef();s.current==null&&(s.current=qy({window:o,v5Compat:!0}));let d=s.current,[g,y]=M.useState({action:d.action,location:d.location}),j=M.useCallback(v=>{M.startTransition(()=>y(v))},[y]);return M.useLayoutEffect(()=>d.listen(j),[d,j]),M.createElement(Dv,{basename:l,children:u,location:g.location,navigationType:g.action,navigator:d})}var i0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ko=M.forwardRef(function({onClick:u,discover:o="render",prefetch:s="none",relative:d,reloadDocument:g,replace:y,state:j,target:v,to:m,preventScrollReset:w,viewTransition:R,...D},H){let{basename:L}=M.useContext(kt),G=typeof m=="string"&&i0.test(m),Z,k=!1;if(typeof m=="string"&&G&&(Z=m,l0))try{let _e=new URL(window.location.href),at=m.startsWith("//")?new URL(_e.protocol+m):new URL(m),it=hn(at.pathname,L);at.origin===_e.origin&&it!=null?m=it+at.search+at.hash:k=!0}catch{Ut(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=mv(m,{relative:d}),[X,ae,Q]=Wv(s,D),le=ix(m,{replace:y,state:j,target:v,preventScrollReset:w,relative:d,viewTransition:R});function W(_e){u&&u(_e),_e.defaultPrevented||le(_e)}let we=M.createElement("a",{...D,...Q,href:Z||J,onClick:k||g?u:W,ref:ex(H,ae),target:v,"data-discover":!G&&o==="render"?"true":void 0});return X&&!G?M.createElement(M.Fragment,null,we,M.createElement(Fv,{page:J})):we});ko.displayName="Link";var nx=M.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:s="",end:d=!1,style:g,to:y,viewTransition:j,children:v,...m},w){let R=Ti(y,{relative:m.relative}),D=gn(),H=M.useContext(bu),{navigator:L,basename:G}=M.useContext(kt),Z=H!=null&&ox(R)&&j===!0,k=L.encodeLocation?L.encodeLocation(R).pathname:R.pathname,J=D.pathname,X=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;o||(J=J.toLowerCase(),X=X?X.toLowerCase():null,k=k.toLowerCase()),X&&G&&(X=hn(X,G)||X);const ae=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let Q=J===k||!d&&J.startsWith(k)&&J.charAt(ae)==="/",le=X!=null&&(X===k||!d&&X.startsWith(k)&&X.charAt(k.length)==="/"),W={isActive:Q,isPending:le,isTransitioning:Z},we=Q?u:void 0,_e;typeof s=="function"?_e=s(W):_e=[s,Q?"active":null,le?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let at=typeof g=="function"?g(W):g;return M.createElement(ko,{...m,"aria-current":we,className:_e,ref:w,style:at,to:y,viewTransition:j},typeof v=="function"?v(W):v)});nx.displayName="NavLink";var ax=M.forwardRef(({discover:l="render",fetcherKey:u,navigate:o,reloadDocument:s,replace:d,state:g,method:y=au,action:j,onSubmit:v,relative:m,preventScrollReset:w,viewTransition:R,...D},H)=>{let L=sx(),G=cx(j,{relative:m}),Z=y.toLowerCase()==="get"?"get":"post",k=typeof j=="string"&&i0.test(j),J=X=>{if(v&&v(X),X.defaultPrevented)return;X.preventDefault();let ae=X.nativeEvent.submitter,Q=ae?.getAttribute("formmethod")||y;L(ae||X.currentTarget,{fetcherKey:u,method:Q,navigate:o,replace:d,state:g,relative:m,preventScrollReset:w,viewTransition:R})};return M.createElement("form",{ref:H,method:Z,action:G,onSubmit:s?v:J,...D,"data-discover":!k&&l==="render"?"true":void 0})});ax.displayName="Form";function lx(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r0(l){let u=M.useContext(bl);return Me(u,lx(l)),u}function ix(l,{target:u,replace:o,state:s,preventScrollReset:d,relative:g,viewTransition:y}={}){let j=Im(),v=gn(),m=Ti(l,{relative:g});return M.useCallback(w=>{if(kv(w,u)){w.preventDefault();let R=o!==void 0?o:Ei(v)===Ei(m);j(l,{replace:R,state:s,preventScrollReset:d,relative:g,viewTransition:y})}},[v,j,m,o,s,u,l,d,g,y])}var rx=0,ux=()=>`__${String(++rx)}__`;function sx(){let{router:l}=r0("useSubmit"),{basename:u}=M.useContext(kt),o=wv();return M.useCallback(async(s,d={})=>{let{action:g,method:y,encType:j,formData:v,body:m}=Gv(s,u);if(d.navigate===!1){let w=d.fetcherKey||ux();await l.fetch(w,o,d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||y,formEncType:d.encType||j,flushSync:d.flushSync})}else await l.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||y,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,u,o])}function cx(l,{relative:u}={}){let{basename:o}=M.useContext(kt),s=M.useContext(Xt);Me(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),g={...Ti(l||".",{relative:u})},y=gn();if(l==null){g.search=y.search;let j=new URLSearchParams(g.search),v=j.getAll("index");if(v.some(w=>w==="")){j.delete("index"),v.filter(R=>R).forEach(R=>j.append("index",R));let w=j.toString();g.search=w?`?${w}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(g.pathname=g.pathname==="/"?o:dn([o,g.pathname])),Ei(g)}function ox(l,{relative:u}={}){let o=M.useContext(Wm);Me(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=r0("useViewTransitionState"),d=Ti(l,{relative:u});if(!o.isTransitioning)return!1;let g=hn(o.currentLocation.pathname,s)||o.currentLocation.pathname,y=hn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return ou(d.pathname,y)!=null||ou(d.pathname,g)!=null}const fx="/assets/logo-Hzr1jdtX.png",dx=p.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,hx=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,gx=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,mx=p.img`
  height: 40px;
  width: auto;
`,px=p.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;
`,bx=p.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Xr=p(ko)`
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
    padding: 0.4rem 0.8rem;
  }
`;function yx(){const l=gn();return c.jsx(dx,{children:c.jsxs(hx,{children:[c.jsx(Xr,{to:"/",children:c.jsxs(gx,{children:[c.jsx(mx,{src:fx,alt:"SCKW Logo"}),c.jsx(px,{children:"SC Konstanz-Wollmatingen e. V."})]})}),c.jsxs(bx,{children:[c.jsx(Xr,{to:"/sponsoring",$active:l.pathname==="/sponsoring",children:"🤝 Sponsoring"}),c.jsx(Xr,{to:"/jobs",$active:l.pathname==="/jobs",children:"💼 Jobbörse"}),c.jsx(Xr,{to:"/renovierung",$active:l.pathname==="/renovierung",children:"🏗️ Renovierung"})]})]})})}const vx=p.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,xx=p.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function Ho(){return c.jsxs(vx,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",c.jsx(xx,{href:"mailto:grimm@sckw.de",children:"grimm@sckw.de"})]})}const u0=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"✅ Vergeben",maxSponsors:1,sponsors:[{name:"RicoBet",image:"ricobet.png",website:null,since:"2023",until:"2025"}],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","1 Seite im Stadionmagazin","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Stadionansage bei jedem Heimspiel","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🥈 Co-Sponsor",price:"10.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotärmel 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/2 Seite im Stadionmagazin","2 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"⭐️ Premium-Partner",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Banner (5x2 m) am Gelände",highlight:!0,icon:"🖼️"},{text:"1/2 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Erweitert*",highlight:!0,icon:"📱"},{text:"Website: Startseite Erweitert*",highlight:!1,icon:"🌐"}],benefits:["1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin","Social Media ERWEITERT: Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche","Website STARTSEITE ERWEITERT: Logo auf der Startseite mit kleinerer Fläche"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟧 11 vergeben · ~19 verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"1 Bande (3x1 m)",highlight:!1,icon:"🏟️"},{text:"Präsenz am Spielfeld bei allen Heimspielen",highlight:!0,icon:"⚽"},{text:"Social Media: Begrüßungspost",highlight:!0,icon:"📱"},{text:"Website: Sponsoren-Seite*",highlight:!1,icon:"🌐"}],benefits:["1 Bande (3x1 m) am Spielfeldrand","Sichtbarkeit bei allen Heimspielen","Website SPONSOREN-SEITE: Auflistung auf separater Sponsoren-Seite","Einmalkosten: 70 €/lfd. Meter für Herstellung"]}],Sx=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,jx=p.div`
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
`,_x=p.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,zx=p.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,Ex=p.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,wx=p.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,Tx=p.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,Ax=p.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,Rx=p.li`
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
`,Mx=p.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,Dx=p.span`
  flex: 1;
`,Ox=p.a`
  display: inline-block;
  background: ${l=>l.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${l=>l.isVergeben?"none":"auto"};
  margin-top: auto;

  &:hover {
    background: ${l=>l.isVergeben?"#ccc":"#b8005a"};
    transform: ${l=>l.isVergeben?"none":"scale(1.05)"};
  }
`,Cx=p.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Bx="grimm@sckw.de";function Nx({packages:l}){const u=y=>y.toLowerCase().includes("verfügbar")?"verfügbar":y.toLowerCase().includes("vergeben")?"vergeben":"neutral",o=y=>{const j=y.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},s=y=>{const j=y.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),m=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Bx}?subject=${v}&body=${m}`},d=y=>{const j=y.maxSponsors-(y.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},g=l.filter(y=>!y.title.includes("Platz-Renovierung"));return c.jsx(Sx,{children:g.map((y,j)=>{const{isFullyBooked:v}=d(y),m=u(y.status),w=m==="vergeben"||v,R=v?"vergeben":m,D=y.keyBenefits||[];return c.jsxs(jx,{isVergeben:w,children:[c.jsxs(_x,{children:[c.jsx(zx,{children:o(y.title)}),c.jsx(Ex,{children:y.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!w&&c.jsx(wx,{children:y.price}),c.jsx(Tx,{status:R,children:R==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),w?c.jsx(Cx,{children:"✅ Alle Plätze vergeben"}):c.jsx(Ax,{children:D.map((H,L)=>c.jsxs(Rx,{isHighlight:H.highlight,children:[c.jsx(Mx,{children:H.icon}),c.jsx(Dx,{children:H.text})]},L))}),c.jsx(Ox,{href:w?void 0:s(y.title),isVergeben:w,children:w?"Vergeben":"Jetzt anfragen"})]},j)})})}const Ux=p.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,kx=p.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Hx=p.button`
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
`,Lx=p.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,Gx=p.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,Yx=p.div`
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
`,qx=p.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Vx=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:c.jsxs(c.Fragment,{children:[c.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:c.jsxs(c.Fragment,{children:[c.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",c.jsx("br",{}),c.jsx("br",{}),c.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:c.jsx(c.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function Zx(){const[l,u]=M.useState([]),o=d=>{u(g=>g.includes(d)?g.filter(y=>y!==d):[...g,d])},s=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o(g))};return c.jsx(Ux,{children:Vx.map(d=>{const g=l.includes(d.id);return c.jsxs(kx,{children:[c.jsxs(Hx,{isOpen:g,onClick:()=>o(d.id),onKeyDown:y=>s(y,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[c.jsxs("span",{children:[c.jsx(qx,{children:d.icon}),d.title]}),c.jsx(Lx,{isOpen:g,children:"▼"})]}),c.jsx(Gx,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:c.jsx(Yx,{children:d.content})})]},d.id)})})}const Xx=p.section`
  background: #f8f9fb;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,Qx=p.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
`,Kx=p.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`,om=p.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`,$x=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,fm=p.div`
  background: ${l=>l.preferred?"linear-gradient(135deg, #e10073 0%, #ff1493 100%)":"linear-gradient(135deg, #6c757d 0%, #495057 100%)"};
  color: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px
    ${l=>l.preferred?"rgba(225, 0, 115, 0.25)":"rgba(108, 117, 125, 0.25)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px
      ${l=>l.preferred?"rgba(225, 0, 115, 0.35)":"rgba(108, 117, 125, 0.35)"};
  }
`,Jx=p.div`
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
`,dm=p.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`,Wx=p.svg`
  height: 50px;
  width: auto;
`,hm=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,gm=p.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,mm=p.a`
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
`,Fx=p.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`,Px=p.h4`
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
`,pm=p.p`
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Ix=p.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,e2=p.h4`
  color: #856404;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,t2=p.p`
  color: #856404;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`,n2=p.div`
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
`,a2=p.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,l2=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,i2=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,r2=p.button`
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
`,u2=p.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Zc=p.div`
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
`,Qc=p.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,s2=p.button`
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
`,c2=p.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;function o2(){const[l,u]=M.useState(!1),o=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")},s=d=>{d.preventDefault(),u(!0)};return c.jsxs(Xx,{id:"spenden",children:[c.jsx(Qx,{children:"💚 Spenden für den SC Konstanz-Wollmatingen"}),c.jsxs(Kx,{children:[c.jsx(om,{children:"Ohne Zuwendungen von Spendern, Gönnern, Förderern und Sponsoren ist der Spiel-, Turnier- und Trainingsbetrieb der Jugendabteilung und der Aktivenbereiche unseres Vereins nicht zu finanzieren. Die Mitgliedsbeiträge reichen für die umfassenden Aufgaben, die unser Verein für die Jugend im Breiten- und im Leistungssport, die Aus- und Weiterbildung der Trainer und Betreuer und die sportlich aktiv tätigen Mitglieder, Spieler und Teams erbringt, nicht aus."}),c.jsx(om,{children:c.jsx("strong",{children:"Wir freuen uns über jede Zuwendung und Unterstützung!"})})]}),c.jsxs($x,{children:[c.jsxs(fm,{preferred:!0,children:[c.jsx(Jx,{children:"⭐ Bevorzugt"}),c.jsx(dm,{children:c.jsxs(Wx,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.33c-.498 0-.968.382-1.061.913l-.619 3.949-.013.083-.637 4.084c-.229.685-.727 1.061-1.319 1.061L7.076 21.337z",fill:"#263B80"}),c.jsx("path",{d:"M20.781 7.519c-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.95c-.498 0-.968.382-1.061.913l-.756 4.814-.035.199-.561 3.584c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c3.213 0 5.733-1.311 6.467-5.097.307-1.582.149-2.906-.697-3.732-.244-.238-.5-.44-.785-.602-.998-.011-1.998-.011-1.998-.011z",fill:"#139AD6"}),c.jsx("path",{d:"M19.175 7.129c-.166-.039-.34-.071-.519-.097a9.54 9.54 0 0 0-1.348-.082H11.77c-.498 0-.969.382-1.062.913L9.493 13.34c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c.564 0 1.096.045 1.583.135.166.039.34.087.498.143.498-3.146.166-5.286-1.508-6.849z",fill:"#232C65"})]})}),c.jsx(hm,{children:"PayPal Spende"}),c.jsx(gm,{children:"Schnell, sicher und unkompliziert - spenden Sie direkt über PayPal. Ihre Spende kommt sofort bei uns an."}),c.jsx(mm,{href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💚 Mit PayPal spenden"})]}),c.jsxs(fm,{children:[c.jsx(dm,{children:"🏦"}),c.jsx(hm,{children:"Banküberweisung"}),c.jsx(gm,{children:"Traditionelle Überweisung direkt auf unser Vereinskonto. Ideal für größere Spenden und Spendenquittungen."}),c.jsx(mm,{onClick:s,children:"🏦 Kontodaten anzeigen"})]})]}),c.jsxs(Fx,{children:[c.jsx(Px,{children:"📄 Steuerliche Absetzbarkeit"}),c.jsxs(pm,{children:[c.jsx("strong",{children:"Bis 200 EUR:"})," Sie können einfach die Überweisungsquittung als Spendenbescheinigung bei der Steuererklärung angeben."]}),c.jsxs(pm,{children:[c.jsx("strong",{children:"Über 200 EUR:"})," Wir stellen Ihnen gerne eine offizielle Spendenquittung aus. Überweisen Sie dafür bitte auf unser Vereinskonto."]})]}),c.jsxs(Ix,{children:[c.jsx(e2,{children:"📧 Spendenquittung anfordern"}),c.jsxs(t2,{children:["Für Spenden über 200 EUR richten Sie bitte die Anforderung einer Spendenquittung per E-Mail an ",c.jsx("strong",{children:"grimm@sckw.de"})," oder schriftlich an die Postanschrift des Vereins. Bitte geben Sie Ihre Anschrift, Telefonnummer und den Verwendungszweck an."]})]}),l&&c.jsx(n2,{onClick:()=>u(!1),children:c.jsxs(a2,{onClick:d=>d.stopPropagation(),children:[c.jsxs(l2,{children:[c.jsx(i2,{children:"Kontoverbindung für Spenden"}),c.jsx(r2,{onClick:()=>u(!1),children:"×"})]}),c.jsxs(u2,{children:[c.jsxs(Zc,{children:[c.jsx(Xc,{children:"Kontoinhaber:"}),c.jsx(Qc,{children:"SC Konstanz-Wollmatingen"})]}),c.jsxs(Zc,{children:[c.jsx(Xc,{children:"IBAN:"}),c.jsx(Qc,{children:"DE12 6905 0001 0000 0228 06"})]}),c.jsxs(Zc,{children:[c.jsx(Xc,{children:"BIC:"}),c.jsx(Qc,{children:"SOLADES1KNZ"})]})]}),c.jsx(s2,{onClick:o,children:"📋 IBAN kopieren"}),c.jsx(c2,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})})]})}const f2=p.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  margin: 2rem 0;
`,d2=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,h2=p.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
`,g2=p.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,m2=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,p2=p.div`
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
`,b2=p.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e10073;
  justify-content: center;
  align-items: center;
  text-align: center;
`,y2=p.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`,v2=p.h4`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin: 0;
`,x2=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,S2=p.li`
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
`,j2=p.span`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`,_2=p.span`
  flex: 1;
`,z2=p.div`
  background: linear-gradient(135deg, #e10073 0%, #c70066 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  text-align: center;
  font-weight: 500;
`,E2=[{department:"Damen & Herren",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"⚽",text:"Equipment & Trainingsbälle"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Equipment"},{department:"Cheerleading",icon:"💃",items:[{icon:"🎽",text:"Cheerleading Uniformen"},{icon:"👨‍🏫",text:"Aufwandsentschädigungen Übungsleiter"},{icon:"🏆",text:"Wettkämpfe & Turniere"},{icon:"🎵",text:"Musik & Choreografie"},{icon:"🚌",text:"Auswärtsfahrten"}],costInfo:"Fokus: Wettkämpfe & Ausrüstung"},{department:"Fördergruppe",icon:"🎯",items:[{icon:"👕",text:"Zuschuss zu Trikots (Training)"},{icon:"🥅",text:"Minitore & Equipment"},{icon:"🏟️",text:"Platzkosten"},{icon:"⚽",text:"Trainingsbälle & Zubehör"},{icon:"👨‍🏫",text:"Kosten Übungsleiter"}],costInfo:"Unterstützung für alle Abteilungen"},{department:"Allgemein",icon:"🏟️",items:[{icon:"🏟️",text:"Platzpflege & Infrastruktur"},{icon:"💡",text:"Flutlicht & Stromkosten"},{icon:"🚿",text:"Sanitäranlagen & Umkleiden"},{icon:"🛠️",text:"Wartung & Reparaturen"},{icon:"📢",text:"Kommunikation & Marketing"}],costInfo:"Grundlage für alle Abteilungen"}];function w2(){return c.jsx(f2,{children:c.jsxs(d2,{children:[c.jsx(h2,{children:"Wofür wird Ihr Sponsoring verwendet?"}),c.jsx(g2,{children:"Transparenz ist uns wichtig! Hier sehen Sie, wie Ihr Sponsoring-Geld direkt in die verschiedenen Abteilungen und deren Bedürfnisse fließt."}),c.jsx(m2,{children:E2.map((l,u)=>c.jsxs(p2,{children:[c.jsxs(b2,{children:[c.jsx(y2,{children:l.icon}),c.jsx(v2,{children:l.department})]}),c.jsx(x2,{children:l.items.map((o,s)=>c.jsxs(S2,{children:[c.jsx(j2,{children:o.icon}),c.jsx(_2,{children:o.text})]},s))}),c.jsx(z2,{children:l.costInfo})]},u))})]})})}const s0="/assets/cheerleading_0-DQQGXi0R.jpg",c0="/assets/cheerleading_1-NkLBARmH.jpg",o0="/assets/cheerleading_2-CrezcZYL.jpg",f0="/assets/cheerleading_3-GN5rPHNN.jpg",d0="/assets/1-ClVWb4ei.png",h0="/assets/10-Bwp2eIye.png",g0="/assets/11-W061sOUI.png",m0="/assets/12-TjJyzl8L.png",p0="/assets/13-ChUUCdQQ.png",b0="/assets/14-BVhdRr98.png",y0="/assets/2-CcfgIQYe.png",v0="/assets/3-DYiPkVd7.png",x0="/assets/4-1upoqVoS.png",S0="/assets/5-D0tadXAC.png",j0="/assets/6-NJ4ELm_j.png",_0="/assets/7-BXo4_Bcj.png",z0="/assets/8-BbOqEnj_.png",E0="/assets/9-CIK0gi9o.png",w0="/assets/herren_0-BVVgyt1l.jpg",T0="/assets/herren_1-B8ywOnNy.jpg",A0="/assets/herren_10-DPVQsg9B.jpg",R0="/assets/herren_11-wfWG62H3.jpg",M0="/assets/herren_12-DEJSN2zG.jpg",D0="/assets/herren_13-F52vdukE.jpg",O0="/assets/herren_14-Cq9hoKfG.jpg",C0="/assets/herren_15-aYIFGauG.jpg",B0="/assets/herren_16-NYI2EaEN.jpg",N0="/assets/herren_17-B_52ysA2.jpg",U0="/assets/herren_18-DbwjVNKJ.jpg",k0="/assets/herren_19-BduD_J85.png",H0="/assets/herren_2--jFuixBF.jpg",L0="/assets/herren_3-BPz1zlkG.jpg",G0="/assets/herren_4-BZRrQaFr.jpg",Y0="/assets/herren_5-D-QrfY2P.jpg",q0="/assets/herren_6-DWQvi6Am.jpg",V0="/assets/herren_7-BXO6B8Bt.jpg",Z0="/assets/herren_8-Cg4rdr7T.jpg",X0="/assets/herren_9-DoLnTdRG.jpg",Q0="/assets/IMG-team-BGcF1agj.png",K0="/assets/IMG_5349-CpvIVKhM.jpg",$0="/assets/IMG_5369-DQ4CSwdg.jpg",J0="/assets/IMG_5421-BBzniIEN.jpg",W0="/assets/IMG_5442-D2PgutWB.jpg",F0="/assets/IMG_5952-B9VW6Qie.jpg",P0="/assets/Unbenann324t-IPGo6eoQ.png",I0="/assets/image0-DDrU5aZn.jpeg",ep="/assets/image11-BNM8hTkT.jpeg",tp="/assets/image8-BUnedp9U.jpeg",T2="/assets/grafhardenberg-Di5cVggE.png",A2="/assets/horta-DydWIGV7.png",R2="/assets/logans-BgpKwKYA.png",M2="/assets/ricobet-DsVC-eZt.png",D2="/assets/rothaus-DqkKD9yW.png",O2="/assets/tasty-B2pSa1rE.png",C2="/assets/cabin-window-B83r_CDB.jpg",B2="/assets/outside-9-xz17qL.jpg",N2="/assets/shower-B75caJ-F.jpg",U2="/assets/sitting-area-D7khB3Gw.jpg",k2="/assets/toilet-BpMHYbhh.jpg",H2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":s0,"../assets/gallery/cheerleading/cheerleading_1.jpg":c0,"../assets/gallery/cheerleading/cheerleading_2.jpg":o0,"../assets/gallery/cheerleading/cheerleading_3.jpg":f0,"../assets/gallery/damen/1.png":d0,"../assets/gallery/damen/10.png":h0,"../assets/gallery/damen/11.png":g0,"../assets/gallery/damen/12.png":m0,"../assets/gallery/damen/13.png":p0,"../assets/gallery/damen/14.png":b0,"../assets/gallery/damen/2.png":y0,"../assets/gallery/damen/3.png":v0,"../assets/gallery/damen/4.png":x0,"../assets/gallery/damen/5.png":S0,"../assets/gallery/damen/6.png":j0,"../assets/gallery/damen/7.png":_0,"../assets/gallery/damen/8.png":z0,"../assets/gallery/damen/9.png":E0,"../assets/gallery/herren/herren_0.jpg":w0,"../assets/gallery/herren/herren_1.jpg":T0,"../assets/gallery/herren/herren_10.jpg":A0,"../assets/gallery/herren/herren_11.jpg":R0,"../assets/gallery/herren/herren_12.jpg":M0,"../assets/gallery/herren/herren_13.jpg":D0,"../assets/gallery/herren/herren_14.jpg":O0,"../assets/gallery/herren/herren_15.jpg":C0,"../assets/gallery/herren/herren_16.jpg":B0,"../assets/gallery/herren/herren_17.jpg":N0,"../assets/gallery/herren/herren_18.jpg":U0,"../assets/gallery/herren/herren_19.png":k0,"../assets/gallery/herren/herren_2.jpg":H0,"../assets/gallery/herren/herren_3.jpg":L0,"../assets/gallery/herren/herren_4.jpg":G0,"../assets/gallery/herren/herren_5.jpg":Y0,"../assets/gallery/herren/herren_6.jpg":q0,"../assets/gallery/herren/herren_7.jpg":V0,"../assets/gallery/herren/herren_8.jpg":Z0,"../assets/gallery/herren/herren_9.jpg":X0,"../assets/gallery/jfv/IMG-team.png":Q0,"../assets/gallery/jfv/IMG_5349.jpg":K0,"../assets/gallery/jfv/IMG_5369.jpg":$0,"../assets/gallery/jfv/IMG_5421.jpg":J0,"../assets/gallery/jfv/IMG_5442.jpg":W0,"../assets/gallery/jfv/IMG_5952.jpg":F0,"../assets/gallery/jfv/Unbenann324t.png":P0,"../assets/gallery/jfv/image0.jpeg":I0,"../assets/gallery/jfv/image11.jpeg":ep,"../assets/gallery/jfv/image8.jpeg":tp}),L2=Object.assign({"../assets/sponsors/grafhardenberg.png":T2,"../assets/sponsors/horta.png":A2,"../assets/sponsors/logans.png":R2,"../assets/sponsors/ricobet.png":M2,"../assets/sponsors/rothaus.png":D2,"../assets/sponsors/tasty.png":O2}),G2=Object.assign({"../assets/renovation/cabin-window.jpg":C2,"../assets/renovation/outside.jpg":B2,"../assets/renovation/shower.jpg":N2,"../assets/renovation/sitting-area.jpg":U2,"../assets/renovation/toilet.jpg":k2}),np=l=>l.split("/").pop()?.toLowerCase()||"",Y2=l=>{const u=l.match(/gallery\/(.*?)\//);return u?u[1]:"Sonstige"};function q2(l){const u=[...l];for(let o=u.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[u[o],u[s]]=[u[s],u[o]]}return u}const ap=()=>{const l={};Object.entries(H2).forEach(([s,d])=>{const g=Y2(s);l[g]||(l[g]=[]),l[g].push(d)}),Object.keys(l).forEach(s=>{l[s]=q2(l[s])});const u={},o=["jfv","cheerleading","damen","herren"];return o.forEach(s=>{l[s]&&(u[s]=l[s])}),Object.keys(l).forEach(s=>{o.includes(s.toLowerCase())||(u[s]=l[s])}),u},lp=()=>{const l={};return Object.entries(L2).forEach(([u,o])=>{const s=np(u);l[s]=o}),l},ip=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(G2).forEach(([u,o])=>{const s=np(u);s.includes("sitting")?l.kabinen.push({src:o,alt:"Sitzbereich in den Kabinen"}):s.includes("outside")||s.includes("cabin-window")?s.includes("outside")?l.fassade.push({src:o,alt:"Außenfassade des Fürstenberg"}):s.includes("cabin-window")&&l.fassade.push({src:o,alt:"Fenster in den Kabinen"}):(s.includes("toilet")||s.includes("shower")||s.includes("wash"))&&(s.includes("toilet")?l.waschkueche.push({src:o,alt:"Toilette"}):s.includes("shower")?l.waschkueche.push({src:o,alt:"Dusche"}):l.waschkueche.push({src:o,alt:"Waschküche"}))}),l},V2=l=>{const o=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":s0,"../assets/gallery/cheerleading/cheerleading_1.jpg":c0,"../assets/gallery/cheerleading/cheerleading_2.jpg":o0,"../assets/gallery/cheerleading/cheerleading_3.jpg":f0,"../assets/gallery/damen/1.png":d0,"../assets/gallery/damen/10.png":h0,"../assets/gallery/damen/11.png":g0,"../assets/gallery/damen/12.png":m0,"../assets/gallery/damen/13.png":p0,"../assets/gallery/damen/14.png":b0,"../assets/gallery/damen/2.png":y0,"../assets/gallery/damen/3.png":v0,"../assets/gallery/damen/4.png":x0,"../assets/gallery/damen/5.png":S0,"../assets/gallery/damen/6.png":j0,"../assets/gallery/damen/7.png":_0,"../assets/gallery/damen/8.png":z0,"../assets/gallery/damen/9.png":E0,"../assets/gallery/herren/herren_0.jpg":w0,"../assets/gallery/herren/herren_1.jpg":T0,"../assets/gallery/herren/herren_10.jpg":A0,"../assets/gallery/herren/herren_11.jpg":R0,"../assets/gallery/herren/herren_12.jpg":M0,"../assets/gallery/herren/herren_13.jpg":D0,"../assets/gallery/herren/herren_14.jpg":O0,"../assets/gallery/herren/herren_15.jpg":C0,"../assets/gallery/herren/herren_16.jpg":B0,"../assets/gallery/herren/herren_17.jpg":N0,"../assets/gallery/herren/herren_18.jpg":U0,"../assets/gallery/herren/herren_19.png":k0,"../assets/gallery/herren/herren_2.jpg":H0,"../assets/gallery/herren/herren_3.jpg":L0,"../assets/gallery/herren/herren_4.jpg":G0,"../assets/gallery/herren/herren_5.jpg":Y0,"../assets/gallery/herren/herren_6.jpg":q0,"../assets/gallery/herren/herren_7.jpg":V0,"../assets/gallery/herren/herren_8.jpg":Z0,"../assets/gallery/herren/herren_9.jpg":X0,"../assets/gallery/jfv/IMG-team.png":Q0,"../assets/gallery/jfv/IMG_5349.jpg":K0,"../assets/gallery/jfv/IMG_5369.jpg":$0,"../assets/gallery/jfv/IMG_5421.jpg":J0,"../assets/gallery/jfv/IMG_5442.jpg":W0,"../assets/gallery/jfv/IMG_5952.jpg":F0,"../assets/gallery/jfv/Unbenann324t.png":P0,"../assets/gallery/jfv/image0.jpeg":I0,"../assets/gallery/jfv/image11.jpeg":ep,"../assets/gallery/jfv/image8.jpeg":tp})).find(([s])=>s.includes(l));return o?o[1]:""},Lo=(l,u)=>V2(`${l}/${l}_${u}.jpg`);ap(),lp(),ip();function Z2(){const l=ap(),[u,o]=M.useState(null);return M.useEffect(()=>{if(!u)return;const s=d=>{d.key==="Escape"&&o(null)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[u]),c.jsxs("section",{children:[c.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([s,d])=>c.jsxs("div",{style:{marginBottom:"2.5rem"},children:[c.jsx(X2,{children:s.toUpperCase()}),c.jsx(Q2,{children:d.map((g,y)=>c.jsx(K2,{src:g,alt:`Bild ${y+1} aus ${s}`,onClick:()=>o({folder:s,idx:y}),style:{cursor:"pointer"}},y))}),u&&u.folder===s&&c.jsx($2,{onClick:()=>o(null),children:c.jsxs(J2,{onClick:g=>g.stopPropagation(),children:[c.jsx(W2,{src:d[u.idx],alt:`Großansicht aus ${s}`}),c.jsx(F2,{onClick:()=>o(null),title:"Schließen",children:"×"})]})})]},s))]})}const X2=p.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,Q2=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,K2=p.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,$2=p.div`
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
`,J2=p.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,W2=p.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,F2=p.button`
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
`,P2=lp(),bm=l=>P2[l.toLowerCase()]||void 0;function I2(){const l=[];return u0.forEach(u=>{Array.isArray(u.sponsors)&&u.sponsors.forEach(o=>{l.push({name:o.name,image:o.image,website:o.website})})}),l.filter((u,o,s)=>s.findIndex(d=>d.name===u.name)===o)}const eS=I2();function tS(){return c.jsxs(nS,{children:[c.jsx(aS,{children:"Unsere Partner"}),c.jsx(lS,{children:eS.map((l,u)=>{const o=l.image&&bm(l.image)?c.jsx(rS,{src:bm(l.image),alt:l.name}):c.jsx(uS,{children:l.name});return l.website?c.jsx(Go,{href:l.website,target:"_blank",rel:"noopener noreferrer",title:`Besuche ${l.name}`,children:o},u):c.jsx(iS,{children:o},u)})})]})}const nS=p.section`
  background: #fff6fa;
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`,aS=p.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2.2rem;
`,lS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2.2rem 2.5rem;
  align-items: center;
  justify-items: center;
`,Go=p.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
`,iS=p.div`
  display: block;
`,rS=p.img`
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
  ${Go}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`,uS=p.div`
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
  ${Go}:hover & {
    background: #e10073;
    color: #fff;
  }
`,sS=p.section`
  background: url("${Lo("herren",4)}") center/cover;
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
`,cS=p.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
`,oS=p.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
  margin-top: 0.5rem;
`,ym=p.a`
  display: inline-block;
  background: ${l=>l.secondary?"rgba(255, 255, 255, 0.2)":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.7rem 2.1rem;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  z-index: 1;
  border: ${l=>l.secondary?"2px solid rgba(255, 255, 255, 0.4)":"none"};
  backdrop-filter: ${l=>l.secondary?"blur(10px)":"none"};

  &:hover {
    background: ${l=>l.secondary?"rgba(255, 255, 255, 0.3)":"#b8005a"};
    transform: translateY(-2px);
  }
`,fS=p.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,dS=p.main`
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
`,hS=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,gS=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 1.5rem 0;
  flex-wrap: wrap;
`,mS=p.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,pS=p.h3`
  font-size: 1.7rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`,vm=p.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`,bS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0 2rem 0;
`,ia=p.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ra=p.div`
  font-size: 1.13rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`,ua=p.div`
  font-size: 1.04rem;
  color: #222;
  line-height: 1.6;
`,yS=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,vS=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,xS=p.p`
  font-size: clamp(1.13rem, 1.5vw, 1.25rem);
  color: #222;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 700px;
`,SS=p.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,jS=p.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,_S=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Qr=p.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Kr=p.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,$r=p.ul`
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
`,zS=p.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,ES=p.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,wS=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,TS=p.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,AS=p.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,RS=p.ul`
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
`,vi=p.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,xi=p.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Kc=p.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,$c=p.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Jc=p.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,Wc=p.div`
  font-size: 0.98rem;
  color: #666;
`;function MS(){return c.jsxs(c.Fragment,{children:[c.jsx(sS,{children:c.jsxs(yS,{children:[c.jsx(cS,{children:"SC Konstanz-Wollmatingen"}),c.jsx(oS,{children:"Ihre Marke im Fokus – direkt am Spielfeldrand"}),c.jsxs(fS,{children:[c.jsx(ym,{href:"#sponsoring-pakete",children:"Jetzt Sponsor werden"}),c.jsx(ym,{href:"#spenden",secondary:!0,children:"Spenden"})]})]})}),c.jsxs(dS,{children:[c.jsx(hS,{id:"sponsoring-pakete",children:"Sponsoring-Pakete 2025/2026"}),c.jsx(vS,{children:c.jsx(xS,{children:"Gemeinsam für den Sport in Konstanz: Unterstützen Sie unsere Teams, fördern Sie Talente und werden Sie Teil einer starken Gemeinschaft. Ihr Engagement als Sponsor macht den Unterschied – auf und neben dem Spielfeld!"})}),c.jsx(Nx,{packages:u0}),c.jsx(Zx,{}),c.jsx(o2,{}),c.jsx(w2,{}),c.jsx(tS,{}),c.jsxs(SS,{children:[c.jsx(jS,{children:"Unsere Reichweite & Kanäle"}),c.jsxs(_S,{children:[c.jsxs(Qr,{children:[c.jsx(Kr,{children:"📱 Social Media"}),c.jsxs($r,{children:[c.jsx("li",{children:"Instagram: 2.500+ Follower"}),c.jsx("li",{children:"Reel-Reichweite bis 200k"}),c.jsx("li",{children:"Facebook: 1.800+ Follower"})]})]}),c.jsxs(Qr,{children:[c.jsx(Kr,{children:"🌐 Website & Online"}),c.jsxs($r,{children:[c.jsx("li",{children:"Monatliche Besucher: 5.000+"}),c.jsx("li",{children:"Newsletter-Abonnenten: 450+"}),c.jsx("li",{children:"Durchschnittliche Seitenaufrufe: 15.000+"}),c.jsx("li",{children:"Google-Sichtbarkeit: 95% lokale Suche"})]})]}),c.jsxs(Qr,{children:[c.jsx(Kr,{children:"🏟️ Offline & Events"}),c.jsxs($r,{children:[c.jsx("li",{children:"Heimspiele pro Saison: 15+"}),c.jsx("li",{children:"Durchschnittliche Zuschauer: 200+"}),c.jsx("li",{children:"Events & Turniere: 8+ pro Jahr"}),c.jsx("li",{children:"Stadionheft-Auflage: 300+ pro Spiel"})]})]}),c.jsxs(Qr,{children:[c.jsx(Kr,{children:"📢 Zusätzliche Kanäle"}),c.jsxs($r,{children:[c.jsx("li",{children:"Pressearbeit & Medienkontakte"}),c.jsx("li",{children:"Kooperationen mit lokalen Partnern"}),c.jsx("li",{children:"Vereinsfeste & Community-Events"}),c.jsx("li",{children:"Jugendförderung & Nachwuchsarbeit"})]})]})]})]}),c.jsxs(zS,{children:[c.jsx(ES,{children:'Werbung im Stadionmagazin „Heimspiel"'}),c.jsxs(wS,{children:[c.jsxs(TS,{children:[c.jsxs(Kc,{children:[c.jsx($c,{children:"1 Seite (Farbe)"}),c.jsx(Jc,{children:"1.000 €"}),c.jsx(Wc,{children:"DIN A4 (297 × 210 mm)"})]}),c.jsxs(Kc,{children:[c.jsx($c,{children:"1/2 Seite (Farbe)"}),c.jsx(Jc,{children:"500 €"}),c.jsx(Wc,{children:"DIN A5 (148 × 210 mm)"})]}),c.jsxs(Kc,{children:[c.jsx($c,{children:"1/4 Seite (Farbe)"}),c.jsx(Jc,{children:"250 €"}),c.jsx(Wc,{children:"DIN A6 (105 × 148 mm)"})]})]}),c.jsx(AS,{children:c.jsxs(RS,{children:[c.jsxs(vi,{children:[c.jsx(xi,{}),"15 Ausgaben pro Saison"]}),c.jsxs(vi,{children:[c.jsx(xi,{}),"ca. 100 Exemplare pro Heimspiel"]}),c.jsxs(vi,{children:[c.jsx(xi,{}),"Digitale Version (Social Media & Website)"]}),c.jsxs(vi,{children:[c.jsx(xi,{}),"1.000 – 1.500 Online Zugriffe je Ausgabe"]}),c.jsxs(vi,{children:[c.jsx(xi,{}),"DIN A4 Stadionmagazin"]})]})})]})]}),c.jsx(gS,{}),c.jsxs(mS,{children:[c.jsx(pS,{children:"Unsere Ziele und Ihr Beitrag als Sponsor"}),c.jsx(vm,{children:"Der SC Konstanz-Wollmatingen blickt mit großer Motivation auf die Saison 2025/26. Unsere Abteilungen verfolgen ambitionierte, aber realistische Ziele, die wir mit Ihrer Unterstützung erreichen möchten:"}),c.jsxs(bS,{children:[c.jsxs(ia,{children:[c.jsx(ra,{children:"1. Mannschaft (Damen)"}),c.jsx(ua,{children:"Die frisch in die Landesliga aufgestiegene Frauenmannschaft 1 will sich im ersten Tabellendrittel einordnen. Auch im Südbadischen Pokal erhofft sie sich Achtungserfolge. Die längeren Auswärtsfahrten in dieser Liga bringen erhöhte Reisekosten mit sich, für die wir gezielt Unterstützung suchen."})]}),c.jsxs(ia,{children:[c.jsx(ra,{children:"2. Mannschaft (Damen)"}),c.jsx(ua,{children:"Die Frauenmannschaft 2 setzt sich zum Ziel um die Meisterschaft mitzuspielen und den breiten, qualitativ hochwertigen Kader voll zu nutzen."})]}),c.jsxs(ia,{children:[c.jsx(ra,{children:"1. Mannschaft (Herren)"}),c.jsx(ua,{children:"Unser klares Ziel ist der Aufstieg in die nächsthöhere Liga. Dafür investieren wir in eine gezielte sportliche Weiterentwicklung und benötigen insbesondere Unterstützung für die Finanzierung von Trainings- und Spielbetrieb."})]}),c.jsxs(ia,{children:[c.jsx(ra,{children:"2. Mannschaft (Herren)"}),c.jsx(ua,{children:"Die zweite Mannschaft strebt einen Platz unter den Top 3 an. Auch hier sind gezielte Fördermaßnahmen und eine stabile finanzielle Basis entscheidend, um das sportliche Potenzial voll auszuschöpfen."})]}),c.jsxs(ia,{children:[c.jsx(ra,{children:"Cheerleading"}),c.jsx(ua,{children:"Das Cheerleading-Team plant die Teilnahme an mehreren Turnieren und benötigt dringend einen neuen Trikotsatz (Cheerleading-Uniformen). Auch hier sind Reisekosten ein wichtiger Faktor, um die Teilnahme an Wettbewerben zu ermöglichen."})]}),c.jsxs(ia,{children:[c.jsx(ra,{children:"Fördergruppe / Jugend"}),c.jsx(ua,{children:"Mit der Fördergruppe legen wir den Grundstein für den neuen Jugendfußball-Förderverein (JFV) Konstanz. Unser Ziel ist es, gezielt Talente zu fördern und ihnen durch qualifizierte Trainer optimale Entwicklungsmöglichkeiten zu bieten. Für die Finanzierung von Trainerfortbildungen und zusätzlichem Trainingsmaterial sind wir auf Unterstützung angewiesen."})]}),c.jsxs(ia,{children:[c.jsx(ra,{children:"Vereinsziel: Langfristige Partnerschaften"}),c.jsx(ua,{children:"Unser übergeordnetes Ziel ist es, langfristige Partner zu gewinnen, die uns sportlich wie wirtschaftlich begleiten und gemeinsam mit uns die Weiterentwicklung des Vereins in den kommenden Jahren aktiv mitgestalten möchten."})]})]}),c.jsxs(vm,{children:[c.jsx("b",{children:"Warum Ihre Unterstützung wichtig ist:"}),c.jsx("br",{}),"Die genannten Ziele sind nur mit einer soliden finanziellen Basis erreichbar. Ihre Förderung trägt dazu bei, Reisekosten zu decken, moderne Ausrüstung bereitzustellen und die sportliche Entwicklung aller Teams nachhaltig zu sichern. Sie investieren damit direkt in die Zukunft des Sports in Konstanz und in die Entwicklung junger Talente.",c.jsx("br",{}),c.jsx("br",{}),"Wir freuen uns, gemeinsam mit Ihnen diese Ziele zu verwirklichen!"]})]}),c.jsx(Z2,{})]}),c.jsx(Ho,{})]})}const DS=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],OS=p.section`
  background: url("${Lo("herren",1)}") center/cover;
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
`,CS=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,BS=p.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,NS=p.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,US=p.main`
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
`,kS=p.section`
  margin-bottom: 4rem;
`,HS=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,LS=p.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,GS=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,YS=p.div`
  text-align: center;
  margin-bottom: 3rem;
`,qS=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,VS=p.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,ZS=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,XS=p.div`
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
`,QS=p.div`
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
`,KS=p.div`
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
`,$S=p.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,JS=p.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,WS=p.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,FS=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,PS=p.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,IS=p.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,e3=p.button`
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
`,t3=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,n3=p.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,a3=p.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,l3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,el=p.div`
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
`,xm=p.div`
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
`,tl=p.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,nl=p.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,al=p.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,ll=p.ul`
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
`,il=p.button`
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
`,i3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,r3=p.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,u3=p.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,s3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Fc=p.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Pc=p.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ic=p.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,eo=p.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,c3=p.a`
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
`,o3=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,f3=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,d3=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,rl=p.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ul=p.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,sl=p.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function h3(){return c.jsxs(c.Fragment,{children:[c.jsx(OS,{children:c.jsxs(CS,{children:[c.jsx(BS,{children:"SCKW Jobbörse"}),c.jsx(NS,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),c.jsxs(US,{children:[c.jsxs(kS,{children:[c.jsx(HS,{children:"Willkommen bei der SCKW Jobbörse"}),c.jsx(LS,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),c.jsxs(GS,{children:[c.jsxs(YS,{children:[c.jsx(qS,{children:"So könnte es aussehen"}),c.jsx(VS,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),c.jsx(ZS,{children:DS.map(l=>c.jsxs(XS,{children:[l.isExample&&c.jsx(QS,{children:"MUSTER"}),c.jsx(KS,{children:c.jsx($S,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:u=>{u.currentTarget.style.display="none",u.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",u.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),c.jsx(JS,{children:l.title}),c.jsx(WS,{children:l.company}),c.jsx(FS,{children:l.tags.map((u,o)=>c.jsx(PS,{children:u},o))}),c.jsx(IS,{children:l.description}),c.jsx(e3,{children:"Mehr erfahren"})]},l.id))})]}),c.jsxs(t3,{children:[c.jsx(n3,{children:"Preise für Stellenausschreibungen"}),c.jsx(a3,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),c.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),c.jsxs(l3,{children:[c.jsxs(el,{children:[c.jsx(tl,{children:"Basis"}),c.jsx(nl,{children:"149 €"}),c.jsx(al,{children:"netto / Anzeige"}),c.jsxs(ll,{children:[c.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),c.jsx(Re,{children:"Firmenlogo und Link"}),c.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),c.jsx(Re,{children:"Bewerbermanagement"})]}),c.jsx(il,{className:"secondary",children:"Basis wählen"})]}),c.jsxs(el,{className:"popular",children:[c.jsx(xm,{children:"BELIEBT"}),c.jsx(tl,{children:"Standard"}),c.jsx(nl,{children:"229 €"}),c.jsx(al,{children:"netto / Anzeige"}),c.jsxs(ll,{children:[c.jsx(Re,{children:"Alle Basis-Features"}),c.jsx(Re,{children:"1 Social Media Post"}),c.jsx(Re,{children:"Instagram + Facebook Reichweite"}),c.jsx(Re,{children:"Newsletter-Erwähnung"})]}),c.jsx(il,{children:"Standard wählen"})]}),c.jsxs(el,{children:[c.jsx(tl,{children:"Boosted"}),c.jsx(nl,{children:"349 €"}),c.jsx(al,{children:"netto / Anzeige"}),c.jsxs(ll,{children:[c.jsx(Re,{children:"Alle Standard-Features"}),c.jsx(Re,{children:"Instagram Story"}),c.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),c.jsx(Re,{children:"Prioritäre Platzierung"})]}),c.jsx(il,{className:"secondary",children:"Boosted wählen"})]})]}),c.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),c.jsxs(i3,{children:[c.jsxs(el,{children:[c.jsx(tl,{children:"Job Flat SMALL"}),c.jsx(nl,{children:"799 €"}),c.jsx(al,{children:"netto / Jahr"}),c.jsxs(ll,{children:[c.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),c.jsx(Re,{children:"6 Social Media Posts"}),c.jsx(Re,{children:"Website-Präsenz"}),c.jsx(Re,{children:"Newsletter-Integration"})]}),c.jsx(il,{className:"secondary",children:"Small Flat"})]}),c.jsxs(el,{className:"popular",children:[c.jsx(xm,{children:"EMPFOHLEN"}),c.jsx(tl,{children:"Job Flat MEDIUM"}),c.jsx(nl,{children:"1.199 €"}),c.jsx(al,{children:"netto / Jahr"}),c.jsxs(ll,{children:[c.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),c.jsx(Re,{children:"Stadionmagazin-Präsenz"}),c.jsx(Re,{children:"Social Media Posts"}),c.jsx(Re,{children:"Stories & Highlights"})]}),c.jsx(il,{children:"Medium Flat"})]}),c.jsxs(el,{children:[c.jsx(tl,{children:"Job Flat PARTNER"}),c.jsx(nl,{children:"1.499 €"}),c.jsx(al,{children:"netto / Jahr"}),c.jsxs(ll,{children:[c.jsx(Re,{children:"Unbegrenzte Anzeigen"}),c.jsx(Re,{children:"Erwähnung bei Heimspielen"}),c.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),c.jsx(Re,{children:"Prioritärer Support"})]}),c.jsx(il,{className:"secondary",children:"Partner Flat"})]})]}),c.jsxs(r3,{children:[c.jsx(u3,{children:"➕ Zusatzoptionen"}),c.jsxs(s3,{children:[c.jsxs(Fc,{children:[c.jsx(Pc,{children:"Social Story"}),c.jsx(Ic,{children:"39 €"}),c.jsx(eo,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),c.jsxs(Fc,{children:[c.jsx(Pc,{children:"Designservice"}),c.jsx(Ic,{children:"59 €"}),c.jsx(eo,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),c.jsxs(Fc,{children:[c.jsx(Pc,{children:"Stadionmagazin"}),c.jsx(Ic,{children:"99 €"}),c.jsx(eo,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),c.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:c.jsx(c3,{href:"mailto:grimm@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),c.jsxs(o3,{children:[c.jsx(f3,{children:"🎯 Warum SCKW Jobbörse?"}),c.jsxs(d3,{children:[c.jsxs(rl,{children:[c.jsx(ul,{children:"🏠"}),c.jsxs(sl,{children:[c.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),c.jsxs(rl,{children:[c.jsx(ul,{children:"👥"}),c.jsxs(sl,{children:[c.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),c.jsxs(rl,{children:[c.jsx(ul,{children:"💰"}),c.jsxs(sl,{children:[c.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),c.jsxs(rl,{children:[c.jsx(ul,{children:"📈"}),c.jsxs(sl,{children:[c.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),c.jsxs(rl,{children:[c.jsx(ul,{children:"⚡"}),c.jsxs(sl,{children:[c.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),c.jsxs(rl,{children:[c.jsx(ul,{children:"🤲"}),c.jsxs(sl,{children:[c.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),c.jsx(Ho,{})]})}const g3={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},m3={packages:g3},p3=p.div`
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
`,b3=p.div`
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
`,y3=p.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,v3=p.div`
  margin-bottom: 1.5rem;
`,x3=p.div`
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
`,S3=p.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,j3=p.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,_3=p.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,z3=p.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,E3=p.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,w3=p.div`
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
`,T3=p.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,A3=p.div`
  flex: 1;
`,R3=p.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,M3=p.span`
  font-weight: 600;
  color: #374151;
`,D3=p.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,O3=p.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,C3=p.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,B3=p.button`
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
`,N3=p.div`
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
`,U3=()=>{const l=m3;return{kabinen:{current:l.packages.kabinen.current,goal:l.packages.kabinen.goal,donors:l.packages.kabinen.donors},fassade:{current:l.packages.fassade.current,goal:l.packages.fassade.goal,donors:l.packages.fassade.donors},waschkueche:{current:l.packages.waschkueche.current,goal:l.packages.waschkueche.goal,donors:l.packages.waschkueche.donors}}};function k3({data:l=U3(),realTime:u=!1}){const[o,s]=M.useState(l),[d,g]=M.useState(new Date),[y,j]=M.useState(!1),v=async()=>{j(!0);try{const R=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(R.ok){const D=await R.json(),H={kabinen:{current:D.packages.kabinen.current,goal:D.packages.kabinen.goal,donors:D.packages.kabinen.donors},fassade:{current:D.packages.fassade.current,goal:D.packages.fassade.goal,donors:D.packages.fassade.donors},waschkueche:{current:D.packages.waschkueche.current,goal:D.packages.waschkueche.goal,donors:D.packages.waschkueche.donors}};s(H),g(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(R){console.error("❌ Fehler beim Laden der Spendendaten:",R)}finally{j(!1)}};M.useEffect(()=>{if(!u)return;const R=setInterval(()=>{v()},3e4);return()=>clearInterval(R)},[u]);const m=R=>{switch(R){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},w=R=>{switch(R){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return R}};return c.jsxs(c.Fragment,{children:[c.jsx(p3,{children:Object.entries(o).map(([R,D])=>{const H=D.current/D.goal*100;return c.jsxs(b3,{children:[c.jsxs(y3,{children:[m(R)," ",w(R)]}),c.jsxs(v3,{children:[c.jsxs(x3,{children:[c.jsxs("span",{children:[D.current.toLocaleString("de-DE")," €"]}),c.jsxs("span",{children:[D.goal.toLocaleString("de-DE")," €"]})]}),c.jsx(S3,{children:c.jsx(j3,{$progress:H})}),c.jsxs(_3,{children:[Math.round(H),"% erreicht"]})]}),c.jsxs(z3,{children:[c.jsxs(E3,{children:["💝 Spender (",D.donors.length,")"]}),c.jsx(w3,{children:D.donors.length>0?D.donors.slice().reverse().map((L,G)=>c.jsxs(T3,{children:[c.jsxs(A3,{children:[c.jsx(R3,{children:L.anonymous?"Anonymer Spender":L.name}),L.comment&&c.jsxs(D3,{children:['"',L.comment,'"']}),L.date&&c.jsx(O3,{children:L.date})]}),c.jsxs(M3,{children:[L.amount.toLocaleString("de-DE")," €"]})]},G)):c.jsx(C3,{children:"Noch keine Spenden 🤗"})})]})]},R)})}),c.jsxs(B3,{onClick:v,disabled:y,title:"Spendendaten aktualisieren",children:["🔄",y?"Lade...":"Aktualisieren"]}),c.jsxs(N3,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const H3=p.section`
  background: url("${Lo("herren",18)}") center/cover;
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
`,L3=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,G3=p.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,Y3=p.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,q3=p.main`
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
`,V3=p.section`
  margin-bottom: 4rem;
`,Z3=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,X3=p.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Q3=p.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,K3=p.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,$3=p.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,J3=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,W3=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,F3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,to=p.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,no=p.div`
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
`,P3=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,I3=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,e5=p.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,t5=p.div`
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
`,n5=p.div`
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
`,a5=p.div`
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
`,l5=p.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,i5=p.button`
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
`,Sm=p.button`
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
`,ao=p.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,lo=p.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,r5=p.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,u5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,s5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,io=p.div`
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
`,ro=p.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,uo=p.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,so=p.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,co=p.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,c5=p.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,o5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,f5=p.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,d5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Jr=p.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Wr=p.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Fr=p.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,h5=p.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,g5=p.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,m5=p.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,p5=p.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,jm=p.a`
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
`,b5=p.div`
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
`,y5=p.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,v5=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,x5=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,S5=p.button`
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
`,j5=p.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,oo=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,fo=p.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,ho=p.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,_5=p.button`
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
`,z5=p.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,cl=ip();function go({images:l,onImageClick:u}){const[o,s]=M.useState(0);return M.useEffect(()=>{if(l.length<=1)return;const d=setInterval(()=>{s(g=>(g+1)%l.length)},4e3);return()=>clearInterval(d)},[l.length]),l.length===0?c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):c.jsxs(P3,{children:[l.map((d,g)=>c.jsx(I3,{src:d.src,alt:d.alt,$isActive:g===o,onClick:()=>u(g)},g)),l.length>1&&c.jsx(e5,{children:l.map((d,g)=>c.jsx(t5,{$isActive:g===o,onClick:()=>s(g)},g))})]})}function E5({images:l,initialIndex:u,onClose:o}){const[s,d]=M.useState(u),g=()=>{d(j=>(j+1)%l.length)},y=()=>{d(j=>(j-1+l.length)%l.length)};return M.useEffect(()=>{const j=v=>{v.key==="Escape"&&o(),v.key==="ArrowRight"&&g(),v.key==="ArrowLeft"&&y()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[]),c.jsx(n5,{onClick:o,children:c.jsxs(a5,{onClick:j=>j.stopPropagation(),children:[c.jsx(i5,{onClick:o,children:"×"}),c.jsx(l5,{src:l[s].src,alt:l[s].alt}),l.length>1&&c.jsxs(c.Fragment,{children:[c.jsx(Sm,{$direction:"prev",onClick:y,children:"‹"}),c.jsx(Sm,{$direction:"next",onClick:g,children:"›"})]})]})})}function w5(){const[l,u]=M.useState(!1),[o,s]=M.useState([]),[d,g]=M.useState(0),[y,j]=M.useState(!1),v=(R,D)=>{s(R),g(D),u(!0)},m=R=>{R.preventDefault(),j(!0)},w=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return c.jsxs(c.Fragment,{children:[c.jsx(H3,{children:c.jsxs(L3,{children:[c.jsx(G3,{children:"🏟️ Fürstenberg weiterentwickeln"}),c.jsx(Y3,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),c.jsxs(q3,{children:[c.jsxs(V3,{children:[c.jsx(Z3,{children:"Der Fürstenberg - unser Kultplatz"}),c.jsx(X3,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),c.jsxs(Q3,{children:[c.jsx(K3,{children:"✨ Charme erhalten, Komfort verbessern"}),c.jsx($3,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),c.jsxs(J3,{children:[c.jsx(W3,{children:"🔍 Wo wir ansetzen möchten"}),c.jsxs(F3,{children:[c.jsxs(to,{children:[c.jsx(no,{children:c.jsx(go,{images:cl.kabinen,onImageClick:R=>v(cl.kabinen,R)})}),c.jsx(ao,{children:"🔧 Kabinen komfortabler gestalten"}),c.jsx(lo,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),c.jsxs(to,{children:[c.jsx(no,{children:c.jsx(go,{images:cl.fassade,onImageClick:R=>v(cl.fassade,R)})}),c.jsx(ao,{children:"🎨 Fassade & Fenster erneuern"}),c.jsx(lo,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),c.jsxs(to,{children:[c.jsx(no,{children:c.jsx(go,{images:cl.waschkueche,onImageClick:R=>v(cl.waschkueche,R)})}),c.jsx(ao,{children:"🧺 Waschküche auf Vordermann bringen"}),c.jsx(lo,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),c.jsxs(r5,{children:[c.jsx(u5,{children:"✨ Unsere Pläne für den Fürstenberg"}),c.jsxs(s5,{children:[c.jsxs(io,{children:[c.jsx(ro,{children:"🪑"}),c.jsx(uo,{children:"Kabinen sanieren"}),c.jsx(so,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),c.jsx(co,{children:"~8.000 €"})]}),c.jsxs(io,{children:[c.jsx(ro,{children:"🎨"}),c.jsx(uo,{children:"Fassade & Fenster erneuern"}),c.jsx(so,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),c.jsx(co,{children:"~15.000 €"})]}),c.jsxs(io,{children:[c.jsx(ro,{children:"🧺"}),c.jsx(uo,{children:"Waschküche modernisieren"}),c.jsx(so,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),c.jsx(co,{children:"~5.000 €"})]})]})]}),c.jsxs(c5,{children:[c.jsx(o5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),c.jsx(f5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),c.jsxs(d5,{children:[c.jsxs(Jr,{children:[c.jsx(Wr,{children:"🏆"}),c.jsxs(Fr,{children:[c.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),c.jsxs(Jr,{children:[c.jsx(Wr,{children:"📄"}),c.jsxs(Fr,{children:[c.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),c.jsxs(Jr,{children:[c.jsx(Wr,{children:"📱"}),c.jsxs(Fr,{children:[c.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),c.jsxs(Jr,{children:[c.jsx(Wr,{children:"🎯"}),c.jsxs(Fr,{children:[c.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),c.jsxs(h5,{children:[c.jsx(g5,{children:"🤝 Gemeinsam für den Fürstenberg"}),c.jsx(m5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),c.jsx(k3,{realTime:!0}),c.jsxs(p5,{children:[c.jsx(jm,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),c.jsx(jm,{href:"#",onClick:m,children:"🏦 Per Überweisung spenden"})]})]})]}),c.jsx(Ho,{}),y&&c.jsx(b5,{onClick:()=>j(!1),children:c.jsxs(y5,{onClick:R=>R.stopPropagation(),children:[c.jsxs(v5,{children:[c.jsx(x5,{children:"Kontoverbindung für Spenden"}),c.jsx(S5,{onClick:()=>j(!1),children:"×"})]}),c.jsxs(j5,{children:[c.jsxs(oo,{children:[c.jsx(fo,{children:"Kontoinhaber:"}),c.jsx(ho,{children:"SC Konstanz-Wollmatingen"})]}),c.jsxs(oo,{children:[c.jsx(fo,{children:"IBAN:"}),c.jsx(ho,{children:"DE12 6905 0001 0000 0228 06"})]}),c.jsxs(oo,{children:[c.jsx(fo,{children:"BIC:"}),c.jsx(ho,{children:"SOLADES1KNZ"})]})]}),c.jsx(_5,{onClick:w,children:"📋 IBAN kopieren"}),c.jsx(z5,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),l&&c.jsx(E5,{images:o,initialIndex:d,onClose:()=>u(!1)})]})}function T5(){return c.jsxs(tx,{children:[c.jsx(yx,{}),c.jsxs(Ov,{children:[c.jsx(ji,{path:"/",element:c.jsx(Mv,{to:"/sponsoring",replace:!0})}),c.jsx(ji,{path:"/sponsoring",element:c.jsx(MS,{})}),c.jsx(ji,{path:"/jobs",element:c.jsx(h3,{})}),c.jsx(ji,{path:"/renovierung",element:c.jsx(w5,{})})]})]})}const A5={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");Hb.createRoot(document.getElementById("root")).render(c.jsx(M.StrictMode,{children:c.jsx(Ly,{theme:A5,children:c.jsx(T5,{})})}));
