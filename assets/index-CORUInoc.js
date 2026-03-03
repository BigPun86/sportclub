(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function ly(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zu={exports:{}},$l={};var Qg;function ry(){if(Qg)return $l;Qg=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,f,m){var p=null;if(m!==void 0&&(p=""+m),f.key!==void 0&&(p=""+f.key),"key"in f){m={};for(var j in f)j!=="key"&&(m[j]=f[j])}else m=f;return f=m.ref,{$$typeof:i,type:c,key:p,ref:f!==void 0?f:null,props:m}}return $l.Fragment=o,$l.jsx=u,$l.jsxs=u,$l}var Xg;function sy(){return Xg||(Xg=1,zu.exports=ry()),zu.exports}var l=sy(),_u={exports:{}},ie={};var $g;function oy(){if($g)return ie;$g=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.iterator;function G(S){return S===null||typeof S!="object"?null:(S=N&&S[N]||S["@@iterator"],typeof S=="function"?S:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,K={};function O(S,B,Q){this.props=S,this.context=B,this.refs=K,this.updater=Q||V}O.prototype.isReactComponent={},O.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},O.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Y(){}Y.prototype=O.prototype;function L(S,B,Q){this.props=S,this.context=B,this.refs=K,this.updater=Q||V}var W=L.prototype=new Y;W.constructor=L,q(W,O.prototype),W.isPureReactComponent=!0;var I=Array.isArray;function $(){}var U={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function be(S,B,Q){var X=Q.ref;return{$$typeof:i,type:S,key:B,ref:X!==void 0?X:null,props:Q}}function ue(S,B){return be(S.type,B,S.props)}function Ue(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function ke(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Q){return B[Q]})}var xt=/\/+/g;function ct(S,B){return typeof S=="object"&&S!==null&&S.key!=null?ke(""+S.key):B.toString(36)}function bt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then($,$):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function R(S,B,Q,X,ae){var se=typeof S;(se==="undefined"||se==="boolean")&&(S=null);var xe=!1;if(S===null)xe=!0;else switch(se){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(S.$$typeof){case i:case o:xe=!0;break;case T:return xe=S._init,R(xe(S._payload),B,Q,X,ae)}}if(xe)return ae=ae(S),xe=X===""?"."+ct(S,0):X,I(ae)?(Q="",xe!=null&&(Q=xe.replace(xt,"$&/")+"/"),R(ae,B,Q,"",function(sn){return sn})):ae!=null&&(Ue(ae)&&(ae=ue(ae,Q+(ae.key==null||S&&S.key===ae.key?"":(""+ae.key).replace(xt,"$&/")+"/")+xe)),B.push(ae)),1;xe=0;var qe=X===""?".":X+":";if(I(S))for(var Ee=0;Ee<S.length;Ee++)X=S[Ee],se=qe+ct(X,Ee),xe+=R(X,B,Q,se,ae);else if(Ee=G(S),typeof Ee=="function")for(S=Ee.call(S),Ee=0;!(X=S.next()).done;)X=X.value,se=qe+ct(X,Ee++),xe+=R(X,B,Q,se,ae);else if(se==="object"){if(typeof S.then=="function")return R(bt(S),B,Q,X,ae);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return xe}function Z(S,B,Q){if(S==null)return S;var X=[],ae=0;return R(S,X,"","",function(se){return B.call(Q,se,ae++)}),X}function te(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(Q){(S._status===0||S._status===-1)&&(S._status=1,S._result=Q)},function(Q){(S._status===0||S._status===-1)&&(S._status=2,S._result=Q)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var de=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ye={map:Z,forEach:function(S,B,Q){Z(S,function(){B.apply(this,arguments)},Q)},count:function(S){var B=0;return Z(S,function(){B++}),B},toArray:function(S){return Z(S,function(B){return B})||[]},only:function(S){if(!Ue(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ie.Activity=w,ie.Children=ye,ie.Component=O,ie.Fragment=u,ie.Profiler=f,ie.PureComponent=L,ie.StrictMode=c,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ie.__COMPILER_RUNTIME={__proto__:null,c:function(S){return U.H.useMemoCache(S)}},ie.cache=function(S){return function(){return S.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(S,B,Q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var X=q({},S.props),ae=S.key;if(B!=null)for(se in B.key!==void 0&&(ae=""+B.key),B)!re.call(B,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&B.ref===void 0||(X[se]=B[se]);var se=arguments.length-2;if(se===1)X.children=Q;else if(1<se){for(var xe=Array(se),qe=0;qe<se;qe++)xe[qe]=arguments[qe+2];X.children=xe}return be(S.type,ae,X)},ie.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},ie.createElement=function(S,B,Q){var X,ae={},se=null;if(B!=null)for(X in B.key!==void 0&&(se=""+B.key),B)re.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ae[X]=B[X]);var xe=arguments.length-2;if(xe===1)ae.children=Q;else if(1<xe){for(var qe=Array(xe),Ee=0;Ee<xe;Ee++)qe[Ee]=arguments[Ee+2];ae.children=qe}if(S&&S.defaultProps)for(X in xe=S.defaultProps,xe)ae[X]===void 0&&(ae[X]=xe[X]);return be(S,se,ae)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(S){return{$$typeof:j,render:S}},ie.isValidElement=Ue,ie.lazy=function(S){return{$$typeof:T,_payload:{_status:-1,_result:S},_init:te}},ie.memo=function(S,B){return{$$typeof:x,type:S,compare:B===void 0?null:B}},ie.startTransition=function(S){var B=U.T,Q={};U.T=Q;try{var X=S(),ae=U.S;ae!==null&&ae(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then($,de)}catch(se){de(se)}finally{B!==null&&Q.types!==null&&(B.types=Q.types),U.T=B}},ie.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ie.use=function(S){return U.H.use(S)},ie.useActionState=function(S,B,Q){return U.H.useActionState(S,B,Q)},ie.useCallback=function(S,B){return U.H.useCallback(S,B)},ie.useContext=function(S){return U.H.useContext(S)},ie.useDebugValue=function(){},ie.useDeferredValue=function(S,B){return U.H.useDeferredValue(S,B)},ie.useEffect=function(S,B){return U.H.useEffect(S,B)},ie.useEffectEvent=function(S){return U.H.useEffectEvent(S)},ie.useId=function(){return U.H.useId()},ie.useImperativeHandle=function(S,B,Q){return U.H.useImperativeHandle(S,B,Q)},ie.useInsertionEffect=function(S,B){return U.H.useInsertionEffect(S,B)},ie.useLayoutEffect=function(S,B){return U.H.useLayoutEffect(S,B)},ie.useMemo=function(S,B){return U.H.useMemo(S,B)},ie.useOptimistic=function(S,B){return U.H.useOptimistic(S,B)},ie.useReducer=function(S,B,Q){return U.H.useReducer(S,B,Q)},ie.useRef=function(S){return U.H.useRef(S)},ie.useState=function(S){return U.H.useState(S)},ie.useSyncExternalStore=function(S,B,Q){return U.H.useSyncExternalStore(S,B,Q)},ie.useTransition=function(){return U.H.useTransition()},ie.version="19.2.3",ie}var Jg;function Ad(){return Jg||(Jg=1,_u.exports=oy()),_u.exports}var M=Ad();const Ie=ly(M);var Eu={exports:{}},Jl={},Tu={exports:{}},Au={};var Wg;function cy(){return Wg||(Wg=1,(function(i){function o(R,Z){var te=R.length;R.push(Z);e:for(;0<te;){var de=te-1>>>1,ye=R[de];if(0<f(ye,Z))R[de]=Z,R[te]=ye,te=de;else break e}}function u(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var Z=R[0],te=R.pop();if(te!==Z){R[0]=te;e:for(var de=0,ye=R.length,S=ye>>>1;de<S;){var B=2*(de+1)-1,Q=R[B],X=B+1,ae=R[X];if(0>f(Q,te))X<ye&&0>f(ae,Q)?(R[de]=ae,R[X]=te,de=X):(R[de]=Q,R[B]=te,de=B);else if(X<ye&&0>f(ae,te))R[de]=ae,R[X]=te,de=X;else break e}}return Z}function f(R,Z){var te=R.sortIndex-Z.sortIndex;return te!==0?te:R.id-Z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var p=Date,j=p.now();i.unstable_now=function(){return p.now()-j}}var y=[],x=[],T=1,w=null,N=3,G=!1,V=!1,q=!1,K=!1,O=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function W(R){for(var Z=u(x);Z!==null;){if(Z.callback===null)c(x);else if(Z.startTime<=R)c(x),Z.sortIndex=Z.expirationTime,o(y,Z);else break;Z=u(x)}}function I(R){if(q=!1,W(R),!V)if(u(y)!==null)V=!0,$||($=!0,ke());else{var Z=u(x);Z!==null&&bt(I,Z.startTime-R)}}var $=!1,U=-1,re=5,be=-1;function ue(){return K?!0:!(i.unstable_now()-be<re)}function Ue(){if(K=!1,$){var R=i.unstable_now();be=R;var Z=!0;try{e:{V=!1,q&&(q=!1,Y(U),U=-1),G=!0;var te=N;try{t:{for(W(R),w=u(y);w!==null&&!(w.expirationTime>R&&ue());){var de=w.callback;if(typeof de=="function"){w.callback=null,N=w.priorityLevel;var ye=de(w.expirationTime<=R);if(R=i.unstable_now(),typeof ye=="function"){w.callback=ye,W(R),Z=!0;break t}w===u(y)&&c(y),W(R)}else c(y);w=u(y)}if(w!==null)Z=!0;else{var S=u(x);S!==null&&bt(I,S.startTime-R),Z=!1}}break e}finally{w=null,N=te,G=!1}Z=void 0}}finally{Z?ke():$=!1}}}var ke;if(typeof L=="function")ke=function(){L(Ue)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,ct=xt.port2;xt.port1.onmessage=Ue,ke=function(){ct.postMessage(null)}}else ke=function(){O(Ue,0)};function bt(R,Z){U=O(function(){R(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_next=function(R){switch(N){case 1:case 2:case 3:var Z=3;break;default:Z=N}var te=N;N=Z;try{return R()}finally{N=te}},i.unstable_requestPaint=function(){K=!0},i.unstable_runWithPriority=function(R,Z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var te=N;N=R;try{return Z()}finally{N=te}},i.unstable_scheduleCallback=function(R,Z,te){var de=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?de+te:de):te=de,R){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,R={id:T++,callback:Z,priorityLevel:R,startTime:te,expirationTime:ye,sortIndex:-1},te>de?(R.sortIndex=te,o(x,R),u(y)===null&&R===u(x)&&(q?(Y(U),U=-1):q=!0,bt(I,te-de))):(R.sortIndex=ye,o(y,R),V||G||(V=!0,$||($=!0,ke()))),R},i.unstable_shouldYield=ue,i.unstable_wrapCallback=function(R){var Z=N;return function(){var te=N;N=Z;try{return R.apply(this,arguments)}finally{N=te}}}})(Au)),Au}var Fg;function uy(){return Fg||(Fg=1,Tu.exports=cy()),Tu.exports}var Cu={exports:{}},st={};var Pg;function dy(){if(Pg)return st;Pg=1;var i=Ad();function o(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)x+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,x,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:y,containerInfo:x,implementation:T}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,st.createPortal=function(y,x){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return m(y,x,null,T)},st.flushSync=function(y){var x=p.T,T=c.p;try{if(p.T=null,c.p=2,y)return y()}finally{p.T=x,c.p=T,c.d.f()}},st.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(y,x))},st.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},st.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var T=x.as,w=j(T,x.crossOrigin),N=typeof x.integrity=="string"?x.integrity:void 0,G=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;T==="style"?c.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:N,fetchPriority:G}):T==="script"&&c.d.X(y,{crossOrigin:w,integrity:N,fetchPriority:G,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},st.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var T=j(x.as,x.crossOrigin);c.d.M(y,{crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(y)},st.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var T=x.as,w=j(T,x.crossOrigin);c.d.L(y,T,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},st.preloadModule=function(y,x){if(typeof y=="string")if(x){var T=j(x.as,x.crossOrigin);c.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(y)},st.requestFormReset=function(y){c.d.r(y)},st.unstable_batchedUpdates=function(y,x){return y(x)},st.useFormState=function(y,x,T){return p.H.useFormState(y,x,T)},st.useFormStatus=function(){return p.H.useHostTransitionStatus()},st.version="19.2.3",st}var Ig;function fy(){if(Ig)return Cu.exports;Ig=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Cu.exports=dy(),Cu.exports}var e0;function hy(){if(e0)return Jl;e0=1;var i=uy(),o=Ad(),u=fy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return y(r),e;if(s===a)return y(r),t;s=s.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=s;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,a=s;break}if(g===a){d=!0,a=r,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,a=r;break}if(g===a){d=!0,a=s,n=r;break}g=g.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,N=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),L=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case O:return"Profiler";case K:return"StrictMode";case I:return"Suspense";case $:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case L:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return t=e.displayName||null,t!==null?t:ct(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ct(e(t))}catch{}}return null}var bt=Array.isArray,R=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},de=[],ye=-1;function S(e){return{current:e}}function B(e){0>ye||(e.current=de[ye],de[ye]=null,ye--)}function Q(e,t){ye++,de[ye]=e.current,e.current=t}var X=S(null),ae=S(null),se=S(null),xe=S(null);function qe(e,t){switch(Q(se,t),Q(ae,e),Q(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gg(t),e=pg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(X),Q(X,e)}function Ee(){B(X),B(ae),B(se)}function sn(e){e.memoizedState!==null&&Q(xe,e);var t=X.current,n=pg(t,e.type);t!==n&&(Q(ae,e),Q(X,n))}function on(e){ae.current===e&&(B(X),B(ae)),xe.current===e&&(B(xe),Kl._currentValue=te)}var yt,Qa;function Ot(e){if(yt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yt=t&&t[1]||"",Qa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+Qa}var cn=!1;function so(e,t){if(!e||cn)return"";cn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(C){var A=C}Reflect.construct(e,[],H)}else{try{H.call()}catch(C){A=C}e.call(H.prototype)}}else{try{throw Error()}catch(C){A=C}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var b=d.split(`
`),E=g.split(`
`);for(r=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;if(a===b.length||r===E.length)for(a=b.length-1,r=E.length-1;1<=a&&0<=r&&b[a]!==E[r];)r--;for(;1<=a&&0<=r;a--,r--)if(b[a]!==E[r]){if(a!==1||r!==1)do if(a--,r--,0>r||b[a]!==E[r]){var k=`
`+b[a].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=a&&0<=r);break}}}finally{cn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ot(n):""}function Nx(e,t){switch(e.tag){case 26:case 27:case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return e.child!==t&&t!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return so(e.type,!1);case 11:return so(e.type.render,!1);case 1:return so(e.type,!0);case 31:return Ot("Activity");default:return""}}function Zd(e){try{var t="",n=null;do t+=Nx(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var oo=Object.prototype.hasOwnProperty,co=i.unstable_scheduleCallback,uo=i.unstable_cancelCallback,Hx=i.unstable_shouldYield,Ux=i.unstable_requestPaint,vt=i.unstable_now,Lx=i.unstable_getCurrentPriorityLevel,Qd=i.unstable_ImmediatePriority,Xd=i.unstable_UserBlockingPriority,or=i.unstable_NormalPriority,Gx=i.unstable_LowPriority,$d=i.unstable_IdlePriority,Yx=i.log,Vx=i.unstable_setDisableYieldValue,nl=null,St=null;function Vn(e){if(typeof Yx=="function"&&Vx(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(nl,e)}catch{}}var jt=Math.clz32?Math.clz32:Zx,qx=Math.log,Kx=Math.LN2;function Zx(e){return e>>>=0,e===0?32:31-(qx(e)/Kx|0)|0}var cr=256,ur=262144,dr=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fr(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~s,a!==0?r=ja(a):(d&=g,d!==0?r=ja(d):n||(n=g&~e,n!==0&&(r=ja(n))))):(g=a&~s,g!==0?r=ja(g):d!==0?r=ja(d):n||(n=a&~e,n!==0&&(r=ja(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function al(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jd(){var e=dr;return dr<<=1,(dr&62914560)===0&&(dr=4194304),e}function fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xx(e,t,n,a,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,b=e.expirationTimes,E=e.hiddenUpdates;for(n=d&~n;0<n;){var k=31-jt(n),H=1<<k;g[k]=0,b[k]=-1;var A=E[k];if(A!==null)for(E[k]=null,k=0;k<A.length;k++){var C=A[k];C!==null&&(C.lane&=-536870913)}n&=~H}a!==0&&Wd(e,a,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Wd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-jt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Fd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-jt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Pd(e,t){var n=t&-t;return n=(n&42)!==0?1:ho(n),(n&(e.suspendedLanes|t))!==0?0:n}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Id(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Lg(e.type))}function ef(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var qn=Math.random().toString(36).slice(2),tt="__reactFiber$"+qn,ut="__reactProps$"+qn,Xa="__reactContainer$"+qn,go="__reactEvents$"+qn,$x="__reactListeners$"+qn,Jx="__reactHandles$"+qn,tf="__reactResources$"+qn,ll="__reactMarker$"+qn;function po(e){delete e[tt],delete e[ut],delete e[go],delete e[$x],delete e[Jx]}function $a(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xa]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wg(e);e!==null;){if(n=e[tt])return n;e=wg(e)}return t}e=n,n=e.parentNode}return null}function Ja(e){if(e=e[tt]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Wa(e){var t=e[tf];return t||(t=e[tf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[ll]=!0}var nf=new Set,af={};function wa(e,t){Fa(e,t),Fa(e+"Capture",t)}function Fa(e,t){for(af[e]=t,e=0;e<t.length;e++)nf.add(t[e])}var Wx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lf={},rf={};function Fx(e){return oo.call(rf,e)?!0:oo.call(lf,e)?!1:Wx.test(e)?rf[e]=!0:(lf[e]=!0,!1)}function hr(e,t,n){if(Fx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function mr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function yn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Px(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){if(!e._valueTracker){var t=sf(e)?"checked":"value";e._valueTracker=Px(e,t,""+e[t])}}function of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=sf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ix=/[\n"\\]/g;function Ht(e){return e.replace(Ix,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bo(e,t,n,a,r,s,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?yo(e,d,Nt(t)):n!=null?yo(e,d,Nt(n)):a!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Nt(g):e.removeAttribute("name")}function cf(e,t,n,a,r,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){xo(e);return}n=n!=null?""+Nt(n):"",t=t!=null?""+Nt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),xo(e)}function yo(e,t,n){t==="number"&&gr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Pa(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function uf(e,t,n){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Nt(n):""}function df(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(bt(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Nt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),xo(e)}function Ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ff(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||eb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function hf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&ff(e,r,a)}else for(var s in t)t.hasOwnProperty(s)&&ff(e,s,t[s])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(e){return nb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vn(){}var So=null;function jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ei=null,ti=null;function mf(e){var t=Ja(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(bo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[ut]||null;if(!r)throw Error(c(90));bo(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&of(a)}break e;case"textarea":uf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Pa(e,!!n.multiple,t,!1)}}}var wo=!1;function gf(e,t,n){if(wo)return e(t,n);wo=!0;try{var a=e(t);return a}finally{if(wo=!1,(ei!==null||ti!==null)&&(as(),ei&&(t=ei,e=ti,ti=ei=null,mf(t),e)))for(t=0;t<e.length;t++)mf(e[t])}}function sl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ut]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=!1;if(Sn)try{var ol={};Object.defineProperty(ol,"passive",{get:function(){zo=!0}}),window.addEventListener("test",ol,ol),window.removeEventListener("test",ol,ol)}catch{zo=!1}var Kn=null,_o=null,xr=null;function pf(){if(xr)return xr;var e,t=_o,n=t.length,a,r="value"in Kn?Kn.value:Kn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===r[s-a];a++);return xr=r.slice(e,1<a?1-a:void 0)}function br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function xf(){return!1}function dt(e){function t(n,a,r,s,d){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yr:xf,this.isPropagationStopped=xf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vr=dt(za),cl=w({},za,{view:0,detail:0}),ab=dt(cl),Eo,To,ul,Sr=w({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ul&&(ul&&e.type==="mousemove"?(Eo=e.screenX-ul.screenX,To=e.screenY-ul.screenY):To=Eo=0,ul=e),Eo)},movementY:function(e){return"movementY"in e?e.movementY:To}}),bf=dt(Sr),ib=w({},Sr,{dataTransfer:0}),lb=dt(ib),rb=w({},cl,{relatedTarget:0}),Ao=dt(rb),sb=w({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),ob=dt(sb),cb=w({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ub=dt(cb),db=w({},za,{data:0}),yf=dt(db),fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mb[e])?!!t[e]:!1}function Co(){return gb}var pb=w({},cl,{key:function(e){if(e.key){var t=fb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xb=dt(pb),bb=w({},Sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=dt(bb),yb=w({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),vb=dt(yb),Sb=w({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),jb=dt(Sb),wb=w({},Sr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zb=dt(wb),_b=w({},za,{newState:0,oldState:0}),Eb=dt(_b),Tb=[9,13,27,32],Mo=Sn&&"CompositionEvent"in window,dl=null;Sn&&"documentMode"in document&&(dl=document.documentMode);var Ab=Sn&&"TextEvent"in window&&!dl,Sf=Sn&&(!Mo||dl&&8<dl&&11>=dl),jf=" ",wf=!1;function zf(e,t){switch(e){case"keyup":return Tb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ni=!1;function Cb(e,t){switch(e){case"compositionend":return _f(t);case"keypress":return t.which!==32?null:(wf=!0,jf);case"textInput":return e=t.data,e===jf&&wf?null:e;default:return null}}function Mb(e,t){if(ni)return e==="compositionend"||!Mo&&zf(e,t)?(e=pf(),xr=_o=Kn=null,ni=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kb[e.type]:t==="textarea"}function Tf(e,t,n,a){ei?ti?ti.push(a):ti=[a]:ei=a,t=us(t,"onChange"),0<t.length&&(n=new vr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var fl=null,hl=null;function Rb(e){cg(e,0)}function jr(e){var t=rl(e);if(of(t))return e}function Af(e,t){if(e==="change")return t}var Cf=!1;if(Sn){var ko;if(Sn){var Ro="oninput"in document;if(!Ro){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Ro=typeof Mf.oninput=="function"}ko=Ro}else ko=!1;Cf=ko&&(!document.documentMode||9<document.documentMode)}function kf(){fl&&(fl.detachEvent("onpropertychange",Rf),hl=fl=null)}function Rf(e){if(e.propertyName==="value"&&jr(hl)){var t=[];Tf(t,hl,e,jo(e)),gf(Rb,t)}}function Bb(e,t,n){e==="focusin"?(kf(),fl=t,hl=n,fl.attachEvent("onpropertychange",Rf)):e==="focusout"&&kf()}function Db(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jr(hl)}function Ob(e,t){if(e==="click")return jr(t)}function Nb(e,t){if(e==="input"||e==="change")return jr(t)}function Hb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Hb;function ml(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!oo.call(t,r)||!wt(e[r],t[r]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Df(e,t){var n=Bf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function Of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gr(e.document)}return t}function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ub=Sn&&"documentMode"in document&&11>=document.documentMode,ai=null,Do=null,gl=null,Oo=!1;function Hf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oo||ai==null||ai!==gr(a)||(a=ai,"selectionStart"in a&&Bo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),gl&&ml(gl,a)||(gl=a,a=us(Do,"onSelect"),0<a.length&&(t=new vr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ai)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ii={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},No={},Uf={};Sn&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function Ea(e){if(No[e])return No[e];if(!ii[e])return e;var t=ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uf)return No[e]=t[n];return e}var Lf=Ea("animationend"),Gf=Ea("animationiteration"),Yf=Ea("animationstart"),Lb=Ea("transitionrun"),Gb=Ea("transitionstart"),Yb=Ea("transitioncancel"),Vf=Ea("transitionend"),qf=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function Wt(e,t){qf.set(e,t),wa(t,[e])}var wr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],li=0,Uo=0;function zr(){for(var e=li,t=Uo=li=0;t<e;){var n=Ut[t];Ut[t++]=null;var a=Ut[t];Ut[t++]=null;var r=Ut[t];Ut[t++]=null;var s=Ut[t];if(Ut[t++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}s!==0&&Kf(n,r,s)}}function _r(e,t,n,a){Ut[li++]=e,Ut[li++]=t,Ut[li++]=n,Ut[li++]=a,Uo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Lo(e,t,n,a){return _r(e,t,n,a),Er(e)}function Ta(e,t){return _r(e,null,null,t),Er(e)}function Kf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-jt(n),e=s.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),s):null}function Er(e){if(50<Hl)throw Hl=0,$c=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ri={};function Vb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new Vb(e,t,n,a)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Zf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Tr(e,t,n,a,r,s){var d=0;if(a=e,typeof e=="function")Go(e)&&(d=1);else if(typeof e=="string")d=X1(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=zt(31,n,t,r),e.elementType=be,e.lanes=s,e;case q:return Aa(n.children,r,s,t);case K:d=8,r|=24;break;case O:return e=zt(12,n,t,r|2),e.elementType=O,e.lanes=s,e;case I:return e=zt(13,n,t,r),e.elementType=I,e.lanes=s,e;case $:return e=zt(19,n,t,r),e.elementType=$,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:d=10;break e;case Y:d=9;break e;case W:d=11;break e;case U:d=14;break e;case re:d=16,a=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=zt(d,n,t,r),t.elementType=e,t.type=a,t.lanes=s,t}function Aa(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function Yo(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Qf(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function Vo(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xf=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var n=Xf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Zd(t)},Xf.set(e,t),t)}return{value:e,source:t,stack:Zd(t)}}var si=[],oi=0,Ar=null,pl=0,Gt=[],Yt=0,Zn=null,un=1,dn="";function wn(e,t){si[oi++]=pl,si[oi++]=Ar,Ar=e,pl=t}function $f(e,t,n){Gt[Yt++]=un,Gt[Yt++]=dn,Gt[Yt++]=Zn,Zn=e;var a=un;e=dn;var r=32-jt(a)-1;a&=~(1<<r),n+=1;var s=32-jt(t)+r;if(30<s){var d=r-r%5;s=(a&(1<<d)-1).toString(32),a>>=d,r-=d,un=1<<32-jt(t)+r|n<<r|a,dn=s+e}else un=1<<s|n<<r|a,dn=e}function qo(e){e.return!==null&&(wn(e,1),$f(e,1,0))}function Ko(e){for(;e===Ar;)Ar=si[--oi],si[oi]=null,pl=si[--oi],si[oi]=null;for(;e===Zn;)Zn=Gt[--Yt],Gt[Yt]=null,dn=Gt[--Yt],Gt[Yt]=null,un=Gt[--Yt],Gt[Yt]=null}function Jf(e,t){Gt[Yt++]=un,Gt[Yt++]=dn,Gt[Yt++]=Zn,un=t.id,dn=t.overflow,Zn=e}var nt=null,Re=null,pe=!1,Qn=null,Vt=!1,Zo=Error(c(519));function Xn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xl(Lt(t,e)),Zo}function Wf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[tt]=e,t[ut]=a,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<Ll.length;n++)he(Ll[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),cf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),df(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||hg(t.textContent,n)?(a.popover!=null&&(he("beforetoggle",t),he("toggle",t)),a.onScroll!=null&&he("scroll",t),a.onScrollEnd!=null&&he("scrollend",t),a.onClick!=null&&(t.onclick=vn),t=!0):t=!1,t||Xn(e,!0)}function Ff(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:nt=nt.return}}function ci(e){if(e!==nt)return!1;if(!pe)return Ff(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cu(e.type,e.memoizedProps)),n=!n),n&&Re&&Xn(e),Ff(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=jg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=jg(e)}else t===27?(t=Re,sa(e.type)?(e=mu,mu=null,Re=e):Re=t):Re=nt?Kt(e.stateNode.nextSibling):null;return!0}function Ca(){Re=nt=null,pe=!1}function Qo(){var e=Qn;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),Qn=null),e}function xl(e){Qn===null?Qn=[e]:Qn.push(e)}var Xo=S(null),Ma=null,zn=null;function $n(e,t,n){Q(Xo,t._currentValue),t._currentValue=n}function _n(e){e._currentValue=Xo.current,B(Xo)}function $o(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=r;for(var b=0;b<t.length;b++)if(g.context===t[b]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),$o(s.return,n,e),a||(d=null);break e}s=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(c(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),$o(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ui(e,t,n,a){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var g=r.type;wt(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===xe.current){if(d=r.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Kl):e=[Kl])}r=r.return}e!==null&&Jo(t,e,n,a),t.flags|=262144}function Cr(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Ma=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Pf(Ma,e)}function Mr(e,t){return Ma===null&&ka(e),Pf(e,t)}function Pf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zn===null){if(e===null)throw Error(c(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return n}var qb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Kb=i.unstable_scheduleCallback,Zb=i.unstable_NormalPriority,Ke={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new qb,data:new Map,refCount:0}}function bl(e){e.refCount--,e.refCount===0&&Kb(Zb,function(){e.controller.abort()})}var yl=null,Fo=0,di=0,fi=null;function Qb(e,t){if(yl===null){var n=yl=[];Fo=0,di=eu(),fi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Fo++,t.then(If,If),t}function If(){if(--Fo===0&&yl!==null){fi!==null&&(fi.status="fulfilled");var e=yl;yl=null,di=0,fi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xb(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var eh=R.S;R.S=function(e,t){Hm=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qb(e,t),eh!==null&&eh(e,t)};var Ra=S(null);function Po(){var e=Ra.current;return e!==null?e:Me.pooledCache}function kr(e,t){t===null?Q(Ra,Ra.current):Q(Ra,t.pool)}function th(){var e=Po();return e===null?null:{parent:Ke._currentValue,pool:e}}var hi=Error(c(460)),Io=Error(c(474)),Rr=Error(c(542)),Br={then:function(){}};function nh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ah(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(vn,vn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e;default:if(typeof t.status=="string")t.then(vn,vn);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e}throw Da=t,hi}}function Ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Da=n,hi):n}}var Da=null;function ih(){if(Da===null)throw Error(c(459));var e=Da;return Da=null,e}function lh(e){if(e===hi||e===Rr)throw Error(c(483))}var mi=null,vl=0;function Dr(e){var t=vl;return vl+=1,mi===null&&(mi=[]),ah(mi,e,t)}function Sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Or(e,t){throw t.$$typeof===N?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rh(e){function t(z,v){if(e){var _=z.deletions;_===null?(z.deletions=[v],z.flags|=16):_.push(v)}}function n(z,v){if(!e)return null;for(;v!==null;)t(z,v),v=v.sibling;return null}function a(z){for(var v=new Map;z!==null;)z.key!==null?v.set(z.key,z):v.set(z.index,z),z=z.sibling;return v}function r(z,v){return z=jn(z,v),z.index=0,z.sibling=null,z}function s(z,v,_){return z.index=_,e?(_=z.alternate,_!==null?(_=_.index,_<v?(z.flags|=67108866,v):_):(z.flags|=67108866,v)):(z.flags|=1048576,v)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,v,_,D){return v===null||v.tag!==6?(v=Yo(_,z.mode,D),v.return=z,v):(v=r(v,_),v.return=z,v)}function b(z,v,_,D){var ee=_.type;return ee===q?k(z,v,_.props.children,D,_.key):v!==null&&(v.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===re&&Ba(ee)===v.type)?(v=r(v,_.props),Sl(v,_),v.return=z,v):(v=Tr(_.type,_.key,_.props,null,z.mode,D),Sl(v,_),v.return=z,v)}function E(z,v,_,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Vo(_,z.mode,D),v.return=z,v):(v=r(v,_.children||[]),v.return=z,v)}function k(z,v,_,D,ee){return v===null||v.tag!==7?(v=Aa(_,z.mode,D,ee),v.return=z,v):(v=r(v,_),v.return=z,v)}function H(z,v,_){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Yo(""+v,z.mode,_),v.return=z,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case G:return _=Tr(v.type,v.key,v.props,null,z.mode,_),Sl(_,v),_.return=z,_;case V:return v=Vo(v,z.mode,_),v.return=z,v;case re:return v=Ba(v),H(z,v,_)}if(bt(v)||ke(v))return v=Aa(v,z.mode,_,null),v.return=z,v;if(typeof v.then=="function")return H(z,Dr(v),_);if(v.$$typeof===L)return H(z,Mr(z,v),_);Or(z,v)}return null}function A(z,v,_,D){var ee=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return ee!==null?null:g(z,v,""+_,D);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case G:return _.key===ee?b(z,v,_,D):null;case V:return _.key===ee?E(z,v,_,D):null;case re:return _=Ba(_),A(z,v,_,D)}if(bt(_)||ke(_))return ee!==null?null:k(z,v,_,D,null);if(typeof _.then=="function")return A(z,v,Dr(_),D);if(_.$$typeof===L)return A(z,v,Mr(z,_),D);Or(z,_)}return null}function C(z,v,_,D,ee){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return z=z.get(_)||null,g(v,z,""+D,ee);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return z=z.get(D.key===null?_:D.key)||null,b(v,z,D,ee);case V:return z=z.get(D.key===null?_:D.key)||null,E(v,z,D,ee);case re:return D=Ba(D),C(z,v,_,D,ee)}if(bt(D)||ke(D))return z=z.get(_)||null,k(v,z,D,ee,null);if(typeof D.then=="function")return C(z,v,_,Dr(D),ee);if(D.$$typeof===L)return C(z,v,_,Mr(v,D),ee);Or(v,D)}return null}function J(z,v,_,D){for(var ee=null,ve=null,F=v,oe=v=0,ge=null;F!==null&&oe<_.length;oe++){F.index>oe?(ge=F,F=null):ge=F.sibling;var Se=A(z,F,_[oe],D);if(Se===null){F===null&&(F=ge);break}e&&F&&Se.alternate===null&&t(z,F),v=s(Se,v,oe),ve===null?ee=Se:ve.sibling=Se,ve=Se,F=ge}if(oe===_.length)return n(z,F),pe&&wn(z,oe),ee;if(F===null){for(;oe<_.length;oe++)F=H(z,_[oe],D),F!==null&&(v=s(F,v,oe),ve===null?ee=F:ve.sibling=F,ve=F);return pe&&wn(z,oe),ee}for(F=a(F);oe<_.length;oe++)ge=C(F,z,oe,_[oe],D),ge!==null&&(e&&ge.alternate!==null&&F.delete(ge.key===null?oe:ge.key),v=s(ge,v,oe),ve===null?ee=ge:ve.sibling=ge,ve=ge);return e&&F.forEach(function(fa){return t(z,fa)}),pe&&wn(z,oe),ee}function ne(z,v,_,D){if(_==null)throw Error(c(151));for(var ee=null,ve=null,F=v,oe=v=0,ge=null,Se=_.next();F!==null&&!Se.done;oe++,Se=_.next()){F.index>oe?(ge=F,F=null):ge=F.sibling;var fa=A(z,F,Se.value,D);if(fa===null){F===null&&(F=ge);break}e&&F&&fa.alternate===null&&t(z,F),v=s(fa,v,oe),ve===null?ee=fa:ve.sibling=fa,ve=fa,F=ge}if(Se.done)return n(z,F),pe&&wn(z,oe),ee;if(F===null){for(;!Se.done;oe++,Se=_.next())Se=H(z,Se.value,D),Se!==null&&(v=s(Se,v,oe),ve===null?ee=Se:ve.sibling=Se,ve=Se);return pe&&wn(z,oe),ee}for(F=a(F);!Se.done;oe++,Se=_.next())Se=C(F,z,oe,Se.value,D),Se!==null&&(e&&Se.alternate!==null&&F.delete(Se.key===null?oe:Se.key),v=s(Se,v,oe),ve===null?ee=Se:ve.sibling=Se,ve=Se);return e&&F.forEach(function(iy){return t(z,iy)}),pe&&wn(z,oe),ee}function Ce(z,v,_,D){if(typeof _=="object"&&_!==null&&_.type===q&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case G:e:{for(var ee=_.key;v!==null;){if(v.key===ee){if(ee=_.type,ee===q){if(v.tag===7){n(z,v.sibling),D=r(v,_.props.children),D.return=z,z=D;break e}}else if(v.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===re&&Ba(ee)===v.type){n(z,v.sibling),D=r(v,_.props),Sl(D,_),D.return=z,z=D;break e}n(z,v);break}else t(z,v);v=v.sibling}_.type===q?(D=Aa(_.props.children,z.mode,D,_.key),D.return=z,z=D):(D=Tr(_.type,_.key,_.props,null,z.mode,D),Sl(D,_),D.return=z,z=D)}return d(z);case V:e:{for(ee=_.key;v!==null;){if(v.key===ee)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(z,v.sibling),D=r(v,_.children||[]),D.return=z,z=D;break e}else{n(z,v);break}else t(z,v);v=v.sibling}D=Vo(_,z.mode,D),D.return=z,z=D}return d(z);case re:return _=Ba(_),Ce(z,v,_,D)}if(bt(_))return J(z,v,_,D);if(ke(_)){if(ee=ke(_),typeof ee!="function")throw Error(c(150));return _=ee.call(_),ne(z,v,_,D)}if(typeof _.then=="function")return Ce(z,v,Dr(_),D);if(_.$$typeof===L)return Ce(z,v,Mr(z,_),D);Or(z,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,v!==null&&v.tag===6?(n(z,v.sibling),D=r(v,_),D.return=z,z=D):(n(z,v),D=Yo(_,z.mode,D),D.return=z,z=D),d(z)):n(z,v)}return function(z,v,_,D){try{vl=0;var ee=Ce(z,v,_,D);return mi=null,ee}catch(F){if(F===hi||F===Rr)throw F;var ve=zt(29,F,null,z.mode);return ve.lanes=D,ve.return=z,ve}}}var Oa=rh(!0),sh=rh(!1),Jn=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(je&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Er(e),Kf(e,null,n),t}return _r(e,a,t,n),Er(e)}function jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Fd(e,n)}}function nc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ac=!1;function wl(){if(ac){var e=fi;if(e!==null)throw e}}function zl(e,t,n,a){ac=!1;var r=e.updateQueue;Jn=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var b=g,E=b.next;b.next=null,d===null?s=E:d.next=E,d=b;var k=e.alternate;k!==null&&(k=k.updateQueue,g=k.lastBaseUpdate,g!==d&&(g===null?k.firstBaseUpdate=E:g.next=E,k.lastBaseUpdate=b))}if(s!==null){var H=r.baseState;d=0,k=E=b=null,g=s;do{var A=g.lane&-536870913,C=A!==g.lane;if(C?(me&A)===A:(a&A)===A){A!==0&&A===di&&(ac=!0),k!==null&&(k=k.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var J=e,ne=g;A=t;var Ce=n;switch(ne.tag){case 1:if(J=ne.payload,typeof J=="function"){H=J.call(Ce,H,A);break e}H=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ne.payload,A=typeof J=="function"?J.call(Ce,H,A):J,A==null)break e;H=w({},H,A);break e;case 2:Jn=!0}}A=g.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=r.callbacks,C===null?r.callbacks=[A]:C.push(A))}else C={lane:A,tag:g.tag,payload:g.payload,callback:g.callback,next:null},k===null?(E=k=C,b=H):k=k.next=C,d|=A;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;C=g,g=C.next,C.next=null,r.lastBaseUpdate=C,r.shared.pending=null}}while(!0);k===null&&(b=H),r.baseState=b,r.firstBaseUpdate=E,r.lastBaseUpdate=k,s===null&&(r.shared.lanes=0),na|=d,e.lanes=d,e.memoizedState=H}}function oh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ch(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)oh(n[e],t)}var gi=S(null),Nr=S(0);function uh(e,t){e=Dn,Q(Nr,e),Q(gi,t),Dn=e|t.baseLanes}function ic(){Q(Nr,Dn),Q(gi,gi.current)}function lc(){Dn=Nr.current,B(gi),B(Nr)}var _t=S(null),qt=null;function Pn(e){var t=e.alternate;Q(Ye,Ye.current&1),Q(_t,e),qt===null&&(t===null||gi.current!==null||t.memoizedState!==null)&&(qt=e)}function rc(e){Q(Ye,Ye.current),Q(_t,e),qt===null&&(qt=e)}function dh(e){e.tag===22?(Q(Ye,Ye.current),Q(_t,e),qt===null&&(qt=e)):In()}function In(){Q(Ye,Ye.current),Q(_t,_t.current)}function Et(e){B(_t),qt===e&&(qt=null),B(Ye)}var Ye=S(0);function Hr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fu(n)||hu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,le=null,Te=null,Ze=null,Ur=!1,pi=!1,Na=!1,Lr=0,_l=0,xi=null,$b=0;function Le(){throw Error(c(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function oc(e,t,n,a,r,s){return En=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?$h:wc,Na=!1,s=n(a,r),Na=!1,pi&&(s=hh(t,n,a,r)),fh(e),s}function fh(e){R.H=Al;var t=Te!==null&&Te.next!==null;if(En=0,Ze=Te=le=null,Ur=!1,_l=0,xi=null,t)throw Error(c(300));e===null||Qe||(e=e.dependencies,e!==null&&Cr(e)&&(Qe=!0))}function hh(e,t,n,a){le=e;var r=0;do{if(pi&&(xi=null),_l=0,pi=!1,25<=r)throw Error(c(301));if(r+=1,Ze=Te=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}R.H=Jh,s=t(n,a)}while(pi);return s}function Jb(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?El(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(le.flags|=1024),t}function cc(){var e=Lr!==0;return Lr=0,e}function uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dc(e){if(Ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ur=!1}En=0,Ze=Te=le=null,pi=!1,_l=Lr=0,xi=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?le.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ve(){if(Te===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ze===null?le.memoizedState:Ze.next;if(t!==null)Ze=t,Te=e;else{if(e===null)throw le.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ze===null?le.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Gr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(e){var t=_l;return _l+=1,xi===null&&(xi=[]),e=ah(xi,e,t),t=le,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?$h:wc),e}function Yr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return El(e);if(e.$$typeof===L)return at(e)}throw Error(c(438,String(e)))}function fc(e){var t=null,n=le.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=le.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Gr(),le.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ue;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function Vr(e){var t=Ve();return hc(t,Te,e)}function hc(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,s=a.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,a.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var g=d=null,b=null,E=t,k=!1;do{var H=E.lane&-536870913;if(H!==E.lane?(me&H)===H:(En&H)===H){var A=E.revertLane;if(A===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),H===di&&(k=!0);else if((En&A)===A){E=E.next,A===di&&(k=!0);continue}else H={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(g=b=H,d=s):b=b.next=H,le.lanes|=A,na|=A;H=E.action,Na&&n(s,H),s=E.hasEagerState?E.eagerState:n(s,H)}else A={lane:H,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(g=b=A,d=s):b=b.next=A,le.lanes|=H,na|=H;E=E.next}while(E!==null&&E!==t);if(b===null?d=s:b.next=g,!wt(s,e.memoizedState)&&(Qe=!0,k&&(n=fi,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=b,a.lastRenderedState=s}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function mc(e){var t=Ve(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);wt(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function mh(e,t,n){var a=le,r=Ve(),s=pe;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!wt((Te||r).memoizedState,n);if(d&&(r.memoizedState=n,Qe=!0),r=r.queue,xc(xh.bind(null,a,r,e),[e]),r.getSnapshot!==t||d||Ze!==null&&Ze.memoizedState.tag&1){if(a.flags|=2048,bi(9,{destroy:void 0},ph.bind(null,a,r,n,t),null),Me===null)throw Error(c(349));s||(En&127)!==0||gh(a,t,n)}return n}function gh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t=Gr(),le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ph(e,t,n,a){t.value=n,t.getSnapshot=a,bh(t)&&yh(e)}function xh(e,t,n){return n(function(){bh(t)&&yh(e)})}function bh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function yh(e){var t=Ta(e,2);t!==null&&pt(t,e,2)}function gc(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),Na){Vn(!0);try{n()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function vh(e,t,n,a){return e.baseState=n,hc(e,Te,typeof a=="function"?a:Tn)}function Wb(e,t,n,a,r){if(Zr(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};R.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,Sh(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Sh(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var s=R.T,d={};R.T=d;try{var g=n(r,a),b=R.S;b!==null&&b(d,g),jh(e,t,g)}catch(E){pc(e,t,E)}finally{s!==null&&d.types!==null&&(s.types=d.types),R.T=s}}else try{s=n(r,a),jh(e,t,s)}catch(E){pc(e,t,E)}}function jh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){wh(e,t,a)},function(a){return pc(e,t,a)}):wh(e,t,n)}function wh(e,t,n){t.status="fulfilled",t.value=n,zh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sh(e,n)))}function pc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,zh(t),t=t.next;while(t!==a)}e.action=null}function zh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _h(e,t){return t}function Eh(e,t){if(pe){var n=Me.formState;if(n!==null){e:{var a=le;if(pe){if(Re){t:{for(var r=Re,s=Vt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Kt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Re=Kt(r.nextSibling),a=r.data==="F!";break e}}Xn(a)}a=!1}a&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_h,lastRenderedState:t},n.queue=a,n=Zh.bind(null,le,a),a.dispatch=n,a=gc(!1),s=jc.bind(null,le,!1,a.queue),a=ot(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Wb.bind(null,le,r,s,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Th(e){var t=Ve();return Ah(t,Te,e)}function Ah(e,t,n){if(t=hc(e,t,_h)[0],e=Vr(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=El(t)}catch(d){throw d===hi?Rr:d}else a=t;t=Ve();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(le.flags|=2048,bi(9,{destroy:void 0},Fb.bind(null,r,n),null)),[a,s,e]}function Fb(e,t){e.action=t}function Ch(e){var t=Ve(),n=Te;if(n!==null)return Ah(t,n,e);Ve(),t=t.memoizedState,n=Ve();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function bi(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=le.updateQueue,t===null&&(t=Gr(),le.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Mh(){return Ve().memoizedState}function qr(e,t,n,a){var r=ot();le.flags|=e,r.memoizedState=bi(1|t,{destroy:void 0},n,a===void 0?null:a)}function Kr(e,t,n,a){var r=Ve();a=a===void 0?null:a;var s=r.memoizedState.inst;Te!==null&&a!==null&&sc(a,Te.memoizedState.deps)?r.memoizedState=bi(t,s,n,a):(le.flags|=e,r.memoizedState=bi(1|t,s,n,a))}function kh(e,t){qr(8390656,8,e,t)}function xc(e,t){Kr(2048,8,e,t)}function Pb(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=Gr(),le.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rh(e){var t=Ve().memoizedState;return Pb({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Bh(e,t){return Kr(4,2,e,t)}function Dh(e,t){return Kr(4,4,e,t)}function Oh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){n=n!=null?n.concat([e]):null,Kr(4,4,Oh.bind(null,t,e),n)}function bc(){}function Hh(e,t){var n=Ve();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&sc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Uh(e,t){var n=Ve();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&sc(t,a[1]))return a[0];if(a=e(),Na){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[a,t],a}function yc(e,t,n){return n===void 0||(En&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Lm(),le.lanes|=e,na|=e,n)}function Lh(e,t,n,a){return wt(n,t)?n:gi.current!==null?(e=yc(e,n,a),wt(e,t)||(Qe=!0),e):(En&42)===0||(En&1073741824)!==0&&(me&261930)===0?(Qe=!0,e.memoizedState=n):(e=Lm(),le.lanes|=e,na|=e,t)}function Gh(e,t,n,a,r){var s=Z.p;Z.p=s!==0&&8>s?s:8;var d=R.T,g={};R.T=g,jc(e,!1,t,n);try{var b=r(),E=R.S;if(E!==null&&E(g,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var k=Xb(b,a);Tl(e,t,k,Ct(e))}else Tl(e,t,a,Ct(e))}catch(H){Tl(e,t,{then:function(){},status:"rejected",reason:H},Ct())}finally{Z.p=s,d!==null&&g.types!==null&&(d.types=g.types),R.T=d}}function Ib(){}function vc(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=Yh(e).queue;Gh(e,r,t,te,n===null?Ib:function(){return Vh(e),n(a)})}function Yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vh(e){var t=Yh(e);t.next===null&&(t=e.alternate.memoizedState),Tl(e,t.next.queue,{},Ct())}function Sc(){return at(Kl)}function qh(){return Ve().memoizedState}function Kh(){return Ve().memoizedState}function e1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=Wn(n);var a=Fn(t,e,n);a!==null&&(pt(a,t,n),jl(a,t,n)),t={cache:Wo()},e.payload=t;return}t=t.return}}function t1(e,t,n){var a=Ct();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zr(e)?Qh(t,n):(n=Lo(e,t,n,a),n!==null&&(pt(n,e,a),Xh(n,t,a)))}function Zh(e,t,n){var a=Ct();Tl(e,t,n,a)}function Tl(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zr(e))Qh(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(r.hasEagerState=!0,r.eagerState=g,wt(g,d))return _r(e,t,r,0),Me===null&&zr(),!1}catch{}if(n=Lo(e,t,r,a),n!==null)return pt(n,e,a),Xh(n,t,a),!0}return!1}function jc(e,t,n,a){if(a={lane:2,revertLane:eu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zr(e)){if(t)throw Error(c(479))}else t=Lo(e,n,a,2),t!==null&&pt(t,e,2)}function Zr(e){var t=e.alternate;return e===le||t!==null&&t===le}function Qh(e,t){pi=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Fd(e,n)}}var Al={readContext:at,use:Yr,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Al.useEffectEvent=Le;var $h={readContext:at,use:Yr,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:kh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,qr(4194308,4,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){qr(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var a=e();if(Na){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ot();if(n!==void 0){var r=n(t);if(Na){Vn(!0);try{n(t)}finally{Vn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=t1.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,n=Zh.bind(null,le,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bc,useDeferredValue:function(e,t){var n=ot();return yc(n,e,t)},useTransition:function(){var e=gc(!1);return e=Gh.bind(null,le,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=le,r=ot();if(pe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Me===null)throw Error(c(349));(me&127)!==0||gh(a,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,kh(xh.bind(null,a,s,e),[e]),a.flags|=2048,bi(9,{destroy:void 0},ph.bind(null,a,s,n,t),null),n},useId:function(){var e=ot(),t=Me.identifierPrefix;if(pe){var n=dn,a=un;n=(a&~(1<<32-jt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=$b++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Sc,useFormState:Eh,useActionState:Eh,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=jc.bind(null,le,!0,n),n.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return ot().memoizedState=e1.bind(null,le)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((je&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},wc={readContext:at,use:Yr,useCallback:Hh,useContext:at,useEffect:xc,useImperativeHandle:Nh,useInsertionEffect:Bh,useLayoutEffect:Dh,useMemo:Uh,useReducer:Vr,useRef:Mh,useState:function(){return Vr(Tn)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Ve();return Lh(n,Te.memoizedState,e,t)},useTransition:function(){var e=Vr(Tn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:mh,useId:qh,useHostTransitionStatus:Sc,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var n=Ve();return vh(n,Te,e,t)},useMemoCache:fc,useCacheRefresh:Kh};wc.useEffectEvent=Rh;var Jh={readContext:at,use:Yr,useCallback:Hh,useContext:at,useEffect:xc,useImperativeHandle:Nh,useInsertionEffect:Bh,useLayoutEffect:Dh,useMemo:Uh,useReducer:mc,useRef:Mh,useState:function(){return mc(Tn)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Ve();return Te===null?yc(n,e,t):Lh(n,Te.memoizedState,e,t)},useTransition:function(){var e=mc(Tn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:mh,useId:qh,useHostTransitionStatus:Sc,useFormState:Ch,useActionState:Ch,useOptimistic:function(e,t){var n=Ve();return Te!==null?vh(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fc,useCacheRefresh:Kh};Jh.useEffectEvent=Rh;function zc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _c={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ct(),r=Wn(a);r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,a),t!==null&&(pt(t,e,a),jl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ct(),r=Wn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,a),t!==null&&(pt(t,e,a),jl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),a=Wn(n);a.tag=2,t!=null&&(a.callback=t),t=Fn(e,a,n),t!==null&&(pt(t,e,n),jl(t,e,n))}};function Wh(e,t,n,a,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!ml(n,a)||!ml(r,s):!0}function Fh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&_c.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Ph(e){wr(e)}function Ih(e){console.error(e)}function em(e){wr(e)}function Qr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function tm(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ec(e,t,n){return n=Wn(n),n.tag=3,n.payload={element:null},n.callback=function(){Qr(e,t)},n}function nm(e){return e=Wn(e),e.tag=3,e}function am(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=a.value;e.payload=function(){return r(s)},e.callback=function(){tm(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){tm(t,n,a),typeof r!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function n1(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ui(t,n,r,!0),n=_t.current,n!==null){switch(n.tag){case 31:case 13:return qt===null?is():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Br?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Fc(e,a,r)),!1;case 22:return n.flags|=65536,a===Br?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Fc(e,a,r)),!1}throw Error(c(435,n.tag))}return Fc(e,a,r),is(),!1}if(pe)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Zo&&(e=Error(c(422),{cause:a}),xl(Lt(e,n)))):(a!==Zo&&(t=Error(c(423),{cause:a}),xl(Lt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Lt(a,n),r=Ec(e.stateNode,a,r),nc(e,r),Ge!==4&&(Ge=2)),!1;var s=Error(c(520),{cause:a});if(s=Lt(s,n),Nl===null?Nl=[s]:Nl.push(s),Ge!==4&&(Ge=2),t===null)return!0;a=Lt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Ec(n.stateNode,a,e),nc(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(aa===null||!aa.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=nm(r),am(r,e,n,a),nc(n,r),!1}n=n.return}while(n!==null);return!1}var Tc=Error(c(461)),Qe=!1;function it(e,t,n,a){t.child=e===null?sh(t,null,n,a):Oa(t,e.child,n,a)}function im(e,t,n,a,r){n=n.render;var s=t.ref;if("ref"in a){var d={};for(var g in a)g!=="ref"&&(d[g]=a[g])}else d=a;return ka(t),a=oc(e,t,n,d,s,r),g=cc(),e!==null&&!Qe?(uc(e,t,r),An(e,t,r)):(pe&&g&&qo(t),t.flags|=1,it(e,t,a,r),t.child)}function lm(e,t,n,a,r){if(e===null){var s=n.type;return typeof s=="function"&&!Go(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,rm(e,t,s,a,r)):(e=Tr(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Oc(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(d,a)&&e.ref===t.ref)return An(e,t,r)}return t.flags|=1,e=jn(s,a),e.ref=t.ref,e.return=t,t.child=e}function rm(e,t,n,a,r){if(e!==null){var s=e.memoizedProps;if(ml(s,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=s,Oc(e,r))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,An(e,t,r)}return Ac(e,t,n,a,r)}function sm(e,t,n,a){var r=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~s}else a=0,t.child=null;return om(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kr(t,s!==null?s.cachePool:null),s!==null?uh(t,s):ic(),dh(t);else return a=t.lanes=536870912,om(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(kr(t,s.cachePool),uh(t,s),In(),t.memoizedState=null):(e!==null&&kr(t,null),ic(),In());return it(e,t,r,n),t.child}function Cl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function om(e,t,n,a,r){var s=Po();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&kr(t,null),ic(),dh(t),e!==null&&ui(e,t,a,!0),t.childLanes=r,null}function Xr(e,t){return t=Jr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cm(e,t,n){return Oa(t,e.child,null,n),e=Xr(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function a1(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(a.mode==="hidden")return e=Xr(t,a),t.lanes=536870912,Cl(null,e);if(rc(t),(e=Re)?(e=Sg(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Qf(e),n.return=t,t.child=n,nt=t,Re=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Xr(t,a)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(rc(t),r)if(t.flags&256)t.flags&=-257,t=cm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Qe||ui(e,t,n,!1),r=(n&e.childLanes)!==0,Qe||r){if(a=Me,a!==null&&(d=Pd(a,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,Ta(e,d),pt(a,e,d),Tc;is(),t=cm(e,t,n)}else e=s.treeContext,Re=Kt(d.nextSibling),nt=t,pe=!0,Qn=null,Vt=!1,e!==null&&Jf(t,e),t=Xr(t,a),t.flags|=4096;return t}return e=jn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function $r(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ac(e,t,n,a,r){return ka(t),n=oc(e,t,n,a,void 0,r),a=cc(),e!==null&&!Qe?(uc(e,t,r),An(e,t,r)):(pe&&a&&qo(t),t.flags|=1,it(e,t,n,r),t.child)}function um(e,t,n,a,r,s){return ka(t),t.updateQueue=null,n=hh(t,a,n,r),fh(e),a=cc(),e!==null&&!Qe?(uc(e,t,s),An(e,t,s)):(pe&&a&&qo(t),t.flags|=1,it(e,t,n,s),t.child)}function dm(e,t,n,a,r){if(ka(t),t.stateNode===null){var s=ri,d=n.contextType;typeof d=="object"&&d!==null&&(s=at(d)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_c,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ec(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?at(d):ri,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(zc(t,n,d,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&_c.enqueueReplaceState(s,s.state,null),zl(t,a,s,r),wl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,b=Ha(n,g);s.props=b;var E=s.context,k=n.contextType;d=ri,typeof k=="object"&&k!==null&&(d=at(k));var H=n.getDerivedStateFromProps;k=typeof H=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,k||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||E!==d)&&Fh(t,s,a,d),Jn=!1;var A=t.memoizedState;s.state=A,zl(t,a,s,r),wl(),E=t.memoizedState,g||A!==E||Jn?(typeof H=="function"&&(zc(t,n,H,a),E=t.memoizedState),(b=Jn||Wh(t,n,b,a,A,E,d))?(k||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),s.props=a,s.state=E,s.context=d,a=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,tc(e,t),d=t.memoizedProps,k=Ha(n,d),s.props=k,H=t.pendingProps,A=s.context,E=n.contextType,b=ri,typeof E=="object"&&E!==null&&(b=at(E)),g=n.getDerivedStateFromProps,(E=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==H||A!==b)&&Fh(t,s,a,b),Jn=!1,A=t.memoizedState,s.state=A,zl(t,a,s,r),wl();var C=t.memoizedState;d!==H||A!==C||Jn||e!==null&&e.dependencies!==null&&Cr(e.dependencies)?(typeof g=="function"&&(zc(t,n,g,a),C=t.memoizedState),(k=Jn||Wh(t,n,k,a,A,C,b)||e!==null&&e.dependencies!==null&&Cr(e.dependencies))?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,C,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,C,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=C),s.props=a,s.state=C,s.context=b,a=k):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,$r(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Oa(t,e.child,null,r),t.child=Oa(t,null,n,r)):it(e,t,n,r),t.memoizedState=s.state,e=t.child):e=An(e,t,r),e}function fm(e,t,n,a){return Ca(),t.flags|=256,it(e,t,n,a),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(e){return{baseLanes:e,cachePool:th()}}function kc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function hm(e,t,n){var a=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(r?Pn(t):In(),(e=Re)?(e=Sg(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Qf(e),n.return=t,t.child=n,nt=t,Re=null)):e=null,e===null)throw Xn(t);return hu(e)?t.lanes=32:t.lanes=536870912,null}var g=a.children;return a=a.fallback,r?(In(),r=t.mode,g=Jr({mode:"hidden",children:g},r),a=Aa(a,r,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,a=t.child,a.memoizedState=Mc(n),a.childLanes=kc(e,d,n),t.memoizedState=Cc,Cl(null,a)):(Pn(t),Rc(t,g))}var b=e.memoizedState;if(b!==null&&(g=b.dehydrated,g!==null)){if(s)t.flags&256?(Pn(t),t.flags&=-257,t=Bc(e,t,n)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),g=a.fallback,r=t.mode,a=Jr({mode:"visible",children:a.children},r),g=Aa(g,r,n,null),g.flags|=2,a.return=t,g.return=t,a.sibling=g,t.child=a,Oa(t,e.child,null,n),a=t.child,a.memoizedState=Mc(n),a.childLanes=kc(e,d,n),t.memoizedState=Cc,t=Cl(null,a));else if(Pn(t),hu(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var E=d.dgst;d=E,a=Error(c(419)),a.stack="",a.digest=d,xl({value:a,source:null,stack:null}),t=Bc(e,t,n)}else if(Qe||ui(e,t,n,!1),d=(n&e.childLanes)!==0,Qe||d){if(d=Me,d!==null&&(a=Pd(d,n),a!==0&&a!==b.retryLane))throw b.retryLane=a,Ta(e,a),pt(d,e,a),Tc;fu(g)||is(),t=Bc(e,t,n)}else fu(g)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Re=Kt(g.nextSibling),nt=t,pe=!0,Qn=null,Vt=!1,e!==null&&Jf(t,e),t=Rc(t,a.children),t.flags|=4096);return t}return r?(In(),g=a.fallback,r=t.mode,b=e.child,E=b.sibling,a=jn(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,E!==null?g=jn(E,g):(g=Aa(g,r,n,null),g.flags|=2),g.return=t,a.return=t,a.sibling=g,t.child=a,Cl(null,a),a=t.child,g=e.child.memoizedState,g===null?g=Mc(n):(r=g.cachePool,r!==null?(b=Ke._currentValue,r=r.parent!==b?{parent:b,pool:b}:r):r=th(),g={baseLanes:g.baseLanes|n,cachePool:r}),a.memoizedState=g,a.childLanes=kc(e,d,n),t.memoizedState=Cc,Cl(e.child,a)):(Pn(t),n=e.child,e=n.sibling,n=jn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Rc(e,t){return t=Jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jr(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function Bc(e,t,n){return Oa(t,e.child,null,n),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),$o(e.return,t,n)}function Dc(e,t,n,a,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function gm(e,t,n){var a=t.pendingProps,r=a.revealOrder,s=a.tail;a=a.children;var d=Ye.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,Q(Ye,d),it(e,t,a,n),a=pe?pl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mm(e,n,t);else if(e.tag===19)mm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Hr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Dc(t,!1,r,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Hr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Dc(t,!0,n,null,s,a);break;case"together":Dc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),na|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cr(e)))}function i1(e,t,n){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),$n(t,Ke,e.memoizedState.cache),Ca();break;case 27:case 5:sn(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,rc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Pn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?hm(e,t,n):(Pn(t),e=An(e,t,n),e!==null?e.sibling:null);Pn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ui(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return gm(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(Ye,Ye.current),a)break;return null;case 22:return t.lanes=0,sm(e,t,n,t.pendingProps);case 24:$n(t,Ke,e.memoizedState.cache)}return An(e,t,n)}function pm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Oc(e,n)&&(t.flags&128)===0)return Qe=!1,i1(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,pe&&(t.flags&1048576)!==0&&$f(t,pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ba(t.elementType),t.type=e,typeof e=="function")Go(e)?(a=Ha(e,a),t.tag=1,t=dm(null,t,e,a,n)):(t.tag=0,t=Ac(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===W){t.tag=11,t=im(null,t,e,a,n);break e}else if(r===U){t.tag=14,t=lm(null,t,e,a,n);break e}}throw t=ct(e)||e,Error(c(306,t,""))}}return t;case 0:return Ac(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Ha(a,t.pendingProps),dm(e,t,a,r,n);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var s=t.memoizedState;r=s.element,tc(e,t),zl(t,a,null,n);var d=t.memoizedState;if(a=d.cache,$n(t,Ke,a),a!==s.cache&&Jo(t,[Ke],n,!0),wl(),a=d.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=fm(e,t,a,n);break e}else if(a!==r){r=Lt(Error(c(424)),t),xl(r),t=fm(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Kt(e.firstChild),nt=t,pe=!0,Qn=null,Vt=!0,n=sh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ca(),a===r){t=An(e,t,n);break e}it(e,t,a,n)}t=t.child}return t;case 26:return $r(e,t),e===null?(n=Tg(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,a=ds(se.current).createElement(n),a[tt]=t,a[ut]=e,lt(a,n,e),Fe(a),t.stateNode=a):t.memoizedState=Tg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sn(t),e===null&&pe&&(a=t.stateNode=zg(t.type,t.pendingProps,se.current),nt=t,Vt=!0,r=Re,sa(t.type)?(mu=r,Re=Kt(a.firstChild)):Re=r),it(e,t,t.pendingProps.children,n),$r(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((r=a=Re)&&(a=D1(a,t.type,t.pendingProps,Vt),a!==null?(t.stateNode=a,nt=t,Re=Kt(a.firstChild),Vt=!1,r=!0):r=!1),r||Xn(t)),sn(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,cu(r,s)?a=null:d!==null&&cu(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=oc(e,t,Jb,null,null,n),Kl._currentValue=r),$r(e,t),it(e,t,a,n),t.child;case 6:return e===null&&pe&&((e=n=Re)&&(n=O1(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,nt=t,Re=null,e=!0):e=!1),e||Xn(t)),null;case 13:return hm(e,t,n);case 4:return qe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Oa(t,null,a,n):it(e,t,a,n),t.child;case 11:return im(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,$n(t,t.type,a.value),it(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ka(t),r=at(r),a=a(r),t.flags|=1,it(e,t,a,n),t.child;case 14:return lm(e,t,t.type,t.pendingProps,n);case 15:return rm(e,t,t.type,t.pendingProps,n);case 19:return gm(e,t,n);case 31:return a1(e,t,n);case 22:return sm(e,t,n,t.pendingProps);case 24:return ka(t),a=at(Ke),e===null?(r=Po(),r===null&&(r=Me,s=Wo(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:a,cache:r},ec(t),$n(t,Ke,r)):((e.lanes&n)!==0&&(tc(e,t),zl(t,null,null,n),wl()),r=e.memoizedState,s=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),$n(t,Ke,a)):(a=s.cache,$n(t,Ke,a),a!==r.cache&&Jo(t,[Ke],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Cn(e){e.flags|=4}function Nc(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(qm())e.flags|=8192;else throw Da=Br,Io}else e.flags&=-16777217}function xm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rg(t))if(qm())e.flags|=8192;else throw Da=Br,Io}function Wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jd():536870912,e.lanes|=t,ji|=t)}function Ml(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function l1(e,t,n){var a=t.pendingProps;switch(Ko(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_n(Ke),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ci(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qo())),Be(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Cn(t),s!==null?(Be(t),xm(t,s)):(Be(t),Nc(t,r,null,a,n))):s?s!==e.memoizedState?(Cn(t),Be(t),xm(t,s)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Cn(t),Be(t),Nc(t,r,e,a,n)),null;case 27:if(on(t),n=se.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Be(t),null}e=X.current,ci(t)?Wf(t):(e=zg(r,a,n),t.stateNode=e,Cn(t))}return Be(t),null;case 5:if(on(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Be(t),null}if(s=X.current,ci(t))Wf(t);else{var d=ds(se.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?d.createElement(r,{is:a.is}):d.createElement(r)}}s[tt]=t,s[ut]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(lt(s,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Cn(t)}}return Be(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=se.current,ci(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=nt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[tt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||hg(e.nodeValue,n)),e||Xn(t,!0)}else e=ds(e).createTextNode(a),e[tt]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=ci(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[tt]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ci(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[tt]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),r=!1}else r=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wr(t,t.updateQueue),Be(t),null);case 4:return Ee(),e===null&&iu(t.stateNode.containerInfo),Be(t),null;case 10:return _n(t.type),Be(t),null;case 19:if(B(Ye),a=t.memoizedState,a===null)return Be(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Ml(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Hr(e),s!==null){for(t.flags|=128,Ml(a,!1),e=s.updateQueue,t.updateQueue=e,Wr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Zf(n,e),n=n.sibling;return Q(Ye,Ye.current&1|2),pe&&wn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&vt()>ts&&(t.flags|=128,r=!0,Ml(a,!1),t.lanes=4194304)}else{if(!r)if(e=Hr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Wr(t,e),Ml(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!pe)return Be(t),null}else 2*vt()-a.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,r=!0,Ml(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=vt(),e.sibling=null,n=Ye.current,Q(Ye,r?n&1|2:n&1),pe&&wn(t,a.treeForkCount),e):(Be(t),null);case 22:case 23:return Et(t),lc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Wr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&B(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_n(Ke),Be(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function r1(e,t){switch(Ko(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(Ke),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return on(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(c(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Ye),null;case 4:return Ee(),null;case 10:return _n(t.type),null;case 22:case 23:return Et(t),lc(),e!==null&&B(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(Ke),null;case 25:return null;default:return null}}function bm(e,t){switch(Ko(t),t.tag){case 3:_n(Ke),Ee();break;case 26:case 27:case 5:on(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:B(Ye);break;case 10:_n(t.type);break;case 22:case 23:Et(t),lc(),e!==null&&B(Ra);break;case 24:_n(Ke)}}function kl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var s=n.create,d=n.inst;a=s(),d.destroy=a}n=n.next}while(n!==r)}}catch(g){_e(t,t.return,g)}}function ea(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&e)===e){var d=a.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var b=n,E=g;try{E()}catch(k){_e(r,b,k)}}}a=a.next}while(a!==s)}}catch(k){_e(t,t.return,k)}}function ym(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ch(t,n)}catch(a){_e(e,e.return,a)}}}function vm(e,t,n){n.props=Ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function Rl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){_e(e,t,r)}}function fn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Sm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function Hc(e,t,n){try{var a=e.stateNode;A1(a,e.type,n,t),a[ut]=t}catch(r){_e(e,e.return,r)}}function jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vn));else if(a!==4&&(a===27&&sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Lc(e,t,n),e=e.sibling;e!==null;)Lc(e,t,n),e=e.sibling}function Fr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}function wm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);lt(t,a,n),t[tt]=e,t[ut]=n}catch(s){_e(e,e.return,s)}}var Mn=!1,Xe=!1,Gc=!1,zm=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function s1(e,t){if(e=e.containerInfo,su=bs,e=Nf(e),Bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,b=-1,E=0,k=0,H=e,A=null;t:for(;;){for(var C;H!==n||r!==0&&H.nodeType!==3||(g=d+r),H!==s||a!==0&&H.nodeType!==3||(b=d+a),H.nodeType===3&&(d+=H.nodeValue.length),(C=H.firstChild)!==null;)A=H,H=C;for(;;){if(H===e)break t;if(A===n&&++E===r&&(g=d),A===s&&++k===a&&(b=d),(C=H.nextSibling)!==null)break;H=A,A=H.parentNode}H=C}n=g===-1||b===-1?null:{start:g,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},bs=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var J=Ha(n.type,r);e=a.getSnapshotBeforeUpdate(J,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){_e(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function _m(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Rn(e,n),a&4&&kl(5,n);break;case 1:if(Rn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){_e(n,n.return,d)}else{var r=Ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){_e(n,n.return,d)}}a&64&&ym(n),a&512&&Rl(n,n.return);break;case 3:if(Rn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ch(e,t)}catch(d){_e(n,n.return,d)}}break;case 27:t===null&&a&4&&wm(n);case 26:case 5:Rn(e,n),t===null&&a&4&&Sm(n),a&512&&Rl(n,n.return);break;case 12:Rn(e,n);break;case 31:Rn(e,n),a&4&&Am(e,n);break;case 13:Rn(e,n),a&4&&Cm(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=p1.bind(null,n),N1(e,n))));break;case 22:if(a=n.memoizedState!==null||Mn,!a){t=t!==null&&t.memoizedState!==null||Xe,r=Mn;var s=Xe;Mn=a,(Xe=t)&&!s?Bn(e,n,(n.subtreeFlags&8772)!==0):Rn(e,n),Mn=r,Xe=s}break;case 30:break;default:Rn(e,n)}}function Em(e){var t=e.alternate;t!==null&&(e.alternate=null,Em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ft=!1;function kn(e,t,n){for(n=n.child;n!==null;)Tm(e,t,n),n=n.sibling}function Tm(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 26:Xe||fn(n,t),kn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||fn(n,t);var a=Oe,r=ft;sa(n.type)&&(Oe=n.stateNode,ft=!1),kn(e,t,n),Yl(n.stateNode),Oe=a,ft=r;break;case 5:Xe||fn(n,t);case 6:if(a=Oe,r=ft,Oe=null,kn(e,t,n),Oe=a,ft=r,Oe!==null)if(ft)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode)}catch(s){_e(n,t,s)}else try{Oe.removeChild(n.stateNode)}catch(s){_e(n,t,s)}break;case 18:Oe!==null&&(ft?(e=Oe,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Mi(e)):yg(Oe,n.stateNode));break;case 4:a=Oe,r=ft,Oe=n.stateNode.containerInfo,ft=!0,kn(e,t,n),Oe=a,ft=r;break;case 0:case 11:case 14:case 15:ea(2,n,t),Xe||ea(4,n,t),kn(e,t,n);break;case 1:Xe||(fn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&vm(n,t,a)),kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:Xe=(a=Xe)||n.memoizedState!==null,kn(e,t,n),Xe=a;break;default:kn(e,t,n)}}function Am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mi(e)}catch(n){_e(t,t.return,n)}}}function Cm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mi(e)}catch(n){_e(t,t.return,n)}}function o1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zm),t;default:throw Error(c(435,e.tag))}}function Pr(e,t){var n=o1(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=x1.bind(null,e,a);a.then(r,r)}})}function ht(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(sa(g.type)){Oe=g.stateNode,ft=!1;break e}break;case 5:Oe=g.stateNode,ft=!1;break e;case 3:case 4:Oe=g.stateNode.containerInfo,ft=!0;break e}g=g.return}if(Oe===null)throw Error(c(160));Tm(s,d,r),Oe=null,ft=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mm(t,e),t=t.sibling}var Ft=null;function Mm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),mt(e),a&4&&(ea(3,e,e.return),kl(3,e),ea(5,e,e.return));break;case 1:ht(t,e),mt(e),a&512&&(Xe||n===null||fn(n,n.return)),a&64&&Mn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Ft;if(ht(t,e),mt(e),a&512&&(Xe||n===null||fn(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":s=r.getElementsByTagName("title")[0],(!s||s[ll]||s[tt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(a),r.head.insertBefore(s,r.querySelector("head > title"))),lt(s,a,n),s[tt]=e,Fe(s),a=s;break e;case"link":var d=Mg("link","href",r).get(a+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}s=r.createElement(a),lt(s,a,n),r.head.appendChild(s);break;case"meta":if(d=Mg("meta","content",r).get(a+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}s=r.createElement(a),lt(s,a,n),r.head.appendChild(s);break;default:throw Error(c(468,a))}s[tt]=e,Fe(s),a=s}e.stateNode=a}else kg(r,e.type,e.stateNode);else e.stateNode=Cg(r,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?kg(r,e.type,e.stateNode):Cg(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Hc(e,e.memoizedProps,n.memoizedProps)}break;case 27:ht(t,e),mt(e),a&512&&(Xe||n===null||fn(n,n.return)),n!==null&&a&4&&Hc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ht(t,e),mt(e),a&512&&(Xe||n===null||fn(n,n.return)),e.flags&32){r=e.stateNode;try{Ia(r,"")}catch(J){_e(e,e.return,J)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,Hc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(Gc=!0);break;case 6:if(ht(t,e),mt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(J){_e(e,e.return,J)}}break;case 3:if(ms=null,r=Ft,Ft=fs(t.containerInfo),ht(t,e),Ft=r,mt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(J){_e(e,e.return,J)}Gc&&(Gc=!1,km(e));break;case 4:a=Ft,Ft=fs(e.stateNode.containerInfo),ht(t,e),mt(e),Ft=a;break;case 12:ht(t,e),mt(e);break;case 31:ht(t,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pr(e,a)));break;case 13:ht(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(es=vt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pr(e,a)));break;case 22:r=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,E=Mn,k=Xe;if(Mn=E||r,Xe=k||b,ht(t,e),Xe=k,Mn=E,mt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||b||Mn||Xe||Ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(s=b.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=b.stateNode;var H=b.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null;g.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(J){_e(b,b.return,J)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=r?"":b.memoizedProps}catch(J){_e(b,b.return,J)}}}else if(t.tag===18){if(n===null){b=t;try{var C=b.stateNode;r?vg(C,!0):vg(b.stateNode,!1)}catch(J){_e(b,b.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Pr(e,n))));break;case 19:ht(t,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pr(e,a)));break;case 30:break;case 21:break;default:ht(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(jm(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,s=Uc(e);Fr(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(Ia(d,""),n.flags&=-33);var g=Uc(e);Fr(e,g,d);break;case 3:case 4:var b=n.stateNode.containerInfo,E=Uc(e);Lc(e,E,b);break;default:throw Error(c(161))}}catch(k){_e(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;km(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_m(e,t.alternate,t),t=t.sibling}function Ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ea(4,t,t.return),Ua(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vm(t,t.return,n),Ua(t);break;case 27:Yl(t.stateNode);case 26:case 5:fn(t,t.return),Ua(t);break;case 22:t.memoizedState===null&&Ua(t);break;case 30:Ua(t);break;default:Ua(t)}e=e.sibling}}function Bn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Bn(r,s,n),kl(4,s);break;case 1:if(Bn(r,s,n),a=s,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(E){_e(a,a.return,E)}if(a=s,r=a.updateQueue,r!==null){var g=a.stateNode;try{var b=r.shared.hiddenCallbacks;if(b!==null)for(r.shared.hiddenCallbacks=null,r=0;r<b.length;r++)oh(b[r],g)}catch(E){_e(a,a.return,E)}}n&&d&64&&ym(s),Rl(s,s.return);break;case 27:wm(s);case 26:case 5:Bn(r,s,n),n&&a===null&&d&4&&Sm(s),Rl(s,s.return);break;case 12:Bn(r,s,n);break;case 31:Bn(r,s,n),n&&d&4&&Am(r,s);break;case 13:Bn(r,s,n),n&&d&4&&Cm(r,s);break;case 22:s.memoizedState===null&&Bn(r,s,n),Rl(s,s.return);break;case 30:break;default:Bn(r,s,n)}t=t.sibling}}function Yc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bl(n))}function Vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e))}function Pt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rm(e,t,n,a),t=t.sibling}function Rm(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,a),r&2048&&kl(9,t);break;case 1:Pt(e,t,n,a);break;case 3:Pt(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e)));break;case 12:if(r&2048){Pt(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){_e(t,t.return,b)}}else Pt(e,t,n,a);break;case 31:Pt(e,t,n,a);break;case 13:Pt(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Pt(e,t,n,a):Bl(e,t):s._visibility&2?Pt(e,t,n,a):(s._visibility|=2,yi(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Yc(d,t);break;case 24:Pt(e,t,n,a),r&2048&&Vc(t.alternate,t);break;default:Pt(e,t,n,a)}}function yi(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,g=n,b=a,E=d.flags;switch(d.tag){case 0:case 11:case 15:yi(s,d,g,b,r),kl(8,d);break;case 23:break;case 22:var k=d.stateNode;d.memoizedState!==null?k._visibility&2?yi(s,d,g,b,r):Bl(s,d):(k._visibility|=2,yi(s,d,g,b,r)),r&&E&2048&&Yc(d.alternate,d);break;case 24:yi(s,d,g,b,r),r&&E&2048&&Vc(d.alternate,d);break;default:yi(s,d,g,b,r)}t=t.sibling}}function Bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Bl(n,a),r&2048&&Yc(a.alternate,a);break;case 24:Bl(n,a),r&2048&&Vc(a.alternate,a);break;default:Bl(n,a)}t=t.sibling}}var Dl=8192;function vi(e,t,n){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)Bm(e,t,n),e=e.sibling}function Bm(e,t,n){switch(e.tag){case 26:vi(e,t,n),e.flags&Dl&&e.memoizedState!==null&&$1(n,Ft,e.memoizedState,e.memoizedProps);break;case 5:vi(e,t,n);break;case 3:case 4:var a=Ft;Ft=fs(e.stateNode.containerInfo),vi(e,t,n),Ft=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Dl,Dl=16777216,vi(e,t,n),Dl=a):vi(e,t,n));break;default:vi(e,t,n)}}function Dm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Nm(a,e)}Dm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Om(e),e=e.sibling}function Om(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&ea(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ir(e)):Ol(e);break;default:Ol(e)}}function Ir(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Nm(a,e)}Dm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),Ir(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ir(t));break;default:Ir(t)}e=e.sibling}}function Nm(e,t){for(;Pe!==null;){var n=Pe;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:bl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Pe=a;else e:for(n=e;Pe!==null;){a=Pe;var r=a.sibling,s=a.return;if(Em(a),a===n){Pe=null;break e}if(r!==null){r.return=s,Pe=r;break e}Pe=s}}}var c1={getCacheForType:function(e){var t=at(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return at(Ke).controller.signal}},u1=typeof WeakMap=="function"?WeakMap:Map,je=0,Me=null,fe=null,me=0,ze=0,Tt=null,ta=!1,Si=!1,qc=!1,Dn=0,Ge=0,na=0,La=0,Kc=0,At=0,ji=0,Nl=null,gt=null,Zc=!1,es=0,Hm=0,ts=1/0,ns=null,aa=null,Je=0,ia=null,wi=null,On=0,Qc=0,Xc=null,Um=null,Hl=0,$c=null;function Ct(){return(je&2)!==0&&me!==0?me&-me:R.T!==null?eu():Id()}function Lm(){if(At===0)if((me&536870912)===0||pe){var e=ur;ur<<=1,(ur&3932160)===0&&(ur=262144),At=e}else At=536870912;return e=_t.current,e!==null&&(e.flags|=32),At}function pt(e,t,n){(e===Me&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(zi(e,0),la(e,me,At,!1)),il(e,n),((je&2)===0||e!==Me)&&(e===Me&&((je&2)===0&&(La|=n),Ge===4&&la(e,me,At,!1)),hn(e))}function Gm(e,t,n){if((je&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||al(e,t),r=a?h1(e,t):Wc(e,t,!0),s=a;do{if(r===0){Si&&!a&&la(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!d1(n)){r=Wc(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=Nl;var b=g.current.memoizedState.isDehydrated;if(b&&(zi(g,d).flags|=256),d=Wc(g,d,!1),d!==2){if(qc&&!b){g.errorRecoveryDisabledLanes|=s,La|=s,r=4;break e}s=gt,gt=r,s!==null&&(gt===null?gt=s:gt.push.apply(gt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){zi(e,0),la(e,t,0,!0);break}e:{switch(a=e,s=r,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:la(a,t,At,!ta);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=es+300-vt(),10<r)){if(la(a,t,At,!ta),fr(a,0,!0)!==0)break e;On=t,a.timeoutHandle=xg(Ym.bind(null,a,n,gt,ns,Zc,t,At,La,ji,ta,s,"Throttled",-0,0),r);break e}Ym(a,n,gt,ns,Zc,t,At,La,ji,ta,s,null,-0,0)}}break}while(!0);hn(e)}function Ym(e,t,n,a,r,s,d,g,b,E,k,H,A,C){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},Bm(t,s,H);var J=(s&62914560)===s?es-vt():(s&4194048)===s?Hm-vt():0;if(J=J1(H,J),J!==null){On=s,e.cancelPendingCommit=J(Jm.bind(null,e,t,s,n,a,r,d,g,b,k,H,null,A,C)),la(e,s,d,!E);return}}Jm(e,t,s,n,a,r,d,g,b)}function d1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],s=r.getSnapshot;r=r.value;try{if(!wt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,n,a){t&=~Kc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var s=31-jt(r),d=1<<s;a[s]=-1,r&=~d}n!==0&&Wd(e,n,t)}function as(){return(je&6)===0?(Ul(0),!1):!0}function Jc(){if(fe!==null){if(ze===0)var e=fe.return;else e=fe,zn=Ma=null,dc(e),mi=null,vl=0,e=fe;for(;e!==null;)bm(e.alternate,e),e=e.return;fe=null}}function zi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,k1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,Jc(),Me=e,fe=n=jn(e.current,null),me=t,ze=0,Tt=null,ta=!1,Si=al(e,t),qc=!1,ji=At=Kc=La=na=Ge=0,gt=Nl=null,Zc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-jt(a),s=1<<r;t|=e[r],a&=~s}return Dn=t,zr(),n}function Vm(e,t){le=null,R.H=Al,t===hi||t===Rr?(t=ih(),ze=3):t===Io?(t=ih(),ze=4):ze=t===Tc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,fe===null&&(Ge=1,Qr(e,Lt(t,e.current)))}function qm(){var e=_t.current;return e===null?!0:(me&4194048)===me?qt===null:(me&62914560)===me||(me&536870912)!==0?e===qt:!1}function Km(){var e=R.H;return R.H=Al,e===null?Al:e}function Zm(){var e=R.A;return R.A=c1,e}function is(){Ge=4,ta||(me&4194048)!==me&&_t.current!==null||(Si=!0),(na&134217727)===0&&(La&134217727)===0||Me===null||la(Me,me,At,!1)}function Wc(e,t,n){var a=je;je|=2;var r=Km(),s=Zm();(Me!==e||me!==t)&&(ns=null,zi(e,t)),t=!1;var d=Ge;e:do try{if(ze!==0&&fe!==null){var g=fe,b=Tt;switch(ze){case 8:Jc(),d=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var E=ze;if(ze=0,Tt=null,_i(e,g,b,E),n&&Si){d=0;break e}break;default:E=ze,ze=0,Tt=null,_i(e,g,b,E)}}f1(),d=Ge;break}catch(k){Vm(e,k)}while(!0);return t&&e.shellSuspendCounter++,zn=Ma=null,je=a,R.H=r,R.A=s,fe===null&&(Me=null,me=0,zr()),d}function f1(){for(;fe!==null;)Qm(fe)}function h1(e,t){var n=je;je|=2;var a=Km(),r=Zm();Me!==e||me!==t?(ns=null,ts=vt()+500,zi(e,t)):Si=al(e,t);e:do try{if(ze!==0&&fe!==null){t=fe;var s=Tt;t:switch(ze){case 1:ze=0,Tt=null,_i(e,t,s,1);break;case 2:case 9:if(nh(s)){ze=0,Tt=null,Xm(t);break}t=function(){ze!==2&&ze!==9||Me!==e||(ze=7),hn(e)},s.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:nh(s)?(ze=0,Tt=null,Xm(t)):(ze=0,Tt=null,_i(e,t,s,7));break;case 5:var d=null;switch(fe.tag){case 26:d=fe.memoizedState;case 5:case 27:var g=fe;if(d?Rg(d):g.stateNode.complete){ze=0,Tt=null;var b=g.sibling;if(b!==null)fe=b;else{var E=g.return;E!==null?(fe=E,ls(E)):fe=null}break t}}ze=0,Tt=null,_i(e,t,s,5);break;case 6:ze=0,Tt=null,_i(e,t,s,6);break;case 8:Jc(),Ge=6;break e;default:throw Error(c(462))}}m1();break}catch(k){Vm(e,k)}while(!0);return zn=Ma=null,R.H=a,R.A=r,je=n,fe!==null?0:(Me=null,me=0,zr(),Ge)}function m1(){for(;fe!==null&&!Hx();)Qm(fe)}function Qm(e){var t=pm(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?ls(e):fe=t}function Xm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=um(n,t,t.pendingProps,t.type,void 0,me);break;case 11:t=um(n,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:dc(t);default:bm(n,t),t=fe=Zf(t,Dn),t=pm(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?ls(e):fe=t}function _i(e,t,n,a){zn=Ma=null,dc(t),mi=null,vl=0;var r=t.return;try{if(n1(e,r,t,n,me)){Ge=1,Qr(e,Lt(n,e.current)),fe=null;return}}catch(s){if(r!==null)throw fe=r,s;Ge=1,Qr(e,Lt(n,e.current)),fe=null;return}t.flags&32768?(pe||a===1?e=!0:Si||(me&536870912)!==0?e=!1:(ta=e=!0,(a===2||a===9||a===3||a===6)&&(a=_t.current,a!==null&&a.tag===13&&(a.flags|=16384))),$m(t,e)):ls(t)}function ls(e){var t=e;do{if((t.flags&32768)!==0){$m(t,ta);return}e=t.return;var n=l1(t.alternate,t,Dn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ge===0&&(Ge=5)}function $m(e,t){do{var n=r1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ge=6,fe=null}function Jm(e,t,n,a,r,s,d,g,b){e.cancelPendingCommit=null;do rs();while(Je!==0);if((je&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Uo,Xx(e,n,s,d,g,b),e===Me&&(fe=Me=null,me=0),wi=t,ia=e,On=n,Qc=s,Xc=r,Um=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,b1(or,function(){return eg(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,r=Z.p,Z.p=2,d=je,je|=4;try{s1(e,t,n)}finally{je=d,Z.p=r,R.T=a}}Je=1,Wm(),Fm(),Pm()}}function Wm(){if(Je===1){Je=0;var e=ia,t=wi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var a=Z.p;Z.p=2;var r=je;je|=4;try{Mm(t,e);var s=ou,d=Nf(e.containerInfo),g=s.focusedElem,b=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&Of(g.ownerDocument.documentElement,g)){if(b!==null&&Bo(g)){var E=b.start,k=b.end;if(k===void 0&&(k=E),"selectionStart"in g)g.selectionStart=E,g.selectionEnd=Math.min(k,g.value.length);else{var H=g.ownerDocument||document,A=H&&H.defaultView||window;if(A.getSelection){var C=A.getSelection(),J=g.textContent.length,ne=Math.min(b.start,J),Ce=b.end===void 0?ne:Math.min(b.end,J);!C.extend&&ne>Ce&&(d=Ce,Ce=ne,ne=d);var z=Df(g,ne),v=Df(g,Ce);if(z&&v&&(C.rangeCount!==1||C.anchorNode!==z.node||C.anchorOffset!==z.offset||C.focusNode!==v.node||C.focusOffset!==v.offset)){var _=H.createRange();_.setStart(z.node,z.offset),C.removeAllRanges(),ne>Ce?(C.addRange(_),C.extend(v.node,v.offset)):(_.setEnd(v.node,v.offset),C.addRange(_))}}}}for(H=[],C=g;C=C.parentNode;)C.nodeType===1&&H.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<H.length;g++){var D=H[g];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}bs=!!su,ou=su=null}finally{je=r,Z.p=a,R.T=n}}e.current=t,Je=2}}function Fm(){if(Je===2){Je=0;var e=ia,t=wi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var a=Z.p;Z.p=2;var r=je;je|=4;try{_m(e,t.alternate,t)}finally{je=r,Z.p=a,R.T=n}}Je=3}}function Pm(){if(Je===4||Je===3){Je=0,Ux();var e=ia,t=wi,n=On,a=Um;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,wi=ia=null,Im(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(aa=null),mo(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(nl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=R.T,r=Z.p,Z.p=2,R.T=null;try{for(var s=e.onRecoverableError,d=0;d<a.length;d++){var g=a[d];s(g.value,{componentStack:g.stack})}}finally{R.T=t,Z.p=r}}(On&3)!==0&&rs(),hn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===$c?Hl++:(Hl=0,$c=e):Hl=0,Ul(0)}}function Im(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bl(t)))}function rs(){return Wm(),Fm(),Pm(),eg()}function eg(){if(Je!==5)return!1;var e=ia,t=Qc;Qc=0;var n=mo(On),a=R.T,r=Z.p;try{Z.p=32>n?32:n,R.T=null,n=Xc,Xc=null;var s=ia,d=On;if(Je=0,wi=ia=null,On=0,(je&6)!==0)throw Error(c(331));var g=je;if(je|=4,Om(s.current),Rm(s,s.current,d,n),je=g,Ul(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(nl,s)}catch{}return!0}finally{Z.p=r,R.T=a,Im(e,t)}}function tg(e,t,n){t=Lt(n,t),t=Ec(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(il(e,2),hn(e))}function _e(e,t,n){if(e.tag===3)tg(e,e,n);else for(;t!==null;){if(t.tag===3){tg(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(aa===null||!aa.has(a))){e=Lt(n,e),n=nm(2),a=Fn(t,n,2),a!==null&&(am(n,a,t,e),il(a,2),hn(a));break}}t=t.return}}function Fc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new u1;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(qc=!0,r.add(n),e=g1.bind(null,e,t,n),t.then(e,e))}function g1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(me&n)===n&&(Ge===4||Ge===3&&(me&62914560)===me&&300>vt()-es?(je&2)===0&&zi(e,0):Kc|=n,ji===me&&(ji=0)),hn(e)}function ng(e,t){t===0&&(t=Jd()),e=Ta(e,t),e!==null&&(il(e,t),hn(e))}function p1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ng(e,n)}function x1(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),ng(e,n)}function b1(e,t){return co(e,t)}var ss=null,Ei=null,Pc=!1,os=!1,Ic=!1,ra=0;function hn(e){e!==Ei&&e.next===null&&(Ei===null?ss=Ei=e:Ei=Ei.next=e),os=!0,Pc||(Pc=!0,v1())}function Ul(e,t){if(!Ic&&os){Ic=!0;do for(var n=!1,a=ss;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var s=0;else{var d=a.suspendedLanes,g=a.pingedLanes;s=(1<<31-jt(42|e)+1)-1,s&=r&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,rg(a,s))}else s=me,s=fr(a,a===Me?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||al(a,s)||(n=!0,rg(a,s));a=a.next}while(n);Ic=!1}}function y1(){ag()}function ag(){os=Pc=!1;var e=0;ra!==0&&M1()&&(e=ra);for(var t=vt(),n=null,a=ss;a!==null;){var r=a.next,s=ig(a,t);s===0?(a.next=null,n===null?ss=r:n.next=r,r===null&&(Ei=n)):(n=a,(e!==0||(s&3)!==0)&&(os=!0)),a=r}Je!==0&&Je!==5||Ul(e),ra!==0&&(ra=0)}function ig(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-jt(s),g=1<<d,b=r[d];b===-1?((g&n)===0||(g&a)!==0)&&(r[d]=Qx(g,t)):b<=t&&(e.expiredLanes|=g),s&=~g}if(t=Me,n=me,n=fr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&uo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||al(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&uo(a),mo(n)){case 2:case 8:n=Xd;break;case 32:n=or;break;case 268435456:n=$d;break;default:n=or}return a=lg.bind(null,e),n=co(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&uo(a),e.callbackPriority=2,e.callbackNode=null,2}function lg(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(rs()&&e.callbackNode!==n)return null;var a=me;return a=fr(e,e===Me?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Gm(e,a,t),ig(e,vt()),e.callbackNode!=null&&e.callbackNode===n?lg.bind(null,e):null)}function rg(e,t){if(rs())return null;Gm(e,t,!0)}function v1(){R1(function(){(je&6)!==0?co(Qd,y1):ag()})}function eu(){if(ra===0){var e=di;e===0&&(e=cr,cr<<=1,(cr&261888)===0&&(cr=256)),ra=e}return ra}function sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pr(""+e)}function og(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function S1(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var s=sg((r[ut]||null).action),d=a.submitter;d&&(t=(t=d[ut]||null)?sg(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var g=new vr("action","action",null,a,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ra!==0){var b=d?og(r,d):new FormData(r);vc(n,{pending:!0,data:b,method:r.method,action:s},null,b)}}else typeof s=="function"&&(g.preventDefault(),b=d?og(r,d):new FormData(r),vc(n,{pending:!0,data:b,method:r.method,action:s},s,b))},currentTarget:r}]})}}for(var tu=0;tu<Ho.length;tu++){var nu=Ho[tu],j1=nu.toLowerCase(),w1=nu[0].toUpperCase()+nu.slice(1);Wt(j1,"on"+w1)}Wt(Lf,"onAnimationEnd"),Wt(Gf,"onAnimationIteration"),Wt(Yf,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(Lb,"onTransitionRun"),Wt(Gb,"onTransitionStart"),Wt(Yb,"onTransitionCancel"),Wt(Vf,"onTransitionEnd"),Fa("onMouseEnter",["mouseout","mouseover"]),Fa("onMouseLeave",["mouseout","mouseover"]),Fa("onPointerEnter",["pointerout","pointerover"]),Fa("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ll));function cg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var g=a[d],b=g.instance,E=g.currentTarget;if(g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=E;try{s(r)}catch(k){wr(k)}r.currentTarget=null,s=b}else for(d=0;d<a.length;d++){if(g=a[d],b=g.instance,E=g.currentTarget,g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=E;try{s(r)}catch(k){wr(k)}r.currentTarget=null,s=b}}}}function he(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var a=e+"__bubble";n.has(a)||(ug(t,e,2,!1),n.add(a))}function au(e,t,n){var a=0;t&&(a|=4),ug(n,e,a,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function iu(e){if(!e[cs]){e[cs]=!0,nf.forEach(function(n){n!=="selectionchange"&&(z1.has(n)||au(n,!1,e),au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,au("selectionchange",!1,t))}}function ug(e,t,n,a){switch(Lg(t)){case 2:var r=P1;break;case 8:r=I1;break;default:r=yu}n=r.bind(null,t,n,e),r=void 0,!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function lu(e,t,n,a,r){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var g=a.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=a.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=$a(g),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){a=s=d;continue e}g=g.parentNode}}a=a.return}gf(function(){var E=s,k=jo(n),H=[];e:{var A=qf.get(e);if(A!==void 0){var C=vr,J=e;switch(e){case"keypress":if(br(n)===0)break e;case"keydown":case"keyup":C=xb;break;case"focusin":J="focus",C=Ao;break;case"focusout":J="blur",C=Ao;break;case"beforeblur":case"afterblur":C=Ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=lb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=vb;break;case Lf:case Gf:case Yf:C=ob;break;case Vf:C=jb;break;case"scroll":case"scrollend":C=ab;break;case"wheel":C=zb;break;case"copy":case"cut":case"paste":C=ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=vf;break;case"toggle":case"beforetoggle":C=Eb}var ne=(t&4)!==0,Ce=!ne&&(e==="scroll"||e==="scrollend"),z=ne?A!==null?A+"Capture":null:A;ne=[];for(var v=E,_;v!==null;){var D=v;if(_=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||_===null||z===null||(D=sl(v,z),D!=null&&ne.push(Gl(v,D,_))),Ce)break;v=v.return}0<ne.length&&(A=new C(A,J,null,n,k),H.push({event:A,listeners:ne}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&n!==So&&(J=n.relatedTarget||n.fromElement)&&($a(J)||J[Xa]))break e;if((C||A)&&(A=k.window===k?k:(A=k.ownerDocument)?A.defaultView||A.parentWindow:window,C?(J=n.relatedTarget||n.toElement,C=E,J=J?$a(J):null,J!==null&&(Ce=m(J),ne=J.tag,J!==Ce||ne!==5&&ne!==27&&ne!==6)&&(J=null)):(C=null,J=E),C!==J)){if(ne=bf,D="onMouseLeave",z="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(ne=vf,D="onPointerLeave",z="onPointerEnter",v="pointer"),Ce=C==null?A:rl(C),_=J==null?A:rl(J),A=new ne(D,v+"leave",C,n,k),A.target=Ce,A.relatedTarget=_,D=null,$a(k)===E&&(ne=new ne(z,v+"enter",J,n,k),ne.target=_,ne.relatedTarget=Ce,D=ne),Ce=D,C&&J)t:{for(ne=_1,z=C,v=J,_=0,D=z;D;D=ne(D))_++;D=0;for(var ee=v;ee;ee=ne(ee))D++;for(;0<_-D;)z=ne(z),_--;for(;0<D-_;)v=ne(v),D--;for(;_--;){if(z===v||v!==null&&z===v.alternate){ne=z;break t}z=ne(z),v=ne(v)}ne=null}else ne=null;C!==null&&dg(H,A,C,ne,!1),J!==null&&Ce!==null&&dg(H,Ce,J,ne,!0)}}e:{if(A=E?rl(E):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var ve=Af;else if(Ef(A))if(Cf)ve=Nb;else{ve=Db;var F=Bb}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&vo(E.elementType)&&(ve=Af):ve=Ob;if(ve&&(ve=ve(e,E))){Tf(H,ve,n,k);break e}F&&F(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&yo(A,"number",A.value)}switch(F=E?rl(E):window,e){case"focusin":(Ef(F)||F.contentEditable==="true")&&(ai=F,Do=E,gl=null);break;case"focusout":gl=Do=ai=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Hf(H,n,k);break;case"selectionchange":if(Ub)break;case"keydown":case"keyup":Hf(H,n,k)}var oe;if(Mo)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ni?zf(e,n)&&(ge="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ge="onCompositionStart");ge&&(Sf&&n.locale!=="ko"&&(ni||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ni&&(oe=pf()):(Kn=k,_o="value"in Kn?Kn.value:Kn.textContent,ni=!0)),F=us(E,ge),0<F.length&&(ge=new yf(ge,e,null,n,k),H.push({event:ge,listeners:F}),oe?ge.data=oe:(oe=_f(n),oe!==null&&(ge.data=oe)))),(oe=Ab?Cb(e,n):Mb(e,n))&&(ge=us(E,"onBeforeInput"),0<ge.length&&(F=new yf("onBeforeInput","beforeinput",null,n,k),H.push({event:F,listeners:ge}),F.data=oe)),S1(H,e,E,n,k)}cg(H,t)})}function Gl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=sl(e,n),r!=null&&a.unshift(Gl(e,r,s)),r=sl(e,t),r!=null&&a.push(Gl(e,r,s))),e.tag===3)return a;e=e.return}return[]}function _1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dg(e,t,n,a,r){for(var s=t._reactName,d=[];n!==null&&n!==a;){var g=n,b=g.alternate,E=g.stateNode;if(g=g.tag,b!==null&&b===a)break;g!==5&&g!==26&&g!==27||E===null||(b=E,r?(E=sl(n,s),E!=null&&d.unshift(Gl(n,E,b))):r||(E=sl(n,s),E!=null&&d.push(Gl(n,E,b)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function fg(e){return(typeof e=="string"?e:""+e).replace(E1,`
`).replace(T1,"")}function hg(e,t){return t=fg(t),fg(e)===t}function Ae(e,t,n,a,r,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ia(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ia(e,""+a);break;case"className":mr(e,"class",a);break;case"tabIndex":mr(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":mr(e,n,a);break;case"style":hf(e,a,s);break;case"data":if(t!=="object"){mr(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=pr(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",r.name,r,null),Ae(e,t,"formEncType",r.formEncType,r,null),Ae(e,t,"formMethod",r.formMethod,r,null),Ae(e,t,"formTarget",r.formTarget,r,null)):(Ae(e,t,"encType",r.encType,r,null),Ae(e,t,"method",r.method,r,null),Ae(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=pr(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=vn);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=pr(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":he("beforetoggle",e),he("toggle",e),hr(e,"popover",a);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":hr(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tb.get(n)||n,hr(e,n,a))}}function ru(e,t,n,a,r,s){switch(n){case"style":hf(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ia(e,a):(typeof a=="number"||typeof a=="bigint")&&Ia(e,""+a);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"onClick":a!=null&&(e.onclick=vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!af.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[ut]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):hr(e,n,a)}}}function lt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var a=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,s,d,n,null)}}r&&Ae(e,t,"srcSet",n.srcSet,n,null),a&&Ae(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var g=s=d=r=null,b=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var k=n[a];if(k!=null)switch(a){case"name":r=k;break;case"type":d=k;break;case"checked":b=k;break;case"defaultChecked":E=k;break;case"value":s=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:Ae(e,t,a,k,n,null)}}cf(e,s,g,b,E,d,r,!1);return;case"select":he("invalid",e),a=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":a=g;default:Ae(e,t,r,g,n,null)}t=s,n=d,e.multiple=!!a,t!=null?Pa(e,!!a,t,!1):n!=null&&Pa(e,!!a,n,!0);return;case"textarea":he("invalid",e),s=r=a=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":a=g;break;case"defaultValue":r=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:Ae(e,t,d,g,n,null)}df(e,a,r,s);return;case"option":for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!=null)&&(b==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ae(e,t,b,a,n,null));return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(a=0;a<Ll.length;a++)he(Ll[a],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,E,a,n,null)}return;default:if(vo(t)){for(k in n)n.hasOwnProperty(k)&&(a=n[k],a!==void 0&&ru(e,t,k,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&Ae(e,t,g,a,n,null))}function A1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,g=null,b=null,E=null,k=null;for(C in n){var H=n[C];if(n.hasOwnProperty(C)&&H!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":b=H;default:a.hasOwnProperty(C)||Ae(e,t,C,null,a,H)}}for(var A in a){var C=a[A];if(H=n[A],a.hasOwnProperty(A)&&(C!=null||H!=null))switch(A){case"type":s=C;break;case"name":r=C;break;case"checked":E=C;break;case"defaultChecked":k=C;break;case"value":d=C;break;case"defaultValue":g=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:C!==H&&Ae(e,t,A,C,a,H)}}bo(e,d,g,b,E,k,s,r);return;case"select":C=d=g=A=null;for(s in n)if(b=n[s],n.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":C=b;default:a.hasOwnProperty(s)||Ae(e,t,s,null,a,b)}for(r in a)if(s=a[r],b=n[r],a.hasOwnProperty(r)&&(s!=null||b!=null))switch(r){case"value":A=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==b&&Ae(e,t,r,s,a,b)}t=g,n=d,a=C,A!=null?Pa(e,!!n,A,!1):!!a!=!!n&&(t!=null?Pa(e,!!n,t,!0):Pa(e,!!n,n?[]:"",!1));return;case"textarea":C=A=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ae(e,t,g,null,a,r)}for(d in a)if(r=a[d],s=n[d],a.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":A=r;break;case"defaultValue":C=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==s&&Ae(e,t,d,r,a,s)}uf(e,A,C);return;case"option":for(var J in n)A=n[J],n.hasOwnProperty(J)&&A!=null&&!a.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ae(e,t,J,null,a,A));for(b in a)A=a[b],C=n[b],a.hasOwnProperty(b)&&A!==C&&(A!=null||C!=null)&&(b==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ae(e,t,b,A,a,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)A=n[ne],n.hasOwnProperty(ne)&&A!=null&&!a.hasOwnProperty(ne)&&Ae(e,t,ne,null,a,A);for(E in a)if(A=a[E],C=n[E],a.hasOwnProperty(E)&&A!==C&&(A!=null||C!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Ae(e,t,E,A,a,C)}return;default:if(vo(t)){for(var Ce in n)A=n[Ce],n.hasOwnProperty(Ce)&&A!==void 0&&!a.hasOwnProperty(Ce)&&ru(e,t,Ce,void 0,a,A);for(k in a)A=a[k],C=n[k],!a.hasOwnProperty(k)||A===C||A===void 0&&C===void 0||ru(e,t,k,A,a,C);return}}for(var z in n)A=n[z],n.hasOwnProperty(z)&&A!=null&&!a.hasOwnProperty(z)&&Ae(e,t,z,null,a,A);for(H in a)A=a[H],C=n[H],!a.hasOwnProperty(H)||A===C||A==null&&C==null||Ae(e,t,H,A,a,C)}function mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function C1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],s=r.transferSize,d=r.initiatorType,g=r.duration;if(s&&g&&mg(d)){for(d=0,g=r.responseEnd,a+=1;a<n.length;a++){var b=n[a],E=b.startTime;if(E>g)break;var k=b.transferSize,H=b.initiatorType;k&&mg(H)&&(b=b.responseEnd,d+=k*(b<g?1:(g-E)/(b-E)))}if(--a,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var su=null,ou=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=null;function M1(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(e){return bg.resolve(null).then(e).catch(B1)}:xg;function B1(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function yg(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),Mi(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Yl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Yl(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[ll]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Yl(e.ownerDocument.body);n=r}while(n);Mi(t)}function vg(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":du(n),po(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function D1(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function O1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kt(e.nextSibling),e===null))return null;return e}function Sg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$?"||e.data==="$~"}function hu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function N1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var mu=null;function jg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function wg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function zg(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Yl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);po(e)}var Zt=new Map,_g=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=Z.d;Z.d={f:H1,r:U1,D:L1,C:G1,L:Y1,m:V1,X:K1,S:q1,M:Z1};function H1(){var e=Nn.f(),t=as();return e||t}function U1(e){var t=Ja(e);t!==null&&t.tag===5&&t.type==="form"?Vh(t):Nn.r(e)}var Ti=typeof document>"u"?null:document;function Eg(e,t,n){var a=Ti;if(a&&typeof t=="string"&&t){var r=Ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),_g.has(r)||(_g.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),lt(t,"link",e),Fe(t),a.head.appendChild(t)))}}function L1(e){Nn.D(e),Eg("dns-prefetch",e,null)}function G1(e,t){Nn.C(e,t),Eg("preconnect",e,t)}function Y1(e,t,n){Nn.L(e,t,n);var a=Ti;if(a&&e&&t){var r='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ht(n.imageSizes)+'"]')):r+='[href="'+Ht(e)+'"]';var s=r;switch(t){case"style":s=Ai(e);break;case"script":s=Ci(e)}Zt.has(s)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(s,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Vl(s))||t==="script"&&a.querySelector(ql(s))||(t=a.createElement("link"),lt(t,"link",e),Fe(t),a.head.appendChild(t)))}}function V1(e,t){Nn.m(e,t);var n=Ti;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ht(a)+'"][href="'+Ht(e)+'"]',s=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ci(e)}if(!Zt.has(s)&&(e=w({rel:"modulepreload",href:e},t),Zt.set(s,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ql(s)))return}a=n.createElement("link"),lt(a,"link",e),Fe(a),n.head.appendChild(a)}}}function q1(e,t,n){Nn.S(e,t,n);var a=Ti;if(a&&e){var r=Wa(a).hoistableStyles,s=Ai(e);t=t||"default";var d=r.get(s);if(!d){var g={loading:0,preload:null};if(d=a.querySelector(Vl(s)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(s))&&gu(e,n);var b=d=a.createElement("link");Fe(b),lt(b,"link",e),b._p=new Promise(function(E,k){b.onload=E,b.onerror=k}),b.addEventListener("load",function(){g.loading|=1}),b.addEventListener("error",function(){g.loading|=2}),g.loading|=4,hs(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(s,d)}}}function K1(e,t){Nn.X(e,t);var n=Ti;if(n&&e){var a=Wa(n).hoistableScripts,r=Ci(e),s=a.get(r);s||(s=n.querySelector(ql(r)),s||(e=w({src:e,async:!0},t),(t=Zt.get(r))&&pu(e,t),s=n.createElement("script"),Fe(s),lt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(r,s))}}function Z1(e,t){Nn.M(e,t);var n=Ti;if(n&&e){var a=Wa(n).hoistableScripts,r=Ci(e),s=a.get(r);s||(s=n.querySelector(ql(r)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Zt.get(r))&&pu(e,t),s=n.createElement("script"),Fe(s),lt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(r,s))}}function Tg(e,t,n,a){var r=(r=se.current)?fs(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ai(n.href),n=Wa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ai(n.href);var s=Wa(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(Vl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),s||Q1(r,e,n,d.state))),t&&a===null)throw Error(c(528,""));return d}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(n),n=Wa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ai(e){return'href="'+Ht(e)+'"'}function Vl(e){return'link[rel="stylesheet"]['+e+"]"}function Ag(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Q1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),lt(t,"link",n),Fe(t),e.head.appendChild(t))}function Ci(e){return'[src="'+Ht(e)+'"]'}function ql(e){return"script[async]"+e}function Cg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(a)return t.instance=a,Fe(a),a;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Fe(a),lt(a,"style",r),hs(a,n.precedence,e),t.instance=a;case"stylesheet":r=Ai(n.href);var s=e.querySelector(Vl(r));if(s)return t.state.loading|=4,t.instance=s,Fe(s),s;a=Ag(n),(r=Zt.get(r))&&gu(a,r),s=(e.ownerDocument||e).createElement("link"),Fe(s);var d=s;return d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),lt(s,"link",a),t.state.loading|=4,hs(s,n.precedence,e),t.instance=s;case"script":return s=Ci(n.src),(r=e.querySelector(ql(s)))?(t.instance=r,Fe(r),r):(a=n,(r=Zt.get(s))&&(a=w({},n),pu(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Fe(r),lt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,hs(a,n.precedence,e));return t.instance}function hs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,s=r,d=0;d<a.length;d++){var g=a[d];if(g.dataset.precedence===t)s=g;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ms=null;function Mg(e,t,n){if(ms===null){var a=new Map,r=ms=new Map;r.set(n,a)}else r=ms,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[ll]||s[tt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var g=a.get(d);g?g.push(s):a.set(d,[s])}}return a}function kg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function X1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $1(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ai(a.href),s=t.querySelector(Vl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=gs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Fe(s);return}s=t.ownerDocument||t,a=Ag(a),(r=Zt.get(r))&&gu(a,r),s=s.createElement("link"),Fe(s);var d=s;d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),lt(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=gs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var xu=0;function J1(e,t){return e.stylesheets&&e.count===0&&xs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&xs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&xu===0&&(xu=62500*C1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>xu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function gs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function xs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,t.forEach(W1,e),ps=null,gs.call(e))}function W1(e,t){if(!(t.state.loading&4)){var n=ps.get(e);if(n)var a=n.get(null);else{n=new Map,ps.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||a,s===a&&n.set(null,r),n.set(d,r),this.count++,a=gs.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Kl={$$typeof:L,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function F1(e,t,n,a,r,s,d,g,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Bg(e,t,n,a,r,s,d,g,b,E,k,H){return e=new F1(e,t,n,d,b,E,k,H,g),t=1,s===!0&&(t|=24),s=zt(3,null,null,t),e.current=s,s.stateNode=e,t=Wo(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},ec(s),e}function Dg(e){return e?(e=ri,e):ri}function Og(e,t,n,a,r,s){r=Dg(r),a.context===null?a.context=r:a.pendingContext=r,a=Wn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Fn(e,a,t),n!==null&&(pt(n,e,t),jl(n,e,t))}function Ng(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){Ng(e,t),(e=e.alternate)&&Ng(e,t)}function Hg(e){if(e.tag===13||e.tag===31){var t=Ta(e,67108864);t!==null&&pt(t,e,67108864),bu(e,67108864)}}function Ug(e){if(e.tag===13||e.tag===31){var t=Ct();t=ho(t);var n=Ta(e,t);n!==null&&pt(n,e,t),bu(e,t)}}var bs=!0;function P1(e,t,n,a){var r=R.T;R.T=null;var s=Z.p;try{Z.p=2,yu(e,t,n,a)}finally{Z.p=s,R.T=r}}function I1(e,t,n,a){var r=R.T;R.T=null;var s=Z.p;try{Z.p=8,yu(e,t,n,a)}finally{Z.p=s,R.T=r}}function yu(e,t,n,a){if(bs){var r=vu(a);if(r===null)lu(e,t,a,ys,n),Gg(e,a);else if(ty(r,e,t,n,a))a.stopPropagation();else if(Gg(e,a),t&4&&-1<ey.indexOf(e)){for(;r!==null;){var s=Ja(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=ja(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var b=1<<31-jt(d);g.entanglements[1]|=b,d&=~b}hn(s),(je&6)===0&&(ts=vt()+500,Ul(0))}}break;case 31:case 13:g=Ta(s,2),g!==null&&pt(g,s,2),as(),bu(s,2)}if(s=vu(a),s===null&&lu(e,t,a,ys,n),s===r)break;r=s}r!==null&&a.stopPropagation()}else lu(e,t,a,null,n)}}function vu(e){return e=jo(e),Su(e)}var ys=null;function Su(e){if(ys=null,e=$a(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=j(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ys=e,null}function Lg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lx()){case Qd:return 2;case Xd:return 8;case or:case Gx:return 32;case $d:return 268435456;default:return 32}default:return 32}}var ju=!1,oa=null,ca=null,ua=null,Zl=new Map,Ql=new Map,da=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(t.pointerId)}}function Xl(e,t,n,a,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ja(t),t!==null&&Hg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ty(e,t,n,a,r){switch(t){case"focusin":return oa=Xl(oa,e,t,n,a,r),!0;case"dragenter":return ca=Xl(ca,e,t,n,a,r),!0;case"mouseover":return ua=Xl(ua,e,t,n,a,r),!0;case"pointerover":var s=r.pointerId;return Zl.set(s,Xl(Zl.get(s)||null,e,t,n,a,r)),!0;case"gotpointercapture":return s=r.pointerId,Ql.set(s,Xl(Ql.get(s)||null,e,t,n,a,r)),!0}return!1}function Yg(e){var t=$a(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,ef(e.priority,function(){Ug(n)});return}}else if(t===31){if(t=j(n),t!==null){e.blockedOn=t,ef(e.priority,function(){Ug(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);So=a,n.target.dispatchEvent(a),So=null}else return t=Ja(n),t!==null&&Hg(t),e.blockedOn=n,!1;t.shift()}return!0}function Vg(e,t,n){vs(e)&&n.delete(t)}function ny(){ju=!1,oa!==null&&vs(oa)&&(oa=null),ca!==null&&vs(ca)&&(ca=null),ua!==null&&vs(ua)&&(ua=null),Zl.forEach(Vg),Ql.forEach(Vg)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,ju||(ju=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ny)))}var js=null;function qg(e){js!==e&&(js=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){js===e&&(js=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Su(a||n)===null)continue;break}var s=Ja(n);s!==null&&(e.splice(t,3),t-=3,vc(s,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Mi(e){function t(b){return Ss(b,e)}oa!==null&&Ss(oa,e),ca!==null&&Ss(ca,e),ua!==null&&Ss(ua,e),Zl.forEach(t),Ql.forEach(t);for(var n=0;n<da.length;n++){var a=da[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<da.length&&(n=da[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&da.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],s=n[a+1],d=r[ut]||null;if(typeof s=="function")d||qg(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[ut]||null)g=d.formAction;else if(Su(r)!==null)continue}else g=d.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),qg(n)}}}function Kg(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function wu(e){this._internalRoot=e}ws.prototype.render=wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Ct();Og(n,a,e,t,null,null)},ws.prototype.unmount=wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Og(e.current,2,null,e,null,null),as(),t[Xa]=null}};function ws(e){this._internalRoot=e}ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=Id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<da.length&&t!==0&&t<da[n].priority;n++);da.splice(n,0,e),n===0&&Yg(e)}};var Zg=o.version;if(Zg!=="19.2.3")throw Error(c(527,Zg,"19.2.3"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var ay={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{nl=zs.inject(ay),St=zs}catch{}}return Jl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",r=Ph,s=Ih,d=em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Bg(e,1,!1,null,null,n,a,null,r,s,d,Kg),e[Xa]=t.current,iu(e),new wu(t)},Jl.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,r="",s=Ph,d=Ih,g=em,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Bg(e,1,!0,t,n??null,a,r,b,s,d,g,Kg),t.context=Dg(null),n=t.current,a=Ct(),a=ho(a),r=Wn(a),r.callback=null,Fn(n,r,a),n=a,t.current.lanes=n,il(t,n),hn(t),e[Xa]=t.current,iu(e),new ws(t)},Jl.version="19.2.3",Jl}var t0;function my(){if(t0)return Eu.exports;t0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Eu.exports=hy(),Eu.exports}var gy=my(),et=function(){return et=Object.assign||function(o){for(var u,c=1,f=arguments.length;c<f;c++){u=arguments[c];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(o[m]=u[m])}return o},et.apply(this,arguments)};function tr(i,o,u){if(u||arguments.length===2)for(var c=0,f=o.length,m;c<f;c++)(m||!(c in o))&&(m||(m=Array.prototype.slice.call(o,0,c)),m[c]=o[c]);return i.concat(m||Array.prototype.slice.call(o))}var De="-ms-",er="-moz-",we="-webkit-",q0="comm",Ps="rule",Cd="decl",py="@import",xy="@namespace",K0="@keyframes",by="@layer",Z0=Math.abs,Md=String.fromCharCode,pd=Object.assign;function yy(i,o){return We(i,0)^45?(((o<<2^We(i,0))<<2^We(i,1))<<2^We(i,2))<<2^We(i,3):0}function Q0(i){return i.trim()}function Un(i,o){return(i=o.exec(i))?i[0]:i}function ce(i,o,u){return i.replace(o,u)}function Us(i,o,u){return i.indexOf(o,u)}function We(i,o){return i.charCodeAt(o)|0}function Va(i,o,u){return i.slice(o,u)}function It(i){return i.length}function X0(i){return i.length}function Pl(i,o){return o.push(i),i}function vy(i,o){return i.map(o).join("")}function n0(i,o){return i.filter(function(u){return!Un(u,o)})}var Is=1,Ji=1,$0=0,Qt=0,$e=0,Pi="";function eo(i,o,u,c,f,m,p,j){return{value:i,root:o,parent:u,type:c,props:f,children:m,line:Is,column:Ji,length:p,return:"",siblings:j}}function xa(i,o){return pd(eo("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},o)}function ki(i){for(;i.root;)i=xa(i.root,{children:[i]});Pl(i,i.siblings)}function Sy(){return $e}function jy(){return $e=Qt>0?We(Pi,--Qt):0,Ji--,$e===10&&(Ji=1,Is--),$e}function tn(){return $e=Qt<$0?We(Pi,Qt++):0,Ji++,$e===10&&(Ji=1,Is++),$e}function ya(){return We(Pi,Qt)}function Ls(){return Qt}function to(i,o){return Va(Pi,i,o)}function nr(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wy(i){return Is=Ji=1,$0=It(Pi=i),Qt=0,[]}function zy(i){return Pi="",i}function Mu(i){return Q0(to(Qt-1,xd(i===91?i+2:i===40?i+1:i)))}function _y(i){for(;($e=ya())&&$e<33;)tn();return nr(i)>2||nr($e)>3?"":" "}function Ey(i,o){for(;--o&&tn()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return to(i,Ls()+(o<6&&ya()==32&&tn()==32))}function xd(i){for(;tn();)switch($e){case i:return Qt;case 34:case 39:i!==34&&i!==39&&xd($e);break;case 40:i===41&&xd(i);break;case 92:tn();break}return Qt}function Ty(i,o){for(;tn()&&i+$e!==57;)if(i+$e===84&&ya()===47)break;return"/*"+to(o,Qt-1)+"*"+Md(i===47?i:tn())}function Ay(i){for(;!nr(ya());)tn();return to(i,Qt)}function Cy(i){return zy(Gs("",null,null,null,[""],i=wy(i),0,[0],i))}function Gs(i,o,u,c,f,m,p,j,y){for(var x=0,T=0,w=p,N=0,G=0,V=0,q=1,K=1,O=1,Y=0,L="",W=f,I=m,$=c,U=L;K;)switch(V=Y,Y=tn()){case 40:if(V!=108&&We(U,w-1)==58){Us(U+=ce(Mu(Y),"&","&\f"),"&\f",Z0(x?j[x-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:U+=Mu(Y);break;case 9:case 10:case 13:case 32:U+=_y(V);break;case 92:U+=Ey(Ls()-1,7);continue;case 47:switch(ya()){case 42:case 47:Pl(My(Ty(tn(),Ls()),o,u,y),y),(nr(V||1)==5||nr(ya()||1)==5)&&It(U)&&Va(U,-1,void 0)!==" "&&(U+=" ");break;default:U+="/"}break;case 123*q:j[x++]=It(U)*O;case 125*q:case 59:case 0:switch(Y){case 0:case 125:K=0;case 59+T:O==-1&&(U=ce(U,/\f/g,"")),G>0&&(It(U)-w||q===0&&V===47)&&Pl(G>32?i0(U+";",c,u,w-1,y):i0(ce(U," ","")+";",c,u,w-2,y),y);break;case 59:U+=";";default:if(Pl($=a0(U,o,u,x,T,f,j,L,W=[],I=[],w,m),m),Y===123)if(T===0)Gs(U,o,$,$,W,m,w,j,I);else{switch(N){case 99:if(We(U,3)===110)break;case 108:if(We(U,2)===97)break;default:T=0;case 100:case 109:case 115:}T?Gs(i,$,$,c&&Pl(a0(i,$,$,0,0,f,j,L,f,W=[],w,I),I),f,I,w,j,c?W:I):Gs(U,$,$,$,[""],I,0,j,I)}}x=T=G=0,q=O=1,L=U="",w=p;break;case 58:w=1+It(U),G=V;default:if(q<1){if(Y==123)--q;else if(Y==125&&q++==0&&jy()==125)continue}switch(U+=Md(Y),Y*q){case 38:O=T>0?1:(U+="\f",-1);break;case 44:j[x++]=(It(U)-1)*O,O=1;break;case 64:ya()===45&&(U+=Mu(tn())),N=ya(),T=w=It(L=U+=Ay(Ls())),Y++;break;case 45:V===45&&It(U)==2&&(q=0)}}return m}function a0(i,o,u,c,f,m,p,j,y,x,T,w){for(var N=f-1,G=f===0?m:[""],V=X0(G),q=0,K=0,O=0;q<c;++q)for(var Y=0,L=Va(i,N+1,N=Z0(K=p[q])),W=i;Y<V;++Y)(W=Q0(K>0?G[Y]+" "+L:ce(L,/&\f/g,G[Y])))&&(y[O++]=W);return eo(i,o,u,f===0?Ps:j,y,x,T,w)}function My(i,o,u,c){return eo(i,o,u,q0,Md(Sy()),Va(i,2,-2),0,c)}function i0(i,o,u,c,f){return eo(i,o,u,Cd,Va(i,0,c),Va(i,c+1,-1),c,f)}function J0(i,o,u){switch(yy(i,o)){case 5103:return we+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return we+i+i;case 4855:return we+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return er+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return we+i+er+i+De+i+i;case 5936:switch(We(i,o+11)){case 114:return we+i+De+ce(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return we+i+De+ce(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return we+i+De+ce(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return we+i+De+i+i;case 6165:return we+i+De+"flex-"+i+i;case 5187:return we+i+ce(i,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+i;case 5443:return we+i+De+"flex-item-"+ce(i,/flex-|-self/g,"")+(Un(i,/flex-|baseline/)?"":De+"grid-row-"+ce(i,/flex-|-self/g,""))+i;case 4675:return we+i+De+"flex-line-pack"+ce(i,/align-content|flex-|-self/g,"")+i;case 5548:return we+i+De+ce(i,"shrink","negative")+i;case 5292:return we+i+De+ce(i,"basis","preferred-size")+i;case 6060:return we+"box-"+ce(i,"-grow","")+we+i+De+ce(i,"grow","positive")+i;case 4554:return we+ce(i,/([^-])(transform)/g,"$1"+we+"$2")+i;case 6187:return ce(ce(ce(i,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),i,"")+i;case 5495:case 3959:return ce(i,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ce(ce(i,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/space-between/,"justify")+we+i+i;case 4200:if(!Un(i,/flex-|baseline/))return De+"grid-column-align"+Va(i,o)+i;break;case 2592:case 3360:return De+ce(i,"template-","")+i;case 4384:case 3616:return u&&u.some(function(c,f){return o=f,Un(c.props,/grid-\w+-end/)})?~Us(i+(u=u[o].value),"span",0)?i:De+ce(i,"-start","")+i+De+"grid-row-span:"+(~Us(u,"span",0)?Un(u,/\d+/):+Un(u,/\d+/)-+Un(i,/\d+/))+";":De+ce(i,"-start","")+i;case 4896:case 4128:return u&&u.some(function(c){return Un(c.props,/grid-\w+-start/)})?i:De+ce(ce(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ce(i,/(.+)-inline(.+)/,we+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(i)-1-o>6)switch(We(i,o+1)){case 109:if(We(i,o+4)!==45)break;case 102:return ce(i,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+er+(We(i,o+3)==108?"$3":"$2-$3"))+i;case 115:return~Us(i,"stretch",0)?J0(ce(i,"stretch","fill-available"),o,u)+i:i}break;case 5152:case 5920:return ce(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,m,p,j,y,x){return De+f+":"+m+x+(p?De+f+"-span:"+(j?y:+y-+m)+x:"")+i});case 4949:if(We(i,o+6)===121)return ce(i,":",":"+we)+i;break;case 6444:switch(We(i,We(i,14)===45?18:11)){case 120:return ce(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(We(i,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+i;case 100:return ce(i,":",":"+De)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(i,"scroll-","scroll-snap-")+i}return i}function Qs(i,o){for(var u="",c=0;c<i.length;c++)u+=o(i[c],c,i,o)||"";return u}function ky(i,o,u,c){switch(i.type){case by:if(i.children.length)break;case py:case xy:case Cd:return i.return=i.return||i.value;case q0:return"";case K0:return i.return=i.value+"{"+Qs(i.children,c)+"}";case Ps:if(!It(i.value=i.props.join(",")))return""}return It(u=Qs(i.children,c))?i.return=i.value+"{"+u+"}":""}function Ry(i){var o=X0(i);return function(u,c,f,m){for(var p="",j=0;j<o;j++)p+=i[j](u,c,f,m)||"";return p}}function By(i){return function(o){o.root||(o=o.return)&&i(o)}}function Dy(i,o,u,c){if(i.length>-1&&!i.return)switch(i.type){case Cd:i.return=J0(i.value,i.length,u);return;case K0:return Qs([xa(i,{value:ce(i.value,"@","@"+we)})],c);case Ps:if(i.length)return vy(u=i.props,function(f){switch(Un(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ki(xa(i,{props:[ce(f,/:(read-\w+)/,":"+er+"$1")]})),ki(xa(i,{props:[f]})),pd(i,{props:n0(u,c)});break;case"::placeholder":ki(xa(i,{props:[ce(f,/:(plac\w+)/,":"+we+"input-$1")]})),ki(xa(i,{props:[ce(f,/:(plac\w+)/,":"+er+"$1")]})),ki(xa(i,{props:[ce(f,/:(plac\w+)/,De+"input-$1")]})),ki(xa(i,{props:[f]})),pd(i,{props:n0(u,c)});break}return""})}}var Oy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mt={},Wi=typeof process<"u"&&Mt!==void 0&&(Mt.REACT_APP_SC_ATTR||Mt.SC_ATTR)||"data-styled",W0="active",F0="data-styled-version",no="6.3.8",kd=`/*!sc*/
`,Xs=typeof window<"u"&&typeof document<"u",mn=Ie.createContext===void 0,Ny=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mt!==void 0&&Mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mt.REACT_APP_SC_DISABLE_SPEEDY!==""?Mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mt!==void 0&&Mt.SC_DISABLE_SPEEDY!==void 0&&Mt.SC_DISABLE_SPEEDY!==""&&Mt.SC_DISABLE_SPEEDY!=="false"&&Mt.SC_DISABLE_SPEEDY),Hy={},ao=Object.freeze([]),Fi=Object.freeze({});function P0(i,o,u){return u===void 0&&(u=Fi),i.theme!==u.theme&&i.theme||o||u.theme}var I0=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Uy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ly=/(^-|-$)/g;function l0(i){return i.replace(Uy,"-").replace(Ly,"")}var Gy=/(a)(d)/gi,r0=function(i){return String.fromCharCode(i+(i>25?39:97))};function bd(i){var o,u="";for(o=Math.abs(i);o>52;o=o/52|0)u=r0(o%52)+u;return(r0(o%52)+u).replace(Gy,"$1-$2")}var ku,qi=function(i,o){for(var u=o.length;u;)i=33*i^o.charCodeAt(--u);return i},ep=function(i){return qi(5381,i)};function tp(i){return bd(ep(i)>>>0)}function Yy(i){return i.displayName||i.name||"Component"}function Ru(i){return typeof i=="string"&&!0}var np=typeof Symbol=="function"&&Symbol.for,ap=np?Symbol.for("react.memo"):60115,Vy=np?Symbol.for("react.forward_ref"):60112,qy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ky={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ip={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zy=((ku={})[Vy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ku[ap]=ip,ku);function s0(i){return("type"in(o=i)&&o.type.$$typeof)===ap?ip:"$$typeof"in i?Zy[i.$$typeof]:qy;var o}var Qy=Object.defineProperty,Xy=Object.getOwnPropertyNames,o0=Object.getOwnPropertySymbols,$y=Object.getOwnPropertyDescriptor,Jy=Object.getPrototypeOf,c0=Object.prototype;function lp(i,o,u){if(typeof o!="string"){if(c0){var c=Jy(o);c&&c!==c0&&lp(i,c,u)}var f=Xy(o);o0&&(f=f.concat(o0(o)));for(var m=s0(i),p=s0(o),j=0;j<f.length;++j){var y=f[j];if(!(y in Ky||u&&u[y]||p&&y in p||m&&y in m)){var x=$y(o,y);try{Qy(i,y,x)}catch{}}}}return i}function qa(i){return typeof i=="function"}function Rd(i){return typeof i=="object"&&"styledComponentId"in i}function Ya(i,o){return i&&o?"".concat(i," ").concat(o):i||o||""}function yd(i,o){if(i.length===0)return"";for(var u=i[0],c=1;c<i.length;c++)u+=i[c];return u}function ar(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function vd(i,o,u){if(u===void 0&&(u=!1),!u&&!ar(i)&&!Array.isArray(i))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)i[c]=vd(i[c],o[c]);else if(ar(o))for(var c in o)i[c]=vd(i[c],o[c]);return i}function Bd(i,o){Object.defineProperty(i,"toString",{value:o})}function Ka(i){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Wy=(function(){function i(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return i.prototype.indexOfGroup=function(o){for(var u=0,c=0;c<o;c++)u+=this.groupSizes[c];return u},i.prototype.insertRules=function(o,u){if(o>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,m=f;o>=m;)if((m<<=1)<0)throw Ka(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var p=f;p<m;p++)this.groupSizes[p]=0}for(var j=this.indexOfGroup(o+1),y=(p=0,u.length);p<y;p++)this.tag.insertRule(j,u[p])&&(this.groupSizes[o]++,j++)},i.prototype.clearGroup=function(o){if(o<this.length){var u=this.groupSizes[o],c=this.indexOfGroup(o),f=c+u;this.groupSizes[o]=0;for(var m=c;m<f;m++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(o){var u="";if(o>=this.length||this.groupSizes[o]===0)return u;for(var c=this.groupSizes[o],f=this.indexOfGroup(o),m=f+c,p=f;p<m;p++)u+="".concat(this.tag.getRule(p)).concat(kd);return u},i})(),Ys=new Map,$s=new Map,Vs=1,Ki=function(i){if(Ys.has(i))return Ys.get(i);for(;$s.has(Vs);)Vs++;var o=Vs++;return Ys.set(i,o),$s.set(o,i),o},Fy=function(i,o){Vs=o+1,Ys.set(i,o),$s.set(o,i)},Py="style[".concat(Wi,"][").concat(F0,'="').concat(no,'"]'),Iy=new RegExp("^".concat(Wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ev=function(i,o,u){for(var c,f=u.split(","),m=0,p=f.length;m<p;m++)(c=f[m])&&i.registerName(o,c)},tv=function(i,o){for(var u,c=((u=o.textContent)!==null&&u!==void 0?u:"").split(kd),f=[],m=0,p=c.length;m<p;m++){var j=c[m].trim();if(j){var y=j.match(Iy);if(y){var x=0|parseInt(y[1],10),T=y[2];x!==0&&(Fy(T,x),ev(i,T,y[3]),i.getTag().insertRules(x,f)),f.length=0}else f.push(j)}}},u0=function(i){for(var o=document.querySelectorAll(Py),u=0,c=o.length;u<c;u++){var f=o[u];f&&f.getAttribute(Wi)!==W0&&(tv(i,f),f.parentNode&&f.parentNode.removeChild(f))}};function nv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rp=function(i){var o=document.head,u=i||o,c=document.createElement("style"),f=(function(j){var y=Array.from(j.querySelectorAll("style[".concat(Wi,"]")));return y[y.length-1]})(u),m=f!==void 0?f.nextSibling:null;c.setAttribute(Wi,W0),c.setAttribute(F0,no);var p=nv();return p&&c.setAttribute("nonce",p),u.insertBefore(c,m),c},av=(function(){function i(o){this.element=rp(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,f=0,m=c.length;f<m;f++){var p=c[f];if(p.ownerNode===u)return p}throw Ka(17)})(this.element),this.length=0}return i.prototype.insertRule=function(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},i.prototype.getRule=function(o){var u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""},i})(),iv=(function(){function i(o){this.element=rp(o),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(o,u){if(o<=this.length&&o>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},i.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},i})(),lv=(function(){function i(o){this.rules=[],this.length=0}return i.prototype.insertRule=function(o,u){return o<=this.length&&(this.rules.splice(o,0,u),this.length++,!0)},i.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},i.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},i})(),d0=Xs,rv={isServer:!Xs,useCSSOMInjection:!Ny},Js=(function(){function i(o,u,c){o===void 0&&(o=Fi),u===void 0&&(u={});var f=this;this.options=et(et({},rv),o),this.gs=u,this.names=new Map(c),this.server=!!o.isServer,!this.server&&Xs&&d0&&(d0=!1,u0(this)),Bd(this,function(){return(function(m){for(var p=m.getTag(),j=p.length,y="",x=function(w){var N=(function(O){return $s.get(O)})(w);if(N===void 0)return"continue";var G=m.names.get(N),V=p.getGroup(w);if(G===void 0||!G.size||V.length===0)return"continue";var q="".concat(Wi,".g").concat(w,'[id="').concat(N,'"]'),K="";G!==void 0&&G.forEach(function(O){O.length>0&&(K+="".concat(O,","))}),y+="".concat(V).concat(q,'{content:"').concat(K,'"}').concat(kd)},T=0;T<j;T++)x(T);return y})(f)})}return i.registerId=function(o){return Ki(o)},i.prototype.rehydrate=function(){!this.server&&Xs&&u0(this)},i.prototype.reconstructWithOptions=function(o,u){return u===void 0&&(u=!0),new i(et(et({},this.options),o),this.gs,u&&this.names||void 0)},i.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(u){var c=u.useCSSOMInjection,f=u.target;return u.isServer?new lv(f):c?new av(f):new iv(f)})(this.options),new Wy(o)));var o},i.prototype.hasNameForId=function(o,u){return this.names.has(o)&&this.names.get(o).has(u)},i.prototype.registerName=function(o,u){if(Ki(o),this.names.has(o))this.names.get(o).add(u);else{var c=new Set;c.add(u),this.names.set(o,c)}},i.prototype.insertRules=function(o,u,c){this.registerName(o,u),this.getTag().insertRules(Ki(o),c)},i.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},i.prototype.clearRules=function(o){this.getTag().clearGroup(Ki(o)),this.clearNames(o)},i.prototype.clearTag=function(){this.tag=void 0},i})(),sv=/&/g,Zi=47;function f0(i){if(i.indexOf("}")===-1)return!1;for(var o=i.length,u=0,c=0,f=!1,m=0;m<o;m++){var p=i.charCodeAt(m);if(c!==0||f||p!==Zi||i.charCodeAt(m+1)!==42)if(f)p===42&&i.charCodeAt(m+1)===Zi&&(f=!1,m++);else if(p!==34&&p!==39||m!==0&&i.charCodeAt(m-1)===92){if(c===0){if(p===123)u++;else if(p===125&&--u<0)return!0}}else c===0?c=p:c===p&&(c=0);else f=!0,m++}return u!==0||c!==0}function sp(i,o){return i.map(function(u){return u.type==="rule"&&(u.value="".concat(o," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(o," ")),u.props=u.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=sp(u.children,o)),u})}function ov(i){var o,u,c,f=Fi,m=f.options,p=m===void 0?Fi:m,j=f.plugins,y=j===void 0?ao:j,x=function(N,G,V){return V.startsWith(u)&&V.endsWith(u)&&V.replaceAll(u,"").length>0?".".concat(o):N},T=y.slice();T.push(function(N){N.type===Ps&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(sv,u).replace(c,x))}),p.prefix&&T.push(Dy),T.push(ky);var w=function(N,G,V,q){G===void 0&&(G=""),V===void 0&&(V=""),q===void 0&&(q="&"),o=q,u=G,c=new RegExp("\\".concat(u,"\\b"),"g");var K=(function(L){if(!f0(L))return L;for(var W=L.length,I="",$=0,U=0,re=0,be=!1,ue=0;ue<W;ue++){var Ue=L.charCodeAt(ue);if(re!==0||be||Ue!==Zi||L.charCodeAt(ue+1)!==42)if(be)Ue===42&&L.charCodeAt(ue+1)===Zi&&(be=!1,ue++);else if(Ue!==34&&Ue!==39||ue!==0&&L.charCodeAt(ue-1)===92){if(re===0)if(Ue===123)U++;else if(Ue===125){if(--U<0){for(var ke=ue+1;ke<W;){var xt=L.charCodeAt(ke);if(xt===59||xt===10)break;ke++}ke<W&&L.charCodeAt(ke)===59&&ke++,U=0,ue=ke-1,$=ke;continue}U===0&&(I+=L.substring($,ue+1),$=ue+1)}else Ue===59&&U===0&&(I+=L.substring($,ue+1),$=ue+1)}else re===0?re=Ue:re===Ue&&(re=0);else be=!0,ue++}if($<W){var ct=L.substring($);f0(ct)||(I+=ct)}return I})((function(L){if(L.indexOf("//")===-1)return L;for(var W=L.length,I=[],$=0,U=0,re=0,be=0;U<W;){var ue=L.charCodeAt(U);if(ue!==34&&ue!==39||U!==0&&L.charCodeAt(U-1)===92)if(re===0)if(ue===40&&U>=3&&(32|L.charCodeAt(U-1))==108&&(32|L.charCodeAt(U-2))==114&&(32|L.charCodeAt(U-3))==117)be=1,U++;else if(be>0)ue===41?be--:ue===40&&be++,U++;else if(ue===Zi&&U+1<W&&L.charCodeAt(U+1)===Zi){for(U>$&&I.push(L.substring($,U));U<W&&L.charCodeAt(U)!==10;)U++;$=U}else U++;else U++;else re===0?re=ue:re===ue&&(re=0),U++}return $===0?L:($<W&&I.push(L.substring($)),I.join(""))})(N)),O=Cy(V||G?"".concat(V," ").concat(G," { ").concat(K," }"):K);p.namespace&&(O=sp(O,p.namespace));var Y=[];return Qs(O,Ry(T.concat(By(function(L){return Y.push(L)})))),Y};return w.hash=y.length?y.reduce(function(N,G){return G.name||Ka(15),qi(N,G.name)},5381).toString():"",w}var cv=new Js,Sd=ov(),jd={shouldForwardProp:void 0,styleSheet:cv,stylis:Sd},op=mn?{Provider:function(i){return i.children},Consumer:function(i){return(0,i.children)(jd)}}:Ie.createContext(jd);op.Consumer;mn||Ie.createContext(void 0);function wd(){return mn?jd:Ie.useContext(op)}var uv=(function(){function i(o,u){var c=this;this.inject=function(f,m){m===void 0&&(m=Sd);var p=c.name+m.hash;f.hasNameForId(c.id,p)||f.insertRules(c.id,p,m(c.rules,p,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=u,Bd(this,function(){throw Ka(12,String(c.name))})}return i.prototype.getName=function(o){return o===void 0&&(o=Sd),this.name+o.hash},i})();function dv(i,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in Oy||i.startsWith("--")?String(o).trim():"".concat(o,"px")}var fv=function(i){return i>="A"&&i<="Z"};function h0(i){for(var o="",u=0;u<i.length;u++){var c=i[u];if(u===1&&c==="-"&&i[0]==="-")return i;fv(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var cp=function(i){return i==null||i===!1||i===""},up=function(i){var o=[];for(var u in i){var c=i[u];i.hasOwnProperty(u)&&!cp(c)&&(Array.isArray(c)&&c.isCss||qa(c)?o.push("".concat(h0(u),":"),c,";"):ar(c)?o.push.apply(o,tr(tr(["".concat(u," {")],up(c),!1),["}"],!1)):o.push("".concat(h0(u),": ").concat(dv(u,c),";")))}return o};function va(i,o,u,c){if(cp(i))return[];if(Rd(i))return[".".concat(i.styledComponentId)];if(qa(i)){if(!qa(m=i)||m.prototype&&m.prototype.isReactComponent||!o)return[i];var f=i(o);return va(f,o,u,c)}var m;return i instanceof uv?u?(i.inject(u,c),[i.getName(c)]):[i]:ar(i)?up(i):Array.isArray(i)?Array.prototype.concat.apply(ao,i.map(function(p){return va(p,o,u,c)})):[i.toString()]}function dp(i){for(var o=0;o<i.length;o+=1){var u=i[o];if(qa(u)&&!Rd(u))return!1}return!0}var hv=ep(no),mv=(function(){function i(o,u,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&dp(o),this.componentId=u,this.baseHash=qi(hv,u),this.baseStyle=c,Js.registerId(u)}return i.prototype.generateAndInjectStyles=function(o,u,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,u,c).className:"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=Ya(f,this.staticRulesId);else{var m=yd(va(this.rules,o,u,c)),p=bd(qi(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,p)){var j=c(m,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,j)}f=Ya(f,p),this.staticRulesId=p}else{for(var y=qi(this.baseHash,c.hash),x="",T=0;T<this.rules.length;T++){var w=this.rules[T];if(typeof w=="string")x+=w;else if(w){var N=yd(va(w,o,u,c));y=qi(y,N+T),x+=N}}if(x){var G=bd(y>>>0);if(!u.hasNameForId(this.componentId,G)){var V=c(x,".".concat(G),void 0,this.componentId);u.insertRules(this.componentId,G,V)}f=Ya(f,G)}}return{className:f,css:typeof window>"u"?u.getTag().getGroup(Ki(this.componentId)):""}},i})(),ir=mn?{Provider:function(i){return i.children},Consumer:function(i){return(0,i.children)(void 0)}}:Ie.createContext(void 0);ir.Consumer;function gv(i){if(mn)return i.children;var o=Ie.useContext(ir),u=Ie.useMemo(function(){return(function(c,f){if(!c)throw Ka(14);if(qa(c)){var m=c(f);return m}if(Array.isArray(c)||typeof c!="object")throw Ka(8);return f?et(et({},f),c):c})(i.theme,o)},[i.theme,o]);return i.children?Ie.createElement(ir.Provider,{value:u},i.children):null}var Bu={};function pv(i,o,u){var c=Rd(i),f=i,m=!Ru(i),p=o.attrs,j=p===void 0?ao:p,y=o.componentId,x=y===void 0?(function(W,I){var $=typeof W!="string"?"sc":l0(W);Bu[$]=(Bu[$]||0)+1;var U="".concat($,"-").concat(tp(no+$+Bu[$]));return I?"".concat(I,"-").concat(U):U})(o.displayName,o.parentComponentId):y,T=o.displayName,w=T===void 0?(function(W){return Ru(W)?"styled.".concat(W):"Styled(".concat(Yy(W),")")})(i):T,N=o.displayName&&o.componentId?"".concat(l0(o.displayName),"-").concat(o.componentId):o.componentId||x,G=c&&f.attrs?f.attrs.concat(j).filter(Boolean):j,V=o.shouldForwardProp;if(c&&f.shouldForwardProp){var q=f.shouldForwardProp;if(o.shouldForwardProp){var K=o.shouldForwardProp;V=function(W,I){return q(W,I)&&K(W,I)}}else V=q}var O=new mv(u,N,c?f.componentStyle:void 0);function Y(W,I){return(function($,U,re){var be=$.attrs,ue=$.componentStyle,Ue=$.defaultProps,ke=$.foldedComponentIds,xt=$.styledComponentId,ct=$.target,bt=mn?void 0:Ie.useContext(ir),R=wd(),Z=$.shouldForwardProp||R.shouldForwardProp,te=P0(U,bt,Ue)||Fi,de=(function(qe,Ee,sn){for(var on,yt=et(et({},Ee),{className:void 0,theme:sn}),Qa=0;Qa<qe.length;Qa+=1){var Ot=qa(on=qe[Qa])?on(yt):on;for(var cn in Ot)cn==="className"?yt.className=Ya(yt.className,Ot[cn]):cn==="style"?yt.style=et(et({},yt.style),Ot[cn]):yt[cn]=Ot[cn]}return"className"in Ee&&typeof Ee.className=="string"&&(yt.className=Ya(yt.className,Ee.className)),yt})(be,U,te),ye=de.as||ct,S={};for(var B in de)de[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&de.theme===te||(B==="forwardedAs"?S.as=de.forwardedAs:Z&&!Z(B,ye)||(S[B]=de[B]));var Q=(function(qe,Ee){var sn=wd(),on=qe.generateAndInjectStyles(Ee,sn.styleSheet,sn.stylis);return on})(ue,de),X=Q.className,ae=Q.css,se=Ya(ke,xt);X&&(se+=" "+X),de.className&&(se+=" "+de.className),S[Ru(ye)&&!I0.has(ye)?"class":"className"]=se,re&&(S.ref=re);var xe=M.createElement(ye,S);return mn&&ae?Ie.createElement(Ie.Fragment,null,Ie.createElement("style",{precedence:"styled-components",href:"sc-".concat(xt,"-").concat(X),children:ae}),xe):xe})(L,W,I)}Y.displayName=w;var L=Ie.forwardRef(Y);return L.attrs=G,L.componentStyle=O,L.displayName=w,L.shouldForwardProp=V,L.foldedComponentIds=c?Ya(f.foldedComponentIds,f.styledComponentId):"",L.styledComponentId=N,L.target=c?f.target:i,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=c?(function(I){for(var $=[],U=1;U<arguments.length;U++)$[U-1]=arguments[U];for(var re=0,be=$;re<be.length;re++)vd(I,be[re],!0);return I})({},f.defaultProps,W):W}}),Bd(L,function(){return".".concat(L.styledComponentId)}),m&&lp(L,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function m0(i,o){for(var u=[i[0]],c=0,f=o.length;c<f;c+=1)u.push(o[c],i[c+1]);return u}var g0=function(i){return Object.assign(i,{isCss:!0})};function fp(i){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];if(qa(i)||ar(i))return g0(va(m0(ao,tr([i],o,!0))));var c=i;return o.length===0&&c.length===1&&typeof c[0]=="string"?va(c):g0(va(m0(c,o)))}function zd(i,o,u){if(u===void 0&&(u=Fi),!o)throw Ka(1,o);var c=function(f){for(var m=[],p=1;p<arguments.length;p++)m[p-1]=arguments[p];return i(o,u,fp.apply(void 0,tr([f],m,!1)))};return c.attrs=function(f){return zd(i,o,et(et({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return zd(i,o,et(et({},u),f))},c}var hp=function(i){return zd(pv,i)},h=hp;I0.forEach(function(i){h[i]=hp(i)});var xv=(function(){function i(o,u){this.rules=o,this.componentId=u,this.isStatic=dp(o),Js.registerId(this.componentId+1)}return i.prototype.createStyles=function(o,u,c,f){var m=f(yd(va(this.rules,u,c,f)),""),p=this.componentId+o;c.insertRules(p,p,m)},i.prototype.removeStyles=function(o,u){u.clearRules(this.componentId+o)},i.prototype.renderStyles=function(o,u,c,f){o>2&&Js.registerId(this.componentId+o);var m=this.componentId+o;this.isStatic?c.hasNameForId(m,m)||this.createStyles(o,u,c,f):(this.removeStyles(o,c),this.createStyles(o,u,c,f))},i})();function bv(i){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var c=fp.apply(void 0,tr([i],o,!1)),f="sc-global-".concat(tp(JSON.stringify(c))),m=new xv(c,f),p=new WeakMap,j=function(y){var x=wd(),T=mn?void 0:Ie.useContext(ir),w=p.get(x.styleSheet);if(w===void 0&&(w=x.styleSheet.allocateGSInstance(f),p.set(x.styleSheet,w)),(typeof window>"u"||!x.styleSheet.server)&&(function(K,O,Y,L,W){if(m.isStatic)m.renderStyles(K,Hy,Y,W);else{var I=et(et({},O),{theme:P0(O,L,j.defaultProps)});m.renderStyles(K,I,Y,W)}})(w,y,x.styleSheet,T,x.stylis),!mn){var N=Ie.useRef(!0);Ie.useLayoutEffect(function(){return N.current=!1,function(){N.current=!0,queueMicrotask(function(){N.current&&(m.removeStyles(w,x.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(f,'"]')).forEach(function(K){return K.remove()}))})}},[w,x.styleSheet])}if(mn){var G=f+w,V=typeof window>"u"?x.styleSheet.getTag().getGroup(Ki(G)):"";if(V){var q="".concat(f,"-").concat(w);return Ie.createElement("style",{key:q,"data-styled-global":f,precedence:"styled-components",href:q,children:V})}}return null};return Ie.memo(j)}var p0="popstate";function yv(i={}){function o(c,f){let{pathname:m,search:p,hash:j}=c.location;return _d("",{pathname:m,search:p,hash:j},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:lr(f)}return Sv(o,u,null,i)}function He(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Bt(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function vv(){return Math.random().toString(36).substring(2,10)}function x0(i,o){return{usr:i.state,key:i.key,idx:o}}function _d(i,o,u=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?Ii(o):o,state:u,key:o&&o.key||c||vv()}}function lr({pathname:i="/",search:o="",hash:u=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Ii(i){let o={};if(i){let u=i.indexOf("#");u>=0&&(o.hash=i.substring(u),i=i.substring(0,u));let c=i.indexOf("?");c>=0&&(o.search=i.substring(c),i=i.substring(0,c)),i&&(o.pathname=i)}return o}function Sv(i,o,u,c={}){let{window:f=document.defaultView,v5Compat:m=!1}=c,p=f.history,j="POP",y=null,x=T();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function T(){return(p.state||{idx:null}).idx}function w(){j="POP";let K=T(),O=K==null?null:K-x;x=K,y&&y({action:j,location:q.location,delta:O})}function N(K,O){j="PUSH";let Y=_d(q.location,K,O);x=T()+1;let L=x0(Y,x),W=q.createHref(Y);try{p.pushState(L,"",W)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;f.location.assign(W)}m&&y&&y({action:j,location:q.location,delta:1})}function G(K,O){j="REPLACE";let Y=_d(q.location,K,O);x=T();let L=x0(Y,x),W=q.createHref(Y);p.replaceState(L,"",W),m&&y&&y({action:j,location:q.location,delta:0})}function V(K){return jv(K)}let q={get action(){return j},get location(){return i(f,p)},listen(K){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(p0,w),y=K,()=>{f.removeEventListener(p0,w),y=null}},createHref(K){return o(f,K)},createURL:V,encodeLocation(K){let O=V(K);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:N,replace:G,go(K){return p.go(K)}};return q}function jv(i,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),He(u,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:lr(i);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function mp(i,o,u="/"){return wv(i,o,u,!1)}function wv(i,o,u,c){let f=typeof o=="string"?Ii(o):o,m=Yn(f.pathname||"/",u);if(m==null)return null;let p=gp(i);zv(p);let j=null;for(let y=0;j==null&&y<p.length;++y){let x=Ov(m);j=Bv(p[y],x,c)}return j}function gp(i,o=[],u=[],c="",f=!1){let m=(p,j,y=f,x)=>{let T={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:j,route:p};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(c)&&y)return;He(T.relativePath.startsWith(c),`Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(c.length)}let w=Ln([c,T.relativePath]),N=u.concat(T);p.children&&p.children.length>0&&(He(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),gp(p.children,o,N,w,y)),!(p.path==null&&!p.index)&&o.push({path:w,score:kv(w,p.index),routesMeta:N})};return i.forEach((p,j)=>{if(p.path===""||!p.path?.includes("?"))m(p,j);else for(let y of pp(p.path))m(p,j,!0,y)}),o}function pp(i){let o=i.split("/");if(o.length===0)return[];let[u,...c]=o,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(c.length===0)return f?[m,""]:[m];let p=pp(c.join("/")),j=[];return j.push(...p.map(y=>y===""?m:[m,y].join("/"))),f&&j.push(...p),j.map(y=>i.startsWith("/")&&y===""?"/":y)}function zv(i){i.sort((o,u)=>o.score!==u.score?u.score-o.score:Rv(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var _v=/^:[\w-]+$/,Ev=3,Tv=2,Av=1,Cv=10,Mv=-2,b0=i=>i==="*";function kv(i,o){let u=i.split("/"),c=u.length;return u.some(b0)&&(c+=Mv),o&&(c+=Tv),u.filter(f=>!b0(f)).reduce((f,m)=>f+(_v.test(m)?Ev:m===""?Av:Cv),c)}function Rv(i,o){return i.length===o.length&&i.slice(0,-1).every((c,f)=>c===o[f])?i[i.length-1]-o[o.length-1]:0}function Bv(i,o,u=!1){let{routesMeta:c}=i,f={},m="/",p=[];for(let j=0;j<c.length;++j){let y=c[j],x=j===c.length-1,T=m==="/"?o:o.slice(m.length)||"/",w=Ws({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},T),N=y.route;if(!w&&x&&u&&!c[c.length-1].route.index&&(w=Ws({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},T)),!w)return null;Object.assign(f,w.params),p.push({params:f,pathname:Ln([m,w.pathname]),pathnameBase:Lv(Ln([m,w.pathnameBase])),route:N}),w.pathnameBase!=="/"&&(m=Ln([m,w.pathnameBase]))}return p}function Ws(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,c]=Dv(i.path,i.caseSensitive,i.end),f=o.match(u);if(!f)return null;let m=f[0],p=m.replace(/(.)\/+$/,"$1"),j=f.slice(1);return{params:c.reduce((x,{paramName:T,isOptional:w},N)=>{if(T==="*"){let V=j[N]||"";p=m.slice(0,m.length-V.length).replace(/(.)\/+$/,"$1")}const G=j[N];return w&&!G?x[T]=void 0:x[T]=(G||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:p,pattern:i}}function Dv(i,o=!1,u=!0){Bt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,j,y)=>(c.push({paramName:j,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(c.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function Ov(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Bt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function Yn(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=i.charAt(u);return c&&c!=="/"?null:i.slice(u)||"/"}var xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nv=i=>xp.test(i);function Hv(i,o="/"){let{pathname:u,search:c="",hash:f=""}=typeof i=="string"?Ii(i):i,m;if(u)if(Nv(u))m=u;else{if(u.includes("//")){let p=u;u=u.replace(/\/\/+/g,"/"),Bt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${u}`)}u.startsWith("/")?m=y0(u.substring(1),"/"):m=y0(u,o)}else m=o;return{pathname:m,search:Gv(c),hash:Yv(f)}}function y0(i,o){let u=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Du(i,o,u,c){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uv(i){return i.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Dd(i){let o=Uv(i);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function Od(i,o,u,c=!1){let f;typeof i=="string"?f=Ii(i):(f={...i},He(!f.pathname||!f.pathname.includes("?"),Du("?","pathname","search",f)),He(!f.pathname||!f.pathname.includes("#"),Du("#","pathname","hash",f)),He(!f.search||!f.search.includes("#"),Du("#","search","hash",f)));let m=i===""||f.pathname==="",p=m?"/":f.pathname,j;if(p==null)j=u;else{let w=o.length-1;if(!c&&p.startsWith("..")){let N=p.split("/");for(;N[0]==="..";)N.shift(),w-=1;f.pathname=N.join("/")}j=w>=0?o[w]:"/"}let y=Hv(f,j),x=p&&p!=="/"&&p.endsWith("/"),T=(m||p===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(x||T)&&(y.pathname+="/"),y}var Ln=i=>i.join("/").replace(/\/\/+/g,"/"),Lv=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Gv=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Yv=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Vv=class{constructor(i,o,u,c=!1){this.status=i,this.statusText=o||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function qv(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Kv(i){return i.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function yp(i,o){let u=i;if(typeof u!="string"||!xp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,f=!1;if(bp)try{let m=new URL(window.location.href),p=u.startsWith("//")?new URL(m.protocol+u):new URL(u),j=Yn(p.pathname,o);p.origin===m.origin&&j!=null?u=j+p.search+p.hash:f=!0}catch{Bt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vp=["POST","PUT","PATCH","DELETE"];new Set(vp);var Zv=["GET",...vp];new Set(Zv);var el=M.createContext(null);el.displayName="DataRouter";var io=M.createContext(null);io.displayName="DataRouterState";var Qv=M.createContext(!1),Sp=M.createContext({isTransitioning:!1});Sp.displayName="ViewTransition";var Xv=M.createContext(new Map);Xv.displayName="Fetchers";var $v=M.createContext(null);$v.displayName="Await";var Dt=M.createContext(null);Dt.displayName="Navigation";var rr=M.createContext(null);rr.displayName="Location";var pn=M.createContext({outlet:null,matches:[],isDataRoute:!1});pn.displayName="Route";var Nd=M.createContext(null);Nd.displayName="RouteError";var jp="REACT_ROUTER_ERROR",Jv="REDIRECT",Wv="ROUTE_ERROR_RESPONSE";function Fv(i){if(i.startsWith(`${jp}:${Jv}:{`))try{let o=JSON.parse(i.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Pv(i){if(i.startsWith(`${jp}:${Wv}:{`))try{let o=JSON.parse(i.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Vv(o.status,o.statusText,o.data)}catch{}}function Iv(i,{relative:o}={}){He(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=M.useContext(Dt),{hash:f,pathname:m,search:p}=sr(i,{relative:o}),j=m;return u!=="/"&&(j=m==="/"?u:Ln([u,m])),c.createHref({pathname:j,search:p,hash:f})}function tl(){return M.useContext(rr)!=null}function xn(){return He(tl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(rr).location}var wp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zp(i){M.useContext(Dt).static||M.useLayoutEffect(i)}function Hd(){let{isDataRoute:i}=M.useContext(pn);return i?fS():eS()}function eS(){He(tl(),"useNavigate() may be used only in the context of a <Router> component.");let i=M.useContext(el),{basename:o,navigator:u}=M.useContext(Dt),{matches:c}=M.useContext(pn),{pathname:f}=xn(),m=JSON.stringify(Dd(c)),p=M.useRef(!1);return zp(()=>{p.current=!0}),M.useCallback((y,x={})=>{if(Bt(p.current,wp),!p.current)return;if(typeof y=="number"){u.go(y);return}let T=Od(y,JSON.parse(m),f,x.relative==="path");i==null&&o!=="/"&&(T.pathname=T.pathname==="/"?o:Ln([o,T.pathname])),(x.replace?u.replace:u.push)(T,x.state,x)},[o,u,m,f,i])}M.createContext(null);function sr(i,{relative:o}={}){let{matches:u}=M.useContext(pn),{pathname:c}=xn(),f=JSON.stringify(Dd(u));return M.useMemo(()=>Od(i,JSON.parse(f),c,o==="path"),[i,f,c,o])}function tS(i,o){return _p(i,o)}function _p(i,o,u,c,f){He(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=M.useContext(Dt),{matches:p}=M.useContext(pn),j=p[p.length-1],y=j?j.params:{},x=j?j.pathname:"/",T=j?j.pathnameBase:"/",w=j&&j.route;{let Y=w&&w.path||"";Tp(x,!w||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let N=xn(),G;if(o){let Y=typeof o=="string"?Ii(o):o;He(T==="/"||Y.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),G=Y}else G=N;let V=G.pathname||"/",q=V;if(T!=="/"){let Y=T.replace(/^\//,"").split("/");q="/"+V.replace(/^\//,"").split("/").slice(Y.length).join("/")}let K=mp(i,{pathname:q});Bt(w||K!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),Bt(K==null||K[K.length-1].route.element!==void 0||K[K.length-1].route.Component!==void 0||K[K.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=rS(K&&K.map(Y=>Object.assign({},Y,{params:Object.assign({},y,Y.params),pathname:Ln([T,m.encodeLocation?m.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?T:Ln([T,m.encodeLocation?m.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),p,u,c,f);return o&&O?M.createElement(rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},O):O}function nS(){let i=dS(),o=qv(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",i),p=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:m},"ErrorBoundary")," or"," ",M.createElement("code",{style:m},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},o),u?M.createElement("pre",{style:f},u):null,p)}var aS=M.createElement(nS,null),Ep=class extends M.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){this.props.onError?this.props.onError(i,o):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const u=Pv(i.digest);u&&(i=u)}let o=i!==void 0?M.createElement(pn.Provider,{value:this.props.routeContext},M.createElement(Nd.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?M.createElement(iS,{error:i},o):o}};Ep.contextType=Qv;var Ou=new WeakMap;function iS({children:i,error:o}){let{basename:u}=M.useContext(Dt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=Fv(o.digest);if(c){let f=Ou.get(o);if(f)throw f;let m=yp(c.location,u);if(bp&&!Ou.get(o))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Ou.set(o,p),p}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return i}function lS({routeContext:i,match:o,children:u}){let c=M.useContext(el);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),M.createElement(pn.Provider,{value:i},u)}function rS(i,o=[],u=null,c=null,f=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let m=i,p=u?.errors;if(p!=null){let T=m.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);He(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,T+1))}let j=!1,y=-1;if(u)for(let T=0;T<m.length;T++){let w=m[T];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=T),w.route.id){let{loaderData:N,errors:G}=u,V=w.route.loader&&!N.hasOwnProperty(w.route.id)&&(!G||G[w.route.id]===void 0);if(w.route.lazy||V){j=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let x=u&&c?(T,w)=>{c(T,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Kv(u.matches),errorInfo:w})}:void 0;return m.reduceRight((T,w,N)=>{let G,V=!1,q=null,K=null;u&&(G=p&&w.route.id?p[w.route.id]:void 0,q=w.route.errorElement||aS,j&&(y<0&&N===0?(Tp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,K=null):y===N&&(V=!0,K=w.route.hydrateFallbackElement||null)));let O=o.concat(m.slice(0,N+1)),Y=()=>{let L;return G?L=q:V?L=K:w.route.Component?L=M.createElement(w.route.Component,null):w.route.element?L=w.route.element:L=T,M.createElement(lS,{match:w,routeContext:{outlet:T,matches:O,isDataRoute:u!=null},children:L})};return u&&(w.route.ErrorBoundary||w.route.errorElement||N===0)?M.createElement(Ep,{location:u.location,revalidation:u.revalidation,component:q,error:G,children:Y(),routeContext:{outlet:null,matches:O,isDataRoute:!0},onError:x}):Y()},null)}function Ud(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sS(i){let o=M.useContext(el);return He(o,Ud(i)),o}function oS(i){let o=M.useContext(io);return He(o,Ud(i)),o}function cS(i){let o=M.useContext(pn);return He(o,Ud(i)),o}function Ld(i){let o=cS(i),u=o.matches[o.matches.length-1];return He(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function uS(){return Ld("useRouteId")}function dS(){let i=M.useContext(Nd),o=oS("useRouteError"),u=Ld("useRouteError");return i!==void 0?i:o.errors?.[u]}function fS(){let{router:i}=sS("useNavigate"),o=Ld("useNavigate"),u=M.useRef(!1);return zp(()=>{u.current=!0}),M.useCallback(async(f,m={})=>{Bt(u.current,wp),u.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:o,...m}))},[i,o])}var v0={};function Tp(i,o,u){!o&&!v0[i]&&(v0[i]=!0,Bt(!1,u))}M.memo(hS);function hS({routes:i,future:o,state:u,onError:c}){return _p(i,void 0,u,c,o)}function qs({to:i,replace:o,state:u,relative:c}){He(tl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=M.useContext(Dt);Bt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=M.useContext(pn),{pathname:p}=xn(),j=Hd(),y=Od(i,Dd(m),p,c==="path"),x=JSON.stringify(y);return M.useEffect(()=>{j(JSON.parse(x),{replace:o,state:u,relative:c})},[j,x,c,o,u]),null}function ba(i){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mS({basename:i="/",children:o=null,location:u,navigationType:c="POP",navigator:f,static:m=!1,unstable_useTransitions:p}){He(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=i.replace(/^\/*/,"/"),y=M.useMemo(()=>({basename:j,navigator:f,static:m,unstable_useTransitions:p,future:{}}),[j,f,m,p]);typeof u=="string"&&(u=Ii(u));let{pathname:x="/",search:T="",hash:w="",state:N=null,key:G="default"}=u,V=M.useMemo(()=>{let q=Yn(x,j);return q==null?null:{location:{pathname:q,search:T,hash:w,state:N,key:G},navigationType:c}},[j,x,T,w,N,G,c]);return Bt(V!=null,`<Router basename="${j}"> is not able to match the URL "${x}${T}${w}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:M.createElement(Dt.Provider,{value:y},M.createElement(rr.Provider,{children:o,value:V}))}function gS({children:i,location:o}){return tS(Ed(i),o)}function Ed(i,o=[]){let u=[];return M.Children.forEach(i,(c,f)=>{if(!M.isValidElement(c))return;let m=[...o,f];if(c.type===M.Fragment){u.push.apply(u,Ed(c.props.children,m));return}He(c.type===ba,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=Ed(c.props.children,m)),u.push(p)}),u}var Ks="get",Zs="application/x-www-form-urlencoded";function lo(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function pS(i){return lo(i)&&i.tagName.toLowerCase()==="button"}function xS(i){return lo(i)&&i.tagName.toLowerCase()==="form"}function bS(i){return lo(i)&&i.tagName.toLowerCase()==="input"}function yS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function vS(i,o){return i.button===0&&(!o||o==="_self")&&!yS(i)}function Td(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((o,u)=>{let c=i[u];return o.concat(Array.isArray(c)?c.map(f=>[u,f]):[[u,c]])},[]))}function SS(i,o){let u=Td(i);return o&&o.forEach((c,f)=>{u.has(f)||o.getAll(f).forEach(m=>{u.append(f,m)})}),u}var _s=null;function jS(){if(_s===null)try{new FormData(document.createElement("form"),0),_s=!1}catch{_s=!0}return _s}var wS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nu(i){return i!=null&&!wS.has(i)?(Bt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zs}"`),null):i}function zS(i,o){let u,c,f,m,p;if(xS(i)){let j=i.getAttribute("action");c=j?Yn(j,o):null,u=i.getAttribute("method")||Ks,f=Nu(i.getAttribute("enctype"))||Zs,m=new FormData(i)}else if(pS(i)||bS(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||j.getAttribute("action");if(c=y?Yn(y,o):null,u=i.getAttribute("formmethod")||j.getAttribute("method")||Ks,f=Nu(i.getAttribute("formenctype"))||Nu(j.getAttribute("enctype"))||Zs,m=new FormData(j,i),!jS()){let{name:x,type:T,value:w}=i;if(T==="image"){let N=x?`${x}.`:"";m.append(`${N}x`,"0"),m.append(`${N}y`,"0")}else x&&m.append(x,w)}}else{if(lo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ks,c=null,f=Zs,p=i}return m&&f==="text/plain"&&(p=m,m=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gd(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function _S(i,o,u,c){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:o&&Yn(f.pathname,o)==="/"?f.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function ES(i,o){if(i.id in o)return o[i.id];try{let u=await import(i.module);return o[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function TS(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function AS(i,o,u){let c=await Promise.all(i.map(async f=>{let m=o.routes[f.route.id];if(m){let p=await ES(m,u);return p.links?p.links():[]}return[]}));return RS(c.flat(1).filter(TS).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function S0(i,o,u,c,f,m){let p=(y,x)=>u[x]?y.route.id!==u[x].route.id:!0,j=(y,x)=>u[x].pathname!==y.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==y.params["*"];return m==="assets"?o.filter((y,x)=>p(y,x)||j(y,x)):m==="data"?o.filter((y,x)=>{let T=c.routes[y.route.id];if(!T||!T.hasLoader)return!1;if(p(y,x)||j(y,x))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function CS(i,o,{includeHydrateFallback:u}={}){return MS(i.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function MS(i){return[...new Set(i)]}function kS(i){let o={},u=Object.keys(i).sort();for(let c of u)o[c]=i[c];return o}function RS(i,o){let u=new Set;return new Set(o),i.reduce((c,f)=>{let m=JSON.stringify(kS(f));return u.has(m)||(u.add(m),c.push({key:m,link:f})),c},[])}function Ap(){let i=M.useContext(el);return Gd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function BS(){let i=M.useContext(io);return Gd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Yd=M.createContext(void 0);Yd.displayName="FrameworkContext";function Cp(){let i=M.useContext(Yd);return Gd(i,"You must render this element inside a <HydratedRouter> element"),i}function DS(i,o){let u=M.useContext(Yd),[c,f]=M.useState(!1),[m,p]=M.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:x,onMouseLeave:T,onTouchStart:w}=o,N=M.useRef(null);M.useEffect(()=>{if(i==="render"&&p(!0),i==="viewport"){let q=O=>{O.forEach(Y=>{p(Y.isIntersecting)})},K=new IntersectionObserver(q,{threshold:.5});return N.current&&K.observe(N.current),()=>{K.disconnect()}}},[i]),M.useEffect(()=>{if(c){let q=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(q)}}},[c]);let G=()=>{f(!0)},V=()=>{f(!1),p(!1)};return u?i!=="intent"?[m,N,{}]:[m,N,{onFocus:Wl(j,G),onBlur:Wl(y,V),onMouseEnter:Wl(x,G),onMouseLeave:Wl(T,V),onTouchStart:Wl(w,G)}]:[!1,N,{}]}function Wl(i,o){return u=>{i&&i(u),u.defaultPrevented||o(u)}}function OS({page:i,...o}){let{router:u}=Ap(),c=M.useMemo(()=>mp(u.routes,i,u.basename),[u.routes,i,u.basename]);return c?M.createElement(HS,{page:i,matches:c,...o}):null}function NS(i){let{manifest:o,routeModules:u}=Cp(),[c,f]=M.useState([]);return M.useEffect(()=>{let m=!1;return AS(i,o,u).then(p=>{m||f(p)}),()=>{m=!0}},[i,o,u]),c}function HS({page:i,matches:o,...u}){let c=xn(),{future:f,manifest:m,routeModules:p}=Cp(),{basename:j}=Ap(),{loaderData:y,matches:x}=BS(),T=M.useMemo(()=>S0(i,o,x,m,c,"data"),[i,o,x,m,c]),w=M.useMemo(()=>S0(i,o,x,m,c,"assets"),[i,o,x,m,c]),N=M.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let q=new Set,K=!1;if(o.forEach(Y=>{let L=m.routes[Y.route.id];!L||!L.hasLoader||(!T.some(W=>W.route.id===Y.route.id)&&Y.route.id in y&&p[Y.route.id]?.shouldRevalidate||L.hasClientLoader?K=!0:q.add(Y.route.id))}),q.size===0)return[];let O=_S(i,j,f.unstable_trailingSlashAwareDataRequests,"data");return K&&q.size>0&&O.searchParams.set("_routes",o.filter(Y=>q.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[O.pathname+O.search]},[j,f.unstable_trailingSlashAwareDataRequests,y,c,m,T,o,i,p]),G=M.useMemo(()=>CS(w,m),[w,m]),V=NS(w);return M.createElement(M.Fragment,null,N.map(q=>M.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...u})),G.map(q=>M.createElement("link",{key:q,rel:"modulepreload",href:q,...u})),V.map(({key:q,link:K})=>M.createElement("link",{key:q,nonce:u.nonce,...K})))}function US(...i){return o=>{i.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var LS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{LS&&(window.__reactRouterVersion="7.12.0")}catch{}function GS({basename:i,children:o,unstable_useTransitions:u,window:c}){let f=M.useRef();f.current==null&&(f.current=yv({window:c,v5Compat:!0}));let m=f.current,[p,j]=M.useState({action:m.action,location:m.location}),y=M.useCallback(x=>{u===!1?j(x):M.startTransition(()=>j(x))},[u]);return M.useLayoutEffect(()=>m.listen(y),[m,y]),M.createElement(mS,{basename:i,children:o,location:p.location,navigationType:p.action,navigator:m,unstable_useTransitions:u})}var Mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=M.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:f,reloadDocument:m,replace:p,state:j,target:y,to:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:N,...G},V){let{basename:q,unstable_useTransitions:K}=M.useContext(Dt),O=typeof x=="string"&&Mp.test(x),Y=yp(x,q);x=Y.to;let L=Iv(x,{relative:f}),[W,I,$]=DS(c,G),U=KS(x,{replace:p,state:j,target:y,preventScrollReset:T,relative:f,viewTransition:w,unstable_defaultShouldRevalidate:N,unstable_useTransitions:K});function re(ue){o&&o(ue),ue.defaultPrevented||U(ue)}let be=M.createElement("a",{...G,...$,href:Y.absoluteURL||L,onClick:Y.isExternal||m?o:re,ref:US(V,I),target:y,"data-discover":!O&&u==="render"?"true":void 0});return W&&!O?M.createElement(M.Fragment,null,be,M.createElement(OS,{page:L})):be});ro.displayName="Link";var YS=M.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:f=!1,style:m,to:p,viewTransition:j,children:y,...x},T){let w=sr(p,{relative:x.relative}),N=xn(),G=M.useContext(io),{navigator:V,basename:q}=M.useContext(Dt),K=G!=null&&WS(w)&&j===!0,O=V.encodeLocation?V.encodeLocation(w).pathname:w.pathname,Y=N.pathname,L=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;u||(Y=Y.toLowerCase(),L=L?L.toLowerCase():null,O=O.toLowerCase()),L&&q&&(L=Yn(L,q)||L);const W=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let I=Y===O||!f&&Y.startsWith(O)&&Y.charAt(W)==="/",$=L!=null&&(L===O||!f&&L.startsWith(O)&&L.charAt(O.length)==="/"),U={isActive:I,isPending:$,isTransitioning:K},re=I?o:void 0,be;typeof c=="function"?be=c(U):be=[c,I?"active":null,$?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let ue=typeof m=="function"?m(U):m;return M.createElement(ro,{...x,"aria-current":re,className:be,ref:T,style:ue,to:p,viewTransition:j},typeof y=="function"?y(U):y)});YS.displayName="NavLink";var VS=M.forwardRef(({discover:i="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:f,state:m,method:p=Ks,action:j,onSubmit:y,relative:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:N,...G},V)=>{let{unstable_useTransitions:q}=M.useContext(Dt),K=$S(),O=JS(j,{relative:x}),Y=p.toLowerCase()==="get"?"get":"post",L=typeof j=="string"&&Mp.test(j),W=I=>{if(y&&y(I),I.defaultPrevented)return;I.preventDefault();let $=I.nativeEvent.submitter,U=$?.getAttribute("formmethod")||p,re=()=>K($||I.currentTarget,{fetcherKey:o,method:U,navigate:u,replace:f,state:m,relative:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:N});q&&u!==!1?M.startTransition(()=>re()):re()};return M.createElement("form",{ref:V,method:Y,action:O,onSubmit:c?y:W,...G,"data-discover":!L&&i==="render"?"true":void 0})});VS.displayName="Form";function qS(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kp(i){let o=M.useContext(el);return He(o,qS(i)),o}function KS(i,{target:o,replace:u,state:c,preventScrollReset:f,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:j,unstable_useTransitions:y}={}){let x=Hd(),T=xn(),w=sr(i,{relative:m});return M.useCallback(N=>{if(vS(N,o)){N.preventDefault();let G=u!==void 0?u:lr(T)===lr(w),V=()=>x(i,{replace:G,state:c,preventScrollReset:f,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:j});y?M.startTransition(()=>V()):V()}},[T,x,w,u,c,o,i,f,m,p,j,y])}function ZS(i){Bt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=M.useRef(Td(i)),u=M.useRef(!1),c=xn(),f=M.useMemo(()=>SS(c.search,u.current?null:o.current),[c.search]),m=Hd(),p=M.useCallback((j,y)=>{const x=Td(typeof j=="function"?j(new URLSearchParams(f)):j);u.current=!0,m("?"+x,y)},[m,f]);return[f,p]}var QS=0,XS=()=>`__${String(++QS)}__`;function $S(){let{router:i}=kp("useSubmit"),{basename:o}=M.useContext(Dt),u=uS(),c=i.fetch,f=i.navigate;return M.useCallback(async(m,p={})=>{let{action:j,method:y,encType:x,formData:T,body:w}=zS(m,o);if(p.navigate===!1){let N=p.fetcherKey||XS();await c(N,u,p.action||j,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:T,body:w,formMethod:p.method||y,formEncType:p.encType||x,flushSync:p.flushSync})}else await f(p.action||j,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:T,body:w,formMethod:p.method||y,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,f,o,u])}function JS(i,{relative:o}={}){let{basename:u}=M.useContext(Dt),c=M.useContext(pn);He(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),m={...sr(i||".",{relative:o})},p=xn();if(i==null){m.search=p.search;let j=new URLSearchParams(m.search),y=j.getAll("index");if(y.some(T=>T==="")){j.delete("index"),y.filter(w=>w).forEach(w=>j.append("index",w));let T=j.toString();m.search=T?`?${T}`:""}}return(!i||i===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Ln([u,m.pathname])),lr(m)}function WS(i,{relative:o}={}){let u=M.useContext(Sp);He(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=kp("useViewTransitionState"),f=sr(i,{relative:o});if(!u.isTransitioning)return!1;let m=Yn(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=Yn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Ws(f.pathname,p)!=null||Ws(f.pathname,m)!=null}const FS="/assets/logo-Hzr1jdtX.png",PS=h.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,IS=h.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,ej=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,tj=h.img`
  height: 40px;
  width: auto;
`,nj=h.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${i=>i.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,aj=h.div`
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
`,Hu=h(ro)`
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
`,ij=h.button`
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
`;function Es(){const i=xn(),[o,u]=M.useState(!1);return l.jsx(PS,{children:l.jsxs(IS,{children:[l.jsx(Hu,{to:"/",onClick:()=>u(!1),children:l.jsxs(ej,{children:[l.jsx(tj,{src:FS,alt:"SCKW Logo"}),l.jsx(nj,{children:"SC Konstanz-Wollmatingen e. V."})]})}),l.jsxs(ij,{"aria-label":"Menü öffnen/schließen","aria-expanded":o,"aria-controls":"mobile-nav",onClick:()=>u(f=>!f),children:["Menü",l.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),l.jsxs(aj,{id:"mobile-nav",$open:o,children:[l.jsx(Hu,{to:"/sponsoring",$active:i.pathname==="/sponsoring"||i.pathname==="/sponsoring-v2",onClick:()=>u(!1),children:"🤝 Sponsoring"}),l.jsx(Hu,{to:"/jobs",$active:i.pathname==="/jobs",onClick:()=>u(!1),children:"💼 Jobbörse"}),!1]})]})})}const lj=h.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Uu=h.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,rj=h(ro)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,sj=h.div`
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
`,oj=h.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Vd(){return l.jsx(lj,{children:l.jsxs(sj,{children:[l.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",l.jsx(Uu,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),l.jsxs(oj,{"aria-label":"Rechtliches",children:[l.jsx(rj,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),l.jsx(Uu,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),l.jsx(Uu,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const Gn=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),cj=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,uj=h.div`
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
`,dj=h.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,fj=h.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,hj=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,mj=h.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,gj=h.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,pj=h.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,xj=h.li`
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
`,bj=h.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,yj=h.span`
  flex: 1;
`,vj=h.a`
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
`,Sj=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,jj=h.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,wj=h.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,zj=h.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,_j=h.a`
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
`,Ej="sponsoring@sckw.de";function Qi({packages:i}){const o=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=p=>{const j=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},c=p=>{const j=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),y=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Ej}?subject=${y}&body=${x}`},f=p=>{const j=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},m=i.filter(p=>!p.title.includes("Platz-Renovierung"));return l.jsx(cj,{children:m.map((p,j)=>{const{isFullyBooked:y}=f(p),x=o(p.status),T=x==="vergeben"||y,w=y?"vergeben":x,N=p.keyBenefits||[];return l.jsxs(uj,{isVergeben:T,children:[l.jsxs(dj,{children:[l.jsx(fj,{children:u(p.title)}),l.jsx(hj,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!T&&l.jsx(mj,{children:p.price}),l.jsx(gj,{status:w,children:w==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),T&&p.sponsors&&p.sponsors.length>0?l.jsxs(Sj,{children:[p.sponsors[0].image&&l.jsx(jj,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),l.jsx(wj,{children:p.sponsors[0].name}),l.jsxs(zj,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&l.jsx(_j,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):l.jsx(pj,{children:N.map((G,V)=>l.jsxs(xj,{isHighlight:G.highlight,children:[l.jsx(bj,{children:G.icon}),l.jsx(yj,{children:G.text})]},V))}),l.jsx(vj,{href:T?void 0:c(p.title),isVergeben:T,children:T?"Vergeben":"Jetzt anfragen"})]},j)})})}const Tj=h.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${i=>i.theme.colors.bgMuted};
  border: 1px solid ${i=>i.theme.colors.border};
  overflow: hidden;
`,Aj=h.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Cj=h.button`
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
`,Mj=h.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${i=>i.theme.colors.primary};
`,kj=h.div`
  background: ${i=>i.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,Rj=h.div`
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
`,Bj=h.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Dj=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:l.jsxs(l.Fragment,{children:[l.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:l.jsxs(l.Fragment,{children:[l.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:l.jsx(l.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function Oj(){const[i,o]=M.useState([]),u=f=>{o(m=>m.includes(f)?m.filter(p=>p!==f):[...m,f])},c=(f,m)=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),u(m))};return l.jsx(Tj,{children:Dj.map(f=>{const m=i.includes(f.id);return l.jsxs(Aj,{children:[l.jsxs(Cj,{isOpen:m,onClick:()=>u(f.id),onKeyDown:p=>c(p,f.id),"aria-expanded":m,"aria-controls":`accordion-content-${f.id}`,children:[l.jsxs("span",{children:[l.jsx(Bj,{children:f.icon}),f.title]}),l.jsx(Mj,{isOpen:m,children:"▼"})]}),l.jsx(kj,{isOpen:m,id:`accordion-content-${f.id}`,role:"region","aria-labelledby":`accordion-header-${f.id}`,children:l.jsx(Rj,{children:f.content})})]},f.id)})})}const Rp="/assets/cheerleading_0-DQQGXi0R.jpg",Bp="/assets/cheerleading_1-NkLBARmH.jpg",Dp="/assets/cheerleading_2-CrezcZYL.jpg",Op="/assets/cheerleading_3-GN5rPHNN.jpg",Np="/assets/1-ClVWb4ei.png",Hp="/assets/10-Bwp2eIye.png",Up="/assets/11-W061sOUI.png",Lp="/assets/12-TjJyzl8L.png",Gp="/assets/13-ChUUCdQQ.png",Yp="/assets/14-BVhdRr98.png",Vp="/assets/2-CcfgIQYe.png",qp="/assets/3-DYiPkVd7.png",Kp="/assets/4-1upoqVoS.png",Zp="/assets/5-D0tadXAC.png",Qp="/assets/6-NJ4ELm_j.png",Xp="/assets/7-BXo4_Bcj.png",$p="/assets/8-BbOqEnj_.png",Jp="/assets/9-CIK0gi9o.png",Wp="/assets/herren_0-BVVgyt1l.jpg",Fp="/assets/herren_1-B8ywOnNy.jpg",Pp="/assets/herren_10-DPVQsg9B.jpg",Ip="/assets/herren_11-wfWG62H3.jpg",ex="/assets/herren_12-DEJSN2zG.jpg",tx="/assets/herren_13-F52vdukE.jpg",nx="/assets/herren_14-Cq9hoKfG.jpg",ax="/assets/herren_15-aYIFGauG.jpg",ix="/assets/herren_16-NYI2EaEN.jpg",lx="/assets/herren_17-B_52ysA2.jpg",rx="/assets/herren_18-DbwjVNKJ.jpg",sx="/assets/herren_19-BduD_J85.png",ox="/assets/herren_2--jFuixBF.jpg",cx="/assets/herren_3-BPz1zlkG.jpg",ux="/assets/herren_4-BZRrQaFr.jpg",dx="/assets/herren_5-D-QrfY2P.jpg",fx="/assets/herren_6-DWQvi6Am.jpg",hx="/assets/herren_7-BXO6B8Bt.jpg",mx="/assets/herren_8-Cg4rdr7T.jpg",gx="/assets/herren_9-DoLnTdRG.jpg",px="/assets/IMG-team-BGcF1agj.png",xx="/assets/IMG_5349-CpvIVKhM.jpg",bx="/assets/IMG_5369-DQ4CSwdg.jpg",yx="/assets/IMG_5421-BBzniIEN.jpg",vx="/assets/IMG_5442-D2PgutWB.jpg",Sx="/assets/IMG_5952-B9VW6Qie.jpg",jx="/assets/Unbenann324t-IPGo6eoQ.png",wx="/assets/image0-DDrU5aZn.jpeg",zx="/assets/image11-BNM8hTkT.jpeg",_x="/assets/image8-BUnedp9U.jpeg",Nj="/assets/grafhardenberg-Di5cVggE.png",Hj="/assets/horta-DydWIGV7.png",Uj="/assets/logans-BgpKwKYA.png",Lj="/assets/ricobet-DsVC-eZt.png",Gj="/assets/rothaus-DqkKD9yW.png",Yj="/assets/tasty-B2pSa1rE.png",Vj="/assets/cabin-window-B83r_CDB.jpg",qj="/assets/outside-9-xz17qL.jpg",Kj="/assets/shower-B75caJ-F.jpg",Zj="/assets/sitting-area-D7khB3Gw.jpg",Qj="/assets/toilet-BpMHYbhh.jpg",Xj=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Rp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Bp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Dp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Op,"../assets/gallery/damen/1.png":Np,"../assets/gallery/damen/10.png":Hp,"../assets/gallery/damen/11.png":Up,"../assets/gallery/damen/12.png":Lp,"../assets/gallery/damen/13.png":Gp,"../assets/gallery/damen/14.png":Yp,"../assets/gallery/damen/2.png":Vp,"../assets/gallery/damen/3.png":qp,"../assets/gallery/damen/4.png":Kp,"../assets/gallery/damen/5.png":Zp,"../assets/gallery/damen/6.png":Qp,"../assets/gallery/damen/7.png":Xp,"../assets/gallery/damen/8.png":$p,"../assets/gallery/damen/9.png":Jp,"../assets/gallery/herren/herren_0.jpg":Wp,"../assets/gallery/herren/herren_1.jpg":Fp,"../assets/gallery/herren/herren_10.jpg":Pp,"../assets/gallery/herren/herren_11.jpg":Ip,"../assets/gallery/herren/herren_12.jpg":ex,"../assets/gallery/herren/herren_13.jpg":tx,"../assets/gallery/herren/herren_14.jpg":nx,"../assets/gallery/herren/herren_15.jpg":ax,"../assets/gallery/herren/herren_16.jpg":ix,"../assets/gallery/herren/herren_17.jpg":lx,"../assets/gallery/herren/herren_18.jpg":rx,"../assets/gallery/herren/herren_19.png":sx,"../assets/gallery/herren/herren_2.jpg":ox,"../assets/gallery/herren/herren_3.jpg":cx,"../assets/gallery/herren/herren_4.jpg":ux,"../assets/gallery/herren/herren_5.jpg":dx,"../assets/gallery/herren/herren_6.jpg":fx,"../assets/gallery/herren/herren_7.jpg":hx,"../assets/gallery/herren/herren_8.jpg":mx,"../assets/gallery/herren/herren_9.jpg":gx,"../assets/gallery/jfv/IMG-team.png":px,"../assets/gallery/jfv/IMG_5349.jpg":xx,"../assets/gallery/jfv/IMG_5369.jpg":bx,"../assets/gallery/jfv/IMG_5421.jpg":yx,"../assets/gallery/jfv/IMG_5442.jpg":vx,"../assets/gallery/jfv/IMG_5952.jpg":Sx,"../assets/gallery/jfv/Unbenann324t.png":jx,"../assets/gallery/jfv/image0.jpeg":wx,"../assets/gallery/jfv/image11.jpeg":zx,"../assets/gallery/jfv/image8.jpeg":_x}),$j=Object.assign({"../assets/sponsors/grafhardenberg.png":Nj,"../assets/sponsors/horta.png":Hj,"../assets/sponsors/logans.png":Uj,"../assets/sponsors/ricobet.png":Lj,"../assets/sponsors/rothaus.png":Gj,"../assets/sponsors/tasty.png":Yj}),Jj=Object.assign({"../assets/renovation/cabin-window.jpg":Vj,"../assets/renovation/outside.jpg":qj,"../assets/renovation/shower.jpg":Kj,"../assets/renovation/sitting-area.jpg":Zj,"../assets/renovation/toilet.jpg":Qj}),Ex=i=>i.split("/").pop()?.toLowerCase()||"",Wj=i=>{const o=i.match(/gallery\/(.*?)\//);return o?o[1]:"Sonstige"};function Fj(i){const o=[...i];for(let u=o.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[o[u],o[c]]=[o[c],o[u]]}return o}const Tx=()=>{const i={};Object.entries(Xj).forEach(([c,f])=>{const m=Wj(c);i[m]||(i[m]=[]),i[m].push(f)}),Object.keys(i).forEach(c=>{i[c]=Fj(i[c])});const o={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{i[c]&&(o[c]=i[c])}),Object.keys(i).forEach(c=>{u.includes(c.toLowerCase())||(o[c]=i[c])}),o},Pj=()=>{const i={};return Object.entries($j).forEach(([o,u])=>{const c=Ex(o);i[c]=u}),i},Ax=()=>{const i={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(Jj).forEach(([o,u])=>{const c=Ex(o);c.includes("sitting")?i.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?i.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&i.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?i.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?i.waschkueche.push({src:u,alt:"Dusche"}):i.waschkueche.push({src:u,alt:"Waschküche"}))}),i},kt=i=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Rp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Bp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Dp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Op,"../assets/gallery/damen/1.png":Np,"../assets/gallery/damen/10.png":Hp,"../assets/gallery/damen/11.png":Up,"../assets/gallery/damen/12.png":Lp,"../assets/gallery/damen/13.png":Gp,"../assets/gallery/damen/14.png":Yp,"../assets/gallery/damen/2.png":Vp,"../assets/gallery/damen/3.png":qp,"../assets/gallery/damen/4.png":Kp,"../assets/gallery/damen/5.png":Zp,"../assets/gallery/damen/6.png":Qp,"../assets/gallery/damen/7.png":Xp,"../assets/gallery/damen/8.png":$p,"../assets/gallery/damen/9.png":Jp,"../assets/gallery/herren/herren_0.jpg":Wp,"../assets/gallery/herren/herren_1.jpg":Fp,"../assets/gallery/herren/herren_10.jpg":Pp,"../assets/gallery/herren/herren_11.jpg":Ip,"../assets/gallery/herren/herren_12.jpg":ex,"../assets/gallery/herren/herren_13.jpg":tx,"../assets/gallery/herren/herren_14.jpg":nx,"../assets/gallery/herren/herren_15.jpg":ax,"../assets/gallery/herren/herren_16.jpg":ix,"../assets/gallery/herren/herren_17.jpg":lx,"../assets/gallery/herren/herren_18.jpg":rx,"../assets/gallery/herren/herren_19.png":sx,"../assets/gallery/herren/herren_2.jpg":ox,"../assets/gallery/herren/herren_3.jpg":cx,"../assets/gallery/herren/herren_4.jpg":ux,"../assets/gallery/herren/herren_5.jpg":dx,"../assets/gallery/herren/herren_6.jpg":fx,"../assets/gallery/herren/herren_7.jpg":hx,"../assets/gallery/herren/herren_8.jpg":mx,"../assets/gallery/herren/herren_9.jpg":gx,"../assets/gallery/jfv/IMG-team.png":px,"../assets/gallery/jfv/IMG_5349.jpg":xx,"../assets/gallery/jfv/IMG_5369.jpg":bx,"../assets/gallery/jfv/IMG_5421.jpg":yx,"../assets/gallery/jfv/IMG_5442.jpg":vx,"../assets/gallery/jfv/IMG_5952.jpg":Sx,"../assets/gallery/jfv/Unbenann324t.png":jx,"../assets/gallery/jfv/image0.jpeg":wx,"../assets/gallery/jfv/image11.jpeg":zx,"../assets/gallery/jfv/image8.jpeg":_x})).find(([c])=>c.includes(i));return u?u[1]:""},qd=(i,o)=>kt(`${i}/${i}_${o}.jpg`);Tx(),Pj(),Ax();function Ij(){const i=Tx(),[o,u]=M.useState(null);return M.useEffect(()=>{if(!o)return;const c=f=>{f.key==="Escape"&&u(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[o]),l.jsxs("section",{children:[l.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([c,f])=>l.jsxs("div",{style:{marginBottom:"2.5rem"},children:[l.jsx(e5,{children:c.toUpperCase()}),l.jsx(t5,{children:f.map((m,p)=>l.jsx(n5,{src:m,alt:`Bild ${p+1} aus ${c}`,onClick:()=>u({folder:c,idx:p}),style:{cursor:"pointer"}},p))}),o&&o.folder===c&&l.jsx(a5,{onClick:()=>u(null),children:l.jsxs(i5,{onClick:m=>m.stopPropagation(),children:[l.jsx(l5,{src:f[o.idx],alt:`Großansicht aus ${c}`}),l.jsx(r5,{onClick:()=>u(null),title:"Schließen",children:"×"})]})})]},c))]})}const e5=h.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,t5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,n5=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,a5=h.div`
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
`,i5=h.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,l5=h.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,r5=h.button`
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
`,s5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,o5=h.div`
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
`,c5=h.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,u5=h.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,d5=h.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,f5=h.div`
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
`,h5=h.a`
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
`;function Lu({icon:i,title:o,description:u,packages:c,buttonHref:f,buttonText:m}){return l.jsxs(o5,{children:[l.jsx(c5,{children:i}),l.jsx(u5,{children:o}),l.jsx(d5,{children:u}),l.jsx(f5,{children:c.map((p,j)=>l.jsxs("div",{children:[p,j<c.length-1&&l.jsx("br",{})]},j))}),l.jsx(h5,{href:f,children:m})]})}const m5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,g5=h.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,p5=h.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,x5=h.p`
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
`;function Cx({headline:i,description:o,contactInfos:u}){const c=f=>{f.preventDefault();const m=f.currentTarget,p=new FormData(m);if(String(p.get("website")||"").trim()!=="")return;const y=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),T=String(p.get("email")||"").trim(),w=String(p.get("phone")||"").trim(),N={};if(y||(N.firstName="Bitte Vornamen angeben"),x||(N.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T)||(N.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(w)||(N.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(N).length>0){const G=Object.keys(N)[0],V=m.querySelector(`[name="${G}"]`);V&&V.focus(),alert(Object.values(N).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),m.reset()};return l.jsx(b5,{id:"kontakt",children:l.jsxs(y5,{children:[l.jsx(M5,{children:i}),l.jsx(k5,{children:o}),l.jsx(m5,{children:u.map((f,m)=>l.jsxs(g5,{children:[l.jsxs(p5,{children:[f.icon," ",f.title]}),l.jsx(x5,{$isEmail:f.isEmail,children:f.isEmail?l.jsx("a",{href:`mailto:${f.content}`,children:f.content}):f.content})]},m))}),l.jsxs(v5,{children:[l.jsx(S5,{children:"Kontakt aufnehmen"}),l.jsx(j5,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),l.jsxs(w5,{noValidate:!0,onSubmit:c,children:[l.jsxs(Gu,{children:[l.jsxs(Il,{children:[l.jsx("label",{htmlFor:"firstName",children:"Vorname"}),l.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),l.jsxs(Il,{children:[l.jsx("label",{htmlFor:"lastName",children:"Nachname"}),l.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),l.jsxs(Gu,{children:[l.jsxs(Il,{children:[l.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),l.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),l.jsxs(Il,{children:[l.jsx("label",{htmlFor:"phone",children:"Telefon"}),l.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),l.jsx(Gu,{children:l.jsxs(z5,{children:[l.jsx("label",{htmlFor:"email",children:"E-Mail"}),l.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),l.jsxs(_5,{"aria-hidden":"true",tabIndex:-1,children:[l.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),l.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),l.jsxs(E5,{children:[l.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),l.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",l.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),l.jsxs(T5,{children:[l.jsx(A5,{type:"submit",children:"Absenden"}),l.jsxs(C5,{children:["Alternativ:"," ",l.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const b5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,y5=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,v5=h.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,S5=h.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,j5=h.p`
  margin: 0 0 1rem 0;
  color: #555;
`,w5=h.form`
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
`,Gu=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,Il=h.div`
  display: flex;
  flex-direction: column;
`,z5=h(Il)`
  grid-column: 1 / -1;
`,_5=h.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,E5=h.div`
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
`,T5=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,A5=h.button`
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
`,C5=h.span`
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
`,M5=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,k5=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,R5=h.section`
  background: url("${qd("herren",4)}") center/cover;
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
`,B5=h.h1`
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
`,D5=h.h2`
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
`,j0=h.a`
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
`,O5=h.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,N5=h.main`
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
`,Fl=h.h2`
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
`,H5=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,U5=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,L5=h.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,G5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,Y5=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,V5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,w0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,z0=h.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,_0=h.ul`
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
`,q5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,K5=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,Z5=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,Q5=h.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,X5=h.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,$5=h.ul`
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
`,Yu=h.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,Vu=h.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,qu=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ku=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Zu=h.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,Qu=h.div`
  font-size: 0.98rem;
  color: #666;
`,J5=h.div`
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
`,W5=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,F5=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,P5=h.a`
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
`,I5=h.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,e2=h.div`
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
`,t2=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,n2=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,a2=h.a`
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
`,i2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,l2=h.h3`
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
`,r2=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,s2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,E0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,T0=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,A0=h.table`
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
`,o2=h.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,c2=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,u2=h.ul`
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
`,d2=h.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,f2=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,h2=h.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,m2=h.a`
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
`;function g2(){return l.jsxs(l.Fragment,{children:[l.jsx(R5,{children:l.jsxs(H5,{children:[l.jsx(B5,{children:"SC Konstanz-Wollmatingen"}),l.jsx(D5,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),l.jsxs(O5,{children:[l.jsx(j0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),l.jsx(j0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),l.jsxs(N5,{children:[l.jsx(Fl,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),l.jsx(U5,{children:l.jsx(L5,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),l.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[l.jsx(I5,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),l.jsxs(s5,{role:"region","aria-label":"Sponsoring-Kategorien",children:[l.jsx(Lu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),l.jsx(Lu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),l.jsx(Lu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),l.jsxs("section",{"aria-labelledby":"premium-pakete",children:[l.jsx(Fl,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),l.jsx(Qi,{packages:Gn.filter(i=>i.price==="15.000 €/Jahr"||i.price==="12.000 €/Jahr"||i.price==="9.500 €/Jahr")})]}),l.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[l.jsx(Fl,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),l.jsx(Qi,{packages:Gn.filter(i=>i.price==="5.000 €/Jahr"||i.price==="800 €/Jahr"||i.price==="2.000 €/Jahr")})]}),l.jsxs("section",{"aria-labelledby":"starter-pakete",children:[l.jsx(Fl,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),l.jsx(Qi,{packages:Gn.filter(i=>i.price==="150 €/pro Spiel"||i.price==="500 €/5 Spiele"||i.price.includes("Ab 100"))}),l.jsxs(e2,{children:[l.jsx(t2,{children:"⚽ Ballspende-Beispiel ansehen"}),l.jsx(n2,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),l.jsx(a2,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),l.jsxs(G5,{children:[l.jsx(Y5,{children:"Warum SC Konstanz-Wollmatingen?"}),l.jsxs(V5,{children:[l.jsxs(w0,{children:[l.jsx(z0,{children:"📊 Erreichte Reichweite"}),l.jsxs(_0,{children:[l.jsx("li",{children:"15+ Heimspiele pro Saison"}),l.jsx("li",{children:"200+ Zuschauer pro Spiel"}),l.jsx("li",{children:"2.500+ Instagram Follower"}),l.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),l.jsxs(w0,{children:[l.jsx(z0,{children:"🏆 Sportlicher Erfolg"}),l.jsxs(_0,{children:[l.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),l.jsx("li",{children:"2. Mannschaften pro Abteilung"}),l.jsx("li",{children:"Cheerleading-Team aktiv"}),l.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),l.jsx(Fl,{children:"Zusätzliche Werbemöglichkeiten"}),l.jsxs(q5,{children:[l.jsx(K5,{children:'Werbung im Stadionmagazin „Heimspiel"'}),l.jsxs(Z5,{children:[l.jsxs(Q5,{children:[l.jsxs(qu,{children:[l.jsx(Ku,{children:"1 Seite (Farbe)"}),l.jsx(Zu,{children:"1.000 €"}),l.jsx(Qu,{children:"DIN A4 (297 × 210 mm)"})]}),l.jsxs(qu,{children:[l.jsx(Ku,{children:"1/2 Seite (Farbe)"}),l.jsx(Zu,{children:"500 €"}),l.jsx(Qu,{children:"DIN A5 (148 × 210 mm)"})]}),l.jsxs(qu,{children:[l.jsx(Ku,{children:"1/4 Seite (Farbe)"}),l.jsx(Zu,{children:"250 €"}),l.jsx(Qu,{children:"DIN A6 (105 × 148 mm)"})]})]}),l.jsx(X5,{children:l.jsxs($5,{children:[l.jsxs(Yu,{children:[l.jsx(Vu,{}),"15 Ausgaben pro Saison"]}),l.jsxs(Yu,{children:[l.jsx(Vu,{}),"ca. 100 Exemplare pro Heimspiel"]}),l.jsxs(Yu,{children:[l.jsx(Vu,{}),"Digitale Version (Social Media & Website)"]})]})})]}),l.jsxs(J5,{children:[l.jsx(W5,{children:"📖 Aktuelle Ausgabe als Beispiel"}),l.jsx(F5,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),l.jsx(P5,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),l.jsxs(i2,{children:[l.jsx(l2,{children:"Werbeflächen auf dem Vereinsbus"}),l.jsx(r2,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),l.jsxs(s2,{children:[l.jsxs(E0,{children:[l.jsx(T0,{children:"Premium-Flächen"}),l.jsxs(A0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Position"}),l.jsx("th",{children:"Sichtbarkeit"}),l.jsx("th",{children:"Preis / Jahr"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Heckfläche (100×80 cm)"}),l.jsx("td",{children:"Sehr hoch"}),l.jsx("td",{children:"1.200 €"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Seitentüren (links/rechts)"}),l.jsx("td",{children:"Hoch"}),l.jsx("td",{children:"je 900 €"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Hintere Seitenflächen"}),l.jsx("td",{children:"Mittel-hoch"}),l.jsx("td",{children:"je 600 €"})]})]})]})]}),l.jsxs(E0,{children:[l.jsx(T0,{children:"Standard-Flächen"}),l.jsxs(A0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Position"}),l.jsx("th",{children:"Sichtbarkeit"}),l.jsx("th",{children:"Preis / Jahr"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),l.jsx("td",{children:"Mittel"}),l.jsx("td",{children:"400 € je Seite"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Frontstoßstange"}),l.jsx("td",{children:"Gering-mittel"}),l.jsx("td",{children:"250 €"})]})]})]})]})]}),l.jsxs(o2,{children:[l.jsx(c2,{children:"Zusatzoptionen:"}),l.jsxs(u2,{children:[l.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),l.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),l.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),l.jsxs(d2,{children:[l.jsx(f2,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),l.jsx(h2,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),l.jsx(m2,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),l.jsx(Oj,{}),l.jsx(Cx,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),l.jsx(Ij,{})]}),l.jsx(Vd,{})]})}const Kd=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],Mx=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Xi={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},p2="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",kx=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],Rx=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Bx=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],x2="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",en={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},b2=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],y2=h.div`
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
`,v2=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,S2=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,j2=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,w2=h.div`
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
`,z2=h.img`
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
`,_2=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,E2=h.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,T2=h.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,A2=h.div`
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
`,C2=h.div`
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
`,M2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,Xu=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,$u=h.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:i})=>i};
  flex-shrink: 0;
`,k2=h.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Dx=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:kt("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:kt("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:kt("herren/herren_16")}],R2=Math.max(...Dx.map(i=>i.value));function B2(){return l.jsxs(y2,{children:[l.jsx(v2,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),l.jsx(S2,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),l.jsx(j2,{children:Dx.map(i=>l.jsxs(w2,{children:[l.jsx(z2,{src:i.image,alt:i.label}),l.jsxs(_2,{children:[l.jsxs(E2,{children:[i.icon," ",i.label]}),l.jsx(T2,{children:l.jsx(A2,{$percent:i.value/R2*100,$gradient:i.gradient})})]}),l.jsxs(C2,{children:[(i.value/1e3).toFixed(0),"k"]})]},i.label))}),l.jsxs(M2,{children:[l.jsxs(Xu,{children:[l.jsx($u,{$color:"#9ca3af"}),l.jsx("span",{children:"Aktuell (Winterpause)"})]}),l.jsxs(Xu,{children:[l.jsx($u,{$color:"#e10073"}),l.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),l.jsxs(Xu,{children:[l.jsx($u,{$color:"#ff6b9d"}),l.jsx("span",{children:"Prognose kommende Saison"})]})]}),l.jsxs(k2,{children:[l.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const D2=h.div`
  width: 100%;
  margin: 2rem 0;
`,O2=h.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,N2=h.table`
  width: 100%;
  border-collapse: collapse;
`,C0=h.th`
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
`,Ga=h.td`
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
`,H2=h.td`
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
`,U2=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,L2=h.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${i=>i.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${i=>i.isVergeben?.8:1};
`,G2=h.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,Y2=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,Ju=h.div`
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
`,M0=h.a`
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
`,V2="sponsoring@sckw.de";function q2({packages:i}){const o=c=>{const f=c.replace(/[^\w\s]/gi,"").trim(),m=encodeURIComponent(`Interesse am Paket "${f}"`);return`mailto:${V2}?subject=${m}`},u=c=>{const f=c.benefits.find(p=>{const j=p.toLowerCase();return j.includes("social media")||j.includes("instagram")});if(!f)return"-";const m=f.toLowerCase();return m.includes("premium")||m.includes("allen")?"ÜBERALL":m.includes("sehr präsent")?"Sehr präsent":m.includes("regelmässig")||m.includes("regelmäßig")?"Regelmäßig":"Standard"};return l.jsxs(D2,{children:[l.jsx(O2,{children:l.jsxs(N2,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(C0,{children:"Paket"}),i.map((c,f)=>l.jsx(C0,{isVergeben:c.status.includes("Vergeben"),children:c.title},f))]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx(Ga,{children:"Preis"}),i.map((c,f)=>l.jsx(H2,{isVergeben:c.status.includes("Vergeben"),children:c.price},f))]}),l.jsxs("tr",{children:[l.jsx(Ga,{children:"Trikot/Banner"}),i.map((c,f)=>{const m=c.benefits.find(p=>p.includes("Trikot")||p.includes("Banner"));return l.jsx(Ga,{children:m?"✅ Ja":"-"},f)})]}),l.jsxs("tr",{children:[l.jsx(Ga,{children:"Social Media"}),i.map((c,f)=>{const m=u(c);return l.jsx(Ga,{isHighlight:m==="ÜBERALL",children:m==="-"?"-":`✅ ${m}`},f)})]}),l.jsxs("tr",{children:[l.jsx(Ga,{children:"Aktion"}),i.map((c,f)=>l.jsx(Ga,{children:l.jsx(M0,{href:c.status.includes("Vergeben")?void 0:o(c.title),isVergeben:c.status.includes("Vergeben"),children:c.status.includes("Vergeben")?"Vergeben":"Anfragen"})},f))]})]})]})}),l.jsx(U2,{children:i.map((c,f)=>{const m=c.status.includes("Vergeben");return l.jsxs(L2,{isVergeben:m,children:[l.jsx(G2,{children:c.title}),l.jsx(Y2,{children:c.price}),l.jsxs(Ju,{children:[l.jsx("span",{children:"Status"}),l.jsx("span",{children:m?"🟥 Vergeben":"🟩 Verfügbar"})]}),l.jsxs(Ju,{children:[l.jsx("span",{children:"Social Media"}),l.jsx("span",{children:u(c)})]}),l.jsxs(Ju,{children:[l.jsx("span",{children:"Vorteile"}),l.jsxs("span",{children:[c.benefits.length," Leistungen"]})]}),l.jsx(M0,{href:m?void 0:o(c.title),isVergeben:m,children:m?"Bereits vergeben":"Jetzt anfragen"})]},f)})})]})}const K2=h.div`
  margin-top: 2.5rem;
`,Z2=h.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,Q2=h.button`
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
`,X2=h.div`
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
`,$2=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,J2=Gn.filter(i=>i.tier==="premium"),W2=Gn.filter(i=>i.tier==="lokal"),F2=Gn.filter(i=>i.tier==="starter");function P2(){const[i,o]=M.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:J2},{key:"lokal",label:"🏢 Lokal",packages:W2},{key:"starter",label:"🌟 Starter",packages:F2}],c=u.find(f=>f.key===i);return l.jsxs(K2,{children:[l.jsx(Z2,{children:u.map(f=>l.jsx(Q2,{$active:i===f.key,onClick:()=>o(f.key),children:f.label},f.key))}),l.jsxs(X2,{children:[c&&l.jsx(q2,{packages:c.packages}),l.jsxs($2,{children:[i==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",i==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",i==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const I2=h.div`
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
`,e3=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,t3=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,n3=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,a3=h.table`
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
`,Wu=h.td`
  font-weight: 700;
  color: #e10073;
`,i3=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,l3=h.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,r3=h.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,s3=h.div`
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
`,o3=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function c3(){const i=Mx;return l.jsxs(I2,{children:[l.jsx(e3,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),l.jsx(t3,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),l.jsx(n3,{children:l.jsxs(a3,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Leistung / Erfolg"}),l.jsx("th",{children:"Starter"}),l.jsx("th",{children:"Premium"}),l.jsx("th",{children:"Kombi (Beispiel)"})]})}),l.jsxs("tbody",{children:[i.map((o,u)=>l.jsxs("tr",{children:[l.jsx("td",{children:o.label}),l.jsx(Wu,{children:o.starter}),l.jsx(Wu,{children:o.premium}),l.jsx(Wu,{children:o.kombi})]},u)),l.jsxs("tr",{children:[l.jsx("td",{children:"Erwartete Kosten"}),l.jsx("td",{children:Xi.starter}),l.jsx("td",{children:Xi.premium}),l.jsx("td",{children:Xi.kombi})]})]})]})}),l.jsx(i3,{children:["Starter","Premium","Kombi"].map(o=>l.jsxs(l3,{children:[l.jsx(r3,{children:o}),i.map((u,c)=>l.jsxs(s3,{children:[l.jsx("span",{children:u.label}),l.jsx("span",{children:o==="Starter"?u.starter:o==="Premium"?u.premium:u.kombi})]},c))]},o))}),l.jsx(o3,{children:p2})]})}const u3=h.div`
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
`,d3=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,f3=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,h3=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,m3=h.table`
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
`,g3=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,p3=h.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,x3=h.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,b3=h.div`
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
`,y3=h.div`
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
`,v3=h.div`
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
`;function S3(){const i=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return l.jsxs(u3,{children:[l.jsx(d3,{children:"👤 Spielerpatenschaften (diskret)"}),l.jsx(f3,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),l.jsx(h3,{children:l.jsxs(m3,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Merkmal"}),l.jsx("th",{children:"Bronze"}),l.jsx("th",{children:"Silber"}),l.jsx("th",{children:"Gold"})]})}),l.jsx("tbody",{children:i.map((o,u)=>l.jsxs("tr",{children:[l.jsx("td",{children:o.label}),l.jsx("td",{children:o.bronze}),l.jsx("td",{children:o.silber}),l.jsx("td",{children:o.gold})]},u))})]})}),l.jsx(g3,{children:["Bronze","Silber","Gold"].map(o=>l.jsxs(p3,{children:[l.jsx(x3,{children:o}),i.map((u,c)=>l.jsxs(b3,{children:[l.jsx("span",{children:u.label}),l.jsx("span",{children:o==="Bronze"?u.bronze:o==="Silber"?u.silber:u.gold})]},c))]},o))}),l.jsxs(y3,{children:[l.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),l.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',l.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',l.jsx("em",{children:"[Foto vom Torjubel]"})]}),l.jsxs(v3,{children:[l.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const j3=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,w3=h.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,z3=h.a`
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
`,_3=h.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,E3=h.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,T3=h.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,A3=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,C3=h.a`
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
`,M3=h.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,k3=h.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,R3={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function B3(){const{hauptsponsor:i,partners:o}=R3;return l.jsxs(j3,{children:[l.jsx(w3,{children:l.jsxs(z3,{href:i.website,target:"_blank",rel:"noopener noreferrer",children:[l.jsx(_3,{children:"Hauptsponsor"}),l.jsx(E3,{src:i.logo,alt:i.name}),l.jsx(T3,{children:i.name})]})}),l.jsx(A3,{children:o.map((u,c)=>l.jsxs(C3,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[l.jsx(M3,{src:u.logo,alt:u.name}),l.jsx(k3,{children:u.name})]},c))})]})}const Hn=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Vi=h.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,Ts=h(Vi)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`,ha=h.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,ma=h.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,ga=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,D3=h.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,O3=h.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:i})=>i}) center/cover no-repeat;
  opacity: ${({$active:i})=>i?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,N3=h.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,H3=h.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,U3=h.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,L3=h.p`
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
`,G3=h.div`
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
`,Y3=h.div`
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
`,V3=h.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,q3=h.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,K3=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,k0=h.a`
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
`,Z3=h.div`
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
`,As=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Cs=h.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,Ms=h.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,Q3=h.div`
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
`,X3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Fu=h.div`
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
`,Pu=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,Iu=h.div`
  padding: 1.5rem 1.25rem 2rem;
`,ed=h.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,td=h.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`,ks=h.div`
  margin-top: 2.5rem;
`,Rs=h.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,nd=h.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,$3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,ad=h.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`,J3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,id=h.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,ld=h.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,rd=h.div`
  padding: 1.25rem 1rem 1.5rem;
`,sd=h.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,od=h.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,R0=h.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,W3=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,B0=h.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,F3=h.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,P3=h.table`
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
`,I3=h.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,ew=h.div`
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
`,tw=Kd,nw=Gn.filter(i=>i.tier==="premium"),aw=Gn.filter(i=>i.tier==="lokal"),iw=Gn.filter(i=>i.tier==="starter");function lw(){const i=[kt("herren/herren_6"),kt("herren/herren_16"),kt("herren/herren_5"),kt("herren/herren_14")].filter(Boolean),[o,u]=M.useState(0);return M.useEffect(()=>{if(i.length<=1)return;const c=setInterval(()=>{u(f=>(f+1)%i.length)},6e3);return()=>clearInterval(c)},[i.length]),l.jsxs(l.Fragment,{children:[l.jsxs(D3,{children:[i.map((c,f)=>l.jsx(O3,{$bg:c,$active:f===o},f)),l.jsx(N3,{}),l.jsxs(H3,{children:[l.jsx(U3,{children:"Sponsoring, das messbar wirkt"}),l.jsxs(L3,{children:["In der Winterpause erzielen wir bereits"," ",l.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",l.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),l.jsx(G3,{children:tw.map(c=>l.jsxs(Y3,{children:[l.jsx(V3,{children:c.value}),l.jsx(q3,{children:c.label})]},c.label))}),l.jsxs(K3,{children:[l.jsx(k0,{href:"#kontakt",$primary:!0,onClick:c=>{c.preventDefault();const f=document.getElementById("kontakt");f&&f.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),l.jsx(k0,{href:"#pakete",onClick:c=>{c.preventDefault();const f=document.getElementById("pakete");f&&f.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),l.jsx(Ts,{children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"Warum sich Sponsoring bei uns lohnt"}),l.jsx(ga,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),l.jsxs(X3,{children:[l.jsxs(Fu,{children:[l.jsx(Pu,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),l.jsxs(Iu,{children:[l.jsx(ed,{children:"Sichtbarkeit, die bleibt"}),l.jsx(td,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),l.jsxs(Fu,{children:[l.jsx(Pu,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),l.jsxs(Iu,{children:[l.jsx(ed,{children:"Ihre Kunden sind hier"}),l.jsx(td,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),l.jsxs(Fu,{children:[l.jsx(Pu,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),l.jsxs(Iu,{children:[l.jsx(ed,{children:"Doppelte Wirkung"}),l.jsx(td,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),l.jsx(Vi,{children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"Diese Unternehmen sind bereits Partner"}),l.jsx(ga,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),l.jsx(B3,{})]})}),l.jsx(Ts,{id:"pakete",children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"Finden Sie Ihr perfektes Paket"}),l.jsx(ga,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, individuell auf Ihr Unternehmen zugeschnitten."})]}),l.jsxs(ks,{children:[l.jsx(Rs,{children:"Premium-Partnerschaften"}),l.jsx(Qi,{packages:nw})]}),l.jsxs(ks,{children:[l.jsx(Rs,{children:"Pakete im Vergleich"}),l.jsx(P2,{})]}),l.jsx(c3,{}),l.jsx(S3,{}),l.jsxs(ks,{children:[l.jsx(Rs,{children:"Lokale Werbemöglichkeiten"}),l.jsx(Qi,{packages:aw}),l.jsx(nd,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),l.jsxs(ks,{children:[l.jsx(Rs,{children:"Starter & Spieltag"}),l.jsx(Qi,{packages:iw})]})]})}),l.jsx(Vi,{id:"reichweite",children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"So viele Menschen erreichen Sie"}),l.jsx(ga,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),l.jsxs(Z3,{children:[l.jsxs(As,{children:[l.jsx(Cs,{children:"32.000"}),l.jsx(Ms,{children:"Reichweite / 30 Tage"})]}),l.jsxs(As,{children:[l.jsx(Cs,{children:"250.000"}),l.jsx(Ms,{children:"Reichweite / 90 Tage"})]}),l.jsxs(As,{children:[l.jsx(Cs,{children:"50-80k"}),l.jsx(Ms,{children:"Pro Monat in Saison"})]}),l.jsxs(As,{children:[l.jsx(Cs,{children:"500-800k"}),l.jsx(Ms,{children:"Saisonreichweite (konservativ)"})]})]}),l.jsxs(Q3,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",l.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),l.jsx(Ts,{children:l.jsx(Hn,{children:l.jsx(B2,{})})}),l.jsx(Vi,{children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"Was Sie auf Social Media bekommen"}),l.jsx(ga,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),l.jsxs($3,{children:[l.jsx(ad,{children:"📱 Feed-Posts mit Ihrem Logo"}),l.jsx(ad,{children:"📸 Stories & Erwähnungen"}),l.jsx(ad,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),l.jsx(nd,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),l.jsx(Ts,{id:"buswerbung",children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"Mobile Werbung auf unserem Vereinsbus"}),l.jsx(ga,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),l.jsxs(W3,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[l.jsxs("div",{style:{background:"#f8f9fa",borderRadius:12,padding:"2rem",marginBottom:"1.5rem",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🚌"}),l.jsx("div",{style:{color:"#999",fontSize:"0.95rem"},children:"Foto des Vereinsbusses folgt in Kürze"})]}),l.jsx(B0,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),l.jsx(F3,{children:l.jsxs(P3,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Fläche"}),l.jsx("th",{children:"Größe (ca.)"}),l.jsx("th",{children:"Preis/Jahr"})]})}),l.jsx("tbody",{children:[...kx,...Rx].map(c=>l.jsxs("tr",{children:[l.jsx("td",{children:c.position}),l.jsx("td",{children:c.groesse}),l.jsx("td",{children:l.jsx("strong",{children:c.preis})})]},c.position))})]})}),l.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[l.jsx(B0,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),l.jsx(I3,{children:Bx.map((c,f)=>l.jsx("li",{children:c},f))})]})]}),l.jsx(nd,{children:x2})]})}),l.jsx(Vi,{children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"Ihre Marke in Aktion"}),l.jsx(ga,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),l.jsxs(J3,{children:[l.jsxs(id,{children:[l.jsx(ld,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),l.jsxs(rd,{children:[l.jsx(sd,{children:"Stadionmagazin"}),l.jsx(od,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),l.jsx(R0,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),l.jsxs(id,{children:[l.jsx(ld,{src:kt("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),l.jsxs(rd,{children:[l.jsx(sd,{children:"Bandenwerbung"}),l.jsx(od,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),l.jsxs(id,{children:[l.jsx(ld,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),l.jsxs(rd,{children:[l.jsx(sd,{children:"Ballspende"}),l.jsx(od,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),l.jsx(R0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),l.jsx(Vi,{children:l.jsxs(Hn,{children:[l.jsxs(ha,{children:[l.jsx(ma,{children:"In 4 Schritten zum Sponsoring-Start"}),l.jsx(ga,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),l.jsxs(ew,{children:[l.jsxs(Bs,{children:[l.jsx(Ds,{children:"1. Kontakt"}),l.jsx(Os,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),l.jsxs(Bs,{children:[l.jsx(Ds,{children:"2. Bedarf"}),l.jsx(Os,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),l.jsxs(Bs,{children:[l.jsx(Ds,{children:"3. Angebot"}),l.jsx(Os,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),l.jsxs(Bs,{children:[l.jsx(Ds,{children:"4. Umsetzung"}),l.jsx(Os,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),l.jsx(Cx,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:en.email,isEmail:!0},{icon:"📍",title:"Adresse",content:en.vollAdresse}]}),l.jsx(Vd,{})]})}function rw(){return ZS(),!0}const sw=bv`
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
`,D0=h.div`
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
`,O0=h.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,N0=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ns=h.button`
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
`,ow=h.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,cw=h.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,$t=h.section`
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
`,nn=h.div`
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
`,an=h.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,ln=h.div`text-align: center; margin-bottom: 6mm;`,Jt=h.img`height: 20mm;`,rn=h.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Xt=h.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,gn=h.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,rt=h.p`
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
`,Rt=h.ul`padding: 0; margin: 3mm 0;`,Za=h.div`
  display: ${i=>i.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,cd=h.div`margin-bottom: 4mm;`,Hs=h.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,ud=h.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${i=>(i.$lines||1)*8}mm;
  background: #fafafa;
`,uw=h.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Ox=h.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,$i=h.div`
  text-align: ${i=>i.$right?"right":i.$center?"center":"left"};
`;function Sa(){return l.jsxs(uw,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",l.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function bn(){return l.jsxs(Ox,{children:[l.jsxs($i,{children:[l.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),l.jsx("br",{}),"Schleyerweg 5",l.jsx("br",{}),"78467 Konstanz"]}),l.jsxs($i,{$center:!0,children:[en.email,l.jsx("br",{}),"partner.sckw.de"]}),l.jsxs($i,{$right:!0,children:["Sparkasse Bodensee",l.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",l.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const H0=kt("herren/herren_0"),dd=kt("herren/herren_6"),U0=kt("herren/herren_1"),dw=kt("herren/herren_14"),Fs=h.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function fw(){return l.jsx($t,{children:l.jsxs("div",{style:{background:"linear-gradient(140deg, #1a365d 0%, #2d5a87 45%, #c41e3a 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20mm",textAlign:"center",color:"#fff",position:"relative"},children:[l.jsx(Jt,{src:"/logo.svg",alt:"SCKW",style:{height:"55mm",marginBottom:"14mm"}}),l.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"0 0 6mm",letterSpacing:"-0.03em"},children:"SPONSORING"}),l.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 18mm"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",l.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm"},children:Kd.slice(0,2).map(i=>l.jsxs("div",{style:{background:"rgba(255,255,255,0.14)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(10px)"},children:[l.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:i.value}),l.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:i.label})]},i.label))}),l.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.7},children:"Saison 2025/26 · partner.sckw.de"})]})})}function hw(){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"WARUM SCKW?"}),l.jsx(Xt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Kd.map(i=>l.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[l.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:i.value}),l.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:i.label})]},i.label))}),l.jsx(gn,{children:"Was Sie bei uns erreichen"}),l.jsxs(Rt,{children:[l.jsx(P,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),l.jsx(P,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),l.jsx(P,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),l.jsx(P,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),l.jsx(gn,{children:"Der Verein auf einen Blick"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[l.jsxs("div",{children:[l.jsxs(rt,{children:[l.jsx("strong",{children:"Gegründet:"})," 1912"]}),l.jsxs(rt,{children:[l.jsx("strong",{children:"Mitglieder:"})," 500+"]}),l.jsxs(rt,{children:[l.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),l.jsxs("div",{children:[l.jsxs(rt,{children:[l.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),l.jsxs(rt,{children:[l.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),l.jsxs(rt,{children:[l.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),H0&&l.jsx(Fs,{src:H0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),l.jsx(bn,{})]})]})}function mw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"HAUPTSPONSOR"}),l.jsx(Xt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),l.jsxs(Rt,{children:[l.jsx(P,{children:"Trikotwerbung auf der Brust"}),l.jsx(P,{children:"Business Club Mitgliedschaft"}),l.jsx(P,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),l.jsx(P,{children:"1/1 seitiges Inserat im SC Magazin"}),l.jsx(P,{children:"10 Saisonkarten"}),l.jsx(P,{children:"Werbeauftritte nach Absprache"}),l.jsx(P,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),l.jsx(P,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),l.jsx(P,{children:"Logo / Namenszug auf den Fahrzeugen"}),l.jsx(P,{children:"Logo / Link auf der Vereinshomepage"}),l.jsx(P,{children:"weitere Möglichkeiten nach Absprache"})]}),l.jsxs(Za,{$hidden:!i,children:["Beitrag: ",l.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function gw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"CO-SPONSOR"}),l.jsx(Xt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),l.jsxs(Rt,{children:[l.jsx(P,{children:"Werbung auf den Trainingsanzügen"}),l.jsx(P,{children:"Business Club Mitgliedschaft"}),l.jsx(P,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),l.jsx(P,{children:"1/2 seitiges Inserat im SC Magazin"}),l.jsx(P,{children:"5 Saisonkarten"}),l.jsx(P,{children:"Werbeauftritte nach Absprache"}),l.jsx(P,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),l.jsx(P,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),l.jsx(P,{children:"Logo / Namenszug auf den Fahrzeugen"}),l.jsx(P,{children:"Logo / Link auf der Vereinshomepage"}),l.jsx(P,{children:"weitere Möglichkeiten nach Absprache"})]}),l.jsxs(Za,{$hidden:!i,children:["Beitrag: ",l.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function pw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"SILBER-PARTNER"}),l.jsx(Xt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),l.jsxs(Rt,{children:[l.jsx(P,{children:"1 Bande (5×2 m) am Gelände"}),l.jsx(P,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),l.jsx(P,{children:"Werbeplane am Gelände"}),l.jsx(P,{children:"Vereinsplakate + Eventsichtbarkeit"}),l.jsx(P,{children:"Website: Logo auf Startseite"})]}),l.jsxs(Za,{$hidden:!i,children:["Beitrag: ",l.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),l.jsx(gn,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),l.jsx(Xt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),l.jsxs(Rt,{children:[l.jsx(P,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),l.jsx(P,{children:"Website: Logo auf der Startseite"}),l.jsx(P,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),l.jsx(P,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),l.jsxs(Za,{$hidden:!i,children:["Beitrag: ",l.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function xw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"BANDENWERBUNG"}),l.jsx(Xt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),l.jsx(Rt,{children:l.jsx(P,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),l.jsxs(rt,{children:[l.jsx("strong",{children:"Platzierung:"}),l.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",l.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",l.jsx("br",{}),l.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),l.jsxs(Za,{$hidden:!i,children:["Beitrag: ",l.jsx("strong",{children:"ab 800€ pro Saison"})]}),U0&&l.jsx(Fs,{src:U0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function bw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:'WERBUNG IM „HEIMSPIEL"'}),l.jsx(Xt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),l.jsxs(Rt,{children:[l.jsx(P,{children:"15 Ausgaben pro Saison"}),l.jsx(P,{children:"ca. 100 Exemplare pro Heimspiel"}),l.jsx(P,{children:"Digitale Version (Social Media & Webseite)"}),l.jsx(P,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),l.jsx(P,{children:"DIN A4 Stadionmagazin"}),l.jsx(P,{children:"wird ausgelegt in diversen Arztpraxen"})]}),i&&l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(o=>l.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:o.size}),l.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),l.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:o.price})]},o.size))}),i&&l.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[l.jsx("strong",{children:"Maße"}),l.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",l.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",l.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function yw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"SPIELTAG-SPONSORING"}),l.jsx(Xt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),l.jsx(gn,{children:"Ballspende"}),l.jsx(rt,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),l.jsxs(Rt,{children:[l.jsx(P,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),l.jsx(P,{children:"Namensnennung in der Halbzeitpause"}),l.jsx(P,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),l.jsx(P,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),l.jsxs(Za,{$hidden:!i,children:["Beitrag: ",l.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",l.jsx("strong",{children:"500€"})," (statt 750€)"]}),l.jsx(gn,{children:"Spielpräsentator"}),l.jsx(rt,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),l.jsxs(Rt,{children:[l.jsx(P,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),l.jsx(P,{children:"Namentliche Erwähnung im SC Magazin"}),l.jsx(P,{children:"Social Media Erwähnung am Spieltag"})]}),l.jsxs(Za,{$hidden:!i,children:["Beitrag: ",l.jsx("strong",{children:"ab 250€ pro Spiel"})]}),dd&&l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[l.jsx(Fs,{src:dd,alt:"Action",style:{height:"48mm"}}),l.jsx(Fs,{src:dw||dd,alt:"Jubel",style:{height:"48mm"}})]}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function vw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"BUSWERBUNG"}),l.jsx(Xt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),i&&l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),l.jsx("tbody",{children:[...kx,...Rx].map((o,u)=>l.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.position}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.groesse}),i&&l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:o.preis})]},o.position))})]}),l.jsx(gn,{children:"Zusatzoptionen"}),l.jsx(Rt,{children:Bx.map((o,u)=>l.jsx(P,{children:o},u))}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function Sw({showPrices:i}){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{children:"PRÄMIEN-MODELL"}),l.jsx(Xt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),i&&l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),l.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),l.jsxs("tbody",{children:[Mx.map((o,u)=>l.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:o.label}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.starter}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.premium}),l.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.kombi})]},o.label)),l.jsxs("tr",{style:{background:"#f0f9ff"},children:[l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Xi.starter}),l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Xi.premium}),l.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Xi.kombi})]})]})]}),l.jsx(gn,{children:"So funktioniert's"}),l.jsxs(Rt,{children:[l.jsx(P,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),l.jsx(P,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),l.jsx(P,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),l.jsx(P,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),l.jsx(gn,{children:"Inkludierte Leistungen"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[l.jsxs("div",{children:[l.jsx(rt,{children:l.jsx("strong",{children:"Starter:"})}),l.jsxs(Rt,{children:[l.jsx(P,{children:"Stadionansage bei Erfolg"}),l.jsx(P,{children:"Logo auf Website"})]})]}),l.jsxs("div",{children:[l.jsx(rt,{children:l.jsx("strong",{children:"Premium:"})}),l.jsxs(Rt,{children:[l.jsx(P,{children:"+ Social Media Post bei Erfolg"}),l.jsx(P,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),l.jsx(Sa,{}),l.jsx(bn,{})]})]})}function jw(){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),l.jsx(Xt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(i=>l.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[l.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:i.n}),l.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:i.t}),l.jsx(rt,{style:{margin:0,fontSize:"9pt"},children:i.d})]},i.n))}),l.jsx(gn,{children:"Kontakt"}),l.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),l.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:en.email})]}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),l.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),l.jsxs("div",{style:{gridColumn:"1 / -1"},children:[l.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),l.jsxs("div",{style:{fontSize:"11pt"},children:[en.adresse.name," · ",en.adresse.strasse," · ",en.adresse.plz," ",en.adresse.ort]})]})]}),l.jsx(gn,{children:"Gesprächsleitfaden"}),l.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[l.jsx(rt,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),l.jsx(rt,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),l.jsx(rt,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),l.jsx(rt,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),l.jsx(bn,{})]})]})}function ww(){return l.jsxs($t,{children:[l.jsx(nn,{}),l.jsxs(an,{children:[l.jsx(ln,{children:l.jsx(Jt,{src:"/logo.svg"})}),l.jsx(rn,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),l.jsxs(Xt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",en.email," senden."]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[l.jsxs(cd,{children:[l.jsx(Hs,{children:"Datum:"}),l.jsx(ud,{$lines:1})]}),l.jsxs(cd,{children:[l.jsx(Hs,{children:"Gesprächsführer (Helfer):"}),l.jsx(ud,{$lines:1})]})]}),b2.map((i,o)=>l.jsxs(cd,{children:[l.jsxs(Hs,{children:[i.label,":"]}),l.jsx(ud,{$lines:i.lines})]},o)),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(i=>l.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:l.jsxs(Hs,{style:{marginBottom:0},children:["☐ ",i]})},i))}),l.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:l.jsxs(rt,{style:{margin:0,fontSize:"8pt"},children:[l.jsx("strong",{children:"Schnellreferenz:"})," ",en.email," · partner.sckw.de ·"," ",en.vollAdresse.replace(/\n/g," · ")]})}),l.jsxs(Ox,{style:{marginTop:"auto"},children:[l.jsx($i,{children:l.jsx("strong",{children:"Internes Dokument"})}),l.jsx($i,{$center:!0}),l.jsx($i,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const pa=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>l.jsx(fw,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>l.jsx(hw,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:i=>l.jsx(mw,{showPrices:i})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:i=>l.jsx(gw,{showPrices:i})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:i=>l.jsx(pw,{showPrices:i})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:i=>l.jsx(xw,{showPrices:i})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:i=>l.jsx(bw,{showPrices:i})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:i=>l.jsx(yw,{showPrices:i})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:i=>l.jsx(vw,{showPrices:i})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:i=>l.jsx(Sw,{showPrices:i})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>l.jsx(jw,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>l.jsx(ww,{})}],zw=h.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,_w=h.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,Ew=h.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,Tw=h.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,Aw=h.button`
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
`,L0=h.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,G0=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,Y0=h.label`
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
`,Cw=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Ri=h.button`
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
`,Mw=h.button`
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
`,kw=h.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function Rw(){const i=rw(),[o,u]=M.useState(!0),[c,f]=M.useState(()=>new Set(pa.filter(O=>O.group==="broschüre").map(O=>O.id))),[m,p]=M.useState("dashboard");if(!i)return l.jsx(qs,{to:"/",replace:!0});const j=O=>{f(Y=>{const L=new Set(Y);return L.has(O)?L.delete(O):L.add(O),L})},y=()=>f(new Set(pa.map(O=>O.id))),x=()=>f(new Set),T=()=>f(new Set(pa.filter(O=>O.group==="broschüre").map(O=>O.id))),w=()=>f(new Set(pa.map(O=>O.id))),N=()=>f(new Set(["cover","why","spieltag","banden"])),G=()=>f(new Set(["cover","why","haupt","co","silber"])),V=pa.filter(O=>c.has(O.id)),q=pa.filter(O=>O.group==="broschüre"),K=pa.filter(O=>O.group==="helfer");return m==="preview"?l.jsxs(l.Fragment,{children:[l.jsx(sw,{}),l.jsxs(D0,{children:[l.jsxs(O0,{children:["Vorschau · ",V.length," Seiten"]}),l.jsxs(N0,{children:[l.jsx(Ns,{$active:o,onClick:()=>u(O=>!O),children:o?"Preise ✓":"Preise ✗"}),l.jsx(Ns,{onClick:()=>p("dashboard"),children:"Zurück"}),l.jsx(Ns,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),l.jsxs(ow,{children:[l.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',l.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),l.jsx(cw,{children:V.map(O=>l.jsx("div",{children:O.render(o)},O.id))})]}):l.jsxs(l.Fragment,{children:[l.jsxs(D0,{children:[l.jsx(O0,{children:"Sponsoring-Kit · SCKW"}),l.jsx(N0,{children:l.jsx(Ns,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),l.jsxs(zw,{children:[l.jsx(_w,{children:"Sponsoring-Kit zusammenstellen"}),l.jsx(Ew,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),l.jsxs(Tw,{children:[l.jsx(Aw,{$on:o,onClick:()=>u(O=>!O),children:o?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),l.jsxs(kw,{children:[c.size," von ",pa.length," Seiten ausgewählt"]})]}),l.jsxs(Cw,{children:[l.jsx(Ri,{onClick:y,children:"Alles"}),l.jsx(Ri,{onClick:T,children:"Broschüre komplett"}),l.jsx(Ri,{onClick:w,children:"Komplett-Kit (+ Helfer)"}),l.jsx(Ri,{onClick:G,children:"Nur Premium-Pakete"}),l.jsx(Ri,{onClick:N,children:"Starter-Paket"}),l.jsx(Ri,{onClick:x,children:"Keine"})]}),l.jsx(L0,{children:"Broschüre"}),l.jsx(G0,{children:q.map(O=>l.jsxs(Y0,{$checked:c.has(O.id),children:[l.jsx("input",{type:"checkbox",checked:c.has(O.id),onChange:()=>j(O.id)}),O.label]},O.id))}),l.jsx(L0,{children:"Helfer-Anhang"}),l.jsx(G0,{children:K.map(O=>l.jsxs(Y0,{$checked:c.has(O.id),children:[l.jsx("input",{type:"checkbox",checked:c.has(O.id),onChange:()=>j(O.id)}),O.label]},O.id))}),l.jsxs(Mw,{disabled:c.size===0,onClick:()=>p("preview"),children:["Vorschau & Drucken (",c.size," Seiten)"]})]})]})}const Bw=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],Dw=h.section`
  background: url("${qd("herren",1)}") center/cover;
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
`,Ow=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,Nw=h.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,Hw=h.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,Uw=h.main`
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
`,Lw=h.section`
  margin-bottom: 4rem;
`,Gw=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,Yw=h.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Vw=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,qw=h.div`
  text-align: center;
  margin-bottom: 3rem;
`,Kw=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,Zw=h.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,Qw=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Xw=h.div`
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
`,$w=h.div`
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
`,Jw=h.div`
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
`,Ww=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,Fw=h.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Pw=h.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,Iw=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,ez=h.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,tz=h.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,nz=h.button`
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
`,az=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,iz=h.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,lz=h.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,rz=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Bi=h.div`
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
`,V0=h.div`
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
`,Di=h.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Oi=h.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ni=h.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,Hi=h.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Ne=h.li`
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
`,Ui=h.button`
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
`,sz=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,oz=h.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,cz=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,uz=h.div`
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
`,dz=h.a`
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
`,fz=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,hz=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,mz=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Li=h.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Gi=h.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,Yi=h.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function gz(){return l.jsxs(l.Fragment,{children:[l.jsx(Dw,{children:l.jsxs(Ow,{children:[l.jsx(Nw,{children:"SCKW Jobbörse"}),l.jsx(Hw,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),l.jsxs(Uw,{children:[l.jsxs(Lw,{children:[l.jsx(Gw,{children:"Willkommen bei der SCKW Jobbörse"}),l.jsx(Yw,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),l.jsxs(Vw,{children:[l.jsxs(qw,{children:[l.jsx(Kw,{children:"So könnte es aussehen"}),l.jsx(Zw,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),l.jsx(Qw,{children:Bw.map(i=>l.jsxs(Xw,{children:[i.isExample&&l.jsx($w,{children:"MUSTER"}),l.jsx(Jw,{children:l.jsx(Ww,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:o=>{o.currentTarget.style.display="none",o.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",o.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),l.jsx(Fw,{children:i.title}),l.jsx(Pw,{children:i.company}),l.jsx(Iw,{children:i.tags.map((o,u)=>l.jsx(ez,{children:o},u))}),l.jsx(tz,{children:i.description}),l.jsx(nz,{children:"Mehr erfahren"})]},i.id))})]}),l.jsxs(az,{children:[l.jsx(iz,{children:"Preise für Stellenausschreibungen"}),l.jsx(lz,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),l.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),l.jsxs(rz,{children:[l.jsxs(Bi,{children:[l.jsx(Di,{children:"Basis"}),l.jsx(Oi,{children:"149 €"}),l.jsx(Ni,{children:"netto / Anzeige"}),l.jsxs(Hi,{children:[l.jsx(Ne,{children:"30 Tage auf Website (Jobbereich)"}),l.jsx(Ne,{children:"Firmenlogo und Link"}),l.jsx(Ne,{children:"Detaillierte Stellenbeschreibung"}),l.jsx(Ne,{children:"Bewerbermanagement"})]}),l.jsx(Ui,{className:"secondary",children:"Basis wählen"})]}),l.jsxs(Bi,{className:"popular",children:[l.jsx(V0,{children:"BELIEBT"}),l.jsx(Di,{children:"Standard"}),l.jsx(Oi,{children:"229 €"}),l.jsx(Ni,{children:"netto / Anzeige"}),l.jsxs(Hi,{children:[l.jsx(Ne,{children:"Alle Basis-Features"}),l.jsx(Ne,{children:"1 Social Media Post"}),l.jsx(Ne,{children:"Instagram + Facebook Reichweite"}),l.jsx(Ne,{children:"Newsletter-Erwähnung"})]}),l.jsx(Ui,{children:"Standard wählen"})]}),l.jsxs(Bi,{children:[l.jsx(Di,{children:"Boosted"}),l.jsx(Oi,{children:"349 €"}),l.jsx(Ni,{children:"netto / Anzeige"}),l.jsxs(Hi,{children:[l.jsx(Ne,{children:"Alle Standard-Features"}),l.jsx(Ne,{children:"Instagram Story"}),l.jsx(Ne,{children:"Stadionmagazin-Erwähnung"}),l.jsx(Ne,{children:"Prioritäre Platzierung"})]}),l.jsx(Ui,{className:"secondary",children:"Boosted wählen"})]})]}),l.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),l.jsxs(sz,{children:[l.jsxs(Bi,{children:[l.jsx(Di,{children:"Job Flat SMALL"}),l.jsx(Oi,{children:"799 €"}),l.jsx(Ni,{children:"netto / Jahr"}),l.jsxs(Hi,{children:[l.jsx(Ne,{children:"Bis zu 6 Anzeigen im Jahr"}),l.jsx(Ne,{children:"6 Social Media Posts"}),l.jsx(Ne,{children:"Website-Präsenz"}),l.jsx(Ne,{children:"Newsletter-Integration"})]}),l.jsx(Ui,{className:"secondary",children:"Small Flat"})]}),l.jsxs(Bi,{className:"popular",children:[l.jsx(V0,{children:"EMPFOHLEN"}),l.jsx(Di,{children:"Job Flat MEDIUM"}),l.jsx(Oi,{children:"1.199 €"}),l.jsx(Ni,{children:"netto / Jahr"}),l.jsxs(Hi,{children:[l.jsx(Ne,{children:"Bis zu 12 Anzeigen im Jahr"}),l.jsx(Ne,{children:"Stadionmagazin-Präsenz"}),l.jsx(Ne,{children:"Social Media Posts"}),l.jsx(Ne,{children:"Stories & Highlights"})]}),l.jsx(Ui,{children:"Medium Flat"})]}),l.jsxs(Bi,{children:[l.jsx(Di,{children:"Job Flat PARTNER"}),l.jsx(Oi,{children:"1.499 €"}),l.jsx(Ni,{children:"netto / Jahr"}),l.jsxs(Hi,{children:[l.jsx(Ne,{children:"Unbegrenzte Anzeigen"}),l.jsx(Ne,{children:"Erwähnung bei Heimspielen"}),l.jsx(Ne,{children:'"Top Partner" Sichtbarkeit'}),l.jsx(Ne,{children:"Prioritärer Support"})]}),l.jsx(Ui,{className:"secondary",children:"Partner Flat"})]})]}),l.jsxs(oz,{children:[l.jsx(cz,{children:"➕ Zusatzoptionen"}),l.jsxs(uz,{children:[l.jsxs(fd,{children:[l.jsx(hd,{children:"Social Story"}),l.jsx(md,{children:"39 €"}),l.jsx(gd,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),l.jsxs(fd,{children:[l.jsx(hd,{children:"Designservice"}),l.jsx(md,{children:"59 €"}),l.jsx(gd,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),l.jsxs(fd,{children:[l.jsx(hd,{children:"Stadionmagazin"}),l.jsx(md,{children:"99 €"}),l.jsx(gd,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),l.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:l.jsx(dz,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),l.jsxs(fz,{children:[l.jsx(hz,{children:"🎯 Warum SCKW Jobbörse?"}),l.jsxs(mz,{children:[l.jsxs(Li,{children:[l.jsx(Gi,{children:"🏠"}),l.jsxs(Yi,{children:[l.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),l.jsxs(Li,{children:[l.jsx(Gi,{children:"👥"}),l.jsxs(Yi,{children:[l.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),l.jsxs(Li,{children:[l.jsx(Gi,{children:"💰"}),l.jsxs(Yi,{children:[l.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),l.jsxs(Li,{children:[l.jsx(Gi,{children:"📈"}),l.jsxs(Yi,{children:[l.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),l.jsxs(Li,{children:[l.jsx(Gi,{children:"⚡"}),l.jsxs(Yi,{children:[l.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),l.jsxs(Li,{children:[l.jsx(Gi,{children:"🤲"}),l.jsxs(Yi,{children:[l.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),l.jsx(Vd,{})]})}h.div`
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
  width: ${i=>Math.min(i.$progress,100)}%;
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
  background: url("${qd("herren",18)}") center/cover;
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
  opacity: ${i=>i.$isActive?1:0};
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
  background: ${i=>i.$isActive?"#fff":"rgba(255, 255, 255, 0.5)"};
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
`;Ax();const pz=!1;function xz(){return l.jsx(GS,{children:l.jsxs(gS,{children:[l.jsx(ba,{path:"/",element:l.jsxs(l.Fragment,{children:[l.jsx(Es,{}),l.jsx(qs,{to:"/sponsoring",replace:!0})]})}),l.jsx(ba,{path:"/sponsoring",element:l.jsxs(l.Fragment,{children:[l.jsx(Es,{}),l.jsx(lw,{})]})}),l.jsx(ba,{path:"/sponsoring-v2",element:l.jsx(qs,{to:"/sponsoring",replace:!0})}),l.jsx(ba,{path:"/sponsoring-v1",element:l.jsxs(l.Fragment,{children:[l.jsx(Es,{}),l.jsx(g2,{})]})}),l.jsx(ba,{path:"/sponsoring-handoff",element:l.jsx(Rw,{})}),l.jsx(ba,{path:"/jobs",element:l.jsxs(l.Fragment,{children:[l.jsx(Es,{}),l.jsx(gz,{})]})}),pz,l.jsx(ba,{path:"*",element:l.jsx(qs,{to:"/sponsoring",replace:!0})})]})})}const bz={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");gy.createRoot(document.getElementById("root")).render(l.jsx(M.StrictMode,{children:l.jsx(gv,{theme:bz,children:l.jsx(xz,{})})}));
