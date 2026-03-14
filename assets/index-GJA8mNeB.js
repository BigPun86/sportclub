(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function cy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Eu={exports:{}},Fl={};var Fg;function uy(){if(Fg)return Fl;Fg=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,f,m){var p=null;if(m!==void 0&&(p=""+m),f.key!==void 0&&(p=""+f.key),"key"in f){m={};for(var S in f)S!=="key"&&(m[S]=f[S])}else m=f;return f=m.ref,{$$typeof:a,type:c,key:p,ref:f!==void 0?f:null,props:m}}return Fl.Fragment=o,Fl.jsx=u,Fl.jsxs=u,Fl}var Pg;function dy(){return Pg||(Pg=1,Eu.exports=uy()),Eu.exports}var l=dy(),Tu={exports:{}},ae={};var Ig;function fy(){if(Ig)return ae;Ig=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.iterator;function L(j){return j===null||typeof j!="object"?null:(j=N&&j[N]||j["@@iterator"],typeof j=="function"?j:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,q={};function K(j,D,Q){this.props=j,this.context=D,this.refs=q,this.updater=Q||Y}K.prototype.isReactComponent={},K.prototype.setState=function(j,D){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,D,"setState")},K.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function G(){}G.prototype=K.prototype;function U(j,D,Q){this.props=j,this.context=D,this.refs=q,this.updater=Q||Y}var W=U.prototype=new G;W.constructor=U,V(W,K.prototype),W.isPureReactComponent=!0;var I=Array.isArray;function $(){}var _={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function fe(j,D,Q){var X=Q.ref;return{$$typeof:a,type:j,key:D,ref:X!==void 0?X:null,props:Q}}function ue(j,D){return fe(j.type,D,j.props)}function Le(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function Me(j){var D={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Q){return D[Q]})}var zt=/\/+/g;function ft(j,D){return typeof j=="object"&&j!==null&&j.key!=null?Me(""+j.key):D.toString(36)}function _t(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then($,$):(j.status="pending",j.then(function(D){j.status==="pending"&&(j.status="fulfilled",j.value=D)},function(D){j.status==="pending"&&(j.status="rejected",j.reason=D)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function B(j,D,Q,X,ie){var se=typeof j;(se==="undefined"||se==="boolean")&&(j=null);var be=!1;if(j===null)be=!0;else switch(se){case"bigint":case"string":case"number":be=!0;break;case"object":switch(j.$$typeof){case a:case o:be=!0;break;case A:return be=j._init,B(be(j._payload),D,Q,X,ie)}}if(be)return ie=ie(j),be=X===""?"."+ft(j,0):X,I(ie)?(Q="",be!=null&&(Q=be.replace(zt,"$&/")+"/"),B(ie,D,Q,"",function(fn){return fn})):ie!=null&&(Le(ie)&&(ie=ue(ie,Q+(ie.key==null||j&&j.key===ie.key?"":(""+ie.key).replace(zt,"$&/")+"/")+be)),D.push(ie)),1;be=0;var Ke=X===""?".":X+":";if(I(j))for(var Ee=0;Ee<j.length;Ee++)X=j[Ee],se=Ke+ft(X,Ee),be+=B(X,D,Q,se,ie);else if(Ee=L(j),typeof Ee=="function")for(j=Ee.call(j),Ee=0;!(X=j.next()).done;)X=X.value,se=Ke+ft(X,Ee++),be+=B(X,D,Q,se,ie);else if(se==="object"){if(typeof j.then=="function")return B(_t(j),D,Q,X,ie);throw D=String(j),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return be}function Z(j,D,Q){if(j==null)return j;var X=[],ie=0;return B(j,X,"","",function(se){return D.call(Q,se,ie++)}),X}function te(j){if(j._status===-1){var D=j._result;D=D(),D.then(function(Q){(j._status===0||j._status===-1)&&(j._status=1,j._result=Q)},function(Q){(j._status===0||j._status===-1)&&(j._status=2,j._result=Q)}),j._status===-1&&(j._status=0,j._result=D)}if(j._status===1)return j._result.default;throw j._result}var de=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},ye={map:Z,forEach:function(j,D,Q){Z(j,function(){D.apply(this,arguments)},Q)},count:function(j){var D=0;return Z(j,function(){D++}),D},toArray:function(j){return Z(j,function(D){return D})||[]},only:function(j){if(!Le(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ae.Activity=w,ae.Children=ye,ae.Component=K,ae.Fragment=u,ae.Profiler=f,ae.PureComponent=U,ae.StrictMode=c,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,ae.__COMPILER_RUNTIME={__proto__:null,c:function(j){return _.H.useMemoCache(j)}},ae.cache=function(j){return function(){return j.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(j,D,Q){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var X=V({},j.props),ie=j.key;if(D!=null)for(se in D.key!==void 0&&(ie=""+D.key),D)!le.call(D,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&D.ref===void 0||(X[se]=D[se]);var se=arguments.length-2;if(se===1)X.children=Q;else if(1<se){for(var be=Array(se),Ke=0;Ke<se;Ke++)be[Ke]=arguments[Ke+2];X.children=be}return fe(j.type,ie,X)},ae.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},ae.createElement=function(j,D,Q){var X,ie={},se=null;if(D!=null)for(X in D.key!==void 0&&(se=""+D.key),D)le.call(D,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ie[X]=D[X]);var be=arguments.length-2;if(be===1)ie.children=Q;else if(1<be){for(var Ke=Array(be),Ee=0;Ee<be;Ee++)Ke[Ee]=arguments[Ee+2];ie.children=Ke}if(j&&j.defaultProps)for(X in be=j.defaultProps,be)ie[X]===void 0&&(ie[X]=be[X]);return fe(j,se,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(j){return{$$typeof:S,render:j}},ae.isValidElement=Le,ae.lazy=function(j){return{$$typeof:A,_payload:{_status:-1,_result:j},_init:te}},ae.memo=function(j,D){return{$$typeof:x,type:j,compare:D===void 0?null:D}},ae.startTransition=function(j){var D=_.T,Q={};_.T=Q;try{var X=j(),ie=_.S;ie!==null&&ie(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then($,de)}catch(se){de(se)}finally{D!==null&&Q.types!==null&&(D.types=Q.types),_.T=D}},ae.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},ae.use=function(j){return _.H.use(j)},ae.useActionState=function(j,D,Q){return _.H.useActionState(j,D,Q)},ae.useCallback=function(j,D){return _.H.useCallback(j,D)},ae.useContext=function(j){return _.H.useContext(j)},ae.useDebugValue=function(){},ae.useDeferredValue=function(j,D){return _.H.useDeferredValue(j,D)},ae.useEffect=function(j,D){return _.H.useEffect(j,D)},ae.useEffectEvent=function(j){return _.H.useEffectEvent(j)},ae.useId=function(){return _.H.useId()},ae.useImperativeHandle=function(j,D,Q){return _.H.useImperativeHandle(j,D,Q)},ae.useInsertionEffect=function(j,D){return _.H.useInsertionEffect(j,D)},ae.useLayoutEffect=function(j,D){return _.H.useLayoutEffect(j,D)},ae.useMemo=function(j,D){return _.H.useMemo(j,D)},ae.useOptimistic=function(j,D){return _.H.useOptimistic(j,D)},ae.useReducer=function(j,D,Q){return _.H.useReducer(j,D,Q)},ae.useRef=function(j){return _.H.useRef(j)},ae.useState=function(j){return _.H.useState(j)},ae.useSyncExternalStore=function(j,D,Q){return _.H.useSyncExternalStore(j,D,Q)},ae.useTransition=function(){return _.H.useTransition()},ae.version="19.2.3",ae}var e0;function Rd(){return e0||(e0=1,Tu.exports=fy()),Tu.exports}var M=Rd();const tt=cy(M);var Au={exports:{}},Pl={},Cu={exports:{}},ku={};var t0;function hy(){return t0||(t0=1,(function(a){function o(B,Z){var te=B.length;B.push(Z);e:for(;0<te;){var de=te-1>>>1,ye=B[de];if(0<f(ye,Z))B[de]=Z,B[te]=ye,te=de;else break e}}function u(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var Z=B[0],te=B.pop();if(te!==Z){B[0]=te;e:for(var de=0,ye=B.length,j=ye>>>1;de<j;){var D=2*(de+1)-1,Q=B[D],X=D+1,ie=B[X];if(0>f(Q,te))X<ye&&0>f(ie,Q)?(B[de]=ie,B[X]=te,de=X):(B[de]=Q,B[D]=te,de=D);else if(X<ye&&0>f(ie,te))B[de]=ie,B[X]=te,de=X;else break e}}return Z}function f(B,Z){var te=B.sortIndex-Z.sortIndex;return te!==0?te:B.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var p=Date,S=p.now();a.unstable_now=function(){return p.now()-S}}var y=[],x=[],A=1,w=null,N=3,L=!1,Y=!1,V=!1,q=!1,K=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function W(B){for(var Z=u(x);Z!==null;){if(Z.callback===null)c(x);else if(Z.startTime<=B)c(x),Z.sortIndex=Z.expirationTime,o(y,Z);else break;Z=u(x)}}function I(B){if(V=!1,W(B),!Y)if(u(y)!==null)Y=!0,$||($=!0,Me());else{var Z=u(x);Z!==null&&_t(I,Z.startTime-B)}}var $=!1,_=-1,le=5,fe=-1;function ue(){return q?!0:!(a.unstable_now()-fe<le)}function Le(){if(q=!1,$){var B=a.unstable_now();fe=B;var Z=!0;try{e:{Y=!1,V&&(V=!1,G(_),_=-1),L=!0;var te=N;try{t:{for(W(B),w=u(y);w!==null&&!(w.expirationTime>B&&ue());){var de=w.callback;if(typeof de=="function"){w.callback=null,N=w.priorityLevel;var ye=de(w.expirationTime<=B);if(B=a.unstable_now(),typeof ye=="function"){w.callback=ye,W(B),Z=!0;break t}w===u(y)&&c(y),W(B)}else c(y);w=u(y)}if(w!==null)Z=!0;else{var j=u(x);j!==null&&_t(I,j.startTime-B),Z=!1}}break e}finally{w=null,N=te,L=!1}Z=void 0}}finally{Z?Me():$=!1}}}var Me;if(typeof U=="function")Me=function(){U(Le)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,ft=zt.port2;zt.port1.onmessage=Le,Me=function(){ft.postMessage(null)}}else Me=function(){K(Le,0)};function _t(B,Z){_=K(function(){B(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return N},a.unstable_next=function(B){switch(N){case 1:case 2:case 3:var Z=3;break;default:Z=N}var te=N;N=Z;try{return B()}finally{N=te}},a.unstable_requestPaint=function(){q=!0},a.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=N;N=B;try{return Z()}finally{N=te}},a.unstable_scheduleCallback=function(B,Z,te){var de=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?de+te:de):te=de,B){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,B={id:A++,callback:Z,priorityLevel:B,startTime:te,expirationTime:ye,sortIndex:-1},te>de?(B.sortIndex=te,o(x,B),u(y)===null&&B===u(x)&&(V?(G(_),_=-1):V=!0,_t(I,te-de))):(B.sortIndex=ye,o(y,B),Y||L||(Y=!0,$||($=!0,Me()))),B},a.unstable_shouldYield=ue,a.unstable_wrapCallback=function(B){var Z=N;return function(){var te=N;N=Z;try{return B.apply(this,arguments)}finally{N=te}}}})(ku)),ku}var n0;function my(){return n0||(n0=1,Cu.exports=hy()),Cu.exports}var Mu={exports:{}},ot={};var i0;function gy(){if(i0)return ot;i0=1;var a=Rd();function o(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)x+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,x,A){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:y,containerInfo:x,implementation:A}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ot.createPortal=function(y,x){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return m(y,x,null,A)},ot.flushSync=function(y){var x=p.T,A=c.p;try{if(p.T=null,c.p=2,y)return y()}finally{p.T=x,c.p=A,c.d.f()}},ot.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(y,x))},ot.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},ot.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var A=x.as,w=S(A,x.crossOrigin),N=typeof x.integrity=="string"?x.integrity:void 0,L=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;A==="style"?c.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:N,fetchPriority:L}):A==="script"&&c.d.X(y,{crossOrigin:w,integrity:N,fetchPriority:L,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},ot.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var A=S(x.as,x.crossOrigin);c.d.M(y,{crossOrigin:A,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(y)},ot.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var A=x.as,w=S(A,x.crossOrigin);c.d.L(y,A,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},ot.preloadModule=function(y,x){if(typeof y=="string")if(x){var A=S(x.as,x.crossOrigin);c.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:A,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(y)},ot.requestFormReset=function(y){c.d.r(y)},ot.unstable_batchedUpdates=function(y,x){return y(x)},ot.useFormState=function(y,x,A){return p.H.useFormState(y,x,A)},ot.useFormStatus=function(){return p.H.useHostTransitionStatus()},ot.version="19.2.3",ot}var a0;function py(){if(a0)return Mu.exports;a0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Mu.exports=gy(),Mu.exports}var l0;function xy(){if(l0)return Pl;l0=1;var a=my(),o=Rd(),u=py();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return y(r),e;if(s===i)return y(r),t;s=s.sibling}throw Error(c(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,i=s;break}if(g===i){d=!0,i=r,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,i=r;break}if(g===i){d=!0,i=s,n=r;break}g=g.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==i)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,N=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),U=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),Le=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=Le&&e[Le]||e["@@iterator"],typeof e=="function"?e:null)}var zt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case I:return"Suspense";case $:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case U:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:ft(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ft(e(t))}catch{}}return null}var _t=Array.isArray,B=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},de=[],ye=-1;function j(e){return{current:e}}function D(e){0>ye||(e.current=de[ye],de[ye]=null,ye--)}function Q(e,t){ye++,de[ye]=e.current,e.current=t}var X=j(null),ie=j(null),se=j(null),be=j(null);function Ke(e,t){switch(Q(se,t),Q(ie,e),Q(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vg(t),e=jg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(X),Q(X,e)}function Ee(){D(X),D(ie),D(se)}function fn(e){e.memoizedState!==null&&Q(be,e);var t=X.current,n=jg(t,e.type);t!==n&&(Q(ie,e),Q(X,n))}function hn(e){ie.current===e&&(D(X),D(ie)),be.current===e&&(D(be),$l._currentValue=te)}var Et,Fi;function Yt(e){if(Et===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Et=t&&t[1]||"",Fi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+e+Fi}var mn=!1;function co(e,t){if(!e||mn)return"";mn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(k){var C=k}Reflect.construct(e,[],H)}else{try{H.call()}catch(k){C=k}e.call(H.prototype)}}else{try{throw Error()}catch(k){C=k}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(k){if(k&&C&&typeof k.stack=="string")return[k.stack,C.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var b=d.split(`
`),T=g.split(`
`);for(r=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;if(i===b.length||r===T.length)for(i=b.length-1,r=T.length-1;1<=i&&0<=r&&b[i]!==T[r];)r--;for(;1<=i&&0<=r;i--,r--)if(b[i]!==T[r]){if(i!==1||r!==1)do if(i--,r--,0>r||b[i]!==T[r]){var R=`
`+b[i].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=i&&0<=r);break}}}finally{mn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yt(n):""}function Gx(e,t){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==t&&t!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return co(e.type,!1);case 11:return co(e.type.render,!1);case 1:return co(e.type,!0);case 31:return Yt("Activity");default:return""}}function Wd(e){try{var t="",n=null;do t+=Gx(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var uo=Object.prototype.hasOwnProperty,fo=a.unstable_scheduleCallback,ho=a.unstable_cancelCallback,Vx=a.unstable_shouldYield,Yx=a.unstable_requestPaint,Tt=a.unstable_now,qx=a.unstable_getCurrentPriorityLevel,Fd=a.unstable_ImmediatePriority,Pd=a.unstable_UserBlockingPriority,dr=a.unstable_NormalPriority,Kx=a.unstable_LowPriority,Id=a.unstable_IdlePriority,Zx=a.log,Qx=a.unstable_setDisableYieldValue,ll=null,At=null;function Xn(e){if(typeof Zx=="function"&&Qx(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(ll,e)}catch{}}var Ct=Math.clz32?Math.clz32:Jx,$x=Math.log,Xx=Math.LN2;function Jx(e){return e>>>=0,e===0?32:31-($x(e)/Xx|0)|0}var fr=256,hr=262144,mr=4194304;function Ei(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~s,i!==0?r=Ei(i):(d&=g,d!==0?r=Ei(d):n||(n=g&~e,n!==0&&(r=Ei(n))))):(g=i&~s,g!==0?r=Ei(g):d!==0?r=Ei(d):n||(n=i&~e,n!==0&&(r=Ei(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(){var e=mr;return mr<<=1,(mr&62914560)===0&&(mr=4194304),e}function mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fx(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,b=e.expirationTimes,T=e.hiddenUpdates;for(n=d&~n;0<n;){var R=31-Ct(n),H=1<<R;g[R]=0,b[R]=-1;var C=T[R];if(C!==null)for(T[R]=null,R=0;R<C.length;R++){var k=C[R];k!==null&&(k.lane&=-536870913)}n&=~H}i!==0&&tf(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function tf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function nf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function af(e,t){var n=t&-t;return n=(n&42)!==0?1:go(n),(n&(e.suspendedLanes|t))!==0?0:n}function go(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function po(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Kg(e.type))}function rf(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Jn=Math.random().toString(36).slice(2),it="__reactFiber$"+Jn,ht="__reactProps$"+Jn,Pi="__reactContainer$"+Jn,xo="__reactEvents$"+Jn,Px="__reactListeners$"+Jn,Ix="__reactHandles$"+Jn,sf="__reactResources$"+Jn,ol="__reactMarker$"+Jn;function bo(e){delete e[it],delete e[ht],delete e[xo],delete e[Px],delete e[Ix]}function Ii(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pi]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ag(e);e!==null;){if(n=e[it])return n;e=Ag(e)}return t}e=n,n=e.parentNode}return null}function ea(e){if(e=e[it]||e[Pi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ta(e){var t=e[sf];return t||(t=e[sf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[ol]=!0}var of=new Set,cf={};function Ti(e,t){na(e,t),na(e+"Capture",t)}function na(e,t){for(cf[e]=t,e=0;e<t.length;e++)of.add(t[e])}var eb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uf={},df={};function tb(e){return uo.call(df,e)?!0:uo.call(uf,e)?!1:eb.test(e)?df[e]=!0:(uf[e]=!0,!1)}function pr(e,t,n){if(tb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function xr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){if(!e._valueTracker){var t=ff(e)?"checked":"value";e._valueTracker=nb(e,t,""+e[t])}}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ff(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ib=/[\n"\\]/g;function Kt(e){return e.replace(ib,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vo(e,t,n,i,r,s,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?jo(e,d,qt(t)):n!=null?jo(e,d,qt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+qt(g):e.removeAttribute("name")}function mf(e,t,n,i,r,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){yo(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),yo(e)}function jo(e,t,n){t==="number"&&br(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ia(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function gf(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function pf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(c(92));if(_t(i)){if(1<i.length)throw Error(c(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),yo(e)}function aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ab=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ab.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function bf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&xf(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&xf(e,s,t[s])}function So(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yr(e){return rb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zn(){}var wo=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,ra=null;function yf(e){var t=ea(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[ht]||null;if(!r)throw Error(c(90));vo(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&hf(i)}break e;case"textarea":gf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ia(e,!!n.multiple,t,!1)}}}var _o=!1;function vf(e,t,n){if(_o)return e(t,n);_o=!0;try{var i=e(t);return i}finally{if(_o=!1,(la!==null||ra!==null)&&(rs(),la&&(t=la,e=ra,ra=la=null,yf(t),e)))for(t=0;t<e.length;t++)yf(e[t])}}function ul(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ht]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eo=!1;if(_n)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){Eo=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{Eo=!1}var Wn=null,To=null,vr=null;function jf(){if(vr)return vr;var e,t=To,n=t.length,i,r="value"in Wn?Wn.value:Wn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return vr=r.slice(e,1<i?1-i:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function Sf(){return!1}function mt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sr:Sf,this.isPropagationStopped=Sf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wr=mt(Ai),fl=w({},Ai,{view:0,detail:0}),sb=mt(fl),Ao,Co,hl,zr=w({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(Ao=e.screenX-hl.screenX,Co=e.screenY-hl.screenY):Co=Ao=0,hl=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),wf=mt(zr),ob=w({},zr,{dataTransfer:0}),cb=mt(ob),ub=w({},fl,{relatedTarget:0}),ko=mt(ub),db=w({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),fb=mt(db),hb=w({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mb=mt(hb),gb=w({},Ai,{data:0}),zf=mt(gb),pb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bb[e])?!!t[e]:!1}function Mo(){return yb}var vb=w({},fl,{key:function(e){if(e.key){var t=pb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jb=mt(vb),Sb=w({},zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=mt(Sb),wb=w({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),zb=mt(wb),_b=w({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eb=mt(_b),Tb=w({},zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ab=mt(Tb),Cb=w({},Ai,{newState:0,oldState:0}),kb=mt(Cb),Mb=[9,13,27,32],Ro=_n&&"CompositionEvent"in window,ml=null;_n&&"documentMode"in document&&(ml=document.documentMode);var Rb=_n&&"TextEvent"in window&&!ml,Ef=_n&&(!Ro||ml&&8<ml&&11>=ml),Tf=" ",Af=!1;function Cf(e,t){switch(e){case"keyup":return Mb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sa=!1;function Bb(e,t){switch(e){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(Af=!0,Tf);case"textInput":return e=t.data,e===Tf&&Af?null:e;default:return null}}function Db(e,t){if(sa)return e==="compositionend"||!Ro&&Cf(e,t)?(e=jf(),vr=To=Wn=null,sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ef&&t.locale!=="ko"?null:t.data;default:return null}}var Ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ob[e.type]:t==="textarea"}function Rf(e,t,n,i){la?ra?ra.push(i):ra=[i]:la=i,t=hs(t,"onChange"),0<t.length&&(n=new wr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var gl=null,pl=null;function Nb(e){mg(e,0)}function _r(e){var t=cl(e);if(hf(t))return e}function Bf(e,t){if(e==="change")return t}var Df=!1;if(_n){var Bo;if(_n){var Do="oninput"in document;if(!Do){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Do=typeof Of.oninput=="function"}Bo=Do}else Bo=!1;Df=Bo&&(!document.documentMode||9<document.documentMode)}function Nf(){gl&&(gl.detachEvent("onpropertychange",Hf),pl=gl=null)}function Hf(e){if(e.propertyName==="value"&&_r(pl)){var t=[];Rf(t,pl,e,zo(e)),vf(Nb,t)}}function Hb(e,t,n){e==="focusin"?(Nf(),gl=t,pl=n,gl.attachEvent("onpropertychange",Hf)):e==="focusout"&&Nf()}function Ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _r(pl)}function Lb(e,t){if(e==="click")return _r(t)}function Gb(e,t){if(e==="input"||e==="change")return _r(t)}function Vb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Vb;function xl(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uo.call(t,r)||!kt(e[r],t[r]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=Uf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yb=_n&&"documentMode"in document&&11>=document.documentMode,oa=null,No=null,bl=null,Ho=!1;function Yf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ho||oa==null||oa!==br(i)||(i=oa,"selectionStart"in i&&Oo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bl&&xl(bl,i)||(bl=i,i=hs(No,"onSelect"),0<i.length&&(t=new wr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=oa)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ca={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionrun:Ci("Transition","TransitionRun"),transitionstart:Ci("Transition","TransitionStart"),transitioncancel:Ci("Transition","TransitionCancel"),transitionend:Ci("Transition","TransitionEnd")},Uo={},qf={};_n&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function ki(e){if(Uo[e])return Uo[e];if(!ca[e])return e;var t=ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return Uo[e]=t[n];return e}var Kf=ki("animationend"),Zf=ki("animationiteration"),Qf=ki("animationstart"),qb=ki("transitionrun"),Kb=ki("transitionstart"),Zb=ki("transitioncancel"),$f=ki("transitionend"),Xf=new Map,Lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lo.push("scrollEnd");function rn(e,t){Xf.set(e,t),Ti(t,[e])}var Er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],ua=0,Go=0;function Tr(){for(var e=ua,t=Go=ua=0;t<e;){var n=Zt[t];Zt[t++]=null;var i=Zt[t];Zt[t++]=null;var r=Zt[t];Zt[t++]=null;var s=Zt[t];if(Zt[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Jf(n,r,s)}}function Ar(e,t,n,i){Zt[ua++]=e,Zt[ua++]=t,Zt[ua++]=n,Zt[ua++]=i,Go|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Vo(e,t,n,i){return Ar(e,t,n,i),Cr(e)}function Mi(e,t){return Ar(e,null,null,t),Cr(e)}function Jf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Ct(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Cr(e){if(50<Gl)throw Gl=0,Wc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var da={};function Qb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,i){return new Qb(e,t,n,i)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function En(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kr(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")Yo(e)&&(d=1);else if(typeof e=="string")d=F1(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Mt(31,n,t,r),e.elementType=fe,e.lanes=s,e;case V:return Ri(n.children,r,s,t);case q:d=8,r|=24;break;case K:return e=Mt(12,n,t,r|2),e.elementType=K,e.lanes=s,e;case I:return e=Mt(13,n,t,r),e.elementType=I,e.lanes=s,e;case $:return e=Mt(19,n,t,r),e.elementType=$,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:d=10;break e;case G:d=9;break e;case W:d=11;break e;case _:d=14;break e;case le:d=16,i=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=Mt(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Ri(e,t,n,i){return e=Mt(7,e,i,t),e.lanes=n,e}function qo(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Ff(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Ko(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pf=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=Pf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Wd(t)},Pf.set(e,t),t)}return{value:e,source:t,stack:Wd(t)}}var fa=[],ha=0,Mr=null,yl=0,$t=[],Xt=0,Fn=null,gn=1,pn="";function Tn(e,t){fa[ha++]=yl,fa[ha++]=Mr,Mr=e,yl=t}function If(e,t,n){$t[Xt++]=gn,$t[Xt++]=pn,$t[Xt++]=Fn,Fn=e;var i=gn;e=pn;var r=32-Ct(i)-1;i&=~(1<<r),n+=1;var s=32-Ct(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,gn=1<<32-Ct(t)+r|n<<r|i,pn=s+e}else gn=1<<s|n<<r|i,pn=e}function Zo(e){e.return!==null&&(Tn(e,1),If(e,1,0))}function Qo(e){for(;e===Mr;)Mr=fa[--ha],fa[ha]=null,yl=fa[--ha],fa[ha]=null;for(;e===Fn;)Fn=$t[--Xt],$t[Xt]=null,pn=$t[--Xt],$t[Xt]=null,gn=$t[--Xt],$t[Xt]=null}function eh(e,t){$t[Xt++]=gn,$t[Xt++]=pn,$t[Xt++]=Fn,gn=t.id,pn=t.overflow,Fn=e}var at=null,Re=null,xe=!1,Pn=null,Jt=!1,$o=Error(c(519));function In(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vl(Qt(t,e)),$o}function th(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[ht]=i,n){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(n=0;n<Yl.length;n++)me(Yl[n],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),mf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),pf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||bg(t.textContent,n)?(i.popover!=null&&(me("beforetoggle",t),me("toggle",t)),i.onScroll!=null&&me("scroll",t),i.onScrollEnd!=null&&me("scrollend",t),i.onClick!=null&&(t.onclick=zn),t=!0):t=!1,t||In(e,!0)}function nh(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:at=at.return}}function ma(e){if(e!==at)return!1;if(!xe)return nh(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||du(e.type,e.memoizedProps)),n=!n),n&&Re&&In(e),nh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=Tg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=Tg(e)}else t===27?(t=Re,hi(e.type)?(e=pu,pu=null,Re=e):Re=t):Re=at?Ft(e.stateNode.nextSibling):null;return!0}function Bi(){Re=at=null,xe=!1}function Xo(){var e=Pn;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Pn=null),e}function vl(e){Pn===null?Pn=[e]:Pn.push(e)}var Jo=j(null),Di=null,An=null;function ei(e,t,n){Q(Jo,t._currentValue),t._currentValue=n}function Cn(e){e._currentValue=Jo.current,D(Jo)}function Wo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=r;for(var b=0;b<t.length;b++)if(g.context===t[b]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Wo(s.return,n,e),i||(d=null);break e}s=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(c(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Wo(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ga(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var g=r.type;kt(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===be.current){if(d=r.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}r=r.return}e!==null&&Fo(t,e,n,i),t.flags|=262144}function Rr(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oi(e){Di=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return ih(Di,e)}function Br(e,t){return Di===null&&Oi(e),ih(e,t)}function ih(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},An===null){if(e===null)throw Error(c(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return n}var $b=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Xb=a.unstable_scheduleCallback,Jb=a.unstable_NormalPriority,Ze={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Po(){return{controller:new $b,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&Xb(Jb,function(){e.controller.abort()})}var Sl=null,Io=0,pa=0,xa=null;function Wb(e,t){if(Sl===null){var n=Sl=[];Io=0,pa=nu(),xa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Io++,t.then(ah,ah),t}function ah(){if(--Io===0&&Sl!==null){xa!==null&&(xa.status="fulfilled");var e=Sl;Sl=null,pa=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var lh=B.S;B.S=function(e,t){Ym=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wb(e,t),lh!==null&&lh(e,t)};var Ni=j(null);function ec(){var e=Ni.current;return e!==null?e:ke.pooledCache}function Dr(e,t){t===null?Q(Ni,Ni.current):Q(Ni,t.pool)}function rh(){var e=ec();return e===null?null:{parent:Ze._currentValue,pool:e}}var ba=Error(c(460)),tc=Error(c(474)),Or=Error(c(542)),Nr={then:function(){}};function sh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function oh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zn,zn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then(zn,zn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw Ui=t,ba}}function Hi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ui=n,ba):n}}var Ui=null;function ch(){if(Ui===null)throw Error(c(459));var e=Ui;return Ui=null,e}function uh(e){if(e===ba||e===Or)throw Error(c(483))}var ya=null,wl=0;function Hr(e){var t=wl;return wl+=1,ya===null&&(ya=[]),oh(ya,e,t)}function zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ur(e,t){throw t.$$typeof===N?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dh(e){function t(z,v){if(e){var E=z.deletions;E===null?(z.deletions=[v],z.flags|=16):E.push(v)}}function n(z,v){if(!e)return null;for(;v!==null;)t(z,v),v=v.sibling;return null}function i(z){for(var v=new Map;z!==null;)z.key!==null?v.set(z.key,z):v.set(z.index,z),z=z.sibling;return v}function r(z,v){return z=En(z,v),z.index=0,z.sibling=null,z}function s(z,v,E){return z.index=E,e?(E=z.alternate,E!==null?(E=E.index,E<v?(z.flags|=67108866,v):E):(z.flags|=67108866,v)):(z.flags|=1048576,v)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,v,E,O){return v===null||v.tag!==6?(v=qo(E,z.mode,O),v.return=z,v):(v=r(v,E),v.return=z,v)}function b(z,v,E,O){var ee=E.type;return ee===V?R(z,v,E.props.children,O,E.key):v!==null&&(v.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===le&&Hi(ee)===v.type)?(v=r(v,E.props),zl(v,E),v.return=z,v):(v=kr(E.type,E.key,E.props,null,z.mode,O),zl(v,E),v.return=z,v)}function T(z,v,E,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Ko(E,z.mode,O),v.return=z,v):(v=r(v,E.children||[]),v.return=z,v)}function R(z,v,E,O,ee){return v===null||v.tag!==7?(v=Ri(E,z.mode,O,ee),v.return=z,v):(v=r(v,E),v.return=z,v)}function H(z,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=qo(""+v,z.mode,E),v.return=z,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return E=kr(v.type,v.key,v.props,null,z.mode,E),zl(E,v),E.return=z,E;case Y:return v=Ko(v,z.mode,E),v.return=z,v;case le:return v=Hi(v),H(z,v,E)}if(_t(v)||Me(v))return v=Ri(v,z.mode,E,null),v.return=z,v;if(typeof v.then=="function")return H(z,Hr(v),E);if(v.$$typeof===U)return H(z,Br(z,v),E);Ur(z,v)}return null}function C(z,v,E,O){var ee=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return ee!==null?null:g(z,v,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case L:return E.key===ee?b(z,v,E,O):null;case Y:return E.key===ee?T(z,v,E,O):null;case le:return E=Hi(E),C(z,v,E,O)}if(_t(E)||Me(E))return ee!==null?null:R(z,v,E,O,null);if(typeof E.then=="function")return C(z,v,Hr(E),O);if(E.$$typeof===U)return C(z,v,Br(z,E),O);Ur(z,E)}return null}function k(z,v,E,O,ee){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return z=z.get(E)||null,g(v,z,""+O,ee);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case L:return z=z.get(O.key===null?E:O.key)||null,b(v,z,O,ee);case Y:return z=z.get(O.key===null?E:O.key)||null,T(v,z,O,ee);case le:return O=Hi(O),k(z,v,E,O,ee)}if(_t(O)||Me(O))return z=z.get(E)||null,R(v,z,O,ee,null);if(typeof O.then=="function")return k(z,v,E,Hr(O),ee);if(O.$$typeof===U)return k(z,v,E,Br(v,O),ee);Ur(v,O)}return null}function J(z,v,E,O){for(var ee=null,ve=null,F=v,oe=v=0,pe=null;F!==null&&oe<E.length;oe++){F.index>oe?(pe=F,F=null):pe=F.sibling;var je=C(z,F,E[oe],O);if(je===null){F===null&&(F=pe);break}e&&F&&je.alternate===null&&t(z,F),v=s(je,v,oe),ve===null?ee=je:ve.sibling=je,ve=je,F=pe}if(oe===E.length)return n(z,F),xe&&Tn(z,oe),ee;if(F===null){for(;oe<E.length;oe++)F=H(z,E[oe],O),F!==null&&(v=s(F,v,oe),ve===null?ee=F:ve.sibling=F,ve=F);return xe&&Tn(z,oe),ee}for(F=i(F);oe<E.length;oe++)pe=k(F,z,oe,E[oe],O),pe!==null&&(e&&pe.alternate!==null&&F.delete(pe.key===null?oe:pe.key),v=s(pe,v,oe),ve===null?ee=pe:ve.sibling=pe,ve=pe);return e&&F.forEach(function(bi){return t(z,bi)}),xe&&Tn(z,oe),ee}function ne(z,v,E,O){if(E==null)throw Error(c(151));for(var ee=null,ve=null,F=v,oe=v=0,pe=null,je=E.next();F!==null&&!je.done;oe++,je=E.next()){F.index>oe?(pe=F,F=null):pe=F.sibling;var bi=C(z,F,je.value,O);if(bi===null){F===null&&(F=pe);break}e&&F&&bi.alternate===null&&t(z,F),v=s(bi,v,oe),ve===null?ee=bi:ve.sibling=bi,ve=bi,F=pe}if(je.done)return n(z,F),xe&&Tn(z,oe),ee;if(F===null){for(;!je.done;oe++,je=E.next())je=H(z,je.value,O),je!==null&&(v=s(je,v,oe),ve===null?ee=je:ve.sibling=je,ve=je);return xe&&Tn(z,oe),ee}for(F=i(F);!je.done;oe++,je=E.next())je=k(F,z,oe,je.value,O),je!==null&&(e&&je.alternate!==null&&F.delete(je.key===null?oe:je.key),v=s(je,v,oe),ve===null?ee=je:ve.sibling=je,ve=je);return e&&F.forEach(function(oy){return t(z,oy)}),xe&&Tn(z,oe),ee}function Ce(z,v,E,O){if(typeof E=="object"&&E!==null&&E.type===V&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case L:e:{for(var ee=E.key;v!==null;){if(v.key===ee){if(ee=E.type,ee===V){if(v.tag===7){n(z,v.sibling),O=r(v,E.props.children),O.return=z,z=O;break e}}else if(v.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===le&&Hi(ee)===v.type){n(z,v.sibling),O=r(v,E.props),zl(O,E),O.return=z,z=O;break e}n(z,v);break}else t(z,v);v=v.sibling}E.type===V?(O=Ri(E.props.children,z.mode,O,E.key),O.return=z,z=O):(O=kr(E.type,E.key,E.props,null,z.mode,O),zl(O,E),O.return=z,z=O)}return d(z);case Y:e:{for(ee=E.key;v!==null;){if(v.key===ee)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(z,v.sibling),O=r(v,E.children||[]),O.return=z,z=O;break e}else{n(z,v);break}else t(z,v);v=v.sibling}O=Ko(E,z.mode,O),O.return=z,z=O}return d(z);case le:return E=Hi(E),Ce(z,v,E,O)}if(_t(E))return J(z,v,E,O);if(Me(E)){if(ee=Me(E),typeof ee!="function")throw Error(c(150));return E=ee.call(E),ne(z,v,E,O)}if(typeof E.then=="function")return Ce(z,v,Hr(E),O);if(E.$$typeof===U)return Ce(z,v,Br(z,E),O);Ur(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(n(z,v.sibling),O=r(v,E),O.return=z,z=O):(n(z,v),O=qo(E,z.mode,O),O.return=z,z=O),d(z)):n(z,v)}return function(z,v,E,O){try{wl=0;var ee=Ce(z,v,E,O);return ya=null,ee}catch(F){if(F===ba||F===Or)throw F;var ve=Mt(29,F,null,z.mode);return ve.lanes=O,ve.return=z,ve}}}var Li=dh(!0),fh=dh(!1),ti=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ni(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ii(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Cr(e),Jf(e,null,n),t}return Ar(e,i,t,n),Cr(e)}function _l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nf(e,n)}}function ac(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lc=!1;function El(){if(lc){var e=xa;if(e!==null)throw e}}function Tl(e,t,n,i){lc=!1;var r=e.updateQueue;ti=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var b=g,T=b.next;b.next=null,d===null?s=T:d.next=T,d=b;var R=e.alternate;R!==null&&(R=R.updateQueue,g=R.lastBaseUpdate,g!==d&&(g===null?R.firstBaseUpdate=T:g.next=T,R.lastBaseUpdate=b))}if(s!==null){var H=r.baseState;d=0,R=T=b=null,g=s;do{var C=g.lane&-536870913,k=C!==g.lane;if(k?(ge&C)===C:(i&C)===C){C!==0&&C===pa&&(lc=!0),R!==null&&(R=R.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var J=e,ne=g;C=t;var Ce=n;switch(ne.tag){case 1:if(J=ne.payload,typeof J=="function"){H=J.call(Ce,H,C);break e}H=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ne.payload,C=typeof J=="function"?J.call(Ce,H,C):J,C==null)break e;H=w({},H,C);break e;case 2:ti=!0}}C=g.callback,C!==null&&(e.flags|=64,k&&(e.flags|=8192),k=r.callbacks,k===null?r.callbacks=[C]:k.push(C))}else k={lane:C,tag:g.tag,payload:g.payload,callback:g.callback,next:null},R===null?(T=R=k,b=H):R=R.next=k,d|=C;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;k=g,g=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);R===null&&(b=H),r.baseState=b,r.firstBaseUpdate=T,r.lastBaseUpdate=R,s===null&&(r.shared.lanes=0),oi|=d,e.lanes=d,e.memoizedState=H}}function hh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function mh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)hh(n[e],t)}var va=j(null),Lr=j(0);function gh(e,t){e=Un,Q(Lr,e),Q(va,t),Un=e|t.baseLanes}function rc(){Q(Lr,Un),Q(va,va.current)}function sc(){Un=Lr.current,D(va),D(Lr)}var Rt=j(null),Wt=null;function ai(e){var t=e.alternate;Q(Ye,Ye.current&1),Q(Rt,e),Wt===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(Wt=e)}function oc(e){Q(Ye,Ye.current),Q(Rt,e),Wt===null&&(Wt=e)}function ph(e){e.tag===22?(Q(Ye,Ye.current),Q(Rt,e),Wt===null&&(Wt=e)):li()}function li(){Q(Ye,Ye.current),Q(Rt,Rt.current)}function Bt(e){D(Rt),Wt===e&&(Wt=null),D(Ye)}var Ye=j(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||mu(n)||gu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,re=null,Te=null,Qe=null,Vr=!1,ja=!1,Gi=!1,Yr=0,Al=0,Sa=null,Pb=0;function Ge(){throw Error(c(321))}function cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function uc(e,t,n,i,r,s){return kn=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?Ih:_c,Gi=!1,s=n(i,r),Gi=!1,ja&&(s=bh(t,n,i,r)),xh(e),s}function xh(e){B.H=Ml;var t=Te!==null&&Te.next!==null;if(kn=0,Qe=Te=re=null,Vr=!1,Al=0,Sa=null,t)throw Error(c(300));e===null||$e||(e=e.dependencies,e!==null&&Rr(e)&&($e=!0))}function bh(e,t,n,i){re=e;var r=0;do{if(ja&&(Sa=null),Al=0,ja=!1,25<=r)throw Error(c(301));if(r+=1,Qe=Te=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}B.H=em,s=t(n,i)}while(ja);return s}function Ib(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Cl(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(re.flags|=1024),t}function dc(){var e=Yr!==0;return Yr=0,e}function fc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function hc(e){if(Vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vr=!1}kn=0,Qe=Te=re=null,ja=!1,Al=Yr=0,Sa=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?re.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function qe(){if(Te===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Qe===null?re.memoizedState:Qe.next;if(t!==null)Qe=t,Te=e;else{if(e===null)throw re.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Qe===null?re.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(e){var t=Al;return Al+=1,Sa===null&&(Sa=[]),e=oh(Sa,e,t),t=re,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?Ih:_c),e}function Kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===U)return lt(e)}throw Error(c(438,String(e)))}function mc(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qr(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ue;return t.index++,n}function Mn(e,t){return typeof t=="function"?t(e):t}function Zr(e){var t=qe();return gc(t,Te,e)}function gc(e,t,n){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var g=d=null,b=null,T=t,R=!1;do{var H=T.lane&-536870913;if(H!==T.lane?(ge&H)===H:(kn&H)===H){var C=T.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),H===pa&&(R=!0);else if((kn&C)===C){T=T.next,C===pa&&(R=!0);continue}else H={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},b===null?(g=b=H,d=s):b=b.next=H,re.lanes|=C,oi|=C;H=T.action,Gi&&n(s,H),s=T.hasEagerState?T.eagerState:n(s,H)}else C={lane:H,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},b===null?(g=b=C,d=s):b=b.next=C,re.lanes|=H,oi|=H;T=T.next}while(T!==null&&T!==t);if(b===null?d=s:b.next=g,!kt(s,e.memoizedState)&&($e=!0,R&&(n=xa,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=b,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function pc(e){var t=qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);kt(s,t.memoizedState)||($e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function yh(e,t,n){var i=re,r=qe(),s=xe;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!kt((Te||r).memoizedState,n);if(d&&(r.memoizedState=n,$e=!0),r=r.queue,yc(Sh.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,wa(9,{destroy:void 0},jh.bind(null,i,r,n,t),null),ke===null)throw Error(c(349));s||(kn&127)!==0||vh(i,t,n)}return n}function vh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=qr(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jh(e,t,n,i){t.value=n,t.getSnapshot=i,wh(t)&&zh(e)}function Sh(e,t,n){return n(function(){wh(t)&&zh(e)})}function wh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function zh(e){var t=Mi(e,2);t!==null&&yt(t,e,2)}function xc(e){var t=ct();if(typeof e=="function"){var n=e;if(e=n(),Gi){Xn(!0);try{n()}finally{Xn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function _h(e,t,n,i){return e.baseState=n,gc(e,Te,typeof i=="function"?i:Mn)}function e1(e,t,n,i,r){if(Xr(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};B.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Eh(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Eh(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=B.T,d={};B.T=d;try{var g=n(r,i),b=B.S;b!==null&&b(d,g),Th(e,t,g)}catch(T){bc(e,t,T)}finally{s!==null&&d.types!==null&&(s.types=d.types),B.T=s}}else try{s=n(r,i),Th(e,t,s)}catch(T){bc(e,t,T)}}function Th(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ah(e,t,i)},function(i){return bc(e,t,i)}):Ah(e,t,n)}function Ah(e,t,n){t.status="fulfilled",t.value=n,Ch(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Eh(e,n)))}function bc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ch(t),t=t.next;while(t!==i)}e.action=null}function Ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kh(e,t){return t}function Mh(e,t){if(xe){var n=ke.formState;if(n!==null){e:{var i=re;if(xe){if(Re){t:{for(var r=Re,s=Jt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Ft(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Re=Ft(r.nextSibling),i=r.data==="F!";break e}}In(i)}i=!1}i&&(t=n[0])}}return n=ct(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kh,lastRenderedState:t},n.queue=i,n=Wh.bind(null,re,i),i.dispatch=n,i=xc(!1),s=zc.bind(null,re,!1,i.queue),i=ct(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=e1.bind(null,re,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Rh(e){var t=qe();return Bh(t,Te,e)}function Bh(e,t,n){if(t=gc(e,t,kh)[0],e=Zr(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Cl(t)}catch(d){throw d===ba?Or:d}else i=t;t=qe();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(re.flags|=2048,wa(9,{destroy:void 0},t1.bind(null,r,n),null)),[i,s,e]}function t1(e,t){e.action=t}function Dh(e){var t=qe(),n=Te;if(n!==null)return Bh(t,n,e);qe(),t=t.memoizedState,n=qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function wa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=qr(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Oh(){return qe().memoizedState}function Qr(e,t,n,i){var r=ct();re.flags|=e,r.memoizedState=wa(1|t,{destroy:void 0},n,i===void 0?null:i)}function $r(e,t,n,i){var r=qe();i=i===void 0?null:i;var s=r.memoizedState.inst;Te!==null&&i!==null&&cc(i,Te.memoizedState.deps)?r.memoizedState=wa(t,s,n,i):(re.flags|=e,r.memoizedState=wa(1|t,s,n,i))}function Nh(e,t){Qr(8390656,8,e,t)}function yc(e,t){$r(2048,8,e,t)}function n1(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=qr(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hh(e){var t=qe().memoizedState;return n1({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Uh(e,t){return $r(4,2,e,t)}function Lh(e,t){return $r(4,4,e,t)}function Gh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vh(e,t,n){n=n!=null?n.concat([e]):null,$r(4,4,Gh.bind(null,t,e),n)}function vc(){}function Yh(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&cc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function qh(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&cc(t,i[1]))return i[0];if(i=e(),Gi){Xn(!0);try{e()}finally{Xn(!1)}}return n.memoizedState=[i,t],i}function jc(e,t,n){return n===void 0||(kn&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Km(),re.lanes|=e,oi|=e,n)}function Kh(e,t,n,i){return kt(n,t)?n:va.current!==null?(e=jc(e,n,i),kt(e,t)||($e=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(ge&261930)===0?($e=!0,e.memoizedState=n):(e=Km(),re.lanes|=e,oi|=e,t)}function Zh(e,t,n,i,r){var s=Z.p;Z.p=s!==0&&8>s?s:8;var d=B.T,g={};B.T=g,zc(e,!1,t,n);try{var b=r(),T=B.S;if(T!==null&&T(g,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var R=Fb(b,i);kl(e,t,R,Nt(e))}else kl(e,t,i,Nt(e))}catch(H){kl(e,t,{then:function(){},status:"rejected",reason:H},Nt())}finally{Z.p=s,d!==null&&g.types!==null&&(d.types=g.types),B.T=d}}function i1(){}function Sc(e,t,n,i){if(e.tag!==5)throw Error(c(476));var r=Qh(e).queue;Zh(e,r,t,te,n===null?i1:function(){return $h(e),n(i)})}function Qh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $h(e){var t=Qh(e);t.next===null&&(t=e.alternate.memoizedState),kl(e,t.next.queue,{},Nt())}function wc(){return lt($l)}function Xh(){return qe().memoizedState}function Jh(){return qe().memoizedState}function a1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=ni(n);var i=ii(t,e,n);i!==null&&(yt(i,t,n),_l(i,t,n)),t={cache:Po()},e.payload=t;return}t=t.return}}function l1(e,t,n){var i=Nt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Xr(e)?Fh(t,n):(n=Vo(e,t,n,i),n!==null&&(yt(n,e,i),Ph(n,t,i)))}function Wh(e,t,n){var i=Nt();kl(e,t,n,i)}function kl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xr(e))Fh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(r.hasEagerState=!0,r.eagerState=g,kt(g,d))return Ar(e,t,r,0),ke===null&&Tr(),!1}catch{}if(n=Vo(e,t,r,i),n!==null)return yt(n,e,i),Ph(n,t,i),!0}return!1}function zc(e,t,n,i){if(i={lane:2,revertLane:nu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Xr(e)){if(t)throw Error(c(479))}else t=Vo(e,n,i,2),t!==null&&yt(t,e,2)}function Xr(e){var t=e.alternate;return e===re||t!==null&&t===re}function Fh(e,t){ja=Vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ph(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nf(e,n)}}var Ml={readContext:lt,use:Kr,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Ml.useEffectEvent=Ge;var Ih={readContext:lt,use:Kr,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Nh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Qr(4194308,4,Gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){Qr(4,2,e,t)},useMemo:function(e,t){var n=ct();t=t===void 0?null:t;var i=e();if(Gi){Xn(!0);try{e()}finally{Xn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ct();if(n!==void 0){var r=n(t);if(Gi){Xn(!0);try{n(t)}finally{Xn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=l1.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=xc(e);var t=e.queue,n=Wh.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vc,useDeferredValue:function(e,t){var n=ct();return jc(n,e,t)},useTransition:function(){var e=xc(!1);return e=Zh.bind(null,re,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,r=ct();if(xe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ke===null)throw Error(c(349));(ge&127)!==0||vh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Nh(Sh.bind(null,i,s,e),[e]),i.flags|=2048,wa(9,{destroy:void 0},jh.bind(null,i,s,n,t),null),n},useId:function(){var e=ct(),t=ke.identifierPrefix;if(xe){var n=pn,i=gn;n=(i&~(1<<32-Ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Pb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wc,useFormState:Mh,useActionState:Mh,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zc.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:mc,useCacheRefresh:function(){return ct().memoizedState=a1.bind(null,re)},useEffectEvent:function(e){var t=ct(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},_c={readContext:lt,use:Kr,useCallback:Yh,useContext:lt,useEffect:yc,useImperativeHandle:Vh,useInsertionEffect:Uh,useLayoutEffect:Lh,useMemo:qh,useReducer:Zr,useRef:Oh,useState:function(){return Zr(Mn)},useDebugValue:vc,useDeferredValue:function(e,t){var n=qe();return Kh(n,Te.memoizedState,e,t)},useTransition:function(){var e=Zr(Mn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:yh,useId:Xh,useHostTransitionStatus:wc,useFormState:Rh,useActionState:Rh,useOptimistic:function(e,t){var n=qe();return _h(n,Te,e,t)},useMemoCache:mc,useCacheRefresh:Jh};_c.useEffectEvent=Hh;var em={readContext:lt,use:Kr,useCallback:Yh,useContext:lt,useEffect:yc,useImperativeHandle:Vh,useInsertionEffect:Uh,useLayoutEffect:Lh,useMemo:qh,useReducer:pc,useRef:Oh,useState:function(){return pc(Mn)},useDebugValue:vc,useDeferredValue:function(e,t){var n=qe();return Te===null?jc(n,e,t):Kh(n,Te.memoizedState,e,t)},useTransition:function(){var e=pc(Mn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:yh,useId:Xh,useHostTransitionStatus:wc,useFormState:Dh,useActionState:Dh,useOptimistic:function(e,t){var n=qe();return Te!==null?_h(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:mc,useCacheRefresh:Jh};em.useEffectEvent=Hh;function Ec(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=ni(i);r.payload=t,n!=null&&(r.callback=n),t=ii(e,r,i),t!==null&&(yt(t,e,i),_l(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=ni(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ii(e,r,i),t!==null&&(yt(t,e,i),_l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),i=ni(n);i.tag=2,t!=null&&(i.callback=t),t=ii(e,i,n),t!==null&&(yt(t,e,n),_l(t,e,n))}};function tm(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!xl(n,i)||!xl(r,s):!0}function nm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Tc.enqueueReplaceState(t,t.state,null)}function Vi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function im(e){Er(e)}function am(e){console.error(e)}function lm(e){Er(e)}function Jr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function rm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ac(e,t,n){return n=ni(n),n.tag=3,n.payload={element:null},n.callback=function(){Jr(e,t)},n}function sm(e){return e=ni(e),e.tag=3,e}function om(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){rm(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){rm(t,n,i),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function r1(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ga(t,n,r,!0),n=Rt.current,n!==null){switch(n.tag){case 31:case 13:return Wt===null?ss():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Nr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ic(e,i,r)),!1;case 22:return n.flags|=65536,i===Nr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ic(e,i,r)),!1}throw Error(c(435,n.tag))}return Ic(e,i,r),ss(),!1}if(xe)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==$o&&(e=Error(c(422),{cause:i}),vl(Qt(e,n)))):(i!==$o&&(t=Error(c(423),{cause:i}),vl(Qt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Qt(i,n),r=Ac(e.stateNode,i,r),ac(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(c(520),{cause:i});if(s=Qt(s,n),Ll===null?Ll=[s]:Ll.push(s),Ve!==4&&(Ve=2),t===null)return!0;i=Qt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Ac(n.stateNode,i,e),ac(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ci===null||!ci.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=sm(r),om(r,e,n,i),ac(n,r),!1}n=n.return}while(n!==null);return!1}var Cc=Error(c(461)),$e=!1;function rt(e,t,n,i){t.child=e===null?fh(t,null,n,i):Li(t,e.child,n,i)}function cm(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return Oi(t),i=uc(e,t,n,d,s,r),g=dc(),e!==null&&!$e?(fc(e,t,r),Rn(e,t,r)):(xe&&g&&Zo(t),t.flags|=1,rt(e,t,i,r),t.child)}function um(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Yo(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,dm(e,t,s,i,r)):(e=kr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Hc(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(d,i)&&e.ref===t.ref)return Rn(e,t,r)}return t.flags|=1,e=En(s,i),e.ref=t.ref,e.return=t,t.child=e}function dm(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(xl(s,i)&&e.ref===t.ref)if($e=!1,t.pendingProps=i=s,Hc(e,r))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,Rn(e,t,r)}return kc(e,t,n,i,r)}function fm(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return hm(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dr(t,s!==null?s.cachePool:null),s!==null?gh(t,s):rc(),ph(t);else return i=t.lanes=536870912,hm(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Dr(t,s.cachePool),gh(t,s),li(),t.memoizedState=null):(e!==null&&Dr(t,null),rc(),li());return rt(e,t,r,n),t.child}function Rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hm(e,t,n,i,r){var s=ec();return s=s===null?null:{parent:Ze._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Dr(t,null),rc(),ph(t),e!==null&&ga(e,t,i,!0),t.childLanes=r,null}function Wr(e,t){return t=Pr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mm(e,t,n){return Li(t,e.child,null,n),e=Wr(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function s1(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(i.mode==="hidden")return e=Wr(t,i),t.lanes=536870912,Rl(null,e);if(oc(t),(e=Re)?(e=Eg(e,Jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Ff(e),n.return=t,t.child=n,at=t,Re=null)):e=null,e===null)throw In(t);return t.lanes=536870912,null}return Wr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(oc(t),r)if(t.flags&256)t.flags&=-257,t=mm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if($e||ga(e,t,n,!1),r=(n&e.childLanes)!==0,$e||r){if(i=ke,i!==null&&(d=af(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,Mi(e,d),yt(i,e,d),Cc;ss(),t=mm(e,t,n)}else e=s.treeContext,Re=Ft(d.nextSibling),at=t,xe=!0,Pn=null,Jt=!1,e!==null&&eh(t,e),t=Wr(t,i),t.flags|=4096;return t}return e=En(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function kc(e,t,n,i,r){return Oi(t),n=uc(e,t,n,i,void 0,r),i=dc(),e!==null&&!$e?(fc(e,t,r),Rn(e,t,r)):(xe&&i&&Zo(t),t.flags|=1,rt(e,t,n,r),t.child)}function gm(e,t,n,i,r,s){return Oi(t),t.updateQueue=null,n=bh(t,i,n,r),xh(e),i=dc(),e!==null&&!$e?(fc(e,t,s),Rn(e,t,s)):(xe&&i&&Zo(t),t.flags|=1,rt(e,t,n,s),t.child)}function pm(e,t,n,i,r){if(Oi(t),t.stateNode===null){var s=da,d=n.contextType;typeof d=="object"&&d!==null&&(s=lt(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},nc(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?lt(d):da,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ec(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Tc.enqueueReplaceState(s,s.state,null),Tl(t,i,s,r),El(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,b=Vi(n,g);s.props=b;var T=s.context,R=n.contextType;d=da,typeof R=="object"&&R!==null&&(d=lt(R));var H=n.getDerivedStateFromProps;R=typeof H=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,R||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||T!==d)&&nm(t,s,i,d),ti=!1;var C=t.memoizedState;s.state=C,Tl(t,i,s,r),El(),T=t.memoizedState,g||C!==T||ti?(typeof H=="function"&&(Ec(t,n,H,i),T=t.memoizedState),(b=ti||tm(t,n,b,i,C,T,d))?(R||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=T),s.props=i,s.state=T,s.context=d,i=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ic(e,t),d=t.memoizedProps,R=Vi(n,d),s.props=R,H=t.pendingProps,C=s.context,T=n.contextType,b=da,typeof T=="object"&&T!==null&&(b=lt(T)),g=n.getDerivedStateFromProps,(T=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==H||C!==b)&&nm(t,s,i,b),ti=!1,C=t.memoizedState,s.state=C,Tl(t,i,s,r),El();var k=t.memoizedState;d!==H||C!==k||ti||e!==null&&e.dependencies!==null&&Rr(e.dependencies)?(typeof g=="function"&&(Ec(t,n,g,i),k=t.memoizedState),(R=ti||tm(t,n,R,i,C,k,b)||e!==null&&e.dependencies!==null&&Rr(e.dependencies))?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,k,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,k,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=k),s.props=i,s.state=k,s.context=b,i=R):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Fr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Li(t,e.child,null,r),t.child=Li(t,null,n,r)):rt(e,t,n,r),t.memoizedState=s.state,e=t.child):e=Rn(e,t,r),e}function xm(e,t,n,i){return Bi(),t.flags|=256,rt(e,t,n,i),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(e){return{baseLanes:e,cachePool:rh()}}function Bc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ot),e}function bm(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(r?ai(t):li(),(e=Re)?(e=Eg(e,Jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Ff(e),n.return=t,t.child=n,at=t,Re=null)):e=null,e===null)throw In(t);return gu(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,r?(li(),r=t.mode,g=Pr({mode:"hidden",children:g},r),i=Ri(i,r,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=Rc(n),i.childLanes=Bc(e,d,n),t.memoizedState=Mc,Rl(null,i)):(ai(t),Dc(t,g))}var b=e.memoizedState;if(b!==null&&(g=b.dehydrated,g!==null)){if(s)t.flags&256?(ai(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState!==null?(li(),t.child=e.child,t.flags|=128,t=null):(li(),g=i.fallback,r=t.mode,i=Pr({mode:"visible",children:i.children},r),g=Ri(g,r,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,Li(t,e.child,null,n),i=t.child,i.memoizedState=Rc(n),i.childLanes=Bc(e,d,n),t.memoizedState=Mc,t=Rl(null,i));else if(ai(t),gu(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var T=d.dgst;d=T,i=Error(c(419)),i.stack="",i.digest=d,vl({value:i,source:null,stack:null}),t=Oc(e,t,n)}else if($e||ga(e,t,n,!1),d=(n&e.childLanes)!==0,$e||d){if(d=ke,d!==null&&(i=af(d,n),i!==0&&i!==b.retryLane))throw b.retryLane=i,Mi(e,i),yt(d,e,i),Cc;mu(g)||ss(),t=Oc(e,t,n)}else mu(g)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Re=Ft(g.nextSibling),at=t,xe=!0,Pn=null,Jt=!1,e!==null&&eh(t,e),t=Dc(t,i.children),t.flags|=4096);return t}return r?(li(),g=i.fallback,r=t.mode,b=e.child,T=b.sibling,i=En(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,T!==null?g=En(T,g):(g=Ri(g,r,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,Rl(null,i),i=t.child,g=e.child.memoizedState,g===null?g=Rc(n):(r=g.cachePool,r!==null?(b=Ze._currentValue,r=r.parent!==b?{parent:b,pool:b}:r):r=rh(),g={baseLanes:g.baseLanes|n,cachePool:r}),i.memoizedState=g,i.childLanes=Bc(e,d,n),t.memoizedState=Mc,Rl(e.child,i)):(ai(t),n=e.child,e=n.sibling,n=En(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Pr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Li(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Wo(e.return,t,n)}function Nc(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function vm(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Ye.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,Q(Ye,d),rt(e,t,i,n),i=xe?yl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ym(e,n,t);else if(e.tag===19)ym(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Nc(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Gr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Nc(t,!0,n,null,s,i);break;case"together":Nc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),oi|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Rr(e)))}function o1(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),ei(t,Ze,e.memoizedState.cache),Bi();break;case 27:case 5:fn(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:ei(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oc(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ai(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bm(e,t,n):(ai(t),e=Rn(e,t,n),e!==null?e.sibling:null);ai(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ga(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return vm(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(Ye,Ye.current),i)break;return null;case 22:return t.lanes=0,fm(e,t,n,t.pendingProps);case 24:ei(t,Ze,e.memoizedState.cache)}return Rn(e,t,n)}function jm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Hc(e,n)&&(t.flags&128)===0)return $e=!1,o1(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,xe&&(t.flags&1048576)!==0&&If(t,yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Hi(t.elementType),t.type=e,typeof e=="function")Yo(e)?(i=Vi(e,i),t.tag=1,t=pm(null,t,e,i,n)):(t.tag=0,t=kc(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===W){t.tag=11,t=cm(null,t,e,i,n);break e}else if(r===_){t.tag=14,t=um(null,t,e,i,n);break e}}throw t=ft(e)||e,Error(c(306,t,""))}}return t;case 0:return kc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Vi(i,t.pendingProps),pm(e,t,i,r,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ic(e,t),Tl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,ei(t,Ze,i),i!==s.cache&&Fo(t,[Ze],n,!0),El(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=xm(e,t,i,n);break e}else if(i!==r){r=Qt(Error(c(424)),t),vl(r),t=xm(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Ft(e.firstChild),at=t,xe=!0,Pn=null,Jt=!0,n=fh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),i===r){t=Rn(e,t,n);break e}rt(e,t,i,n)}t=t.child}return t;case 26:return Fr(e,t),e===null?(n=Rg(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,i=ms(se.current).createElement(n),i[it]=t,i[ht]=e,st(i,n,e),Pe(i),t.stateNode=i):t.memoizedState=Rg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fn(t),e===null&&xe&&(i=t.stateNode=Cg(t.type,t.pendingProps,se.current),at=t,Jt=!0,r=Re,hi(t.type)?(pu=r,Re=Ft(i.firstChild)):Re=r),rt(e,t,t.pendingProps.children,n),Fr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((r=i=Re)&&(i=U1(i,t.type,t.pendingProps,Jt),i!==null?(t.stateNode=i,at=t,Re=Ft(i.firstChild),Jt=!1,r=!0):r=!1),r||In(t)),fn(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,du(r,s)?i=null:d!==null&&du(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=uc(e,t,Ib,null,null,n),$l._currentValue=r),Fr(e,t),rt(e,t,i,n),t.child;case 6:return e===null&&xe&&((e=n=Re)&&(n=L1(n,t.pendingProps,Jt),n!==null?(t.stateNode=n,at=t,Re=null,e=!0):e=!1),e||In(t)),null;case 13:return bm(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Li(t,null,i,n):rt(e,t,i,n),t.child;case 11:return cm(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ei(t,t.type,i.value),rt(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Oi(t),r=lt(r),i=i(r),t.flags|=1,rt(e,t,i,n),t.child;case 14:return um(e,t,t.type,t.pendingProps,n);case 15:return dm(e,t,t.type,t.pendingProps,n);case 19:return vm(e,t,n);case 31:return s1(e,t,n);case 22:return fm(e,t,n,t.pendingProps);case 24:return Oi(t),i=lt(Ze),e===null?(r=ec(),r===null&&(r=ke,s=Po(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},nc(t),ei(t,Ze,r)):((e.lanes&n)!==0&&(ic(e,t),Tl(t,null,null,n),El()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ei(t,Ze,i)):(i=s.cache,ei(t,Ze,i),i!==r.cache&&Fo(t,[Ze],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Bn(e){e.flags|=4}function Uc(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Xm())e.flags|=8192;else throw Ui=Nr,tc}else e.flags&=-16777217}function Sm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(t))if(Xm())e.flags|=8192;else throw Ui=Nr,tc}function Ir(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ef():536870912,e.lanes|=t,Ta|=t)}function Bl(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function c1(e,t,n){var i=t.pendingProps;switch(Qo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Cn(Ze),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ma(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xo())),Be(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Bn(t),s!==null?(Be(t),Sm(t,s)):(Be(t),Uc(t,r,null,i,n))):s?s!==e.memoizedState?(Bn(t),Be(t),Sm(t,s)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bn(t),Be(t),Uc(t,r,e,i,n)),null;case 27:if(hn(t),n=se.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Be(t),null}e=X.current,ma(t)?th(t):(e=Cg(r,i,n),t.stateNode=e,Bn(t))}return Be(t),null;case 5:if(hn(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Be(t),null}if(s=X.current,ma(t))th(t);else{var d=ms(se.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[it]=t,s[ht]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(st(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bn(t)}}return Be(t),Uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=se.current,ma(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=at,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||bg(e.nodeValue,n)),e||In(t,!0)}else e=ms(e).createTextNode(i),e[it]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ma(t),n!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[it]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ma(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[it]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),r=!1}else r=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ir(t,t.updateQueue),Be(t),null);case 4:return Ee(),e===null&&ru(t.stateNode.containerInfo),Be(t),null;case 10:return Cn(t.type),Be(t),null;case 19:if(D(Ye),i=t.memoizedState,i===null)return Be(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Bl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Gr(e),s!==null){for(t.flags|=128,Bl(i,!1),e=s.updateQueue,t.updateQueue=e,Ir(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wf(n,e),n=n.sibling;return Q(Ye,Ye.current&1|2),xe&&Tn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>as&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ir(t,e),Bl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!xe)return Be(t),null}else 2*Tt()-i.renderingStartTime>as&&n!==536870912&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=Ye.current,Q(Ye,r?n&1|2:n&1),xe&&Tn(t,i.treeForkCount),e):(Be(t),null);case 22:case 23:return Bt(t),sc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Ir(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&D(Ni),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Cn(Ze),Be(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function u1(e,t){switch(Qo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(Ze),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hn(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(c(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ye),null;case 4:return Ee(),null;case 10:return Cn(t.type),null;case 22:case 23:return Bt(t),sc(),e!==null&&D(Ni),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Cn(Ze),null;case 25:return null;default:return null}}function wm(e,t){switch(Qo(t),t.tag){case 3:Cn(Ze),Ee();break;case 26:case 27:case 5:hn(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:D(Ye);break;case 10:Cn(t.type);break;case 22:case 23:Bt(t),sc(),e!==null&&D(Ni);break;case 24:Cn(Ze)}}function Dl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(g){_e(t,t.return,g)}}function ri(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var b=n,T=g;try{T()}catch(R){_e(r,b,R)}}}i=i.next}while(i!==s)}}catch(R){_e(t,t.return,R)}}function zm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{mh(t,n)}catch(i){_e(e,e.return,i)}}}function _m(e,t,n){n.props=Vi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){_e(e,t,r)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Em(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function Lc(e,t,n){try{var i=e.stateNode;R1(i,e.type,n,t),i[ht]=t}catch(r){_e(e,e.return,r)}}function Tm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hi(e.type)||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zn));else if(i!==4&&(i===27&&hi(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function es(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&hi(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function Am(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);st(t,i,n),t[it]=e,t[ht]=n}catch(s){_e(e,e.return,s)}}var Dn=!1,Xe=!1,Yc=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function d1(e,t){if(e=e.containerInfo,cu=js,e=Vf(e),Oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,b=-1,T=0,R=0,H=e,C=null;t:for(;;){for(var k;H!==n||r!==0&&H.nodeType!==3||(g=d+r),H!==s||i!==0&&H.nodeType!==3||(b=d+i),H.nodeType===3&&(d+=H.nodeValue.length),(k=H.firstChild)!==null;)C=H,H=k;for(;;){if(H===e)break t;if(C===n&&++T===r&&(g=d),C===s&&++R===i&&(b=d),(k=H.nextSibling)!==null)break;H=C,C=H.parentNode}H=k}n=g===-1||b===-1?null:{start:g,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(uu={focusedElem:e,selectionRange:n},js=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var J=Vi(n.type,r);e=i.getSnapshotBeforeUpdate(J,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(ne){_e(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)hu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function km(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),i&4&&Dl(5,n);break;case 1:if(Nn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){_e(n,n.return,d)}else{var r=Vi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){_e(n,n.return,d)}}i&64&&zm(n),i&512&&Ol(n,n.return);break;case 3:if(Nn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{mh(e,t)}catch(d){_e(n,n.return,d)}}break;case 27:t===null&&i&4&&Am(n);case 26:case 5:Nn(e,n),t===null&&i&4&&Em(n),i&512&&Ol(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),i&4&&Bm(e,n);break;case 13:Nn(e,n),i&4&&Dm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=v1.bind(null,n),G1(e,n))));break;case 22:if(i=n.memoizedState!==null||Dn,!i){t=t!==null&&t.memoizedState!==null||Xe,r=Dn;var s=Xe;Dn=i,(Xe=t)&&!s?Hn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Dn=r,Xe=s}break;case 30:break;default:Nn(e,n)}}function Mm(e){var t=e.alternate;t!==null&&(e.alternate=null,Mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,gt=!1;function On(e,t,n){for(n=n.child;n!==null;)Rm(e,t,n),n=n.sibling}function Rm(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 26:Xe||xn(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||xn(n,t);var i=Ne,r=gt;hi(n.type)&&(Ne=n.stateNode,gt=!1),On(e,t,n),Kl(n.stateNode),Ne=i,gt=r;break;case 5:Xe||xn(n,t);case 6:if(i=Ne,r=gt,Ne=null,On(e,t,n),Ne=i,gt=r,Ne!==null)if(gt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(s){_e(n,t,s)}else try{Ne.removeChild(n.stateNode)}catch(s){_e(n,t,s)}break;case 18:Ne!==null&&(gt?(e=Ne,zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Oa(e)):zg(Ne,n.stateNode));break;case 4:i=Ne,r=gt,Ne=n.stateNode.containerInfo,gt=!0,On(e,t,n),Ne=i,gt=r;break;case 0:case 11:case 14:case 15:ri(2,n,t),Xe||ri(4,n,t),On(e,t,n);break;case 1:Xe||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&_m(n,t,i)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,On(e,t,n),Xe=i;break;default:On(e,t,n)}}function Bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(n){_e(t,t.return,n)}}}function Dm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(n){_e(t,t.return,n)}}function f1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cm),t;default:throw Error(c(435,e.tag))}}function ts(e,t){var n=f1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=j1.bind(null,e,i);i.then(r,r)}})}function pt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(hi(g.type)){Ne=g.stateNode,gt=!1;break e}break;case 5:Ne=g.stateNode,gt=!1;break e;case 3:case 4:Ne=g.stateNode.containerInfo,gt=!0;break e}g=g.return}if(Ne===null)throw Error(c(160));Rm(s,d,r),Ne=null,gt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}var sn=null;function Om(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),xt(e),i&4&&(ri(3,e,e.return),Dl(3,e),ri(5,e,e.return));break;case 1:pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),i&64&&Dn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=sn;if(pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[ol]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),st(s,i,n),s[it]=e,Pe(s),i=s;break e;case"link":var d=Og("link","href",r).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}s=r.createElement(i),st(s,i,n),r.head.appendChild(s);break;case"meta":if(d=Og("meta","content",r).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}s=r.createElement(i),st(s,i,n),r.head.appendChild(s);break;default:throw Error(c(468,i))}s[it]=e,Pe(s),i=s}e.stateNode=i}else Ng(r,e.type,e.stateNode);else e.stateNode=Dg(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Ng(r,e.type,e.stateNode):Dg(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Lc(e,e.memoizedProps,n.memoizedProps)}break;case 27:pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),n!==null&&i&4&&Lc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),e.flags&32){r=e.stateNode;try{aa(r,"")}catch(J){_e(e,e.return,J)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Lc(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Yc=!0);break;case 6:if(pt(t,e),xt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(J){_e(e,e.return,J)}}break;case 3:if(xs=null,r=sn,sn=gs(t.containerInfo),pt(t,e),sn=r,xt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(t.containerInfo)}catch(J){_e(e,e.return,J)}Yc&&(Yc=!1,Nm(e));break;case 4:i=sn,sn=gs(e.stateNode.containerInfo),pt(t,e),xt(e),sn=i;break;case 12:pt(t,e),xt(e);break;case 31:pt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ts(e,i)));break;case 13:pt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(is=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ts(e,i)));break;case 22:r=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,T=Dn,R=Xe;if(Dn=T||r,Xe=R||b,pt(t,e),Xe=R,Dn=T,xt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||b||Dn||Xe||Yi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(s=b.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=b.stateNode;var H=b.memoizedProps.style,C=H!=null&&H.hasOwnProperty("display")?H.display:null;g.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(J){_e(b,b.return,J)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=r?"":b.memoizedProps}catch(J){_e(b,b.return,J)}}}else if(t.tag===18){if(n===null){b=t;try{var k=b.stateNode;r?_g(k,!0):_g(b.stateNode,!1)}catch(J){_e(b,b.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ts(e,n))));break;case 19:pt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ts(e,i)));break;case 30:break;case 21:break;default:pt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Tm(i)){n=i;break}i=i.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,s=Gc(e);es(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(aa(d,""),n.flags&=-33);var g=Gc(e);es(e,g,d);break;case 3:case 4:var b=n.stateNode.containerInfo,T=Gc(e);Vc(e,T,b);break;default:throw Error(c(161))}}catch(R){_e(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)km(e,t.alternate,t),t=t.sibling}function Yi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ri(4,t,t.return),Yi(t);break;case 1:xn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_m(t,t.return,n),Yi(t);break;case 27:Kl(t.stateNode);case 26:case 5:xn(t,t.return),Yi(t);break;case 22:t.memoizedState===null&&Yi(t);break;case 30:Yi(t);break;default:Yi(t)}e=e.sibling}}function Hn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Hn(r,s,n),Dl(4,s);break;case 1:if(Hn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(T){_e(i,i.return,T)}if(i=s,r=i.updateQueue,r!==null){var g=i.stateNode;try{var b=r.shared.hiddenCallbacks;if(b!==null)for(r.shared.hiddenCallbacks=null,r=0;r<b.length;r++)hh(b[r],g)}catch(T){_e(i,i.return,T)}}n&&d&64&&zm(s),Ol(s,s.return);break;case 27:Am(s);case 26:case 5:Hn(r,s,n),n&&i===null&&d&4&&Em(s),Ol(s,s.return);break;case 12:Hn(r,s,n);break;case 31:Hn(r,s,n),n&&d&4&&Bm(r,s);break;case 13:Hn(r,s,n),n&&d&4&&Dm(r,s);break;case 22:s.memoizedState===null&&Hn(r,s,n),Ol(s,s.return);break;case 30:break;default:Hn(r,s,n)}t=t.sibling}}function qc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&jl(n))}function Kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e))}function on(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hm(e,t,n,i),t=t.sibling}function Hm(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,i),r&2048&&Dl(9,t);break;case 1:on(e,t,n,i);break;case 3:on(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e)));break;case 12:if(r&2048){on(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){_e(t,t.return,b)}}else on(e,t,n,i);break;case 31:on(e,t,n,i);break;case 13:on(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?on(e,t,n,i):Nl(e,t):s._visibility&2?on(e,t,n,i):(s._visibility|=2,za(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&qc(d,t);break;case 24:on(e,t,n,i),r&2048&&Kc(t.alternate,t);break;default:on(e,t,n,i)}}function za(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,g=n,b=i,T=d.flags;switch(d.tag){case 0:case 11:case 15:za(s,d,g,b,r),Dl(8,d);break;case 23:break;case 22:var R=d.stateNode;d.memoizedState!==null?R._visibility&2?za(s,d,g,b,r):Nl(s,d):(R._visibility|=2,za(s,d,g,b,r)),r&&T&2048&&qc(d.alternate,d);break;case 24:za(s,d,g,b,r),r&&T&2048&&Kc(d.alternate,d);break;default:za(s,d,g,b,r)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Nl(n,i),r&2048&&qc(i.alternate,i);break;case 24:Nl(n,i),r&2048&&Kc(i.alternate,i);break;default:Nl(n,i)}t=t.sibling}}var Hl=8192;function _a(e,t,n){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)Um(e,t,n),e=e.sibling}function Um(e,t,n){switch(e.tag){case 26:_a(e,t,n),e.flags&Hl&&e.memoizedState!==null&&P1(n,sn,e.memoizedState,e.memoizedProps);break;case 5:_a(e,t,n);break;case 3:case 4:var i=sn;sn=gs(e.stateNode.containerInfo),_a(e,t,n),sn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Hl,Hl=16777216,_a(e,t,n),Hl=i):_a(e,t,n));break;default:_a(e,t,n)}}function Lm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Vm(i,e)}Lm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&ri(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ns(e)):Ul(e);break;default:Ul(e)}}function ns(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Vm(i,e)}Lm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ri(8,t,t.return),ns(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ns(t));break;default:ns(t)}e=e.sibling}}function Vm(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:ri(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:jl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ie=i;else e:for(n=e;Ie!==null;){i=Ie;var r=i.sibling,s=i.return;if(Mm(i),i===n){Ie=null;break e}if(r!==null){r.return=s,Ie=r;break e}Ie=s}}}var h1={getCacheForType:function(e){var t=lt(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return lt(Ze).controller.signal}},m1=typeof WeakMap=="function"?WeakMap:Map,Se=0,ke=null,he=null,ge=0,ze=0,Dt=null,si=!1,Ea=!1,Zc=!1,Un=0,Ve=0,oi=0,qi=0,Qc=0,Ot=0,Ta=0,Ll=null,bt=null,$c=!1,is=0,Ym=0,as=1/0,ls=null,ci=null,We=0,ui=null,Aa=null,Ln=0,Xc=0,Jc=null,qm=null,Gl=0,Wc=null;function Nt(){return(Se&2)!==0&&ge!==0?ge&-ge:B.T!==null?nu():lf()}function Km(){if(Ot===0)if((ge&536870912)===0||xe){var e=hr;hr<<=1,(hr&3932160)===0&&(hr=262144),Ot=e}else Ot=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Ot}function yt(e,t,n){(e===ke&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),di(e,ge,Ot,!1)),sl(e,n),((Se&2)===0||e!==ke)&&(e===ke&&((Se&2)===0&&(qi|=n),Ve===4&&di(e,ge,Ot,!1)),bn(e))}function Zm(e,t,n){if((Se&6)!==0)throw Error(c(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rl(e,t),r=i?x1(e,t):Pc(e,t,!0),s=i;do{if(r===0){Ea&&!i&&di(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!g1(n)){r=Pc(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=Ll;var b=g.current.memoizedState.isDehydrated;if(b&&(Ca(g,d).flags|=256),d=Pc(g,d,!1),d!==2){if(Zc&&!b){g.errorRecoveryDisabledLanes|=s,qi|=s,r=4;break e}s=bt,bt=r,s!==null&&(bt===null?bt=s:bt.push.apply(bt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){Ca(e,0),di(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:di(i,t,Ot,!si);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=is+300-Tt(),10<r)){if(di(i,t,Ot,!si),gr(i,0,!0)!==0)break e;Ln=t,i.timeoutHandle=Sg(Qm.bind(null,i,n,bt,ls,$c,t,Ot,qi,Ta,si,s,"Throttled",-0,0),r);break e}Qm(i,n,bt,ls,$c,t,Ot,qi,Ta,si,s,null,-0,0)}}break}while(!0);bn(e)}function Qm(e,t,n,i,r,s,d,g,b,T,R,H,C,k){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zn},Um(t,s,H);var J=(s&62914560)===s?is-Tt():(s&4194048)===s?Ym-Tt():0;if(J=I1(H,J),J!==null){Ln=s,e.cancelPendingCommit=J(eg.bind(null,e,t,s,n,i,r,d,g,b,R,H,null,C,k)),di(e,s,d,!T);return}}eg(e,t,s,n,i,r,d,g,b)}function g1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function di(e,t,n,i){t&=~Qc,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Ct(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&tf(e,n,t)}function rs(){return(Se&6)===0?(Vl(0),!1):!0}function Fc(){if(he!==null){if(ze===0)var e=he.return;else e=he,An=Di=null,hc(e),ya=null,wl=0,e=he;for(;e!==null;)wm(e.alternate,e),e=e.return;he=null}}function Ca(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,O1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ln=0,Fc(),ke=e,he=n=En(e.current,null),ge=t,ze=0,Dt=null,si=!1,Ea=rl(e,t),Zc=!1,Ta=Ot=Qc=qi=oi=Ve=0,bt=Ll=null,$c=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ct(i),s=1<<r;t|=e[r],i&=~s}return Un=t,Tr(),n}function $m(e,t){re=null,B.H=Ml,t===ba||t===Or?(t=ch(),ze=3):t===tc?(t=ch(),ze=4):ze=t===Cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,he===null&&(Ve=1,Jr(e,Qt(t,e.current)))}function Xm(){var e=Rt.current;return e===null?!0:(ge&4194048)===ge?Wt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Wt:!1}function Jm(){var e=B.H;return B.H=Ml,e===null?Ml:e}function Wm(){var e=B.A;return B.A=h1,e}function ss(){Ve=4,si||(ge&4194048)!==ge&&Rt.current!==null||(Ea=!0),(oi&134217727)===0&&(qi&134217727)===0||ke===null||di(ke,ge,Ot,!1)}function Pc(e,t,n){var i=Se;Se|=2;var r=Jm(),s=Wm();(ke!==e||ge!==t)&&(ls=null,Ca(e,t)),t=!1;var d=Ve;e:do try{if(ze!==0&&he!==null){var g=he,b=Dt;switch(ze){case 8:Fc(),d=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var T=ze;if(ze=0,Dt=null,ka(e,g,b,T),n&&Ea){d=0;break e}break;default:T=ze,ze=0,Dt=null,ka(e,g,b,T)}}p1(),d=Ve;break}catch(R){$m(e,R)}while(!0);return t&&e.shellSuspendCounter++,An=Di=null,Se=i,B.H=r,B.A=s,he===null&&(ke=null,ge=0,Tr()),d}function p1(){for(;he!==null;)Fm(he)}function x1(e,t){var n=Se;Se|=2;var i=Jm(),r=Wm();ke!==e||ge!==t?(ls=null,as=Tt()+500,Ca(e,t)):Ea=rl(e,t);e:do try{if(ze!==0&&he!==null){t=he;var s=Dt;t:switch(ze){case 1:ze=0,Dt=null,ka(e,t,s,1);break;case 2:case 9:if(sh(s)){ze=0,Dt=null,Pm(t);break}t=function(){ze!==2&&ze!==9||ke!==e||(ze=7),bn(e)},s.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:sh(s)?(ze=0,Dt=null,Pm(t)):(ze=0,Dt=null,ka(e,t,s,7));break;case 5:var d=null;switch(he.tag){case 26:d=he.memoizedState;case 5:case 27:var g=he;if(d?Hg(d):g.stateNode.complete){ze=0,Dt=null;var b=g.sibling;if(b!==null)he=b;else{var T=g.return;T!==null?(he=T,os(T)):he=null}break t}}ze=0,Dt=null,ka(e,t,s,5);break;case 6:ze=0,Dt=null,ka(e,t,s,6);break;case 8:Fc(),Ve=6;break e;default:throw Error(c(462))}}b1();break}catch(R){$m(e,R)}while(!0);return An=Di=null,B.H=i,B.A=r,Se=n,he!==null?0:(ke=null,ge=0,Tr(),Ve)}function b1(){for(;he!==null&&!Vx();)Fm(he)}function Fm(e){var t=jm(e.alternate,e,Un);e.memoizedProps=e.pendingProps,t===null?os(e):he=t}function Pm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gm(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=gm(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:hc(t);default:wm(n,t),t=he=Wf(t,Un),t=jm(n,t,Un)}e.memoizedProps=e.pendingProps,t===null?os(e):he=t}function ka(e,t,n,i){An=Di=null,hc(t),ya=null,wl=0;var r=t.return;try{if(r1(e,r,t,n,ge)){Ve=1,Jr(e,Qt(n,e.current)),he=null;return}}catch(s){if(r!==null)throw he=r,s;Ve=1,Jr(e,Qt(n,e.current)),he=null;return}t.flags&32768?(xe||i===1?e=!0:Ea||(ge&536870912)!==0?e=!1:(si=e=!0,(i===2||i===9||i===3||i===6)&&(i=Rt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Im(t,e)):os(t)}function os(e){var t=e;do{if((t.flags&32768)!==0){Im(t,si);return}e=t.return;var n=c1(t.alternate,t,Un);if(n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);Ve===0&&(Ve=5)}function Im(e,t){do{var n=u1(e.alternate,e);if(n!==null){n.flags&=32767,he=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=n}while(e!==null);Ve=6,he=null}function eg(e,t,n,i,r,s,d,g,b){e.cancelPendingCommit=null;do cs();while(We!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Go,Fx(e,n,s,d,g,b),e===ke&&(he=ke=null,ge=0),Aa=t,ui=e,Ln=n,Xc=s,Jc=r,qm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,S1(dr,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=B.T,B.T=null,r=Z.p,Z.p=2,d=Se,Se|=4;try{d1(e,t,n)}finally{Se=d,Z.p=r,B.T=i}}We=1,tg(),ng(),ig()}}function tg(){if(We===1){We=0;var e=ui,t=Aa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var i=Z.p;Z.p=2;var r=Se;Se|=4;try{Om(t,e);var s=uu,d=Vf(e.containerInfo),g=s.focusedElem,b=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&Gf(g.ownerDocument.documentElement,g)){if(b!==null&&Oo(g)){var T=b.start,R=b.end;if(R===void 0&&(R=T),"selectionStart"in g)g.selectionStart=T,g.selectionEnd=Math.min(R,g.value.length);else{var H=g.ownerDocument||document,C=H&&H.defaultView||window;if(C.getSelection){var k=C.getSelection(),J=g.textContent.length,ne=Math.min(b.start,J),Ce=b.end===void 0?ne:Math.min(b.end,J);!k.extend&&ne>Ce&&(d=Ce,Ce=ne,ne=d);var z=Lf(g,ne),v=Lf(g,Ce);if(z&&v&&(k.rangeCount!==1||k.anchorNode!==z.node||k.anchorOffset!==z.offset||k.focusNode!==v.node||k.focusOffset!==v.offset)){var E=H.createRange();E.setStart(z.node,z.offset),k.removeAllRanges(),ne>Ce?(k.addRange(E),k.extend(v.node,v.offset)):(E.setEnd(v.node,v.offset),k.addRange(E))}}}}for(H=[],k=g;k=k.parentNode;)k.nodeType===1&&H.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<H.length;g++){var O=H[g];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}js=!!cu,uu=cu=null}finally{Se=r,Z.p=i,B.T=n}}e.current=t,We=2}}function ng(){if(We===2){We=0;var e=ui,t=Aa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var i=Z.p;Z.p=2;var r=Se;Se|=4;try{km(e,t.alternate,t)}finally{Se=r,Z.p=i,B.T=n}}We=3}}function ig(){if(We===4||We===3){We=0,Yx();var e=ui,t=Aa,n=Ln,i=qm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Aa=ui=null,ag(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ci=null),po(n),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ll,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=B.T,r=Z.p,Z.p=2,B.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var g=i[d];s(g.value,{componentStack:g.stack})}}finally{B.T=t,Z.p=r}}(Ln&3)!==0&&cs(),bn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Wc?Gl++:(Gl=0,Wc=e):Gl=0,Vl(0)}}function ag(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jl(t)))}function cs(){return tg(),ng(),ig(),lg()}function lg(){if(We!==5)return!1;var e=ui,t=Xc;Xc=0;var n=po(Ln),i=B.T,r=Z.p;try{Z.p=32>n?32:n,B.T=null,n=Jc,Jc=null;var s=ui,d=Ln;if(We=0,Aa=ui=null,Ln=0,(Se&6)!==0)throw Error(c(331));var g=Se;if(Se|=4,Gm(s.current),Hm(s,s.current,d,n),Se=g,Vl(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ll,s)}catch{}return!0}finally{Z.p=r,B.T=i,ag(e,t)}}function rg(e,t,n){t=Qt(n,t),t=Ac(e.stateNode,t,2),e=ii(e,t,2),e!==null&&(sl(e,2),bn(e))}function _e(e,t,n){if(e.tag===3)rg(e,e,n);else for(;t!==null;){if(t.tag===3){rg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ci===null||!ci.has(i))){e=Qt(n,e),n=sm(2),i=ii(t,n,2),i!==null&&(om(n,i,t,e),sl(i,2),bn(i));break}}t=t.return}}function Ic(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new m1;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Zc=!0,r.add(n),e=y1.bind(null,e,t,n),t.then(e,e))}function y1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(ge&n)===n&&(Ve===4||Ve===3&&(ge&62914560)===ge&&300>Tt()-is?(Se&2)===0&&Ca(e,0):Qc|=n,Ta===ge&&(Ta=0)),bn(e)}function sg(e,t){t===0&&(t=ef()),e=Mi(e,t),e!==null&&(sl(e,t),bn(e))}function v1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sg(e,n)}function j1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),sg(e,n)}function S1(e,t){return fo(e,t)}var us=null,Ma=null,eu=!1,ds=!1,tu=!1,fi=0;function bn(e){e!==Ma&&e.next===null&&(Ma===null?us=Ma=e:Ma=Ma.next=e),ds=!0,eu||(eu=!0,z1())}function Vl(e,t){if(!tu&&ds){tu=!0;do for(var n=!1,i=us;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,g=i.pingedLanes;s=(1<<31-Ct(42|e)+1)-1,s&=r&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,dg(i,s))}else s=ge,s=gr(i,i===ke?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||rl(i,s)||(n=!0,dg(i,s));i=i.next}while(n);tu=!1}}function w1(){og()}function og(){ds=eu=!1;var e=0;fi!==0&&D1()&&(e=fi);for(var t=Tt(),n=null,i=us;i!==null;){var r=i.next,s=cg(i,t);s===0?(i.next=null,n===null?us=r:n.next=r,r===null&&(Ma=n)):(n=i,(e!==0||(s&3)!==0)&&(ds=!0)),i=r}We!==0&&We!==5||Vl(e),fi!==0&&(fi=0)}function cg(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ct(s),g=1<<d,b=r[d];b===-1?((g&n)===0||(g&i)!==0)&&(r[d]=Wx(g,t)):b<=t&&(e.expiredLanes|=g),s&=~g}if(t=ke,n=ge,n=gr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ho(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ho(i),po(n)){case 2:case 8:n=Pd;break;case 32:n=dr;break;case 268435456:n=Id;break;default:n=dr}return i=ug.bind(null,e),n=fo(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ho(i),e.callbackPriority=2,e.callbackNode=null,2}function ug(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(cs()&&e.callbackNode!==n)return null;var i=ge;return i=gr(e,e===ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Zm(e,i,t),cg(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?ug.bind(null,e):null)}function dg(e,t){if(cs())return null;Zm(e,t,!0)}function z1(){N1(function(){(Se&6)!==0?fo(Fd,w1):og()})}function nu(){if(fi===0){var e=pa;e===0&&(e=fr,fr<<=1,(fr&261888)===0&&(fr=256)),fi=e}return fi}function fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yr(""+e)}function hg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _1(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=fg((r[ht]||null).action),d=i.submitter;d&&(t=(t=d[ht]||null)?fg(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var g=new wr("action","action",null,i,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(fi!==0){var b=d?hg(r,d):new FormData(r);Sc(n,{pending:!0,data:b,method:r.method,action:s},null,b)}}else typeof s=="function"&&(g.preventDefault(),b=d?hg(r,d):new FormData(r),Sc(n,{pending:!0,data:b,method:r.method,action:s},s,b))},currentTarget:r}]})}}for(var iu=0;iu<Lo.length;iu++){var au=Lo[iu],E1=au.toLowerCase(),T1=au[0].toUpperCase()+au.slice(1);rn(E1,"on"+T1)}rn(Kf,"onAnimationEnd"),rn(Zf,"onAnimationIteration"),rn(Qf,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(qb,"onTransitionRun"),rn(Kb,"onTransitionStart"),rn(Zb,"onTransitionCancel"),rn($f,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function mg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],b=g.instance,T=g.currentTarget;if(g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=T;try{s(r)}catch(R){Er(R)}r.currentTarget=null,s=b}else for(d=0;d<i.length;d++){if(g=i[d],b=g.instance,T=g.currentTarget,g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=T;try{s(r)}catch(R){Er(R)}r.currentTarget=null,s=b}}}}function me(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var i=e+"__bubble";n.has(i)||(gg(t,e,2,!1),n.add(i))}function lu(e,t,n){var i=0;t&&(i|=4),gg(n,e,i,t)}var fs="_reactListening"+Math.random().toString(36).slice(2);function ru(e){if(!e[fs]){e[fs]=!0,of.forEach(function(n){n!=="selectionchange"&&(A1.has(n)||lu(n,!1,e),lu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fs]||(t[fs]=!0,lu("selectionchange",!1,t))}}function gg(e,t,n,i){switch(Kg(t)){case 2:var r=ny;break;case 8:r=iy;break;default:r=ju}n=r.bind(null,t,n,e),r=void 0,!Eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function su(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=Ii(g),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){i=s=d;continue e}g=g.parentNode}}i=i.return}vf(function(){var T=s,R=zo(n),H=[];e:{var C=Xf.get(e);if(C!==void 0){var k=wr,J=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":k=jb;break;case"focusin":J="focus",k=ko;break;case"focusout":J="blur",k=ko;break;case"beforeblur":case"afterblur":k=ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=cb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=zb;break;case Kf:case Zf:case Qf:k=fb;break;case $f:k=Eb;break;case"scroll":case"scrollend":k=sb;break;case"wheel":k=Ab;break;case"copy":case"cut":case"paste":k=mb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=_f;break;case"toggle":case"beforetoggle":k=kb}var ne=(t&4)!==0,Ce=!ne&&(e==="scroll"||e==="scrollend"),z=ne?C!==null?C+"Capture":null:C;ne=[];for(var v=T,E;v!==null;){var O=v;if(E=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||E===null||z===null||(O=ul(v,z),O!=null&&ne.push(ql(v,O,E))),Ce)break;v=v.return}0<ne.length&&(C=new k(C,J,null,n,R),H.push({event:C,listeners:ne}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",C&&n!==wo&&(J=n.relatedTarget||n.fromElement)&&(Ii(J)||J[Pi]))break e;if((k||C)&&(C=R.window===R?R:(C=R.ownerDocument)?C.defaultView||C.parentWindow:window,k?(J=n.relatedTarget||n.toElement,k=T,J=J?Ii(J):null,J!==null&&(Ce=m(J),ne=J.tag,J!==Ce||ne!==5&&ne!==27&&ne!==6)&&(J=null)):(k=null,J=T),k!==J)){if(ne=wf,O="onMouseLeave",z="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(ne=_f,O="onPointerLeave",z="onPointerEnter",v="pointer"),Ce=k==null?C:cl(k),E=J==null?C:cl(J),C=new ne(O,v+"leave",k,n,R),C.target=Ce,C.relatedTarget=E,O=null,Ii(R)===T&&(ne=new ne(z,v+"enter",J,n,R),ne.target=E,ne.relatedTarget=Ce,O=ne),Ce=O,k&&J)t:{for(ne=C1,z=k,v=J,E=0,O=z;O;O=ne(O))E++;O=0;for(var ee=v;ee;ee=ne(ee))O++;for(;0<E-O;)z=ne(z),E--;for(;0<O-E;)v=ne(v),O--;for(;E--;){if(z===v||v!==null&&z===v.alternate){ne=z;break t}z=ne(z),v=ne(v)}ne=null}else ne=null;k!==null&&pg(H,C,k,ne,!1),J!==null&&Ce!==null&&pg(H,Ce,J,ne,!0)}}e:{if(C=T?cl(T):window,k=C.nodeName&&C.nodeName.toLowerCase(),k==="select"||k==="input"&&C.type==="file")var ve=Bf;else if(Mf(C))if(Df)ve=Gb;else{ve=Ub;var F=Hb}else k=C.nodeName,!k||k.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?T&&So(T.elementType)&&(ve=Bf):ve=Lb;if(ve&&(ve=ve(e,T))){Rf(H,ve,n,R);break e}F&&F(e,C,T),e==="focusout"&&T&&C.type==="number"&&T.memoizedProps.value!=null&&jo(C,"number",C.value)}switch(F=T?cl(T):window,e){case"focusin":(Mf(F)||F.contentEditable==="true")&&(oa=F,No=T,bl=null);break;case"focusout":bl=No=oa=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,Yf(H,n,R);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":Yf(H,n,R)}var oe;if(Ro)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else sa?Cf(e,n)&&(pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(pe="onCompositionStart");pe&&(Ef&&n.locale!=="ko"&&(sa||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&sa&&(oe=jf()):(Wn=R,To="value"in Wn?Wn.value:Wn.textContent,sa=!0)),F=hs(T,pe),0<F.length&&(pe=new zf(pe,e,null,n,R),H.push({event:pe,listeners:F}),oe?pe.data=oe:(oe=kf(n),oe!==null&&(pe.data=oe)))),(oe=Rb?Bb(e,n):Db(e,n))&&(pe=hs(T,"onBeforeInput"),0<pe.length&&(F=new zf("onBeforeInput","beforeinput",null,n,R),H.push({event:F,listeners:pe}),F.data=oe)),_1(H,e,T,n,R)}mg(H,t)})}function ql(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hs(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=ul(e,n),r!=null&&i.unshift(ql(e,r,s)),r=ul(e,t),r!=null&&i.push(ql(e,r,s))),e.tag===3)return i;e=e.return}return[]}function C1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pg(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var g=n,b=g.alternate,T=g.stateNode;if(g=g.tag,b!==null&&b===i)break;g!==5&&g!==26&&g!==27||T===null||(b=T,r?(T=ul(n,s),T!=null&&d.unshift(ql(n,T,b))):r||(T=ul(n,s),T!=null&&d.push(ql(n,T,b)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var k1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function xg(e){return(typeof e=="string"?e:""+e).replace(k1,`
`).replace(M1,"")}function bg(e,t){return t=xg(t),xg(e)===t}function Ae(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||aa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&aa(e,""+i);break;case"className":xr(e,"class",i);break;case"tabIndex":xr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":xr(e,n,i);break;case"style":bf(e,i,s);break;case"data":if(t!=="object"){xr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",r.name,r,null),Ae(e,t,"formEncType",r.formEncType,r,null),Ae(e,t,"formMethod",r.formMethod,r,null),Ae(e,t,"formTarget",r.formTarget,r,null)):(Ae(e,t,"encType",r.encType,r,null),Ae(e,t,"method",r.method,r,null),Ae(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=zn);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=yr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":me("beforetoggle",e),me("toggle",e),pr(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":pr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=lb.get(n)||n,pr(e,n,i))}}function ou(e,t,n,i,r,s){switch(n){case"style":bf(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof i=="string"?aa(e,i):(typeof i=="number"||typeof i=="bigint")&&aa(e,""+i);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[ht]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):pr(e,n,i)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,s,d,n,null)}}r&&Ae(e,t,"srcSet",n.srcSet,n,null),i&&Ae(e,t,"src",n.src,n,null);return;case"input":me("invalid",e);var g=s=d=r=null,b=null,T=null;for(i in n)if(n.hasOwnProperty(i)){var R=n[i];if(R!=null)switch(i){case"name":r=R;break;case"type":d=R;break;case"checked":b=R;break;case"defaultChecked":T=R;break;case"value":s=R;break;case"defaultValue":g=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Ae(e,t,i,R,n,null)}}mf(e,s,g,b,T,d,r,!1);return;case"select":me("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:Ae(e,t,r,g,n,null)}t=s,n=d,e.multiple=!!i,t!=null?ia(e,!!i,t,!1):n!=null&&ia(e,!!i,n,!0);return;case"textarea":me("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":r=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:Ae(e,t,d,g,n,null)}pf(e,i,r,s);return;case"option":for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null)&&(b==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ae(e,t,b,i,n,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(i=0;i<Yl.length;i++)me(Yl[i],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(i=n[T],i!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,T,i,n,null)}return;default:if(So(t)){for(R in n)n.hasOwnProperty(R)&&(i=n[R],i!==void 0&&ou(e,t,R,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Ae(e,t,g,i,n,null))}function R1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,g=null,b=null,T=null,R=null;for(k in n){var H=n[k];if(n.hasOwnProperty(k)&&H!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":b=H;default:i.hasOwnProperty(k)||Ae(e,t,k,null,i,H)}}for(var C in i){var k=i[C];if(H=n[C],i.hasOwnProperty(C)&&(k!=null||H!=null))switch(C){case"type":s=k;break;case"name":r=k;break;case"checked":T=k;break;case"defaultChecked":R=k;break;case"value":d=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:k!==H&&Ae(e,t,C,k,i,H)}}vo(e,d,g,b,T,R,s,r);return;case"select":k=d=g=C=null;for(s in n)if(b=n[s],n.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":k=b;default:i.hasOwnProperty(s)||Ae(e,t,s,null,i,b)}for(r in i)if(s=i[r],b=n[r],i.hasOwnProperty(r)&&(s!=null||b!=null))switch(r){case"value":C=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==b&&Ae(e,t,r,s,i,b)}t=g,n=d,i=k,C!=null?ia(e,!!n,C,!1):!!i!=!!n&&(t!=null?ia(e,!!n,t,!0):ia(e,!!n,n?[]:"",!1));return;case"textarea":k=C=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ae(e,t,g,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":C=r;break;case"defaultValue":k=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==s&&Ae(e,t,d,r,i,s)}gf(e,C,k);return;case"option":for(var J in n)C=n[J],n.hasOwnProperty(J)&&C!=null&&!i.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ae(e,t,J,null,i,C));for(b in i)C=i[b],k=n[b],i.hasOwnProperty(b)&&C!==k&&(C!=null||k!=null)&&(b==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":Ae(e,t,b,C,i,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)C=n[ne],n.hasOwnProperty(ne)&&C!=null&&!i.hasOwnProperty(ne)&&Ae(e,t,ne,null,i,C);for(T in i)if(C=i[T],k=n[T],i.hasOwnProperty(T)&&C!==k&&(C!=null||k!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:Ae(e,t,T,C,i,k)}return;default:if(So(t)){for(var Ce in n)C=n[Ce],n.hasOwnProperty(Ce)&&C!==void 0&&!i.hasOwnProperty(Ce)&&ou(e,t,Ce,void 0,i,C);for(R in i)C=i[R],k=n[R],!i.hasOwnProperty(R)||C===k||C===void 0&&k===void 0||ou(e,t,R,C,i,k);return}}for(var z in n)C=n[z],n.hasOwnProperty(z)&&C!=null&&!i.hasOwnProperty(z)&&Ae(e,t,z,null,i,C);for(H in i)C=i[H],k=n[H],!i.hasOwnProperty(H)||C===k||C==null&&k==null||Ae(e,t,H,C,i,k)}function yg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,g=r.duration;if(s&&g&&yg(d)){for(d=0,g=r.responseEnd,i+=1;i<n.length;i++){var b=n[i],T=b.startTime;if(T>g)break;var R=b.transferSize,H=b.initiatorType;R&&yg(H)&&(b=b.responseEnd,d+=R*(b<g?1:(g-T)/(b-T)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cu=null,uu=null;function ms(e){return e.nodeType===9?e:e.ownerDocument}function vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fu=null;function D1(){var e=window.event;return e&&e.type==="popstate"?e===fu?!1:(fu=e,!0):(fu=null,!1)}var Sg=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,N1=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(H1)}:Sg;function H1(e){setTimeout(function(){throw e})}function hi(e){return e==="head"}function zg(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Oa(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Kl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kl(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[ol]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Kl(e.ownerDocument.body);n=r}while(n);Oa(t)}function _g(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function hu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hu(n),bo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function U1(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function L1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function Eg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function mu(e){return e.data==="$?"||e.data==="$~"}function gu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function G1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pu=null;function Tg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ft(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Cg(e,t,n){switch(t=ms(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bo(e)}var Pt=new Map,kg=new Set;function gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gn=Z.d;Z.d={f:V1,r:Y1,D:q1,C:K1,L:Z1,m:Q1,X:X1,S:$1,M:J1};function V1(){var e=Gn.f(),t=rs();return e||t}function Y1(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?$h(t):Gn.r(e)}var Ra=typeof document>"u"?null:document;function Mg(e,t,n){var i=Ra;if(i&&typeof t=="string"&&t){var r=Kt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),kg.has(r)||(kg.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),st(t,"link",e),Pe(t),i.head.appendChild(t)))}}function q1(e){Gn.D(e),Mg("dns-prefetch",e,null)}function K1(e,t){Gn.C(e,t),Mg("preconnect",e,t)}function Z1(e,t,n){Gn.L(e,t,n);var i=Ra;if(i&&e&&t){var r='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Kt(n.imageSizes)+'"]')):r+='[href="'+Kt(e)+'"]';var s=r;switch(t){case"style":s=Ba(e);break;case"script":s=Da(e)}Pt.has(s)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Zl(s))||t==="script"&&i.querySelector(Ql(s))||(t=i.createElement("link"),st(t,"link",e),Pe(t),i.head.appendChild(t)))}}function Q1(e,t){Gn.m(e,t);var n=Ra;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Kt(i)+'"][href="'+Kt(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Da(e)}if(!Pt.has(s)&&(e=w({rel:"modulepreload",href:e},t),Pt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ql(s)))return}i=n.createElement("link"),st(i,"link",e),Pe(i),n.head.appendChild(i)}}}function $1(e,t,n){Gn.S(e,t,n);var i=Ra;if(i&&e){var r=ta(i).hoistableStyles,s=Ba(e);t=t||"default";var d=r.get(s);if(!d){var g={loading:0,preload:null};if(d=i.querySelector(Zl(s)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(s))&&xu(e,n);var b=d=i.createElement("link");Pe(b),st(b,"link",e),b._p=new Promise(function(T,R){b.onload=T,b.onerror=R}),b.addEventListener("load",function(){g.loading|=1}),b.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ps(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(s,d)}}}function X1(e,t){Gn.X(e,t);var n=Ra;if(n&&e){var i=ta(n).hoistableScripts,r=Da(e),s=i.get(r);s||(s=n.querySelector(Ql(r)),s||(e=w({src:e,async:!0},t),(t=Pt.get(r))&&bu(e,t),s=n.createElement("script"),Pe(s),st(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function J1(e,t){Gn.M(e,t);var n=Ra;if(n&&e){var i=ta(n).hoistableScripts,r=Da(e),s=i.get(r);s||(s=n.querySelector(Ql(r)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Pt.get(r))&&bu(e,t),s=n.createElement("script"),Pe(s),st(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function Rg(e,t,n,i){var r=(r=se.current)?gs(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ba(n.href),n=ta(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ba(n.href);var s=ta(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(Zl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),s||W1(r,e,n,d.state))),t&&i===null)throw Error(c(528,""));return d}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Da(n),n=ta(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ba(e){return'href="'+Kt(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function Bg(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function W1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),st(t,"link",n),Pe(t),e.head.appendChild(t))}function Da(e){return'[src="'+Kt(e)+'"]'}function Ql(e){return"script[async]"+e}function Dg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(i)return t.instance=i,Pe(i),i;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Pe(i),st(i,"style",r),ps(i,n.precedence,e),t.instance=i;case"stylesheet":r=Ba(n.href);var s=e.querySelector(Zl(r));if(s)return t.state.loading|=4,t.instance=s,Pe(s),s;i=Bg(n),(r=Pt.get(r))&&xu(i,r),s=(e.ownerDocument||e).createElement("link"),Pe(s);var d=s;return d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),st(s,"link",i),t.state.loading|=4,ps(s,n.precedence,e),t.instance=s;case"script":return s=Da(n.src),(r=e.querySelector(Ql(s)))?(t.instance=r,Pe(r),r):(i=n,(r=Pt.get(s))&&(i=w({},n),bu(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pe(r),st(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ps(i,n.precedence,e));return t.instance}function ps(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===t)s=g;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xs=null;function Og(e,t,n){if(xs===null){var i=new Map,r=xs=new Map;r.set(n,i)}else r=xs,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[ol]||s[it]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var g=i.get(d);g?g.push(s):i.set(d,[s])}}return i}function Ng(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function F1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function P1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ba(i.href),s=t.querySelector(Zl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=bs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Pe(s);return}s=t.ownerDocument||t,i=Bg(i),(r=Pt.get(r))&&xu(i,r),s=s.createElement("link"),Pe(s);var d=s;d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),st(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=bs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var yu=0;function I1(e,t){return e.stylesheets&&e.count===0&&vs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&vs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&yu===0&&(yu=62500*B1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>yu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function bs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ys=null;function vs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ys=new Map,t.forEach(ey,e),ys=null,bs.call(e))}function ey(e,t){if(!(t.state.loading&4)){var n=ys.get(e);if(n)var i=n.get(null);else{n=new Map,ys.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=bs.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var $l={$$typeof:U,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ty(e,t,n,i,r,s,d,g,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.hiddenUpdates=mo(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ug(e,t,n,i,r,s,d,g,b,T,R,H){return e=new ty(e,t,n,d,b,T,R,H,g),t=1,s===!0&&(t|=24),s=Mt(3,null,null,t),e.current=s,s.stateNode=e,t=Po(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},nc(s),e}function Lg(e){return e?(e=da,e):da}function Gg(e,t,n,i,r,s){r=Lg(r),i.context===null?i.context=r:i.pendingContext=r,i=ni(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=ii(e,i,t),n!==null&&(yt(n,e,t),_l(n,e,t))}function Vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vu(e,t){Vg(e,t),(e=e.alternate)&&Vg(e,t)}function Yg(e){if(e.tag===13||e.tag===31){var t=Mi(e,67108864);t!==null&&yt(t,e,67108864),vu(e,67108864)}}function qg(e){if(e.tag===13||e.tag===31){var t=Nt();t=go(t);var n=Mi(e,t);n!==null&&yt(n,e,t),vu(e,t)}}var js=!0;function ny(e,t,n,i){var r=B.T;B.T=null;var s=Z.p;try{Z.p=2,ju(e,t,n,i)}finally{Z.p=s,B.T=r}}function iy(e,t,n,i){var r=B.T;B.T=null;var s=Z.p;try{Z.p=8,ju(e,t,n,i)}finally{Z.p=s,B.T=r}}function ju(e,t,n,i){if(js){var r=Su(i);if(r===null)su(e,t,i,Ss,n),Zg(e,i);else if(ly(r,e,t,n,i))i.stopPropagation();else if(Zg(e,i),t&4&&-1<ay.indexOf(e)){for(;r!==null;){var s=ea(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Ei(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var b=1<<31-Ct(d);g.entanglements[1]|=b,d&=~b}bn(s),(Se&6)===0&&(as=Tt()+500,Vl(0))}}break;case 31:case 13:g=Mi(s,2),g!==null&&yt(g,s,2),rs(),vu(s,2)}if(s=Su(i),s===null&&su(e,t,i,Ss,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else su(e,t,i,null,n)}}function Su(e){return e=zo(e),wu(e)}var Ss=null;function wu(e){if(Ss=null,e=Ii(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=S(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ss=e,null}function Kg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qx()){case Fd:return 2;case Pd:return 8;case dr:case Kx:return 32;case Id:return 268435456;default:return 32}default:return 32}}var zu=!1,mi=null,gi=null,pi=null,Xl=new Map,Jl=new Map,xi=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,t){switch(e){case"focusin":case"focusout":mi=null;break;case"dragenter":case"dragleave":gi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":Xl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(t.pointerId)}}function Wl(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=ea(t),t!==null&&Yg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ly(e,t,n,i,r){switch(t){case"focusin":return mi=Wl(mi,e,t,n,i,r),!0;case"dragenter":return gi=Wl(gi,e,t,n,i,r),!0;case"mouseover":return pi=Wl(pi,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xl.set(s,Wl(Xl.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jl.set(s,Wl(Jl.get(s)||null,e,t,n,i,r)),!0}return!1}function Qg(e){var t=Ii(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,rf(e.priority,function(){qg(n)});return}}else if(t===31){if(t=S(n),t!==null){e.blockedOn=t,rf(e.priority,function(){qg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Su(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);wo=i,n.target.dispatchEvent(i),wo=null}else return t=ea(n),t!==null&&Yg(t),e.blockedOn=n,!1;t.shift()}return!0}function $g(e,t,n){ws(e)&&n.delete(t)}function ry(){zu=!1,mi!==null&&ws(mi)&&(mi=null),gi!==null&&ws(gi)&&(gi=null),pi!==null&&ws(pi)&&(pi=null),Xl.forEach($g),Jl.forEach($g)}function zs(e,t){e.blockedOn===t&&(e.blockedOn=null,zu||(zu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ry)))}var _s=null;function Xg(e){_s!==e&&(_s=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){_s===e&&(_s=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(wu(i||n)===null)continue;break}var s=ea(n);s!==null&&(e.splice(t,3),t-=3,Sc(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Oa(e){function t(b){return zs(b,e)}mi!==null&&zs(mi,e),gi!==null&&zs(gi,e),pi!==null&&zs(pi,e),Xl.forEach(t),Jl.forEach(t);for(var n=0;n<xi.length;n++){var i=xi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)Qg(n),n.blockedOn===null&&xi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[ht]||null;if(typeof s=="function")d||Xg(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[ht]||null)g=d.formAction;else if(wu(r)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),Xg(n)}}}function Jg(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function _u(e){this._internalRoot=e}Es.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,i=Nt();Gg(n,i,e,t,null,null)},Es.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gg(e.current,2,null,e,null,null),rs(),t[Pi]=null}};function Es(e){this._internalRoot=e}Es.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xi.length&&t!==0&&t<xi[n].priority;n++);xi.splice(n,0,e),n===0&&Qg(e)}};var Wg=o.version;if(Wg!=="19.2.3")throw Error(c(527,Wg,"19.2.3"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ts.isDisabled&&Ts.supportsFiber)try{ll=Ts.inject(sy),At=Ts}catch{}}return Pl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,i="",r=im,s=am,d=lm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Ug(e,1,!1,null,null,n,i,null,r,s,d,Jg),e[Pi]=t.current,ru(e),new _u(t)},Pl.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var i=!1,r="",s=im,d=am,g=lm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Ug(e,1,!0,t,n??null,i,r,b,s,d,g,Jg),t.context=Lg(null),n=t.current,i=Nt(),i=go(i),r=ni(i),r.callback=null,ii(n,r,i),n=i,t.current.lanes=n,sl(t,n),bn(t),e[Pi]=t.current,ru(e),new Es(t)},Pl.version="19.2.3",Pl}var r0;function by(){if(r0)return Au.exports;r0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Au.exports=xy(),Au.exports}var yy=by(),nt=function(){return nt=Object.assign||function(o){for(var u,c=1,f=arguments.length;c<f;c++){u=arguments[c];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(o[m]=u[m])}return o},nt.apply(this,arguments)};function ar(a,o,u){if(u||arguments.length===2)for(var c=0,f=o.length,m;c<f;c++)(m||!(c in o))&&(m||(m=Array.prototype.slice.call(o,0,c)),m[c]=o[c]);return a.concat(m||Array.prototype.slice.call(o))}var De="-ms-",ir="-moz-",we="-webkit-",Q0="comm",eo="rule",Bd="decl",vy="@import",jy="@namespace",$0="@keyframes",Sy="@layer",X0=Math.abs,Dd=String.fromCharCode,vd=Object.assign;function wy(a,o){return Fe(a,0)^45?(((o<<2^Fe(a,0))<<2^Fe(a,1))<<2^Fe(a,2))<<2^Fe(a,3):0}function J0(a){return a.trim()}function qn(a,o){return(a=o.exec(a))?a[0]:a}function ce(a,o,u){return a.replace(o,u)}function Gs(a,o,u){return a.indexOf(o,u)}function Fe(a,o){return a.charCodeAt(o)|0}function $i(a,o,u){return a.slice(o,u)}function cn(a){return a.length}function W0(a){return a.length}function tr(a,o){return o.push(a),a}function zy(a,o){return a.map(o).join("")}function s0(a,o){return a.filter(function(u){return!qn(u,o)})}var to=1,Pa=1,F0=0,It=0,Je=0,tl="";function no(a,o,u,c,f,m,p,S){return{value:a,root:o,parent:u,type:c,props:f,children:m,line:to,column:Pa,length:p,return:"",siblings:S}}function ji(a,o){return vd(no("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},o)}function Na(a){for(;a.root;)a=ji(a.root,{children:[a]});tr(a,a.siblings)}function _y(){return Je}function Ey(){return Je=It>0?Fe(tl,--It):0,Pa--,Je===10&&(Pa=1,to--),Je}function un(){return Je=It<F0?Fe(tl,It++):0,Pa++,Je===10&&(Pa=1,to++),Je}function wi(){return Fe(tl,It)}function Vs(){return It}function io(a,o){return $i(tl,a,o)}function lr(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ty(a){return to=Pa=1,F0=cn(tl=a),It=0,[]}function Ay(a){return tl="",a}function Ru(a){return J0(io(It-1,jd(a===91?a+2:a===40?a+1:a)))}function Cy(a){for(;(Je=wi())&&Je<33;)un();return lr(a)>2||lr(Je)>3?"":" "}function ky(a,o){for(;--o&&un()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return io(a,Vs()+(o<6&&wi()==32&&un()==32))}function jd(a){for(;un();)switch(Je){case a:return It;case 34:case 39:a!==34&&a!==39&&jd(Je);break;case 40:a===41&&jd(a);break;case 92:un();break}return It}function My(a,o){for(;un()&&a+Je!==57;)if(a+Je===84&&wi()===47)break;return"/*"+io(o,It-1)+"*"+Dd(a===47?a:un())}function Ry(a){for(;!lr(wi());)un();return io(a,It)}function By(a){return Ay(Ys("",null,null,null,[""],a=Ty(a),0,[0],a))}function Ys(a,o,u,c,f,m,p,S,y){for(var x=0,A=0,w=p,N=0,L=0,Y=0,V=1,q=1,K=1,G=0,U="",W=f,I=m,$=c,_=U;q;)switch(Y=G,G=un()){case 40:if(Y!=108&&Fe(_,w-1)==58){Gs(_+=ce(Ru(G),"&","&\f"),"&\f",X0(x?S[x-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:_+=Ru(G);break;case 9:case 10:case 13:case 32:_+=Cy(Y);break;case 92:_+=ky(Vs()-1,7);continue;case 47:switch(wi()){case 42:case 47:tr(Dy(My(un(),Vs()),o,u,y),y),(lr(Y||1)==5||lr(wi()||1)==5)&&cn(_)&&$i(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*V:S[x++]=cn(_)*K;case 125*V:case 59:case 0:switch(G){case 0:case 125:q=0;case 59+A:K==-1&&(_=ce(_,/\f/g,"")),L>0&&(cn(_)-w||V===0&&Y===47)&&tr(L>32?c0(_+";",c,u,w-1,y):c0(ce(_," ","")+";",c,u,w-2,y),y);break;case 59:_+=";";default:if(tr($=o0(_,o,u,x,A,f,S,U,W=[],I=[],w,m),m),G===123)if(A===0)Ys(_,o,$,$,W,m,w,S,I);else{switch(N){case 99:if(Fe(_,3)===110)break;case 108:if(Fe(_,2)===97)break;default:A=0;case 100:case 109:case 115:}A?Ys(a,$,$,c&&tr(o0(a,$,$,0,0,f,S,U,f,W=[],w,I),I),f,I,w,S,c?W:I):Ys(_,$,$,$,[""],I,0,S,I)}}x=A=L=0,V=K=1,U=_="",w=p;break;case 58:w=1+cn(_),L=Y;default:if(V<1){if(G==123)--V;else if(G==125&&V++==0&&Ey()==125)continue}switch(_+=Dd(G),G*V){case 38:K=A>0?1:(_+="\f",-1);break;case 44:S[x++]=(cn(_)-1)*K,K=1;break;case 64:wi()===45&&(_+=Ru(un())),N=wi(),A=w=cn(U=_+=Ry(Vs())),G++;break;case 45:Y===45&&cn(_)==2&&(V=0)}}return m}function o0(a,o,u,c,f,m,p,S,y,x,A,w){for(var N=f-1,L=f===0?m:[""],Y=W0(L),V=0,q=0,K=0;V<c;++V)for(var G=0,U=$i(a,N+1,N=X0(q=p[V])),W=a;G<Y;++G)(W=J0(q>0?L[G]+" "+U:ce(U,/&\f/g,L[G])))&&(y[K++]=W);return no(a,o,u,f===0?eo:S,y,x,A,w)}function Dy(a,o,u,c){return no(a,o,u,Q0,Dd(_y()),$i(a,2,-2),0,c)}function c0(a,o,u,c,f){return no(a,o,u,Bd,$i(a,0,c),$i(a,c+1,-1),c,f)}function P0(a,o,u){switch(wy(a,o)){case 5103:return we+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return we+a+a;case 4855:return we+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return ir+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return we+a+ir+a+De+a+a;case 5936:switch(Fe(a,o+11)){case 114:return we+a+De+ce(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return we+a+De+ce(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return we+a+De+ce(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return we+a+De+a+a;case 6165:return we+a+De+"flex-"+a+a;case 5187:return we+a+ce(a,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+a;case 5443:return we+a+De+"flex-item-"+ce(a,/flex-|-self/g,"")+(qn(a,/flex-|baseline/)?"":De+"grid-row-"+ce(a,/flex-|-self/g,""))+a;case 4675:return we+a+De+"flex-line-pack"+ce(a,/align-content|flex-|-self/g,"")+a;case 5548:return we+a+De+ce(a,"shrink","negative")+a;case 5292:return we+a+De+ce(a,"basis","preferred-size")+a;case 6060:return we+"box-"+ce(a,"-grow","")+we+a+De+ce(a,"grow","positive")+a;case 4554:return we+ce(a,/([^-])(transform)/g,"$1"+we+"$2")+a;case 6187:return ce(ce(ce(a,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),a,"")+a;case 5495:case 3959:return ce(a,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ce(ce(a,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/space-between/,"justify")+we+a+a;case 4200:if(!qn(a,/flex-|baseline/))return De+"grid-column-align"+$i(a,o)+a;break;case 2592:case 3360:return De+ce(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,f){return o=f,qn(c.props,/grid-\w+-end/)})?~Gs(a+(u=u[o].value),"span",0)?a:De+ce(a,"-start","")+a+De+"grid-row-span:"+(~Gs(u,"span",0)?qn(u,/\d+/):+qn(u,/\d+/)-+qn(a,/\d+/))+";":De+ce(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return qn(c.props,/grid-\w+-start/)})?a:De+ce(ce(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ce(a,/(.+)-inline(.+)/,we+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(a)-1-o>6)switch(Fe(a,o+1)){case 109:if(Fe(a,o+4)!==45)break;case 102:return ce(a,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+ir+(Fe(a,o+3)==108?"$3":"$2-$3"))+a;case 115:return~Gs(a,"stretch",0)?P0(ce(a,"stretch","fill-available"),o,u)+a:a}break;case 5152:case 5920:return ce(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,m,p,S,y,x){return De+f+":"+m+x+(p?De+f+"-span:"+(S?y:+y-+m)+x:"")+a});case 4949:if(Fe(a,o+6)===121)return ce(a,":",":"+we)+a;break;case 6444:switch(Fe(a,Fe(a,14)===45?18:11)){case 120:return ce(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(Fe(a,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+a;case 100:return ce(a,":",":"+De)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(a,"scroll-","scroll-snap-")+a}return a}function Xs(a,o){for(var u="",c=0;c<a.length;c++)u+=o(a[c],c,a,o)||"";return u}function Oy(a,o,u,c){switch(a.type){case Sy:if(a.children.length)break;case vy:case jy:case Bd:return a.return=a.return||a.value;case Q0:return"";case $0:return a.return=a.value+"{"+Xs(a.children,c)+"}";case eo:if(!cn(a.value=a.props.join(",")))return""}return cn(u=Xs(a.children,c))?a.return=a.value+"{"+u+"}":""}function Ny(a){var o=W0(a);return function(u,c,f,m){for(var p="",S=0;S<o;S++)p+=a[S](u,c,f,m)||"";return p}}function Hy(a){return function(o){o.root||(o=o.return)&&a(o)}}function Uy(a,o,u,c){if(a.length>-1&&!a.return)switch(a.type){case Bd:a.return=P0(a.value,a.length,u);return;case $0:return Xs([ji(a,{value:ce(a.value,"@","@"+we)})],c);case eo:if(a.length)return zy(u=a.props,function(f){switch(qn(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Na(ji(a,{props:[ce(f,/:(read-\w+)/,":"+ir+"$1")]})),Na(ji(a,{props:[f]})),vd(a,{props:s0(u,c)});break;case"::placeholder":Na(ji(a,{props:[ce(f,/:(plac\w+)/,":"+we+"input-$1")]})),Na(ji(a,{props:[ce(f,/:(plac\w+)/,":"+ir+"$1")]})),Na(ji(a,{props:[ce(f,/:(plac\w+)/,De+"input-$1")]})),Na(ji(a,{props:[f]})),vd(a,{props:s0(u,c)});break}return""})}}var Ly={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ht={},Ia=typeof process<"u"&&Ht!==void 0&&(Ht.REACT_APP_SC_ATTR||Ht.SC_ATTR)||"data-styled",I0="active",ep="data-styled-version",ao="6.3.8",Od=`/*!sc*/
`,Js=typeof window<"u"&&typeof document<"u",vn=tt.createContext===void 0,Gy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==""?Ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.SC_DISABLE_SPEEDY!==void 0&&Ht.SC_DISABLE_SPEEDY!==""&&Ht.SC_DISABLE_SPEEDY!=="false"&&Ht.SC_DISABLE_SPEEDY),Vy={},lo=Object.freeze([]),el=Object.freeze({});function tp(a,o,u){return u===void 0&&(u=el),a.theme!==u.theme&&a.theme||o||u.theme}var np=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Yy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qy=/(^-|-$)/g;function u0(a){return a.replace(Yy,"-").replace(qy,"")}var Ky=/(a)(d)/gi,d0=function(a){return String.fromCharCode(a+(a>25?39:97))};function Sd(a){var o,u="";for(o=Math.abs(a);o>52;o=o/52|0)u=d0(o%52)+u;return(d0(o%52)+u).replace(Ky,"$1-$2")}var Bu,$a=function(a,o){for(var u=o.length;u;)a=33*a^o.charCodeAt(--u);return a},ip=function(a){return $a(5381,a)};function ap(a){return Sd(ip(a)>>>0)}function Zy(a){return a.displayName||a.name||"Component"}function Du(a){return typeof a=="string"&&!0}var lp=typeof Symbol=="function"&&Symbol.for,rp=lp?Symbol.for("react.memo"):60115,Qy=lp?Symbol.for("react.forward_ref"):60112,$y={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jy=((Bu={})[Qy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bu[rp]=sp,Bu);function f0(a){return("type"in(o=a)&&o.type.$$typeof)===rp?sp:"$$typeof"in a?Jy[a.$$typeof]:$y;var o}var Wy=Object.defineProperty,Fy=Object.getOwnPropertyNames,h0=Object.getOwnPropertySymbols,Py=Object.getOwnPropertyDescriptor,Iy=Object.getPrototypeOf,m0=Object.prototype;function op(a,o,u){if(typeof o!="string"){if(m0){var c=Iy(o);c&&c!==m0&&op(a,c,u)}var f=Fy(o);h0&&(f=f.concat(h0(o)));for(var m=f0(a),p=f0(o),S=0;S<f.length;++S){var y=f[S];if(!(y in Xy||u&&u[y]||p&&y in p||m&&y in m)){var x=Py(o,y);try{Wy(a,y,x)}catch{}}}}return a}function Xi(a){return typeof a=="function"}function Nd(a){return typeof a=="object"&&"styledComponentId"in a}function Qi(a,o){return a&&o?"".concat(a," ").concat(o):a||o||""}function wd(a,o){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function rr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function zd(a,o,u){if(u===void 0&&(u=!1),!u&&!rr(a)&&!Array.isArray(a))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)a[c]=zd(a[c],o[c]);else if(rr(o))for(var c in o)a[c]=zd(a[c],o[c]);return a}function Hd(a,o){Object.defineProperty(a,"toString",{value:o})}function Ji(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var ev=(function(){function a(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return a.prototype.indexOfGroup=function(o){for(var u=0,c=0;c<o;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(o,u){if(o>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,m=f;o>=m;)if((m<<=1)<0)throw Ji(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var p=f;p<m;p++)this.groupSizes[p]=0}for(var S=this.indexOfGroup(o+1),y=(p=0,u.length);p<y;p++)this.tag.insertRule(S,u[p])&&(this.groupSizes[o]++,S++)},a.prototype.clearGroup=function(o){if(o<this.length){var u=this.groupSizes[o],c=this.indexOfGroup(o),f=c+u;this.groupSizes[o]=0;for(var m=c;m<f;m++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(o){var u="";if(o>=this.length||this.groupSizes[o]===0)return u;for(var c=this.groupSizes[o],f=this.indexOfGroup(o),m=f+c,p=f;p<m;p++)u+="".concat(this.tag.getRule(p)).concat(Od);return u},a})(),qs=new Map,Ws=new Map,Ks=1,Xa=function(a){if(qs.has(a))return qs.get(a);for(;Ws.has(Ks);)Ks++;var o=Ks++;return qs.set(a,o),Ws.set(o,a),o},tv=function(a,o){Ks=o+1,qs.set(a,o),Ws.set(o,a)},nv="style[".concat(Ia,"][").concat(ep,'="').concat(ao,'"]'),iv=new RegExp("^".concat(Ia,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),av=function(a,o,u){for(var c,f=u.split(","),m=0,p=f.length;m<p;m++)(c=f[m])&&a.registerName(o,c)},lv=function(a,o){for(var u,c=((u=o.textContent)!==null&&u!==void 0?u:"").split(Od),f=[],m=0,p=c.length;m<p;m++){var S=c[m].trim();if(S){var y=S.match(iv);if(y){var x=0|parseInt(y[1],10),A=y[2];x!==0&&(tv(A,x),av(a,A,y[3]),a.getTag().insertRules(x,f)),f.length=0}else f.push(S)}}},g0=function(a){for(var o=document.querySelectorAll(nv),u=0,c=o.length;u<c;u++){var f=o[u];f&&f.getAttribute(Ia)!==I0&&(lv(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function rv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cp=function(a){var o=document.head,u=a||o,c=document.createElement("style"),f=(function(S){var y=Array.from(S.querySelectorAll("style[".concat(Ia,"]")));return y[y.length-1]})(u),m=f!==void 0?f.nextSibling:null;c.setAttribute(Ia,I0),c.setAttribute(ep,ao);var p=rv();return p&&c.setAttribute("nonce",p),u.insertBefore(c,m),c},sv=(function(){function a(o){this.element=cp(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,f=0,m=c.length;f<m;f++){var p=c[f];if(p.ownerNode===u)return p}throw Ji(17)})(this.element),this.length=0}return a.prototype.insertRule=function(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},a.prototype.getRule=function(o){var u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""},a})(),ov=(function(){function a(o){this.element=cp(o),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(o,u){if(o<=this.length&&o>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},a.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},a})(),cv=(function(){function a(o){this.rules=[],this.length=0}return a.prototype.insertRule=function(o,u){return o<=this.length&&(this.rules.splice(o,0,u),this.length++,!0)},a.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},a.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},a})(),p0=Js,uv={isServer:!Js,useCSSOMInjection:!Gy},Fs=(function(){function a(o,u,c){o===void 0&&(o=el),u===void 0&&(u={});var f=this;this.options=nt(nt({},uv),o),this.gs=u,this.names=new Map(c),this.server=!!o.isServer,!this.server&&Js&&p0&&(p0=!1,g0(this)),Hd(this,function(){return(function(m){for(var p=m.getTag(),S=p.length,y="",x=function(w){var N=(function(K){return Ws.get(K)})(w);if(N===void 0)return"continue";var L=m.names.get(N),Y=p.getGroup(w);if(L===void 0||!L.size||Y.length===0)return"continue";var V="".concat(Ia,".g").concat(w,'[id="').concat(N,'"]'),q="";L!==void 0&&L.forEach(function(K){K.length>0&&(q+="".concat(K,","))}),y+="".concat(Y).concat(V,'{content:"').concat(q,'"}').concat(Od)},A=0;A<S;A++)x(A);return y})(f)})}return a.registerId=function(o){return Xa(o)},a.prototype.rehydrate=function(){!this.server&&Js&&g0(this)},a.prototype.reconstructWithOptions=function(o,u){return u===void 0&&(u=!0),new a(nt(nt({},this.options),o),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(u){var c=u.useCSSOMInjection,f=u.target;return u.isServer?new cv(f):c?new sv(f):new ov(f)})(this.options),new ev(o)));var o},a.prototype.hasNameForId=function(o,u){return this.names.has(o)&&this.names.get(o).has(u)},a.prototype.registerName=function(o,u){if(Xa(o),this.names.has(o))this.names.get(o).add(u);else{var c=new Set;c.add(u),this.names.set(o,c)}},a.prototype.insertRules=function(o,u,c){this.registerName(o,u),this.getTag().insertRules(Xa(o),c)},a.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},a.prototype.clearRules=function(o){this.getTag().clearGroup(Xa(o)),this.clearNames(o)},a.prototype.clearTag=function(){this.tag=void 0},a})(),dv=/&/g,Ja=47;function x0(a){if(a.indexOf("}")===-1)return!1;for(var o=a.length,u=0,c=0,f=!1,m=0;m<o;m++){var p=a.charCodeAt(m);if(c!==0||f||p!==Ja||a.charCodeAt(m+1)!==42)if(f)p===42&&a.charCodeAt(m+1)===Ja&&(f=!1,m++);else if(p!==34&&p!==39||m!==0&&a.charCodeAt(m-1)===92){if(c===0){if(p===123)u++;else if(p===125&&--u<0)return!0}}else c===0?c=p:c===p&&(c=0);else f=!0,m++}return u!==0||c!==0}function up(a,o){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(o," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(o," ")),u.props=u.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=up(u.children,o)),u})}function fv(a){var o,u,c,f=el,m=f.options,p=m===void 0?el:m,S=f.plugins,y=S===void 0?lo:S,x=function(N,L,Y){return Y.startsWith(u)&&Y.endsWith(u)&&Y.replaceAll(u,"").length>0?".".concat(o):N},A=y.slice();A.push(function(N){N.type===eo&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(dv,u).replace(c,x))}),p.prefix&&A.push(Uy),A.push(Oy);var w=function(N,L,Y,V){L===void 0&&(L=""),Y===void 0&&(Y=""),V===void 0&&(V="&"),o=V,u=L,c=new RegExp("\\".concat(u,"\\b"),"g");var q=(function(U){if(!x0(U))return U;for(var W=U.length,I="",$=0,_=0,le=0,fe=!1,ue=0;ue<W;ue++){var Le=U.charCodeAt(ue);if(le!==0||fe||Le!==Ja||U.charCodeAt(ue+1)!==42)if(fe)Le===42&&U.charCodeAt(ue+1)===Ja&&(fe=!1,ue++);else if(Le!==34&&Le!==39||ue!==0&&U.charCodeAt(ue-1)===92){if(le===0)if(Le===123)_++;else if(Le===125){if(--_<0){for(var Me=ue+1;Me<W;){var zt=U.charCodeAt(Me);if(zt===59||zt===10)break;Me++}Me<W&&U.charCodeAt(Me)===59&&Me++,_=0,ue=Me-1,$=Me;continue}_===0&&(I+=U.substring($,ue+1),$=ue+1)}else Le===59&&_===0&&(I+=U.substring($,ue+1),$=ue+1)}else le===0?le=Le:le===Le&&(le=0);else fe=!0,ue++}if($<W){var ft=U.substring($);x0(ft)||(I+=ft)}return I})((function(U){if(U.indexOf("//")===-1)return U;for(var W=U.length,I=[],$=0,_=0,le=0,fe=0;_<W;){var ue=U.charCodeAt(_);if(ue!==34&&ue!==39||_!==0&&U.charCodeAt(_-1)===92)if(le===0)if(ue===40&&_>=3&&(32|U.charCodeAt(_-1))==108&&(32|U.charCodeAt(_-2))==114&&(32|U.charCodeAt(_-3))==117)fe=1,_++;else if(fe>0)ue===41?fe--:ue===40&&fe++,_++;else if(ue===Ja&&_+1<W&&U.charCodeAt(_+1)===Ja){for(_>$&&I.push(U.substring($,_));_<W&&U.charCodeAt(_)!==10;)_++;$=_}else _++;else _++;else le===0?le=ue:le===ue&&(le=0),_++}return $===0?U:($<W&&I.push(U.substring($)),I.join(""))})(N)),K=By(Y||L?"".concat(Y," ").concat(L," { ").concat(q," }"):q);p.namespace&&(K=up(K,p.namespace));var G=[];return Xs(K,Ny(A.concat(Hy(function(U){return G.push(U)})))),G};return w.hash=y.length?y.reduce(function(N,L){return L.name||Ji(15),$a(N,L.name)},5381).toString():"",w}var hv=new Fs,_d=fv(),Ed={shouldForwardProp:void 0,styleSheet:hv,stylis:_d},dp=vn?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(Ed)}}:tt.createContext(Ed);dp.Consumer;vn||tt.createContext(void 0);function Td(){return vn?Ed:tt.useContext(dp)}var mv=(function(){function a(o,u){var c=this;this.inject=function(f,m){m===void 0&&(m=_d);var p=c.name+m.hash;f.hasNameForId(c.id,p)||f.insertRules(c.id,p,m(c.rules,p,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=u,Hd(this,function(){throw Ji(12,String(c.name))})}return a.prototype.getName=function(o){return o===void 0&&(o=_d),this.name+o.hash},a})();function gv(a,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||a in Ly||a.startsWith("--")?String(o).trim():"".concat(o,"px")}var pv=function(a){return a>="A"&&a<="Z"};function b0(a){for(var o="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;pv(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var fp=function(a){return a==null||a===!1||a===""},hp=function(a){var o=[];for(var u in a){var c=a[u];a.hasOwnProperty(u)&&!fp(c)&&(Array.isArray(c)&&c.isCss||Xi(c)?o.push("".concat(b0(u),":"),c,";"):rr(c)?o.push.apply(o,ar(ar(["".concat(u," {")],hp(c),!1),["}"],!1)):o.push("".concat(b0(u),": ").concat(gv(u,c),";")))}return o};function zi(a,o,u,c){if(fp(a))return[];if(Nd(a))return[".".concat(a.styledComponentId)];if(Xi(a)){if(!Xi(m=a)||m.prototype&&m.prototype.isReactComponent||!o)return[a];var f=a(o);return zi(f,o,u,c)}var m;return a instanceof mv?u?(a.inject(u,c),[a.getName(c)]):[a]:rr(a)?hp(a):Array.isArray(a)?Array.prototype.concat.apply(lo,a.map(function(p){return zi(p,o,u,c)})):[a.toString()]}function mp(a){for(var o=0;o<a.length;o+=1){var u=a[o];if(Xi(u)&&!Nd(u))return!1}return!0}var xv=ip(ao),bv=(function(){function a(o,u,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&mp(o),this.componentId=u,this.baseHash=$a(xv,u),this.baseStyle=c,Fs.registerId(u)}return a.prototype.generateAndInjectStyles=function(o,u,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,u,c).className:"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=Qi(f,this.staticRulesId);else{var m=wd(zi(this.rules,o,u,c)),p=Sd($a(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,p)){var S=c(m,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,S)}f=Qi(f,p),this.staticRulesId=p}else{for(var y=$a(this.baseHash,c.hash),x="",A=0;A<this.rules.length;A++){var w=this.rules[A];if(typeof w=="string")x+=w;else if(w){var N=wd(zi(w,o,u,c));y=$a(y,N+A),x+=N}}if(x){var L=Sd(y>>>0);if(!u.hasNameForId(this.componentId,L)){var Y=c(x,".".concat(L),void 0,this.componentId);u.insertRules(this.componentId,L,Y)}f=Qi(f,L)}}return{className:f,css:typeof window>"u"?u.getTag().getGroup(Xa(this.componentId)):""}},a})(),sr=vn?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(void 0)}}:tt.createContext(void 0);sr.Consumer;function yv(a){if(vn)return a.children;var o=tt.useContext(sr),u=tt.useMemo(function(){return(function(c,f){if(!c)throw Ji(14);if(Xi(c)){var m=c(f);return m}if(Array.isArray(c)||typeof c!="object")throw Ji(8);return f?nt(nt({},f),c):c})(a.theme,o)},[a.theme,o]);return a.children?tt.createElement(sr.Provider,{value:u},a.children):null}var Ou={};function vv(a,o,u){var c=Nd(a),f=a,m=!Du(a),p=o.attrs,S=p===void 0?lo:p,y=o.componentId,x=y===void 0?(function(W,I){var $=typeof W!="string"?"sc":u0(W);Ou[$]=(Ou[$]||0)+1;var _="".concat($,"-").concat(ap(ao+$+Ou[$]));return I?"".concat(I,"-").concat(_):_})(o.displayName,o.parentComponentId):y,A=o.displayName,w=A===void 0?(function(W){return Du(W)?"styled.".concat(W):"Styled(".concat(Zy(W),")")})(a):A,N=o.displayName&&o.componentId?"".concat(u0(o.displayName),"-").concat(o.componentId):o.componentId||x,L=c&&f.attrs?f.attrs.concat(S).filter(Boolean):S,Y=o.shouldForwardProp;if(c&&f.shouldForwardProp){var V=f.shouldForwardProp;if(o.shouldForwardProp){var q=o.shouldForwardProp;Y=function(W,I){return V(W,I)&&q(W,I)}}else Y=V}var K=new bv(u,N,c?f.componentStyle:void 0);function G(W,I){return(function($,_,le){var fe=$.attrs,ue=$.componentStyle,Le=$.defaultProps,Me=$.foldedComponentIds,zt=$.styledComponentId,ft=$.target,_t=vn?void 0:tt.useContext(sr),B=Td(),Z=$.shouldForwardProp||B.shouldForwardProp,te=tp(_,_t,Le)||el,de=(function(Ke,Ee,fn){for(var hn,Et=nt(nt({},Ee),{className:void 0,theme:fn}),Fi=0;Fi<Ke.length;Fi+=1){var Yt=Xi(hn=Ke[Fi])?hn(Et):hn;for(var mn in Yt)mn==="className"?Et.className=Qi(Et.className,Yt[mn]):mn==="style"?Et.style=nt(nt({},Et.style),Yt[mn]):Et[mn]=Yt[mn]}return"className"in Ee&&typeof Ee.className=="string"&&(Et.className=Qi(Et.className,Ee.className)),Et})(fe,_,te),ye=de.as||ft,j={};for(var D in de)de[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&de.theme===te||(D==="forwardedAs"?j.as=de.forwardedAs:Z&&!Z(D,ye)||(j[D]=de[D]));var Q=(function(Ke,Ee){var fn=Td(),hn=Ke.generateAndInjectStyles(Ee,fn.styleSheet,fn.stylis);return hn})(ue,de),X=Q.className,ie=Q.css,se=Qi(Me,zt);X&&(se+=" "+X),de.className&&(se+=" "+de.className),j[Du(ye)&&!np.has(ye)?"class":"className"]=se,le&&(j.ref=le);var be=M.createElement(ye,j);return vn&&ie?tt.createElement(tt.Fragment,null,tt.createElement("style",{precedence:"styled-components",href:"sc-".concat(zt,"-").concat(X),children:ie}),be):be})(U,W,I)}G.displayName=w;var U=tt.forwardRef(G);return U.attrs=L,U.componentStyle=K,U.displayName=w,U.shouldForwardProp=Y,U.foldedComponentIds=c?Qi(f.foldedComponentIds,f.styledComponentId):"",U.styledComponentId=N,U.target=c?f.target:a,Object.defineProperty(U,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=c?(function(I){for(var $=[],_=1;_<arguments.length;_++)$[_-1]=arguments[_];for(var le=0,fe=$;le<fe.length;le++)zd(I,fe[le],!0);return I})({},f.defaultProps,W):W}}),Hd(U,function(){return".".concat(U.styledComponentId)}),m&&op(U,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),U}function y0(a,o){for(var u=[a[0]],c=0,f=o.length;c<f;c+=1)u.push(o[c],a[c+1]);return u}var v0=function(a){return Object.assign(a,{isCss:!0})};function gp(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];if(Xi(a)||rr(a))return v0(zi(y0(lo,ar([a],o,!0))));var c=a;return o.length===0&&c.length===1&&typeof c[0]=="string"?zi(c):v0(zi(y0(c,o)))}function Ad(a,o,u){if(u===void 0&&(u=el),!o)throw Ji(1,o);var c=function(f){for(var m=[],p=1;p<arguments.length;p++)m[p-1]=arguments[p];return a(o,u,gp.apply(void 0,ar([f],m,!1)))};return c.attrs=function(f){return Ad(a,o,nt(nt({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Ad(a,o,nt(nt({},u),f))},c}var pp=function(a){return Ad(vv,a)},h=pp;np.forEach(function(a){h[a]=pp(a)});var jv=(function(){function a(o,u){this.rules=o,this.componentId=u,this.isStatic=mp(o),Fs.registerId(this.componentId+1)}return a.prototype.createStyles=function(o,u,c,f){var m=f(wd(zi(this.rules,u,c,f)),""),p=this.componentId+o;c.insertRules(p,p,m)},a.prototype.removeStyles=function(o,u){u.clearRules(this.componentId+o)},a.prototype.renderStyles=function(o,u,c,f){o>2&&Fs.registerId(this.componentId+o);var m=this.componentId+o;this.isStatic?c.hasNameForId(m,m)||this.createStyles(o,u,c,f):(this.removeStyles(o,c),this.createStyles(o,u,c,f))},a})();function Sv(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var c=gp.apply(void 0,ar([a],o,!1)),f="sc-global-".concat(ap(JSON.stringify(c))),m=new jv(c,f),p=new WeakMap,S=function(y){var x=Td(),A=vn?void 0:tt.useContext(sr),w=p.get(x.styleSheet);if(w===void 0&&(w=x.styleSheet.allocateGSInstance(f),p.set(x.styleSheet,w)),(typeof window>"u"||!x.styleSheet.server)&&(function(q,K,G,U,W){if(m.isStatic)m.renderStyles(q,Vy,G,W);else{var I=nt(nt({},K),{theme:tp(K,U,S.defaultProps)});m.renderStyles(q,I,G,W)}})(w,y,x.styleSheet,A,x.stylis),!vn){var N=tt.useRef(!0);tt.useLayoutEffect(function(){return N.current=!1,function(){N.current=!0,queueMicrotask(function(){N.current&&(m.removeStyles(w,x.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(f,'"]')).forEach(function(q){return q.remove()}))})}},[w,x.styleSheet])}if(vn){var L=f+w,Y=typeof window>"u"?x.styleSheet.getTag().getGroup(Xa(L)):"";if(Y){var V="".concat(f,"-").concat(w);return tt.createElement("style",{key:V,"data-styled-global":f,precedence:"styled-components",href:V,children:Y})}}return null};return tt.memo(S)}var j0="popstate";function wv(a={}){function o(c,f){let{pathname:m,search:p,hash:S}=c.location;return Cd("",{pathname:m,search:p,hash:S},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:or(f)}return _v(o,u,null,a)}function Ue(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function Gt(a,o){if(!a){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function zv(){return Math.random().toString(36).substring(2,10)}function S0(a,o){return{usr:a.state,key:a.key,idx:o}}function Cd(a,o,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof o=="string"?nl(o):o,state:u,key:o&&o.key||c||zv()}}function or({pathname:a="/",search:o="",hash:u=""}){return o&&o!=="?"&&(a+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function nl(a){let o={};if(a){let u=a.indexOf("#");u>=0&&(o.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(o.search=a.substring(c),a=a.substring(0,c)),a&&(o.pathname=a)}return o}function _v(a,o,u,c={}){let{window:f=document.defaultView,v5Compat:m=!1}=c,p=f.history,S="POP",y=null,x=A();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function A(){return(p.state||{idx:null}).idx}function w(){S="POP";let q=A(),K=q==null?null:q-x;x=q,y&&y({action:S,location:V.location,delta:K})}function N(q,K){S="PUSH";let G=Cd(V.location,q,K);x=A()+1;let U=S0(G,x),W=V.createHref(G);try{p.pushState(U,"",W)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;f.location.assign(W)}m&&y&&y({action:S,location:V.location,delta:1})}function L(q,K){S="REPLACE";let G=Cd(V.location,q,K);x=A();let U=S0(G,x),W=V.createHref(G);p.replaceState(U,"",W),m&&y&&y({action:S,location:V.location,delta:0})}function Y(q){return Ev(q)}let V={get action(){return S},get location(){return a(f,p)},listen(q){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(j0,w),y=q,()=>{f.removeEventListener(j0,w),y=null}},createHref(q){return o(f,q)},createURL:Y,encodeLocation(q){let K=Y(q);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:N,replace:L,go(q){return p.go(q)}};return V}function Ev(a,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:or(a);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function xp(a,o,u="/"){return Tv(a,o,u,!1)}function Tv(a,o,u,c){let f=typeof o=="string"?nl(o):o,m=$n(f.pathname||"/",u);if(m==null)return null;let p=bp(a);Av(p);let S=null;for(let y=0;S==null&&y<p.length;++y){let x=Lv(m);S=Hv(p[y],x,c)}return S}function bp(a,o=[],u=[],c="",f=!1){let m=(p,S,y=f,x)=>{let A={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:S,route:p};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(c)&&y)return;Ue(A.relativePath.startsWith(c),`Absolute route path "${A.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(c.length)}let w=Kn([c,A.relativePath]),N=u.concat(A);p.children&&p.children.length>0&&(Ue(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),bp(p.children,o,N,w,y)),!(p.path==null&&!p.index)&&o.push({path:w,score:Ov(w,p.index),routesMeta:N})};return a.forEach((p,S)=>{if(p.path===""||!p.path?.includes("?"))m(p,S);else for(let y of yp(p.path))m(p,S,!0,y)}),o}function yp(a){let o=a.split("/");if(o.length===0)return[];let[u,...c]=o,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(c.length===0)return f?[m,""]:[m];let p=yp(c.join("/")),S=[];return S.push(...p.map(y=>y===""?m:[m,y].join("/"))),f&&S.push(...p),S.map(y=>a.startsWith("/")&&y===""?"/":y)}function Av(a){a.sort((o,u)=>o.score!==u.score?u.score-o.score:Nv(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Cv=/^:[\w-]+$/,kv=3,Mv=2,Rv=1,Bv=10,Dv=-2,w0=a=>a==="*";function Ov(a,o){let u=a.split("/"),c=u.length;return u.some(w0)&&(c+=Dv),o&&(c+=Mv),u.filter(f=>!w0(f)).reduce((f,m)=>f+(Cv.test(m)?kv:m===""?Rv:Bv),c)}function Nv(a,o){return a.length===o.length&&a.slice(0,-1).every((c,f)=>c===o[f])?a[a.length-1]-o[o.length-1]:0}function Hv(a,o,u=!1){let{routesMeta:c}=a,f={},m="/",p=[];for(let S=0;S<c.length;++S){let y=c[S],x=S===c.length-1,A=m==="/"?o:o.slice(m.length)||"/",w=Ps({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},A),N=y.route;if(!w&&x&&u&&!c[c.length-1].route.index&&(w=Ps({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},A)),!w)return null;Object.assign(f,w.params),p.push({params:f,pathname:Kn([m,w.pathname]),pathnameBase:qv(Kn([m,w.pathnameBase])),route:N}),w.pathnameBase!=="/"&&(m=Kn([m,w.pathnameBase]))}return p}function Ps(a,o){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=Uv(a.path,a.caseSensitive,a.end),f=o.match(u);if(!f)return null;let m=f[0],p=m.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:c.reduce((x,{paramName:A,isOptional:w},N)=>{if(A==="*"){let Y=S[N]||"";p=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const L=S[N];return w&&!L?x[A]=void 0:x[A]=(L||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:p,pattern:a}}function Uv(a,o=!1,u=!0){Gt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,S,y)=>(c.push({paramName:S,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(c.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function Lv(a){try{return a.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Gt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),a}}function $n(a,o){if(o==="/")return a;if(!a.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}var vp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gv=a=>vp.test(a);function Vv(a,o="/"){let{pathname:u,search:c="",hash:f=""}=typeof a=="string"?nl(a):a,m;if(u)if(Gv(u))m=u;else{if(u.includes("//")){let p=u;u=u.replace(/\/\/+/g,"/"),Gt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${u}`)}u.startsWith("/")?m=z0(u.substring(1),"/"):m=z0(u,o)}else m=o;return{pathname:m,search:Kv(c),hash:Zv(f)}}function z0(a,o){let u=o.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Nu(a,o,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Yv(a){return a.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Ud(a){let o=Yv(a);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function Ld(a,o,u,c=!1){let f;typeof a=="string"?f=nl(a):(f={...a},Ue(!f.pathname||!f.pathname.includes("?"),Nu("?","pathname","search",f)),Ue(!f.pathname||!f.pathname.includes("#"),Nu("#","pathname","hash",f)),Ue(!f.search||!f.search.includes("#"),Nu("#","search","hash",f)));let m=a===""||f.pathname==="",p=m?"/":f.pathname,S;if(p==null)S=u;else{let w=o.length-1;if(!c&&p.startsWith("..")){let N=p.split("/");for(;N[0]==="..";)N.shift(),w-=1;f.pathname=N.join("/")}S=w>=0?o[w]:"/"}let y=Vv(f,S),x=p&&p!=="/"&&p.endsWith("/"),A=(m||p===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(x||A)&&(y.pathname+="/"),y}var Kn=a=>a.join("/").replace(/\/\/+/g,"/"),qv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Kv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Zv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Qv=class{constructor(a,o,u,c=!1){this.status=a,this.statusText=o||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function $v(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Xv(a){return a.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var jp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sp(a,o){let u=a;if(typeof u!="string"||!vp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,f=!1;if(jp)try{let m=new URL(window.location.href),p=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=$n(p.pathname,o);p.origin===m.origin&&S!=null?u=S+p.search+p.hash:f=!0}catch{Gt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wp=["POST","PUT","PATCH","DELETE"];new Set(wp);var Jv=["GET",...wp];new Set(Jv);var il=M.createContext(null);il.displayName="DataRouter";var ro=M.createContext(null);ro.displayName="DataRouterState";var Wv=M.createContext(!1),zp=M.createContext({isTransitioning:!1});zp.displayName="ViewTransition";var Fv=M.createContext(new Map);Fv.displayName="Fetchers";var Pv=M.createContext(null);Pv.displayName="Await";var Vt=M.createContext(null);Vt.displayName="Navigation";var cr=M.createContext(null);cr.displayName="Location";var jn=M.createContext({outlet:null,matches:[],isDataRoute:!1});jn.displayName="Route";var Gd=M.createContext(null);Gd.displayName="RouteError";var _p="REACT_ROUTER_ERROR",Iv="REDIRECT",ej="ROUTE_ERROR_RESPONSE";function tj(a){if(a.startsWith(`${_p}:${Iv}:{`))try{let o=JSON.parse(a.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function nj(a){if(a.startsWith(`${_p}:${ej}:{`))try{let o=JSON.parse(a.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Qv(o.status,o.statusText,o.data)}catch{}}function ij(a,{relative:o}={}){Ue(al(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=M.useContext(Vt),{hash:f,pathname:m,search:p}=ur(a,{relative:o}),S=m;return u!=="/"&&(S=m==="/"?u:Kn([u,m])),c.createHref({pathname:S,search:p,hash:f})}function al(){return M.useContext(cr)!=null}function Sn(){return Ue(al(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(cr).location}var Ep="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Tp(a){M.useContext(Vt).static||M.useLayoutEffect(a)}function Vd(){let{isDataRoute:a}=M.useContext(jn);return a?pj():aj()}function aj(){Ue(al(),"useNavigate() may be used only in the context of a <Router> component.");let a=M.useContext(il),{basename:o,navigator:u}=M.useContext(Vt),{matches:c}=M.useContext(jn),{pathname:f}=Sn(),m=JSON.stringify(Ud(c)),p=M.useRef(!1);return Tp(()=>{p.current=!0}),M.useCallback((y,x={})=>{if(Gt(p.current,Ep),!p.current)return;if(typeof y=="number"){u.go(y);return}let A=Ld(y,JSON.parse(m),f,x.relative==="path");a==null&&o!=="/"&&(A.pathname=A.pathname==="/"?o:Kn([o,A.pathname])),(x.replace?u.replace:u.push)(A,x.state,x)},[o,u,m,f,a])}M.createContext(null);function ur(a,{relative:o}={}){let{matches:u}=M.useContext(jn),{pathname:c}=Sn(),f=JSON.stringify(Ud(u));return M.useMemo(()=>Ld(a,JSON.parse(f),c,o==="path"),[a,f,c,o])}function lj(a,o){return Ap(a,o)}function Ap(a,o,u,c,f){Ue(al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=M.useContext(Vt),{matches:p}=M.useContext(jn),S=p[p.length-1],y=S?S.params:{},x=S?S.pathname:"/",A=S?S.pathnameBase:"/",w=S&&S.route;{let G=w&&w.path||"";kp(x,!w||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let N=Sn(),L;if(o){let G=typeof o=="string"?nl(o):o;Ue(A==="/"||G.pathname?.startsWith(A),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${G.pathname}" was given in the \`location\` prop.`),L=G}else L=N;let Y=L.pathname||"/",V=Y;if(A!=="/"){let G=A.replace(/^\//,"").split("/");V="/"+Y.replace(/^\//,"").split("/").slice(G.length).join("/")}let q=xp(a,{pathname:V});Gt(w||q!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Gt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=uj(q&&q.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:Kn([A,m.encodeLocation?m.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?A:Kn([A,m.encodeLocation?m.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),p,u,c,f);return o&&K?M.createElement(cr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},K):K}function rj(){let a=gj(),o=$v(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:m},"ErrorBoundary")," or"," ",M.createElement("code",{style:m},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},o),u?M.createElement("pre",{style:f},u):null,p)}var sj=M.createElement(rj,null),Cp=class extends M.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,o){return o.location!==a.location||o.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:o.error,location:o.location,revalidation:a.revalidation||o.revalidation}}componentDidCatch(a,o){this.props.onError?this.props.onError(a,o):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const u=nj(a.digest);u&&(a=u)}let o=a!==void 0?M.createElement(jn.Provider,{value:this.props.routeContext},M.createElement(Gd.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?M.createElement(oj,{error:a},o):o}};Cp.contextType=Wv;var Hu=new WeakMap;function oj({children:a,error:o}){let{basename:u}=M.useContext(Vt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=tj(o.digest);if(c){let f=Hu.get(o);if(f)throw f;let m=Sp(c.location,u);if(jp&&!Hu.get(o))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Hu.set(o,p),p}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return a}function cj({routeContext:a,match:o,children:u}){let c=M.useContext(il);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),M.createElement(jn.Provider,{value:a},u)}function uj(a,o=[],u=null,c=null,f=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let m=a,p=u?.errors;if(p!=null){let A=m.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);Ue(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,A+1))}let S=!1,y=-1;if(u)for(let A=0;A<m.length;A++){let w=m[A];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=A),w.route.id){let{loaderData:N,errors:L}=u,Y=w.route.loader&&!N.hasOwnProperty(w.route.id)&&(!L||L[w.route.id]===void 0);if(w.route.lazy||Y){S=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let x=u&&c?(A,w)=>{c(A,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Xv(u.matches),errorInfo:w})}:void 0;return m.reduceRight((A,w,N)=>{let L,Y=!1,V=null,q=null;u&&(L=p&&w.route.id?p[w.route.id]:void 0,V=w.route.errorElement||sj,S&&(y<0&&N===0?(kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,q=null):y===N&&(Y=!0,q=w.route.hydrateFallbackElement||null)));let K=o.concat(m.slice(0,N+1)),G=()=>{let U;return L?U=V:Y?U=q:w.route.Component?U=M.createElement(w.route.Component,null):w.route.element?U=w.route.element:U=A,M.createElement(cj,{match:w,routeContext:{outlet:A,matches:K,isDataRoute:u!=null},children:U})};return u&&(w.route.ErrorBoundary||w.route.errorElement||N===0)?M.createElement(Cp,{location:u.location,revalidation:u.revalidation,component:V,error:L,children:G(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:x}):G()},null)}function Yd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dj(a){let o=M.useContext(il);return Ue(o,Yd(a)),o}function fj(a){let o=M.useContext(ro);return Ue(o,Yd(a)),o}function hj(a){let o=M.useContext(jn);return Ue(o,Yd(a)),o}function qd(a){let o=hj(a),u=o.matches[o.matches.length-1];return Ue(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function mj(){return qd("useRouteId")}function gj(){let a=M.useContext(Gd),o=fj("useRouteError"),u=qd("useRouteError");return a!==void 0?a:o.errors?.[u]}function pj(){let{router:a}=dj("useNavigate"),o=qd("useNavigate"),u=M.useRef(!1);return Tp(()=>{u.current=!0}),M.useCallback(async(f,m={})=>{Gt(u.current,Ep),u.current&&(typeof f=="number"?await a.navigate(f):await a.navigate(f,{fromRouteId:o,...m}))},[a,o])}var _0={};function kp(a,o,u){!o&&!_0[a]&&(_0[a]=!0,Gt(!1,u))}M.memo(xj);function xj({routes:a,future:o,state:u,onError:c}){return Ap(a,void 0,u,c,o)}function Zs({to:a,replace:o,state:u,relative:c}){Ue(al(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=M.useContext(Vt);Gt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=M.useContext(jn),{pathname:p}=Sn(),S=Vd(),y=Ld(a,Ud(m),p,c==="path"),x=JSON.stringify(y);return M.useEffect(()=>{S(JSON.parse(x),{replace:o,state:u,relative:c})},[S,x,c,o,u]),null}function Si(a){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function bj({basename:a="/",children:o=null,location:u,navigationType:c="POP",navigator:f,static:m=!1,unstable_useTransitions:p}){Ue(!al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=a.replace(/^\/*/,"/"),y=M.useMemo(()=>({basename:S,navigator:f,static:m,unstable_useTransitions:p,future:{}}),[S,f,m,p]);typeof u=="string"&&(u=nl(u));let{pathname:x="/",search:A="",hash:w="",state:N=null,key:L="default"}=u,Y=M.useMemo(()=>{let V=$n(x,S);return V==null?null:{location:{pathname:V,search:A,hash:w,state:N,key:L},navigationType:c}},[S,x,A,w,N,L,c]);return Gt(Y!=null,`<Router basename="${S}"> is not able to match the URL "${x}${A}${w}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:M.createElement(Vt.Provider,{value:y},M.createElement(cr.Provider,{children:o,value:Y}))}function yj({children:a,location:o}){return lj(kd(a),o)}function kd(a,o=[]){let u=[];return M.Children.forEach(a,(c,f)=>{if(!M.isValidElement(c))return;let m=[...o,f];if(c.type===M.Fragment){u.push.apply(u,kd(c.props.children,m));return}Ue(c.type===Si,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=kd(c.props.children,m)),u.push(p)}),u}var Qs="get",$s="application/x-www-form-urlencoded";function so(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function vj(a){return so(a)&&a.tagName.toLowerCase()==="button"}function jj(a){return so(a)&&a.tagName.toLowerCase()==="form"}function Sj(a){return so(a)&&a.tagName.toLowerCase()==="input"}function wj(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function zj(a,o){return a.button===0&&(!o||o==="_self")&&!wj(a)}function Md(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((o,u)=>{let c=a[u];return o.concat(Array.isArray(c)?c.map(f=>[u,f]):[[u,c]])},[]))}function _j(a,o){let u=Md(a);return o&&o.forEach((c,f)=>{u.has(f)||o.getAll(f).forEach(m=>{u.append(f,m)})}),u}var As=null;function Ej(){if(As===null)try{new FormData(document.createElement("form"),0),As=!1}catch{As=!0}return As}var Tj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(a){return a!=null&&!Tj.has(a)?(Gt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$s}"`),null):a}function Aj(a,o){let u,c,f,m,p;if(jj(a)){let S=a.getAttribute("action");c=S?$n(S,o):null,u=a.getAttribute("method")||Qs,f=Uu(a.getAttribute("enctype"))||$s,m=new FormData(a)}else if(vj(a)||Sj(a)&&(a.type==="submit"||a.type==="image")){let S=a.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=a.getAttribute("formaction")||S.getAttribute("action");if(c=y?$n(y,o):null,u=a.getAttribute("formmethod")||S.getAttribute("method")||Qs,f=Uu(a.getAttribute("formenctype"))||Uu(S.getAttribute("enctype"))||$s,m=new FormData(S,a),!Ej()){let{name:x,type:A,value:w}=a;if(A==="image"){let N=x?`${x}.`:"";m.append(`${N}x`,"0"),m.append(`${N}y`,"0")}else x&&m.append(x,w)}}else{if(so(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Qs,c=null,f=$s,p=a}return m&&f==="text/plain"&&(p=m,m=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kd(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function Cj(a,o,u,c){let f=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:o&&$n(f.pathname,o)==="/"?f.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function kj(a,o){if(a.id in o)return o[a.id];try{let u=await import(a.module);return o[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mj(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Rj(a,o,u){let c=await Promise.all(a.map(async f=>{let m=o.routes[f.route.id];if(m){let p=await kj(m,u);return p.links?p.links():[]}return[]}));return Nj(c.flat(1).filter(Mj).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function E0(a,o,u,c,f,m){let p=(y,x)=>u[x]?y.route.id!==u[x].route.id:!0,S=(y,x)=>u[x].pathname!==y.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==y.params["*"];return m==="assets"?o.filter((y,x)=>p(y,x)||S(y,x)):m==="data"?o.filter((y,x)=>{let A=c.routes[y.route.id];if(!A||!A.hasLoader)return!1;if(p(y,x)||S(y,x))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Bj(a,o,{includeHydrateFallback:u}={}){return Dj(a.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function Dj(a){return[...new Set(a)]}function Oj(a){let o={},u=Object.keys(a).sort();for(let c of u)o[c]=a[c];return o}function Nj(a,o){let u=new Set;return new Set(o),a.reduce((c,f)=>{let m=JSON.stringify(Oj(f));return u.has(m)||(u.add(m),c.push({key:m,link:f})),c},[])}function Mp(){let a=M.useContext(il);return Kd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Hj(){let a=M.useContext(ro);return Kd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Zd=M.createContext(void 0);Zd.displayName="FrameworkContext";function Rp(){let a=M.useContext(Zd);return Kd(a,"You must render this element inside a <HydratedRouter> element"),a}function Uj(a,o){let u=M.useContext(Zd),[c,f]=M.useState(!1),[m,p]=M.useState(!1),{onFocus:S,onBlur:y,onMouseEnter:x,onMouseLeave:A,onTouchStart:w}=o,N=M.useRef(null);M.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let V=K=>{K.forEach(G=>{p(G.isIntersecting)})},q=new IntersectionObserver(V,{threshold:.5});return N.current&&q.observe(N.current),()=>{q.disconnect()}}},[a]),M.useEffect(()=>{if(c){let V=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(V)}}},[c]);let L=()=>{f(!0)},Y=()=>{f(!1),p(!1)};return u?a!=="intent"?[m,N,{}]:[m,N,{onFocus:Il(S,L),onBlur:Il(y,Y),onMouseEnter:Il(x,L),onMouseLeave:Il(A,Y),onTouchStart:Il(w,L)}]:[!1,N,{}]}function Il(a,o){return u=>{a&&a(u),u.defaultPrevented||o(u)}}function Lj({page:a,...o}){let{router:u}=Mp(),c=M.useMemo(()=>xp(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?M.createElement(Vj,{page:a,matches:c,...o}):null}function Gj(a){let{manifest:o,routeModules:u}=Rp(),[c,f]=M.useState([]);return M.useEffect(()=>{let m=!1;return Rj(a,o,u).then(p=>{m||f(p)}),()=>{m=!0}},[a,o,u]),c}function Vj({page:a,matches:o,...u}){let c=Sn(),{future:f,manifest:m,routeModules:p}=Rp(),{basename:S}=Mp(),{loaderData:y,matches:x}=Hj(),A=M.useMemo(()=>E0(a,o,x,m,c,"data"),[a,o,x,m,c]),w=M.useMemo(()=>E0(a,o,x,m,c,"assets"),[a,o,x,m,c]),N=M.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let V=new Set,q=!1;if(o.forEach(G=>{let U=m.routes[G.route.id];!U||!U.hasLoader||(!A.some(W=>W.route.id===G.route.id)&&G.route.id in y&&p[G.route.id]?.shouldRevalidate||U.hasClientLoader?q=!0:V.add(G.route.id))}),V.size===0)return[];let K=Cj(a,S,f.unstable_trailingSlashAwareDataRequests,"data");return q&&V.size>0&&K.searchParams.set("_routes",o.filter(G=>V.has(G.route.id)).map(G=>G.route.id).join(",")),[K.pathname+K.search]},[S,f.unstable_trailingSlashAwareDataRequests,y,c,m,A,o,a,p]),L=M.useMemo(()=>Bj(w,m),[w,m]),Y=Gj(w);return M.createElement(M.Fragment,null,N.map(V=>M.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...u})),L.map(V=>M.createElement("link",{key:V,rel:"modulepreload",href:V,...u})),Y.map(({key:V,link:q})=>M.createElement("link",{key:V,nonce:u.nonce,...q})))}function Yj(...a){return o=>{a.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var qj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qj&&(window.__reactRouterVersion="7.12.0")}catch{}function Kj({basename:a,children:o,unstable_useTransitions:u,window:c}){let f=M.useRef();f.current==null&&(f.current=wv({window:c,v5Compat:!0}));let m=f.current,[p,S]=M.useState({action:m.action,location:m.location}),y=M.useCallback(x=>{u===!1?S(x):M.startTransition(()=>S(x))},[u]);return M.useLayoutEffect(()=>m.listen(y),[m,y]),M.createElement(bj,{basename:a,children:o,location:p.location,navigationType:p.action,navigator:m,unstable_useTransitions:u})}var Bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oo=M.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:f,reloadDocument:m,replace:p,state:S,target:y,to:x,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:N,...L},Y){let{basename:V,unstable_useTransitions:q}=M.useContext(Vt),K=typeof x=="string"&&Bp.test(x),G=Sp(x,V);x=G.to;let U=ij(x,{relative:f}),[W,I,$]=Uj(c,L),_=Xj(x,{replace:p,state:S,target:y,preventScrollReset:A,relative:f,viewTransition:w,unstable_defaultShouldRevalidate:N,unstable_useTransitions:q});function le(ue){o&&o(ue),ue.defaultPrevented||_(ue)}let fe=M.createElement("a",{...L,...$,href:G.absoluteURL||U,onClick:G.isExternal||m?o:le,ref:Yj(Y,I),target:y,"data-discover":!K&&u==="render"?"true":void 0});return W&&!K?M.createElement(M.Fragment,null,fe,M.createElement(Lj,{page:U})):fe});oo.displayName="Link";var Zj=M.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:f=!1,style:m,to:p,viewTransition:S,children:y,...x},A){let w=ur(p,{relative:x.relative}),N=Sn(),L=M.useContext(ro),{navigator:Y,basename:V}=M.useContext(Vt),q=L!=null&&Ij(w)&&S===!0,K=Y.encodeLocation?Y.encodeLocation(w).pathname:w.pathname,G=N.pathname,U=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;u||(G=G.toLowerCase(),U=U?U.toLowerCase():null,K=K.toLowerCase()),U&&V&&(U=$n(U,V)||U);const W=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let I=G===K||!f&&G.startsWith(K)&&G.charAt(W)==="/",$=U!=null&&(U===K||!f&&U.startsWith(K)&&U.charAt(K.length)==="/"),_={isActive:I,isPending:$,isTransitioning:q},le=I?o:void 0,fe;typeof c=="function"?fe=c(_):fe=[c,I?"active":null,$?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let ue=typeof m=="function"?m(_):m;return M.createElement(oo,{...x,"aria-current":le,className:fe,ref:A,style:ue,to:p,viewTransition:S},typeof y=="function"?y(_):y)});Zj.displayName="NavLink";var Qj=M.forwardRef(({discover:a="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:f,state:m,method:p=Qs,action:S,onSubmit:y,relative:x,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:N,...L},Y)=>{let{unstable_useTransitions:V}=M.useContext(Vt),q=Fj(),K=Pj(S,{relative:x}),G=p.toLowerCase()==="get"?"get":"post",U=typeof S=="string"&&Bp.test(S),W=I=>{if(y&&y(I),I.defaultPrevented)return;I.preventDefault();let $=I.nativeEvent.submitter,_=$?.getAttribute("formmethod")||p,le=()=>q($||I.currentTarget,{fetcherKey:o,method:_,navigate:u,replace:f,state:m,relative:x,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:N});V&&u!==!1?M.startTransition(()=>le()):le()};return M.createElement("form",{ref:Y,method:G,action:K,onSubmit:c?y:W,...L,"data-discover":!U&&a==="render"?"true":void 0})});Qj.displayName="Form";function $j(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dp(a){let o=M.useContext(il);return Ue(o,$j(a)),o}function Xj(a,{target:o,replace:u,state:c,preventScrollReset:f,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:S,unstable_useTransitions:y}={}){let x=Vd(),A=Sn(),w=ur(a,{relative:m});return M.useCallback(N=>{if(zj(N,o)){N.preventDefault();let L=u!==void 0?u:or(A)===or(w),Y=()=>x(a,{replace:L,state:c,preventScrollReset:f,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:S});y?M.startTransition(()=>Y()):Y()}},[A,x,w,u,c,o,a,f,m,p,S,y])}function Op(a){Gt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=M.useRef(Md(a)),u=M.useRef(!1),c=Sn(),f=M.useMemo(()=>_j(c.search,u.current?null:o.current),[c.search]),m=Vd(),p=M.useCallback((S,y)=>{const x=Md(typeof S=="function"?S(new URLSearchParams(f)):S);u.current=!0,m("?"+x,y)},[m,f]);return[f,p]}var Jj=0,Wj=()=>`__${String(++Jj)}__`;function Fj(){let{router:a}=Dp("useSubmit"),{basename:o}=M.useContext(Vt),u=mj(),c=a.fetch,f=a.navigate;return M.useCallback(async(m,p={})=>{let{action:S,method:y,encType:x,formData:A,body:w}=Aj(m,o);if(p.navigate===!1){let N=p.fetcherKey||Wj();await c(N,u,p.action||S,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:A,body:w,formMethod:p.method||y,formEncType:p.encType||x,flushSync:p.flushSync})}else await f(p.action||S,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:A,body:w,formMethod:p.method||y,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,f,o,u])}function Pj(a,{relative:o}={}){let{basename:u}=M.useContext(Vt),c=M.useContext(jn);Ue(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),m={...ur(a||".",{relative:o})},p=Sn();if(a==null){m.search=p.search;let S=new URLSearchParams(m.search),y=S.getAll("index");if(y.some(A=>A==="")){S.delete("index"),y.filter(w=>w).forEach(w=>S.append("index",w));let A=S.toString();m.search=A?`?${A}`:""}}return(!a||a===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Kn([u,m.pathname])),or(m)}function Ij(a,{relative:o}={}){let u=M.useContext(zp);Ue(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Dp("useViewTransitionState"),f=ur(a,{relative:o});if(!u.isTransitioning)return!1;let m=$n(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=$n(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Ps(f.pathname,p)!=null||Ps(f.pathname,m)!=null}const e5="/assets/logo-BY-LKRi7.png",t5=h.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,n5=h.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,i5=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,a5=h.img`
  height: 40px;
  width: auto;
`,l5=h.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${a=>a.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,r5=h.div`
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
`,Lu=h(oo)`
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
`,s5=h.button`
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
`;function Cs(){const a=Sn(),[o,u]=M.useState(!1);return l.jsx(t5,{children:l.jsxs(n5,{children:[l.jsx(Lu,{to:"/",onClick:()=>u(!1),children:l.jsxs(i5,{children:[l.jsx(a5,{src:e5,alt:"SCKW Logo"}),l.jsx(l5,{children:"SC Konstanz-Wollmatingen e. V."})]})}),l.jsxs(s5,{"aria-label":"Menü öffnen/schließen","aria-expanded":o,"aria-controls":"mobile-nav",onClick:()=>u(f=>!f),children:["Menü",l.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),l.jsxs(r5,{id:"mobile-nav",$open:o,children:[l.jsx(Lu,{to:"/sponsoring",$active:a.pathname==="/sponsoring"||a.pathname==="/sponsoring-v2",onClick:()=>u(!1),children:"🤝 Sponsoring"}),l.jsx(Lu,{to:"/jobs",$active:a.pathname==="/jobs",onClick:()=>u(!1),children:"💼 Jobbörse"}),!1]})]})})}const o5=h.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Gu=h.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,c5=h(oo)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,u5=h.div`
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
`,d5=h.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Qd(){return l.jsx(o5,{children:l.jsxs(u5,{children:[l.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",l.jsx(Gu,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),l.jsxs(d5,{"aria-label":"Rechtliches",children:[l.jsx(c5,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),l.jsx(Gu,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),l.jsx(Gu,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const Zn=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),f5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,h5=h.div`
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
`,m5=h.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,g5=h.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,p5=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,x5=h.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${a=>a.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${a=>a.isVergeben?"line-through":"none"};
`,b5=h.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:a})=>a==="verfügbar"?"#d4edda":a==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:a})=>a==="verfügbar"?"#155724":a==="vergeben"?"#721c24":"#856404"};
`,y5=h.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,v5=h.li`
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
`,j5=h.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,S5=h.span`
  flex: 1;
`,w5=h.a`
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
`,z5=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,_5=h.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,E5=h.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,T5=h.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,A5=h.a`
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
`,C5="sponsoring@sckw.de";function Wa({packages:a}){const o=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=p=>{const S=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return S?S[0]:""},c=p=>{const S=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),y=encodeURIComponent(`Interesse am Sponsoring-Paket "${S}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${S}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${C5}?subject=${y}&body=${x}`},f=p=>{const S=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:S,isFullyBooked:S===0}},m=a.filter(p=>!p.title.includes("Platz-Renovierung"));return l.jsx(f5,{children:m.map((p,S)=>{const{isFullyBooked:y}=f(p),x=o(p.status),A=x==="vergeben"||y,w=y?"vergeben":x,N=p.keyBenefits||[];return l.jsxs(h5,{isVergeben:A,children:[l.jsxs(m5,{children:[l.jsx(g5,{children:u(p.title)}),l.jsx(p5,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!A&&l.jsx(x5,{children:p.price}),l.jsx(b5,{status:w,children:w==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),A&&p.sponsors&&p.sponsors.length>0?l.jsxs(z5,{children:[p.sponsors[0].image&&l.jsx(_5,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),l.jsx(E5,{children:p.sponsors[0].name}),l.jsxs(T5,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&l.jsx(A5,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):l.jsx(y5,{children:N.map((L,Y)=>l.jsxs(v5,{isHighlight:L.highlight,children:[l.jsx(j5,{children:L.icon}),l.jsx(S5,{children:L.text})]},Y))}),l.jsx(w5,{href:A?void 0:c(p.title),isVergeben:A,children:A?"Vergeben":"Jetzt anfragen"})]},S)})})}const k5=h.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${a=>a.theme.colors.bgMuted};
  border: 1px solid ${a=>a.theme.colors.border};
  overflow: hidden;
`,M5=h.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,R5=h.button`
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
`,B5=h.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${a=>a.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${a=>a.theme.colors.primary};
`,D5=h.div`
  background: ${a=>a.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${a=>a.isOpen?"500px":"0"};
  opacity: ${a=>a.isOpen?"1":"0"};
`,O5=h.div`
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
`,N5=h.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,H5=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:l.jsxs(l.Fragment,{children:[l.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:l.jsxs(l.Fragment,{children:[l.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:l.jsx(l.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function U5(){const[a,o]=M.useState([]),u=f=>{o(m=>m.includes(f)?m.filter(p=>p!==f):[...m,f])},c=(f,m)=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),u(m))};return l.jsx(k5,{children:H5.map(f=>{const m=a.includes(f.id);return l.jsxs(M5,{children:[l.jsxs(R5,{isOpen:m,onClick:()=>u(f.id),onKeyDown:p=>c(p,f.id),"aria-expanded":m,"aria-controls":`accordion-content-${f.id}`,children:[l.jsxs("span",{children:[l.jsx(N5,{children:f.icon}),f.title]}),l.jsx(B5,{isOpen:m,children:"▼"})]}),l.jsx(D5,{isOpen:m,id:`accordion-content-${f.id}`,role:"region","aria-labelledby":`accordion-header-${f.id}`,children:l.jsx(O5,{children:f.content})})]},f.id)})})}const Np="/assets/cheerleading_0-DQQGXi0R.jpg",Hp="/assets/cheerleading_1-NkLBARmH.jpg",Up="/assets/cheerleading_2-CrezcZYL.jpg",Lp="/assets/cheerleading_3-GN5rPHNN.jpg",Gp="/assets/1-ClVWb4ei.png",Vp="/assets/10-Bwp2eIye.png",Yp="/assets/11-W061sOUI.png",qp="/assets/12-TjJyzl8L.png",Kp="/assets/13-ChUUCdQQ.png",Zp="/assets/14-BVhdRr98.png",Qp="/assets/2-CcfgIQYe.png",$p="/assets/3-DYiPkVd7.png",Xp="/assets/4-1upoqVoS.png",Jp="/assets/5-D0tadXAC.png",Wp="/assets/6-NJ4ELm_j.png",Fp="/assets/7-BXo4_Bcj.png",Pp="/assets/8-BbOqEnj_.png",Ip="/assets/9-CIK0gi9o.png",ex="/assets/herren_0-BVVgyt1l.jpg",tx="/assets/herren_1-B8ywOnNy.jpg",nx="/assets/herren_10-DPVQsg9B.jpg",ix="/assets/herren_11-wfWG62H3.jpg",ax="/assets/herren_12-DEJSN2zG.jpg",lx="/assets/herren_13-F52vdukE.jpg",rx="/assets/herren_14-Cq9hoKfG.jpg",sx="/assets/herren_15-aYIFGauG.jpg",ox="/assets/herren_16-NYI2EaEN.jpg",cx="/assets/herren_17-B_52ysA2.jpg",ux="/assets/herren_18-DbwjVNKJ.jpg",dx="/assets/herren_19-BduD_J85.png",fx="/assets/herren_2--jFuixBF.jpg",hx="/assets/herren_3-BPz1zlkG.jpg",mx="/assets/herren_4-BZRrQaFr.jpg",gx="/assets/herren_5-D-QrfY2P.jpg",px="/assets/herren_6-DWQvi6Am.jpg",xx="/assets/herren_7-BXO6B8Bt.jpg",bx="/assets/herren_8-Cg4rdr7T.jpg",yx="/assets/herren_9-DoLnTdRG.jpg",vx="/assets/herren_jubel_500club-mxBrnD8H.png",jx="/assets/IMG-team-BGcF1agj.png",Sx="/assets/IMG_5349-CpvIVKhM.jpg",wx="/assets/IMG_5369-DQ4CSwdg.jpg",zx="/assets/IMG_5421-BBzniIEN.jpg",_x="/assets/IMG_5442-D2PgutWB.jpg",Ex="/assets/IMG_5952-B9VW6Qie.jpg",Tx="/assets/Unbenann324t-IPGo6eoQ.png",Ax="/assets/image0-DDrU5aZn.jpeg",Cx="/assets/image11-BNM8hTkT.jpeg",kx="/assets/image8-BUnedp9U.jpeg",L5="/assets/grafhardenberg-Di5cVggE.png",G5="/assets/horta-DydWIGV7.png",V5="/assets/logans-BgpKwKYA.png",Y5="/assets/ricobet-DsVC-eZt.png",q5="/assets/rothaus-DqkKD9yW.png",K5="/assets/tasty-B2pSa1rE.png",Z5="/assets/cabin-window-B83r_CDB.jpg",Q5="/assets/outside-9-xz17qL.jpg",$5="/assets/shower-B75caJ-F.jpg",X5="/assets/sitting-area-D7khB3Gw.jpg",J5="/assets/toilet-BpMHYbhh.jpg",W5=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Np,"../assets/gallery/cheerleading/cheerleading_1.jpg":Hp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Up,"../assets/gallery/cheerleading/cheerleading_3.jpg":Lp,"../assets/gallery/damen/1.png":Gp,"../assets/gallery/damen/10.png":Vp,"../assets/gallery/damen/11.png":Yp,"../assets/gallery/damen/12.png":qp,"../assets/gallery/damen/13.png":Kp,"../assets/gallery/damen/14.png":Zp,"../assets/gallery/damen/2.png":Qp,"../assets/gallery/damen/3.png":$p,"../assets/gallery/damen/4.png":Xp,"../assets/gallery/damen/5.png":Jp,"../assets/gallery/damen/6.png":Wp,"../assets/gallery/damen/7.png":Fp,"../assets/gallery/damen/8.png":Pp,"../assets/gallery/damen/9.png":Ip,"../assets/gallery/herren/herren_0.jpg":ex,"../assets/gallery/herren/herren_1.jpg":tx,"../assets/gallery/herren/herren_10.jpg":nx,"../assets/gallery/herren/herren_11.jpg":ix,"../assets/gallery/herren/herren_12.jpg":ax,"../assets/gallery/herren/herren_13.jpg":lx,"../assets/gallery/herren/herren_14.jpg":rx,"../assets/gallery/herren/herren_15.jpg":sx,"../assets/gallery/herren/herren_16.jpg":ox,"../assets/gallery/herren/herren_17.jpg":cx,"../assets/gallery/herren/herren_18.jpg":ux,"../assets/gallery/herren/herren_19.png":dx,"../assets/gallery/herren/herren_2.jpg":fx,"../assets/gallery/herren/herren_3.jpg":hx,"../assets/gallery/herren/herren_4.jpg":mx,"../assets/gallery/herren/herren_5.jpg":gx,"../assets/gallery/herren/herren_6.jpg":px,"../assets/gallery/herren/herren_7.jpg":xx,"../assets/gallery/herren/herren_8.jpg":bx,"../assets/gallery/herren/herren_9.jpg":yx,"../assets/gallery/herren/herren_jubel_500club.png":vx,"../assets/gallery/jfv/IMG-team.png":jx,"../assets/gallery/jfv/IMG_5349.jpg":Sx,"../assets/gallery/jfv/IMG_5369.jpg":wx,"../assets/gallery/jfv/IMG_5421.jpg":zx,"../assets/gallery/jfv/IMG_5442.jpg":_x,"../assets/gallery/jfv/IMG_5952.jpg":Ex,"../assets/gallery/jfv/Unbenann324t.png":Tx,"../assets/gallery/jfv/image0.jpeg":Ax,"../assets/gallery/jfv/image11.jpeg":Cx,"../assets/gallery/jfv/image8.jpeg":kx}),F5=Object.assign({"../assets/sponsors/grafhardenberg.png":L5,"../assets/sponsors/horta.png":G5,"../assets/sponsors/logans.png":V5,"../assets/sponsors/ricobet.png":Y5,"../assets/sponsors/rothaus.png":q5,"../assets/sponsors/tasty.png":K5}),P5=Object.assign({"../assets/renovation/cabin-window.jpg":Z5,"../assets/renovation/outside.jpg":Q5,"../assets/renovation/shower.jpg":$5,"../assets/renovation/sitting-area.jpg":X5,"../assets/renovation/toilet.jpg":J5}),Mx=a=>a.split("/").pop()?.toLowerCase()||"",I5=a=>{const o=a.match(/gallery\/(.*?)\//);return o?o[1]:"Sonstige"};function eS(a){const o=[...a];for(let u=o.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[o[u],o[c]]=[o[c],o[u]]}return o}const Rx=()=>{const a={};Object.entries(W5).forEach(([c,f])=>{const m=I5(c);a[m]||(a[m]=[]),a[m].push(f)}),Object.keys(a).forEach(c=>{a[c]=eS(a[c])});const o={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{a[c]&&(o[c]=a[c])}),Object.keys(a).forEach(c=>{u.includes(c.toLowerCase())||(o[c]=a[c])}),o},tS=()=>{const a={};return Object.entries(F5).forEach(([o,u])=>{const c=Mx(o);a[c]=u}),a},Bx=()=>{const a={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(P5).forEach(([o,u])=>{const c=Mx(o);c.includes("sitting")?a.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?a.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&a.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?a.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?a.waschkueche.push({src:u,alt:"Dusche"}):a.waschkueche.push({src:u,alt:"Waschküche"}))}),a},vt=a=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Np,"../assets/gallery/cheerleading/cheerleading_1.jpg":Hp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Up,"../assets/gallery/cheerleading/cheerleading_3.jpg":Lp,"../assets/gallery/damen/1.png":Gp,"../assets/gallery/damen/10.png":Vp,"../assets/gallery/damen/11.png":Yp,"../assets/gallery/damen/12.png":qp,"../assets/gallery/damen/13.png":Kp,"../assets/gallery/damen/14.png":Zp,"../assets/gallery/damen/2.png":Qp,"../assets/gallery/damen/3.png":$p,"../assets/gallery/damen/4.png":Xp,"../assets/gallery/damen/5.png":Jp,"../assets/gallery/damen/6.png":Wp,"../assets/gallery/damen/7.png":Fp,"../assets/gallery/damen/8.png":Pp,"../assets/gallery/damen/9.png":Ip,"../assets/gallery/herren/herren_0.jpg":ex,"../assets/gallery/herren/herren_1.jpg":tx,"../assets/gallery/herren/herren_10.jpg":nx,"../assets/gallery/herren/herren_11.jpg":ix,"../assets/gallery/herren/herren_12.jpg":ax,"../assets/gallery/herren/herren_13.jpg":lx,"../assets/gallery/herren/herren_14.jpg":rx,"../assets/gallery/herren/herren_15.jpg":sx,"../assets/gallery/herren/herren_16.jpg":ox,"../assets/gallery/herren/herren_17.jpg":cx,"../assets/gallery/herren/herren_18.jpg":ux,"../assets/gallery/herren/herren_19.png":dx,"../assets/gallery/herren/herren_2.jpg":fx,"../assets/gallery/herren/herren_3.jpg":hx,"../assets/gallery/herren/herren_4.jpg":mx,"../assets/gallery/herren/herren_5.jpg":gx,"../assets/gallery/herren/herren_6.jpg":px,"../assets/gallery/herren/herren_7.jpg":xx,"../assets/gallery/herren/herren_8.jpg":bx,"../assets/gallery/herren/herren_9.jpg":yx,"../assets/gallery/herren/herren_jubel_500club.png":vx,"../assets/gallery/jfv/IMG-team.png":jx,"../assets/gallery/jfv/IMG_5349.jpg":Sx,"../assets/gallery/jfv/IMG_5369.jpg":wx,"../assets/gallery/jfv/IMG_5421.jpg":zx,"../assets/gallery/jfv/IMG_5442.jpg":_x,"../assets/gallery/jfv/IMG_5952.jpg":Ex,"../assets/gallery/jfv/Unbenann324t.png":Tx,"../assets/gallery/jfv/image0.jpeg":Ax,"../assets/gallery/jfv/image11.jpeg":Cx,"../assets/gallery/jfv/image8.jpeg":kx})).find(([c])=>c.includes(a));return u?u[1]:""},$d=(a,o)=>vt(`${a}/${a}_${o}.jpg`);Rx(),tS(),Bx();function nS(){const a=Rx(),[o,u]=M.useState(null);return M.useEffect(()=>{if(!o)return;const c=f=>{f.key==="Escape"&&u(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[o]),l.jsxs("section",{children:[l.jsx("h3",{children:"Bildergalerie"}),Object.entries(a).map(([c,f])=>l.jsxs("div",{style:{marginBottom:"2.5rem"},children:[l.jsx(iS,{children:c.toUpperCase()}),l.jsx(aS,{children:f.map((m,p)=>l.jsx(lS,{src:m,alt:`Bild ${p+1} aus ${c}`,onClick:()=>u({folder:c,idx:p}),style:{cursor:"pointer"}},p))}),o&&o.folder===c&&l.jsx(rS,{onClick:()=>u(null),children:l.jsxs(sS,{onClick:m=>m.stopPropagation(),children:[l.jsx(oS,{src:f[o.idx],alt:`Großansicht aus ${c}`}),l.jsx(cS,{onClick:()=>u(null),title:"Schließen",children:"×"})]})})]},c))]})}const iS=h.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,aS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,lS=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,rS=h.div`
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
`,sS=h.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,oS=h.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,cS=h.button`
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
`,uS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,dS=h.div`
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
`,fS=h.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,hS=h.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,mS=h.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,gS=h.div`
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
`,pS=h.a`
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
`;function Vu({icon:a,title:o,description:u,packages:c,buttonHref:f,buttonText:m}){return l.jsxs(dS,{children:[l.jsx(fS,{children:a}),l.jsx(hS,{children:o}),l.jsx(mS,{children:u}),l.jsx(gS,{children:c.map((p,S)=>l.jsxs("div",{children:[p,S<c.length-1&&l.jsx("br",{})]},S))}),l.jsx(pS,{href:f,children:m})]})}const xS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,bS=h.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,yS=h.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,vS=h.p`
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
`;function Dx({headline:a,description:o,contactInfos:u}){const c=f=>{f.preventDefault();const m=f.currentTarget,p=new FormData(m);if(String(p.get("website")||"").trim()!=="")return;const y=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),A=String(p.get("email")||"").trim(),w=String(p.get("phone")||"").trim(),N={};if(y||(N.firstName="Bitte Vornamen angeben"),x||(N.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A)||(N.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(w)||(N.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(N).length>0){const L=Object.keys(N)[0],Y=m.querySelector(`[name="${L}"]`);Y&&Y.focus(),alert(Object.values(N).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),m.reset()};return l.jsx(jS,{id:"kontakt",children:l.jsxs(SS,{children:[l.jsx(BS,{children:a}),l.jsx(DS,{children:o}),l.jsx(xS,{children:u.map((f,m)=>l.jsxs(bS,{children:[l.jsxs(yS,{children:[f.icon," ",f.title]}),l.jsx(vS,{$isEmail:f.isEmail,children:f.isEmail?l.jsx("a",{href:`mailto:${f.content}`,children:f.content}):f.content})]},m))}),l.jsxs(wS,{children:[l.jsx(zS,{children:"Kontakt aufnehmen"}),l.jsx(_S,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),l.jsxs(ES,{noValidate:!0,onSubmit:c,children:[l.jsxs(Yu,{children:[l.jsxs(nr,{children:[l.jsx("label",{htmlFor:"firstName",children:"Vorname"}),l.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),l.jsxs(nr,{children:[l.jsx("label",{htmlFor:"lastName",children:"Nachname"}),l.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),l.jsxs(Yu,{children:[l.jsxs(nr,{children:[l.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),l.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),l.jsxs(nr,{children:[l.jsx("label",{htmlFor:"phone",children:"Telefon"}),l.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),l.jsx(Yu,{children:l.jsxs(TS,{children:[l.jsx("label",{htmlFor:"email",children:"E-Mail"}),l.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),l.jsxs(AS,{"aria-hidden":"true",tabIndex:-1,children:[l.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),l.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),l.jsxs(CS,{children:[l.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),l.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",l.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),l.jsxs(kS,{children:[l.jsx(MS,{type:"submit",children:"Absenden"}),l.jsxs(RS,{children:["Alternativ:"," ",l.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const jS=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,SS=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,wS=h.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,zS=h.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,_S=h.p`
  margin: 0 0 1rem 0;
  color: #555;
`,ES=h.form`
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
`,Yu=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,nr=h.div`
  display: flex;
  flex-direction: column;
`,TS=h(nr)`
  grid-column: 1 / -1;
`,AS=h.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,CS=h.div`
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
`,kS=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,MS=h.button`
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
`,RS=h.span`
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
`,BS=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,DS=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,OS=h.section`
  background: url("${$d("herren",4)}") center/cover;
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
`,NS=h.h1`
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
`,HS=h.h2`
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
`,T0=h.a`
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
`,US=h.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,LS=h.main`
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
`,er=h.h2`
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
`,GS=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,VS=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,YS=h.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,qS=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,KS=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,ZS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,A0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,C0=h.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,k0=h.ul`
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
`,QS=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,$S=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,XS=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,JS=h.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,WS=h.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,FS=h.ul`
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
`,qu=h.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,Ku=h.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Zu=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qu=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,$u=h.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,Xu=h.div`
  font-size: 0.98rem;
  color: #666;
`,PS=h.div`
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
`,IS=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,e2=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,t2=h.a`
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
`,n2=h.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,i2=h.div`
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
`,a2=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,l2=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,r2=h.a`
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
`,s2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,o2=h.h3`
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
`,c2=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,u2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,M0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,R0=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,B0=h.table`
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
`,d2=h.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,f2=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,h2=h.ul`
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
`,m2=h.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,g2=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,p2=h.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,x2=h.a`
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
`;function b2(){return l.jsxs(l.Fragment,{children:[l.jsx(OS,{children:l.jsxs(GS,{children:[l.jsx(NS,{children:"SC Konstanz-Wollmatingen"}),l.jsx(HS,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),l.jsxs(US,{children:[l.jsx(T0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),l.jsx(T0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),l.jsxs(LS,{children:[l.jsx(er,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),l.jsx(VS,{children:l.jsx(YS,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),l.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[l.jsx(n2,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),l.jsxs(uS,{role:"region","aria-label":"Sponsoring-Kategorien",children:[l.jsx(Vu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),l.jsx(Vu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),l.jsx(Vu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),l.jsxs("section",{"aria-labelledby":"premium-pakete",children:[l.jsx(er,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),l.jsx(Wa,{packages:Zn.filter(a=>a.price==="15.000 €/Jahr"||a.price==="12.000 €/Jahr"||a.price==="9.500 €/Jahr")})]}),l.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[l.jsx(er,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),l.jsx(Wa,{packages:Zn.filter(a=>a.price==="5.000 €/Jahr"||a.price==="800 €/Jahr"||a.price==="2.000 €/Jahr")})]}),l.jsxs("section",{"aria-labelledby":"starter-pakete",children:[l.jsx(er,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),l.jsx(Wa,{packages:Zn.filter(a=>a.price==="150 €/pro Spiel"||a.price==="500 €/5 Spiele"||a.price.includes("Ab 100"))}),l.jsxs(i2,{children:[l.jsx(a2,{children:"⚽ Ballspende-Beispiel ansehen"}),l.jsx(l2,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),l.jsx(r2,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),l.jsxs(qS,{children:[l.jsx(KS,{children:"Warum SC Konstanz-Wollmatingen?"}),l.jsxs(ZS,{children:[l.jsxs(A0,{children:[l.jsx(C0,{children:"📊 Erreichte Reichweite"}),l.jsxs(k0,{children:[l.jsx("li",{children:"15+ Heimspiele pro Saison"}),l.jsx("li",{children:"200+ Zuschauer pro Spiel"}),l.jsx("li",{children:"2.500+ Instagram Follower"}),l.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),l.jsxs(A0,{children:[l.jsx(C0,{children:"🏆 Sportlicher Erfolg"}),l.jsxs(k0,{children:[l.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),l.jsx("li",{children:"2. Mannschaften pro Abteilung"}),l.jsx("li",{children:"Cheerleading-Team aktiv"}),l.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),l.jsx(er,{children:"Zusätzliche Werbemöglichkeiten"}),l.jsxs(QS,{children:[l.jsx($S,{children:'Werbung im Stadionmagazin „Heimspiel"'}),l.jsxs(XS,{children:[l.jsxs(JS,{children:[l.jsxs(Zu,{children:[l.jsx(Qu,{children:"1 Seite (Farbe)"}),l.jsx($u,{children:"1.000 €"}),l.jsx(Xu,{children:"DIN A4 (297 × 210 mm)"})]}),l.jsxs(Zu,{children:[l.jsx(Qu,{children:"1/2 Seite (Farbe)"}),l.jsx($u,{children:"500 €"}),l.jsx(Xu,{children:"DIN A5 (148 × 210 mm)"})]}),l.jsxs(Zu,{children:[l.jsx(Qu,{children:"1/4 Seite (Farbe)"}),l.jsx($u,{children:"250 €"}),l.jsx(Xu,{children:"DIN A6 (105 × 148 mm)"})]})]}),l.jsx(WS,{children:l.jsxs(FS,{children:[l.jsxs(qu,{children:[l.jsx(Ku,{}),"15 Ausgaben pro Saison"]}),l.jsxs(qu,{children:[l.jsx(Ku,{}),"ca. 100 Exemplare pro Heimspiel"]}),l.jsxs(qu,{children:[l.jsx(Ku,{}),"Digitale Version (Social Media & Website)"]})]})})]}),l.jsxs(PS,{children:[l.jsx(IS,{children:"📖 Aktuelle Ausgabe als Beispiel"}),l.jsx(e2,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),l.jsx(t2,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),l.jsxs(s2,{children:[l.jsx(o2,{children:"Werbeflächen auf dem Vereinsbus"}),l.jsx(c2,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),l.jsxs(u2,{children:[l.jsxs(M0,{children:[l.jsx(R0,{children:"Premium-Flächen"}),l.jsxs(B0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Position"}),l.jsx("th",{children:"Sichtbarkeit"}),l.jsx("th",{children:"Preis / Jahr"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Heckfläche (100×80 cm)"}),l.jsx("td",{children:"Sehr hoch"}),l.jsx("td",{children:"1.200 €"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Seitentüren (links/rechts)"}),l.jsx("td",{children:"Hoch"}),l.jsx("td",{children:"je 900 €"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Hintere Seitenflächen"}),l.jsx("td",{children:"Mittel-hoch"}),l.jsx("td",{children:"je 600 €"})]})]})]})]}),l.jsxs(M0,{children:[l.jsx(R0,{children:"Standard-Flächen"}),l.jsxs(B0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Position"}),l.jsx("th",{children:"Sichtbarkeit"}),l.jsx("th",{children:"Preis / Jahr"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),l.jsx("td",{children:"Mittel"}),l.jsx("td",{children:"400 € je Seite"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Frontstoßstange"}),l.jsx("td",{children:"Gering-mittel"}),l.jsx("td",{children:"250 €"})]})]})]})]})]}),l.jsxs(d2,{children:[l.jsx(f2,{children:"Zusatzoptionen:"}),l.jsxs(h2,{children:[l.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),l.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),l.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),l.jsxs(m2,{children:[l.jsx(g2,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),l.jsx(p2,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),l.jsx(x2,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),l.jsx(U5,{}),l.jsx(Dx,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),l.jsx(nS,{})]}),l.jsx(Qd,{})]})}const Xd=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],Ox=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Fa={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},y2="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",Nx=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],Hx=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Ux=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],v2="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",Lt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},j2=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],S2=h.div`
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
`,w2=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,z2=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,_2=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,E2=h.div`
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
`,T2=h.img`
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
`,A2=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,C2=h.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,k2=h.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,M2=h.div`
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
`,R2=h.div`
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
`,B2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,Ju=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,Wu=h.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:a})=>a};
  flex-shrink: 0;
`,D2=h.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Lx=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:vt("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:vt("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:vt("herren/herren_16")}],O2=Math.max(...Lx.map(a=>a.value));function N2(){return l.jsxs(S2,{children:[l.jsx(w2,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),l.jsx(z2,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),l.jsx(_2,{children:Lx.map(a=>l.jsxs(E2,{children:[l.jsx(T2,{src:a.image,alt:a.label}),l.jsxs(A2,{children:[l.jsxs(C2,{children:[a.icon," ",a.label]}),l.jsx(k2,{children:l.jsx(M2,{$percent:a.value/O2*100,$gradient:a.gradient})})]}),l.jsxs(R2,{children:[(a.value/1e3).toFixed(0),"k"]})]},a.label))}),l.jsxs(B2,{children:[l.jsxs(Ju,{children:[l.jsx(Wu,{$color:"#9ca3af"}),l.jsx("span",{children:"Aktuell (Winterpause)"})]}),l.jsxs(Ju,{children:[l.jsx(Wu,{$color:"#e10073"}),l.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),l.jsxs(Ju,{children:[l.jsx(Wu,{$color:"#ff6b9d"}),l.jsx("span",{children:"Prognose kommende Saison"})]})]}),l.jsxs(D2,{children:[l.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const H2=h.div`
  width: 100%;
  margin: 2rem 0;
`,U2=h.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,L2=h.table`
  width: 100%;
  border-collapse: collapse;
`,D0=h.th`
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
`,Ki=h.td`
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
`,G2=h.td`
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
`,V2=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,Y2=h.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${a=>a.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${a=>a.isVergeben?.8:1};
`,q2=h.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,K2=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,Fu=h.div`
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
`,O0=h.a`
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
`,Z2="sponsoring@sckw.de";function Q2({packages:a}){const o=c=>{const f=c.replace(/[^\w\s]/gi,"").trim(),m=encodeURIComponent(`Interesse am Paket "${f}"`);return`mailto:${Z2}?subject=${m}`},u=c=>{const f=c.benefits.find(p=>{const S=p.toLowerCase();return S.includes("social media")||S.includes("instagram")});if(!f)return"-";const m=f.toLowerCase();return m.includes("premium")||m.includes("allen")?"ÜBERALL":m.includes("sehr präsent")?"Sehr präsent":m.includes("regelmässig")||m.includes("regelmäßig")?"Regelmäßig":"Standard"};return l.jsxs(H2,{children:[l.jsx(U2,{children:l.jsxs(L2,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(D0,{children:"Paket"}),a.map((c,f)=>l.jsx(D0,{isVergeben:c.status.includes("Vergeben"),children:c.title},f))]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx(Ki,{children:"Preis"}),a.map((c,f)=>l.jsx(G2,{isVergeben:c.status.includes("Vergeben"),children:c.price},f))]}),l.jsxs("tr",{children:[l.jsx(Ki,{children:"Trikot/Banner"}),a.map((c,f)=>{const m=c.benefits.find(p=>p.includes("Trikot")||p.includes("Banner"));return l.jsx(Ki,{children:m?"✅ Ja":"-"},f)})]}),l.jsxs("tr",{children:[l.jsx(Ki,{children:"Social Media"}),a.map((c,f)=>{const m=u(c);return l.jsx(Ki,{isHighlight:m==="ÜBERALL",children:m==="-"?"-":`✅ ${m}`},f)})]}),l.jsxs("tr",{children:[l.jsx(Ki,{children:"Aktion"}),a.map((c,f)=>l.jsx(Ki,{children:l.jsx(O0,{href:c.status.includes("Vergeben")?void 0:o(c.title),isVergeben:c.status.includes("Vergeben"),children:c.status.includes("Vergeben")?"Vergeben":"Anfragen"})},f))]})]})]})}),l.jsx(V2,{children:a.map((c,f)=>{const m=c.status.includes("Vergeben");return l.jsxs(Y2,{isVergeben:m,children:[l.jsx(q2,{children:c.title}),l.jsx(K2,{children:c.price}),l.jsxs(Fu,{children:[l.jsx("span",{children:"Status"}),l.jsx("span",{children:m?"🟥 Vergeben":"🟩 Verfügbar"})]}),l.jsxs(Fu,{children:[l.jsx("span",{children:"Social Media"}),l.jsx("span",{children:u(c)})]}),l.jsxs(Fu,{children:[l.jsx("span",{children:"Vorteile"}),l.jsxs("span",{children:[c.benefits.length," Leistungen"]})]}),l.jsx(O0,{href:m?void 0:o(c.title),isVergeben:m,children:m?"Bereits vergeben":"Jetzt anfragen"})]},f)})})]})}const $2=h.div`
  margin-top: 2.5rem;
`,X2=h.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,J2=h.button`
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
`,W2=h.div`
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
`,F2=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,P2=Zn.filter(a=>a.tier==="premium"),I2=Zn.filter(a=>a.tier==="lokal"),e3=Zn.filter(a=>a.tier==="starter");function t3(){const[a,o]=M.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:P2},{key:"lokal",label:"🏢 Lokal",packages:I2},{key:"starter",label:"🌟 Starter",packages:e3}],c=u.find(f=>f.key===a);return l.jsxs($2,{children:[l.jsx(X2,{children:u.map(f=>l.jsx(J2,{$active:a===f.key,onClick:()=>o(f.key),children:f.label},f.key))}),l.jsxs(W2,{children:[c&&l.jsx(Q2,{packages:c.packages}),l.jsxs(F2,{children:[a==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",a==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",a==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const n3=h.div`
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
`,i3=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,a3=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,l3=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,r3=h.table`
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
`,Pu=h.td`
  font-weight: 700;
  color: #e10073;
`,s3=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,o3=h.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,c3=h.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,u3=h.div`
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
`,d3=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function f3(){const a=Ox;return l.jsxs(n3,{children:[l.jsx(i3,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),l.jsx(a3,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),l.jsx(l3,{children:l.jsxs(r3,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Leistung / Erfolg"}),l.jsx("th",{children:"Starter"}),l.jsx("th",{children:"Premium"}),l.jsx("th",{children:"Kombi (Beispiel)"})]})}),l.jsxs("tbody",{children:[a.map((o,u)=>l.jsxs("tr",{children:[l.jsx("td",{children:o.label}),l.jsx(Pu,{children:o.starter}),l.jsx(Pu,{children:o.premium}),l.jsx(Pu,{children:o.kombi})]},u)),l.jsxs("tr",{children:[l.jsx("td",{children:"Erwartete Kosten"}),l.jsx("td",{children:Fa.starter}),l.jsx("td",{children:Fa.premium}),l.jsx("td",{children:Fa.kombi})]})]})]})}),l.jsx(s3,{children:["Starter","Premium","Kombi"].map(o=>l.jsxs(o3,{children:[l.jsx(c3,{children:o}),a.map((u,c)=>l.jsxs(u3,{children:[l.jsx("span",{children:u.label}),l.jsx("span",{children:o==="Starter"?u.starter:o==="Premium"?u.premium:u.kombi})]},c))]},o))}),l.jsx(d3,{children:y2})]})}const h3=h.div`
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
`,m3=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,g3=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,p3=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,x3=h.table`
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
`,b3=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,y3=h.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,v3=h.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,j3=h.div`
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
`,S3=h.div`
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
`,w3=h.div`
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
`;function z3(){const a=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return l.jsxs(h3,{children:[l.jsx(m3,{children:"👤 Spielerpatenschaften (diskret)"}),l.jsx(g3,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),l.jsx(p3,{children:l.jsxs(x3,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Merkmal"}),l.jsx("th",{children:"Bronze"}),l.jsx("th",{children:"Silber"}),l.jsx("th",{children:"Gold"})]})}),l.jsx("tbody",{children:a.map((o,u)=>l.jsxs("tr",{children:[l.jsx("td",{children:o.label}),l.jsx("td",{children:o.bronze}),l.jsx("td",{children:o.silber}),l.jsx("td",{children:o.gold})]},u))})]})}),l.jsx(b3,{children:["Bronze","Silber","Gold"].map(o=>l.jsxs(y3,{children:[l.jsx(v3,{children:o}),a.map((u,c)=>l.jsxs(j3,{children:[l.jsx("span",{children:u.label}),l.jsx("span",{children:o==="Bronze"?u.bronze:o==="Silber"?u.silber:u.gold})]},c))]},o))}),l.jsxs(S3,{children:[l.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),l.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',l.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',l.jsx("em",{children:"[Foto vom Torjubel]"})]}),l.jsxs(w3,{children:[l.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const _3=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,E3=h.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,T3=h.a`
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
`,A3=h.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,C3=h.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,k3=h.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,M3=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,R3=h.a`
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
`,B3=h.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,D3=h.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,O3={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function N3(){const{hauptsponsor:a,partners:o}=O3;return l.jsxs(_3,{children:[l.jsx(E3,{children:l.jsxs(T3,{href:a.website,target:"_blank",rel:"noopener noreferrer",children:[l.jsx(A3,{children:"Hauptsponsor"}),l.jsx(C3,{src:a.logo,alt:a.name}),l.jsx(k3,{children:a.name})]})}),l.jsx(M3,{children:o.map((u,c)=>l.jsxs(R3,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[l.jsx(B3,{src:u.logo,alt:u.name}),l.jsx(D3,{children:u.name})]},c))})]})}const yn=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Qa=h.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,ks=h(Qa)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`,Vn=h.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,yi=h.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,vi=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,H3=h.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,U3=h.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center/cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,L3=h.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,G3=h.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,V3=h.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Y3=h.p`
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
`,q3=h.div`
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
`,K3=h.div`
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
`,Z3=h.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Q3=h.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,$3=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,N0=h.a`
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
`,X3=h.div`
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
`,Ms=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Rs=h.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,Bs=h.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,J3=h.div`
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
`,W3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Iu=h.div`
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
`,ed=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,td=h.div`
  padding: 1.5rem 1.25rem 2rem;
`,nd=h.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,id=h.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`,Ds=h.div`
  margin-top: 2.5rem;
`,Os=h.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,ad=h.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,F3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,ld=h.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`,P3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,rd=h.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,sd=h.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,od=h.div`
  padding: 1.25rem 1rem 1.5rem;
`,cd=h.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,ud=h.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,H0=h.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,I3=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,U0=h.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,ew=h.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,tw=h.table`
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
`,nw=h.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,iw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Ns=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Hs=h.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,Us=h.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`,aw=h.section`
  padding: 4rem 0;
  scroll-margin-top: 90px;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,lw=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,rw=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,sw=h.div`
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
`,ow=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,cw=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,uw=h.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.25);
`,dw=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,dd=h.div`
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
`,fw=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #e10073;
  text-align: center;
`,hw=h.a`
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
`,mw=Xd,gw=Zn.filter(a=>a.tier==="premium"),pw=Zn.filter(a=>a.tier==="lokal"),xw=Zn.filter(a=>a.tier==="starter");function bw(){const a=[vt("herren/herren_6"),vt("herren/herren_16"),vt("herren/herren_5"),vt("herren/herren_14")].filter(Boolean),[o,u]=M.useState(0);return M.useEffect(()=>{if(a.length<=1)return;const c=setInterval(()=>{u(f=>(f+1)%a.length)},6e3);return()=>clearInterval(c)},[a.length]),l.jsxs(l.Fragment,{children:[l.jsxs(H3,{children:[a.map((c,f)=>l.jsx(U3,{$bg:c,$active:f===o},f)),l.jsx(L3,{}),l.jsxs(G3,{children:[l.jsx(V3,{children:"Sponsoring, das messbar wirkt"}),l.jsxs(Y3,{children:["In der Winterpause erzielen wir bereits"," ",l.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",l.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),l.jsx(q3,{children:mw.map(c=>l.jsxs(K3,{children:[l.jsx(Z3,{children:c.value}),l.jsx(Q3,{children:c.label})]},c.label))}),l.jsxs($3,{children:[l.jsx(N0,{href:"#kontakt",$primary:!0,onClick:c=>{c.preventDefault();const f=document.getElementById("kontakt");f&&f.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),l.jsx(N0,{href:"#pakete",onClick:c=>{c.preventDefault();const f=document.getElementById("pakete");f&&f.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),l.jsx(ks,{children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"Warum sich Sponsoring bei uns lohnt"}),l.jsx(vi,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),l.jsxs(W3,{children:[l.jsxs(Iu,{children:[l.jsx(ed,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),l.jsxs(td,{children:[l.jsx(nd,{children:"Sichtbarkeit, die bleibt"}),l.jsx(id,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),l.jsxs(Iu,{children:[l.jsx(ed,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),l.jsxs(td,{children:[l.jsx(nd,{children:"Ihre Kunden sind hier"}),l.jsx(id,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),l.jsxs(Iu,{children:[l.jsx(ed,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),l.jsxs(td,{children:[l.jsx(nd,{children:"Doppelte Wirkung"}),l.jsx(id,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),l.jsx(Qa,{children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"Diese Unternehmen sind bereits Partner"}),l.jsx(vi,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),l.jsx(N3,{})]})}),l.jsx(ks,{id:"pakete",children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"Finden Sie Ihr perfektes Paket"}),l.jsx(vi,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, individuell auf Ihr Unternehmen zugeschnitten."})]}),l.jsxs(Ds,{children:[l.jsx(Os,{children:"Premium-Partnerschaften"}),l.jsx(Wa,{packages:gw})]}),l.jsxs(Ds,{children:[l.jsx(Os,{children:"Pakete im Vergleich"}),l.jsx(t3,{})]}),l.jsx(f3,{}),l.jsx(z3,{}),l.jsxs(Ds,{children:[l.jsx(Os,{children:"Lokale Werbemöglichkeiten"}),l.jsx(Wa,{packages:pw}),l.jsx(ad,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),l.jsxs(Ds,{children:[l.jsx(Os,{children:"Starter & Spieltag"}),l.jsx(Wa,{packages:xw})]})]})}),l.jsx(Qa,{id:"reichweite",children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"So viele Menschen erreichen Sie"}),l.jsx(vi,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),l.jsxs(X3,{children:[l.jsxs(Ms,{children:[l.jsx(Rs,{children:"32.000"}),l.jsx(Bs,{children:"Reichweite / 30 Tage"})]}),l.jsxs(Ms,{children:[l.jsx(Rs,{children:"250.000"}),l.jsx(Bs,{children:"Reichweite / 90 Tage"})]}),l.jsxs(Ms,{children:[l.jsx(Rs,{children:"50-80k"}),l.jsx(Bs,{children:"Pro Monat in Saison"})]}),l.jsxs(Ms,{children:[l.jsx(Rs,{children:"500-800k"}),l.jsx(Bs,{children:"Saisonreichweite (konservativ)"})]})]}),l.jsxs(J3,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",l.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),l.jsx(ks,{children:l.jsx(yn,{children:l.jsx(N2,{})})}),l.jsx(Qa,{children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"Was Sie auf Social Media bekommen"}),l.jsx(vi,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),l.jsxs(F3,{children:[l.jsx(ld,{children:"📱 Feed-Posts mit Ihrem Logo"}),l.jsx(ld,{children:"📸 Stories & Erwähnungen"}),l.jsx(ld,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),l.jsx(ad,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),l.jsx(ks,{id:"buswerbung",children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"Mobile Werbung auf unserem Vereinsbus"}),l.jsx(vi,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),l.jsxs(I3,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[l.jsxs("div",{style:{background:"#f8f9fa",borderRadius:12,padding:"2rem",marginBottom:"1.5rem",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🚌"}),l.jsx("div",{style:{color:"#999",fontSize:"0.95rem"},children:"Foto des Vereinsbusses folgt in Kürze"})]}),l.jsx(U0,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),l.jsx(ew,{children:l.jsxs(tw,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Fläche"}),l.jsx("th",{children:"Größe (ca.)"}),l.jsx("th",{children:"Preis/Jahr"})]})}),l.jsx("tbody",{children:[...Nx,...Hx].map(c=>l.jsxs("tr",{children:[l.jsx("td",{children:c.position}),l.jsx("td",{children:c.groesse}),l.jsx("td",{children:l.jsx("strong",{children:c.preis})})]},c.position))})]})}),l.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[l.jsx(U0,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),l.jsx(nw,{children:Ux.map((c,f)=>l.jsx("li",{children:c},f))})]})]}),l.jsx(ad,{children:v2})]})}),l.jsx(Qa,{children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"Ihre Marke in Aktion"}),l.jsx(vi,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),l.jsxs(P3,{children:[l.jsxs(rd,{children:[l.jsx(sd,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),l.jsxs(od,{children:[l.jsx(cd,{children:"Stadionmagazin"}),l.jsx(ud,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),l.jsx(H0,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),l.jsxs(rd,{children:[l.jsx(sd,{src:vt("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),l.jsxs(od,{children:[l.jsx(cd,{children:"Bandenwerbung"}),l.jsx(ud,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),l.jsxs(rd,{children:[l.jsx(sd,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),l.jsxs(od,{children:[l.jsx(cd,{children:"Ballspende"}),l.jsx(ud,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),l.jsx(H0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),l.jsx(aw,{id:"500club",children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(lw,{children:"500 €Club"}),l.jsx(rw,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken - werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),l.jsxs(sw,{children:[l.jsxs(ow,{children:[l.jsxs(uw,{children:[l.jsx("div",{style:{fontSize:"0.85rem",opacity:.9,fontWeight:600,marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Mitgliedschaft"}),l.jsx("div",{style:{fontSize:"clamp(1.8rem, 5vw, 2.4rem)",fontWeight:900,lineHeight:1.1},children:"Ab 125€ / Quartal"}),l.jsx("div",{style:{fontSize:"1rem",opacity:.9,marginTop:"0.25rem"},children:"oder 250€ halbjährlich · 500€ jährlich"})]}),l.jsxs(dw,{children:[l.jsxs(dd,{children:["Offizielle ",l.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),l.jsxs(dd,{children:["Ihr ",l.jsx("strong",{children:"Name oder Firmenname"})," wird veröffentlicht"]}),l.jsxs(dd,{children:["Direkte Förderung von ",l.jsx("strong",{children:"Jugend- & Amateurfußball"})]})]})]}),l.jsxs(cw,{children:[l.jsxs(fw,{children:[l.jsx("div",{style:{fontSize:"0.8rem",color:"#e10073",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.75rem"},children:"Spendenkonto"}),l.jsx("div",{style:{fontWeight:800,color:"#222",fontSize:"1.05rem",marginBottom:"0.5rem"},children:"SC Konstanz-Wollmatingen e.V."}),l.jsxs("div",{style:{color:"#444",lineHeight:1.7,fontSize:"0.95rem"},children:["IBAN: ",l.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"}),l.jsx("br",{}),"Sparkasse Bodensee",l.jsx("br",{}),l.jsx("span",{style:{fontSize:"0.85rem",color:"#888"},children:"Schleyerweg 5 · 78467 Konstanz"})]})]}),l.jsx(hw,{href:"/sponsoring-handoff?preset=club500&view=preview",children:"500 €Club Anmeldung"})]})]})]})}),l.jsx(Qa,{children:l.jsxs(yn,{children:[l.jsxs(Vn,{children:[l.jsx(yi,{children:"In 4 Schritten zum Sponsoring-Start"}),l.jsx(vi,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),l.jsxs(iw,{children:[l.jsxs(Ns,{children:[l.jsx(Hs,{children:"1. Kontakt"}),l.jsx(Us,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),l.jsxs(Ns,{children:[l.jsx(Hs,{children:"2. Bedarf"}),l.jsx(Us,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),l.jsxs(Ns,{children:[l.jsx(Hs,{children:"3. Angebot"}),l.jsx(Us,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),l.jsxs(Ns,{children:[l.jsx(Hs,{children:"4. Umsetzung"}),l.jsx(Us,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),l.jsx(Dx,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:Lt.email,isEmail:!0},{icon:"📍",title:"Adresse",content:Lt.vollAdresse}]}),l.jsx(Qd,{})]})}function yw(){return Op(),!0}const vw=Sv`
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
`,L0=h.div`
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
`,G0=h.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,V0=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ls=h.button`
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
`,jw=h.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,Sw=h.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,wt=h.section`
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
`,en=h.div`
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
`,tn=h.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,nn=h.div`text-align: center; margin-bottom: 6mm;`,an=h.img`height: 20mm;`,ln=h.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,St=h.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,dt=h.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Oe=h.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,P=h.li`
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
`,jt=h.ul`padding: 0; margin: 3mm 0;`,Wi=h.div`
  display: ${a=>a.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,ut=h.div`margin-bottom: 4mm;`,et=h.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Ut=h.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${a=>(a.$lines||1)*8}mm;
  background: #fafafa;
`,ww=h.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Jd=h.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Qn=h.div`
  text-align: ${a=>a.$right?"right":a.$center?"center":"left"};
`;function _i(){return l.jsxs(ww,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",l.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function dn(){return l.jsxs(Jd,{children:[l.jsxs(Qn,{children:[l.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),l.jsx("br",{}),"Schleyerweg 5",l.jsx("br",{}),"78467 Konstanz"]}),l.jsxs(Qn,{$center:!0,children:[Lt.email,l.jsx("br",{}),"partner.sckw.de"]}),l.jsxs(Qn,{$right:!0,children:["Sparkasse Bodensee",l.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",l.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const Y0=vt("herren/herren_0"),fd=vt("herren/herren_6"),q0=vt("herren/herren_1"),zw=vt("herren/herren_14"),Is=h.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function _w(){return l.jsx(wt,{children:l.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),l.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),l.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),l.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),l.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),l.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",l.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Xd.slice(0,2).map(a=>l.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[l.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:a.value}),l.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:a.label})]},a.label))}),l.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function Ew(){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"WARUM SCKW?"}),l.jsx(St,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Xd.map(a=>l.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[l.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:a.value}),l.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:a.label})]},a.label))}),l.jsx(dt,{children:"Was Sie bei uns erreichen"}),l.jsxs(jt,{children:[l.jsx(P,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),l.jsx(P,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),l.jsx(P,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),l.jsx(P,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),l.jsx(dt,{children:"Der Verein auf einen Blick"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[l.jsxs("div",{children:[l.jsxs(Oe,{children:[l.jsx("strong",{children:"Gegründet:"})," 1912"]}),l.jsxs(Oe,{children:[l.jsx("strong",{children:"Mitglieder:"})," 500+"]}),l.jsxs(Oe,{children:[l.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),l.jsxs("div",{children:[l.jsxs(Oe,{children:[l.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),l.jsxs(Oe,{children:[l.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),l.jsxs(Oe,{children:[l.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),Y0&&l.jsx(Is,{src:Y0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),l.jsx(dn,{})]})]})}function Tw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"HAUPTSPONSOR"}),l.jsx(St,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),l.jsxs(jt,{children:[l.jsx(P,{children:"Trikotwerbung auf der Brust"}),l.jsx(P,{children:"Business Club Mitgliedschaft"}),l.jsx(P,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),l.jsx(P,{children:"1/1 seitiges Inserat im SC Magazin"}),l.jsx(P,{children:"10 Saisonkarten"}),l.jsx(P,{children:"Werbeauftritte nach Absprache"}),l.jsx(P,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),l.jsx(P,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),l.jsx(P,{children:"Logo / Namenszug auf den Fahrzeugen"}),l.jsx(P,{children:"Logo / Link auf der Vereinshomepage"}),l.jsx(P,{children:"weitere Möglichkeiten nach Absprache"})]}),l.jsxs(Wi,{$hidden:!a,children:["Beitrag: ",l.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}function Aw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"CO-SPONSOR"}),l.jsx(St,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),l.jsxs(jt,{children:[l.jsx(P,{children:"Werbung auf den Trainingsanzügen"}),l.jsx(P,{children:"Business Club Mitgliedschaft"}),l.jsx(P,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),l.jsx(P,{children:"1/2 seitiges Inserat im SC Magazin"}),l.jsx(P,{children:"5 Saisonkarten"}),l.jsx(P,{children:"Werbeauftritte nach Absprache"}),l.jsx(P,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),l.jsx(P,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),l.jsx(P,{children:"Logo / Namenszug auf den Fahrzeugen"}),l.jsx(P,{children:"Logo / Link auf der Vereinshomepage"}),l.jsx(P,{children:"weitere Möglichkeiten nach Absprache"})]}),l.jsxs(Wi,{$hidden:!a,children:["Beitrag: ",l.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}function Cw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"SILBER-PARTNER"}),l.jsx(St,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),l.jsxs(jt,{children:[l.jsx(P,{children:"1 Bande (5×2 m) am Gelände"}),l.jsx(P,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),l.jsx(P,{children:"Werbeplane am Gelände"}),l.jsx(P,{children:"Vereinsplakate + Eventsichtbarkeit"}),l.jsx(P,{children:"Website: Logo auf Startseite"})]}),l.jsxs(Wi,{$hidden:!a,children:["Beitrag: ",l.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),l.jsx(dt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),l.jsx(St,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),l.jsxs(jt,{children:[l.jsx(P,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),l.jsx(P,{children:"Website: Logo auf der Startseite"}),l.jsx(P,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),l.jsx(P,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),l.jsxs(Wi,{$hidden:!a,children:["Beitrag: ",l.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}function kw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"BANDENWERBUNG"}),l.jsx(St,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),l.jsx(jt,{children:l.jsx(P,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),l.jsxs(Oe,{children:[l.jsx("strong",{children:"Platzierung:"}),l.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",l.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",l.jsx("br",{}),l.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),l.jsxs(Wi,{$hidden:!a,children:["Beitrag: ",l.jsx("strong",{children:"ab 800€ pro Saison"})]}),q0&&l.jsx(Is,{src:q0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}function Mw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:'WERBUNG IM „HEIMSPIEL"'}),l.jsx(St,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),l.jsxs(jt,{children:[l.jsx(P,{children:"15 Ausgaben pro Saison"}),l.jsx(P,{children:"ca. 100 Exemplare pro Heimspiel"}),l.jsx(P,{children:"Digitale Version (Social Media & Webseite)"}),l.jsx(P,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),l.jsx(P,{children:"DIN A4 Stadionmagazin"}),l.jsx(P,{children:"wird ausgelegt in diversen Arztpraxen"})]}),a&&l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(o=>l.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:o.size}),l.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),l.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:o.price})]},o.size))}),a&&l.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[l.jsx("strong",{children:"Maße"}),l.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",l.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",l.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}function Rw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"SPIELTAG-SPONSORING"}),l.jsx(St,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),l.jsx(dt,{children:"Ballspende"}),l.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),l.jsxs(jt,{children:[l.jsx(P,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),l.jsx(P,{children:"Namensnennung in der Halbzeitpause"}),l.jsx(P,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),l.jsx(P,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),l.jsxs(Wi,{$hidden:!a,children:["Beitrag: ",l.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",l.jsx("strong",{children:"500€"})," (statt 750€)"]}),l.jsx(dt,{children:"Spielpräsentator"}),l.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),l.jsxs(jt,{children:[l.jsx(P,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),l.jsx(P,{children:"Namentliche Erwähnung im SC Magazin"}),l.jsx(P,{children:"Social Media Erwähnung am Spieltag"})]}),l.jsxs(Wi,{$hidden:!a,children:["Beitrag: ",l.jsx("strong",{children:"ab 250€ pro Spiel"})]}),fd&&l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[l.jsx(Is,{src:fd,alt:"Action",style:{height:"48mm"}}),l.jsx(Is,{src:zw||fd,alt:"Jubel",style:{height:"48mm"}})]}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}function Bw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"BUSWERBUNG"}),l.jsx(St,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),a&&l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),l.jsx("tbody",{children:[...Nx,...Hx].map((o,u)=>l.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.position}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.groesse}),a&&l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:o.preis})]},o.position))})]}),l.jsx(dt,{children:"Zusatzoptionen"}),l.jsx(jt,{children:Ux.map((o,u)=>l.jsx(P,{children:o},u))}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}function Dw({showPrices:a}){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{children:"PRÄMIEN-MODELL"}),l.jsx(St,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a&&l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),l.jsxs("tbody",{children:[Ox.map((o,u)=>l.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:o.label}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.starter}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.premium}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.kombi})]},o.label)),l.jsxs("tr",{style:{background:"#f0f9ff"},children:[l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.starter}),l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.premium}),l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.kombi})]})]})]}),l.jsx(dt,{children:"So funktioniert's"}),l.jsxs(jt,{children:[l.jsx(P,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),l.jsx(P,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),l.jsx(P,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),l.jsx(P,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),l.jsx(dt,{children:"Inkludierte Leistungen"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[l.jsxs("div",{children:[l.jsx(Oe,{children:l.jsx("strong",{children:"Starter:"})}),l.jsxs(jt,{children:[l.jsx(P,{children:"Stadionansage bei Erfolg"}),l.jsx(P,{children:"Logo auf Website"})]})]}),l.jsxs("div",{children:[l.jsx(Oe,{children:l.jsx("strong",{children:"Premium:"})}),l.jsxs(jt,{children:[l.jsx(P,{children:"+ Social Media Post bei Erfolg"}),l.jsx(P,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),l.jsx(_i,{}),l.jsx(dn,{})]})]})}const K0=vt("herren/herren_jubel_500club");function Ow(){return l.jsxs(wt,{children:[K0&&l.jsx("img",{src:K0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),l.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[l.jsx(St,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),l.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[l.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den 500 €Club."})," Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),l.jsx(dt,{children:"Ihre Vorteile"}),l.jsxs(jt,{children:[l.jsxs(P,{children:["Offizielle ",l.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),l.jsxs(P,{children:["Veröffentlichung Ihres ",l.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),l.jsx(P,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),l.jsx(dt,{children:"Zahlungsoptionen"}),l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),l.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),l.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(a=>l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:a.label}),l.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:a.betrag})]},a.label))})]}),l.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),l.jsx(dt,{children:"Spendenkonto"}),l.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[l.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),l.jsx("br",{}),"IBAN: ",l.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",l.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),l.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[l.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",l.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),l.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",l.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),l.jsx(dn,{})]})]})}function Nw(){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG 500 €CLUB"}),l.jsxs(St,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an ",Lt.email," senden."]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[l.jsxs(ut,{children:[l.jsx(et,{children:"Vorname:"}),l.jsx(Ut,{$lines:1})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"Nachname:"}),l.jsx(Ut,{$lines:1})]})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"Firma (optional):"}),l.jsx(Ut,{$lines:1})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"Straße, Hausnummer:"}),l.jsx(Ut,{$lines:1})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[l.jsxs(ut,{children:[l.jsx(et,{children:"PLZ:"}),l.jsx(Ut,{$lines:1})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"Ort:"}),l.jsx(Ut,{$lines:1})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[l.jsxs(ut,{children:[l.jsx(et,{children:"Geb.-Datum:"}),l.jsx(Ut,{$lines:1})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"Telefon:"}),l.jsx(Ut,{$lines:1})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"E-Mail:"}),l.jsx(Ut,{$lines:1})]})]}),l.jsx(dt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),l.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(a=>l.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:l.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),l.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),l.jsx(dt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),l.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im 500 €Club bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(a=>l.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:l.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),l.jsxs(ut,{style:{marginTop:"2mm"},children:[l.jsx(et,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),l.jsx(Ut,{$lines:1})]}),l.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. 500 €Club. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[l.jsxs(ut,{children:[l.jsx(et,{children:"Konstanz, den _______________"}),l.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),l.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"Unterschrift:"}),l.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),l.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[l.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",l.jsx("br",{}),l.jsx("strong",{children:"Kontakt:"})," ",Lt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),l.jsxs(Jd,{style:{marginTop:"auto"},children:[l.jsx(Qn,{children:l.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),l.jsx(Qn,{$center:!0,children:"500 €Club"}),l.jsx(Qn,{$right:!0,children:"partner.sckw.de"})]})]})]})}function Hw(){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),l.jsx(St,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(a=>l.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[l.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:a.n}),l.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:a.t}),l.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:a.d})]},a.n))}),l.jsx(dt,{children:"Kontakt"}),l.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),l.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:Lt.email})]}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),l.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),l.jsxs("div",{style:{gridColumn:"1 / -1"},children:[l.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),l.jsxs("div",{style:{fontSize:"11pt"},children:[Lt.adresse.name," · ",Lt.adresse.strasse," · ",Lt.adresse.plz," ",Lt.adresse.ort]})]})]}),l.jsx(dt,{children:"Gesprächsleitfaden"}),l.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[l.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),l.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),l.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),l.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),l.jsx(dn,{})]})]})}function Uw(){return l.jsxs(wt,{children:[l.jsx(en,{}),l.jsxs(tn,{children:[l.jsx(nn,{children:l.jsx(an,{src:"/logo.svg"})}),l.jsx(ln,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),l.jsxs(St,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",Lt.email," senden."]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[l.jsxs(ut,{children:[l.jsx(et,{children:"Datum:"}),l.jsx(Ut,{$lines:1})]}),l.jsxs(ut,{children:[l.jsx(et,{children:"Gesprächsführer (Helfer):"}),l.jsx(Ut,{$lines:1})]})]}),j2.map((a,o)=>l.jsxs(ut,{children:[l.jsxs(et,{children:[a.label,":"]}),l.jsx(Ut,{$lines:a.lines})]},o)),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(a=>l.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:l.jsxs(et,{style:{marginBottom:0},children:["☐ ",a]})},a))}),l.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:l.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[l.jsx("strong",{children:"Schnellreferenz:"})," ",Lt.email," · partner.sckw.de ·"," ",Lt.vollAdresse.replace(/\n/g," · ")]})}),l.jsxs(Jd,{style:{marginTop:"auto"},children:[l.jsx(Qn,{children:l.jsx("strong",{children:"Internes Dokument"})}),l.jsx(Qn,{$center:!0}),l.jsx(Qn,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Yn=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>l.jsx(_w,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>l.jsx(Ew,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:a=>l.jsx(Tw,{showPrices:a})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:a=>l.jsx(Aw,{showPrices:a})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:a=>l.jsx(Cw,{showPrices:a})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:a=>l.jsx(kw,{showPrices:a})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:a=>l.jsx(Mw,{showPrices:a})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:a=>l.jsx(Rw,{showPrices:a})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:a=>l.jsx(Bw,{showPrices:a})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:a=>l.jsx(Dw,{showPrices:a})},{id:"club500",label:"500 €Club",group:"community",render:()=>l.jsx(Ow,{})},{id:"club500form",label:"500 €Club Anmeldung",group:"community",render:()=>l.jsx(Nw,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>l.jsx(Hw,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>l.jsx(Uw,{})}],Lw=h.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,Gw=h.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,Vw=h.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,Yw=h.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,qw=h.button`
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
`,hd=h.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,md=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,gd=h.label`
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
`,Kw=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Zi=h.button`
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
`,Zw=h.button`
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
`,Qw=h.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function $w(){const a=yw(),[o]=Op(),u=o.get("preset"),c=o.get("view"),f=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Yn.filter(_=>_.group==="broschüre").map(_=>_.id)),[m,p]=M.useState(!0),[S,y]=M.useState(f),[x,A]=M.useState(c==="preview"?"preview":"dashboard");if(!a)return l.jsx(Zs,{to:"/",replace:!0});const w=_=>{y(le=>{const fe=new Set(le);return fe.has(_)?fe.delete(_):fe.add(_),fe})},N=()=>y(new Set(Yn.map(_=>_.id))),L=()=>y(new Set),Y=()=>y(new Set(Yn.filter(_=>_.group==="broschüre").map(_=>_.id))),V=()=>y(new Set(Yn.map(_=>_.id))),q=()=>y(new Set(["cover","why","spieltag","banden"])),K=()=>y(new Set(["cover","why","haupt","co","silber"])),G=()=>y(new Set(["club500","club500form"])),U=Yn.filter(_=>S.has(_.id)),W=Yn.filter(_=>_.group==="broschüre"),I=Yn.filter(_=>_.group==="community"),$=Yn.filter(_=>_.group==="helfer");return x==="preview"?l.jsxs(l.Fragment,{children:[l.jsx(vw,{}),l.jsxs(L0,{children:[l.jsxs(G0,{children:["Vorschau · ",U.length," Seiten"]}),l.jsxs(V0,{children:[l.jsx(Ls,{$active:m,onClick:()=>p(_=>!_),children:m?"Preise ✓":"Preise ✗"}),l.jsx(Ls,{onClick:()=>A("dashboard"),children:"Zurück"}),l.jsx(Ls,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),l.jsxs(jw,{children:[l.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',l.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),l.jsx(Sw,{children:U.map(_=>l.jsx("div",{children:_.render(m)},_.id))})]}):l.jsxs(l.Fragment,{children:[l.jsxs(L0,{children:[l.jsx(G0,{children:"Sponsoring-Kit · SCKW"}),l.jsx(V0,{children:l.jsx(Ls,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),l.jsxs(Lw,{children:[l.jsx(Gw,{children:"Sponsoring-Kit zusammenstellen"}),l.jsx(Vw,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),l.jsxs(Yw,{children:[l.jsx(qw,{$on:m,onClick:()=>p(_=>!_),children:m?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),l.jsxs(Qw,{children:[S.size," von ",Yn.length," Seiten ausgewählt"]})]}),l.jsxs(Kw,{children:[l.jsx(Zi,{onClick:N,children:"Alles"}),l.jsx(Zi,{onClick:Y,children:"Broschüre komplett"}),l.jsx(Zi,{onClick:V,children:"Komplett-Kit (+ Helfer)"}),l.jsx(Zi,{onClick:K,children:"Nur Premium-Pakete"}),l.jsx(Zi,{onClick:q,children:"Starter-Paket"}),l.jsx(Zi,{onClick:G,children:"500 €Club"}),l.jsx(Zi,{onClick:L,children:"Keine"})]}),l.jsx(hd,{children:"Broschüre"}),l.jsx(md,{children:W.map(_=>l.jsxs(gd,{$checked:S.has(_.id),children:[l.jsx("input",{type:"checkbox",checked:S.has(_.id),onChange:()=>w(_.id)}),_.label]},_.id))}),l.jsx(hd,{children:"Community / 500 €Club"}),l.jsx(md,{children:I.map(_=>l.jsxs(gd,{$checked:S.has(_.id),children:[l.jsx("input",{type:"checkbox",checked:S.has(_.id),onChange:()=>w(_.id)}),_.label]},_.id))}),l.jsx(hd,{children:"Helfer-Anhang"}),l.jsx(md,{children:$.map(_=>l.jsxs(gd,{$checked:S.has(_.id),children:[l.jsx("input",{type:"checkbox",checked:S.has(_.id),onChange:()=>w(_.id)}),_.label]},_.id))}),l.jsxs(Zw,{disabled:S.size===0,onClick:()=>A("preview"),children:["Vorschau & Drucken (",S.size," Seiten)"]})]})]})}const Xw=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],Jw=h.section`
  background: url("${$d("herren",1)}") center/cover;
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
`,Ww=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,Fw=h.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,Pw=h.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,Iw=h.main`
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
`,ez=h.section`
  margin-bottom: 4rem;
`,tz=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,nz=h.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,iz=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,az=h.div`
  text-align: center;
  margin-bottom: 3rem;
`,lz=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,rz=h.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,sz=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,oz=h.div`
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
`,cz=h.div`
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
`,uz=h.div`
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
`,dz=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,fz=h.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,hz=h.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,mz=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,gz=h.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,pz=h.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,xz=h.button`
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
`,bz=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,yz=h.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,vz=h.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,jz=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Ha=h.div`
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
`,Z0=h.div`
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
`,Ua=h.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,La=h.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ga=h.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,Va=h.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,He=h.li`
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
`,Ya=h.button`
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
`,Sz=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,wz=h.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,zz=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,_z=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,pd=h.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,xd=h.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,bd=h.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,yd=h.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,Ez=h.a`
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
`,Tz=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Az=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,Cz=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,qa=h.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Ka=h.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,Za=h.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function kz(){return l.jsxs(l.Fragment,{children:[l.jsx(Jw,{children:l.jsxs(Ww,{children:[l.jsx(Fw,{children:"SCKW Jobbörse"}),l.jsx(Pw,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),l.jsxs(Iw,{children:[l.jsxs(ez,{children:[l.jsx(tz,{children:"Willkommen bei der SCKW Jobbörse"}),l.jsx(nz,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),l.jsxs(iz,{children:[l.jsxs(az,{children:[l.jsx(lz,{children:"So könnte es aussehen"}),l.jsx(rz,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),l.jsx(sz,{children:Xw.map(a=>l.jsxs(oz,{children:[a.isExample&&l.jsx(cz,{children:"MUSTER"}),l.jsx(uz,{children:l.jsx(dz,{src:`/sponsors/${a.logo}`,alt:`${a.company} Logo`,onError:o=>{o.currentTarget.style.display="none",o.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",o.currentTarget.parentElement.innerHTML=a.company.substring(0,2).toUpperCase()}})}),l.jsx(fz,{children:a.title}),l.jsx(hz,{children:a.company}),l.jsx(mz,{children:a.tags.map((o,u)=>l.jsx(gz,{children:o},u))}),l.jsx(pz,{children:a.description}),l.jsx(xz,{children:"Mehr erfahren"})]},a.id))})]}),l.jsxs(bz,{children:[l.jsx(yz,{children:"Preise für Stellenausschreibungen"}),l.jsx(vz,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),l.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),l.jsxs(jz,{children:[l.jsxs(Ha,{children:[l.jsx(Ua,{children:"Basis"}),l.jsx(La,{children:"149 €"}),l.jsx(Ga,{children:"netto / Anzeige"}),l.jsxs(Va,{children:[l.jsx(He,{children:"30 Tage auf Website (Jobbereich)"}),l.jsx(He,{children:"Firmenlogo und Link"}),l.jsx(He,{children:"Detaillierte Stellenbeschreibung"}),l.jsx(He,{children:"Bewerbermanagement"})]}),l.jsx(Ya,{className:"secondary",children:"Basis wählen"})]}),l.jsxs(Ha,{className:"popular",children:[l.jsx(Z0,{children:"BELIEBT"}),l.jsx(Ua,{children:"Standard"}),l.jsx(La,{children:"229 €"}),l.jsx(Ga,{children:"netto / Anzeige"}),l.jsxs(Va,{children:[l.jsx(He,{children:"Alle Basis-Features"}),l.jsx(He,{children:"1 Social Media Post"}),l.jsx(He,{children:"Instagram + Facebook Reichweite"}),l.jsx(He,{children:"Newsletter-Erwähnung"})]}),l.jsx(Ya,{children:"Standard wählen"})]}),l.jsxs(Ha,{children:[l.jsx(Ua,{children:"Boosted"}),l.jsx(La,{children:"349 €"}),l.jsx(Ga,{children:"netto / Anzeige"}),l.jsxs(Va,{children:[l.jsx(He,{children:"Alle Standard-Features"}),l.jsx(He,{children:"Instagram Story"}),l.jsx(He,{children:"Stadionmagazin-Erwähnung"}),l.jsx(He,{children:"Prioritäre Platzierung"})]}),l.jsx(Ya,{className:"secondary",children:"Boosted wählen"})]})]}),l.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),l.jsxs(Sz,{children:[l.jsxs(Ha,{children:[l.jsx(Ua,{children:"Job Flat SMALL"}),l.jsx(La,{children:"799 €"}),l.jsx(Ga,{children:"netto / Jahr"}),l.jsxs(Va,{children:[l.jsx(He,{children:"Bis zu 6 Anzeigen im Jahr"}),l.jsx(He,{children:"6 Social Media Posts"}),l.jsx(He,{children:"Website-Präsenz"}),l.jsx(He,{children:"Newsletter-Integration"})]}),l.jsx(Ya,{className:"secondary",children:"Small Flat"})]}),l.jsxs(Ha,{className:"popular",children:[l.jsx(Z0,{children:"EMPFOHLEN"}),l.jsx(Ua,{children:"Job Flat MEDIUM"}),l.jsx(La,{children:"1.199 €"}),l.jsx(Ga,{children:"netto / Jahr"}),l.jsxs(Va,{children:[l.jsx(He,{children:"Bis zu 12 Anzeigen im Jahr"}),l.jsx(He,{children:"Stadionmagazin-Präsenz"}),l.jsx(He,{children:"Social Media Posts"}),l.jsx(He,{children:"Stories & Highlights"})]}),l.jsx(Ya,{children:"Medium Flat"})]}),l.jsxs(Ha,{children:[l.jsx(Ua,{children:"Job Flat PARTNER"}),l.jsx(La,{children:"1.499 €"}),l.jsx(Ga,{children:"netto / Jahr"}),l.jsxs(Va,{children:[l.jsx(He,{children:"Unbegrenzte Anzeigen"}),l.jsx(He,{children:"Erwähnung bei Heimspielen"}),l.jsx(He,{children:'"Top Partner" Sichtbarkeit'}),l.jsx(He,{children:"Prioritärer Support"})]}),l.jsx(Ya,{className:"secondary",children:"Partner Flat"})]})]}),l.jsxs(wz,{children:[l.jsx(zz,{children:"➕ Zusatzoptionen"}),l.jsxs(_z,{children:[l.jsxs(pd,{children:[l.jsx(xd,{children:"Social Story"}),l.jsx(bd,{children:"39 €"}),l.jsx(yd,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),l.jsxs(pd,{children:[l.jsx(xd,{children:"Designservice"}),l.jsx(bd,{children:"59 €"}),l.jsx(yd,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),l.jsxs(pd,{children:[l.jsx(xd,{children:"Stadionmagazin"}),l.jsx(bd,{children:"99 €"}),l.jsx(yd,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),l.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:l.jsx(Ez,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),l.jsxs(Tz,{children:[l.jsx(Az,{children:"🎯 Warum SCKW Jobbörse?"}),l.jsxs(Cz,{children:[l.jsxs(qa,{children:[l.jsx(Ka,{children:"🏠"}),l.jsxs(Za,{children:[l.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),l.jsxs(qa,{children:[l.jsx(Ka,{children:"👥"}),l.jsxs(Za,{children:[l.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),l.jsxs(qa,{children:[l.jsx(Ka,{children:"💰"}),l.jsxs(Za,{children:[l.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),l.jsxs(qa,{children:[l.jsx(Ka,{children:"📈"}),l.jsxs(Za,{children:[l.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),l.jsxs(qa,{children:[l.jsx(Ka,{children:"⚡"}),l.jsxs(Za,{children:[l.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),l.jsxs(qa,{children:[l.jsx(Ka,{children:"🤲"}),l.jsxs(Za,{children:[l.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),l.jsx(Qd,{})]})}h.div`
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
  background: url("${$d("herren",18)}") center/cover;
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
`;Bx();const Mz=!1;function Rz(){return l.jsx(Kj,{children:l.jsxs(yj,{children:[l.jsx(Si,{path:"/",element:l.jsxs(l.Fragment,{children:[l.jsx(Cs,{}),l.jsx(Zs,{to:"/sponsoring",replace:!0})]})}),l.jsx(Si,{path:"/sponsoring",element:l.jsxs(l.Fragment,{children:[l.jsx(Cs,{}),l.jsx(bw,{})]})}),l.jsx(Si,{path:"/sponsoring-v2",element:l.jsx(Zs,{to:"/sponsoring",replace:!0})}),l.jsx(Si,{path:"/sponsoring-v1",element:l.jsxs(l.Fragment,{children:[l.jsx(Cs,{}),l.jsx(b2,{})]})}),l.jsx(Si,{path:"/sponsoring-handoff",element:l.jsx($w,{})}),l.jsx(Si,{path:"/jobs",element:l.jsxs(l.Fragment,{children:[l.jsx(Cs,{}),l.jsx(kz,{})]})}),Mz,l.jsx(Si,{path:"*",element:l.jsx(Zs,{to:"/sponsoring",replace:!0})})]})})}const Bz={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");yy.createRoot(document.getElementById("root")).render(l.jsx(M.StrictMode,{children:l.jsx(yv,{theme:Bz,children:l.jsx(Rz,{})})}));
